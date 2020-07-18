import React from 'react'
import Trigger from './Trigger'

/**
 * 彩蛋书签组件，由keyword触发，展示一个图片书签
 * @typedef BonusProps
 * @property {string} keyword 关键字
 * @property {boolean} controler 彩蛋显示属性控制
 * @property {Function} setControler 
 * 
 */
const Bonus = ({ keyword, controler, setControler }) => {


    const close = (e) => {
        //关闭书签图片
        setControler(false);
        window.open(`/result/keyword=${keyword}&offset=0`, '_self');
    }

    return (
        <>
            <div class="bonus" style={{
                transform: controler ? `rotate(360deg)  scale(1)` : `scale(0)`,
                opacity: Number(controler)
            }}>
                <div class="mid_container">
                    {controler ? <img src={Trigger.findTrigger(keyword).src}></img> : ''}
                    <div id="close" onClick={close}>X</div>
                </div>
            </div>
        </>
    )

}

export default Bonus;