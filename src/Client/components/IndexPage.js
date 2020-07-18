import React, { useState } from 'react'
import { Tabs } from 'antd'
import Searchs from './Search'
import HotSpots from './HotSpots'
import Mask from '../Bonus/Mask'
import SearchSuggestion from './SearchSuggestion'
import Trigger from '../Bonus/Trigger'



const IndexPage = ({ input }) => {

    const { TabPane } = Tabs;

    const [keyword, setKeyword] = useState('')

    const [maskControler, setMaskControler] = useState(false)

    const clicked = () => {
        console.log(Trigger.isTrigger(keyword))
        if (!Trigger.isTrigger(keyword)) {
            window.open(`/result/keyword=${keyword}&offset=0`, '_self');
        } else {
            setMaskControler(true)
        }

    }

    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <Searchs clicked={clicked} setKeyword={setKeyword} keyword={keyword} input={input}></Searchs>
            {/* <HotSpots></HotSpots> */}
            <div className='tabs'>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="头条热榜" key="1">
                        <HotSpots></HotSpots>
                    </TabPane>
                    <TabPane tab="猜你想搜" key="2">
                        <SearchSuggestion></SearchSuggestion>
                    </TabPane>
                </Tabs>
            </div>
            <Mask keyword={keyword} controler={maskControler} setControler={setMaskControler}></Mask>
        </div >
    )
}

export default IndexPage