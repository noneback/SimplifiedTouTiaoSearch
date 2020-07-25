import React from 'react'
import ReactDOM from 'react-dom'

import IndexPage from './Index/IndexPage'

/**
 * 主界面
 */
const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;

renderMethod(<div><IndexPage></IndexPage><footer>Copyright © 2020 NoneBack</footer></div>, document.getElementById("container"));