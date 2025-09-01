/** Verifica se existe algum elemento na seção de nome e-mail 
 * Caso não exista redireciona para  apágina de registro
*/
function check(){
    email = sessionStorage.getItem("email");
    if(!email){
        window.location.href = "register.html";
    }
}