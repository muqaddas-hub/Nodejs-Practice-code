/**
 * Dark sky api is being used for the weather app
 * here are the credentials for darksky
 * username: muqaddas.rashid04@gmail.com
 * password: darkskyapi
 * 
 * username: muqaddas04
 * password: mapboxapi
 */
const request = require('request');
const gecode = require('./util/geoCode.js')
const forecast = require('./util/forecast.js')
const address = "Pakistan"
gecode(address,(error,{longitude, latitude, location}) => {
    if(error){
        console.log(error)
    }else{
        console.log(`longitude ${longitude}, latitude ${latitude}, location ${location}`)
        forecast(latitude,longitude, (error, data)=>{
            if(error){
                console.log(error);
            }else{
                console.log(data);
            }
        }) 
    }
})


