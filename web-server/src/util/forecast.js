const request = require('request');

const forecast = (longitude, latitude, callback) => {
    const url = `https://api.darksky.net/forecast/4015921ec47e0611b7d4b9885e347928/${longitude},${latitude}`;
    request({url, json: true}, (error, {body})=>{
        if(error){
            console.log("Unable to connect to weather service", undefined);
        }else if(body.error){
            console.log("Unable to find the location ", undefined)
        }else{
            const currentAttribute = body.currently;
            callback(undefined,body.daily.data[0].summary + ' it is currently '+ currentAttribute.temperature + ' degrees out. There is a ' + currentAttribute.precipProbability +' chance of rain.') 
        }
    })
}

module.exports = forecast