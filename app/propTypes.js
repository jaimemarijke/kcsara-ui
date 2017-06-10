import PropTypes from 'prop-types';


export const missionProp = PropTypes.shape({
    demNumber: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    title: PropTypes.string.isRequired,
    hours: PropTypes.number.isRequired,
    miles: PropTypes.number.isRequired,
});

export const jsonRelationshipProp = PropTypes.shape({
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
});

export const animalProp = PropTypes.shape({
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    ownerRelationship: PropTypes.shape(jsonRelationshipProp),
});
