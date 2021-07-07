import React, {useState} from 'react';
import { Paper,Container} from '@material-ui/core'
import { Helmet } from 'react-helmet'
import {Redirect} from 'react-router-dom';
import AddPost from './AddPost'
import UpdatePost from './UpdatePost'

const Panel = ({authorized}) => {

    

   if(!authorized)
    return <Redirect to="/login" />

    return(
        <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Admin Panel</title>           
        </Helmet>
        <Container maxWidth = "lg">
            <Paper elevation = {3} className="panel-container">
                <AddPost />
                <UpdatePost />
            </Paper>
        </Container>
        </>
    )
}



export default Panel;