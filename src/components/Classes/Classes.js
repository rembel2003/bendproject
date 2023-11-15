import React, { Component } from 'react';
import { connect } from 'react-redux';

import Zone from "./zone/zone";
import {fetchArias, fetchThings} from "./redux/actions";


class Classes extends Component {

    componentDidMount() {
        this.props.fetchArias();
        this.props.fetchThings();
    }

    render() {
        const { arias, things } = this.props;

        const ThingsInArias = arias.map(aria => {
            const itemsInThisZone = things.filter(item => item.areaId === aria.areaId);
            return { ...aria, items: itemsInThisZone };
        });

        const Zones = ThingsInArias.map(zone => (
            <Zone key={zone.id} name={zone.name} cells={zone.items} key={zone.id}/>
        ));

        return (
            <div>
                {Zones}
                <h1 className="name">Classes</h1>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    arias: state.arias,
    things: state.things,
});

export default connect(mapStateToProps, { fetchArias, fetchThings })(Classes);
