import React from 'react';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Toolbar from '@material-ui/core/Toolbar';
import NavigationBar from './NavigationBar';
import ScrollTop from './ScrollTop';
const Layout = ({children,pageName}) => {
    return(
        <>
        <Toolbar id="back-to-top-anchor" />
            <NavigationBar pageName =  {pageName} />
                <main>
                    {children}
                </main>
                <ScrollTop {...children}>
                    <Fab color="secondary" size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                    </Fab>
                </ScrollTop>
        </>
    )
}

export default Layout;