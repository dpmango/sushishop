const NavContainer = React.createClass({
    actionItem: function (e) {
        store.dispatch({
            type: 'HIDE_MENU'
        });
    },
    render: function() {
        let categoryAltDeafult = (Object.keys(this.props.catalog).length > 0) ? this.props.catalog[Object.keys(this.props.catalog)[0]].alt : ''
        return (
            <nav className="nav">
                <Link to="/catalog/" className="nav__item" activeClassName="nav__item_active" onClick={this.actionItem}>Меню</Link>
                <Link to="/actions" className="nav__item" activeClassName="nav__item_active" onClick={this.actionItem}>Акции</Link>
                <Link to="/shops" className="nav__item" activeClassName="nav__item_active" onClick={this.actionItem}>Магазины</Link>
                <a href="//www.sushishop-fr.ru/" className="nav__item" target="_blank">Франшиза</a>
            </nav>
        );
    }
})

const mapStateToProps = function(store) {
    return {
        catalog: store.catalog.list
    }
};


module.exports = connect(mapStateToProps, null, null, { pure: false })(NavContainer);