import React from 'react'
import Header1 from '../../components/header/header1'
import './Layout.css'


function Layout({ children }) {
    
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
    setOpen(true);
  };

    const handleDrawerClose = () => {
    setOpen(false);
  };

    return (
        <div>
            <Header1 open={open} handleDrawerClose={handleDrawerClose}  handleDrawerOpen={handleDrawerOpen}/>
            {children}
            Footer
        </div>
    )
}

export default Layout
