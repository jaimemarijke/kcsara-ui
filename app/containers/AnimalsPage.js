import React from 'react';

import AnimalsPage from '../components/AnimalsPage';
import { getAnimals } from '../api/animals';


class AnimalsPageContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            animals: [],
        };
    }

    componentWillMount() {
        getAnimals().then(
            (animals) => {
                const transformedAnimals = animals.map(animal => animal.attributes);
                this.setState({
                    animals: transformedAnimals
                });
            }
        );
    }

    render() {
        return <AnimalsPage animals={this.state.animals} />;
    }
}

export default AnimalsPageContainer;
