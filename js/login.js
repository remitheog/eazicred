let elems={
    form:document.getElementsByTagName('form')[0],
    mail:document.querySelector('.email'),
    pswrd:document.querySelector('.password')

}
let {form,mail,pswrd}=elems

mail.onkeyup= e => {
    //message
    let msg=document.querySelector('.msg');
    let pattern=/[a-zA-Z0-9]\@gmail\.com|[a-zA-Z0-9]\@yahoo\.com/ig;
        //match the inout vlaue with regular expersion
    if(e.target.value.match(pattern)){
        msg.textContent=" password must not be less than digits"
        msg.classList.add('verify');
        e.target.style.borderColor='green' 
    } else{
        msg.textContent=" password must not be less than digits" 
        msg.classList.add('error');
        e.target.style.borderColor='red' 
    }
}

form.onsubmit= e=>{
    e.preventDefault()
    // the login details
    credit={
        email:mail.value,
        password:pswrd.value
    }
    let endpoint='http://66.228.56.214:3000/auth/login';
        fetch(endpoint,{
            method:'POST',
            headers:{
                'Content-Type':'application/json: utf-8'
            },
            body:JSON.stringify(credit)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    
}