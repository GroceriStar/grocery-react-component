import React, { Component } from "react";

import shortid from "shortid";

//@TODO figure out and tell me if we're using this component or not

class DisplayList extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     data: []
  //   }
  // }

  // getData(){
  //   this.setState({data: this.props.data});
  // }
  //
  // componentDidMount() {
  //   this.getData();
  // }

  render() {
    return (
      <ul className="ingredient list short">
        {this.props.data.map(item => <li key={shortid.generate()}>{item}</li>)}
        {/*this.state.data.map(item => <li key={shortid.generate()}>{item}</li>)*/}
      </ul>
    );
  }
}

export default DisplayList;
