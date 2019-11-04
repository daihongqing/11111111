let banner = (function () {
    let idSelector = ''
    let $box = null;
    $ul = null,
        $lis = null,
        $tipbox = null,
        $tips = null;
    $leftBtn = null,
        $rightBtn = null;
    var n = 0; timer = null
    function throttle() {
        let flag = true;
        return function () {
            if (!flag) {
                return
            }
            flag = false;
            setTimeout(() => {
                Fn(this, arguments)
            })
        }
    }
    function initEle() {
        $box = $(idSelector);
        $ul = $box.find('.img_box ul'),
            $lis = $box.find('.img_box ul li'),
            $tipbox = $box.find('.tip_box'),
            $tips = $tipbox.children('.tip')
        $leftBtn = $box.find('.left_box'),
            $rightBtn = $box.find('.right_box');

        $lis.eq(0).show().siblings().hide()
    }
    function getData() {
        $.ajax({
            url: './data.json',
            success: function (data) {
                render(data)
                initEle()
                autoMove()
                eventBind()
            },
            error: function () {
                alert('失败')
            }
        })
    }
    function render(data) {
        let str = '', tipStr = ''
        data.forEach((item, index) => {
            str += `<li>
            <img src="${item.img}" alt="">
            <p>${item.desc}</p>
        </li>`;
            tipStr += (index == 0 ? `<span class="tip current"></span>` : `<span class="tip"></span>`)
        })
        $ul.html(str)
        $tipbox.html(tipStr)
    }
    function move() {
        n++;
        if (n > $lis.length - 1) {
            n = 0
        }
        $lis.eq(n).show().css({ opacity: 0 }).animate({ opacity: 1 }, 300).siblings().animate({ opacity: 0 }, 300, function () {
            $lis.eq(n).siblings().hide()
        })
    }
    function autoMove() {
        timer = setInterval(() => {
            move()
        }, 2000)
    }
    function autoFocus() {
        $tips.eq(n).addClass('current').siblings().removeClass('current')
    }
    function eventBind() {
        $box.on('mouseenter', function () {
            clearInterval(timer)
        })
        $box.on('mouseleave', function () {
            autoMove()
        })
        $leftBtn.on('click', function () {
            n--;
            if (n > 0) {
                n = $lis.length - 1
            }
            n--;
            move()
        })
        $rightBtn.on('click', function () {
            move()
        })
        $tips.on('click', function () {
            let index = $(this).index();
            n = index;
            n--;
            move()
        })
    }
    return {
        init(id) {
            idSelector = id;
            getData()
            initEle(idSelector)
        }
    }
})()
banner.init('#box')

$.extend({
    qqq(){
        console.log(666);
    }
})
$.fn.entend