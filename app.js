const express = require('express');

const port = process.env.PORT || 8307;

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use(express.static('public'))

app.get('/form', (req, res) => {
        res.sendFile(__dirname + '/public/index.html');
});

app.post('/fprmPost', (req, res) => {
        console.log(req.body);
})

app.listen(port, () =>{
        console.log(`server started at http://localhost:${port}`)
});