import React, {useState} from 'react';
import {Paper, Button, TextField,  Input, IconButton, InputBase,Chip } from '@material-ui/core'
import {ArrowForwardIosRounded} from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles';
import {storage} from "../../config";
import axios from 'axios';
import { Alert } from '@material-ui/lab';

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
        width:"100%",
        textTransform:"lowercase"
    },
    chips:{
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap'
    }
    }));

const AddPost = () => {

const classes = useStyles();
const [chips, setChips] = useState([]);
const [text,setText] = useState("");

const [title, setTitle] = useState("");
const [image, setImage] = useState(null);
const [content,setContent] = useState("");

const addChip = () => {
    if(chips.indexOf(text) === -1)
        return setChips(chips.concat([text]));
    return;
}

const deleteChip = (chipToDelete) => {
    setChips(chips.filter(c => c !== chipToDelete))
}
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
const postRequest = () => {
    if(image && title !== "" && content !== ""){
        var d = new Date();
        const storageRef = storage.ref();
        const imageRef = storageRef.child(d.getHours() + d.getMinutes() + d.getSeconds() + image.name );
        imageRef.put(image).then(() => {
            imageRef.getDownloadURL().then((url) => {
                axios.post("/admin/addpost", {
                    title: title,
                    imgurl: url,
                    tags: chips,
                    content: content
                }).then(response =>{
                    if(response.status === 200){
                        alert("Yazı başarıyla eklendi!")
                        window.location.reload();                   
                    }
                })
            })
        })
        // imageRef.getDownloadURL().then(url => {
            
        // })     
    }
    else {
        alert("Boş bırakılan yerlerini doldurun.")
    }
}

    return (
        <form id="addpost-form" className="panel">
            <h2>Yeni Yazı Ekle</h2>
            <TextField 
            
            id="post-add-title"
            label="Başlık" 
            variant = "outlined" 
            onChange = {(e) => setTitle(e.target.value)}
            value = {title}
            fullWidth 
            required
            />
            
            <div style={{display:"flex", flexDirection:"column", margin:"15px 0"}}>
                <label>Yüklenecek Resim</label>
                <input id="addpost-file" type="file" accept="image/*" onChange = {(e) => onImageChange(e)} />                    
            </div>
            <TextField 
            multiline
            label = "İçerik"
            fullWidth
            variant="outlined"
            onChange = {(e) => setContent(e.target.value)}
            value = {content}
            rows = {7}
            />
            <div style={{marginTop:15}}>
                <label>Konu Ekle</label>       
            </div>             
            <Paper className = {classes.paper}>
                <InputBase 
                    onChange = {(e) => setText(e.target.value.toLowerCase())} 
                    id="konu_ekle" 
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
            }
            </div>
            <Button 
            color="primary"
            variant="contained" 
            style={{marginTop:10}}
            onClick = {() => postRequest()}>Ekle</Button>
        </form>
    )
}

export default AddPost;