import React, { useState, useEffect } from 'react'
// import 'antd/dist/antd.css'
// import '../index.css'
import { AutoComplete, Input, Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import services from '../services/Services'

const Searchs = ({ input, clicked, keyword, setKeyword }) => {
    const [options, setOptions] = useState([])
    useEffect(() => { !input ? null : setKeyword(input) }, [])


    const handleSearch = async keyword_ => {
        setKeyword(keyword_)
        services.getSuggestedWords(keyword_)
            .then(sugs => setOptions(sugs))
            .catch(error => { console.log('error') })
    }

    const handleKeyPress = ev => {
        console.log(ev.target.value)
        // sessionStorage.setItem('keyword',ev.target.value)
    }

    const onSelect = value => {
        setKeyword(value)
        sessionStorage.setItem('keyword', value)
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
                    onSearch={handleSearch}
                    value={keyword}
                >
                    <Input
                        placeholder='输入关键字'
                        className='custom'
                        style={{
                            height: 42
                        }}
                        onChange={onChange}
                        onKeyPress={handleKeyPress}
                    />
                </AutoComplete>
                <Button
                    className='search_button'
                    type='primary'
                    icon={<SearchOutlined />}
                    onClick={clicked}
                    size='large'
                >
                    Search
                </Button>
            </div>
        </div>
    )
}

export default Searchs
