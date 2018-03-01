import express from 'express';
import bodyParser from 'body-parser';

import { fetchCycleHireData } from './middleware/fetchCycleHireData';

const app = express();

app.set("port", process.env.PORT || 3001);

app.use(bodyParser.json());

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get('/api/bike-data', fetchCycleHireData);

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});
