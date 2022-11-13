import React, { Component } from "react";

class Person extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        console.log("here" + this.props);
        return (
            <div>
                <h3>Name: {this.props.name} and Age: {this.props.age}</h3>
                <h4 hidden={!(this.props.flag === 'true')}>Extra Info: {this.props.children}</h4>
            </div >
        )
    }
}
export default Person;
