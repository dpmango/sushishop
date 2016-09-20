const VacancyContainer = React.createClass({
    getInitialState: function() {
        return {
            city: 0,
            active: 0
        }
    },
    componentWillMount: function() {
        store.dispatch({
            type: "GET_VACANCY"
        })
        this.city = {}
        this.props.vacancy.map((item) => {
            this.city[item.city_id] = true
        })
    },
    open: function (id) {
        this.setState({
            active: (id === this.state.active) ? 0 : id
        })
    },
    cityChange: function () {
        this.setState({
            city: this.refs.select.value
        })
    },
    render: function() {
        if (this.props.vacancy.length === 0) return <div></div>
        return (
            <div className="vacancy">
                <div className="vacancy__wrapper">
                    <h2 className="vacancy__title">Вакансии</h2>
                    <div className="vacancy__select">
                        <select ref="select" value={this.state.city} onChange={this.cityChange}>
                            <option value={0}>Все города</option>
                            {Object.keys(this.city).map((item) => {
                                return <option value={item} key={item}>{this.props.city.list[item].name}</option>
                            })}
                        </select>
                        <i>{Icon.arrow_down_line}</i>
                    </div>
                </div>
                <div className="vacancy__list">
                    {this.props.vacancy.map((item) => {
                        return ((this.state.city == 0 || this.state.city == item.city_id) ? <div className={"vacancy__item"+((item.id === this.state.active) ? " vacancy__item_active" : "")} key={item.id}>
                            <div className="vacancy__head" onClick={this.open.bind(this, item.id)}>
                                <div className="vacancy__name">{item.name}</div>
                                <div className="vacancy__info">
                                    <div className="vacancy__city">{this.props.city.list[item.city_id].name}</div>
                                    <div className="vacancy__price">
                                        {(item.price) ? `от ${item.price} ₽` : ``}
                                        {(item.price_from && item.price_to && item.price_value) ? `${item.price_from} — ${item.price_to} ₽/${item.price_value}` : ``}
                                    </div>
                                </div>
                            </div>
                            <div className="vacancy__content">
                                <div className="vacancy__about">
                                    {(item.requirements) ? <div>
                                        <h4>Требования</h4>
                                        <ul>
                                            {item.requirements.map((li) => {
                                                return <li key={li}>{li}</li>
                                            })}
                                        </ul>
                                    </div> : ""}
                                    {(item.duties) ? <div>
                                        <h4>Обязанности</h4>
                                        <ul>
                                            {item.duties.map((li) => {
                                                return <li key={li}>{li}</li>
                                            })}
                                        </ul>
                                    </div> : ""}
                                    {(item.conditions) ? <div>
                                        <h4>Условия</h4>
                                        <ul>
                                            {item.requirements.map((li) => {
                                                return <li key={li}>{li}</li>
                                            })}
                                        </ul>
                                    </div> : ""}
                                </div>
                                <div className="vacancy-form">
                                    <div className="vacancy-form__wrapper">
                                        <div className="vacancy-form__title">Рекрутер:</div>
                                        <a href={"tel:"+item.recruiter.phone} className="vacancy-form__phone">{item.recruiter.phone}</a>
                                        <div className="vacancy-form__name">{item.recruiter.name}</div>
                                    </div>
                                    <div className="vacancy-form__submit button button_fill button_medium">Откликнуться</div>
                                </div>
                            </div>
                        </div> : "")
                    })}
                </div>
            </div>
        )
    }
})


const mapStateToProps = function(store) {
    return {
        vacancy: store.vacancy,
        city: store.city
    }
}


module.exports = connect(mapStateToProps)(VacancyContainer);