import React, {Component} from 'react';
import "./cell.sass"
class Cell extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="cell">
                <div className="connected"></div>
                <h1>{this.props.sku}</h1>
                <p>{this.props.defaultSku}</p>
            </div>
        );
    }

}

export default Cell;