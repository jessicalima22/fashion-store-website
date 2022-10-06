    
$(document).ready(function() {

$('#submit').mouseenter(function(){
    $(this).css({
        'background': 'url(images/icon-arrow.svg), linear-gradient(135deg, hsl(358, 67%, 92%), hsl(355, 67%, 85%))',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'box-shadow': '0px 15px 20px  hsl(0, 35%, 78%)'
    }); 
    $(this).css ('cursor', 'pointer');
});

$('#submit').mouseleave(function(){
    $(this).css({
        'background': 'url(images/icon-arrow.svg), linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%))',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'box-shadow': '0px 10px 40px  hsl(0, 35%, 78%)'
    }); 
});   
});

const email = document.querySelector('input');
const submit = document.getElementById('submit');
const form = document.getElementById('form');




form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
 });


function checkInputs(){
    const emailValue = email.value;
    if (emailValue === '') {
        
        setErrorFor(email, "Can't be blank");
    } else if (!checkEmail(emailValue)){
        setErrorFor(email, 'Please provide a valid email');
    } else {
        const small = document.querySelector('small');
        const iconError = document.getElementById('error');
        
        small.style.display = 'none';
        email.style.border = 'solid 0.5px hsla(0, 36%, 70%, 0.5)';
        iconError.style.display = 'none';
    }

};


 function setErrorFor (email, message){
    const small = document.querySelector('small');
    const iconError = document.getElementById('error');
    
    small.innerText = message;
    small.style.display = 'inline';
    email.style.border = '2px solid hsl(0, 93%, 68%)';
    iconError.style.display = 'inline';
 }

 function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }
     