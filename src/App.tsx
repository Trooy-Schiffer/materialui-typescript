import { BrowserRouter } from "react-router-dom"; // ROUBER DOM para gerenciar rotas
import { AppRoutes } from "./routes"; // rotas existentes no projeto

export const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
