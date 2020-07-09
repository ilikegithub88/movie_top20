import React, { Component } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';

export default class Movie extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <Card style={{height:800}}>
                    <CardImg top width="100%" src={this.props.poster} alt={this.props.title} />
                    <CardBody>
                    <CardTitle style={{fontSize:17, fontWeight:"bold"}}>{this.props.title}</CardTitle>
                    <CardSubtitle style={{fontSize:15}}>Genre : {this.props.genres[0]} </CardSubtitle>
                    <CardSubtitle style={{fontSize:15}}>Rating : {this.props.rating}/10</CardSubtitle>
                    <br></br>
                    <CardText style={{fontSize:14}}>{this.props.summary.slice(0,180)}...</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
}
