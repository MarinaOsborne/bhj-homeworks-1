'use strict'
const chatWidget = document.getElementsByClassName('chat-widget');
const messages = document.querySelector( '.chat-widget__messages');
const chatWidgetInput = document.getElementById('chat-widget__input');
const robotAnswers = ['Че надо?', 'Чувак, не до тебя сейчас!', 'Отстаньте, у меня похмелье', 'Хрю!', 'Мяу!']
let date = new Date;

for (let i = 0; i < chatWidget.length; i++) {
  chatWidget[i].addEventListener("click", () => {
    chatWidget[i].classList.add("chat-widget_active"); 
    });
}


function onInput (e) {

  document.getElementById('chat-widget__input').innerHTML = e.target.value;    
}

chatWidgetInput.addEventListener("input", onInput);


document.addEventListener("keydown", (event) => {
      
    if (event.key === 'Enter' & chatWidgetInput.textContent != "") {
      let x = 0; 
      function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return  x = Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
        
      }
      getRandomIntInclusive(0, 4)
      
        messages.innerHTML += `
          <div class="message message_client">
            <div class="message__time"> `+
            date.getHours() + ":" + date.getMinutes() +
            `</div>
            <div class="message__text">` +
            chatWidgetInput.textContent +
            `</div>
          </div>
        `;  
        
        messages.innerHTML += `
        <div class="message">
          <div class="message__time"> `+
          date.getHours() + ":" + date.getMinutes() +
          `</div>
          <div class="message__text">` +
          robotAnswers[x] +
          `</div>
        </div>
      `;      
    }   

} );



