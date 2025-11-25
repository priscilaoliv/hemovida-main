function limparCampos() {
  document.getElementById("nomeUser").value = "";
  document.getElementById("CPFUser").value = "";
  document.getElementById("senha").value = "";
}

document
  .getElementById("AgendamentoForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const agendamento = {
      nomeUsuario: document.getElementById("nomeUser").value,
      cpf: document.getElementById("CPFUser").value,
      senha: document.getElementById("senha").value,
    };
  });
