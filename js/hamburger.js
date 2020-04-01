
const hammenu = document.querySelector ('#hammenu');
const hm = document.querySelector ('#hm');
const closebtn = document.querySelector ('#closebtn');
const openbtn = document.querySelector ('#openbtn');


hammenu.addEventListener('click', function(e){
  e.preventDefault();
  hm.classList.add('header__menu--active');

  openbtn.classList.add('ham--active');
  openbtn.classList.remove('ham--inactive');
  closebtn.classList.add('ham--inactive');
  closebtn.classList.remove('ham--active');
}) 



closebtn.addEventListener('click', function(e){
  e.preventDefault();
  closebtn.classList.add('ham--active');
  closebtn.classList.remove('ham--inactive');
  
  openbtn.classList.add('ham--inactive');
  openbtn.classList.remove('ham--active');
  hm.classList.remove('header__menu--active');
})