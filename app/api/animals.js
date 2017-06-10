import { get } from './request';


const stubAnimalsResponse = {
    data: [
        {
            type: 'animals',
            id: 1,
            attributes: {
                name: 'Lassie',
                type: 'Dog'
            },
        },
        {
            type: 'animals',
            id: 1,
            attributes: {
                name: 'Bessie',
                type: 'Cow'
            },
        },
    ]
};

export function getAnimals() {
    // return get('/api/animals');
    return Promise.resolve(stubAnimalsResponse);
}
