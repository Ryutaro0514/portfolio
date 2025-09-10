const box =document.querySelector(".humall")
const lineone=document.querySelector(".lineone")
const linetwo=document.querySelector(".linetwo")
const linethree=document.querySelector(".linethree")
const head = document.querySelector(".head")
box.addEventListener('click', () => {
    lineone.classList.toggle('active');
    linetwo.classList.toggle('active');
    linethree.classList.toggle('active');
    head.classList.toggle("linkactive")
  })