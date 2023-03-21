const openModal2 = document.querySelector('.logged-Ins');
const Modal2 = document.querySelector('.modal2');
const Modal = document.querySelector('.modal');
const bk2 = document.querySelector('.closeModal2')
const acc2 = document.querySelector('.acc2')

openModal2.addEventListener('click' ,(e)=>{
    e.preventDefault();
    Modal2.classList.add('modal2--show');
})

bk2.addEventListener('click' ,(e)=>{
    e.preventDefault();
    Modal2.classList.remove('modal2--show');
})

acc2.addEventListener('click' ,(e)=>{
    e.preventDefault();
    Modal2.classList.remove('modal2--show');
    Modal.classList.add('modal--show');
})