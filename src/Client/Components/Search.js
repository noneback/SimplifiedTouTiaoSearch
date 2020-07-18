import React, { useState, useEffect } from 'react'
import { AutoComplete, Input, Button } from 'antd'

import services from '../../Services/Services'

/**
 * 搜索框组件，包含logo,搜索框
 * 
 * @typedef SearchsProp
 * @property {string} input 搜索框的初始值
 * @property {Function} clicked 外部传入搜索框的onClick回调函数
 * @property {string} keyword 外部传入的state,用于传递、使用keyword数据
 * @property {Function} setKeyword setState
 */

const Searchs = ({ input, clicked, keyword, setKeyword }) => {

    const [options, setOptions] = useState([]); //维护候选推荐词列表

    useEffect(() => { !input ? null : setKeyword(input) }, []);//第一次渲染初始化keyword

    /**
     * 函数防抖
     * @param {Function} fun 传入函数
     * @param {number} delay 延迟时间(ms)
     */
    const debounce = (fun, delay) => {
        return function (args) {
            let that = this;
            let _args = args;
            clearTimeout(fun.id);
            fun.id = setTimeout(() => {
                fun.call(that, _args);
            }, delay);
        }
    }


    const handleSearch = async keyword_ => {
        if (keyword) {
            await services.getSuggestedWords(keyword_)
                .then(sugs => setOptions(sugs))
                .catch(error => { console.log('handleSearch:error') });
        }
    }


    /* 一些回调函数 */
    const onSelect = value => {
        setKeyword(value)
    }

    const onChange = e => {
        setKeyword(e.target.value)
    }

    return (
        <div id='search_container'>
            <div id="logo" >
                <img src="https://lf3-ttcdn-tos.pstatp.com/obj/card-system/HeadBar/dist_browser/images/logo.545e6c99.png" alt="logo" />
            </div>
            <div id='search_component'>
                <AutoComplete
                    options={options}
                    style={{
                        width: '60%'
                    }}
                    backfill={false}
                    onSelect={onSelect}
                    onSearch={debounce(handleSearch, 500)}
                    value={keyword}
                >
                    <Input
                        placeholder='输入关键字'
                        className='custom'
                        style={{
                            height: 40
                        }}
                        onChange={onChange}
                    />
                </AutoComplete>
                <Button
                    className='search_button'
                    type='primary'
                    onClick={clicked}
                    size='large'
                >
                    搜索
                </Button>
            </div>
        </div>
    )
}

export default Searchs;
