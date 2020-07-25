import express from "express";
import searchService from '../../Services/Search'
import logger from "../utils/logger";
import { renderToString } from 'react-dom/server'
import React from 'react'
import IndexPage from '../../Client/Index/IndexPage'
import ResultsPage from '../../Client/Result/ResultsPage'
import fs from 'fs'

const router = express.Router();

/**获取 主页 */
router.get("/", async (req, res) => {
  const index = renderToString(<div><IndexPage></IndexPage><footer>Copyright © 2020 NoneBack</footer></div>)
  const template = fs.readFileSync('./public/app.html', 'utf-8')
  console.log('index:', index)
  const html = template.replace('<div id="container"></div>', `<div id="container">${index}</div>`)
  res.send(html);
});

/** 结果页 */
router.get("/keyword=:keyword&offset=:offset", async (req, res) => {

  const keyword = req.params.keyword
  const offset = req.params.offset
  const results = renderToString(<ResultsPage keyword_={decodeURI(keyword)} offset_={offset} />)
  const template = fs.readFileSync('./public/result.html', 'utf-8')
  const html = template.replace('<div id="container"></div>', `<div id="container">${results}</div>`)
  res.send(html);
})

/** API */

/** 获取 猜你想猜 的内容 */
router.get('/api/search_suggestion', async (req, res) => {
  searchService.getSearchSuggest()
    .then(response => res.json(response))
    .catch(error => logger.error(`error: /api/search_suggestion\n status: ${res.statusCode}\n`));
})

/** 获取 候选推荐词  */
router.get('/api/suggest_words/:keyword', async (req, res) => {
  const keyword = req.params.keyword;
  if (!keyword) console.log('api:sug:keyword is false')

  searchService.getSuggestedWords(encodeURI(keyword))
    .then(response => res.json(response))
    .catch(error => {
      logger.error(`error: /api/suggest_words/:keyword\n status: ${res.statusCode}\n`);
      res.status(404);
    });
})

/** 获取 搜索词条 */
router.get('/api/entries/:keyword&:offset', async (req, res) => {
  const keyword = (req.params.keyword);
  const offset = (req.params.offset);

  searchService.getEntries(encodeURI(keyword), offset)
    .then(response => res.json(response))
    .catch(error => logger.error(`error: /api/entries/:keyword&:offset\n status: ${res.statusCode}\n`));

})

/** 获取 今日热点词条 */

router.get('/api/hot_spots_info', async (req, res) => {
  searchService.getHotSpot()
    .then(response => res.json(response))
    .catch(error => logger.error(`error: /api/hot_spots_info\n status: ${res.statusCode}\n`));

})


export default router;