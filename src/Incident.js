import React, { Component } from 'react';
import { Card } from 'grommet-controls';
import './incident.css';

export class Incident extends Component {
  render() {
    return (
      <Card className="card" margin="small" pad="small">
        <Card.CardTitle>{this.props.title}</Card.CardTitle>
        <Card.CardContent>{this.props.content}</Card.CardContent>
      </Card>
    );
  }
}
