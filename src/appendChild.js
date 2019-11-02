const append=()=>{
    new Promise(()=>{})
    let div = document.createElement('div')
    div.classList.add('divClass')
    div.innerHTML = '元素'
    document.body.appendChild(div)
}
export default append
