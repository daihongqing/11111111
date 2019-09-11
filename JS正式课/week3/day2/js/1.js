var reg=/^[0-9a-z]$/
console.log(reg.test('1a'))//false
console.log(reg.test('a'))//ture
console.log(reg.test('1'))//ture
console.log(reg.test('a1a'))//false

var reg6=/^[0-9a-z]$+/ 
console.log(reg.test('1a'))//
console.log(reg.test('a'))//
console.log(reg.test('1'))//
console.log(reg.test('a1a'))//false





var reg2=/^\d$/;
console.log(res2.test('11'));
 
var reg3=/^18|19$/  // /^(8|1)9$/
var reg3_1=/[11-99]/   //1 或 1到9  或9
var reg3_2=/[a-Z]///error:  Range out 按照字母的阿斯克码值决定的先后顺序

console.log('========================')


var reg4=(/\d/)//有数字
console.log(reg4.test(''))//false
console.log(reg4.test('1'))
console.log(reg4.test('123'))
console.log(reg4.test('q'))//false
console.log(reg4.test('q1'))//
var reg4_1=(/\d?/)//有0-1个数字
console.log(reg4_1.test(''))//ture
console.log(reg4_1.test('1'))
console.log(reg4_1.test('123'))
console.log(reg4_1.test('q'))//ture
console.log(reg4_1.test('q1'))//
var reg4_2=(/\d*/) //有0-多个数字
console.log(reg4_2.test(''))//ture
console.log(reg4_2.test('1'))
console.log(reg4_2.test('123'))
console.log(reg4_2.test('q'))//ture
console.log(reg4_2.test('q1'))//
var reg4_2=(/\d+/) //有1到多个数字
console.log(reg4_2.test(''))//false
console.log(reg4_2.test('1'))
console.log(reg4_2.test('123'))
console.log(reg4_2.test('q'))//false
console.log(reg4_2.test('q1'))//

var reg5=/^\d$/
console.log(reg5.text('11'))//false
var reg5_1=/^\d+$/  //以数字开头 以数字结尾  中间是1到多个数字
console.log(reg5_1.text('11'))//ture
console.log(reg5_1.text('12'))
console.log(reg5_1.text('113'))
console.log(reg5_1.text('11qw3'))//false
var reg5_2=/^\6+$/
console.log(reg5_2.text('616'))//false
console.log(reg5_2.text('6666'))
console.log(reg5_2.text('66'))

var reg5_3=/^\d?$/  //以数字开头以数字结尾，数字0到1个数字
console.log(reg5_1.text('11'))//false
console.log(reg5_1.text('5'))//ture
console.log(reg5_1.text(''))//ture
console.log(reg5_1.text('12'))//false
console.log(reg5_1.text('113'))//false
console.log(reg5_1.text('11qw3'))//false
var reg6=/^[0-9a-z]$+/



var reg7=/\d{3}/ //有三个数字  连续的三个数字
console.log(reg5_1.text('1234'))//true
console.log(reg5_1.text('珠峰2019'))//ture
console.log(reg5_1.text('珠峰2019第9期'))//ture
console.log(reg5_1.text('12'))//false
console.log(reg5_1.text('你6你6你6'))//false
console.log(reg5_1.text('123'))//true

var reg7=/^\d{3}$/
console.log(reg5_1.text('1234'))//false
console.log(reg5_1.text('珠峰2019'))//false
console.log(reg5_1.text('珠峰2019第9期'))//false
console.log(reg5_1.text('12'))//false
console.log(reg5_1.text('你6你6你6'))//false
console.log(reg5_1.text('123'))//true

var reg7=/\d{3,6}///有3-6个连续数字
console.log(reg5_1.text('1234'))//ture
console.log(reg5_1.text('珠峰2019'))//ture
console.log(reg5_1.text('珠峰2019第9期'))//ture
console.log(reg5_1.text('12'))//false
console.log(reg5_1.text('你6你6你6'))//false
console.log(reg5_1.text('123'))//true

var reg8=/^\d{3,6}$/   //以数字开头  以数字结尾  中间3-6个数字
//'666'   true
//'112345'   true
//'a123455s   false


var reg=/[a-z]/i
console.log(reg.test('123ABC123'))

var reg=/^a/m
console.log(reg.test('hello \na'))