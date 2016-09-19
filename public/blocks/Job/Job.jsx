const JobContainer = React.createClass({
    componentWillMount: function() {
        store.dispatch({
            type: 'SET_META',
            title: 'Работа в СушиШопе'
        })
    },
    render: function() {
        return (
            <div className="job">
                <div className="job-header">
                    <div className="job-header__wrappper">
                        <div className="job-header__logo">{Icon.logoIcon}</div>
                        <h1 className="job-header__title">Работа в СушиШопе</h1>
                    </div>
                    <div className="job-adv">
                        <div className="job-adv__item">
                            <div className="job-adv__icon job-adv__icon_purse">{Icon.purse}</div>
                            <h3 className="job-adv__title">Премии и бонусы</h3>
                            <div className="job-adv__descr">Каждый месяц мы&nbsp;проводим конкурсы, соревнования и&nbsp;аттестации, по&nbsp;результатам которых вручаем премии и&nbsp;подарки лучшим сотрудникам.</div>
                        </div>
                        <div className="job-adv__item">
                            <div className="job-adv__icon job-adv__icon_plate">{Icon.plate}</div>
                            <h3 className="job-adv__title">Бесплатное питание</h3>
                            <div className="job-adv__descr">Для всех сотрудников мы&nbsp;предоставляем бесплатные обеды, ужины, легкие полдники.</div>
                        </div>
                        <div className="job-adv__item">
                            <div className="job-adv__icon job-adv__icon_career">{Icon.career}</div>
                            <h3 className="job-adv__title">Премии и бонусы</h3>
                            <div className="job-adv__descr">Мы активно продвигаем по&nbsp;карьерной лестнице тех&nbsp;сотрудников, кто успешно развивается вместе с&nbsp;нами.</div>
                        </div>
                    </div>
                    <a href="" className="job-header__button button button_border button_medium">
                        Вакансии
                        <span><font>10</font></span>
                    </a>
                </div>
                <div className="job-closer">
                    <div className="job-closer__wrapper">
                        <h2 className="job-closer__title">Работа ближе чем кажется</h2>
                        <p>Мы ждем в команду ответственных, внимательных и трудоспособных людей. Мы предлагаем комфортные условия труда, обучение и развитие. Как далеко вы продвинетесь по карьерной лестнице – зависит только от вас. Мы предлагаем комфортные условия труда, обучение и развитие. Как далеко вы продвинетесь по карьерной лестнице – зависит только от вас.</p>
                        <ul>
                            <li>Работа рядом с домом</li>
                            <li>Зарплата от 25 000 рублей в месяц</li>
                            <li>Официальное трудоустройство</li>
                            <li>Удобный график</li>
                            <li>Бесплатное питание</li>
                        </ul>
                    </div>
                    <div className="job-closer__join">
                        <div className="button button_border button_medium">Вступить в команду</div>
                    </div>
                </div>
                <Vacancy />
            </div>
        )
    }
})


const mapStateToProps = function(store) {
    return {
        job: store.job
    }
}


module.exports = connect(mapStateToProps)(JobContainer);