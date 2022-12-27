const username = document.getElementById('name')
const email = document.getElementById('email')
const bvn = document.getElementById('bvn')
const btcAddress = document.getElementById('btc')
const number = document.getElementById('number')
const inputImage = document.getElementById('image')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')


form.addEventListener('submit', (e)=>{
    e.preventDefault()
    validateInputs()
});


const setError = (element, message) => {
    const inputControl = element.parentElement
    const errorDisplay = inputControl.querySelector('#error')

    errorDisplay.innerText = message
    inputControl.classList.remove('success')
    inputControl.classList.add('error')
}

const setSuccess = element => {
    const inputControl = element.parentElement
    const errorDisplay = inputControl.querySelector('#error')

    errorDisplay.innerText = ''
    inputControl.classList.add('success')
    inputControl.classList.remove('error')

}


    

const validateInputs = () => {
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const bvnValue = bvn.value.trim()
    const btcValue = btcAddress.value.trim()
    const numberValue = number.value.trim()
    const  files = inputImage.files

    
    if(files.length > 0){
        if(files[0].size > 10 * 1024){
           setError(inputImage,'file is too large')
            } else{
                setSuccess(inputImage)
            }
    }

    let numberString = numberValue.split('')
    if(numberValue===''){
        setError(number, 'Phone is required')
    } else if(numberValue   .length != 11){
        setError(number, 'Phone is invalid')
    } else if(numberString[0] != '0'){
        setError(number, 'Phone is invalid')
    } else{
        setSuccess(number)
    }

    function hasNumbers(t)
{var regex = /\d/g;
return regex.test(t);}    

    if (usernameValue === '') {
        setError(username, 'Username is required')

    } else if(hasNumbers(usernameValue) === true){
        setError(username, 'Enter a valid name')
    } else{
        setSuccess(username)
    }

    var pattern = /^[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)*@[a-z0-9]+(\-[a-z0-9]+)*(\.[a-z0-9]+(\-[a-z0-9]+)*)*\.[a-z]{2,4}$/;
    if(pattern.test(emailValue)){
        setSuccess(email)
    } else {
        setError(email, 'Enter valid email')
    } 

    if(bvnValue === ''){
        setError(bvn, 'Bvn required')
    } else if(bvnValue.length !== 11 || isNaN(bvnValue)) {
        setError(bvn, 'Provide a valid BVN')
    } else{
        setSuccess(bvn)
    }

    const b = btcValue.length
    let array = btcValue.split("")
    console.log(array[0])

    if(btcValue === ''){
        setError(btc, 'Bitcoin address required')
    } else if( b<27 || b>34 || array[0] != '1'  ){
        setError(btc, 'Input a valid bitcoin address')
    }
}