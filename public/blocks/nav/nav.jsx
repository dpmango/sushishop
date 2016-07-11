module.exports = React.createClass({
    render: function() {
        return (
            <nav className="nav">
                <Link to="/catalog" className="nav__item" activeClassName="nav__item_active">Меню</Link>
                <Link to="/actions" className="nav__item" activeClassName="nav__item_active">Акции</Link>
                <Link to="/shops" className="nav__item" activeClassName="nav__item_active">Магазины</Link>
                <a href="//www.sushishop-fr.ru/" className="nav__item" target="_blank">Франшиза</a>
            </nav>
        );
    }
});