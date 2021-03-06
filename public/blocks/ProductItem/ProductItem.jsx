var ProductItemContainer = React.createClass({
    render: function () {
        return (<Link to={this.props.link} className="product-item">
            <div className="product-item__name">{this.props.name}</div>
            <picture className="product-item__photo">
                <source media="(min-width: 800px)" srcSet={this.props.image_big}/>
                <source media="(min-width: 600px)" srcSet={this.props.image_medium}/>
                <img srcSet={this.props.image_small} alt=""/>
            </picture>
            <div className="product-item__descr" dangerouslySetInnerHTML={{ __html: this.props.part }} />
            <div className="product-item__footer">
                <div className="product-item__footer-wrapper">
                    {(this.props.weight) ? <div className="product-item__weight">{this.props.weight} г</div> : ""}
                    {(this.props.price) ? <div className="product-item__price">{this.props.price} ₽</div> : ""}
                </div>
                <div className="product-item__buy"></div>
            </div>
        </Link>)
    }
})


var mapStateToProps = function(store) {
    return {
        product: store.product,
        products: store.products
    }
}


module.exports = connect(mapStateToProps)(ProductItemContainer)