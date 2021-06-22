<html>
    <head>
        <title>Form Validations</title>
        <script>
            // function validate(){
            //     var Username=document.getElementById("Username");
            //     var Password=document.getElementById("Password");
            //     if(Username.value.trim()=="" || Password.value.trim()==""){
            //         alert("Fill the blanks");
            //         return false;
            //     }
            //     else true;
            // }
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
                    Username.style.border="solid 1px black";
                    document.getElementById("ilabel").style.visibility="hidden";
                    document.getElementById("ulabel").style.visibility="visible";
                    return false;
                }
                else if(Password.value.trim().length<5){
                    //alert("Password too short");
                    Password.style.border="solid 3px red";
                    document.getElementById("ilabel").style.visibility="hidden";
                    document.getElementById("ulabel").style.visibility="hidden";
                    document.getElementById("rlabel").style.visibility="visible";
                    return false;
                }
                else return true;
            }
        </script>
    </head>
    <body>
        <h1>Form Validations</h1>
        <form onsubmit="return validate()" action="targetpage.html">
            <input type="text" placeholder="Username" id="Username">
            <label id="ilabel" style="color: red;visibility:hidden">Required</label><br><br>
            <input type="password" placeholder="Password" id="Password">
            <label id="ulabel" style="color: red;visibility:hidden">Required</label>
            <label id="rlabel" style="color: red;visibility:hidden">Password too short</label><br><br>
            <button type="submit">Submit</button> 
        </form>
    </body>
</html>
