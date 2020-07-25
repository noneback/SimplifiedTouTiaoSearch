import React, { useState, useEffect } from 'react'
import services from '../../Services/Services'

/**
 * 猜你想搜页面 展示相关词条
 */

const SearchSuggestion = () => {

    const [searchSuggestion, setSearchSuggestion] = useState([]); //维护相关词条

    useEffect(() => {
        services.getSearchSuggest().then(sugWords => setSearchSuggestion(sugWords));
    }, []);



    const onClick = (sugWord) => {
        window.open(`/keyword=${sugWord}&offset=0`, '_self');
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

export default SearchSuggestion;