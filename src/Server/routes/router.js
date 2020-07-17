import express from "express";
import searchService from '../../Services/Search'

const router = express.Router();

router.get("/", async (req, res) => {
  res.redirect(200, '/index.html')
});

router.get("/result/keyword=:keyword&offset=:offset", async (req, res) => {
  const resultHtml = `  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
    />
    <title>头条搜索</title>
  </head>
  <body>
    <div id="container"></div>
    <script src="/js/vendors~css.bundle.js?801c25476c1bae43c41e"></script>
    <script src="/js/css.bundle.js?801c25476c1bae43c41e"></script>
    <script src="/js/vendors~app~result~vendor.bundle.js?801c25476c1bae43c41e"></script>
    <script src="/js/vendors~app~result.bundle.js?801c25476c1bae43c41e"></script>
    <script src="/js/vendors~result.bundle.js?801c25476c1bae43c41e"></script>
    <script src="/js/result.bundle.js?801c25476c1bae43c41e"></script>
  </body>
</html>`

  res.send(resultHtml.toString())

});


router.get('/api/search_suggestion', async (req, res) => {
  searchService.getSearchSuggest()
    .then(response => res.json(response))
})

router.get('/api/suggest_words/:keyword', async (req, res) => {
  const keyword = req.params.keyword

  searchService.getSuggestedWords(keyword)
    .then(response => res.json(response))
})

router.get('/api/entries/:keyword&:offset', async (req, res) => {
  const keyword = (req.params.keyword)
  const offset = (req.params.offset)

  searchService.getEntries(encodeURI(keyword), offset)
    .then(response => {
      res.json(response)
    }).catch(err => console.log('error'))
})

router.get('/api/hot_spots_info', async (req, res) => {
  searchService.getHotSpot()
    .then(response => res.json(response))
})


export default router;