import React from 'react';
import PropTypes from 'prop-types';
import {
    Table,
    TableBody,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
    TableHeader
} from 'material-ui/Table';

import { animalProp } from '../propTypes';

const AnimalsTableRow = ({ animal }) => (
    <TableRow>
        <TableRowColumn>{animal.name}</TableRowColumn>
        <TableRowColumn>{animal.type}</TableRowColumn>
    </TableRow>
);

AnimalsTableRow.propTypes = {
    animal: animalProp.isRequired,
};

const AnimalsTable = ({ animals }) => {
    const animalRows = animals.map(
        animal => <AnimalsTableRow animal={animal} key={animal.name} />
    );

    return (
        <Table>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                <TableRow>
                    <TableHeaderColumn>Name</TableHeaderColumn>
                    <TableHeaderColumn>Type</TableHeaderColumn>
                </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false} showRowHover>
                {animalRows}
            </TableBody>
        </Table>
    );
};

AnimalsTable.propTypes = {
    animals: PropTypes.arrayOf(animalProp).isRequired,
};

export default AnimalsTable;
