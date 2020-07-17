import React from 'react'
import { hydrate } from 'react-dom'
import './css/index.css'
import IndexPage from './components/IndexPage'

hydrate(<><IndexPage></IndexPage><footer>Copyright © 2020 NoneBack</footer></>, document.getElementById("container"))