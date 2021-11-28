const express = require('express');
const app = express();
const PORT = 8080;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET , PUT , POST , DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, x-requested-with");
    next(); // Important
})

app.use( express.json() );

app.get('/sensor', (req, res) => {
    res.status(200).send([
        { 
          'sensor': 'Temperature', 
          'value': '23', 
          'timestamp': '12345678',
          'unit': '°C'
        },
        { 
          'sensor': 'CO2', 
          'value': '500', 
          'timestamp': '52345678',
          'unit': 'ppm'
        },
        { 
          'sensor': 'Humidity', 
          'value': '37', 
          'timestamp': '92345678',
          'unit': '%H'
    
        },
      ])
});

app.listen(
    process.env.PORT || PORT,
    () => console.log(`It is alive on port ${PORT}`)
)