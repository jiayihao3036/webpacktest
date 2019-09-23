import Content from "./content"
import Header from "./header"
import Slider from "./slider"
import myjpg from "./image/myjpg.jpg"
// import myjson from "./version.json"
import  './active.scss'
//  console.log(myjpg)
// console.log(myjson)
var image = new Image()
image.src = myjpg
image.id = 'imgId'
document.getElementById('mydiv').appendChild(image)
document.getElementById('imgId').classList.add('active')
new Content()
new Header()
new Slider()