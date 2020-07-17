import React, { useState, useEffect } from 'react'
import { AutoComplete, Input, Button } from 'antd'
import services from '../../Services/Services'

const Searchs = ({ input, clicked, keyword, setKeyword }) => {
    const [options, setOptions] = useState([])
    useEffect(() => { !input ? null : setKeyword(input) }, [])

    function debounce(fun, delay) {
        return function (args) {
            let that = this
            let _args = args
            clearTimeout(fun.id)
            fun.id = setTimeout(function () {
                fun.call(that, _args)
            }, delay)
        }
    }

    const handleSearch = async keyword_ => {
        services.getSuggestedWords(keyword_)
            .then(sugs => setOptions(sugs))
            .catch(error => { console.log('error') })
    }


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
                            height: 42
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

export default Searchs
