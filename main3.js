import express from 'express';

const app=express();
const PORT=3000; 
app.use=(express.json());

app.post('/submit',(req,res) => {
    const {name,email}=req.body;
    res.send(`Recevied info ${nmae} and ${email}`);
});

app.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`);

});