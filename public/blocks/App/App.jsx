module.exports = React.createClass({
    mainPagerIgnoreList: new Set([
        'shops'
    ]),
    mainJournal: function () {
        return (this.props.location.pathname == '/') ? <MainJournal /> : '';
    },
    mainPager: function () {
        return (this.mainPagerIgnoreList.has(this.props.location.pathname)) ? <Pager /> : '';
    },
    componentWillMount: function() {
        store.dispatch({
            type: 'GET_CITY'
        });
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