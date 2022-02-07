const express = require('express');
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET , PUT , POST , DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, x-requested-with");
    next(); // Important
})

app.use( express.json() );

app.get('/api/stations', (req, res) => {
    res.status(200).send(locationsData)
});
app.get('/api/humidity/0', (req, res) => {
    res.status(200).send(dataHumidity0)
});
app.get('/api/humidity/1', (req, res) => {
    res.status(200).send(dataHumidity1)
});
app.get('/api/temperature/0/mean', (req, res) => {
    res.status(200).send(dataTempertureMean0)
});
app.get('/api/temperature/1/mean', (req, res) => {
    res.status(200).send(dataTempertureMean1)
});
app.get('/api/co2/0/mean', (req, res) => {
    res.status(200).send(dataCo2Mean0)
});
app.get('/api/co2/1/mean', (req, res) => {
    res.status(200).send(dataCo2Mean1)
});
app.get('/api/humidity/0/mean', (req, res) => {
    res.status(200).send(dataHumidityMean0)
});
app.get('/api/humidity/1/mean', (req, res) => {
    res.status(200).send(dataHumidityMean1)
});
app.get('/api/pressure/0/mean', (req, res) => {
    res.status(200).send(dataPressureMean0)
});
app.get('/api/pressure/1/mean', (req, res) => {
    res.status(200).send(dataPressureMean1)
});
app.get('/api/bright/0/mean', (req, res) => {
    res.status(200).send(dataBrightMean0)
});
app.get('/api/bright/1/mean', (req, res) => {
    res.status(200).send(dataBrightMean1)
});
app.get('/api/pm2_5amountconc/0/mean', (req, res) => {
    res.status(200).send(dataPm25nConcMean0)
});
app.get('/api/pm2_5amountconc/1/mean', (req, res) => {
    res.status(200).send(dataPm25nConcMean1)
});
app.get('/api/pm10amountconc/0/mean', (req, res) => {
    res.status(200).send(dataPm10nConcMean0)
});
app.get('/api/pm10amountconc/1/mean', (req, res) => {
    res.status(200).send(dataPm10nConcMean1)
});
app.get('/api/pm2_5conc/0/mean', (req, res) => {
    res.status(200).send(dataPm25mConcMean0)
});
app.get('/api/pm2_5conc/1/mean', (req, res) => {
    res.status(200).send(dataPm25mConcMean1)
});
app.get('/api/pm10conc/0/mean', (req, res) => {
    res.status(200).send(dataPm10mConcMean0)
});
app.get('/api/pm10conc/1/mean', (req, res) => {
    res.status(200).send(dataPm10mConcMean1)
});



app.get('/api/pm2_5conc/0', (req, res) => {
    res.status(200).send(dataPm25Conc0)
});
app.get('/api/pm2_5conc/1', (req, res) => {
    res.status(200).send(dataPm25Conc1)
});
app.get('/api/pm2_5amountconc/0', (req, res) => {
    res.status(200).send(dataPm25AmountConc0)
});
app.get('/api/pm2_5amountconc/1', (req, res) => {
    res.status(200).send(dataPm25AmountConc1)
});
app.get('/api/pm10conc/0', (req, res) => {
    res.status(200).send(dataPm10Conc0)
});
app.get('/api/pm10conc/1', (req, res) => {
    res.status(200).send(dataPm10Conc1)
});
app.get('/api/pm10amountconc/0', (req, res) => {
    res.status(200).send(dataPm10AmountConc0)
});
app.get('/api/pm10amountconc/1', (req, res) => {
    res.status(200).send(dataPm10AmountConc1)
});
// app.get('/api/humidity/0/mean', (req, res) => {
//     res.status(200).send(dataHumidityMean0)
// });
// app.get('/api/humidity/1/mean', (req, res) => {
//     res.status(200).send(dataHumidityMean1)
// });

app.listen(
    process.env.PORT || PORT,
    () => console.log(`It is alive on port ${PORT}`)
)

locationsData = [
  {
    'name': 'Station A',
    'id': 0,
  },
  {
    'name': 'Station B',
    'id': 1,
  },
]
dataHumidity0 = {
  unit: "%H",
  name: "Humidity",
  dataArray : [
    {
    "time": "2021-12-11T23:00:22.000Z",
    "data": 50.47963234709777,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-11T23:15:22.000Z",
    "data": 53.47963234709777,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-11T23:30:22.000Z",
    "data": 45.47963234709777,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-11T23:45:30.000Z",
    "data": 46.76583281057673,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T00:00:30.000Z",
    "data": 49.76583281057673,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T00:15:35.000Z",
    "data": 52.8573386303479,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T00:30:35.000Z",
    "data": 51.8573386303479,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T00:45:35.000Z",
    "data": 49.8573386303479,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T01:00:37.000Z",
    "data": 53.46635999878657,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T01:15:38.000Z",
    "data": 46.346140226125556,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T01:30:38.000Z",
    "data": 51.346140226125556,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T01:45:38.000Z",
    "data": 45.346140226125556,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T02:00:38.000Z",
    "data": 41.346140226125556,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T02:15:38.000Z",
    "data": 45.346140226125556,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T02:30:38.000Z",
    "data": 48.346140226125556,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T02:45:38.000Z",
    "data": 47.346140226125556,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T03:00:38.000Z",
    "data": 45.346140226125556,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T03:15:38.000Z",
    "data": 46.346140226125556,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T03:30:38.000Z",
    "data": 45.346140226125556,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T03:45:38.000Z",
    "data": 47.346140226125556,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T04:00:38.000Z",
    "data": 49.346140226125556,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T04:15:38.000Z",
    "data": 50.346140226125556,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T04:31:08.000Z",
    "data": 49.59461523233687,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T04:45:08.000Z",
    "data": 51.59461523233687,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T05:00:28.000Z",
    "data": 45.358119561928454,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T05:15:28.000Z",
    "data": 44.358119561928454,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T05:30:28.000Z",
    "data": 47.358119561928454,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T05:45:28.000Z",
    "data": 46.358119561928454,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T06:00:28.000Z",
    "data": 45.358119561928454,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T06:15:01.000Z",
    "data": 47.93046690274054,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T06:30:01.000Z",
    "data": 46.93046690274054,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T06:45:01.000Z",
    "data": 47.93046690274054,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T07:00:01.000Z",
    "data": 46.93046690274054,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T07:15:01.000Z",
    "data": 47.93046690274054,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T07:30:26.000Z",
    "data": 48.68357520333397,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T07:45:26.000Z",
    "data": 49.68357520333397,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T08:00:59.000Z",
    "data": 52.2746047816262,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T08:15:31.000Z",
    "data": 51.239490712613815,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T08:30:35.000Z",
    "data": 53.772479938658435,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T08:45:35.000Z",
    "data": 51.772479938658435,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T09:00:35.000Z",
    "data": 49.772479938658435,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T09:15:35.000Z",
    "data": 50.772479938658435,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T09:30:35.000Z",
    "data": 47.772479938658435,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T09:45:35.000Z",
    "data": 48.772479938658435,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T10:00:35.000Z",
    "data": 47.772479938658435,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T10:15:35.000Z",
    "data": 51.772479938658435,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T10:30:35.000Z",
    "data": 50.772479938658435,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T10:45:35.000Z",
    "data": 51.772479938658435,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T11:00:35.000Z",
    "data": 50.772479938658435,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T11:15:35.000Z",
    "data": 47.772479938658435,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T11:30:35.000Z",
    "data": 48.772479938658435,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T11:45:35.000Z",
    "data": 46.772479938658435,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T12:00:35.000Z",
    "data": 47.772479938658435,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T12:15:35.000Z",
    "data": 50.772479938658435,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T12:30:35.000Z",
    "data": 51.772479938658435,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T12:45:35.000Z",
    "data": 48.772479938658435,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T13:00:35.000Z",
    "data": 49.772479938658435,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T13:15:43.000Z",
    "data": 49.711473017395676,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T13:30:43.000Z",
    "data": 48.711473017395676,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T13:45:43.000Z",
    "data": 49.711473017395676,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T14:00:43.000Z",
    "data": 47.711473017395676,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T14:15:43.000Z",
    "data": 48.711473017395676,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T14:30:43.000Z",
    "data": 46.711473017395676,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T14:45:43.000Z",
    "data": 48.711473017395676,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T15:00:43.000Z",
    "data": 47.711473017395676,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T15:15:43.000Z",
    "data": 44.711473017395676,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T15:30:43.000Z",
    "data": 47.711473017395676,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T15:45:25.000Z",
    "data": 48.4364690550994,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T16:00:27.000Z",
    "data": 54.31021471541145,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T16:15:10.000Z",
    "data": 51.04051567997523,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T16:30:10.000Z",
    "data": 50.04051567997523,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T16:45:10.000Z",
    "data": 50.04051567997523,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T17:00:10.000Z",
    "data": 51.04051567997523,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T17:15:10.000Z",
    "data": 52.04051567997523,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T17:30:10.000Z",
    "data": 51.04051567997523,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T17:45:10.000Z",
    "data": 49.04051567997523,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T18:00:10.000Z",
    "data": 51.04051567997523,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T18:15:10.000Z",
    "data": 50.04051567997523,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T18:30:10.000Z",
    "data": 51.04051567997523,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T18:45:10.000Z",
    "data": 52.04051567997523,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T19:00:54.000Z",
    "data": 50.9466184960919,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T19:15:54.000Z",
    "data": 51.9466184960919,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T19:30:54.000Z",
    "data": 52.9466184960919,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T19:45:54.000Z",
    "data": 50.9466184960919,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T20:00:31.000Z",
    "data": 47.68647259671427,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T20:15:40.000Z",
    "data": 49.06969484577621,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T20:30:40.000Z",
    "data": 47.06969484577621,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T20:45:40.000Z",
    "data": 50.06969484577621,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T21:00:40.000Z",
    "data": 49.06969484577621,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T21:15:40.000Z",
    "data": 51.06969484577621,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T21:30:40.000Z",
    "data": 52.06969484577621,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T21:45:40.000Z",
    "data": 51.06969484577621,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T22:00:40.000Z",
    "data": 53.06969484577621,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T22:15:40.000Z",
    "data": 51.06969484577621,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T22:30:40.000Z",
    "data": 50.06969484577621,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
    {
    "time": "2021-12-12T22:45:40.000Z",
    "data": 52.06969484577621,
    "sensor": "201",
    "station": "0",
    "units": "%H"
    },
  ]
}
dataHumidity1 = {
  unit: "%H",
  name: "Humidity",
  dataArray : [
    {
      "time": "2021-12-11T23:00:18.000Z",
      "data": 47.976776592156774,
      "sensor": "201",
      "station": "1",
      "units": "%H"
      },
      {
      "time": "2021-12-11T23:04:28.000Z",
      "data": 52.042099203553775,
      "sensor": "201",
      "station": "1",
      "units": "%H"
      },
      {
      "time": "2021-12-11T23:58:55.000Z",
      "data": 48.11170638839452,
      "sensor": "201",
      "station": "1",
      "units": "%H"
      },
      {
      "time": "2021-12-12T00:03:05.000Z",
      "data": 49.9101590430957,
      "sensor": "201",
      "station": "1",
      "units": "%H"
      },
      {
      "time": "2021-12-12T01:03:06.000Z",
      "data": 54.025285448526894,
      "sensor": "201",
      "station": "1",
      "units": "%H"
      },
      {
      "time": "2021-12-12T01:03:31.000Z",
      "data": 45.80478693311881,
      "sensor": "201",
      "station": "1",
      "units": "%H"
      },
      {
      "time": "2021-12-12T01:40:56.000Z",
      "data": 52.48468470222107,
      "sensor": "201",
      "station": "1",
      "units": "%H"
      },
      {
      "time": "2021-12-12T04:37:01.000Z",
      "data": 51.49260869128676,
      "sensor": "201",
      "station": "1",
      "units": "%H"
      },
      {
      "time": "2021-12-12T05:31:34.000Z",
      "data": 48.42812520057013,
      "sensor": "201",
      "station": "1",
      "units": "%H"
      },
      {
      "time": "2021-12-12T05:33:08.000Z",
      "data": 47.05221947585801,
      "sensor": "201",
      "station": "1",
      "units": "%H"
      },
      {
      "time": "2021-12-12T05:41:07.000Z",
      "data": 47.33244762632522,
      "sensor": "201",
      "station": "1",
      "units": "%H"
      },
      {
      "time": "2021-12-12T06:09:56.000Z",
      "data": 53.476965049490914,
      "sensor": "201",
      "station": "1",
      "units": "%H"
      },
      {
      "time": "2021-12-12T06:10:33.000Z",
      "data": 47.41031675875326,
      "sensor": "201",
      "station": "1",
      "units": "%H"
      },
      {
      "time": "2021-12-12T06:51:51.000Z",
      "data": 50.14191560381108,
      "sensor": "201",
      "station": "1",
      "units": "%H"
      },
      {
      "time": "2021-12-12T07:20:37.000Z",
      "data": 52.791195988603825,
      "sensor": "201",
      "station": "1",
      "units": "%H"
      },
      {
      "time": "2021-12-12T07:54:42.000Z",
      "data": 51.143506779166714,
      "sensor": "201",
      "station": "1",
      "units": "%H"
      },
      {
      "time": "2021-12-12T08:33:54.000Z",
      "data": 45.38249234471207,
      "sensor": "201",
      "station": "1",
      "units": "%H"
      },
      {
      "time": "2021-12-12T08:53:33.000Z",
      "data": 47.33874076225132,
      "sensor": "201",
      "station": "1",
      "units": "%H"
      },
      {
      "time": "2021-12-12T09:04:10.000Z",
      "data": 46.23895741924818,
      "sensor": "201",
      "station": "1",
      "units": "%H"
      },
      {
      "time": "2021-12-12T09:14:02.000Z",
      "data": 53.243304539536425,
      "sensor": "201",
      "station": "1",
      "units": "%H"
      },
      {
      "time": "2021-12-12T10:37:15.000Z",
      "data": 47.9381035929664,
      "sensor": "201",
      "station": "1",
      "units": "%H"
      },
      {
      "time": "2021-12-12T10:38:46.000Z",
      "data": 46.63022783012801,
      "sensor": "201",
      "station": "1",
      "units": "%H"
      },
      {
      "time": "2021-12-12T10:53:35.000Z",
      "data": 52.30601440568743,
      "sensor": "201",
      "station": "1",
      "units": "%H"
      },
      {
      "time": "2021-12-12T12:26:46.000Z",
      "data": 50.80506668766504,
      "sensor": "201",
      "station": "1",
      "units": "%H"
      },
      {
      "time": "2021-12-12T12:38:16.000Z",
      "data": 49.68724234618072,
      "sensor": "201",
      "station": "1",
      "units": "%H"
      },
      {
      "time": "2021-12-12T12:38:27.000Z",
      "data": 49.26870876972401,
      "sensor": "201",
      "station": "1",
      "units": "%H"
      },
      {
      "time": "2021-12-12T12:39:19.000Z",
      "data": 52.52922567331222,
      "sensor": "201",
      "station": "1",
      "units": "%H"
      },
      {
      "time": "2021-12-12T12:41:50.000Z",
      "data": 47.33486791368825,
      "sensor": "201",
      "station": "1",
      "units": "%H"
      },
      {
      "time": "2021-12-12T12:57:00.000Z",
      "data": 45.16842891353535,
      "sensor": "201",
      "station": "1",
      "units": "%H"
      },
      {
      "time": "2021-12-12T13:15:33.000Z",
      "data": 50.346281859219026,
      "sensor": "201",
      "station": "1",
      "units": "%H"
      },
      {
      "time": "2021-12-12T13:23:04.000Z",
      "data": 54.73733658301015,
      "sensor": "201",
      "station": "1",
      "units": "%H"
      },
      {
      "time": "2021-12-12T14:59:41.000Z",
      "data": 52.28018689546171,
      "sensor": "201",
      "station": "1",
      "units": "%H"
      },
      {
      "time": "2021-12-12T15:30:13.000Z",
      "data": 50.088293051761326,
      "sensor": "201",
      "station": "1",
      "units": "%H"
      },
      {
      "time": "2021-12-12T17:32:22.000Z",
      "data": 54.28622712703327,
      "sensor": "201",
      "station": "1",
      "units": "%H"
      },
      {
      "time": "2021-12-12T18:36:16.000Z",
      "data": 49.761978586752996,
      "sensor": "201",
      "station": "1",
      "units": "%H"
      },
      {
      "time": "2021-12-12T20:05:28.000Z",
      "data": 53.97738803441648,
      "sensor": "201",
      "station": "1",
      "units": "%H"
      },
      {
      "time": "2021-12-12T20:21:11.000Z",
      "data": 50.309698801118714,
      "sensor": "201",
      "station": "1",
      "units": "%H"
      },
      {
      "time": "2021-12-12T21:20:56.000Z",
      "data": 45.382604468172104,
      "sensor": "201",
      "station": "1",
      "units": "%H"
      },
      {
      "time": "2021-12-12T22:13:20.000Z",
      "data": 52.608981173446836,
      "sensor": "201",
      "station": "1",
      "units": "%H"
      },
      {
      "time": "2021-12-12T22:29:34.000Z",
      "data": 51.25869685355215,
      "sensor": "201",
      "station": "1",
      "units": "%H"
      },
      {
      "time": "2021-12-12T22:41:44.000Z",
      "data": 53.70873710130357,
      "sensor": "201",
      "station": "1",
      "units": "%H"
      },
      {
      "time": "2021-12-12T22:53:10.000Z",
      "data": 54.73789558893531,
      "sensor": "201",
      "station": "1",
      "units": "%H"
      }
  ]
}
dataHumidityMean0 = [
  {
  "time": "1970-01-01T00:00:00.000Z",
  "mean": 50.61181432943884, 
  "unit": "%H",
  "name": "Luftfeuchtigkeit"
  }
]
dataHumidityMean1 = [
  {
  "time": "1970-01-01T00:00:00.000Z",
  "mean": 48.61181432943884, 
  "unit": "%H",
  "name": "Luftfeuchtigkeit"
  }
]
dataTempertureMean0 = [
  {
  "time": "1970-01-01T00:00:00.000Z",
  "mean": -3.61181432943884, 
  "unit": "˚C",
  "name": "Temperatur"
  }
]
dataTempertureMean1 = [
  {
  "time": "1970-01-01T00:00:00.000Z",
  "mean": 22.61181432943884, 
  "unit": "˚C",
  "name": "Temperatur"
  }
]
dataCo2Mean0 = [
  {
  "time": "1970-01-01T00:00:00.000Z",
  "mean": 501.61181432943884, 
  "unit": "ppm",
  "name": "CO2-Gehalt"
  }
]
dataCo2Mean1 = [
  {
  "time": "1970-01-01T00:00:00.000Z",
  "mean": 498.61181432943884, 
  "unit": "ppm",
  "name": "CO2-Gehalt"
  }
]
dataPressureMean0 = [
  {
  "time": "1970-01-01T00:00:00.000Z",
  "mean": 18.61181432943884, 
  "unit": "hPa",
  "name": "Druck"
  }
]
dataPressureMean1 = [
  {
  "time": "1970-01-01T00:00:00.000Z",
  "mean": 15.61181432943884, 
  "unit": "hPa",
  "name": "Druck"
  }
]
dataBrightMean0 = [
  {
  "time": "1970-01-01T00:00:00.000Z",
  "mean": 50.61181432943884, 
  "unit": "%",
  "name": "Helligkeit"
  }
]
dataBrightMean1 = [
  {
  "time": "1970-01-01T00:00:00.000Z",
  "mean": 30.61181432943884, 
  "unit": "%",
  "name": "Helligkeit"
  }
]
dataPm25nConcMean0 = [
  {
  "time": "1970-01-01T00:00:00.000Z",
  "mean": 16.61181432943884, 
  "unit": "#/cm³",
  "name": "PM2.5 Number Concentration"
  }
]
dataPm25nConcMean1 = [
  {
  "time": "1970-01-01T00:00:00.000Z",
  "mean": 30.61181432943884, 
  "unit": "#/cm³",
  "name": "PM2.5 Number Concentration"
  }
]
dataPm10nConcMean0 = [
  {
  "time": "1970-01-01T00:00:00.000Z",
  "mean": 18.61181432943884, 
  "unit": "#/cm³",
  "name": "PM10 Number Concentration"
  }
]
dataPm10nConcMean1 = [
  {
  "time": "1970-01-01T00:00:00.000Z",
  "mean": 33.61181432943884, 
  "unit": "#/cm³",
  "name": "PM10 Number Concentration"
  }
]
dataPm25mConcMean0 = [
  {
  "time": "1970-01-01T00:00:00.000Z",
  "mean": 30.61181432943884, 
  "unit": "µg/m³",
  "name": "PM2.5 Mass Concentration"
  }
]
dataPm25mConcMean1 = [
  {
  "time": "1970-01-01T00:00:00.000Z",
  "mean": 31.61181432943884, 
  "unit": "µg/m³",
  "name": "PM2.5 Mass Concentration"
  }
]
dataPm10mConcMean0 = [
  {
  "time": "1970-01-01T00:00:00.000Z",
  "mean": 35.61181432943884, 
  "unit": "µg/m³",
  "name": "PM10 Mass Concentration"
  }
]
dataPm10mConcMean1 = [
  {
  "time": "1970-01-01T00:00:00.000Z",
  "mean": 30.61181432943884, 
  "unit": "µg/m³",
  "name": "PM10 Mass Concentration"
  }
]


dataPm25Conc0 = {
  "name": "PM2.5MassConcentration",
  "unit": "µg/m³",
  "dataArray": [
      {
          "time": "2022-01-18T00:00:00.000Z",
          "data": 26.6670538948284,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T00:10:00.000Z",
          "data": 28.801277062065452,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T00:20:00.000Z",
          "data": 32.08279370644667,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T00:30:00.000Z",
          "data": 29.145610025753257,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T00:40:00.000Z",
          "data": 34.13143302639222,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T00:50:00.000Z",
          "data": 26.89379537288955,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T01:00:00.000Z",
          "data": 33.52925779243121,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T01:10:00.000Z",
          "data": 30.8314353200493,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T01:20:00.000Z",
          "data": 30.37981841088757,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T01:30:00.000Z",
          "data": 27.56766958763802,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T01:40:00.000Z",
          "data": 30.145854110486262,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T01:50:00.000Z",
          "data": 25.691975148914185,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T02:00:00.000Z",
          "data": 30.199307310819286,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T02:10:00.000Z",
          "data": 26.017465063496765,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T02:20:00.000Z",
          "data": 30.825282382847707,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T02:30:00.000Z",
          "data": 30.879609704284583,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T02:40:00.000Z",
          "data": 26.654674010207877,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T02:50:00.000Z",
          "data": 33.28724433201563,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T03:00:00.000Z",
          "data": 28.077532875828332,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T03:10:00.000Z",
          "data": 32.617388190387715,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T03:20:00.000Z",
          "data": 30.753387354791016,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T03:30:00.000Z",
          "data": 26.05239187703618,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T03:40:00.000Z",
          "data": 26.776603035449625,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T03:50:00.000Z",
          "data": 32.017127890880566,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T04:00:00.000Z",
          "data": 25.9378415665222,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T04:10:00.000Z",
          "data": 29.552148427645648,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T04:20:00.000Z",
          "data": 25.20363856915411,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T04:30:00.000Z",
          "data": 34.01834677615615,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T04:40:00.000Z",
          "data": 31.18229566920553,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T04:50:00.000Z",
          "data": 33.11115588642798,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T05:00:00.000Z",
          "data": 29.165650882153294,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T05:10:00.000Z",
          "data": 33.79680665304171,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T05:20:00.000Z",
          "data": 27.468498409548857,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T05:30:00.000Z",
          "data": 31.418905940503308,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T05:40:00.000Z",
          "data": 27.14530071957149,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T05:50:00.000Z",
          "data": 25.075739115883668,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T06:00:00.000Z",
          "data": 29.164746243134466,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T06:10:00.000Z",
          "data": 31.000674902179085,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T06:20:00.000Z",
          "data": 30.368164155745774,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T06:30:00.000Z",
          "data": 33.36850616515383,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T06:40:00.000Z",
          "data": 33.52135005150003,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T06:50:00.000Z",
          "data": 27.97873288566224,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T07:00:00.000Z",
          "data": 30.05030404392631,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T07:10:00.000Z",
          "data": 25.45576545705,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T07:20:00.000Z",
          "data": 25.823961049116512,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T07:30:00.000Z",
          "data": 28.784542672208392,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T07:40:00.000Z",
          "data": 31.289664306500704,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T07:50:00.000Z",
          "data": 29.297418221294635,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T08:00:00.000Z",
          "data": 25.84256154750327,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T08:10:00.000Z",
          "data": 32.55800572657508,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T08:20:00.000Z",
          "data": 27.870165843422377,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T08:30:00.000Z",
          "data": 26.81428152354052,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T08:40:00.000Z",
          "data": 33.09288341621699,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T08:50:00.000Z",
          "data": 27.299519607363948,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T09:00:00.000Z",
          "data": 26.69179424055142,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T09:10:00.000Z",
          "data": 27.576165573597564,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T09:20:00.000Z",
          "data": 28.402045060282585,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T09:30:00.000Z",
          "data": 26.787588871805198,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T09:40:00.000Z",
          "data": 34.844254883208976,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T09:50:00.000Z",
          "data": 32.294894957445976,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T10:00:00.000Z",
          "data": 32.65080275656058,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T10:10:00.000Z",
          "data": 33.04250682007451,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T10:20:00.000Z",
          "data": 29.52268778333687,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T10:30:00.000Z",
          "data": 30.697471126878835,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T10:40:00.000Z",
          "data": 28.841320873672952,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T10:50:00.000Z",
          "data": 25.833676936370388,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T11:00:00.000Z",
          "data": 29.895750332309444,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T11:20:00.000Z",
          "data": 33.64032352900399,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T11:30:00.000Z",
          "data": 26.008581787836253,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T11:40:00.000Z",
          "data": 26.92768807395222,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T11:50:00.000Z",
          "data": 27.23322280513791,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T12:00:00.000Z",
          "data": 33.094870780048666,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T12:10:00.000Z",
          "data": 30.728444329956258,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T12:20:00.000Z",
          "data": 34.33361494650944,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T12:30:00.000Z",
          "data": 28.112919572263582,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T12:40:00.000Z",
          "data": 34.25021803731349,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T12:50:00.000Z",
          "data": 33.5055333132075,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T13:00:00.000Z",
          "data": 34.754088878537,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T13:10:00.000Z",
          "data": 29.92634459436686,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T13:20:00.000Z",
          "data": 32.532465790821476,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T13:30:00.000Z",
          "data": 27.56742238736554,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T13:40:00.000Z",
          "data": 29.490501822905074,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T13:50:00.000Z",
          "data": 34.63167282692781,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T14:00:00.000Z",
          "data": 34.25860454043919,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T14:10:00.000Z",
          "data": 27.22051636926131,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T14:20:00.000Z",
          "data": 28.529352618003074,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T14:30:00.000Z",
          "data": 26.746050483548952,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T14:40:00.000Z",
          "data": 34.06158753236268,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T14:50:00.000Z",
          "data": 28.178699734115117,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T15:00:00.000Z",
          "data": 32.26270563568372,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T15:10:00.000Z",
          "data": 26.5468225589216,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T15:20:00.000Z",
          "data": 28.828048703920736,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T15:30:00.000Z",
          "data": 31.151853628013342,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T15:40:00.000Z",
          "data": 28.563710040051077,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T15:50:00.000Z",
          "data": 29.493771443629456,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T16:00:00.000Z",
          "data": 34.88633374287527,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T16:10:00.000Z",
          "data": 26.577356836481353,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T16:20:00.000Z",
          "data": 32.896395021789644,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T16:30:00.000Z",
          "data": 29.48415704332802,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T16:40:00.000Z",
          "data": 28.20489277548908,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T16:50:00.000Z",
          "data": 32.37929178474983,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T17:00:00.000Z",
          "data": 26.761674601480095,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T17:10:00.000Z",
          "data": 25.43623400319216,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T17:20:00.000Z",
          "data": 25.53798696008897,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T17:30:00.000Z",
          "data": 31.111402039469674,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T17:40:00.000Z",
          "data": 25.94917600033359,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T17:50:00.000Z",
          "data": 34.39691478708417,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T18:00:00.000Z",
          "data": 25.95033757663815,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T18:10:00.000Z",
          "data": 29.726209119660627,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T18:20:00.000Z",
          "data": 31.476671422792393,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T18:30:00.000Z",
          "data": 27.02895037249048,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T18:40:00.000Z",
          "data": 26.79927554073616,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T18:50:00.000Z",
          "data": 27.768903202905967,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T19:00:00.000Z",
          "data": 29.955773456966845,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T19:10:00.000Z",
          "data": 27.37764360794902,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T19:20:00.000Z",
          "data": 25.328762877811478,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T19:30:00.000Z",
          "data": 26.36561165682017,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T19:40:00.000Z",
          "data": 28.26928672000044,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T19:50:00.000Z",
          "data": 27.446757927084416,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T20:00:00.000Z",
          "data": 31.271524194738976,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T20:10:00.000Z",
          "data": 32.766161379368164,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T20:20:00.000Z",
          "data": 26.977745690314137,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T20:30:00.000Z",
          "data": 32.5584247198927,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T20:40:00.000Z",
          "data": 33.63845727863415,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T20:50:00.000Z",
          "data": 33.50787016372533,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T21:00:00.000Z",
          "data": 34.281970157599076,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T21:10:00.000Z",
          "data": 31.185803013070277,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T21:20:00.000Z",
          "data": 29.547418391682164,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T21:30:00.000Z",
          "data": 29.16913330802468,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T21:40:00.000Z",
          "data": 33.40253923921053,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T21:50:00.000Z",
          "data": 26.612505414084165,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T22:00:00.000Z",
          "data": 32.83258940497958,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T22:10:00.000Z",
          "data": 29.66119955569956,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T22:20:00.000Z",
          "data": 33.71192977223163,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T22:30:00.000Z",
          "data": 25.21412095604693,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T22:40:00.000Z",
          "data": 28.64727917657331,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T22:50:00.000Z",
          "data": 27.00748016711433,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T23:00:00.000Z",
          "data": 27.458465475739075,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T23:10:00.000Z",
          "data": 27.6441100902504,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T23:20:00.000Z",
          "data": 28.088056083404418,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T23:30:00.000Z",
          "data": 31.59704642544881,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T23:40:00.000Z",
          "data": 28.63408414137009,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T23:50:00.000Z",
          "data": 25.75682032252509,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-19T00:00:00.000Z",
          "data": 28.962059222291696,
          "sensor": "208",
          "station": "0"
      }
  ]
}
dataPm25Conc1 = {
  "name": "PM2.5MassConcentration",
  "unit": "µg/m³",
  "dataArray": [
      {
          "time": "2022-01-18T00:00:00.000Z",
          "data": 19.54558968276281,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T00:10:00.000Z",
          "data": 24.038381029275453,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T00:20:00.000Z",
          "data": 20.784803662301474,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T00:30:00.000Z",
          "data": 17.32988987503106,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T00:40:00.000Z",
          "data": 15.380537091110966,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T00:50:00.000Z",
          "data": 15.638271729952361,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T01:00:00.000Z",
          "data": 16.685263155079582,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T01:10:00.000Z",
          "data": 20.55022085739445,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T01:20:00.000Z",
          "data": 20.705868262463117,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T01:30:00.000Z",
          "data": 24.773541568865262,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T01:40:00.000Z",
          "data": 21.197438195916362,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T01:50:00.000Z",
          "data": 24.05035437616244,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T02:00:00.000Z",
          "data": 20.97581730189188,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T02:10:00.000Z",
          "data": 21.635097072294293,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T02:20:00.000Z",
          "data": 16.430175405622332,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T02:30:00.000Z",
          "data": 17.8501615193385,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T02:40:00.000Z",
          "data": 19.891587576488064,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T02:50:00.000Z",
          "data": 16.081825711272803,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T03:00:00.000Z",
          "data": 20.989707707745904,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T03:10:00.000Z",
          "data": 20.953155879417746,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T03:20:00.000Z",
          "data": 20.292794137756438,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T03:30:00.000Z",
          "data": 17.06965466910324,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T03:40:00.000Z",
          "data": 17.459675732289494,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T03:50:00.000Z",
          "data": 21.72700840154114,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T04:00:00.000Z",
          "data": 15.256109928297704,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T04:10:00.000Z",
          "data": 20.652574571077857,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T04:20:00.000Z",
          "data": 22.596217786415224,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T04:30:00.000Z",
          "data": 23.65519471147554,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T04:40:00.000Z",
          "data": 20.638126804009673,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T04:50:00.000Z",
          "data": 18.23446765094381,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T05:00:00.000Z",
          "data": 22.497815477738676,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T05:10:00.000Z",
          "data": 21.638545118311114,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T05:20:00.000Z",
          "data": 19.570146067946126,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T05:30:00.000Z",
          "data": 19.244736068186917,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T05:40:00.000Z",
          "data": 24.06418077821701,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T05:50:00.000Z",
          "data": 15.051179555855887,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T06:00:00.000Z",
          "data": 21.890324769200404,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T06:10:00.000Z",
          "data": 18.267636162010543,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T06:20:00.000Z",
          "data": 21.020398707434005,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T06:30:00.000Z",
          "data": 18.77040465006435,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T06:40:00.000Z",
          "data": 24.63295226916734,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T06:50:00.000Z",
          "data": 23.674298860434313,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T07:00:00.000Z",
          "data": 23.52015489029988,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T07:10:00.000Z",
          "data": 24.420148083985296,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T07:20:00.000Z",
          "data": 24.73422982745234,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T07:30:00.000Z",
          "data": 22.540212613863837,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T07:40:00.000Z",
          "data": 22.897899086128888,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T07:50:00.000Z",
          "data": 17.65853203438065,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T08:00:00.000Z",
          "data": 23.74306359305726,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T08:10:00.000Z",
          "data": 20.01248968557617,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T08:20:00.000Z",
          "data": 19.105321423191775,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T08:30:00.000Z",
          "data": 17.73259481759579,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T08:40:00.000Z",
          "data": 24.148976536714233,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T08:50:00.000Z",
          "data": 22.607869417412857,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T09:00:00.000Z",
          "data": 19.168447564626916,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T09:10:00.000Z",
          "data": 15.729022896218014,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T09:20:00.000Z",
          "data": 15.819526225769431,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T09:30:00.000Z",
          "data": 22.517132489649967,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T09:40:00.000Z",
          "data": 17.144677501304308,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T09:50:00.000Z",
          "data": 24.189112324577536,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T10:00:00.000Z",
          "data": 23.972977662629045,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T10:10:00.000Z",
          "data": 20.643609310236002,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T10:20:00.000Z",
          "data": 21.40981414289585,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T10:30:00.000Z",
          "data": 23.62321723572061,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T10:40:00.000Z",
          "data": 19.731417855592664,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T10:50:00.000Z",
          "data": 20.78498230464531,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T11:00:00.000Z",
          "data": 20.733792184894956,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T11:20:00.000Z",
          "data": 22.192753250471995,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T11:30:00.000Z",
          "data": 15.456953203978586,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T11:40:00.000Z",
          "data": 22.304570718837972,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T11:50:00.000Z",
          "data": 16.463708375619884,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T12:00:00.000Z",
          "data": 21.094084994507437,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T12:10:00.000Z",
          "data": 18.829707929121327,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T12:20:00.000Z",
          "data": 20.215684750829748,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T12:30:00.000Z",
          "data": 18.674446016656802,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T12:40:00.000Z",
          "data": 20.01546664135126,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T12:50:00.000Z",
          "data": 16.290118691740723,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T13:00:00.000Z",
          "data": 15.908573521911265,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T13:10:00.000Z",
          "data": 17.632784196806266,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T13:20:00.000Z",
          "data": 20.22811391366347,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T13:30:00.000Z",
          "data": 15.329187879651702,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T13:40:00.000Z",
          "data": 23.432239715010205,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T13:50:00.000Z",
          "data": 21.951351679250884,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T14:00:00.000Z",
          "data": 24.971916197940118,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T14:10:00.000Z",
          "data": 15.598808833891413,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T14:20:00.000Z",
          "data": 23.310086897966894,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T14:30:00.000Z",
          "data": 16.1340079034402,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T14:40:00.000Z",
          "data": 19.08386424750108,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T14:50:00.000Z",
          "data": 16.56932397584261,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T15:00:00.000Z",
          "data": 15.544318320747069,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T15:10:00.000Z",
          "data": 15.34098765567525,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T15:20:00.000Z",
          "data": 23.28594305223872,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T15:30:00.000Z",
          "data": 18.019720995400142,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T15:40:00.000Z",
          "data": 22.786341151296945,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T15:50:00.000Z",
          "data": 21.321737970228792,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T16:00:00.000Z",
          "data": 20.587167635285958,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T16:10:00.000Z",
          "data": 24.35333103726871,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T16:20:00.000Z",
          "data": 24.38749380482729,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T16:30:00.000Z",
          "data": 19.648293749762463,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T16:40:00.000Z",
          "data": 17.585314235215122,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T16:50:00.000Z",
          "data": 18.01949438458051,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T17:00:00.000Z",
          "data": 24.096988325501417,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T17:10:00.000Z",
          "data": 18.728787875045477,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T17:20:00.000Z",
          "data": 21.463918774085595,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T17:30:00.000Z",
          "data": 20.23265898216252,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T17:40:00.000Z",
          "data": 16.573822539195692,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T17:50:00.000Z",
          "data": 22.53822854378391,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T18:00:00.000Z",
          "data": 19.76010271077083,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T18:10:00.000Z",
          "data": 20.815822099166976,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T18:20:00.000Z",
          "data": 18.793949541162423,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T18:30:00.000Z",
          "data": 24.4775987015336,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T18:40:00.000Z",
          "data": 18.488461723569674,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T18:50:00.000Z",
          "data": 17.17070652397945,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T19:00:00.000Z",
          "data": 18.411613970718555,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T19:10:00.000Z",
          "data": 20.969850980101853,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T19:20:00.000Z",
          "data": 24.75007559216735,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T19:30:00.000Z",
          "data": 21.691450821294648,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T19:40:00.000Z",
          "data": 15.831938123357517,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T19:50:00.000Z",
          "data": 16.949207260753028,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T20:00:00.000Z",
          "data": 18.63341626553884,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T20:10:00.000Z",
          "data": 23.439199574908322,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T20:20:00.000Z",
          "data": 23.20816795883001,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T20:30:00.000Z",
          "data": 22.59839628210013,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T20:40:00.000Z",
          "data": 24.68093622216021,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T20:50:00.000Z",
          "data": 18.290634608960662,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T21:00:00.000Z",
          "data": 16.285285367886637,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T21:10:00.000Z",
          "data": 20.720925213211274,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T21:20:00.000Z",
          "data": 15.987212266009788,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T21:30:00.000Z",
          "data": 23.912847028524144,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T21:40:00.000Z",
          "data": 24.359381464841473,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T21:50:00.000Z",
          "data": 15.024231724316087,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T22:00:00.000Z",
          "data": 22.565402009850267,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T22:10:00.000Z",
          "data": 24.74518563729792,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T22:20:00.000Z",
          "data": 17.981099432915965,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T22:30:00.000Z",
          "data": 21.850432280703426,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T22:40:00.000Z",
          "data": 22.729342164555334,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T22:50:00.000Z",
          "data": 17.29374803707299,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T23:00:00.000Z",
          "data": 24.20784721557947,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T23:10:00.000Z",
          "data": 15.47608359339659,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T23:20:00.000Z",
          "data": 23.559565826272443,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T23:30:00.000Z",
          "data": 24.805540052075955,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T23:40:00.000Z",
          "data": 15.922132988947942,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T23:50:00.000Z",
          "data": 24.214497839466876,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-19T00:00:00.000Z",
          "data": 19.734186554831112,
          "sensor": "208",
          "station": "1"
      }
  ]
}
dataPm25AmountConc0 = {
  "name": "PM2.5AmountConcentration",
  "unit": "#/m³",
  "dataArray": [
      {
          "time": "2022-01-18T00:00:00.000Z",
          "data": 28.435513033353658,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T00:10:00.000Z",
          "data": 31.023836961741516,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T00:20:00.000Z",
          "data": 31.3533752382903,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T00:30:00.000Z",
          "data": 34.27437643513673,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T00:40:00.000Z",
          "data": 26.285042088356253,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T00:50:00.000Z",
          "data": 28.54512881153074,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T01:00:00.000Z",
          "data": 27.514719042314262,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T01:10:00.000Z",
          "data": 26.604657413943787,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T01:20:00.000Z",
          "data": 32.03517301673394,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T01:30:00.000Z",
          "data": 25.082025076630735,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T01:40:00.000Z",
          "data": 31.559401834016654,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T01:50:00.000Z",
          "data": 26.91021273415877,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T02:00:00.000Z",
          "data": 28.101767117232242,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T02:10:00.000Z",
          "data": 33.546033675194025,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T02:20:00.000Z",
          "data": 25.074595903431685,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T02:30:00.000Z",
          "data": 34.829055223095345,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T02:40:00.000Z",
          "data": 27.331822820829494,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T02:50:00.000Z",
          "data": 27.195324861045275,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T03:00:00.000Z",
          "data": 33.698359565733114,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T03:10:00.000Z",
          "data": 26.291633581540502,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T03:20:00.000Z",
          "data": 32.21495303818055,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T03:30:00.000Z",
          "data": 34.54160503054731,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T03:40:00.000Z",
          "data": 32.10076448142913,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T03:50:00.000Z",
          "data": 25.117538285087537,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T04:00:00.000Z",
          "data": 30.33587127161215,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T04:10:00.000Z",
          "data": 34.456300109448954,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T04:20:00.000Z",
          "data": 25.656850833281986,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T04:30:00.000Z",
          "data": 33.725631524072185,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T04:40:00.000Z",
          "data": 31.635573387292446,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T04:50:00.000Z",
          "data": 33.33263592762368,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T05:00:00.000Z",
          "data": 26.080797198901934,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T05:10:00.000Z",
          "data": 34.62886002154921,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T05:20:00.000Z",
          "data": 30.955641232627308,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T05:30:00.000Z",
          "data": 27.380809122397572,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T05:40:00.000Z",
          "data": 32.44952690877365,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T05:50:00.000Z",
          "data": 29.909507035796857,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T06:00:00.000Z",
          "data": 29.64025582102815,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T06:10:00.000Z",
          "data": 29.780812789815474,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T06:20:00.000Z",
          "data": 29.322621086636573,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T06:30:00.000Z",
          "data": 34.87910378805349,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T06:40:00.000Z",
          "data": 28.381488047883288,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T06:50:00.000Z",
          "data": 28.407278048378014,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T07:00:00.000Z",
          "data": 29.334047359199673,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T07:10:00.000Z",
          "data": 27.414294499981068,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T07:20:00.000Z",
          "data": 34.09001914569204,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T07:30:00.000Z",
          "data": 28.109030252912163,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T07:40:00.000Z",
          "data": 28.53547095148899,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T07:50:00.000Z",
          "data": 34.17169809281302,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T08:00:00.000Z",
          "data": 26.22736297144579,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T08:10:00.000Z",
          "data": 26.72232967668675,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T08:20:00.000Z",
          "data": 30.540719920161344,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T08:30:00.000Z",
          "data": 28.81848543883049,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T08:40:00.000Z",
          "data": 31.378757131112597,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T08:50:00.000Z",
          "data": 28.417629701846703,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T09:00:00.000Z",
          "data": 32.21843755332309,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T09:10:00.000Z",
          "data": 25.431853405775765,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T09:20:00.000Z",
          "data": 31.34890325972297,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T09:30:00.000Z",
          "data": 29.064603753131486,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T09:40:00.000Z",
          "data": 25.597688880671075,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T09:50:00.000Z",
          "data": 25.919867087150784,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T10:00:00.000Z",
          "data": 29.055972691062944,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T10:10:00.000Z",
          "data": 34.09104537630605,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T10:20:00.000Z",
          "data": 32.13866856796061,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T10:30:00.000Z",
          "data": 34.364142053456206,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T10:40:00.000Z",
          "data": 29.456476173708666,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T10:50:00.000Z",
          "data": 30.73009974842818,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T11:00:00.000Z",
          "data": 31.99699917682257,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T11:20:00.000Z",
          "data": 29.49013748842396,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T11:30:00.000Z",
          "data": 34.737447764094796,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T11:40:00.000Z",
          "data": 26.481482602403645,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T11:50:00.000Z",
          "data": 31.093468998226115,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T12:00:00.000Z",
          "data": 26.68935129964963,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T12:10:00.000Z",
          "data": 32.678117101575815,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T12:20:00.000Z",
          "data": 25.87429878217576,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T12:30:00.000Z",
          "data": 29.854433157759757,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T12:40:00.000Z",
          "data": 32.31889464650294,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T12:50:00.000Z",
          "data": 33.153079858229646,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T13:00:00.000Z",
          "data": 34.532417803467254,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T13:10:00.000Z",
          "data": 31.512857088911975,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T13:20:00.000Z",
          "data": 29.82646246068861,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T13:30:00.000Z",
          "data": 30.771651635685323,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T13:40:00.000Z",
          "data": 32.38402406350647,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T13:50:00.000Z",
          "data": 28.983667247187263,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T14:00:00.000Z",
          "data": 30.28369352105009,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T14:10:00.000Z",
          "data": 27.373121820717678,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T14:20:00.000Z",
          "data": 31.486317056982,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T14:30:00.000Z",
          "data": 28.411162857081486,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T14:40:00.000Z",
          "data": 32.01588542558807,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T14:50:00.000Z",
          "data": 25.56585540391513,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T15:00:00.000Z",
          "data": 32.749407866612565,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T15:10:00.000Z",
          "data": 29.532714765939147,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T15:20:00.000Z",
          "data": 26.219894501008977,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T15:30:00.000Z",
          "data": 33.34763257997258,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T15:40:00.000Z",
          "data": 30.470205873722865,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T15:50:00.000Z",
          "data": 26.942461021257163,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T16:00:00.000Z",
          "data": 26.530389313671186,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T16:10:00.000Z",
          "data": 26.05656290182217,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T16:20:00.000Z",
          "data": 26.374211429035515,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T16:30:00.000Z",
          "data": 28.955012993497814,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T16:40:00.000Z",
          "data": 32.540548476827425,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T16:50:00.000Z",
          "data": 28.977454611537617,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T17:00:00.000Z",
          "data": 33.7761286107791,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T17:10:00.000Z",
          "data": 27.556372601696495,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T17:20:00.000Z",
          "data": 32.8494362959473,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T17:30:00.000Z",
          "data": 34.75409202378268,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T17:40:00.000Z",
          "data": 25.920642795243005,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T17:50:00.000Z",
          "data": 33.71828936545553,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T18:00:00.000Z",
          "data": 30.07855092471849,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T18:10:00.000Z",
          "data": 30.02581818778665,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T18:20:00.000Z",
          "data": 34.53422065228663,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T18:30:00.000Z",
          "data": 34.971072133486494,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T18:40:00.000Z",
          "data": 34.87523432645137,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T18:50:00.000Z",
          "data": 26.891658547703187,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T19:00:00.000Z",
          "data": 32.462359013339835,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T19:10:00.000Z",
          "data": 30.49187304429673,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T19:20:00.000Z",
          "data": 31.215982049467094,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T19:30:00.000Z",
          "data": 28.218417474176086,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T19:40:00.000Z",
          "data": 28.300545929144246,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T19:50:00.000Z",
          "data": 25.12248637723961,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T20:00:00.000Z",
          "data": 25.842022014887934,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T20:10:00.000Z",
          "data": 28.17560110196448,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T20:20:00.000Z",
          "data": 31.674784338577496,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T20:30:00.000Z",
          "data": 29.22869156968045,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T20:40:00.000Z",
          "data": 30.072886083566114,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T20:50:00.000Z",
          "data": 28.629564873232038,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T21:00:00.000Z",
          "data": 30.159646687701652,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T21:10:00.000Z",
          "data": 27.1652316282159,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T21:20:00.000Z",
          "data": 29.656032045783242,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T21:30:00.000Z",
          "data": 26.00025934059252,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T21:40:00.000Z",
          "data": 28.318401846804882,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T21:50:00.000Z",
          "data": 29.90875505263972,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T22:00:00.000Z",
          "data": 34.24653264663854,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T22:10:00.000Z",
          "data": 29.69934929777029,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T22:20:00.000Z",
          "data": 29.641307453470915,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T22:30:00.000Z",
          "data": 34.36777100571778,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T22:40:00.000Z",
          "data": 27.23517134891139,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T22:50:00.000Z",
          "data": 27.45409716029287,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T23:00:00.000Z",
          "data": 31.536744389385813,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T23:10:00.000Z",
          "data": 31.85526396604431,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T23:20:00.000Z",
          "data": 29.17133615761243,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T23:30:00.000Z",
          "data": 29.600045310604983,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T23:40:00.000Z",
          "data": 29.15066535254232,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T23:50:00.000Z",
          "data": 27.285802536773936,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-19T00:00:00.000Z",
          "data": 25.57744308399467,
          "sensor": "208",
          "station": "0"
      }
  ]
}
dataPm25AmountConc1 = {
  "name": "PM2.5AmountConcentration",
  "unit": "#/m³",
  "dataArray": [
      {
          "time": "2022-01-18T00:00:00.000Z",
          "data": 18.158681775103723,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T00:10:00.000Z",
          "data": 20.58800997699545,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T00:20:00.000Z",
          "data": 24.661956022207377,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T00:30:00.000Z",
          "data": 19.764148004531087,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T00:40:00.000Z",
          "data": 24.510076632062827,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T00:50:00.000Z",
          "data": 19.030036840851235,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T01:00:00.000Z",
          "data": 24.87641264001068,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T01:10:00.000Z",
          "data": 21.507814216399815,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T01:20:00.000Z",
          "data": 17.50511300950603,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T01:30:00.000Z",
          "data": 20.69156702164363,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T01:40:00.000Z",
          "data": 19.547233162394768,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T01:50:00.000Z",
          "data": 16.414866158247236,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T02:00:00.000Z",
          "data": 21.2507604822914,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T02:10:00.000Z",
          "data": 18.67281300122925,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T02:20:00.000Z",
          "data": 16.936229241908112,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T02:30:00.000Z",
          "data": 23.03471283126986,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T02:40:00.000Z",
          "data": 15.994415159030893,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T02:50:00.000Z",
          "data": 22.91182055280322,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T03:00:00.000Z",
          "data": 22.913601516791715,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T03:10:00.000Z",
          "data": 19.336394589018006,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T03:20:00.000Z",
          "data": 20.08449572949704,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T03:30:00.000Z",
          "data": 17.25250462305294,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T03:40:00.000Z",
          "data": 18.201203245861986,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T03:50:00.000Z",
          "data": 21.61451310409687,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T04:00:00.000Z",
          "data": 23.889447577351326,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T04:10:00.000Z",
          "data": 16.963114107573894,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T04:20:00.000Z",
          "data": 23.643428145831976,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T04:30:00.000Z",
          "data": 23.34136394109728,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T04:40:00.000Z",
          "data": 15.825554271836637,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T04:50:00.000Z",
          "data": 17.164592704540663,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T05:00:00.000Z",
          "data": 23.17226046460157,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T05:10:00.000Z",
          "data": 23.90431883598105,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T05:20:00.000Z",
          "data": 16.72868623645446,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T05:30:00.000Z",
          "data": 21.16456070162153,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T05:40:00.000Z",
          "data": 21.54683957822331,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T05:50:00.000Z",
          "data": 16.42362608677471,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T06:00:00.000Z",
          "data": 16.524431281404517,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T06:10:00.000Z",
          "data": 16.297271411216236,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T06:20:00.000Z",
          "data": 17.88000143848283,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T06:30:00.000Z",
          "data": 23.774941601676403,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T06:40:00.000Z",
          "data": 20.75731304696783,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T06:50:00.000Z",
          "data": 17.67386223980799,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T07:00:00.000Z",
          "data": 17.621275875916115,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T07:10:00.000Z",
          "data": 21.03254868196571,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T07:20:00.000Z",
          "data": 18.769579799629806,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T07:30:00.000Z",
          "data": 22.190716578549086,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T07:40:00.000Z",
          "data": 16.533414124647294,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T07:50:00.000Z",
          "data": 17.231136142686662,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T08:00:00.000Z",
          "data": 16.64741439792143,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T08:10:00.000Z",
          "data": 21.3127843975931,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T08:20:00.000Z",
          "data": 16.68610528397513,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T08:30:00.000Z",
          "data": 15.600170520710579,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T08:40:00.000Z",
          "data": 22.176756355016586,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T08:50:00.000Z",
          "data": 24.6343354055552,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T09:00:00.000Z",
          "data": 16.462024918139786,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T09:10:00.000Z",
          "data": 22.057013993155824,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T09:20:00.000Z",
          "data": 15.713534967529752,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T09:30:00.000Z",
          "data": 18.391661570624745,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T09:40:00.000Z",
          "data": 15.51736508338011,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T09:50:00.000Z",
          "data": 23.408718764226364,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T10:00:00.000Z",
          "data": 19.50161774294172,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T10:10:00.000Z",
          "data": 19.334072817823227,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T10:20:00.000Z",
          "data": 15.428667176589958,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T10:30:00.000Z",
          "data": 23.738411347124554,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T10:40:00.000Z",
          "data": 20.233836549765513,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T10:50:00.000Z",
          "data": 15.043681093195316,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T11:00:00.000Z",
          "data": 21.733510682875178,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T11:20:00.000Z",
          "data": 15.171124530603857,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T11:30:00.000Z",
          "data": 17.89503798873687,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T11:40:00.000Z",
          "data": 20.923067153723736,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T11:50:00.000Z",
          "data": 24.569437696039305,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T12:00:00.000Z",
          "data": 17.715071620666706,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T12:10:00.000Z",
          "data": 15.00357352859352,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T12:20:00.000Z",
          "data": 19.740758225293547,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T12:30:00.000Z",
          "data": 15.565891821006465,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T12:40:00.000Z",
          "data": 15.309337902778415,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T12:50:00.000Z",
          "data": 24.325305107880908,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T13:00:00.000Z",
          "data": 22.759533151793498,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T13:10:00.000Z",
          "data": 19.04253162159017,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T13:20:00.000Z",
          "data": 19.852409203907477,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T13:30:00.000Z",
          "data": 24.20967810090783,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T13:40:00.000Z",
          "data": 18.599815125849094,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T13:50:00.000Z",
          "data": 17.493271269787023,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T14:00:00.000Z",
          "data": 21.788750655226245,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T14:10:00.000Z",
          "data": 15.706518292705784,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T14:20:00.000Z",
          "data": 16.275712994176978,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T14:30:00.000Z",
          "data": 24.598026010411964,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T14:40:00.000Z",
          "data": 16.191652769283248,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T14:50:00.000Z",
          "data": 23.72466469382757,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T15:00:00.000Z",
          "data": 20.598920949507665,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T15:10:00.000Z",
          "data": 19.58095687108728,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T15:20:00.000Z",
          "data": 24.987214830409798,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T15:30:00.000Z",
          "data": 21.159267533890976,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T15:40:00.000Z",
          "data": 23.209155426136647,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T15:50:00.000Z",
          "data": 15.023373733637024,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T16:00:00.000Z",
          "data": 19.36973659967889,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T16:10:00.000Z",
          "data": 15.018244307485169,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T16:20:00.000Z",
          "data": 22.626001446404103,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T16:30:00.000Z",
          "data": 17.250006174864573,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T16:40:00.000Z",
          "data": 15.248700366318817,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T16:50:00.000Z",
          "data": 23.636317117246374,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T17:00:00.000Z",
          "data": 22.039084953578612,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T17:10:00.000Z",
          "data": 15.353556127093624,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T17:20:00.000Z",
          "data": 20.2998330936483,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T17:30:00.000Z",
          "data": 24.20194911392734,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T17:40:00.000Z",
          "data": 24.67724872523829,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T17:50:00.000Z",
          "data": 19.665167831128585,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T18:00:00.000Z",
          "data": 22.88669858694341,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T18:10:00.000Z",
          "data": 15.163205539104911,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T18:20:00.000Z",
          "data": 22.71364096878934,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T18:30:00.000Z",
          "data": 20.227711519723886,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T18:40:00.000Z",
          "data": 21.608399047993828,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T18:50:00.000Z",
          "data": 16.966479139425196,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T19:00:00.000Z",
          "data": 20.540282600127227,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T19:10:00.000Z",
          "data": 17.428286679370732,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T19:20:00.000Z",
          "data": 19.931709532373006,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T19:30:00.000Z",
          "data": 24.579013238314065,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T19:40:00.000Z",
          "data": 23.467059525292754,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T19:50:00.000Z",
          "data": 23.34881182880842,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T20:00:00.000Z",
          "data": 22.855139693347887,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T20:10:00.000Z",
          "data": 22.603373369362146,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T20:20:00.000Z",
          "data": 22.868898821827653,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T20:30:00.000Z",
          "data": 24.09881101559393,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T20:40:00.000Z",
          "data": 22.810544848604586,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T20:50:00.000Z",
          "data": 16.30016929626476,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T21:00:00.000Z",
          "data": 23.169821759768816,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T21:10:00.000Z",
          "data": 21.44390741646524,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T21:20:00.000Z",
          "data": 15.917163354642323,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T21:30:00.000Z",
          "data": 15.633644627897418,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T21:40:00.000Z",
          "data": 20.720593431913628,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T21:50:00.000Z",
          "data": 24.343358788069033,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T22:00:00.000Z",
          "data": 24.888830782830837,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T22:10:00.000Z",
          "data": 17.824463072933863,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T22:20:00.000Z",
          "data": 15.880155134389206,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T22:30:00.000Z",
          "data": 18.584914230750556,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T22:40:00.000Z",
          "data": 23.200140728774894,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T22:50:00.000Z",
          "data": 24.716830788712866,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T23:00:00.000Z",
          "data": 20.849144144752785,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T23:10:00.000Z",
          "data": 18.463874113806853,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T23:20:00.000Z",
          "data": 21.73908159874282,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T23:30:00.000Z",
          "data": 21.833119815056826,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T23:40:00.000Z",
          "data": 21.385495220880284,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T23:50:00.000Z",
          "data": 19.93668967849572,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-19T00:00:00.000Z",
          "data": 24.01313928730824,
          "sensor": "208",
          "station": "1"
      }
  ]
}
dataPm10Conc0 = {
  "name": "PM10MassConcentration",
  "unit": "µg/m³",
  "dataArray": [
      {
          "time": "2022-01-18T00:00:00.000Z",
          "data": 26.89264137115616,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T00:10:00.000Z",
          "data": 33.72022403997069,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T00:20:00.000Z",
          "data": 31.761265109991427,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T00:30:00.000Z",
          "data": 33.21966007479381,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T00:40:00.000Z",
          "data": 28.982136373153256,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T00:50:00.000Z",
          "data": 31.881235873835056,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T01:00:00.000Z",
          "data": 29.466571395787447,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T01:10:00.000Z",
          "data": 26.147123422368413,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T01:20:00.000Z",
          "data": 34.022724078944464,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T01:30:00.000Z",
          "data": 28.537525689050653,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T01:40:00.000Z",
          "data": 29.327349451836955,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T01:50:00.000Z",
          "data": 33.705248732924034,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T02:00:00.000Z",
          "data": 31.566159837141505,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T02:10:00.000Z",
          "data": 29.171922337271535,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T02:20:00.000Z",
          "data": 27.110055633219513,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T02:30:00.000Z",
          "data": 33.04813334138946,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T02:40:00.000Z",
          "data": 27.808992564190866,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T02:50:00.000Z",
          "data": 25.62301340548428,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T03:00:00.000Z",
          "data": 28.807550861437658,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T03:10:00.000Z",
          "data": 29.37465072359032,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T03:20:00.000Z",
          "data": 33.06145280998084,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T03:30:00.000Z",
          "data": 34.48635378611782,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T03:40:00.000Z",
          "data": 29.01420873716858,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T03:50:00.000Z",
          "data": 25.65323295368309,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T04:00:00.000Z",
          "data": 31.354200638895346,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T04:10:00.000Z",
          "data": 29.192251978709734,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T04:20:00.000Z",
          "data": 34.410565165194704,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T04:30:00.000Z",
          "data": 31.948248345197815,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T04:40:00.000Z",
          "data": 25.631120582713873,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T04:50:00.000Z",
          "data": 30.933708204818267,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T05:00:00.000Z",
          "data": 32.784211936121146,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T05:10:00.000Z",
          "data": 31.865830418582096,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T05:20:00.000Z",
          "data": 27.023758121279798,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T05:30:00.000Z",
          "data": 29.992809164642757,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T05:40:00.000Z",
          "data": 31.587699524738657,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T05:50:00.000Z",
          "data": 30.93268901382381,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T06:00:00.000Z",
          "data": 34.20367101601069,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T06:10:00.000Z",
          "data": 30.835115802991098,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T06:20:00.000Z",
          "data": 25.177420947996993,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T06:30:00.000Z",
          "data": 27.63558485813323,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T06:40:00.000Z",
          "data": 33.217045765654206,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T06:50:00.000Z",
          "data": 31.494996805677022,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T07:00:00.000Z",
          "data": 30.008163397067342,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T07:10:00.000Z",
          "data": 26.7631745865916,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T07:20:00.000Z",
          "data": 30.207443425198132,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T07:30:00.000Z",
          "data": 29.42219596985054,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T07:40:00.000Z",
          "data": 32.91994004849881,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T07:50:00.000Z",
          "data": 30.587249048941658,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T08:00:00.000Z",
          "data": 27.513363345443206,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T08:10:00.000Z",
          "data": 27.98840368943114,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T08:20:00.000Z",
          "data": 28.598990817354228,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T08:30:00.000Z",
          "data": 28.637292747148496,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T08:40:00.000Z",
          "data": 29.60918600092145,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T08:50:00.000Z",
          "data": 29.0485111590505,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T09:00:00.000Z",
          "data": 30.111482816282972,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T09:10:00.000Z",
          "data": 33.53957802003204,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T09:20:00.000Z",
          "data": 31.733363811391555,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T09:30:00.000Z",
          "data": 25.81474469087923,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T09:40:00.000Z",
          "data": 26.069370079278695,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T09:50:00.000Z",
          "data": 31.973386692106168,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T10:00:00.000Z",
          "data": 31.265307709126585,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T10:10:00.000Z",
          "data": 34.053435275055065,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T10:20:00.000Z",
          "data": 32.40375754499197,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T10:30:00.000Z",
          "data": 25.05961699315418,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T10:40:00.000Z",
          "data": 34.72908409834757,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T10:50:00.000Z",
          "data": 31.016644698409017,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T11:00:00.000Z",
          "data": 30.52852384079658,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T11:20:00.000Z",
          "data": 34.49372636407213,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T11:30:00.000Z",
          "data": 33.29263766658529,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T11:40:00.000Z",
          "data": 25.370184398392247,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T11:50:00.000Z",
          "data": 29.95921926464638,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T12:00:00.000Z",
          "data": 28.84158979094898,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T12:10:00.000Z",
          "data": 26.865163087259507,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T12:20:00.000Z",
          "data": 34.49054449364978,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T12:30:00.000Z",
          "data": 33.4362721943246,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T12:40:00.000Z",
          "data": 28.657240237276593,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T12:50:00.000Z",
          "data": 27.679129609647806,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T13:00:00.000Z",
          "data": 31.429358411744104,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T13:10:00.000Z",
          "data": 26.8687257907744,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T13:20:00.000Z",
          "data": 26.785136046578657,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T13:30:00.000Z",
          "data": 26.951596977015523,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T13:40:00.000Z",
          "data": 26.50552061758329,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T13:50:00.000Z",
          "data": 29.11489664649717,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T14:00:00.000Z",
          "data": 28.91698142330861,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T14:10:00.000Z",
          "data": 26.93751363332014,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T14:20:00.000Z",
          "data": 27.05624506568711,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T14:30:00.000Z",
          "data": 31.456079038270232,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T14:40:00.000Z",
          "data": 27.566145436511885,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T14:50:00.000Z",
          "data": 33.031622364279286,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T15:00:00.000Z",
          "data": 26.363827803957815,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T15:10:00.000Z",
          "data": 30.365461586890238,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T15:20:00.000Z",
          "data": 33.297325968085445,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T15:30:00.000Z",
          "data": 27.153299349260912,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T15:40:00.000Z",
          "data": 26.482348174399707,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T15:50:00.000Z",
          "data": 30.287439328215058,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T16:00:00.000Z",
          "data": 30.757107966509075,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T16:10:00.000Z",
          "data": 28.153519949426734,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T16:20:00.000Z",
          "data": 30.206582874863955,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T16:30:00.000Z",
          "data": 33.57370740995924,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T16:40:00.000Z",
          "data": 32.806708337436596,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T16:50:00.000Z",
          "data": 31.340117151416123,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T17:00:00.000Z",
          "data": 30.09700644730539,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T17:10:00.000Z",
          "data": 25.630421862419077,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T17:20:00.000Z",
          "data": 29.164780344693884,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T17:30:00.000Z",
          "data": 32.46872397865441,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T17:40:00.000Z",
          "data": 30.041302836681194,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T17:50:00.000Z",
          "data": 34.71536013550829,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T18:00:00.000Z",
          "data": 33.12901099042041,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T18:10:00.000Z",
          "data": 34.060899984784434,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T18:20:00.000Z",
          "data": 26.575453429162877,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T18:30:00.000Z",
          "data": 33.312108644372266,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T18:40:00.000Z",
          "data": 32.761032852287286,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T18:50:00.000Z",
          "data": 31.91366469067303,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T19:00:00.000Z",
          "data": 31.979338636265826,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T19:10:00.000Z",
          "data": 29.45839457425154,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T19:20:00.000Z",
          "data": 34.57492257277565,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T19:30:00.000Z",
          "data": 32.31990961531205,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T19:40:00.000Z",
          "data": 32.90206970746695,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T19:50:00.000Z",
          "data": 33.78547855537313,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T20:00:00.000Z",
          "data": 30.203741414382684,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T20:10:00.000Z",
          "data": 33.4861120436308,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T20:20:00.000Z",
          "data": 28.992558988905188,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T20:30:00.000Z",
          "data": 27.074244665321707,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T20:40:00.000Z",
          "data": 34.16732874472128,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T20:50:00.000Z",
          "data": 33.383564991675286,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T21:00:00.000Z",
          "data": 30.70464692181176,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T21:10:00.000Z",
          "data": 31.361185192654013,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T21:20:00.000Z",
          "data": 31.45084212514959,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T21:30:00.000Z",
          "data": 32.84322000672124,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T21:40:00.000Z",
          "data": 33.979548849402434,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T21:50:00.000Z",
          "data": 28.55321582347193,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T22:00:00.000Z",
          "data": 31.911171749149254,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T22:10:00.000Z",
          "data": 30.29687932464192,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T22:20:00.000Z",
          "data": 32.77782671343564,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T22:30:00.000Z",
          "data": 25.8597175335943,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T22:40:00.000Z",
          "data": 30.93172583155573,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T22:50:00.000Z",
          "data": 25.056520107505087,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T23:00:00.000Z",
          "data": 26.68593614131123,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T23:10:00.000Z",
          "data": 26.787223851321137,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T23:20:00.000Z",
          "data": 25.650956734355937,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T23:30:00.000Z",
          "data": 28.24779919490569,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T23:40:00.000Z",
          "data": 34.95365350213834,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T23:50:00.000Z",
          "data": 28.730659421815723,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-19T00:00:00.000Z",
          "data": 25.17857986392268,
          "sensor": "208",
          "station": "0"
      }
  ]
}
dataPm10Conc1 = {
  "name": "PM10MassConcentration",
  "unit": "µg/m³",
  "dataArray": [
      {
          "time": "2022-01-18T00:00:00.000Z",
          "data": 17.90199948456101,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T00:10:00.000Z",
          "data": 20.315061086126946,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T00:20:00.000Z",
          "data": 21.41009020741025,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T00:30:00.000Z",
          "data": 20.61882214559712,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T00:40:00.000Z",
          "data": 18.86804614585549,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T00:50:00.000Z",
          "data": 15.91432807840578,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T01:00:00.000Z",
          "data": 16.025277889911788,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T01:10:00.000Z",
          "data": 23.230078070915013,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T01:20:00.000Z",
          "data": 21.4006679287729,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T01:30:00.000Z",
          "data": 18.31974643092932,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T01:40:00.000Z",
          "data": 20.016518194663316,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T01:50:00.000Z",
          "data": 16.7023444129901,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T02:00:00.000Z",
          "data": 23.03700971546662,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T02:10:00.000Z",
          "data": 18.920833479874307,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T02:20:00.000Z",
          "data": 22.029886367228006,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T02:30:00.000Z",
          "data": 22.342370061053035,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T02:40:00.000Z",
          "data": 24.60630296689922,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T02:50:00.000Z",
          "data": 16.230745695590848,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T03:00:00.000Z",
          "data": 18.35979191776936,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T03:10:00.000Z",
          "data": 18.151477692568477,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T03:20:00.000Z",
          "data": 18.18870942600772,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T03:30:00.000Z",
          "data": 18.933526751329932,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T03:40:00.000Z",
          "data": 24.2985163400885,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T03:50:00.000Z",
          "data": 15.080340545223622,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T04:00:00.000Z",
          "data": 19.50452282713553,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T04:10:00.000Z",
          "data": 20.018187692209857,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T04:20:00.000Z",
          "data": 23.01694660498946,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T04:30:00.000Z",
          "data": 18.19162978311178,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T04:40:00.000Z",
          "data": 23.903815147918046,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T04:50:00.000Z",
          "data": 21.860063215042793,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T05:00:00.000Z",
          "data": 18.241206550003632,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T05:10:00.000Z",
          "data": 17.055119024509878,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T05:20:00.000Z",
          "data": 17.79944204663507,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T05:30:00.000Z",
          "data": 23.28982196129368,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T05:40:00.000Z",
          "data": 15.108335694966817,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T05:50:00.000Z",
          "data": 23.16615227580833,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T06:00:00.000Z",
          "data": 18.490268637287237,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T06:10:00.000Z",
          "data": 20.37142396828238,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T06:20:00.000Z",
          "data": 21.172404656407036,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T06:30:00.000Z",
          "data": 19.537629353155218,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T06:40:00.000Z",
          "data": 22.61807460889166,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T06:50:00.000Z",
          "data": 15.360369375374765,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T07:00:00.000Z",
          "data": 17.665420239793203,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T07:10:00.000Z",
          "data": 19.13553135868076,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T07:20:00.000Z",
          "data": 15.51378265382837,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T07:30:00.000Z",
          "data": 15.616084836585644,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T07:40:00.000Z",
          "data": 23.484740088881914,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T07:50:00.000Z",
          "data": 17.11974010198019,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T08:00:00.000Z",
          "data": 15.26278008612579,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T08:10:00.000Z",
          "data": 19.512884931145244,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T08:20:00.000Z",
          "data": 17.52081180787838,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T08:30:00.000Z",
          "data": 16.60413754229419,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T08:40:00.000Z",
          "data": 19.62447062124501,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T08:50:00.000Z",
          "data": 19.65167064407197,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T09:00:00.000Z",
          "data": 24.315990130609965,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T09:10:00.000Z",
          "data": 16.073166737644584,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T09:20:00.000Z",
          "data": 17.359529479350456,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T09:30:00.000Z",
          "data": 15.323280316529752,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T09:40:00.000Z",
          "data": 16.763684866157995,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T09:50:00.000Z",
          "data": 16.780259650910576,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T10:00:00.000Z",
          "data": 16.652585468164183,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T10:10:00.000Z",
          "data": 20.229424843618247,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T10:20:00.000Z",
          "data": 17.858747126277837,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T10:30:00.000Z",
          "data": 17.5260800698396,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T10:40:00.000Z",
          "data": 17.469233529184606,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T10:50:00.000Z",
          "data": 21.282062378278752,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T11:00:00.000Z",
          "data": 24.1227334292251,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T11:20:00.000Z",
          "data": 17.433552104412453,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T11:30:00.000Z",
          "data": 18.76393046050172,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T11:40:00.000Z",
          "data": 16.66838938665183,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T11:50:00.000Z",
          "data": 19.651539614329643,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T12:00:00.000Z",
          "data": 22.435805667096645,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T12:10:00.000Z",
          "data": 23.99789116854545,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T12:20:00.000Z",
          "data": 20.104772870787432,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T12:30:00.000Z",
          "data": 16.37596283019826,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T12:40:00.000Z",
          "data": 23.360505660822998,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T12:50:00.000Z",
          "data": 17.687922352652212,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T13:00:00.000Z",
          "data": 20.725805761104894,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T13:10:00.000Z",
          "data": 17.548297156606285,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T13:20:00.000Z",
          "data": 19.104717647367522,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T13:30:00.000Z",
          "data": 15.228845095043512,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T13:40:00.000Z",
          "data": 16.773782082162953,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T13:50:00.000Z",
          "data": 18.06877541466692,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T14:00:00.000Z",
          "data": 24.900902055989217,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T14:10:00.000Z",
          "data": 17.762359330922084,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T14:20:00.000Z",
          "data": 15.3921445542119,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T14:30:00.000Z",
          "data": 16.44150424911885,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T14:40:00.000Z",
          "data": 19.06345758079043,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T14:50:00.000Z",
          "data": 24.04025872964378,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T15:00:00.000Z",
          "data": 15.036253405372355,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T15:10:00.000Z",
          "data": 19.950860260254096,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T15:20:00.000Z",
          "data": 15.275365679353847,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T15:30:00.000Z",
          "data": 17.728830857281636,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T15:40:00.000Z",
          "data": 17.82293205417715,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T15:50:00.000Z",
          "data": 24.60012670774754,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T16:00:00.000Z",
          "data": 17.127370293938785,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T16:10:00.000Z",
          "data": 22.5352021132446,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T16:20:00.000Z",
          "data": 15.741769090236579,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T16:30:00.000Z",
          "data": 22.05431389878403,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T16:40:00.000Z",
          "data": 21.421149978624626,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T16:50:00.000Z",
          "data": 24.44293365485901,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T17:00:00.000Z",
          "data": 18.224290643521435,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T17:10:00.000Z",
          "data": 21.780570813624845,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T17:20:00.000Z",
          "data": 15.314921099055876,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T17:30:00.000Z",
          "data": 18.771111690747567,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T17:40:00.000Z",
          "data": 19.052690338467364,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T17:50:00.000Z",
          "data": 23.109729032403656,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T18:00:00.000Z",
          "data": 22.983187904948707,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T18:10:00.000Z",
          "data": 23.585142903082442,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T18:20:00.000Z",
          "data": 18.234846914836428,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T18:30:00.000Z",
          "data": 22.99566539805391,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T18:40:00.000Z",
          "data": 18.99226542701363,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T18:50:00.000Z",
          "data": 19.959080016421318,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T19:00:00.000Z",
          "data": 19.566224124962375,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T19:10:00.000Z",
          "data": 15.734913464524872,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T19:20:00.000Z",
          "data": 19.45027124064153,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T19:30:00.000Z",
          "data": 16.97083391847906,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T19:40:00.000Z",
          "data": 23.670774243685916,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T19:50:00.000Z",
          "data": 15.112075718694747,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T20:00:00.000Z",
          "data": 23.0420196930748,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T20:10:00.000Z",
          "data": 16.224422233179464,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T20:20:00.000Z",
          "data": 22.706638686106754,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T20:30:00.000Z",
          "data": 18.043122999176944,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T20:40:00.000Z",
          "data": 22.022691049696675,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T20:50:00.000Z",
          "data": 21.580355569421585,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T21:00:00.000Z",
          "data": 16.038178210750342,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T21:10:00.000Z",
          "data": 16.834035646554277,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T21:20:00.000Z",
          "data": 24.858604408819115,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T21:30:00.000Z",
          "data": 18.139531029401244,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T21:40:00.000Z",
          "data": 21.43489007149629,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T21:50:00.000Z",
          "data": 21.28106275659561,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T22:00:00.000Z",
          "data": 23.76985418119598,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T22:10:00.000Z",
          "data": 22.82294098312849,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T22:20:00.000Z",
          "data": 16.284059323831073,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T22:30:00.000Z",
          "data": 23.7758303070296,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T22:40:00.000Z",
          "data": 22.819672861826067,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T22:50:00.000Z",
          "data": 21.72421993988845,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T23:00:00.000Z",
          "data": 17.961046918088456,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T23:10:00.000Z",
          "data": 20.932937190158775,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T23:20:00.000Z",
          "data": 17.32727635528102,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T23:30:00.000Z",
          "data": 18.754204271495674,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T23:40:00.000Z",
          "data": 21.630027229932864,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T23:50:00.000Z",
          "data": 20.552631949628335,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-19T00:00:00.000Z",
          "data": 15.666588798916116,
          "sensor": "208",
          "station": "1"
      }
  ]
}
dataPm10AmountConc0 = {
  "name": "PM10AmountConcentration",
  "unit": "#/m³",
  "dataArray": [
      {
          "time": "2022-01-18T00:00:00.000Z",
          "data": 33.050140029985926,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T00:10:00.000Z",
          "data": 33.32037537753084,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T00:20:00.000Z",
          "data": 31.7098458894296,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T00:30:00.000Z",
          "data": 25.140785562677312,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T00:40:00.000Z",
          "data": 29.645557248482532,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T00:50:00.000Z",
          "data": 31.002238899814515,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T01:00:00.000Z",
          "data": 28.697216147033835,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T01:10:00.000Z",
          "data": 28.787272758680757,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T01:20:00.000Z",
          "data": 26.96152216007711,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T01:30:00.000Z",
          "data": 27.425457745923644,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T01:40:00.000Z",
          "data": 33.996841807125335,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T01:50:00.000Z",
          "data": 29.206399563293704,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T02:00:00.000Z",
          "data": 27.232496388462067,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T02:10:00.000Z",
          "data": 34.72129543466039,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T02:20:00.000Z",
          "data": 27.74140302015382,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T02:30:00.000Z",
          "data": 27.67985341331075,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T02:40:00.000Z",
          "data": 26.655659815483162,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T02:50:00.000Z",
          "data": 33.97899122343715,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T03:00:00.000Z",
          "data": 33.18812861172549,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T03:10:00.000Z",
          "data": 25.787893684657767,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T03:20:00.000Z",
          "data": 31.320986023190926,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T03:30:00.000Z",
          "data": 30.923451345170754,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T03:40:00.000Z",
          "data": 27.386314921972676,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T03:50:00.000Z",
          "data": 28.313665382468184,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T04:00:00.000Z",
          "data": 29.164801851672813,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T04:10:00.000Z",
          "data": 27.135314982733888,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T04:20:00.000Z",
          "data": 31.429293121389033,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T04:30:00.000Z",
          "data": 32.05982345400177,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T04:40:00.000Z",
          "data": 31.663145696509144,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T04:50:00.000Z",
          "data": 30.36895703220844,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T05:00:00.000Z",
          "data": 34.29410911193642,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T05:10:00.000Z",
          "data": 31.056687829860238,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T05:20:00.000Z",
          "data": 29.600523724893804,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T05:30:00.000Z",
          "data": 27.54310928201618,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T05:40:00.000Z",
          "data": 27.781552616112304,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T05:50:00.000Z",
          "data": 29.58236390436144,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T06:00:00.000Z",
          "data": 34.534764021751315,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T06:10:00.000Z",
          "data": 25.258404648716844,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T06:20:00.000Z",
          "data": 29.517416363511497,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T06:30:00.000Z",
          "data": 34.914748114122006,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T06:40:00.000Z",
          "data": 32.582583783248786,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T06:50:00.000Z",
          "data": 29.015218434038765,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T07:00:00.000Z",
          "data": 25.442118269970635,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T07:10:00.000Z",
          "data": 26.904366451109894,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T07:20:00.000Z",
          "data": 25.609236005869768,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T07:30:00.000Z",
          "data": 32.90774101931565,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T07:40:00.000Z",
          "data": 26.344444637689616,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T07:50:00.000Z",
          "data": 33.511009449055976,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T08:00:00.000Z",
          "data": 28.279461453185565,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T08:10:00.000Z",
          "data": 34.271224025908886,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T08:20:00.000Z",
          "data": 33.91499680748312,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T08:30:00.000Z",
          "data": 32.07812158561179,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T08:40:00.000Z",
          "data": 29.337593605751884,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T08:50:00.000Z",
          "data": 27.531063086099238,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T09:00:00.000Z",
          "data": 29.72313325460789,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T09:10:00.000Z",
          "data": 30.99118069508711,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T09:20:00.000Z",
          "data": 33.82035851702547,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T09:30:00.000Z",
          "data": 32.647992052862534,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T09:40:00.000Z",
          "data": 26.47341493394878,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T09:50:00.000Z",
          "data": 25.40747037215365,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T10:00:00.000Z",
          "data": 28.692093423212473,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T10:10:00.000Z",
          "data": 28.572547508515758,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T10:20:00.000Z",
          "data": 29.388193439953696,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T10:30:00.000Z",
          "data": 26.128237507099005,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T10:40:00.000Z",
          "data": 30.432339793281148,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T10:50:00.000Z",
          "data": 32.7276340971182,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T11:00:00.000Z",
          "data": 34.80784977710167,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T11:20:00.000Z",
          "data": 29.562658416300707,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T11:30:00.000Z",
          "data": 30.364626676541064,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T11:40:00.000Z",
          "data": 32.98435949717672,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T11:50:00.000Z",
          "data": 29.155237895542186,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T12:00:00.000Z",
          "data": 28.225767559737903,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T12:10:00.000Z",
          "data": 26.179701271338555,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T12:20:00.000Z",
          "data": 31.58570515106676,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T12:30:00.000Z",
          "data": 29.20991166227518,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T12:40:00.000Z",
          "data": 27.967585961564424,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T12:50:00.000Z",
          "data": 30.0645549669808,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T13:00:00.000Z",
          "data": 28.48910161783397,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T13:10:00.000Z",
          "data": 34.82602851229873,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T13:20:00.000Z",
          "data": 27.469957610059982,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T13:30:00.000Z",
          "data": 28.886046571641355,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T13:40:00.000Z",
          "data": 34.577119973191756,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T13:50:00.000Z",
          "data": 26.506942141653212,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T14:00:00.000Z",
          "data": 34.4965602487305,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T14:10:00.000Z",
          "data": 31.758131350164913,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T14:20:00.000Z",
          "data": 26.016196329677477,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T14:30:00.000Z",
          "data": 28.144019728012367,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T14:40:00.000Z",
          "data": 26.20285550460201,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T14:50:00.000Z",
          "data": 33.73867340855775,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T15:00:00.000Z",
          "data": 30.261485911014567,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T15:10:00.000Z",
          "data": 31.198423838536122,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T15:20:00.000Z",
          "data": 34.837809669648784,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T15:30:00.000Z",
          "data": 31.287839140334572,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T15:40:00.000Z",
          "data": 32.06774584836084,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T15:50:00.000Z",
          "data": 34.865558038404146,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T16:00:00.000Z",
          "data": 26.180898353245585,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T16:10:00.000Z",
          "data": 27.730695788383983,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T16:20:00.000Z",
          "data": 26.394394004867145,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T16:30:00.000Z",
          "data": 31.788106912628464,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T16:40:00.000Z",
          "data": 25.244481005769998,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T16:50:00.000Z",
          "data": 26.06283031727302,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T17:00:00.000Z",
          "data": 30.07979586483287,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T17:10:00.000Z",
          "data": 26.7370447017316,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T17:20:00.000Z",
          "data": 28.068042849044488,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T17:30:00.000Z",
          "data": 27.71502751617572,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T17:40:00.000Z",
          "data": 31.251302561777358,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T17:50:00.000Z",
          "data": 29.183690019780563,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T18:00:00.000Z",
          "data": 28.332988760699102,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T18:10:00.000Z",
          "data": 30.55799566212659,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T18:20:00.000Z",
          "data": 26.483486885585,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T18:30:00.000Z",
          "data": 28.25934168305954,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T18:40:00.000Z",
          "data": 30.40808199424835,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T18:50:00.000Z",
          "data": 30.166615681983874,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T19:00:00.000Z",
          "data": 33.391300257657676,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T19:10:00.000Z",
          "data": 34.31480257261704,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T19:20:00.000Z",
          "data": 34.164149548131704,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T19:30:00.000Z",
          "data": 33.93822059149566,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T19:40:00.000Z",
          "data": 33.45934252612187,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T19:50:00.000Z",
          "data": 25.590530872589458,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T20:00:00.000Z",
          "data": 26.201438649166814,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T20:10:00.000Z",
          "data": 26.81637912814945,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T20:20:00.000Z",
          "data": 31.075623832716765,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T20:30:00.000Z",
          "data": 28.06977865927621,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T20:40:00.000Z",
          "data": 32.175511581265894,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T20:50:00.000Z",
          "data": 25.656019346429442,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T21:00:00.000Z",
          "data": 33.121240626154,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T21:10:00.000Z",
          "data": 32.07699944279116,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T21:20:00.000Z",
          "data": 26.976715663152635,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T21:30:00.000Z",
          "data": 26.256101911839583,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T21:40:00.000Z",
          "data": 26.470248955847843,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T21:50:00.000Z",
          "data": 29.22617961514584,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T22:00:00.000Z",
          "data": 29.094479238891335,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T22:10:00.000Z",
          "data": 33.67681843580181,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T22:20:00.000Z",
          "data": 25.432686497843928,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T22:30:00.000Z",
          "data": 28.91663037923871,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T22:40:00.000Z",
          "data": 32.83700901998663,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T22:50:00.000Z",
          "data": 26.822147975934698,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T23:00:00.000Z",
          "data": 33.67028145091831,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T23:10:00.000Z",
          "data": 32.91907337454451,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T23:20:00.000Z",
          "data": 26.318432346735104,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T23:30:00.000Z",
          "data": 28.484680290845063,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T23:40:00.000Z",
          "data": 32.94842326809402,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-18T23:50:00.000Z",
          "data": 27.231387697687257,
          "sensor": "208",
          "station": "0"
      },
      {
          "time": "2022-01-19T00:00:00.000Z",
          "data": 25.52601813837789,
          "sensor": "208",
          "station": "0"
      }
  ]
}
dataPm10AmountConc1 = {
  "name": "PM10AmountConcentration",
  "unit": "#/m³",
  "dataArray": [
      {
          "time": "2022-01-18T00:00:00.000Z",
          "data": 17.604994732331257,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T00:10:00.000Z",
          "data": 16.495380539677523,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T00:20:00.000Z",
          "data": 22.61489945480242,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T00:30:00.000Z",
          "data": 16.078447099478616,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T00:40:00.000Z",
          "data": 22.234161348807557,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T00:50:00.000Z",
          "data": 24.187156304739887,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T01:00:00.000Z",
          "data": 24.869440415228198,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T01:10:00.000Z",
          "data": 15.55228245320592,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T01:20:00.000Z",
          "data": 24.697026064190638,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T01:30:00.000Z",
          "data": 18.18367201656474,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T01:40:00.000Z",
          "data": 17.89715872881802,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T01:50:00.000Z",
          "data": 18.170981754211073,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T02:00:00.000Z",
          "data": 20.117674581792212,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T02:10:00.000Z",
          "data": 22.78292665753161,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T02:20:00.000Z",
          "data": 23.297069744922826,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T02:30:00.000Z",
          "data": 22.137562808951532,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T02:40:00.000Z",
          "data": 15.471166399727274,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T02:50:00.000Z",
          "data": 20.59324366480144,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T03:00:00.000Z",
          "data": 20.711627086126196,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T03:10:00.000Z",
          "data": 22.319955408972337,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T03:20:00.000Z",
          "data": 17.372483117213573,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T03:30:00.000Z",
          "data": 19.943714110834026,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T03:40:00.000Z",
          "data": 18.973095601057008,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T03:50:00.000Z",
          "data": 22.256195112044388,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T04:00:00.000Z",
          "data": 17.676559206762487,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T04:10:00.000Z",
          "data": 19.67046921532925,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T04:20:00.000Z",
          "data": 17.76842410578463,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T04:30:00.000Z",
          "data": 21.03162368365745,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T04:40:00.000Z",
          "data": 16.090999577907773,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T04:50:00.000Z",
          "data": 21.603386590988144,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T05:00:00.000Z",
          "data": 19.276116935391286,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T05:10:00.000Z",
          "data": 21.65265730674442,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T05:20:00.000Z",
          "data": 22.239071719390477,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T05:30:00.000Z",
          "data": 23.035694205492533,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T05:40:00.000Z",
          "data": 18.094029705142805,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T05:50:00.000Z",
          "data": 24.557089163766253,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T06:00:00.000Z",
          "data": 24.8165348210324,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T06:10:00.000Z",
          "data": 19.465509046383243,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T06:20:00.000Z",
          "data": 16.72026472670308,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T06:30:00.000Z",
          "data": 19.811140473223137,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T06:40:00.000Z",
          "data": 24.510404636765752,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T06:50:00.000Z",
          "data": 22.41715098608264,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T07:00:00.000Z",
          "data": 18.91394992657695,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T07:10:00.000Z",
          "data": 22.250014991925724,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T07:20:00.000Z",
          "data": 15.20196777070338,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T07:30:00.000Z",
          "data": 16.52791811006268,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T07:40:00.000Z",
          "data": 17.73025799462327,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T07:50:00.000Z",
          "data": 19.401981915739036,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T08:00:00.000Z",
          "data": 15.747670114326699,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T08:10:00.000Z",
          "data": 21.401028336527766,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T08:20:00.000Z",
          "data": 19.090885931008625,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T08:30:00.000Z",
          "data": 17.77118271956372,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T08:40:00.000Z",
          "data": 23.336870647757053,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T08:50:00.000Z",
          "data": 20.391016125784283,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T09:00:00.000Z",
          "data": 23.118850666679652,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T09:10:00.000Z",
          "data": 23.728852992069918,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T09:20:00.000Z",
          "data": 16.78505210701289,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T09:30:00.000Z",
          "data": 16.452743820685182,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T09:40:00.000Z",
          "data": 20.60893240887712,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T09:50:00.000Z",
          "data": 23.673830575617473,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T10:00:00.000Z",
          "data": 22.471287170657828,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T10:10:00.000Z",
          "data": 24.188839841895675,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T10:20:00.000Z",
          "data": 17.667940930489074,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T10:30:00.000Z",
          "data": 23.78686107474323,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T10:40:00.000Z",
          "data": 21.568282901293454,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T10:50:00.000Z",
          "data": 24.103434839491165,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T11:00:00.000Z",
          "data": 23.039681375837013,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T11:20:00.000Z",
          "data": 22.99806345306193,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T11:30:00.000Z",
          "data": 17.947817195200805,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T11:40:00.000Z",
          "data": 24.896959638758638,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T11:50:00.000Z",
          "data": 18.49893085528795,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T12:00:00.000Z",
          "data": 19.904386816834922,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T12:10:00.000Z",
          "data": 22.022885791207706,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T12:20:00.000Z",
          "data": 18.164779689406647,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T12:30:00.000Z",
          "data": 24.230414696532954,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T12:40:00.000Z",
          "data": 16.905055705217833,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T12:50:00.000Z",
          "data": 23.035745701053358,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T13:00:00.000Z",
          "data": 22.319838134878665,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T13:10:00.000Z",
          "data": 18.295914096315446,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T13:20:00.000Z",
          "data": 15.858052945485685,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T13:30:00.000Z",
          "data": 21.018072804099546,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T13:40:00.000Z",
          "data": 19.26826978281627,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T13:50:00.000Z",
          "data": 18.764169919452648,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T14:00:00.000Z",
          "data": 19.032179611405766,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T14:10:00.000Z",
          "data": 15.510151434768904,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T14:20:00.000Z",
          "data": 19.95116124180228,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T14:30:00.000Z",
          "data": 24.496577385221414,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T14:40:00.000Z",
          "data": 16.13773770868952,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T14:50:00.000Z",
          "data": 16.355914829963083,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T15:00:00.000Z",
          "data": 16.654678684615,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T15:10:00.000Z",
          "data": 15.866931820556257,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T15:20:00.000Z",
          "data": 21.896534622076388,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T15:30:00.000Z",
          "data": 17.493458508576325,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T15:40:00.000Z",
          "data": 19.24605833327748,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T15:50:00.000Z",
          "data": 21.825802316205667,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T16:00:00.000Z",
          "data": 15.33705686539026,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T16:10:00.000Z",
          "data": 22.081782907880783,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T16:20:00.000Z",
          "data": 17.78176066867833,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T16:30:00.000Z",
          "data": 18.465026220250966,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T16:40:00.000Z",
          "data": 20.167177448847458,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T16:50:00.000Z",
          "data": 22.428119642927058,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T17:00:00.000Z",
          "data": 21.13182860701056,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T17:10:00.000Z",
          "data": 23.516833748846807,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T17:20:00.000Z",
          "data": 24.366035057382376,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T17:30:00.000Z",
          "data": 16.134008359023834,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T17:40:00.000Z",
          "data": 18.604975559483222,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T17:50:00.000Z",
          "data": 20.835363660822,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T18:00:00.000Z",
          "data": 24.412130386772347,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T18:10:00.000Z",
          "data": 18.852063450270087,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T18:20:00.000Z",
          "data": 23.051233722134008,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T18:30:00.000Z",
          "data": 15.512170352097563,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T18:40:00.000Z",
          "data": 16.628527542066653,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T18:50:00.000Z",
          "data": 19.260280475646592,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T19:00:00.000Z",
          "data": 18.18270693464975,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T19:10:00.000Z",
          "data": 24.98858304634603,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T19:20:00.000Z",
          "data": 20.965416685098617,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T19:30:00.000Z",
          "data": 18.378824226030883,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T19:40:00.000Z",
          "data": 21.28409794572829,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T19:50:00.000Z",
          "data": 18.959185574104886,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T20:00:00.000Z",
          "data": 17.84533089643149,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T20:10:00.000Z",
          "data": 20.819328694858086,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T20:20:00.000Z",
          "data": 22.035047301145063,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T20:30:00.000Z",
          "data": 21.14554255127718,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T20:40:00.000Z",
          "data": 18.71147568468798,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T20:50:00.000Z",
          "data": 18.36793849434951,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T21:00:00.000Z",
          "data": 24.973224356855937,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T21:10:00.000Z",
          "data": 22.139816431723492,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T21:20:00.000Z",
          "data": 15.530134756216663,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T21:30:00.000Z",
          "data": 21.46098866220506,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T21:40:00.000Z",
          "data": 22.327315897581368,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T21:50:00.000Z",
          "data": 16.727886436440198,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T22:00:00.000Z",
          "data": 18.730209808885125,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T22:10:00.000Z",
          "data": 17.383990652200286,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T22:20:00.000Z",
          "data": 18.036343081680457,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T22:30:00.000Z",
          "data": 15.87025928766126,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T22:40:00.000Z",
          "data": 20.89483475818049,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T22:50:00.000Z",
          "data": 22.820775846945175,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T23:00:00.000Z",
          "data": 23.543668409869934,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T23:10:00.000Z",
          "data": 19.631393421763057,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T23:20:00.000Z",
          "data": 24.255466763123884,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T23:30:00.000Z",
          "data": 23.570884769042646,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T23:40:00.000Z",
          "data": 23.81531934353108,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-18T23:50:00.000Z",
          "data": 18.134421608330527,
          "sensor": "208",
          "station": "1"
      },
      {
          "time": "2022-01-19T00:00:00.000Z",
          "data": 18.50856054691167,
          "sensor": "208",
          "station": "1"
      }
  ]
}