import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Card from '../Card/Card';
import SlideShow from '../SlideShow/SlideShow';
import {
    MDBContainer,
    MDBRow,
    MDBCol
} from "mdb-react-ui-kit";
function Home() {
    return (
        <>
            <NavBar />
            <SlideShow />
            <br /><br />
            <MDBContainer >
                <MDBRow className='row-cols-1 row-cols-md-3 g-4 '>
                    <h1 className='mx-auto w-100 d-flex '>Laptops</h1>
                    <hr className='w-100' />
                    <br />
                    <MDBCol className='w-25'>
                        <Card 
                        imgcard="https://i.postimg.cc/WzHWLDvW/11.webp" 
                        name="Dell Xtreme 270"
                        product="Laptop"
                        Price="40,000"/>
                        
                    </MDBCol>
                    <MDBCol className='w-25 max-height: 100%' >
                        <Card 
                        imgcard="https://i.postimg.cc/qqgg7mnD/13.webp" 
                        name="Dell Xtreme 270"
                        product="Laptop"
                        Price="40,000"/>
                        
                    </MDBCol>
                    <MDBCol className='w-25'>
                        <Card 
                        imgcard="https://i.postimg.cc/NMxBwRzJ/18.jpg" 
                        name="Dell Xtreme 270"
                        product="Laptop"
                        Price="40,000"/>
                        
                    </MDBCol>
                    <MDBCol className='w-25'>
                        <Card 
                        imgcard="https://i.postimg.cc/VNtc78jP/10.avif" 
                        name="Dell Latitude 7000"
                        product="Laptop"
                        Price="50,000"/>
                        
                    </MDBCol>
                    
                </MDBRow>
            </MDBContainer>
            <MDBContainer >
            <MDBRow className='row-cols-1 row-cols-md-3 g-4 '>
                <h1 className='p-4  w-100 d-flex'>Tabs</h1>
                <hr className='w-100' />
                <br />
                <MDBCol className='w-25'>
                    <Card imgcard="https://i.postimg.cc/bv4fc3g9/1.webp" 
                    name="Lenovo"
                    product="Tab"
                    Price="40,000"/>
                </MDBCol>
                <MDBCol className='w-25'>
                    <Card imgcard="https://i.postimg.cc/fyfmw7Vj/2.avif" 
                    name="Lenovo"
                    product="Tab"
                    Price="40,000"/>
                </MDBCol>
                <MDBCol className='w-25'>
                    <Card imgcard="https://i.postimg.cc/fyfmw7Vj/2.avif" 
                    name="Lenovo"
                    product="Tab"
                    Price="40,000"/>
                </MDBCol>
                <MDBCol className='w-25'>
                    <Card imgcard="https://i.postimg.cc/J75kHqhj/17.jpg" 
                    name="Ipad"
                    product="Ipad"
                    Price="70,000"/>
                </MDBCol>
              
            </MDBRow>
            <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
                <h1 className='mx-auto w-100 d-flex '>DSLR</h1>
                <hr className='w-100' />
                <br />
                <MDBCol className='w-25'>
                    <Card imgcard="https://i.postimg.cc/BvPS5qcd/3.jpg" 
                    name="Canon EOS 90D"
                    product="DSLR"
                    Price="80,000"/>
                </MDBCol>
                <MDBCol className='w-25'>
                    <Card imgcard="https://i.postimg.cc/BvPS5qcd/3.jpg" 
                    name="Canon EOS 90D"
                    product="DSLR"
                    Price="80,000"/>
                </MDBCol>
                <MDBCol className='w-25'>
                    <Card imgcard="https://i.postimg.cc/BvPS5qcd/3.jpg" 
                    name="Canon EOS 90D"
                    product="DSLR"
                    Price="80,000"/>
                </MDBCol>
                <MDBCol className='w-25'>
                    <Card imgcard="https://i.postimg.cc/B6hmqGRn/17.jpg" 
                    name="Canon D3500"
                    product="DSLR"
                    Price=""/>
                </MDBCol>
                
            </MDBRow>
            </MDBContainer>
            
            <br /><br />
            <Footer />
        </>
    );
}
export default Home;