import axios from 'axios'

const getEntries = (keyword, offset = 0) =>
    axios.get(`/api/entries/${keyword}&${offset}`).then(res => res.data)


const getHotSpot = () => axios.get(`/api/hot_spots_info`).then((res => res.data))

const getSuggestedWords = keyword =>
    axios.get(`/api/suggest_words/${keyword}`).then(res => !keyword ? [] : res.data)

const getSearchSuggest = () => axios.get(`/api/search_suggestion`).then(res => res.data)

export default {
    getEntries,
    getSuggestedWords,
    getHotSpot,
    getSearchSuggest
}