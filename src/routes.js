import {useState} from 'react';
import {Route,Link} from "react-router"
import {useHistory} from "react-router-dom"
import HomePage from './screens/home/HomePage';
import LoginPage from './screens/admin/Login';
import AdminPanel from './screens/admin/index';
import BlogDetail from './screens/home/BlogDetail';
import axios from "axios";
const Routes = () => {
    const token = localStorage.getItem('token');
    axios.defaults.baseURL = "http://localhost:5000/api"; 
    axios.defaults.headers.common['Authorization'] ='Bearer ' + localStorage.getItem('token');
    axios.interceptors.response.use(response => {
        return response;
    }, error => {
        if(error.response){
            if(error.response.status === 401){
                localStorage.clear();
                window.location.reload();
            }
        }
    })

    const history = useHistory();
    
    const [selectedPost, setSelectedPost] = useState();
    const handlePostClicked = (e) => {
        setSelectedPost(e);
        history.push("/post/"+e.id);
    }

    return(
        <>
            <Route exact path="/">
                <HomePage postClicked = {(e) => handlePostClicked(e)} />
            </Route>           
            <Route path="/login">
                <LoginPage authorized = {token ? true : false }/>
            </Route> 
            <Route path = "/admin">
                <AdminPanel authorized = {token ? true : false }  />
            </Route>
            <Route path = "/post/:id">
                <BlogDetail post = {selectedPost} />
            </Route>
        </>
    )
}

export default Routes;