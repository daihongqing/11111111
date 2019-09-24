let Arydata
let xhr=new XMLHttpRequest()
xhr.open('get','./data.json',false);
xhr.onreadystatechange=function(){
    if(xhr.readyState==4&&xhr.status==200){
        let data=JSON.parse(xhr.response)
       Arydata=data
    }
}
xhr.send()

let box=document.querySelector('.Bigbox')//循环绑定
function rem(ary){
    let str=''
   
    ary.forEach(item => {
        let{img, title, price, num}=item;
        str+=` <main>
        <div class="pic"><img
                src="${img}"
                alt="">
        </div>
        <div class="name">${title}</div>
        <div class="price">￥${price.toFixed(2)}</div>
        <div class="comment">
            <div class="left">选购</div>
            <div class="right">评价${num}</div>
        </div>
    </main>`
    });
    box.innerHTML=str
}
rem(Arydata)

let priceBtn=document.querySelector('.priceBtn')
let commentBtn=document.querySelector('.conmmentBtn')
let timeBtn=document.querySelector('.timeBtn')
let flag=1
priceBtn.onclick=function(){
  flag*=-1
  Arydata.sort((a,b)=>{
      return (a.price-b.price)*flag
  })
  rem(Arydata)
}
commentBtn.onclick=function(){
    flag*=-1
    Arydata.sort((a,b)=>{
        return (a.num-b.num)*flag
    })
    rem(Arydata)
  }
  timeBtn.onclick=function(){
    flag*=-1
    Arydata.sort((a,b)=>{
        return (a.time-b.time)*flag
    })
    rem(Arydata)
}
