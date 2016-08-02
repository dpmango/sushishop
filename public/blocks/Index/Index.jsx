if (isNode) {
    title = 'СушиШоп'
}

module.exports = React.createClass({
    render: function() {
        return (
            <div>
                <MainBanners/>
                <MainCatalog/>
            </div>
        );
    }
});