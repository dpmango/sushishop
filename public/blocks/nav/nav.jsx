const NavItem = React.createClass({
    render() {
        return (
            <a href={this.props.link}>
                {this.props.name}
            </a>
        );
    }
});

module.exports = React.createClass({
    render() {
        return (
            <nav className="nav">
                {
                    NAV.map(function (item) {
                        // if (!item.link) item.link = false;
                        return <NavItem key={item.section} link={item.link} name={item.name} />
                    })
                }
            </nav>
        );
    }
});