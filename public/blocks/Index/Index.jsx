module.exports = React.createClass({
    componentWillMount: function() {
        store.dispatch({
            type: 'SET_META',
            title: 'СушиШоп'
        })
    },
    render: function() {
        return (
            <div>
                <MainBanners/>
                <MainCatalog/>
            </div>
        );
    }
});