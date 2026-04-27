import { Routes, Route } from "react-router-dom";
import { AuthPage } from "../../features/auth/pages/AuthPage.jsx";
import { DashboardPage } from "../layouts/DashboardPage.jsx";
import { Users } from "../../features/users/components/Users.jsx";
import { Fields } from "../../features/fields/components/Fields.jsx";
import { Reservations } from "../../features/reservations/components/Reservations.jsx";
import { Teams } from "../../features/teams/components/Teams.jsx";
import { Tournaments } from "../../features/tournaments/components/Tournaments.jsx";

export const AppRoutes = ()=> {

    return(
        <Routes>

            {/* PUBLIC */}
            <Route path="/" element={<AuthPage/>} />


            {/* PROTECTED + ROLE */}
            <Route path="/dashboard/*" element={<DashboardPage/>}>
                <Route path="users" element={<Users/>} />
                <Route path="fields" element={<Fields/>} />
                <Route path="reservations" element={<Reservations/>} />
                <Route path="teams" element={<Teams/>} />
                <Route path="tournaments" element={<Tournaments/>} />
            </Route>


            {/* Ruta temporal para pruebas */}
            <Route path="*" element={<h1>Página no encontrada</h1>} />
        </Routes>
    );
}