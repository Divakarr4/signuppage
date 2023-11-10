const btn=document.querySelector('.btn');

btn.addEventListener('click',(e) => {
  e.preventDefault();
  document.querySelector('#my-form').style.background='blue';
  document.querySelector('body').classList.add('bg-dark');
})

const ul = document.querySelector('.items');

ul.addEventListener('mouseout', (e) => {
  e.preventDefault();
  document.querySelector('.items').firstElementChild.style.color='blue';
  document.querySelector('.items').children[1].style.color='green';
  document.querySelector('.items').lastElementChild.style.color='pink';
})

const head = document.getElementById('heading');

head.addEventListener('mouseover',()=>{
  head.textContent='Please enroll to continue';
})
