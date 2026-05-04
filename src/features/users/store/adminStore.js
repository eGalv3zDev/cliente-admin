import { create } from "zustand";
import {
  getFields as getFieldsRequest,
  createField as createFieldRequest,
  updateField as updateFieldRequest,
  deleteField as deleteFieldRequest,
  getAllReservations as getAllReservationsRequest,
  confirmReservation as confirmReservationRequest,
} from "../../../shared/api";

const getApiErrorMessage = (error, fallbackMessage) => {
  const data = error?.response?.data;

  if (typeof data?.message === "string" && data.message.trim()) {
    return data.message;
  }

  if (Array.isArray(data?.errors) && data.errors.length > 0) {
    const joined = data.errors
      .map((item) => item?.msg || item?.message || item?.path)
      .filter(Boolean)
      .join(", ");

    if (joined) return joined;
  }

  if (Array.isArray(data?.details) && data.details.length > 0) {
    const joined = data.details
      .map((item) => item?.message || item?.msg || item)
      .filter(Boolean)
      .join(", ");

    if (joined) return joined;
  }

  if (typeof data?.error === "string" && data.error.trim()) {
    return data.error;
  }

  if (Array.isArray(data?.error) && data.error.length > 0) {
    const joined = data.error
      .map((item) => item?.message || item?.msg || item?.field)
      .filter(Boolean)
      .join(", ");

    if (joined) return joined;
  }

  return fallbackMessage;
};
 
export const useFieldsStore = create((set, get) => ({
  fields: [],
  reservations: [],
  loading: false,
  error: null,
 
  getFields: async () => {
    try {
      set({ loading: true, error: null });
 
      const response = await getFieldsRequest();
 
      set({
        fields: response.data.data,
        loading: false,
      });
    } catch (error) {
      set({
        error: error.response?.data?.message || "Error al obtener canchas",
        loading: false,
      });
    }
  },
 
  createField: async (formData) => {
    try {
      set({ loading: true, error: null });
 
      const response = await createFieldRequest(formData);
 
      set({
        fields: [response.data.data, ...get().fields],
        loading: false,
      });
    } catch (error) {
      console.error("[createField] API error", {
        status: error?.response?.status,
        data: error?.response?.data,
      });
      if (error?.response?.data) {
        console.error(
          "[createField] API error JSON",
          JSON.stringify(error.response.data, null, 2),
        );
      }
      const message = getApiErrorMessage(error, "Error al crear campo");
      set({
        loading: false,
        error: message,
      });
      throw new Error(message);
    }
  },

  updateField: async (id, formData) => {
    try {
      set({ loading: true, error: null });

      const response = await updateFieldRequest(id, formData);
      const updatedField = response.data.data;

      set({
        fields: get().fields.map((field) =>
          field._id === id ? updatedField : field
        ),
        loading: false,
      });
    } catch (error) {
      console.error("[updateField] API error", {
        status: error?.response?.status,
        data: error?.response?.data,
      });
      if (error?.response?.data) {
        console.error(
          "[updateField] API error JSON",
          JSON.stringify(error.response.data, null, 2),
        );
      }
      const message = getApiErrorMessage(error, "Error al actualizar campo");
      set({
        loading: false,
        error: message,
      });
      throw new Error(message);
    }
  },

  deleteField: async (id) => {
    try {
      set({ loading: true, error: null });

      await deleteFieldRequest(id);

      set({
        fields: get().fields.filter((field) => field._id !== id),
        loading: false,
      });
    } catch (error) {
      const message = getApiErrorMessage(error, "Error al eliminar campo");
      set({
        loading: false,
        error: message,
      });
      throw new Error(message);
    }
  },
 
  getAllReservations: async () => {
    try {
      set({ loading: true, error: null });
      const response = await getAllReservationsRequest();
      set({
        reservations: response.data.data,
        loading: false,
      });
    } catch (error) {
      set({
        error:
          error.response?.data?.message || "Error al obtener reservaciones",
        loading: false,
      });
    }
  },
 
  confirmReservation: async (id) => {
    try {
      set({ loading: true, error: null });
      await confirmReservationRequest(id);
      // Refrescar lista después de confirmar
      await get().getAllReservations();
      set({ loading: false });
    } catch (error) {
      set({
        error:
          error.response?.data?.message || "Error al confirmar reservación",
        loading: false,
      });
    }
  },
}));