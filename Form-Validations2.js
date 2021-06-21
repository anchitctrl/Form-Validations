 function validate(){
                var Username=document.getElementById("Username");
                var Password=document.getElementById("Password");
                if(Username.value.trim()==""){
                    //alert("Blank Username");
                    Username.style.border="solid 3px red";
                    document.getElementById("ilabel").style.visibility="visible";
                    return false;
                }
                else if(Password.value.trim()==""){
                    //alert("Blank Password");
                    Password.style.border="solid 3px red";
                    document.getElementById("ulabel").style.visibility="visible";
                    return false;
                }
                else if(Password.value.trim().length<5){
                    alert("Password too short");
                    return false;
                }
                else return true;
            }
