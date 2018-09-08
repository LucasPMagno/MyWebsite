const express = require('express');
const app = express();
const router = express.Router();
const layout = require('express-layout');
const path = require('path');

// app.set('views', path.join(__dirname, 'views'));
// app.set('view-engine', 'html');

const middlewares = [
    express.static(path.join(__dirname, 'public'))
]
app.use(middlewares);

router.get('/', (res, req) => {
    
})

app.use((req, res, next) => {
    res.status(404).send('Error 404: Not Found.');
})

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Error 500: Server Error');
})

app.listen(8002, () => {
    console.log('lucaspmagno running at http://localhost:8002');
})