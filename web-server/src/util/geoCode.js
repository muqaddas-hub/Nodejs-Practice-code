const request = require('request')

const geocode = (address, callback) =>{
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+encodeURIComponent(address)+".json?access_token=pk.eyJ1IjoibXVxYWRkYXMwNCIsImEiOiJjanl5bmgzMzIwNTY4M2ZtcnlwYmh6c3Z3In0.KcU9f29F6qMwykYx56zUVA";
    request({url, json: true}, (error, {body}) =>{
        if(error){
            callback("Unable to connect to the location service!", undefined)
        }else if(body.features.length === 0){
            callback("Unabele to find location. Try another search ", undefined)
        }else{
            callback(undefined, {
                longitude : body.features[0].center[0],
                latitude : body.features[0].center[1],
                location : body.features[0].place_name 
            })
        }
    })
}


module.exports = geocode






// const geoCOdeUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibXVxYWRkYXMwNCIsImEiOiJjanl5bmgzMzIwNTY4M2ZtcnlwYmh6c3Z3In0.KcU9f29F6qMwykYx56zUVA"
// request({url: geoCOdeUrl, json: true}, (error,response) => {
//     if(error){
//         console.log("Unable to connect to the location service!")
//     }else if(response.body.features.length === 0){
//         console.log("Unabele to find location. Try another search ")
//     }else{
//         const longitude = response.body.features[0].center[0];
//         const latitude = response.body.features[0].center[1];
//         console.log(`${longitude} , ${latitude}`)
//     }    
// })