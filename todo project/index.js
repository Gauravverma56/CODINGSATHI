const input = document.querySelector('input')
const text = document.querySelector('.text')

function Add(){
    if(input.value === ''){
        alert('pl enter text to processed')
    }else{
        let newl = document.createElement('ul')
        newl.innerHTML = `${input.value} <i class="fa-solid fa-trash"></i>`
        text.appendChild(newl)
        input.value = '';
        newl.querySelector('i').addEventListener('click', removebtn)
        function removebtn(){
            newl.remove()
        }
    }
}

function screendark(){
    const element = document.body;
    element.classList.toggle('dark-mode')
}

