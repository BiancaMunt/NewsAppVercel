const unirest = require("unirest");

module.exports = (request, response) => {
  
  const req = unirest("GET", "https://newscatcher.p.rapidapi.com/v1/stocks");
  req.query({
    "media": "True",
    "lang": "en",
    "ticker": "AAPL",
    "page": request.query.page
  });

  req.headers({
    "x-rapidapi-host": "newscatcher.p.rapidapi.com",
    "x-rapidapi-key": process.env.BUTTER_API_TOKEN,
    "useQueryString": true
  });
  
  req.end(function (res) {
    if (res.error) throw new Error(res.error);
    response.json(res.body);
  });
}
