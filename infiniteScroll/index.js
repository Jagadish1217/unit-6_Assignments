
const div = document.getElementById('infinite');
var c = 0;
function inf_scroll() {
    for (let i = 1; i <= 20; i++){
        c++;
        let div = document.createElement('div');
        div.setAttribute('class', 'divInfinite')
        div.innerHTML = `cricket scores ${c}`
        infinite.append(div);
    }
}
inf_scroll();

infinite.addEventListener('scroll', () => {
    console.log(infinite.clientHeight+infinite.scrollTop,infinite.scrollHeight )
    if (infinite.scrollTop + infinite.clientHeight+2 >= infinite.scrollHeight) {
        inf_scroll()
    }
})
