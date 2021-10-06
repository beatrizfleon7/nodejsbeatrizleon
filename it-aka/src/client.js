
   
const axios = require('axios');


//authentification-to-db

// // parse object and convert to string
// axios.get('http://localhost:3000/authentification-to-db', {login: 'itakad@gmail.com', password: 'itakad2020' })
//   .then(function (response) {// handle succes
//     console.log(response.data);
//   })
//   .catch(function (error) { // handle error
//     console.log(error);
//   })
//   .then(function () {
//     console.log('--- --- ---')
//   });


  axios.get('http://localhost:3000/get-db-collection/categories')
  .then(function (response) {// handle succes
    console.log(response.data);
  })
  .catch(function (error) { // handle error
    console.log(error);
  })
  .then(function () {
    console.log('--- --- ---')
  });


// // get hello-world
// axios.get('http://localhost:3000/hola')
//   .then(function (response) {
//     console.log(response.data) // handle succes

//     //la reponse c'est celle que return la arrow fonction 
//   })
//   .catch(function (error) {
//     console.log('error') // handle error
//   })
//   .then(function () {
//     console.log('--- --- ---')
//   });



// // parse object
// axios.post('http://localhost:3000/body-parser-object/', {login: 'test', password: 'pwd' })
// .then(function (response) { 
//   console.log(response.data) // handle succes
// })
// .catch(function (error) { 
//   console.log(error) // handle error
// })
// .then(function () {
//   console.log('--- --- ---')
// });



// // parse object and add params :id
// axios.put('http://localhost:3000/body-parser-object/1', {login: 'test', password: 'pwd' })
// .then(function (response) { 
// console.log(response.data) // handle succes
// })
// .catch(function (error) { 
// console.log(error) // handle error
// })
// .then(function () {
// console.log('--- --- ---')
// });


// // parse object and convert to string
// axios.post('http://localhost:3000/body-parser-string/', {login: 'test', password: 'pwd' })
// .then(function (response) {// handle succes
// console.log(response.data);
// })
// .catch(function (error) { // handle error
// console.log(error);
// })
// .then(function () {
// console.log('--- --- ---')
// });



//const axios = require('axios');

// TEST-0
// Commentaire du test = ce qu'on cherche a faire
// axios.post('http://localhost:3000/superheros', {id: '4', name: 'LadyBug'})
//   .then(function (response) {
//     console.log(response.data) // handle succes
//     // { name: 'Environnement', id: 3 }
//   })
//   .catch(function (error) {
//     console.log(error) // handle error
//   })
//   .then(function () {
//     console.log('--- --- ---')
//   });

// TEST-1
// Commentaire du test = ce qu'on cherche a faire
// axios.post('http://localhost:3000/category/', {name: 'Environnement', pays: 'Angleterre'})
//   .then(function (response) {
//     console.log(response.data) // handle succes
//     // { name: 'Environnement', id: 3 }
//   })
//   .catch(function (error) {
//     console.log(error) // handle error
//   })
//   .then(function () {
//     console.log('--- --- ---')
//   });

