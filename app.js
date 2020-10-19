const express = require('express');
const app = express();


app.use('/weather/data', async (req, res) => {
console.log(req.body);
res.json({status:202});
});

app.listen(2121);

