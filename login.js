function logar() {
    const nome=document.getElementById(email).value;
    const senha=document.getElementById(senha).value;
    fetch('/api/user',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({email,senha})
    })
    .then(()=>{
     showUsers();
    form.reset();
    }
)
.catch(error=>console.error('Erro:', error));
}
const form=document.getElementById(form);
form.addEventListener('submit',event=>{
    event.preventDefault();
    logar();
});
 showUsers();
