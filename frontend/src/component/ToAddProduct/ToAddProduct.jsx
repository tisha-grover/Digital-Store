import React, { useState, useContext } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardImage, MDBIcon } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom'; // Import useHistory to manage navigation
import Alert from 'react-bootstrap/Alert'; // Import Alert from react-bootstrap

import Footer from '../Footer/Footer';
import UsernameContext from '../Utils/UsernameContext'; 

function ToAddProduct() {
  const { loggedInUsername } = useContext(UsernameContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    image: '',
    name: '',
    productCategory: '',
    price: '',
    ownedBy: 'admin2'
  });

  // State variables for managing alert
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertContent, setAlertContent] = useState('');
  const [alertVariant, setAlertVariant] = useState('success');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(loggedInUsername + "loginuser");
      const response = await fetch(`http://localhost:3001/api/product/createproduct`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('Product added successfully');
        setAlertContent('Product added successfully');
        setAlertVariant('success');
        setAlertVisible(true);
        // Reset form fields after successful submission
        setFormData({
          image: '',
          name: '',
          productCategory: '',
          price: '',
          ownedBy: 'admin2'
        });
      } else {
        console.error('Failed to add product');
        setAlertContent('Failed to add product');
        setAlertVariant('danger');
        setAlertVisible(true);
      }
    } catch (error) {
      console.error('Error adding product:', error);
      setAlertContent('Error adding product');
      setAlertVariant('danger');
      setAlertVisible(true);
    }
  };

  const handleBlur = () => {
    setFormData({
      ...formData,
      image: formData.image
    });
  };

  // Function to handle navigating back to the home page
  const handleBack = () => {
    navigate('/home'); // Navigate to the home page
  };

  return (
    <>
    <MDBCol>
          <MDBBtn onClick={handleBack} className="m-5 position-fixed top-0 start-0">Back</MDBBtn> {/* Back button */}
        </MDBCol>
    <MDBContainer>
      <MDBRow className="my-5">
        <MDBCol>
          <h1 className="text-center">
            E-Store
            <MDBIcon fas icon="store" />
          </h1>
        </MDBCol>
      </MDBRow>
      <MDBRow className='justify-content-center mt-5'>
        <MDBCol md='6'>
          <MDBRow className='mb-4'>
            <MDBCol md='4' className='d-flex align-items-center'>
              {formData.image ? (
                <MDBCard>
                  <MDBCardImage src={formData.image} alt='Product Image' position='top' />
                </MDBCard>
              ) :
              (<label className='mb-0'>Image URL:</label>)}
            </MDBCol>
            <MDBCol md='8'>
              <MDBInput
                label=''
                name='image'
                value={formData.image}
                onChange={handleChange}
                onBlur={handleBlur} // Trigger handleBlur function when input loses focus
                required
                className='mb-0 pb-0' // Reduce margin and padding for this input
              />
            </MDBCol>
          </MDBRow>
          <MDBRow className='mb-4'>
            <MDBCol md='4' className='d-flex align-items-center'>
              <label className='mb-0'>Product Name:</label>
            </MDBCol>
            <MDBCol md='8'>
              <MDBInput
                label=''
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
              />
            </MDBCol>
          </MDBRow>
          <MDBRow className='mb-4'>
            <MDBCol md='4' className='d-flex align-items-center'>
              <label className='mb-0'>Product Category:</label>
            </MDBCol>
            <MDBCol md='8'>
              <MDBInput
                label=''
                name='productCategory'
                value={formData.productCategory}
                onChange={handleChange}
                required
              />
            </MDBCol>
          </MDBRow>
          <MDBRow className='mb-4'>
            <MDBCol md='4' className='d-flex align-items-center'>
              <label className='mb-0'>Price:</label>
            </MDBCol>
            <MDBCol md='8'>
              <MDBInput
                label=''
                name='price'
                type='number'
                value={formData.price}
                onChange={handleChange}
                required
              />
            </MDBCol>
          </MDBRow>
          <MDBRow className='mb-4'>
            <MDBCol md='4' className='d-flex align-items-center'>
            </MDBCol>
          </MDBRow>
          <div className='d-grid gap-2'>
          {!alertVisible && (
            <MDBBtn onClick={handleSubmit}>Add Product</MDBBtn>
          )}
            {/* Alert component */}
      {alertVisible && (
        <div>
        <MDBRow>
        <MDBBtn onClick={() => setAlertVisible(false)}>Add Another Product</MDBBtn>
        </MDBRow>
        <MDBRow>
        <MDBCol>
          {/* Alert component */}
          <Alert variant={alertVariant} onClose={() => setAlertVisible(false)} dismissible>
            {alertContent}
          </Alert>
        </MDBCol>
      </MDBRow>
      </div>
      )}
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    <br /><br /><br /><br /><br /><br />
    <Footer />
    </>
  );

}

export default ToAddProduct;
