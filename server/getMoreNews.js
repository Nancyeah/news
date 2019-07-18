const express = require('express');
const router = express.Router();
const superagent = require('superagent');
const cheerio = require('cheerio');
const bodyParser=require("body-parser");
const url = 'http://www.scau.edu.cn/'
let arr = []
  router.post("/node/getMoreNews",bodyParser.json(),function(req,res){
  arr = req.body.data;
  let str = 'http://www.scau.edu.cn/javascript:void(0);'
  if(arr[arr.length-1] == str){
    //console.log("hi");
    return
  }
  //console.log(arr);
  let articlesObj = {};
  superagent.get(arr[arr.length-1])
    .end((err, sres) => {
      if (err) {
        throw new Error(err)
      }
      let $ = cheerio.load(sres.text);
      articlesObj.title = $('span.col_name_text span').text();
      articlesObj.info = $('div.col_news_head ul li.col_path').text();
      articlesObj.pages_count = $('#wp_paging_w6 ul li.pages_count').text();
      articlesObj.page_nav = [];
      articlesObj.list = [];
      $('#wp_paging_w6 ul li.page_nav a').each((idx, ele) => {
        let page = ''
        $(ele).find('span').each((idx, ele) => {
          page = $(ele).text();
        })
        articlesObj.page_nav.push({
          spanCon: page,
          href: url + $(ele).attr('href')
        })
      })
      $('#wp_news_w6 ul li').each((idx, ele) => {
        articlesObj.list.push({
          name: $(ele).find('.news_title a').text(),
          href: $(ele).find('.news_title a').attr('href'),
          time: $(ele).find('.news_meta').text()
        })
      })
      $('#wp_paging_w6 ul li.page_jump span.pages').each((idx, ele) => {
        articlesObj.page_jump = $(ele).text()
      })
      res.send({
        articlesObj
      });
    })
})

module.exports = router
