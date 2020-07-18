import React, { useState } from 'react'
import { Tabs } from 'antd'

import Searchs from '../Components/Search'
import HotSpots from './HotSpots'
import Bonus from '../Bonus/Bonus'
import SearchSuggestion from './SearchSuggestion'
import Trigger from '../Bonus/Trigger'

/**
 * 首页组件，展示首页信息，展示搜索框、今日热点、猜你想搜、以及节气彩蛋书签
 */



const IndexPage = () => {

    const { TabPane } = Tabs;

    const [keyword, setKeyword] = useState(''); //保存，维护搜索框中传递的搜索关键词 {string}
    const [bonusControler, setBonusControler] = useState(false); // 控制彩蛋的状态 {boolean}


    /**
     * 点击搜索按钮的回调函数
     */
    const clicked = () => {
        //Trigger是彩蛋触发模块，关键字触发
        if (!Trigger.isTrigger(keyword)) {
            window.open(`/result/keyword=${keyword}&offset=0`, '_self');
        } else {
            setBonusControler(true);
        }

    }

    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <Searchs clicked={clicked} setKeyword={setKeyword} keyword={keyword} input={null}></Searchs>
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
            <Bonus keyword={keyword} controler={bonusControler} setControler={setBonusControler}></Bonus>
        </div >
    )
}

export default IndexPage;