const form = document.querySelector('form')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener("click", add)
form.addEventListener("change", save)

function add(){
    const day = new Date().toLocaleDateString('pt-br').slice(0, -5)

    if(nlwSetup.dayExists(day)){
        alert('Dia ' + day + ' já foi adicionado! ❌')
        return
    } else {
        alert('Dia ' + day + ' adicionado! ✔')
        nlwSetup.addDay(day)   
    }
}

function save(){
    localStorage.setItem('backup@habits', JSON.stringify(nlwSetup.data))
}

const data =  JSON.parse(localStorage.getItem('backup@habits')) || {}
nlwSetup.setData(data)
nlwSetup.load()