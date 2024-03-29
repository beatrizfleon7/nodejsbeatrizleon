const axios = require('axios');

// TEST-0=> get('/superheros')
// Commentaire du test = ce qu'on cherche a faire
axios.get('http://localhost:3000/superheros')
  .then(function (response) {
    console.log(response.data) // handle succes
    // { name: 'Environnement', id: 3 }
  })
  .catch(function (error) {
    console.log(error) // handle error
  })
  .then(function () {
    console.log('--- --- ---')
  });

// TEST-1 => post('/superheros')
// Commentaire du test = ce qu'on cherche a faire
axios.post('http://localhost:3000/superheros', {id: 4, name: 'LadyBug'})
  .then(function (response) {
    console.log(response.data) // handle succes
    // { name: 'Environnement', id: 3 }
  })
  .catch(function (error) {
    console.log(error) // handle error
  })
  .then(function () {
    console.log('--- --- ---')
  });


// TEST-2=> get('/superheros:id')
// Commentaire du test = ce qu'on cherche a faire
axios.get('http://localhost:3000/superheros/2')
  .then(function (response) {
    console.log(response.data) // handle succes
    // { name: 'Environnement', id: 3 }
  })
  .catch(function (error) {
    console.log(error) // handle error
  })
  .then(function () {
    console.log('--- --- ---')
  });


// TEST-3 => delete('/superheros/:id')
// Commentaire du test = ce qu'on cherche a faire
axios.delete('http://localhost:3000/superheros/1')
  .then(function (response) {
    console.log(response.data) // handle succes
    // { name: 'Environnement', id: 3 }
  })
  .catch(function (error) {
    console.log(error) // handle error
  })
  .then(function () {
    console.log('--- --- ---')
  });


// TEST-4 => put('/superheros/:id')
// Commentaire du test = ce qu'on cherche a faire
axios.put('http://localhost:3000/superheros/2',{id:2, name:'Pipi Langstrump'})
.then(function (response) {
  console.log(response.data) // handle succes
  // { name: 'Environnement', id: 3 }
})
.catch(function (error) {
  console.log(error) // handle error
})
.then(function () {
  console.log('--- --- ---')
});









































// get hello-world
// axios.post('http://localhost:3000/get-db-collection/')
//   .then(function (response) {
//     console.log(response.data) // handle succes
//   })
//   .catch(function (error) {
//     console.log('error') // handle error
//   })
//   .then(function () {
//     console.log('--- --- ---')
//   });


// //
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

// //
// // axios.get('http://localhost:3000/categories?name=Technologie')
// //   .then(function (response) {// handle succes
// //     console.log(response.data);
// //   })
// //   .catch(function (error) { // handle error
// //     console.log(error);
// //   })
// //   .then(function () {
// //     console.log('--- --- ---')
// //   });

// // parse object and add params :id
// // axios.put('http://localhost:3000/body-parser-object/1', {login: 'test', password: 'pwd' })
// //   .then(function (response) {
// //     console.log(response.data) // handle succes
// //   })
// //   .catch(function (error) {
// //     console.log(error) // handle error
// //   })
// //   .then(function () {
// //     console.log('--- --- ---')
// //   });


// // parse object and convert to string
// // axios.post('http://localhost:3000/body-parser-string/', {login: 'test', password: 'pwd' })
// //   .then(function (response) {// handle succes
// //     console.log(response.data);
// //   })
// //   .catch(function (error) { // handle error
// //     console.log(error);
// //   })
// //   .then(function () {
// //     console.log('--- --- ---')
// //   });


// // authenticate to db with login and password
// // axios.post('http://localhost:3000/authentification-to-db/', 
// //   {login: 'itakad@gmail.com', password: 'itakad2020' })
// //   .then(function (response) {// handle succes
// //     console.log(response.data);
// //   })
// //   .catch(function (error) { // handle error
// //     console.log(error);
// //   })
// //   .then(function () {
// //     console.log('--- --- ---')
// //   });


// // // parse object and convert to string
// axios.get('http://localhost:3000/get-db-collection/Categories?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjMzNTEzMDU4LCJleHAiOjE2MzYxMDUwNTh9.Pj7citQPQEysxKMMk24jzsrbgYHwR8HB9ijmiCIdpKU')
//   .then(function (response) {// handle succes
//     console.log(response.data);
//   })
//   .catch(function (error) { // handle error
//     console.log(error);
//   })
//   .then(function () {
//     console.log('--- --- ---')
//   });


// //


