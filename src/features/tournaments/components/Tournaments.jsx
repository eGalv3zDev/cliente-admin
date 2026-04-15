import { TournamentModal } from "./TournamentModal.jsx";

export const Tournaments = () => {
    return (
        <div className="p-4">
            {/* HEADER */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-main-blue">
                        Gestión de Torneos
                    </h1>
                    <p className="text-gray-500 text-sm">
                        Administra los torneos registrados
                    </p>
                </div>

                <button className="bg-main-blue px-4 py-2 rounded text-white hover:opacity-90 transition">
                    + Agregar Torneo
                </button>
            </div>

            {/* GRID */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

                {/* CARD EJEMPLO */}
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:scale-[1.02]">
                    <div className="p-5">
                        <h2 className="text-xl font-bold text-main-blue">
                            Copa Primavera 2026
                        </h2>

                        {/* BADGES */}
                        <div className="flex gap-2 mt-2 flex-wrap">
                            <span className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700 font-medium">
                                FUTBOL 7
                            </span>

                            <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700 font-medium">
                                ACTIVO
                            </span>
                        </div>

                        {/* INFO */}
                        <p className="text-sm text-gray-400 mt-2">
                            Equipos: 8
                        </p>

                        <p className="text-sm text-gray-400">
                            01/04/2026 - 30/04/2026
                        </p>

                        {/* BOTONES */}
                        <div className="flex gap-3 mt-5">
                            <button className="flex-1 py-2 rounded-lg bg-main-blue text-white hover:opacity-90">
                                ✏️ Editar
                            </button>

                            <button className="flex-1 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700">
                                🗑️ Eliminar
                            </button>
                        </div>
                    </div>
                </div>

            </div>

            {/* MODAL (solo visual) */}
            <TournamentModal isOpen={false} />
        </div>
    );
};