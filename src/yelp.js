import axios from 'axios';

export default axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 8eNlFQHwexxoChQMat5OyqbOrOd09rraGP8VvVqaxcBSHhHqmRf0svSMcyTESGj5CpSp-XJxqoaXqXS3k6cKXeYqjaZQ5XFaKVYx4x8j8iJPdctW5-XaM9lX-VfBX3Yx'
    }
});
