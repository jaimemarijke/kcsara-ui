import { get } from './request';


const stubAnimalsResponse = {
    data: [
        {
            type: 'animals',
            id: 1,
            attributes: {
                name: 'Lassie',
                type: 'Dog',
                status: 'Active',
            },
            relationships: {
                owner: {
                    data: {
                        type: 'member',
                        id: 'jaime',
                    },
                },
            },
        },
        {
            type: 'animals',
            id: 1,
            attributes: {
                name: 'Bessie',
                type: 'Cow',
                status: 'Active',
            },
        },
    ]
};

export function getAnimals() {
    // return get('/api/animals');
    return Promise.resolve(stubAnimalsResponse);
}
