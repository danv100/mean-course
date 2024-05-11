const express = require('express');

const app = express();

app.use('/api/posts', (req, res, next) => {
  const posts = [
    {
      id: 'fadf12421l',
      title: 'First server-side post',
      content: 'This is coming from the server'
    },
    {
      id: 'asdf52sd23',
      title: 'Second server-side post',
      content: 'This is coming from the server also!'
    },
    {
      id: 'yrt56fgh34',
      title: 'Third server-side post',
      content: 'This is coming also from the server'
    },
    {
      id: 'frth43rf23',
      title: 'Fourth server-side post',
      content: 'This too is coming from the server'
    }
  ];
  res.status(200).json({
    message: 'Posts fetched successfully!',
    posts: posts
  });
});

module.exports = app;
