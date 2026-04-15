import { Spinner } from "../../auth/components/Spinner.jsx";

export const Reservations = () => {
    const loading = false;

    if (loading) return <Spinner />;

    return (
        <div className="p-4">
            {/* HEADER */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-main-blue">
                    Gestión de Reservaciones
                </h1>
                <p className="text-gray-500 text-sm">
                    Administra y confirma las reservaciones pendientes
                </p>
            </div>

            {/* GRID */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

                {/* CARD */}
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:scale-[1.02]">
                    <div className="p-5">
                        {/* TITLE */}
                        <h2 className="text-lg font-bold text-gray-800">
                            Cancha Central
                        </h2>

                        <p className="text-sm text-gray-400 truncate">
                            Usuario: usuario123
                        </p>

                        {/* BADGES */}
                        <div className="flex gap-2 mt-3 flex-wrap">
                            <span className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700 font-medium">
                                12/04/2026
                            </span>

                            <span className="px-3 py-1 text-xs rounded-full bg-purple-100 text-purple-700 font-medium">
                                10:00 - 11:00
                            </span>

                            <span className="px-3 py-1 text-xs rounded-full font-medium bg-yellow-100 text-yellow-700">
                                PENDING
                            </span>
                        </div>

                        {/* ACTION */}
                        <div className="mt-5">
                            <button className="w-full py-2 rounded-lg text-white font-medium transition bg-main-blue hover:opacity-90">
                                ✔ Confirmar
                            </button>
                        </div>
                    </div>
                </div>

                {/* CARD CONFIRMADA */}
                <div className="bg-white rounded-xl shadow-md border border-gray-100">
                    <div className="p-5">
                        <h2 className="text-lg font-bold text-gray-800">
                            Cancha Norte
                        </h2>

                        <p className="text-sm text-gray-400 truncate">
                            Usuario: usuario456
                        </p>

                        <div className="flex gap-2 mt-3 flex-wrap">
                            <span className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700 font-medium">
                                13/04/2026
                            </span>

                            <span className="px-3 py-1 text-xs rounded-full bg-purple-100 text-purple-700 font-medium">
                                15:00 - 16:00
                            </span>

                            <span className="px-3 py-1 text-xs rounded-full font-medium bg-green-100 text-green-700">
                                CONFIRMED
                            </span>
                        </div>

                        <div className="mt-5">
                            <button className="w-full py-2 rounded-lg text-white font-medium bg-gray-400 cursor-not-allowed">
                                ✔ Confirmada
                            </button>
                        </div>
                    </div>
                </div>

            </div>

            {/* EMPTY STATE */}
            <div className="text-center text-gray-500 mt-10">
                No hay reservaciones registradas
            </div>
        </div>
    );
};