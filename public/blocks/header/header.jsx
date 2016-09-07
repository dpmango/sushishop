const HeaderContainer = React.createClass({
    getInitialState: function() {
        return {
            profile: false
        };
    },
    componentDidMount: function() {
        this.loginTransition = new Transition({
            el: this.refs.login,
            className: 'login',
            speedShow: 200,
            speedHide: 400
        })
    },

    toggleMenu: function (e) {
        store.dispatch({
            type: 'TOGGLE_MENU'
        })
        if (e.currentTarget.getAttribute('href') == '#') {
            e.preventDefault()
        }
    },
    hideMenu: function (e) {
        store.dispatch({
            type: 'HIDE_MENU'
        })
        if (e.currentTarget.getAttribute('href') == '#') {
            e.preventDefault()
        }
    },
    city: function () {
        let cityId = this.props.iam.cityId;
        return (cityId === 0) ? ' ': this.props.city[cityId].name
    },
    shop: function () {
        return (this.props.iam.shopId === 0) ? ' ': this.props.shops[this.props.iam.shopId].adres
    },
    componentWillUpdate: function() {
        return false
    },

    profile: function (e) {
        if (this.state.profile) {
            this.loginTransition.hide()
            this.setState({
                profile: false
            })
            store.dispatch({
                type: 'SHADOW_HIDE'
            })
        } else {
            this.loginTransition.show()
            this.setState({
                profile: true
            })
            this.refs.phone.focus()
            store.dispatch({
                type: 'SHADOW_SHOW',
                name: 'login',
                callback: () => {
                    this.loginTransition.hide()
                    this.setState({
                        profile: false
                    })
                }
            })
        }

        e.preventDefault()
    },

    submit: function (e) {
        let data = {
            phone: this.refs.phone.input.value,
            password: this.refs.password.value
        }
        console.log(data)
        e.preventDefault()
    },

    render: function() {
        return (
            <div className="header">
                <div className="header__inner">
                    <Link to="/" onClick={this.hideMenu} onlyActiveOnIndex={true} className="header__logo" activeClassName="header__logo_active">
                        {Icon.logoIcon}
                        {Icon.logoText}
                    </Link>
                    <div className="header__adres">
                        <div className="header-adres">
                            <div className="header-adres__block-adres">
                                <a href="#" className="header-adres__adres">
                                    <div className="header-adres__city">{this.city()}</div>
                                    <div className="header-adres__shop">
                                        {this.shop()}
                                        <div className="header-adres__pen">{Icon.pen}</div>
                                    </div>
                                </a>
                                <a href="tel:+71112006171" className="header-adres__phone">
                                    {Icon.phone}
                                </a>
                            </div>
                            <a href="#" className="header-adres__change button button_small button_border">Выбрать другой магазин</a>
                        </div>
                    </div>
                    <div className="header__nav"><Nav /></div>
                    <Link to="/profile/" onClick={this.profile} className="header__profile">
                        {Icon.profile}
                        <span>Мой СушиШоп</span>
                    </Link>
                    <a href="#" className="header__cart-mobile">
                        <div className="header-cart">
                            <div className="header-cart__count">
                                {Icon.package}
                                <span>15</span>
                            </div>
                            <div className="header-cart__name">Покупки</div>
                            <div className="header-cart__price">1500&nbsp;₽</div>
                        </div>
                    </a>
                </div>
                <div className="header__mobile">
                    <Link to="#" className="header__burger" onClick={this.toggleMenu} />
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
                    <div className="header__bg" onClick={this.toggleMenu}></div>
                </div>
                <form className="login" ref="login" onSubmit={this.submit}>
                    <div className="login__title">Вход в&nbsp;личный кабинет</div>
                    <div className="login__descr">Личный кабинет и&nbsp;накопительную скидку можно получить после первого заказа</div>
                    <div className="login__fields">
                        <InputMasked type="tel" mask="1 111 111-11-11" placeholder="Телефон" ref="phone" />
                        <input type="password" placeholder="Пароль" ref="password"/>
                    </div>
                    <a href="" className="login__forgot">Забыли пароль?</a>
                    <div className="button button_fill button_medium login__button" onClick={this.submit}>Войти</div>
                </form>
            </div>
        )
    }
});

const mapStateToProps = function(store) {
    return {
        iam: store.iam,
        cityStatus: store.city.status,
        city: store.city.list,
        shops: store.shops.list,
        catalog: store.catalog.list
    }
};


module.exports = connect(mapStateToProps, null, null, { pure: false })(HeaderContainer);