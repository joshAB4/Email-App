import React from 'react';
var createReactClass = require('create-react-class');
var EmailListItem = createReactClass({
  render: function() {
    return (
      <tr onClick={this.props.on_click.bind(null)}>
        <td>{this.props.subject}</td>
        <td>{this.props.from}</td>
        <td>{this.props.to}</td>
      </tr>
    );
  }
});
export default EmailListItem;
 
