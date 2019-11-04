

//先获取数据 
let olis = document.querySelectorAll('.body li')
let box = document.getElementsByClassName('body')[0]
let flag = false//代表新数据加载完成，flag听该是个true 新数据一请求，就把
let oImgs = box.getElementsByTagName('img')
function getdata() {
    flag = true;
    let xhr = new XMLHttpRequest()
    xhr.open('get', './data.json', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && /200|304/.test(xhr.status)) {
            let data = JSON.parse(xhr.response)
            render(data)
            flag = false//代表数据加载完成
            loadall()
        }
    }
    xhr.send()
}
getdata()


function render(data) {
    //data 是后台给的数组
    //循环数组 拼接字符串 把拼接好的字符串放到页面上
    let str = ''
    data.forEach((item, index) => {
        let { pic, author, desc, height } = item;
        // str = `<div class="img_box">
        // <img realsrc="${pic}" src="./img/1.jpg" alt="" style='height:${height}px'>   
        // <p class="desc">${desc}</p>
        // <p class="author">${author}</p>
        //  </div>`;
        // //str 是新拼接出来的一个块，我们需要决定的是这个块放到哪个li中
        // let temp = getMinli()//找出最低的li
        // //把要增加的这一项 放进
        // temp.innerHTML += str
        str=`
        <img realsrc="${pic}" src="./img/1.jpg" alt="" style='height:${height}px'>   
     <p class="desc">${desc}</p>
     <p class="author">${author}</p>
      `
      let temp=getMinli();
      let div=document.createElement('div')
      div.className = 'img_box'
      div.innerHTML = str;
      temp.appendChild(div)
    });
}

//找最低的li
function getMinli() {
    //能找出最短的那个li
    let ary = [...olis].sort((a, b) => {
        return a.clientHeight - b.clientHeight
    })
    return ary[0]
}

//滚动加载更多

window.onscroll = function () {
    loadMore()
    loadall()
}

function loadMore() {
    //最短的那个li露出底部的时候
    let li = getMinli()
    if (utils.offset(li).t + li.clientHeight <= document.documentElement.scrollTop + utils.winH().h) {
        //需要等新数据渲染到页面之后 再去加载新数据；
        if (!flag) {
            getdata()
        }

    }
}

function loadImg(ele) {
    if (ele.myLoad) return
    //图片懒加载
    if (utils.offset(ele).t + ele.clientHeight / 2 <= document.documentElement.scrollTop + utils.winH().h) {
        let realsrc = ele.getAttribute('realsrc')
        let temp = new Image()
        temp.src = realsrc;//让临时图片去请求真实的图片地址去了
        temp.onload = function () {
            ele.src = realsrc
            ele.myLoad = true
            faseIn(ele)
        }
        temp = null
    }
}
function loadall() {
    [...oImgs].forEach(item => {
        loadImg(item)
    })
}

function faseIn(ele) {
    ele.style.opacity = 0;
    let n = 0
    setInterval(() => {
        n += 0.01;
        if (n >= 1) {
            n = 1;
            clearInterval(ele.timer)
        }
        ele.style.opacity = n
    }, 10)
}