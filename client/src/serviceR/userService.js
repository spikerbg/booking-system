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

export const edit = async (userId, data) => {
    const url = `${baseUrl}/${userId}`;

    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`Failed to edit user. Status: ${response.status}`);
        }

        const result = await response.json();
        return result; 
    } catch (error) {
        console.error('Error editing user:', error);
        throw error; 
    }
};