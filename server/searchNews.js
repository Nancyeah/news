const express = require('express');
// 调用 express 实例，它是一个函数，不带参数调用时，会返回一个 express 实例，将这个变量赋予 app 变量。
const router = express.Router()
const superagent = require('superagent');
const cheerio = require('cheerio');
const url = 'http://www.scau.edu.cn/_web/search/doSearch.do?_p=YXQ9MTA0JmQ9MzQ0JnA9MSZtPVNOJg__&locale=zh_CN&request_locale=zh_CN'

router.get('/node/searchNews',(req, res) => {
  let articlesObj = {}
  superagent.get(`${url}`).end((err,response) => {
    let $ = cheerio.load(response.text)
    let pageNum = []
    articlesObj.pageNumArr = []
    $('.search_pages clearfix').find('.search_page').each((idx, ele) => {
      pageNum.push($(ele).attr('href'))
      articlesObj.pageNumArr.push(idx + 1)
    })
    res.send({articlesObj})
  })
})

let promise = new Promise((resolve, reject) => {
  superagent.get(`${url}`).end((err, response) => {
    let $ = cheerio.load(response.text)
    let pageNum = []
    $('.search_pages clearfix').find('.search_page').each((idx, ele) => {
      pageNum.push($(ele).attr('href'))
    })
    resolve(pageNum)
  })
})

promise.then((pageArr) => {
  pageArr.forEach((ele, eleIndex) => {
    router.get(`/node/articles/page/${eleIndex+1}`,(promReq, promRes) => {
      ele = ele ? ele : ''
      superagent.get(`${url + ele}`)
    })
  })
})
