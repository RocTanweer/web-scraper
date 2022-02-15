const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");

const app = express();

const PORT = 4000;

const url = "https://123series.xyz/";

const articles = [];

const fetchHTML = async (url) => {
  const res = await axios(url);
  const html = res.data;
  const $ = cheerio.load(html);

  $(".film-name", html).each(function () {
    const url = $(this).find("a").attr("href");
    articles.push({ url });
  });

  console.log(articles);
};

fetchHTML(url);

app.listen(PORT, () => console.log(`server is running on port: ${PORT}`));
