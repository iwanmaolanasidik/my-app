import React, { Component, Fragment } from "react";

class LifecycleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }

  static getDerivedStateFromProps(props, state) {
    return null;
  }

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({
    //     count: 2,
    //   });
    // }, 3000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.group("shouldComponentUpdate");
    // console.log("nextProps: ", nextProps);
    console.log("nextState: ", nextState);
    console.log("this state: ", this.state);
    console.groupEnd();

    if (nextState.count > 4) {
      return false;
    }

    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {}

  componentWillUnmount() {}

  changeCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <Fragment>
        <div className="container-fluid">
          <p>
            <b>Life Cycle Component</b>
          </p>
          <hr />

          <button className="btn btn-primary" onClick={this.changeCount}>
            Count {this.state.count}
          </button>
        </div>
      </Fragment>
    );
  }
}

export default LifecycleComponent;
