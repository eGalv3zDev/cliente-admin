export const Reservations = () => {
    const reservations = [
        {
            _id: "1",
            fieldId: { fieldName: "Cancha Central" },
            userId: "usuario123",
            date: "12/04/2026",
            time: "10:00 - 11:00",
            status: "PENDING",
        },
        {
            _id: "2",
            fieldId: { fieldName: "Cancha Norte" },
            userId: "usuario456",
            date: "13/04/2026",
            time: "14:00 - 15:00",
            status: "CONFIRMED",
        },
    ];

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
                {reservations.map((reservation) => {
                    const isConfirmed = reservation.status === "CONFIRMED";

                    return (
                        <div
                            key={reservation._id}
                            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:scale-[1.02]"
                        >
                            <div className="p-5">
                                {/* TITLE */}
                                <h2 className="text-lg font-bold text-gray-800">
                                    {reservation.fieldId.fieldName}
                                </h2>

                                <p className="text-sm text-gray-400 truncate">
                                    Usuario: {reservation.userId}
                                </p>

                                {/* BADGES */}
                                <div className="flex gap-2 mt-3 flex-wrap">
                                    <span className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700 font-medium">
                                        {reservation.date}
                                    </span>

                                    <span className="px-3 py-1 text-xs rounded-full bg-purple-100 text-purple-700 font-medium">
                                        {reservation.time}
                                    </span>

                                    <span
                                        className={`px-3 py-1 text-xs rounded-full font-medium ${isConfirmed
                                                ? "bg-green-100 text-green-700"
                                                : "bg-yellow-100 text-yellow-700"
                                            }`}
                                    >
                                        {reservation.status}
                                    </span>
                                </div>

                                {/* ACTION */}
                                <div className="mt-5">
                                    <button
                                        disabled={isConfirmed}
                                        className={`w-full py-2 rounded-lg text-white font-medium transition ${isConfirmed
                                                ? "bg-gray-400 cursor-not-allowed"
                                                : "bg-main-blue hover:opacity-90"
                                            }`}
                                    >
                                        {isConfirmed ? "✔ Confirmada" : "✔ Confirmar"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* EMPTY STATE */}
            {reservations.length === 0 && (
                <div className="text-center text-gray-500 mt-10">
                    No hay reservaciones registradas
                </div>
            )}
        </div>
    );
};