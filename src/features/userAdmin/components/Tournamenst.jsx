export const Tournaments = () => {
    const tournaments = [
        {
            _id: "1",
            tournamentsName: "Copa Primavera 2026",
            category: "FUTBOL_7",
            status: "ACTIVO",
            teams: 8,
            startDate: "01/04/2026",
            endDate: "30/04/2026",
        },
        {
            _id: "2",
            tournamentsName: "Liga Verano",
            category: "FUTBOL_11",
            status: "FINALIZADO",
            teams: 12,
            startDate: "01/02/2026",
            endDate: "30/03/2026",
        },
    ];

    return (
        <div className="p-4">
            {/* HEADER */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">
                        Gestión de Torneos
                    </h1>
                    <p className="text-gray-500 text-sm">
                        Administra los torneos registrados
                    </p>
                </div>

                <button className="bg-green-600 px-4 py-2 rounded text-white hover:bg-green-700 transition">
                    + Agregar Torneo
                </button>
            </div>

            {/* GRID */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {tournaments.map((t) => (
                    <div
                        key={t._id}
                        className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:scale-[1.02]"
                    >
                        <div className="p-5">
                            <h2 className="text-xl font-bold text-gray-800">
                                {t.tournamentsName}
                            </h2>

                            {/* BADGES */}
                            <div className="flex gap-2 mt-2 flex-wrap">
                                <span className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700 font-medium">
                                    {t.category.replace("_", " ")}
                                </span>

                                <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700 font-medium">
                                    {t.status}
                                </span>
                            </div>

                            {/* INFO */}
                            <p className="text-sm text-gray-400 mt-2">
                                Equipos: {t.teams}
                            </p>

                            <p className="text-sm text-gray-400">
                                {t.startDate} - {t.endDate}
                            </p>

                            {/* BOTONES */}
                            <div className="flex gap-3 mt-5">
                                <button className="flex-1 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
                                    ✏️ Editar
                                </button>

                                <button className="flex-1 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700">
                                    🗑️ Eliminar
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};