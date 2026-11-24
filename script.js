
//SCRIPT DA AGENDA DE CONSULTAS
document.getElementById("botao").addEventListener("click", function() {
  const nome = document.getElementById("nome").value;
  const data = document.getElementById("date").value;
  const hora = document.getElementById("time").value;
  const especialidade = document.getElementById("consulta").value;

  const consulta = `${nome} – consulta dia ${data} às ${hora} em ${especialidade}`;

  let consultas = JSON.parse(localStorage.getItem("consultas")) || [];
  consultas.push(consulta);
  localStorage.setItem("consultas", JSON.stringify(consultas));

  mostrarConsultas();
});
//MOSTRAR CONSULTAS
function mostrarConsultas() {
  let consultas = JSON.parse(localStorage.getItem("consultas")) || [];
  const agendaDiv = document.querySelector(".agenda");

  if (consultas.length === 0) {
    agendaDiv.innerHTML = "<p>Nenhuma consulta registrada.</p>";
    return;
  }

  agendaDiv.innerHTML = consultas.map((c, i) => 
    `<p>${c} <button onclick="excluirConsulta(${i})">Excluir</button></p>`
  ).join("");
}
//EXCLUIR CONSULTAS
function excluirConsulta(index) {
  let consultas = JSON.parse(localStorage.getItem("consultas")) || [];
  consultas.splice(index, 1); // remove só a escolhida
  localStorage.setItem("consultas", JSON.stringify(consultas));
  mostrarConsultas();
}

window.onload = mostrarConsultas;

