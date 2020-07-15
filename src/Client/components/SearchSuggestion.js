import React, { useState, useEffect } from 'react'
import services from '../services/Services'
import Axios from 'axios'
// import './searchSuggestion.css'

const SearchSuggestion = () => {

    const [searchSuggestion, setSearchSuggestion] = useState([])

    useEffect(() => {
        services.getSearchSuggest().then(sugWords => setSearchSuggestion(sugWords))
    }, [])



    const onClick = (sugWord) => {
        window.open(`/result/keyword=${sugWord}&offset=0`, '_self');
    }

    return (
        <>
            <br></br>
            <div style={{ width: '60%', textAlign: 'center', margin: '0 auto' }}><h1>猜你想搜</h1></div>
            <br></br>
            <div id="SearchSuggestion_container" className='grid_display'>
                {

                    searchSuggestion.map(
                        sugWord => {
                            return <h3 onClick={() => onClick(sugWord)}> {sugWord}</h3>
                        }
                    )
                }
            </div>
        </>
    )


}

export default SearchSuggestion