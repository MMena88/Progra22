function checkLogin(){
    var user = document.getElementById("user").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("passw").value;

    var userArray = JSON.parse(sessionStorage.getItem("wUserArray"));

    if(user !== null && user!== "" ){
        if(email !== null && email!== "" ){
            if(password !== null && password !== ""){
                var canLogin = checkLoginInfo(user, email, password, userArray);
                if(canLogin === true){
                    window.location.href="index.html";
                }else{
                    alert("El usuario, correo o contraseña son incorrectos");
                }
            }else{
                alert("La contraseña no puede estar vacía");
            }
        }else{
            alert("El correo no puede estar vacío");
        }
    }else{
        alert("El usuario no puede estar vacío");
    }
} 

function checkLoginInfo(user, email, password, userArray){
    if(userArray!==null && userArray.length > 0){
        for(var i=0; i<userArray.length; i++){
            if(userArray[i].user===user && userArray[i].email===email && userArray[i].password === password){
                return true;
            }
        }
    }
    return false;
}
