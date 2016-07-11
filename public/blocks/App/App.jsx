module.exports = React.createClass({
    mainJournal: function () {
        return (this.props.location.pathname == '/') ? <MainJournal /> : '';
    },
    render: function() {
        return (
            <div>
                <Header />
                <div className="content">
                    <div className="content__inner">
                        {this.props.children}
                        <Pager />
                        {this.mainJournal()}
                        <Footer />
                    </div>
                </div>
            </div>
        );
    }
});