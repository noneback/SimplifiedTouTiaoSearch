import React, { useState, useEffect } from 'react'
import services from '../../Services/Services'
// import './HotSpots.css'

const HotSpots = () => {
    const [hotSpots, setHotSpots] = useState([])
    const [updateTime, setUpdateTime] = useState([])
    useEffect(() => {
        services.getHotSpot().then(hotSpotsInfo => {
            setHotSpots(hotSpotsInfo.data)
            setUpdateTime(hotSpotsInfo.update_time)
        })
    }, [])

    const onClick = (hotSpot) => window.open(`/result/keyword=${hotSpot}&offset=0`, '_self');

    return (
        <>
            <div className='update_time'><span>更新时间:{updateTime}</span></div>
            {/* <div style={{ width: '60%', textAlign: 'center', margin: '0 auto' }}><h1>今日热搜</h1></div> */}
            <div id="hotspots_container" className='grid_display'>
                {

                    hotSpots.map(hotSpot => {
                        return (
                            <h3 key={hotSpot.word} onClick={() => onClick(hotSpot.word)}>
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