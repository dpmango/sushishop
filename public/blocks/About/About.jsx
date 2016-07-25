const AboutContainer = React.createClass({
    render: function () {
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
                                <div className="about-tradition-open__year">2011 г.</div>
                                <div className="about-tradition-open__descr">Год&nbsp;открытия первого магазина нашей дружной сети</div>
                            </div>
                        </div>
                        <div className="about-growth">
                            <div className="about-growth__list">
                                <div className="about-growth-item" style={{ width: '0.6134969325%' }}>
                                    <div className="about-growth-item__circle"></div>
                                    <div className="about-growth-item__count">1</div>
                                    <div className="about-growth-item__year">2011</div>
                                </div>
                                <div className="about-growth-item" style={{ width: '2.4539877301%' }}>
                                    <div className="about-growth-item__circle"></div>
                                    <div className="about-growth-item__count">5</div>
                                    <div className="about-growth-item__year">2012</div>
                                </div>
                                <div className="about-growth-item" style={{ width: '4.9079754601%' }}>
                                    <div className="about-growth-item__circle"></div>
                                    <div className="about-growth-item__count">10</div>
                                    <div className="about-growth-item__year">2013</div>
                                </div>
                                <div className="about-growth-item" style={{ width: '7.36196319%' }}>
                                    <div className="about-growth-item__circle"></div>
                                    <div className="about-growth-item__count">30</div>
                                    <div className="about-growth-item__year">2014</div>
                                </div>
                                <div className="about-growth-item" style={{ width: '9.81595092%' }}>
                                    <div className="about-growth-item__circle"></div>
                                    <div className="about-growth-item__count">130</div>
                                    <div className="about-growth-item__year">2015</div>
                                </div>
                                <div className="about-growth-item" style={{ width: '12.2699386503%' }}>
                                    <div className="about-growth-item__circle"></div>
                                    <div className="about-growth-item__count">205</div>
                                    <div className="about-growth-item__year">2016</div>
                                </div>
                                <div className="about-growth-item about-growth-item_forecast" style={{ width: '14.7239263804%' }}>
                                    <div className="about-growth-item__circle"></div>
                                    <div className="about-growth-item__count">260</div>
                                    <div className="about-growth-item__year">2017</div>
                                </div>
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
                            <div className="about-experiment-recipes__count">80%</div>
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
                            <div className="about-job-people__count">472</div>
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
                                <span>1,3 млн. ₽</span>
                                первоначальные<br /> инвестиции
                            </div>
                            <div className="about-open-summary__item about-open-summary__item_short">
                                <span>6 мес<font>яцев</font></span>
                                средняя<br /> окупаемость
                            </div>
                            <div className="about-open-summary__item">
                                <span>200</span>
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
    }
};


module.exports = connect(mapStateToProps)(AboutContainer);