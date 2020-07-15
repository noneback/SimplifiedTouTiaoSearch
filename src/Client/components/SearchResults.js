import React from 'react'
import Entry from './Entry'

const SearchResultsDisplay = ({ total,results }) => {

    return (
        <div id='results_container'>
        <p id ='results_counter'>总共{total}条结果</p>
            {results.map(x => {
                return (
                    <Entry key={x.link_url} data={x}></Entry>
                )
            })}

        </div>
    )

}

export default SearchResultsDisplay