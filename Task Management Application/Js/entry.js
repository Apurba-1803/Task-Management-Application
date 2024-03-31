const email = document.querySelector('#email');
const password = document.querySelector('#password');
const submit = document.querySelector('#submit');

submit.addEventListener('click', (event)=>{
    event.preventDefault();

    if(email.value.trim()==''){
        error(email, 'Please add valid email address');
    }

    else{
        location.href = "dashboard.html";
    }

    if(password.value.trim() === ''){
        error(password, 'Password must have numeric Value');
    }
    else{
        location.href = "dashboard.html";
    }
});

function error(element, msg){
    element.style.border = '2px red solid';

    const parent = element.parentElement;
    const p = parent.querySelector('p');
    p.textContent = msg;
    p.style.visibility = 'visible';
}


function success(element){
    element.style.border = '2px green solid';

    const parent = element.parentElement;
    const p = parent.querySelector('p');
    
    p.style.visibility = 'hidden';
}
