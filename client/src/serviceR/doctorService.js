const baseUrl = 'http://localhost:3030/jsonstore/doctors';

export const getAll = async () => {
    const response = await fetch(baseUrl);
    const result = await response.json();

    const data = Object.values(result);

    return data;
};

export const getOne = async (userId) => {
    const response = await fetch(`${baseUrl}/${userId}`);
    const result = await response.json();

    return result;
};

export const create = async (data) => {
    const body = {
        name: data.name,
        email: data.email,
        specialty: data.specialty,
        imageUrl: data.imageUrl,
        photo: data.photo,
        date:data.date,
        totalPatients:data.totalPatients,
        hospital:data.hospital,
        education:data.education,
        short:data.short,
        about:data.about,
        avgRating:data.avgRating,
        totalRating:data.totalRating,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
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