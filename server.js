const express = require('express');
const fs = require('fs');
const cors = require('cors');

const port = 3000;

// read the json file
const jsonData = fs.readFileSync('./src/data.json', 'utf8');
// return a random number between 0 and the length of the json file
async function quote(){
    const jsonLength = JSON.parse(jsonData).length;
    const random = Math.floor(Math.random() * jsonLength);
    
    return random;
}

const app = express();
app.use(cors());

app.listen(port, () => {
    console.log(`app running at port ${port}`);
});

app.get('/', async (req, res) => {
    const data = JSON.parse(jsonData);
    try{
        const idx = await quote();
        res.json(data[idx]);
    } catch(err){
        console.log(err)
        res.status(500).send(err);
    }
});