const email = document.querySelector('#email');
const password = document.querySelector('#password');
const submit = document.querySelector('#submit');
const radioViewOptions = document.querySelectorAll("input[name='view-option']");
const listView = document.getElementById("list-view");
const boardView = document.getElementById("board-view");


submit.addEventListener('click', (event)=>{
    event.preventDefault();

    if(email.value.trim()==''){
        error(email, 'Please add valid email address');
    }

    else{
        success(email);
    }

    if(password.value.trim() === ''){
        error(password, 'Password must have numeric Value');
    }
    else{
        success(password);
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

radioViewOptions.forEach((radioButton) =>{
    radioButton.addEventListener("change", (event)=>{
        const eventTarget = event.target;
        const viewOption = eventTarget.value;

        switch(viewOption){
            case "board":
                listView.classList.add("hide");
                boardView.classList.remove("hide");
                break;

            case "list":
                boardView.classList.add("hide");
                listView.classList.remove("hide")

                break;
        }
    });
});


