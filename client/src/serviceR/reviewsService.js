const baseUrl = 'http://localhost:3030/jsonstore/reviews';

export const getAll = async (doctorId) => {
    const query = new URLSearchParams({
        where: `doctorId="${doctorId}"`
    });

    const response = await fetch(baseUrl);
    const result = await response.json()

    const data = Object.values(result).filter(items => items.doctorId === doctorId);

    return data;
};

export const getOne = async (userId) => {
    const response = await fetch(`${baseUrl}/${userId}`);
    const result = await response.json();

    return result;
};

export const create = async (data) => {
    const body = {
        rating: data.rating,
        doctorId: data.doctorId,
        id: data.id,
        text: data.text,
        review: data.review,
        username: data.username,
        photo: data.photo,
        reviewtext: data.reviewtext,
        date: new Date().toISOString(),
    };

    const response = await fetch(baseUrl, {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })

    const result = await response.json();
    console.log(result);

    return result;
};

export const remove = async (userId) => {
    const response = await fetch(`${baseUrl}/${userId}`, {
        method: 'DELETE'
    });

    const result = await response.json();

    return result;
};