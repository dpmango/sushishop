module.exports = React.createClass({
    render: function() {
        let descr = (this.props.descr) ? <div className="journal-item__descr">{this.props.descr}</div> : '',
            photo = (this.props.image_medium) ? <picture className="journal-item__photo">
                    <source media="" srcSet={this.props.image_medium}/>
                    <img src={this.props.image_medium} alt={this.props.name} />
                </picture> : '',
            gradient = (this.props.bg_to && this.props.bg_from) ? <div className="journal-item__gradient" style={{ backgroundImage: 'linear-gradient(to bottom right, '+this.props.bg_to+', '+this.props.bg_from+')' }}></div> : '';
        return (
            <div>
                <Link to={'/journal/test/'+this.props.alt} className="journal-item">
                    {photo}
                    {gradient}
                    <div className="journal-item__wrapper">
                        <div className="journal-item__name">{this.props.name}</div>
                        {descr}
                    </div>
                </Link>
            </div>
        )
    }
});