import React from 'react';
import { Paper, Button } from '@material-ui/core'
import { Helmet } from 'react-helmet'
import HomeCarousel from './HomeCarousel';
import HomeContent from './HomeContent'
import Layout from '../../layout/index'
const HomePage = () => {
   
    return(
        <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Smartportal: Dijital iş gücü</title>           
        </Helmet>
       <Layout pageName = "home">
            <HomeCarousel />
            <HomeContent />
       </Layout>
        </>
    )
}



export default HomePage;