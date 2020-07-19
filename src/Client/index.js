import React from 'react'
import { hydrate } from 'react-dom'

import IndexPage from './Index/IndexPage'

/**
 * 主界面
 */

hydrate(<><IndexPage></IndexPage><footer>Copyright © 2020 NoneBack</footer></>, document.getElementById("container"));