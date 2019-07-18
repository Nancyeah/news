const express = require('express');
// 调用 express 实例，它是一个函数，不带参数调用时，会返回一个 express 实例，将这个变量赋予 app 变量。
const router = express.Router()
const superagent = require('superagent');
const cheerio = require('cheerio');
const bodyParser=require("body-parser");
const url = 'http://www.gov.cn'

router.post('/node/govNewsDetail',bodyParser.json(),(req, res) => {
  let str = req.body.data;
  let articlesObj  = {}
  superagent.get(str[str.length-1])
    .end((err, sres) => {
      if (err) {
        throw new Error(err)
      }
      articlesObj.articleInfo = getArticleInfo(sres)
      articlesObj.articleCon = getArticleCon(sres)
      articlesObj.relatedText = getRelatedText(sres)
      articlesObj.moreNewsTitle = getMoreNewsTitle(sres)
      articlesObj.moreNews = getMoreNews(sres)
      res.send({
        articlesObj
      });
    })
})

let getArticleInfo = (sres) => {
  let $ = cheerio.load(sres.text);
  let articleInfo = {
    title: $('div[class="article oneColumn pub_border"] h1').text(),
    time: $('div[class="article oneColumn pub_border"] div.pages-date').text(),
    editor: $('div.editor').text()
  }
  return articleInfo;
}

let getArticleCon = (sres) => {
  let $ = cheerio.load(sres.text);
  let newsInfo = [];
  $('div#UCAP-CONTENT p').each((idx, ele) => {
    let news = {
      href: $(ele).attr('href'),
      text: $(ele).text()
    }
    newsInfo.push(news)
  })
  return newsInfo
}

let getRelatedText = (sres) => {
  let $ = cheerio.load(sres.text);
  let newsInfo = [];
  $('div.xg-list ul li a').each((idx, ele) => {
    let news = {
      href: url + $(ele).attr('href'),
      text: $(ele).text()
    }
    newsInfo.push(news)
  })
  return newsInfo
}

let getMoreNewsTitle = (sres) => {
  let $ = cheerio.load(sres.text);
  let titleInfo = {
    nav: [],
    title: $('div.channel_tab span a').text()
  }
  $('div.BreadcrumbNav a').next().each((idx, ele) => {
    titleInfo['nav'].push($(ele).text())
  })
  return titleInfo;
}

let getMoreNews = (sres) => {
  let $ = cheerio.load(sres.text);
  let newsInfo = [];
  $('div.news_box div ul li h4').each((idx, ele) => {
    let news = {
      href: url + $(ele).find('a').attr('href'),
      text: $(ele).find('a').text(),
      time: $(ele).find('span').text()
    }
    newsInfo.push(news)
  })
  return newsInfo
}

module.exports = router
