module.exports = function (config) {
    this.config = Object.assign({}, config, {
        show: config.className+'_show',
        showed: config.className+'_showed',
        hide: config.className+'_hide',
        hided: config.className+'_hided'
    })
    this.hide = (callback) => {
        this.config.el.style.transitionDuration = this.config.speedHide+'ms'
        this.config.el.classList.remove(this.config.showed);
        this.config.el.classList.add(this.config.show);
        setTimeout(() => {
            this.config.el.classList.remove(this.config.show);
            this.config.el.classList.add(this.config.hided);
            this.config.el.classList.add(this.config.hide);
            if (callback) {
                callback()
            }
        }, this.config.speedHide)
    }
    this.show = (callback) => {
        this.config.el.classList.remove(this.config.hide);
        this.config.el.classList.remove(this.config.hided);
        this.config.el.classList.add(this.config.show);
        this.config.el.style.transitionDuration = this.config.speedShow+'ms'
        setTimeout(() => {
            this.config.el.classList.remove(this.config.show);
            this.config.el.classList.add(this.config.showed);
            if (callback) {
                callback()
            }
        }, this.config.speedShow)
    }
}