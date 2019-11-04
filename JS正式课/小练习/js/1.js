// let top_box = document.getElementsByClassName('.top_box')
// function getone(){
//     let secondOlis = document.querySelectorAll('.second_box li')
//     let li = document.createElement('li')
//     let btn = document.createElement('button')
//     let n=true
//     for (let i = 0; i < secondOlis.length; i++) {
//         secondOlis[i].onclick = function () {
//             li.style.display = 'block'
//             li.innerHTML = secondOlis[i].innerHTML
//             document.getElementById('top').appendChild(li)
//             btn.innerHTML = 'X'
//             btn.className = 'btn'
//             li.appendChild(btn)
//         }
//         btn.onclick = function () {
//             li.style.display = 'none'
//         }
//     }
// }
// getone()

// function gettwo(){
//     let fourOlis=document.querySelectorAll('.four_box li')
//     let li = document.createElement('li')
//     let btn = document.createElement('button')
//     for (let i = 0; i < fourOlis.length; i++) {
//         fourOlis[i].onclick = function () {
//             li.style.display = 'block'
//             li.innerHTML = fourOlis[i].innerHTML
//             document.getElementById('top').appendChild(li)
//             btn.innerHTML = 'X'
//             btn.className = 'btn'
//             li.appendChild(btn)
//         }
//         btn.onclick = function () {
//             li.style.display = 'none'
//         }
//     }
// }
// gettwo()
// function three(){
//     let thiredOlis=document.querySelectorAll('.thired_box li')
//     let li = document.createElement('li')
//     let btn = document.createElement('button')
//     for (let i = 0; i < thiredOlis.length; i++) {
//         thiredOlis[i].onclick = function () {
//             li.style.display = 'block'
//             li.innerHTML = thiredOlis[i].innerHTML
//             document.getElementById('top').appendChild(li)
//             btn.innerHTML = 'X'
//             btn.className = 'btn'
//             li.appendChild(btn)
//         }
//         btn.onclick = function () {
//             li.style.display = 'none'
//         }
//     }
// }
// three()
// function fife(){
//     let fifeOlis=document.querySelectorAll('.fife_box li')
//     let li = document.createElement('li')
//     let btn = document.createElement('button')
//     for (let i = 0; i < fifeOlis.length; i++) {
//         fifeOlis[i].onclick = function () {
//             li.style.display = 'block'
//             li.innerHTML = fifeOlis[i].innerHTML
//             document.getElementById('top').appendChild(li)
//             btn.innerHTML = 'X'
//             btn.className = 'btn'
//             li.appendChild(btn)
//         }
//         btn.onclick = function () {
//             li.style.display = 'none'
//         }
//     }
// }
// fife()
let top_box = document.getElementById('top')
let topOlis = top_box.getElementsByTagName('li')
function one(){
    let secondOlis = document.querySelectorAll('.second_box li')
    let btn = document.createElement('button')
    for (let i = 0; i < secondOlis.length; i++) {
        secondOlis[i].onclick = function () {
            topOlis[0].style.display = 'block'
            topOlis[0].innerHTML = secondOlis[i].innerHTML
            document.getElementById('top_li').appendChild(btn)
            btn.innerHTML = 'X';
        }
        btn.onclick = function () {
            topOlis[0].style.display = 'none'
        }
    }    
}
one()

function two(){
    let thiredOlis = document.querySelectorAll('.thired_box li')
    let btn = document.createElement('button')
    for (let i = 0; i < thiredOlis.length; i++) {
        thiredOlis[i].onclick = function () {
            topOlis[1].style.display = 'block'
            topOlis[1].innerHTML = thiredOlis[i].innerHTML
            document.getElementById('top_li2').appendChild(btn)
            btn.innerHTML = 'X';
        }
        btn.onclick = function () {
            topOlis[1].style.display = 'none'
        }
    }    
}
two()

function three(){
    let fourOlis = document.querySelectorAll('.four_box li')
    let btn = document.createElement('button')
    for (let i = 0; i < fourOlis.length; i++) {
        fourOlis[i].onclick = function () {
            topOlis[2].style.display = 'block'
            topOlis[2].innerHTML = fourOlis[i].innerHTML
            document.getElementById('top_li3').appendChild(btn)
            btn.innerHTML = 'X';
        }
        btn.onclick = function () {
            topOlis[2].style.display = 'none'
        }
    }    
}
three()

function four(){
    let fifeOlis = document.querySelectorAll('.fife_box li')
    let btn = document.createElement('button')
    for (let i = 0; i < fifeOlis.length; i++) {
        fifeOlis[i].onclick = function () {
            topOlis[3].style.display = 'block'
            topOlis[3].innerHTML = fifeOlis[i].innerHTML
            document.getElementById('top_li4').appendChild(btn)
            btn.innerHTML = 'X';
        }
        btn.onclick = function () {
            topOlis[3].style.display = 'none'
        }
    }    
}
four()
