export const UserComboBox = ({ value, error, disabled, users = [] }) => {
    const selectedUser = users.find((u) => u.id === value);

    return (
        <div className="relative">
            <label className="text-sm font-semibold text-gray-700 mb-1 block">
                Representante (Manager)
            </label>

            {/* INPUT */}
            <div
                className={`flex items-center w-full px-3 py-2 rounded-lg border-2 shadow-sm transition
          ${disabled
                        ? "bg-gray-200 border-gray-200 text-gray-500"
                        : "border-[var(--main-blue)] bg-gray-50"}
          ${error ? "border-red-500" : ""}
        `}
            >
                <div className="flex-1 truncate">
                    {selectedUser ? (
                        <span className="text-gray-900">
                            {selectedUser.name} {selectedUser.surname} (
                            {selectedUser.username})
                        </span>
                    ) : (
                        <span className="text-gray-400">
                            Seleccionar representante...
                        </span>
                    )}
                </div>

                {!disabled && (
                    <span className="text-gray-400 ml-2">⌄</span>
                )}
            </div>

            {/* DROPDOWN (SIEMPRE VISIBLE SOLO DISEÑO) */}
            <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-xl shadow-2xl max-h-60 flex flex-col overflow-hidden">

                {/* SEARCH */}
                <div className="p-2 border-b bg-gray-50 flex items-center gap-2">
                    <span className="text-gray-400 text-sm">🔍</span>
                    <input
                        type="text"
                        className="bg-transparent border-none focus:ring-0 text-sm w-full p-1 outline-none"
                        placeholder="Buscar por nombre o username..."
                    />
                </div>

                {/* LIST */}
                <div className="overflow-y-auto py-1">
                    {users.length > 0 ? (
                        users.map((user) => (
                            <div
                                key={user.id}
                                className="flex items-center justify-between px-4 py-2.5 cursor-pointer text-sm text-gray-700 hover:bg-gray-100"
                            >
                                <div className="flex flex-col truncate mr-2">
                                    <span className="truncate">
                                        {user.name} {user.surname}
                                    </span>
                                    <span className="text-xs text-gray-500 truncate">
                                        @{user.username}
                                    </span>
                                </div>

                                {value === user.id && (
                                    <span className="text-[var(--main-blue)] text-sm">✔</span>
                                )}
                            </div>
                        ))
                    ) : (
                        <div className="p-4 text-center text-sm text-gray-500">
                            No hay usuarios
                        </div>
                    )}
                </div>
            </div>

            {/* ERROR */}
            {error && (
                <p className="text-red-600 text-xs mt-1">
                    {error.message}
                </p>
            )}
        </div>
    );
};