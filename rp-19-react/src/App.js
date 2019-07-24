import React, { Component } from 'react';
// import React from 'react';
// import logo from './logo.svg';
import Card from "./components/cards/index"
import Grid from "./components/grid/Grid"
import images from "./images.json"
import './App.css';

class App extends Component {
  state = {
    images,
    count : 0,
    total : 0
  }
// }

// function App() {
render() {
  return <>
  <div className = "photos">
    <Grid>Grid:
  {images.map((image) => (
        <Card
        id={image.id}
        alt={image.name}
        src={image.imageURL}
        ></Card>
  ))}
      </Grid>
   </div>
    </>
  }
}
export default App;