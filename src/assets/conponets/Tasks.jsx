// Importa o icone de seta da biblioteca lucide-react.
import { ChevronRightCircleIcon, DeleteIcon, TrashIcon } from "lucide-react";

// Componente que recebe as tarefas por props e desenha a lista na tela.
function Tasks(props) {
  return (
    // Lista visual que agrupa todas as tarefas.
    <ul className="space-y-4 rounded-md bg-slate-100 p-6 shadow-lg">
      {/* map percorre o array de tarefas e cria um item para cada uma */}
      {props.tasks.map((task) => (
        // Cada li representa uma tarefa da lista.
        // O key ajuda o React a identificar cada item de forma unica.
        <li key={task.id} className="flex gap-2">
          <button
            // Quando clicar na tarefa, chamamos a funcao enviada pelo App
            // passando o id da tarefa clicada.
            onClick={() => props.onTaskClick(task.id)}
            // Essas classes estilizam o botao da tarefa.
            // Se a tarefa estiver completa, adicionamos line-through
            // para riscar o texto.
            className={`flex w-full cursor-pointer items-center rounded-md bg-slate-400 px-4 py-3 text-left text-white ${
              task.isCompleted ? "line-through" : ""
            }`}
          >
            {/* Mostra o titulo da tarefa */}
            <span className="font-semibold">{task.title}</span>

            {/* Mostra o status atual da tarefa */}
            <span className="ml-1 text-sm uppercase tracking-wide"></span>
          </button>

          {/* Botao visual com o icone de seta */}
          <button className="cursor-pointer rounded-md bg-slate-400 px-3 text-white">
            <ChevronRightCircleIcon size={20} />
          </button>
          <button onClick={() => props.onDeleteTaskClick(task.id)} className="cursor-pointer rounded-md bg-slate-400 px-3 text-white">
            <TrashIcon size={20} />
          </button>
        </li>
      ))}
    </ul>
  );
}

// Exporta o componente para ser usado no App.
export default Tasks;
