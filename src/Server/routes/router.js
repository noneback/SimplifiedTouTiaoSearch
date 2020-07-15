import express from "express";
import hbs from "handlebars";
import searchService from '../services/Search'

const router = express.Router();

router.get("/test", async (req, res) => {
  const theHtml = `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0,user-scalable=no"
  />

    <title>Test</title>
  </head>
  <body>
    <div id="container" style="margin:0 auto">{{{reactele}}}</div>
    <script src="/app.js" charset="utf-8"></script>
    <script src="/vendor.js" charset="utf-8"></script>
    <script src="/css.js" charset="utf-8"></script>
    <footer>      Copyright © 2013-2020    </footer>
  </body>
  
</html>
`
  const hbsTemplate = hbs.compile(theHtml);
  const reactComp = ''
  // renderToString(<IndexPage />);
  const htmlToSend = hbsTemplate({ reactele: reactComp });
  res.send(htmlToSend)
});

// router.get("/result?:keyword", async (req, res) => {

// })

// router.get('/result/keyword=:keyword&offset=:offset',(req,res)=>{
//   res.json(req.params)
// })
// ``
router.get("/result/keyword=:keyword&offset=:offset", async (req, res) => {
  // keyword=:keyword&offset=:offset
  const keyword = req.params.keyword
  const theHtml = `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0,user-scalable=no"
  />

    <title>Document</title>
  </head>
  <body>
    <div id="container" style="margin:0 auto">{{{reactele}}}</div>
    <script src="/result.js" charset="utf-8"></script>
    <script src="/vendor.js" charset="utf-8"></script>
    <script src="/css.js" charset="utf-8"></script>
    <footer>      Copyright © 2013-2020    </footer>
  </body>
 
</html>
`
  const hbsTemplate = hbs.compile(theHtml);
  const reactComp = ''
  // renderToString(<ResultsPage input={keyword} />);
  const htmlToSend = hbsTemplate({ reactele: reactComp });
  res.send(htmlToSend)
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
  // console.log('key-off', keyword, offset)

  searchService.getEntries(encodeURI(keyword), offset)
    .then(response => {
      res.json(response)
      // console.log(response)
    }).catch(err => console.log('error'))
})

router.get('/api/hot_spots', async (req, res) => {
  searchService.getHotSpot()
    .then(response => res.json(response))
})

// app.get(/)

export default router;