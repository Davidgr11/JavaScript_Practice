document.addEventListener('DOMContentLoaded', () => {
    const resume = {
        email: '',
        asunto: '',
        mensaje: ''
    }


    // Select Elements
    const inputEmail = document.querySelector('#email');
    const inputSubject = document.querySelector('#asunto');
    const inputMessage = document.querySelector('#mensaje');
    const form = document.querySelector('#formulario');
    const spinner = document.querySelector('#spinner');
    const formSubmit = document.querySelector('#formulario button[type="submit"]');
    const formReset = document.querySelector('#formulario button[type="reset"]');



    inputEmail.addEventListener('input', validate);// Calls the function when the input loses focus
    inputSubject.addEventListener('blur', validate);
    inputMessage.addEventListener('blur', validate);
    form.addEventListener('submit', spinnerSubmit);

    function spinnerSubmit (e){
        e.preventDefault();
        spinner.classList.add('flex');
        spinner.classList.remove('hidden');

        setTimeout(() => {
            spinner.classList.remove('flex');
            spinner.classList.add('hidden');

            resume.email = '';
            resume.asunto = '';
            resume.mensaje = '';
            inputEmail.value = '';
            inputSubject.value = '';
            inputMessage.value = '';
            reviewEmail();
            cleanAlert(inputEmail.parentElement);
            cleanAlert(inputSubject.parentElement);
            cleanAlert(inputMessage.parentElement);

            // create alert
            const alertSuccess = document.createElement('p');
            alertSuccess.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'mt-10', 'rounded-lg', 'font-bold', 'uppercase', 'text-sm');
            alertSuccess.textContent = 'Message sent successfully';
            form.appendChild(alertSuccess);

            setTimeout(() => {
                alertSuccess.remove();
            }, 3000);

        }, 3000);
    }



    formReset.addEventListener('click', (e) => {
        e.preventDefault();
        resume.email = '';
        resume.asunto = '';
        resume.mensaje = '';
        inputEmail.value = '';
        inputSubject.value = '';
        inputMessage.value = '';
        reviewEmail();
        cleanAlert(inputEmail.parentElement);
        cleanAlert(inputSubject.parentElement);
        cleanAlert(inputMessage.parentElement);
    });

    function validate(e){
        if(e.target.value.trim() === ''){
            alert(`The ${e.target.id} is required`, e.target.parentElement);
            resume[e.target.name] = '';
            reviewEmail();
            return;
        }
        if(e.target.id === 'email' && !validateEmail(e.target.value)){
            alert(`The ${e.target.id} is not valid`, e.target.parentElement);
            resume[e.target.name] = '';
            reviewEmail();
            return;
        }
        
        cleanAlert(e.target.parentElement);

        resume[e.target.name] = e.target.value.trim();
        reviewEmail();

    }

    function alert(text, reference){

        const alert = reference.querySelector('.bg-red-600');
        if(alert){
            return;
        }else {
            const error = document.createElement('p');
            error.textContent = text;
            error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center', 'mt-5');
            reference.appendChild(error);
        }
    }
    function cleanAlert(reference){
        const alerts = reference.querySelectorAll('.bg-red-600');
        alerts.forEach(alert => {
            alert.remove();
        });
    }

    function validateEmail(email){
        const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        const result =  regex.test(email);
        return result;
    }

    function reviewEmail(){
        if(Object.values(resume).includes('')){
            formSubmit.classList.add('opacity-50');
            formSubmit.disabled = true;
            return;
        }

        formSubmit.classList.remove('opacity-50');
        formSubmit.disabled = false;
    }
});