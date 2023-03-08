const btn__open = document.querySelector('.open');
const btn__close = document.querySelector('.close')

btn__open.addEventListener('click',() =>{
    document.querySelector('.open').style.display = 'none';
    document.querySelector('.close').style.display = 'inline'
    document.querySelector('.header__mobile').style.display = 'block'
    
})
btn__close.addEventListener('click',()=>{
    document.querySelector('.close').style.display = 'none'
    document.querySelector('.open').style.display = 'block'
    document.querySelector('.header__mobile').style.display = 'none'
})