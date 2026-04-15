export const Teams = () => {
    const teams = [
        {
            _id: "1",
            teamName: "Barcelona FC",
            category: "FUTBOL_11",
            manager: "Juan Pérez (@juanp)",
            logo: "https://via.placeholder.com/200",
        },
        {
            _id: "2",
            teamName: "Real Madrid",
            category: "FUTBOL_7",
            manager: "Carlos López (@carlosl)",
            logo: "https://via.placeholder.com/200",
        },
    ];

    return (
        <div className="p-4">
            {/* HEADER */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">
                        Gestión de Equipos
                    </h1>
                    <p className="text-gray-500 text-sm">
                        Administra los equipos registrados
                    </p>
                </div>

                <button className="bg-green-600 px-4 py-2 rounded text-white hover:bg-green-700">
                    + Agregar Equipo
                </button>
            </div>

            {/* GRID */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {teams.map((team) => (
                    <div
                        key={team._id}
                        className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:scale-[1.02]"
                    >
                        {/* IMAGEN */}
                        <div className="w-full h-52 bg-gray-100 flex items-center justify-center">
                            <img
                                src={team.logo}
                                alt={team.teamName}
                                className="max-h-full max-w-full object-contain rounded-t-xl"
                            />
                        </div>

                        {/* CONTENIDO */}
                        <div className="p-5">
                            <h2 className="text-xl font-bold text-gray-800">
                                {team.teamName}
                            </h2>

                            {/* BADGES */}
                            <div className="flex gap-2 mt-2">
                                <span className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700 font-medium">
                                    {team.category.replace("_", " ")}
                                </span>

                                <span className="px-3 py-1 text-xs rounded-full bg-purple-100 text-purple-700 font-medium">
                                    Manager
                                </span>
                            </div>

                            {/* INFO */}
                            <p className="text-sm text-gray-700 mt-2 truncate font-medium">
                                <span className="text-gray-400 font-normal">Rep: </span>
                                {team.manager}
                            </p>

                            {/* BOTONES */}
                            <div className="flex gap-3 mt-5">
                                <button className="flex-1 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
                                    ✏️ Editar
                                </button>

                                <button className="flex-1 py-2 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 transition">
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