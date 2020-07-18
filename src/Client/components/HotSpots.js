import React, { useState, useEffect } from 'react'
import services from '../../Services/Services'

/**
 * 头条热点组件，展示今日热搜词，热度，更新时间
 * 
 */

const HotSpots = () => {

    const [hotSpots, setHotSpots] = useState([]) // 维护从后端取得的hotSpots数据 
    const [updateTime, setUpdateTime] = useState([]) // 维护从后端取得的update时间 

    /*初始化hotSpots,和updateTime，仅在界面初始化时进行一次 */
    useEffect(() => {
        services.getHotSpot().then(hotSpotsInfo => {
            setHotSpots(hotSpotsInfo.data)
            setUpdateTime(hotSpotsInfo.update_time)
        })
    }, [])

    /**
     * 点击时热点词条时调用，跳转页面
     * @param {string} hotSpot 热点词
     */
    const handleClick = (hotSpot) => window.open(`/result/keyword=${hotSpot}&offset=0`, '_self');

    return (
        <>
            <div className='update_time'><span>更新时间:{updateTime}</span></div>
            <div id="hotspots_container" className='grid_display'>
                {

                    hotSpots.map(hotSpot => {
                        return (
                            <h3 key={hotSpot.word} onClick={() => handleClick(hotSpot.word)}>
                                <span className={hotSpots.indexOf(hotSpot) < 3 ? 'hot_top3' : 'hot_rank'}>
                                    {hotSpots.indexOf(hotSpot) + 1}
                                </span>
                                {'      ' + hotSpot.word}
                                <span className='hot_value'>{hotSpot.hotValue}</span>
                            </h3>
                        )
                    })
                }
            </div>

        </>
    )
}

export default HotSpots