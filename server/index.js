const getNewsInfo = require('./getNewsInfo')
const getNewsDetail = require('./getNewsDetail')
const getMoreNews = require('./getMoreNews')
const enterNewsInfo = require('./enterNewsInfo')
const enterNewsDetail = require('./enterNewsDetail')
const govNewsInfo = require('./govNewsInfo')
const govNewsDetail = require('./govNewsDetail')
const express = require('express')
const app = express()

app.use(getNewsInfo)
app.use(getNewsDetail)
app.use(getMoreNews)
app.use(enterNewsInfo)
app.use(enterNewsDetail)
app.use(govNewsInfo)
app.use(govNewsDetail)

app.listen(3030)
console.log('node server is running at port 3030')
