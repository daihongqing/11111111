let ul = document.querySelector('#box .img_box ul'),
box = document.querySelector('#box'),
    tipbox = document.querySelector('#box .tip_box');
let tips = document.getElementById('box').getElementsByClassName('tip')
let leftbtn = document.querySelector('#box .left_btn'),
    rightbtn = document.querySelector('#box .right_btn')
//获取数据
function getdata() {
    let xhr = new XMLHttpRequest();
    xhr.open('get', './data.json', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && /200|304/.test(xhr.status)) {
            let data = JSON.parse(xhr.response)
            console.log(data)
            render(data)
            move()//数据渲染完成之后再去开启动画
            tipclick()
        }
    }
    xhr.send()
}
getdata();

function render(data) {
    data = data || [];
    let str = ''
    let tipstr = ''
    data.push(data[0])//在数组的末尾添加了第一项；是为了再最后补一张一样的图；
    data.forEach((item, index) => {
        let { img, desc } = item
        str += `<li>
    <img src="${img}" alt="">
    <p class="desc">${desc}</p>
      </li>`
        if (index !== data.length - 1) {
            if (index == 0) {
                tipstr += `<span class="tip current"></span>\n`
            } else {
                tipstr += `<span class="tip"></span>\n`
            }
        }
    })
    ul.innerHTML = str;
    ul.style.width = data.length * 590 + 'px'//更新盒子的宽度
}

let n = 0;
let timer = null
function move() {
    timer = setInterval(() => {
     change()
    }, 2000)
}


//划入盒子时，清除动画；
box.onmouseenter = function () {
    clearInterval(timer)
}
//划出盒子时，重启动画
box.onmouseleave = function () {
    move()
}

//处理tip类名的函数
function tipclass(m) {
    m = m >= tips.length ? 0 : m//当n指向了伪第一张的时候，我们要让第一个高亮
    for (let i = 0; i < tips.length; i++) {
        tips[i].className = 'tip'
    }
    tips[m].className = 'tip current'
}

//点击左右按钮
rightbtn.onclick = function () {
  change()
}
leftbtn.onclick=function(){
    n--
    //n==-1的 
    if(n<0){
        ul.style.left=-590*(tips.length)+'px'
        n=tips.length-1
    }
    tipclass(n)
    animate(ul, { left: -590 * n }, 500)
}
function change(){
    n++//n=4的时候显示的是 伪 第一张
    if (n == tips.length + 1) {
        ul.style.left = 0;//让图片直接闪到第一张；紧接着要项第二张图移动
        n = 1
    }
    tipclass(n)
    animate(ul, { left: -590 * n }, 500)
}

function tipclick(){
     for (let i=0;i<tips.length;i++){
         tips[i].onclick=function(){
             n=i;
             tipclass(n)
             animate(ul, { left: -590 * n }, 500)
         }
     }
}













