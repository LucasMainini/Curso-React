// StrictMode ajuda a encontrar problemas comuns durante o desenvolvimento.
import { StrictMode } from "react";

// createRoot cria a raiz da aplicacao React no HTML.
import { createRoot } from "react-dom/client";

// Importa o componente principal da aplicacao.
import App from "./App.jsx";

// Importa os estilos globais do projeto.
import "./index.css";

// Procura a div com id "root" no index.html e renderiza a aplicacao React dentro dela.
createRoot(document.getElementById('root')).render(
  // StrictMode envolve a aplicacao para ajudar no desenvolvimento.
  <StrictMode>
    <App />
  </StrictMode>,
);
