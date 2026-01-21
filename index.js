// Gymnasie arbete
//Man får inte ha liten bokstav i react på funktioner

const express = require('express');
const app = express();
const port = process.env.port || 3000;

app.listen(port, () => {
    console.log("http://localhost:" + port);
});

// json-data i post-request (middleware)
app.use(express.json());
app.use(express.static("client"));

const cars = [
    { id: 1, brand: "Volvo", model: "V90", price: 650000 },
    { id: 2, brand: "BMW", model: "X5", price: 600000 },
    { id: 3, brand: "Audi", model: "A6", price: 300000 },
    { id: 4, brand: "Mercedes", model: "C-Class", price: 550000 },
    { id: 5, brand: "Tesla", model: "Model 3", price: 800000 }
];


// routes
app.get("/cars", (req,res)=>{
    res.json(cars);
});
