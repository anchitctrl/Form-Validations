function validate(){
                var Username=document.getElementById("Username");
                var Password=document.getElementById("Password");
                if(Username.value.trim()=="" || Password.value.trim()==""){
                    alert("Fill the blanks");
                    return false;
                }
                else true;
            }
