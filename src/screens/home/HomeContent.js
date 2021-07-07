import React, {useState, useEffect} from 'react'
import {Container, CircularProgress} from '@material-ui/core'
import BlogCard from './BlogCard'
import axios from 'axios';
const HomeContent = (props) => {
   
    const [scroll, setScroll] = useState(0);
    const [posts, setPosts] = useState([]);
    const [total, setTotal] = useState(0);

    window.addEventListener('scroll', () => {
      const {scrollTop, scrollHeight, clientHeight} = document.documentElement;
      if(clientHeight + scrollTop >= scrollHeight - 5){
         if(total > posts.length)
            setScroll(scroll + 9);
      }
   })

    useEffect(() => {
       if(total > 0 && total >= posts.length){
         axios.get("/user/getposts/"+scroll.toString())
         .then(response => {
           if(response)
              setPosts(posts.concat(response.data))        
         });
       }
       
    }, [scroll, total])
    
    useEffect(() => {
         axios.get("/user/getpostlength")
         .then(response => {
            if(response)
               setTotal(response.data)
         })
    
    }, [])

    const handlePostClicked = (e) => {
      props.postClicked(e);
    }
    return (
       <div className="home-content">
          <Container maxWidth="lg"style={{marginTop:125, display:"flex", flexWrap:"wrap", justifyContent:"space-between"}}>

             {
               posts.length > 0
               ?
               posts.map(post => {
                  return(
                     <BlogCard post = {post} postClicked = {handlePostClicked} />
                  )
                })
               :
               <div style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                  <CircularProgress />
               </div>

             }

          </Container>
       </div>
    )
}


export default HomeContent;