
   
const axios = require('axios');

// get hello-world
axios.get('http://localhost:3000/hola')
  .then(function (response) {
    console.log(response.data) // handle succes

    //la reponse c'est ce qu'elle return la arrow fonction 
  })
  .catch(function (error) {
    console.log('error') // handle error
  });