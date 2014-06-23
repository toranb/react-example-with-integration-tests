var React = require('react');
var ReactRouter = require('react-nested-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <ul>
          <li><Link to="session" sessionId="123" query={{showSpeaker: true}}>introduction to react</Link></li>
          <li><Link to="session" sessionId="456">protip: use ember.js</Link></li>
        </ul>
        {this.props.activeRoute}
      </div>
    );
  }
});
