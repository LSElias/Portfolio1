// eslint-disable-next-line no-unused-vars
import React from 'react'
import GoBack from './GoBack'
import { Drawer, List, ListItem } from '@mui/material'
import { Link } from 'react-router-dom';
import { CiMenuKebab } from "react-icons/ci";

const Header = () => {

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (inOpen) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
  
    setOpen(inOpen);
  };

  return (
    <div className='header'>
        <GoBack />
        <span className='spacing'> </span>
        <button className='menuBtn'  onClick={toggleDrawer(true)}>
        <CiMenuKebab size={32} />
      </button>
      <Drawer
      PaperProps={{sx: {backgroundColor: "#d3c8af"}}}
      className='drawerColor' anchor='right' open={open} onClose={toggleDrawer(false)}>
          <List>
          <ListItem>
            <Link className="item" to="/">
                  Home
            </Link>
            </ListItem>
            <ListItem>
            <Link className="item" to="/about-me">
                  About me
            </Link>
            </ListItem>
            <ListItem>
            <Link className="item" to="/formation">
                  Formation
            </Link>
            </ListItem>
            <ListItem>
            <Link className="item" to="/projects">
                  Projects
            </Link>
            </ListItem>
            <ListItem>
            <Link className="item" to="/contact">
                  Contact me!
            </Link>
            </ListItem>
          </List>
        </Drawer>
    </div>
  )
}

export default Header