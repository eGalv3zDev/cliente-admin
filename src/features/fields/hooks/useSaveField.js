import { useFieldsStore } from "../../users/store/adminStore";

export const useSaveField = () => {
  const createField = useFieldsStore((state) => state.createField);
  const updateField = useFieldsStore((state) => state.updateField);

  const saveField = async (data, fieldId = null) => {
    const normalizedFieldType = (data.fieldType || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    const fieldTypeMap = {
      CESPED_ARTIFICIAL: "SINTETICA",
      CESPED_NATURAL: "NATURAL",
      SINTETICA: "SINTETICA",
      NATURAL: "NATURAL",
      CONCRETO: "CONCRETO",
      ARENA: "ARENA",
    };

    const backendFieldType = fieldTypeMap[normalizedFieldType] || normalizedFieldType;

    const payload = {
      fieldName: (data.fieldName || "").trim(),
      fieldType: backendFieldType,
      capacity: data.capacity,
      pricePerHour: Number(data.pricePerHour),
      description: (data.description || "").trim(),
    };

    let body = payload;
    const hasPhoto = data.photo?.length > 0;

    if (hasPhoto) {
      const formData = new FormData();
      formData.append("fieldName", payload.fieldName);
      formData.append("fieldType", payload.fieldType);
      formData.append("capacity", payload.capacity);
      formData.append("pricePerHour", String(payload.pricePerHour));
      formData.append("description", payload.description);

      // El backend de este proyecto expone la URL en `photo`.
      formData.append("photo", data.photo[0]);
      body = formData;
    }

    if (fieldId) {
      await updateField(fieldId, body);
    } else {
      await createField(body);
    }
  };

  return { saveField };
};