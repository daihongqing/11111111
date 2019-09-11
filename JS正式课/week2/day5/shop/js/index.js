//把数据从后台获取到  然后渲染到页面上
(function () {
    let dataAry
    let xhr = new XMLHttpRequest();
    xhr.open('get', './data.json', false);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            //代表请求成功
            dataAry = JSON.parse(xhr.response)//把从后台获取到的json字符串转化成json对象
        }
    }

    xhr.send();




    
    let mianBox = document.querySelector('main')
    //dataary就是仓后台获取到的数据
    function renderHtml(ary) {
        let str = ''
        ary.forEach(item => {
            //item时数组中的每一项
            let { img, title, num, price } = item
            str += `<div class="good_box">
        <div class="img_box">
            <img src="${img}"
                alt="">
        </div>
        <div class="desc">${title}</div>
        <div class="price">￥${price.toFixed(2)}</div>
        <div class="bot_box">
            <div class="left_box">选购</div>
            <div class="right_box">评价数${num}</div>
        </div>
    </div>`
           
        });
        //str就是拼接好的字符串
        mianBox.innerHTML = str;
    }
    renderHtml(dataAry)

    debugger
    let timeBtn = document.querySelector('.timeBtn'),
        priceBtn = document.querySelector('.priceBtn'),
        commentBtn = document.querySelector('.commentBtn');
    //操作数据 先把数据按需排序  然后重新渲染数据

    let flag = 1
    timeBtn.onclick = function () {
        //把数据按照上架时间进行排序
        flag *= -1
        dataAry.sort((a, b) => {
            return (a.time - b.time) * flag
        })
        renderHtml(dataAry)
    }
    priceBtn.onclick = function () {
        //把数据按照上架时间进行排序
        flag *= -1
        dataAry.sort((a, b) => {
            return (a.price - b.price) * flag
        })
        renderHtml(dataAry)
    }
    commentBtn.onclick = function () {
        //把数据按照上架时间进行排序
        flag *= -1
        dataAry.sort((a, b) => {
            return (a.num - b.num) * flag
        })
        renderHtml(dataAry)
    }
})()

