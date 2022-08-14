import { Routes, Route, Navigate } from "react-router-dom";

// navigate faz o redirecionamento para a pagina inicial se nao der 
// mathing com as rotas existentes
export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<p>Página inicial</p>} />

            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}
