let flag=false

function getdata(){
     flag=true
    let xhr=new XMLHttpRequest()
    xhr.open('get','./data.json',true)
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4&&/200|304/.test(xhr.status)){
            let data=JSON.parse(xhr.response)
            console.log(data)
            rend(data)
           moreimg()
            flag=false
        }
    }
    xhr.send()
}
getdata()
let box=document.getElementsByClassName('body')[0];
let olis=document.querySelectorAll('.body li')
let imgs=box.getElementsByTagName('img')
function rend(data){
    let str=''
    data.forEach((item,index)=>{
        let {pic,author,desc,height}=item;
        str=`
        <img recimg="${pic}" src="./img/1.jpg" alt="" style='height:${height}px'>
        <p class="desc">${desc}</p>
        <p class="sc">${author}</p>
        `
        let temp=getMinli()
     
        let div=document.createElement('div')
           div.className='img_box'
           div.innerHTML=str
           temp.appendChild(div)
    })
}
function getMinli(){
  let ary= [...olis].sort((a,b)=>{
     return  a.clientHeight-b.clientHeight
   })
   return ary[0]
}
//滚动加载更多
window.onscroll=function(){
      more()
      moreimg()
}

function more(){
    let li=getMinli()
    if(utils.offset(li).t+li.clientHeight<=document.documentElement.scrollTop+utils.winH().h){
        if(!flag){
            getdata()
        }
    }
}
//图片懒加载
function getimg(ele){
    if(ele.myload)return
    if(utils.offset(ele).t+ele.clientHeight/2<=document.documentElement.scrollTop+utils.winH().h){
    var recimg=ele.getAttribute('recimg')
    let temp=new Image()
    temp.src=recimg;
    temp.onload=function(){
        ele.src=recimg;
        ele.myload=true
    }
    temp=null
    }
}
function moreimg(){
    [...imgs].forEach(item=>{
        getimg(item)
    })
}