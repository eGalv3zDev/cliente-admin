export const LoginForm = () => {
    return (
        <form className="space-y-5">
            <div>
                <label htmlFor="block text-sm medium 
                text-gray-800 mb-1.5">
                    Email o Usuario
                </label>

                <input className="w-full px-3 py-2 text-sm
                border border-gray-300 rounded-lg
                focus:ring-2 focus:ring-blue-500"></input>
            </div>

            <div>
                <label className="block text-sm font-medium
                text-gray-700 mb-1.5">
                    Contraseña
                </label>
                    
                <input className="w-full px-3 py-2 text-sm
                border border-gray-300 rounded-lg
                focus:ring-2 focus:ring-blue-500"></input>
            </div>

            <button className="w-full bg-main-blue
            hover:opacity-90 text-white font-medium py-2.5
            px-4 rounded-lg transition-colors duration-200
            text-sm">
                Iniciar Sesión
            </button>
        </form>
    );
};

