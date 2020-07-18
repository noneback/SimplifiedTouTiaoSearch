// import './mask.css'
import React, { useState } from 'react'
import Trigger from './Trigger'

const Mask = ({ keyword, controler, setControler }) => {

    const close_ = (e) => {
        setControler(false)
        setTimeout(window.open(`/result/keyword=${keyword}&offset=0`, '_self'), 10000);

    }

    return (
        <>
            <div class="mask" style={{
                transform: controler ? `rotate(360deg)  scale(1)` : `scale(0)`,
                opacity: Number(controler)
            }}>
                <div class="mid_container">
                    {controler ? <img src={Trigger.findTrigger(keyword).src}></img> : ''}
                    <div id="close" onClick={close_}>X</div>
                </div>
            </div>
        </>
    )

}

export default Mask