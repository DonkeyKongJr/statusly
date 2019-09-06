import React, { Component } from 'react';
import { Card } from 'grommet-controls';
import './Incident.css';

export class Incident extends Component {
  render() {
    return (
      <Card className="card" margin="small" pad="small">
        <Card.CardTitle>Incident</Card.CardTitle>
        <Card.CardContent>This incident is about</Card.CardContent>
      </Card>
    );
  }
}
