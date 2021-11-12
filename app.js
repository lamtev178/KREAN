const header = document.querySelector('.header')
const slide = document.querySelectorAll('.slide-content')
const circles = document.querySelectorAll('.circle')
const btnLeft = document.querySelector('.left')
const btnRight = document.querySelector('.right')
const lists = document.querySelectorAll('#list')
const reference = document.querySelector('.reference-list')
const links = document.querySelectorAll('.link')
flag = 1;


for(const link of links){
    link.addEventListener('click', (event) => {
        const linkY = document.querySelector(`.${link.getAttribute('href')}`); 
        event.preventDefault()
        window.scroll({
            top:linkY.getBoundingClientRect().y - 80 + window.pageYOffset,
            behavior: "smooth"
        })
        
    })
}
let slideCount=0
setInterval(changeList, 4000);
document.addEventListener('scroll', () => {
    if(scrollY>0){
        header.classList.add('header-active')
    } else {
        header.classList.remove('header-active')
    }
})

btnLeft.addEventListener('click', () => {
    changeSlide('left')
})
btnRight.addEventListener('click', () => {
    changeSlide('right')
})

function changeSlide(direction){
    slide[slideCount].classList.remove('active-slide')
    circles[slideCount].classList.remove('active-circle')
    if(direction=='left'){
        slideCount--
        if(slideCount<0){
            slideCount=slide.length-1
        }
    } else if(direction=='right'){
        slideCount++
        if(slideCount==slide.length){
            slideCount=0
        }
    }
    slide[slideCount].classList.add('active-slide')
    circles[slideCount].classList.add('active-circle')
}

function changeList(){
    if(flag>lists.length){
        flag=1
    }

    lists[lists.length-flag].remove()
    reference.prepend(lists[lists.length-flag])
    flag +=1

}
