import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import styles from './MemberPage.scss';

const MemberPage = () => {
    const rows = [
        {
            id: 1,
            date: '2017-05-01',
            title: 'Test mission',
            hours: 4,
            miles: 50
        },
        {
            id: 2,
            date: '2017-04-01',
            title: 'Test mission',
            hours: 8,
            miles: 100
        },
    ].map(mission => (
        <TableRow key={mission.id}>
            <TableRowColumn>{mission.id}</TableRowColumn>
            <TableRowColumn>{mission.date}</TableRowColumn>
            <TableRowColumn>{mission.title}</TableRowColumn>
            <TableRowColumn>{mission.hours}</TableRowColumn>
            <TableRowColumn>{mission.miles}</TableRowColumn>
        </TableRow>
    ));

    return (
        <div className={styles.content}>
            <Card>
                <CardHeader title="Jaime McCandless" subtitle="DEM: SR00218" />
                <CardText>{'This is Jaime\'s page'}</CardText>
            </Card>
            <Card>
                <CardHeader title="Missions" subtitle="Soo many missions" />
                <Table>
                    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                        <TableRow>
                            <TableHeaderColumn>Mission</TableHeaderColumn>
                            <TableHeaderColumn>Date</TableHeaderColumn>
                            <TableHeaderColumn>Title</TableHeaderColumn>
                            <TableHeaderColumn>Hours</TableHeaderColumn>
                            <TableHeaderColumn>Miles</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false} showRowHover>
                        {rows}
                    </TableBody>
                </Table>
            </Card>
        </div>
    );
};

export default MemberPage;
