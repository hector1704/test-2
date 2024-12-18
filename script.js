function adicionarTarefa() {
    // Mensagem de sucesso ao adicionar a tarefa
    let mensagem = "Tarefa adicionada com sucesso!";
    document.getElementById("mensagem").textContent = mensagem;

    // Obtém o valor da tarefa digitada
    let inputTarefa = document.getElementById("inputTarefa");
    let Tarefa = inputTarefa.value;

    // Exibe a tarefa no console
    console.log("Tarefa digitada:", Tarefa);

    // Verifica se o campo de entrada não está vazio
    if (Tarefa.trim() === "") {
        document.getElementById("mensagem").textContent = "Por favor, insira uma tarefa!";
        return; // Impede a execução do restante do código se a tarefa estiver vazia
    }

    // Adiciona a tarefa à lista de tarefas
    let lista = document.getElementById("listaTarefas");
    let li = document.createElement("li");
    li.textContent = Tarefa;
    lista.appendChild(li);

    // Limpa o campo de entrada após adicionar a tarefa
    inputTarefa.value = "";
    
}

