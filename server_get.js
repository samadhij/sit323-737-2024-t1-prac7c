const express= require("express");
const app= express();
const addTwoNumber= (n1,n2) => {
    return n1+n2;
}

const subtractTwoNumbers = (n1, n2) => {
    return n1 - n2;
};

const multiplyTwoNumbers = (n1, n2) => {
    return n1 * n2;
};

const divideTwoNumbers = (n1, n2) => {
    if (n2 === 0) {
        throw new Error("Division by zero error");
    }
    return n1 / n2;
};

app.get("/addTwoNumber", (req,res)=>{
    const n1= parseInt(req.query.n1);
    const n2=parseInt(req.query.n2);
    const result = addTwoNumber(n1,n2);
    res.json({statuscocde:200, data: result }); 
});

app.get("/subtract", (req, res) => {
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);
    const result = subtractTwoNumbers(n1, n2);
    res.json({ statuscode: 200, data: result });
});

app.get("/multiply", (req, res) => {
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);
    const result = multiplyTwoNumbers(n1, n2);
    res.json({ statuscode: 200, data: result });
});

app.get("/divide", (req, res) => {
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);
    try {
        const result = divideTwoNumbers(n1, n2);
        res.json({ statuscode: 200, data: result });
    } catch (error) {
        res.status(400).json({ statuscode: 400, error: error.message });
    }
});

app.get("/", (req, res) => {
    const n1 = "<html><body><H1>HELLO THERE </H1></body></html>";
    res.set('Content-Type', 'text/html');
    res.send(Buffer.from(n1));     
})
console.log (addTwoNumber(19,12));
const port=3040;
app.listen(port,()=> {
    console.log("hello i'm listening to port "+port);
})