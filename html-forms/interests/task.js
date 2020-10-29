'use strict'
const interestСheck = document.getElementsByClassName('interest__check');

for (let i = 0; i < interestСheck.length; i++) {

  interestСheck[i].addEventListener('change', event => {  
    const target = event.target.parentElement;  
    const children = Array.from(target.nextElementSibling.querySelectorAll('.interest__check'));
    for (let i = 0; i < interestСheck.length; i++) {

       if (event.target.checked == true) {
           children[i].checked = true
           } else {
             children[i].checked = false
           }
        }  
    })
}


