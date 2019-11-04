$(function () {
    //当dom结构加载完成之后执行该函数
    $('.submit').on('click', function (e) {
        let account = $('input[type=text]').val();
        let password = $('input[type=password]').val()
        console.log(account, password);
        if (!account || !password) {
            alert('用户名或密码不能为空')
        }
        password=md5(password)//加密密码
        axios.post('/user/login',{
            account,password
        }).then((data)=>{
            console.log(data);
            
        },(err)=>{
            console.log(err);
            
        })
    })
})
