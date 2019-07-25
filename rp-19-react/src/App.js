import React, { Component } from 'react';
// import React from 'react';
// import logo from './logo.svg';
import Card from "./components/cards/card"
import Grid from "./components/grid/Grid"
import images from "./images.json"
import './App.css';

let clickedArr = [];

class App extends Component {

  state = {
    images,
    count : 0,
    total : 9
  }

Clicked = (event) => {
  event.preventDefault();

  const userChoice = event.currentTarget.id;
  if (clickedArr.indexOf(userChoice) === -1) {
    this.setState({ count: this.state.count + 1 });
    clickedArr.push(userChoice);

    console.log(`this.state.count ${this.state.count}`);
    console.log(`this.state.total ${this.state.total}`);

      if (clickedArr.length === 9) {
        alert("Saving your victory photo!")
        alert("You won!")
        // this.setState({total : 9})
        clickedArr.length = 0;
        this.setState({count : 0})
      }
      this.shuffle(images);
    } else if (this.state.count < this.state.total) {
      console.log("you lose");
      // this.setState({total : 9});
      this.setState({count : 0});
      this.shuffle(images);
    }
}

shuffle = (images) => {
  var j, x, i;
  for (i = images.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = images[i];
      images[i] = images[j];
      images[j] = x;
  }
  return console.log(images);
}

render() {
  return <>
  <div className = "photos">
    <Grid>
  {this.state.images.map((image, i) => (
        <Card
        id={image.id}
        alt={image.name}
        src={image.imageURL}
        onClick={this.Clicked}
        key = {i}
        ></Card>
  ))}
      </Grid>
   </div>
    </>
  }
}
export default App;