module.exports = React.createClass({
    render: function() {
        return (
            <div key={'main-banner-'+this.props.id} className="swiper-slide main-banner">
                <div className="main-banner__bg" style={{backgroundImage: 'url('+this.props.bgImage+')'}} />
                <div className="main-banner__product">
                    <img src={this.props.productImage} />
                </div>
                <div className="main-banner__info">
                    <div className="main-banner__category">{this.props.category}</div>
                    <div className="main-banner__label">
                        <img src={this.props.labelImage} />
                    </div>
                    <div className="main-banner__props">{this.props.count}&nbsp;{Decl(this.props.count, ['штука', 'штуки', 'штук'])}, {this.props.weight}&nbsp;г</div>
                    <div className="main-banner__part">{this.props.part}</div>
                </div>
                <div className="main-banner__price">
                    <div className="main-banner__price-old">{this.props.priceOld}{Icon.stroke}</div>
                    <div className="main-banner__price-now">{this.props.price}<span>&nbsp;₽</span></div>
                    <a href="#" className="main-banner__buy">В корзину</a>
                </div>
            </div>
        );
    }
});