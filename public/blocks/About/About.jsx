const AboutContainer = React.createClass({
    componentWillMount: function () {
        if (isNode) {
            title = "О компании СушиШоп"
        }

        store.dispatch({
            type: 'GET_COMPANY'
        })
    },
    render: function () {
        let data = this.props.company

        if (Object.keys(data).length === 0) return <div></div>

        return (
            <div className="about">
                <div className="about-header">
                    <div className="about-header__wrapper">
                        <div className="about-header__logo">{Icon.logoIcon}</div>
                        <h1 className="about-header__title">
                            Азиатская кухня.<br />
                            Европейский подход
                        </h1>
                    </div>
                    <div className="about-header__clr"></div>
                </div>
                <div className="about-tradition">
                    <div className="about-tradition__wrapper">
                        <div className="about-tradition-story">
                            <h2 className="about-tradition-story__title">Традиции в&nbsp;формате TakeAway</h2>
                            <div className="about-tradition-story__descr">
                                <p>Мы&nbsp;готовим и&nbsp;продаем традиционную японскую и&nbsp;китайскую еду. Работаем в&nbsp;формате takeaway (возьми с&nbsp;собой). Вы&nbsp;получаете свой заказ по&nbsp;системе трех &laquo;З&raquo;&nbsp;&mdash; заказал, зашел, забрал. Время ожидания вашего заказа в&nbsp;пределах 20&nbsp;минут.</p>
                            </div>
                            <div className="about-tradition-open">
                                <div className="about-tradition-open__year">{data.growth[0].year} г.</div>
                                <div className="about-tradition-open__descr">Год&nbsp;открытия первого магазина нашей дружной сети</div>
                            </div>
                        </div>
                        <div className="about-growth">
                            <div className="about-growth__list">
                                {data.growth.map((item) => {
                                    return (
                                        <div className="about-growth-item" style={{ width: item.diameter / 820 * 100+"%" }}>
                                            <div className="about-growth-item__circle"></div>
                                            <div className="about-growth-item__count">{item.count}</div>
                                            <div className="about-growth-item__year">{item.year}</div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="about-growth__caption">Рост сети магазинов 2011&thinsp;&ndash;&thinsp;2016&ndash;гг.</div>
                        </div>
                    </div>
                </div>
                <div className="about-experiment">
                    <div className="about-experiment__wrapper">
                        <h2 className="about-experiment__title">Здоровая любовь к&nbsp;классике и&nbsp;экспериментам</h2>
                        <div className="about-experiment__descr">
                            <p>Основа нашей кухни&nbsp;&mdash; рыба, богатая полезными веществами, и&nbsp;рис&nbsp;&mdash; древнейшая крупяная культура на&nbsp;Земле. Поэтому наши блюда&nbsp;&mdash; это&nbsp;здоровая пища и&nbsp;полезная альтернатива fast&nbsp;food. В&nbsp;нашем классическом меню есть популярные «Филадельфия» и&nbsp;«Калифорния», традиционные суши, супы и&nbsp;лапша в&nbsp;коробочках. Наше экспериментальное меню&nbsp;&mdash; это&nbsp;сезонные предложения, уникальные фаст-роллы, комбинированные наборы и&nbsp;даже пицца!</p>
                        </div>
                        <div className="about-experiment-recipes">
                            <div className="about-experiment-recipes__count">{data.own_recipes}%</div>
                            <div className="about-experiment-recipes__descr">позиций меню приготовлены по&nbsp;фирменным рецептам компании</div>
                        </div>
                    </div>
                </div>
                <div className="about-job">
                    <div className="about-job__wrapper">
                        <h2 className="about-job__title">Работайте вместе с&nbsp;нами</h2>
                        <div className="about-job__descr">
                            <p>Мы ждем в&nbsp;команду ответственных, внимательных и&nbsp;трудоспособных людей. Вы&nbsp;гарантированно получаете стабильный и&nbsp;конкурентный доход, возможность работать рядом с&nbsp;домом, удобный график, бесплатное питание и&nbsp;стажировки. Ежемесячно мы&nbsp;выбираем и&nbsp;награждаем лучших сотрудников. 472&nbsp;человека присоединились к&nbsp;нам в&nbsp;этом месяце.</p>
                        </div>
                        <div className="about-job-people">
                            <div className="about-job-people__count">{data.joined_staff_month}</div>
                            <div className="about-job-people__descr">человека в&nbsp;этом месяце стали нашими сотрудниками</div>
                        </div>
                        <a href="" className="button button_border button_medium about-job__button">Присоединится к&nbsp;команде</a>
                    </div>
                </div>
                <div className="about-open">
                    <div className="about-open__wrapper">
                        <h2 className="about-open__title">Откройте свой «СушиШоп»</h2>
                        <div className="about-open__descr">
                            <p>Станьте владельцем успешного бизнеса с&nbsp;инвестициями от&nbsp;1&nbsp;300&nbsp;000&nbsp;рублей и&nbsp;средней окупаемостью 6&nbsp;месяцев. Станьте владельцем и&nbsp;средней окупаемостью 6&nbsp;месяцев.</p>
                        </div>
                        <div className="about-open-summary">
                            <div className="about-open-summary__item">
                                <span>{(data.initial_investment / 1000000 + '').replace('.', ',')} млн. ₽</span>
                                первоначальные<br /> инвестиции
                            </div>
                            <div className="about-open-summary__item about-open-summary__item_short">
                                <span>{data.average_return} мес<font>яцев</font></span>
                                средняя<br /> окупаемость
                            </div>
                            <div className="about-open-summary__item">
                                <span>{data.successful_franchisors}</span>
                                успешных<br /> франчайзи
                            </div>
                        </div>
                        <a href="//www.sushishop-fr.ru/" className="button button_fill button_medium about-open__button" target="_blank">Открыть СушиШоп</a>
                    </div>
                    <div className="about-open__clr"></div>
                </div>
            </div>
        )
    }
});



const mapStateToProps = function(store) {
    return {
        company: store.company
    }
};


module.exports = connect(mapStateToProps)(AboutContainer);