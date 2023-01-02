import * as express from 'express';

import bear from './routes/bear';

const app = express();
const port = 3000;

app.use('/bear', bear);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
