import axios from 'axios'

/** 封装头条搜索以及今日热点、猜你想搜api */

const baseUrl = 'https://i.snssdk.com/'


/**
 * 获取词条
 * @param {string} keyword 
 * @param {number} offset 
 * @return {Array<T>} 
 */
const getEntries = (keyword, offset = 0) => {
    const req = axios.get(`${baseUrl}search/api/study?keyword=${keyword}&offset=${offset}`)
    return req.then(res => res.data)
}


/**
 * 获取热搜信息，api通过头条搜索网页版中找到
 * @returns {Array<T>} 热搜信息数组，包含update以及hotspots
 */
const getHotSpot = () => {
    const req = axios.get(`https://ib.snssdk.com/api/suggest_words/?business_id=10039`)
    return req.then(
        res => {
            const hotSpots = res.data.data[0].words.map(spot =>
                new Object({ word: spot.word, hotValue: spot.params.real_click_cnt }))
            const update_time = res.data.data[0].params.extra_info.update_time
            const hotSpotsInfo = {
                data: hotSpots,
                update_time: update_time
            }
            return hotSpotsInfo
        }
    )

}

/**
 * 获取候选推荐词列表   
 * @param {string} keyword 
 * @returns {Array<T>} 推荐词数组
 */
const getSuggestedWords = (keyword) => {
    const req = axios.get(`${baseUrl}search/api/sug/?keyword=${keyword}`)
    return req.then(
        res => {
            const sugs = res.data.data
            return !keyword ? [] : sugs.map(sugs => new Object({ value: sugs.keyword }))
        }
    )
}

/**
 * 获取 猜你想搜 的词条列表，api可通过头条搜索网页版中找到
 * @returns {Array<T>} 词条列表
 */
const getSearchSuggest = () => {
    const req = axios.get(`https://so.toutiao.com/search/suggest/initial_page/`)
    return req.then(res => res.data.data.suggest_words.slice(0, 10))
}

export default {
    getEntries,
    getSuggestedWords,
    getHotSpot,
    getSearchSuggest
}