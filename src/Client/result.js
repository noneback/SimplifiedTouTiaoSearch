import React from 'react'
import { hydrate } from 'react-dom'
import ResultsPage from './components/ResultsPage'

const paras = document.location.toString().split('=')
const len = paras.length
const offset = paras[len - 1]
const keyword = paras[len - 2].split('&')[0]

// GetUrlPara()
hydrate(<><ResultsPage keyword_={decodeURI(keyword)} offset_={offset} /><footer>Copyright © 2020 NoneBack</footer></>, document.getElementById("container"))

