import React from 'react'
import { hydrate } from 'react-dom'
import ReactDOM from 'react-dom'
import './css/index.css'
import IndexPage from './components/IndexPage'
hydrate(<IndexPage></IndexPage>, document.getElementById("container"))