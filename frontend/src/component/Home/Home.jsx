import React, { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Card from "../Card/Card";
import SlideShow from "../SlideShow/SlideShow";
import AddCart from "../AddCart/AddCart";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      // Fetch data from API
      const response = await fetch("http://localhost:3001/api/product");
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      // Set the fetched products in state
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <>
      <NavBar />
      <SlideShow />
      <br />
      <br />
      {/* Map through product categories and render cards */}
      {Object.entries(products).map(([category, categoryProducts]) => (
        <MDBContainer>
          <MDBRow className="row-cols-1 row-cols-md-3 g-4 " key={category}>
            <h1 className="mx-auto w-100 d-flex ">{category}</h1>
            <hr className="w-100" />
            <br />
            {Array.isArray(categoryProducts) ? (
              // If categoryProducts is an array, map over it and render Card components
              categoryProducts.map((product, index) => (
                <MDBCol key={index} className="w-25">
                  <Card
                    imgcard={product.image}
                    name={product.name}
                    product={product.product}
                    Price={product.Price}
                    id={product.id}
                  />
                </MDBCol>
              ))
            ) : (
              // If categoryProducts is not an array, render an error message or handle it as needed
              <p>Error: Unable to fetch products for this category</p>
            )}
          </MDBRow>
        </MDBContainer>
      ))}

      <br />
      <br />
      <AddCart />
      <Footer />
    </>
  );
}
export default Home;
