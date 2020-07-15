import React, { useState, useEffect } from 'react'
import services from '../services/Services'
// import './HotSpots.css'

const HotSpots = () => {
    const [top10, setTop10] = useState([])
    useEffect(() => { services.getHotSpot().then(hotSpots => setTop10(hotSpots)) }, [])

    const onClick = (hotSpot) => window.open(`/result/keyword=${hotSpot}&offset=0`, '_self');

    return (
        <>
            <br></br>
            <div style={{ width: '60%', textAlign: 'center', margin: '0 auto' }}><h1>今日热搜</h1></div>
            <br></br>
            <div id="hotspots_container" className='grid_display'>
                {
                    top10.map(hotSpot => {
                        return (<h3 key={hotSpot} onClick={() => onClick(hotSpot)}>{hotSpot}</h3>)
                    })
                }

            </div>
        </>
    )
}

export default HotSpots