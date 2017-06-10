import React from 'react';

import AnimalsPage from '../components/AnimalsPage';
import { getAnimals } from '../api/animals';
import { flattenAttributesAndRelationships } from '../jsonApi';


class AnimalsPageContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            animals: [],
        };
    }

    componentWillMount() {
        getAnimals().then(
            (response) => {
                this.setState({
                    animals: response.data.map(flattenAttributesAndRelationships),
                });
            }
        );
    }

    render() {
        return <AnimalsPage animals={this.state.animals} />;
    }
}

export default AnimalsPageContainer;
