function login() {
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
    const erro = document.getElementById("erro");

    // Usuários cadastrados (simples)
    const usuarios = [
        { user: "admin", pass: "1234" },
        { user: "medico", pass: "1234" },
        { user: "atendente", pass: "1234" }
    ];

    const valido = usuarios.find(
        u => u.user === usuario && u.pass === senha
    );

    if (valido) {
        
        sessionStorage.setItem("usuarioLogado", usuario);

        // Redireciona
        window.location.href = "dashboard.html";
    } else {
        erro.textContent = "Usuário ou senha inválidos!";
    }

    return false; // impede reload
}
