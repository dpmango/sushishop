module.exports = React.createClass({
    render: function () {
        return <div className="form">
            <div className="form__item form__item_left">
                <label htmlFor="fio" className="form__label">ФИО</label>
                <div className="form__input">
                    <input type="text" name="fio" id="fio" />
                </div>
            </div>
            <div className="form__item form__item_right">
                <label htmlFor="vacancy" className="form__label">Вакансия</label>
                <div className="form__select">
                    <select name="vacancy" id="vacancy">
                        {this.props.vacancy.map((item) => {
                            return <option value={item.id} key={item.id}>{item.name}&nbsp;&mdash; {this.props.city.list[item.city_id].name}</option>
                        })}
                    </select>
                </div>
            </div>
            <div className="form__clear"></div>
            <div className="form__item form__item_left">
                <label htmlFor="phone" className="form__label">Телефон</label>
                <div className="form__input">
                    <input type="phone" name="phone" id="phone" />
                </div>
            </div>
            <div className="form__item form__item_right">
                <label htmlFor="experience" className="form__label">Имеющийся опыт работы <span>(не обязательно)</span></label>
                <div className="form__textarea">
                    <textarea name="experience" id="experience"></textarea>
                </div>
            </div>
            <div className="form__item form__item_left">
                <label htmlFor="email" className="form__label">Эл. почта</label>
                <div className="form__input">
                    <input type="email" name="email" id="email" />
                </div>
            </div>
            <div className="form__item form__item_left">
                <label htmlFor="birth" className="form__label">Дата рождения</label>
                <div className="form__input form__input_small">
                    <input type="date" name="birth" id="birth" />
                </div>
            </div>
            <div className="form__clear"></div>
        </div>
    }
})