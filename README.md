# punk_avenue

To start:

1. npm install
2. npm start

Note: Docker compose can be used for start mongo: `docker-compose up -d`

To run test:

`npm test`

API Docs:

GET /api/v1/station?at=date
Request:
```
curl -v localhost:3000/api/v1/stations?at=2018-12-05T21:27:23
```
Response:
200
```
{at: '2018-12-05T21:27:23', station:[...], weather:[...]}
```
Bad params:
```
curl -v localhost:3000/api/v1/stations?at=2018-12-05T21:27:as
```
Response:
400:id
```
You must send a valid UTC date.
````

GET /api/v1/stations/:kioskId?at=date
Request
```
curl -v localhost:3000/api/v1/stations/3004?at=2018-12-05T21:27:23
```
Response:
200
```
{at: '2018-12-05T21:27:23', station:[...], weather:[...]}
```
Bad params:
```
curl -v localhost:3000/api/v1/stations/BLABLA?at=2018-12-05T21:27:23
```
Response:
400
```
You must specify a valid id
```
GET /api/v1/stations/:kioskId?from=date&to=date&frequency=hourly
Request:
```
curl 'http://localhost:3000/api/v1/stations/3004?from=2018-12-05T14%3A00%3A00&to=2018-12-12T14%3A00%3A00&frequency=hourly'
```
Response:
200
```
{at: '2018-12-05T21:27:23', station:[...], weather:[...]}
```
