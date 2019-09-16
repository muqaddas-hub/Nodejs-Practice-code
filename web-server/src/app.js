const path = require("path")
const express = require('express');
const hbs = require('hbs');
const geoCode = require('../src/util/geoCode.js')
const forecast = require('../src/util/forecast.js')
const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname,'../templates/partials')

// Setup handlebars engine and views locaation
app.set('view engine', 'hbs');  
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res)=>{
    res.render('index', {
        title : 'Weather',
        name : 'Muqaddas Rashid'
    }); 
});

app.get('/help', (req,res)=>{
    res.render('help', {
        title : 'Help',
        helpText : 'This is some helpful text!',
        name: 'Muqaddas Rashid'
    }); 
});

app.get('/about', (req,res)=>{
    res.render("about",{
        title: 'About',
        name: 'Muqaddas Rashid'
    })
});

app.get('/weather', (req,res)=>{
    if(!req.query.address){
        return res.send({
            error : 'You must provide a weather.'
        })
    }
    geoCode(req.query.address,(error,{longitude, latitude, location} = {}) => {
        if(error){
            return res.send({
                'error' : error
            })
        }else{
            forecast(latitude,longitude, (error, data)=>{
                if(error){
                    return res.send({
                        'error' : error
                    })
                }else{
                    res.send({
                        forecast: data,
                        location : req.query.address
                    })
                }
            }) 
        }
    })
    
});

app.listen(3000, () => {
    console.log("Server is up on port 3000");
});