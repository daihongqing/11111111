let $box = $('#box'),
    //  ul= $('#box .img_box ul')
    //  ul=$box.children('.img_box')
    $ul = $box.find('ul')
    $tipBox = $box.find('.tip_box'),
    $tips = $tipBox.('.tip'),
    $leftBtn = $box.find('.left_btn'),
    $rightBtn = $box.find('.right_btn')
let n = 0, timer = null

//获取数据
function getData() {
    $.ajax({
        type: 'get',
        url: './data.json',
        success: function (data) {
            //执行成功会执行的函数
            console.log(data)
            render(data)
            tipClick()
        },
        error: function () {
            //请求失败的时候会执行该函数
            console.log('失败')
        }
    })
}
getData()

//渲染数据
function render(data) {
    let str = '';
    let tipstr = ''
    data.push(data[0])
    data.forEach((item, index) => {
        str += `<li>
     <img src="${item.img}" alt="">
     <p class="desc">${item.desc}</p>
      </li>`
        if (index == 0) {
            tipstr += `<span class="tip current"></span>\n\n\n`
        } else if (index < data.length - 1) {
            tipstr += `<span class="tip"></span>\n\n\n`
        }
    })
    $ul.html(str)
    $ul.width(590 * data.length)
    $tipBox.html(tipstr)
    $tips = $tipBox.children('.tip')//更新$tips
}

//动效运行
function move() {
    n++;
    if (n > $tips.length) {
        $ul.css('left', 0)//闪到第一张
        n = 1
    }
    $ul.animate({ left: -590 * n }, 300)
    autoFocus(n)

}

//动效的定时
function automove() {
    timer = setInterval(() => {
        move()
    }, 2000);
}
automove()

//小点点移动事件
function autoFocus(m) {
    if (m >= $tips.length) {
        m = 0// m==$tips.length  显示的是伪第一张
    }
    //m 就是要有点的那个索引
    $tips.eq(m).addClass('current').siblings().removeClass('current')
}

//鼠标移上事件
$box.on('mouseenter', function () {
    clearInterval(timer)
})
//鼠标离开事件
$box.on('mouseleave', function () {
    automove()
})

//左按钮点击事件
$leftBtn.on('click', function () {
    n--
    if (n < 0) {
        $ul.css({ left: -$tips.length * 590 });//闪到最后一张
        n = $tips.length--
    }
    $ul.animate({ left: -n * 590 }, 200);
    autoFocus(n)
})
//右按钮点击事件
$rightBtn.on('click', function () {
    move()
})

//小点点的点击事件
function tipClick() {
    $tips.on('click', function () {
        let m = $(this).index();
        n = m
        $ul.animate({ left: -590 * m }, 200);
        autoFocus(m)
    })
}






















try {
    console.log(555);
} catch (e) {
    console.log(e);
}
console.log(666);
