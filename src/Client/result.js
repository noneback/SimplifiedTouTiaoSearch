import React from 'react'
import { hydrate, ReactDOM } from 'react-dom'
import ResultsPage from './components/ResultsPage'
import './css/index.css'
// const paras = document.location.toString().split('?')[1].split('&');
// const keyword=paras[0].split('=')[1]
// const offset=paras[1].split('=')[1]
// console.log(keyword,offset)

const GetUrlPara = () => {
    var url = document.location.toString();
    var arrUrl = url.split("?");
    var para = arrUrl[1];
    return para;
}

const paras=document.location.toString().split('=')
const len=paras.length
const offset=paras[len-1]
const keyword=paras[len-2].split('&')[0]

// GetUrlPara()
hydrate(<ResultsPage keyword_={decodeURI(keyword)} offset_={offset} />, document.getElementById("container"))

