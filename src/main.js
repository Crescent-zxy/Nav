const $lastLi = $('#last')
const $siteList = $('.siteList')
const nav = JSON.parse(localStorage.getItem('nav'))
const hashMap = nav || [{
    // logo: 'acfun.png',
    url: 'https://www.acfun.cn',
    link: 'acfun'
}, {
    // logo: 'bilibili.jpg',
    url: 'https://www.bilibili.com/',
    link: 'bilibili'
}]
const render = () => {
    $siteList.find('li:not(#last)').remove()
    hashMap.forEach((node, index) => {
        const $li = $(`<li>
            <div class="site">
                <div class="logo">
                    ${node.logo ? `<img src="images/${node.logo}" alt="">` : node.link[0]}
                </div>
                <div class="link">${node.link}</div>
                <div class="close">
                    <svg t="1613302092961" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1729" width="200" height="200"><path d="M512 34.133333a486.4 486.4 0 1 0 486.4 486.4A486.4 486.4 0 0 0 512 34.133333z m209.4848 632.8064l-55.6032 55.466667-151.517867-151.125333-151.517866 151.1168-55.6032-55.466667 151.517866-151.108267L307.242667 364.714667l55.6032-55.466667 151.517866 151.125333 151.517867-151.1168 55.6032 55.466667-151.517867 151.099733z m0 0" p-id="1730" fill="#707070"></path></svg>
                </div>
            </div>
    </li>`).insertBefore($lastLi)
        $li.on('click', () => {
            window.open(node.url)
        })
        $li.on('click', '.close', e => {
            e.stopPropagation()
            hashMap.splice(index, 1)
            localStorage.setItem('nav', JSON.stringify(hashMap))
            render()
        })
    })
}
render()
const simplifyUrl = (url) => {
    return url.replace('https://', '')
        .replace('http://', '')
        .replace('www.', '')
        .replace(/\/.*/, '')
}

$('#add').on('click', () => {
    const url = window.prompt('请输入要添加的网址：')
    hashMap.push({
        url: url.indexOf('http') !== 0 ? 'https://' + url : url,
        link: simplifyUrl(url)
    })
    localStorage.setItem('nav', JSON.stringify(hashMap))
    render()
})