const btn2 = document.querySelector('.btn2');

let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight);


let scrollWidth = Math.max(
    document.body.scrollWidth, document.documentElement.scrollWidth,
    document.body.offsetWidth, document.documentElement.offsetWidth,
    document.body.clientWidth, document.documentElement.clientWidth);

btn2.addEventListener('click', ()=>{
    alert(`Ширина с прокруткой: ${scrollWidth}, высота с прокруткой: ${scrollHeight}`)
});