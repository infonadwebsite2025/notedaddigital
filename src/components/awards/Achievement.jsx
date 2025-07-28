import React from 'react';
import Herosection from './Herosection';
import Milestonesection from './Milestonesection';
import Awards from './Awards';
import Honerable from './Honerable';
import Calltoaction from './Calltoaction';
import Navbar from '../home/Navbar';
import Footer from '../footer/Footer';

function Achievement() {
  return (
    <div>
      <Navbar />
      <Herosection />
      <Milestonesection/>
      <Awards />
      <Honerable/>
      <Footer/>

      {/* <Calltoaction/> */}
    </div>
  );
}

export default Achievement;
