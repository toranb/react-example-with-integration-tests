var App = require('./app.jsx');
var Session = require('./session.jsx');
var ReactRouter = require('react-nested-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

module.exports = Router(
  <Route handler={App}>
    <Route name="session" path="session/:sessionId" handler={Session}/>
  </Route>
)
