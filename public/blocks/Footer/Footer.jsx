module.exports = React.createClass({
    render: function() {
        let year = new Date().getFullYear();
        if (year != 2015) year = 2015+' – '+year;
        return (
            <div className="footer">
                <div className="footer__about">{year}&nbsp;г. Сеть магазинов Суши&nbsp;Шоп</div>
                <div className="footer__social">
                    <a href="//vk.com/sushishop" className="footer-social footer-social_vk">{Icon.vk}</a>
                    <a href="//www.fb.com/shopsushi" className="footer-social footer-social_fb">{Icon.fb}</a>
                    <a href="//www.instagr.am/sushi_shop" className="footer-social footer-social_insta">{Icon.insta}</a>
                </div>
                <div className="footer__franchise">
                    <a href="#">Открыть свой СушиШоп</a>
                </div>
                <div className="footer__endy">
                    Приготовлено <a href="//www.endy.pro">в&nbsp;ENDY</a>
                </div>
            </div>
        )
    }
});