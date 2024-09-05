import express from "express";
import cors from 'cors';

const app = express();
const port = 3000;
app.use(cors());

app.get('/', (req, res) => {
        res.send('Hi, my student.');
});

// http://localhost:3000/api/myProfile
app.get('/api/myProfile', (req, res) => {
    let myHtml = '<h1> my Profile </h1>';
    myHtml+='<p>Name: Pimpika lntutsing';
    myHtml+='<p>Email: Phimpika.int@rmutto.ac.th</p>';
    res.set('Content-Type', 'text/html');
    res.end(myHtml);
});

// http://localhost:3000/api/getProfile/u100/
// http://localhost:3000/api/getProfile/u100/o200
app.get('/api/getProfile/:userId/:orderId',(req, res)=>{
    let{userId, orderId } = req.params;
    // your app code
    res.send(req.params);
});

// http://localhost:3000/api/getProfile
app.get('/api/getProfile', (req, res)=>{
    let myProf ={
        '_id': 1000,
        'fname': 'Pimpika',
        'lname':'lntutsing',
        'major': 'IT',
        'email': 'phimpika.int@rmutto.ac.th',
        'imageUrl': 'https://scontent.fbkk22-1.fna.fbcdn.net/v/t39.30808-6/305518974_1669702570068024_9062132912916325505_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=cAgZdnlcG3MQ7kNvgHnUuJn&_nc_ht=scontent.fbkk22-1.fna&oh=00_AYBNF2hHeEbvJRudHSFf6gvOx5KPXtOumOMIgVXch-HbQA&oe=66DF4B93'
    };
    res.jsonp(myProf);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}.`);
});