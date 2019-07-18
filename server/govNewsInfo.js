const express = require('express');
// 调用 express 实例，它是一个函数，不带参数调用时，会返回一个 express 实例，将这个变量赋予 app 变量。
const router = express.Router()
const superagent = require('superagent');
const cheerio = require('cheerio');
const bodyParser=require("body-parser");
const url = 'http://www.gov.cn'

router.post('/node/govNewsInfo',bodyParser.json(),(req, res) => {
  let str = req.body.data;
  let articlesObj  = {}
  superagent.get(str)
    .end((err, sres) => {
      if (err) {
        throw new Error(err)
      }
      articlesObj.newsInfo = getNewsInfo(sres)
      articlesObj.newsInfoList1 = getNewsInfoList1(sres)
      articlesObj.newsInfoList2 = getNewsInfoList2(sres)
      articlesObj.newsInfoList3 = getNewsInfoList3(sres)
      articlesObj.newsTitle = getNewsTitle(sres)
      articlesObj.slideInfo = getSlideInfo(sres)
      articlesObj.footerCon1 = getFooterCon1(sres)
      articlesObj.footerCon2 = getFooterCon2(sres)
      articlesObj.footerCon3 = getFooterCon3(sres)
      res.send({
        articlesObj
      });
    })
})

let getNewsInfo = (sres) => {
  let newsInfo = [];
  let $ = cheerio.load(sres.text);
  $('div.zl_channel_body dl dd').each((idx, ele) => {
    let news = {
      href: url + $(ele).find('h4 a').attr('href'),
      title: $(ele).find('h4 a').text(),
      time: $(ele).find('h4 span').text(),
      text: $(ele).find('p').text()
    };
    newsInfo.push(news);
  })
  return newsInfo;
}

let getNewsInfoList1 = (sres) => {
  let newsInfo = [];
  let $ = cheerio.load(sres.text);
  $('div[class=column4_leftPart2] div.list ul li h4').each((idx, ele) => {
    let news = {
      title: $(ele).find('span.place').text(),
      href: $(ele).find('a').attr('href'),
      text: $(ele).find('a').text(),
      time: $(ele).find('span.date').text(),
    }
    newsInfo.push(news)
  })
  return newsInfo;
}

let getNewsInfoList2 = (sres) => {
  let newsInfo = [];
  let $ = cheerio.load(sres.text);
  $('div[class="column4_leftPart2 newsFabu"] div.list ul li h4').each((idx, ele) => {
    let news = {
      href: url + $(ele).find('a').attr('href'),
      title: $(ele).find('a').text(),
      time: $(ele).find('span.date').text(),
    }
    newsInfo.push(news)
  })
  return newsInfo;
}

let getNewsInfoList3 = (sres) => {
  let newsInfo = [];
  let $ = cheerio.load(sres.text);
  $('div[class="column4_leftPart2 bot_hei_no "] div.list ul li h4').each((idx, ele) => {
    let news = {
      href: url + $(ele).find('a').attr('href'),
      title: $(ele).find('a').text(),
      time: $(ele).find('span.date').text(),
    }
    newsInfo.push(news)
  })
  return newsInfo;
}

let getSlideInfo = (sres) => {
  let newsInfo = []
  let $ = cheerio.load(sres.text);
  $('div.item').each((idx, ele) => {
    let news = {
      href: $(ele).find('div.pannel-image a').attr('href'),
      imgSrc: '',
      title: $(ele).find('div.pannel-txt div.subtitle a').text(),
      text: $(ele).find('div.pannel-txt div.summary').text()
    }
    news['imgSrc'] = url + $(ele).find('div.pannel-image a img').attr('src')
    newsInfo.push(news)
  })
  return newsInfo
}

let getNewsTitle = (sres) => {
  let newsInfo = [];
  let $ = cheerio.load(sres.text);
  $('div.column1 div a').each((idx, ele) => {
    let news = {
      title: $(ele).text(),
      href: $(ele).attr('href')
    };
    newsInfo.push(news);
  })
  return newsInfo;
}

let getFooterCon1 = (sres) => {
  let newsInfo = [];
  let $ = cheerio.load(sres.text);
  let container = {};
  $('div.footer div.footer-one div.footer-all').each((idx, ele) => {
    container = {
      title: $(ele).find('p').text(),
      info: [],
      href: []
    }
    $(ele).find('ul.footer-two li a').each((idx, ele) => {
      let info = $(ele).text()
      container['info'].push(info)
      let href = $(ele).attr('href')
      container['href'].push(url + href)
    })
    newsInfo.push(container)
  })
  return newsInfo
}

let getFooterCon2 = (sres) => {
  let newsInfo = [];
  let $ = cheerio.load(sres.text);
  $('ul.footer2_list li a').each((idx, ele) => {
    let news = {
      href: url + $(ele).attr('href'),
      info: $(ele).text()
    };
    newsInfo.push(news);
  })
  return newsInfo;
}

let getFooterCon3 = (sres) => {
  let newsInfo = [];
  let $ = cheerio.load(sres.text);
  let news = {
    info: [],
    href: [],
    pInfo: [],
    imgSrc: []
  };
  $('div.footer3_lf2 span a').each((idx, ele) => {
    news['info'].push($(ele).text());
    news['href'].push(url + $(ele).attr('href'))
  })
  $('div.footer3_lf2 p').each((idx, ele) => {
    news['pInfo'].push($(ele).text())
  })
  $('div.footer3_rf div.fl').each((idx, ele) => {
    news['imgSrc'].push('http://www.gov.cn' + $(ele).find('a img').attr('src'))
  })
  newsInfo.push(news)
  return newsInfo;
}

module.exports = router
