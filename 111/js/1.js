let btn1=document.getElementById('btn1')
let sprice=document.querySelector('.suripe')
let bt=document.querySelector('.BTN')
window.onload=function(){
    var v1=document.getElementById('div1');
    var v2=document.getElementById('div2');
    var v3=document.getElementById('div3');
    
    v3.innerHTML= v2.innerHTML;//将v2容器里面的图片插入到v3容器里面  使其空白区域被遮住。
    function fun(){
      if(v1.scrollLeft<=0){
          v1.scrollLeft=800;
      }else{
          v1.scrollLeft--;
      }
  }

  var fun1=setInterval(fun,20); 
  

   btn1.onclick = function() {//点击事件
          clearInterval(fun1)
      };
  bt.onclick = function() {
         clearInterval(fun1)
          fun1 = setInterval(fun, 20)
      }; 
}