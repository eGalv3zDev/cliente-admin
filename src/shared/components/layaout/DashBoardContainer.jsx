import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";

export const DashBoardContainer = () => {
    return(
        <div className="min-h-screen flex bg-gray-50 flex flex-col">
            {/* Navbar */}
            <Navbar />

            <div className="flex flex-1">
                {/* Sidebar */}
                <Sidebar />

                <main className="flex-1 p-6">
                    {/* Children */}
                    Contenido del menú
                </main>
            </div>
        </div>
    );
};