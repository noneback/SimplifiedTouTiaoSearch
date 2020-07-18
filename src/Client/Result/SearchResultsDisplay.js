import React from 'react'
import Entry from './Entry'

/**
 * 搜索结果展示组件,每页展示10个结果，总条数
 * @typedef SearchResultsDisplayProps
 * @property {number} total 结果总条数
 * @property {Array<T>} results 结果数组
 */

const SearchResultsDisplay = ({ total, results }) => {

    return (
        <div id='results_container'>
            <p id='results_counter'>总共{total}条结果</p>
            {results.map(x => {
                return (
                    <Entry key={x.link_url} data={x}></Entry>
                )
            })}

        </div>
    )

}

export default SearchResultsDisplay;