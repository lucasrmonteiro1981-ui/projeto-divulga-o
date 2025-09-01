//** Verifica o local de armazenamento dos usuários */
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

function login(){/** Olha as informações Digitadas */
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    usuarios.forEach(usuario=>{/** Percorre todos usuários armazenados*/
        if(usuario.email == email && usuario.senha==senha){/** Verifica se os dados estão corretos*/
            sessionUser(usuario);/** Chamou a fução passando os dados Encontrados*/
            window.location.href = "index.html";/** Redireciona ao index.html */
        }
    });
}
/** Criando as Seços com as Informações encontradas */
function sessionUser(usuario){
    sessionStorage.setItem("nome",usuario.nome);/*** nome do usuário */
    sessionStorage.setItem("email",usuario.email);
    sessionStorage.setItem("idade",usuario.idade);
}

/** Carre no elemento logado as informações do nome */
function loadSession(){
    const nome = document.getElementById("nome");/** id encontrado */
    nomeStorage = sessionStorage.getItem("nome");/** Recebe o conteúdo da seção */
    nome.innerHTML = `${nomeStorage}`; /** espaço guardado no index.html */
}

/** Limpa todas informações geradas na seção */
function logout(){
    sessionStorage.clear();
}
