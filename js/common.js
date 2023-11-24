const awesomeEffect = t=>{
    let o = t.el
      , e = ""
      , i = t.text
      , l = t.possible ? t.possible : 'ABCDEFASIRUWJFCKSJHYWRKJEsdfskdjfk-+*/|}{[]~\\":;?/.><=+-_)(*&^%$#@!)}'
      , r = t.delay ? t.delay : 70;
    const a = (t,e)=>{
        setTimeout((t=>{
            o.innerText = e
        }
        ), t * r)
    }
    ;
    for (let t = 0; t < i.length + 1; t++) {
        e = i.substr(0, t);
        for (let o = t; o < i.length; o++)
            e += l.charAt(Math.floor(Math.random() * l.length));
        a(t, e),
        e = ""
    }
}
;
function init() {
    document.querySelector(".preloader > div").style.borderTopColor = config.preloaderColor,
    setTimeout((()=>{
        document.querySelector(".preloader").classList.add("loaded")
    }
    ), 1e3 * config.preloaderDelay);
    new Vue({
        el: "#asif-page",
        data: {
            title: config.title,
            titleVisible: !1,
            copyrightText: config.copyrightText,
            social: config.social,
            isPlaying: !1,
            titleColor: config.titleColor,
            titleShadowColor: config.titleShadowColor,
            copyrightTextColor: config.copyrightTextColor,
            socialColor: config.socialColor,
            socialShadowColor: config.socialShadowColor,
            playButtonColor: config.playButtonColor,
            playButtonShadowColor: config.playButtonShadowColor,
            preloaderColor: config.preloaderColor,
            SOCIAL: {
                telegram(t) {
                    let o = t.trim();
                    return o = o.replace("@", ""),
                    "media/123.html"
                },
                steam(t) {
                    t.trim();
                    return "media/brad.html"
                },
                vk(t) {
                    t.trim();
                    return "media/ted.html"
                },
                minecraft(t) {
                    t.trim();
                    return "https://vk.com/legendshvh"
                }
            }
        },
        methods: {
            stopPlay() {
                this.isPlaying = !1,
                this.titleVisible = !1
            },
            startPlay() {
                this.$refs["background-video"];
                let t = this.$refs.title;
                this.$refs["background-video"].play(),
                this.$refs["background-video"].muted = !1,
                this.isPlaying = !0,
                setTimeout((()=>{
                    this.titleVisible = !0,
                    awesomeEffect({
                        el: t,
                        text: this.title
                    }),
                    setInterval((()=>{
                        awesomeEffect({
                            el: t,
                            text: this.title
                        })
                    }
                    ), 1050),
                    setInterval((()=>{
                        awesomeEffect({
                            el: document.querySelector(".asif-page-copyright"),
                            text: this.copyrightText
                        })
                    }
                    ), 2e3)
                }
                ), 1e3 * config.showDelay)
            },
            getSocialLink(t, o) {
                return this.SOCIAL[t](o)
            }
        },
        mounted() {
            let t = this.$refs["background-video"];
            t.addEventListener("canplay", (t=>{}
            )),
            t.addEventListener("ended", (t=>{
                this.stopPlay()
            }
            ))
        },
        computed: {
            TitleStyle() {
                return {
                    color: this.titleColor,
                    textShadow: `3px 3px 0 ${this.titleShadowColor}`
                }
            },
            CopyRightStyle() {
                return {
                    color: this.copyrightTextColor
                }
            },
            SocialStyle() {
                return {
                    color: this.socialColor,
                    textShadow: `3px 3px 0 ${this.socialShadowColor}`
                }
            },
            PlayButtonStyle() {
                return {
                    color: this.playButtonColor,
                    textShadow: `3px 3px 0 ${this.playButtonShadowColor}`
                }
            }
        }
    })
}
window.addEventListener("load", init);
