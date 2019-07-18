const express = require('express');
const router = express.Router();
const superagent = require('superagent');
const cheerio = require('cheerio');
const bodyParser=require("body-parser");
const url = 'http://www.scau.edu.cn/'

router.post("/node/getNewsDetail",bodyParser.json(),function(req,res){
  let arr = req.body.data;
  let articlesObj = {};
  //console.log(arr);
  superagent.get(url + arr[arr.length-1])
    .end((err, sres) => {
      if (err) {
        throw new Error(err)
      }
      let $ = cheerio.load(sres.text);
      articlesObj.title = $('.infobox div.article h1').text();
      articlesObj.arti_metas = [];
      articlesObj.artObj = [];
      $('.arti_metas span').each((idx, ele) => {
        articlesObj.arti_metas.push($(ele).text());
      })
      $('.wp_articlecontent p').each((idx, ele) => {
        let arr_Con = {
          text: $(ele).text(),
          span:'',
          src: ''
        }
        $(ele).find('span').each((idx, ele) => {
          arr_Con['span'] = url + $(ele).text()
        })
        $(ele).find('img').each((idx, ele) => {
          arr_Con['src'] = url + $(ele).attr('src')
        })
        articlesObj.artObj.push(arr_Con)
      })
      res.send({
        articlesObj
      });
    })
});

module.exports = router
