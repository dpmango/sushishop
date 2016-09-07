var isNode = typeof window === 'undefined';


const AppContainer = React.createClass({
    iam: function () {
        if (this.props.shops.sort.length === 0 || this.props.city.sort.lenght === 0) return
        if (this.props.iam.cityId === 0) {
            Object.keys(this.props.city.list).map((key) => {
                if (this.props.city.list[key].isChange === true) {
                    let cityId = key
                    store.dispatch({
                        type: 'SET_IAM_CITY',
                        cityId: parseInt(cityId)
                    })
                    if (this.props.iam.shopId === 0) {
                        store.dispatch({
                            type: 'SET_IAM_SHOP',
                            shopId: parseInt(this.props.shops.city[cityId][0])
                        })
                        console.log(parseInt(this.props.shops.city[cityId][0]))
                    }
                }
            })
        }
    },
    componentWillMount: function() {
        store.dispatch({
            type: 'GET_IAM'
        });
        store.dispatch({
            type: 'GET_CITY'
        })
        store.dispatch({
            type: 'GET_SHOPS'
        })
        store.dispatch({
            type: 'GET_CART'
        })
        this.iam()
    },
    componentDidMount: function() {
        this.transitionShadow = new Transition({
            el: this.refs.shadow,
            className: 'shadow',
            speedShow: 200,
            speedHide: 400
        })
    },
    mainPagerIgnoreList: new Set([
        '/shops'
    ]),
    mainJournal: function () {
        let url = (isNode) ? locationURL : this.props.location.pathname
        return (url == '/') ? <MainJournal /> : ''
    },
    mainPager: function () {
        let url = (isNode) ? locationURL : this.props.location.pathname
        return (!this.mainPagerIgnoreList.has(url)) ? <Pager /> : ''
    },
    // mainPager: function () {
    //     return <Pager />
    //     // return 'test'
    // },
    hideShadow: function () {
        this.props.shadow.callback()
        store.dispatch({
            type: 'SHADOW_HIDE'
        })
    },
    componentDidUpdate: function(prevProps) {
        if (this.props.location.pathname != prevProps.location.pathname) {
            Scroll.scrollTo(0, {
                duration: 500,
                delay: 0,
                smooth: true
            })
        }


        if (prevProps.shadow.name != this.props.shadow.name) {
            if (this.props.shadow.name == '') {
                this.transitionShadow.hide();
            } else {
                this.transitionShadow.show()
            }
        }
        this.iam()
    },
    render: function() {
        return (
            <div>
                {(this.props.iam.cityId === 0 || this.props.iam.shopId === 0) ? '' : <Header /> }
                <div className="content">
                    <div className="content__inner">
                        {this.props.children}
                        {this.mainPager()}
                        {this.mainJournal()}
                        <Footer />
                    </div>
                </div>
                <div className="shadow shadow_hided" style={{ zIndex: this.props.shadow.zIndex }} onClick={this.hideShadow} ref="shadow"></div>
                {(this.props.product.active) ? <Product /> : ''}
            </div>
        )
    }

});


const mapStateToProps = function(store) {
    return {
        shadow: store.shadow,
        iam: store.iam,
        city: store.city,
        shops: store.shops,
        product: store.product
    }
};


module.exports = connect(mapStateToProps)(AppContainer)