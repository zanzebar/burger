
const hammenu = document.querySelector ('#hammenu');
const hm = document.querySelector ('#hm');
const closebtn = document.querySelector ('#closebtn');
const openbtn = document.querySelector ('#openbtn');


hammenu.addEventListener('click', function(e){
  e.preventDefault();
  hm.classList.add('header__menu--active');
}) 

hammenu.addEventListener('click', function(e){
  e.preventDefault();
  openbtn.classList.remove('ham--active');
  closebtn.classList.remove('ham--inactive');
})