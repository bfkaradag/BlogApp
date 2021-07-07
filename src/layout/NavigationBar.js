import React, {useState, useEffect} from 'react';
import {ArrowDropDownRounded,  MenuRounded} from '@material-ui/icons'
import {IconButton,
    SwipeableDrawer, 
    List, 
    ListItem, 
    ListItemText
   } from '@material-ui/core'


const MobileBar = (props) => {
    const [active, setActive] = useState();
    const [isScrolled, setIsScrolled] = useState(false);

    const MobileNavList = () => {

        return(
        <div className="mobile-nav-list">
            <List>  
                <ListItem button >
                <ListItemText primary={"İletişim"} />
            </ListItem>
            
        </List>     
        </div>
        )
    }

    useEffect(() => {

        var headerLg = document.querySelector(".header_sm");
        window.onscroll = () => {
            if(window.scrollY < 1 && !props.pageName === "home"){
                headerLg.classList.add("first_header_sm");
                setIsScrolled(false);
            }
            if(window.scrollY > 0){
                headerLg.classList.remove("first_header_sm");    
                setIsScrolled(true);
            }
            
        }  
    }, [window.scrollY])

 return(  
    <header className="header_sm first_header_sm">
    <div className="nav-logo">
        {/* <img src= {`./static/img/logos/${isScrolled ? 'nav_logo' : 'nav_logo_white'}.png`} alt="smartportal-logo" width="180px" /> */}
        <span style={{fontSize:32, color: isScrolled ? "#DC143C	" : "#fff" }}>Logo</span>
    </div>
    <IconButton className="mobile-nav-button" onClick = {() => setActive(!active)} style = {{marginRight:20}}>
        <MenuRounded style={{ color: isScrolled ?"#545080" : "#fff"}} fontSize="large"/>
    </IconButton>
    {
         <SwipeableDrawer
         anchor="bottom"
         open={active}
         onClose={() => setActive(false)}
         onOpen={() => setActive(true)}
         >
             <MobileNavList />
         </SwipeableDrawer>
    }
    </header>
      
 )
}

const DesktopBar = (params) => {
    const [isScrolled, setIsScrolled] = useState(false);
    
    useEffect(() => {
        var headerLg = document.querySelector(".header_lg");
        window.onscroll = () => {
            if(window.scrollY < 1 && params.pageName === "home"){
                headerLg.classList.add("first_header_lg");
                document.querySelectorAll(".dropdown > a").forEach(d => d.style.color ="#eee")
                setIsScrolled(false);
            }
            if(window.scrollY > 0){
                headerLg.classList.remove("first_header_lg");    
                document.querySelectorAll(".dropdown > a").forEach(d => d.style.color ="#545080")
                setIsScrolled(true);
            }
            
        }  
    }, [window.scrollY])

   return(
    <header className="header_lg first_header_lg">
        <div className="nav-logo">
            {/* <img src= {`./static/img/logos/${isScrolled || params.pageName !=="home" ? 'nav_logo' : 'nav_logo_white'}.png`} alt="smartportal-logo"  width="240px" /> */}
            <span style={{fontSize:32, color: isScrolled ? "#DC143C	" : "#fff" }}>Logo</span>
        </div>
        
        
    </header>
   )
}

const NavigationBar = (pageName) => {
    const [widthSize, setWidthSize] = useState(window.innerWidth);
    window.addEventListener("resize", () => setWidthSize(window.innerWidth))
   return(
    <>
    {
        widthSize > 1064
        ?
        <div id="desktop-bar">
            <DesktopBar  {...pageName} />
        </div>    
        :
        <div id="mobile-bar">
            <MobileBar  {...pageName} />
        </div>
    }
    </>
   )
}

export default NavigationBar;