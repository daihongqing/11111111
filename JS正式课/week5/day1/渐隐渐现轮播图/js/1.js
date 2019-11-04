//获取元素
let $ul = $('#box .img_box ul'),
    $tipBox = $('#box .tip_box'),
    $lis = $('#box .img_box ul li'),
    $tips = $('#box .tip_box .tip'),
    $box = $('#box'),
    $leftBtn = $('#box .left_box'),
    $rightBtn = $('#box .right_box');
      let n = 0, timer = null;
//数据
function getData() {
    $.ajax({
        url: './data.json',
        success: function (data) {
            render(data);
            init();
            tipsbtn()
        }
    })
}
getData();
//渲染数据
function render(ary) {
    let str = '';
    let tipStr = '';
    ary.forEach((item, index) => {
        str += ` <li>
        <img src="${item.img}" alt="">
        <p>${item.desc}</p>
    </li>`;
        tipStr += (index == 0 ? `<span class="tip current">\n</span>` : `<span class="tip">\n</span>`)
    })
    $ul.html(str);
    $tipBox.html(tipStr);
}

//更新数据
function init() {
    $lis = $('#box .img_box ul li');//更新 $li
    $tips = $('#box .tip_box .tip');
    $lis.eq(0).siblings().hide();
    autoMove();

}
//制作动画
function move() {
    n++;
    if (n >= $lis.length) {
        n = 0;
    }
    autoFocus();
    // $lis.eq(n).show().siblings().hide();//当前这项显示其他兄弟隐藏
    $lis.eq(n).css({ opacity: 0 }).show().animate({ opacity: 1 }, 300).siblings().animate({ opacity: 0 }, 300, function () { 
        $lis.eq(n).siblings().hide();
    });
}
//让动画反复移动
function autoMove() {
    timer = setInterval(() => {
        move();
    }, 2000)
}
//让点移动起来
function autoFocus() {
    $tips.eq(n).addClass('current').siblings().removeClass('current')
}
//鼠标移上产生效果
$box.on('mouseenter', function () {
    clearInterval(timer)
})
//鼠标离开产生效果
$box.on('mouseleave', function () {
    autoMove();
})
//右箭头点击效果
$rightBtn.on('click', function () {
    move()
})
//左箭头点击效果
$leftBtn.on('click', function () {
    n--;
    if (n < 0) {
        n = $lis.length - 1;
    }
    n--;
    move();
})
//小点点的动画效果
function tipsbtn() {
    $tips.on('click', function () {
        let index = $(this).index()
        n = index;
        n--;
        move()
    })
}
