// App.js
import OrderContainer from './OrderContainer'; 
import React from 'react';
import Card from './Card';
import Navbar from './Navbar';
import ListItem from './ListItem';


const App = () => {
  return (
    <div>
      
      <Navbar />
      <OrderContainer />
      <Card/>
      <ListItem/>
     
    </div>
  );
};

export default App;
