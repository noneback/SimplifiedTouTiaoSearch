import React, { useState, useEffect } from 'react'
// import 'antd/dist/antd.css'
// import '../index.css'
import { Pagination } from 'antd';

import Searchs from './Search';
import services from '../services/Services'
import SearchResultsDispaly from './SearchResults'

const ResultsPage = ({ keyword_, offset_ }) => {
  const [keyword, setKeyword] = useState(keyword_)
  const [results, setResults] = useState([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)

  const initialize = () => {
    services.getEntries(keyword_, offset_)
      .then((result) => {
        console.log('key-off',keyword_,offset_)
        if (result.data) {
          setResults(result.data)
          setTotal(result.total)
        }
        else console.log('No results')
      })
      .catch(error => console.log('clicked:error'))
  }



  useEffect(() => initialize(), [])

  const clicked = () => {
    // setKeyword
    window.open(`/result/keyword=${keyword}&offset=0`, '_self');
  }

  const onChange = (pageNumber) => {
    setPage(pageNumber)
    window.open(`/result/keyword=${keyword}&offset=${(pageNumber - 1) * 10}`, '_self');

  }

  return (
    <>
      <div id='search_component'>
        <Searchs keyword_={keyword_} keyword={keyword} clicked={clicked} setKeyword={setKeyword}>
        </Searchs>
        <SearchResultsDispaly results={results} total={total}></SearchResultsDispaly>
        <Pagination showQuickJumper current={Math.floor(offset_ / 10 + 1)} total={total} onChange={onChange} pageSize={10} showSizeChanger={false} responsive={true} />
      </div>

    </>
  )
}

export default ResultsPage
