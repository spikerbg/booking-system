const baseUrl ='http://localhost:3030/jsonstore/booking'

export const getAll = async (doctorId) => {
    const query = new URLSearchParams({
        where: `doctorId="${doctorId}"`
    });

    const response = await fetch(baseUrl);
    const result = await response.json()

    const data = Object.values(result).filter(selectedDates => selectedDates.doctorId === doctorId);

    return data;
};