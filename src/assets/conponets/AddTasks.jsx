import { useState } from "react";

const MAX_TITLE_LENGTH = 80;
const MAX_DESCRIPTION_LENGTH = 200;

function AddTasks({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleAddTask(event) {
    event.preventDefault();

    if (!title.trim() || !description.trim()) {
      return;
    }

    onAddTask(title, description);
    setTitle("");
    setDescription("");
  }

  return (
    <form
      onSubmit={handleAddTask}
      className="mb-6 space-y-4 rounded-md bg-slate-100 p-6 shadow-lg"
    >
      <input
        type="text"
        placeholder="Digite o titulo da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        maxLength={MAX_TITLE_LENGTH}
        autoComplete="off"
        className="w-full rounded-md border border-slate-300 px-4 py-3 text-slate-900 outline-none"
      />
      <input
        type="text"
        placeholder="Digite a descricao da tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        maxLength={MAX_DESCRIPTION_LENGTH}
        autoComplete="off"
        className="w-full rounded-md border border-slate-300 px-4 py-3 text-slate-900 outline-none"
      />
      <button
        type="submit"
        className="w-full cursor-pointer rounded-md bg-slate-700 px-4 py-3 font-semibold text-white transition hover:bg-slate-800"
      >
        Adicionar tarefa
      </button>
    </form>
  );
}

export default AddTasks;
