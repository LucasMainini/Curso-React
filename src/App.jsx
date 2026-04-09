// Importa o hook useState, que permite criar e atualizar estados no componente.
import { useState } from "react";

import AddTasks from "./assets/conponets/AddTasks";
// Importa o componente responsavel por mostrar a lista de tarefas.
import Tasks from "./assets/conponets/Tasks";

const MAX_TITLE_LENGTH = 80;
const MAX_DESCRIPTION_LENGTH = 200;

function sanitizeTaskText(value, maxLength) {
  return value
    .replace(/[\u0000-\u001F\u007F]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
}

// Componente principal da aplicacao.
// Ele guarda as tarefas no estado e envia esses dados para o componente Tasks.
function App() {
  // Estado que armazena a lista de tarefas.
  // setTasks e a funcao usada quando quisermos atualizar essa lista.
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar programacao",
      description: "Estudar e atingir o objetivo do primeiro emprego",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar ingles",
      description: "Estudar ingles",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Fazer academia",
      description: "Fazer academia para melhorar minha saude",
      isCompleted: false,
    },
  ]);

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTask(title, description) {
    const sanitizedTitle = sanitizeTaskText(title, MAX_TITLE_LENGTH);
    const sanitizedDescription = sanitizeTaskText(
      description,
      MAX_DESCRIPTION_LENGTH,
    );

    if (!sanitizedTitle || !sanitizedDescription) {
      return;
    }

    const newTask = {
      id: Date.now(),
      title: sanitizedTitle,
      description: sanitizedDescription,
      isCompleted: false,
    };

    setTasks((currentTasks) => [...currentTasks, newTask]);
  }

  // Essa funcao e chamada quando o usuario clica em uma tarefa.
  // Ela recebe o id da tarefa clicada e alterna o valor de isCompleted.
  function onTaskClick(taskId) {
    // map percorre todas as tarefas e devolve um novo array.
    const newTasks = tasks.map((task) => {
      // Se essa for a tarefa clicada, criamos uma copia dela
      // mudando apenas o isCompleted para o valor contrario.
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      // Se nao for a tarefa clicada, ela continua igual.
      return task;
    });

    // Atualiza o estado com a nova lista de tarefas.
    setTasks(newTasks);
  }

  return (
    // Container principal da pagina.
    <div className="min-h-screen bg-slate-500 px-6 py-10 text-white">
      <div className="mx-auto max-w-3xl">
        {/* Titulo principal da aplicacao */}
        <h1 className="mb-6 text-center text-4xl font-bold tracking-tight">
          Gerenciador de tarefas
        </h1>

        <AddTasks onAddTask={onAddTask} />

        {/* Envia a lista de tarefas e a funcao de clique para o componente filho */}
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick} />
      </div>
    </div>
  );
}

// Exporta o componente para que ele possa ser usado em outros arquivos.
export default App;
