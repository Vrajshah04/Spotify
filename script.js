function fun(){
    pat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    u = document.getElementById("t1").value;
    if(pat.test(u))
    {
    pass
    }
    else{
        alert("Invalid Email");
    }
}

function fun2(){
    x=document.getElementById("t2").value;
    y=document.getElementById("t3").value;
    if(x!=y){
        alert("Re-entered password is not the same as password")
    }
    else{
        alert('Sign up successfull')
    }
}