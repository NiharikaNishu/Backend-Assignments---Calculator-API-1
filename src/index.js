const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.post('/add', (req, res) => {
    let firstNumber = req.body.num1;
    let secondNumber = req.body.num2;
    
    if(isNaN(firstNumber) || isNaN(secondNumber)) {
        res.send(JSON.stringify({
            status: "success",
            message: "Invalid data types",
            sum: undefined
        }));
        res.end();
        return; 
    } else {
        if(parseInt(firstNumber) < -1000000 || parseInt(secondNumber) < -1000000) {
            res.send(JSON.stringify({
                status: "error",
                message: "Underflow",
                sum: undefined
            }));
            res.end();
            return;   
        } else if(parseInt(firstNumber) > 1000000 || parseInt(secondNumber) > 1000000 || (parseInt(firstNumber) + parseInt(secondNumber) > 1000000)) {
            res.send(JSON.stringify({
                status: "error",
                message: "Overflow",
                sum: undefined
            }));
            res.end();
            return;
        } else {
            res.send(JSON.stringify({
                status: "success",
                message: "the sum of given two numbers",
                sum: parseInt(firstNumber) + parseInt(secondNumber)
            }));
            res.end();
        }
    }
});

app.post('/sub', (req, res) => {
    let firstNumber = req.body.num1;
    let secondNumber = req.body.num2;

    if(isNaN(firstNumber) || isNaN(secondNumber)) {
        res.send(JSON.stringify({
            status: "error",
            message: "Invalid data types",
            difference: undefined
        }));
        res.end();
        return; 
    } else {
        if(parseInt(firstNumber) < -1000000 || parseInt(secondNumber) < -1000000 || (parseInt(firstNumber) - parseInt(secondNumber) < -1000000)) {
            res.send(JSON.stringify({
                status: "error",
                message: "Underflow",
                difference: undefined
            }));
            res.end();
            return;
        } else if(parseInt(firstNumber) > 1000000 || parseInt(secondNumber) > 1000000) {
            res.send(JSON.stringify({
                status: "error",
                message: "Overflow",
                difference: undefined
            }));
            res.end();
            return;
        } else {
            res.send(JSON.stringify({
                status: "success",
                message: "the difference of given two numbers",
                difference: parseInt(firstNumber) - parseInt(secondNumber)
            }));
            res.end();
            return;
        }
    }
});

app.post('/multiply', (req, res) => {
    let firstNumber = req.body.num1;
    let secondNumber = req.body.num2;

    if(isNaN(firstNumber) || isNaN(secondNumber)) {
        res.send(JSON.stringify({
            status: "error",
            message: "Invalid data types",
            result: undefined
        }));
        res.end();
        return;
    } else {
        if(parseInt(firstNumber) > 1000000 || parseInt(secondNumber) > 1000000) {
            res.send(JSON.stringify({
                status: "error",
                message: "Overflow",
                result: undefined
            }));
            res.end();
            return;
        } else if(parseInt(firstNumber) < -1000000 || parseInt(secondNumber) < -1000000) {
            res.send(JSON.stringify({
                status: "error",
                message: "Underflow",
                result: undefined
            }));
            res.end();
            return;
        } else {
            res.send(JSON.stringify({
                status: "success",
                message: "The product of given numbers",
                result: parseInt(firstNumber) * parseInt(secondNumber)
            }));
            res.end();
            return;
        }
    }
});

app.post('/divide', (req, res) => {
    let firstNumber = req.body.num1;
    let secondNumber = req.body.num2;

    if(secondNumber === 0) {
        res.send(JSON.stringify({
            status: "error",
            message: "Cannot divide by zero",
            result: parseInt(firstNumber) / parseInt(secondNumber)
        }));
        res.end();
        return;
    }

    if(isNaN(firstNumber) || isNaN(secondNumber)) {
        res.send(JSON.stringify({
            status: "error",
            message: "Invalid data types",
            result: undefined
        }));
        res.end();
        return;
    } else {
        if(parseInt(firstNumber) > 1000000 || parseInt(secondNumber) > 1000000) {
            res.send(JSON.stringify({
                status: "error",
                message: "Overflow",
                result: undefined
            }));
            res.end();
            return;
        } else if(parseInt(firstNumber) < -1000000 || parseInt(secondNumber) < -1000000) {
            res.send(JSON.stringify({
                status: "error",
                message: "Underflow",
                result: undefined
            }));
            res.end();
            return;
        } else {
            res.send(JSON.stringify({
                status: "success",
                message: "The division of given numbers",
                result: parseInt(firstNumber) / parseInt(secondNumber)
            }));
            res.end();
            return;
        }
    }
});

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;