let Arydata
let xhr=new XMLHttpRequest()
xhr.open('get','./data.json',false)
xhr.onreadystatechange=function(){
    if(xhr.readyState==4&&xhr.status==200){
        Arydata=JSON.parse(xhr.response)
    }
}
xhr.send()
let bigBox=document.querySelector('main')
function rem(ary){
    let str=''
    ary.forEach(item => {
        let {img,title,price,num}=item;
        str+=`
        <div class="bigbox">
            <div class="pic">
                <img src="${img}" alt="">
            </div>
            <div class="name">${title}</div>
            <div class="prise">￥${price.toFixed(2)}</div>
            <div class="comment">
                <div class="left">选购</div>
                <div class="right">评价${num}</div>
            </div>
        </div>
    `
    });
    bigBox.innerHTML=str
}
rem(Arydata)
let timeBtn=document.querySelector('.timeBtn'),
    priceBtn=document.querySelector('.priseBtn'),
    commentBtn=document.querySelector('.commentBtn')
let flag=1
timeBtn.onclick=function(){
    flag*=-1
  Arydata.sort((a,b)=>{
      return (a.time-b.time)*flag
  })
  rem(Arydata)
}
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