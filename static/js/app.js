var resetStorage=0;
var chances = 4;
var DATE=false;
var WIN=false;
if(window.location.hash) {
	var TEST=window.location.hash.includes('test');

	if(window.location.hash.includes('date=')) {
		let tmp = window.location.hash.split('date=');
		DATE=tmp[1];
	}
}
var stim = false;
window.addEventListener('mousemove',function() {
	$('body').removeClass('masquer_curseur');
	clearTimeout(stim);
	stim = setTimeout(function() {
		$('body').addClass('masquer_curseur');
	},500);
});
console.log(DATE)
webpackJsonp([1], {
	"+Rsi": function(t, n) {},
	"9AXB": function(t, n) {},
	Hdtd: function(t, n) {
		t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABCgAAADjCAYAAABHCCWYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYzRTY3RDc4MkQ0OTExRUFBODlCRUMxMzJBQzkxRkRGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjYzRTY3RDc5MkQ0OTExRUFBODlCRUMxMzJBQzkxRkRGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjNFNjdENzYyRDQ5MTFFQUE4OUJFQzEzMkFDOTFGREYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjNFNjdENzcyRDQ5MTFFQUE4OUJFQzEzMkFDOTFGREYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4SIMkcAAArrklEQVR42uzd63XbSLoo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"
	},
	NHnr: function(t, n, e) {
		"use strict";
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var i = e("mvHQ"),
		o = e.n(i),
		s = e("7+uW"),
		a = {
			name: "Header",
			data: function() {
				return {
					headerReady: !1
				}
			},
			mounted: function() {
				var t = this;
				setTimeout(function() {
					t.headerReady = !0
				}, 250)
			}
		},
		r = {
			render: function() {
				var t = this.$createElement,
				n = this._self._c || t;
				return n("div", {
					staticClass: "header",
					class: {
						headerReady: this.headerReady
					}
				}, [n("div", {
					staticClass: "header-left"
				}), this._v(" "), n("div", {
					staticClass: "header-right"
				})])
			},
			staticRenderFns: []
		};
		var c = e("VU/8")(a, r, !1, function(t) {
			e("+Rsi")
		}, null, null).exports,
		A = {
			name: "Lignes",
			data: function() {
				return {
					afficherLignes: !1
				}
			},
			mounted: function() {
				var t = this;
				this.$bus.$on("lignes", function(n) {
					t.afficherLignes = n
				}), setTimeout(function() {
					t.$bus.$emit("lignes", !0)
				}, 2e3)
			}
		},
		l = {
			render: function() {
				var t = this.$createElement;
				return (this._self._c || t)("div", {
					staticClass: "lignes",
					class: {
						ok: this.afficherLignes
					}
				}, [this._m(0), this._v(" "), this._t("default"), this._v(" "), this._m(1)], 2)
			},
			staticRenderFns: [function() {
				var t = this.$createElement,
				n = this._self._c || t;
				return n("div", {
					staticClass: "lignes-gauche"
				}, [n("div", {
					staticClass: "ligne"
				}), this._v(" "), n("div", {
					staticClass: "ligne"
				}), this._v(" "), n("div", {
					staticClass: "ligne"
				}), this._v(" "), n("div", {
					staticClass: "ligne"
				})])
			}, function() {
				var t = this.$createElement,
				n = this._self._c || t;
				return n("div", {
					staticClass: "lignes-droite"
				}, [n("div", {
					staticClass: "ligne"
				}), this._v(" "), n("div", {
					staticClass: "ligne"
				}), this._v(" "), n("div", {
					staticClass: "ligne"
				}), this._v(" "), n("div", {
					staticClass: "ligne"
				})])
			}]
		};
		var u = {
			name: "Compteur",
			data: function() {
				return {
					finJeu: !1,
					boutonReady: !1,
					bilanReady: !1,
					compteur: 4,
					gagnant: !1,
					lot: !1,
					grow: !1
				}
			},
			mounted: function() {
				var t = this;
				setTimeout(function() {
					t.boutonReady = !0, t.start()
				}, 1e3), this.$bus.$on("start", function() {
					t.start()
				})
			},
			methods: {
				start: function() {
					var t = this;
					this.$bus.$emit("lignes", !1), window.lancerCompteur = setInterval(function() {
						t.compteur < 2 ? (clearInterval(window.lancerCompteur), t.end()) : (window.ion.sound.play("bip"), t.compteur--)
					}, 500)
				},
				end: function() {
					var t = this;
					this.boutonReady = !1, setTimeout(function() {
						t.$bus.$emit("lignes", !0), t.finduJeu()
					}, 1e3)
				},
				finduJeu: function() {
					var t = this;
					this.finJeu = !0;
					//var n = Math.floor(2 * Math.random()) + 1;
					// var n = Math.floor(chances * Math.random());
//					if(TEST) n=2;
					//this.gagnant = n != 0;
					var n = Math.floor(30 * Math.random());
					console.log(n)
					this.gagnant= WIN || n==0 ? true : false;
					if (this.gagnant) {
						WIN=false;
						var e = Math.floor(Math.random() * this.$store.state.population.length);
						let tmp_lot = this.$store.state.population[e];
						if(tmp_lot == undefined) {
							this.gagnant = false;
						} else {
							if(tmp_lot.heures != undefined) {
								var ladate = new Date();
								var heure = ladate.getHours();
								if(heure >= tmp_lot.heures.debut && heure <= tmp_lot.heures.fin) {
									this.lot = tmp_lot;
								} else {
									this.gagnant=false;								
								}
							} else {
								this.lot = tmp_lot;
							}
						}
					} else {
						console.log('pas de bol')
					}
					this.$store.commit("compterJeu");

					if(this.gagnant) {
						this.$store.commit("removeLot", e);
						window.ion.sound.play("tada");
						window.ion.sound.play("cheer");							
					} else {
						window.ion.sound.play("buzz");
					}
					setTimeout(function() {
						t.bilanReady = !0, t.$bus.$emit("fin")
					}, 500)
				}
			}
		},
		d = {
			render: function() {
				var t = this,
				n = t.$createElement,
				i = t._self._c || n;
				return i("div", [t.finJeu ? i("div", {
					class: {
						bilanReady: t.bilanReady
					}
				}, [t.gagnant ? i("div", {
					staticClass: "bilan gagne"
				}, [i("center", [i("img", {
					staticClass: "texte",
					attrs: {
						width: "50%",
						src: e("Hdtd")
					}
				}), t._v(" "), i("p", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: t.lot,
						expression: "lot"
					}]
				}, [t._v(" "), i("b", [t._v(t._s(t.lot.nom) + " !")])]), t._v(" "), i("div", {
					staticClass: "lot",
					style: "background-image:url(/static/lots/" + t.lot.image + ")"
				})])], 1) : i("div", {
					staticClass: "bilan perdu"
				})]) : i("div", {
					staticClass: "compteur",
					class: {
						boutonReady: t.boutonReady
					}
				}, [i("div", {
					staticClass: "chiffre star",
					class: {
						grow: t.grow
					}
				}, [t.compteur < 4 ? [t._v(t._s(t.compteur))] : t._e()], 2)])])
			},
			staticRenderFns: []
		};
		var f = {
			name: "Body",
			components: {
				Lignes: e("VU/8")(A, l, !1, function(t) {
					e("dqQw")
				}, null, null).exports,
				Compteur: e("VU/8")(u, d, !1, function(t) {
					e("kbrB")
				}, null, null).exports
			},
			data: function() {
				return {
					animationBouton: !1,
					buzzz: !1,
					okFin: !1
				}
			},
			mounted: function() {
				var t = this;
				setTimeout(function() {
					t.animationBouton = !0
				}, 1e3), window.onkeydown = function(n) {
					if(jeu_en_pause) return;
					var keycode = (n = n || window.event).keyCode;
					if(keycode == 67) {
						resetStorage++;
						if(resetStorage == 3) {
							localStorage.removeItem(window.utils.store());
							console.log('Le cache a été vidé');
							window.location.reload()
						}
					}
					32 == (n = n || window.event).keyCode && (t.okFin && (document.location.reload()), t.buzzz || (window.ion.sound.play("gong"), t.buzzz = !0, t.$bus.$emit("start")))
				}, this.$bus.$on("fin", function() {
					t.okFin = !0
				})
			}
		},
		Q = {
			render: function() {
				var t = this.$createElement,
				n = this._self._c || t;
				return n("div", {
					staticClass: "body",
					class: {
						animationBouton: this.animationBouton
					}
				}, [n("Lignes", [this.buzzz ? n("Compteur") : n("div", {
					ref: "bouton",
					staticClass: "bouton"
				})], 1)], 1)
			},
			staticRenderFns: []
		};
		var B = {
			name: "Footer",
			data: function() {
				return {
					footerReady: !1
				}
			},
			mounted: function() {
				var t = this;
				setTimeout(function() {
					t.footerReady = !0
				}, 500)
			}
		},
		v = {
			render: function() {
				var t = this.$createElement;
				return (this._self._c || t)("div", {
					staticClass: "footer",
					class: {
						footerReady: this.footerReady
					}
				})
			},
			staticRenderFns: []
		};
		var h = {
			name: "App",
			data: function() {
				return {
					fullscreen: !1
				}
			},
			components: {
				Header: c,
				Body: e("VU/8")(f, Q, !1, function(t) {
					e("Z/xP")
				}, null, null).exports,
				Footer: e("VU/8")(B, v, !1, function(t) {
					e("9AXB")
				}, null, null).exports
			},
			mounted: function() {
				var t = this;
				this.fullscreen = !0, window.axios.get("lots"+(DATE ? "-"+DATE : "")+".json?maj").then(function(n) {
					t.$store.commit("setLots", n.data)
				})
			},
			methods: {
				goFullscreen: function() {
					utils.requestFullScreen(this.$refs.app)
				}
			}
		},
		F = {
			render: function() {
				var t = this.$createElement,
				n = this._self._c || t;
				return n("div", {
					ref: "app",
					staticClass: "app"
				}, [this.fullscreen ? [n("Header"), this._v(" "), n("Body"), this._v(" "), n("Footer")] : n("button", {
					staticClass: "go-fullscreen",
					on: {
						click: this.goFullscreen
					}
				}, [this._v("Cliquer ici pour commencer")])], 2)
			},
			staticRenderFns: []
		};
		var g = e("VU/8")(h, F, !1, function(t) {
			e("sjNH")
		}, null, null).exports,
		m = {
			store: function() {
				return "store-buzzer-zou-" + (DATE ? DATE : window.utils.date())
			},
			date: function() {
				var t = new Date,
				n = t.getUTCMonth() + 1,
				e = t.getUTCDate();
				return t.getUTCFullYear() + "-" + n + "-" + e
			},
			requestFullScreen: function(t) {
				var n = t.requestFullScreen || t.webkitRequestFullScreen || t.mozRequestFullScreen || t.msRequestFullScreen;
				if (n) n.call(t);
				else if (void 0 !== window.ActiveXObject) {
					var e = new ActiveXObject("WScript.Shell");
					null !== e && e.SendKeys("{F11}")
				}
			}
		},
		w = e("mtWM"),
		C = e.n(w),
		U = e("woOf"),
		E = e.n(U),
		p = e("NYxO");
		s.a.use(p.a);
		var R = new p.a.Store({
			state: {
				jeux: 0,
				lots: [],
				population: !1
			},
			mutations: {
				setLots: function(t, n) {
					t.lots = [];
					var e = [];
					n.lots.forEach(function(i) {
						i.probabilite = i.qte / n.duree, t.lots.push(i);
						for (var o = 0; o < i.qte; o++) e.push(i)
					}), t.population || (t.population = e)
				},
				removeLot: function(t, n) {
					t.population.splice(n, 1)
				},
				compterJeu: function(t) {
					t.jeux++
				},
				initialiseStore: function(t) {
					if (localStorage.getItem(window.utils.store())) {
						var n = JSON.parse(localStorage.getItem(window.utils.store()));
						$.post('https://tools.sopress.net/propuls/buzzer/',{store_name:window.utils.store(),store:n,version:version}).then(function(data) {
							console.log(data)
						})
						this.replaceState(E()(t, n))
					}
				}
			}
		});
		window.axios = C.a.create({
			baseURL: "/static/json/",
			params: {},
			headers: !1
		}), window.utils = m, window.prec = !1, s.a.config.productionTip = !1, s.a.prototype.$bus = new s.a, window.ion.sound({
			sounds: [{
				name: "bg",
				loop: !0
			}, {
				name: "bip"
			}, {
				name: "tada"
			}, {
				name: "buzz"
			}, {
				name: "gong"
			}, {
				name: "cheer"
			}, {
				name: "tap"
			}],
			path: "/static/sons/",
			preload: !0,
			multiplay: !0,
			volume: .2
		}), R.subscribe(function(t, n) {
			localStorage.setItem(window.utils.store(), o()(n))
		}), new s.a({
			el: "#app",
			store: R,
			components: {
				App: g
			},
			beforeCreate: function() {
				this.$store.commit("initialiseStore")
			},
			template: "<App/>"
		})
	},
	"Z/xP": function(t, n) {},
	dqQw: function(t, n) {},
	kbrB: function(t, n) {},
	sjNH: function(t, n) {}
}, ["NHnr"]);
