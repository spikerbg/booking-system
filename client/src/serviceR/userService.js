const baseUrl = 'http://localhost:3030/jsonstore/users';

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
const token = localStorage.getItem('accessToken')

export const create = async (data) => {
    const body = {
        fullname: data.fullname,
        email: data.email,
        password: data.password,
        imageUrl: data.imageUrl,
        phoneNumber: data.phoneNumber,
        role: data.role,
        gender:data.gender,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    };

    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization' : token,
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