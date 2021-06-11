import axios from 'axios';
import { useState } from 'react';

const Paintings = () => {
  
  const [reactgetstuff, getstuff] = useState("")

  const getMET = () => {

    axios.get('https://collectionapi.metmuseum.org/public/collection/v1/objects/45734')
    .then(function (response) {
      // handle success
      console.log(response);
      reactgetstuff = response;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  }

  return(
    <div>
      <img src={reactgetstuff} alt="met" />
    </div>
  )
}

export default Paintings