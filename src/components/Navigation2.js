import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import NavDropdown from 'react-bootstrap/NavDropdown';

import Container from 'react-bootstrap/Container'
import {useState} from 'react'

import './../styles/nav.css';

import { Menu } from '@mui/material';


const Navigation = () => {



    const[click, setClick] = useState(false);
    const[dropdownbuy, setDropdownBuy] = useState(false);
    const[dropdownsell, setDropdownSell] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu= () => setClick(false);

    const onMouseEnter = () => {
      if(window.innerWidth < 960) {
        setDropdownBuy(false);
        } else {
          setDropdownBuy(true);
        }
    }

    const onMouseLeave = () => {
      if(window.innerWidth < 960) {
        setDropdownBuy(false);
        } else {
          setDropdownBuy(false);
        }
    };

    
    const onMouseEnter_2 = () => {
      if(window.innerWidth < 960) {
        setDropdownSell(false);
        } else {
          setDropdownSell(true);
        }
    }

    const onMouseLeave_2 = () => {
      if(window.innerWidth < 960) {
        setDropdownSell(false);
        } else {
          setDropdownSell(false);
        }
    };



    return (
      
<Container>
  
<PopupState variant="popover" popupId="demo-popup-menu">
  {(popupState) => (
    <React.Fragment>
      <Button variant="contained" {...bindTrigger(popupState)}>
        Dashboard
      </Button>
      <Menu {...bindMenu(popupState)}>
        <MenuItem onClick={popupState.close}>Profile</MenuItem>
        <MenuItem onClick={popupState.close}>My account</MenuItem>
        <MenuItem onClick={popupState.close}>Logout</MenuItem>
      </Menu>
    </React.Fragment>
  )}
</PopupState>

</Container>
    )

}

export default Navigation;


/* 
<NavDropdown.Item  id="nav-links" href="/Sell">View research and consulting offers</NavDropdown.Item>
<NavDropdown.Item  id="nav-links" href="/CreateSell">Create an offer</NavDropdown.Item>

 */
/* 
<Nav className="justify-content-right"  >
<Nav.Item>
<Nav.Link  class="nav-link"  href="/home">My Story</Nav.Link>
</Nav.Item>

<Nav.Item>
<NavDropdown class="nav-link"  title="Professional" id="collasible-nav-dropdown">
 </NavDropdown>
 </Nav.Item>

 <Nav.Item>

 <NavDropdown class="nav-link"  title="Personal" id="collasible-nav-dropdown">

 </NavDropdown>
 </Nav.Item>

 <Nav.Item>

<Nav.Link   href="/Resume">Resume</Nav.Link>
</Nav.Item>

<Nav.Item>

<Nav.Link   href="/Contact">Contact</Nav.Link>

</Nav.Item>

</Nav>
 */