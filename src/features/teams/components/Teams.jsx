import { Spinner } from "../../auth/components/Spinner";
import { TeamModal } from "./TeamModal.jsx";

export const Teams = () => {
    const loading = false;

    if (loading) return <Spinner />;

    return (
        <div className="p-4">
            {/* HEADER */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-main-blue">
                        Gestión de Equipos
                    </h1>
                    <p className="text-gray-500 text-sm">
                        Administra los equipos registrados
                    </p>
                </div>

                <button className="bg-main-blue px-4 py-2 rounded text-white hover:opacity-90">
                    + Agregar Equipo
                </button>
            </div>

            {/* GRID */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

                {/* CARD */}
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:scale-[1.02]">

                    {/* IMAGEN */}
                    <div className="w-full h-52 bg-gray-100 flex items-center justify-center">
                        <img
                            src="https://via.placeholder.com/300x200"
                            alt="Equipo"
                            className="max-h-full max-w-full object-contain rounded-t-xl"
                        />
                    </div>

                    {/* CONTENIDO */}
                    <div className="p-5">
                        <h2 className="text-xl font-bold text-main-blue">
                            Barcelona FC
                        </h2>

                        <div className="flex gap-2 mt-2">
                            <span className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700 font-medium">
                                Fútbol 7
                            </span>

                            <span className="px-3 py-1 text-xs rounded-full bg-purple-100 text-purple-700 font-medium">
                                Manager
                            </span>
                        </div>

                        <p className="text-sm text-gray-700 mt-2 truncate font-medium">
                            <span className="text-gray-400 font-normal">Rep: </span>
                            Juan Pérez (@juanperez)
                        </p>

                        {/* BOTONES */}
                        <div className="flex gap-3 mt-5">
                            <button className="flex-1 py-2 rounded-lg bg-main-blue text-white font-medium hover:opacity-90 transition">
                                ✏️ Editar
                            </button>

                            <button className="flex-1 py-2 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 transition">
                                🗑️ Eliminar
                            </button>
                        </div>
                    </div>
                </div>

                {/* CARD 2 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-100">
                    <div className="p-5">
                        <h2 className="text-xl font-bold text-main-blue">
                            Real Madrid
                        </h2>

                        <div className="flex gap-2 mt-2">
                            <span className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700 font-medium">
                                Fútbol 11
                            </span>

                            <span className="px-3 py-1 text-xs rounded-full bg-purple-100 text-purple-700 font-medium">
                                Manager
                            </span>
                        </div>

                        <p className="text-sm text-gray-700 mt-2 truncate font-medium">
                            <span className="text-gray-400 font-normal">Rep: </span>
                            Carlos Ruiz (@carlos)
                        </p>

                        <div className="flex gap-3 mt-5">
                            <button className="flex-1 py-2 rounded-lg bg-main-blue text-white font-medium">
                                ✏️ Editar
                            </button>

                            <button className="flex-1 py-2 rounded-lg bg-red-600 text-white font-medium">
                                🗑️ Eliminar
                            </button>
                        </div>
                    </div>
                </div>

            </div>

            {/* MODAL (siempre visible en UI pura) */}
            {/* <TeamModal /> */}
        </div>
    );
};