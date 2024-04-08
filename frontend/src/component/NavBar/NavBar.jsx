import React, { useState } from 'react';
// import {Link} from "react-router-dom";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import {LinkContainer} from 'react-router-bootstrap'

export default function NavBar() {
  const [openBasic, setOpenBasic] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
      <MDBIcon fas icon="store" />
        <MDBNavbarBrand href='#'>E-Store</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenBasic(!openBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar open={openBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'>Best Seller</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                  Filters
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Price</MDBDropdownItem>
                  <MDBDropdownItem link>Brand</MDBDropdownItem>
                  <MDBDropdownItem link>Category</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
                
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>

          <form className='d-flex input-group' style={{width:400}}>
            <input type='search' className='form-control'  placeholder='Search Product' aria-label='Search' />
            <MDBBtn color='primary'>Search</MDBBtn>
          </form>
          <div rippleTag='div' style={{width: 70, height:60}} className='bg-image hover-overlay hover-zoom hover-shadow'>
        <div className='m-3' ><MDBIcon fas icon="user-circle " size="2x" /></div>
        </div>
        <LinkContainer to="/">
              <MDBBtn className='m-2 p-2 text-center' style={{width:130}} active aria-current='page' href='#'>
                LogOut&nbsp;&nbsp;&nbsp;&nbsp;<MDBIcon className='  text-center' fas icon="sign-out-alt" />
              </MDBBtn>
        </LinkContainer>

        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    
  );
  
}