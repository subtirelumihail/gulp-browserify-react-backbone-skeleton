/** @jsx React.DOM */
var React   = require('react/addons');

var HelloMessage = React.createClass({  // Create a component, HelloMessage.
  render: function() {
    return <div>It yes {this.props.prop}</div>;  // Display a property.
  }
});

module.exports = (
  <HelloMessage prop="Works!" />
);


