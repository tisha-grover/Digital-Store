import React, { useState, Fragment} from "react";
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
} from "mdb-react-ui-kit";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { LinkContainer } from "react-router-bootstrap";

export default function NavBar() {
  const [openBasic, setOpenBasic] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100000 });

  const scrollToBottom = () => {
    scroll.scrollToBottom({
      duration: 800,
      smooth: "easeInOutQuart",
    });
  };

  const handleFilterSelect = (filterType) => {
    setSelectedFilter(filterType);
  };

  const handleSearch = () => {
    switch (selectedFilter) {
      case "Brand":
        searchBrand();
        break;
      case "Category":
        searchCategory();
        break;
      case "Price":
        searchPrice();
        break;
      default:
        searchProduct();
        break;
    }
  };
  // const Search = ({ history }) => {
  //   const [keyword, setKeyword] = useState("");

  //   const searchSubmitHandler = (e) => {
  //     e.preventDefault();
  //     if (keyword.trim()) {
  //       history.push(`/frontend/src/component/ToAddProduct/ToAddProduct.jsx/${keyword}`);
  //     } else {
  //       history.push("/frontend/src/component/ToAddProduct/ToAddProduct.jsx");
  //     }
  // };
  const searchBrand = () => {
    // Logic to handle brand search
  };

  const searchProduct = () => {
    // Logic to handle brand search
  };

  const searchCategory = () => {
    // Logic to handle category search
  };

  const searchPrice = () => {
    // Logic to handle price search
    console.log(priceRange);
  };

  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer fluid >
        <MDBIcon fas icon="store" />
        <MDBNavbarBrand href="#">E-Store</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setOpenBasic(!openBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar open={openBasic}>
          <div className="d-flex align-items-center justify-content-between"
          style={{width: 1320}}>
            <div>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current="page" href="#">
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <ScrollLink
                  to="#contact-section"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={scrollToBottom}
                >
                  <MDBNavbarLink href="#">Contact</MDBNavbarLink>
                </ScrollLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink href="/addproduct">Add Product</MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink
                  disabled
                  href="#"
                  tabIndex={-1}
                  aria-disabled="true"
                ></MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
            </div>
            <div>
            <div right className="d-flex align-items-center justify-content-end">
                <MDBDropdown className="m-2 text-center">
                  <MDBDropdownToggle
                    tag="a"
                    className="nav-link"
                    role="button"
                  >
                    Filters
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem
                      link
                      onClick={() => handleFilterSelect("Price")}
                    >
                      Price
                    </MDBDropdownItem>
                    <MDBDropdownItem
                      link
                      onClick={() => handleFilterSelect("Brand")}
                    >
                      Brand
                    </MDBDropdownItem>
                    <MDBDropdownItem
                      link
                      onClick={() => handleFilterSelect("Category")}
                    >
                      Category
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              {selectedFilter === "Price" ? (
                <div className="d-flex input-group w-auto">
                <input
                  type="range"
                  className="form-range m-2 p-2 text-center"
                  style={{ width: 162 }}
                  min={0}
                  max={100000}
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                />
                <MDBBtn color="primary" onClick={handleSearch}>
                  Filter Price
                </MDBBtn>
                </div>
              ):(
                <Fragment>
                  {/* onSubmit={searchSubmitHandler} */}
              <form   className="d-flex input-group w-auto ">
                <input
                  type="search"
                  className="form-control"
                  style={{ width: 200 }}
                  placeholder={`Select ${selectedFilter}`}
                  aria-label="Search"
                  // onChange={(e) => setKeyword(e.target.value)}
                />
                <MDBBtn color="primary" onClick={handleSearch}>
                  Search
                </MDBBtn>
              </form>
              </Fragment>
              )}
            <div
              rippleTag="div"
              className="bg-image hover-overlay hover-zoom hover-shadow"
            >
              <div className="m-1">
                <MDBIcon fas icon="user-circle " size="2x" />
              </div>
            </div>
            <LinkContainer to="/"
            className="m-2 p-2 text-center">
              <MDBBtn
                className="m-2 p-2 text-center"
                active
                aria-current="page"
                href="#"
              >
                LogOut&nbsp;&nbsp;&nbsp;&nbsp;
                <MDBIcon className="  text-center" fas icon="sign-out-alt" />
              </MDBBtn>
            </LinkContainer>
            </div>
            </div>
            </div>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
