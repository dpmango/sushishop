module.exports = React.createClass({
    getInitialState: function () {
        return {
            isOpenMenu: false
        }
    },
    openMenu: function () {
        this.setState({
            isOpenMenu: !this.state.isOpenMenu
        });
        if (this.state.isOpenMenu) {
            document.body.classList.remove('open-menu');
        } else {
            document.body.classList.add('open-menu');
        }
    },
    render: function() {
        return (
            <div className="header">
                <div className="header__inner">
                    <Link to="/" onlyActiveOnIndex={true} className="header__logo" activeClassName="header__logo_active">
                        {Icon.logoIcon}
                        {Icon.logoText}
                    </Link>
                    <div className="header__nav"><Nav /></div>
                    <Link to="/profile/" className="header__profile">
                        {Icon.profile}
                        <span>Мой СушиШоп</span>
                    </Link>
                </div>
                <div className="header__mobile">
                    <a href="#" className="header__burger" onClick={this.openMenu} />
                    <Link to="/" onlyActiveOnIndex={true} className="header__logo-mobile" activeClassName="header__logo-mobile_active">
                        {Icon.logoIcon}
                    </Link>
                    <a href="#" className="header__cart">
                        <span className="header__cart-price">1500&nbsp;₽</span>
                        <span className="header__cart-package">
                            {Icon.package}
                            <span className="header__cart-count">15</span>
                        </span>
                    </a>
                    <div className="header__bg" onClick={this.openMenu}></div>
                </div>
            </div>

        );
    }
});