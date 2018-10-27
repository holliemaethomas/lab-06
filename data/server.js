'use strict';
// const require = ('require');
const superagent = require('superagent');
const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;
const API = process.env.API_URL || 'http://localhost:3000';

app.set('view-engine', 'ejs');

app.use(express.static('./public'));

app.get('/', homepage);
app.get('/categories', categoryPage);
app.get('/categories/:name', productsPage);



app.listen(API, () => {
  console.log('SERVER UP AT ', API);
});

// get helper middleware stuff here.

function homePage(request, response) {
  response.render('site', { page: './views/site', title: 'Our Site: Home' });
}

function categoryPage(request, response) {
  superagent.get(`${API}/categories`)
    .then(data => {
      response.render('site', { category: data.body, page: './pages/teams', title: 'categories' });

    });
    .catch(error => console.error(error));
  };
  
  function productPage(request, response) {
    superagent.get(`${API}/productPage`)
      .then(data => {
        response.render('site', { products: data.body, page: './pages/products', title: 'products' });

      });
      .catch(error => console.error(error));

      app.listen(PORT, () => console.log('server up on ${PORT}'));
    };