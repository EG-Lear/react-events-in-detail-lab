import React, {Component} from 'react';

class DelayedButton extends Component {
    handleClick = (event) => {
        event.persist()
        const coords = [event.clientX, event.clientY]
        setTimeout(this.props.onDelayedClick(coords), 10000)
    }

    render () {
        return (
            <button onClick={this.handleClick}>Delay</button>
        )
    }
}

export default DelayedButton