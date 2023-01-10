onload = () =>{
        document.body.classList.remove("container");
};

const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const span = document.querySelectorAll('span');

let condition = true;

function animation () {
  one.style.visibility = 'hidden';
  two.style.visibility = 'hidden';
  three.style.visibility = 'hidden';
  for(let i = 0; i < span.length; i++) {
    span[i].style.color = '#A31ACB'
  }

  setTimeout(function() {
    one.style.visibility = 'unset';
  }, 500);

  setTimeout(function() {
    two.style.visibility = 'unset';
  }, 1000);

  setTimeout(function() {
    three.style.visibility = 'unset';
    for(let i = 0; i < span.length; i++) {
      span[i].style.color = 'magenta'
    }
  }, 1500)

  if(condition) {
    setTimeout(animation, 2200)
  }
}

animation();
