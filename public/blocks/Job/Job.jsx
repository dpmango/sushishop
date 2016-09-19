const JobContainer = React.createClass({
    componentWillMount: function() {

    },
    render: function() {
        return (
            <div className="job">
                <div className="job-header">
                    <div className="job-header__wrappper">
                        <div className="job-header__logo">{Icon.logo}</div>
                        <h1 className="job-header__title">Работа в СушиШопе</h1>
                    </div>
                    <div className="job-adv">
                        <div className="job-adv__item"></div>
                    </div>
                </div>
            </div>
        )
    }
});


const mapStateToProps = function(store) {
    return {
        job: store.job
    }
};


module.exports = connect(mapStateToProps)(JobContainer);