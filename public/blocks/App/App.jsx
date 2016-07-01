module.exports = React.createClass({
    render: function() {
        return (
            <div>
                <Header />
                <div className="content">
                    <div className="content__inner">{this.props.children}</div>
                </div>
            </div>
        );
    }
});