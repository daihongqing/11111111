let headerCarousel = document.getElementsByClassName('NIE-topBar-right')[0],
    headerCarousela = headerCarousel.getElementsByTagName('a')[0]
let ary = ['限时领取免费课程', '游戏充值9.8折']
let n = 0
window.onload = function () {
    linetimer()
}
function linetimer() {

    let m = 0

    setInterval(() => {
        n++
        if (n > 1) {
            n = 0
        }
        headerCarousela.innerText = ary[n]
        headerCarousela.className = 'move'

        headerCarousel.appendChild(headerCarousela);
        timer = setTimeout(() => {
            headerCarousela.className = 'fadeUp2'
        }, 2500);


    }, 3000);
}
//顶部隐藏栏
let box = document.querySelector('.box'),
    mainbox = document.getElementById('NIE-topBar-menu-btn'),
    box1 = document.querySelector('.box1'),
    mainbox1 = document.getElementsByClassName('NIE-topBar-recommend')[0]

mainbox.onmouseenter = box.onmouseenter = function () {
    box.classList.add('bigbox')
}
mainbox.onmouseleave = box.onmouseleave = function () {
    box.classList.remove('bigbox')
}
mainbox1.onmouseenter = box1.onmouseenter = function () {
    box1.classList.add('housebox1')
}
box1.onmouseleave = mainbox1.onmouseleave = function () {
    box1.classList.remove('housebox1')
}

//轮播图
function banner() {
    let $box = $('.box4')
    $imgbox = $('.img_box'),
        $imgli = $('.box4 .img_box li')
    $imgli2 = $('.box4 .img_box2 li')
    $desc = $('.banner-desc'),
        $descli = $('.banner-desc li')
    $title = $('.title')
    $span = $title.find('span')
    $desc2 = $('.banner-desc2 li')
    let timer = null, g = 0, m = 0

    function move() {
        g++
        if (g > $imgli.length) {
            g = 0
        }
        $imgli.eq(g).css({ opacity: 0 }).show().animate({ opacity: 1 }, 300).siblings().animate({ opacity: 0 }, 300, function () {
            $imgli.eq(g).siblings().hide();
        });
        bg()
    }
    function move2() {
        m++
        if (m > $imgli2.length) {
            m = 0
        }
        $imgli2.eq(m).css({ opacity: 0 }).show().animate({ opacity: 1 }, 300).siblings().animate({ opacity: 0 }, 300, function () {
            $imgli2.eq(m).siblings().hide();
        });
        bg2()
    }
    function bg2() {
        $descli.eq(m).addClass('bg').siblings().removeClass('bg')
    }
    function automove() {
        timer2 = setInterval(() => {
            move()
        }, 2000);
    }
    automove()

    function bg() {
        $descli.eq(g).addClass('bg').siblings().removeClass('bg')
    }

    $descli.on('mouseenter', function (e) {
        var tar = e.target || e.srcElement;
        var $tar = $(tar)
        clearInterval(timer2)
        bg()
        if (tar.nodeName.toLowerCase() == 'li') {
            g = $tar.index()
            g--
            move()
        }
    })
    $desc2.on('mouseenter', function (e) {
        var tar = e.target || e.srcElement;
        var $tar = $(tar)
        $desc2.eq(m).addClass('bg').siblings().removeClass('bg')
        clearInterval(timer2)
        if (tar.nodeName.toLowerCase() == 'li') {
            m = $tar.index()
            m--
            move2()
        }
    })
    $descli.on('mouseleave', function (e) {
        automove()
        // bg()
    })
    $span.on('click', function () {
        $(this).addClass('blue').siblings().removeClass('blue')
        var index = $(this).index();
        if (index == 0) {
            $box.eq(1).addClass('right-box').siblings().removeClass('right-box')
        } else {
            $box.eq(0).addClass('right-box').siblings().removeClass('right-box')
        }
    })
}
banner()
//选项卡
function Tab(idSelector) {
    this.box = document.querySelector(idSelector); // 获取到最外层盒子
    this.tabs = this.box.getElementsByClassName('tab');
    this.bodys = this.box.getElementsByClassName('body');
    this.a = this.box.querySelectorAll('a');
    this.liear = this.box.querySelector('.liear')
    this.mapBind();
}
Tab.prototype.mapBind = function () {
    for (let i = 0; i < this.tabs.length; i++) {
        this.tabs[i].onmouseenter = () => {

            this.clearClass();
            this.tabs[i].className = 'tab current';
            this.bodys[i].className = 'body current';
            switch (i) {
                case 0:
                    this.liear.style.left = 0 + 'px'
                    break;
                case 1:
                    this.liear.style.left = 0 + this.tabs[1].clientWidth + 'px'
                    break;
                case 2:
                    this.liear.style.left = 0 + this.tabs[2].clientWidth * 2 + 'px'
                    break;
                case 3:
                    this.liear.style.left = 0 + this.tabs[3].clientWidth * 3 + 'px'
                    break;
                case 4:
                    this.liear.style.left = 0 + this.tabs[4].clientWidth * 4 + 'px'
                    break;
                case 5:
                    this.liear.style.left = 0 + this.tabs[5].clientWidth * 5 + 'px'
            }
        }
    }
}
Tab.prototype.clearClass = function () {
    for (var i = 0; i < this.tabs.length; i++) {
        this.tabs[i].className = 'tab';
        this.bodys[i].className = 'body';
    }
}

var tab = new Tab('#news-box');

//第三层
var tab1 = new Tab('.part-02-news01');

//阴影层
function black(){
    let $wstImg = $('.wst-img');
    $mask = $wstImg.find('.mask')
    $wstImg.on('mouseenter', function (e) {
        $mask.css({ display: 'block' })
        move(e)
    })
    $wstImg.on('mouseleave', function (e) {
        move(e)
    })

    function move(e) {
        var e = e || window.event
        var target =$wstImg[0];
        //获取鼠标x,y坐标
        var x = e.pageX
        var y = e.pageY
        console.log(x,y)
        //获取图片距离浏览器位置
        var t = $wstImg.offset().top
        var b = t + target.offsetHeight
        var l = $wstImg.offset().left
        var r = l + target.offsetWidth
        console.log(t,b,l,r)
        //获取鼠标与图片距离浏览器位置的差值（注意有负值，需要绝对值 Math.abs）
        var chaYT = Math.abs(y - t)
        var chaYB = Math.abs(y - b)
        var chaXL = Math.abs(x - l)
        var chaXR = Math.abs(x - r)
        //取得最小值
        var min = Math.min(chaYT, chaYB, chaXL, chaXR)
        let boxT = $wstImg[0].clientHeight
        let boxW = $wstImg[0].clientWidth
        switch (min) {
            case chaYT: //上
            console.log('上')
                if (e.type == 'mouseenter') {
                    $mask.css({ top: -boxT + 'px', left: '0' }).animate({ top: 0, left: 0 }, 300)
                } if (e.type == 'mouseleave') {
                    $mask.animate({ top: -boxT + 'px', left: 0 }, 200)
                }
                break;

            case chaYB://下
            console.log('下')
                if (e.type == 'mouseenter') {
                    $mask.css({ top: boxT + 'px', left: '0' }).animate({ top: 0, left: 0 }, 300)
                } if (e.type == 'mouseleave') {
                    $mask.animate({ top: boxT + 'px', left: 0 }, 300)
                }
                break;
            case chaXL://左
            console.log('左')
                if (e.type == 'mouseenter') {
                    $mask.css({ top: 0, left: -boxW + 'px' }).animate({ top: 0, left: 0 }, 300)
                } if (e.type == 'mouseleave') {
                    $mask.animate({ top: 0, left: -boxW + 'px' }, 300)
                    console.log('左');
                    
                }
                break;

            case chaXR://右
            console.log('右');
                if (e.type == 'mouseenter') {
                    $mask.css({ top: 0, left: boxW + 'px' }).animate({ top: 0, left: 0 }, 300)
                } if (e.type == 'mouseleave') {
                    $mask.animate({ top: 0, left: boxW + 'px' }, 300)
                    console.log('右');
                }
                break;
        }
    }
}
black()







