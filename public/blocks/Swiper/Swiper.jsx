module.exports = React.createClass({
    getDefaultProps: function () {
        return {
            options: {}
        }
    },
    componentDidMount: function () {
        if (!IS_NODE) {
            if (this.props.className && this.props.options) {
                if (!this.props.destroy) {
                    this.init()
                } else {
                    this.checkerDestroy()
                    window.addEventListener('resize', this.checkerDestroy)
                }
            }
        }
    },

    checkerDestroy: function () {
        if (this.props.destroy < window.innerWidth && !this.isSwiper) {
            this.init()
        }
        if (this.props.destroy > window.innerWidth && this.isSwiper) {
            this.destroy()
        }
    },

    init: function () {
        this.swiper = new Swiper(ReactDOM.findDOMNode(this), this.props.options)
        this.isSwiper = true
    },

    destroy: function () {
        if (this.isSwiper) {
            this.swiper.destroy(true, true)
            this.isSwiper = false
        }
    },

    render: function () {
        return (
            <div className={"swiper-container"+((this.props.className) ? ' '+this.props.className : '')}>
                <div className="swiper-wrapper">
                    {this.props.children}
                </div>
                {(this.props.options.scrollbar) ? <div className="swiper-scrollbar"></div> : ''}
                {(this.props.options.pagination) ? <div className="swiper-pagination"></div> : ''}
                {(this.props.options.prevButton) ? <div className="swiper-button-prev">{(this.props.prevButtonContent) ? this.props.prevButtonContent : ''}</div> : '' }
                {(this.props.options.nextButton) ? <div className="swiper-button-next">{(this.props.nextButtonContent) ? this.props.nextButtonContent : ''}</div> : '' }
            </div>
        )
    },
    componentWillUnmount: function() {
        this.destroy()
    }
})