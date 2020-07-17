import React, { useState, useEffect } from 'react'
import services from '../../Services/Services'

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
            <div id="SearchSuggestion_container" className='grid_display'>
                {
                    searchSuggestion.map(
                        sugWord => {
                            return <h3 key={sugWord} onClick={() => onClick(sugWord)}> {sugWord}</h3>
                        }
                    )
                }
            </div>
        </>
    )


}

export default SearchSuggestion