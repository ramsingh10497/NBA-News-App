import React from 'react'
import Footer from '../../components/footer/Footer';
import Header1 from '../../components/header/header1'
import Routes from '../../Routes';
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
            <Routes />
            <Footer />
        </div>
    )
}

export default Layout
