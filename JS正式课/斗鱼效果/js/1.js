let box = document.getElementById('box')
lis = box.getElementsByTagName('li')
lol = document.querySelector('.lol'),
    juedi = document.querySelector('.juedi'),
    cf = document.querySelector('.cf'),
    wangzhe = document.querySelector('.wangzhe'),
    sky = document.querySelector('.sky')

function offset(ele) {
    let l = ele.offsetLeft,
        t = ele.offsetTop,
        temp = ele.offsetParent
    while (temp) {
        l = temp.offsetLeft + ele.clientWidth;
        t = temp.offsetTop + ele.clientTop;
        temp = temp.offsetParent
    }
    return { l, t }
}
let HT=document.documentElement.scrollTop
lis[1].onclick = function () {



    
    let o = offset(lol)
    
        HT=o.t+lol.clientHeight
    
}

lis[0].onclick = function () {
   timer= setInterval(function (){
        if (HT<=0) {
            clearInterval(timer)
        }
        HT -=15
    }, 20);
   
}
// window.onscroll=function (){
//     clearInterval(timer)
// }
