import { toast } from "react-hot-toast";
import { React } from "react";

export function showConfirmToast({title, message, onConfirm}){

    toast.custom((t) => (
        <div className="bg-white p-6 rounded-xl w-96 text-center shadow-lg border border-gray-200">
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="mb-4">{message}</p>

            <div className="flex justify-center gap-4 mt-4">
            
            <button
                className="px-5 py-2 rounded-lg bg-gray-200 text-gray-700 font-medium hover:bg-gray-300 transition"
                onClick={()=>{toast.dismiss(t.id)}}
            >
                Cancelar
            </button>

            <button
                className="px-5 py-2 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 transition"
                onClick={()=>{
                    onConfirm?.();
                    toast.dismiss(t.id);
                }}
            >
                Confirmar
            </button>

            </div>
        </div>
    ));

}

