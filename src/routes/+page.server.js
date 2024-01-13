import { ENDPOINT } from '$env/static/private';

export const load = () => {
    const endpoint = ENDPOINT

    return {
        data: endpoint
    };
};