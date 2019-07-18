const express = require('express');
// 调用 express 实例，它是一个函数，不带参数调用时，会返回一个 express 实例，将这个变量赋予 app 变量。
const router = express.Router()
const superagent = require('superagent');
const cheerio = require('cheerio');
const bodyParser=require("body-parser");
const url = 'https://www.zte.com.cn'

router.post('/node/enterNewsDetail',bodyParser.json(),(req, res) => {
  let str = req.body.data;
  //console.log(url + str[str.length-1])
  let articlesObj  = {}
  superagent.get(url + str[str.length-1])
    .end((err, sres) => {
      // 常规的错误处理
      if (err) {
        throw new Error(err)
      }
      let $ = cheerio.load(sres.text);
      articlesObj.title = $('div.aboutus_main_info p.title').text()
      articlesObj.footHref = getFootHref(sres)
      articlesObj.asideInfo = getAsideInfo(sres)
      articlesObj.newsDetail = getNewsDetail(sres)
      articlesObj.companyInfo = getCompanyInfo(sres)
      res.send({
        articlesObj
      });
    })
})

let getAsideInfo = (sres) => {
  let $ = cheerio.load(sres.text);
  let newsInfo = [];
  $('a#LinkNew').each((idx, ele) => {
    let news = {
      href: url + $(ele).attr('href'),
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

let getNewsDetail = (sres) => {
  let newsInfo = [];
  let $ = cheerio.load(sres.text);
  $('div.aboutus_main_info div.info p').each((idx, ele) => {
    let news = {
      info: $(ele).text(),
      src: ''
    }
    news['src'] = $(ele).find('img').attr('src')
    newsInfo.push(news);
  })
  return newsInfo;
}

let getCompanyInfo = (sres) => {
  let newsInfo = [];
  let $ = cheerio.load(sres.text);
  let news = {
    title: '',
    name:'',
    info: '',
    hideInfo:'',
    src: ''
  }
  news['title'] = $('div.left div').next().find('p').text()
  news['name'] = $('div.left div.l_right fr l_right_m_change p a').text()
  news['info'] = $('div.left div.l_right fr l_right_m_change div.info p').text()
  news['hideInfo'] = $('div.left div.l_right fr l_right_m_change div.info hide_content p').text()
  $('div.left div.l_right fr l_right_m_change ul.more_info li').each((idx, ele) => {
    news['src'] = $(ele).attr('src').text();
    newsInfo.push(news)
  })
  return newsInfo;
}

module.exports = router
