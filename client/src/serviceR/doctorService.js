const baseUrl = 'http://localhost:3030/data/doctors';
import * as reviewsService from "./reviewsService";
import * as request from '../utils/request'

export const getAll = async () => {
    const response = await fetch(baseUrl);
    const result = await response.json();

    const data = Object.values(result);

    return data;
};

export const getOne = async (userId) => {
    const response = await fetch(`${baseUrl}/${userId}`);
    const result = await response.json();
    // Fetch reviews for the specific doctor
    const reviews = await reviewsService.getAll(userId);

    // Calculate average and total rating
    const averageRating =
    reviews.reduce((sum, review) => sum + parseInt(review.rating, 0) ,0) / reviews.length;

    const totalRating = reviews.reduce((sum, review) => sum + parseInt(review.rating, 10), 0);


    // Include averageRating and totalRating in the result
    const doctorWithRating = {
      ...result,
      averageRating,
      totalRating,
    };

    return doctorWithRating;

};

export const create = async (data) => {
    const body = {
        name: data.name,
        email: data.email,
        specialty: data.specialty,
        imageUrl: data.imageUrl,
        photo: data.photo,
        date: data.date,
        totalPatients: data.totalPatients,
        hospital: data.hospital,
        education: data.education,
        short: data.short,
        about: data.about,
        avgRating: data.avgRating,
        totalRating: data.totalRating,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    };

    // Get the access token from local storage
    const token = localStorage.getItem('accessToken');

    // Set up the headers with the token if it exists
    const headers = {
        'Content-Type': 'application/json',
    };

    if (token) {
        headers['X-Authorization'] = token;
    }

    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body),
    });

    const result = await response.json();
    console.log(result);

    return result;
};

// export const remove = async (userId) => {
//     const response = await fetch(`${baseUrl}/${userId}`, {
//         method: 'DELETE'
//     });

//     const result = await response.json();

//     return result;
// };

export const edit = async (doctorId, data) => {
    const result = await request.put(`${baseUrl}/${doctorId}`, data);

    return result;
};

export const remove = async (id) => request.remove(`${baseUrl}/${id}`);