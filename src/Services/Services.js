import axios from 'axios'

/**
 * 封装后端api，便于前端使用
 */

/**
 * @param {string} keyword 
 * @param {number} offset 
 * @returns {Array<T>} Entry数组
 */
const getEntries = (keyword, offset = 0) =>
    axios.get(`/api/entries/${keyword}&${offset}`).then(res => res.data)

/**
 * @returns  {Object} HotSpotsInfo对象
 */

const getHotSpot = () => axios.get(`/api/hot_spots_info`).then((res => res.data))

/**
 * 
 * @param {string} keyword 
 * @returns {Array<T>} 候选推荐词数组
 */
const getSuggestedWords = keyword =>
    axios.get(`/api/suggest_words/${keyword}`)
        .then(res => !keyword ? [] : res.data)
        .catch(e => [])


/**
 * @returns {Array<T>} 猜你想搜词条数组
 */
const getSearchSuggest = () => axios.get(`/api/search_suggestion`).then(res => res.data)

export default {
    getEntries,
    getSuggestedWords,
    getHotSpot,
    getSearchSuggest
}