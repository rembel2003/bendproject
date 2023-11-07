import React, {Component} from 'react';
import Cell from "../cell/Cell";
import "../cell/cell.sass"
import "./cellParent.sass"
class CellParent extends Component {
    constructor(props) {
        super(props);
    }
     childrenCell = this.props.childrens.map(cell=>(<Cell sku={cell.sku} defaultSku={cell.defaultSku} joinedWith={cell.joinedWith}/>))
     colorGenerator=(childrenArray)=>{
        if(childrenArray.every(child=>child.status==="open") && this.props.status==="open")
            return "open"
        if(childrenArray.every(child=>child.status==="closed")  && this.props.status==="closed")
            return "closed"
        else
            return "partially-closed"
    }
    render() {
        return (
                <div className="cell-parent">
                    <div className="cell">
                        <div className={this.colorGenerator(this.props.childrens)}></div>
                        <h1>{this.props.sku}</h1>
                        <p>{this.props.defaultSku}</p>
                    </div>
                    <div className="child-div">
                        {this.childrenCell}
                    </div>
            </div>
        );
    }
}

export default CellParent;