import React, { useState, useEffect } from 'react'
import { Pagination } from 'antd';

import Searchs from '../Components/Search';
import services from '../../Services/Services'
import SearchResultsDispaly from './SearchResultsDisplay'

/**
 * 搜索结果页组件，展示搜索结果，分页，总条数
 * 
 * @typedef ResultsPageProps
 * @property {string} keyword_ 搜索框中的关键字(解析url得到)
 * @property {number} offset_ offset参数
 * 
 */

const ResultsPage = ({ keyword_, offset_ }) => {
  const [keyword, setKeyword] = useState(keyword_) //维护搜索框输入的keyword
  const [results, setResults] = useState([]) //搜索结果,10个Entry
  const [total, setTotal] = useState(0) //维护搜索结果总条数 
  const [page, setPage] = useState(1) //维护当前页数

  /**
   * 组件初始化时数据获取
   */
  const initialize = () => {
    services.getEntries(keyword_, offset_)
      .then((result) => {
        if (result.data) {
          setResults(result.data);
          setTotal(result.total);
        }
        else console.log('No results')
      })
      .catch(error => console.log('clicked:error'));
  }



  useEffect(() => initialize(), []); //页面加载时初始化

  const clicked = () => window.open(`/result/keyword=${keyword}&offset=0`, '_self'); //搜索按钮点击跳转

  const valueChange = (pageNumber) => {
    // 搜索框onChange回调
    setPage(pageNumber);
    window.open(`/result/keyword=${keyword}&offset=${(pageNumber - 1) * 10}`, '_self');
  }

  return (
    <>
      <div id='search_component'>
        <Searchs keyword_={keyword_} keyword={keyword} clicked={clicked} setKeyword={setKeyword}>
        </Searchs>
        <SearchResultsDispaly results={results} total={total}></SearchResultsDispaly>
        <Pagination showQuickJumper current={Math.floor(offset_ / 10 + 1)} total={total} onChange={valueChange} pageSize={10} showSizeChanger={false} responsive={true} />
      </div>

    </>
  )
}

export default ResultsPage;
