import React from 'react';
var createReactClass = require('create-react-class');
var NoneSelected = createReactClass({
  render: function() {
    return (
      <div className="none-selected alert alert-warning" role="alert">
        <span>No {this.props.text} selected.</span>
      </div>
    );
  }
});
export default NoneSelected;
  
  
