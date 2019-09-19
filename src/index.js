import Content from "./content"
import Header from "./header"
import Slider from "./slider"
import myjpg from "./myjpg.jpg"
// import myjson from "./version.json"
import  './active.scss'
console.log(myjpg)
// console.log(myjson)
document.getElementById('imgId').classList.add('active')
new Content()
new Header()
new Slider()