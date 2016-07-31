module.exports = React.createClass({
    render: function () {
        return (
            <div
                className={"swiper-container"+(this.props.className ? ' '+this.props.className : '')}>
                <div className="swiper-wrapper">
                    {this.props.children}
                </div>
            </div>
        )
    }
})


// var defaultProps = {
//     slideClassContainer: 'swiper-container',
//     slideClass: 'swiper-slide',
//     slideActiveClass: 'swiper-slide-active',
//     slideVisibleClass: 'swiper-slide-visible',
//     slideDuplicateClass: 'swiper-slide-duplicate',
//     slideNextClass: 'swiper-slide-next',
//     slidePrevClass: 'swiper-slide-prev',
//     bulletClass: 'swiper-pagination-bullet',
//     bulletActiveClass: 'swiper-pagination-bullet-active',
//     paginationHiddenClass: 'swiper-pagination-hidden',
//     paginationCurrentClass: 'swiper-pagination-current',
//     paginationTotalClass: 'swiper-pagination-total',
//     paginationProgressbarClass: 'swiper-pagination-progressbar',
//     buttonDisabledClass: 'swiper-button-disabled'
// };
//
// module.exports = React.createClass({
//     displayName: 'ReactIDangerousSwiper',
//     // http://idangero.us/swiper/api/#.VwH7iRJ95hE
//     propTypes: {
//         initialSlide: React.PropTypes.number,
//         slidesPerView: React.PropTypes.node,
//         direction: React.PropTypes.string,
//         speed: React.PropTypes.number,
//         setWrapperSize: React.PropTypes.bool,
//         virtualTranslate: React.PropTypes.bool,
//         width: React.PropTypes.number,
//         height: React.PropTypes.number,
//         autoHeight: React.PropTypes.bool,
//         roundLengths: React.PropTypes.bool,
//         nested: React.PropTypes.bool,
//         autoplay: React.PropTypes.number,
//         autoplayStopOnLast: React.PropTypes.bool,
//         autoplayDisableOnInteraction: React.PropTypes.bool,
//         watchSlidesProgress: React.PropTypes.bool,
//         watchSlidesVisibility: React.PropTypes.bool,
//         freeMode: React.PropTypes.bool,
//         freeModeMomentum: React.PropTypes.bool,
//         freeModeMomentumRatio: React.PropTypes.number,
//         freeModeMomentumBounce: React.PropTypes.bool,
//         freeModeMomentumBounceRatio: React.PropTypes.number,
//         freeModeMinimumVelocity: React.PropTypes.number,
//         freeModeSticky: React.PropTypes.bool,
//         effect: React.PropTypes.string,
//         fade: React.PropTypes.object,
//         cube: React.PropTypes.object,
//         coverflow: React.PropTypes.object,
//         flip: React.PropTypes.object,
//         parallax: React.PropTypes.bool,
//         spaceBetween: React.PropTypes.number,
//         slidesPerColumn: React.PropTypes.number,
//         slidesPerColumnFill: React.PropTypes.string,
//         slidesPerGroup: React.PropTypes.number,
//         centeredSlides: React.PropTypes.bool,
//         slidesOffsetBefore: React.PropTypes.number,
//         slidesOffsetAfter: React.PropTypes.number,
//         grabCursor: React.PropTypes.bool,
//         touchEventsTarget: React.PropTypes.string,
//         touchRatio: React.PropTypes.number,
//         touchAngle: React.PropTypes.number,
//         simulateTouch: React.PropTypes.bool,
//         shortSwipes: React.PropTypes.bool,
//         longSwipes: React.PropTypes.bool,
//         longSwipesRatio: React.PropTypes.number,
//         longSwipesMs: React.PropTypes.number,
//         followFinger: React.PropTypes.bool,
//         onlyExternal: React.PropTypes.bool,
//         threshold: React.PropTypes.number,
//         touchMoveStopPropagation: React.PropTypes.bool,
//         iOSEdgeSwipeDetection: React.PropTypes.bool,
//         iOSEdgeSwipeThreshold: React.PropTypes.number,
//         resistance: React.PropTypes.bool,
//         resistanceRatio: React.PropTypes.number,
//         preventClicks: React.PropTypes.bool,
//         preventClicksPropagation: React.PropTypes.bool,
//         slideToClickedSlide: React.PropTypes.bool,
//         allowSwipeToPrev: React.PropTypes.bool,
//         allowSwipeToNext: React.PropTypes.bool,
//         noSwiping: React.PropTypes.bool,
//         noSwipingClass: React.PropTypes.string,
//         uniqueNavElements: React.PropTypes.bool,
//         paginationType: React.PropTypes.string,
//         paginationHide: React.PropTypes.bool,
//         paginationClickable: React.PropTypes.bool,
//         paginationElement: React.PropTypes.string,
//         paginationBulletRender: React.PropTypes.func,
//         paginationFractionRender: React.PropTypes.func,
//         paginationProgressRender: React.PropTypes.func,
//         paginationCustomRender: React.PropTypes.func,
//         scrollbar: React.PropTypes.string,
//         scrollbarHide: React.PropTypes.bool,
//         scrollbarDraggable: React.PropTypes.bool,
//         scrollbarSnapOnRelease: React.PropTypes.bool,
//         prevButton: React.PropTypes.string,
//         nextButton: React.PropTypes.string,
//         a11y: React.PropTypes.bool,
//         prevSlideMessage: React.PropTypes.string,
//         nextSlideMessage: React.PropTypes.string,
//         firstSlideMessage: React.PropTypes.string,
//         lastSlideMessage: React.PropTypes.string,
//         paginationBulletMessage: React.PropTypes.string,
//         keyboardControl: React.PropTypes.bool,
//         mousewheelControl: React.PropTypes.bool,
//         mousewheelForceToAxis: React.PropTypes.bool,
//         mousewheelReleaseOnEdges: React.PropTypes.bool,
//         mousewheelInvert: React.PropTypes.bool,
//         mousewheelSensitivity: React.PropTypes.number,
//         hashnav: React.PropTypes.bool,
//         preloadImages: React.PropTypes.bool,
//         updateOnImagesReady: React.PropTypes.bool,
//         lazyLoading: React.PropTypes.bool,
//         lazyLoadingInPrevNext: React.PropTypes.bool,
//         lazyLoadingInPrevNextAmount: React.PropTypes.number,
//         lazyLoadingOnTransitionStart: React.PropTypes.bool,
//         loop: React.PropTypes.bool,
//         loopAdditionalSlides: React.PropTypes.number,
//         loopedSlides: React.PropTypes.number,
//         controlInverse: React.PropTypes.bool,
//         controlBy: React.PropTypes.string,
//         observer: React.PropTypes.bool,
//         observeParents: React.PropTypes.bool,
//         breakpoints: React.PropTypes.object,
//         runCallbacksOnInit: React.PropTypes.bool,
//         onInit: React.PropTypes.func,
//         onSlideChangeStart: React.PropTypes.func,
//         onSlideChangeEnd: React.PropTypes.func,
//         onSlideNextStart: React.PropTypes.func,
//         onSlideNextEnd: React.PropTypes.func,
//         onSlidePrevStart: React.PropTypes.func,
//         onSlidePrevEnd: React.PropTypes.func,
//         onTransitionStart: React.PropTypes.func,
//         onTransitionEnd: React.PropTypes.func,
//         onTouchStart: React.PropTypes.func,
//         onTouchMove: React.PropTypes.func,
//         onTouchMoveOpposite: React.PropTypes.func,
//         onSliderMove: React.PropTypes.func,
//         onTouchEnd: React.PropTypes.func,
//         onClick: React.PropTypes.func,
//         onTap: React.PropTypes.func,
//         onDoubleTap: React.PropTypes.func,
//         onImagesReady: React.PropTypes.func,
//         onProgress: React.PropTypes.func,
//         onReachBeginning: React.PropTypes.func,
//         onReachEnd: React.PropTypes.func,
//         onDestroy: React.PropTypes.func,
//         onSetTranslate: React.PropTypes.func,
//         onSetTransition: React.PropTypes.func,
//         onAutoplay: React.PropTypes.func,
//         onAutoplayStart: React.PropTypes.func,
//         onAutoplayStop: React.PropTypes.func,
//         onLazyImageLoad: React.PropTypes.func,
//         onLazyImageReady: React.PropTypes.func,
//         onPaginationRendered: React.PropTypes.func,
//         slideClass: React.PropTypes.string,
//         slideActiveClass: React.PropTypes.string,
//         slideVisibleClass: React.PropTypes.string,
//         slideDuplicateClass: React.PropTypes.string,
//         slideNextClass: React.PropTypes.string,
//         slidePrevClass: React.PropTypes.string,
//         bulletClass: React.PropTypes.string,
//         bulletActiveClass: React.PropTypes.string,
//         paginationHiddenClass: React.PropTypes.string,
//         paginationCurrentClass: React.PropTypes.string,
//         paginationTotalClass: React.PropTypes.string,
//         paginationProgressbarClass: React.PropTypes.string,
//         buttonDisabledClass: React.PropTypes.string,
//         destroy: React.PropTypes.number,
//         onWheel: React.PropTypes.func
//     },
//
//     getDefaultProps: function() {
//         return defaultProps
//     },
//
//     initialisation: function () {
//         if (!isNode) {
//             this.swiper = Swiper(ReactDOM.findDOMNode(this), Object.assign({}, this.props));
//         }
//     },
//
//     resize: function () {
//         if (!isNode) {
//             if (document.body.clientWidth > this.props.destroy) {
//                 if (!this.activeSwiper) {
//                     this.initialisation();
//                     this.activeSwiper = true;
//                 }
//             } else {
//                 if (this.activeSwiper) {
//                     this.swiper.destroy(true, true);
//                     this.activeSwiper = false;
//                 }
//             }
//         }
//     },
//
//     componentDidMount: function () {
//         if (!isNode) {
//             if (!this.props.destroy || document.body.clientWidth > this.props.destroy) {
//                 this.initialisation();
//                 setTimeout(() => {
//                     this.swiper.onResize();
//                 });
//                 this.activeSwiper = true;
//             } else {
//                 this.activeSwiper = false;
//             }
//             window.addEventListener('resize', this.resize);
//         }
//     },
//
//     componentDidUpdate: function () {
//         if (!isNode) {
//             if (!this.props.destroy || (this.props.destroy && document.body.clientWidth > this.props.destroy)) {
//                 if (this.props.rebuildOnUpdate) {
//                     this.swiper.destroy(true, true);
//                     this.swiper = Swiper(ReactDOM.findDOMNode(this), Object.assign({}, this.props));
//                 }
//                 this.swiper.update();
//                 this.swiper.onResize();
//             }
//         }
//     },
//
//     // componentWillUnmount: function () {
//     //     if (this.activeSwiper) {
//     //         this.swiper.destroy(true, true);
//     //         delete this.swiper;
//     //     }
//     // },
//
//     // shouldComponentUpdate: function (nextProps) {
//     //     console.log(this.activeSwiper, document.body.clientWidth,  nextProps)
//     //     return this.activeSwiper == (document.body.clientWidth > this.props.destroy)
//     // },
//     //
//     // componentWillReceiveProps: function () {
//     //     if (!this.props.destroy || (this.props.destroy && document.body.clientWidth > this.props.destroy)) {
//     //         console.log(this.swiper)
//     //         if (this.swiper != null) {
//     //             this.swiper.destroy(true, true);
//     //         }
//     //         this.swiper = Swiper(ReactDOM.findDOMNode(this), Object.assign({}, this.props));
//     //     }
//     // },
//
//     _renderScrollBar: function () {
//         if (!this.props.scrollbar) return false;
//         return React.createElement('div', { className: this.props.scrollbar.replace(/\./g, "") });
//     },
//
//     _renderNextButton: function() {
//         if (!this.props.nextButton) return false;
//         return React.createElement('div', { className: this.props.nextButton.replace(/\./g, "") }, this.props.nextButtonContent);
//     },
//
//     _renderPrevButton: function() {
//         if (!this.props.prevButton) return false;
//         return React.createElement('div', { className: this.props.prevButton.replace(/\./g, "") }, this.props.prevButtonContent);
//     },
//
//     render: function() {
//         var slideClass = this.props.slideClass;
//         if (!isNode && (!this.props.destroy || this.props.destroy && (document.body.clientWidth > this.props.destroy))) {
//             return React.createElement(
//                 'div',
//                 { onWheel: (this.props.onWheel) ? this.props.onWheel : '' , className: this.props.slideClassContainer+' '+(this.props.className) ? this.props.className : '' },
//                 React.createElement(
//                     'div',
//                     { className: 'swiper-wrapper' },
//                     React.Children.map(this.props.children, function (e) {
//                         return React.cloneElement(e, { className: [slideClass, e.props.className].join(' ') });
//                     })
//                 ),
//                 React.createElement('div', { className: 'swiper-pagination' }),
//                 this._renderScrollBar(),
//                 this._renderNextButton(),
//                 this._renderPrevButton()
//             );
//         } else {
//             return React.createElement(
//                 'div',
//                 { className: 'swiper-wrapper' },
//                 React.Children.map(this.props.children, function (e) {
//                     return React.cloneElement(e, { className: [slideClass, e.props.className].join(' ') });
//                 })
//             );
//         }
//     }
// });