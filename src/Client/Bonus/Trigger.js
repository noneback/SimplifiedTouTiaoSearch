const triggers = [
    { keyword: '白鹭', src: '/img/白鹭.jpg' },
    { keyword: '春分', src: '/img/春分.jpg' },
    { keyword: '大暑', src: '/img/大暑.jpg' },
    { keyword: '冬至', src: '/img/冬至.jpg' },
    { keyword: '寒露', src: '/img/寒露.jpg' },
    { keyword: '立春', src: '/img/立春.jpg' },
    { keyword: '立秋', src: '/img/立秋.jpg' },
    { keyword: '芒种', src: '/img/芒种.jpg' },
    { keyword: '秋分', src: '/img/秋分.jpg' },
    { keyword: '夏至', src: '/img/夏至.jpg' },
    { keyword: '小满', src: '/img/小满.jpg' },
    { keyword: '小雪', src: '/img/小雪.jpg' },
    { keyword: '处暑', src: '/img/处暑.jpg' },
    { keyword: '大寒', src: '/img/大寒.jpg' },
    { keyword: '大雪', src: '/img/大雪.jpg' },
    { keyword: '谷雨', src: '/img/谷雨.jpg' },
    { keyword: '惊蛰', src: '/img/惊蛰.jpg' },
    { keyword: '立冬', src: '/img/立冬.jpg' },
    { keyword: '立夏', src: '/img/立夏.jpg' },
    { keyword: '清明', src: '/img/清明.jpg' },
    { keyword: '霜降', src: '/img/霜降.jpg' },
    { keyword: '小寒', src: '/img/小寒.jpg' },
    { keyword: '小暑', src: '/img/小暑.jpg' },
    { keyword: '雨水', src: '/img/雨水.jpg' }
]


const isTrigger = word => triggers.some(t => t.keyword === word)


const findTrigger = word => triggers.find(t => t.keyword === word)


export default {
    triggers,
    isTrigger,
    findTrigger
}