    
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
        'background': ' url(images/icon-arrow.svg), linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%))',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'box-shadow': '0px 10px 40px  hsl(0, 35%, 78%)'
    }); 
});   
});

const email = document.getElementById('email');
const submit = document.getElementById('submit');
const form = document.getElementById('form');
const emailValue = email.value


form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
 });


function checkInputs(){
    if (emailValue === '') {
        console.log('testinho');

        const small = document.querySelector('small');
        const iconError = document.getElementById('error');
        console.log(iconError)
        
        small.style.display = 'inline';
        email.style.border = '2px solid hsl(0, 93%, 68%)';
        iconError.style.display = 'inline';

 }};

     