import React from 'react';

import axios from 'axios';

export default class Paintings extends React.Component {
  state = {
    imgsrc: ""
  }

  componentDidMount() {
     axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/154`)//https://collectionapi.metmuseum.org/public/collection/v1/objects/1738
      .then(res => {
        console.log(res);
        const imgsrc = res.data;
        console.log(imgsrc);
        this.setState({ imgsrc });
      })
  }

  render() {
    return (
      <div>
        <img src={this.state.imgsrc.primaryImage} alt="met" />
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