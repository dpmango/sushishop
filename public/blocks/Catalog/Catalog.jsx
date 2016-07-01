module.exports = React.createClass({
    render: function() {
        return (
            <div>
                <div>catalog</div>
                {this.props.children}
            </div>

        );
    }
});