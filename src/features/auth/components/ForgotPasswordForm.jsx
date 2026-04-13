export const ForgotPasswordForm = ({ onSwitch }) => {
  return (
    <form className="space-y-5">
      
      {/* Campo Email */}
      <div>
        <label className="block text-sm font-medium text-gray-800 mb-1.5">
          Email
        </label>

        <input
          type="email"
          placeholder="correo@ejemplo.com"
          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Botón submit */}
      <button
        type="submit"
        className="w-full bg-main-blue text-white py-2.5 px-4 rounded-lg text-sm font-medium hover:opacity-90 transition"
      >
        Enviar correo
      </button>

      {/* Volver a login */}
      <p className="text-center text-sm text-gray-600">
        ¿Recordaste tu contraseña?{" "}
        <button
          type="button"
          onClick={onSwitch}
          className="text-main-blue font-medium hover:underline"
        >
          Iniciar sesión
        </button>
      </p>

    </form>
  );
};