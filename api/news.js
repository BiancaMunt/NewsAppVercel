const fetch = require("node-fetch");

module.exports = (req, res) => {
  fetch('https://newscatcher.p.rapidapi.com/v1/stocks?&page=1&media=True&lang=en&ticker=AAPL', {
    headers: {
      'x-rapidapi-host': 'newscatcher.p.rapidapi.com',
      'x-rapidapi-key': process.env.REACT_APP_BUTTER_API_TOKEN,
    },
  })
    .then(news => news.json())
    .then((data) => res.json(data))
    .catch(err => err);
}
