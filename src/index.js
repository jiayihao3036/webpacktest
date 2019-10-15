import {Content,addfun1} from "./content"
import Header from "./header"
import Slider from "./slider"
import myjpg from "./image/myjpg.jpg"
// import '@babel/polyfill'
import  './active.scss'
// import './test.css'
var image = new Image()
console.log(process.env.NODE_ENV)
console.log(123)
addfun1()
image.src = myjpg
image.id = 'imgId'
document.getElementById('mydiv').appendChild(image)
document.getElementById('imgId').classList.add('active')
document.getElementById('btn').addEventListener('click',function () {
    new Promise(()=>{})
    let div = document.createElement('div')
    div.classList.add('divClass')
    div.innerHTML = '元素'
    document.body.appendChild(div)
})
new Content()
new Header()
new Slider()