import React, {useState} from 'react';
import { InputBase, IconButton,CircularProgress,Container  } from '@material-ui/core'
import { Helmet } from 'react-helmet'
import SearchIcon from '@material-ui/icons/Search';
import HomeContent from './HomeContent'
import Layout from '../../layout/index';
import BlogCard from './BlogCard';
import axios from 'axios';
const HomePage = (props) => {
   const [searchTxt, setSearchTxt] = useState("");
   const [searchPosts, setSearchPosts] = useState([]);
    const handlePostClicked = (data) => {
        props.postClicked(data)
    }
    const getRequest = () => {
        axios.get("/user/getpostsbytagname/"+searchTxt)
        .then(response => {
            if(response){
                setSearchPosts(response.data);
            }
        })
    }
    return(
        <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Blog</title>           
        </Helmet>
       <Layout pageName = "home">
        <div style={{display:"flex",justifyContent:"center",marginTop:125}}>
            <InputBase
            placeholder="Etikete göre ara"
            inputProps={{ 'aria-label': 'etikete göre ara' }}
            onChange = {(e) => setSearchTxt(e.target.value)}
            />
            <IconButton onClick = {getRequest} type="submit" aria-label="search">
                <SearchIcon />
            </IconButton>
        </div>
        {
            searchPosts.length > 0
            ?
            <Container maxWidth="lg"style={{marginTop:125, display:"flex", flexWrap:"wrap", justifyContent:"space-between"}}>

                {
                    searchPosts.map(post => {
                        return(
                           <BlogCard post = {post} postClicked = {handlePostClicked} />
                        )
                      })
                }
            </Container>
              
            :
            <HomeContent postClicked = {(e) => handlePostClicked(e)} />
        }
       </Layout>
        </>
    )
}



export default HomePage;