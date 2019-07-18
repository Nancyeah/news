const express = require('express');
// 调用 express 实例，它是一个函数，不带参数调用时，会返回一个 express 实例，将这个变量赋予 app 变量。
const router = express.Router()
const superagent = require('superagent');
const cheerio = require('cheerio');
const bodyParser=require("body-parser");
const url = 'https://www.zte.com.cn'

router.post('/node/enterNewsInfo',bodyParser.json(),(req, res) => {
  let str = req.body.data;
  let articlesObj  = {}
  superagent.get(url + str)
    .end((err, sres) => {
      // 常规的错误处理
      if (err) {
        throw new Error(err)
      }
      articlesObj.newsInfo = getNewsInfo(sres)
      articlesObj.footHref = getFootHref(sres)
      articlesObj.asideInfo = getAsideInfo(sres)
      res.send({
        articlesObj
      });
    })
})

let getNewsInfo = (sres) => {
  let newsInfo = [];
  let $ = cheerio.load(sres.text);
  $('ul.fz100 li a').each((idx, ele) => {
    let news = {
      href: $(ele).attr('href'),
      text: $(ele).find('span').text(),
      time: $(ele).find('label').text().replace('[','').replace(']','').replace('●','').replace('-',' ')
    };
    newsInfo.push(news);
  })
  return newsInfo;
}

let getAsideInfo = (sres) => {
  let $ = cheerio.load(sres.text);
  let newsInfo = [];
  $('a#LinkNew').each((idx, ele) => {
    let news = {
      href: $(ele).attr('href'),
      text: $(ele).text()
    }
    newsInfo.push(news);
  })
  return newsInfo;
}

let getFootHref = (sres) => {
  let newsInfo = [];
  let $ = cheerio.load(sres.text);
  $('ul.f_nav_b li a').each((idx, ele) => {
    let news = {
      href: url + $(ele).attr('href'),
      text: $(ele).text()
    }
    newsInfo.push(news);
  })
  return newsInfo;
}

module.exports = router
