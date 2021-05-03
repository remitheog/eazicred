
form=document.querySelector('.account')
firstName=document.querySelector('.first_name'),
lastName=document.querySelector('.last_name'),
number=document.querySelector('.phone'),
mail=document.querySelector('.email');
pswrd= document.querySelector('.password');





//handle the email validation 
mail.onkeyup= e => {
    //message
    let msg=document.querySelector('.msg');
    let pattern=/[a-zA-Z0-9]\@gmail\.com|[a-zA-Z0-9]\@yahoo\.com/ig;
    if(e.target.value.match(pattern)){
        msg.textContent=" this is a valid email address "
        msg.classList.add('verify');
        e.target.style.borderColor='green' 
    } else{
        msg.textContent=" please insert a valid email address" 
        msg.classList.add('error');
        e.target.style.borderColor='red' 
    }
}

//validate the password 
pswrd.onkeyup=ev=>{
    
   
    let pass_err=document.querySelector('.pswrd_err')
    let theMax=6
    if(ev.target.value.length < theMax){
        pass_err.textContent='password  cant be less than 6 characters';
        pass_err.classList.add('error')
        document.querySelector('#submit').disabled=true
    } else {
       let btn= document.querySelector('#submit').disabled=false
       
        pass_err.textContent='you are good to go ';
        pass_err.classList.add('verify')
        
    }
}


//handle thefor datas now
form.onsubmit= e=> {
    e.preventDefault();
 
   //the input data that will be pushedto db
    let db={
        firstname:firstName.value,
        lastname:lastName.value,
        password:pswrd.value,
        email:mail.value,
        phone:number.value
        
        
    }
    console.log(db);
  
    let url='http://66.228.56.214:3000/auth/register';
        fetch(url, {
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin':'*'
            },
            body:JSON.stringify(db)
        }).then( res=> res.json())
        .then(info=>{
            console.log(info)
            localStorage.setItem('user','user auth')
            setTimeout(()=>{
                swal('Account Created','Your account has been created successfully','success');
                window.location='./dashboard/home.html'
            },2000)
            console.log(db);
        })

        
}

if(localStorage.getItem('user')) {
    alert('user')
}



