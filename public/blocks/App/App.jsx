module.exports = React.createClass({
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
        'shops'
    ]),
    mainJournal: function () {
        return (this.props.location.pathname == '/') ? <MainJournal /> : '';
    },
    mainPager: function () {
        return (this.mainPagerIgnoreList.has(this.props.location.pathname)) ? <Pager /> : '';
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
            </div>
        );
    }
});