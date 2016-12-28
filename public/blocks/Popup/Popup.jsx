const PopupContainer = React.createClass({
    getInitialState: function () {
        return {
            check: true,
            valid: false,
            send: false
        }
    },
    check: function () {
        this.setState({
            check: !this.state.check
        }, () => {
            this.valid()
        })
    },
    valid: function () {
        let isValid = this.state.check

        this.elems.map((item) => {
            if (item.value.trim() == '') isValid = false
        })

        this.setState({
            valid: isValid
        })
    },
    send: function () {
        let data = {}
        this.refs.form.querySelectorAll('input, select, textarea').map((item) => {
            data[item.getAttribute('name')] = item.value
        })

        this.props.vacancy.filter((item) => {
            if (item.id == data.vac_id) {
                data.vac_city = this.props.city[item.city_id].name
                data.vac_name = item.name
            }
        })

        axios.get(URL_API+'form', {
            params: {
                name: this.props.type,
                value: JSON.stringify(data)
            }
        })

        this.setState({
            send: true
        })
    },
    componentDidMount: function() {
        this.elems = this.refs.form.querySelectorAll('input')
        this.elems.map((item) => {
            item.addEventListener('input', () => {
                this.valid()
            })
        })

        this.refs.submit.addEventListener('click', (e) => {
            this.send()
        })
    },
    close: function () {
        store.dispatch({
            type: 'POPUP_HIDE'
        })
    },
    render: function () {
        return <div className={"popup"+((this.props.popup) ? " popup_show" : "")}>
            <div className="popup__bg" onClick={this.close}></div>
            <div className="popup__window">
                <div className="popup__close" onClick={this.close}>{Icon.close}</div>
                <div className="popup__title">{(this.state.send) ? 'Спасибо за заявку' : this.props.title}</div>
                {(this.state.send) ?
                    <div className="popup__send">
                        В ближайшее время мы с вами свяжемся.
                    </div> :
                    <div className="popup__form" ref="form">
                        {this.props.content}
                    </div>
                }
                {(this.state.send) ? "" :
                    <div className="popup__footer">
                        <div className="popup__checked" onClick={this.check}>
                            <div
                                className={"popup__checkbox" + ((this.state.check) ? " popup__checkbox_active" : "")}>{Icon.checked}</div>
                            {this.props.checked}
                        </div>
                        <div
                            className={"popup__button button button_fill button_medium" + ((this.state.valid) ? "" : " button_disabled")}
                            ref="submit">Отправить
                        </div>
                    </div>
                }
            </div>

        </div>
    }
})



const mapStateToProps = function(store) {
    return {
        popup: store.popup
    }
}


module.exports = connect(mapStateToProps)(PopupContainer);