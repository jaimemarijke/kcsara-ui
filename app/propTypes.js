import PropTypes from 'prop-types';


export const missionProp = PropTypes.shape({
    demNumber: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    title: PropTypes.string.isRequired,
    hours: PropTypes.number.isRequired,
    miles: PropTypes.number.isRequired,
});
