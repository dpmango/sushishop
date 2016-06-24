window.React = require('react');
window.ReactDOM = require('react-dom');
window.ReactDOM = require('react-dom');
window.Router = require('react-router').Router;
window.Route = require('react-router').Route;
window.Link = require('react-router').Link;
window.browserHistory = require('react-router').browserHistory;

window.Extends = require('./blocks/_extends/_extends.jsx');
window.Header = require('./blocks/header/header.jsx');
window.Nav = require('./blocks/nav/nav.jsx');


var About = React.createClass({
    render() {
        return (
            <div>
                about
            </div>
        );
    }
});
var Users = React.createClass({
    render() {
        return (
            <div>
                Users
            </div>
        );
    }
});
var User = React.createClass({
    render() {
        return (
            <div>
                User
            </div>
        );
    }
});
var NoMatch = React.createClass({
    render() {
        return (
            <div>
                NoMatch
            </div>
        );
    }
});


ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={Extends}>
            <Route path="menu" component={Menu}>
                <Route path=":categoryId" component={MenuCategory}>
                    <Route path=":productId" component={MenuProduct}/>
                </Route>
            </Route>
            <Route path="*" component={NoMatch}/>
        </Route>
    </Router>
), document.getElementById('extends'));



// ReactDOM.render(<Extends />, document.getElementById('extends'));