var isNode = typeof window === 'undefined';


const AppContainer = React.createClass({
    iam: function () {
        if (Object.keys(this.props.city.list).length > 0 && this.props.iam.cityId === 0) {
            Object.keys(this.props.city.list).map((key) => {
                if (this.props.city.list[key].isChange === true) {
                    store.dispatch({
                        type: 'SET_IAM_CITY',
                        cityId: parseInt(key)
                    })
                }
            })
        }
        if (Object.keys(this.props.shops.list).length > 0 && this.props.iam.shopId === 0) {
            Object.keys(this.props.shops.list).map((key) => {
                key = parseInt(key)
                if (this.props.shops.list[key].isChange === true) {
                    store.dispatch({
                        type: 'SET_IAM_SHOP',
                        shopId: parseInt(key)
                    })
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
    // hideShadow: function () {
    //     store.dispatch({
    //         type: 'SHADOW_HIDE'
    //     });
    // },
    componentDidUpdate: function(prevProps) {
        if (this.props.location.pathname != prevProps.location.pathname) {
            Scroll.scrollTo(0, {
                duration: 500,
                delay: 0,
                smooth: true
            })
        }


        this.transitionShadow = new Transition({
            el: this.refs.shadow,
            className: 'shadow',
            speedShow: 200,
            speedHide: 400
        });

        if (prevProps.shadow.name != this.props.shadow.name) {
            if (this.props.shadow.name == '') {
                this.transitionShadow.hide();
            } else {
                this.transitionShadow.show();
            }
        }
        this.iam()

        console.log(this.props.product.active)
    },
    render: function() {
        return (
            <div>
                <div className="content">
                    <div className="content__inner">
                        {(this.props.iam.cityId === 0 || this.props.iam.shopId === 0) ? '' : <Header /> }
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