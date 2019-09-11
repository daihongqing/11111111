var reg= /\d/;
console.log(reg.test('你好'))//查看后边的字符串有没有满足正则的字符
console.log(reg.test('你好234234'))
console.log(reg.test('你好2'))
console.log(reg.test('0你好'))
console.log(reg.test('你9好'))



var reg2=/\D/
console.log(reg2.test('你好'))//true
console.log(reg2.test('你好234234'))//true
console.log(reg2.test('你好2'))//true
console.log(reg2.test('0你好'))//true
console.log(reg2.test('你9好'))//true
console.log(reg2.test('666'))//false

var res3=/\w/  //数字 字母 下划线
console.log(reg2.test('你好'))
console.log(reg2.test('你好234234'))
console.log(reg2.test('你好2'))
console.log(reg2.test('0你好'))
console.log(reg2.test('你9好'))
console.log(reg2.test('666'))
console.log(reg2.test('你——好'))

var res3=/\W/  //数字 字母 下划线
console.log(reg3.test('你好'))
console.log(reg3.test('你好234234'))
console.log(reg3.test('你好2'))
console.log(reg3.test('0你好'))
console.log(reg3.test('你9好'))
console.log(reg3.test('666'))
console.log(reg3.test('你_好'))

var reg4=/^\d/
console.log(reg4.test('你好'))
console.log(reg4.test('你好234234'))
console.log(reg4.test('你好2'))
console.log(reg4.test('0你好'))
console.log(reg4.test('你9好'))
console.log(reg4.test('666'))
console.log(reg4.test('你_好'))

var reg5=/\d$/ //以数字结尾
console.log(reg5.test('你好'))
console.log(reg5.test('你好234234'))
console.log(reg5.test('你好2'))
console.log(reg5.test('0你好'))
console.log(reg5.test('你9好'))
console.log(reg5.test('666'))
console.log(reg5.test('你_好'))


var res6=/^\d$/ //以数字开头，并且以这个数字结尾；也就是只能包含一个数字
console.log(res6.test('你好'))
console.log(res6.test('你好234234'))
console.log(res6.test('你好2'))
console.log(res6.test('0你好'))
console.log(res6.test('你9好'))
console.log(res6.test('666'))
console.log(res6.test('你_好'))
console.log(res6.test('7'))

var reg6=/./;//点在正则中代表换行以外的所有字符  \.  才代表 点本身
console.log(reg.test('123'))


var reg7=/[ab]/
console.log(res7.text('ahello'))
console.log(res7.text('hello'))
console.log(res7.text('hello b'))
console.log(res7.text('hello ab'))


 //能匹配数字和字符的正则
 var reg8=/[0-9a-zA-Z]/

 var reg9=/18|19///只要有18 或者19都可以
 console.log(res9.text('1819'))
console.log(res9.text('18'))
console.log(res9.text('19'))
console.log(res9.text('1'))
console.log(res9.text('9'))
console.log(res9.text('819'))



let dataAry
let xhr=new XMLHttpRequest()
xhr.open('get','./data.json',false);
xhr.onreadystatechange=function(){
    if(xhr.readystate==4&&xhr.status==200){
      let data=JSON.parse(xhr.response)
      console.log(data)
      dataAry=data
    }
}