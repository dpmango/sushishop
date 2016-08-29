const LoginContainer = React.createClass({
    submit: function () {
        console.dir(this.refs)
        console.log(this.refs.phone.value)
        console.log(this.refs.password.value)
    },
    render: function() {
        return (
            <div className="login">
                <div className="login__title">Вход в&nbsp;личный кабинет</div>
                <div className="login__descr">Личный кабинет и&nbsp;накопительную скидку можно получить после первого заказа</div>
                <div className="login__fields">
                    <input type="tel" placeholder="Телефон" ref="phone"/>
                    <input type="password" placeholder="Пароль" ref="password"/>
                </div>
                <div className="login__forgot">Забыли пароль?</div>
                <div className="button login__button" onClick={this.submit}>Войти</div>
            </div>
        )
    }
})

const mapStateToProps = function(store) {
    return {
    }
};


module.exports = connect(mapStateToProps, null, null)(LoginContainer);