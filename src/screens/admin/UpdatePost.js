import React, {useState, useEffect} from 'react';
import {Paper, Button, TextField,  Input, IconButton, InputBase,Chip, Select, MenuItem, InputLabel } from '@material-ui/core'
import {ArrowForwardIosRounded} from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";
import {storage} from "../../config";

const useStyles = makeStyles((theme) => ({
    paper:{
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 225,
        justifyContent:'space-between',
    },
    inputBase: {
        paddingLeft:4, 
        fontSize:12, 
        width:"100%"
    },
    chips:{
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap'
    }
    }));

const UpdatePost = () => {

const classes = useStyles();
const [posts, setPosts] = useState([]);
const [selectedPostId, setSelectedPostId] = useState();
const [data,setData] = useState();

const [title, setTitle] = useState("");
const [content, setContent] = useState("");
const [chips, setChips] = useState([]);
const [text,setText] = useState("");
const [image, setImage] = useState();
const [imgUrl, setImgUrl] = useState("");

const addChip = () => {
    if(chips.indexOf(text) === -1)
        return setChips(chips.concat([text]));
    return;
}

const deleteChip = (chipToDelete) => {
    setChips(chips.filter(c => c !== chipToDelete))
}

const handleChange = (event) => {
    setSelectedPostId(event.target.value);
  };

const onImageChange = (e) => {
const reader = new FileReader();
let file = e.target.files[0];
if (file) {
    reader.onload = () => {
    if (reader.readyState === 2) {
        setImage(file);
    }
    };
    reader.readAsDataURL(e.target.files[0]);
} else {
    setImage(null);
}
};

useEffect(() => {
  axios.get("/admin/getpost/"+selectedPostId)
  .then(d => {
      if(d){
        setData(d.data);
        setChips(d.data.tags);
        setContent(d.data.content);
        setTitle(d.data.title);
        setImgUrl(d.data.imgurl);
      }
  })
}, [selectedPostId])

useEffect(() => {
    axios.get("/admin/GetPosts")
    .then(d => {
        if(posts.length === 0){
            setPosts(posts.concat([...d.data]))
        }
    })
}, [])


const postRequest = () => {
    
  if(image){
    var d = new Date();
    const storageRef = storage.ref();
    const imageRef = storageRef.child(d.getHours() + d.getMinutes() + d.getSeconds() + d.getMilliseconds() + image.name );
    imageRef.put(image).then(() => {
        imageRef.getDownloadURL().then(url => {
            axios.post("/admin/updatepost", {
                id : data.id,
                title: title,
                imgurl: url,
                tags: chips,
                content: content
              }).then(response =>{
                if(response.status === 200){
                    alert("Yazı başarıyla güncellendi!")
                    window.location.reload();                   
                }
              })
        });
    })    
  }

  axios.post("/admin/updatepost", {
    id : data.id,
    title: title,
    tags: chips,
    content: content
  }).then(response =>{
    if(response.status === 200){
        alert("Yazı başarıyla güncellendi!")
        window.location.reload();                   
    }
  })
    
}
const deleteRequest = () => {
    axios.delete("/admin/deletepost/"+data.id)
    .then(response => {
        if(response.status === 200){
            alert("Yazı başarıyla silindi.");
            window.location.reload();
        }
    })
}

    return (
        <form id="updatepost-form" className="panel">
            <h2>Yazıyı Güncelle</h2>
            <Select
            labelId="simple-select-label"
            id="simple-select"
            onChange={handleChange}
            variant = {"outlined"}
            fullWidth>
            {                
            posts.map(post => {
                return(
                    <MenuItem key = {post.id} value = {post.id}>{post.title}</MenuItem>
                )
            })
            }
            </Select>         
            {
                data
                ?
                <>
                 <TextField 
                    
                    id="post-update-title"
                    label="Başlık" 
                    variant = "outlined" 
                    onChange = {(e) => setTitle(e.target.value)}
                    style={{marginTop:15}}
                    value = {title}
                    fullWidth 
                    required
                    />
                <div style={{display:"flex", flexDirection:"column", margin:"15px 0"}}>
                    <img src={data.imgurl} width="250px" />
                    <label>Resmi güncelle: </label>
                    <input id="updatepost-file" type="file" accept="image/*" onChange = {(e) => onImageChange(e)} />                    
                </div>

                <TextField 
                multiline
                label = "İçerik"
                fullWidth
                variant="outlined"
                rows = {7}
                value = {content}
                onChange = {(e) => setContent(e.target.value) }
                />
                <div style={{marginTop:15}}>
                    <label>Konu Ekle</label>       
                </div>             
                <Paper className = {classes.paper}>
                    <InputBase 
                        onChange = {(e) => setText(e.target.value.toLowerCase())} 
                        id="konu_ekle_update" 
                        placeholder="Konu etiketi ekle" 
                        className={classes.inputBase}
                        />
                    <IconButton 
                        color="primary" 
                        aria-label="directions" 
                        disabled = {text === "" ? true : false}
                        onClick = {() => addChip()}>
                        <ArrowForwardIosRounded />
                    </IconButton>
                </Paper>           
                <div className={classes.chips}>
                {
                   chips
                   ?
                   chips.map(c => {
                    return(
                    <li key = {c}>
                        <Chip 
                        style={{margin:5}}
                        label = {c}
                        onDelete = {() => deleteChip(c)}
                        />
                    </li>
                    )
                })
                :
                null
                }
                </div>
                <Button 
                color="primary" 
                variant="contained" 
                style={{marginTop:10}}
                onClick = {postRequest}>Güncelle</Button>
                
                <Button 
                color=" econdary" 
                variant="contained" 
                style={{marginTop:10, marginLeft:20}}
                onClick = {deleteRequest}>Sil</Button>
                </>    
                
                :
                null
            }
        </form>
    )
}

export default UpdatePost;