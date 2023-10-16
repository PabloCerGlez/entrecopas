import React, { useState, useEffect } from 'react';
import Navbar from 'components/App/Navbar';
import Login from 'components/App/Login';
import Footer from 'components/App/Footer';

import headerBackGround from "assets/images/headerBackGround.png";
import headerBackGroundLarge from "assets/images/headerBackGroundLarge.png";
  // Asegúrate de tener esta imagen

function LayoutLoginRegister() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);


  const styles = {
    body: {
        height: '100%',
        margin: 0,
        padding: 0,
        background: '#F7F3EF',/* Sets the background color of the app to a light beige */

    },
    container: {

      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      margin: '65px',

      gap: '16px'
  },

};
  return (
    <div>
       <Navbar/>
      <div style={styles.container}>  
      <Login/>

      </div>
     
  
  <Footer/>
    </div>
  );
}

export default LayoutLoginRegister;
