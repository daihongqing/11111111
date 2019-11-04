class banner {
    constructor(idSelector) {

        this.box = document.querySelector(idSelector)
        this.ul=this.box.querySelector('.img_box ul')
        this.tipbox = this.box.querySelector('.tip_box')
        this.tips = this.box.getElementsByClassName('tip')
        this.leftBtn = this.box.querySelector('.left_btn')
        this.rightBtn = this.box.querySelector('.right_btn')
        this.n = 0;
        this.timer = null;
        this.getdata()
    }
    getdata() {
        let xhr = new XMLHttpRequest();
        xhr.open('get', './data.json', true);
        xhr.onreadystatechange = ()=>{
            if (xhr.readyState == 4 && /200|304/.test(xhr.status)) {
                let data = JSON.parse(xhr.response)
                console.log(data)
               this. render(data)
               this. move()//数据渲染完成之后再去开启动画
               this.tipclick();
               this.bindEvent()
            }
        }
        xhr.send()
    }

    render(data) {
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
        this.tipbox.innerHTML=tipstr
        this.ul.innerHTML = str;
        this.ul.style.width = data.length * 590 + 'px'//更新盒子的宽度
    }

    move() {
        this.timer = setInterval(() => {
            this.change()
        }, 2000)
    }

    change() {
        this.n++//n=4的时候显示的是 伪 第一张
        if (this.n == this.tips.length + 1) {
            this.ul.style.transition = 'left 0s ease-in';
            this.ul.style.left = 0;//让图片直接闪到第一张；紧接着要项第二张图移动
            this.n = 1
        }
        this.tipclass(this.n)
        // animate(ul, { left: -590 * n }, 500)
        setTimeout(() => {
            //一步情况下 异步代码会被忽略掉
            this.ul.style.transition = 'left 0.5s ease-in';
            this. ul.style.left = -590 * this.n + 'px'
        }, 10)
    }
    tipclass(m) {
        m = m >= this.tips.length ? 0 : m//当n指向了伪第一张的时候，我们要让第一个高亮
        for (let i = 0; i < this.tips.length; i++) {
            this.tips[i].className = 'tip'
        }
        this.tips[m].className = 'tip current'
    }
    bindEvent() {
        //划入盒子时，清除动画；
        this.box.onmouseenter =  () =>{
            clearInterval(this.timer)
        }
        //划出盒子时，重启动画
        this.box.onmouseleave =  ()=> {
            this.move()
        }
        this.rightBtn.onclick =  this.debounce(() =>{
            this.change()
        })
        this.leftBtn.onclick = ()=> {
            this.n--
            //n==-1的 
            if (this.n < 0) {
                this.ul.style.transition = 'none';
                this. ul.style.left = -590 * (this.tips.length) + 'px'
                this.n = this.tips.length - 1
            }
            this.tipclass(this.n)
            setTimeout(() => {
                //一步情况下 异步代码会被忽略掉
                this.ul.style.transition = 'left 0.5s ease-in';
                this.ul.style.left = -590 * this.n + 'px'
            }, 10)
            // animate(ul, { left: -590 * n }, 500)
        }
    }
 
    tipclick(){
        for (let i=0;i<this.tips.length;i++){
            this.tips[i].onclick=()=>{
                n=i;
                this. tipclass(n)
               //  animate(ul, { left: -590 * n }, 500)
               this.ul.style.transition='left 0.5s ease-in';
               this.ul.style.left=-590*this.n+'px'
            }
        }
   }
    debounce(fn,wait=200){
        var timer=null;
        return function (){
            if(timer==null){
                fn.apply(this,arguments)
                timer=0
                return
            }
            clearTimeout(timer)
            timer=setTimeout(()=>{
                fn.apply(this,arguments)
                timer=null
            },wait)
        }
     }
}

new banner('#box')
new banner('#box2')

