var isNode = typeof window === 'undefined';


const AppContainer = React.createClass({
    // componentWillMount: function() {
    //     store.dispatch({
    //         type: 'GET_IAM'
    //     });
    //     store.dispatch({
    //         type: 'GET_CITY'
    //     });
    //     store.dispatch({
    //         type: 'GET_SHOPS'
    //     });
    // },
    // mainPagerIgnoreList: new Set([
    //     '/shops'
    // ]),
    // mainJournal: function () {
    //     let url = (isNode) ? locationURL : this.props.location.pathname
    //     return (url == '/') ? <MainJournal /> : ''
    // },
    mainJournal: function () {
        let url = (isNode) ? locationURL : this.props.location.pathname
        // return <MainJournal />
        return ''
    },
    // mainPager: function () {
    //     let url = (isNode) ? locationURL : this.props.location.pathname
    //     return (!this.mainPagerIgnoreList.has(url)) ? <Pager /> : ''
    // },
    mainPager: function () {
        return <Pager />
        // return 'test'
    },
    // hideShadow: function () {
    //     store.dispatch({
    //         type: 'SHADOW_HIDE'
    //     });
    // },
    // componentDidUpdate: function(prevProps) {
    //     this.transitionShadow = new Transition({
    //         el: this.refs.shadow,
    //         className: 'shadow',
    //         speedShow: 200,
    //         speedHide: 400
    //     });
    //
    //     if (prevProps.shadow.name != this.props.shadow.name) {
    //         if (this.props.shadow.name == '') {
    //             this.transitionShadow.hide();
    //         } else {
    //             this.transitionShadow.show();
    //         }
    //     }
    // },
    // render: function() {
    //     return (
    //         <div>
    //             <Header />
    //             <div className="content">
    //                 <div className="content__inner">
    //                     {this.props.children}
    //                     {this.mainPager()}
    //                     {this.mainJournal()}
    //                     <Footer />
    //                 </div>
    //             </div>
    //             <div className="shadow shadow_hided" style={{ zIndex: this.props.shadow.zIndex }} onClick={this.hideShadow} ref="shadow"></div>
    //         </div>
    //     );
    // }
    render: function() {
        return (
            <div>
                <Header />
                <div className="content">
                    <div className="content__inner">
                        {this.props.children}
                        {this.mainPager()}
                        <Footer />
                    </div>
                </div>
            </div>
        );
    }

});


const mapStateToProps = function(store) {
    return {
        shadow: store.shadow
    }
};


module.exports = connect(mapStateToProps)(AppContainer)