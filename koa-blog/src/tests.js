const axios = require('axios');

var jwt = null;


// auth
axios.post('http://localhost:3000/auth', {
  login: 'itakad@gmail.com', 
  password: 'itakad2020' 
})
.then(function(response) {
 //el servidor me devuelve la response que es el objeto jwt {jwt:jwt}
     jwt = response.data; 
     console.log(`Token --> ${jwt.jwt}`);

     //get articles
      axios.get(`http://localhost:3000/articles?jwt=${jwt.jwt}`)
      .then((response) => {
        console.log(`Response /articles --> ${response.data}`)

      }); 









})



