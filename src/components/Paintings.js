import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


export default class Paintings extends React.Component {
  state = {
    imgsrc: "",
    posi: 1,
    textFieldVal: 1,
  }

  // componentDidMount() { 
  //    axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/` + this.state.posi)//https://collectionapi.metmuseum.org/public/collection/v1/objects/1738
  //     .then(res => {
  //       console.clear();
  //       console.log(res);
  //       console.log(this.state.posi);
  //       const imgsrc = res.data;
  //       console.log(imgsrc);
  //       this.setState({ imgsrc });
  //     })
  // }
  theMET() {//maybe send this posi or textfieldval as a parameter
    axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/` + this.state.textFieldVal)//https://collectionapi.metmuseum.org/public/collection/v1/objects/1738
      .then(res => {
        console.clear();
        console.log(res);
        console.log(this.state.posi);
        console.log(this.state.textFieldVal);
        const imgsrc = res.data;
        console.log(imgsrc);
        this.setState({ imgsrc });
      })
  }
  IncrementItem = () => {
    this.setState({ posi: this.state.posi + 1 });
    
    console.log(this.state.posi);
    this.theMET();
  }
  DecreaseItem = () => {
    this.setState({ posi: this.state.posi - 1 });
    console.log(this.state.posi);
    this.theMET();
  }
  
  render() {
    return (
      <div>
        <img src={this.state.imgsrc.primaryImage} alt="met" />
        <Button variant="contained" color="primary" onClick={this.IncrementItem}>Click+</Button>
        <Button variant="contained" color="primary" onClick={this.DecreaseItem}>Click-</Button>
        <TextField onChange={this.state.textFieldVal._change} id="standard-number" label="Number" type="number" InputLabelProps={{shrink: true, }}/>
      </div>
    )
    
  }
}




// import React from 'react';

// import axios from 'axios';

// export default class PersonList extends React.Component {
//   state = {
//     persons: []
//   }

//   componentDidMount() {
//     axios.get(`https://jsonplaceholder.typicode.com/users`)
//       .then(res => {
//         const persons = res.data;
//         this.setState({ persons });
//       })
//   }

//   render() {
//     return (
//       <ul>
//         { this.state.persons.map(person => <li>{person.name}</li>)}
//       </ul>
//     )
//   }
// }












// import axios from 'axios';
// import { useState } from 'react';

// const Paintings = () => {
  
//   const [reactgetstuff, getstuff] = useState("")

//   const getMET = () => {

//     axios.get('https://collectionapi.metmuseum.org/public/collection/v1/objects/45734')
//     .then(function (response) {
//       // handle success
//       console.log(response);
//       reactgetstuff = response;
//     })
//     .catch(function (error) {
//       // handle error
//       console.log(error);
//     })
//     .then(function () {
//       // always executed
//     });
//   }

//   return(
//     <div>
//       <img src={reactgetstuff} alt="met" />
//     </div>
//   )
// }

// export default Paintings