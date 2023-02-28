const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener('submit', e => {
  e.preventDefault();
  checkInput();
});

function checkInput() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue == '') {
    setError(username, " Username cannot be blank");
  } else {
    setSuccess(username);
  }

  if (emailValue === '') {
    setError(email, "Email cannot be Blank");
  } else if(!isemail(emailValue)) {
    setError(email, "Not a valid Email");
  } else {
    setSuccess(email);
  }


  if (passwordValue == '') {
    setError(password, " Password cannot be blank");
  } else {
    setSuccess(password);
  }
  
  if (password2Value == '') {
    setError(password2, " Password cannot be blank");
  }
   else if(passwordValue !== password2Value){

    setError(password2, 'Password does not match');
   }
  
  else {
    setSuccess(password2);
  }

  function setError(input, message){

   const formcontrol = input.parentElement;
   const small = formcontrol.querySelector('small');
   formcontrol.className = 'form-control error';
   small.innerText = message;

  }

  function setSuccess(input){

    const formcontrol = input.parentElement;
    formcontrol.className = 'form-control success';
   
   }
   

}

function isemail(email) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}
