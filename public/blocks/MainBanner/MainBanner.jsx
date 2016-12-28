module.exports = React.createClass({
    link: function () {
        return <Link to={this.props.url} key={'main-banner-'+this.props.id} className="swiper-slide main-banner">
            <div className="main-banner__bg" style={{backgroundImage: 'url('+this.props.bgImage+')'}} />
            <div className="main-banner__product">
                <img src={this.props.productImage} />
            </div>
            <div className="main-banner__info">
                <div className="main-banner__category">{this.props.category}</div>
                <div className="main-banner__label">
                    <img src={this.props.labelImage} />
                </div>
                <div className="main-banner__props">
                    {this.props.count && this.props.count > 0 ? `${this.props.count} ${Decl(this.props.count, ['штука', 'штуки', 'штук'])}` : ''}{this.props.count && this.props.count > 0 && this.props.weight && this.props.weight ? ',' : '' }
                    {this.props.weight && this.props.weight > 0 ? `${this.props.weight} г` : ''}
                </div>
                <div className="main-banner__part" dangerouslySetInnerHTML={{ __html: this.props.part }} />
            </div>
        </Link>
    },
    block: function () {
        return <div key={'main-banner-'+this.props.id} className="swiper-slide main-banner main-banner_price">
            <div className="main-banner__bg" style={{backgroundImage: 'url('+this.props.bgImage+')'}} />
            <div className="main-banner__product">
                <img src={this.props.productImage} />
            </div>
            <div className="main-banner__info">
                <div className="main-banner__category">{this.props.category}</div>
                <div className="main-banner__label">
                    <img src={this.props.labelImage} />
                </div>
                <div className="main-banner__props">
                    {this.props.count && this.props.count > 0 ? `${this.props.count} ${Decl(this.props.count, ['штука', 'штуки', 'штук'])}` : ''}{this.props.count && this.props.count > 0 && this.props.weight && this.props.weight ? ',' : '' }
                    {this.props.weight && this.props.weight > 0 ? `${this.props.weight} г` : ''}
                </div>
                <div className="main-banner__part" dangerouslySetInnerHTML={{ __html: this.props.part }} />
            </div>
            <div className="main-banner__price">
                <div className="main-banner__price-old">{this.props.priceOld}{Icon.stroke}</div>
                <div className="main-banner__price-now">{this.props.price}<span>&nbsp;₽</span></div>
                <div className="main-banner__buy">В корзину</div>
            </div>
        </div>
    },
    render: function() {
        console.log(this.props.productId)
        return this.props.productId ? this.block() : this.link()
    }
});