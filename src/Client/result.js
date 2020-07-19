import React from 'react'
import { hydrate } from 'react-dom'
import ResultsPage from './Result/ResultsPage'

/**
 * 结果页
 */

//解析url地址
const paras = document.location.toString().split('=');
const len = paras.length;
const offset = paras[len - 1];
const keyword = paras[len - 2].split('&')[0];

hydrate(<><ResultsPage keyword_={decodeURI(keyword)} offset_={offset} /><footer>Copyright © 2020 NoneBack</footer></>, document.getElementById("container"));

