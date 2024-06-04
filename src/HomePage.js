// HomePage.js
import React from 'react';
import Nav from './Nav.js';
import './home.css';
function HomePage() 
{
  return (
    <> 
      {<Nav/>}
      <div id="im"></div>
      <div style={{fontSize:"20px",color:"black",textAlign: "center", paddingTop: "20px" }}>
      <h1 style={{marginLeft:"160px",marginTop:"30px"}}>Welcome to the Home Page of GEU - CONNECT</h1>
      <p style={{marginLeft:"400px",marginRight:"250px",marginTop:"30px"}}><i>GEU Connect is an innovative platform designed to foster connections between juniors and 
seniors at Graphic Era University (GEU). The platform enhances communication, 
collaboration, and resource sharing through various features, including chat functionality, job 
postings, placement information, and exam preparation content. </i></p>
      </div>
    </>
  );
}

export default HomePage;
