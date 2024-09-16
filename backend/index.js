
const express = require('express')
const connectToMongo = require("./connectToDB");
const top10Model = require("./models/top10");

const app = express()
const port = 3000

var cors = require('cors')
app.use(cors())

// Connecting to MongoDb
connectToMongo()


// Fetch top 10 results and saves in database
const fetchResultsAndStore=async ()=>{
    const response = await fetch('https://api.wazirx.com/api/v2/tickers');
    const data = await response.json()
    const top10 = Object.keys(data).slice(0, 10).map((key) => data[key]);

    // Deleting previously stored top10 from database
    await top10Model.deleteMany({ });

    // Adding top10 to database
    for (let i = 0; i < top10.length; i++) {
        const {name, last, buy, sell, volume, base_unit } = top10[i];
        const obj = await top10Model({
            name, last, buy, sell, volume, base_unit 
          });
          const savedObj = await obj.save();
    }
   
}
fetchResultsAndStore()


app.get('/', (req, res) => {
    res.send('Hello !')
})

// Endpoint to get data from database
app.get('/getdata', async (req, res) => {
  const data = await top10Model.find({})  
  res.send({data})
})

app.listen(port, () => {
  console.log(`App Running on http://localhost:${port}`)
})