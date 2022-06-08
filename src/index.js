import '../assets/styles/medias.css'

const body = document.getElementById('body');
const promotionEmail = document.getElementById('promotionEmail')
const alertEmail = document.getElementById('alertEmail')
const alertEmail__background = document.getElementById('alertEmail__background')
const submitEmail = document.getElementById('submitEmail')
const submitEmail__background = document.getElementById('submitEmail__background')


const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

alertEmail.addEventListener('click', e => {
    e.preventDefault();

    if(e.target.matches('.alertEmail__button')) {
        tryAgainEmail()
    }

    if(e.target.matches('.submitEmail__button')) {
        closeSuccessEmail()
        console.log('boton gracias')
    }
})

submitEmail.addEventListener('click', e => {
    e.preventDefault();

    if(e.target.matches('.submitEmail__button')) {
        closeSuccessEmail()
    }
})


body.addEventListener('submit', e => {
    e.preventDefault();
    
    const error = []
    
    if(!regUserEmail.test(promotionEmail.value) || !promotionEmail.value.trim()) {
        error.push({
            type: 'alertEmail',
            msg: "Escriba un correo valido"
        })

        if(error.length > 0) {
            error.forEach((error) => {
                if (error.type === 'alertEmail') {
                    errorEmail()
                }
            })
        }
    } else {
        successEmail()
    }
})

const errorEmail = () => {
    alertEmail.style.display = 'block';
    alertEmail__background.style.display = 'block';
}
const tryAgainEmail = () => {
    alertEmail.style.display = 'none';
    alertEmail__background.style.display = 'none';
}


const successEmail = () => {
    submitEmail.style.display = 'block';
    submitEmail__background.style.display = 'block';
}
const closeSuccessEmail = () => {
    submitEmail.style.display = 'none';
    submitEmail__background.style.display = 'none';
}