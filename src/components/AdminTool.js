import React, { Component } from 'react';
import Gallery from './Gallery';
import Header from './Header';
import PropTypes from 'prop-types';

class AdminTool extends Component{

  constructor(props){
    super(props)
    this.store = this.props.store
  }

  getChildContext() {
    return {
      store: this.props.store
    }
  }

  componentDidMount() {
    this.unsubscribe = this.store.subscribe(
      () => this.forceUpdate()
    )
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render(){

    const { store } = this.props;

    return (
      <div className="main">
        {/* Component which get state in context */}
        <Header/>
        {/* Component which get state as attribute */}
        <Gallery store={store}/>
      </div>
    );
  }
}

AdminTool.propTypes = {
  store: PropTypes.object.isRequired
};

AdminTool.childContextTypes = {
  store: PropTypes.object.isRequired
};

export default AdminTool;
