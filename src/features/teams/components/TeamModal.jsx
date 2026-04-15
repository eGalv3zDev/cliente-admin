export const TeamModal = () => {
    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 px-3 sm:px-4">
            {/* CONTENEDOR */}
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg md:max-w-2xl max-h-[90vh] flex flex-col overflow-hidden">

                {/* HEADER */}
                <div
                    className="p-4 sm:p-5 text-white sticky top-0 z-10"
                    style={{
                        background:
                            "linear-gradient(90deg, var(--main-blue) 0%, #1956a3 100%)",
                    }}
                >
                    <h2 className="text-xl sm:text-2xl font-bold">
                        Nuevo Equipo
                    </h2>
                    <p className="text-xs sm:text-sm opacity-80">
                        Completa la información del equipo
                    </p>
                </div>

                {/* FORM */}
                <div className="p-4 sm:p-6 space-y-5 overflow-y-auto">

                    {/* PREVIEW */}
                    <div className="flex justify-center">
                        <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-2xl bg-gray-100 border flex items-center justify-center overflow-hidden shadow-inner">
                            <span className="text-gray-400 text-xs sm:text-sm">
                                Sin imagen
                            </span>
                        </div>
                    </div>

                    {/* INPUTS */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        {/* Nombre */}
                        <div className="flex flex-col md:col-span-2">
                            <label className="text-sm font-semibold text-gray-700 mb-1">
                                Nombre del equipo
                            </label>
                            <input
                                className="w-full px-3 py-2 rounded-lg border-2 bg-gray-50 shadow-sm transition"
                                style={{ borderColor: "var(--main-blue)", outline: "none" }}
                                placeholder="Ej. Barcelona FC"
                            />
                            <p className="text-red-600 text-xs mt-1">
                                El nombre es obligatorio
                            </p>
                        </div>

                        {/* Manager (mock) */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold text-gray-700 mb-1">
                                Manager
                            </label>
                            <select
                                className="w-full px-3 py-2 rounded-lg border-2 bg-gray-50 shadow-sm transition"
                                style={{ borderColor: "var(--main-blue)", outline: "none" }}
                            >
                                <option>Seleccione un manager</option>
                                <option>Usuario 1</option>
                                <option>Usuario 2</option>
                            </select>
                        </div>

                        {/* Categoría */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold text-gray-700 mb-1">
                                Categoría
                            </label>
                            <select
                                className="w-full px-3 py-2 rounded-lg border-2 bg-gray-50 shadow-sm transition"
                                style={{ borderColor: "var(--main-blue)", outline: "none" }}
                            >
                                <option>Seleccione categoría</option>
                                <option>Fútbol 7</option>
                                <option>Fútbol 11</option>
                            </select>
                            <p className="text-red-600 text-xs mt-1">
                                La categoría es obligatoria
                            </p>
                        </div>

                        {/* Imagen */}
                        <div className="flex flex-col md:col-span-2">
                            <label className="text-sm font-semibold text-gray-700 mb-1">
                                Logo del equipo
                            </label>
                            <input
                                type="file"
                                className="w-full px-3 py-2 rounded-lg border-2 border-dashed bg-gray-50 transition cursor-pointer"
                                style={{ borderColor: "var(--main-blue)", outline: "none" }}
                                accept="image/*"
                            />
                        </div>
                    </div>

                    {/* BOTONES */}
                    <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3 pt-4 border-t">
                        <button
                            className="w-full sm:w-auto px-4 py-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition"
                        >
                            Cancelar
                        </button>

                        <button
                            className="w-full sm:w-auto px-5 py-2 rounded-lg text-white font-medium transition shadow"
                            style={{
                                background:
                                    "linear-gradient(90deg, var(--main-blue) 0%, #1956a3 100%)",
                                border: "none",
                            }}
                        >
                            Crear equipo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};