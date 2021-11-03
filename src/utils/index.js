export default {
  insertBody(elx, parent){
    let bodyx = parent ? parent : document.body
    bodyx.insertBefore(elx, bodyx.firstChild)
  },
  removeBody(element, parent) {
    let bodyx = parent ? parent : document.body
    bodyx.removeChild(element);
  },
  changePosition(elx,content,conditional){
    let topx = 0
    let leftx = 0
    let widthx = 0
    let scrollTopx = window.pageYOffset || document.documentElement.scrollTop;
    if(elx.getBoundingClientRect().top + 300 >= window.innerHeight) {
      setTimeout( ()=> {
        if(conditional){
          topx = (elx.getBoundingClientRect().top - content.clientHeight) + scrollTopx
        } else {
          topx = (elx.getBoundingClientRect().top - content.clientHeight + elx.clientHeight) + scrollTopx
        }
      }, 1);

    } else {
      topx = conditional?(elx.getBoundingClientRect().top + elx.clientHeight) + scrollTopx + 5:elx.getBoundingClientRect().top + scrollTopx
    }

    leftx = elx.getBoundingClientRect().left
    widthx = elx.offsetWidth

    let cords = {
      left: `${leftx}px`,
      top: `${topx}px`,
      width: `${widthx}px`
    }

    return cords
  },
  html2text(html) {
    const tag = document.createElement('div')
    tag.innerHTML = html
    return tag.innerText
  },
  isEmpty(value) {
    value = typeof value === 'string' ? value.trim() : value
    return (
      value === null || // The value is null ?
      value === '' || // The value is an empty string ?
      value === undefined || // The value is undefined ?
      (
        Array.isArray(value) && // Or is the value an array and...
        value.length === 0 // Its length is zero, contains no elements.
      )
    )
  }
}
