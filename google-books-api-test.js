var axios = require("axios");

require("dotenv").config();

axios({
    method: "GET",
    url: "https://www.googleapis.com/books/v1/volumes?q=pride+prejudice&key=" + process.env.REACT_APP_API_KEYS})
    .then(function(response) {
        console.log(response.data.items[0].searchInfo);
    })
    .catch(function(error){
        console.log(error);
    })