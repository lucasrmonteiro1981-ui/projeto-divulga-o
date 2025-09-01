let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

function saveToStorage() {
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

// CREATE
function createUsuario(usuario) {
    usuario.id = Date.now();
    usuarios.push(usuario);
    saveToStorage();
    listarUsuarios();
}

// READ
function listarUsuarios() {
    const lista = document.getElementById("listaUsuarios");
    lista.innerHTML = "";

    usuarios.forEach(usuario => {
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>${usuario.nome}</strong> - ${usuario.email} - ${usuario.idade} anos
            <button onclick="editarUsuario(${usuario.id})">Editar</button>
            <button onclick="deleteUsuario(${usuario.id})">Excluir</button>
        `;
        lista.appendChild(li);
    });
}

// UPDATE (completa)
function updateUsuario(id, novoUsuario) {
    usuarios = usuarios.map(usuario => usuario.id === id ? { ...novoUsuario, id } : usuario);
    saveToStorage();
    listarUsuarios();
}

// DELETE
function deleteUsuario(id) {
    usuarios = usuarios.filter(usuario => usuario.id !== id);
    saveToStorage();
    listarUsuarios();
}

// Editar (carrega no formulário)
function editarUsuario(id) {
    const usuario = usuarios.find(u => u.id === id);
    if (usuario) {
        document.getElementById("usuarioId").value = usuario.id;
        document.getElementById("nome").value = usuario.nome;
        document.getElementById("email").value = usuario.email;
        document.getElementById("senha").value = usuario.senha;
        document.getElementById("idade").value = usuario.idade;
    }
}

// Submissão do formulário
document.getElementById("formUsuario").addEventListener("submit", function(e) {
    e.preventDefault();

    const id = document.getElementById("usuarioId").value;
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const idade = document.getElementById("idade").value;

    const usuario = { nome, email, senha, idade };

    if (id) {
        updateUsuario(Number(id), usuario);
    } else {
        createUsuario(usuario);
    }

    this.reset();
    document.getElementById("usuarioId").value = "";
});

// Inicialização
listarUsuarios();