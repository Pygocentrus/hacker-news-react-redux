const path = require('path');
const express = require('express');

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static('dist'));
app.get('/*', (req, res) => res.sendFile(path.join('dist', 'index.html')));

app.listen(app.get('port'), () => console.log(`Server listening on port ${app.get('port')}`));
