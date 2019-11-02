import {Content,addfun1} from "./content"
// import {append} from "./appendChild"
import Header from "./header"
import Slider from "./slider"
import myjpg from "./image/myjpg.jpg"
import _ from 'lodash'
import {fun} from './loadsh'
import axios from 'axios'
// import '@babel/polyfill'
 import  './active.scss'
//import './test.css'
var image = new Image()
console.log(process.env.NODE_ENV)
console.log(_.join(['a','b','c'],'@@-'))
addfun1()
fun()
axios.get('http://www.dell-lee.com/react/api/header.json').then(res=>{
    console.log(res)
})
image.src = myjpg
image.id = 'imgId'
document.getElementById('mydiv').appendChild(image)
document.getElementById('imgId').classList.add('active')
document.getElementById('btn').addEventListener('click',function () {
    import(/* webpackPrefetch:true */'./appendChild').then(({default:func})=>{
        func()
    })
})
new Content()
new Header()
new Slider()