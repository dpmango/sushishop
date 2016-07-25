const AppContainer = React.createClass({
    componentWillMount: function() {
        store.dispatch({
            type: 'GET_IAM'
        });
        store.dispatch({
            type: 'GET_CITY'
        });
        store.dispatch({
            type: 'GET_SHOPS'
        });
    },
    mainPagerIgnoreList: new Set([
        '/shops'
    ]),
    mainJournal: function () {
        return (this.props.location.pathname == '/') ? <MainJournal /> : '';
    },
    mainPager: function () {
        return (!this.mainPagerIgnoreList.has(this.props.location.pathname)) ? <Pager /> : '';
    },
    hideShadow: function () {
        store.dispatch({
            type: 'SHADOW_HIDE'
        });
    },
    componentDidUpdate: function(prevProps) {
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
    },
    render: function() {
        return (
            <div>
                <Header />
                <div className="content">
                    <div className="content__inner">
                        {this.props.children}
                        {this.mainPager()}
                        {this.mainJournal()}
                        <Footer />
                    </div>
                </div>
                <div className="shadow shadow_hided" style={{ zIndex: this.props.shadow.zIndex }} onClick={this.hideShadow} ref="shadow"></div>
            </div>
        );
    }

});


const mapStateToProps = function(store) {
    return {
        shadow: store.shadow
    }
};


module.exports = connect(mapStateToProps)(AppContainer);