
const API_URL = 'http://entropia.local/api';

const commonHeaders = {
    Accept: "application/josn",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
};

export const fetchMoviesList = async () => {
    const endpoint = `/movies`;
    const payload = {
        method: "GET",
        headers: { ...commonHeaders }
    };
    return handleRequest(endpoint, payload); 
}

export const fecthMovieById = async id => {
    const endpoint = `/movies/${id}`;
    const payload = {
        method: "GET",
        headers: { ...commonHeaders }
    };
    return handleRequest(endpoint, payload); 
};

export const fetchMovieCast = async id => {
    const endpoint = `/castcrew/${id}`;
    const payload = {
        method: "GET",
        headers: { ...commonHeaders }
    };
    return handleRequest(endpoint, payload); 
};

const handleRequest = (endpoint, payload) => {
    const requestUrl = `${API_URL}${endpoint}`;
    return fetch(requestUrl, payload).then(res => res.json());
};