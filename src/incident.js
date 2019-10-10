import React, { Component } from 'react';
import { Card } from 'grommet-controls';
import moment from 'moment'
import './incident.css';

export class Incident extends Component {
  render() {
    return (
      <Card className="card" margin="small" pad="small">
        <Card.CardTitle>{this.props.title} - {moment(this.props.timestamp).fromNow()}</Card.CardTitle>
        <Card.CardContent>{this.props.content}</Card.CardContent>
      </Card>
    );
  }
}
