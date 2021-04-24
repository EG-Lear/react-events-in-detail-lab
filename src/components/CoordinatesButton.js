import React, {Component} from 'react';

class CoordinatesButton extends Component {

    handleClick = (event) => {
        const coords = [event.clientX, event.clientY]
        //console.log(coords)
        //console.log(this.props)
        this.props.onReceiveCoordinates(coords)
    }

    render() {
        return (
            <button onClick={this.handleClick}>Coords</button>
        )
    }
}

export default CoordinatesButton