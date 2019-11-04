ajax({
    method: 'post',//默认值是get
    url: './data.json',//必须
    data: {
        //传给后台的数据
    },
    async: true,//同步异步  不是必须 默认异步
    cache: false,//看看走不走缓存，默认是走缓存
    header: {
        //设置请求头  不是必须的
    },
    success() { },
    error() { }

})


function ajax(options) {
    let { method = 'get',//默认get请求
        url,
        data = {},
        async = true,//默认异步
        cache = true,//默认走缓存
        header = {},
        success,
        error
    } = options
    method = method.toLowerCase()

    //处理data
    let searchStr = '';
    for (let k in data) {
        searchStr += `${k}=${data[k]}&`
    }
    searchStr = searchStr.replace(/&$/, '');
    if(method == 'get'){
        //判断之前的url上 有没有问号
        if (url.indexOf('?')==-1) {
            url+='?'+searchStr
        }else{
            //./data.json?qqq=123&
            url+='&'+searchStr
        }
        if (cache) {
            //不走缓存
          url +=`&_=${Date.now()}`
        }
    }

    let xhr = new XMLHttpRequest();
    xhr.open(method, url, async);
    xhr.onreadystatechange = function () {
     if (xhr.onreadystatechange ==4) {
         if (/200|304/.text(xhr.status)) {
             let data
             try {
                data=JSON.parse(xhr.response)
             } catch (error) {
                 data=xhr.response
             }
             success && success()
         }else{
              if (/[45]\d{2}/.test(xhr.status)) {
                  error&& error(xhr)
              }
         }
     }
    }
    Object.assign({
        'content-type':'application/x-www-form-urlencoded'
    },header)
    for (let k in header){
        xhr.setRequestHeader(k,escape(header[k]))//为了处理中文
    }
    xhr.send(searchStr)
}