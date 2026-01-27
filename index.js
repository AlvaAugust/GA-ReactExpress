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

const element = [
    { id: 1, brand: "Volvo", price: 650000 },
    { id: 2, brand: "BMW", price: 600000 },
    { id: 3, brand: "Audi", price: 300000 },
    { id: 4, brand: "Mercedes", price: 550000 },
    { id: 5, brand: "Tesla", price: 800000 }
];


// routes
app.get("/element", (req,res)=>{
    res.json(element);
});
