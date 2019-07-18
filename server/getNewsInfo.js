const express = require('express');
// 调用 express 实例，它是一个函数，不带参数调用时，会返回一个 express 实例，将这个变量赋予 app 变量。
const router = express.Router()
const superagent = require('superagent');
const cheerio = require('cheerio');
const url = 'http://www.scau.edu.cn/'

router.get('/node/getNewsInfo', (req, res) => {
  let articlesObj = {};
  superagent.get('http://www.scau.edu.cn/')
    .end((err, sres) => {
      // 常规的错误处理
      if (err) {
        throw new Error(err)
      }
      articlesObj.imgMsg = getImgMsg(sres);
      articlesObj.newsPoint = getNewsPoint(sres);
      articlesObj.headlineNews = getHeadlineNews(sres);
      articlesObj.mediaScau = getMediaScau(sres);
      articlesObj.noticeMsg = getNoticeMsg(sres);
      articlesObj.publicMsg = getpublicMsg(sres);
      articlesObj.listenScau = getlistenScau(sres);
      articlesObj.footerImg = getFooterImg(sres);
      res.send({
        articlesObj
      });
    });
});

let getImgMsg = (sres) => {
  let imgMsg = [];
  let $ = cheerio.load(sres.text);
  let slideList = $('#wp_news_w11');
  let note = slideList.find('script[type="text/javascript"]');
  let reg = /src:\"([^\"]*?)\"/gi;
  let reg2 = /url:\"([^\"]*?)\"/gi;
  let reg3 = /title:\"([^\"]*?)\"/gi;
  let arrSrc = note.html().match(reg);
  let arrUrl = note.html().match(reg2);
  let arrTitle = note.html().match(reg3);
  for(var i=0;i<arrSrc.length;i++){
    //向数组插入数据
    imgMsg.push({
      pic_src : url + arrSrc[i].replace(/\"/g,"").replace("src:",""),
      pic_href : url + arrUrl[i].replace(/\"/g,"").replace("url:",""),
      pic_message : arrTitle[i].replace("title:","")
    });
  }
  return imgMsg;
}
let getNewsPoint = (sres) => {
  let newsPoint = [];
  let $ = cheerio.load(sres.text);
  let news = [];
  $('div#wp_news_w12 ul li').each((idx, ele) => {
    //参数idx是当前遍历的元素的索引，ele就是当前遍历的DOM元素
    $(ele).find('span.news_title a').each((idx, ele) => {
      news = {
        name: $(ele).text(),
        href: $(ele).attr('href'),
        time: ''
      }
    })
    $(ele).find('span.news_meta').each((idx, ele) => {
      news['time'] = $(ele).text()
    })
    newsPoint.push(news);
  })
  return newsPoint;
}
let getHeadlineNews = (sres) => {
  let headlineNews = [];
  let $ = cheerio.load(sres.text);
  $('div#wp_news_w21 ul li div.news_wz div.news_title a').next().next().each((idx, ele) => {
    let news = {
      title: $(ele).text(),
      href: $(ele).attr('href')
    };
    headlineNews.push(news);
  })
  return headlineNews;
}

let getMediaScau = (sres) => {
  let mediaScau = [];
  let $ =cheerio.load(sres.text);
  let news = [];
  $('div#wp_news_w32 ul li').each((idx, ele) => {
    $(ele).find('span.news_title a').each((idx, ele) => {
      news = {
        title: $(ele).text(),
        href: $(ele).attr('href'),
        time: ''
      }
    })
    $(ele).find('span.news_meta').each((idx, ele) => {
      news['time'] = $(ele).text()
    })
    mediaScau.push(news);
  })
  if(mediaScau.length > 6){
    return mediaScau.slice(0,6);
  }else
    return mediaScau;
}

let getNoticeMsg = (sres) => {
  let noticeMsg = [];
  let $ = cheerio.load(sres.text);
  let news = [];
  $('div#wp_news_w44 ul li').each((idx, ele) => {
    $(ele).find('span.news_title a').each((idx, ele) => {
      news = {
        title: $(ele).text(),
        href: $(ele).attr('href'),
        time: ''
      }
    })
    $(ele).find('span.news_meta').each((idx, ele) => {
      news['time'] = $(ele).text()
    })
    noticeMsg.push(news);
  })
  if(noticeMsg.length > 6){
    return noticeMsg.slice(0,6);
  }else
    return noticeMsg;
}
let getpublicMsg = (sres) => {
  let publicMsg = [];
  let $ = cheerio.load(sres.text);
  let news = [];
  $('div#wp_news_w42 ul li').each((idx, ele) => {
    $(ele).find('span.news_title a').each((idx, ele) => {
      news = {
        title: $(ele).text(),
        href: $(ele).attr('href'),
        time: ''
      }
    })
    $(ele).find('span.news_meta').each((idx, ele) => {
      news['time'] = $(ele).text();
    })
    publicMsg.push(news);
  })
  if(publicMsg.length > 6){
    return publicMsg.slice(0,6);
  }else
    return publicMsg;
}
let getlistenScau = (sres) => {
  let listenScau = [];
  let $ = cheerio.load(sres.text);
  $('div#wp_news_w62 ul li span a').each((idx, ele) => {
    let news = {
      title: $(ele).text(),
      href: $(ele).attr('href')
    };
    listenScau.push(news);
  })
  if(listenScau.length > 6){
    return listenScau.slice(0,6);
  }else
    return listenScau;
}

let getFooterImg = (sres) => {
  let footerImg = [];
  let $ = cheerio.load(sres.text);
  $('div#wp_news_w71 ul li a').each((idx, ele) => {
    //这里的let使得imgInfo能依次获得每个ele的属性，如果先定义了imgInfo，会导致只取到最后一个ele的内容
    let imgInfo = {
      href: $(ele).attr('href'),
      src: ''
    }
    $(ele).find('div.news_imgs img').each((idx, ele) => {
      imgInfo['src'] = url + $(ele).attr('src');
    })
    footerImg.push(imgInfo);
  })
  return footerImg;
}

module.exports = router
