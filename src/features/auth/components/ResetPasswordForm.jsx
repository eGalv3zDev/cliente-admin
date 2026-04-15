export const ResetPasswordForm = () => {
    return (
        <form className="space-y-5">
            {/* Nueva contraseña */}
            <div>
                <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-800 mb-1.5"
                >
                    Nueva contraseña
                </label>

                <input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />

                <p className="text-red-600 text-xs mt-1">
                    La contraseña es obligatoria
                </p>
            </div>

            {/* Confirmar contraseña */}
            <div>
                <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-gray-800 mb-1.5"
                >
                    Confirmar contraseña
                </label>

                <input
                    id="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />

                <p className="text-red-600 text-xs mt-1">
                    Las contraseñas no coinciden
                </p>
            </div>

            {/* Error backend (mock) */}
            <p className="text-red-600 text-sm text-center">
                Error al actualizar la contraseña
            </p>

            {/* Botón */}
            <button
                type="button"
                className="w-full bg-main-blue hover:opacity-90 text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-200 text-sm"
            >
                Actualizar contraseña
            </button>

            {/* Volver al login */}
            <p className="text-center text-sm text-gray-600">
                ¿Recordaste tu contraseña?{" "}
                <span className="font-medium text-main-blue hover:opacity-80 transition-colors cursor-pointer">
                    Iniciar sesión
                </span>
            </p>
        </form>
    );
};