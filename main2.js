import express from 'express';

const app=express();
const PORT=3000;

app.get('/',(req,res) => {
    res.send("Welcome");
});
app.get('/',(req,res) => {
    res.send("Node");
});

app.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`);

});