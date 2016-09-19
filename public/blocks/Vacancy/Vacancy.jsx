const VacancyContainer = React.createClass({
    getInitialState: function() {
        return {
            city: 0
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
    render: function() {
        return (
            <div className="vacancy">
                <div className="vacancy__wrapper">
                    <h2 className="vacancy__title">Вакансии</h2>
                    <div className="vacancy__select">
                        <select ref="select" value={this.state.city}>
                            <option value={0} disabled selected>Все города</option>
                            {Object.keys(this.city).map((item) => {
                                return <option value={item} key={item}>{this.props.city.list[item].name}</option>
                            })}
                        </select>
                    </div>
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