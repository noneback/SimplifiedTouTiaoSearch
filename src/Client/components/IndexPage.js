import React, { useState } from 'react'
import Searchs from './Search'
import HotSpots from './HotSpots'
import { Tabs } from 'antd'
import SearchSuggestion from './SearchSuggestion'



const IndexPage = ({ input }) => {

    const { TabPane } = Tabs;

    const [keyword, setKeyword] = useState('')

    const clicked = () => {
        window.open(`/result/keyword=${keyword}&offset=0`, '_self');
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

        </div >
    )
}

export default IndexPage