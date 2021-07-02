import React, {useState, useEffect, use} from 'react';
import {ArrowDropDownRounded,  MenuRounded, ExpandLess,ExpandMore} from '@material-ui/icons'
import {Button,
     IconButton,
    SwipeableDrawer, 
    List, 
    Divider, 
    ListItem, 
    ListItemText, 
    Collapse,
   } from '@material-ui/core'
import NavigationDropdown from './NavigationDropdown'
const dropdownItems = [
    {
        id:1,
        name:"nav_lg_hakkimizda",
        items:[
            {
                name:"Hakkımızda",
                url:"hakkimizda"
            },
            {
                name:"Tarihçemiz",
                url:"tarihcemiz"
            },
            {
                name:"İş ortağımız olun",
                url:"is-ortagimiz"
            }
        ]
    },
    {
        id:2,
        name:"nav_lg_urunler",
        items:[
            {
                name:"Smart Portal",
                url:"smart-portal"
            },
            {
                name:"Kimlik Doğrulama",
                url:"kimlik-dogrulama"
            }
        ]
    },
    {
        id:3,
        name:"nav_lg_cozumler",
        items:[
            {
                name:"A Çözümü",
                url:"a-cozumu"
            },
            {
                name:"B Çözümü",
                url:"b-cozumu"
            }
        ]
    }
]

const MobileBar = (props) => {
    const [active, setActive] = useState();
    const [isScrolled, setIsScrolled] = useState(false);

    const MobileNavList = () => {

        const [openHakkimizda, setOpenHakkimizda] = useState(false);
        const [openUrunler, setOpenUrunler] = useState(false);
        const [openCozumler, setOpenCozumler] = useState(false);
        return(
        <div className="mobile-nav-list">
            <List>    
                <ListItem button onClick={() => setOpenHakkimizda(!openHakkimizda)}>
                    {/* <ListItemIcon>
                    <InboxIcon />
                    </ListItemIcon> */}
                    <ListItemText primary="Hakkımızda" />
                    {openHakkimizda ? <ExpandLess /> : <ExpandMore />}
                </ListItem>        
                <Collapse in={openHakkimizda} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                <ListItem button style={{paddingLeft:"30px"}}>
                    {/* <ListItemIcon>
                    <StarBorder />
                    </ListItemIcon> */}
                    <ListItemText primary="Hakkımızda" />
                </ListItem>
                <ListItem button style={{paddingLeft:"30px"}}>
                    {/* <ListItemIcon>
                    <StarBorder />
                    </ListItemIcon> */}
                    <ListItemText primary="Tarihçemiz" />
                </ListItem>
                <ListItem button style={{paddingLeft:"30px"}}>
                    {/* <ListItemIcon>
                    <StarBorder />
                    </ListItemIcon> */}
                    <ListItemText primary="İş Ortağımız Olun" />
                </ListItem>
                </List>
            </Collapse>
                <ListItem button onClick={() => setOpenUrunler(!openUrunler)}>
                    {/* <ListItemIcon>
                    <InboxIcon />
                    </ListItemIcon> */}
                    <ListItemText primary="Ürünler" />
                    {openUrunler ? <ExpandLess /> : <ExpandMore />}
                </ListItem>        
                <Collapse in={openUrunler} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                <ListItem button style={{paddingLeft:"30px"}}>
                    {/* <ListItemIcon>
                    <StarBorder />
                    </ListItemIcon> */}
                    <ListItemText primary="Smart Portal" />
                </ListItem>
                <ListItem button style={{paddingLeft:"30px"}}>
                    {/* <ListItemIcon>
                    <StarBorder />
                    </ListItemIcon> */}
                    <ListItemText primary="Kimlik Doğrulama" />
                </ListItem>
                </List>
            </Collapse>
                <ListItem button onClick={() => setOpenCozumler(!openCozumler)}>
                        {/* <ListItemIcon>
                        <InboxIcon />
                        </ListItemIcon> */}
                        <ListItemText primary="Çözümler" />
                        {openCozumler ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>        
                <Collapse in={openCozumler} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    <ListItem button style={{paddingLeft:"30px"}}>
                        {/* <ListItemIcon>
                        <StarBorder />
                        </ListItemIcon> */}
                        <ListItemText primary="A Çözümü" />
                    </ListItem>
                    <ListItem button style={{paddingLeft:"30px"}}>
                        {/* <ListItemIcon>
                        <StarBorder />
                        </ListItemIcon> */}
                        <ListItemText primary="B Çözümü" />
                    </ListItem>
                    </List>
                </Collapse>
                
            </List>
        <Divider />
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
        <img src= {`./static/img/logos/${isScrolled ? 'nav_logo' : 'nav_logo_white'}.png`} alt="smartportal-logo" width="180px" />
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
    const [hoveredItem, setHoveredItem] = useState();
    const [hoveredContent, setHoveredContent] = useState();
    useEffect(() => {
        if(params.pageName !== "home"){
            var headerLg = document.querySelector(".header_lg");
            if(headerLg){
                headerLg.classList.remove("first_header_lg");
            }
            document.querySelectorAll(".dropdown > a").forEach(d => d.style.color ="#545080")
        }
    }, [])
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

    // useEffect(() => {
    //     if(hoveredItem){
    //         setHoveredContent(dropdownItems.find(d => d.name === hoveredItem.target.id));
    //     }
    // }, [hoveredItem])
   return(
    <header className="header_lg first_header_lg">
        <div className="nav-logo">
        <img src= {`./static/img/logos/${isScrolled || params.pageName !=="home" ? 'nav_logo' : 'nav_logo_white'}.png`} alt="smartportal-logo"  width="240px" />
        </div>
        <nav className="nav_lg_nav">
           <ul>
               <li className="dropdown" >
                    <a href="#" id="nav_lg_hakkimizda">Hakkımızda <ArrowDropDownRounded style={{zIndex:1}} /></a>   
                    <NavigationDropdown data = {dropdownItems.find(d => d.id === 1)} />                
               </li>
               <li className="dropdown">                   
                    <a href="#" id="nav_lg_urunler">Ürünler<ArrowDropDownRounded /></a>
                    <NavigationDropdown data = {dropdownItems.find(d => d.id === 2)} />
               </li>
               <li className="dropdown">                   
                    <a href="#" id="nav_lg_cozumler">Çözümler<ArrowDropDownRounded /></a>
                    <NavigationDropdown data = {dropdownItems.find(d => d.id === 3)} />
               </li>
               <li className="dropdown">                    
                    <a href="#" id="nav_lg_iletisim">İLETİŞİM</a>
               </li>
           </ul>
          
        </nav>
        <div className="nav-buttons">
            
            <Button style={{backgroundColor:"#545080", color:"#fff"}} variant="contained" >
                smart portal
            </Button>
            <Button style={{backgroundColor:"#d44b63", color:"#fff"}} variant="contained">
                smart portal
            </Button>
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