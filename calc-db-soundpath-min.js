/*
	
	Todos os direitos reservados a Acústica Fácil 2023
	https://calc-db-soundpath.net
	Version 1.5.4
	
*/
"use strict";

function loadScripts(t, n) {
	t.length || (t = []);
	var o = document.head || document.getElementsByTagName("head")[0];
	! function e(i) {
		if (t.length > i) {
			var r = document.createElement("script");
			r.setAttribute("type", "text/javascript"), r.setAttribute("src", t[i]), o.appendChild(r), i += 1, r.onload = function() {
				e(i)
			}
		} else n && n()
	}(0)
	}! function(t) {
	let n = !1;
	const o = "/users",
	e = "/calculadoras/calc-db-soundpath/users/wp-content/plugins/calc-db-soundpath_user/",
	i = e + "json_user_library.php?set=palette",
	r = "calc-db-soundpath_",
	c = {},
	s = {},
	u = "AIzaSyCNbsf_RV1NpzormY23dSEN0ZYmAXRHPBk",
	l = "https://nbrsystem.acusticafacil.com.br/",
	a = "images/transparent.svg";
	let f = !1,
	_ = !1,
	d = !1,
	p = !1;
	let h = $("html").prop("lang");
	const g = function(t, n) {
		if (!lang_values[t]) return console.warn(t + " is empty!"), "";
		if (void 0 !== n) {
			"object" != typeof n && (n = [n]);
			let o = lang_values[t].split(/\{|\}/),
			e = 0;
			for (let t = 1; t < o.length; t += 2) Array.isArray(n) ? (o[t] = n[e], e++) : o[t] = n[o] ? n[o] : "";
			return o.join("")
		}
		return lang_values[t]
	},
	b = function(t) {
		return t ? t.replace(/"/g, "&quot;") : t
	},
	m = function(t, n) {
		return b(g(t, n))
	},
	v = function(t, n) {
		return o + function(t) {
			return "pt" == h ? t : "/" + h + t
		}(t) + (n ? "#" + n : "")
	},
	y = function(t) {
		return v("/library", "user_library_" + t)
	},
	w = function() {
		return v("" + function() {
			const t = "?redirect_to=" + encodeURIComponent(window.location.href);
			return t.length < 8e3 ? t : ""
		}())
	},
	x = function() {
		return '<a href="' + w() + '" class="login_href">' + g("buttons_login") + "</a>"
	},
	k = function() {
		return '<a href="' + v("/account/subscription") + '">' + g("buttons_sign_up") + "</a>"
	};
	window.data = {};
	const M = function(t) {
		if (null != t) return t ? 1 : 0
	},
	j = function(n) {
		let o = t.toNumber(n);
		if (!isNaN(o)) return o
	},
	I = function(t, n) {
		if (n.indexOf(t) > -1) return t
	},
	z = function(t, n) {
		return t = A(t), void 0 !== n && t !== (n = A(n)) ? t + It + n : t
	},
	A = function(n, o) {
		if (null == o && (o = Hn), Array.isArray(n)) {
			const t = [];
			for (let e = 0; e < n.length; e++) t.push(A(n[e], o));
			for (;
			"-" === t[t.length - 1];) t.pop();
			return "(" + t.join(",") + ")"
		}
		return null == n ? "-" : !0 === n ? "1" : !1 === n ? "0" : Object.is(n, -0) ? "-0" : "string" == typeof n ? "[" + encodeURIComponent(n).replace(/%20/g, "+") + "]" : t.round(n, o)
	};
	
	function E() {
		const n = function(t) {
			return t ? Su("#" + t) : ""
		},
		o = function() {
			return t = this.o, g("config_" + t);
			var t
		},
		e = function() {
			return this.value
		},
		i = function() {
			return z(this.value, this.u)
		},
		r = function(t) {
			return null == t && (t = Cs), Fs(t) && void 0 !== this.u ? this.u : this.value
		},
		c = function(t) {
			void 0 !== (t = M(t)) && (this.value = t)
		},
		s = function(t, n) {
			t = M(t), !1 !== (n = Bs(n)) && (Fs(n) ? this.u = t : void 0 !== t && (this.value = t), this._())
		},
		u = function(t) {
			void 0 !== (t = I(t, this.m)) && (this.value = t)
		},
		l = function() {
			this.v(ee.$(this.o))
		},
		a = function() {
			this.v(ee.M(this.o, this.I))
		},
		f = function() {
			this.v(ee.A(this.o))
		},
		_ = function() {
			re.$(this.o, this.N()), re.T(this.o, void 0 !== this.u)
		},
		d = function() {
			re.M(this.o, this.N()), re.T(this.o, void 0 !== this.u)
		},
		p = function() {
			re.A(this.o, this.N())
		},
		b = function() {
			return M_.$(this.o, 1, this.L(), {
				S: n(this.R)
			})
		},
		m = function() {
			return M_.A(this.o, this.L() + n(this.R), this.m, this.D)
		},
		v = function() {
			return M_.H(this.o, this.L() + n(this.R), this.m, this.D)
		},
		$ = function() {
			this.u === this.value && (this.u = void 0)
		},
		y = function(t, n) {
			return n ? Wt[this.N(t)] : Jt[this.N(t)]
		};
		return {
			weighting: {
				o: "weighting",
				L: o,
				O: function() {
					const t = 1 === this.N();
					return g("config_text_weighting_" + (t ? "on" : "off"))
				},
				P: e,
				C: b,
				F: l,
				q: _,
				N: e,
				v: c,
				I: 1,
				value: 1
			},
			gfactor: {
				o: "gfactor",
				L: o,
				O: function(t) {
					const n = this.N(t),
					o = data.config.gfactor_disable.N(t);
					return !1 === (e = !o && n) ? g("config_text_gfactor_disabled") : 0 === e ? g("config_text_gfactor_hard") : 1 === e ? g("config_text_gfactor_soft") : g("config_text_gfactor", oo(e, 1));
					var e
				},
				P: function() {
					const t = function(t, n) {
						return n ? -t : t
					},
					n = data.config.gfactor_disable,
					o = t(this.N(1), n.N(1)),
					e = t(this.N(2), n.N(2));
					return z(o, e)
				},
				C: function() {
					return M_.U(this.o, this.L() + n(this.R), .1, 0, 1)
				},
				R: "groundfactor",
				F: a,
				q: d,
				N: r,
				v: function(t, n) {
					(t = j(t)) < 0 && (t = 0), t > 1 && (t = 1), !1 !== (n = Bs(n)) && (Fs(n) ? this.u = t : void 0 !== t && (this.value = t), this._())
				},
				_: $,
				I: 0,
				value: 0
			},
			gfactor_disable: {
				o: "gfactor_disable",
				L: o,
				O: function() {},
				P: function() {},
				C: b,
				F: l,
				q: _,
				N: r,
				v: s,
				_: $,
				I: 0,
				value: 0
			},
			temperature: {
				o: "temperature",
				L: o,
				B: function(t) {
					return g("config_text_temperature", oo(this.N(t), 1))
				},
				O: function(t) {
					return oo(this.N(t), 1) + "°C"
				},
				P: i,
				C: function() {
					return M_.U(this.o, this.L(), 1, -20, 50)
				},
				F: a,
				q: d,
				N: r,
				v: function(t, n) {
					(t = j(t)) < -20 && (t = -20), t > 50 && (t = 50), !1 !== (n = Bs(n)) && (Fs(n) ? this.u = t : void 0 !== t && (this.value = t), this._())
				},
				_: $,
				I: 20,
				value: 20
			},
			humidity: {
				o: "humidity",
				L: o,
				O: function(t) {
					return g("config_text_humidity", oo(this.N(t)))
				},
				P: i,
				C: function() {
					return M_.U(this.o, this.L(), 1, 0, 100)
				},
				F: a,
				q: d,
				N: r,
				v: function(t, n) {
					(t = j(t)) < 0 && (t = 0), t > 100 && (t = 100), !1 !== (n = Bs(n)) && (Fs(n) ? this.u = t : void 0 !== t && (this.value = t), this._())
				},
				_: $,
				I: 70,
				value: 70
			},
			iso_limit: {
				o: "iso_limit",
				L: o,
				O: y,
				P: function() {},
				C: b,
				R: "iso_limit",
				F: l,
				q: _,
				N: r,
				v: s,
				_: $,
				I: 1,
				value: 1
			},
			iso_edges: {
				o: "iso_edges",
				L: o,
				O: y,
				P: function() {},
				C: b,
				R: "verticaledge",
				F: l,
				q: _,
				N: r,
				v: s,
				_: $,
				I: 1,
				value: 1
			},
			iso_facade: {
				o: "iso_facade",
				L: o,
				O: y,
				P: function() {},
				C: b,
				R: "iso_facade",
				F: l,
				q: _,
				N: r,
				v: s,
				_: $,
				I: 1,
				value: 1
			},
			iso_check: {
				o: "iso_check",
				L: o,
				O: y,
				P: function() {},
				C: b,
				R: "iso_check",
				F: l,
				q: _,
				N: r,
				v: s,
				_: $,
				I: 1,
				value: 1
			},
			iso_surface: {
				o: "iso_surface",
				L: o,
				O: y,
				P: function() {},
				C: b,
				R: "iso_surface",
				F: l,
				q: _,
				N: r,
				v: s,
				_: $,
				I: 1,
				value: 1
			},
			iso_convex: {
				o: "iso_convex",
				L: o,
				O: y,
				P: function() {},
				C: b,
				F: l,
				q: _,
				N: r,
				v: s,
				_: $,
				I: 1,
				value: 1
			},
			iso_ground: {
				o: "iso_ground",
				L: o,
				O: y,
				P: function() {},
				C: b,
				R: "iso_ground",
				F: l,
				q: _,
				N: r,
				v: s,
				_: $,
				I: 1,
				value: 1
			},
			iso_laterallimit: {
				o: "iso_laterallimit",
				L: o,
				O: y,
				P: function() {},
				C: b,
				F: l,
				q: _,
				N: r,
				v: s,
				_: $,
				I: 1,
				value: 1
			},
			reflections: {
				o: "reflections",
				L: o,
				O: function(t) {
					return this.D[this.m[this.N(t)]]
				},
				P: i,
				C: v,
				R: "reflections",
				F: a,
				q: d,
				N: r,
				v: function(t, n) {
					t = I(t, this.m), !1 !== (n = Bs(n)) && (Fs(n) ? this.u = t : void 0 !== t && (this.value = t), this._())
				},
				_: $,
				m: [0, 1, 2],
				D: [g("config_refl_0"), g("config_refl_1"), g("config_refl_2")],
				I: 2,
				value: 2
			},
			resolution_limit: {
				o: "resolution_limit",
				L: o,
				O: function() {},
				P: e,
				C: function() {
					return M_.H(this.o, this.L() + ue(), this.m, this.D)
				},
				F: a,
				q: d,
				N: e,
				v: u,
				m: [16, 8, 4, 2, 1],
				D: [g("config_resolution_vlow"), g("config_resolution_low"), g("config_resolution_medium"), g("config_resolution_high"), g("config_resolution_max")],
				I: 4,
				value: 4
			},
			grid_type: {
				o: "grid_type",
				L: o,
				O: function() {},
				P: function() {
					return data.config.contour_styled.N() ? -this.N() : this.N()
				},
				C: v,
				F: a,
				q: d,
				N: e,
				v: u,
				m: [1, 5, 2, 3, 4, 0],
				D: [g("config_grid_type_full"), g("config_grid_type_n", qn(.5)), g("config_grid_type_n", 1), g("config_grid_type_n", 5), g("config_grid_type_n", 10), g("config_grid_type_off")],
				I: 3,
				value: 3
			},
			grid_figures: {
				o: "grid_figures",
				L: o,
				O: function() {},
				P: e,
				C: m,
				F: f,
				q: p,
				N: e,
				v: u,
				m: [1, 2, 0],
				D: [g("colour_black"), g("colour_white"), g("config_off")],
				I: 0,
				value: 0
			},
			grid_lines: {
				o: "grid_lines",
				L: o,
				O: function() {},
				P: e,
				C: m,
				F: f,
				q: p,
				N: e,
				v: u,
				m: [1, 2, 0],
				D: [g("colour_black"), g("colour_white"), g("config_off")],
				I: 1,
				value: 1
			},
			show_names: {
				o: "show_names",
				L: o,
				O: function() {},
				P: e,
				C: m,
				F: f,
				q: p,
				N: e,
				v: u,
				m: [2, 3, 1, 0],
				D: [g("config_labels_names"), g("config_labels_heights"), g("config_labels_all"), g("config_labels_off")],
				I: 1,
				value: 1
			},
			contour_type: {
				o: "contour_type",
				L: o,
				O: function() {},
				P: function() {
					return data.config.grid_blend.N() ? this.N() : -this.N()
				},
				C: v,
				F: a,
				q: d,
				N: e,
				v: u,
				m: [0, 1, 2, 3],
				D: [g("config_off"), g("colour_black"), g("colour_white"), g("config_lines_only")],
				I: 0,
				value: 0
			},
			grid_blend: {
				o: "grid_blend",
				L: o,
				O: function() {},
				P: function() {},
				C: b,
				F: l,
				q: _,
				N: e,
				v: c,
				I: 1,
				value: 1
			},
			contour_styled: {
				o: "contour_styled",
				L: o,
				O: function() {},
				P: function() {},
				C: function() {
					return M_.$(this.o, 1, this.L(), {
						S: ue()
					})
				},
				F: l,
				q: _,
				N: e,
				v: c,
				I: 0,
				value: 0
			},
			receiver_type: {
				o: "receiver_type",
				L: o,
				O: function() {},
				P: e,
				C: m,
				F: f,
				q: p,
				N: e,
				v: u,
				m: [0, 2, 1, -1],
				D: Qo(en, rn, !0),
				I: 0,
				value: 0
			},
			precision: {
				o: "precision",
				L: o,
				O: function() {
					return g("config_text_precision", this.N())
				},
				P: e,
				C: function() {
					return M_.A(this.o, this.L(), this.m, this.D())
				},
				F: f,
				q: p,
				N: e,
				v: u,
				m: [0, 1, 2],
				D: function() {
					const n = n => t.round(0, n, h, !0);
					return [n(0), n(1), n(2)]
				},
				I: 0,
				value: 0
			},
			legend_setting: {
				o: "legend_setting",
				L: o,
				O: function() {},
				P: e,
				C: m,
				F: f,
				q: p,
				N: e,
				v: u,
				m: [1, 2, 0],
				D: [svgIcon("legend1"), svgIcon("legend2"), g("hide")],
				I: 1,
				value: 1
			},
			Z: function() {
				const t = function(t) {
					return void 0 === data.config[t].I ? null : data.config[t].N() === data.config[t].I
				};
				for (let n in this)
				if (!1 === t(n)) return !1;
				return !0
			},
			J: function() {
				const t = function(t) {
					let n = 0;
					return data.config.iso_limit.N(t) && (n += 1), data.config.iso_edges.N(t) && (n += 2), data.config.iso_facade.N(t) && (n += 4), data.config.iso_check.N(t) && (n += 8), data.config.iso_surface.N(t) && (n += 16), data.config.iso_convex.N(t) && (n += 32), data.config.iso_ground.N(t) && (n += 64), data.config.iso_laterallimit.N(t) && (n += 128), n
				};
				return [
					[this.weighting.P(), this.gfactor.P(), this.temperature.P(), this.humidity.P(), z(t(1), t(2)), this.reflections.P(), this.resolution_limit.P(), this.grid_type.P(), this.grid_figures.P(), this.grid_lines.P(), this.show_names.P(), this.contour_type.P(), this.receiver_type.P(), this.precision.P(), this.legend_setting.P()]
				]
			},
			W: function(t, n) {
				void 0 !== t && (data.config.iso_limit.v(1 & t, n), data.config.iso_edges.v(2 & t, n), data.config.iso_facade.v(4 & t, n), data.config.iso_check.v(8 & t, n), data.config.iso_surface.v(16 & t, n), data.config.iso_convex.v(32 & t, n), data.config.iso_ground.v(64 & t, n), data.config.iso_laterallimit.v(128 & t, n))
			},
			Y: function(t, n) {
				const o = function(t) {
					if (void 0 !== t) return Math.abs(t)
				},
				e = function(t) {
					return void 0 !== t && (t < 0 || Object.is(t, -0))
				};
				this.weighting.v(t[0], 0), this.gfactor.v(o(t[1]), 0), this.gfactor_disable.v(e(t[1]), 0), this.temperature.v(t[2], 0), this.humidity.v(t[3], 0), this.W(t[4], 0), this.reflections.v(t[5], 0), this.resolution_limit.v(t[6], 0), this.grid_type.v(o(t[7]), 0), this.contour_styled.v(e(t[7]), 0), this.grid_figures.v(t[8], 0), this.grid_lines.v(t[9], 0), this.show_names.v(t[10], 0), this.contour_type.v(o(t[11]), 0), this.grid_blend.v(!e(t[11]), 0), this.receiver_type.v(t[12], 0), this.precision.v(t[13], 0), this.legend_setting.v(t[14], 0), this.gfactor.v(o(n[1]), 2), this.gfactor_disable.v(e(n[1]), 2), this.temperature.v(n[2], 2), this.humidity.v(n[3], 2), this.W(n[4], 2), this.reflections.v(n[5], 2)
			},
			G: function(t) {
				const n = t[0],
				o = t[1];
				this.weighting.v(t[2], 0), this.gfactor.v(t[3], 0), this.temperature.v(t[4], 0), this.humidity.v(t[5], 0), this.W(t[6], 0), this.reflections.v(t[7], 0), this.resolution_limit.v(t[8], 0), this.grid_type.v(t[9], 0), this.grid_figures.v(t[10], 0), this.grid_lines.v(t[11], 0), this.show_names.v(t[12], 0), this.contour_type.v(t[13], 0);
				const e = {};
				Array.isArray(o) ? (e.setting = 0, e.x = Yu(o), e.y = Yu(o, !0)) : e.setting = o, e.h = n, As(!0, e)
			},
			X: function(t) {
				return {
					weighting: this.weighting.N(),
					precision: this.precision.N(),
					temp: this.temperature.N(t),
					relh: this.humidity.N(t),
					gfactor: !this.gfactor_disable.N(t) && this.gfactor.N(t),
					iso_limit: this.iso_limit.N(t),
					iso_edges: this.iso_edges.N(t),
					iso_facade: this.iso_facade.N(t),
					iso_check: this.iso_check.N(t),
					iso_surface: this.iso_surface.N(t),
					iso_convex: this.iso_convex.N(t),
					iso_ground: this.iso_ground.N(t),
					iso_laterallimit: this.iso_laterallimit.N(t),
					reflections: this.reflections.N(t)
				}
			}
		}
	}
	
	function N() {
		data = {
			config: E(),
			colours: Ii(),
			compare: Ni(),
			grid: {},
			a: [],
			b: [],
			bmp: [],
			gh: [],
			gl: [],
			l: [],
			p: [],
			r: [],
			rr: [],
			ground: {},
			state: {},
			state2: {}
			}, data.V = function(t, n, o) {
			const e = Ho(t);
			if (!Array.isArray(data[e])) return data[e];
			const i = {},
			r = data[e][n];
			if (r)
			for (let e in r) r.hasOwnProperty(e) && (i[e] = data.N(t, n, e, o));
			return i
			}, data.N = function(t, n, o, e) {
			const i = Ho(t),
			r = data[i][n];
			return !!r && r.N(o, e)
			}, data._put = function(n, o, e, i) {
			const r = Ho(n);
			if (null == o && e.name) {
				let t = bl(n, e.name);
				t > -1 && (o = t)
			}
			if (!1 === (i = Bs(i))) return;
			data[r] || (data[r] = {});
			let c = data[r];
			if ("grid" != r && "section" != r) {
				if (!c[o]) {
					if (null == e.setting || null == e.x || null == e.y) return !1;
					if (Oo(n) && e.x.length < 2 || e.x.length != e.y.length) return !1;
					c[o] = {
						type: n,
						index: o,
						K: _l(n, o),
						N: function(t, n) {
							return null == n && (n = Cs), Fs(n) && c.u && void 0 !== c.u[t] ? c.u[t] : c[t]
						},
						tt: function(t) {
							const n = c.u;
							if (!n) return !1;
							if (t) {
								Array.isArray(t) || (t = [t]);
								for (let o = 0; o < t.length; o++)
								if (void 0 !== n[t[o]]) return !0
							} else
							for (let t in n)
							if (n.hasOwnProperty(t)) {
								if ("s" === t) continue;
								if (void 0 !== n[t]) return !0
							} return !1
						},
						nt: function(t, n, o) {
							o ? (c.u || (c.u = {}), c.u[t] = n) : c[t] = n
						}
					}
				}
				c = c[o]
				} else c.type = n, c.nt = function(t, n) {
				c[t] = n
			};
			const s = function(o, r, s) {
				if ("heights" === r && null == o)
				if (null != e.h) o = e.h;
				else {
					o = "grid" === n ? c.h : c.N("h", i)
				}
				"name" !== r || o || o != e.K || (o = "");
				let u = r;
				"adj" === r && 2 === e.adj_type && (u = "adj%");
				let l = s && void 0 === o ? o : qr(n, o, u);
				if (s && ("adj_type" === r && null != o && (s = !1), ["name", "x", "y"].indexOf(r) > -1 && (s = !1)), s && void 0 !== c[r]) {
					if (t.objMatch(c[r], l)) return void c.nt(r, void 0, !0);
					c.nt(r, l, !0)
				} else c.u && t.objMatch(c.u[r], l) && c.nt(r, void 0, !0), c.nt(r, l)
			};
			let u = Fs(i) && function(t) {
				return t = Ho(t), -1 !== So.indexOf(t)
			}(n);
			for (let t in e)
			if (e.hasOwnProperty(t)) {
				s(e[t], t, u)
			} return !0
			}, data._state = function(t) {
			return {
				ground: data.ground,
				state: data.state,
				state2: data.state2
			}
		}
	}
	const T = {},
	L = {},
	S = {},
	R = {},
	D = {},
	H = [];
	const O = 1e-4;
	let P, C, F, q = 0;
	const U = function(t, n) {
		return null == t && (t = q), t === n
	},
	B = function(t) {
		return U(t, 0)
	},
	Z = function(t) {
		return U(t, 1)
	},
	J = function(t) {
		return U(t, 2)
	},
	W = function(t) {
		return U(t, 3)
	};
	let Y, G, X, V, Q, K, tt, nt, ot, et, it = {
		x: 0,
		y: 0
	};
	const rt = [64, 32, 16, 8, 4, 2, 1, .5, .25];
	let ct, st, ut, lt = !1,
	at = !1,
	ft = 1.01;
	const _t = 1500,
	dt = window.devicePixelRatio || 1,
	pt = 256,
	ht = [],
	gt = [{
		name: null,
		entries: []
	}],
	bt = [{
		name: null,
		entries: []
	}],
	mt = [{
		name: null,
		entries: []
	}],
	vt = {
		title: g("title_examples"),
		entries: [{
			name: "ygj82",
			value: g("example_1"),
			id: "ygj82",
			timestamp: null
			}, {
			name: "atpy1",
			value: g("example_2"),
			id: "atpy1",
			timestamp: null
			}, {
			name: "14ua2",
			value: g("example_3"),
			id: "14ua2",
			timestamp: null
		}]
	},
	$t = {};
	let yt = {
		ot: {
			m: {
				et: {},
				it: []
			},
			rt: {
				et: {},
				it: []
			}
		},
		ct: {
			m: {
				et: {},
				it: []
			},
			rt: {
				et: {},
				it: []
			}
		},
		st: {
			m: {
				et: {},
				it: []
			},
			rt: {
				et: {},
				it: []
			}
		},
		ut: []
	};
	const wt = 10,
	xt = .5;
	let kt = 4,
	Mt = 5;
	const jt = -13,
	It = "~",
	zt = " - ",
	At = "#000000",
	Et = "#ffffff",
	Nt = "transparent",
	Tt = function(t) {
		return "rgba(" + t.join(", ") + ")"
	},
	Lt = function(t) {
		return Tt([0, 0, 0, t])
	},
	St = function(t) {
		return Tt([255, 255, 255, t])
	},
	Rt = "#ffffff",
	Dt = "#ff0000",
	Ht = "alert",
	Ot = "error",
	Pt = "info",
	Ct = "success",
	Ft = "none",
	qt = "normal",
	Ut = "bold",
	Bt = "M0 0",
	Zt = "t0,0",
	Jt = [g("off"), g("on")],
	Wt = [svgIcon("disabled", {
		w: 32
		}), svgIcon("enabled", {
		w: 32
	})],
	Yt = (g("off"), g("on"), [g("prop_line"), g("prop_measurement"), g("prop_area")]),
	Gt = [svgIcon("line", {
		vw: 40,
		w: 32
		}), svgIcon("measure", {
		vw: 40,
		w: 32
		}), svgIcon("area", {
		vw: 40,
		w: 32
	})],
	Xt = [g("spectrum_single"), g("spectrum_octaves")],
	Vt = [svgIcon("freq", {
		vw: 40,
		w: 32
		}), svgIcon("octaves", {
		vw: 40,
		w: 32
	})],
	Qt = [svgIcon("slope0", {
		vw: 32,
		w: 32
		}), svgIcon("slope1", {
		vw: 32,
		w: 32
	})],
	Kt = [g("prop_slope_flat"), g("prop_sloped")],
	tn = [svgIcon("roof0", {
		vw: 36,
		w: 32
		}), svgIcon("roof1", {
		vw: 36,
		w: 32
		}), svgIcon("roof2", {
		vw: 36,
		w: 32
		}), svgIcon("roof3", {
		vw: 36,
		w: 32
	})],
	nn = [g("prop_slope_flat"), g("prop_sloped"), g("prop_roof_gable"), g("prop_roof_hip")],
	on = [g("line_method_0"), g("line_method_1")],
	en = [svgIcon("window"), svgIcon("ring"), svgIcon("dot"), svgIcon("bullet")],
	rn = [g("r_label"), g("r_white_dot"), g("r_db_dot"), g("r_icon_only")],
	cn = [g("hidden"), g("visible")],
	sn = [svgIcon("freq_off", {
		vw: 40,
		w: 32
		}), svgIcon("octaves", {
		vw: 40,
		w: 32
	})],
	un = [g("off"), g("rr_rays"), g("rr_waves")],
	ln = [g("height_specify"), g("height_match")],
	an = [g("adj_off"), g("adj_db"), g("adj_percent")],
	fn = [g("prop_unlocked"), g("prop_locked")],
	_n = [svgIcon("disabled", {
		w: 32
		}), svgIcon("lock", {
		w: 32
	})],
	dn = [{}, {
		title: g("hidden"),
		type: "multiply"
		}, {
		title: g("visible"),
		type: "multiply"
		}, {
		title: g("bmp_merge_3"),
		type: "multiply"
		}, {
		title: g("bmp_merge_4")
		}, {
		title: g("bmp_merge_5"),
		alpha: .5
		}, {
		title: g("bmp_merge_6"),
		type: "darken"
		}, {
		title: g("bmp_merge_7"),
		type: "soft-light"
		}, {
		title: g("bmp_merge_8"),
		type: "luminosity"
		}, {
		title: g("bmp_merge_9"),
		type: "destination-over"
	}],
	pn = {
		fill: Ft,
		"fill-opacity": 1,
		stroke: At,
		"stroke-opacity": 1,
		"stroke-width": 1,
		"stroke-linejoin": "round",
		"stroke-linecap": "round",
		"stroke-dashoffset": 0,
		"stroke-dasharray": ""
	};
	
	function hn(t = {}, n, o, e, i) {
		function r(t, n) {
			t.class ? t.class += " " + n : t.class = n
		}
		return n && (t.opacity = 0), o && r(t, "no_export"), e && r(t, "passthrough"), i && r(t, "show_hover"), t
	}
	let gn = 16;
	
	function bn(t) {
		return t ? Math.round(gn / 16 * t) : gn = parseInt($("body").css("font-size"))
	}
	
	function mn(t = 9) {
		return bn(t)
	}
	const vn = hn({
		fill: At,
		stroke: Et
	}, 1, 1),
	$n = hn({
		fill: Et,
		stroke: At
	}, 1, 1),
	yn = hn({
		fill: Et,
		"stroke-linejoin": "miter"
	}),
	wn = hn({
		fill: At,
		stroke: Et,
		"stroke-linejoin": "miter"
	}),
	xn = hn({
		fill: St(.25),
		"fill-opacity": "0.5",
		"stroke-dasharray": "0.5 9.5"
	}, !0, !0, !0),
	kn = hn({
		stroke: Et,
		"stroke-width": 3
	}, 0, 0, 1),
	Mn = hn({
		"stroke-linecap": "butt"
	}, 0, 0, 1),
	jn = hn({
		stroke: Et,
		"stroke-width": wt
	}, 1),
	In = hn({
		fill: At,
		stroke: Et,
		"stroke-width": wt
	}, 1),
	zn = hn({
		stroke: Rt,
		"stroke-width": 7
	}, 1, 1, 1, 1),
	An = (hn({
		fill: Rt,
		"fill-opacity": "0.5"
		}, 1, 1, 1, 1), hn({
		stroke: Rt,
		"stroke-width": 9
	}, 1, 1, 1, 1)),
	En = hn({
		stroke: Rt,
		"stroke-width": 11
	}, 1, 1, 1, 1),
	Nn = hn({
		stroke: Et,
		"stroke-dasharray": "4 6"
	}, 1, 0, 1),
	Tn = hn({
		"stroke-dasharray": "4 6",
		"stroke-dashoffset": 5
	}, 1, 0, 1),
	Ln = hn({
		stroke: Et,
		"stroke-dasharray": "4 6"
	}, 1, 1, 1),
	Sn = hn({
		"stroke-dasharray": "4 6",
		"stroke-dashoffset": 5
	}, 1, 1, 1);
	let Rn = !0,
	Dn = {};
	const Hn = 2;
	
	function On(t) {
		return Array.isArray(t) ? t : [t]
	}
	
	function Pn(n) {
		const o = function(n) {
			return n >= 1e3 ? n / 1e3 + "k" : t.round(n, 1, h)
		};
		if (null != n) return o(t.f[n]);
		const e = [];
		for (let n = 0; n < t.f.length; n++) e.push(o(t.f[n]));
		return e
	}
	
	function Cn(t) {
		return null != t && !1 !== t && !0 !== t && isFinite(t)
	}
	
	function Fn(t) {
		for (let n = 0; n < t.length; n++)
		if (!Cn(t[n])) return !1;
		return !0
	}
	
	function qn(t) {
		return t.toLocaleString(h)
	}
	
	function Un(n) {
		return t.round(n, 5)
	}
	
	function Bn(t) {
		return null == t || !1 === t ? t : Un(t)
	}
	
	function Zn(n) {
		return t.round(n, 5)
	}
	
	function Jn(n) {
		return t.round(n, 0)
	}
	
	function Wn(n) {
		return t.round(n, 5)
	}
	
	function Yn(n) {
		return t.round(n, 6)
	}
	
	function Gn(n) {
		return t.round(n, Hn)
	}
	
	function Xn(n) {
		return "number" != typeof n ? n : t.round(n, 1)
	}
	
	function Vn(n) {
		return null == n || !1 === n ? null : t.round(n, 1)
	}
	
	function Qn(n, o = "") {
		return null == n || !1 === n ? o : t.round(n, data.config.precision.N(), h, !0)
	}
	
	function Kn(n, o) {
		return null == n || !1 === n ? "" : t.round(n, 1, h) + (o ? Io(!0) : "")
	}
	
	function to(n, o) {
		return n = null == n || 0 == n ? "0" : t.round(n, 1, h), o ? No(n) : n
	}
	
	function no(n, o) {
		return n = null == n || 0 == n ? "0" : t.round(n, 1, h), o ? No(n) : n
	}
	
	function oo(n, o, e = !0) {
		if (Array.isArray(n)) {
			for (let t = 0; t < n.length; t++) n[t] = oo(n[t], o, e);
			return n
		}
		return Cn(n) ? t.round(n, o, e ? h : null, !0) : ""
	}
	
	function eo(t) {
		return "string" == typeof t ? parseFloat(t, h) : t
	}
	
	function io(t) {
		return t * (Math.PI / 180)
	}
	
	function ro(t, n) {
		if (Array.isArray(n))
		for (let o = 0; o < n.length; o++) ro(t, n[o]);
		else isFinite(n) && t.push(n)
	}
	
	function co(t) {
		return t < 10 ? "0" + t : t
	}
	
	function so(t) {
		return Array.isArray(t) ? Math.max.apply(null, t) : t
	}
	
	function uo(t) {
		return Array.isArray(t) ? Math.min.apply(null, t) : t
	}
	
	function lo(t) {
		return t / ct
	}
	
	function ao(t) {
		return [po(t[0]), ho(t[1])]
	}
	
	function fo(t) {
		return (t - it.x) / ct
	}
	
	function _o(t) {
		return (t - it.y) / ct
	}
	
	function po(t) {
		return t * ct + it.x
	}
	
	function ho(t) {
		return t * ct + it.y
	}
	
	function go(t) {
		return Jn(po(t))
	}
	
	function bo(t) {
		return Jn(ho(t))
	}
	
	function mo(t) {
		return t / st * Math.cos(ef()) + data.section.x[0]
	}
	
	function vo(t) {
		return t / st * Math.sin(ef()) + data.section.y[0]
	}
	
	function $o(t) {
		return (T.ct.canvas.lt - t) / st + of()
	}
	
	function yo(t, n) {
		return Math.abs(Math.abs(ef()) - Math.PI / 2) < O ? (n - data.section.y[0]) / Math.sin(ef()) * st : (t - data.section.x[0]) / Math.cos(ef()) * st
	}
	
	function wo(t) {
		return T.ct.canvas.lt - (t - of()) * st
	}
	
	function xo(t, n) {
		return "t" + Jn(t) + "," + Jn(n)
	}
	
	function ko(t, n) {
		return xo(po(t), ho(n))
	}
	
	function Mo(t) {
		if (Array.isArray(t)) {
			for (let n = 0; n < t.length; n++) t[n] = Mo(t[n]);
			return t
		}
		return t = Jn(t -= xt), t += xt
	}
	
	function jo(n, o = 1) {
		return n >= 1e3 ? t.round(n / 1e3, o) + "k" : n
	}
	
	function Io(t) {
		return " dB" + (!t && data.config.weighting.N() ? "(A)" : "")
	}
	
	function zo(t, n, o, e, i, r = !0) {
		const c = r ? 1 : -1,
		s = Math.cos(i),
		u = Math.sin(i);
		return [s * (t - o) + u * (n - e) * c + o, s * (n - e) + u * (t - o) * -c + e]
	}
	
	function Ao(t, n, o = !0, e = !0) {
		return e ? t + 1 < n ? t + 1 : o ? 0 : t - 1 : t > 0 ? t - 1 : o ? n - 1 : t + 1
	}
	
	function Eo(t) {
		const n = new Date,
		o = new Date(t);
		let e = (n.getTime() - o.getTime()) / 1e3;
		return e <= 60 ? g("time_now") : (e /= 60) < 60 ? g("time_ago", (0 | e) + g("time_m")) : (e /= 60) < 24 ? g("time_ago", (0 | e) + g("time_h")) : t
	}
	
	function No(t = "") {
		return g("distance_m", t)
	}
	
	function To(n) {
		return n || 0 === n ? "string" == typeof n ? No(n) : n >= 1e3 ? g("distance_km", t.round(n / 1e3, 3, h)) : No(t.round(n, 1, h)) : ""
	}
	
	function Lo(t) {
		return [
			[t[0], t[1]],
			[t[2], t[1]],
			[t[2], t[3]],
			[t[0], t[3]]
		]
	}
	const So = ["p", "l", "b"];
	const Ro = function(t) {
		switch (t) {
			case "r":
			return g("prop_spectrum");
			case "rr":
			return g("prop_mode");
			case "a":
			return g("prop_type");
			case "bmp":
			case "map":
			return g("prop_lock")
		}
		return g("prop_status")
	};
	
	function Do(t, n) {
		const o = function(t) {
			switch (t) {
				case "setting":
				return Ro(n);
				case "h_option":
				return g("prop_height_opt");
				case "h":
				return g("prop_height");
				case "h_roof":
				return g("prop_h_roof");
				case "roof":
				return g("prop_roof");
				case "slope":
				return g("prop_slope");
				case "lvl":
				return g("prop_level");
				case "hz":
				return g("prop_hz");
				case "rc":
				return g("prop_rc");
				case "method":
				return g("prop_type");
				case "merge":
				return g("prop_setting");
				case "adj":
				return g("prop_adj");
				case "spectrum":
				return g("prop_spectrum");
				case "colour":
				return g("colour")
			}
			console.warn("property not found", t)
		}(t);
		return o || (e = t).charAt(0).toUpperCase() + e.slice(1);
		var e
	}
	
	function Ho(t) {
		return "c" === t ? "b" : "map" === t ? "bmp" : t
	}
	
	function Oo(t) {
		return "a" === (t = Ho(t)) || "l" === t || "b" === t || "gl" === t
	}
	
	function Po(t) {
		return "l" === t || "p" === t
	}
	
	function Co(t) {
		return "object" == typeof t && null != t && (t = t.type), "gh" === t || "gl" === t
	}
	
	function Fo() {
		return data.gh.length + data.gl.length > 0
	}
	
	function qo(t) {
		return t ? JSON.parse(JSON.stringify(t)) : t
	}
	
	function Uo(t, n) {
		const o = Ho(t);
		let e;
		if ("views" !== t && Array.isArray(data[o])) {
			const n = data[o].length;
			e = [];
			for (let o = 0; o < n; o++) e[o] = data.V(t, o)
		} else e = data[o];
		return e
	}
	
	function Bo(t, n, o) {
		if ("grid" === t || "section" === t) return data[t];
		return data.V(t, n, o)
	}
	
	function Zo(t, n = !0) {
		return g(n && "grid" !== t && "section" !== t ? "obj_title_" + t + "_plural" : "obj_title_" + t)
	}
	
	function Jo(t) {
		return g("obj_title_" + t + "_short")
	}
	
	function Wo(t, n, o, e) {
		let i;
		return i = "grid" === t ? "mode0" : "config" === t ? "settings" : "add" + Bo(t, n).type, o || (o = {
			w: 40
		}), o.vw = 40, svgIcon(i, o, e)
	}
	
	function Yo(t) {
		if ("object" == typeof t && null != t) return t;
		const n = Ho(t);
		return null == R[n] && (R[n] = new Snap.set), R[n]
	}
	
	function Go(t, n, o) {
		if (!o) return;
		const e = Yo(t),
		i = Snap.set();
		i.n = n;
		for (let t = 0; t < o.length; t++) i.push(o[t]);
		let r;
		for (r = 0; r < e.items.length && (e.items[r].n === n && e.items[r].remove().clear(), !(e.items[r].n > n)); r++);
		e.splice(r, 0, i)
	}
	const Xo = function(t, n, o) {
		const e = n[o],
		i = t[o];
		return k_.at(i, e)
	},
	Vo = function(t, n, o) {
		const e = n[o];
		return t[o] + " " + e
	},
	Qo = function(t, n, o) {
		const e = [];
		for (let i = 0; i < t.length; i++) e.push(o ? Xo(t, n, i) : Vo(t, n, i));
		return e
	};
	
	function Ko(t, n) {
		const o = "bmp" === Ho(n) ? _n : Wt,
		e = "bmp" === Ho(n) ? fn : Jt;
		return k_.at(-1 === (i = t) ? svgIcon("invalid", {
			w: 32
		}) : i > 0 ? o[1] : o[0], function(t) {
		return -1 === t ? Jt[1] + " [" + g("prop_invalid") + "]" : t > 0 ? e[1] : e[0]
		}(t), function(t) {
		return -1 === t ? "invalid_icon" : t > 0 ? "enabled_icon" : "disabled_icon"
		}(t));
		var i
	}
	
	function te() {
		ot = document.body.clientWidth, et = document.body.clientHeight;
		const t = {
			width: ot,
			height: et,
			viewBox: "0 0 " + ot + " " + et
		};
		L.bitmaps.attr(t), L.objects.attr(t)
	}
	
	function ne(t) {
		te(), ie()
	}
	
	function oe(t) {
		Ie(), ve(), cu(), el(), Ls(), Vs()
	}
	const ee = {
		A: function(n) {
			return t.toNumber($("input[name=" + n + "]:checked").val())
		},
		$: function(t) {
			return $("#" + t).is(":checked")
		},
		M: function(n, o) {
			const e = $("#" + n).val();
			return "" !== e ? t.toNumber(e) : o
		}
	};
	
	function ie() {
		const t = data.config;
		t.show_names.F(), t.grid_figures.F(), t.grid_lines.F(), t.resolution_limit.F(), t.contour_type.F(), t.contour_styled.F(), t.grid_blend.F(), t.grid_type.F(), t.receiver_type.F(), t.legend_setting.F(), t.weighting.F(), t.precision.F(), t.gfactor.F(), t.gfactor_disable.F(), t.temperature.F(), t.humidity.F(), t.iso_limit.F(), t.iso_edges.F(), t.iso_facade.F(), t.iso_check.F(), t.iso_surface.F(), t.iso_convex.F(), t.iso_ground.F(), t.iso_laterallimit.F(), t.reflections.F(), n && (f = ee.$("light_theme"), _ = ee.$("multithread"), d = ee.$("disable_gh")), p = ee.$("grid_triangulation"), ce()
	}
	const re = {
		$: function(t, n) {
			$("#" + t).prop("checked", 1 == n)
		},
		A: function(t, n) {
			$("#" + t + "_" + n).prop("checked", !0)
		},
		M: function(t, n) {
			$("#" + t).ft(eo(n))
		},
		T: function(t, n) {
			$("#control_" + t).toggleClass("state_change", n)
		}
	};
	
	function ce() {
		const t = data.config;
		t.show_names.q(), t.grid_figures.q(), t.grid_lines.q(), t.resolution_limit.q(), t.contour_type.q(), t.contour_styled.q(), t.grid_blend.q(), t.grid_type.q();
		const n = t.grid_type.N(),
		o = t.contour_type.N();
		v_("resolution_limit", 0 === n), v_("contour_type", n < 2), v_("contour_styled", !(o > 0 && (2 === n || 5 === n))),
		function() {
			const t = data.config.resolution_limit.N(),
			n = data.config.grid_type.N(),
			o = data.config.contour_type.N(),
			e = data.config.contour_styled.N(),
			i = 2 === n || 5 === n,
			r = i && 1 === t;
			$("#control_resolution_limit .alert_icon")._t(!r);
			const c = i && o && e && t < 3;
			$("#control_contour_styled .alert_icon")._t(!c)
			}(), $("#wrap").toggleClass("gridOn", n > 0), t.receiver_type.q(), t.legend_setting.q(), t.weighting.q(), t.precision.q(), t.gfactor.q(), t.gfactor_disable.q(), v_("gfactor", 1 === t.gfactor_disable.N()), t.temperature.q(), t.humidity.q(), t.iso_limit.q(), t.iso_edges.q(), t.iso_facade.q(), t.iso_check.q(), t.iso_surface.q(), t.iso_convex.q(), t.iso_ground.q(), t.iso_laterallimit.q(), v_("iso_laterallimit", 1 !== t.iso_edges.N()), v_("iso_convex", 1 !== t.iso_edges.N()), t.reflections.q(), $("body").toggleClass("light_theme", f), re.$("multithread", _), re.$("disable_gh", d), re.$("grid_triangulation", p), $(".toggle_control label").each((function() {
				$(this).dt($("input", this).is(":checked"))
			})), se()
	}
	
	function se() {
		$("#control_group-gh").toggle(Fo())
	}
	
	function ue() {
		return k_.at(svgIcon(Ht), g("alert_slow_browser"), "alert_icon")
	}
	
	function le(t, n, o) {
		Array.isArray(n) || (n = [n]), void 0 !== window[o] ? t() : loadScripts(n, t)
	}
	
	function ae(t, n, o, e, i, r) {
		null != t && (-1 === n.indexOf(".") && (n += ".js"), !e && fe(n) || $.ajax({
			url: n,
			data: {},
			dataType: "json",
			beforeSend: function(t) {
				t.overrideMimeType && t.overrideMimeType("application/json")
			},
			success: function(c) {
				if (c) {
					! function(t) {
						if (fe(t)) return;
						ht.push(t)
						}(n), e && function(t) {
						let n = 0;
						for (; n < t.length;) {
							if (t[n].user) return void t.splice(n, 1);
							n++
						}
					}(t);
					for (let n = 0; n < c.length; n++) {
						const i = de(t, c[n].title, o);
						e && (t[i].name = e, t[i].user = !0), _e(t, i, o, c[n].entries, r)
					}
					i && i()
				} else console.error(g("alert_file_error", decodeURI(n)))
			},
			error: function(t) {
				console.error(g("alert_file_inaccessible", decodeURI(n)))
			}
		}))
	}
	
	function fe(t) {
		return ht.indexOf(t) > -1
	}
	
	function _e(n, o, e, i, r = !0) {
		if ("string " == typeof o && (o = de(n, o, e)), null == n || !n[o] || null == i || !i.length) return;
		const c = n[o].entries;
		Array.isArray(i) || (i = [i]);
		for (let o = 0; o < i.length; o++) {
			const e = i[o],
			s = e.value;
			e.category;
			if (r) {
				let n = 0;
				for (; n < c.length;) {
					const o = c[n];
					if (e.category == o.category && t.arrayMatch(s, o.value)) break;
					n++
				}
				if (n < c.length) continue
			}
			if (n === bt && s && Array.isArray(s))
			for (let t = 0; t < s.length; t++) s[t] = ki(s[t]);
			c.push(i[o])
		}
		return !0
	}
	
	function de(t, n, o) {
		let e = 0;
		if (n)
		for (; e < t.length && t[e].name !== n;) e++;
		return e === t.length && (t[e] = {
			name: n,
			entries: [],
			order: o
		}), e
	}
	
	function pe(t) {
		for (let n = 0; n < t.length; n++)
		if (t[n].user) return t[n];
		return t[0]
	}
	
	function he(t, n) {
		if (!t || !n || !n.id) return;
		return pe(t).entries.unshift(n), !0
	}
	
	function ge(t, n) {
		if (null == t || null == n) return;
		const o = pe(t);
		for (let t = 0; t < o.entries.length; t++)
		if (o.entries[t].id === n) return o.entries.splice(t, 1), !0
	}
	
	function be(t, n, o) {
		let e = [];
		for (let n = 0; n < t.length; n++) {
			const o = t[n];
			e.push({
				library: o,
				order: o.order,
				i: n
			})
		}
		e.sort((function(t, n) {
			return t.order - n.order
		}));
		const i = [];
		for (let t = 0; t < e.length; t++) {
			const o = e[t].library,
			r = e[t].i,
			c = o.name,
			s = o.entries;
			for (let t = 0; t < s.length; t++) {
				const o = s[t];
				null != n && o.category != n || i.push({
					ht: c,
					gt: qo(o.name),
					bt: qo(o.value),
					vt: qo(o.category),
					i: r,
					j: t
				})
			}
		}
		return i
	}
	
	function me(t, n, o, e, i) {
		const r = data.grid;
		r.setting = 0, Fn([t, n, o, e]) && t !== o && n !== e || (t = r.x[0], n = r.y[0], o = r.x[1], e = r.y[1]);
		const c = [Math.min(t, o), Math.max(t, o)],
		s = [Math.min(n, e), Math.max(n, e)];
		c[1] - c[0] < 5 && (c[1] = c[0] + 5), s[1] - s[0] < 5 && (s[1] = s[0] + 5), r.x = c, r.y = s, i && (xe("grid"), Uu())
	}
	
	function ve() {
		let n = !1;
		const o = data.grid;
		if (o.setting > 0) {
			let e, i;
			if (1 === o.setting) {
				const t = aa(!0);
				if (Cn(t[0])) {
					let n = Math.max(.05 * (t[2] - t[0]), .05 * (t[3] - t[1]));
					n < 5 && (n = 5), e = [Zn(t[0] - n), Zn(t[2] + n)], i = [Zn(t[1] - n), Zn(t[3] + n)]
				}
			} else 2 === o.setting && (e = [fo(0), fo(ot)], i = [_o(0), _o(et)]);
			null != e && (t.arrayMatch(o.x, e) && t.arrayMatch(o.y, i) || (o.x = e, o.y = i, n = !0))
		}
		tt = o.x[1] - o.x[0], nt = o.y[1] - o.y[0];
		let e, i, r, c, s = 0,
		u = 0;
		return e = Jn(tt * ct), i = Jn(nt * ct), r = Jn(o.x[0] * ct + it.x), r + e < 0 || r > ot ? e = 0 : r < 0 && (s = -r, e += r, r = 0), c = Jn(o.y[0] * ct + it.y), c + i < 0 || c > et ? i = 0 : c < 0 && (u = -c, i += c, c = 0), r + e > ot && (e = ot - r), c + i > et && (i = et - c), Y === e && G === i || (Y = e, G = i, n = !0), Q === s && K === u || (Q = s, K = u, n || (n = null)), n && $e(T.ot, Y, G), V = c, X = r, $(T.ot.canvas).css({
			left: X,
			top: V
		}), n
	}
	
	function $e(t, n, o, e) {
		const i = t.canvas;
		if (!n || !o) return !1;
		e || (e = dt);
		let r = Math.round(n * e),
		c = Math.round(o * e);
		for (; !canvasSize.test({
			width: r,
			height: c
		});)
		if (r /= 2, c /= 2, e /= 2, !isFinite(r) || !isFinite(c)) return !1;
		if (i.width === r && i.height === c) return !0;
		i.width = r, i.height = c, i.$t = n, i.lt = o;
		try {
			t.scale(e, e), i.yt = e
			} catch (t) {
			return console.error("Canvas cannot be scaled"), !1
		}
		return $(i).css({
			width: n,
			height: o
		}), !0
	}
	
	function ye(t, n) {
		const o = null == t ? "t0,0" : xo(t, n);
		H.forEach((function(t) {
			t.transform(o)
		}))
	}
	
	function we(t = {}) {
		ie(), t && ((t.wt || t.xt || t.kt) && Hu(), t.Mt && rr(), (t.kt || t.Mt) && Pi(), t.wt && Ts(), (t.wt || t.kt) && yf(), t.ot && Qe(), t.V && xe(t.V), t.jt && (Ie(), Qe(!0), Us() && Vs()), t.It && cu(), Uu("details" === t || "style" === t))
	}
	
	function xe(t, n) {
		if (t = Ho(t), -1 === n) {
			n = Yo(t).length - 1
		}
		if ("target" === t) return;
		"grid" !== t && "section" !== t && "state" !== t && "bmp" !== t && Ie();
		let o = 0,
		e = 0;
		ve() && e++, e && Du("grid"), ("section" === t || J() && Co(t)) && function() {
			if (!Va.zt) return;
			Qa(), cf(), lf(!0), Va.zt.At() || ($e(T.ct, Va.Et, Va.Nt), L.section.attr({
				width: Va.Et,
				height: Va.Nt,
				viewBox: "0 0 " + Va.Et + " " + Va.Nt
			}));
			Ts()
		}(), ["grid", "p", "l", "b", "gh", "gl", "config"].indexOf(t) > -1 && e++, J() && o++, "state" === t && o++, "bmp" === t && o++, Du(t, n), "bmp" === t && Ou(), Co(t) && (Z() && Du("b"), Du("a")), e || "rr" !== t || bi(), e || "r" !== t || gi(n), e > 0 ? Qe(!0) : "section" === t ? Qe(3) : "state" === t ? Qe(0) : o > 0 && Pi(), "state" === t && (Du("rr"), Du("b")), W() && "target" !== t && yf(), Hu(), t && "grid" !== t || (Os(), W() && mf()), ke()
	}
	
	function ke() {
		Dn.Lt.Tt() && Al(), Dn.St.Tt() && ou(), Vs()
	}
	
	function Me(t) {
		"grid" === t && (Qe(1), bi("grid"), Os(), W() && mf()), W() && "target" !== t && yf(), Hu()
	}
	
	function je(n, o) {
		function e(n, o, e, i, r, c) {
			let s = t.linesIntersection(e, i, r, c, !0);
			if (s.hit || s.above) {
				let t = Math.hypot(e[0] - s.x, e[1] - s.y);
				for (let e = 0; e < o.length; e++)
				if (o[e] > t) {
					o.splice(e, 0, t), n.splice(e, 0, [s.x, s.y, s.h]);
					break
				}
			}
		}
		return function(t) {
			for (let n = 1; n < t.length - 1; n++) t[n - 1][2] === t[n][2] && t[n][2] === t[n + 1][2] && (t.splice(n, 1), n--);
			return t
			}(function(t, n) {
				const o = data.ground;
				let i = [t, n],
				r = [0, Math.hypot(t[0] - n[0], t[1] - n[1])];
				if (!o.gh_tri) return i;
				for (let c = 0; c < o.gh_tri.length; c++)
				if (c > o.gh_trihalf[c]) {
					e(i, r, t, n, o.gh[o.gh_tri[c]], o.gh[o.gh_tri[c % 3 == 2 ? c - 2 : c + 1]])
				} if (!o.gh_slopes) return i;
				for (let c = 0; c < o.gh_slopes.length; c++) {
					e(i, r, t, n, o.gh_slopes[c][0], o.gh_slopes[c][1])
				}
				return i
			}(n, o))
	}
	
	function Ie() {
		(function() {
			for (let n = 0; n < data.gl.length; n++) {
				const o = data.gl[n];
				let e = 0;
				for (let i = 0; i < o.x.length - 1; i++) {
					const r = [o.x[i], o.y[i]],
					c = [o.x[i + 1], o.y[i + 1]];
					for (let n = i + 2; n < o.x.length - 1; n++) {
						const i = [o.x[n], o.y[n]],
						s = [o.x[n + 1], o.y[n + 1]];
						if (e = t.linesIntersection(r, c, i, s), e) break
					}
					if (e) break;
					for (let o = 0; o < data.gl.length; o++) {
						if (n === o) continue;
						const i = data.gl[o];
						for (let n = 0; n < i.x.length - 1; n++) {
							const o = [i.x[n], i.y[n]],
							s = [i.x[n + 1], i.y[n + 1]];
							if (e = t.linesTouching(r, c, o, s), e) break;
							if (e = t.linesIntersection(r, c, o, s), e) break
						}
						if (e) break
					}
					if (e) break
				}
				o.setting = 0 === e ? 1 : -1
			}
		})(),
		function() {
			const n = data.ground;
			n.gh = [], n.gh_tri = [], n.gh_border = [], n.gh_trihalf = [], n.gh_slopes = [], n.gh_min = null;
			const o = function(t) {
				(null == n.gh_min || n.gh_min > t.z) && (n.gh_min = t.z)
			};
			if (!Fo() || d) return;
			for (let t = 0; t < data.gh.length; t++) {
				const e = data.gh[t];
				n.gh.push([e.x, e.y, e.z]), o(e)
			}
			const e = [];
			for (let t = 0; t < data.gl.length; t++) {
				const i = data.gl[t];
				if (!(i.setting < 0)) {
					for (let t = 0; t < i.x.length; t++) n.gh.push([i.x[t], i.y[t], i.z]), t > 0 && e.push([n.gh.length - 2, n.gh.length - 1]);
					o(i)
				}
			}
			const i = Delaunator.from(n.gh);
			e.length && i.triangles.length && new Constrainautor(i).constrainAll(e), n.gh_tri = i.triangles, n.gh_trihalf = i.halfedges, n.gh_border = i.hull;
			let r = [];
			for (let o = 0; o < i.hull.length; o++) {
				const e = n.gh[i.hull[o]],
				c = n.gh[i.hull[o < i.hull.length - 1 ? o + 1 : 0]],
				s = t.perpendicularXY(e, c, 1e4),
				u = s[0],
				l = s[1],
				a = [e[0] + u, e[1] + l, e[2]],
				f = [c[0] + u, c[1] + l, c[2]];
				r.push([e, a], [c, f])
			}
			n.gh_slopes = r, Hi(), Z() && cu()
			}(), ["a", "p", "r", "rr", "b", "l"].forEach((function(n) {
				const o = data[n];
				for (let n = 0; n < o.length; n++) {
					const r = o[n];
					r.z = (e = r.x, i = r.y, Array.isArray(e) ? t.calcGroundHeights(e, i) : t.calcGroundHeight(e, i))
				}
				var e, i
			})),
			function(n) {
				for (let o = 0; o < data.b.length; o++) {
					const e = data.b[o],
					i = t.isClockwise(e.x, e.y);
					e.cw !== i && data._put(n, o, {
						cw: i
					}, 0)
				}
			}("b"), ze(1), Cs && ze(2)
	}
	
	function ze(n) {
		! function(t) {
			for (let n = 0; n < data.b.length; n++) {
				const o = data.V("b", n, t),
				e = (Fs(t), "c" === o.type);
				o.slope && e && data._put("b", n, {
					slope: 0
				}, t);
				let i = o.roof;
				if (!i || e && 4 === o.x.length || (i = 0), i) {
					i > 0 !== Fc(o) && (i = 0)
				}
				let r = o.h_roof;
				null == r || i || (r = null), (i && !r || i > 1 && r <= o.h) && (r = o.h + 1), o.roof === i && o.h_roof === r || data._put("b", n, {
					roof: i,
					h_roof: r
				}, t)
			}
		}(n),
		function(n) {
			const o = function(t, n, o, e, i) {
				let r = o;
				do {
					if (r = Ao(r, t.length, e, i), r === o) return !1
				} while (t[r] === t[o] && n[r] === n[o]);
				return r
			},
			e = function(n, o, e, i, r, c, s) {
				const u = [];
				u.push(t.lineAngle(e, i, n, o)), u.push(t.lineAngle(e, i, r, c)), s && u.reverse();
				let l = t.arcAngle(u);
				return l > Math.PI && (u.reverse(), l = t.arcAngle(u)), u.push(l), u
			};
			for (let i = 0; i < data.b.length; i++) {
				const r = data.V("b", i, n),
				c = "c" === r.type,
				s = !c && r.slope,
				u = r.roof,
				l = r.h_roof,
				a = r.h,
				f = r.x,
				_ = r.y,
				d = r.z,
				p = d[0],
				h = r.cw,
				g = [],
				b = [],
				m = [],
				v = [],
				$ = [],
				y = [],
				w = function(t, n, o, e, i, r) {
					g.push(t), b.push(n), m.push(o), v.push(e), $.push(i), y.push(r)
				};
				for (let n = 0; n < f.length; n++) {
					const i = o(f, _, n, c, !1),
					r = o(f, _, n, c);
					if (!1 === i || !1 === r) break;
					const g = f[i],
					b = _[i],
					m = f[n],
					v = _[n],
					$ = d[n],
					y = f[r],
					x = _[r],
					k = d[r],
					M = !c && g === y && b === x;
					let j;
					c ? j = h : M || (j = t.isClockwise([g, m, y], [b, v, x]));
					const I = e(g, b, m, v, y, x, j);
					let z = a;
					if (1 === u && (1 !== n && 2 !== n || (z = l)), 2 === u && (1 === n || 3 === n)) {
						const n = (g + m) / 2,
						o = (b + v) / 2,
						e = t.calcGroundHeight(n, o),
						i = l + (p - e),
						r = t.lineAngle(g, b, m, v),
						c = t.invertAngle(r),
						s = [];
						h ? s.push(r, c) : s.push(c, r), s.push(t.arcAngle(s)), w(n, o, e, i, s, null)
					}
					if (w(m, v, $, z + (s ? 0 : d[0] - $), I, j), !c && n + 1 < f.length) {
						const n = je([m, v, $], [y, x, k]);
						for (let o = 1; o < n.length - 1; o++) {
							const e = n[o],
							i = s ? 0 : d[0] - e[2];
							w(e[0], e[1], e[2], z + i, [I[0], t.invertAngle(I[0]), 0], null)
						}
					}
				}
				const x = function() {
					const n = function(t) {
						return [g[t], b[t], m[t] + v[t]]
					},
					o = function(n, o, e) {
						return t.planeNormal(n, o, e)
					};
					let e, i, c, s;
					if (1 === u) {
						const t = n(0),
						e = n(1),
						r = n(2),
						u = n(3);
						let l;
						l = h ? o(t, e, r) : o(t, r, e), i = [l], c = [
							[t, e, r]
							], s = [
							[t, e, r],
							[r, u, t]
						]
					}
					if (2 === u) {
						const r = n(1),
						u = n(4),
						l = t.angle(r[0], r[1], u[0], u[1]),
						a = .001,
						f = isNaN(l) ? 0 : Math.cos(l) * a,
						_ = isNaN(l) ? 0 : Math.sin(l) * a,
						d = [r[0] + f, r[1] + _, r[2]],
						p = [u[0] - f, u[1] - _, u[2]],
						g = n(0),
						b = n(5),
						m = n(2),
						v = n(3);
						let $, y;
						h ? ($ = o(g, r, u), y = o(v, u, r)) : ($ = o(g, u, r), y = o(v, r, u)), e = [
							[d, p, y, $]
							], i = [$, y], c = [
							[g, r, u],
							[u, r, b]
							], s = [
							[g, r, u],
							[u, b, g],
							[m, r, u],
							[u, v, m]
						]
					}
					if (3 === u) {
						const t = n(0),
						u = n(1),
						a = n(2),
						f = n(3),
						_ = nc(r),
						d = [_[0], _[1], p + l],
						g = [_[2], _[3], p + l],
						b = _[4],
						m = [t, u, d],
						v = [u, a, b ? d : g],
						$ = [a, f, g],
						y = [f, t, b ? g : d];
						let w, x, k, M;
						h ? (w = o(m[0], m[1], m[2]), x = o(v[0], v[1], v[2]), k = o($[0], $[1], $[2]), M = o(y[0], y[1], y[2])) : (w = o(m[0], m[2], m[1]), x = o(v[0], v[2], v[1]), k = o($[0], $[2], $[1]), M = o(y[0], y[2], y[1])), e = [
							[t, d, w, M],
							[u, b ? d : g, x, w],
							[a, g, k, x],
							[f, b ? g : d, M, k],
							[d, g, b ? x : w, b ? M : k]
							], i = [w, x, k, M], c = [m, v, $, y], s = [
							[t, u, d],
							[u, d, g],
							[u, a, g],
							[a, f, g],
							[f, d, g],
							[f, t, d]
						]
					}
					return {
						roof_lines: e,
						roof_normals: i,
						roof_planes: c,
						roof_tri: s
					}
				}(),
				k = function(t, n) {
					let o = !0;
					return 1 === u && (o = t[0]), 2 === u && (o = n < 1 || n >= 4 ? t[0] : t[1]), 3 === u && (o = t[n]),
					function(t, n, o = !0) {
						return t ? n ? [!1, o] : [o, !1] : [!1, !1]
					}(c, h, o)
				},
				M = [];
				for (let t = 0; t < g.length; t++) M[t] = k(x.roof_normals, t);
				const j = {
					sx: g,
					sy: b,
					sz: m,
					sh: v,
					sp: M,
					sarc: $,
					scw: y
				};
				r.nt("s", Object.assign(j, x), Fs(n))
			}
		}(n),
		function(t) {
			for (let n = 0; n < data.l.length; n++) {
				const o = data.V("l", n, t),
				e = [],
				i = [],
				r = [];
				for (let t = 0; t < o.x.length - 1; t++) {
					const n = o.x[t],
					c = o.y[t],
					s = o.z[t],
					u = o.x[t + 1],
					l = o.y[t + 1],
					a = o.z[t + 1];
					0 === t && (e.push(n), i.push(c), r.push(s));
					const f = je([n, c, s], [u, l, a]);
					for (let t = 1; t < f.length; t++) {
						const n = f[t];
						e.push(n[0]), i.push(n[1]), r.push(n[2])
					}
				}
				const c = {
					sx: e,
					sy: i,
					sz: r,
					Rt: Xr(e, i, r)
				};
				o.nt("s", c, Fs(t))
			}
		}(n),
		function(t) {
			Fs(t) ? data.state2 : data.state;
			for (let n = 0; n < data.b.length; n++) {
				const o = data.V("b", n, t),
				e = "c" === o.type,
				i = o.x,
				r = o.y,
				c = o.setting;
				if (e && 0 !== c && (2 !== c || n !== data.b.length - 1)) {
					const e = Kr(i, r) < O,
					c = Qr(i, r),
					s = e || c ? -1 : 1;
					o.setting !== s && data._put("b", n, {
						setting: s
					}, t)
				}
			}
		}(n),
		function(t) {
			const n = Fs(t) ? data.state2 : data.state;
			n.b = [];
			for (let o = 0; o < data.b.length; o++) {
				const e = data.V("b", o, t);
				if (e.setting < 1) continue;
				const i = e.s;
				n.b[o] = {
					x: e.x,
					y: e.y,
					is_building: "c" === e.type,
					is_cw: e.cw,
					sp: i.sp
				}
			}
		}(n),
		function(n) {
			const o = Fs(n) ? data.state2 : data.state;
			o.buildings = [];
			for (let e = 0; e < data.b.length; e++) {
				const i = data.V("b", e, n);
				if (i.setting < 1) continue;
				if (!("c" === i.type)) continue;
				const r = i.s,
				c = {
					i: e,
					x: r.sx,
					y: r.sy,
					z: r.sz,
					h: r.sh,
					roof: i.roof,
					roof_normals: r.roof_normals,
					h_roof: i.h_roof,
					xy: t.arrayZip(i.x, i.y),
					bbox: t.getBBox(i.x, i.y)
				};
				o.buildings.push(c)
			}
		}(n),
		function(n) {
			const o = Fs(n) ? data.state2 : data.state,
			e = data.ground;
			o.screens = [], o.screen_groups = [];
			const i = function(t, n) {
				return null == t ? [n[0], n[1], n[2], n[3]] : (t[0] > n[0] && (t[0] = n[0]), t[1] > n[1] && (t[1] = n[1]), t[2] < n[2] && (t[2] = n[2]), t[3] < n[3] && (t[3] = n[3]), t)
			},
			r = function(n, e, r, c, s, u, l, a = -1, f = null, _ = null, d = !1, p = null) {
				const h = [Math.min(e, s), Math.min(r, u), Math.max(e, s), Math.max(r, u)];
				for (let n = 0; n < o.screens.length; n++)
				if (t.arrayMatch(o.screens[n].bbox, h)) {
					if (!(o.screens[n].z[0] < c)) return;
					o.screens.splice(n, 1)
					} o.screens.push({
						i: a,
						j: f,
						k: _,
						bbox: h,
						x: [e, s],
						y: [r, u],
						z: [c, l],
						mid: [(e + s) / 2, (r + u) / 2],
						lmin: p,
						rc: d
					});
					const g = o.screens.length - 1;
					n.screens.push(g), n.bbox = i(n.bbox, h)
			},
			c = 5,
			s = function() {
				return {
					bbox: null,
					screens: []
				}
			},
			u = function(n) {
				const e = function(t) {
					const n = t[0],
					o = t[1],
					e = t[2],
					i = t[3],
					r = e - n,
					c = i - o;
					return r > c ? [
						[n, o, n + r / 2, i],
						[n + r / 2, o, e, i]
						] : [
						[n, o, e, o + c / 2],
						[n, o + c / 2, e, i]
					]
				},
				r = function(n) {
					if (n.screens.length <= c) return n;
					const s = e(n.bbox),
					u = [{
						bbox: s[0],
						screens: []
						}, {
						bbox: s[1],
						screens: []
					}];
					for (let e = 0; e < n.screens.length; e++) {
						const i = n.screens[e],
						r = o.screens[i];
						let c = 0;
						t.inBBox(r.mid, u[c].bbox) || (c = 1);
						u[c].screens.push(i)
					}
					for (let t = 0; t < 2; t++) {
						const n = u[t];
						for (let t = 0; t < n.screens.length; t++) {
							const e = n.screens[t],
							r = o.screens[e];
							n.bbox = i(n.bbox, r.bbox)
						}
					}
					return 0 === u[0].screens.length || 0 === u[1].screens.length || (u[0] = r(u[0]), u[1] = r(u[1]), n.screens = u), n
				};
				return r(n)
			},
			l = function(t, n, o) {
				const e = [];
				return Array.isArray(t) ? e.push(t[0], t[1]) : e.push(t, t), n && (o ? e[1] = 0 : e[0] = 0), e
			},
			a = s();
			for (let t = 0; t < data.b.length; t++) {
				const o = data.V("b", t, n);
				if (o.setting < 1) continue;
				const e = o.s,
				i = e.sx,
				c = e.sy,
				s = e.sz,
				u = e.sh,
				f = e.scw,
				_ = "c" === o.type,
				d = o.cw,
				p = (o.slope, o.roof),
				h = o.h_roof;
				if (_ && null === d) continue;
				const g = l(o.rc, _, d);
				for (let n = 0; n < i.length; n++) {
					const o = i[n],
					l = c[n],
					d = s[n],
					b = u[n];
					if (!(n + 1 < i.length || _)) break;
					const m = Ao(n, i.length, _),
					v = i[m],
					$ = c[m],
					y = s[m],
					w = u[m];
					if (Math.hypot(o - v, l - $) < O) continue;
					if (b + h < 0 && w + h < 0) continue;
					if (2 === p || 3 === p) {
						const n = e.roof_lines;
						for (let o = 0; o < n.length; o++) {
							const e = n[o],
							i = e[0],
							c = e[1];
							r(a, i[0], i[1], i[2], c[0], c[1], c[2], t, -1, -1)
						}
					}
					let x = n,
					k = m,
					M = i.length - 1;
					for (; x > 0 && null === f[x] && (x = Ao(x, i.length, _, !1), x !== M););
					for (; k < M && null === f[k] && (k = Ao(k, i.length, _, !0), 0 !== k););
					const j = Math.hypot(i[x] - i[k], c[x] - c[k]);
					let I = ((b > 0 ? b : 0) + (w > 0 ? w : 0)) / 2;
					r(a, o, l, d + b, v, $, y + w, t, n, m, g, Math.min(j, I))
				}
			}
			o.screen_groups.push(u(a));
			const f = s(),
			_ = e.gh,
			d = e.gh_tri,
			p = e.gh_trihalf;
			for (let n = 0; n < d.length; n++)
			if (n > p[n]) {
				let o;
				const e = n % 3 == 2 ? n - 2 : n + 1,
				i = e % 3 == 2 ? e - 2 : e + 1,
				c = _[d[n]],
				s = _[d[e]],
				u = _[d[i]],
				l = t.planeNormal(c, s, u),
				a = p[n];
				if (a > -1) {
					const n = _[d[a % 3 == 0 ? a + 2 : a - 1]].slice();
					o = t.abovePlane(n, l)
					} else {
					const [n, e] = t.perpendicularXY(c, s, 10), i = [c[0] + n, c[1] + e, c[2]];
					o = t.abovePlane(i, l)
				}
				o && r(f, c[0], c[1], c[2], s[0], s[1], s[2])
			} o.screen_groups.push(u(f));
			const h = s(),
			g = e.gh_slopes;
			for (let t = 0; t < g.length; t++) {
				const n = g[t];
				let o;
				const e = n[0],
				i = n[1],
				c = g[t % 2 == 1 ? t - 1 : t + 1],
				s = c[0];
				c[1];
				o = e[2] > s[2], o && r(h, e[0], e[1], e[2], i[0], i[1], i[2])
			}
			o.screen_groups.push(u(h))
		}(n), Ee(n),
		function(n) {
			const o = Fs(n) ? data.state2 : data.state;
			for (let e = 0; e < data.p.length; e++) {
				const i = data.V("p", e, n),
				r = i.setting;
				if (!r) continue;
				const c = !1 !== t.insideBuilding(o.buildings, [i.x, i.y, i.z + i.h]) ? -1 : 1;
				r !== c && data._put("p", e, {
					setting: c
				}, n)
			}
		}(n),
		function(n) {
			const o = Fs(n) ? data.state2 : data.state;
			for (let e = 0; e < data.l.length; e++) {
				const i = data.V("l", e, n);
				let r = 0;
				const c = i.setting;
				if (!c) continue;
				for (let e = 0; e < i.x.length - 1; e++) {
					const c = i.x[e],
					s = i.y[e],
					u = i.x[e + 1],
					l = i.y[e + 1],
					a = i.h;
					if (r = !1 !== t.insideBuilding(o.buildings, [c, s, a + i.z[e]]), r) break;
					if (r = !1 !== t.insideBuilding(o.buildings, [u, l, a + i.z[e + 1]]), r) break;
					for (let o = 0; o < data.b.length; o++) {
						const e = data.V("b", o, n);
						if (e.setting > 0) {
							const n = e.x,
							o = e.y,
							i = "c" === e.type;
							for (let e = 0; e < n.length && (e + 1 < n.length || i); e++) {
								const i = e + 1 < n.length ? e + 1 : 0,
								a = [n[e], o[e]],
								f = [n[i], o[i]];
								if (r = t.linesIntersection([c, s], [u, l], a, f), r) break
							}
						}
						if (r) break
					}
					if (r) break
				}
				const s = r ? -1 : 1;
				c !== s && data._put("l", e, {
					setting: s
				}, n)
			}
		}(n),
		function(n) {
			const o = Fs(n) ? data.state2 : data.state,
			e = function(n) {
				n.lvl;
				return Array.isArray(n.lvl) ? [n.lvl, t.f_mid, t.f, !0] : [
					[n.lvl],
					[n.hz],
					[t.octBand(n.hz)], !1
				]
			},
			i = function(t, n) {
				for (let o = 0; o < t.length; o++)
				if ((t[o] || 0 === t[o]) && n[o]) return !0
			};
			o.points = [];
			for (let r = 0; r < data.p.length; r++) {
				const c = data.V("p", r, n);
				if (1 !== c.setting) continue;
				const [s, u, l, a] = e(c);
				if (!i(s, u)) continue;
				const f = {
					type: "p",
					i: r,
					x: c.x,
					y: c.y,
					z: c.z + c.h,
					gh: c.z,
					h: c.h,
					adj: t.sourceAdj(c),
					lvl: s,
					hz: u,
					oct: l,
					is_multi: a
				};
				o.points.push(f)
			}
			const r = function(n, o) {
				const e = 1 / o,
				i = [];
				for (let o = 0; o < n.length; o++)(n[o] || 0 === n[o]) && (i[o] = t.dBfactor(n[o], e));
				return i
			};
			o.lines = [];
			for (let c = 0; c < data.l.length; c++) {
				const s = data.V("l", c, n);
				if (1 !== s.setting) continue;
				const [u, l, a, f] = e(s);
				if (!i(u, l)) continue;
				const _ = s.s,
				d = [];
				for (let t = 0; t < _.sz.length; t++) d.push(_.sz[t] + s.h);
				const p = {
					type: "l",
					i: c,
					x: _.sx,
					y: _.sy,
					z: d,
					gh: _.sz,
					h: s.h,
					adj: t.sourceAdj(s),
					lvl: 1 === s.method ? r(u, _.Rt) : u,
					hz: l,
					oct: a,
					is_multi: f
				};
				o.lines.push(p)
			}
		}(n), Ae(n)
	}
	const Ae = function(t) {
		(Fs(t) ? data.state2 : data.state).config = data.config.X(t)
	},
	Ee = function(n, o) {
		const e = Fs(n) ? data.state2 : data.state;
		e.static_graph = [];
		const i = e.static_graph;
		e.entry_lines = [];
		const r = e.entry_lines;
		for (let o = 0; o < data.b.length; o++) {
			const c = data.V("b", o, n),
			s = c.cw,
			u = (c.type, c.s),
			l = u.scw,
			a = u.sx,
			f = u.sy,
			_ = u.sz,
			d = u.sh,
			p = u.sarc;
			if (!(c.setting <= 0)) {
				for (let n = 0; n < a.length; n++) {
					const r = {
						x: a[n],
						y: f[n],
						z: _[n],
						h: d[n],
						cw: l[n]
					},
					c = p[n],
					s = t.insideBuilding(e.buildings, [a[n], f[n], _[n] + d[n]], o);
					t.graphVertex(i, o, n, r, c).valid = null !== l[n] && !1 === s
				}
				if (c.roof > 1) {
					const t = u.roof_lines;
					for (let n = 0; n < t.length; n++) {
						const e = t[n],
						i = e[0],
						c = e[1],
						u = {
							x: i[0],
							y: i[1],
							z: 0,
							h: i[2]
						},
						l = {
							x: c[0],
							y: c[1],
							z: 0,
							h: c[2]
						},
						a = s ? [e[2], e[3]] : [e[3], e[2]];
						r.push({
							parent_data: {
								i: o,
								j: -1,
								k: -1
							},
							node: u,
							end_node: l,
							normals: a
						})
					}
				}
			}
		}
		for (let o = 0; o < i.length; o++) {
			if (!i[o]) continue;
			const r = data.V("b", o, n),
			c = r.cw,
			s = "c" === r.type;
			for (let n = 0; n < i[o].length; n++) {
				const r = i[o][n];
				if (!r.valid) continue;
				const u = r.node,
				l = r.arc;
				if (l) {
					for (let r = n + 1; r < i[o].length; r++) {
						const a = i[o][r];
						if (!a.valid) continue;
						const f = a.node,
						_ = a.arc;
						if (!_) continue;
						if (!s && void 0 !== u.cw && void 0 !== f.cw && u.cw !== f.cw) continue;
						const d = r === n + 1,
						p = (0 === n || i[o].length, 0 === n && r === i[o].length - 1),
						h = s && p;
						if (s && d && c || h && !c) {
							t.nodeEdgePair(e, i, f, _, o, r, u, l, o, n, [])
							} else {
							t.nodeEdgePair(e, i, u, l, o, n, f, _, o, r, [])
						}
					}
					for (let r = o + 1; r < i.length; r++)
					if (i[r])
					for (let c = 0; c < i[r].length; c++) {
						const s = i[r][c];
						if (!s.valid) continue;
						const a = s.node,
						f = s.arc;
						if (!f) continue;
						t.nodeEdgePair(e, i, u, l, o, n, a, f, r, c, [])
					}
				}
			}
		}
		const c = function(t, n, o, e) {
			if (!i[t] || !i[t][n]) return;
			const r = i[t][n];
			r.valid && (r.stack || (r.stack = []), r.stack.push([o, e]))
		};
		for (let t = 0; t < data.b.length; t++) {
			const o = data.V("b", t, n);
			if (o.setting <= 0) continue;
			const e = o.s,
			i = e.sx,
			r = e.sy;
			for (let o = 0; o < i.length; o++) {
				const e = i[o],
				s = r[o];
				for (let i = t + 1; i < data.b.length; i++) {
					const r = data.V("b", i, n);
					if (r.setting <= 0) continue;
					const u = r.s,
					l = u.sx,
					a = u.sy;
					for (let n = 0; n < l.length; n++) {
						const r = l[n],
						u = a[n];
						e !== r || s !== u || (c(t, o, i, n), c(i, n, t, o))
					}
				}
			}
		}
	};
	let Ne, Te = null,
	Le = {};
	
	function Se() {
		Be && (clearTimeout(Te), Te = setTimeout((function() {
			De(), Le.V.stop().show().css({
				left: 0,
				top: 0,
				opacity: 0
				}).animate({
				opacity: 1
				}, 300, (function() {
					Re()
				}))
		}), 500))
	}
	
	function Re() {
		return clearTimeout(Te), Te = setTimeout((function() {
			Re()
		}), 10), !Mr && !ul && (Ye && Be ? void De() : He())
	}
	
	function De() {
		if (!Be) return He();
		const o = J(Be.Dt),
		e = Z(Be.Dt),
		i = Be.Ht;
		let r = "";
		i > -1 && (r = g("mode0")), o && (r = g("mode2")), e && (r = g("mode1"));
		let c = g("calculating", r);
		if (-1 === i) c += " " + g("config_grid_figures");
		else {
			let t = o ? st : ct,
			n = g(32 === (s = i) ? "config_resolution_init" : 16 === s ? "config_resolution_vlow" : 8 === s ? "config_resolution_low" : 4 === s ? "config_resolution_medium" : 2 === s ? "config_resolution_high" : "config_resolution_max");
			const e = To(i / t);
			c += Xs(n + " " + g("config_resolution") + " (" + e + ")")
		}
		var s;
		$(".progress_button").toggle(-1 !== i);
		let u = We / Ye;
		u > 1 && (u = 1);
		const l = Math.round(100 * u) + "%";
		Pe("[" + l + "]"), c = l + " " + c;
		const a = Date.now();
		if (a > Fe) {
			let t = (a - Ce) / u * (1 - u);
			t = 5e3 * Math.ceil(t / 5e3), qe = t > 1 ? function(t) {
				if (0 == (t = (t - t % 1e3) / 1e3)) return "";
				const n = t % 60,
				o = (t = (t - n) / 60) % 60,
				e = (t - o) / 60;
				return e > 0 ? e + ":" + co(o) + ":" + co(n) : o > 0 ? co(o) + ":" + co(n) : n > 0 ? n + " " + g("time_seconds") : ""
			}(t) : "", Fe = a + _t
		}
		let f = Ge + " " + g("calculations");
		qe && (f += Xs(qe)), Le.Ot.text(f), Le.L.html(c), Le.Pt.css({
			width: t.round(100 * u, 3) + "%"
		}), Le.Ct.toggle(n).dt(si > 1)
	}
	
	function He(t) {
		let n = {
			opacity: 0
		},
		o = 300;
		"right" === t ? n.left = "100%" : "left" === t ? n.left = "-100%" : "up" === t ? n.top = "-100%" : o = 0, Le.Ot.text(""), clearTimeout(Te), Te = setTimeout((function() {
			Le.V.animate(n, o, (function() {
				Te = null, Pe(), Le.V.hide()
			}))
		}))
	}
	const Oe = document.title;
	
	function Pe(t) {
		$("title").text(function(t) {
			return t ? t + " " : (data.config.grid_type.N(), "")
		}(t) + Oe)
	}
	let Ce, Fe, qe, Ue = [],
	Be = null,
	Ze = [],
	Je = 1,
	We = 0,
	Ye = 0,
	Ge = 0,
	Xe = 0;
	let Ve;
	
	function Qe(t, n = 0) {
		if (clearTimeout(Ve), t > 0 ? (ti(!0 === t ? null : t - 1), Zi(), Bi()) : rr(), Ue = function() {
			if (Z() && 0 === data.ground.gh.length || !Z() && data.b.length + data.l.length + data.p.length === 0) return ti(), [];
			const t = [],
			n = function(n, o, e) {
				t.push({
					Dt: n,
					Ht: o,
					Ft: e
				})
			},
			o = function(t) {
				data.config.grid_figures.N() && n(t, -1, !0)
			},
			e = function(t) {
				if (!data.config.grid_type.N() || !data.config.resolution_limit.N()) return;
				const o = W(),
				e = data.config.resolution_limit.N();
				let i = 32;
				do {
					n(t, i, i === e || o), o && B(t) && n(2, i, !0), i /= 2
				} while (i >= e)
			};
			if (W()) return o(0), e(0), t;
			o(q), e(q), J() && (o(0), e(0));
			return t
		}(), !Ue.length) return !0 === t && hi(), Ke(), !1;
		! function() {
			if (0 === data.config.grid_type.N()) return;
			if (d) return Xu(g("alert_gh_disabled"), Ht, "gh_disabled");
			Vu("gh_disabled");
			if (!P) Xu(g("alert_calc_off"), Ht, "calc_off")
			}(), Ve = setTimeout((function() {
				! function(t) {
					t > 0 && (ti(!0 === t ? null : t - 1), fi());
					!0 === t && hi();
					Rn = !1,
					function() {
						si = _i();
						for (let t = 0; t < si; t++) li(t)
					}(), We = 0, Xe = 0, Ge = 0, ri(), Se()
				}(t)
			}), n)
	}
	
	function Ke(t) {
		Ne = !1, fi(), He(t), Rn = !0
	}
	
	function ti(t) {
		for (let n = 0; n < 3; n++) null != t && t != n || (oi(n, !0).it = [], oi(n, !1).it = []);
		rr()
	}
	
	function ni(t) {
		return null == t && (t = Be.Dt), J(t) ? yt.ct : Z(t) ? yt.st : yt.ot
	}
	
	function oi(t, n) {
		let o = ni(t);
		return null == n && (n = o.et.qt), o = !0 === n || -1 === n ? o.rt : o.m, o
	}
	
	function ei(t, n = !1, o = !1) {
		const e = J(t);
		if (e && !Va.Et) return !1;
		const i = -1 === n,
		r = i ? 1 : n,
		c = oi(t, i).et,
		s = function(t, n, o) {
			if (n.qt) return 1; {
				const t = o ? n.Ut : n.Bt;
				return e ? t : t * ut
			}
		},
		u = function(t, n) {
			return n.qt ? e ? Es.vscale : Es.hscale : e ? 1 : 1 / ut
		},
		l = function(t, n) {
			return n.qt ? Math.ceil(t / (n.Zt * n.Jt) - .5) : Math.ceil(t / (n.Zt * n.Jt)) + 1
		};
		return o ? (!1 !== r && (c.Ut = r), c.Wt = s(0, c, o), c.Yt = u(0, c), c.Gt = l(c.Xt, c), c.Vt = l(c.Qt, c), c.Kt = e ? 0 : Math.floor(Q / (c.Zt * c.Wt)), c.tn = e ? 0 : Math.floor(K / (c.Zt * c.Wt)), c) : (c.qt = i, !1 !== r && (c.Bt = r), c.nn = ct, c.Xt = e ? Va.Et : Y, c.Qt = e ? Va.Nt : G, c.Jt = s(0, c, o), c.Zt = u(0, c), c.en = l(c.Xt, c), c.rn = l(c.Qt, c), c.cn = e ? 0 : Math.floor(Q / (c.Zt * c.Jt)), c.sn = e ? 0 : Math.floor(K / (c.Zt * c.Jt)), c)
	}
	
	function ii(t) {
		return oi(t, !1).it.length > 0
	}
	
	function ri() {
		if (Ne = Date.now(), Be = !!Ue.length && !(!P && Ue[0].Ht > -1) && Ue.shift(), !Be) {
			Pi();
			let t = "up";
			return 0 === data.config.grid_type.N() && (t = "right"), P || (t = "left"), Ke(t), !1
		}
		const t = ei(Be.Dt, Be.Ht);
		if (!1 === t || isNaN(t.en) || isNaN(t.rn) || isNaN(t.Jt)) return ri(), !1;
		Ye = (t.en + 1) * (t.rn + 1) - We - Xe, We = 0, Xe = 0, Je = 1, Ce = Date.now(), Fe = Ce + _t, qe = "", Ze = [0, 0],
		function() {
			for (let t = 0; t < ui.length; t++) pi(ui[t])
		}()
	}
	
	function ci(t, n, o, e) {
		const i = t.et;
		if (!i.Jt) return !1;
		const r = (n + i.cn) * i.Jt,
		c = (o + i.sn) * i.Jt;
		let s = null;
		if (null == t.it[r] && (t.it[r] = []), null != t.it[r][c] && (s = t.it[r][c]), null != s) return null;
		const u = i.qt ? .5 : 0,
		l = i.Zt / i.nn;
		let a, f, _, d, p;
		if (J(Be.Dt)) {
			const t = i.qt ? i.Zt / i.Xt : 1 / i.Xt,
			n = (r + u) * t * rf();
			a = Math.cos(ef()) * n + data.section.x[0], f = Math.sin(ef()) * n + data.section.y[0], _ = (c + u) * t * rf() + of(), d = null
		} else a = (r + u) * l + data.grid.x[0], f = (c + u) * l + data.grid.y[0], _ = null, d = data.grid.h, data.grid.abs && (p = !0);
		return !isNaN(a) && {
			x: a,
			y: f,
			z: _,
			h: d,
			abs: p,
			mode: Be.Dt,
			resolution: Be.Ht,
			a: r,
			b: c,
			state: Cs
		}
	}
	let si, ui = [];
	
	function li(n) {
		if (-1 === n || null == ui[n]) {
			const o = {
				worker: new Worker("calc-db-soundpath-js/calc-db-soundpath_calcs.js?v=1.5.4"),
				tasks: [],
				active: !0
			};
			return o.worker.addEventListener("message", (function(e) {
				! function(n) {
					const o = n.data;
					o.response.length;
					if (-1 === o.worker) {
						const t = function(t, n, o) {
							if (!t) return;
							if (null != t.un && t.un !== o.timestamp) return;
							t.un = null;
							const e = [];
							for (let t = 0; t < n.length; t++) e.push(xi(n[t]));
							const i = {
								Nt: o.h,
								ln: o.h + o.gh,
								an: e
							};
							return t.it.push(i), !0
						},
						n = function(t, n, o) {
							if (t && (null == t.un || t.un === o.timestamp)) return t.un = null, t.fn = n, !0
						};
						let e = 0,
						i = 0;
						for (let r = 0; r < o.response.length; r++) {
							const c = o.response[r],
							s = o.tasks[r],
							u = s.mode,
							l = s.n;
							if ("r" === u && t(data.r[l], c, s) && e++, "rr" === u && n(data.rr[l], c, s) && i++, "mouse" === u || "ground" === u) {
								if ($t.un !== s.timestamp) continue;
								$t.un = null, ua(s, mi(c))
							}
						}
						return e && (Hu("r"), Vu("r_calc")), i && Du("rr"), Dn._n.Tt() && Tl(), void(e + i && (J() && Pi(), yf()))
					}
					o.timestamp < Ne && (o.response = []);
					const e = ui[o.worker];
					e.tasks = [];
					const i = function(n, o) {
						const e = [];
						for (let i = 0; i < n.length; i++) {
							const r = n[i];
							e.push(null != r && !1 !== r ? t.round(r, o) : r)
						}
						return e
					};
					for (let t = 0; t < o.response.length; t++) {
						const n = o.tasks[t],
						e = n.a,
						r = n.b,
						c = -1 === n.resolution ? 3 : 6,
						s = oi(n.mode, -1 === n.resolution);
						void 0 === s.it[e] && (s.it[e] = []), s.it[e][r] = i(o.response[t], c)
					}
					const r = o.tasks.length;
					We += r, Ge += r, Ne && pi(e)
				}(e), -1 === n && o.worker.terminate()
			}), !1), o.id = n, n > -1 && (ui[n] = o), o.worker.postMessage({
			action: "update",
			data: data._state()
			}), o
		}
	}
	
	function ai(t) {
		null != t && void 0 !== t.worker && (clearTimeout(t.timeout), t.worker.terminate(), ui[t.id] = void 0)
	}
	
	function fi() {
		for (let t = 0; t < ui.length; t++) ai(ui[t])
	}
	
	function _i() {
		let t = 1;
		return _ && ("hardwareConcurrency" in navigator && (t = Math.floor(navigator.hardwareConcurrency / 2)), t < 1 && (t = 1)), t
	}
	
	function di() {
		let t = si;
		if (si = _i(), t < si)
		for (let n = t; n < si; n++) {
			const t = li(n);
			Ne && pi(t)
		}
		if (t > si)
		for (let n = si; n < t; n++) ui[n] && (ui[n].active = !1)
	}
	
	function pi(t, n) {
		if (t)
		if (t.active) {
			if (!(t.tasks.length > 0)) {
				if (!n) {
					if (!(t.id > -1)) return void t.worker.terminate();
					n = function() {
						let t = [],
						n = Ze[0],
						o = Ze[1];
						const e = -1 === Be.Ht,
						i = oi(Be.Dt, e);
						for (; n > -1 && t.length < Je;) {
							const e = ci(i, n, o);
							if (!1 === e) return !1;
							if (null == e ? Xe++ : t.push(e), o++, o > i.et.rn && (n++, o = 0), n > i.et.en) {
								n = -1, o = 0;
								break
							}
						}
						return Ze = [n, o], t
					}()
				}
				if (t.tasks = n, t.timestamp = Date.now(), !1 === n) return !1;
				t.id > -1 && 0 == n.length ? Ne && setTimeout((function() {
					! function(t) {
						let n = 0;
						for (let o = 0; o < si; o++) o !== t && void 0 !== ui[o] && ui[o].tasks.length > 0 && n++;
						if (n > 0) return;
						const o = Be.Dt,
						e = Be.Ht,
						i = Be.Ft;
						Date.now(), Ne = !1, ei(o, e, !0), i && (We = 0, Xe = 0), ir(o), Pi(), ri()
					}(t.id)
				}), 0) : t.worker.postMessage({
				action: "calc",
				worker: t.id,
				tasks: n,
				start: Ne,
				timestamp: Date.now()
				})
			}
		} else ai(t)
	}
	
	function hi() {
		bi(), gi()
	}
	
	function gi(t) {
		const n = [],
		o = Date.now();
		for (let e = 0; e < data.r.length; e++)
		if (null == t || t === e) {
			const t = data.r[e];
			t.it = [], t.un = o;
			const i = On(rc(t, !0));
			for (let r = 0; r < i.length; r++) {
				const c = i[r],
				s = {
					mode: "r",
					x: t.x,
					y: t.y,
					h: c,
					gh: t.z,
					n: e,
					state: Cs,
					timestamp: o
				};
				n.push(s)
			}
		} if (Hu("r"), 0 == n.length) return;
		pi(li(-1), n)
	}
	
	function bi(t) {
		const n = [],
		o = Date.now();
		for (let e = 0; e < data.rr.length; e++) {
			const i = data.rr[e];
			if (null == t || t === e || "grid" === t && "grid" === i.h) {
				i.fn = [], i.un = o;
				let t = rc(i);
				if (i.setting) {
					const r = {
						mode: "rr",
						x: i.x,
						y: i.y,
						h: t,
						gh: i.z,
						n: e,
						state: Cs,
						save_ray_data: i.setting,
						timestamp: o
					};
					n.push(r)
				}
			}
		}
		if (0 == n.length) return;
		pi(li(-1), n)
	}
	
	function mi(t) {
		if (t) {
			if (Z()) return t[0];
			if (qs()) {
				if (void 0 === t[1]) return;
				const n = t[0],
				o = t[1],
				e = n === o;
				return Fn([n, o]) && !1 !== n && !1 !== o ? e ? 0 : o - n : e ? n : void 0
			}
			return Fs(Cs) && t.length > 1 ? t[1] : t[0]
		}
	}
	
	function vi(t, n = 1) {
		let o = [];
		Array.isArray(t) || (t = [t]);
		for (let e = 0; e < t.length; e++) {
			const i = t[e],
			r = Uo(i);
			for (let t = 0; t < r.length; t++) o.push([gl(i, t, n), t, i])
		}
		return Gf(o)
	}
	
	function $i(t) {
		const n = new Set;
		for (let o = 0; o < data.r.length; o++) {
			const e = data.r[o];
			for (let o = 0; o < e.it.length; o++) n.add(Xn(t ? e.it[o].ln : e.it[o].Nt))
		}
		return Array.from(n).sort((function(t, n) {
			return t - n
		}))
	}
	
	function yi(n) {
		const o = t.f.length;
		if (n) return o;
		const e = function(n) {
			return (Array.isArray(n.lvl) ? n.lvl.length : t.freqBand(n.hz) + 1) === o
		};
		for (let t = 0; t < data.p.length; t++) {
			const n = data.p[t];
			if (e(n)) return o;
			if (n.u && e(n.u)) return o
		}
		for (let t = 0; t < data.l.length; t++) {
			const n = data.l[t];
			if (e(n)) return o;
			if (n.u && e(n.u)) return o
		}
		return o - 1
	}
	
	function wi() {
		if (0 === function() {
			let t = 0;
			const n = function(t) {
				const n = t.setting > 0,
				o = Array.isArray(t.lvl) ? t.lvl.length : t.lvl;
				return n && o
			};
			for (let o = 0; o < data.p.length; o++) n(data.p[o]) && t++;
			for (let o = 0; o < data.l.length; o++) n(data.l[o]) && t++;
			return t
		}()) return !0;
		for (let t = 0; t < data.r.length; t++) {
			if (!data.r[t].it.length) return !1
		}
		return !0
	}
	
	function xi(n) {
		const o = {
			dn: void 0,
			pn: [],
			hn: void 0,
			gn: []
		};
		if (!1 === n || null === n) return o.dn = n, o.hn = n, o;
		const e = [];
		for (let i = 0; i < n.length; i++) {
			const r = 0 === i,
			c = n[i];
			if (!c) continue;
			const s = [],
			u = [],
			l = [],
			a = [];
			for (let n = 0; n < t.f.length; n++) {
				const o = c.results[n];
				if (!o) continue;
				let e = o.length > 1 ? t.dbsum(o) : o[0];
				e && (e = Bn(e));
				const i = t.aweighting(t.f[n]);
				e || 0 === e ? (l[n] = e, a[n] = e + i, s.push(e), u.push(e + i)) : (l[n] = null, a[n] = null)
			}
			r ? (o.pn = l, o.gn = a, o.dn = t.dbsum(s), o.hn = t.dbsum(u)) : e.push({
				bn: c.type,
				mn: c.n,
				pn: l,
				gn: a,
				dn: t.dbsum(s),
				hn: t.dbsum(u)
			})
		}
		return o.vn = e, o
	}
	
	function ki(t) {
		return "string" == typeof t[1] && (t = [t[0]].concat(pu(t[1]))), t
	}
	
	function Mi() {
		return qs() ? data.compare : data.colours
	}
	
	function ji(t, n) {
		n || (n = Mi());
		const o = n[t];
		if (!o || !Array.isArray(o)) return {};
		const e = -1 === o[1];
		return {
			$n: e,
			yn: !e && [o[1], o[2], o[3]],
			wn: o[0]
		}
	}
	
	function Ii(t) {
		const n = [
			[30, 184, 205, 142],
			[35, 27, 132, 53],
			[40, 15, 76, 59],
			[45, 236, 216, 33],
			[50, 159, 111, 46],
			[55, 237, 122, 41],
			[60, 199, 25, 50],
			[65, 140, 26, 39],
			[70, 134, 75, 124],
			[75, 25, 85, 141],
			[80, 19, 68, 102]
		];
		return t ? ["Standard (DIN 18005-2:1991)", n] : n
	}
	_e(bt, "Presets", 10, Ii(!0));
	let zi, Ai = [],
	Ei = 1;
	
	function Ni() {
		return [
			[-10, 0, 77, 64],
			[-5, 30, 136, 229],
			[0, -1],
			[5, 255, 193, 7],
			[10, 216, 27, 96]
		]
	}
	
	function Ti(t, n) {
		return Z() ? Ri(t, n) : Li(t, n)
	}
	
	function Li(t, n) {
		return Di(t, n, Mi())
	}
	
	function Si(t, n, o) {
		return Z() ? Ri(t, o) : qs() && t < 0 && t + n > 0 ? Li(0, o) : (qs() && t < 0 && (t += n), Li(t, o))
	}
	
	function Ri(t, n) {
		return Di(t, n, Ai)
	}
	
	function Di(t, n, o) {
		const e = function(t, n) {
			return 3 === t.length && (t[3] = 255), t.length < 3 && (t = [0, 0, 0, 0]), n ? (t[3] /= 255, Tt(t)) : t
		},
		i = function() {
			return e([], n)
		},
		r = function(t) {
			return -1 === t[1] ? e([], n) : e([t[1], t[2], t[3], 255], n)
		};
		if (!1 === t) return e([255, 255, 255, 255], n);
		if (isNaN(t) || null == t) return i();
		if (0 === o.length) return i();
		let c = o[0],
		s = o[o.length - 1];
		if (t <= c[0]) return r(c);
		if (t >= s[0]) return r(s);
		const u = function(n) {
			if (n) {
				for (let n = o.length; n > 0; n--)
				if (t > o[n - 1][0]) return n;
				return 0
			}
			for (let n = 0; n < o.length - 1; n++)
			if (t < o[n + 1][0]) return n;
			return o.length
		}(t < 0),
		l = o[u];
		if (!data.config.grid_blend.N()) return r(l);
		const a = function(n) {
			return qs() && t < 0 ? n - 1 > 0 ? n - 1 : 0 : n + 1 < o.length ? n + 1 : n
		}(u),
		f = o[u][0],
		_ = o[a][0],
		d = (t - f) / (_ - f),
		p = [],
		h = o[a];
		let g, b, m;
		for (let t = 1; t < 5; t++) t < 4 ? (g = -1 !== l[1] ? l[t] : -1 !== h[1] ? h[t] : 0, b = -1 !== h[1] ? h[t] : -1 !== l[1] ? l[t] : 0) : (g = -1 !== l[1] ? 255 : 0, b = -1 !== h[1] ? 255 : 0), m = Math.ceil(Math.abs(g * (1 - d) + b * d)), m > 255 && (m = 255), p.push(m);
		return e(p, n)
	}
	
	function Hi() {
		Ai = [];
		const t = data.ground;
		let n = null,
		o = null;
		for (let e = 0; e < t.gh.length; e++)(null == n || n > t.gh[e][2]) && (n = t.gh[e][2]), (null == o || o < t.gh[e][2]) && (o = t.gh[e][2]);
		if (o !== n) {
			const t = data.colours;
			let e = (o - n) / (t.length - 1);
			const i = e < 10 ? .5 : 5;
			e = Math.round(e / i) * i, e < 1 && (e = 1);
			const r = Math.floor(n / e) * e;
			for (let n = 0; n < t.length; n++) Ai[n] = [r + e * n, t[n][1], t[n][2], t[n][3]];
			Ei = e
		}
	}
	
	function Oi() {
		let t = Z() ? Ai : Mi();
		if (0 === t.length) return !1;
		for (let n = 0; n < t.length; n++) {
			if (ji(n, t).$n) return !0
		}
		return !1
	}
	
	function Pi(t = 100) {
		clearTimeout(zi), zi = setTimeout((function() {
			Bi(), J() && Bi(null, {
				mode: 0
			}), W() && xf()
		}), t)
	}
	
	function Ci(t) {
		return null != t.mode ? t.mode : q
	}
	
	function Fi(t) {
		return null != t.light ? t.light : f
	}
	
	function qi(t, n) {
		const o = t.getContext("2d");
		o.fillStyle = n || Et, o.save(), o.setTransform(1, 0, 0, 1, 0, 0), o.fillRect(0, 0, t.width, t.height), o.restore()
	}
	
	function Ui(t) {
		let n = $("<canvas>"),
		o = n[0];
		return t && (n.attr({
			width: t.width,
			height: t.height
		}), o.$t = t.$t, o.lt = t.lt, t.yt && o.getContext("2d").scale(t.yt, t.yt)), o.xn = function() {
		$(o).remove()
		}, o.kn = function(t) {
		const n = t.getContext("2d"),
		e = t.yt || 1;
		n.drawImage(o, 0, 0, t.width, t.height, 0, 0, t.width / e, t.height / e), o.xn()
		}, o
	}
	
	function Bi(n, o = {}) {
		const e = Ci(o);
		n || (n = J(e) ? T.ct.canvas : T.ot.canvas), Zi(n), o.fill && qi(n, !0 !== o.fill ? o.fill : "");
		const i = oi(e, !1),
		r = ii(e);
		if (!1 !== o.map) {
			if (data.config.grid_type.N() > 1 && function(t, n) {
				const o = oi(t, !1);
				if (o.Mn) return;
				const e = o.et,
				i = o.it;
				if (0 === i.length) return;
				const r = !J(t);
				let c = [],
				s = [];
				e.Zt;
				const u = e.Wt,
				l = e.Gt,
				a = e.Vt,
				f = e.Kt,
				_ = e.tn;
				let d = null,
				p = null;
				for (let t = 0; t <= l; t++) {
					const n = (t + f) * u;
					if (void 0 === i[n]) return void(isNaN(n) && console.warn("NaN in calcParams", t, f, u));
					for (let o = 0; o <= a; o++) {
						const e = (o + _) * u;
						let l = null;
						if (void 0 !== i[n] && void 0 !== i[n][e] && (l = Bn(mi(i[n][e]))), r) {
							const n = !1 === l ? 1 : 0;
							void 0 === s[o] && (s[o] = []), s[o][t] = n
						}
						null == l || !1 === l || ((null === d || d > l) && (d = l), (null === p || p < l) && (p = l)), void 0 === c[o] && (c[o] = []), c[o][t] = l
					}
				}
				const h = function(t) {
					let n = 0;
					for (let o = 0; o < t.length; o++) n < t[o].length && (n = t[o].length);
					for (let o = 0; o < t.length; o++) {
						null == t[o] && (t[o] = new Array(n).fill(0));
						for (let e = 0; e < n; e++) null == t[o][e] && (t[o][e] = 0)
					}
					return !(n < 2 || t.length < 2) && t
				},
				b = !(!r || !s.length) && h(s);
				if (b) {
					or({
						mode: t,
						buildings: MarchingSquaresJS.isoBands(b, [1], [1], {
							polygons: !1,
							linearRing: !0,
							noFrame: !1
						})
					})
				}
				data.config.contour_type.N(), data.config.grid_type.N();
				const m = h(c),
				v = [],
				y = [],
				w = sr();
				if (null === p) return !1;
				const x = Math.floor(d / w) * w;
				for (let t = x; t <= p; t += w) qs() && 0 === t && v.length > 0 ? y[y.length - 1] += w : (v.push(t), y.push(w));
				if (o.jn = v, o.In = y, 0 === m.length) return !1;
				if (m.length < 2) return !1;
				if (m[0].length < 2) return !1;
				const k = Date.now(),
				M = new MarchingSquaresJS.QuadTree(m),
				j = MarchingSquaresJS.isoBands(M, v, y, {
					polygons: !1,
					linearRing: !0,
					noFrame: !1
				});
				or({
					mode: t,
					areas: j
				});
				if (cr()) {
					const n = {
						lines_in: m,
						contour_intervals: v,
						mode: t,
						timestamp: k
					};
					or({
						mode: t,
						lines: MarchingSquaresJS.isoLines(M, n.contour_intervals, {
							polygons: !1,
							linearRing: !0,
							noFrame: !0
						})
					}), o.Mn = k
					}! function(t) {
					if (t) {
						let t = g("alert_slow_contours");
						const n = data.config.contour_styled.N();
						return data.config.contour_type.N() && n ? (t += ": " + data.config.contour_styled.L(), $("#control_contour_styled").addClass(Ht), $("#control_contour_styled .alert_icon")._t(!1)) : (t += ": " + data.config.resolution_limit.L(), $("#control_resolution_limit").addClass(Ht), $("#control_resolution_limit .alert_icon")._t(!1)), void Xu(t, Ht, "grid")
					}
					$("#control_contour_styled, #control_resolution_limit").removeClass(Ht)
				}(Date.now() - k > _t)
				}(e), 0 !== data.config.grid_type.N() && r && i.it.length && !1 !== o.colours && function(t, n) {
				1 === data.config.grid_type.N() ? function(t, n) {
					const o = Ci(n),
					e = oi(o, !1),
					i = J(o),
					r = e.et,
					c = e.it;
					if (0 === c.length) return;
					const s = t.getContext("2d"),
					u = r.Zt,
					l = r.Wt,
					a = r.Gt,
					f = r.Vt,
					_ = r.Kt,
					d = r.tn;
					if (!(a > 0 && f > 0)) return;
					const p = u * l;
					if (!(p > 0)) return;
					const h = s.createImageData(a * p, f * p),
					g = h.width,
					b = h.height;
					for (let t = 0; t < a; t++)
					for (let n = 0; n < f; n++) {
						let o = [],
						e = null,
						r = 0,
						s = 0,
						u = 0;
						const a = (t + _) * l,
						b = a + l,
						m = (n + d) * l,
						v = m + l;
						void 0 !== c[a] && (void 0 !== c[a][m] && o.push(mi(c[a][m])), void 0 !== c[a][v] && o.push(mi(c[a][v]))), void 0 !== c[b] && (void 0 !== c[b][m] && o.push(mi(c[b][m])), void 0 !== c[b][v] && o.push(mi(c[b][v])));
						for (let t = 0; t < o.length; t++) !1 === o[t] ? u++ : null === o[t] ? s++ : (e += o[t], r++);
						e && (e = Bn(e / r));
						let $ = null;
						if (4 === u ? $ = Ti(!1) : null != e && ($ = Ti(e)), null != $) {
							const o = t * p + (i ? f - n - 1 : n) * p * g;
							for (let t = 0; t < p; t++) {
								const n = t * g;
								for (let t = 0; t < p; t++)
								for (let e = 0; e < 4; e++) h.data[4 * (o + n + t) + e] = $[e]
							}
						}
					}
					let m, v;
					i ? (m = 0, v = t.lt - b) : (m = Math.floor(Q / p) * p - Q, v = Math.floor(K / p) * p - K);
					const y = $("<canvas>").attr({
						width: g,
						height: b
					})[0];
					y.getContext("2d").putImageData(h, 0, 0), s.drawImage(y, m, v), $(y).remove()
					}(t, n) : function(t, n) {
					const o = oi(Ci(n), !1);
					o.et;
					if (0 === o.it.length) return;
					t.getContext("2d");
					const e = Oi();
					if (!o.jn) return;
					for (let n = 0; n < o.jn.length; n++) {
						const i = ur(Si(o.jn[n], o.In[n], !0));
						if (i.zn) {
							if (!o.An[n]) continue;
							let r = o.An[n].slice();
							if (!r.length) continue;
							e ? Ji(t, r, i.zn, i.En) : (n < o.An.length - 1 && (r = r.concat(o.An[n + 1].slice().reverse())), Ji(t, r.length > 1 ? r : r[0], i.zn, i.En))
						}
					}
					if (!data.config.contour_type.N()) return;
					const i = Ui(t),
					r = (i.getContext("2d"), sr(), cr() && o.Nn && o.Nn.length),
					c = r ? o.Nn : o.An;
					for (let t = 0; t < o.jn.length; t++) {
						const n = ur(Si(o.jn[t], o.In[t], !0)),
						e = o.jn[t] % 5 == 0;
						let s = n.Tn;
						r && e && (s *= 2.5);
						const u = o.jn[t] % 1 != 0;
						let l = null;
						r && u && (l = [4, 2]);
						let a = c[t];
						if (a && a.length && n.Ln)
						for (let t = 0; t < a.length; t++) {
							Ji(i, a[t], !1, !1, n.Ln, s, l)
						}
						}(function(t) {
							const n = t.getContext("2d"),
							o = t.width,
							e = t.height;
							n.clearRect(0, 0, 1, e), n.clearRect(0, 0, o, 1), n.clearRect(o - 1, 0, 1, e), n.clearRect(0, e - 1, o, 1)
						})(i), Ki(i, n), i.kn(t)
				}(t, n)
			}(n, o), o.colours_only) return;
			Gi(n, o),
			function(n, o) {
				let e = Ci(o);
				const i = oi(e, !1);
				n.getContext("2d");
				if (!J(e)) {
					if (data.config.grid_type.N() > 1 && i.Sn)
					for (let t = 0; t < i.Sn.length; t++)
					for (let o = 0; o < i.Sn[t].length; o++) Ji(n, i.Sn[t][o], Et, !0);
					return
				}
				if (!nf()) return;
				const r = n.$t,
				c = n.lt,
				s = 1 / r,
				u = [],
				l = [],
				a = [],
				_ = [],
				d = data.ground,
				p = function(t) {
					let n = 0;
					return !1 !== t && (n = -(t - of()) * (r / rf())), c + 1 + n
				},
				h = function(t, n, o) {
					const e = 0 === t,
					i = t + 1 > r,
					c = p(n);
					e && o.push([0, p(!1)]);
					const s = o[o.length - 1][1];
					c != s && o.push([t, s]), (c != s || i) && o.push([t, c]), i && o.push([t, p(!1)])
				},
				g = function(t, n, o) {
					const e = 0 === t,
					i = t + 1 > r,
					s = p(n);
					e && a.push([0, c]), (s != a[a.length - 1][1] || i) && a.push([t, s]), i && a.push([t, c])
				},
				b = function(t, n, o) {
					const e = 0 === t,
					i = t + 1 > r,
					c = p(n);
					(e || i || c != _[_.length - 1][1]) && _.push([t, c])
				};
				for (let n = 0; n < r + 1; n++) {
					const o = n * s * rf(),
					e = Math.cos(ef()) * o + data.section.x[0],
					i = Math.sin(ef()) * o + data.section.y[0];
					if (data.b.length > 0)
					if (qs()) {
						h(n, tc(e, i, !1), u);
						h(n, tc(e, i, !0), l)
						} else {
						h(n, tc(e, i, Cs), u)
					} const r = d.gh.length > 0 ? t.calcGroundHeight(e, i) : 0;
					if (d.gh.length > 0 && g(n, r, a), at) {
						b(n, (data.grid.abs ? 0 : r) + data.grid.h, _)
					}
				}
				u.length > 0 && Ji(n, Mo(u), Et, !0, At, 1);
				if (l.length > 0) {
					const t = Mo(l);
					Ji(n, t, !1, !0, Et, 3), Ji(n, t, !1, !0, At, 1, [5, 5])
				}
				a.length > 0 && Ji(n, Mo(a), "#333333", !0, At, 1);
				if (_.length > 0) {
					const t = f ? Lt(.5) : St(.5);
					Ji(n, Mo(_), !1, !1, t, 3)
				}
				}(n, o), p && function(t, n) {
				const o = Ci(n);
				if (J(o)) return;
				const e = data.ground;
				if (e.gh.length < 2) return;
				const i = Fs(Cs) ? data.state2 : data.state,
				r = Ui(t),
				c = r.getContext("2d"),
				s = Lt(.75),
				u = Lt(.4),
				l = function(t) {
					return [Mo(po(t[0]) - X), Mo(ho(t[1]) - V)]
				},
				a = function(t, n, o, e = 1) {
					Ji(r, [l(t), l(n)], !1, !1, o || u, e)
				},
				f = St(.6),
				_ = Lt(.4);
				for (let t = 0; t < i.screens.length; t++) {
					const n = i.screens[t];
					if (n.i > -1) continue;
					const o = [n.x[0], n.y[0]],
					e = [n.x[1], n.y[1]];
					a(o, e, f, 3), a(o, e, _, 1)
				}
				for (let t = 0; t < e.gh_tri.length; t++)
				if (t > e.gh_trihalf[t]) {
					a(e.gh[e.gh_tri[t]], e.gh[e.gh_tri[t % 3 == 2 ? t - 2 : t + 1]])
					} for (let t = 0; t < e.gh_slopes.length; t++) {
					a(e.gh_slopes[t][0], e.gh_slopes[t][1])
				}
				if (!Z(q)) {
					const t = function(t, n, o, e) {
						t.save(), t.globalCompositeOperation = "destination-out", t.beginPath(), t.arc(n, o, e, 0, 2 * Math.PI, !1), t.fillStyle = Et, t.fill(), t.restore()
					},
					n = 7,
					o = 5;
					for (let i = 0; i < e.gh.length; i++) {
						const u = e.gh[i],
						a = l(u),
						f = u[2] + "",
						_ = c.measureText(f).width + o;
						t(c, a[0], a[1], _ / 2), nr(r, f, n, a[0], a[1], {
							colour: s
						})
					}
				}
				Ki(r, n), r.kn(t)
			}(n, o)
			}! function(t, n) {
			const o = Ci(n);
			if (J(o)) return;
			for (let o = 0; o < data.bmp.length; o++) Yi(o, t, !0, n.omit_tainted, !1)
		}(n, o),
		function(t, n) {
			if (0 === data.config.grid_lines.N()) return;
			const o = Ci(n),
			e = (t.getContext("2d"), Ui(t)),
			i = e.getContext("2d");
			i.Pt = function(t, n, o, e) {
				i.beginPath(), i.moveTo(t, n), i.lineTo(o, e), i.stroke()
			};
			const r = J(o),
			c = 8,
			s = r ? Es.vscale : Es.hscale,
			u = r ? Es.vcount : Es.hcount,
			l = t.$t,
			a = t.lt;
			i.lineWidth = .5, i.lineJoin = "round";
			const f = s * u,
			_ = r ? 0 : Xi(Q, f),
			d = r ? 0 : Xi(K, f),
			p = 4,
			h = l - p,
			g = a - c / 2 - p;
			for (let t = 0; t < 2; t++) {
				const n = 0 === t ? a : l,
				o = Math.floor(n / f) * f + f;
				for (let n = s; n <= o; n += s) {
					const o = Math.ceil(n) % f < 1 ? .75 : .2,
					e = 2 === data.config.grid_lines.N() ? St(o) : Lt(o);
					let c, s, u, p;
					i.strokeStyle = e;
					if (0 === t) {
						let t = n + d;
						r && (t = a - t), c = 0, s = l + 1, u = Mo(t), p = u
						} else {
						c = Mo(n + _), s = c, u = 0, p = a + 1
					}
					i.Pt(c, u, s, p)
				}
			}
			if (!r) {
				const t = 2 === data.config.grid_lines.N() ? St(.75) : Lt(.75);
				for (let n = 0; n < 2; n++) {
					const o = 0 === n ? a : l,
					i = Math.floor(o / f) * f + f;
					for (let o = f; o <= i; o += f) {
						let i, r, s, u = {
							colour: t
						};
						0 === n ? (i = h, r = o + d, s = To(lo(K + r)), u.align = "end") : (i = o + _, r = g, s = To(lo(Q + i))), nr(e, s, c, i, r, u, 1)
					}
				}
			}
			Ki(e, n), e.kn(t)
		}(n, o),
		function(n, o) {
			const e = Ci(o);
			if (!J(e)) return;
			if (!nf()) return;
			const i = n.getContext("2d"),
			r = ic(data.section),
			c = [data.section.x[0], data.section.y[0]],
			s = [data.section.x[1], data.section.y[1]];
			i.textAlign = "center", i.textBaseline = "middle", i.fillStyle = At;
			const u = .333,
			l = .5,
			a = function(o, e) {
				const i = o.setting > 0,
				u = "c" === o.type,
				l = o.tt(["setting", "h"]) && qs();
				if (!i) return;
				const a = o.s,
				f = a.sx,
				_ = a.sy,
				d = a.sz,
				p = a.sh,
				h = [];
				for (let o = u ? -1 : 0; o < f.length - 1; o++) {
					const i = -1 === o ? f.length - 1 : o,
					a = o + 1,
					g = [f[i], _[i], d[i] + p[i]],
					b = [f[a], _[a], d[a] + p[a]];
					if (e) {
						const n = t.orthoPoint(r, g),
						o = t.orthoPoint(r, b),
						e = yo(n[0], n[1]),
						c = yo(o[0], o[1]),
						s = wo(t.calcGroundHeight(n[0], n[1])),
						u = wo(t.calcGroundHeight(o[0], o[1])),
						l = wo(d[i] + p[i]),
						f = wo(d[a] + p[a]);
						h.push([e, s], [e, l], [c, f], [c, u])
						} else if (!u) {
						const o = t.linesIntersection(c, s, g, b);
						if (o) {
							const e = yo(o.x, o.y),
							i = wo(t.calcGroundHeight(o.x, o.y)),
							r = wo(o.h);
							if (r < i) {
								const t = Mo([
									[e, r],
									[e, i]
								]),
								o = l ? [5, 5] : null;
								u || Ji(n, t, !1, !1, Et, 3), Ji(n, t, !1, !1, At, 1, o)
							}
						}
					}
				}
				if (h.length > 0) {
					const t = l ? [5, 5] : null;
					Ji(n, Mo(h), !1, !1, Et, 1, t)
				}
				if (e && o.roof > 1) {
					const o = a.roof_lines,
					e = l ? [5, 5] : null;
					for (let i = 0; i < o.length; i++) {
						const c = o[i],
						s = c[0],
						u = c[1],
						l = t.orthoPoint(r, s),
						a = t.orthoPoint(r, u),
						f = yo(l[0], l[1]),
						_ = yo(a[0], a[1]),
						d = wo(s[2]),
						p = wo(u[2]);
						Ji(n, Mo([
							[f, d],
							[_, p]
						]), !1, !1, Et, 1, e)
					}
				}
			},
			f = function(t) {
				for (let n = 0; n < data.b.length; n++) {
					const o = Bo("b", n);
					if (a(o, t), qs() && o.tt()) {
						const o = Bo("b", n, 2);
						a(o, t)
					}
				}
			};
			lt && f(!0);
			f();
			for (let o = 0; o < data.r.length; o++) {
				const e = data.r[o],
				i = t.orthoPoint(r, [e.x, e.y], !0);
				if (i) {
					const t = Math.hypot(e.x - i[0], e.y - i[1]) < ft;
					if (lt || t) {
						const o = function(o) {
							const r = o ? o.Nt : rc(e),
							c = yo(i[0], i[1]),
							s = wo(r + e.z);
							if (data.config.receiver_type.N() > 0) {
								const i = Nc(o || e),
								r = 2 === data.config.receiver_type.N() && i ? Et : Li(i, !0),
								l = !!t && r,
								a = t ? At : Lt(u);
								Ji(n, [c, s, 2 * hc], l, !0, a);
								const f = 10 - 2 * data.config.precision.N();
								t && nr(n, Qn(i, ""), f, c, s + 1, {
									bold: !0
								})
								} else {
								const o = t ? 1 : u,
								e = Lt(o),
								i = St(o),
								r = !!t && At,
								l = [c, s, hc],
								a = bc(c, s);
								Ji(n, l, e, !0, r), Ji(n, a, i, !0, !1)
							}
						};
						if (e.it)
						for (let t = 0; t < e.it.length; t++) {
							o(e.it[t])
						} else o()
					}
				}
			}
			for (let o = 0; o < data.rr.length; o++) {
				const e = data.rr[o];
				if (data.rr[o].setting > 0) {
					const i = rc(e),
					c = t.orthoPoint(r, [data.rr[o].x, data.rr[o].y], !lt);
					if (c) {
						const t = Math.hypot(data.rr[o].x - c[0], data.rr[o].y - c[1]) < ft;
						if (t || lt) {
							const e = yo(c[0], c[1]),
							r = wo(i + data.rr[o].z),
							s = t ? 1 : u,
							l = Lt(s),
							a = St(s),
							f = vc(e, r);
							Ji(n, f, l, !0, a)
						}
					}
					hr(o, null, n)
				}
			}
			const _ = function(o) {
				const e = o.tt(["setting", "h"]) && qs();
				if (o.setting < 1) return;
				const i = t.orthoPoint(r, [o.x, o.y], !0);
				if (i) {
					const t = Math.hypot(o.x - i[0], o.y - i[1]) < ft;
					if (t || lt) {
						const r = yo(i[0], i[1]),
						c = wo(o.h + o.z);
						let s;
						s = e ? l : t ? 1 : u;
						const a = pc(r, c);
						Ji(n, a, Lt(s), !0, St(s), null)
					}
				}
			};
			for (let t = 0; t < data.p.length; t++) {
				const n = Bo("p", t);
				if (_(n), qs() && n.tt()) {
					_(Bo("p", t, 2))
				}
			}
			const d = function(o) {
				const e = o.tt(["setting", "h"]) && qs();
				if (o.setting < 1) return;
				const i = o.s,
				a = [];
				for (let u = 0; u < i.sx.length - 1; u++) {
					const f = [i.sx[u], i.sy[u], i.sz[u]],
					_ = [i.sx[u + 1], i.sy[u + 1], i.sz[u + 1]];
					if (lt) {
						const n = t.orthoPoint(r, f),
						e = t.orthoPoint(r, _),
						i = yo(n[0], n[1]),
						c = yo(e[0], e[1]),
						s = wo(f[2] + o.h),
						u = wo(_[2] + o.h);
						a.push([i, s], [c, u])
					}
					const d = t.linesIntersection(c, s, f, _);
					if (d) {
						const t = [yo(d.x, d.y), wo(o.h + d.h), $c + 1];
						e ? Ji(n, t, Lt(l), !0, St(l), null) : p.push(t)
					}
				}
				a.length && (e || (Ji(n, a, !1, !1, St(u), 5), Ji(n, a, !1, !1, Lt(u), 3)))
			},
			p = [];
			for (let t = 0; t < data.l.length; t++) {
				const n = Bo("l", t);
				if (d(n), qs() && n.tt()) {
					d(Bo("l", t, 2))
				}
			}
			for (let t = 0; t < p.length; t++) Ji(n, p[t], At, !0, Et)
		}(n, o),
		function(t, n) {
			const o = Ci(n),
			e = (t.getContext("2d"), Ui(t)),
			i = e.getContext("2d"),
			r = J(o),
			c = !Fi(n),
			s = c ? Et : At,
			u = 4,
			l = 2,
			a = 8,
			f = (t.$t, t.lt);
			if (r) {
				if (!nf()) return;
				const t = 8;
				let n = Es.vscale;
				const o = n * Es.vcount,
				r = of() * st,
				_ = 35;
				for (let d = n; d < f + r - _; d += n) {
					const n = Math.ceil(d) % o < 1,
					_ = f - d + r;
					nr(e, To(d / st), a, t, _, {
						align: "start",
						white: c
					});
					const p = n ? u : u / 2,
					h = n ? l : l / 2;
					i.fillStyle = s, i.fillRect(0, Jn(_ - h / 2), p, h)
				}
			}
			Ki(e, n), e.kn(t)
		}(n, o), !1 !== o.footer && tr(n, o)
	}
	
	function Zi(t) {
		!t && W() && jf(), t || (t = J() ? T.ct.canvas : T.ot.canvas);
		const n = t.getContext("2d");
		n.clearRect(0, 0, t.width / t.yt, t.height / t.yt), n.restore()
	}
	
	function Ji(t, n, o, e, i, r, c, s) {
		if (!n) return !1;
		const u = t.getContext("2d");
		let l;
		if (u.save(), u.beginPath(), Array.isArray(n))
		if (Array.isArray(n[0])) Array.isArray(n[0][0]) || (n = [n]), n.forEach((t => {
			t.length > 0 && (u.moveTo(t[0][0], t[0][1]), t.forEach((t => {
				u.lineTo(t[0], t[1])
			}))), e && u.closePath()
		}));
		else {
			let t = n[2];
			t || (t = 4), u.arc(n[0], n[1], t, 0, 2 * Math.PI)
		}
		else l = new Path2D(n);
		if (-1 === o ? (u.globalCompositeOperation = "destination-out", u.fillStyle = Et) : o && (u.globalCompositeOperation = "source-over", u.fillStyle = o), o && (l ? u.fill(l) : u.fill()), i) {
			u.lineCap = c ? "butt" : "round", u.lineJoin = "round", u.lineDashOffset = s || 0, c ? u.setLineDash(c) : u.setLineDash([]), Array.isArray(i) || (i = [i]), Array.isArray(r) || (r = [r]);
			for (let t = 0; t < i.length; t++) r[t] ? u.lineWidth = r[t] : u.lineWidth = 1, u.strokeStyle = i[t], l ? u.stroke(l) : u.stroke()
		}
		u.restore()
	}
	
	function Wi(t, n) {
		for (let o = 0; o < data.bmp.length; o++) Yi(o, t, n, !0, !0)
	}
	
	function Yi(t, n, o, e, i) {
		const r = data.bmp[t];
		if (!r) return;
		if (e && !r.Rn) return;
		const c = ns(t);
		if (!c) return;
		const s = r.merge;
		if (1 === s) return;
		if (2 === s && !i) return;
		const u = r.img_scale * c.width * ct,
		l = r.img_scale * c.height * ct,
		a = po(r.x) + (o ? o[0] || -X : 0),
		f = ho(r.y) + (o ? o[1] || -V : 0),
		_ = r.img_rotate * Math.PI / 180;
		if (e) {
			const t = Ui(n),
			o = t.getContext("2d");
			o.drawImage(c, -u / 2, -l / 2, u, l);
			if (a_(o)) return void Xu(g("alert_image_tainted"), Ht, "export");
			t.xn()
		}
		const d = n.getContext("2d");
		if (d.save(), d.globalCompositeOperation = "source-over", !i && s > 2) {
			const t = dn[s];
			t.alpha && (d.globalAlpha = t.alpha), t.type && (d.globalCompositeOperation = t.type)
		}
		return d.translate(a, f), d.rotate(_), d.drawImage(c, -u / 2, -l / 2, u, l), d.restore(), !0
	}
	
	function Gi(t, n, o) {
		if (0 === data.config.grid_figures.N()) return;
		const e = Ci(n),
		i = (t.getContext("2d"), Z(e)),
		r = J(e),
		c = (data.config.grid_figures.N(), oi(e, !0)),
		s = c.et,
		u = c.it;
		if (0 === u.length) return;
		const l = Ui(t);
		l.getContext("2d");
		let a = s.Zt,
		f = s.Wt,
		_ = s.Gt,
		d = s.Vt,
		p = s.Kt,
		h = s.tn;
		for (let n = 0; n <= _; n++) {
			let e = (n + p) * f;
			if (null != u[e])
			for (let n = 0; n <= d; n++) {
				let c = (n + h) * f,
				s = mi(u[e][c]);
				if (s = i ? to(s, !0) : Qn(s), s || 0 === s) {
					let n = (e + .5) * a,
					i = (c + .5) * a;
					r ? i = l.lt - i : (n -= Q, i -= K), o ? nr(t, s, bn(8), n, i, {}, !0) : nr(l, s, bn(8), n, i, {
						white: 2 === data.config.grid_figures.N()
					})
				}
			}
		}
		o || Ki(l, n), l.kn(t)
	}
	
	function Xi(t, n) {
		return Math.floor(t / n) * n - t
	}
	
	function Vi() {
		return 1 === data.config.weighting.N() ? " (" + g("prop_aweighted") + ")" : ""
	}
	
	function Qi() {
		return g("grid_height_text") + " " + To(data.grid.h) + (data.grid.abs ? " " + g("grid_abs") : "") + Vi()
	}
	
	function Ki(t, n) {
		!1 !== n.footer && tr(t, n, !0)
	}
	
	function tr(t, o, e) {
		const i = Ci(o),
		r = t.getContext("2d");
		let u = [];
		Z(i) ? u.push(g("mode1") + " (" + No() + ")") : (J(i) ? u.push(g("mode2")) : u.push(Qi()), Cs && u.push(Gs(Cs)));
		const l = c.grid_footer ? c.grid_footer : n ? s.grid_footer : "calc-db-soundpath.net";
		if (t.width < 80 || t.height < 40) return;
		let a = bn(9);
		r.font = a + "pt Lato", r.textBaseline = "middle";
		const f = function(t, n, o) {
			let e = t;
			for (; r.measureText(n).width + 1.35 * e * 2 > o && e > 5;) e *= .9, r.font = e + "pt Lato";
			return e
		};
		let _ = 1 / 0;
		for (let n = 0; n < u.length; n++) {
			const o = f(a, u[n], t.$t);
			_ > o && (_ = o)
		}
		a = _;
		const d = 1.35 * a;
		let p = d,
		h = d + a / 2,
		b = "start";
		const m = !Fi(o);
		let v = 0;
		for (let n = 0; n < u.length; n++) {
			const o = nr(t, u[n], a, p, h + 1.75 * a * n, {
				align: b,
				white: m
			}, e);
			v < o.width && (v = o.width)
		}
		v + r.measureText(l).width + 3 * d < t.$t ? (p = t.$t - p, b = "end") : (a = f(a, l, t.$t), h = t.lt - h), nr(t, l, a, p, h, {
			align: b,
			white: m
		}, e)
	}
	
	function nr(t, n, o, e, i, r = {}, c) {
		const s = t.getContext("2d");
		if ("" === n) return;
		const u = r.scale || 1;
		s.font = (r.bold ? "bold " : "") + o * u + "pt Lato", s.textAlign = r.align ? r.align : "center", s.textBaseline = "middle";
		const l = s.measureText(n);
		if (c) {
			const t = 2,
			n = l.width + 2 * t,
			r = o + 2 * t,
			a = "end" == s.textAlign ? -n + t : "center" == s.textAlign ? -n / 2 : -t;
			if (s.clearRect((e + a) * u, (i - r / 2) * u, n * u, r * u), !0 === c) return l
		}
		return r.white && (r.colour = Et, s.filter = "blur(0.5px)", s.fillStyle = Lt(.5), s.fillText(n, (e + 1) * u, (i + 1) * u), s.filter = Ft), s.fillStyle = r.colour ? r.colour : At, s.fillText(n, e * u, i * u), l
	}
	
	function or(t) {
		const n = oi(t.mode, !1),
		o = function(t, o) {
			const e = [];
			if (!t) return e;
			const i = n.et,
			r = i.Zt,
			c = i.Wt,
			s = (i.Gt, i.Vt, i.Kt),
			u = i.tn;
			return t.forEach((function(t) {
				for (let n = 0; n < t.length; n++) {
					const e = t[n];
					for (let t = 0; t < e.length; t++) {
						const n = [e[t][0] * c * r, e[t][1] * c * r];
						J(o) ? n[1] = Va.Nt - n[1] : (n[0] -= Q - s * c * r, n[1] -= K - u * c * r), e[t] = n
					}
				}
				e.push(t)
			})), e
		};
		t.buildings && (n.Sn = o(t.buildings, t.mode)), t.areas && (n.An = o(t.areas, t.mode)), t.lines && (n.Nn = o(t.lines, t.mode))
	}
	
	function er(n) {
		const o = [];
		for (let e = 0; e < n.length; e++) {
			const i = n[e],
			r = [];
			let c = !1;
			for (let s = 0; s < o.length; s++) {
				if (o[s].Dn) continue;
				const u = n[s];
				if (t.pointInPoly(i[0], u)) {
					o[s].Hn.push(e), c = !0;
					continue
				}
				t.pointInPoly(u[0], i) && (r.push(s), o[s].Dn = !0)
			}
			o[e] = {
				Hn: r,
				Dn: c
			}
		}
		const e = [];
		for (let t = 0; t < o.length; t++) {
			const n = o[t];
			n.Dn || e.push({
				On: t,
				Hn: n.Hn
			})
		}
		return e
	}
	
	function ir(t, n) {
		if (null == t) return;
		const o = oi(t, !1);
		o.Mn = !1, n ? o.Pn = n : (o.Nn = [], o.Sn = [], o.An = [], o.jn = [], o.In = [])
	}
	
	function rr() {
		for (let t = 0; t < 3; t++) ir(t)
	}
	
	function cr() {
		if (!data.config.contour_styled.N()) return !1;
		return sr() <= 1
	}
	
	function sr(t) {
		return Z() ? 1 : (null == t && (t = data.config.grid_type.N()), 2 === t ? 1 : 3 === t ? 5 : 4 === t ? 10 : 5 === t ? .5 : 1)
	}
	const ur = function(t) {
		const n = data.config.contour_type.N();
		return 1 === n ? {
			zn: t,
			En: !0,
			Ln: At,
			Tn: .5
			} : 2 === n ? {
			zn: t,
			En: !0,
			Ln: Et,
			Tn: .5
			} : 3 === n ? {
			zn: !1,
			En: !1,
			Ln: t,
			Tn: 1
			} : {
			zn: t,
			En: !0,
			Ln: !1,
			Tn: 0
		}
	};
	
	function lr(t, n, o, e) {
		return null != e && "" != e && 0 != e || (e = At), t.circle(0, 0, 2.5).transform("t" + n + "," + o).zn(e).Ln(Et, 1).addClass("passthrough")
	}
	
	function ar(n, o, e, i, r, c = At, s = 1, u = 1, l = "", a = 0, f = !1) {
		let _;
		if (f) {
			const c = Math.hypot(r - e, i - o),
			s = t.angle(o, e, i, r),
			u = s + Math.PI / 2;
			let l = "M" + o + " " + e;
			const a = Math.cos(u) * (f / 4),
			d = Math.sin(u) * (f / 4),
			p = Math.cos(s) * (f / 2),
			h = Math.sin(s) * (f / 2);
			let g = 0,
			b = 2,
			m = 0;
			for (; m < c;) g++, b = -b, l += " Q" + (o + p * (g - .5) + a * b) + " " + (e + h * (g - .5) + d * b) + " " + (o + p * g) + " " + (e + h * g), m += f / 2;
			const v = n.path(l),
			$ = v.getTotalLength(),
			y = v.getSubpath(0, $ * (c / m));
			v.remove(), _ = n.path(y)
		} else _ = n.path("M" + Mo(o) + " " + Mo(e) + " L" + Mo(i) + " " + Mo(r));
		return _.zn(Ft).Ln(c, s).Cn(l, a ? -a + "px" : 0).addClass("passthrough"), u < 1 && _.attr({
			"stroke-opacity": u
		}), _
	}
	
	function fr(t, n, o, e = 1) {
		return o ? e < 1 ? "rgba(127,127,127," + e + ")" : "#999999" : t ? e < 1 ? "rgba(0,0,255," + e + ")" : "#0000ff" : n ? e < 1 ? "rgba(255,0,0," + e + ")" : "#ff0000" : e < 1 ? Lt(e) : At
	}
	
	function _r(n, o) {
		return n > 0 ? t.round(t.calcWavelength(n) * o, 3) : 0
	}
	
	function dr(n, o, e) {
		let i = 0,
		r = [],
		c = 0;
		return 2 === o && (c = _r(n, ct), c > 2 || (c = 0)), 1 === o && e && (r.push(3, 47), i = 5 * t.freqBand(n)), r.length || r.push(3, 2), [c, r, i]
	}
	
	function pr(t) {
		const n = data.rr[t];
		if (!n || !n.fn) return;
		const o = n.fn;
		return qs() ? void 0 : Fs(Cs) ? o.length < 2 ? o[0] : o[1] : o[0]
	}
	
	function hr(o, e, i = null) {
		const r = pr(o);
		if (!r) return;
		const c = data.rr[o].setting;
		for (let n = 0; n < r.length; n++) {
			const o = r[n];
			if (!o.xyz) continue;
			let s = 1,
			[u, l, a] = dr(o.freq, c, o.is_multi);
			const f = [],
			_ = [];
			for (let n = 0; n < o.xyz.length; n++) {
				const i = o.xyz[n],
				r = i[0],
				c = i[1],
				s = i[2],
				u = i[3];
				if (e) f.push({
					x: po(r),
					y: ho(c),
					flag: u
				});
				else {
					const n = ic(data.section),
					o = t.orthoPoint(n, [r, c]);
					f.push({
						x: Mo(yo(o[0], o[1])),
						y: Mo(wo(u > 0 ? u : s)),
						dot: Mo(wo(s)),
						flag: u
					}), _.push(Math.hypot(r - o[0], c - o[1]) < ft)
				}
			}
			let d = 1;
			for (let t = 0; t < f.length - 1; t++) {
				const n = f[t].x,
				r = f[t].y,
				c = f[t + 1].x,
				p = f[t + 1].y,
				h = f[t].flag,
				g = -1 === h || h > 0;
				if (e) {
					if (ar(e, n, r, c, p, fr(o.is_vertical, o.is_limited), s, d, l, a, u), g) {
						lr(e, n, r, fr(o.is_vertical, o.is_limited, h > 0))
					}
					} else {
					let e = !(_[t] && _[t + 1]);
					const s = e ? d / 2 : d;
					if (lt || !e) {
						let t;
						t = e ? St(s) : fr(o.is_vertical, o.is_limited, !1, s), Ji(i, [
							[n, r],
							[c, p]
						], !1, !1, t, 1, l, a)
					}
					if (g) {
						let e = !_[t];
						if (lt || !e) {
							const r = !e && fr(o.is_vertical, o.is_limited, h > 0);
							Ji(i, [n, f[t].dot, 2.5], r, !0, Et)
						}
					}
				}
				d = .5 * (d - .3) + .3, a -= Math.hypot(c - n, p - r)
			}
			}! function(t, o) {
			if (!(o && J() && n)) return;
			const e = pr(t);
			if (!e) return;
			const i = [],
			r = function(t, n) {
				const o = po(t[0]),
				e = ho(t[1]),
				r = po(n[0]),
				c = ho(n[1]);
				for (let t = 0; t < i.length; t++) {
					const n = i[t];
					if (n[0] === o && n[1] === e && n[2] === r && n[3] === c) return
				}
				i.push([o, e, r, c])
			};
			for (let t = 0; t < e.length; t++) {
				const n = e[t],
				o = n.xyz;
				if (o)
				if (n.is_direct) {
					r(o[0], o[o.length - 1])
				} else
				for (let t = 0; t < o.length - 1; t++) {
					const n = o[t];
					let e = t + 1;
					for (; - 1 === o[e][3] || o[e][3] > 0;) e++, t++;
					r(n, o[e])
				}
			}
			for (let t = 0; t < i.length; t++) {
				const n = i[t];
				br(o, n[0], n[1], n[2], n[3], .05)
			}
		}(o, e)
	}
	
	function gr(t, n) {
		const o = pr(n);
		if (!o) return [];
		const e = o[t];
		return e && e.xyz ? e.xyz : []
	}
	
	function br(n, o, e, i, r, c = 0, s = null) {
		if (lo(Math.hypot(r - e, i - o)) < 2.001) return !1;
		const u = "M" + o + " " + e + " L" + i + " " + r,
		l = n.path(u).Ln(Rt, 5).Fn(0);
		return l.data({
			type: "ray",
			cursor: "pointer",
			show_select: !0,
			xy: [o, e, i, r]
			}).Dt([2]), Br(l, {
			hover: [function() {
				Dr(this, 1)
				}, function() {
				Dr(this, 0)
			}]
		}), l.qn = function(n) {
		const o = this.data("xy"),
		e = fo(o[0]),
		i = _o(o[1]),
		r = fo(o[2]),
		u = _o(o[3]);
		let l = 0,
		a = 0;
		const f = Math.hypot(r - e, u - i);
		if (c || f < 1) {
			c || (c = .5);
			const n = t.angle(e, i, r, u);
			l = Math.cos(n) * f * c, a = Math.sin(n) * f * c
		}
		ff(Zn(e - l), Zn(i - a), Zn(r + l), Zn(u + a), s, !0), Dr(this, 0)
		}, l.Un(), l
	}
	
	function mr(t, n, o) {
		const e = o.transform().totalMatrix,
		i = t * e.a + n * e.b + e.e,
		r = t * e.c + n * e.d + e.f;
		return {
			x: Zn(i),
			y: Zn(r)
		}
	}
	
	function vr(t) {
		const n = t.changedTouches[0].clientX,
		o = t.changedTouches[0].clientY;
		$t.touch_x = n, $t.touch_y = o, wr.call(this, n, o, t)
	}
	
	function $r(t) {
		const n = t.changedTouches[0].clientX,
		o = t.changedTouches[0].clientY,
		e = n - $t.touch_x,
		i = o - $t.touch_y;
		xr.call(this, e, i, n, o, t)
	}
	
	function yr(t) {
		if (null == t) return !0;
		Array.isArray(t) || (t = [t]);
		for (let n = 0; n < t.length; n++)
		if (t[n] === q) return !0;
		return !1
	}
	
	function wr(t, n, o) {
		if ("object" == typeof t && "touchstart" == t.type) return vr.call(this, t);
		0 == C && ya(o) < 2 && yr(this.data("mode")) && zr.call(this, t, n, o)
	}
	
	function xr(t, n, o, e, i) {
		if ("object" == typeof t && "touchmove" == t.type) return $r.call(this, t);
		0 == C && ya(i) < 2 && yr(this.data("mode")) && Ar.call(this, o, e, t, n, i)
	}
	
	function kr(t) {
		0 == C && ya(t) < 2 && yr(this.data("mode")) && Er.call(this, t)
	}
	let Mr = !1,
	jr = !1;
	let Ir;
	
	function zr(t, n, o) {
		if (Mr || xa) return;
		const e = this.data("type"),
		i = this.data("id"),
		r = Bo(e, i);
		if ("bmp" === e && r.setting) return;
		"section" === e && Va.zt && Va.zt.addClass("resizing"), Ir = 3;
		const c = mr(0, 0, this);
		e && Hr(1, e, i), Mr = {
			x: c.x,
			y: c.y,
			ox: c.x - t,
			oy: c.y - n,
			dx: 0,
			dy: 0,
			V: this,
			Bn: r
		}
	}
	
	function Ar(t, n, o, e, i) {
		if (!Mr) return;
		const r = this.data("type"),
		c = Bo(r, this.data("id"));
		if (!("bmp" === r && c.setting || Math.hypot(o, e) < Ir))
		if (Ir = 0, null != this.Zn && this.Zn(t + Mr.ox, n + Mr.oy, i.shiftKey), Mr.dx = o, Mr.dy = e, "bmp" == r) Ku(null, t - o, n - e, t, n, i.shiftKey);
		else if ("grid" != r && "legend" != r && "section" != r && "target" != r) {
			const t = mr(0, 0, this);
			Ku(null, Mr.x, Mr.y, t.x, t.y, i.shiftKey)
		}
	}
	
	function Er(t) {
		if (!Mr) return;
		const n = this.data("type"),
		o = this.data("id"),
		e = Bo(n, o);
		if ("bmp" === n && e.setting) return;
		"section" === n && Va.zt.removeClass("resizing"), "grid" === n && me();
		const i = Mr.dx + Mr.dy === 0 && Ir > 0;
		let r = !1;
		Mr = !1, i ? 0 === C ? this.qn && (r = !0, this.qn(wa(t)), Uu()) : C >= 4 && Uu() : (! function(t, n) {
			const o = Bo(t, n);
			if (!o) return;
			const e = Gn(o.x),
			i = Gn(o.y);
			data._put(t, n, {
				x: e,
				y: i
			})
		}(n, o), xe(n, o), Uu()), tl(), !n || r || wa(t) || Hr(0, n, o)
	}
	
	function Nr() {
		if (!this) return;
		const t = this.data("type"),
		n = this.data("id");
		Hr(1, t, n) && Rr(t, n)
	}
	
	function Tr() {
		if (!this) return;
		Hr(0, this.data("type"), this.data("id"))
	}
	
	function Lr(t) {
		const n = this.data("type"),
		o = this.data("id");
		return 1 === C && ya(t) < 2 || 0 === C && 3 === ya(t) ? ("legend" === n ? wu(!0) : Nl(n, o), void t.preventDefault()) : null != this.Jn ? (this.Jn(), void t.preventDefault()) : void 0
	}
	
	function Sr(t, n, o) {
		const e = Yo(n);
		if (!e) return !1;
		if ("set" === e.type)
		for (let n = 0; n < e.items.length; n++) null != o && e[n].n !== o || ("set" === e[n].type ? Sr(t, e[n]) : "g" === e[n].type && e[n].selectAll("*").forEach((function(n) {
			n.hasClass("show_hover") && n.toggleClass("highlight", t)
		})));
		return !0
	}
	
	function Rr(t, n) {
		Cu(t, n, "toTop")
	}
	
	function Dr(t, n, o, e) {
		yr(t.data("mode")) && function(t) {
			if (null == t) return 0 === C || 1 === C;
			Array.isArray(t) || (t = [t]);
			for (let n = 0; n < t.length; n++)
			if (t[n] === C) return !0;
			return !1
			}(t.data("tool")) && ((t.data("show_hover") || t.data("show_select") && 0 === C) && (n && t.hasClass("highlight") || t.Fn(n, !0)), t.data("cursor") && t.toggleClass(t.data("cursor"), 1 === n), !0 === t.data("edit") && function(t, n, o) {
				let e = !1;
				for (let i = 0; i < Or.n.length; i++)
				if (Or.type[i] === t && Or.n[i] === n) {
					if (o) {
						Or.type.splice(i, 1), Or.n.splice(i, 1);
						break
					}
					e = !0
				} o || e || (Or.type[Or.type.length] = t, Or.n[Or.n.length] = n);
				$("#objects").toggleClass("editable", Or.n.length > 0)
			}(o, e, 1 !== n))
	}
	
	function Hr(t, n, o) {
		if ("object" != typeof n && t && $t.node && Hr(0, $t.node[0], $t.node[1]), $t.down || Mr) return !1;
		if (C > 1) return !1;
		if (!n) return !1;
		"object" != typeof n && ($t.node = t ? [n, o] : null);
		const e = Yo(n);
		if (!e) return !1;
		if ("set" === e.type)
		for (let i = 0; i < e.items.length; i++) null != o && e[i].n !== o || ("set" === e[i].type ? Hr(t, e[i]) : "g" === e[i].type && e[i].selectAll("*").forEach((function(e) {
			Dr(e, t, n, o)
		})));
		return t && Rr(n, o), !0
	}
	let Or = {
		type: [],
		n: []
	};
	
	function Pr(t, n, o, e) {
		$t.sticky = t, zr.call($t.sticky, n, o, e)
	}
	
	function Cr(t, n, o, e, i) {
		if ("c" !== t) return;
		let r = Yo(t),
		c = null;
		r[n][1].selectAll("*").forEach((function(t) {
			t.data("sticky") && (c = t)
		})), c && Pr(c, o, e, i)
	}
	
	function Fr(t) {
		return t.toString().trim().replace(/[\[\]\&\=\?\!]/gi, "").replace(/ +/g, " ").trim()
	}
	
	function qr(n, o, e, i) {
		if ("heights" === e) return Ur(n, o);
		const r = function(n, o, e) {
			return "" === n || null == n ? e : (n = t.round(t.toNumber(n), o), isNaN(n) ? e : n)
		};
		if (void 0 === i && (i = Array.isArray(o) ? null : "h" !== e || "r" !== n && "rr" !== n ? 0 : 1), Array.isArray(o)) {
			if ("h" === e || "setting" === e || "name" === e) o = qr(n, o[0], e, i);
			else {
				for (let t = 0; t < o.length; t++) o[t] = qr(n, o[t], e, i);
				if ("lvl" === e || "hz" === e)
				for (;
				"" == o[o.length - 1];) o.pop()
			}
			return "rc" === e && Array.isArray(o) && ("c" !== n && 1 !== o.length || (o = o[0])), o
		}
		switch (null == o && (o = ""), e) {
			case "h_roof":
			if ("" === o) {
				o = null;
				break
			}
			case "h":
			if ("grid" === o || "global" === o) break;
			((o = r(o, 1, i)) < 0 || o > 1e4) && (o = 0);
			break;
			case "rc":
			(o = r(o, 2, i)) < 0 && (o = 0), o > 1 && (o = 1);
			break;
			case "hz":
			0 == i && (i = 500), ("string" == typeof o || o instanceof String) && o.indexOf("k") > -1 && (o = o.replace(/k/i, "000")), 0 === (o = r(o, 1, i)) && (o = i), null != o && o < t.f_lower[0] && (o = t.f[0]), o > t.f_upper && (o = t.f[t.f.length - 1]);
			break;
			case "lvl":
			case "lw":
			0 === i && (i = 100), 0 === (o = r(o, 1, i)) && (o = i), o > 200 && (o = 200);
			break;
			case "adj":
			(o = r(o, 1, i)) > 100 && (o = 100);
			break;
			case "adj%":
			0 == i && (i = 100), "string" == typeof o && (o = o.replace("%", "")), (o = r(o, 0, i)) <= 0 && (o = 100);
			break;
			case "setting":
			case "merge":
			case "method":
			case "slope":
			case "roof":
			case "adj_type":
			case "abs":
			"" == o && 0 !== o && (o = i), o = t.toInt(o), isNaN(o) && (o = i), "merge" === e && 0 === o && (o = 3);
			break;
			case "name":
			0 == i && (i = ""), "" === (o = Fr(o)) && (o = i);
			break;
			case "x":
			case "y":
			case "z":
			case "img_scale":
			case "img_rotate":
			o = r(o, 5, i);
			break;
			case "rgb":
			(o = t.toInt(o)) < 0 && (o = 0), o > 255 && (o = 255)
		}
		return o
	}
	
	function Ur(t, n) {
		let o = [];
		Array.isArray(n) || (n = [n]);
		for (let e = 0; e < n.length; e++) null != n[e] && o.push(qr(t, n[e], "h", 1));
		return o.sort((function(t, n) {
			return t - n
			})), o = o.filter((function(t, n, o) {
			return !n || t != o[n - 1]
		})), o
	}
	
	function Br(t, n) {
		Array.isArray(t) || (t = [t]), n || (n = {}), !1 !== n.drag && (null == n.drag && (n.drag = []), n.drag[0] || (n.drag[0] = wr), n.drag[1] || (n.drag[1] = xr), n.drag[2] || (n.drag[2] = kr)), null == n.click && (n.click = Lr), null == n.hover && (n.hover = [Nr, Tr]), t.forEach((function(t) {
			n.hover && t.hover(n.hover[0], n.hover[1]), n.drag[0] ? (t.drag(n.drag[1], n.drag[0], n.drag[2]), t.touchstart(n.drag[0]), t.touchmove(n.drag[1]), t.touchend(n.drag[2])) : t.touchstart(n.hover[0]), n.click && t.mouseup(n.click).touchend(n.click)
		}))
	}
	const Zr = function(t) {
		const n = Math.PI / 4;
		return Math.round(t / n) * n
	};
	
	function Jr(n, o, e, i) {
		if (i && Mr && (Math.abs(Mr.x - o) >= Math.abs(Mr.y - e) ? e = Mr.y : o = Mr.x), "r" === n.type) {
			const i = function(n, o, e) {
				const i = {
					x: o,
					y: e
				};
				if (data.config.iso_facade.N()) {
					let r, c, s, u, l;
					const a = [fo(o), _o(e)];
					for (let i = 0; i < yt.ut.length; i++) {
						const f = data.V("b", i, Cs);
						if (!f) continue;
						const _ = f.roof && f.h_roof > f.h ? f.h_roof : f.h;
						if (f.setting > 0 && null != yt.ut[i] && _ > rc(n) && t.pointInPoly(a, yt.ut[i])) {
							r = yt.ut[i];
							for (let n = 0; n < r.length / 2; n++) {
								let i = [];
								0 == n ? i.push(r[r.length - 2], r[r.length - 1]) : i.push(r[2 * n - 2], r[2 * n - 1]), i.push(r[2 * n], r[2 * n + 1]), l = t.orthoPoint(i, a), l[0] < Math.min(i[0], i[2]) || l[0] > Math.max(i[0], i[2]) || l[1] < Math.min(i[1], i[3]) || l[1] > Math.max(i[1], i[3]) || (l = ao(l), c = Math.hypot(l[0] - o, l[1] - e), (null == s || c < s) && (s = c, u = l))
							}
						}
					}
					null != u && (i.x = u[0], i.y = u[1])
				}
				return i
			}(n, o, e);
			o = i.x, e = i.y
		}
		o = fo(o), e = _o(e);
		let r = !1;
		return Cn(o) && n.x !== o && (n.x = o, r = !0), Cn(e) && n.y !== e && (n.y = e, r = !0), r
	}
	
	function Wr(n, o, e, i, r) {
		if (r && Mr) {
			let r, c;
			const s = Mr.x,
			u = Mr.y;
			if (o > 0) {
				const l = po(n.x[o - 1]),
				a = ho(n.y[o - 1]),
				f = t.orthoPoint([s, u, l, a], [e, i]);
				r = f[0], c = f[1]
			}
			if (o < n.x.length - 1) {
				const l = po(n.x[o + 1]),
				a = ho(n.y[o + 1]),
				f = t.orthoPoint([s, u, l, a], [e, i]);
				(!r || Math.hypot(f[0] - e, f[1] - i) < Math.hypot(r - e, c - i)) && (r = f[0], c = f[1])
			}
			e = r, i = c
		}
		e = fo(e), i = _o(i);
		let c = !1;
		return Cn(e) && n.x[o] !== e && (n.x[o] = e, c = !0), Cn(i) && n.y[o] !== i && (n.y[o] = i, c = !0), c
	}
	
	function Yr(n, o, e, i, r) {
		const c = o < n.x.length - 1 ? o + 1 : 0,
		s = po(n.x[o]),
		u = ho(n.y[o]),
		l = po(n.x[c]),
		a = ho(n.y[c]),
		f = (l - s) / 2,
		_ = (a - u) / 2;
		if (r && Mr || $t.sticky) {
			const n = {
				x: (s + l) / 2,
				y: (u + a) / 2
			},
			o = {
				x: n.x - Mr.x,
				y: n.y - Mr.y
			},
			r = t.orthoPoint([s - o.x, u - o.y, l - o.x, a - o.y], [e, i]),
			c = Mr.x + (e - r[0]),
			f = Mr.y + (i - r[1]);
			!$t.sticky && Math.hypot(r[0] - e, r[1] - i) < Math.hypot(c - e, f - i) ? (e = r[0], i = r[1]) : (e = c, i = f)
		}
		const d = fo(e - f),
		p = _o(i - _),
		h = fo(e + f),
		g = _o(i + _);
		let b = !1;
		return Cn(d) && n.x[o] !== d && (n.x[o] = d), Cn(p) && n.y[o] !== p && (n.y[o] = p), Cn(h) && n.x[c] !== h && (n.x[c] = h, b = !0), Cn(g) && n.y[c] !== g && (n.y[c] = g, b = !0), b
	}
	
	function Gr(t, n, o, e) {
		if (null == n) return;
		e && Mr && (Math.abs(Mr.x - n) >= Math.abs(Mr.y - o) ? o = Mr.y : n = Mr.x);
		const i = lo(n - t.Wn.x),
		r = lo(o - t.Wn.y);
		if (!isNaN(i) && !isNaN(r))
		for (let n = 0; n < t.x.length; n++) t.x[n] = Zn(t.x[n] + i), t.y[n] = Zn(t.y[n] + r)
	}
	
	function Xr(t, n, o) {
		let e = 0;
		for (let i = 0; i < t.length - 1; i++) {
			const r = t[i],
			c = n[i],
			s = t[i + 1],
			u = n[i + 1];
			if (o) {
				const t = o[i],
				n = o[i + 1];
				e += Math.hypot(s - r, u - c, n - t)
			} else e += Math.hypot(s - r, u - c)
		}
		return e
	}
	
	function Vr(n, o) {
		if (1 === n.length) return {
			x: n[0],
			y: o[0]
		};
		if (2 === n.length) return {
			x: (n[0] + n[1]) / 2,
			y: (o[0] + o[1]) / 2
		};
		const e = Xr(n, o);
		let i = 0;
		for (let r = 0; r < n.length - 1; r++) {
			const c = n[r],
			s = o[r],
			u = n[r + 1],
			l = o[r + 1],
			a = Math.hypot(u - c, l - s);
			if (e / 2 < i + a) {
				const n = t.angle(c, s, u, l);
				return {
					x: c + Math.cos(n) * (e / 2 - i),
					y: s + Math.sin(n) * (e / 2 - i)
				}
			}
			i += a
		}
		return {
			x: n[0],
			y: o[0]
		}
	}
	
	function Qr(n, o) {
		for (let e = 0, i = n.length - 1; e < i; e++) {
			const r = n[e],
			c = o[e],
			s = n[e + 1],
			u = o[e + 1],
			l = 0 == e ? i : n.length;
			for (let a = e + 2; a < l; a++) {
				const e = n[a],
				l = o[a],
				f = a < i ? a + 1 : 0,
				_ = n[f],
				d = o[f];
				if (0 != t.linesIntersection([r, c], [s, u], [e, l], [_, d])) return !0
			}
		}
		return !1
	}
	
	function Kr(t, n) {
		let o = 0;
		for (let e = 0, i = t.length; e < i; e++) {
			const r = e < i - 1 ? e + 1 : 0;
			o += t[e] * n[r] * .5 - t[r] * n[e] * .5
		}
		return Math.abs(o)
	}
	
	function tc(n, o, e) {
		let i;
		!0 !== e && !1 !== e || (i = e, e = null);
		let r = !1,
		c = 0;
		for (let s = 0; s < data.b.length; s++) {
			const u = data.V("b", s, e),
			l = "c" === u.type,
			a = u.setting > 0,
			f = u.tt("setting");
			if (l && ((null == i || i !== !f) && (a || null != i) && t.pointInPoly([n, o], t.arrayZip(u.x, u.y), !0))) {
				const t = oc(u, [n, o]);
				c < t && (c = t, r = s)
			}
		}
		return c
	}
	
	function nc(n) {
		const o = n.x,
		e = n.y,
		i = o[0],
		r = e[0],
		c = o[1],
		s = e[1],
		u = o[2],
		l = e[2],
		a = o[3],
		f = e[3],
		_ = Math.hypot(i - c, r - s),
		d = Math.hypot(c - u, s - l),
		p = Math.hypot(u - a, l - f),
		h = Math.hypot(a - i, f - r),
		g = _ < h,
		b = (i + (g ? c : a)) / 2,
		m = (r + (g ? s : f)) / 2,
		v = (u + (g ? a : c)) / 2,
		$ = (l + (g ? f : s)) / 2,
		y = t.angle(b, m, v, $),
		w = (g ? _ : h) / 2,
		x = (g ? p : d) / 2;
		return [b + Math.cos(y) * w, m + Math.sin(y) * w, v - Math.cos(y) * x, $ - Math.sin(y) * x, g]
	}
	const oc = function(t, n) {
		const o = t.s;
		if (0 === t.roof) return t.h + t.z[0];
		const e = o.roof_tri;
		if (!e) return 0;
		for (let t = 0; t < e.length; t++) {
			const o = e[t],
			i = o[0],
			r = o[1],
			c = o[2],
			s = ec(i, r, c, n);
			if (s > 0) return s
		}
		return 0
	},
	ec = function(n, o, e, i) {
		if (!t.pointInTriangle(i, n, o, e)) return 0;
		const r = t.planeNormal(n, o, e);
		return t.zPlane(i, r)
	};
	
	function ic(t) {
		const n = [];
		if (!t) return n;
		for (let o = 0; o < t.x.length; o++) n.push(t.x[o], t.y[o]);
		return n
	}
	
	function rc(n, o = !1, e = !1, i = !1) {
		const r = function(n, o) {
			if (e) {
				if (n < 0) return g("below_ground");
				n = t.round(n, 1, h)
			}
			return i && !o && (n = No(n)), n
		};
		if (Co(n)) return r(n.z);
		if ("grid" === n.h) {
			const t = function(t) {
				return r(t + (data.grid.abs ? -n.z : 0))
			},
			e = function(n) {
				const o = [];
				for (let e = 0; e < n.length; e++) o.push(t(n[e]));
				return o
			};
			return o && data.grid.heights.length > 1 ? e(data.grid.heights) : t(data.grid.h)
		}
		if (o && n.heights) {
			return function(t) {
				const n = [];
				for (let o = 0; o < t.length; o++) n.push(r(t[o]));
				return n
			}(n.heights)
		}
		return n.roof > 0 && e ? r(n.h, !0) + "-" + r(n.h_roof) : r(n.h)
	}
	
	function cc(t, n) {
		const o = [];
		for (let n = 0; n < t.x.length; n++) o.push(Mo([po(t.x[n]), ho(t.y[n])]));
		return sc(o, n)
	}
	
	function sc(t, n) {
		if (!t) return "";
		const o = [];
		for (let n = 0; n < t.length; n++) o.push(t[n].join(" "));
		return "M" + o.join("L") + (o.length > 2 && n ? "Z" : "")
	}
	
	function uc(t, n, o, e, i) {
		let r = [
			[t, n],
			[o, e]
		];
		return i && (r = Mo(r)), sc(r)
	}
	
	function lc(t, n, o, e, i) {
		let r = [t, n, o, e];
		return i && (r = Mo(r)), sc(Lo(r), !0)
	}
	
	function ac(t) {
		return t || (t = kt), lc(-(t += xt), -t, t, t)
	}
	
	function fc(t, n, o = 3) {
		if (0 === t && 0 === n) return Bt;
		const e = "a" + o + "," + o + " 0 0 1 ",
		i = 4.5;
		return n += 12.5, t = 2 * Mo((t += 8) / 2), n = Mo(n), "M" + (-t / 2 + o) + ",-" + ((n -= i) + i) + "h" + (t - 2 * o) + e + o + "," + o + "v" + (n - 2 * o) + e + -o + "," + o + "h" + (o - t / 2 + i) + "l-" + "4.5 " + "4.5l-" + "4.5 -" + "4.5h" + (o - t / 2 + i) + e + -o + "," + -o + "v" + (2 * o - n) + e + o + "," + -o + "z"
	}
	
	function _c(t, n, o = 8, e = 3) {
		n += o;
		const i = "a" + e + "," + e + " 0 0 1 ";
		return "M" + (-(t = 2 * Mo((t += o) / 2)) / 2 + e) + "," + -(n = 2 * Mo(n / 2)) / 2 + "h" + (t - 2 * e) + i + e + "," + e + "v" + (n - 2 * e) + i + -e + "," + e + "h" + (2 * e - t) + i + -e + "," + -e + "v" + (2 * e - n) + i + e + "," + -e + "z"
	}
	
	function dc(t, n) {
		return lc(Mo(po(uo(t)) - 10), Mo(ho(uo(n)) - 10), Mo(po(so(t)) + 10), Mo(ho(so(n)) + 10))
	}
	
	function pc(t, n) {
		const o = 5.5,
		e = 1.5;
		return Mo([
			[t - e, n - o],
			[t + e, n - o],
			[t + e, n - e],
			[t + o, n - e],
			[t + o, n + e],
			[t + e, n + e],
			[t + e, n + o],
			[t - e, n + o],
			[t - e, n + e],
			[t - o, n + e],
			[t - o, n - e],
			[t - e, n - e]
		])
	}
	const hc = 5.5,
	gc = function(t, n, o, e, i, r = 0, c = 1, s) {
		const u = t + i * Math.cos(o),
		l = n - i * Math.sin(o),
		a = t + i * Math.cos(e),
		f = n - i * Math.sin(e);
		return s ? "M" + u + " " + l + " A" + i + " " + i + " 1 " + r + " " + c + " " + a + " " + f : !1 === s ? "M" + a + " " + f + " L" + t + " " + n + " L" + u + " " + l : "M" + t + " " + n + " L" + u + " " + l + " A" + i + " " + i + " 1 " + r + " " + c + " " + a + " " + f + " z"
	};
	
	function bc(t = 0, n = 0) {
		return gc(t, n, .25 * Math.PI, .75 * Math.PI, hc, 0, 0) + gc(t, n, .25 * -Math.PI, .75 * -Math.PI, hc)
	}
	const mc = 5.5;
	
	function vc(t, n) {
		return [
			[t, n],
			[t + mc, Mo(n + 9.35)],
			[t - mc, Mo(n + 9.35)]
		]
	}
	const $c = 2;
	
	function yc(t) {
		t.position(!0), t.updateDetail(!0)
	}
	
	function wc(t, n) {
		const o = data.N(t, n, "setting");
		data._put(t, n, {
			setting: o ? 0 : 1
		})
	}
	
	function xc(t) {
		return t.N("setting") > 0
	}
	
	function kc(t) {
		return t.tt("setting") && qs()
	}
	
	function Mc(t, n) {
		n || (n = Cs);
		const o = t.N("setting") >= 0;
		return qs(n) ? o && (!t.tt("setting") || t.N("setting", 2) >= 0) : o
	}
	
	function jc(t, n, o, e) {
		const i = function() {
			if (void 0 !== e) return e;
			switch (o) {
				case "setting":
				return "a" === t ? 0 : 1;
				case "h":
				return "b" === t || "c" === t ? 2 : "r" === t || "rr" === t ? "grid" : "a" === t ? 0 : 1;
				case "rc":
				return 1;
				case "lvl":
				return 100;
				case "hz":
				return 500;
				case "rgb":
				return null;
				default:
				return 0
			}
		};
		if (null == n && (n = function(t) {
			let n = $("#edit_" + Ho(t)).data("n");
			const o = Bo(t, n).type === t;
			if (null == n || !o) {
				const n = data[Ho(t)];
				let o = n.length;
				for (; o > 0;)
				if (o--, n[o].type === t) return o
			}
			return n
		}(t)), null == n || !1 === n) return i();
		const r = Bo(t, n, 0);
		return null == r || void 0 === r[o] ? i() : r[o]
	}
	
	function Ic(t, n, o) {
		Array.isArray(o) || (o = [o]);
		for (let e = 0; e < o.length; e++) {
			const i = o[e];
			void 0 === t[i] && (t[i] = jc(n, null, i))
		}
	}
	
	function zc(t, n, o, e) {
		null == n && (n = data.p.length), Ic(o, "p", ["setting", "h", "lvl", "hz", "adj", "adj_type"]);
		const i = data._put("p", n, o, 0);
		return e && data._put("p", n, e, 2), i && !t && Ac(n), i
	}
	
	function Ac(t) {
		const n = data.p[t],
		o = "p",
		e = S.Yn.g(),
		i = S.Gn.g(),
		r = {},
		c = sc(pc(0, 0), !0);
		r.Xn = i.path(c).attr(zn), r.Vn = i.path(c).attr(wn), r.Qn = i.path(Bt).attr(yn), r.gt = i.Kn(0, jt), r.no = i.path(Bt).attr(In), r.oo = i.circle(0, 0, 5).attr(In);
		const s = [0, 2, 3];
		r.Xn.data({
			show_hover: !0,
			edit: !0
			}).Dt(s), r.oo.data({
			id: t,
			type: o,
			handle: !0,
			cursor: "pointer"
			}).Dt(s), r.no.data({
			id: t,
			type: o,
			cursor: "pointer"
		}).Dt(s), Br([r.oo, r.no]), r.oo.Zn = function(t, o, e) {
		Jr(n, t, o, e), this.position()
		}, r.oo.position = function(t) {
		const o = ko(n.x, n.y);
		e.transform(o), i.transform(o), this.toTop()
		}, r.oo.toTop = function() {
		e.eo(), i.eo()
		}, r.no.Zn = function(t, n, o) {
		r.oo.Zn(t, n, o)
		}, r.oo.updateDetail = function(e) {
		const i = xc(n),
		c = kc(n),
		s = Mc(n),
		u = n.tt() && qs();
		r.Vn.zn(s && (i || c) ? At : Dt), r.Vn.Fn(Z() || c ? .5 : 1);
		const l = fl(o, t);
		r.gt.O(l, !0);
		const a = r.gt.getBBox(),
		f = l ? fc(a.w, a.h) : Bt,
		_ = l ? 1 : 0,
		d = l ? function() {
			r.gt.io()
		} : null;
		r.Qn.ro({
			path: f,
			opacity: _
		}, e, d), r.no.co(f);
		let p = Et;
		u && (p = D.so), r.Qn.zn(p)
		}, r.oo.qn = function(n) {
		n || (wc(o, t), xe(o, t))
		}, r.no.qn = function(t) {
		r.oo.qn(t)
		}, Go(o, t, [e, i]), yc(r.oo)
	}
	
	function Ec(t, n, o) {
		null == n && (n = data.r.length), Ic(o, "r", ["setting", "h"]), null == o.heights && (o.heights = o.h), o.it = [];
		const e = data._put("r", n, o, 0);
		return e && !t && Lc(n), e
	}
	
	function Nc(t, n) {
		let o;
		if ("r" == t.type) {
			const n = "grid" === t.h ? data.grid.h + (data.grid.abs ? -t.z : 0) : t.h;
			for (let e = 0; e < t.it.length; e++)
			if (t.it[e].Nt === n) {
				o = t.it[e];
				break
			} if (!o) return o
		} else o = t;
		let e = [];
		const i = data.config.weighting.N();
		for (let t = 0; t < o.an.length; t++) {
			const r = o.an[t];
			e[t] = null != n ? i ? r.gn[n] : r.pn[n] : i ? r.hn : r.dn
		}
		return mi(e)
	}
	
	function Tc(t, n, o) {
		let e = [void 0, void 0];
		const i = data.config.weighting.N();
		for (let r = 0; r < t.an.length; r++) {
			const c = t.an[r].vn;
			if (c)
			for (let t = 0; t < c.length; t++) {
				const s = c[t];
				if (n === s.bn && o === s.mn) {
					e[r] = i ? s.hn : s.dn;
					break
				}
			}
		}
		return mi(e)
	}
	
	function Lc(t) {
		const n = data.r[t],
		o = "r",
		e = S.Yn.g(),
		i = S.Gn.g(),
		r = {};
		let c = bc(0, 0);
		r.Xn = i.circle(0, 0, 0).attr(zn), r.Vn = i.g(), r.uo = r.Vn.circle(0, 0, hc).Ln(At).zn(At), r.lo = r.Vn.path(Bt), r.oo = i.circle(0, 0, 5).attr(In);
		fc(40, 16);
		r.Qn = i.path(Bt).attr(yn), r.gt = i.Kn(), r.bt = i.ao(), r.no = i.path(Bt).attr(In), r.fo = i.g().zn(At, 1).Ln(At, 1, 1).attr({
			"stroke-linejoin": "miter"
		}), r._o = r.fo.path(Bt), r.do = [];
		const s = [0, 2, 3];
		r.Xn.data({
			show_hover: !0,
			edit: !0
			}).Dt(s), r.oo.data({
			id: t,
			type: o,
			handle: !0,
			cursor: "pointer"
			}).Dt(s), r.no.data({
			id: t,
			type: o,
			cursor: "pointer"
		}).Dt(s), Br([r.oo, r.no]);
		const u = function(n) {
			return !(C > 1) && (!Mr && (Hr(1, o, t), !(C > 0) && (jr = !0, this.zn(At), void(data.config.receiver_type.N() > 0 ? (r.bt.attr({
				text: this.po
				}), 1 === data.config.receiver_type.N() && r.lo.zn(Li(this.po, !0)), r.gt.attr({
				text: ""
				})) : (r.gt.po && r.gt.attr({
				text: this.ho
				}), r.bt.attr({
				text: this.po
			}))))))
		},
		l = function(e) {
			return !(C > 1) && (Hr(0, o, t), !(C > 0) && (jr = !1, this.zn(this.bo), r.bt.attr({
				text: r.bt.po
				}), 1 === data.config.receiver_type.N() && r.lo.zn(Li(Nc(n), !0)), void(r.gt.po && r.gt.attr({
					text: r.gt.po
				}))))
		},
		a = function(t) {
			if (C > 1) return !1;
			if (Lr.call(this, t), C > 0) return !1;
			if (!r.gt.po) {
				let t = this.ho;
				data.config.receiver_type.N() > 0 && (t = t.replace("Hz", "")), r.bt.attr({
					text: t
				})
			}
		},
		f = yi(!0);
		for (let n = 0; n < f; n++) r.do[n] = r.fo.rect(0, 0, 0, 0).data({
			id: t,
			type: o
		}), r.do[n].hover(u, l).click(a), r.do[n].ho = Pn(n) + "Hz";
		r.oo.Zn = function(t, o, e) {
			Jr(n, t, o, e), this.position()
			}, r.oo.position = function(t) {
			const o = ko(n.x, n.y);
			e.transform(o), i.transform(o), this.toTop()
			}, r.oo.toTop = function() {
			e.eo(), i.eo()
			}, r.no.Zn = function(t, n, o) {
			r.oo.Zn(t, n, o)
			}, r.oo.updateDetail = function(e) {
			const i = data.config.receiver_type.N(),
			s = i > 0,
			u = (data.config.show_names.N(), i > -1),
			l = Z(),
			a = !l && 1 === n.setting && u,
			_ = yi();
			r.Vn.Fn(l ? .5 : 1);
			let d = "",
			p = 0;
			s || (d = fl(o, t), p = u ? -27 : jt), r.gt.O(d, !0), r.gt.attr({
				y: p
			}), r.gt.po = d;
			let h = "",
			g = jt,
			b = Ft,
			m = At,
			v = At,
			$ = 13;
			const y = Nc(n),
			w = u && (!s || !d);
			if (n.un) r.bt.Fn(.5), h = r.bt.po && "-" !== r.bt.po ? r.bt.po : w ? "..." : "";
			else {
				r.bt.Fn(1), l || (h = void 0 !== y && w ? Qn(y, "-").toString() : "", !s && 1 === data.config.show_names.N() && h && "-" !== h && (h += Io()), u && !h && (h = "-"));
				for (let t = 0; t < f; t++) {
					const o = r.do[t],
					e = Nc(n, t);
					o.ft = e, o.po = Qn(e, "-"), o.Nt = e || 0
				}
			}
			if (!l)
			if (s) {
				$ = 13 - 3 * data.config.precision.N(), g = 2 - data.config.precision.N();
				b = 2 === i ? Et : Li(y, !0), v = At;
				data.config.grid_figures.N();
				m = At
			} else b = Et;
			r.bt.zn(m).attr({
				y: g,
				"font-size": $,
				text: h
			}), r.bt.po = h;
			const x = r.bt.getBBox();
			let k, M, j = x.width;
			if (s) {
				const t = hc + 5;
				r.uo.mo(), r.Xn.attr({
					r: t + 1
					}), r.lo.zn(b).Ln(v).co(function(t) {
					const n = Jn(t / 2);
					return "M0,0m -" + n + ",0a" + n + "," + n + " 0 1,0 " + 2 * n + ",0a" + n + "," + n + " 0 1,0 -" + 2 * n + ",0"
				}(2 * t)), k = t, M = 5
				} else r.uo.io(), r.Xn.attr({
					r: hc + 1
				}), r.lo.zn(Et).Ln(Ft).co(c), k = x.height, M = 13;
				if (d) {
					const t = r.gt.getBBox();
					s || (k += t.height), j < t.width && (j = t.width)
				}
				let I = 0,
				z = 0,
				A = a ? Math.floor(70 / _) : 0;
				const E = qs();
				for (let t = 0; t < f; t++) {
					const n = r.do[t];
					let o = 0;
					if (a) {
						o = Jn((n.Nt || 0) / 100 * 50), E && o < z && (z = o), o > I && (I = o)
					}
					const e = 2 === i ? Et : Li(n.ft, !0);
					n.bo = e;
					let c = Jn(A * t - A * _ / 2),
					s = Mo(-o),
					u = 0;
					o < 0 ? E ? (o = -o, u = s - o) : o = 0 : u = s;
					const l = {
						x: c + xt,
						y: u,
						height: Jn(o),
						width: Jn(A)
					};
					A > 0 && o > 0 && (l.fill = n.bo), n.ro(l, 0 == n.attr("y"))
				}
				a && j < 67 && (j = 66);
				let N = I - z;
				a && N && (N += 4), r.fo.ro({
					transform: xo(0, z - k - M)
				});
				const T = a && z < 0 ? 35 : 0;
				r._o.ro({
					path: uc(-T, 0, T, 0, !0),
					opacity: T ? 1 : 0
				});
				let L = l || s ? Bt : fc(j, k + N),
				S = l || s ? 0 : 1;
				const R = d ? function() {
					r.gt.io()
				} : null;
				r.Qn.ro({
					path: L,
					opacity: S
				}, e, R), r.no.co(L)
				}, r.oo.qn = function(e) {
				e || Z() || (n.setting = 0 === n.setting ? 1 : 0, Hu(o, t))
				}, r.no.qn = function(t) {
				r.oo.qn(t)
		}, Go(o, t, [e, i]), yc(r.oo)
	}
	
	function Sc(t, n, o) {
		null == n && (n = data.rr.length), Ic(o, "rr", ["setting", "h"]), null == o.heights && (o.heights = o.h);
		const e = data._put("rr", n, o, 0);
		return e && !t && Rc(n), e
	}
	
	function Rc(t) {
		const n = data.rr[t],
		o = "rr",
		e = S.Yn.g(),
		i = S.fn.g(),
		r = S.Gn.g(),
		c = {},
		s = sc(vc(0, 0), !0);
		c.Xn = r.path(s).attr(zn), c.Vn = r.path(s).attr(wn), c.Qn = r.path(Bt).attr(yn), c.gt = r.Kn(0, jt), c.no = r.path(Bt).attr(In), c.oo = r.circle(0, 5, wt).attr(In);
		const u = [0, 2, 3];
		c.Xn.data({
			show_hover: !0,
			edit: !0
			}).Dt(u), c.oo.data({
			id: t,
			type: o,
			handle: !0,
			cursor: "pointer"
			}).Dt(u), c.no.data({
			id: t,
			type: o,
			cursor: "pointer"
		}).Dt(u), Br([c.oo, c.no]), c.oo.Zn = function(t, o, e) {
		Jr(n, t, o, e), this.position()
		}, c.oo.position = function(c) {
		if (Mr || i.clear(), n.setting > 0 && !Mr) {
			const n = Date.now();
			hr(t, i), Date.now() - n > _t && Xu(g("alert_slow_rays"), Ht, o)
		}
		const s = xo(po(n.x), ho(n.y));
		e.transform(s), r.transform(s), this.toTop()
		}, c.oo.toTop = function() {
		e.eo(), r.eo()
		}, c.no.Zn = function(t, n, o) {
		c.oo.Zn(t, n, o)
		}, c.oo.qn = function(e) {
		e || (n.setting > 0 ? n.setting = 0 : n.setting = 1, xe(o, t))
		}, c.no.qn = function(t) {
		c.oo.qn(t)
		}, c.oo.updateDetail = function(e) {
		const i = Z() || qs();
		c.Vn.zn(0 === n.setting ? Dt : At);
		const r = i ? "" : fl(o, t);
		c.gt.O(r, !0);
		const s = r ? function() {
			c.gt.io()
		} : null;
		c.Vn.Fn(i ? .5 : 1);
		const u = c.gt.getBBox(),
		l = r ? fc(u.w, u.h) : Bt,
		a = r ? 1 : 0;
		c.Qn.ro({
			path: l,
			opacity: a
		}, e, s), c.no.co(l)
		}, Go(o, t, [e, i, r]), yc(c.oo), Pu(o, t)
	}
	
	function Dc(t, n, o, e) {
		null == n && (n = data.l.length), Ic(o, "l", ["h", "method", "lvl", "hz", "adj", "adj_type"]);
		const i = data._put("l", n, o, 0);
		return e && data._put("l", n, e, 2), i && !t && Hc(n), i
	}
	
	function Hc(t) {
		const n = data.l[t],
		o = "l",
		e = S.Yn.g(),
		i = S.Gn.g(),
		r = {
			s: {}
		},
		c = 2 * $c;
		r.On = e.path(Bt).attr(xn), r.Xn = e.path(Bt).attr(En), r.Vn = e.g(), r.Pt = r.Vn.path(Bt).Ln(Et, c), r.vo = r.Vn.path(Bt).Ln(At, c - 1), r.oo = e.path(Bt).attr(jn), r.Qn = i.path(Bt).attr(yn), r.gt = i.Kn(), r.no = i.path(Bt).attr(In), r.$o = i.circle(xt, xt, Mt).attr(vn);
		const s = [0, 2, 3];
		r.On.data({
			show_hover: !0
			}), r.Xn.data({
			show_hover: !0,
			edit: !0
			}).Dt(s), r.oo.data({
			id: t,
			type: o
			}).Dt(s), r.$o.data({
			id: t,
			type: o,
			handle: !0,
			cursor: "pointer",
			show_select: !0,
			tool: [0]
			}).Dt(s), r.no.data({
			id: t,
			type: o,
			cursor: "pointer"
			}).Dt(s), Br([r.oo], {
			drag: !1
		}), Br([r.$o, r.no]);
		const u = function(n, e) {
			n.data({
				id: t,
				type: o,
				node: e,
				show_select: !0,
				tool: 0,
				cursor: "pointer"
			}).Dt(s), Br(n)
		};
		r.s.start = [], r.s.mid = [];
		for (let t = 0; t < n.x.length; t++) r.s.start[t] = i.path(ac()).attr($n), u(r.s.start[t], t), r.s.start[t].Zn = function(o, e, i) {
			Wr(n, t, o, e, i), r.oo.position()
			}, t < n.x.length - 1 && (r.s.mid[t] = i.path(ac()).attr(vn), u(r.s.mid[t], t), r.s.mid[t].qn = function(t) {
				r.oo.qn(t)
				}, r.s.mid[t].Zn = function(o, e, i) {
				Yr(n, t, o, e, i), r.oo.position()
			});
			r.$o.Zn = function(t, o, e) {
				Gr(n, t, o, e), r.oo.position()
				}, r.$o.qn = function(t) {
				r.oo.qn(t)
				}, r.no.Zn = function(t, n, o) {
				r.$o.Zn(t, n, o)
				}, r.no.qn = function(t) {
				r.oo.qn(t)
				}, r.oo.qn = function(n) {
				n || (wc(o, t), xe(o, t))
				}, r.oo.position = function(t) {
				for (let t = 0; t < n.x.length; t++) {
					const o = n.x[t],
					e = n.y[t];
					if (r.s.start[t].transform(ko(o, e)), t < n.x.length - 1) {
						const i = (o + n.x[t + 1]) / 2,
						c = (e + n.y[t + 1]) / 2;
						r.s.mid[t].transform(ko(i, c))
					}
				}
				r.On.co(dc(n.x, n.y));
				const o = cc(n);
				[r.Xn, r.Pt, r.vo, r.oo].forEach((function(t) {
					t.co(o)
				}));
				const e = Vr(n.x, n.y);
				n.Wn = {
					x: po(e.x),
					y: ho(e.y)
				};
				const i = xo(n.Wn.x, n.Wn.y);
				[r.$o, r.Qn, r.gt, r.no].forEach((function(t) {
					t.transform(i)
				})), this.toTop()
				}, r.oo.toTop = function() {
				e.eo(), i.eo()
				}, r.oo.updateDetail = function(e) {
				const i = xc(n),
				c = kc(n),
				s = Mc(n),
				u = n.tt() && qs();
				r.Vn.Fn(Z() || c ? .5 : 1), r.vo.Ln(s && (i || c) ? At : Dt);
				const l = fl(o, t);
				r.gt.O(l, !0);
				const a = l ? function() {
					r.gt.io()
				} : null;
				let f = 0,
				_ = 0;
				if (l) {
					const t = r.gt.getBBox();
					f = t.width, _ = t.height
				}
				const d = f ? _c(f, _) : Bt,
				p = l ? 1 : 0;
				r.Qn.ro({
					path: d,
					opacity: p
				}, e, a), r.no.co(d);
				let h = Et;
				u && (h = D.so), r.Qn.zn(h)
			}, Go(o, t, [e, i]), yc(r.oo)
	}
	
	function Oc(t, n, o) {
		null == n && (n = data.a.length), Ic(o, "a", ["setting", "h", "rgb"]);
		const e = data._put("a", n, o, 0);
		return e && !t && Pc(n), e
	}
	
	function Pc(o) {
		const e = data.a[o],
		i = "a",
		r = S.yo.g(),
		c = S.Gn.g(),
		s = {
			s: {}
		};
		s.On = r.path(Bt).attr(xn), s.wo = r.path(Bt).attr({
			stroke: Ft
			}), s.Xn = r.path(Bt).attr(zn), s.xo = r.g(), s.Vn = r.g(), s.Pt = s.Vn.path(Bt), s.vo = s.Vn.path(Bt), s.ko = s.Vn.path(Bt).attr(kn), s.Mo = s.Vn.path(Bt).attr(Mn), s.oo = c.path(Bt).attr(jn), s.Qn = c.path(Bt).attr(yn), s.gt = c.Kn(), s.bt = c.ao(), s.no = c.path(Bt).attr(In), s.$o = c.circle(xt, xt, Mt).attr(vn), s.On.data({
			show_hover: !0
			}).Dt([0, 3]), s.Xn.data({
			show_hover: !0,
			edit: !0
			}).Dt([0, 3]), s.oo.data({
			id: o,
			type: i
			}).Dt([0, 3]), s.$o.data({
			id: o,
			type: i,
			handle: !0,
			tool: 0,
			show_select: !0,
			cursor: "pointer"
			}).Dt([0, 3]), s.no.data({
			id: o,
			type: i,
			cursor: "pointer"
			}).Dt([0, 3]), Br([s.oo], {
			drag: !1
		}), Br([s.$o, s.no]);
		const u = function(t, n) {
			t.data({
				id: o,
				type: i,
				node: n,
				tool: 0,
				show_select: !0,
				cursor: "pointer"
			}).Dt([0, 3]), Br(t)
		};
		s.s.start = [], s.s.mid = [];
		for (let t = 0; t < e.x.length; t++) s.s.start[t] = c.path(ac()).attr($n), u(s.s.start[t], t), s.s.start[t].Zn = function(n, o, i) {
			Wr(e, t, n, o, i), s.oo.position()
			}, s.s.mid[t] = c.path(ac()).attr(vn), u(s.s.mid[t], t), s.s.mid[t].Zn = function(n, o, i) {
			Yr(e, t, n, o, i), s.oo.position()
		};
		s.$o.Zn = function(t, n, o) {
			Gr(e, t, n, o), s.oo.position()
			}, s.no.Zn = function(t, n, o) {
			s.$o.Zn(t, n, o)
			}, s.oo.position = function(o) {
			const i = e.setting > 1;
			s.xo.clear();
			let r = 0,
			c = 0,
			u = Bt,
			l = 0;
			for (let o = 0; o < e.x.length; o++) {
				const a = e.x[o],
				f = e.y[o];
				if (s.s.start[o].transform(ko(a, f)), i || o < e.x.length - 1) {
					const i = o < e.x.length - 1 ? o + 1 : 0,
					_ = e.x[i],
					d = e.y[i],
					p = (a + _) / 2,
					h = (f + d) / 2;
					s.s.mid[o].transform(ko(p, h)), J() && n && br(s.xo, Mo(po(a)), Mo(ho(f)), Mo(po(_)), Mo(ho(d)));
					const g = t.calcGroundHeight(a, f),
					b = t.calcGroundHeight(_, d),
					m = Math.hypot(_ - a, d - f),
					v = Math.hypot(m, b - g),
					$ = t.angle(a, f, _, d),
					y = lo(Es.hscale) * (m / v),
					w = lo(5),
					x = Math.cos($ + Math.PI / 2) * w,
					k = Math.sin($ + Math.PI / 2) * w;
					for (; l < m;) {
						const t = Math.cos($) * l,
						n = Math.sin($) * l,
						o = a + t - x,
						i = f + n - k,
						r = a + t + x,
						c = f + n + k;
						1 === e.setting && (u += uc(po(o), ho(i), po(r), ho(c))), l += y
					}
					l -= m, r += m, c += v, s.s.mid[o].show()
				} else s.s.mid[o].hide()
			}
			s.On.co(dc(e.x, e.y));
			const a = cc(e, i);
			[s.Xn, s.wo, s.Pt, s.vo, s.oo].forEach((function(t) {
				t.co(a)
			})), s.Mo.co(u), s.ko.co(u);
			const f = i ? Bc(e.x, e.y) : Vr(e.x, e.y);
			e.Wn = {
				x: po(f.x),
				y: ho(f.y)
			};
			const _ = xo(e.Wn.x, e.Wn.y);
			[s.$o, s.Qn, s.gt, s.bt, s.no].forEach((function(t) {
				t.transform(_)
			})), e.jo = r, e.Rt = c, this.toTop()
			}, s.oo.toTop = function() {
			r.eo(), c.eo()
			}, s.oo.updateDetail = function(t) {
			s.Vn.Fn(Z() ? .5 : 1);
			const n = 1 === e.setting,
			r = e.setting > 1;
			let c = fl(i, o);
			s.gt.O(c, !0);
			const u = !Z() && 1 === e.setting,
			l = u ? To(e.Rt) : "";
			s.bt.O(l, !0), s.bt.attr({
				y: jt
			});
			const a = u ? -27 : 0;
			s.gt.attr("y") != a && s.gt.mo(), s.gt.attr({
				y: a
			});
			const _ = !(n || !e.rgb) && _u(e.rgb),
			d = _ ? 3 : 1;
			if (n) s.wo.Fn(0), s.gt.zn(At), s.gt.Ln(Et);
			else {
				const t = f ? At : Et,
				n = _ || t,
				o = gu(n);
				s.wo.Fn(.2).zn(r ? n : Ft), s.gt.zn(o), s.gt.Ln(n)
			}
			_ ? (s.Pt.Fn(1).attr(Mn).Ln(_, d).Cn(""), s.vo.Fn(0)) : (s.Pt.Fn(1).attr(Mn).Ln(Et, 1).Cn("9 9"), s.vo.Fn(1).attr(Mn).Ln(At).Cn("9 9", "9"));
			let p = 0,
			h = 0,
			g = Bt;
			if (u) {
				const t = s.bt.getBBox();
				h = t.height, p = t.width
			}
			if (c) {
				const t = s.gt.getBBox();
				p < t.width && (p = t.width), h += t.height
			}
			n && (u ? g = fc(p, h) : c && (g = _c(p, h)));
			const b = c || u ? 1 : 0;
			s.Qn.ro({
				path: g,
				opacity: b
				}, t, c ? function() {
				s.gt.io()
			} : null), s.no.co(g);
			const m = 1 === e.setting ? 1 : 0;
			s.Mo.ro({
				opacity: m
				}, t, u ? function() {
				s.bt.io()
				} : null), s.ko.ro({
				opacity: m
			}, t)
		}, Go(i, o, [r, c]), yc(s.oo), Pu(i, o)
	}
	
	function Cc(t, n, o, e, i) {
		null == n && (n = data.b.length);
		let r = o ? "c" : "b";
		e.x.length < 3 && "c" === r && (r = "b"), Ic(e, r, ["h", "rc", "slope", "roof", "h_roof"]), e.roof && (e.h_roof || (e.h_roof = e.h + 0)), e.angle = [];
		const c = data._put(r, n, e, 0);
		return i && data._put(r, n, i, 2), c && !t && Zc(n), c
	}
	
	function Fc(n, o) {
		const e = n.x,
		i = n.y,
		r = e[0],
		c = i[0],
		s = e[1],
		u = i[1],
		l = e[2],
		a = i[2],
		f = e[3],
		_ = i[3],
		d = t.lineAngle(r, c, s, u),
		p = t.lineAngle(f, _, l, a),
		h = t.lineAngle(r, c, f, _),
		g = t.lineAngle(s, u, l, a),
		b = Math.abs(t.addAngles(d, -p)),
		m = Math.abs(t.addAngles(h, -g));
		if (o) {
			const t = (r + s) / 2,
			n = (l + f) / 2,
			o = (c + u) / 2,
			d = (a + _) / 2,
			p = ((f + r) / 2 - (s + l) / 2) / 2,
			h = ((_ + c) / 2 - (u + a) / 2) / 2;
			return e[0] = t - p, i[0] = o - h, e[1] = t + p, i[1] = o + h, e[2] = n + p, i[2] = d + h, e[3] = n - p, i[3] = d - h, !0
		}
		return b < .09 && m < .09
	}
	
	function qc(t, n) {
		if (n) return t.x.unshift(t.x.pop()), void t.y.unshift(t.y.pop());
		t.x.push(t.x.shift()), t.y.push(t.y.shift())
	}
	const Uc = function(t) {
		return Array.isArray(t) ? t.join(" / ") : t
	},
	Bc = function(n, o) {
		return {
			x: t.average(n),
			y: t.average(o)
		}
	};
	
	function Zc(o) {
		const e = data.b[o],
		i = "b",
		r = S.Yn.g(),
		c = S.Gn.g(),
		s = {
			s: {}
		};
		s.On = r.path(Bt).attr(xn), s.Xn = r.path(Bt).attr(An), s.wo = r.path(Bt).Ln(Ft).attr({
			"fill-opacity": .5
			}), s.Pt = r.path(Bt).attr(kn), s.vo = r.path(Bt).attr(Mn), s.oo = r.path(Bt), s.xo = r.g(), s.Io = r.path(Bt).attr(Nn), s.zo = r.path(Bt).attr(Tn), s.Ao = c.g(), s.Eo = s.Ao.circle(0, 0, 3).zn(Et), s.No = s.Ao.path(Bt).attr(yn), s.To = s.Ao.Kn(9.5).attr({
			"text-anchor": "start"
		}), s.Qn = c.path(Bt).attr(yn), s.gt = c.Kn(), s.no = c.path(Bt).attr(In), s.Lo = c.path(Bt).attr(Ln), s.So = c.path(Bt).attr(Sn), s.Ro = c.circle(xt, xt, kt).attr(vn), s.$o = c.circle(xt, xt, Mt).attr(vn);
		const u = [0, 2, 3];
		s.Ao.data({
			cursor: "pointer"
			}), s.On.data({
			show_hover: !0
			}).Dt([0, 2]), s.Xn.data({
			show_hover: !0,
			edit: !0
			}).Dt(u), s.oo.data({
			id: o,
			type: i
			}).Dt([0, 1, 2, 3]), s.Lo.data({
			id: o,
			type: i,
			show_select: !0,
			tool: 0
			}).Dt(u), s.So.data({
			id: o,
			type: i,
			show_select: !0,
			tool: 0
			}).Dt(u), s.Ro.data({
			id: o,
			type: i,
			show_select: !0,
			tool: 0,
			cursor: "pointer",
			is_rotate: !0
			}).Dt(u), s.$o.data({
			id: o,
			type: i,
			handle: !0,
			show_select: !0,
			tool: 0,
			cursor: "pointer"
			}).Dt([0, 1, 2, 3]), s.no.data({
			id: o,
			type: i,
			cursor: "pointer"
		}).Dt(u);
		const l = [function() {
			Hr(1, "b", o) && Z() && [s.Ao, s.Io, s.zo].forEach((function(t) {
				t.io()
			}))
			}, function() {
			Hr(0, "b", o), Z() && [s.Ao, s.Io, s.zo].forEach((function(t) {
				t.mo(!0)
			}))
		}];
		Br([s.Ao, s.Ro, s.$o, s.no], {
			hover: l
			}), Br([s.oo], {
			hover: l,
			drag: !1
			}), Br([s.Lo, s.So], {
			hover: l,
			drag: !1,
			click: !1
		});
		const a = function(t, n) {
			t.data({
				id: o,
				type: i,
				node: n,
				show_select: !0,
				tool: 0,
				cursor: "pointer"
				}).Dt(u), Br(t, {
				hover: l
			})
		};
		s.s.start = [], s.s.mid = [];
		for (let t = 0; t < e.x.length; t++) s.s.start[t] = c.path(ac()).attr($n), a(s.s.start[t], t), s.s.start[t].Zn = function(n, o, i) {
			Wr(e, t, n, o, i), s.oo.position()
			}, ("c" === e.type || t < e.x.length - 1) && (s.s.mid[t] = c.path(ac()).attr(vn), a(s.s.mid[t], t), s.s.mid[t].qn = function(t) {
				s.oo.qn(t)
				}, s.s.mid[t].Zn = function(n, o, i) {
				Yr(e, t, n, o, i), s.oo.position()
				}), "c" === e.type ? s.s.mid[s.s.mid.length - 1].data({
				sticky: !0
				}) : s.s.start[s.s.start.length - 1].data({
				sticky: !0
			});
			s.$o.Zn = function(t, n, o) {
				Gr(e, t, n, o), s.oo.position()
				}, s.no.Zn = function(t, n, o) {
				Z() || s.$o.Zn(t, n, o)
				}, s.oo.qn = function(t) {
				const n = this.data("id");
				if (Z()) {
					"b" === e.type ? (e.x.reverse(), e.y.reverse(), Array.isArray(e.rc) && e.rc.reverse()) : (qc(e, e.cw), e.roof)
					} else {
					if (t) return;
					wc(i, n)
				}
				xe(i, n)
				}, s.oo.Jn = function() {}, s.no.qn = function(t) {
				s.oo.qn(t)
				}, s.$o.qn = function(t) {
				s.oo.qn(t)
				}, s.Ao.qn = function(t) {
				s.oo.qn(t)
				}, s.Ro.Zn = function(t, n, o) {
				if (null == t || null == n) return;
				const i = e.Wn.x,
				r = e.Wn.y,
				c = {
					x: t - i,
					y: n - r
				};
				let u = Math.atan(c.y / c.x);
				c.x < 0 && (u -= Math.PI), o && Mr && (u = Zr(u));
				let l = Math.hypot(c.y, c.x);
				const a = .5 * ct + 20;
				l < a && (l = a);
				const f = l / e.Do,
				_ = u - e.Ho;
				for (let t = 0; t < e.x.length; t++) {
					const n = {
						x: po(e.x[t]),
						y: ho(e.y[t])
					};
					let o = (n.x - i) * Math.cos(_) - (n.y - r) * Math.sin(_) + i,
					c = (n.x - i) * Math.sin(_) + (n.y - r) * Math.cos(_) + r;
					o = (o - i) * f + i, c = (c - r) * f + r, o = fo(o), c = _o(c), Cn(o) && (e.x[t] = o), Cn(c) && (e.y[t] = c)
				}
				s.oo.position()
				}, s.oo.position = function(r) {
				const c = Bo(i, o),
				u = c.s,
				l = c.x,
				a = c.y,
				f = "c" === c.type,
				_ = (c.slope, data.config.iso_facade.N()),
				d = $t.node && "b" === $t.node[0] && $t.node[1] === o;
				for (let t = 0; t < l.length; t++) {
					const n = l[t],
					o = a[t];
					if (s.s.start[t].transform(ko(n, o)), f || t < l.length - 1) {
						const e = t < l.length - 1 ? t + 1 : 0,
						i = {
							x: (n + l[e]) / 2,
							y: (o + a[e]) / 2
						};
						s.s.mid[t].transform(ko(i.x, i.y))
					}
				}
				s.xo.clear(), s.On.co(dc(l, a));
				const p = cc(c, f);
				let h;
				[s.Xn, s.wo, s.Pt, s.vo, s.oo].forEach((function(t) {
					t.co(p)
				}));
				let g = Zt,
				b = Bt,
				m = Zt,
				v = 0;
				if (f) {
					if (h = Bc(l, a), 4 === l.length) {
						const t = l[0],
						n = a[0],
						o = l.length - 1,
						i = l[o],
						r = a[o],
						c = {
							x: (t + i) / 2 - h.x,
							y: (n + r) / 2 - h.y
						};
						let s = Math.atan(c.y / c.x),
						u = Math.atan((r - n) / (i - t));
						if (Math.abs(Math.abs(u - s) - Math.PI / 2) < Math.PI / 8) {
							c.x < 0 && (s -= Math.PI);
							const t = "r" + s / (Math.PI / 180) + ",0,0",
							n = Math.hypot(c.x, c.y) * ct + 20;
							b = uc(0, xt, n, xt, !0);
							const o = ko(h.x, h.y);
							g = o + t;
							m = o + xo(Math.cos(s) * n, Math.sin(s) * n) + t, e.Ho = s, e.Do = n, v = 1
						}
					}
				} else h = Vr(l, a);
				[s.Lo, s.So].forEach((function(t) {
					t.co(b).transform(g)
				})), s.Ro.transform(m).attr({
				"fill-opacity": v,
				"stroke-opacity": v
				}), e.Wn = {
				x: po(h.x),
				y: ho(h.y)
				};
				const $ = xo(e.Wn.x, e.Wn.y);
				[s.$o, s.Qn, s.gt, s.no].forEach((function(t) {
					t.transform($)
				}));
				let y = [],
				w = [];
				const x = function(n, o, e, i) {
					let r = n.length;
					e || r--;
					const c = function(t, n) {
						return Math.PI - Math.abs(Math.abs(t - n) - Math.PI) <= 1.65
					},
					s = function(n, o, e, i, r, c) {
						const s = t.linesIntersection(o, e, i, r, !0);
						c || s.hit ? n.push([s.x, s.y]) : n.push(r, o)
					};
					let u, l, a, f, _, d, p, h, g, b, m = [],
					v = [];
					for (let e = 0; e < r; e++) {
						const r = e < n.length - 1 ? e + 1 : 0,
						$ = n[e],
						y = o[e],
						w = n[r],
						x = o[r];
						if ($ !== w || y !== x) {
							const n = t.angle($, y, w, x) - Math.PI / 2,
							o = {
								x: Math.cos(n) * i,
								y: Math.sin(n) * i
							},
							e = [$ + o.x, y + o.y],
							r = [w + o.x, x + o.y],
							k = [$ - o.x, y - o.y],
							M = [w - o.x, x - o.y];
							if (null == u) u = e, l = r, a = k, f = M, _ = n;
							else {
								const t = c(n, b);
								s(m, e, r, d, p, t), s(v, k, M, h, g, t)
							}
							d = e, p = r, h = k, g = M, b = n
						}
					}
					if (null == d) return {
						inner: [],
						outer: []
					};
					if (e) {
						const e = c(_, b);
						return s(m, u, l, d, p, e), s(v, a, f, h, g, e), t.pointInPoly([n[0], o[0]], v) ? {
							inner: m,
							outer: v
							} : {
							inner: v,
							outer: m
						}
					}
					return m.unshift(u), m.push(p), v.unshift(a), v.push(g), v.reverse(), {
						inner: [],
						outer: m.concat(v)
					}
				}(l, a, f, _ ? 1 : .05).outer;
				for (let t = 0; t < x.length; t++) {
					const n = x[t][0],
					o = x[t][1];
					w.push([po(n), ho(o)]), _ && y.push(n, o)
				}
				if (yt.ut[o] = y, Mr) return;
				const k = function(n, o, e, i, r) {
					const c = [(o[0] + e[0]) / 2, (o[1] + e[1]) / 2],
					s = [(n[0] + i[0]) / 2, (n[1] + i[1]) / 2],
					u = Math.hypot(o[0] - n[0], o[1] - n[1]),
					l = Math.hypot(o[0] - e[0], o[1] - e[1]);
					let a = (u < l ? u : l) / 4;
					const f = t.angle(s[0], s[1], c[0], c[1]),
					_ = Math.PI / 12;
					return sc([
						[c[0] - Math.cos(f + _) * a, c[1] - Math.sin(f + _) * a], c, [c[0] - Math.cos(f - _) * a, c[1] - Math.sin(f - _) * a]
					], !0)
				};
				if (u)
				if (Z()) {
					const t = u.sz[0],
					n = function(n, o, e, i = 0) {
						const r = po(n),
						c = ho(o) + (t - e) * ct;
						return {
							Oo: r,
							Po: c - i * ct,
							Co: c
						}
					},
					e = [];
					for (let o = 0; o < u.sx.length; o++) {
						const i = 2 === c.roof && (1 === o || 4 === o),
						r = 1 === c.slope,
						s = u.sx[o],
						l = u.sy[o],
						a = (r ? t : u.sz[o]) + (i ? u.sh[o] : 0),
						f = i ? 0 : u.sh[o];
						e.push(n(s, l, a, f))
					}
					let r = "";
					for (let t = 0; t < e.length; t++) {
						const n = e[t],
						o = e[t > 0 ? t - 1 : e.length - 1];
						(t > 0 || f) && (r += uc(o.Oo, o.Po, n.Oo, n.Po, !0)), n.Po < n.Co && (r += uc(n.Oo, n.Po, n.Oo, n.Co, !0))
					}
					if (f && (1 === c.roof && (r += k([e[0].Oo, e[0].Po], [e[1].Oo, e[1].Po], [e[2].Oo, e[2].Po], [e[3].Oo, e[3].Po])), (2 === c.roof || 3 === c.roof) && u && u.roof_lines)) {
						const t = u.roof_lines;
						for (let o = 0; o < t.length; o++) {
							const e = t[o],
							i = e[0],
							c = e[1],
							s = n(i[0], i[1], i[2]),
							u = n(c[0], c[1], c[2]);
							r += uc(s.Oo, s.Po, u.Oo, u.Po, !0)
						}
					}
					const l = d ? 1 : 0;
					[s.Io, s.zo].forEach((function(t) {
						t.co(r).Fn(l)
					}));
					const a = xo(Mo(e[0].Oo), Mo((e[0].Po + e[0].Co) / 2));
					s.To.O(gl(i, o, -4));
					const _ = s.To.getBBox(),
					p = function(t, n, o = 4, e = 3) {
						n += o, t = Jn(t += o);
						const i = "a" + e + "," + e + " 0 0 1 ";
						return "M0 0l6.5 " + -(n = Mo(n / 2)) + "h" + (t - e) + i + e + "," + e + "v" + 2 * (n - e) + i + -e + "," + e + "h-" + (t - e) + "z"
					}(_.width, _.height);
					s.Ao.transform(a), d ? s.Ao.io() : s.Ao.mo(), s.No.co(p).transform(xo(3, 0))
					} else {
					let t = _ ? sc(w, !0) : Bt;
					if (f && (1 === c.roof && (t += k([po(l[0]), ho(a[0])], [po(l[1]), ho(a[1])], [po(l[2]), ho(a[2])], [po(l[3]), ho(a[3])])), (2 === c.roof || 3 === c.roof) && u && u.roof_lines)) {
						const n = u.roof_lines;
						for (let o = 0; o < n.length; o++) {
							const e = n[o],
							i = e[0],
							r = e[1];
							t += uc(po(i[0]), ho(i[1]), po(r[0]), ho(r[1]))
						}
						} [s.Io, s.zo].forEach((function(n) {
							n.co(t).attr({
								"stroke-opacity": .25
							}).io()
						})), s.Ao.transform(Zt).mo(), s.No.co(Bt), s.To.O("")
						} if (J() && n) {
						const t = c.cw;
						for (let n = 0; n < w.length; n++) {
							const e = n + 1 < w.length ? n + 1 : 0,
							i = w[t ? n : e],
							r = w[t ? e : n],
							c = Yc(o);
							br(s.xo, i[0], i[1], r[0], r[1], 0, c)
						}
				}
				this.toTop()
				}, s.oo.toTop = function() {
				r.eo(), c.eo()
				}, s.oo.updateDetail = function(t) {
				const n = "c" === e.type,
				i = e.N("setting"),
				r = 2 === i && o === data.b.length - 1,
				c = i > 0 || r,
				u = kc(e),
				l = Mc(e),
				a = e.tt() && qs();
				s.oo.attr(n ? In : jn);
				let f = Ft,
				_ = 0;
				n && (c && !u && (f = Et, _ = .5), a && (f = D.so, _ = .25)), s.wo.zn(f, _), s.Pt.attr({
					"stroke-width": !n && c || u ? 3 : 1
				}), s.vo.Ln(l && (c || u) ? At : Dt).Cn(!c || u ? "5 5" : "0");
				const d = fl(e.type, o);
				s.gt.O(d, !0), s.gt.Ln(n ? St(.25) : Et);
				const p = d ? function() {
					s.gt.io()
				} : null;
				let h = Bt;
				if (n) {
					s.$o.show();
					const t = e.N("roof") > 0 || e.N("roof", 2) > 0;
					for (let n = 0; n < e.x.length; n++) s.s.start[n].toggle(!t)
					} else if (d) {
					h = _c(s.gt.getBBox().width, s.gt.getBBox().height), s.$o.hide()
				} else s.$o.show();
				const g = d ? 1 : 0;
				s.Qn.ro({
					path: h,
					opacity: g
				}, t, p), s.no.co(h);
				let b = Et;
				a && (b = D.so), s.Qn.attr({
					fill: b
				})
			}, Go(i, o, [r, c]), yc(s.oo), Pu(i, o)
	}
	let Jc;
	
	function Wc(n, o, e) {
		if (Jc && Jc.remove(), !n) return void Sr(1, "b", o);
		Sr(0, "b", o);
		Jc = S.Yn.g(), Jc.Un();
		const i = [],
		r = Bo("b", o);
		for (let n = 0; n < r.x.length - 1; n++) {
			const o = po(r.x[n]),
			c = ho(r.y[n]),
			s = po(r.x[n + 1]),
			u = ho(r.y[n + 1]);
			Math.hypot(o - s, c - u);
			let l = t.angle(o, c, s, u);
			e && (l += Math.PI);
			const a = Jn(20 * Math.cos(l - Math.PI / 2) / 2),
			f = Jn(20 * Math.sin(l - Math.PI / 2) / 2);
			let _ = [o + a, c + f],
			d = [s + a, u + f],
			p = 0;
			if (i.length > 1) {
				const n = i[i.length - 2],
				o = i[i.length - 1];
				p = t.linesIntersection(_, d, n, o), p && (i.pop(), _ = [p.x, p.y])
			}
			i.push(_, d)
		}
		if (0 == i.length) return;
		const c = Jc.path(sc(i)),
		s = f ? D.Fo : D.qo;
		c.zn(Ft, 1).Ln(s, 20, .5).attr({
			"stroke-linecap": "butt"
		}).addClass("highlight")
	}
	
	function Yc(n) {
		const o = Bo("b", n);
		if (!o) return 0;
		let e = 0;
		if ("c" === o.type) {
			e = (o.z ? o.z[0] : t.calcGroundHeight(o.x, o.y)) + o.h
			} else {
			const t = o.s;
			if (t)
			for (let n = 0; n < t.sz.length; n++) {
				const o = t.sz[n] + t.sh[n];
				e < o && (e = o)
			}
		}
		return e
	}
	
	function Gc(t, n, o) {
		const e = ss(o.src) ? "map" : "bmp";
		null == n && (n = data.bmp.length), o.Rn = !!ns(o.src), o.Uo = o.x, o.Bo = o.y;
		return data._put(e, n, o, 0)
	}
	const Xc = ["satellite", "hybrid", "roadmap", "roadmap&style=element:geometry.stroke|color:0x000000|visibility:on|weight:1", "terrain"];
	
	function Vc(t, n) {
		let o = data.bmp[t].width ? data.bmp[t].width : 400,
		e = data.bmp[t].height ? data.bmp[t].height : 400;
		const i = $("<canvas>").attr({
			width: o,
			height: e
		})[0],
		r = i.getContext("2d"),
		c = data.bmp[t].src;
		
		function s(t, n, o) {
			let e = 100;
			do {
				e *= .95, t.font = e + "pt Lato"
			} while (t.measureText(n + "  ").width > o);
			return e
		}
		r.fillStyle = St(.5), r.fillRect(0, 0, o, e);
		const u = i.width / 2,
		l = i.height / 2;
		r.textAlign = "center", r.fillStyle = At, r.textBaseline = "bottom";
		s(r, c, i.width);
		r.fillText(c, u, l - 5), r.textBaseline = "top";
		s(r, n, i.width);
		r.fillText(n, u, l + 5);
		const a = s_(i);
		$(i).remove();
		const f = new Image;
		return f.src = a, f.width = o, f.height = e, f
	}
	
	function Qc(t) {
		if (!data.bmp[t].src) return;
		let n = String(data.bmp[t].src);
		return -1 === n.indexOf("/") && n.indexOf(".") > -1
	}
	
	function Kc(t) {
		if (isNaN(t) && (t = data.bmp.length - 1), !data.bmp[t].src) return;
		let n = String(data.bmp[t].src),
		o = !1;
		ss(n) || Qc(t) && (ns(n) || (ns(n, Vc(t, g("alert_drop_reload"))), o = !0)), ns(n) ? vs(t) : rs(t, o)
	}
	let ts = [];
	
	function ns(t, n) {
		Number.isInteger(t) && (t = data.bmp[t].src);
		let o = 0;
		for (; o < ts.length && ts[o].src !== t;) o++;
		return n && (ts[o] = {
			src: t,
			img: n
		}), !!ts[o] && ts[o].img
	}
	
	function os(t) {
		const n = data.bmp[t];
		if (n) {
			if (ss(n.src)) {
				const t = fs(n.src);
				let o = ms(t.zoom, t.lat);
				return o /= 2, void(n.img_scale = Wn(o))
			}
			if (!n.img_scale) {
				const o = ns(data.bmp[t].src);
				return data.bmp[t - 1] ? n.img_scale = data.bmp[t - 1].img_scale : n.img_scale = o ? Wn(.75 * ot / (o.width * ct)) : .1, !0
			}
		}
	}
	
	function es(t) {
		const n = data.bmp[t],
		o = ns(n.src);
		if (!o) return !1;
		const e = n.x,
		i = n.y,
		r = n.img_scale,
		c = n.img_rotate * (Math.PI / 180),
		s = r * o.width / 2,
		u = r * o.height / 2,
		[l, a] = zo(e + s, i - u, e, i, -c),
		[f, _] = zo(e - s, i - u, e, i, -c),
		[d, p] = zo(e - s, i + u, e, i, -c),
		[h, g] = zo(e + s, i + u, e, i, -c);
		return {
			x: [l, f, d, h],
			y: [a, _, p, g]
		}
	}
	
	function is() {
		const t = $("#edit_bmp_calcscale");
		t.Zo(), setTimeout((function() {
			t.Zo(!1)
		}), 5e3)
	}
	
	function rs(t, n) {
		if (!data.bmp[t].src) return;
		let o = String(data.bmp[t].src);
		if (ss(o)) {
			const t = fs(o);
			o = hs(t.lat, t.lon, t.zoom, t.type)
		}
		const e = new Image;
		e.crossOrigin = "Anonymous", e.onload = function() {
			const o = os(t);
			ns(data.bmp[t].src, e), vs(t), o && Nl("bmp", t), o && is(), data.bmp[t].Rn = !n || null
			}, e.onerror = function() {
			return Xu(g("alert_load_fail", ss(data.bmp[t].src) ? g("obj_title_map") : g("obj_title_bmp")), Ot, "file"), data.bmp[t].img_scale ? (ns(o, Vc(t, g("alert_load_fail", g("obj_title_bmp")))), vs(t)) : (data.bmp.splice(t, 1), Uu(!0)), !0
		}, e.src = o
	}
	
	function cs(t, n, o, e) {
		t = t.replace(new RegExp(","), "_");
		const i = new Image;
		i.crossOrigin = "Anonymous", i.onload = function() {
			let n = null;
			for (let o = 0; o < data.bmp.length; o++) data.bmp[o].src === t && (n = o, ns(data.bmp[n].src, i), Cu("bmp", n, "loadBmpData"), Du("bmp", n));
			if (null == n) {
				n = data.bmp.length, null == o && (o = fo(ot / 2)), null == e && (e = _o(et / 2));
				Gc(0, n, {
					setting: 0,
					merge: 3,
					x: o,
					y: e,
					src: t,
					img_scale: 0,
					img_rotate: 0,
					width: i.width,
					height: i.height
				}), ns(data.bmp[n].src, i);
				const r = os(n);
				vs(n), r && Nl("bmp", n), r && is()
			}
			data.bmp[n].Rn = !0, xe("bmp"), Tl(), Uu()
			}, i.onerror = function() {
			Xu(g("alert_load_fail", "'" + t + "'"), Ot, "file")
		}, i.src = n
	}
	
	function ss(t) {
		if ("string" == typeof t) return 0 === t.search(/^[0-9.-]+\|[0-9.-]+|[0-9]+$/)
	}
	const us = 640;
	
	function ls(t) {
		return t >= 14 && t <= 20 || (t = 19), t
	}
	
	function as(t, n, o, e) {
		let i = t + "|" + n + "|" + ls(o);
		return e > 0 && e < Xc.length && (i += "|" + e), i
	}
	
	function fs(n) {
		if ("string" != typeof n) return !1;
		const o = n.split("|");
		let e = t.toNumber(o[0], 0),
		i = t.toNumber(o[1], 0),
		r = t.toInt(o[2], 19),
		c = t.toInt(o[3], 0);
		return r = ls(r), c > 0 && c < Xc.length || (c = 0), {
			lat: e,
			lon: i,
			zoom: r,
			type: c
		}
	}
	const _s = "https://maps.googleapis.com/maps/api/js?key=" + u + "&v=3.exp",
	ds = "js/mercator-projection.js";
	
	function ps() {
		return "object" == typeof google && "object" == typeof google.maps
	}
	
	function hs(t, n, o, e, i = !1) {
		return "//maps.googleapis.com/maps/api/staticmap?key=" + u + "&center=" + t + "," + n + "&zoom=" + o + "&size=640x640&scale=" + (i ? 1 : 2) + "&format=jpg&style=feature:poi|visibility:off&maptype=" + Xc[e]
	}
	const gs = function(t, n, o) {
		const e = n.lat,
		i = n.lon,
		r = n.zoom,
		c = new MercatorProjection,
		s = {};
		if (o) s.x = o / 2, s.y = o / 2;
		else {
			o = ms(r, e) * us, s.x = n.x, s.y = n.y
		}
		const u = function(t, n) {
			const o = new google.maps.LatLng(t, n),
			e = c.fromLatLngToPoint(o);
			return {
				x: e.x,
				y: e.y
			}
		}(e, i),
		l = Math.pow(2, r) * (o ? o / us : 1);
		return function(t, n) {
			const o = {
				x: t,
				y: n
			},
			e = c.fromPointToLatLng(o);
			return {
				lat: e.lat(),
				lon: e.lng()
			}
		}(u.x + (t.x - s.x) / l, u.y + (t.y - s.y) / l)
	};
	
	function bs(n, o) {
		$("option", n).each((function() {
			const n = t.toNumber($(this).val());
			if (o) {
				const e = ms(n, o) * us;
				let i;
				i = e >= 1e3 ? t.round(e / 1e3) + "k" : e >= 100 ? t.round(e, -1) : e >= 10 ? t.round(e) : t.round(e, 1);
				const r = e > 5e3;
				$(this).html(i + "m² area").prop("disabled", r).toggle(!r)
			} else $(this).html(n).prop("disabled", !1).show()
		}))
	}
	
	function ms(t, n) {
		return 156543.03 * Math.cos(n * Math.PI / 180) / Math.pow(2, t)
	}
	
	function vs(t) {
		const n = data.bmp[t],
		o = "bmp";
		let e = ns(data.bmp[t].src);
		n.img_scale || os(t);
		const i = S.Jo.g(),
		r = L.bitmaps.g(),
		c = S.Gn.g(),
		s = {},
		u = e ? e.src : n.src,
		l = Mt;
		s.Vn = r.image(u, 0, 0, 0, 0), s.Xn = i.path(Bt).attr(zn), s.On = i.path(Bt).attr(Nn), s.Wo = i.path(Bt).attr(Tn), s.oo = i.path(Bt).attr(In), s.Lo = c.path(Bt).attr(Ln), s.So = c.path(Bt).attr(Sn);
		const a = c.g();
		s.n = a.path(ac()).data({
			t: [0, 1]
			}), s.e = a.path(ac()).data({
			t: [1, 0]
			}), s.s = a.path(ac()).data({
			t: [0, -1]
			}), s.w = a.path(ac()).data({
			t: [-1, 0]
			}), s.ne = a.path(ac()).data({
			t: [1, 1]
			}), s.se = a.path(ac()).data({
			t: [1, -1]
			}), s.sw = a.path(ac()).data({
			t: [-1, -1]
			}), s.nw = a.path(ac()).data({
			t: [-1, 1]
			}), s.Yo = c.circle(xt, xt, l + 2).attr(vn).attr({
			fill: Nt,
			"stroke-width": 1
			}), s.$o = c.circle(xt, xt, l).attr($n).attr({
			fill: Nt,
			"stroke-width": 3
		}), s.Zt = c.path(ac(kt)).attr(vn), s.Go = c.circle(xt, xt, kt).attr(vn);
		const f = [0, 1, 2, 3];
		s.Xn.data({
			show_hover: !0,
			edit: !0
			}).Dt(f), s.oo.data({
			id: t,
			type: o,
			cursor: "pointer"
			}).Dt(f), s.Lo.data({
			show_select: !0
			}).Dt(f), s.So.data({
			show_select: !0
			}).Dt(f), s.Yo.data({
			id: t,
			type: o,
			cursor: "pointer",
			show_select: !0
			}).Dt(f), s.$o.data({
			id: t,
			type: o,
			handle: !0,
			cursor: "pointer",
			show_select: !0
			}).Dt(f), s.Zt.data({
			id: t,
			type: o,
			cursor: "pointer",
			show_select: !0,
			is_scale: !0
			}).Dt(f), s.Go.data({
			id: t,
			type: o,
			cursor: "pointer",
			show_select: !0,
			is_rotate: !0
			}).Dt(f), Br([s.Yo, s.$o, s.oo, s.Go, s.Zt]), Br([s.Lo, s.So], {
			drag: !1,
			click: !1
			}), a.selectAll("*").forEach((function(n) {
				n.attr(vn).data({
					id: t,
					type: o,
					cursor: "pointer",
					show_select: !0
				}).Dt(f), Br(n), n.Zn = function(t, n) {
				const o = mr(0, 0, this);
				s.Zt.Zn(t, n, !1, o.x, o.y)
				}
			})), s.oo.Zn = function(t, o, e) {
			n.setting || (Cn(t) && (n.Uo += fo(t) - n.x, n.x = fo(t)), Cn(o) && (n.Bo += _o(o) - n.y, n.y = _o(o)), s.oo.position())
			}, s.$o.Zn = function(t, o, i) {
			if (!e) return;
			if (n.setting) return;
			const r = n.img_scale * ct;
			const c = io(n.img_rotate),
			u = e.width * r,
			l = e.height * r,
			a = po(n.x),
			f = ho(n.y),
			_ = [];
			_.push([a, f]);
			const d = function(t, n) {
				return zo(a + u / 2 * t, f + l / 2 * n, a, f, c, !1)
			};
			_.push(d(1, 1), d(1, -1), d(-1, 1), d(-1, -1), d(0, 1), d(0, -1), d(1, 0), d(-1, 0));
			for (let n = 0; n < _.length; n++) {
				const e = _[n];
				if (Math.hypot(t - e[0], o - e[1]) < 12) {
					t = e[0], o = e[1];
					break
				}
			}
			t = fo(t), o = _o(o), n.Uo = t, n.Bo = o, s.oo.position()
			}, s.Zt.Zn = function(t, o, i, r, c) {
			if (!n.setting && e) {
				if (null != t) {
					let i, s;
					const u = Math.hypot(t - po(n.Uo), o - ho(n.Bo));
					if (null == r) i = 4 * u / e.width / ct, s = i / n.img_scale;
					else {
						s = u / Math.hypot(r - po(n.Uo), c - ho(n.Bo)), i = s * n.img_scale
					}
					if (i > 0) {
						i = Wn(i), n.img_scale = i;
						const t = function(t, n, o, e, i) {
							return [o + (t - o) * i, e + (n - e) * i]
						}(n.x, n.y, n.Uo, n.Bo, s);
						n.x = t[0], n.y = t[1]
					}
				}
				s.oo.position()
			}
			}, s.Go.Zn = function(t, o, i) {
			if (!n.setting && e) {
				if (null != t) {
					let e = t - po(n.Uo),
					r = o - ho(n.Bo),
					c = Math.atan(r / e);
					e < 0 && (c -= Math.PI), i && Mr && (c = Zr(c));
					const s = io(n.img_rotate) - c;
					let u = c / (Math.PI / 180);
					n.img_rotate = Zn(u);
					const l = zo(n.x, n.y, n.Uo, n.Bo, s);
					n.x = l[0], n.y = l[1]
				}
				s.oo.position()
			}
			}, s.Vn.loadBmpData = function() {
			e = ns(data.bmp[t].src), this.attr({
				"xlink:href": e.src
			})
			}, s.Vn.resetOrder = function() {
			i.eo(), r.eo(), c.eo()
			}, s.oo.qn = function(t) {}, s.oo.position = function(t) {
			if (!e) return;
			const o = n.img_scale,
			i = n.img_rotate,
			r = Jn(e.width * o * ct),
			c = Jn(e.height * o * ct),
			u = po(n.x),
			a = ho(n.y),
			f = xo(u, a),
			_ = xo(u - r / 2, a - c / 2),
			d = "r" + i,
			p = "R" + i + "," + u + "," + a;
			s.Vn.attr({
				width: r,
				height: c
			}).transform(_ + d);
			const h = r / 2,
			g = c / 2;
			let b = h + xt,
			m = g + xt;
			const v = lc(-b, -m, b, m, !0);
			s.Xn.co(v).transform(f + d), s.On.co(v).transform(f + d).io(), s.Wo.co(v).transform(f + d).io(), s.oo.co(v).transform(f + d);
			const $ = h / 2,
			y = "M-" + l + " " + "0.5L-" + $ + " " + "0.5M" + l + " " + "0.5L" + $ + " " + xt,
			w = po(n.Uo),
			x = ho(n.Bo),
			k = xo(w, x),
			M = "R" + i + "," + w + "," + x;
			s.Lo.co(y).transform(k + M), s.So.co(y).transform(k + M), s.ne.transform(xo(u + h, a - g) + p), s.nw.transform(xo(u - h, a - g) + p), s.se.transform(xo(u + h, a + g) + p), s.sw.transform(xo(u - h, a + g) + p), s.n.transform(xo(u, a - g) + p), s.e.transform(xo(u + h, a) + p), s.s.transform(xo(u, a + g) + p), s.w.transform(xo(u - h, a) + p), s.Yo.transform(k + d), s.$o.transform(k + d);
			const j = Math.cos(i * (Math.PI / 180)) * $,
			I = Math.sin(i * (Math.PI / 180)) * $,
			z = xo(w - j, x - I);
			s.Zt.transform(z + d);
			const A = xo(w + j, x + I);
			s.Go.transform(A + d), this.toTop()
			}, s.oo.toTop = function() {
			i.eo(), c.eo()
			}, s.oo.updateDetail = function(t) {
			const e = n.merge >= 2,
			i = n.setting > 0;
			s.Vn.ro({
				opacity: e ? 1 : 0
			}, t), s.Wo.Ln(e ? i ? "#999999" : At : Dt);
			const r = !i && n.type === o;
			[s.Lo, s.So, s.Yo, s.$o, s.Zt, s.Go, s.ne, s.nw, s.se, s.sw, s.n, s.e, s.s, s.w].forEach((function(t) {
				r ? t.show() : t.hide()
			})), s.oo.zn(i ? Ft : Et).data({
			cursor: i ? "" : "pointer"
			})
		}, Go(o, t, [i, r, c]), yc(s.oo), Pu(o, t), Ou(), n.merge > 2 && Pi()
	}
	
	function $s(t, n, o) {
		for (let e = 0; e < t.length; e++) {
			const i = t[e];
			if (i.type.match("application/dxf")) {
				const t = new FileReader;
				t.onload = function(t) {
					d_(t.target.result)
				}, t.readAsText(i)
				} else if (i.type.match("image/jpeg") || i.type.match("image/png") || i.type.match("image/gif")) {
				const t = new FileReader;
				t.onload = function(t) {
					const e = i.name;
					("string" == typeof e || e instanceof String) && cs(i.name, t.target.result, n, o)
				}, t.readAsDataURL(i)
			} else Xu(g("alert_image_types"), Ot, "upload")
		}
	}
	
	function ys(t) {
		t.stopPropagation(), t.preventDefault(), t.dataTransfer = t.originalEvent.dataTransfer;
		return $s(t.dataTransfer.files), !0
	}
	
	function ws(t, n, o) {
		if (!Fn([o.x, o.y])) return !1;
		const e = "gh";
		for (let t = 0; t < data.gh.length; t++) data.gh[t].x === o.x && data.gh[t].y === o.y && (Pl(e, t), t--);
		null == n && (n = data.gh.length), o.setting = 1, Ic(o, e, ["z"]);
		const i = data._put(e, n, o, 0);
		return i && !t && (xs(n), se()), i
	}
	
	function xs(t) {
		const n = data.gh[t],
		o = "gh",
		e = S.Yn.g(),
		i = S.Gn.g(),
		r = {};
		r.Xn = e.path(Bt).attr(zn), r.Qn = i.path(Bt).attr(yn), r.gt = i.Kn(0, jt), r.no = i.path(Bt).attr(In), r.oo = i.path(Bt).attr(In), r.Xn.data({
			show_hover: !0,
			edit: !0
			}).Dt([1]), r.oo.data({
			id: t,
			type: o,
			handle: !0,
			cursor: "pointer"
			}).Dt([1]), r.no.data({
			id: t,
			type: o,
			cursor: "pointer"
		}).Dt([1]), Br([r.oo, r.no]), r.oo.Zn = function(t, o, e) {
		e && Mr && (Math.abs(Mr.x - t) >= Math.abs(Mr.y - o) ? o = Mr.y : t = Mr.x), Cn(t) && (n.x = fo(t)), Cn(o) && (n.y = _o(o)), r.oo.position()
		}, r.oo.position = function() {
		const t = xo(po(n.x), ho(n.y));
		e.transform(t), i.transform(t), this.toTop()
		}, r.oo.toTop = function() {
		e.eo(), i.eo()
		}, r.no.Zn = function(t, n, o) {
		r.oo.Zn(t, n, o)
		}, r.oo.updateDetail = function(n) {
		let e = gl(o, t, -4);
		r.gt.O(e, !0);
		const i = r.gt.getBBox(),
		c = function(t, n, o = 4, e = 3) {
			n += o;
			const i = "a" + e + "," + e + " 0 0 1 ";
			return "M0 0l" + -(t = Mo((t += o) / 2)) + " -6.5v-" + ((n = Jn(n)) - e) + i + e + "," + -e + "h" + 2 * (t - e) + i + e + "," + e + "v" + (n - e) + "z"
		}(i.width, i.height),
		s = c;
		r.oo.co(c), r.Xn.ro({
			path: c
			}, n), r.Qn.ro({
			path: s
			}, n, e ? function() {
			r.gt.io()
			} : null), r.no.co(s), r.gt.zn(d ? Dt : At), r.Qn.attr({
			"fill-opacity": d && !Z() ? .333 : 1
		})
		}, Go(o, t, [e, i]), yc(r.oo), Pu(o, t)
	}
	
	function ks(n, o, e) {
		const i = "gl";
		for (let n = 0; n < data.gl.length; n++) t.arrayMatch(data.gl[n].x, e.x) && t.arrayMatch(data.gl[n].y, e.y) && (Pl(i, n), n--);
		null == o && (o = data.gl.length), e.setting = 1, Ic(e, i, ["z"]);
		const r = data._put(i, o, e, 0);
		return r && !n && (Ms(o), se()), r
	}
	
	function Ms(t) {
		const n = data.gl[t],
		o = "gl",
		e = [1],
		i = S.Yn.g(),
		r = S.Gn.g(),
		c = {
			s: {}
		};
		c.On = i.path(Bt).attr(xn), c.Xn = i.path(Bt).attr(An), c.Pt = i.path(Bt).attr(Mn), c.vo = i.path(Bt).attr(Mn), c.oo = r.path(Bt).attr(jn), c.$o = r.circle(xt, xt, Mt).attr(vn), c.Qn = r.path(Bt).attr(yn), c.gt = r.Kn(), c.no = r.path(Bt).attr(In), c.On.data({
			show_hover: !0
			}).Dt(e), c.Xn.data({
			show_hover: !0,
			edit: !0
			}).Dt(e), c.oo.data({
			id: t,
			type: o
			}).Dt(e), c.$o.data({
			id: t,
			type: o,
			handle: !0,
			tool: 0,
			show_select: !0,
			cursor: "pointer"
			}).Dt(e), c.no.data({
			id: t,
			type: o,
			cursor: "pointer"
			}).Dt(e), Br([c.oo], {
			drag: !1
		}), Br([c.$o, c.no]);
		const s = function(n, i) {
			n.data({
				id: t,
				type: o,
				node: i,
				tool: 0,
				show_select: !0,
				cursor: "pointer"
			}).Dt(e), Br(n)
		};
		c.s.start = [], c.s.mid = [];
		for (let t = 0; t < n.x.length; t++) c.s.start[t] = r.path(ac()).attr($n), s(c.s.start[t], t), c.s.start[t].Zn = function(o, e, i) {
			Wr(n, t, o, e, i), c.oo.position()
			}, t < n.x.length - 1 && (c.s.mid[t] = r.path(ac()).attr(vn), s(c.s.mid[t], t), c.s.mid[t].Zn = function(o, e, i) {
				Yr(n, t, o, e, i), c.oo.position()
			});
			c.$o.Zn = function(t, o, e) {
				Gr(n, t, o, e), c.oo.position()
				}, c.no.Zn = function(t, n, o) {
				c.$o.Zn(t, n, o)
				}, c.oo.position = function(t) {
				for (let t = 0; t < n.x.length; t++) {
					const o = n.x[t],
					e = n.y[t];
					if (c.s.start[t].transform(ko(o, e)), t < n.x.length - 1) {
						const i = (o + n.x[t + 1]) / 2,
						r = (e + n.y[t + 1]) / 2;
						c.s.mid[t].transform(ko(i, r))
					}
				}
				c.On.co(dc(n.x, n.y));
				const o = cc(n);
				[c.Xn, c.Pt, c.vo, c.oo].forEach((function(t) {
					t.co(o)
				}));
				const e = Vr(n.x, n.y);
				n.Wn = {
					x: po(e.x),
					y: ho(e.y)
				};
				const i = xo(n.Wn.x, n.Wn.y);
				[c.$o, c.Qn, c.gt, c.no].forEach((function(t) {
					t.transform(i)
				})), this.toTop()
				}, c.oo.toTop = function() {
				i.eo(), r.eo()
				}, c.oo.updateDetail = function(e) {
				let i = gl(o, t, -4);
				c.gt.O(i, !0);
				const r = c.gt.getBBox(),
				s = _c(r.width, r.height, 4);
				c.Qn.ro({
					path: s
					}, e, i ? function() {
					c.gt.io()
				} : null), c.no.co(s);
				const u = d ? .333 : 1,
				l = "36 36";
				c.gt.zn(d ? Dt : At), c.Pt.Ln(Et, 3, u).Cn(l), c.vo.Ln(n.setting > 0 ? At : Dt, 3, u).Cn(l, 36), c.Qn.Fn(i ? 1 : 0)
			}, Go(o, t, [i, r]), yc(c.oo), Pu(o, t)
	}
	const js = [10, 70],
	Is = [10, 40];
	
	function zs() {
		As(!0, function(t) {
			const n = t || data.grid,
			o = null == n.setting ? 0 : n.setting,
			e = null == n.x || 2 !== n.x.length ? js : n.x,
			i = null == n.y || 2 !== n.y.length ? Is : n.y,
			r = null == n.h ? 1.5 : n.h,
			c = null != n.heights && n.heights.length ? n.heights : [r];
			return {
				setting: o,
				x: e,
				y: i,
				h: r,
				abs: null == n.abs ? 0 : n.abs,
				heights: c
			}
		}())
	}
	
	function As(t, n) {
		null == n.x && (n.x = js), null == n.y && (n.y = Is), null == n.heights && (n.heights = n.h), data._put("grid", 0, n, 0), Os()
	}
	const Es = {};
	
	function Ns() {
		const t = function(t) {
			if (!t) return [null, null];
			const n = bn(32) / t,
			o = Math.pow(10, Math.ceil(Math.log10(n))),
			e = [10, 5, 4, 2],
			i = [5, 5, 4, 5];
			for (let r = 0; r < e.length; r++) {
				const c = o / e[r];
				if (c > n) return [c * t, i[r]]
			}
			return [o * t, 5]
		},
		n = t(ct);
		Es.hscale = n[0], Es.hcount = n[1];
		const o = t(st);
		Es.vscale = o[0], Es.vcount = o[1]
	}
	
	function Ts() {
		Ns(), Es.V && Es.V.remove(), Es.V = S.Xo.g();
		const n = bn(20),
		o = bn(10),
		e = bn(10),
		i = {
			fill: f ? At : Et,
			opacity: 1,
			stroke: Ft
		},
		r = Es.V.g(),
		c = r.rect(0, 0, 0, 0).zn(f ? Et : At).Fn(.333).Ln(Ft).addClass("export_as_white");
		for (let n = 0; n <= Es.hcount; n++) {
			const c = n * Es.hscale,
			u = Jn(c + eu + o + e),
			l = et - o - e;
			let a = (s = c / ct) >= 1e3 ? g("distance_km", t.round(s / 1e3, 0, h)) : No(s >= 100 ? t.round(s, 0, h) : t.round(s, 1, h));
			const _ = 0 === n || n == Es.hcount,
			d = _ ? 2 : 1,
			p = _ ? 5 : 3;
			r.rect(u, l - p, d, p).attr(i).addClass("export_as_black");
			if (_) {
				r.Vo(u, l + jt, a, mn(13)).attr(i).zn(f ? At : Et).addClass("export_as_black")
			}
		}
		var s;
		const u = Es.hcount * Es.hscale,
		l = (r.rect(eu + o + e, et - o - e, u + 2, 2).attr(i).addClass("export_as_black"), n + 2 * o);
		c.attr({
			x: eu,
			y: et - (iu + l),
			width: u + 2 * o + 2 * e,
			height: l
		}), Es.Qo = l
	}
	
	function Ls(t) {
		const o = $("#scale");
		o.empty().addClass("ui"), $(k_.Ko(svgIcon("scalein"), "", "scale_in", g("toolbar_zoom"))).appendTo(o).click((function() {
			_a() && ba()
		}));
		const e = $(k_.o("scale_steps")).appendTo(o);
		$(k_.Ko(svgIcon("scaleout"), "", "scale_out", g("toolbar_zoom_out"))).appendTo(o).click((function() {
			da() && ba()
			})), $(k_.Ko(svgIcon("scaleall"), "ui", "scale_all", g("toolbar_zoom_fit"))).appendTo(o).click((function() {
			fa() && ba()
		}));
		for (let t = 0; t < rt.length; t++) $(k_.Ko(k_.te(), "scale", "scale_" + t)).appendTo(e).click((function() {
			sl(rt[t]) && ba()
		}));
		if (n) {
			const n = $(k_.o("saved_views")).appendTo(o);
			data.views || (data.views = []);
			for (let o = 0; o < data.views.length; o++) {
				const e = $(k_.Ko(k_.te(Ds(o)), "ui view", "view_" + o, g("toolbar_bookmark"))).appendTo(n).click((function() {
					Hs(o) && ba()
				}));
				t === o && e.hide().fadeIn()
			}
			$(k_.Ko(svgIcon("bookmark"), "ui", "save_view", g("buttons_bookmark"))).appendTo(n).click((function() {
				! function() {
					const t = Gn(fo(ot / 2)),
					n = Gn(_o(et / 2)),
					o = Rs(t, n, ct);
					Ls(o), Uu()
				}()
				})), $(k_.Ko(svgIcon("unbookmark"), "ui", "unsave_view", g("buttons_unbookmark"))).appendTo(n).click((function() {
				const t = $(this).data("current");
				I_(g("alert_unbookmark"), "", g("buttons_continue"), (function() {
					! function(t) {
						if (!data.views[t]) return;
						data.views.splice(t, 1), Uu(), $("#view_" + t).fadeOut((function() {
							Ls()
						}))
					}(t)
				}))
			}))
		}
		Ss()
	}
	
	function Ss() {
		$("#scale_steps button").dt(!1);
		let t = rt.indexOf(ct);
		if ($("#scale_" + t).dt(!0), n) {
			$("#saved_views button").dt(!1);
			const t = function() {
				if (!data.views) return !1;
				const t = Gn(fo(ot / 2)),
				n = Gn(_o(et / 2));
				for (let o = 0; o < data.views.length; o++) {
					const e = data.views[o];
					if (e[0] === t && e[1] === n && e[2] === ct) return o
				}
				return !1
			}();
			!1 !== t && $("#view_" + t).dt(!0), $("#save_view")._t(!1 !== t), $("#unsave_view")._t(!1 === t).data("current", t)
		}
	}
	
	function Rs(t, n, o) {
		return data.views || (data.views = []), data.views.push([t, n, o]), data.views.length - 1
	}
	
	function Ds(t) {
		return t + 1
	}
	
	function Hs(t) {
		const n = data.views[t];
		if (!n) return;
		const o = al(n[2]),
		e = ma(n[0], n[1]);
		return o || e
	}
	
	function Os(t) {
		const n = data.grid;
		if ($("#height_switcher").remove(), !n.heights || n.heights.length < 2) return;
		const o = $(k_.oe("ui", "height_switcher")).appendTo("#navigate"),
		e = function(t) {
			!0 === t && (t = n.heights.indexOf(n.h) + 1), !1 === t && (t = n.heights.indexOf(n.h) - 1), t < 0 || t >= n.heights.length || (n.h = n.heights[t], Ps(), Me("grid"), Uu(!0))
		};
		$(k_.te(g("toolbar_grid_height"))).appendTo(o), $(k_.Ko(svgIcon("up"), "", "grid_height_up")).appendTo(o).click((function(t) {
			e(!0)
		}));
		const i = $(k_.oe("height_list")).appendTo(o);
		$(k_.Ko(svgIcon("down"), "", "grid_height_down")).appendTo(o).click((function(t) {
			e(!1)
		}));
		for (let t = 0; t < n.heights.length; t++) $(k_.Ko(To(n.heights[t]), "", "grid_height_" + t)).appendTo(i).click((function(n) {
			e(t)
		}));
		$("button", o).on("mouseup touchend", (function(t) {
			3 === ya(t) && (Nl("grid", 0), t.preventDefault())
		})), Ps()
	}
	
	function Ps() {
		$("button", "#height_switcher").dt(!1);
		const t = data.grid,
		n = t.heights.indexOf(t.h);
		$("#grid_height_" + n).dt(!0)
	}
	let Cs = 0;
	
	function Fs(t) {
		return null == t && (t = Cs), 2 === t
	}
	
	function qs(t) {
		return null == t && (t = Cs), 3 === t
	}
	
	function Us() {
		return Cs > 0
	}
	
	function Bs(t) {
		return null == t ? n ? Cs : Fs(Cs) ? (s.ee && Xu(g("alert_subscription_missing", g("title_states")), Ht, "states"), !1) : Cs : t
	}
	
	function Zs(t, n) {
		Cs = t
	}
	
	function Js() {
		rr(), xe("state"), ce(), Uu(!0), cu(), wu(), Dn._n.Tt() && Tl()
	}
	
	function Ws() {
		$("#state_switcher").remove();
		const t = $(k_.oe("ui", "state_switcher")).insertAfter(Dn.St.V),
		n = $(k_.oe("blink", "states")).appendTo(t);
		$(function() {
			const t = $(k_.oe("state_switcher")),
			n = function(t) {
				Zs(t), Js()
			},
			o = function(o, e) {
				$(k_.Ko(svgIcon(e, {
					vw: 40,
					w: 40
				}), "", "state_button_" + o)).prop({
				"data-state": o
				}).appendTo(t).click((function(t) {
					n(o)
				}))
			};
			return o(1, "statea"), o(2, "stateb"), o(3, "atob"), t
		}()).appendTo(n);
		const o = $(k_.Ko("", "ui", "states_button")).appendTo(t).click((function() {
			Qs()
		}));
		$(k_.o("states_button_text")).appendTo(o);
		const e = $(k_.o("states_button_items", k_.te("", "", "states_button_items_text"))).appendTo(o);
		$(k_.oe("ui", "states_button_icon", svgIcon("more"))).appendTo(e), $(t).on("mouseup touchend", (function(t) {
			3 === ya(t) && (Qs(), t.preventDefault())
		})), Vs()
	}
	
	function Ys(t) {
		null == t && (t = Dn._n.Tt() || Dn.Lt.Tt() || Dn.St.Tt()), $("#state_switcher").toggleClass("to_front", t)
	}
	
	function Gs(t) {
		return t || (t = Cs), 1 === t ? g("states_default") : Fs(t) ? g("states_alt") : qs(t) ? g("states_change") : ""
	}
	
	function Xs(t) {
		return t ? zt + t : ""
	}
	
	function Vs() {
		if (!Us()) return void $("#state_switcher").fadeOut();
		$("#state_switcher").fadeIn();
		$("button", "#state_switcher").dt(!1), $("#state_button_" + Cs).dt(!0), $("#states_button_text").text(Gs(Cs)), $("#states_button_items_text").text(function() {
			const t = nu(!0);
			if (!t.length) return g("states_empty");
			let n = [],
			o = 0,
			e = 0;
			for (let n = 0; n < t.length; n++) "config" === t[n].bn ? e++ : o++;
			return o && n.push(o + " " + g("objects")), e && n.push(e + " " + g("config_title")), n.join(" | ")
		}()), $("#wrap").removeClass("state_0 state_1 state_2 state_3").addClass("state_" + Cs)
	}
	
	function Qs() {
		ou(), $("#button_states_start").toggle(!Us()), $("#button_states_end").toggle(Us()), Dn.St.ie(), Dn._n.re()
	}
	
	function Ks(t) {
		! function() {
			const t = nu(!0);
			for (let n = 0; n < t.length; n++) {
				const o = t[n];
				tu(o.bn, o.ce, o.ue)
			}
		}(), Zs(0), Ie(), Dn.St.re(),
		function() {
			const t = function(t) {
				for (let n = 0; n < t.length; n++)
				if (Array.isArray(t[n]))
				for (let o = 0; o < t[n].length; o++) Array.isArray(t[n][o]) && t[n][o].length > 1 && (t[n][o].length = 1)
			};
			for (let n = 0; n < 3; n++) t(oi(n, !0).it), t(oi(n, !1).it)
		}(), t ? cu() : Js()
	}
	
	function tu(t, n, o) {
		if ("config" === t) return "gfactor" === o && data.config.gfactor_disable.v(void 0, 2), void data.config[o].v(void 0, 2);
		if (null == o) return void(data[Ho(t)][n].u = {});
		const e = Bo(t, n, 1),
		i = {},
		r = function(t) {
			i[t] = e.N(t, 1)
		};
		r(o), "h" === o && e.tt("h_roof") && r("h_roof"), data._put(t, n, i, 2)
	}
	
	function nu(t) {
		const n = [];
		if (t) So.forEach((function(t) {
			const o = data[t];
			if (Array.isArray(o) && o.length)
			for (let e = 0; e < o.length; e++) o[e].tt() && n.push({
				bn: t,
				ce: e,
				ue: null
			})
		}));
		else {
			const t = vi(So, 0);
			for (let o = 0; o < t.length; o++) {
				const e = t[o][2],
				i = t[o][1],
				r = t[o][0],
				c = Bo(e, i, 1);
				if (!c || !c.tt()) continue;
				let s = 0;
				for (let t in c)
				if (c.hasOwnProperty(t) && c.tt(t)) {
					if (s++, "s" === t) continue;
					const o = Do(t, e);
					let u = c[t],
					l = c.u[t];
					if (void 0 === l) continue;
					if ("h" === t && (u = rc(c, !1, !0, !0), l = rc(data.V(e, i, 2), !1, !0, !0), u === l)) continue;
					if ("h_roof" === t) {
						if (c.tt("h")) continue;
						if (0 === c.roof || 0 === c.u.roof) continue;
						u = To(u), l = To(l)
					}
					"adj" === t && (2 === c.adj_type ? (u += "%", l += "%") : (u += Io(!0), l += Io(!0))), "lvl" === t && (u && !Array.isArray(u) && (u = Kn(u, !0)), l && !Array.isArray(l) && (l = Kn(l, !0))), "hz" === t && (u += "Hz", l += "Hz");
					let a = !1;
					"setting" === t && (-1 !== u && -1 !== l || (a = u > 0 || l > 0)), n.push({
						bn: e,
						ce: i,
						gt: r,
						ue: t,
						L: o,
						le: u,
						ae: l,
						fe: s,
						_e: a
					})
				}
			}
		}
		const o = function(t) {
			const o = data.config[t].O(1, !0),
			e = data.config[t].O(2, !0);
			o !== e && n.push({
				bn: "config",
				ce: 0,
				gt: null,
				ue: t,
				L: data.config[t].L(),
				le: o,
				ae: e,
				fe: 1
			})
		};
		return o("gfactor"), o("temperature"), o("humidity"), o("iso_limit"), o("iso_edges"), o("iso_facade"), o("iso_check"), o("iso_surface"), o("iso_convex"), o("iso_ground"), o("iso_laterallimit"), o("reflections"), n
	}
	
	function ou() {
		const t = $("#states_table");
		t.empty();
		const n = nu();
		if (!n.length) {
			if (Us()) $(k_.de(k_.pe(g("states_empty")))).appendTo(t);
			else {
				const n = $(k_.oe("guide_text")).appendTo(t);
				$(k_.oe("states_guide_image", "", k_.te(svgIcon("statea", {
					w: 40,
					vw: 40
					}) + k_.te(g("states_default"))) + k_.te(svgIcon("to", {
					w: 40,
					vw: 40
					})) + k_.te(svgIcon("stateb", {
					w: 40,
					vw: 40
					}) + k_.te(g("states_alt"))) + k_.te(svgIcon("equals", {
					w: 40,
					vw: 40
					})) + k_.te(svgIcon("atob", {
					w: 40,
					vw: 40
				}) + k_.te(g("states_change"))))).appendTo(n), $(k_.he(g("states_explain"))).appendTo(n), $(k_.ge(g("states_more"))).click((function() {
				L_("#states")
				})).appendTo(n)
			}
			return
		}
		const o = g("output_title_compare_states"),
		e = $(k_.be(o)).appendTo(t);
		$(k_.me("states_copy")).appendTo(e).click((function() {
			Rl($("#states_table"), o)
		}));
		const i = function(t) {
			const n = $(k_.oe("actions"));
			if ("config" !== t.bn) {
				const o = jl(t.bn, t.ce, Dn.St.ve);
				n.append(o)
			}
			const o = $(k_.$e()).click((function() {
				z_(g("alert_delete_state"), (function() {
					! function(t) {
						tu(t.bn, t.ce, t.ue), xe(t.bn), ce(), ou(), Uu()
					}(t)
				}))
			}));
			return n.append(o), n
		},
		r = function(t, n, o) {
			return "lvl" === n ? function(t, n) {
				if (!Array.isArray(n)) return n;
				const o = Wl(t),
				e = Yl(o, n);
				return null == e ? g("value_no_levels") : "<em>" + o[e].gt + "</em>"
				}(t, o) : function(t, n, o) {
				return "setting" === n ? Ko(o) : "roof" === n ? Xo(tn, nn, o) : "slope" === n ? Xo(Qt, Kt, o) : "method" === n ? on[o] : "rc" === n ? Uc(o) : o
			}(0, n, o)
		},
		c = [],
		s = function(t, n, o = "") {
			c.push({
				L: t,
				ye: n,
				we: o
			})
		};
		s(g("prop_object"), (function(t) {
			return t.fe > 1 ? k_.te("", "object_ref") : Il(t.bn, t.ce)
			})), s(g("prop_setting"), (function(t) {
			return t.L
			}), "option_name"), s(k_.at(svgIcon("statea", {
				vw: 40,
				w: 30
			}), g("states_default")), (function(t) {
			return r(t.bn, t.ue, t.le)
			}), "statea"), s("", (function(t) {
			return k_.at(svgIcon("right", {
				vw: 40,
				w: 20
			}), "→")
			}), "atob"), s(k_.at(svgIcon("stateb", {
				vw: 40,
				w: 30
			}), g("states_alt")), (function(t) {
			return r(t.bn, t.ue, t.ae)
			}), "stateb"), s(!1, (function(t) {
			if (!t._e) return i(t)
		}));
		const u = $(k_.oe("table")).appendTo(t);
		Ml(c, n).appendTo(u)
	}
	const eu = bn(20),
	iu = eu / 2,
	ru = {};
	
	function cu(t) {
		if (ru.V && ru.V.remove(), 0 === data.config.legend_setting.N()) return;
		ru.V = S.xe.g().attr({
			id: "legend"
		});
		let n, o = "";
		Z() && Ai.length > 0 ? (n = Ai, o = No()) : (n = Mi(), o = Io());
		let e = "";
		const i = 2 === data.config.legend_setting.N();
		let r, c, s, u;
		i ? (s = bn(30), u = bn(5), r = s * n.length + 2 * u, c = s + 2 * u, e += o) : (s = bn(22), u = bn(8), r = s, c = s * n.length + 2 * u);
		const l = ru.V.rect(0, 0, r, c).zn(Et).Ln("#0009", 2).attr({
			"paint-order": "stroke"
		});
		ru.V.Qo = c;
		let f = r;
		for (let t = 0; t < n.length; t++) {
			const e = n.length - 1,
			r = ji(t, n);
			let c = "" + r.wn;
			t == e && (c += "+");
			let l = {
				ke: At
			},
			_ = {};
			if (i ? (l.Me = Jn(t * s + u), l.je = 0 + Jn(u), _.Me = l.Me + s / 2, _.je = l.je + s / 2 + 2, _.Ie = "middle", _.O = c) : (l.Me = Jn(u), l.je = 0 + Jn(t * s + u), _.Me = l.Me + s + u, _.je = l.je + s / 2 + 2, _.Ie = "start", _.O = c + o), r.$n) ru.V.image(a, l.Me, l.je, s, s);
			else {
				const t = r.yn,
				n = "rgb(" + t.join(",") + ")";
				i && (l.ke = gu(t)), ru.V.rect(l.Me, l.je, s, s).zn(n, 1).Ln(Ft)
			}
			const d = ru.V.Vo(_.Me, _.je, _.O, mn(13)).attr({
				"text-anchor": _.Ie
			}).zn(l.ke);
			if (1 === data.config.legend_setting.N()) {
				let t = d.getBBox().width + s + 3 * u;
				t > f && (f = t)
			}
		}
		const _ = Math.ceil(f);
		ru.V.ze = _, l.attr({
			width: _
		});
		const d = ru.V.rect(0, 0, _, c).zn(Et).Fn(0).Ln(Ft).data({
			type: "legend",
			show_hover: !0,
			cursor: "pointer"
		});
		d.mouseup(Lr), d.Zn = function(t, n) {
			const o = Es.Qo || 0;
			(isNaN(t) || null == t) && (t = ru.x), (isNaN(n) || null == n) && (n = ru.y), (isNaN(t) || null == t) && (t = eu), (isNaN(n) || null == n) && (n = et - 2 * iu - o - ru.V.Qo), t < 0 && (t = 0), t > ot - r && (t = ot - r), n < c && (n = c), n > et - ru.V.Qo && (n = et - ru.V.Qo), isNaN(t) || null == t ? t = ru.x : ru.x = Jn(t), isNaN(n) || null == n ? n = ru.y : ru.y = Jn(n), ru.V.transform(xo(t, n))
			}, ru.V.Zn = function() {
			d.Zn()
		}, su()
	}
	
	function su() {
		ru.x = null, ru.y = null, ru.V && ru.V.Zn()
	}
	
	function uu(t, n) {
		let o = "",
		e = [];
		const i = function(t) {
			if (!e.length) return "";
			const n = e.join("");
			return e = [], t ? "<optgroup label='" + t + "'>" + n + "</optgroup>" : n
		};
		for (let c = 0; c < t.length; c++) {
			const s = t[c],
			u = c === n ? "selected" : "",
			l = null != s.i ? " data-i=" + s.i + " data-j=" + (s.j ? s.j : 0) : "",
			a = (r = s.bt, JSON.stringify(r));
			e.push(k_.Ae(a, s.gt, u + l));
			const f = s.ht;
			c + 1 !== t.length && f === t[c + 1].ht || (o += i(f))
		}
		var r;
		return o
	}
	
	function lu() {
		const t = $("#palette_save"),
		o = $("#palette_lib");
		if (t.toggle(n), !n) return;
		const e = $("option:selected", o),
		i = e.data("i");
		if (null == i || "" === i) return;
		const r = "new" === i;
		if (r) t.Ee(!r).dt(!1), t.click((function() {
			if ($(this).Ne()) return;
			const t = N_(g("default_scheme_name"), g("title_save_scheme"), g("prop_name"), g("buttons_save"));
			$("#confirm_yes").off("click").on("click", (function() {
				if ($(this).Ne()) return;
				$(this).Ee();
				const n = t.getInput(),
				o = qo(Mi()),
				e = qs() ? 1 : 0;
				Tu({
					set: "palette",
					name: encodeURIComponent(n),
					entry: JSON.stringify(o),
					category: e
					}, (function(t) {
						const n = {
							name: t.name,
							value: o,
							id: t.response,
							timestamp: new Date,
							category: e
						};
						he(bt, n), wu()
					}))
			}))
		}));
		else {
			const n = e.data("j"),
			o = bt[i].entries[n],
			r = o.id,
			c = null != r;
			if (t.Ee(!c).dt(c), !c) return;
			t.click((function() {
				if (!$(this).Ne() && c) {
					const t = function() {
						if (!$("#confirm_yes").Ne()) return $("#confirm_yes").Ee(), Tu({
							remove: "palette",
							id: r
							}, (function(t) {
								ge(bt, r), wu()
							})), !1
					};
					I_(g("alert_forget", '"' + o.name + '"'), "", g("buttons_continue"), t)
				}
			}))
		}
	}
	
	function au() {
		if (!$("#palette_lib").length) return;
		const n = qs() ? 1 : 0;
		$("#palette_lib").html(function(n) {
			const o = be(bt, n),
			e = Mi();
			let i = null;
			for (let n = 0; n < o.length; n++)
			if (t.arrayMatch(o[n].bt, e)) {
				i = n;
				break
			} let r = uu(o, i);
			return null == i && (r = '<option value="" data-i="new" selected>' + g("value_custom_scheme") + "</option>" + r), r
		}(n)).change()
	}
	
	function fu(n) {
		("string" == typeof n || n instanceof String) && (n = t.toInt(n));
		const o = n.toString(16);
		return 1 == o.length ? "0" + o : o
	}
	
	function _u(t, n) {
		return du(t[0], t[1], t[2], n)
	}
	
	function du(t, n, o, e = !1) {
		let i = fu(t) + fu(n) + fu(o);
		var r;
		return e ? i = (r = i)[0] === r[1] && r[2] === r[3] && r[4] === r[5] ? r[0] + r[2] + r[4] : r : i = "#" + i, i
	}
	
	function pu(t) {
		if (null == t || Array.isArray(t)) return t;
		"#" === (t = t.toString()).substr(0, 1) && (t = t.substr(1));
		const n = parseInt(function(t) {
			return 3 === t.length ? t[0] + t[0] + t[1] + t[1] + t[2] + t[2] : t
		}(t), 16);
		return [n >> 16 & 255, n >> 8 & 255, 255 & n]
	}
	
	function hu(t) {
		return Math.round(t).toString(16).toUpperCase().padStart(2, 0)
	}
	
	function gu(t, n) {
		if (Array.isArray(t) || (t = pu(t)), 4 === t.length && t[3] < .2) return f ? At : Et;
		if (n) {
			if ((t[0] + t[1] + t[2]) / 3 > 128) return At
		} else if (.299 * t[0] + .587 * t[1] + .114 * t[2] > 150) return At;
		return Et
	}
	
	function bu(t) {
		let n = "",
		o = !1;
		return Array.isArray(t) ? (n = "background-color:rgb(" + t.join(",") + ")", uo(t) > 225 && (o = !0)) : n = "background-image:url(" + a + ")", {
			kt: n,
			Te: o
		}
	}
	
	function mu(t, n) {
		const o = bu(n);
		t.prop({
			style: o.kt
		}).toggleClass("light_colour", o.Te)
	}
	
	function vu(t) {
		const n = ji(t);
		yu(n.yn), $("#colour_new_lvl").ft(eo(n.wn)).focus()
	}
	
	function $u(t) {
		let n = !1;
		if (null != t) {
			const o = ji(t).yn;
			o && (n = _u(o)), $("#colour_scheme").data({
				n: t
			})
			} else {
			let t = $("#colour_new_rgb").data("rgb");
			t ? t !== Nt && (n = _u(t)) : n = "#ffffff", $("#colour_scheme").removeData("n")
		}
		n ? ($("#pick_colour_picker").val(n).change(), $("#pick_colour").prop("checked", !0).change()) : $("#pick_transparent").prop("checked", !0).change(), $("#picker_ok").off("click").on("click", (function() {
			const t = !!$("#pick_colour").prop("checked") && pu($("#pick_colour_picker").val()),
			n = $("#colour_scheme").data("n");
			yu(t, n), Dn.Le.re(), $("#colour_new_rgb").hasClass("add_clicked") && xu(), null != n && Mu()
		})), Dn.Le.ie()
	}
	
	function yu(t, n) {
		if (null == n) {
			mu($("#colour_new_rgb").data({
				rgb: t || Nt
			}), t)
			} else {
			const o = Mi(),
			e = o[n][0];
			Array.isArray(t) ? o[n] = [e, t[0], t[1], t[2]] : o[n] = [e, -1], mu($("#colour_" + n), t)
		}
	}
	
	function wu(t) {
		Dn.Se.ve;
		if (t);
		else if (!Dn.Se.Tt()) return;
		const n = $("#edit_colours_html"),
		o = n.html(k_.oe("colours_table")),
		e = qo(Mi()),
		i = e.length,
		r = function(t) {
			return 1 === i ? " " + g("legend_db_single") : 0 === t ? " " + g("legend_db_lowest") : t === i - 1 ? " " + g("legend_db_highest") : ""
		};
		for (let t = 0; t < i; t++) {
			const n = ji(t, e),
			i = n.wn,
			c = n.$n ? -1 : n.yn,
			s = $(k_.oe("colour_entry")).appendTo(o);
			mu($(k_.Re("colour_" + t, c)).data("colour", t).appendTo(s).on("click", (function() {
				$u(t)
			})), c), $(k_.Ko(i + "dB" + r(t), "level")).data("colour", t).appendTo(s).on("click", (function() {
			vu(t)
			})), e.length > 1 ? $(k_.$e()).appendTo(s).on("click", (function() {
			ku(t)
			})) : $(k_.te()).appendTo(s)
		}
		$(k_.be(g("colour_add"))).appendTo(n);
		const c = $(k_.oe("colour_entry new_colour_entry")).appendTo(n);
		$(k_.Re("colour_new_rgb")).data("colour", null).appendTo(c).on("click", (function() {
			$u(null)
		}));
		$(k_.oe("new_level", "", '<input id="colour_new_lvl" type="number" autocomplete="off" size="5" min="-200" max="200" step="any" class="textinput" value="" /> dB')).appendTo(c), $(k_.De()).appendTo(c).on("click", (function() {
			xu()
		})),
		function() {
			const t = $("#edit_colours_html"),
			n = ($(k_.be(k_.He(g("title_colours"), "palette_lib"))).appendTo(t), $(k_.oe("field widefield library", "palette_library")).appendTo(t)),
			o = $(k_.oe("inputs", "")).appendTo(n),
			e = $('<select id="palette_lib" name="palette_lib"></select>').appendTo(o);
			$(k_.Oe("palette")).appendTo(o), au(), lu(), e.change((function() {
				const t = $(this).val();
				if (t) {
					const n = JSON.parse(t);
					if (Array.isArray(n) && n.length) {
						const t = qo(n);
						return qs() ? data.compare = t : data.colours = t, void Mu()
					}
				}
				lu()
			}))
		}(), t && Dn.Se.ie()
	}
	
	function xu() {
		const n = $("#colour_new_lvl");
		let o = n.val();
		if (n.Zo("" === o), "" === o) return !1;
		const e = $("#colour_new_rgb");
		let i = e.data("rgb");
		if (e.Zo("" === i), !i) return e.addClass("add_clicked"), $u(), !1;
		e.removeClass("add_clicked"), o = t.round(o, 1), isNaN(o) && (o = 0), o < -200 && (o = -200), o > 200 && (o = 200),
		function(t, n) {
			const o = Mi();
			if (!n) return;
			let e = n === Nt ? [-1] : n;
			if (e.unshift(t), 0 == o.length) o.push(e);
			else
			for (let n = 0; n < o.length; n++) {
				const i = ji(n, o);
				if (t < i.wn) {
					o.unshift(e);
					break
				}
				if (t === i.wn) {
					o[n] = e;
					break
				}
				if (n === o.length - 1) {
					o.push(e);
					break
				}
				if (t > i.wn && t < ji(n + 1, o).wn) {
					o.splice(n + 1, 0, e);
					break
				}
			}
			Mu()
			}(o, i), e.css({
				"background-color": ""
			}).removeData("rgb")
	}
	
	function ku(t) {
		z_(g("alert_delete_entry"), (function() {
			var n;
			n = t, Mi().splice(n, 1), Mu()
		}))
	}
	
	function Mu() {
		Hi(), wu(), cu(), Pi(), Uu(), Hu("r"), yf()
	}
	
	function ju() {
		! function() {
			let t = navigator.userAgent.toLowerCase();
			Iu = t.match(/(iphone|ipod|ipad)/), Iu && $("html").addClass("ios");
			zu = t.match(/mobile/), zu && $("html").addClass("mobile");
			!zu && $("html").hasClass("no-touch") || (kt *= 1.25, Mt *= 1.25)
		}();
		let t = ["js", "flexbox", "canvas", "canvastext", "draganddrop", "rgba", "svg", "inlinesvg", "history", "filereader", "pointerevents"],
		n = !0;
		const o = $("html");
		for (let e = 0; e < t.length; e++) o.hasClass(t[e]) || (n = !1);
		return n || ($("#wrap").append(k_.o("warning", k_.oe("window", "warning_window", g("alert_browser")))), $("#warning").click((function() {
			$(this).fadeOut()
		}))), n
	}
	let Iu = !1,
	zu = !1;
	
	function Au(t, n) {
		if (null == n) return window.localStorage.getItem(t);
		n ? window.localStorage.setItem(t, n) : window.localStorage.removeItem(t)
	}
	
	function Eu(t) {
		const n = "true" == Au(t),
		o = $("#" + t);
		return o.prop("checked", n), o.is(":checked") && o.change(), n
	}
	
	function Nu() {
		$("#wrap").toggleClass("subscriber", n), n && (f = Eu("light_theme"), _ = Eu("multithread"), di()), p = Eu("grid_triangulation"), n && Ls(), $(".sub_visible, #mode, #tools_l").toggle(n), $("#account, #guide_sign_up").toggle(!n), v_($(".sub_enabled"), !n), $("input, select, button", ".sub_enabled").prop("disabled", !n), ce()
	}
	
	function Tu(t, n, o) {
		$.ajax({
			url: "/calculadoras/calc-db-soundpath/users/wp-content/plugins/calc-db-soundpath_user/call.php",
			type: "POST",
			dataType: "json",
			data: t,
			beforeSend: function(t) {
				t.overrideMimeType && t.overrideMimeType("application/json")
			},
			success: function(t) {
				t || Xu(g("alert_server_error"), Ot), "fail" === t.status && Xu(g("alert_server_error") + ":" + t.response, Ot), "success" === t.status && n(t)
			},
			error: function(t) {
				Xu(g("alert_server_error"), Ot)
			},
			complete: function(t) {
				o && o(t), Dn.Pe.Tt() && Dn.Pe.re()
			}
		})
	}
	
	function Lu() {
		$.ajax({
			url: "/calculadoras/calc-db-soundpath/users/wp-content/plugins/calc-db-soundpath_user/json_user_settings.php",
			data: {},
			dataType: "json",
			beforeSend: function(t) {
				t.overrideMimeType && t.overrideMimeType("application/json")
			},
			success: function(t) {
				if (s.ee = !0, t) {
					for (let n in t) t.hasOwnProperty(n) && (s[n] = t[n]);
					s.id && (n = s.level > 0, Nu(), Pi(), Uu(!0), $("#button_login,#button_join").remove(), $('<a href="' + v("/account") + '" id="button_account" class="button text_button">' + g("buttons_account") + '</a><a href="' + s.logout_link + '" id="button_logout" class="button text_button">' + g("buttons_logout") + "</a>").appendTo("#account_buttons"), n && s.palettes > 0 && s.id && n && ae(bt, i, 0, g("user_schemes"), (function() {
						au()
					})), n && s.sources > 0 && Zl(), n && s.bitmaps > 0 && Jl())
				} else;
				setTimeout((function() {
					S_()
				}), 100)
			},
			error: function(t) {
				S_(), Xu(g("alert_server_error"), Ot)
			}
		})
	}
	
	function Su(t, n) {
		const o = '<button data-linkto="' + t + '" class="help">' + svgIcon("help") + "</button>";
		return n ? $(o).click((function() {
			L_($(this).data("linkto"))
		})) : " " + o
	}
	let Ru;
	
	function Du(t, n) {
		Cu(t, n, "position")
	}
	
	function Hu(t, n) {
		Cu(t, n, "updateDetail")
	}
	
	function Ou() {
		Cu("bmp", null, "resetOrder")
	}
	
	function Pu(t, n) {
		Cu(t, n, (function(t) {
			const n = t.data("mode");
			n && n.length > 0 && t.toggleClass("mode_passthrough", -1 === n.indexOf(q))
		}))
	}
	
	function Cu(t, n, o, e) {
		const i = [];
		null != t ? i.push(t) : i.push("r", "rr", "p", "l", "b", "bmp", "a", "gh", "gl", "section", "target", "grid"), i.forEach((function(t) {
			const i = Yo(t);
			if ("set" === i.type)
			for (let t = 0; t < i.items.length; t++) null != n && i[t].n !== n || ("set" === i.items[t].type ? Cu(i.items[t], null, o, e) : i.items[t].selectAll("*").forEach((function(t) {
				"function" == typeof o ? o(t, e) : "function" == typeof t[o] && t[o](e)
			})))
		}))
	}
	
	function Fu(n) {
		let o = [];
		const e = function(t, n) {
			if (n.length) {
				Array.isArray(n) || (n = [n]);
				for (let t = 0; t < n.length; t++) Array.isArray(n[t]) && (n[t] = n[t].join(","));
				o.push(t + "=" + n.join("!"))
			}
		},
		i = function(t) {
			return "c" !== t.type ? A(t.setting) : 0 === t.setting ? A(-1) : A(2)
		},
		r = function(t) {
			return t.setting ? A(-t.merge) : A(t.merge)
		},
		u = function(t) {
			if (t.heights.length > 1) {
				const n = [t.h];
				for (let o = 0; o < t.heights.length; o++) {
					const e = t.heights[o];
					e !== t.h && n.push(e)
				}
				return A(n)
			}
			return A(t.h)
		},
		l = function(t) {
			return A(Co(t.type) ? t.z : t.h)
		},
		a = function(t) {
			return A(t.rc, 2)
		},
		f = function(t) {
			return t.roof ? A([t.roof, t.h, t.h_roof]) : t.slope ? A([t.slope, t.h]) : A(t.h)
		},
		_ = function(t) {
			return [A(t.src), A(t.img_scale, 5), A(t.img_rotate, 3)].join(",")
		},
		d = function(t) {
			return A(t.setting)
		},
		p = function(n) {
			return Oo(n.type) || "grid" === n.type || "section" === n.type ? A(t.linearise(t.arrayZip(n.x, n.y))) : A(n.x) + "," + A(n.y)
		},
		h = function() {
			const t = [];
			for (let n = 0; n < data.views.length; n++) {
				const o = data.views[n];
				t.push([A(o[0]), A(o[1]), A(o[2])])
			}
			return t
		},
		g = function(n, o) {
			let e = [];
			if (!t.arrayMatch(n, o))
			for (let t = 0; t < n.length; t++) {
				const o = n[t];
				4 === o.length ? e.push([o[0], du(o[1], o[2], o[3], !0)]) : e.push(o)
			}
			return e
		},
		b = function() {
			const t = data.section;
			if (!t.x.length) return [];
			const n = [];
			return n.push(p(t)), n.push(A(t.z)), [n]
		},
		m = function(n) {
			if (!n && function(n) {
				const o = n || data.grid;
				return 0 === o.setting && t.arrayMatch(o.x, js) && t.arrayMatch(o.y, Is) && 1.5 === o.h && 0 === o.abs && t.arrayMatch(o.heights, [1.5])
			}()) return [];
			const o = data.grid,
			e = [];
			return 0 === o.setting ? e.push(p(o)) : e.push(o.setting), e.push(u(o)), o.abs && e.push(o.abs), [e]
		},
		v = function(t) {
			const n = [],
			o = data[t];
			for (let e = 0; e < o.length; e++) {
				const o = data.V(t, e, 1);
				if (!o) continue;
				const c = data.V(t, e, 2),
				s = [],
				h = function(t, n) {
					void 0 !== n ? s.push(t + It + n) : s.push(t)
				},
				g = function(t) {
					o.tt(t) ? h(A(o[t]), A(c[t])) : h(A(o[t]))
				},
				b = function() {
					let n;
					n = "c" === o.type ? i(o) : "bmp" === t ? r(o) : d(o), o.tt("setting") ? h(n, c.setting) : h(n)
				},
				m = function() {
					const t = a(o);
					o.tt("rc") ? h(t, a(c)) : h(t)
				},
				v = function(t) {
					h(_u(t, !0))
				},
				$ = function() {
					const t = l(o);
					o.tt("h") ? h(t, l(c)) : h(t)
				},
				y = function() {
					const t = f(o);
					o.tt(["h", "roof", "h_roof", "slope"]) ? h(t, f(c)) : h(t)
				};
				for ("gh" !== t && "gl" !== t && b(), h(p(o)), "r" === t ? h(u(o)) : "b" === t ? y() : "bmp" !== t && $(), "l" === t && g("method"), Po(t) && (g("lvl"), g("hz"), g("adj"), g("adj_type")), "bmp" === t && h(_(o)), "b" === t && m(), "a" === t && 1 !== o.setting && o.rgb && v(o.rgb), o.name && h(A(o.name));
				"-" === s[s.length - 1];) s.pop();
				s.length > 0 && n.push(s)
			}
			return n
		},
		$ = function() {
			let t = 0;
			return ["gh", "gl", "bmp", "a", "b", "l", "p", "rr", "r"].forEach((function(n) {
				t += data[n].length
			})), t
		}();
		for (let t in data) {
			if (!data.hasOwnProperty(t)) continue;
			let o = [];
			switch (t) {
				case "config":
				o = !$ && data.config.Z() ? [] : data.config.J();
				break;
				case "views":
				o = h();
				break;
				case "section":
				o = b();
				break;
				case "grid":
				o = m($);
				break;
				case "a":
				case "b":
				case "bmp":
				case "gh":
				case "gl":
				case "l":
				case "p":
				case "r":
				case "rr":
				n || (o = v(t))
			}
			o.length && e(t, o)
		}
		e("colours", g(data.colours, Ii())), e("compare", g(data.compare, [
			[-10, 0, 77, 64],
			[-5, 30, 136, 229],
			[0, -1],
			[5, 255, 193, 7],
			[10, 216, 27, 96]
		])), $ && e("view", function() {
		const t = [Gn(fo(ot / 2)), Gn(_o(et / 2)), ct];
		return Cs && t.push(Cs), [t]
		}());
		let y = "";
		if (o.length) {
			s.id && "admin" !== s.id ? e("user", s.id) : c.id && e("user", c.id), y = o.join("&");
			y.length;
			y = function(t) {
				const n = LZString.compressToEncodedURIComponent(t);
				if (n.length > 5e4) {
					new LZMA("./js/lzma_worker.js").compress(t, 8, (function(t, o) {
						if (o) return;
						const e = (i = t, String.fromCharCode.apply(null, new Uint8Array(i)));
						var i;
						const r = LZString.compressToEncodedURIComponent(e);
						if (n.length < r.length) return;
						let c = "lzma=" + r;
						c = qu(c), Bu(c, !0)
					}))
				}
				return n
			}(y)
		}
		return y = qu(y), y
	}
	
	function qu(t) {
		const n = h + "";
		return "en" !== n && (t = t && -1 === t.indexOf("=") ? n + "_" + t : "lang=" + n + (t ? "&" + t : "")), t
	}
	
	function Uu(t) {
		Bu(Fu(), t), Fa()
	}
	
	function Bu(t, n) {
		t.length > 0 && "?" !== t.substr(0, 1) && (t = "?" + t);
		const o = window.location;
		if (t !== o.search) {
			const e = o.protocol + "//" + o.host + o.pathname + t;
			n ? history.replaceState(null, null, e) : history.pushState(null, null, e), $("#button_login, .login_href").prop({
				href: w()
			})
		}
	}
	
	function Zu(t) {
		const n = function(t) {
			return LZString.decompressFromEncodedURIComponent(t)
		};
		if (!t.length) return t;
		if (-1 === t.indexOf("=")) return function(t) {
			const o = t.split("_");
			return o.length > 1 ? "lang=" + o[0] + "&" + n(o[1]) : n(t)
		}(t);
		const o = "lzma=";
		if (t.indexOf(o) > -1) {
			const e = new LZMA("./js/lzma_worker.js"),
			i = t.split(o),
			r = function(t) {
				let n = new Uint8Array(t.length);
				for (let o = 0; o < t.length; o++) n[o] = t.charCodeAt(o);
				return new Int8Array(n.buffer)
			}(n(i[1]));
			return e.decompress(r, (function(t, n) {
				Gu(!1, "?" + i[0] + t), Za()
			})), ""
		}
		if (t.indexOf("lz=") > -1) {
			const o = t.split("lz=");
			return o[0] + n(o[1])
		}
		return t
	}
	
	function Ju(t) {
		const n = t.substr(0, 1);
		return "[" === n || '"' === n || "'" === n
	}
	
	function Wu(n) {
		if (!("string" == typeof n || n instanceof String)) return n;
		if ("-" === n || "" === n) return null;
		if ("()" === n) return [];
		if (Ju(n)) return n.substr(1, n.length - 2);
		if ("(" === n.substr(0, 1)) {
			let t = n.substr(1, n.length - 2).split(",");
			for (let n = 0; n < t.length; n++) t[n] = Wu(t[n]);
			return t
		}
		return t.toNumber(n)
	}
	
	function Yu(t, n) {
		if (!Array.isArray(t)) return t;
		let o = [];
		const e = n ? 1 : 0;
		for (let n = 0; n < t.length / 2; n++) o.push(t[2 * n + e]);
		return o
	}
/*  PROGRAMADOR: O QUE ISSO FAZ?	
	function Gu(t, n) {
		N(), zs();
		const o = function(t) {
			return "string" == typeof t && t.indexOf(It) > -1 && (t = t.split(It)[0]), t < 0 || 2 == t
		},
		e = function(t) {
			if ("string" == typeof t && t.indexOf(It) > -1) {
				const n = t.split(It);
				return e(n[0]) + It + n[1]
			}
			return o(t) ? -1 == t ? 0 : 1 : t
		};
		let i, r = {},
		s = !1;
		if (n) {
			let t = n.split("?");
			if (t.length < 2) return !1;
			i = t[1]
		} else i = window.location.search.substr(1);
		if (i = Zu(i), i.length) {
			const n = function(t) {
				const n = function(t, n, o, e) {
					o || (o = n);
					const i = function(t) {
						if (!(t.substr(0, 1) === n || e && t.indexOf(It + n) > 0)) return !1;
						return !(t.substr(-1) === o || e && t.indexOf(o + It) > 0 && -1 === t.indexOf(o + It + n))
					};
					for (let n = 0; n < t.length; n++)
					for (; n < t.length - 1 && i(t[n]);) t.splice(n, 2, t[n] + "," + t[n + 1]);
					return t
				};
				return t = n(t, "(", ")", !0), t = n(t, "[", "]"), t = n(t, '"'), t = n(t, "'")
			};
			i = decodeURIComponent(i.replace(/\+/g, " "));
			let l = i.split("&");
			for (let t = 0; t < l.length; t++) {
				if (null == l[t]) continue;
				let o = l[t].split("="),
				e = o[0],
				i = o[1];
				if (!i) continue;
				null == i && (i = null);
				let c = i.split("!");
				for (let t = 0; t < c.length; t++) {
					const o = c[t].split(",");
					let i = [];
					const s = [],
					u = n(o);
					for (let t = 0; t < u.length; t++) {
						const n = u[t];
						if (n.indexOf(It) > -1) {
							const o = n.split(It);
							i[t] = Wu(o[0]), s[t] = Wu(o[1])
						} else i[t] = Wu(n)
					}
					"colours" !== e && "compare" !== e || 2 !== i.length || -1 === i[1] || (i = [i[0]].concat(pu(i[1]))), "a" !== e || null == i[3] || Ju(o[3]) || (i[3] = pu(i[3])), r[e] || (r[e] = []), r[e].push({
						Ce: i,
						u: s
					})
				}
			}
			for (let t in r) {
				const n = r[t];
				if ("lang" === t);
				else if ("config" === t) data.config.Y(n[0].Ce, n[0].u);
				else if ("conf" === t) data.config.G(n[0].Ce);
				else if ("view" === t) {
					const t = n[0].Ce;
					al(t[2]), ma(t[0], t[1]), null != t[3] && (Cs = t[3]), s = !0
					} else if ("user" === t) {
					const t = n[0].Ce;
					if (t && Array.isArray(t)) {
						const n = t[0];
						u = n, $.ajax({
							url: "/users/wp-content/plugins/calc-db-soundpath_user/json_user_public.php",
							data: {
								ref: u
							},
							dataType: "json",
							beforeSend: function(t) {
								t.overrideMimeType && t.overrideMimeType("application/json")
							},
							success: function(t) {
								if (t)
								for (let n in t) t.hasOwnProperty(n) && (c[n] = t[n]);
								Pi(), Uu(!0)
							},
							error: function(t) {}
						})
					}
					} else if ("colours" === t || "compare" === t) {
					const o = [];
					for (let t = 0; t < n.length; t++) o.push(n[t].Ce);
					data[t] = o
				} else
				for (let i = 0; i < n.length; i++) {
					const r = n[i].Ce,
					c = n[i].u;
					if ("l" === t) {
						const t = "number" == typeof r[6];
						Dc(!0, null, {
							setting: r[0],
							x: Yu(r[1]),
							y: Yu(r[1], !0),
							h: r[2],
							method: r[3],
							lvl: r[4],
							hz: r[5],
							adj: t ? r[6] : 0,
							adj_type: t ? r[7] : 0,
							name: t ? r[8] : r[6]
							}, {
							setting: c[0],
							h: c[2],
							method: c[3],
							lvl: c[4],
							hz: c[5],
							adj: c[6],
							adj_type: c[7]
						})
					}
					if ("b" === t) {
						const t = o(r[0]),
						n = function(n) {
							const o = n.h;
							if (null == o) return n;
							let e = 0,
							i = 0,
							r = null;
							return Array.isArray(o) && (t ? e = o[0] : i = o[0], e && (r = o[2]), n.h = o[1]), n.roof = e, n.h_roof = r, n.slope = i, n
						};
						Cc(!0, null, t, n({
							setting: e(r[0]),
							x: Yu(r[1]),
							y: Yu(r[1], !0),
							h: r[2],
							rc: r[3],
							name: r[4]
							}), n({
							setting: c[0],
							h: c[2],
							rc: c[3]
						}))
					}
					if ("a" === t) {
						const t = Array.isArray(r[3]);
						Oc(!0, null, {
							setting: r[0],
							x: Yu(r[1]),
							y: Yu(r[1], !0),
							h: r[2],
							rgb: !!t && r[3],
							name: t ? r[4] : r[3]
						})
					}
					if ("p" === t) {
						const t = "number" == typeof r[6];
						zc(!0, null, {
							setting: r[0],
							x: r[1],
							y: r[2],
							h: r[3],
							lvl: r[4],
							hz: r[5],
							adj: t ? r[6] : 0,
							adj_type: t ? r[7] : 0,
							name: t ? r[8] : r[6]
							}, {
							setting: c[0],
							h: c[3],
							lvl: c[4],
							hz: c[5],
							adj: c[6],
							adj_type: c[7]
						})
					}
					if ("r" === t && Ec(!0, null, {
						setting: r[0],
						x: r[1],
						y: r[2],
						h: r[3],
						name: r[4]
						}), "rr" === t && Sc(!0, null, {
						setting: r[0],
						x: r[1],
						y: r[2],
						h: r[3]
						}), "gh" === t && ws(!0, null, {
						x: r[0],
						y: r[1],
						z: r[2]
						}), "gl" === t && ks(!0, null, {
						x: Yu(r[0]),
						y: Yu(r[0], !0),
						z: r[1]
					}), "bmp" === t) {
					Gc(0, null, {
						setting: r[0] < 0 ? 1 : 0,
						merge: Math.abs(r[0]),
						x: r[1],
						y: r[2],
						src: r[3],
						img_scale: r[4],
						img_rotate: r[5]
					})
					}
					if ("grid" === t) {
						const t = {};
						Array.isArray(r[0]) ? (t.setting = 0, t.x = Yu(r[0]), t.y = Yu(r[0], !0)) : t.setting = r[0], t.h = r[1], t.abs = r[2], As(0, t)
					}
					"section" === t && Ka(!0, {
						x: Yu(r[0]),
						y: Yu(r[0], !0),
						z: r[1]
					}), "views" === t && Rs(r[0], r[1], r[2])
				}
			}
			ce(), t && Xu(g("alert_model_loaded"), Pt, "model", 1)
		} else te(), fa(), ce();
		var u;
		s || fa()
	}
	*/
	function Xu(t, n, o, e = 5) {
		n || (n = Ct);
		const i = $("#message_" + o),
		r = $(k_.he(t, "message " + n, o ? "message_" + o : "")),
		c = function() {
			setTimeout((function() {
				Vu(r)
			}), 1e3 * e)
		};
		i.length ? (i.replaceWith(r), c()) : r.appendTo("#message").hide().fadeIn(500, c()).click((function() {
			Vu(r, 300)
		}))
	}
	
	function Vu(t, n = 1e3) {
		if (!t) return;
		const o = "object" == typeof t ? t : $("#message_" + t);
		return o.length ? n ? o.fadeOut(n, (function() {
			o.remove()
		})) : (o.remove(), !0) : void 0
	}
	
	function Qu(t) {
		const n = $t[t];
		n && (n.clear(), n.remove(), $t[t] = null)
	}
	
	function Ku(n, o, e, i, r, c) {
		3 === C || 6 === C ? function(t, n, o, e, i, r) {
			$t.box || function(t, n, o, e, i) {
				$t.box || ($t.box = 1 === t ? S.Fe.g() : S.Xo.g(), $t.box.addClass("passthrough"));
				const r = nl(!0),
				c = nl(),
				s = ol(!0),
				u = ol(),
				l = $t.box.path(Bt).zn(c, .5).Ln(r, 1, .5).Cn("2 2").attr({
					"fill-rule": "evenodd"
				}),
				a = $t.box.circle(0, 0, 3).attr(u),
				f = $t.box.circle(0, 0, 3).attr(u),
				_ = $t.box.Vo().attr(s),
				d = $t.box.Vo().attr(s).attr({
					"text-anchor": "start"
				});
				$t.box.Zn = function(t, n, o, e, i) {
					n = Jn(n), e = Jn(e), o = Jn(o), i = Jn(i);
					const r = Math.abs(n - e),
					c = Math.abs(o - i),
					s = Math.max(n, e),
					u = Math.max(o, i),
					p = lc(n, o, e, i, !0),
					h = lc(ot, et, 0, 0, !0) + p;
					l.co(h), a.transform(xo(n, o)), f.transform(xo(e, i));
					let g = "",
					b = "",
					m = "t0,0",
					v = "t0,0";
					Math.abs(r) > 20 && Math.abs(c) > 20 && (g = To(Math.abs(r) / ct), b = To(Math.abs(c) / ct), m = xo(s - r / 2, u + 10), v = xo(s + 5, u - c / 2)), _.attr({
						text: g
						}).transform(m), d.attr({
						text: b
					}).transform(v)
				}
			}(t);
			$t.box.Zn(t, n, o, e, i)
			}(n, o, e, i, r) : function(n, o, e, i, r, c) {
			$t.ruler || function(n) {
				$t.ruler || ($t.ruler = 1 === n ? S.Fe.g() : S.Xo.g(), $t.ruler.addClass("passthrough"), 1 !== n && 4 === C && "b" === F && ($t.start = S.xe.g()));
				$t.qe = !1;
				const o = nl(!0),
				e = nl(),
				i = ol(!0),
				r = ol();
				let c;
				const s = Mr || 4 === C;
				c = s ? $t.ruler.path(Bt).zn(e).Ln(e, 3).Fn(.25) : $t.ruler.rect(0, 0, ot, et).zn(e, .25).Ln(Ft);
				const u = $t.ruler.path(Bt).Ln(o, 1, 1).Cn("2 2"),
				l = $t.ruler.path(Bt).attr(i).Ln(o, .5, 1).Cn("1 2").zn(Ft),
				a = $t.ruler.circle(0, 0, 2.5).attr(r),
				f = $t.ruler.circle(0, 0, 2.5).attr(r),
				_ = $t.ruler.Vo().attr(i),
				d = $t.ruler.Vo().attr(i).attr({
					"text-anchor": "start"
				}),
				p = $t.ruler.Vo(0, 0, "", 11).attr(i);
				if ($t.ruler.addClass("no_export"), $t.start) {
					$t.start.circle(0, 0, 2 * kt).zn(nl(!0), .333).Ln(Ft).addClass("close_path").hover((function() {
						$t.qe = !0
						}), (function() {
						$t.qe = !1
						})).touchstart((function() {
						$t.qe = !0
					}))
				}
				$t.ruler.Zn = function(n, o, e, i, r, h) {
					const g = 1 === n ? st : ct;
					o = Jn(o), i = Jn(i), e = Jn(e), r = Jn(r);
					if (Mr && Mr.V.data("is_rotate")) {
						const t = Mr.Bn,
						n = null != t.Uo ? po(t.Uo) : t.Wn.x,
						o = null != t.Bo ? ho(t.Bo) : t.Wn.y,
						e = i + Mr.ox - n,
						s = r + Mr.oy - o,
						a = null != t.Uo ? Mr.x : $t.x,
						f = null != t.Bo ? Mr.y : $t.y,
						_ = Math.hypot(a - n, f - o) / 2;
						let d = Math.atan(-s / e);
						h && (d = Zr(d)), e < 0 && (d -= Math.PI);
						const g = s < 0 ? 0 : 1,
						b = gc(n, o, 0, d, _, 0, g, !0);
						u.co(b);
						const m = gc(n, o, 0, d, _, 0, g, !1);
						l.co(m);
						const v = gc(n, o, 0, d, _, 0, g);
						c.co(v), d < -Math.PI && (d += 2 * Math.PI);
						let $ = xo(n + Math.cos(d / 2) * _ / 2, o - Math.sin(d / 2) * _ / 2);
						return void p.attr({
							text: oo(d / (Math.PI / 180), 1) + "°"
						}).transform($)
					}
					if (Mr && Mr.V.data("is_scale")) return;
					if ($t.start)
					if ($t.clicks.length > 2) {
						let t = xo($t.clicks[0].x, $t.clicks[0].y);
						$t.start.transform(t).Fn(1), $t.qe && (i = $t.clicks[0].x, r = $t.clicks[0].y)
					} else $t.start.transform(Zt).Fn(0);
					let b = o - i,
					m = e - r,
					v = xo(o, e);
					if (a.transform(v).Fn(1), 0 === b && 0 === m) return;
					if (h)
					if ($t.clicks.length > 1) {
						let n = $t.clicks[$t.clicks.length - 2],
						o = $t.clicks[$t.clicks.length - 1],
						e = t.orthoPoint([n.x, n.y, o.x, o.y], [i, r]);
						i -= e[0] - o.x, r -= e[1] - o.y
					} else Mr || (Math.abs(b) >= Math.abs(m) ? (r = e, m = 0) : (i = o, b = 0));
					let $ = Math.hypot(b, m),
					y = Math.atan(m / b) / (Math.PI / 180),
					w = m / $ * 10,
					x = b / $ * 10;
					y < 0 && (w = -w, x = -x);
					const k = "r" + y;
					v = xo(b / 2 + i + w, m / 2 + r - x);
					const M = uc(o, e, i, r, !0);
					f.transform(xo(i, r)), u.co(M);
					const j = To($ / g);
					p.attr({
						text: j
					}).transform(v + k);
					let I = Bt,
					z = "",
					A = "",
					E = "t0,0",
					N = "t0,0";
					Math.abs(b) > 20 && Math.abs(m) > 20 && (I = sc(Mo([
						[o, e],
						[i, e],
						[i, r]
					])), z = To(Math.abs(b) / g), A = To(Math.abs(m) / g), E = xo(b / 2 + i, e + 10), N = xo(i + 5, m / 2 + r)), l.co(I), s && c.co(I), _.attr({
					text: z
					}).transform(E), d.attr({
					text: A
					}).transform(N)
				}
			}(n);
			$t.ruler.Zn(n, o, e, i, r, c)
		}(n, o, e, i, r, c)
	}
	
	function tl() {
		Qu("ruler"), Qu("start"), Qu("box")
	}
	
	function nl(t) {
		return t ? f ? At : Et : f ? Et : At
	}
	
	function ol(t) {
		const n = nl(!0),
		o = nl();
		return t ? {
			fill: n,
			stroke: o,
			"stroke-width": 2,
			"stroke-opacity": .5,
			"paint-order": "stroke"
			} : {
			fill: n,
			stroke: o,
			"stroke-width": 1
		}
	}
	
	function el(t) {
		! function(t) {
			const n = Ho(t),
			o = ["r", "rr", "p", "l", "b", "bmp", "a", "gh", "gl"];
			let e = [];
			if (null != n) {
				if (-1 === o.indexOf(n)) return !1;
				e.push(n)
			} else e = o;
			e.forEach((function(t) {
				Yo(t).remove().clear()
			})), n && "b" !== n || (yt.ut = [])
		}(t);
		const n = Ho(t),
		o = function(t) {
			return !n || n === t
		};
		if (Z()) {
			if (o("gh"))
			if (data.gh.length <= 500)
			for (let t = 0; t < data.gh.length; t++) xs(t);
			else il("gh");
			if (o("gl"))
			for (let t = 0; t < data.gl.length; t++) Ms(t)
		}
		if (o("bmp"))
		for (let t = 0; t < data.bmp.length; t++) Kc(t);
		if (o("a"))
		if (data.a.length <= 1e3)
		for (let t = 0; t < data.a.length; t++) Pc(t);
		else il("a");
		if (o("b"))
		if (data.b.length <= 1e3)
		for (let t = 0; t < data.b.length; t++) Zc(t);
		else il("b");
		if (o("l"))
		for (let t = 0; t < data.l.length; t++) Hc(t);
		if (o("p"))
		for (let t = 0; t < data.p.length; t++) Ac(t);
		if (o("rr"))
		for (let t = 0; t < data.rr.length; t++) Rc(t);
		if (o("r"))
		for (let t = 0; t < data.r.length; t++) Lc(t)
	}
	
	function il(t) {
		const n = Uo(t),
		o = S.Gn.g();
		let e, i;
		"a" === t && (e = o.path(Bt).attr(Mn).Ln(Et).Cn("9 9"), i = o.path(Bt).attr(Mn).Cn("9 9", "9")), "b" === t && (e = o.path(Bt).attr(yn)), "gh" === t && (e = o.path(Bt).attr(yn)), e.position = function() {}, e.updateDetail = function(o) {
			let r = "";
			for (let o = 0; o < n.length; o++) {
				const e = n[o];
				if ("gh" == t && (r += (c = po(e.x), s = ho(e.y), "M" + c + " " + s + "l-2.5 -2.5l0 -3l5 0l0 3l-2.5 2.5Z")), "a" == t || "b" == t)
				for (let t = 0; t < e.x.length - 1; t++) {
					r += 0 === t ? "M" : "L", r += po(e.x[t]) + " " + ho(e.y[t]) + "L" + po(e.x[t + 1]) + " " + ho(e.y[t + 1]), "c" === e.type && t + 1 === e.x.length - 1 && (r += "Z")
				}
			}
			var c, s;
			e.co(r), i && i.co(r), e.eo(), i && i.eo()
		}, Go(t, 0, [o]), Xu(g("alert_fixed_objects", Zo(t)), Ht)
	}
	
	function rl(t) {
		P = null != t ? t : !P, $("#play").dt(!0 === P), $("#wrap").toggleClass("calcOn", P), Au("calc_off", !P), 0 !== data.config.grid_type.N() && (P ? Qe() : Ke("left"))
	}
	
	function cl() {
		we(), di(), Au("multithread", _)
	}
	
	function sl(n, o, e) {
		null == o && (o = ot / 2), null == e && (e = et / 2);
		const i = fo(o),
		r = _o(e);
		if (!al(n)) return !1;
		return ll(-t.round(i * ct - o, 5), -t.round(r * ct - e, 5)), Ia(), !0
	}
	let ul = !1;
	
	function ll(t, n) {
		return (isNaN(t) || null == t) && (t = 0), (isNaN(n) || null == n) && (n = 0), (it.x !== t || it.y !== n) && (it = {
			x: t,
			y: n
		}, !0)
	}
	
	function al(n, o = !0) {
		const e = t.toNumber(n);
		let i;
		for (n = e > 0 ? e : 8, i = 0; i < rt.length - 1; i++) {
			if (n > (o ? (rt[i] + rt[i + 1]) / 2 : rt[i])) break
		}
		return n = rt[i], ct !== n && (yt.ot.rt.it = [], ut = Math.pow(2, i), ct = n, !0)
	}
	
	function fl(t, n) {
		if (Z()) return ""; {
			const o = data.config.show_names.N();
			if ("a" === t) {
				if (1 === o || 2 === o) return gl(t, n, -3)
				} else {
				if (1 === o) return gl(t, n, 2);
				if (2 === o) return gl(t, n, -3);
				if (3 === o) return gl(t, n, -4)
			}
		}
		return ""
	}
	
	function _l(t, n) {
		const o = Uo(t);
		if (!o) return "";
		let e = Jo(t);
		if (null == n || "bmp" === Ho(t) || Co(t)) return e;
		let i = 1;
		for (let e = 0; e < n; e++) o[e].type === t && i++;
		return i > 1 && (e += "-" + i), e
	}
	
	function dl(t) {
		if ("grid" === t || "section" === t || "views" === t) return;
		const n = Ho(t),
		o = data[n];
		for (let t = 0; t < o.length; t++) o[t].index = t
	}
	
	function pl(t) {
		if ("grid" === t || "section" === t || "views" === t) return;
		const n = Ho(t),
		o = data[n];
		for (let t = 0; t < o.length; t++) {
			const n = o[t];
			n.K = _l(n.type, t)
		}
	}
	const hl = function(t, n) {
		return t + "→" + n
	};
	
	function gl(t, n, o = 0) {
		const e = Bo(t, n);
		if (!e) return "";
		const i = qs();
		let r, c;
		i && (r = Bo(t, n, 1), c = Bo(t, n, 2));
		const s = function(t) {
			return t < 0 ? g("prop_invalid") : Jt[t]
		};
		let u = "";
		switch (o) {
			case -4:
			break;
			case -3:
			case -2:
			e.name && (u = e.name);
			break;
			case -1:
			u = e.K;
			break;
			case 0:
			case 1:
			case 2:
			u = e.name ? e.name : e.K
		}
		const l = [];
		2 !== o && -4 !== o || l.push(function() {
			if (qs() && e.tt("h")) {
				const t = rc(r, !1, !0, !0),
				n = rc(c, !1, !0, !0);
				return hl(t, n)
			}
			return rc(e, !1, !0, !0)
		}());
		return "bmp" !== t && "map" !== t && (-2 === o || o > 0) && "r" !== t && "a" !== t && (i && r.setting !== c.setting ? l.push(hl(s(r.setting), s(c.setting))) : xc(e) || l.push(s(e.setting))), l.length > 0 && (u ? u += " [" + l.join(" - ") + "]" : u = l.join(" - ")), u
	}
	
	function bl(t, n, o) {
		if (!n) return -1;
		const e = Uo(t);
		if (e)
		for (let t = 0; t < e.length; t++)
		if (t !== o && (e[t].name === n || !e[t].name && e[t].K === n)) return t;
		return -1
	}
	
	function ml(t, n, o) {
		if (!t) return "";
		let e = 1;
		for (; bl(n, t, o) > -1;) t = t.replace(/([^-]+)-[0-9]+$/, "$1"), e++, t += "-" + e;
		return t
	}
	
	function vl(t) {
		let n = gl(t.type, t.n);
		"l" === t.type && (n += " [part]");
		const o = t.reflection;
		if (null != o) {
			let t = "";
			for (let n = 0; n < o.length; n++) {
				n > 0 && (t += " and ");
				const e = o[n];
				t += gl(data.b[e].type, e)
			}
			n += " (reflected by " + t + ")"
		}
		return n
	}
	
	function $l(t, n) {
		let o = "";
		const e = function(t, n, o) {
			return '<span title="' + n + '" ' + (o && o !== At ? 'style="color:' + o + '"' : "") + ">" + t + "</span>"
		},
		i = t.reflection ? t.reflection : [];
		if (i.length > 0) {
			let t = 0;
			for (; t < i.length;) o += e(svgIcon("reflect"), g("ray_label_reflected")), t++
		}
		if (!n) return o;
		let r;
		for (let t = 0; t < n.xyz.length; t++)
		if (n.xyz[t][3] > 0) {
			r = !0;
			break
		} const c = fr(n.is_vertical, n.is_limited, r),
		s = function(t, n, o) {
			let e = [g("ray_label_intersected")];
			return o && e.push(g("ray_label_no_shadow")), t && e.push(g("ray_label_is_vertical")), n && e.push(g("ray_label_is_limited")), e.join(zt)
		}(n.is_vertical, n.is_limited, r);
		return n.xyz.length - i.length - 2 > 0 && (o += e(svgIcon("barrier"), s, c)), o
	}
	
	function yl(t, n, o) {
		if (Oo(t) && function(t, n) {
			return !(t.length < 2) && (t[0] === t[1] && n[0] === n[1])
		}(n, o)) return !1;
		if ("p" === t) zc(!1, null, {
			setting: 1,
			x: Zn(n),
			y: Zn(o)
		});
		else if ("l" === t) Dc(!1, null, {
			setting: 1,
			x: Zn(n),
			y: Zn(o)
		});
		else if ("a" === t) Oc(!1, null, {
			x: Zn(n),
			y: Zn(o)
		});
		else if ("b" === t) Cc(!1, null, !1, {
			setting: 1,
			x: Zn(n),
			y: Zn(o)
		});
		else if ("c" === t) Cc(!1, null, !0, {
			setting: 2,
			x: Zn([n[0], n[0], n[1], n[1]]),
			y: Zn([o[0], o[0], o[1], o[1]])
		});
		else if ("r" === t) Ec(!1, null, {
			x: Zn(n),
			y: Zn(o)
		});
		else if ("rr" === t) Sc(!1, null, {
			x: Zn(n),
			y: Zn(o)
		});
		else if ("gh" === t) {
			if (!ws(!1, null, {
				x: Zn(n),
				y: Zn(o)
			})) return !1
			} else {
			if ("gl" !== t) return "bmp" === t || "section" === t;
			if (!ks(!1, null, {
				x: Zn(n),
				y: Zn(o)
			})) return !1
		}
		return xe(t, -1), !0
	}
	
	function wl(t, n) {
		"b" === t && (! function(t) {
			const n = data.b[t];
			if (!n) return !1;
			const o = "c",
			e = {
				h: jc(o, null, "h", n.h),
				rc: jc(o, null, "rc", n.rc)
			};
			Array.isArray(e.rc) && (e.rc = e.rc[0]), n.type = o, data._put(o, t, e, 0), pl(o)
		}(n), el(t), xe(t, n))
	}
	
	function xl(t) {
		if (Ke(), t) {
			const n = Ho(t);
			for (let o = 0; o < data[n].length; o++) data[n][o].type === t && (Pl(t, o), o--);
			dl(t), pl(t)
		} else if (!1 === t) N(), zs(), ce();
		else {
			["p", "l", "a", "b", "r", "rr", "gh", "gl", "bmp"].forEach((function(t) {
				data[t] = []
			}))
		}
		el(), fa(), !1 === t && Us() && Ks(!0), xe(), ba(!0), Uu()
	}
	
	function kl(t) {
		let n = "./";
		!0 === t && (n = window.location.href), null === t && (n = window.location.href.split("?")[0] + "?" + Fu(!0));
		window.open(n) || Xu(g("alert_new_window_fail"), Ot)
	}
	
	function Ml(t, n) {
		const o = $(k_.Ue("table"));
		return function() {
			const n = $(k_.Ue("thead")),
			o = $(k_.Ue("tr", "", "titles")).appendTo(n);
			for (let n = 0; n < t.length; n++) {
				const e = t[n],
				i = $(k_.Ue("th")).appendTo(o);
				e.L && i.html(e.L), e.we && "function" != typeof e.we && i.addClass(e.we)
			}
			return n
		}().appendTo(o),
		function() {
			const o = function(t = "") {
				const n = "string" == typeof t,
				o = "number" == typeof t,
				e = $(k_.Ue("td"));
				return o ? $(k_.oe("value")).text(t).appendTo(e) : n ? $(k_.oe("string")).html(t).appendTo(e) : $(t).appendTo(e), e
			},
			e = $(k_.Ue("tbody"));
			for (let i = 0; i < n.length; i++) {
				const r = n[i],
				c = $(k_.Ue("tr")).appendTo(e);
				for (let n = 0; n < t.length; n++) {
					const e = t[n],
					i = o(e.ye(r)).appendTo(c);
					if (e.we) {
						const t = "function" == typeof e.we ? e.we(r) : e.we;
						i.addClass(t)
					}
				}
			}
			return e
		}().appendTo(o), o
	}
	
	function jl(t, n, o) {
		return $(k_.Be()).click((function() {
			Cl(t, n), o && Ua()
			})).hover((function() {
			Sr(1, t, n)
			}), (function() {
			Sr(0, t, n)
		}))
	}
	
	function Il(t, n) {
		const o = Wo(t, n, {
			w: 32
		});
		if ("config" === t) return $(k_.te(o + g("config_title"), "psuedo_button object_ref"));
		const e = gl(t, n, 0),
		i = $(k_.Ko(o + e, "button text_button icon_button clear_button object_ref"));
		return i.click((function() {
			Nl(t, n), Dn.Lt.re(), Dn.St.re()
		})), i
	}
	
	function zl(t) {
		Al(t), Dn.Lt.ie()
	}
	
	function Al(t) {
		const o = $("#editor_table");
		o.empty(),
		function(t) {
			const n = $("#editor_selector"),
			o = t || $("select", n).val();
			n.empty();
			const e = $("<select></select>").appendTo(n).change((function() {
				Al()
			})),
			i = ["p", "l", "b", "c", "r", "rr", "a", "gh", "gl", "bmp", "map"];
			let r = 0;
			for (let t = 0; t < i.length; t++) {
				const n = i[t];
				let o = Uo(n),
				c = 0;
				r += o.length;
				for (let t = 0; t < o.length; t++) o[t].type === n && c++;
				c && $('<option value="' + n + '"' + (0 === c ? " disabled" : "") + ">" + Zo(n) + " (" + c + ")</option>").appendTo(e)
			}
			let c = g("objects");
			o && $("option[value=" + o + "]", e).length && (e.val(o), c = Zo(o));
			if (!r) return $(k_.de(k_.pe(g("editor_empty")))).appendTo(n), e.hide(), void $("#button_clear").hide();
			$("#button_clear").show(), $(k_.me("editor_copy")).appendTo(n).click((function() {
				Rl($("#editor_table"), c)
			}))
		}(t);
		const e = $("select", "#editor_selector").val();
		if (!e) return;
		const i = vi(e, 0),
		r = [];
		for (let t = 0; t < i.length; t++) {
			const n = i[t][2],
			o = i[t][1],
			e = (i[t][0], Bo(n, o));
			e.type === n && r.push(e)
		}
		const c = function(t, n, o) {
			return t || (t = svgIcon("dot", {
				w: 18
				})), $(k_.Ko(t, "button")).click((function() {
				! function(t, n) {
					const o = function(o) {
						El(t, n, o), Dn.Ze.re()
					},
					e = function(t, n, e) {
						A_(t);
						const i = function(t) {
							return e ? !0 === e ? 0 === t ? "off_button" : "on_button" : e : ""
						};
						for (let t = 0; t < n.length; t++) E_(n[t], (function() {
							o(t)
						}), i(t))
					},
					i = function() {
						const t = [];
						for (let n = 0; n < 4; n++) t.push(svgIcon("roof" + n, {
							vw: 36,
							w: 32
						}));
						e(Do("roof"), t)
					},
					r = function() {
						e(Do("slope"), Qo(Qt, Kt))
					},
					c = function() {
						e(Do("spectrum"), Qo(Vt, Xt))
					},
					s = function(t, n) {
						return k_.Je(k_.We(k_.He('<input type="radio" id="set_all_what0" name="set_all_what" value="" checked /> ' + g("editor_apply_to_all"), "set_all_what0")) + k_.We(k_.He(k_.te('<input type="radio" id="set_all_what1" name="set_all_what" value="" /> ' + g("editor_find") + ":"), "set_all_what1") + t) + k_.We(k_.He(k_.te(g("editor_set_to") + ":"), "set_all_to") + n, "set_to"), "set_all")
					},
					u = function() {
						const n = Gl(t);
						_(g("prop_lw_library"), n)
					},
					l = function() {
						const t = Xl();
						_(Do("merge"), t)
					},
					a = function() {
						const o = function(o) {
							let e = $("#" + o).val();
							return 0 === e.indexOf("[") && (e = JSON.parse(e)), qr(t, e, n, null)
						},
						e = o("set_all_to"),
						i = $("#set_all_what1").is(":checked") ? o("set_all_from") : null;
						El(t, n, e, i), Dn.Pe.re()
					},
					f = function() {
						const t = $("#set_all_what0").is(":checked");
						v_("set_all_from", t);
						const n = !!t || $("#set_all_from").val(),
						o = $("#set_all_to").val();
						v_("confirm_yes", "" == n || "" == o)
					},
					_ = function(t, n) {
						return p(t, n)
					},
					d = function(t) {
						return p(t, "")
					},
					p = function(t, n) {
						const o = function(t) {
							return n ? '<select id="' + t + '" class="selectinput">' + n + "</select>" : k_.Ye(t, 5)
						},
						e = o("set_all_from"),
						i = o("set_all_to");
						I_(t, s(e, i), g("buttons_apply"), a, g("buttons_cancel")), $(".set_all input").on("change keyup", (function() {
							f()
						})), f(), $("#set_all_to").focus()
					};
					switch (n) {
						case "setting": {
							let n = Qo(Wt, Jt);
							"r" === t && (n = Qo(sn, cn)), "rr" === t && (n = un), "a" === t && (n = Qo(Gt, Yt)), "bmp" !== t && "map" !== t || (n = Qo(_n, fn)), e(Ro(t), n, "r" !== t && "a" !== t || "")
						}
						return;
						case "h":
						case "z":
						return d(Do("h"));
						case "h_option":
						return e(Do("h_option"), ln);
						case "h_roof":
						return d(Do("h_roof"));
						case "roof":
						return i();
						case "slope":
						return r();
						case "rc":
						return d(Do("rc"));
						case "spectrum":
						return c();
						case "method":
						return e(Do("method"), on);
						case "hz":
						return d(Do("hz"));
						case "lvl":
						return d(Do("lvl"));
						case "lw":
						return u();
						case "adj_type":
						return e(Do("adj"), an, !0);
						case "adj":
						return d(Do("adj"));
						case "merge":
						l()
					}
				}(n, o)
			}))
		},
		s = function(t) {
			const n = Ko(t.setting, t.type);
			return $(k_.Ko(n, "button clear_button")).click((function() {
				data._put(t.type, t.index, {
					setting: t.setting ? 0 : 1
				}), xe(t.type, t.index), Uu()
			}))
		},
		u = function(t, n) {
			return t.tt(n) ? "state_change" : ""
		},
		l = function(t) {
			const n = Array.isArray(t.lvl);
			return Xo(Vt, Xt, n ? 1 : 0)
		},
		a = function(t) {
			const n = t.setting;
			return Xo(sn, cn, n ? 1 : 0)
		},
		f = function(t) {
			const n = t.roof;
			return Xo(tn, nn, n)
		},
		_ = function(t) {
			const n = t.slope;
			return Xo(Qt, Kt, n)
		},
		d = [],
		p = function(t, n, o) {
			d.push({
				L: t,
				ye: n,
				we: o
			})
		};
		if (p(g("prop_object"), (function(t) {
			return Il(t.type, t.index)
			}), null), Co(e) || ("r" === e ? p(c(Ro(e), e, "setting"), a) : "rr" === e ? p(c(Ro(e), e, "setting"), (function(t) {
				return un[t.setting]
				})) : "a" === e ? p(c(Ro(e), e, "setting"), (function(t) {
				return Gt[t.setting]
				})) : "bmp" === e || "map" === e ? p(c(Ro(e), e, "setting"), s) : p(c(Ro(e), e, "setting"), s, (function(t) {
				return u(t, "setting")
			}))), "a" === e && p(Do("colour"), (function(t) {
			if (1 !== t.setting && t.rgb) {
				const n = bu(t.rgb);
				return k_.Ue("span", "", "colour" + (n.Te ? " light_colour" : ""), "", 'style="' + n.kt + '"')
			}
			})), "b" === e && n && p(c(Do("slope"), e, "slope"), _, (function(t) {
			return u(t, "slope")
			})), "c" === e && p(c(Do("roof"), e, "roof"), f, (function(t) {
			return u(t, "roof")
			})), "r" !== e && "rr" !== e || p(c(Do("h_option"), e, "h_option"), (function(t) {
			return ln["grid" === t.h ? 1 : 0]
		})), Co(e)) p(c(Do("h"), e, "z"), (function(t) {
		return t.z
		}));
		else if ("bmp" === e || "map" === e);
		else if (p(c(Do("h"), e, "h"), (function(t) {
			return "grid" === t.h ? k_.te(data.grid.h, "locked") : "r" === t.type && t.heights && t.heights.length > 1 ? t.heights.join(" / ") : t.h
			}), (function(t) {
			return u(t, "h")
		})), "c" === e) {
		let t = 0;
		for (let n = 0; n < r.length; n++) r[n].roof && t++;
		t && p(c(Do("h_roof"), e, "h_roof"), (function(t) {
			return t.roof ? t.h_roof : ""
			}), (function(t) {
			return u(t, "h_roof")
		}))
		}
		if ("b" !== e && "c" !== e || p(c("&rho;", e, "rc"), (function(t) {
			return Uc(t.rc)
			}), (function(t) {
			return u(t, "rc")
			})), "l" === e && p(c(Do("method"), e, "method"), (function(t) {
			return on[t.method]
			}), (function(t) {
			return u(t, "method")
		})), Po(e)) {
		p(c(Do("spectrum"), e, "spectrum"), l);
		let t = 0,
		n = 0;
		for (let o = 0; o < r.length; o++) Array.isArray(r[o].lvl) ? n++ : t++;
		if (t && (p(c(Xo(Vt, Xt, 0) + " " + Do("hz"), e, "hz"), (function(t) {
			if (!Array.isArray(t.lvl)) return t.hz
			}), (function(t) {
			return u(t, "hz")
			})), p(c(Do("lvl"), e, "lvl"), (function(t) {
			if (!Array.isArray(t.lvl)) return t.lvl
			}), (function(t) {
			return Array.isArray(t.lvl) ? "" : u(t, "lvl")
		}))), n) {
		const t = Wl(e),
		n = function(n) {
			if (!Array.isArray(n)) return;
			const o = Yl(t, n);
			return null == o ? g("value_no_levels") : "<em>" + t[o].gt + "</em>"
		};
		p(c(Xo(Vt, Xt, 1) + " " + g("prop_levels"), e, "lw"), (function(t) {
			return n(t.lvl)
			}), (function(t) {
			return Array.isArray(t.lvl) ? u(t, "lvl") : ""
		}))
		}
		let o = 0;
		for (let t = 0; t < r.length; t++) r[t].adj_type && o++;
		p(c(Do("adj"), e, "adj_type"), (function(t) {
			return an[t.adj_type]
			})), o && p(c("=", e, "adj"), (function(t) {
			return t.adj_type ? 2 === t.adj_type ? t.adj + "%" : t.adj : null
			}), (function(t) {
			return u(t, "adj")
		}))
		}
		"bmp" !== e && "map" !== e || p(c(Do("merge"), e, "merge"), (function(t) {
			return dn[t.merge].title
			})), p(!1, (function(t) {
			return function(t, n) {
				const o = jl(t, n, Dn.Lt.ve),
				e = $(k_.$e(!0)).click((function() {
					z_(g("alert_delete_obj"), (function() {
						Ol(t, n)
					}))
				}));
				return $(k_.oe("actions")).append(o).append(e)
			}(t.type, t.index)
		}));
		const h = $(k_.oe("table")).appendTo(o);
		Ml(d, r).appendTo(h);
		const b = $("#editor_message").empty();
		if (!Z() && Co(e)) {
			const t = g("alert_gh_hidden");
			b.append(k_.de(k_.pe(t)))
		}
	}
	
	function El(n, o, e, i = null) {
		"lw" === o && (o = "lvl");
		const r = Uo(n);
		for (let c = 0; c < r.length; c++) {
			const s = r[c];
			if (n !== s.type) continue;
			if (null !== i)
			if (Array.isArray(s[o])) {
				if (!Array.isArray(i)) continue;
				if (!Bl(s[o], i)) continue
			} else if (s[o] != i) continue;
			if ("h" === o && "grid" === s[o]) continue;
			if ("h_option" === o) {
				1 === e ? data._put(n, s.index, {
					h: "grid"
				}) : "grid" === s.h && Ll(s.type, c);
				continue
			}
			if ("h" === o && s.heights && data._put(n, s.index, {
				heights: [e]
			}), "spectrum" === o) {
			const t = 1 === e;
			if (Array.isArray(s.lvl) === t) continue;
			data._put(n, s.index, {
				lvl: t ? [] : 100
			});
			continue
			}
			if ("lvl" === o && Array.isArray(s[o]) !== Array.isArray(e)) continue;
			if ("adj_type" === o) {
				const i = s[o];
				if (2 === i || 2 === e) {
					const o = 2 != i,
					r = 2 === e ? "adj%" : "adj";
					data._put(n, s.index, {
						adj: qr(n, t.percentToDecibel(s.adj, o), r, 0)
					})
				}
			}
			const u = {};
			u[o] = e, data._put(n, s.index, u)
		}
		xe(n), Uu()
	}
	
	function Nl(t, n, o, e, i) {
		if (la(), !t) return;
		const r = Uo(t);
		if ("section" === t) return;
		if ("grid" !== t) {
			if (null == r) return;
			null == n && (n = r.length - 1)
		}
		"c" === t && (t = "b"), "map" === t && (t = "bmp"), Sr(1, t, n), Po(t) && Zl(), Tl(t, n, i);
		const c = Dn._n.ve;
		$(".windowpanel", c).dt(!1).hide();
		const s = $("#edit_" + t, c);
		s.dt(!0).show(), s.data("n", n), $("#edit_actions, #edit_delete").toggle("grid" !== t), $("#edit_update").toggle(null != i), $("#edit_window_icon").html(Wo(t, n)), $("#edit_load_objects").toggle("grid" !== t), Dn._n.ie(), "rr" === t && ($("#edit_rr_lvls")[0].scrollTop = 0)
	}
	
	function Tl(o, e, i) {
		const r = Dn._n.Ce;
		if (null == o || null == e) {
			if (o = r.bn, e = r.o, i = r.Ge, !o || null == e && !i) return
		} else r.bn = o, r.o = e, r.Ge = i;
		const c = Bo(o, e);
		if (!c || !Object.keys(c).length) return;
		const s = function(t) {
			return $("#edit_" + t)
		},
		u = function(t, n) {
			let o = c.tt(n);
			s(t).toggleClass("state_change", o)
		},
		l = function(t, n) {
			const o = s(t);
			if (!o.length) return;
			null != n && o.prop("checked", n);
			o.is(":radio") && ("edit_p_lvl" === o.prop("name") || "edit_l_lvl" === o.prop("name") ? function(n) {
				const o = s(t);
				$("#" + n + "s").toggleClass("multi", "2" === o.val()), $("#" + n + "s .lvl_single").toggle("1" === o.val()), $("#" + n + "s .lvl_multi").toggle("2" === o.val()), $("#" + n + "_field label").dt(!1), $("#" + n + '_field label[for="' + o.prop("id") + '"]').dt(!0)
				}(o.prop("name")) : $('input[name="' + o.prop("name") + '"]').each((function() {
					$('label[for="' + $(this).prop("id") + '"]').dt($(this).is(":checked"))
				})))
		};
		if ("grid" !== o) {
			if (!c && i) return !1;
			if (!c) return
		}
		const a = function(t, n) {
			if (Array.isArray(t)) {
				for (let o = 0; o < t.length; o++) a(t[o], n);
				return
			}
			const o = s(t);
			return o.val() === n || !o.hasClass("force-update") && o.is(":focus") || o.ft(n), o
		},
		f = function(n) {
			const o = n.type;
			if (Array.isArray(n.lvl)) {
				a([o + "_lvlval", o + "_lvlfreq", o + "_lvlvalw"], ""), l(o + "_lvl_multi", !0);
				let e = [],
				i = [];
				const r = Pn();
				for (let c = 0; c < r.length; c++)
				if (n.lvl[c]) {
					let r = n.lvl[c];
					Cn(r) ? e.push(r) : r = null, a(o + "_lvlval" + c, r);
					let s = r + t.aweighting(t.f[c]);
					Cn(s) ? i.push(s) : s = null, s && (s = Vn(s)), a(o + "_lvlvalw" + c, s)
				} else a([o + "_lvlval" + c, o + "_lvlvalw" + c], "");
				a(o + "_lvl_total", e.length > 0 ? Vn(t.dbsum(e)) : ""), a(o + "_lvl_totalw", i.length > 0 ? Vn(t.dbsum(i)) : ""), s(o + "_lvl_total").prop("readonly", !0), s(o + "_lvl_totalw").prop("readonly", !0)
				} else {
				for (let n = 0; n < t.f.length; n++) a([o + "_lvlval" + n, o + "_lvlvalw" + n], "");
				l(o + "_lvl_single", !0), n.lvl && a(o + "_lvlval", n.lvl), n.hz && a(o + "_lvlfreq", n.hz), n.lvl && n.hz ? a(o + "_lvlvalw", Vn(n.lvl + t.aweighting(n.hz))) : a(o + "_lvlvalw", "")
			}
			s(o + "_library").toggle(Array.isArray(n.lvl)), $(".weighted")._t(0 === data.config.weighting.N());
			const e = n.adj_type,
			i = s(o + "_adj_lvl");
			i.prop({
				type: 1 === e ? "number" : "text"
			}), l(o + "_adj_type" + e, !0), a(o + "_adj_lvl", n.adj + (2 === e ? "%" : "")), v_(i, 0 === e), u(o + "_lvls", "lvl"), u(o + "_adj_lvl", "adj")
		},
		_ = function(t, n) {
			const o = t.type,
			e = o,
			i = n.heights.length > 1;
			if (i) {
				const t = [];
				for (let o = 0; o < n.heights.length; o++) {
					const e = n.heights[o];
					t.push('<option value="' + e + '"' + (e == n.h ? " selected" : "") + ">" + e + "</option>")
				}
				s(e + "_heights").html(t)
			} else a(o + "_h", n.h);
			s(e + "_h").toggle(!i), s(e + "_heights").toggle(i)
		},
		p = function(t, n) {
			const o = "grid" === c.h;
			l(t + "_h_opt" + (o ? 1 : 0), !0);
			const e = o ? data.grid : c;
			n ? (_(c, e), v_(s(t + "_h"), o), v_(s(t + "_heights"), o), v_(s(t + "_edit_heights"), o)) : (a(t + "_h", e.h), v_(s(t + "_h"), o))
		},
		h = function() {
			const t = s("r_lvls").empty(),
			n = $(k_.be(k_.te(g("title_results") + Vi() + Xs(Io()), "", "edit_r_lvls_title"))).appendTo(t);
			$(k_.me("edit_r_copy")).appendTo(n).click((function() {
				Rl(t, m + Xs($("#edit_r_lvls_title").text()))
			}));
			const o = function(t) {
				const n = yi(),
				o = [];
				o.push(g("prop_height"));
				for (let t = 0; t < n; t++) o.push(Pn(t));
				o.push(g("prop_total"));
				const e = [];
				if (t.it.length)
				for (let o = 0; o < t.it.length; o++) {
					const i = t.it[o],
					r = [no(i.Nt, !0)];
					for (let t = 0; t < n; t++) r.push(Qn(Nc(i, t)));
					r.push(Qn(Nc(i))), e.push(r)
					} else {
					const o = "-",
					i = On(rc(t, !0));
					for (let t = 0; t < i.length; t++) {
						const r = [no(i[t], !0)];
						for (let t = 0; t < n; t++) r.push(o);
						r.push(o), e.push(r)
					}
				}
				return function(t) {
					if (!t) return "";
					let n = "",
					o = "",
					e = 0;
					t.titles && (n += "<thead><tr><th>" + t.titles.join("</th><th>") + "</th></tr></thead>");
					for (let n = 0; n < t.cells.length; n++) e < t.cells[n].length && (e = t.cells[n].length);
					for (let n = 0; n < t.cells.length; n++) {
						let i = [];
						for (let o = 0; o < e; o++) {
							let e = t.cells[n][o];
							e || 0 === e || (e = ""), i.push(e)
						}
						i.length && (o += "<tr><td>" + i.join("</td><td>") + "</td></tr>")
					}
					return o ? "<table>" + n + "<tbody>" + o + "</tbody></table>" : ""
					}({
						cells: e,
						titles: o
					})
			}(c),
			e = $(k_.oe("table")).appendTo(t);
			$(o).appendTo(e)
		},
		b = function() {
			const n = s("rr_lvls");
			n.empty();
			const o = pr(e);
			if (!o || !o.length) return void $(k_.Xe(g("nothing_to_show"))).appendTo(n);
			let i = [];
			const r = function(n) {
				const o = Qn(n);
				return '<span style="width:' + t.round(n, 2) + "px;color:" + Li(n, !0) + '"></span>' + o
			},
			c = function(t, n) {
				return k_.oe(t, "", n)
			};
			for (let t = 0; t < o.length; t++) {
				const n = o[t],
				e = n.result,
				s = n.source,
				u = gl(s.type, s.n),
				l = $l(s, n),
				a = jo(n.is_multi ? n.oct : n.freq),
				f = r(e),
				_ = '<tr data-ray="' + t + '"><td>' + [c("object_ref", u), c("icons", l), c("freq", a), c("mini_bar", f)].join("</td><td>") + "</td></tr>";
				i.push([-e, _])
			}
			n.toggleClass("compact", o.length > 10);
			const u = Gf(i),
			l = $(k_.oe("table")).appendTo(n),
			a = k_.Ve(k_.Qe(k_.Ke(g("prop_object")) + k_.ti(g("prop_hz")) + k_.ti(g("prop_level") + " " + Io()))),
			f = k_.ni(u.map((t => t[1])).join("")),
			_ = $(k_.oi(a + f)).appendTo(l);
			Jc && Jc.remove(), Jc = S.Yn.g().addClass("highlight"), Jc.Un();
			const d = function(t) {
				Jc.clear();
				const n = null != t ? 1 : 0;
				n && function(t, n, o) {
					const e = gr(t, n);
					for (let t = 0; t < e.length - 1; t++) ar(o, po(e[t][0]), ho(e[t][1]), po(e[t + 1][0]), ho(e[t + 1][1]), "#fff", 5)
				}(t, e, Jc), Dn._n.Tt() && Sr(!n, "rr", e)
			};
			$("tr", _).hover((function() {
				const t = $(this).data("ray");
				null != t && ($(this).Zo(), d(t))
				}), (function() {
				$(this).Zo(!1), d()
				})).click((function() {
				const t = $(this).data("ray");
				null != t && (! function(t, n) {
					const o = gr(t, n);
					if (!o || !o.length) return;
					let e = [],
					i = [];
					for (let t = 0; t < o.length; t++) e.push(o[t][0]), i.push(o[t][1]);
					ha(e, i)
				}(t, e), d(t))
			})).addClass("has_click")
		};
		let m;
		m = "grid" === o ? g("obj_title_grid") : gl(c.type, e);
		const v = function(t) {
			return "p" === (t = Ho(t)) || "l" === t || "b" === t || "c" === t || "r" === t || "a" === t
		}(o);
		a("name", v ? m : ""), s("name").toggle(v), s("name_readonly").text(v ? "" : m).toggle(!v);
		let y = "";
		if ("p" === o) l(0 === c.setting ? "p_off" : "p_on", !0), u("p_toggle_field", "setting"), -1 === c.setting ? y += k_.ei(g("alert_point_inside")) : c.setting > 0 && !1 !== function(n, o) {
			const e = Fs(Cs) ? data.state2 : data.state;
			return t.insideBuilding(e.buildings, n, o)
		}([c.x, c.y]) && (y += k_.pe(g("alert_point_above"))), a("p_h", c.h), u("p_h", "h"), f(c);
		else if ("l" === o) l(0 === c.setting ? "l_off" : "l_on", !0), u("l_toggle_field", "setting"), -1 === c.setting && (y = k_.ei(g("alert_line_invalid"))), a("l_h", c.h), u("l_h", "h"), l(1 === c.method ? "l_method_1" : "l_method_0", !0), f(c);
		else if ("b" === o || "c" === o) {
			const o = "c" === c.type,
			e = 4 === c.x.length;
			if ($("#edit_b h2").text(Jo(c.type) + " settings"), l(0 === c.setting ? "b_off" : "b_on", !0), u("b_toggle_field", "setting"), o && -1 === c.setting) y += k_.ei(g("alert_building_invalid"));
			else
			for (let t = 0; t < c.s.sh.length; t++)
			if (c.s.sh[t] < 0) {
				y = $(k_.pe(g("alert_part_underground"))), y.append(Su("#inspecth", !0));
				break
			} const i = o && e,
			r = !!i && Fc(c);
			
			function w(n, o) {
				const e = Ft;
				let i;
				i = o < .2 ? e : 1 === o ? "=" : t.round(10 * Math.log10(o), 2);
				a(n, i).Ee(i === e)
			}
			s("b_roof_field").toggle(i), $(".edit_b_roof").toggle(i && r), s("b_fixroof").toggle(i && !r), i && l("b_roof_" + c.roof, !0), v_("edit_b_flip", !(1 === c.roof || 2 === c.roof)), u("b_roof_field", "roof"), s("b_slope_field").toggle(n && !o), o || l("b_slope_" + c.slope, !0), a("b_h", c.h), u("b_h", "h"), $("#edit_b_h2, label[for=edit_b_h2]").toggle(o && c.roof > 0), o && c.roof > 0 && a("b_h2", c.h_roof), u("b_h2", "h_roof"), $("#edit_b_rcs .message_placeholder").html(0 === data.config.reflections.N() ? k_.ii(g("alert_reflections_off")) : ""), s("b_rcbuttons").toggle(data.config.reflections.N() > 0), Array.isArray(c.rc) ? (a("b_rc1", c.rc[0]), a("b_rc2", c.rc[1]), w("b_rcdb1", c.rc[0]), w("b_rcdb2", c.rc[1])) : (a(["b_rc1", "b_rc2"], c.rc), w("b_rcdb1", c.rc));
			const f = Array.isArray(c.rc);
			s("b_rc_match").prop("checked", !f), s("b_rc2").toggle(f), s("b_rcdb2").toggle(f), s("b_rc_match_label").toggle("b" === c.type);
			for (let t = 1; t <= 4; t++) s("b_setrc" + t).dt(!1), Array.isArray(c.rc) ? c.rc[0] === c.rc[1] && c.rc[0] === s("b_setrc" + t).data("rc") && s("b_setrc" + t).dt(!0) : c.rc === s("b_setrc" + t).data("rc") && s("b_setrc" + t).dt(!0);
			u("b_rcs", "rc")
			} else if ("a" === o) {
			l("a_" + c.setting, !0);
			const t = 1 === c.setting;
			s("a_length").toggle(t), a("a_len", no(c.Rt)), a("a_len2d", no(c.jo)), s("a_length2").toggle(Fo()), a("a_h", c.h), s("a_style").toggle(!t), t || (a("a_rgb", c.rgb ? c.rgb.join(",") : ""), mu(s("a_colour"), c.rgb))
		} else if ("r" === o) l(1 === c.setting ? "r_on" : "r_off", !0), c.setting && -1 === data.config.receiver_type.N() && (y = k_.pe(g("alert_r_spec_hidden"))), p("r", !0), h();
		else if ("rr" === o) l(c.setting > 0 ? "rr_" + c.setting : "rr_off", !0), p("rr"), b();
		else if (Co(o)) a(o + "_h", c.z), "gl" === o && c.setting < 0 ? y = k_.ei(g("alert_gl_invalid")) : d ? y = k_.pe(g("alert_gh_disabled")) : Z() || (y = k_.pe(g("alert_gh_hidden")));
		else if ("bmp" === o) {
			l("bmp_lock" + c.setting, !0), a("bmp_merge", c.merge), a("bmp_srcval", c.src), s("bmp_mapsettings").toggle("map" === c.type), s("bmp_imgsettings").toggle("bmp" === c.type);
			const t = Qc(e);
			s("bmp_user").toggle(t), s("bmp_filename").toggle(t), s("bmp_upload").Ee(!(n && c.Rn)), s("bmp_scale").toggle(!c.setting), a("bmp_scaleval", c.img_scale);
			const o = fs(c.src);
			bs(s("bmp_zoom"), o.lat), a("bmp_zoom", o.zoom), a("bmp_type", o.type)
		} else "grid" === o && (l(1 === c.abs ? "grid_abs" : "grid_rel", !0), l(1 === c.setting ? "grid_fit1" : 2 === c.setting ? "grid_fit2" : "grid_fit0", !0), _(c, c));
		if (Po(o)) {
			const i = s(o + "_lib"),
			r = s(o + "_save"),
			u = gt,
			l = "l" === o ? 1 : 0,
			f = function() {
				if (r.toggle(n), !n) return;
				r.Ee().dt(!1);
				const t = $("option:selected", i),
				o = t.data("i");
				if (null == o || "" === o) return;
				const e = "new" === o;
				if (e) r.Ee(!e), r.click((function() {
					if ($(this).Ne()) return;
					const t = N_(g("named_source_levels", m), g("title_save_source"), g("prop_name"), g("buttons_save"));
					$("#confirm_yes").off("click").on("click", (function() {
						if ($(this).Ne()) return;
						$(this).Ee();
						const n = t.getInput(),
						o = c.lvl;
						Tu({
							set: "source",
							name: encodeURIComponent(n),
							entry: JSON.stringify(o),
							category: l
							}, (function(t) {
								const n = {
									name: t.name,
									value: o,
									id: t.response,
									timestamp: new Date,
									category: l
								};
								he(u, n), Dl()
							}))
					}))
				}));
				else {
					const n = t.data("j"),
					e = u[o].entries[n],
					i = e.id,
					c = null != i;
					if (r.Ee(!c).dt(c), !c) return;
					r.click((function() {
						if (!$(this).Ne() && c) {
							const t = function() {
								if (!$("#confirm_yes").Ne()) return $("#confirm_yes").Ee(), Tu({
									remove: "source",
									id: i
									}, (function(t) {
										ge(u, i), Dl()
									})), !1
							};
							I_(g("alert_forget", '"' + e.name + '"'), "", g("buttons_continue"), t)
						}
					}))
				}
			};
			i.html(Gl(o, e)).off("change").on("change", (function() {
				const n = JSON.parse($(this).val());
				for (let e = 0; e < t.f.length; e++) a(o + "_lvlval" + e, e < n.length ? n[e] : "");
				Dl(), f()
			})), f(), Vl(o, e)
		}
		return s("message").empty(), y && s("message").append(y), $("#bmp_tofront").toggle("bmp" === o && e < data.bmp.length - 1), $("#bmp_toback").toggle("bmp" === o && e > 0), !0
	}
	const Ll = function(t, n) {
		const o = qo(Bo("grid"));
		data._put(t, n, {
			h: o.h,
			heights: o.heights
		})
	},
	Sl = function(t, n) {
		const o = $("<textarea>").val(t).appendTo("body").select();
		document.execCommand("copy"), o.remove(), Xu(g("alert_clipboard", n), Pt, "copy")
	},
	Rl = function(t, n) {
		let o = [];
		o.push(n), $("tr", t).each((function() {
			let t = [];
			$("th, td", this).each((function() {
				const n = $(this);
				if (!n.is(":visible")) return;
				const o = $("input", n);
				if (o.length > 0) t.push("" == o.val() ? "-" : o.val());
				else {
					let o = [];
					const e = function(t) {
						$(t).children().each((function() {
							const t = $(this);
							if (t.hasClass("actions") || "SVG" === t[0].nodeName) return;
							const n = t.prop("title");
							n && o.push(n), e(t)
						}))
					};
					e(n);
					const i = n.text().trim();
					i && o.unshift(i), t.push(o.join(zt))
				}
				const e = parseInt(n.prop("colspan"));
				if (e > 1) {
					let n = 1;
					for (; n < e;) t.push(""), n++
				}
			})), o.push(t.join("\t"))
		})), Sl(o.join("\n"), n)
	};
	
	function Dl(n) {
		const o = Dn._n.Ce,
		e = o.bn,
		i = o.o,
		r = n ? "#" + n.prop("id") : "",
		c = "edit_" + e + "_",
		s = "#" + c,
		u = function(t) {
			return $('input[name="' + c + t + '"]:checked').val()
		},
		l = function(t, n) {
			const o = $(s + t).val();
			return !(!n && "" === o) && o
		},
		a = function(t) {
			return r === s + t
		};
		if (null == e) return;
		const f = Bo(e, i),
		_ = function(t, n) {
			if (!1 === n) return;
			const o = {};
			return o[t] = n, data._put(e, i, o)
		};
		if (!f) return;
		const d = function() {
			const n = function(n, o, i) {
				const r = l(n),
				c = qr(e, r, "lvl", null),
				u = t.aweighting(o),
				a = c ? Vn(c - u) : "";
				$(s + i).ft(a)
			},
			o = function(t, n) {
				const o = l(t);
				if (!1 === o && !a("lvl_single")) return;
				const i = qr(e, o, n, null);
				_(n, i)
			};
			$(s + "lvl_multi").prop("checked") ? (function() {
				if (0 === r.indexOf(s + "lvlvalw"))
				for (let o = 0; o < t.f.length; o++) n("lvlvalw" + o, t.f[o], "lvlval" + o)
				}(), function() {
				const n = [];
				for (let o = 0; o < t.f.length; o++) {
					const t = l("lvlval" + o);
					n.push(t ? qr(e, t, "lvl", null) : null)
				}
				for (; n.length > 0 && !n[n.length - 1];) n.pop();
				_("lvl", n)
			}()) : (o("lvlfreq", "hz"), a("lvlvalw") && n("lvlvalw", f.N("hz"), "lvlval"), o("lvlval", "lvl")),
			function() {
				const n = function(t, n, o) {
					data._put(e, i, {
						adj_type: t,
						adj: n
					}, o)
				},
				o = f.adj_type,
				c = qr(e, u("adj_type"), "setting", 0);
				let a = l("adj_lvl");
				if (!1 === a) return;
				const _ = 2 === o || 2 === c;
				if (0 === r.indexOf(s + "adj_type") && _) {
					const e = function(n) {
						const e = 2 !== o;
						let i = t.percentToDecibel(n, e);
						return isFinite(i) || (i = e ? 100 : 0), i
					};
					n(c, e(f.N("adj", 1)), 1), f.tt("adj") && n(c, e(f.N("adj", 2)), 2)
					} else {
					n(c, qr(e, a, 2 === c ? "adj%" : "adj", 2 === c ? 100 : 0))
				}
			}()
		},
		p = function() {
			$(s + "heights").is(":visible") ? h() : (g(), _("heights", null))
		},
		h = function() {
			_("h", l("heights"))
		},
		g = function() {
			const t = l("h");
			!1 !== t && _(Co(e) ? "z" : "h", t)
		},
		b = function() {
			"grid" === u("h_opt") ? _("h", "grid") : r === s + "h_opt0" ? Ll(e, i) : p()
		},
		m = function() {
			_("setting", u("toggle"))
		};
		if ($("#edit_name").is(":visible") && function() {
			let t = Fr($("#edit_name").val());
			t = ml(t, e, i), _("name", t !== f.K ? ml(t, e, i) : null)
		}(), "p" === e && (m(), g(), d()), "l" === e && (m(), g(), _("method", u("method")), d()), "b" === e && (m(), g(), _("slope", u("slope")), _("roof", u("roof")), data.N(e, i, "roof") && _("h_roof", l("h2")), _("rc", $(s + "rc_match").prop("checked") ? l("rc1") : [l("rc1"), l("rc2")])), "r" === e && (m(), b()), "rr" === e && (m(), b()), "a" === e) {
		m(), g();
		const t = l("rgb");
		_("rgb", t ? t.split(",") : null)
		}
		if (Co(e) && g(), "bmp" === e && (_("setting", t.toInt(u("lock"))), _("merge", t.toInt($(s + "merge").val())), "bmp" === f.type)) {
			let n = Wn(t.toNumber($(s + "scaleval").val()));
			n > 0 && n != f.img_scale && (_("img_scale", n), Du("bmp"))
		}
		"grid" === e && (_("abs", $(s + "abs").is(":checked") ? 1 : 0), p(), _("setting", t.toInt(u("fit"))));
		const v = r === s + "heights";
		"#edit_r_on" === r || "#edit_r_off" === r ? Hu(e, i) : v ? Me(e) : xe(e, i), Uu(v), Tl(e, i)
	}
	
	function Hl(t) {
		const n = Dn._n.Ce,
		o = n.bn,
		e = n.o;
		(function(t, n, o) {
			if (null == t || null == n) return !1;
			const e = gl(t, n, -3),
			i = Bo(t, n);
			let r = i.x,
			c = i.y,
			s = rc(i);
			if ("a" === o) return Oc(!1, null, {
				name: e,
				setting: 0,
				x: r,
				y: c,
				h: s
			});
			if ("b" === o || "c" === o) return Cc(!1, null, "c" === o, {
				name: e,
				setting: 1,
				x: r,
				y: c,
				h: s
			});
			if ("p" === o) return zc(!1, null, {
				name: e,
				setting: 1,
				x: r,
				y: c,
				h: s
			});
			if ("l" === o) return Dc(!1, null, {
				name: e,
				setting: 1,
				x: r,
				y: c,
				h: s
			});
			if ("r" === o) return Ec(!1, null, {
				name: e,
				setting: 0,
				x: r,
				y: c,
				h: s
			});
			if ("rr" === o) return Sc(!1, null, {
				name: e,
				setting: 1,
				x: r,
				y: c,
				h: s
			});
			if ("gl" === o) return ks(!1, null, {
				x: r,
				y: c,
				z: s
			});
			if ("gh" === o) return ws(!1, null, {
				x: r,
				y: c,
				z: s
			})
		})(o, e, t) && (el(t), xe(t), Co(t) ? Z() || na(1) : Z() && na(0), Ol(o, e))
	}
	
	function Ol(t, n) {
		Pl(t, n), dl(t), pl(t), el(t), xe(t), Uu()
	}
	
	function Pl(t, n) {
		if (null == t || null == n) return !1;
		data[Ho(t)].splice(n, 1)
	}
	
	function Cl(t, n) {
		! function(t, n, o) {
			const e = Bo(t, n);
			if ("bmp" === Ho(t)) {
				const t = ns(n);
				if (t) {
					const n = t.width * e.img_scale,
					o = t.height * e.img_scale;
					return void ha([e.x - n / 2, e.x + n / 2], [e.y - o / 2, e.y + o / 2])
				}
			}
			e.x && ha(e.x, e.y, o)
		}(t, n, !1), Co(t) ? Z() || (na(1), ke()) : Z() && (na(0), ke())
	}
	
	function Fl(t) {
		const n = t.name,
		o = t.value,
		e = t.id,
		i = (Eo(t.timestamp), t.filename);
		return $('<button class="user_bitmap" data-id="' + e + '" data-scale="' + o + '"><img src="' + i + '" title="' + n + '" /></button>').click((function() {
			$("#addbmp_urlinput").val(i).change(), $("#addbmp_urlscale").val(o), $("#button_addbmp").click()
		}))
	}
	
	function ql() {
		const t = $("input[name=addbmp_nav]:checked").data("for");
		let n;
		"map" === t && (n = "#addbmp_lat"), "file" === t && (n = "#addbmp_fileinput"), "url" === t && (n = "#addbmp_urlinput"), $("#addbmp_buttons").toggle("" !== $(n).val())
	}
	
	function Ul() {
		const t = function(t) {
			return k_.oe("addbmp_placeholder", "", t)
		},
		n = $("#addbmp_gallery");
		if (n.empty(), s.id) {
			const o = pe(mt);
			if (o && o.entries && o.entries.length) {
				const t = o.entries;
				for (let o = 0; o < t.length; o++) n.append(Fl(t[o]))
			} else n.html(t(k_.he(g("gallery_empty"))))
		} else n.html(t('<a href="' + w() + '" class="button text_button">' + g("alert_login_prompt") + "</a>"))
	}
	const Bl = function(t, n) {
		const o = Math.max(t.length, n.length);
		for (let e = 0; e < o; e++)
		if (t[e] != n[e]) return !1;
		return !0
	};
	
	function Zl() {
		s.id && n && ae(gt, "/calculadoras/calc-db-soundpath/users/wp-content/plugins/calc-db-soundpath_user/json_user_library.php?set=source", 0, g("user_sources"), (function() {
			Vl()
		}))
	}
	
	function Jl() {
		s.id && n && ae(mt, "/calculadoras/calc-db-soundpath/users/wp-content/plugins/calc-db-soundpath_user/json_user_library.php?set=bitmaps", 0, g("user_images"), (function() {
			Ul()
		}), !1)
	}
	
	function Wl(t) {
		if (!t) return;
		const n = function(t, n) {
			for (let o = 0; o < t.length; o++)
			if (Bl(t[o].bt, n)) return o;
			return !1
		},
		o = be(gt, "l" === t ? 1 : 0),
		e = g("title_sources"),
		i = [],
		r = function(t, r) {
			if (t && t.length && !1 === n(o, t)) {
				const o = n(i, t);
				!1 === o ? i.push({
					ht: e,
					gt: r,
					bt: t,
					fe: 1,
					i: "new"
				}) : i[o].fe++
			}
		};
		for (let n = 0; n < data[t].length; n++) {
			const o = data.N(t, n, "lvl", 1),
			e = gl(t, n);
			if (r(o, e), data[t][n].tt("lvl")) {
				r(data.N(t, n, "lvl", 2), e + " (" + Gs(2) + ")")
			}
		}
		for (let t = 0; t < i.length; t++) {
			const n = i[t],
			o = n.fe;
			o > 1 && (n.gt = n.gt += " (+" + (o - 1) + " other" + (o > 2 ? "s" : "") + ")")
		}
		return i.concat(o)
	}
	
	function Yl(t, n) {
		if (!n) return null;
		for (let o = 0; o < t.length; o++)
		if (Bl(t[o].bt, n)) return o
	}
	
	function Gl(t, n) {
		const o = Wl(t),
		e = Bo(t, n),
		i = e ? Yl(o, e.lvl) : null;
		let r = uu(o, i);
		return '<option value="[]"' + (null == i ? " selected" : "") + ">" + g("value_no_levels") + "</option>" + r
	}
	
	function Xl() {
		let t = "";
		for (let n = 1; n < dn.length; n++) {
			t += '<option value="' + n + '">' + dn[n].title + "</option>"
		}
		return t
	}
	
	function Vl(t, n) {
		if (!t) {
			const o = Dn._n.Ce;
			t = o.bn, n = o.o
		}
		t && $("#edit_" + t + "_lib").html(Gl(t, n))
	}
	
	function Ql(t) {
		null == t && (t = C);
		const n = $("#objects"),
		o = function(t, o) {
			n.toggleClass(t, o)
		};
		o("dragOn", 0 === t), o("editOn", 1 === t), o("panOn", 2 === t), o("zoomOn", 3 === t), o("addOn", t >= 4)
	}
	
	function Kl(t, n) {
		null == t && (t = C), "object" != typeof t && (t = $('.tool_button.tool[data-id="' + t + '"]')), Ta();
		const o = $(t).data("id");
		if (8 === C && Vu("scale"), C !== o) {
			C = o;
			const n = $("#options");
			Ql(), $(".tool_button.tool", n).dt(!1), $(t).dt(!0), $("#addobjects").dt(4 === C)
		} else 3 === C && fa() && ba();
		7 === C && Va.zt && Va.zt.ri(!0), ea()
	}
	
	function ta(t, o) {
		null == t && (t = F), "object" != typeof t && (t = $('.tool_button.addtool[data-id="' + t + '"]')), Ta();
		const e = $(t).data("id");
		("l" !== e || n) && F != e && (F = e, $(".tool_button.addtool").dt(!1), $(t).dt(!0), ea())
	}
	
	function na(o, e) {
		null == o && (o = q), "object" != typeof o && (o = $('.tool_button.mode_button[data-id="' + o + '"]')), Ta();
		const i = t.toInt($(o).data("id")),
		r = q;
		$(".tool_button.mode_button").dt(!1), $(o).dt(!0), $("#tools_section")._t(!J(i)), $("#tools_grid")._t(J(i)), $(".addtool")._t(Z(i)), $("#tools_gh, #tools_gl")._t(!Z(i)), (Z(i) || Z(r)) && $("#addobjects").css({
			width: ""
			}), C > 4 && Kl(0), J(i) && !nf() && Kl(7), Z(i) ? (Hi(), ta("gh")) : ta("p"), $("#wrap").removeClass("mode_0 mode_1 mode_2 mode_3").addClass("mode_" + i), n && (r !== i ? (J(r) && (df(), $(T.ct.canvas).remove(), $(L.section.node).remove(), Yo("section").remove(), Va.zt && (Va.zt.fadeOut((function() {
				$(this).remove()
				})), Va.zt = null, Ga && Xa())), W(r) && (Yo("target").remove(), pf.ci.remove(), pf.zt && (pf.zt.fadeOut((function() {
				$(this).remove()
			})), pf.zt = null, Ga && Xa()), pf.si = $f()), q = i, e || (Pu(), cu(), el("gh"), el("gl"), J() && (Qa(), function() {
			if (Va.zt) return !1;
			cf(), Va.Et || (Va.Et = Math.round(.75 * ot)), lf(), Va.Nt || (Va.Nt = data.section.z ? uf(data.section.z) : Math.round(.333 * et));
			const t = Ya(g("mode2"), Va.Et, Va.Nt, "#section");
			t.ui = function(t) {
				sf(t)
				}, Va.zt = t, sf(!0), $(k_.Ko(svgIcon("grid"), "frame_toggle", "section_showgrid", g("frame_section_show_grid"))).appendTo(t.li).click((function() {
					t.At() || (at = !at, $(this).dt(at), Pi())
					})).dt(at), $(k_.Ko(svgIcon("eye", {
						vw: 40
					}), "frame_toggle", "section_showghosts", g("frame_section_show_projections"))).appendTo(t.li).click((function() {
					t.At() || (lt = !lt, $(this).dt(lt), Pi())
				})).dt(lt);
				const n = document.createElement("canvas");
				$(".frame_canvas", t).append(n), T.ct = n.getContext("2d");
				const o = T.ct;
				o.textAlign = "center", o.textBaseline = "middle", o.font = "8pt Lato", o.fillStyle = At, $e(o, Va.Et, Va.Nt), L.section = new Snap("100%", "100%"), $(t.ci).append(L.section.node), $(L.section.node).on("mousedown touchstart", (function(t) {
					$t.pressed = !0, za(t, 1) && t.preventDefault()
					})).on("mousemove touchmove", (function(t) {
					Aa(t, 1) && t.preventDefault()
					})).on("mouseup touchend", (function(t) {
					$t.pressed && ($t.pressed = !1, La(t, 1) && t.preventDefault())
					})).on("mouseout touchcancel", (function(t) {
					$t.marker && df()
				})), S.Fe = L.section.g().attr(pn).attr({
				id: "section_meta_layer"
				})
			}(), tf(), Va.zt.show(), Va.zt.ri(!1, !0)), W() && le(Bf, ["js/three.min.js", "js/three.OrbitControls.js"], "THREE"), Du("b"), J() && (Du("a"), Du("rr")), Hu(), Qe(-1), Pi())) : Ga ? function() {
			if (!Ga) return;
			Ga.focus()
			}() : J(r) ? function() {
			if (!Va.zt) return;
			Va.zt.ri(!1)
			}() : W(r) && function() {
			if (!pf.zt) return;
			pf.zt.ri(!1)
		}())
	}
	
	function oa(t) {
		const n = $("#tools_settings"),
		o = null != t ? t : !n.ai();
		$("#wrap").toggleClass("settings_open", o), n.dt(o)
	}
	
	function ea(t) {
		const n = $("div[data-panel=" + (4 === C ? F : C) + "]");
		null != t && n._t(!t), ia(n.fi()), $(".tippanel").dt(!1), n.dt(!0).scrollTop(0)
	}
	
	function ia(t) {
		$("#addobjects_showtip").toggle(t)
	}
	
	function ra(t) {
		let n = Au("hideTips"),
		o = [];
		if (n && (o = n.split(",")), t)
		for (let t = 0; t < o.length; t++) $('div[data-panel="' + o[t] + '"]')._t(!0);
		else {
			const t = 4 === C ? F : C;
			$('div[data-panel="' + t + '"]')._t(!0), ia(!0), -1 === o.indexOf(t.toString()) && o.push(t), Au("hideTips", o.join(","))
		}
	}
	
	function ca(t, n) {
		const o = function(t, n) {
			const o = $(k_.Qe((e = t, k_._i('<input type="number" value="' + (null != e ? Gn(e) : "") + '" size="5" maxlength="8" step="0.1" min="0" class="textinput" />')), "height"));
			var e;
			if (n) {
				const t = $(k_._i("", "actions")).appendTo(o);
				$(k_.$e()).on("click", (function() {
					o.fadeOut(200, (function() {
						o.remove()
					}))
				})).appendTo(t)
			}
			return o
		},
		e = Bo(t, n),
		i = $(k_.oe("edit_heights")),
		r = $(k_.oi(k_.Qe((c = g("prop_heights"), k_.Ke(c))))).appendTo(i);
		var c;
		for (let t = 0; t < e.heights.length; t++) r.append(o(e.heights[t], !0));
		r.append(k_.Qe(k_.di(k_.Ko(svgIcon("add"), "button icon_button proceed_button")))), $(".proceed_button", r).on("click", (function() {
			const t = $(this).closest("tr"),
			n = $(o(null, !0)).hide().insertBefore(t).fadeIn();
			$("input", n).focus()
		}));
		I_(g("title_heights"), i, g("buttons_apply"), (function() {
			let n = [];
			if ($("tr", Dn.Pe.ve).each((function() {
				const t = $("input", this);
				1 == t.length && "" != t[0].value && n.push(t[0].value)
			})), n = Ur(t, n), n.length < 1) return Xu(n.length < 1 ? g("alert_missing_heights") : g("alert_data_invalid"), Ht, "heights"), !1;
			const o = {
				heights: n
			}; - 1 === n.indexOf(e.h) && (o.h = n[0]), data._put(e.type, e.index, o), Tl(), el(e.type), xe(e.type, e.n), Uu()
		}))
	}
	
	function sa(t, n, o) {
		if (zu) return;
		if (0 !== C) return;
		const e = Date.now();
		let i;
		$t.un = e, i = Z() ? {
			mode: "ground",
			x: fo(n),
			y: _o(o)
			} : {
			mode: "mouse",
			x: 1 === t ? mo(n) : fo(n),
			y: 1 === t ? vo(n) : _o(o),
			h: 1 === t ? $o(o) : data.grid.h,
			gh: null,
			abs: !(1 !== t && !data.grid.abs)
		}, i.state = Cs, i.mousex = n, i.mousey = o, i.area = t, i.timestamp = e;
		pi(li(-1), [i])
	}
	
	function ua(t, n) {
		const o = "ground" === t.mode ? g("ground_level") : g("grid_result");
		if (void 0 === n || isNaN(n)) return;
		! function(t, n, o, e, i) {
			la(), $t.tip = 1 === t ? S.Fe.g() : S.Xo.g();
			$t.tip.addClass("passthrough");
			$t.tip.circle(0, 0, 3).zn(At).Ln(Ft);
			const r = $t.tip.path(Bt).zn(Et).Ln(At, 1),
			c = $t.tip.g(),
			s = c.Kn(0, -23, "", 8),
			u = c.Kn(0, jt);
			s.O(e, !0), u.O(i, !0);
			const l = c.getBBox(),
			a = l.w,
			f = l.h;
			r.stop().co(Bt).ro({
				path: fc(a, f)
				}, !1, (function() {
					s.io(), u.io()
					})), $t.tip.transform(xo(n, o)).eo(), clearTimeout($t.tip_timeout), $t.tip_timeout = setTimeout((function() {
					s.O(""), u.O(""), r.ro({
						path: Bt
						}, !1, (function() {
							la()
						}))
				}), 3e3)
				}(t.area, t.mousex, t.mousey, o, function(t) {
					return null === t ? g("below_ground") : !1 === t ? g("inside_building") : Z() ? to(t, !0) : Qn(t) + Io()
				}(n))
	}
	
	function la() {
		Qu("tip"), clearTimeout($t.tip_timeout)
	}
	
	function aa(t) {
		const n = [],
		o = [],
		e = data.grid;
		if (!1 === t || null == t && 2 !== e.setting) {
			for (let t = 0; t < e.x.length; t++) ro(n, e.x[t]), ro(o, e.y[t]);
			!1 === t && (ro(n, fo(0)), ro(n, fo(ot)), ro(o, _o(0)), ro(o, _o(et)))
		}
		const i = !1 === t || null == t && Z(); {
			const t = ["r", "rr", "p"];
			i && t.push("gh"), t.forEach((function(t) {
				const e = data[t];
				for (let t = 0; t < e.length; t++) ro(n, e[t].x), ro(o, e[t].y)
			}))
			} {
			const e = ["l", "b"];
			t || e.push("a"), i && e.push("gl"), e.forEach((function(t) {
				const e = data[t];
				for (let t = 0; t < e.length; t++)
				for (let i = 0; i < e[t].x.length; i++) ro(n, e[t].x[i]), ro(o, e[t].y[i])
			}))
		}
		if (null == t) {
			let t = S.Jo.getBBox();
			(t.w > 0 || t.h > 0) && (ro(n, fo(t.x)), ro(n, fo(t.x2)), ro(o, _o(t.y)), ro(o, _o(t.y2)))
		}
		return 0 == n.length || 0 == o.length ? [] : [uo(n), uo(o), so(n), so(o)]
	}
	
	function fa() {
		let t = aa();
		(t[2] - t[0] > 5e3 || t[3] - t[1] > 5e3) && (t = aa(!0)), t[0] -= 1, t[1] -= 1, t[2] += 1, t[3] += 1;
		const n = (t[0] + t[2]) / 2,
		o = (t[1] + t[3]) / 2,
		e = t[2] - t[0],
		i = t[3] - t[1];
		let r = ot / e;
		et / i < r && (r = et / i);
		const c = al(r, !1),
		s = ma(n, o);
		return c || s
	}
	
	function _a(t, n) {
		return sl(2 * ct, t, n)
	}
	
	function da(t, n) {
		return sl(ct / 2, t, n)
	}
	
	function pa(t, n, o, e, i = !0) {
		const r = fo((t + o) / 2),
		c = _o((n + e) / 2),
		s = Math.abs(t - o),
		u = Math.abs(n - e);
		let l = Math.max(s / ot, u / et);
		l = ct / l;
		const a = al(l, i),
		f = ma(r, c);
		return a || f
	}
	
	function ha(t, n, o = !0) {
		if (Array.isArray(t)) {
			let e, i, r, c;
			for (let o = 0; o < t.length; o++) {
				const s = t[o],
				u = n[o];
				(null == i || i > u) && (i = u), (null == e || e > s) && (e = s), (null == c || c < u) && (c = u), (null == r || r < s) && (r = s)
			}
			if (o) pa(po(e), ho(i), po(r), ho(c), !1) && ba();
			else {
				ma((e + r) / 2, (i + c) / 2) && ba()
			}
		} else ma(t, n) && ba()
	}
	let ga = !1;
	
	function ba(t, n) {
		ga = !0;
		const o = ve();
		Ts(), su(), Ss(), Du(), tl(), t || Uu(!0), ei(!0), t || o && (t = 1);
		Qe(t, n);
		(t || null === o) && yf(), Pi(), ga = !1
	}
	
	function ma(t, n) {
		return !!ll(Gn(-t * ct + ot / 2), Gn(-n * ct + et / 2)) && (Ia(), !0)
	}
	
	function va(t) {
		const n = ot / 4,
		o = et / 4;
		let e = 0,
		i = 0;
		0 === t && (i = o), 1 === t && (e = -n), 2 === t && (i = -o), 3 === t && (e = n), ll(it.x + e, it.y + i) && (Ma(e, i), ba(), W() && mf())
	}
	
	function $a(t, n = 0) {
		return "touchstart" !== t.type && "touchmove" !== t.type && "touchend" !== t.type && "touchcancel" !== t.type || (t = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0]), !1 === n || n > 0 ? {
			x: t.offsetX ? t.offsetX : t.clientX - t.target.getBoundingClientRect().left,
			y: t.offsetY ? t.offsetY : t.clientY - t.target.getBoundingClientRect().top
			} : {
			x: t.clientX,
			y: t.clientY
		}
	}
	
	function ya(t) {
		if (t.which) return t.which;
		const n = function(t) {
			return t.length > 1 ? 3 : 1
		};
		if (t.touches) return n(t.touches);
		if (t.changedTouches) return n(t.changedTouches);
		if (t.originalEvent) {
			if (t.originalEvent.touches) return n(t.originalEvent.touches);
			if (t.originalEvent.changedTouches) return n(t.originalEvent.changedTouches)
		}
		return 0
	}
	
	function wa(t) {
		return t.originalEvent ? t.touches || t.originalEvent.touches || t.changedTouches || t.originalEvent.changedTouches : t.touches || t.changedTouches
	}
	let xa = !1;
	
	function ka(t) {
		t.ctrlKey ? $t.down || (xa = !0, Ql(2)) : xa && (xa = !1, Ql())
	}
	
	function Ma(t, n) {
		if ($t.clicks.length > 0)
		for (let o = 0; o < $t.clicks.length; o++) $t.clicks[o].x += t, $t.clicks[o].y += n
	}
	
	function ja(t, n, o) {
		return {
			x: t,
			y: n,
			area: o,
			scale: ct,
			ox: it.x,
			oy: it.y,
			update: function() {
				ct === this.scale && this.ox === it.x && this.oy === it.y || (this.x = (this.x - this.ox) / this.scale * ct + it.x, this.y = (this.y - this.oy) / this.scale * ct + it.y, this.scale = ct, this.ox = it.x, this.oy = it.y)
			}
		}
	}
	
	function Ia() {
		if ($t.down && $t.down.update(), $t.clicks && $t.clicks.length)
		for (let t = 0; t < $t.clicks.length; t++) $t.clicks[t].update()
	}
	
	function za(t, n) {
		if (la(), ya(t) > 1) return !1;
		const o = $a(t, n),
		e = o.x,
		i = o.y;
		return $t.x = e, $t.y = i, null === $t.down && ($t.down = ja(e, i, n)), n > 0 ? void 0 : ((2 === C || xa) && (ul = !0, $("#objects").addClass("panning")), !xa && C > 3 && 8 !== C && Ku(n, e, i, e, i, t.shiftKey), !0)
	}
	
	function Aa(t, n) {
		const o = $a(t, n),
		e = o.x,
		i = o.y,
		r = e - $t.x,
		c = i - $t.y;
		return $t.x = e, $t.y = i, 1 === n ? (function(t, n) {
			let o = $t.marker;
			o || (o = $t.marker = {}, o.main = S.Xo.path(Bt), o.section = S.Fe.line(0, 0, 0, 0), [o.main, o.section].forEach((t => t.Ln(f ? At : Et, 1, .5).Cn("15 15", 7.5).addClass("no_export passthrough"))));
			o.section.attr({
				x1: Mo(t),
				x2: Mo(t),
				y1: 0,
				y2: Va.Nt
			});
			const e = po(mo(t)),
			i = ho(vo(t)),
			r = lt ? ot + et : ft * ct,
			c = Math.sin(ef()) * r,
			s = -Math.cos(ef()) * r,
			u = r > 30;
			o.main.Cn(u ? "15 15" : "");
			const l = uc(e, i, e + c, i + s, !0) + uc(e, i, e - c, i - s);
			o.main.co(l)
			}(e), void(null != $t.down && $t.down.area === n && Ku(n, $t.down.x, $t.down.y, e, i, t.shiftKey))) : (2 === C || xa ? null != $t.down && $t.down.area === n && (ll(it.x + r, it.y + c), ye(e - $t.down.x, i - $t.down.y), function(t, n) {
				$(T.ot.canvas).css({
					left: X + t,
					top: V + n
				})
				}(e - $t.down.x, i - $t.down.y), Ma(r, c), W() && mf(), $t.ruler && ($t.clicks.length > 0 ? Ku(n, $t.clicks[$t.clicks.length - 1].x, $t.clicks[$t.clicks.length - 1].y, e, i, t.shiftKey) : tl())) : 8 === C ? ($t.clicks.length > 0 && Ku(n, $t.clicks[$t.clicks.length - 1].x, $t.clicks[$t.clicks.length - 1].y, e, i, t.shiftKey), null != $t.down && $t.down.area === n && Ku(n, $t.down.x, $t.down.y, e, i)) : (Mr || 1 === C || ($t.clicks.length > 0 ? Ku(n, $t.clicks[$t.clicks.length - 1].x, $t.clicks[$t.clicks.length - 1].y, e, i, t.shiftKey) : null != $t.down && $t.down.area === n && (3 === C ? Math.hypot(e - $t.down.x, i - $t.down.y) > 25 && Ku(n, $t.down.x, $t.down.y, e, i) : Ku(n, $t.down.x, $t.down.y, e, i, t.shiftKey))), Mr && C >= 4 && function(t, n, o, e, i) {
				$t.sticky && Ar.call($t.sticky, t, n, o, e, i)
			}(e, i, Mr.x - e, Mr.y - i, t)), !0)
	}
	
	function Ea(t) {
		(2 === C || xa) && null != $t.down && 0 === $t.down.area && (Du(), te()), $t.clicks.length || tl(), $t.down = null
	}
	
	function Na(t) {
		$t.clicks.push(t), w_(!0)
	}
	
	function Ta(t) {
		$t.clicks = [], Ea(), w_(!1)
	}
	
	function La(n, o) {
		const e = $a(n, o);
		let i = e.x,
		r = e.y;
		if (null != $t.sticky) {
			! function(t) {
				Er.call($t.sticky, t), $t.sticky = null
			}(n);
			const t = data.b.length - 1;
			return data.b[t].setting = 1, Du("b", t), Ta(), Nl(F, null, 0, 0, !0), Uu(), !0
		}
		if (1 === o) return !$t.down || Math.hypot(i - $t.down.x, r - $t.down.y) > kt || sa(o, i, r), void Ea();
		if ($t.clicks.length > 0 && 4 === C && Oo(F)) {
			const t = $t.clicks[$t.clicks.length - 1];
			if ((ya(n) < 2 && !(Math.hypot(t.x - $t.down.x, t.y - $t.down.y) > 10) || 3 == ya(n)) && $t.clicks.length > 1) return Ta(), Nl(F, null, 0, 0, !0), Uu(), !0
		}
		if (3 === C && 3 === ya(n)) {
			sl(ct / 1.5, i, r) && ba()
		} else C > 0 && 3 === ya(n) && Kl(0);
		if (ya(n) > 1) return Ta(), !0;
		if (0 === C && (Mr || jr || Math.hypot(i - $t.down.x, r - $t.down.y) > kt || sa(o, i, r)), xa || 3 !== C || (ya(n) < 2 && n.altKey ? fa() && ba() : Math.hypot(i - $t.down.x, r - $t.down.y) > 25 ? pa(i, r, $t.down.x, $t.down.y) && ba() : n.shiftKey ? da(i, r) && ba() : _a(i, r) && ba()), (2 === C || xa) && (ul = !1, $("#objects").removeClass("panning"), ye(), ba()), !xa && C >= 4 && null != $t.down && $t.down.area === o) {
			if (n.shiftKey && 6 !== C && (Mr ? Math.abs(Mr.x - i) >= Math.abs(Mr.y - r) ? r = Mr.y : i = Mr.x : $t.down && (Math.abs($t.down.x - i) >= Math.abs($t.down.y - r) ? r = $t.down.y : i = $t.down.x)), 4 === C)
			if (Oo(F))
			if (0 === $t.clicks.length && Math.hypot(i - $t.down.x, r - $t.down.y) > 10) yl(F, [fo($t.down.x), fo(i)], [_o($t.down.y), _o(r)]), Ta(), "c" === F ? Cr(F, data.b.length - 1, i, r, n) : (Uu(), Nl(F, null, 0, 0, !0));
			else {
				if (n.shiftKey)
				if ($t.clicks.length > 1) {
					const n = $t.clicks[$t.clicks.length - 2],
					o = $t.clicks[$t.clicks.length - 1],
					e = t.orthoPoint([n.x, n.y, o.x, o.y], [i, r]);
					i -= e[0] - o.x, r -= e[1] - o.y
					} else if ($t.clicks.length > 0) {
					const t = $t.clicks[$t.clicks.length - 1];
					Math.abs(t.x - i) >= Math.abs(t.y - r) ? r = t.y : i = t.x
				}
				0 === $t.clicks.length ? Na(ja(i, r)) : 1 === $t.clicks.length ? (yl(F, [fo($t.clicks[0].x), fo(i)], [_o($t.clicks[0].y), _o(r)]), "c" === F ? (Ta(), Cr(F, data.b.length - 1, i, r, n)) : Na(ja(i, r))) : $t.qe ? (wl(F, data.b.length - 1), Ta(), Uu(), Nl(F, null, 0, 0, !0)) : (! function(t, n, o, e) {
					if (!Oo(t)) return;
					const i = Uo(t);
					null == n && (n = i.length - 1), i[n].x.push(Zn(o)), i[n].y.push(Zn(e)), el(t), xe(t, n)
				}(F, null, fo(i), _o(r)), Na(ja(i, r)))
			}
			else if ("bmp" === F) ! function(t, n) {
				const o = Dn.pi;
				o.x = t, o.y = n, $("input", o.ve).val("").removeClass("valid"), ql(), $("#addbmp_results").hide(), Jl(), Ul(), o.ie()
			}(i, r);
			else {
				if (!yl(F, fo(i), _o(r))) return;
				Uu(), Nl(F, null, 0, 0, !0)
			}
			if (6 === C || 7 === C)
			if (0 === $t.clicks.length && Math.hypot(i - $t.down.x, r - $t.down.y) > 10) 6 === C ? me(fo($t.down.x), _o($t.down.y), fo(i), _o(r), !0) : ff(fo($t.down.x), _o($t.down.y), fo(i), _o(r), null, !0), Ta();
			else {
				if (n.shiftKey) {
					let t = $t.clicks[$t.clicks.length - 1];
					7 === C && (Math.abs(t.x - i) >= Math.abs(t.y - r) ? r = t.y : i = t.x)
				}
				0 === $t.clicks.length ? Na(ja(i, r)) : (6 === C ? me(fo($t.clicks[0].x), _o($t.clicks[0].y), fo(i), _o(r), !0) : ff(fo($t.clicks[0].x), _o($t.clicks[0].y), fo(i), _o(r), null, !0), Ta())
			} if (8 === C)
			if ($t.clicks.length > 0 || Math.hypot(i - $t.down.x, r - $t.down.y) > 10) {
				const n = $t.clicks.length ? $t.clicks[0] : $t.down;
				c = i, s = r, u = n.x, l = n.y, $("#calcscale_measured").val(t.round(Math.hypot(u - c, l - s) / ct, 2)), Dn._n.ie(), Dn.hi.ie(), Kl(0), $("#calcscale_known").focus(), Vu("scale"), Ta()
			} else Na(ja(i, r))
		}
		var c, s, u, l;
		return Ea(), !0
	}
	let Sa;
	let Ra, Da = 0;
	
	function Ha(t, n, o) {
		clearTimeout(Ra);
		let e = Da - Date.now() + 5e3;
		e < 0 && (e = 0), Ra = setTimeout((function() {
			! function(t, n, o) {
				$.ajax(l + "run.php", {
					data: {
						action: "shorturl",
						format: "json",
						title: "",
						url: t
					},
					type: "POST",
					success: function(e) {
						e.shorturl ? (n && n(e.shorturl), Oa.push([Pa(e.shorturl), t])) : (o && o(), Xu(g("alert_short_url_fail") + " (Runtime error)", Ot, "shorturl"))
					},
					error: function(t) {
						o && o(), Xu(g("alert_short_url_fail") + " (Failed to connect)", Ot, "shorturl")
					}
				})
			}(t, n, o), Da = Date.now()
		}), e)
	}
	const Oa = [];
	
	function Pa(t) {
		if (!t) return !1;
		const n = t.split("/");
		return n[n.length - 1]
	}
	
	function Ca(t) {
		const n = function(t) {
			na(0, !0), Zs(0), ti(), Gu(!0, t), Za(), Uu()
		};
		for (let o = 0; o < Oa.length; o++) t === Oa[o][0] && n(Oa[o][1]);
		$.ajax(l + "run.php", {
			data: {
				action: "expand",
				format: "json",
				shorturl: t
			},
			type: "GET",
			success: function(o) {
				o.longurl ? (Oa.push([t, o.longurl]), n(o.longurl)) : Xu(g("alert_short_url_fail") + " (Runtime error)", Ot, "shorturl")
			},
			error: function(t) {
				Xu(g("alert_short_url_fail") + " (Failed to connect)", Ot, "shorturl")
			}
		})
	}
	
	function Fa(t) {
		$("#short_url").val(""), t ? $("#short_url, #short_url_copy").hide() : $("#short_url, #short_url_copy").fadeOut()
	}
	let qa = {
		Lt: null,
		gi: null,
		dt: !1,
		bi: 3e3
	};
	
	function Ua() {
		const t = function(t) {
			t && (t.Tt && !t.Tt() || t.animate({
				opacity: .1
			}))
		};
		t(qa.Lt), t(Dn.Lt.ve), t(Dn.St.ve), qa.dt = !0
	}
	
	function Ba() {
		if (clearTimeout(qa.gi), qa.dt) {
			const t = function(t) {
				t && (t.Tt && !t.Tt() || t.stop().css({
					opacity: 1
				}))
			};
			t(qa.Lt), t(Dn.Lt.ve), t(Dn.St.ve), qa.dt = !1
		}
	}
	
	function Za() {
		oe(), Ts(), xe("grid"), J() && (xe("section"), tf()), wu(), Dn._n.Tt() && (Tl() || $("#edit").click()), Qe(!0, 500)
	}
	let Ja, Wa = !1;
	
	function Ya(t, n, o, e) {
		const i = $(k_.oe("frame")).appendTo($("#frames"));
		i.addClass("frame"), i.ri = function(t, n) {
			if (void 0 === t && (t = !this.At()), !0 === t) {
				if (this.At()) return;
				this.mi(), this.h = this.vi.height(), this.vi.stop().animate({
					height: "0"
				}, 500)
				} else {
				if (n && !this.At()) return this.vi.css({
					height: "0"
				}), void this.$i(this.h, !0);
				this.$i(this.h)
			}
			}, i.yi = function(t, n = null, o = !1) {
			const e = .9 * ot,
			i = .9 * et;
			!1 !== this.wi && t && n && (this.wi = t / n), t || (t = this.vi.width()), !this.xi && t > e && (t = e, this.wi && (n = t / this.wi)), t < 300 && (t = 300, this.wi && (n = t / this.wi)), n || (!1 === this.wi ? n = this.vi.height() : (this.wi || (this.wi = ot / et), n = t / this.wi)), !this.xi && n > i && (n = i, this.wi && (n * this.wi > e ? n = (t = e) / this.wi : t = n * this.wi)), n < 100 && !1 === this.wi && (n = 100), !1 !== this.wi && (this.wi = t / n), t = Math.round(t), n = Math.round(n), this.vi.width(t), this.w = t, this.vi.css({
				left: Math.round((this.width() - this.vi.width()) / 2)
			}), this.$i(n, o)
			}, i.$i = function(t, n) {
			t ? this.h = t : t = this.h, !1 === n ? this.vi.css({
				height: t
				}) : (t && $(".frame_tools", this.vi).css({
					opacity: 0
					}), this.vi.stop().animate({
					height: t
					}, 500, (function() {
						$(".frame_tools", this.vi).animate({
							opacity: 1
						}, 300)
					}))), this.mi(!1)
					}, i.ki = function(t, n, o) {
					return this.addClass("resizing"), Wa = {
						frame: this,
						r: t,
						x: n,
						y: o,
						h: this.h,
						w: this.w
					}, !0
					}, i.Mi = function(t, n) {
					if ("t" === Wa.r) {
						const t = Wa.h + (Wa.y - n);
						return this.yi(null, t)
					}
					let o;
					return o = "l" === Wa.r ? Wa.w + 2 * (Wa.x - t) : Wa.w - 2 * (Wa.x - t), this.yi(o)
					}, i.ji = function() {
					return this.removeClass("resizing"), this.ui(), Wa = !1, !0
					}, i.vi = $(k_.oe("frame_inner")).appendTo(i), i.Ii = $(k_.oe("frame_content")).appendTo(i.vi), i.ci = $(k_.oe("frame_canvas")).appendTo(i.Ii), i.zi = $(k_.oe("frame_shadow")).appendTo(i.vi), i.L = $(k_.oe("frame_title", "", k_.te(t, "title_text"))).appendTo(i.Ii).click((function() {
						i.At() && i.ri(!1)
					})), i.li = $(k_.oe("frame_title_l")).prependTo(i.L), i.Ai = $(k_.oe("frame_title_r")).appendTo(i.L);
					const r = function(t) {
						return $(k_.oe("frame_tools " + t)).appendTo(i.Ii)
					};
					i.Ei = r("bl"), i.Ni = r("br"), i.Ti = r("tr"), e && $(k_.Ko(svgIcon("help"), "frame_button")).appendTo(i.Ai).click((function() {
						L_(e)
						})), $("html").hasClass("no-touch") && $(k_.Ko(svgIcon("ext"), "frame_button frame_button_popup", "", g("frame_popout"))).appendTo(i.Ai).click((function() {
						if (Ga) return Ga.Li = !0, Xa(), i.vi.show(), $(this).html(svgIcon("ext")), !1;
						i.ri(!1, !1), i.xi = !0;
						const t = function(t, n) {
							if (null == Ga || Ga.closed) {
								if (Ga = window.open("", "popup_window", "top=100,left=100,width=" + t + ",height=" + n + ",resizable,directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no"), !Ga) return void Xu(g("alert_new_window_fail"), Ot);
								window.onbeforeunload = function() {
									Xa()
								};
								const o = f ? "light_theme" : "";
								Ga.document.write(`\n<!DOCTYPE HTML>\n<html id="popup_window">\n<head>\n<title>${Oe}</title>\n<link rel="stylesheet" type="text/css" href="css/calc-db-soundpath-min.css?v=1.5.4">\n</head>\n<body id="popup" class="${o}">\n</body>\n</html>\n`)
							} else Ga.focus();
							return Ga
						}(i.vi.width(), i.vi.height() + i.L.height());
						t.addEventListener("resize", (function(t) {
							clearTimeout(Ja), Ja = setTimeout((function() {
								i.yi(i.Ii.width(), i.Ii.height()), i.ui()
							}), 50)
							})), t.addEventListener("beforeunload", (function(t) {
							if (!Ga.Li) return na(0);
							const n = i.Ii.width(),
							o = i.Ii.height();
							return i.Ii.prependTo(i.vi), i.xi = !1, i.vi.show(), i.yi(i.Ii.width(), i.Ii.height()), i.ui(i.Ii.width() === n && i.Ii.height() === o), Xa(), null
						})), $(t.document.body).html("").append(i.Ii), i.vi.hide(), $(this).html(svgIcon("int"))
						})), $(k_.Ko(k_.te(svgIcon("down", {
							w: 20
							}), "icon_min") + k_.te(svgIcon("up", {
							w: 20
						}), "icon_unmin"), "frame_button frame_button_min", "", g("frame_minimise"))).appendTo(i.Ai).click((function() {
						i.ri(), event.stopPropagation()
					}));
					$(k_.oe("resize resize_left")).appendTo(i.vi).on("mousedown touchstart", (function(t) {
						const n = $a(t);
						i.ki("l", n.x, n.y) && t.preventDefault()
						})), $(k_.oe("resize resize_right")).appendTo(i.vi).on("mousedown touchstart", (function(t) {
						const n = $a(t);
						i.ki("r", n.x, n.y) && t.preventDefault()
						})), $(k_.oe("resize resize_top")).appendTo(i.vi).on("mousedown touchstart", (function(t) {
						const n = $a(t);
						i.ki("t", n.x, n.y) && t.preventDefault()
					}));
					return i.yi(n, o), window.addEventListener("resize", (function() {
						clearTimeout(Ja), Ja = setTimeout((function() {
							i.yi(null, null), i.ui()
						}), 50)
					})), i.hide(), i
	}
	let Ga = null;
	
	function Xa() {
		Ga && ($(Ga).children().remove(), Ga.close(), Ga = null)
	}
	let Va = {};
	
	function Qa() {
		null == data.section && (data.section = {
			type: "section"
		});
		const t = data.section;
		null != t.x && 2 === t.x.length || (t.x = [data.grid.x[0], data.grid.x[1]]), null != t.y && 2 === t.y.length || (t.y = [Zn((data.grid.y[1] - data.grid.y[0]) / 2) + data.grid.y[0], Zn((data.grid.y[1] - data.grid.y[0]) / 2) + data.grid.y[0]])
	}
	
	function Ka(t, n) {
		data._put("section", 0, n, 0), cf()
	}
	
	function tf() {
		const n = S.je.g(),
		o = (data.section, n.path(Bt).zn(Ft).attr({
			"stroke-width": 2,
			"stroke-opacity": .1
		}).addClass("passthrough no_export")),
		e = n.path(Bt).zn(Ft).attr({
			"stroke-width": 26,
			"stroke-opacity": .25,
			"stroke-linecap": "round"
		}).addClass("no_export"),
		i = n.path(Bt).zn(Ft).attr({
			"stroke-width": 2
		}).addClass("export_as_black"),
		r = wt / 3,
		c = Mo(10),
		s = "M0 " + r + "L-" + r + " " + c + "L" + r + " " + c + "z",
		u = n.path(s).addClass("export_as_black"),
		l = n.Vo(0, -6, g("mode2"), 11).addClass("export_as_black"),
		a = n.path(Bt).zn(Ft).Ln(Et, 20, 0).attr({
			"stroke-linecap": "round"
			}).data({
			type: "section",
			cursor: "pointer"
		}),
		_ = n.circle(0, 0, r),
		d = n.circle(0, 0, r);
		[_, d].forEach((t => t.Ln(At, wt, 0).data({
			type: "section",
			cursor: "pointer"
		}).addClass("export_as_black"))), Br([a, _, d]), a.Zn = function(t, n, o) {
		const e = data.section;
		o && Mr && (Math.abs(Mr.x - t) >= Math.abs(Mr.y - n) ? n = Mr.y : t = Mr.x), a.position(null, t, n, t + (e.x[1] - e.x[0]) * ct, n + (e.y[1] - e.y[0]) * ct, !1)
		}, a.qn = function(t) {
		const n = data.section;
		a.position(null, po(n.x[1]), ho(n.y[1]), po(n.x[0]), ho(n.y[0])), xe("section")
		}, a.position = function(n, r, c, s, f, p = !0) {
		const h = data.section;
		let g = !1;
		isNaN(r) || null == r ? r = po(h.x[0]) : g = !0, isNaN(c) || null == c ? c = ho(h.y[0]) : g = !0, isNaN(s) || null == s ? s = po(h.x[1]) : g = !0, isNaN(f) || null == f ? f = ho(h.y[1]) : g = !0, g && ff(fo(r), _o(c), fo(s), _o(f), null, p);
		const b = "M0 0L" + (s - r) + " " + (f - c),
		m = xo(r, c),
		v = xo(s, f),
		y = "r" + t.angle(r, c, s, f) / (Math.PI / 180) + ",0,0";
		[i, e, a, o].forEach((function(t) {
			t.co(b).transform(m)
		})), o.attr({
		"stroke-width": ft * ct * 2
		});
		const w = {
			x: (r + s) / 2,
			y: (c + f) / 2
		};
		u.transform(xo(w.x, w.y) + y), l.transform(xo(w.x, w.y) + y), _.transform(m), d.transform(v), $(".title_text", Va.zt.L).html(_f())
		}, a.updateDetail = function() {
		const t = f ? At : Et,
		n = f ? Et : At,
		r = f ? D.Fo : D.qo;
		e.Ln(n), [i, u].forEach((n => n.Ln(t))), [_, d, u].forEach((n => n.zn(t))), o.Ln(r), l.zn(t)
		}, _.Zn = function(n, o, e) {
		const i = data.section;
		if (e && Mr) {
			const e = t.orthoPoint([Mr.x, Mr.y, po(i.x[1]), ho(i.y[1])], [n, o]);
			n = e[0], o = e[1]
		}
		a.position(null, n, o, null, null, !1)
		}, d.Zn = function(n, o, e) {
		const i = data.section;
		if (e && Mr) {
			const e = t.orthoPoint([Mr.x, Mr.y, po(i.x[0]), ho(i.y[0])], [n, o]);
			n = e[0], o = e[1]
		}
		a.position(null, null, null, n, o, !1)
		}, Go("section", 0, [n]), yc(a), Pu("section", 0), n.Fn(0).Fn(1, !0)
	}
	const nf = function() {
		return null != data.section
	},
	of = function(t) {
		return void 0 !== t && (data.section.offset = t), data.section.offset
	},
	ef = function(t) {
		return void 0 !== t && (data.section.angle = t), data.section.angle
	},
	rf = function(t) {
		return void 0 !== t && (data.section.length = t), data.section.length
	};
	
	function cf() {
		if (!nf()) return !1;
		const t = data.section,
		n = Math.hypot(t.x[1] - t.x[0], t.y[1] - t.y[0]);
		rf(n);
		let o = Math.atan((t.y[1] - t.y[0]) / (t.x[1] - t.x[0]));
		t.x[1] < t.x[0] && (o -= Math.PI), ef(o)
	}
	
	function sf(t) {
		if (!Va.zt) return !1;
		if (!nf()) return !1;
		const n = data.section;
		if (Va.Et = Va.zt.w, Va.Nt = Va.zt.h, st && Va.Nt && null != of()) {
			const t = uf(Va.Nt, !0);
			t !== n.z && (n.z = t, Uu(!0))
		}
		Va && L.section && L.section.attr({
			width: Va.Et,
			height: Va.Nt,
			viewBox: "0 0 " + Va.Et + " " + Va.Nt
		}), t || xe("section")
	}
	
	function uf(t, n) {
		return n ? Zn(t / st) + of() : Math.round((t - of()) * st)
	}
	
	function lf(t) {
		if (!nf()) return !1;
		st = Va.Et / rf(), Ns(), af(), t && Va.Nt && (data.section.z = uf(Va.Nt, !0))
	}
	const af = function() {
		let n;
		for (let o = 0; o < Va.Et; o++) {
			const e = o * (1 / Va.Et) * rf(),
			i = Math.cos(ef()) * e + data.section.x[0],
			r = Math.sin(ef()) * e + data.section.y[0],
			c = t.calcGroundHeight(i, r);
			(null == n || c < n) && (n = c)
		}
		of(Math.floor(n / (Es.vscale / st)) * (Es.vscale / st))
	};
	
	function ff(t, n, o, e, i, r) {
		if (!Fn([t, n, o, e])) return !1;
		const c = Math.hypot(e - n, o - t);
		if (c < 2.001) return !1;
		if (!nf()) return !1;
		if (data.section.x = [t, o], data.section.y = [n, e], data.section.z = i, !r) return cf(), !1;
		if (xe("section"), i) {
			const t = Va.Et,
			n = Va.Et * ((i - of()) / c);
			Va.zt.yi(t, n, !0), Va.zt.ui()
		} else Va.zt.ri(!1);
		Uu()
	}
	
	function _f(t) {
		return g("mode2") + Xs(To(rf())) + (t ? " length, " : " &times; ") + To(data.section.z - of()) + (t ? " height " : "")
	}
	
	function df() {
		const t = $t.marker;
		t && (t.main.remove(), t.section.remove(), $t.marker = null)
	}
	let pf = {},
	hf = {};
	
	function gf(t = !1) {
		if (pf.zt && !t) return !1;
		pf.x = Math.round(ot / 2), pf.y = Math.round(et / 2), pf.r = 0, pf.Et || (pf.Et = Math.round(.333 * ot)), pf.Nt || (pf.Nt = Math.round(.333 * et));
		const n = Ya(g("mode3"), pf.Et, pf.Nt, "#inspect3d");
		n.ui = function() {
			! function() {
				if (!pf.zt) return !1;
				if (pf.Et = pf.zt.w, pf.Nt = pf.zt.h, pf.wi = pf.zt.wi, !pf.Si) return;
				pf.Si.aspect = pf.Et / pf.Nt, pf.Si.updateProjectionMatrix(), pf.Ri.setSize(pf.Et, pf.Nt)
			}()
			}, pf.zt = n, n.wi = !1, $(k_.Ko(svgIcon("grid"), "frame_toggle", "view3d_showgrid", g("frame_3d_show_grid"))).appendTo(n.li).click((function() {
				n.At() || (wf(!1), mf(), $(this).dt(Af))
				})).dt(Af), $(k_.Ko(svgIcon("section"), "frame_toggle", "view3d_showsection", g("frame_3d_show_section"))).appendTo(n.li).click((function() {
				n.At() || (wf(!0), $(this).dt(Ef))
			})).dt(Ef);
			const o = function(t, o) {
				$(k_.Ko(svgIcon(t), "frame_button", "view3d_" + t, g("frame_3d_set"))).appendTo(n.Ni).click((function() {
					mf(o, !1)
				}))
			};
			o("sw", 1), o("se", 4), o("ne", 3), o("nw", 2);
			const e = $(k_.Ko("", "frame_button", "view3d_above", g("frame_3d_reset"))).appendTo(n.Ei).click((function() {
				mf(5, !0)
			})),
			i = $(svgIcon("target", {
				vw: 60,
				w: 40
			})).appendTo(e),
			r = new Snap(i[0]);
			let c, s;
			Dn.Di = r.select(".svgicon");
			const u = function(t) {
				null != s && (vf(t), clearTimeout(c), c = setTimeout((function() {
					u(t)
				}), s), s > 50 && (s *= .5))
			},
			l = function(t) {
				const o = t ? "up" : "down";
				return $(k_.Ko(svgIcon("z_" + o), "frame_button", "view3d_" + o, g("frame_3d_" + o))).appendTo(n.Ti).on("mousedown", (function() {
					s = 600, u(t)
					})).on("mouseup mouseleave", (function() {
					s = null
				}))
			};
			l(!0), $(k_.Ko(svgIcon("z_grid"), "frame_button", "view3d_grid", g("frame_3d_grid"))).appendTo(n.Ti).click((function() {
				vf("grid")
			})), l();
			pf.Hi = new THREE.Scene, THREE.Object3D.DefaultUp.set(0, 0, 1), pf.Si = new THREE.PerspectiveCamera(30, n.w / n.h, 1, 1e4);
			pf.Ri = new THREE.WebGLRenderer({
				antialias: !0,
				alpha: !1,
				preserveDrawingBuffer: t
			}), pf.Ri.setPixelRatio(window.devicePixelRatio), pf.Ri.setSize(n.w, n.h), pf.Ri.setClearColor(0, 0), zf && (pf.Ri.shadowMap.enabled = !0), pf.ci = pf.Ri.domElement, $(n.ci).append(pf.ci),
			function(t) {
				let n = pf;
				n.Oi && n.Oi.dispose();
				t || (t = n.Ri.domElement);
				n.Oi = new THREE.OrbitControls(n.Si, t), n.Oi.maxPolarAngle = Math.PI / 2, n.Oi.minDistance = 10, n.Oi.maxDistance = 1e3
			}()
	}
	
	function bf() {
		if (!W()) return;
		if (null == pf.Hi) return;
		requestAnimationFrame(bf), pf.Oi.update(), pf.Ri.render(pf.Hi, pf.Si);
		const n = new THREE.Vector3;
		pf.Si.getWorldDirection(n);
		const o = t.round(Math.atan2(n.x, n.y), 6);
		pf.x === go(pf.Oi.target.x) && pf.y === bo(-pf.Oi.target.y) && pf.r === o || (pf.x = go(pf.Oi.target.x), pf.y = bo(-pf.Oi.target.y), pf.r = o, hf.V.position())
	}
	
	function mf(n, o) {
		(o || isNaN(pf.x) || null == pf.x) && (pf.x = Math.round(ot / 2)), (o || isNaN(pf.y) || null == pf.y) && (pf.y = Math.round(et / 2)), (o || isNaN(pf.z) || null == pf.z) && (pf.z = "grid");
		let e = function(t) {
			return Zn(fo(t))
		}(pf.x),
		i = function(t) {
			return Zn(_o(t))
		}(pf.y);
		pf.gh = t.calcGroundHeight(e, i);
		let r = "grid" === pf.z ? data.grid.h + (data.grid.abs ? 0 : pf.gh) : pf.z + pf.gh,
		c = $f();
		if ("object" == typeof n) c = n;
		else if (n > 0) {
			let t = 0,
			o = 0,
			e = 1;
			n < 5 && (t = n > 2 ? 1 : -1, o = 2 === n || 3 === n ? 1 : -1);
			const i = Math.hypot(ot, et) / ct * (1 / Math.hypot(t, o, e));
			c = {
				x: t * i,
				y: o * i,
				z: e * i
			}
		}(n || o) && Du("target"), i = -i, pf.Oi.target.set(e, i, r), pf.Si.position.set(e + c.x, i + c.y, r + c.z),
		function() {
			const t = "grid" === pf.z || null == pf.z;
			$("#view3d_grid").dt(t)
		}()
	}
	
	function vf(t) {
		"grid" === t ? pf.z = "grid" : ("grid" === pf.z && (pf.z = data.grid.h + (data.grid.abs ? -pf.gh : 0)), t ? pf.z++ : pf.z--, pf.z < 0 && (pf.z = 0)), mf()
	}
	
	function $f() {
		const t = pf.Si.position,
		n = pf.Oi.target;
		return {
			x: t.x - n.x,
			y: t.y - n.y,
			z: t.z - n.z
		}
	}
	
	function yf() {
		if (!W()) return;
		const n = pf.Hi;
		if (!n) return;
		for (; n.children.length;) n.remove(n.children[0]);
		
		function o(t, n, o, e, i, r) {
			const c = new THREE.DirectionalLight("white", r);
			zf && (c.castShadow = !0), c.position.set(o, e, i), c.name = n, t.add(c)
		}
		n.dispose(), n.background = new THREE.Color(f ? "#ccc" : "#333"), n.add(new THREE.HemisphereLight(At, Et, .333));
		const e = new THREE.Group;
		o(e, "S light", 0, -1, 1, .25), o(e, "SW light", -1, -1, 1, .5), o(e, "SE light", 1, -1, 1, .333), o(e, "NW light", -1, 1, 1, .5), o(e, "NE light", 1, 1, 1, .333), n.add(e), pf.Pi = e;
		const i = data.ground.gh_min,
		r = function(t, n, o) {
			const e = t.s;
			return [e.sx[n], -e.sy[n], o]
		},
		c = function(t, n) {
			const o = t.s;
			return r(t, n, o.sz[n])
		},
		s = function(t, n) {
			return r(t, n, i)
		},
		u = function(t, n) {
			const o = t.s;
			return r(t, n, o.sz[n] + o.sh[n])
		},
		l = function(t, n, o, e, i) {
			t.push(n, o, e), t.push(o, e, i)
		},
		a = function(t, n, o, e) {
			l(t, s(n, o), u(n, o), s(n, e), u(n, e))
		},
		_ = function(t, n, o, e, i) {
			t.push(r(n, o, i), r(n, e, i), u(n, e))
		},
		d = function(t, n, o, e) {
			t.push(c(n, o), u(n, o), u(n, e), c(n, e), c(n, o))
		},
		p = function(t, o) {
			const e = t.s,
			r = e.sx,
			c = e.sy,
			s = [];
			for (let t = 0; t < r.length; t++) s.push([r[t], -c[t]]);
			return function(t, n, o, e, i, r = Et, c = 1) {
				const s = new THREE.Shape;
				s.moveTo(n[0][0], n[0][1]);
				for (let t = 0; t < n.length; t++) s.lineTo(n[t][0], n[t][1]);
				if (i) {
					n = n.reverse();
					for (let t = 1; t < n.length; t++) s.lineTo(n[t][0], n[t][1])
				}
				const u = {
					depth: e,
					bevelEnabled: !1
				},
				l = new THREE.ExtrudeGeometry(s, u),
				a = Hf(t, l, r, c);
				a.position.z = o
			}(n, s, i, o - i, "b" === t.type), o
		},
		h = function(t, o) {
			const e = function(t, n, e, i, c, s, a) {
				_(t, n, e, i, o), a && function(t, n, o, e, i) {
					l(t, r(n, o, i), u(n, o), r(n, e, i), u(n, e))
				}(t, n, i, c, o), _(t, n, s, c, o),
				function(t, n, o, e, i, r) {
					l(t, u(n, o), u(n, e), u(n, r), u(n, i))
				}(t, n, e, i, c, s)
			},
			i = [];
			1 === t.roof && (t.h_roof < t.h ? e(i, t, 2, 3, 0, 1, !0) : e(i, t, 0, 1, 2, 3, !0)), 2 === t.roof && (e(i, t, 3, 4, 1, 2, !1), e(i, t, 0, 1, 4, 5, !1)), Cf(n, i)
		},
		b = function(t, o) {
			const e = function(o) {
				Ff(n, [c(t, o), u(t, o)])
			},
			i = t.s.sx.length,
			r = [],
			s = [];
			for (let n = 0; n < i; n++) r.push(u(t, n)), s.push(c(t, n));
			if (r.push(u(t, 0)), s.push(c(t, 0)), Ff(n, r), Ff(n, s), 2 === t.roof) {
				const o = [0, 2, 3, 5];
				for (let t = 0; t < o.length; t++) e(o[t]);
				l = 4, Ff(n, [u(t, 1), u(t, l)])
			} else
			for (let t = 0; t < i; t++) e(t);
			var l;
			if (3 === t.roof) {
				const o = t.s.roof_lines;
				for (let t = 0; t < o.length; t++) {
					const e = o[t],
					i = e[0],
					r = e[1];
					Ff(n, [
						[i[0], -i[1], i[2]],
						[r[0], -r[1], r[2]]
					])
				}
			}
		},
		m = function(t) {
			if (t.setting < 1) return;
			const o = k(t),
			e = "c" === t.type,
			i = (t.slope, t.roof);
			if (!e) return o ? function(t) {
				const o = t.s,
				e = [];
				for (let n = 0; n < o.sx.length - 1; n++) d(e, t, n, n + 1);
				Ff(n, e)
				}(t) : function(t) {
				const o = t.s,
				e = [];
				for (let n = 0; n < o.sx.length - 1; n++) a(e, t, n, n + 1);
				Cf(n, e)
			}(t);
			const r = M(t);
			return o ? b(t) : (p(t, r), 1 === i || 2 === i ? h(t, r) : 3 === i ? function(t) {
				const o = t.s.roof_tri;
				if (!o) return;
				const e = [];
				for (let t = 0; t < o.length; t++) {
					const n = o[t];
					for (let t = 0; t < 3; t++) {
						const o = n[t];
						e.push([o[0], -o[1], o[2]])
					}
				}
				Cf(n, e)
			}(t) : void 0)
		},
		v = function(t) {
			if (t.setting > 0) {
				if (k(t)) return function(t, n, o, e, i = Et) {
					const r = Lf;
					Ff(t, [
						[n - r, o, e],
						[n + r, o, e]
						], i), Ff(t, [
						[n, o - r, e],
						[n, o + r, e]
						], i), Ff(t, [
						[n, o, e - r],
						[n, o, e + r]
					], i)
				}(n, t.x, -t.y, t.z + t.h);
				! function(t, n, o, e, i = Df, r = 1) {
					const c = Lf,
					s = Lf / 6;
					Of(t, n - c, o - s, e - s, n + c, o + s, e + s, i, r), Of(t, n - s, o - c, e - s, n + s, o + c, e + s, i, r), Of(t, n - s, o - s, e - c, n + s, o + s, e + c, i, r)
				}(n, t.x, -t.y, t.z + t.h)
			}
		},
		$ = function(t) {
			if (t.setting > 0) {
				const o = k(t),
				e = [],
				i = t.s;
				for (let n = 0; n < i.sx.length; n++) e.push([i.sx[n], -i.sy[n], i.sz[n] + t.h]);
				if (o) return Ff(n, e);
				! function(t, n, o, e = Df, i = 1) {
					for (let r = 0; r < n.length; r++) Pf(t, n[r][0], n[r][1], n[r][2], o, e, i), r < n.length - 1 && qf(t, [n[r], n[r + 1]], o, e, i)
				}(n, e, Rf)
			}
		},
		y = function(t) {
			for (let o = 0; o < t.it.length; o++) {
				const e = t.it[o],
				i = Li(Nc(e), !0);
				Pf(n, t.x, -t.y, e.ln, Nf, i)
			}
		},
		w = function(t) {
			if (t.setting > 0 && function(t, n, o, e, i, r, c = Df, s = 1) {
				const u = new THREE.CylinderBufferGeometry(0, i / 2, r, 4, 1),
				l = Hf(t, u, c, s);
				l.rotateX(Math.PI / 2), l.position.x = n, l.position.y = o, l.position.z = e - r / 2
			}(n, t.x, -t.y, t.z + rc(t), 2 * Tf, 2 * Tf, Df), !t.fn) return;
			let o;
			if (Cs < 2 && (o = t.fn[0]), Fs(Cs) && (o = t.fn[1]), o)
			for (let e = 0; e < o.length; e++) {
				const i = o[e];
				if (!i.xyz) continue;
				const r = qo(i.xyz);
				for (let t = 0; t < r.length; t++) {
					r[t][1] = -r[t][1];
					const o = r[t];
					if (t > 0 && t < r.length - 1) {
						const t = o[3],
						e = fr(i.is_vertical, -1 === t && i.is_limited, -2 === t || t > 0);
						Pf(n, o[0], o[1], o[2], Sf, e, 1), t > 0 && (o[2] = t)
					}
				}
				const c = fr(i.is_vertical, i.is_limited);
				let s = _r(i.freq, 1);
				const u = [.5, .5],
				l = 2 === t.setting && s > 0 ? 1 / s : 1;
				Ff(n, r, c, u, l)
			}
		},
		x = function(t) {
			const o = [];
			for (let n = 0; n < t.x.length; n++) o.push([t.x[n], -t.y[n], t.h + t.z[n]]);
			t.setting > 1 && o.push(o[0]);
			const e = f ? At : Et,
			i = 1 !== t.setting && t.rgb ? _u(t.rgb) : e,
			r = 1 === t.setting || !t.rgb;
			Ff(n, o, i, r)
		},
		k = function(t) {
			return !(!qs() || !t.tt(["setting", "h", "roof", "h_roof"]))
		},
		M = function(t) {
			const n = t.s.sz[0];
			return (t.roof && t.h > t.h_roof ? t.h_roof : t.h) + n
		},
		j = function(t) {
			return k(t)
		};
		for (let t = 0; t < data.b.length; t++) j(data.b[t]) ? (m(data.V("b", t, 1)), m(data.V("b", t, 2))) : m(data.V("b", t));
		for (let t = 0; t < data.p.length; t++) j(data.p[t]) ? (v(data.V("p", t, 1)), v(data.V("p", t, 2))) : v(data.V("p", t));
		for (let t = 0; t < data.l.length; t++) j(data.l[t]) ? ($(data.V("l", t, 1)), $(data.V("l", t, 2))) : $(data.V("l", t));
		for (let t = 0; t < data.r.length; t++) y(data.r[t]);
		const I = Date.now();
		for (let t = 0; t < data.rr.length; t++) w(data.rr[t]);
		Date.now() - I > _t && Xu(g("alert_slow_3d"), Ht, "draw3d");
		for (let t = 0; t < data.a.length; t++) x(data.a[t]);
		let z = Uf(aa(!1), 0, !1, !0);
		if (pf.Ci = Cf(n, z, pf.Hi.background), Af) {
			const t = data.grid,
			o = t.x,
			e = t.y,
			i = t.h;
			let r;
			if (t.abs) {
				const t = [o[0], -e[0], i],
				n = [o[1], -e[0], i],
				c = [o[1], -e[1], i];
				r = [t, n, c, c, [o[0], -e[1], i], t]
				} else {
				r = Uf([o[0], e[0], o[1], e[1]], i, !0)
			}
			pf.Fi = Cf(n, r)
		}
		if (Ef && data.section) {
			const o = data.section,
			e = o.x[0],
			i = o.x[1],
			r = -o.y[0],
			c = -o.y[1],
			s = of(),
			u = o.z;
			pf.qi = function(n, o, e, i, r, c, s, u = Et, l = 1) {
				const a = Math.hypot(e - o, r - i),
				f = s - c,
				_ = Cf(n, [
					[0, 0, 0],
					[a, 0, 0],
					[a, f, 0],
					[a, f, 0],
					[0, f, 0],
					[0, 0, 0]
				]);
				_.rotateX(Math.PI / 2);
				const d = t.angle(o, i, e, r);
				return _.rotateY(d), _.position.set(o, i, c), _
			}(n, e, i, r, c, s, u)
		}
		xf()
	}
	
	function wf(t, n) {
		t ? Ef = null != n ? n : !Ef : Af = null != n ? n : !Af, yf()
	}
	
	function xf() {
		const t = $("#view3d_showgrid"),
		n = $("#view3d_showsection"),
		o = function(t, n) {
			t.toggleClass("show_error", n)
		},
		e = function(t, n) {
			t.toggleClass("show_pending", n)
		};
		o(t, 0 === data.config.grid_type.N()), o(n, 0 === data.config.grid_type.N()), e(t, !ii(0) && Af), e(n, !ii(2) && Ef), jf(), clearTimeout(kf), kf = setTimeout((function() {
			Mf(), Mf(!0)
		}), 300)
	}
	let kf;
	
	function Mf(t) {
		if (!W()) return;
		const n = t ? pf.qi : pf.Fi;
		if (null == n) return;
		const o = t ? 2 : 0,
		e = oi(o, !1);
		if (!ii(o)) return If(t), !1;
		const i = e.et.Xt,
		r = e.et.Qt;
		if (0 === i || 0 === r) return;
		const c = function(t) {
			const n = $("<canvas>")[0];
			return $e(n.getContext("2d"), i, r, t), Bi(n, {
				mode: o,
				footer: !1,
				colours_only: !0
			}), n
		};
		let s;
		if (t) {
			const t = c(2.5);
			s = s_(t), $(t).remove()
			} else {
			const t = $("<canvas>")[0],
			n = t.getContext("2d");
			$e(n, tt * ct, nt * ct, 2.5);
			const o = t.yt,
			e = c(o);
			n.putImageData(e.getContext("2d").getImageData(0, 0, e.width, e.height), Q * o, K * o), s = s_(t), $(t).remove(), $(e).remove()
			}! function(t, n, o, e, i, r, c) {
			const s = new THREE.ImageBitmapLoader;
			o && s.setOptions({
				imageOrientation: "flipY"
			});
			s.load(n, (function(n) {
				const o = new THREE.CanvasTexture(n);
				o.anisotropy = 16, e && (o.offset.x += e), i && (o.offset.y += i), t.material.side = THREE.DoubleSide, t.material.map = o, t.material.needsUpdate = !0, t.material.transparent = !0, t.material.opacity = 1
			}), void 0, (function(t) {}))
		}(n, s, !1)
	}
	
	function jf() {
		If(), If(!0)
	}
	
	function If(t) {
		if (!W()) return;
		const n = t ? pf.qi : pf.Fi;
		null != n && (n.material.map = null, n.material.transparent = !0, n.material.opacity = .1, n.material.needsUpdate = !0)
	}
	let zf = !1,
	Af = !1,
	Ef = !1;
	const Nf = .35,
	Tf = .35,
	Lf = .5,
	Sf = .1,
	Rf = .15,
	Df = "#333";
	
	function Hf(t, n, o, e = 1) {
		if (0 === e || !1 === o) {
			const e = new THREE.EdgesGeometry(n);
			o = f ? Df : Et;
			let i = new THREE.LineBasicMaterial({
				color: o,
				linewidth: .1
			});
			const r = new THREE.LineSegments(e, i);
			return t.add(r), r
		}
		const i = new THREE.MeshStandardMaterial({
			color: o
		});
		i.side = THREE.DoubleSide, e < 1 && (i.opacity = e, i.transparent = !0);
		const r = new THREE.Mesh(n, i);
		return zf && (r.castShadow = !0, r.receiveShadow = !0), t.add(r), r
	}
	
	function Of(t, n, o, e, i, r, c, s = Et, u = 1) {
		const l = Hf(t, new THREE.BoxGeometry(i - n, r - o, c - e), s, u);
		return l.position.x = (n + i) / 2, l.position.y = (o + r) / 2, l.position.z = (e + c) / 2, l
	}
	
	function Pf(t, n, o, e, i, r = Et, c = 1) {
		const s = Hf(t, new THREE.SphereGeometry(i, 20, 20), r, c);
		return s.rotateX(Math.PI / 2), s.position.x = n, s.position.y = o, s.position.z = e, s
	}
	
	function Cf(t, n, o = Et, e = 1) {
		const i = new THREE.Geometry;
		for (let t = 0; t < n.length / 3; t++) {
			for (let o = 0; o < 3; o++) {
				const e = n[3 * t + o];
				i.vertices.push(new THREE.Vector3(e[0], e[1], e[2]))
			}
			const o = new THREE.Face3(3 * t, 3 * t + 1, 3 * t + 2);
			i.faces.push(o)
		}
		i.computeFaceNormals();
		const r = Hf(t, i, o, e);
		i.computeBoundingBox();
		const c = i.boundingBox.max,
		s = i.boundingBox.min,
		u = new THREE.Vector2(0 - s.x, 0 - s.y),
		l = new THREE.Vector2(c.x - s.x, c.y - s.y),
		a = i.faces;
		i.faceVertexUvs[0] = [];
		const f = function(t) {
			return new THREE.Vector2((t.x + u.x) / l.x, (t.y + u.y) / l.y)
		};
		for (let t = 0; t < a.length; t++) {
			const n = i.vertices[a[t].a],
			o = i.vertices[a[t].b],
			e = i.vertices[a[t].c];
			i.faceVertexUvs[0].push([f(n), f(o), f(e)])
		}
		return i.uvsNeedUpdate = !0, r
	}
	
	function Ff(t, n, o = Et, e = !1, i = 1) {
		const r = [];
		for (let t = 0; t < n.length; t++) r.push(new THREE.Vector3(n[t][0], n[t][1], n[t][2]));
		const c = (new THREE.Geometry).setFromPoints(r);
		let s;
		return e ? (!0 === e && (e = [1, 1]), s = new THREE.Line(c, new THREE.LineDashedMaterial({
			color: o,
			dashSize: e[0],
			gapSize: e[1],
			scale: i
		}))) : s = new THREE.Line(c, new THREE.LineBasicMaterial({
		color: o
		})), zf && (s.castShadow = !0), s.computeLineDistances(), t.add(s), s
	}
	
	function qf(t, n, o, e = Df, i = 1) {
		const r = [];
		for (let t = 0; t < n.length; t++) r.push(new THREE.Vector3(n[t][0], n[t][1], n[t][2]));
		let c;
		c = 2 === n.length ? new THREE.LineCurve3(r[0], r[1]) : new THREE.CubicBezierCurve3(r);
		return Hf(t, new THREE.TubeGeometry(c, 64, o, 16, !1), e, i)
	}
	
	function Uf(n, o, e, i) {
		const r = Lo(n);
		for (let n = 0; n < r.length; n++) r[n].push(t.calcGroundHeight(r[n][0], r[n][1]));
		const c = [];
		i && c.push([], [], [], []);
		const s = function(n, o) {
			const e = c[n],
			i = t.round(Math.hypot(o[0] - r[n][0], o[1] - r[n][1]), 5);
			o[3] = i;
			for (let t = 0; t < e.length; t++) {
				const n = e[t];
				if (n[3] === i) return;
				if (n[3] > i) return void e.splice(t, 0, o)
			}
			e.push(o)
		},
		u = function(n, o, e, r) {
			let c = [];
			if (n.length > 2) {
				let r, u, l, a;
				for (let t = 0; t < n.length; t++)(null == r || r > n[t][0]) && (r = n[t][0]), (null == u || u < n[t][0]) && (u = n[t][0]), (null == l || l > n[t][1]) && (l = n[t][1]), (null == a || a < n[t][1]) && (a = n[t][1]);
				const f = o[0][0],
				_ = o[0][1],
				d = o[2][0],
				p = o[2][1];
				if (!(r < d && u > f && l < p && a > _)) return [];
				for (let e = 0; e < o.length; e++) t.pointInPoly(o[e], n) && c.push(o[e]);
				for (let r = 0; r < n.length; r++) {
					(!e || t.pointInPoly(n[r], o)) && c.push(n[r]);
					for (let e = 0; e < o.length; e++) {
						const u = t.linesIntersection(n[r], n[r + 1 < n.length ? r + 1 : 0], o[e], o[e + 1 < o.length ? e + 1 : 0], !0);
						(u.hit || u.above) && (c.push([u.x, u.y, u.z]), i && s(e, [u.x, u.y, u.z]))
					}
				}
			} else
			for (let t = 0; t < o.length; t++) c.push(o[t]);
			return function(t, n) {
				let o;
				n || (n = 0), o = 3 === (t = Un(t)).length ? [0, 1, 2] : Delaunator.from(t).triangles;
				const e = [];
				for (let i = 0; i < o.length; i++) {
					const r = t[o[i]];
					e.push([r[0], -r[1], r[2] + n])
				}
				return e
			}(c, r)
		},
		l = data.ground;
		if (l.gh.length < 2 || d) return u([], r, e, o);
		let a = [];
		for (let t = 0; t < l.gh_tri.length / 3; t++) {
			const n = u([l.gh[l.gh_tri[3 * t]], l.gh[l.gh_tri[3 * t + 1]], l.gh[l.gh_tri[3 * t + 2]]], r, e, o);
			a = a.concat(n)
		}
		for (let n = 0; n < l.gh_slopes.length / 2; n++) {
			const e = l.gh_slopes[2 * n][0],
			i = l.gh_slopes[2 * n][1],
			c = l.gh_slopes[2 * n + 1][0],
			s = l.gh_slopes[2 * n + 1][1],
			f = u([e, i, s, c], r, !0, o);
			a = a.concat(f);
			const _ = l.gh_slopes[2 * n + 2 < l.gh_slopes.length ? 2 * n + 2 : 0][1],
			d = [_, c, s],
			p = 2 === l.gh.length ? Math.PI : t.findAngle(s, c, _);
			if (p > Math.PI / 2 || isNaN(p)) {
				let t = zo(s[0], s[1], c[0], c[1], p / 2);
				t[2] = c[2], d.push(t)
			}
			const h = u(d, r, !0, o);
			a = a.concat(h)
		}
		if (i) {
			const t = l.gh_min,
			n = function(t, n, o, e = 0) {
				t.push([n[0], -n[1], e], [n[0], -n[1], n[2]], [o[0], -o[1], o[2]], [o[0], -o[1], e], [o[0], -o[1], o[2]], [n[0], -n[1], e])
			};
			for (let o = 0; o < r.length; o++) {
				const e = c[o],
				i = [];
				e.unshift(r[o]), e.push(r[o + 1 < r.length ? o + 1 : 0]);
				for (let o = 0; o < e.length - 1; o++) {
					n(i, e[o], e[o + 1], t)
				}
				a = a.concat(i)
			}
		}
		return a
	}
	
	function Bf() {
		gf(),
		function() {
			const n = 25;
			hf.Ui = S.Bi.g(), hf.Ui.Ln(Et, 1).Cn("15 15").Fn(.333).addClass("no_export"), hf.Zi = hf.Ui.line(0, xt, 0, 0), hf.Ji = hf.Ui.line(xt, 0, 0, 0), hf.V = S.Bi.g(), hf.V.addClass("no_export");
			const o = function(t, n, o) {
				return "M " + t + " " + n + " m -" + o + ", 0 a " + o + "," + o + " 0 1,0 " + 2 * o + ",0 a " + o + "," + o + " 0 1,0 -" + 2 * o + ",0"
			}(xt, xt, n / 2) + uc(-n, xt, n, xt) + uc(xt, -n, xt, n),
			e = hf.V.path(o).zn(Ft).Ln(At, 1, .5).addClass("passthrough").transform(xo(1, 1)),
			i = hf.V.path(o).zn(Ft).Ln(Et, 1).addClass("passthrough"),
			r = hf.V.circle(xt, xt, n).zn(Et, 0).Ln(Ft).data({
				type: "target",
				cursor: "pointer"
			});
			Br(r), r.Zn = function(t, n, o) {
				o && Mr && (Math.abs(Mr.x - t) >= Math.abs(Mr.y - n) ? n = Mr.y : t = Mr.x), pf.x = t, pf.y = n, r.position(), mf()
				}, r.position = function() {
				const n = pf.x,
				o = pf.y;
				hf.V.transform(xo(n, o)), hf.Ji.attr({
					y2: et
					}).transform(xo(n, 0)), hf.Zi.attr({
					x2: ot
				}).transform(xo(0, o));
				const e = t.round(pf.r / (Math.PI / 180), 1);
				Dn.Di.transform("R" + e + ",30,30")
				}, r.updateDetail = function() {
				const t = f ? Et : At,
				n = f ? At : Et;
				e.Ln(t), i.Ln(n), hf.Ui.Ln(n)
				}, r.qn = function(t) {
				mf(!0)
			}, hf.V.position = r.position, Go("target", 0, [hf.V, hf.Zi, hf.Ji]), yc(r), Pu("target", 0), hf.V.Fn(0).Fn(1, !0)
		}(), mf(!pf.si || pf.si), yf(), bf(), pf.zt.show(), pf.zt.ri(!1, !0)
	}
	
	function Zf(t, n) {
		$("#objects svg").width(), $("#objects svg").height();
		const o = $("#objects svg").clone();
		let e, i;
		if ($(".no_export", o).remove(), $(".export_only", o).css({
			opacity: ""
			}), $("*", o).each((function() {
				null != $(this).css("opacity") && 0 == $(this).css("opacity") && $(this).remove()
			})), Array.isArray(n.meta) ? $(".meta", o).attr({
			transform: "matrix(1,0,0,1," + n.meta[0] + "," + n.meta[1] + ")"
			}) : n.meta ? $(".layer", o).remove() : $(".meta", o).remove(), n.on_white && ($(".export_as_black", o).each((function() {
				$(this).attr("fill") == Et && $(this).attr("fill", At), $(this).attr("stroke") == Et && $(this).attr("stroke", At)
				})), $(".export_as_white", o).each((function() {
				$(this).attr("fill") == At && $(this).attr("fill", Et), $(this).attr("stroke") == At && $(this).attr("stroke", Et)
			}))), n.all) {
			const t = S.Wi.getBBox();
			t.x > 0 && (t.x = 0), t.y > 0 && (t.y = 0), t.width < ot && (t.width = ot), t.height < et && (t.height = et);
			const n = t.x - 5,
			r = t.y - 5,
			c = t.width + 10,
			s = t.height + 10;
			o[0].setAttribute("viewBox", [n, r, c, s].join(" ")), o[0].setAttribute("width", c), o[0].setAttribute("height", s), e = n, i = r
		}
		const r = o[0].outerHTML;
		if (!r) return;
		let c = r.replace(/>\s+/g, ">").replace(/\s+</g, "<");
		const s = ['xmlns="http://www.w3.org/2000/svg"', 'xmlns:xlink="http://www.w3.org/1999/xlink"'];
		for (let t = 0; t < s.length; t++) - 1 === c.indexOf(s[t]) && (c = c.replace("<svg", "<svg " + s[t]));
		const u = new Image;
		u.onload = function() {
			t(this)
		}, n.all && (u.ox = e, u.oy = i), u.src = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(c)))
	}
	
	function Jf(t, n, o = !0) {
		if (!n) return;
		const e = n.getContext("2d"),
		i = t.ox || 0,
		r = t.oy || 0,
		c = o ? o[0] || -X : 0,
		s = o ? o[1] || -V : 0;
		e.drawImage(t, i + c, r + s)
	}
	
	function Wf() {
		Ha(window.location.href, (function(t) {
			! function(t) {
				if (!n) return;
				const o = Pa(t);
				if (s.snapshots && s.snapshots.entries.length > 0) {
					const t = s.snapshots.entries;
					for (let n = 0; n < t.length; n++)
					if (t[n].name == o) return Xu(g("snapshot_exists"), Ht, "snapshot"), v_("button_savesnapshot", !1), !1
				}
				Zf((function(t) {
					! function(t, n) {
						const o = $("<canvas>").attr({
							width: Y,
							height: G
						})[0];
						Bi(o, {
							mode: 0,
							omit_tainted: !0
						});
						const e = ot,
						i = et,
						r = $("<canvas>").attr({
							width: e,
							height: i
						})[0],
						c = r.getContext("2d"),
						u = pt / (e < i ? e : i),
						l = $("<canvas>").attr({
							width: pt,
							height: pt
						})[0],
						a = l.getContext("2d");
						let f;
						c.filter = "blur(" + .333 / u + "px)", c.fillStyle = $("#wrap").css("background-color"), c.fillRect(0, 0, r.width, r.height), c.fillStyle = $("canvas", "#map").css("background-color"), c.fillRect(X, V, o.width, o.height), Wi(r, !1), c.drawImage(o, X, V), Jf(t, r, !1), a.drawImage(r, -(e * u - pt) / 2, -(i * u - pt) / 2, e * u, i * u), a_(a) || (f = s_(l, .8));
						Tu({
							set: "snapshot",
							name: n,
							img: f
							}, (function(t) {
								if (s.snapshots.entries.unshift({
									name: n,
									value: "",
									id: t.response,
									timestamp: new Date
								}), Dn.Yi.Tt()) {
								$("<p>", Dn.Yi.Ii).remove();
								$(R_(s.snapshots.entries, 0, "new")).hide().prependTo(".snapshots_gallery", Dn.Yi.ve).fadeIn(), $("#button_savesnapshot").hide()
								}
								}), (function() {
								v_("button_savesnapshot", !1)
							})), $(o).add(r).add(l).remove()
					}(t, o)
				}), {
				meta: !1
				})
			}(t)
			}), (function() {
			v_("button_savesnapshot", !1)
		}))
	}
	
	function Yf(t, n = "\t", o = "\n", e = !1) {
		if (!t || !t.cells || !t.cells.length) return "";
		let i = [];
		if (e && t.heading && i.push("", "", "*** " + t.heading + " ***"), t.titles && Array.isArray(t.titles[0]))
		for (let e = 0; e < t.titles.length; e++) i.push(Yf({
			titles: t.titles[e],
			cells: t.cells[e]
		}, n, o));
		else {
			t.titles && i.push(t.titles.join(n));
			for (let o = 0; o < t.cells.length; o++) {
				const e = [];
				for (let n = 0; n < t.cells[o].length; n++) {
					const i = t.cells[o][n];
					e.push("string" == typeof(r = i) && "" != r && "-" != r ? '"' + r + '"' : r)
				}
				i.push(e.join(n))
			}
		}
		var r;
		return i.join(o) + o
	}
	
	function Gf(t, n = 0) {
		return t.length ? "string" == typeof t[0][n] ? t.sort((function(t, o) {
			let e = [],
			i = [];
			for (t[n].replace(/(\d+)|(\D+)/g, (function(t, n, o) {
				e.push([n || 1 / 0, o || ""])
				})), o[n].replace(/(\d+)|(\D+)/g, (function(t, n, o) {
				i.push([n || 1 / 0, o || ""])
			})); e.length && i.length;) {
			let t = e.shift(),
			n = i.shift(),
			o = t[0] - n[0] || t[1].localeCompare(n[1]);
			if (o) return o
			}
			return e.length - i.length
			})) : t.sort((function(t, o) {
			return t[n] - o[n]
		})) : t
	}
	
	function Xf(n, o = !1, e = !0) {
		let i, r, c = [];
		const s = data.grid.abs,
		u = yi(),
		l = function(t) {
			for (let n = 0; n < u; n++) t.push(Pn(n) + g("prop_hz"))
		},
		a = function(t, n) {
			return No(t) + (n ? " " + g("grid_abs") : "")
		},
		f = e ? data.config.precision.N() : 2,
		_ = function(t) {
			return oo(t, f, !0 === e)
		},
		d = function(t, n) {
			return g(t) + (n ? Xs(Gs()) : "")
		};
		if ("receivers" === n) {
			i = d("output_title_receivers", !0);
			const t = qo(Uo("r"));
			if (t.length > 0) {
				r = [g("output_title_r_name"), g("prop_height") + " (" + a("", s) + ")", g("output_title_total") + Io()], l(r);
				for (let n = 0; n < t.length; n++) {
					const o = t[n],
					e = gl("r", n, 1);
					for (let t = 0; t < o.it.length; t++) {
						const n = o.it[t],
						i = [],
						r = _(Xn(s ? n.ln : n.Nt)),
						l = _(Nc(n));
						i.push(e, r, l);
						for (let t = 0; t < u; t++) {
							const o = _(Nc(n, t));
							i.push(o)
						}
						c.push(i)
					}
				}
			}
		}
		if ("analysis" === n) {
			i = d("output_title_breakdown", !0);
			const t = qo(Uo("r"));
			if (t.length > 0) {
				const n = vi(["p", "l"]);
				r = [g("output_title_r_name")];
				for (let t = 0; t < n.length; t++) r.push(n[t][0]);
				for (let o = 0; o < t.length; o++) {
					const e = t[o],
					i = gl("r", o, 1);
					for (let t = 0; t < e.it.length; t++) {
						const o = e.it[t],
						r = [i + " [" + a(_(Xn(s ? o.ln : o.Nt)), s) + "]"];
						for (let t = 0; t < n.length; t++) {
							const e = n[t],
							i = e[1],
							c = _(Tc(o, e[2], i));
							r.push(c)
						}
						c.push(r)
					}
				}
			}
		}
		if ("detail" === n && 3 !== Cs) {
			const n = qo(Uo("r"));
			if (n.length > 0) {
				i = d("output_title_r_detail", !0);
				for (let o = 0; o < data.r.length; o++) {
					const e = n[o],
					i = gl("r", o, 1),
					s = On(rc(e, !0));
					for (let n = 0; n < s.length; n++) {
						const o = s[n],
						u = t.calcLevel({
							mode: "detail",
							x: e.x,
							y: e.y,
							h: o,
							gh: e.z
						});
						if (u) {
							r = [g("output_title_r_name"), g("output_title_source_name")].concat(u[0].titles);
							for (let t = 0; t < u.length; t++) {
								const n = u[t],
								o = [i],
								e = vl(n);
								o.push(e);
								for (let t = 0; t < n.values.length; t++) {
									let e = n.values[t];
									"string" == typeof e || e instanceof String ? o.push(e) : o.push(_(e))
								}
								c.push(o)
							}
						}
					}
					o < data.r.length && c.push("")
				}
			}
		}
		if ("sources" === n) {
			i = d("output_title_sources");
			const n = ["p", "l"];
			for (let o = 0; o < n.length; o++) {
				const e = n[o],
				i = qo(Uo(e));
				for (let t = 0; t < i.length; t++) i[t].export_name = gl(e, t, 1);
				if (i.length > 0) {
					r = [g("output_title_source_name"), g("prop_height") + " (" + No() + ")", g("output_title_total") + " " + Io(!0)], l(r);
					for (let n = 0; n < i.length; n++) {
						const o = i[n],
						e = [];
						if (o) {
							if (o.setting < 1) continue;
							e.push(o.export_name, _(Xn(rc(o))));
							const n = o.lvl,
							i = t.freqBand(o.hz),
							r = [],
							s = [];
							for (let e = 0; e < u; e++) {
								let c = null;
								if (Array.isArray(n) ? c = n[e] : e === i && (c = o.lvl), null != c) {
									const n = null != c ? t.sourceAdj(o) : null;
									r.push(c + n), s.push(_(c + n))
								} else s.push("")
							}
							e.push(_(t.dbsum(r))), c.push(e.concat(s))
						}
					}
				}
			}
		}
		if ("objects" === n) {
			i = d("objects"), r = [];
			const n = ["r", "p", "l", "b", "c", "gh", "gl"];
			for (let o = 0; o < n.length; o++) {
				const e = n[o],
				i = qo(Uo(e));
				for (let t = 0; t < i.length; t++) i[t].export_name = Co(e) ? "-" : gl(e, t, 1);
				if ("b" === e || "c" === e)
				for (let t = 0; t < i.length; t++) e != i[t].type && (i.splice(t, 1), t--);
				if (i.length > 0) {
					const n = [Zo(e), "x", "y", g("prop_height")];
					Po(e) && n.push("Lw", "Hz"), "b" === e && n.push(g("prop_rc")), "c" === e && n.push(g("prop_rc")), r.push(n);
					const o = [];
					for (let n = 0; n < i.length; n++) {
						const r = i[n];
						if (r) {
							let n = [],
							i = [],
							c = [],
							s = [],
							l = [],
							a = [];
							if (n.push(r.export_name), Array.isArray(r.x) ? i = r.x : i.push(r.x), Array.isArray(r.y) ? c = r.y : c.push(r.y), s.push(_(rc(r))), "b" !== e && "c" !== e || (Array.isArray(r.rc) ? (l.push([r.rc[0]]), a.push([r.rc[1]])) : l.push([r.rc])), Po(e)) {
								const n = r.lvl;
								if (Array.isArray(n))
								for (let o = 0; o < u; o++) l.push(n[o]), a.push(t.f[o]);
								else {
									const t = r.hz;
									l.push(n), a.push(t)
								}
							}
							const f = [n, Gn(i), Gn(c), s, l, a];
							for (let t = 0; t < i.length || t < l.length; t++) {
								const n = [];
								for (let o = f.length - 1; o >= 0; o--) {
									const e = f[o][t];
									null == e && n.length > 0 && n.unshift("-"), null != e && n.unshift(e)
								}
								o.push(n)
							}
						}
					}
					c.push(o)
				}
			}
		}
		if ("state_change" === n) {
			const t = function(t, n, o) {
				return "setting" === n ? Jt[o] : "roof" === n ? nn[o] : "slope" === n ? Kt[o] : "method" === n ? on[o] : "rc" === n ? Uc(o) : Array.isArray(o) ? o.join(", ") : o
			},
			n = function(t) {
				if ("config" === t.bn) return g("config_title");
				const n = gl(t.bn, t.ce, -3),
				o = gl(t.bn, t.ce, -1);
				return n || o
			};
			i = d("output_title_compare_states");
			const o = nu();
			if (o.length) {
				r = [g("prop_object"), g("prop_option"), g("states_default"), g("states_alt")];
				for (let e = 0; e < o.length; e++) {
					const i = o[e];
					c.push([n(i), i.L, t(i.bn, i.ue, i.le), t(i.bn, i.ue, i.ae)])
				}
			}
		}
		if ("config" === n) {
			i = d("output_title_config");
			const t = function() {
				const t = [],
				n = function(n) {
					const o = e[n],
					i = o.B ? o.B() : o.O();
					t.push(i)
				},
				o = function(n) {
					t.push(g("config_text_" + n))
				},
				e = data.config;
				Fo() && o(data.grid.abs ? "ground_heights_relative" : "ground_heights_absolute");
				n("gfactor"), n("temperature"), n("humidity"), n("weighting"), n("precision");
				const i = e.reflections.N();
				return 0 === i ? o("reflections_off") : (o(1 === i ? "reflections_1" : "reflections_2"), 4 & e.iso_settings && o("iso_facade"), 16 & e.iso_settings || o("iso_surface")), 1 & e.iso_settings ? o("iso_limit_on") : o("iso_limit_off"), 2 & e.iso_settings ? (o("iso_edges"), 32 & e.iso_settings && o("iso_convex"), 128 & e.iso_settings && o("iso_laterallimit")) : o("iso_edges_off"), 8 & e.iso_settings || o("iso_check"), 64 & e.iso_settings ? o("iso_ground") : o("iso_ground_off"), t
			}();
			for (let n = 0; n < t.length; n++) c.push([t[n]])
		}
		return "key" === n && (i = d("output_key_title"), c.push(["Lw", g("output_key_lw")]), c.push(["Ad", g("output_key_ad")]), c.push(["Ab", g("output_key_ab")]), c.push(["Ag", g("output_key_ag")]), c.push(["Aa", g("output_key_aa")])), "references" === n && (i = d("output_title_references"), $("#references li").each((function() {
			c.push([$(this).text()])
		}))), o && (c = Gf(c), "h" === o && (c = Gf(c, 1))), {
		heading: i,
		titles: r,
		cells: c
		}
	}
	
	function Vf(t, n, o, e, i) {
		if (2 === t) return Li(e, !0);
		if (1 === t && null != i) {
			const t = pdf_config_library.palette;
			if (!t[i]) return At;
			const e = t[i].entries,
			r = e.length;
			if (2 * o <= r) return e[2 * n];
			if (o < r) {
				return e[Math.round(n * (r / o))]
			}
			for (; n >= r;) n -= r;
			return e[n]
		}
		return At
	}
	
	function Qf(t) {
		return qs() && t < 0 ? t : 0
	}
	
	function Kf(t, n, o) {
		if (null == n || null == t) return;
		let e = [],
		i = [],
		r = [],
		c = [],
		s = null,
		u = 0,
		l = null,
		a = 0,
		f = null,
		_ = 0;
		const d = data.grid.abs,
		p = yi(),
		h = vi("r");
		if (h.length > 0) {
			const b = vi(["p", "l"]),
			m = function(t, n) {
				e.push({
					label: t,
					value: [],
					color: [],
					index: n
				});
				const o = [];
				for (let t = 0; t < p; t++) o.push({
					label: Pn(t),
					value: [],
					color: []
				});
				i.push(o);
				const c = [{
					label: g("output_title_total"),
					value: [],
					color: []
				}];
				for (let t = 0; t < b.length; t++) c.push({
					label: b[t][0],
					value: [],
					color: []
				});
				r.push(c)
			},
			v = function(t, e, i, r) {
				t.value.push(e), t.color.push(Vf(n, i, r, e, o))
			},
			$ = function(t, e, i) {
				i < 2 || c.push({
					label: t,
					color: 1 === n ? Vf(n, e, i, null, o) : null
				})
			},
			y = function(t) {
				return To(t) + (d ? " " + g("grid_abs") : "")
			},
			w = $i(data.grid.abs),
			x = 2 === t ? w : [null];
			if (1 === t)
			for (let t = 0; t < w.length; t++) $(y(w[t]), t, w.length);
			for (let n = 0; n < x.length; n++)
			for (let o = 0; o < h.length; o++) {
				const c = h[o][0],
				x = h[o][1],
				k = data.r[x],
				M = Xn(w[n]);
				0 === o && 2 === t && m(y(M) + " " + g("prop_height"), M), 0 === n && 2 === t && $(c, o, h.length);
				const j = k.it.length;
				for (let n = 0; n < j; n++) {
					const g = k.it[n],
					$ = Xn(d ? g.ln : g.Nt);
					if (2 === t && $ !== M) continue;
					if (0 === t || 1 === t && 0 === n) {
						let n = c;
						0 === t && w.length > 1 && (n += " [" + y($) + "]"), m(n, x)
					}
					let j, I;
					if (1 === t) {
						for (let t = 0; t < w.length; t++)
						if (w[t] === $) {
							j = t;
							break
						} I = w.length
					} else j = o, I = h.length;
					const z = Nc(g);
					z > u && (u = z), (null == s || z < s) && (s = z), v(e[e.length - 1], z, j, I);
					for (let t = 0; t < p; t++) {
						const n = Nc(g, t);
						n > a && (a = n), (null == l || n < l) && (l = n), v(i[i.length - 1][t], n, j, I)
					}
					v(r[r.length - 1][0], z, j, I);
					for (let t = 0; t < b.length; t++) {
						const n = b[t],
						o = n[1],
						e = Tc(g, n[2], o);
						e > _ && (_ = e), (null == f || e < f) && (f = e), v(r[r.length - 1][t + 1], e, j, I)
					}
				}
			}
		}
		return {
			Gi: u + 5,
			Xi: s,
			Vi: a + 5,
			Qi: l,
			Ki: _ + 5,
			tr: f,
			nr: e,
			fo: i,
			er: r,
			ir: c
		}
	}
	
	function t_(t) {
		const n = new Date;
		return t ? n.toLocaleDateString() : n.getFullYear() + co(n.getMonth() + 1) + co(n.getDate()) + "_" + co(n.getHours()) + co(n.getMinutes())
	}
	
	function n_(t, n) {
		if ("object" == typeof t) {
			const n = window.open();
			return n ? ($('<p style="font-family: sans-serif;">' + g("export_image_save_note") + "</p>").appendTo(n.document.body), $(t).appendTo(n.document.body).css({
				"max-width": "100%",
				height: "auto"
				}), $('<p style="font-family: sans-serif;color: #999;">' + g("export_image_security_note") + "</p>").appendTo(n.document.body), $(n.document.body).css({
				"max-width": "100%",
				margin: 0,
				padding: "1.5em",
				"box-sizing": "border-box"
				}), void(t.width && $(n.document.body).css({
					width: t.width
				}))) : void Xu(g("alert_new_window_fail"), Ot)
		}
		const o = document.createElement("a");
		o.href = t, o.target = "_blank", o.download = n, document.body.appendChild(o), o.click(), $(o).remove()
	}
	
	function o_() {
		if (!n) return;
		le((function() {
			window.jsPDF = window.jspdf.jsPDF,
			function() {
				const t = function(t) {
					e_(t)
				},
				n = function() {
					e_(!1)
				};
				Ha(window.location.href, t, n)
			}()
		}), ["js/jspdf.umd.min.js", "js/jspdf.plugin.autotable.min.js", "js/jspdf.HelveticaWorld.js"], "jsPDF")
	}
	
	function e_(t) {
		Zf((function(n) {
			Zf((function(o) {
				! function(t = "", n = "", o = "", e = 1) {
					t || (t = l);
					const i = 210,
					c = 297,
					u = 15,
					a = 15,
					f = 14,
					_ = i - 2 * f,
					d = c - u,
					p = d - a,
					h = "HelveticaWorld",
					b = 9;
					let m, v = g("pdf_title");
					1 == r_.format ? (m = {
						html: $('<div id="html_report"></div>'),
						cr: function(t) {
							return t + "pt"
						},
						sr: function(t) {
							return t + "mm"
						},
						ur: function(t, n, o, e) {
							let r = "left:" + this.sr(t) + ";",
							c = [];
							return "center" === o && c.push("translateX(-50%)"), "right" === o && (r = "right:" + this.sr(i - t) + ";"), "justify" === o && (r += "width:" + this.sr(_) + ";"), e && c.push("translateY(-50%)"), "position:absolute;top:" + this.sr(n) + ";" + r + (c.length ? "transform:" + c.join(" ") + ";" : "")
						},
						setFontSize: function(t) {
							return this.font_size = t, this
						},
						setFont: function(t, n) {
							return this.font_weight = n, this
						},
						setLineWidth: function() {
							return this
						},
						setDrawColor: function() {
							return this
						},
						lr: function(t, n) {
							return "width:" + this.sr(t) + ";height:" + this.sr(n) + ";"
						},
						rect: function(t, n, o, e) {
							return this.current_page.append('<div style="outline:1px solid #000;' + this.lr(o, e) + this.ur(t, n) + '"></div>'), this
						},
						line: function(t, n, o) {
							return this.current_page.append('<div style="border-top:1px solid #000;width:' + this.sr(_) + ";" + this.ur(t, n) + '"></div>'), this
						},
						addPage: function() {
							this.current_page = $('<div class="report_page" style="' + this.lr(i, c) + '"></div>').appendTo(this.html)
						},
						ar: {
							names: [],
							objects: []
						},
						addImage: function(t, n, o, e, i, r, c = "") {
							"object" == typeof t && (t = s_(t)), "" === t && c && (t = $("#" + c, this.html).prop("src")), this.current_page.append('<img id="' + c + '" src="' + t + '" style="' + this.ur(o, e) + this.lr(i, r) + '" />')
						},
						lastAutoTable: {
							finalY: 0
						},
						internal: {
							getNumberOfPages: function() {
								return m._r
							}
						},
						setPage: function(t) {
							const n = $(".report_page", this.html).get(t - 1);
							n && (this.current_page = $(n))
						},
						autoTable: function(t) {
							let n, o = "",
							e = t.startY;
							const i = 6;
							(function() {
								const r = function(t, n = "td") {
									return "<" + n + ' style="height:' + i + 'mm">' + t + "</" + n + ">"
								},
								c = function(t) {
									let n = "";
									for (let o = 0; o < t.length; o++) n += r(t[o], "th");
									return n
								};
								let s;
								t.head && (o = c(t.head[0]));
								const l = function(t, o) {
									for (let e = o; e < t.length; e++) {
										const o = t[e];
										let c = "";
										for (let t = 0; t < o.length; t++) c += r(null != o[t] ? o[t] : "");
										if (s.push(c), n += 6, n + i >= d) return e + 1
									}
									return t.length
								};
								let a = 0;
								for (; a < t.body.length;) a > 0 && (m.addPage(), e = u), s = [], n = e, o && (s.push(o), n += 6), a = l(t.body, a), m.current_page.append('<table style="font-size:' + m.cr(t.styles.fontSize) + ";" + m.ur(f, e, "justify") + '"><tr>' + s.join("</tr><tr>") + "</tr></table>");
								m.lastAutoTable.finalY = n
							})()
						},
						text: function(t, n, o, e) {
							this.current_page.append('<div style="font-size:' + this.cr(this.font_size) + ";font-weight:" + this.font_weight + ";" + this.ur(n, o, e, !0) + '">' + t + "</div>")
						},
						textWithLink: function(t, n, o, e) {
							this.current_page.append('<a href="' + e.url + '" style="font-size:' + this.cr(this.font_size) + ";font-weight:" + this.font_weight + ";" + this.ur(n, o, e.align, !0) + '">' + t + "</a>")
						},
						save: function(t) {
							const n = `\n<!DOCTYPE HTML>\n<html id="html_report_window">\n<head>\n<title>${t}</title>\n<link rel="stylesheet" type="text/css" href="css/print.css?v=1.5.4">\n</head>\n<body>\n${this.html.prop("outerHTML")}\n<button onclick="javascript:window.print();" class="html_report_print">${g("button_print")}</button>\n</body>\n</html>\n`;
							let o = window.open("about:blank", "_blank");
							o ? o.document.write(n) : Xu(g("alert_new_window_fail"), Ot)
						}
						}, m.addPage()) : (m = new jsPDF({
							putOnlyUsedFonts: !0
							}), jsPDF.autoTableSetDefaults({
							margin: {
								left: f,
								top: u,
								bottom: a
							},
							headStyles: {
								fillColor: Et,
								textColor: At,
								font: h,
								fontStyle: Ut,
								fontSize: b,
								cellWidth: "auto"
							},
							styles: {
								fillColor: Et,
								textColor: At,
								font: h,
								fontStyle: qt,
								fontSize: b,
								cellWidth: "auto"
							}
						}));
						if (m.dr = function(t = !1) {
							!t && this.pr || (this.addPage(), this.pr = !0, this._r++, this.hr = u)
							}, m.gr = function(t) {
							return t / (72 / 25.4)
							}, m.br = function(t) {
							this.setFontSize(t).setFont(h, qt)
							}, m.mr = function(t) {
							this.setFontSize(t).setFont(h, Ut)
							}, m.vr = function() {
							this.mr(12), this.$r = this.gr(12)
							}, m.yr = function(t) {
							this.text(t, this.wr, this.hr), this.hr += this.$r
							}, m.kr = function() {
							this.vr();
							let t = 0;
							return this.hr > u && (t += u), t += this.$r, t
							}, m.Mr = function(t) {
							this.vr(), this.hr > u && (this.hr += u), this.yr(t), this.pr = !1
							}, m.jr = function(n = !1) {
							const o = u + p;
							this.setDrawColor(0, 0, 0), this.line(this.wr, o, this.wr + _, o), this.br(b), this.textWithLink(t, this.wr, o + 5, {
								url: t
							}), n && (this.br(6), this.text("calc-db-soundpath.net v1.5.4", this.wr + _ - 1, u + p - 3, "right")), this.br(b), this.text(s.grid_footer, this.wr + _ - 1, o + 5, "right")
							}, m.Ir = function() {
							const t = this.internal.getNumberOfPages();
							for (let n = 1; n <= t; n++) this.setPage(n), this.jr(r_.title && 1 === n)
							}, m.zr = function(t, n, o, e, i, r = !0, c = !0, s) {
							null == o && (o = this.hr), this.addImage(t, "JPEG", this.wr + n, o, e, i, s, "NONE"), r && (this.setDrawColor(0, 0, 0), this.rect(this.wr + n, o, e, i, "S")), !1 !== c && (this.hr += i + (!0 !== c ? c : 3)), this.pr = !1
							}, m.Ar = function(t, n, o, e) {
							this.text(t, this.wr + n, o, e ? "center" : null)
						}, m.setLineWidth(.25), m.wr = f, m.hr = u, m.pr = !0, m._r = 1, r_.title) {
						const t = 32,
						n = 256 / 24;
						m.hr = 140, m.addImage("images/logo.png", "PNG", m.wr + _ - t, u, t, n), m.mr(24), m.Ar(g("csv_title"), 0, m.hr), m.mr(18), m.Ar(v, 0, m.hr + 12), m.br(12), m.Ar(t_(!0), 0, m.hr + 22), m.dr(!0)
						}
						
						function y(t) {
							m.hr + t > p + u && m.dr()
						}
						
						function w(t, n, o, e = !1, i = null) {
							const r = t / n;
							return i || (i = _), (n = (t = t / 5 > i ? i : t / 5) / r) > p && (t = (n = p) * r), o && n < p ? (y(m.kr() + n), m.Mr(o)) : y(n), {
								w: t,
								h: n,
								x: e ? (_ - t) / 2 : 0,
								y: m.hr
							}
						}
						
						function x(t, n, o) {
							const e = $("<canvas>")[0];
							return !!$e(e.getContext("2d"), t, n, o) && (qi(e), e)
						}
						
						function k(t, n) {
							if (!t.cells.length) return;
							t.heading && (y(m.kr()), m.Mr(t.heading));
							const o = {
								startY: m.hr,
								styles: {
									fontSize: b
								}
							};
							if (n) {
								const n = [];
								for (let o = 0; o < t.titles.length; o++) n.push([t.titles[o]]);
								for (let o = 0; o < t.cells.length; o++)
								for (let e = 0; e < t.cells[o].length; e++) n[e].push(t.cells[o][e]);
								o.body = n
							} else t.titles && (o.head = [t.titles]), t.cells && (o.body = t.cells);
							m.autoTable(o), m.hr = m.lastAutoTable.finalY, m.pr = !1
						}
						if (r_.grid) {
							if (W()) {
								const t = pf.Et,
								n = pf.Nt,
								o = l_(e),
								i = w(t, n, g("pdf_title_3d") + Xs(Gs()), !0);
								m.zr(o, i.x, i.y, i.w, i.h)
							}
							let t = {};
							if (B() || Z() || W() && pf.Fi) {
								const o = Y,
								i = G,
								r = x(o, i, e),
								c = x(o, i, e);
								Bi(c, {
									mode: q,
									light: !0,
									export: !0,
									omit_tainted: !0,
									footer: !1
								}), r.getContext("2d").drawImage(c, 0, 0, c.width, c.height, 0, 0, o, i), $(c).remove(), n && Jf(n, r, !0);
								const s = w(o, i, Z() ? g("pdf_title_ground") : g("pdf_title_grid") + Xs(Qi()) + Xs(Gs()), !0);
								m.zr(r, s.x, s.y, s.w, s.h), $(r).remove(), t = s
							}
							if (B() || Z()) {
								const n = x(ot, et, e);
								o && Jf(o, n, !1);
								const i = Es.V.getBBox(),
								r = x(i.width, i.height, e);
								r.getContext("2d").drawImage(n, 0, 0, n.width, n.height, -i.x, -i.y, ot, et);
								const c = i.width * (t.w / Y),
								s = w(i.width, i.height, "", !1, c);
								let u = t.x + t.w - s.w,
								l = t.y + t.h + 3;
								if (data.config.legend_setting.N()) {
									const n = ru.V.getBBox();
									if (c + n.width * (t.w / Y) > t.w) {
										const o = n.height * (t.w / Y);
										u = t.x, l += o + 3
									}
								}
								m.zr(r, u, l, s.w, s.h), $(r).remove(), $(n).remove()
							}
							if (J() || W() && pf.qi && ii(2)) {
								const n = Va.Et,
								o = Va.Nt,
								i = x(n, o, e),
								r = x(n, o, e);
								Bi(r, {
									mode: 2,
									light: !0,
									fill: !0,
									export: !0,
									footer: !1
								}), i.getContext("2d").drawImage(r, 0, 0, r.width, r.height, 0, 0, n, o), $(r).remove();
								const c = w(n, o, g("pdf_title_grid") + Xs(_f(!0)) + Xs(Gs()), !0);
								m.zr(i, c.x, c.y, c.w, c.h), $(i).remove(), J() && (t = c)
							}
							if (data.config.legend_setting.N() && !W()) {
								const n = x(ot, et, e);
								o && Jf(o, n, !1);
								const i = ru.V.getBBox(),
								r = x(i.width, i.height, e);
								r.getContext("2d").drawImage(n, 0, 0, n.width, n.height, -i.x, -i.y, ot, et);
								const c = w(i.width, i.height, "", !0, i.width * (t.w / Y));
								m.zr(r, t.x, t.y + t.h + 3, c.w, c.h), $(r).remove(), $(n).remove()
							}
							if (J()) {
								let t = po(data.section.x[0]),
								o = po(data.section.x[1]),
								i = ho(data.section.y[0]),
								r = ho(data.section.y[1]),
								c = o - t,
								s = r - i;
								if (s < c / 2) {
									const t = (i + r) / 2;
									i = t - c / 4, r = t + c / 4, s = r - i
								}
								if (c < s / 2) {
									const n = (t + o) / 2;
									t = n - s / 4, o = n + s / 4, c = o - t
								}
								const u = .125 * c,
								l = .125 * s;
								t -= u, o += u, i -= l, r += l, c += 2 * u, s += 2 * l;
								const a = x(c, s, e);
								Wi(a, [-t, -i]), n && Jf(n, a, [-t, -i]);
								const f = w(c, s, g("pdf_title_section"), !0);
								m.zr(a, f.x, f.y, f.w, f.h), $(a).remove()
							}
						}
						if (r_.overview && n) {
							const t = n.width,
							o = n.height,
							i = x(t, o, e);
							if (i) {
								const r = w(t, o, g("pdf_title_model"));
								Wi(i, [-n.ox, -n.oy]);
								const c = x(Y, G, e);
								Bi(c, {
									mode: Z() ? 1 : 0,
									fill: Lt(.05),
									light: !0,
									export: !0,
									omit_tainted: !0,
									footer: !1,
									map: !1
								}), i.getContext("2d").drawImage(c, 0, 0, c.width, c.height, -n.ox + X, -n.oy + V, Y, G), Jf(n, i, [-n.ox, -n.oy]), m.zr(i, r.x, r.y, r.w, r.h), $(i).remove()
							}
						}
						const M = vi("r");
						if (M.length) {
							r_.tables && (m.dr(), k(Xf("receivers", 2 !== r_.group || "h")), k(Xf("sources", !0)));
							const t = 160,
							o = t,
							i = 5,
							r = 5,
							c = _ / i - r * ((i - 1) / i),
							s = x(Y, G, e);
							if (Bi(s, {
								mode: Z() ? 1 : 0,
								light: !0,
								fill: !0,
								export: !0,
								omit_tainted: !0,
								footer: !1
							}), r_.locations) {
							m.dr(), m.Mr(g("pdf_title_r_locations"));
							const u = c,
							l = u;
							let a = 0;
							for (let c = 0; c < M.length; c++) {
								const f = M[c][0],
								_ = M[c][1],
								d = data.r[_],
								p = t / 2 - po(d.x),
								h = o / 2 - ho(d.y),
								g = x(t, o, e);
								Wi(g, [p, h]), J() || g.getContext("2d").drawImage(s, 0, 0, s.width, s.height, p + X, h + V, Y, G), n && Jf(n, g, [p, h]), y(l + 4);
								let v = a * (u + r),
								w = m.hr;
								m.zr(g, v, w, u, l, !0, !1, "r_loc_" + _), $(g).remove(), m.br(b), m.Ar(f, v + u / 2, w + l + 4, !0), a++, a === i && (a = 0, m.hr += l + 10)
							}
							}
							if (r_.charts) {
								const t = 3;
								m.dr(), m.Mr(g("pdf_title_r_charts") + Xs(Gs()));
								const n = Kf(r_.group, r_.scheme, r_.palette),
								o = Qf(n.Xi),
								e = n.Gi,
								i = Qf(n.Qi),
								c = n.Vi,
								s = Qf(n.tr),
								u = n.Ki,
								l = 20,
								a = function(t, n) {
									let o = n / t;
									return o > p && (o = p, n = o * t), y(o), {
										w: n,
										h: o
									}
								},
								f = function(t) {
									return !(0 === r_.group && 0 === r_.type && t.length > 20) || "compact"
								},
								d = (n.nr, g("pdf_title_r_overall") + Io()),
								h = 0 === r_.group && 0 === r_.type ? 60 : 40;
								let b = 0,
								v = h;
								const $ = 3,
								w = _ / $,
								x = f(n.nr);
								do {
									v > n.nr.length && (v = n.nr.length);
									const i = d + (b > 0 ? g("pdf_title_repeater") : ""),
									r = new PDFChart(n.nr, c_({
										type: r_.type,
										key: r_.group > 0 && 1 === r_.scheme && n.ir,
										width: _ * l,
										title: i,
										upper: e,
										lower: o,
										flip: x,
										start: b,
										end: v
									})),
									c = a(r.ratio, _);
									m.zr(r.canvas, 0, null, c.w, c.h, !1, 1 === r_.scheme ? 0 : t), b += h, v += h
								} while (b < n.nr.length);
								let k = 0;
								for (let o = 0; o < n.fo.length; o++) {
									const e = n.fo[o],
									r = n.nr[o].label + g("pdf_title_spectrum") + Io(),
									s = new PDFChart(e, c_({
										scale: $,
										type: r_.type,
										width: w * l,
										title: r,
										upper: c,
										lower: i
									})),
									u = a(s.ratio, w);
									let f = k * u.w;
									m.hr;
									k++;
									const _ = k === $ && t;
									k === $ && (k = 0), m.zr(s.canvas, f, null, u.w, u.h, !1, _, "r_spec_" + o)
								}
								if (r_.detail && 2 !== r_.group)
								for (let t = 0; t < n.nr.length; t++) {
									m.dr();
									const o = n.nr[t].label,
									e = n.nr[t].index;
									m.Mr(o + Xs(Gs()));
									const i = n.er[t],
									c = o + " - " + g("pdf_title_r_analysis") + Io(),
									d = f(i),
									p = new PDFChart(i, c_({
										type: r_.type,
										key: r_.group > 0 && 1 === r_.scheme && n.ir,
										width: _ * l,
										title: c,
										upper: u,
										lower: s,
										flip: d,
										breakdown: !0
									})),
									h = a(p.ratio, _);
									m.zr(p.canvas, 0, null, h.w, h.h, !1, 0);
									let b = 0;
									if (r_.locations) {
										const t = w / 3,
										n = w / 8,
										o = w - 2 * n,
										i = w + 2 * t + n,
										r = m.hr + n;
										m.zr("", i, r, o, o, !0, !1, "r_loc_" + e), m.br(8), m.Ar(g("pdf_title_location"), i + o / 2, r - 3, !0), b += t
									}
									m.zr("", b, m.hr, w, w, !1, r, "r_spec_" + t)
								}
							}
						}
						r_.config && (m.dr(), qs() && k(Xf("state_change")), k(Xf("config")), k(Xf("references")));
						m.Ir(), v_("button_exportreport", !1);
						const j = r + t_() + (1 == r_.format ? "" : ".pdf");
						m.save(j)
				}(t, n, o, 4)
			}), {
			meta: !0,
			on_white: !0
			})
		}), {
		all: !0,
		on_white: !0
		})
	}
	let i_, r_ = {};
	
	function c_(t) {
		const n = {
			locale_code: h,
			precision: data.config.precision.N()
		};
		return Object.assign(n, t)
	}
	
	function s_(t, n = !1) {
		return n ? t.toDataURL("image/jpeg", n) : t.toDataURL("image/png")
	}
	
	function u_(t, n, o, e) {
		const i = $("<canvas>")[0],
		r = i.getContext("2d");
		if ($e(r, n, o, e), Bi(i, {
			mode: q
		}), t && Jf(t, i), a_(r)) return i;
		const c = s_(i);
		return $(i).remove(), c
	}
	
	function l_(t) {
		pf.Ri.setSize(pf.Et * t, pf.Nt * t), pf.Ri.render(pf.Hi, pf.Si);
		const n = s_(pf.ci);
		return pf.Ri.setSize(pf.Et, pf.Nt), pf.Ri.render(pf.Hi, pf.Si), n
	}
	
	function a_(t) {
		try {
			return t.getImageData(0, 0, 1, 1), !1
			} catch (t) {
			return 18 === t.code
		}
	}
	
	function f_(n, o) {
		const e = [],
		i = function(t, n) {
			return gl(t, n, 1)
		},
		r = function(t, n) {
			const o = gl(t, n, -2);
			return Zo(t) + Xs(o)
		},
		c = function(t, n, o, i, r) {
			e.push({
				gt: t,
				Er: n,
				x: o,
				y: i,
				z: r
			})
		},
		s = function(t, n, o, i, r, c, s) {
			e.push({
				gt: t,
				Er: n,
				x: o,
				y: i,
				z: r,
				zn: c,
				Ln: s
			})
		},
		u = function(t, n, o, i, r, c, s, u) {
			e.push({
				gt: t,
				Er: n,
				x: o,
				y: i,
				z: r,
				h: c,
				zn: s,
				Ln: u
			})
		},
		l = function(t, n, o, e, i, r) {
			const c = [],
			s = [],
			l = [];
			for (let t = 0; t < o.length; t++) c.push(o[t][0]), s.push(o[t][1]), l.push(o[t][2]);
			u(t, n, c, s, l, e, i, r)
		},
		a = function(t) {
			if ("a" === t.type && t.setting > 1) {
				if (t.rgb) {
					const n = t.rgb.slice();
					return n.push(64), n
				}
				return !0
			}
			return "c" === t.type && [255, 255, 255]
		},
		f = function(t) {
			return !("a" !== t.type || 0 !== t.setting || !t.rgb) && t.rgb.slice()
		},
		_ = function(t) {
			const o = Uo(t);
			for (let e = 0; e < o.length; e++) {
				const s = o[e],
				u = On(rc(s, n));
				for (let o = 0; o < u.length; o++) {
					const l = u[o] + (n && s.z ? s.z : 0);
					c(i(t, e), r(t, e), s.x, s.y, l)
				}
			}
		},
		d = function(t) {
			const o = Uo(t);
			for (let e = 0; e < o.length; e++) {
				const c = o[e];
				if (!(t === c.type)) continue;
				const u = a(c),
				l = f(c),
				_ = rc(c) + (n && Array.isArray(c.z) ? c.z[0] : 0);
				s(i(t, e), r(t, e), c.x, c.y, _, u, l)
			}
		},
		p = function(t) {
			const n = Uo(t);
			for (let o = 0; o < n.length; o++) {
				const e = n[o];
				if (!(t === e.type)) continue;
				const c = a(e),
				s = f(e),
				l = e.s,
				_ = l ? l.sx : e.x,
				d = l ? l.sy : e.y,
				p = l ? l.sz : e.z,
				h = l ? l.sh : e.h;
				if (u(i(t, o), r(t, o), _, d, p, h, c, s), "c" === t && (2 === e.roof || 3 === e.roof)) {
					const n = l.roof_lines;
					for (let e = 0; e < n.length; e++) {
						const c = n[e],
						s = c[0],
						l = c[1];
						u(i(t, o), r(t, o), [s[0], l[0]], [s[1], l[1]], [s[2], l[2]])
					}
				}
			}
		};
		for (let t = 0; t < data.bmp.length; t++) {
			const n = es(t);
			if (!n) continue;
			const o = i("bmp", t),
			e = Zo("bmp");
			s(o, e, n.x, n.y, 0, !0)
			} {
			const t = data.grid,
			n = t.x[0],
			o = t.x[1],
			e = t.y[0],
			i = t.y[1],
			r = rc(t, !1),
			c = Zo("grid");
			s(c, c, [n, o, o, n], [e, e, i, i], r, !0)
		}
		if (o) {
			const n = oi(0, !1),
			o = !0,
			i = function(t) {
				const n = [],
				o = [];
				for (let e = 0; e < t.x.length; e++) n[e] = (t.x[e] - it.x + X) / ct, o[e] = (t.y[e] - it.y + V) / ct;
				return {
					x: n,
					y: o
				}
			};
			if (n.An.length || n.Nn.length) {
				const r = Oi();
				for (let c = 0; c < n.jn.length; c++) {
					const u = n.jn[c],
					l = u + Io(),
					a = l + " " + g("title_noise_contours"),
					f = Si(n.jn[c], n.In[c]),
					_ = ur(f),
					d = o ? u : data.grid.h;
					if (n.An.length) {
						const o = l + " " + g("title_noise_contour_area"),
						u = n.An[c].slice();
						if (u.length) {
							const n = er(u);
							for (let c = 0; c < n.length; c++) {
								const l = n[c],
								f = l.On,
								p = i(t.arrayUnZip(u[f])),
								h = _.zn.slice();
								r || (h[3] = 128), s(o, a, p.x, p.y, d, h);
								const g = l.Hn;
								if (g.length) {
									const n = [];
									for (let o = 0; o < g.length; o++) {
										const e = g[o];
										n.push(i(t.arrayUnZip(u[e])))
									}
									e[e.length - 1].Hn = n
								}
							}
						}
					}
					if (n.Nn.length) {
						const e = n.Nn[c].slice();
						if (e.length) {
							const n = l + " " + g("title_noise_contour_line");
							for (let r = 0; r < e.length; r++) {
								const c = i(t.arrayUnZip(e[r])),
								l = _.Ln,
								f = !1;
								s(n, a, c.x, c.y, o ? u : data.grid.h, f, l)
							}
						}
					}
				}
			}
		}
		if (n ? p("a") : d("a"), n ? (p("b"), p("c")) : (d("b"), d("c")), o)
		for (let t = 0; t < data.rr.length; t++) {
			const n = pr(t);
			if (n)
			for (let t = 0; t < n.length; t++) {
				const o = n[t].xyz,
				e = g("obj_title_rays_plural");
				l(e, e, o)
			}
		}
		_("rr"), _("r"), _("p"), n ? p("l") : d("l"), _("gh"), d("gl"); {
			const t = data.section;
			if (t) {
				const n = t.x[0],
				o = t.x[1],
				e = t.y[0],
				i = t.y[1],
				r = t.z,
				c = Zo("section");
				s(c, c, [n, o], [e, i], r)
			}
		}
		return e
	}
	
	function __(t, n, o) {
		const e = function(t, n, e, i) {
			const r = gs({
				x: t,
				y: n
			}, o),
			c = Yn(r.lat);
			return [Yn(r.lon), c, Yn(i ? e + i : e)].join(",")
		},
		i = function(t, n = 1) {
			return "string" == typeof t && (t = pu(t)), hu(void 0 !== t[3] ? t[3] : 255 * n) + hu(t[2]) + hu(t[1]) + hu(t[0])
		},
		c = function(t, n, o) {
			f.push("<Placemark>", "<name>" + t + "</name>", "<description>" + n + "</description>", o.join(l), "</Placemark>")
		},
		s = function(t) {
			c(t.gt, t.Er, ["<Point>", "<coordinates>", e(t.x, t.y, t.z, t.h), "</coordinates>", "</Point>"])
		},
		u = function(t) {
			const n = t.h,
			o = t.z,
			r = [],
			s = function(t) {
				if (t.Ln || t.zn && !0 !== t.zn) {
					const n = ["<Style>"];
					return t.Ln && n.push("<LineStyle>", "<color>" + i(t.Ln) + "</color>", "<width>3</width>", "</LineStyle>"), t.zn && n.push("<PolyStyle>", "<color>" + i(t.zn) + "</color>", "<fill>1</fill>", "<outline>1</outline>", "</PolyStyle>"), n.push("</Style>"), n.join(l)
				}
				return ""
			}(t);
			s && r.push(s), t.zn ? (r.push("<Polygon>"), r.push("<outerBoundaryIs>"), r.push("<LinearRing>")) : r.push("<LineString>"), r.push("<coordinates>");
			for (let i = 0; i < t.x.length; i++) {
				const c = Array.isArray(n) ? n[i] : n,
				s = Array.isArray(o) ? o[i] : o;
				r.push(e(t.x[i], t.y[i], s, c))
			}
			if (r.push("</coordinates>"), t.zn) {
				r.push("</LinearRing>"), r.push("</outerBoundaryIs>");
				const i = t.Hn;
				if (i)
				for (let t = 0; t < i.length; t++) {
					r.push("<innerBoundaryIs>"), r.push("<LinearRing>"), r.push("<coordinates>");
					const c = i[t];
					for (let t = 0; t < c.x.length; t++) {
						const i = Array.isArray(n) ? n[t] : n,
						s = Array.isArray(o) ? o[t] : o;
						r.push(e(c.x[t], c.y[t], s, i))
					}
					r.push("</coordinates>"), r.push("</LinearRing>"), r.push("</innerBoundaryIs>")
				}
				r.push("</Polygon>")
			} else r.push("</LineString>");
			c(t.gt, t.Er, r)
		},
		l = "\r\n",
		a = f_(t, n),
		f = [],
		_ = r + t_() + ".kml";
		f.push('<?xml version="1.0" encoding="UTF-8"?>'), f.push('<kml xmlns="http://www.opengis.net/kml/2.2">'), f.push("<Document>"), f.push("<name>" + _ + "</name>");
		for (let t = 0; t < a.length; t++) {
			const n = a[t];
			Array.isArray(n.x) ? u(n) : s(n)
		}
		f.push("</Document>"), f.push("</kml>");
		n_("data:application/vnd.google-earth.kml+xml;charset=utf-8," + encodeURIComponent(f.join(l)), _)
	}
	
	function d_(t) {
		le((function() {
			! function(t) {
				const o = new DxfParser;
				try {
					! function(t) {
						const o = function(t, o) {
							const e = function() {
								const t = [],
								o = ["p", "b", "c", "r", "rr", "a"];
								n && o.push("l", "gh", "gl");
								const e = ["grid", "rays", "bmp", "section"];
								for (let n = 0; n < o.length; n++) t.push({
									type: o[n],
									title: Zo(o[n]),
									include: !0
								});
								for (let n = 0; n < e.length; n++) t.push({
									type: e[n],
									title: Zo(e[n]),
									include: !1
								});
								return t
							}(),
							i = t.layer;
							if (i)
							for (let t = 0; t < e.length; t++) {
								const n = e[t];
								if (n.title && 0 == i.toLowerCase().indexOf(n.title.toLowerCase())) {
									o.type = n.type;
									let t = i.substr(n.title.length);
									" - " === t.substr(0, 3) && (o.name = t.substr(3));
									break
								}
							}
						},
						e = function(t, n) {
							if (t.position) {
								const o = t.position;
								return o.x && (n.x = o.x), o.y && (n.y = -o.y), void(o.z && (n.z = o.z))
							}
							if (t.vertices) {
								const o = t.vertices;
								n.x = [], n.y = [];
								for (let t = 0; t < o.length; t++) {
									const e = o[t];
									n.x.push(e.x), n.y.push(-e.y)
								}
								o[0] && o[0].z && (n.z = o[0].z)
							}
							t.elevation && (n.z = t.elevation)
						},
						i = [],
						r = ["LINE", "LWPOLYLINE", "POLYLINE"];
						let c = 0;
						for (let n = 0; n < t.entities.length; n++) {
							const s = t.entities[n];
							if (!("POINT" === s.type || r.indexOf(s.type) > -1)) continue;
							const u = {
								layer: s.layer,
								type: null,
								name: null,
								setting: null,
								x: 0,
								y: 0,
								z: 0
							};
							o(s, u), e(s, u), u.type || (u.type = "POINT" === s.type ? "UP" : "UL", c++), i.push(u)
						}
						if (i.length)
						if (c) {
							const t = [],
							n = [],
							o = [],
							e = [],
							r = [],
							c = [],
							s = "(mixed)";
							for (let u = 0; u < i.length; u++)
							if ("UL" === i[u].type) {
								let e = t.indexOf(i[u].layer);
								e >= 0 ? (n[e]++, i[u].z !== o[e] && (o[e] = s)) : (t.push(i[u].layer), n.push(1), o.push(i[u].z))
								} else if ("UP" === i[u].type) {
								let t = e.indexOf(i[u].layer);
								t >= 0 ? (r[t]++, i[u].z !== c[t] && (c[t] = s)) : (e.push(i[u].layer), r.push(1), c.push(i[u].z))
							}
							let u = "<table>";
							t.length > 0 && (u += p_({
								layers: t,
								counts: n,
								heights: o
								}, !1)), e.length > 0 && (u += p_({
								layers: e,
								counts: r,
								heights: c
							}, !0)), u += "</table>", u += '<label><input type="checkbox" id="dxf_import_use_layer_name" /> ' + g("file_import_use_name") + "</label>";
							const l = function() {
								const n = $("#dxf_import_use_layer_name").is(":checked");
								return $("#confirm_text select").each((function() {
									const o = $(this).hasClass("select_up"),
									r = $(this).val();
									if ("" != r)
									for (let c = 0; c < i.length; c++) {
										let s = $(this).data("id");
										if (i[c].type === (o ? "UP" : "UL") && i[c].layer == (o ? e[s] : t[s])) {
											i[c].type = r;
											let t = parseInt($("#" + (o ? "up" : "ul") + "_h_" + s).val());
											t > 0 && (i[c].z = t), n && (i[c].name = i[c].layer)
										}
									}
								})), g_(i), !1
							};
							I_(g("file_import_unknown"), k_.oe("import_objects", "", u), "", l)
						} else g_(i);
						else g_()
					}(o.parseSync(t))
					} catch (t) {
					Xu(g("alert_data_invalid"), Ot)
				}
			}(t)
		}), ["js/dxf-parser.js"], "DxfParser")
	}
	
	function p_(t, n) {
		let o = '<tr><th colspan="4"><h3>' + g(n ? "file_import_points" : "file_import_polylines") + "</h3></th></tr>";
		o += "<tr><th>" + g("file_import_layer") + "</th><th>" + g("file_import_objects") + "</th><th>" + g("file_import_as") + "</th><th>" + g("file_import_set_height") + "</th></tr>";
		for (let e = 0; e < t.layers.length; e++) o += '<tr><td style="width: 25%;">&quot;' + t.layers[e] + '&quot;</td><td style="width: 25%;">' + t.counts[e] + '</td><td style="width: 25%;">' + h_(e, n) + '</td><td style="width: 25%;"><input value="' + t.heights[e] + '" id="' + (n ? "up" : "ul") + "_h_" + e + '" data-id="' + e + '" type="text" size="5" /></td></tr>';
		return o
	}
	
	function h_(t, o) {
		const e = o ? "select_up" : "select_ul",
		i = [""];
		o ? (i.push("p", "r"), n && i.push("gh")) : (i.push("a", "b", "c"), n && i.push("l", "gl"));
		let r = "";
		for (let t = 0; t < i.length; t++) r += '<option value="' + i[t] + '">' + (i[t] ? Zo(i[t], !1) : g("file_import_ignore")) + "</option>";
		return '<select class="' + e + '" data-id="' + t + '">' + r + "</select>"
	}
	
	function g_(t) {
		if (t) {
			if (t.length > 0) {
				let o = m_(t);
				if (!1 === o) return !1;
				if ("" === o) var n = g("alert_import_empty");
				else {
					n = g("alert_import_success");
					o = k_.he(o.replace(/\n/g, "<br />"))
				}
				I_(n, o, null, null, !1), "" !== o && b_()
			}
			return !0
		}
		Xu(g("alert_import_empty"), Ht)
	}
	
	function b_() {
		el(), fa(), xe(), Uu(), ba(!0)
	}
	
	function m_(n, o) {
		const e = [],
		i = [];
		for (let t = 0; t < n.length; t++) ro(e, n[t].x), ro(i, n[t].y);
		const r = uo(e),
		c = so(e),
		s = uo(i),
		u = so(i);
		let l = 0,
		a = 0;
		if (r > 5e3 || c < -5e3 || s > 5e3 || u < -5e3) {
			if (null == o) {
				const t = function() {
					m_(n, !0), b_()
				},
				o = function() {
					m_(n, !1), b_()
				};
				return z_(g("alert_import_outside_limits"), t, o), !1
			}
			o && ((r > 5e3 || c < -5e3) && (l = -Math.round((r + c) / 2)), (s > 5e3 || u < -5e3) && (a = -Math.round((s + u) / 2)))
		}
		let f = 0;
		for (let t = 0; t < n.length; t++) {
			let o = n[t].name;
			o && (o = o.replace(/\[([^\]]+)\]/gi, ""), o = Fr(o));
			"gh" === n[t].type ? f++ : n[t].name = o || null
		}
		f > 0 && (data.gh = []);
		const _ = function(t, n) {
			return null === n ? "a" === t ? 0 : 1 : qr(t, n, "setting", 1)
		};
		let d = "";
		for (let o = 0; o < n.length; o++) {
			const e = n[o],
			i = e.type;
			let r = qr(i, e.name, "name"),
			c = _(i, e.setting),
			s = qr(i, e.x, "x"),
			u = qr(i, e.y, "y");
			for (let t = 0; t < s.length; t++) {
				const n = t < s.length - 1 ? t + 1 : 0;
				s[t] === s[n] && u[t] === u[n] && (s.splice(t, 1), u.splice(t, 1))
			}
			let f = qr(i, e.z, "h");
			if (Array.isArray(s))
			for (let t = 0; t < s.length; t++) "" != s[t] && (s[t] += l);
			else "" != s && (s += l);
			if (Array.isArray(u))
			for (let t = 0; t < u.length; t++) "" != u[t] && (u[t] += a);
			else "" != u && (u += a);
			if (Yo(e.type)) {
				let n = null,
				o = bl(i, r);
				const l = o > -1 ? o : null;
				if (Po(i)) {
					let o = null,
					a = null;
					if (e.params) {
						if (Array.isArray(e.params[0]))
						if (Array.isArray(e.params[1])) {
							o = [];
							for (let n = 0; n < e.params[0].length; n++) {
								let r = t.freqBand(qr(i, e.params[1][n], "hz"));
								r < t.f.length && (o[r] = qr(i, e.params[0][n], "lw", null))
							}
						} else o = qr(i, e.params[0], "lw", null);
						else o = qr(i, e.params[0], "lw"), a = qr(i, e.params[1], "hz");
						if (Array.isArray(o))
						for (; o.length > 0 && !o[o.length - 1];) o.pop()
					}
					n = "p" === i ? zc(!0, l, {
						name: r,
						setting: c,
						x: s,
						y: u,
						h: f,
						lw: o,
						hz: a
						}) : Dc(!0, l, {
						name: r,
						setting: c,
						x: s,
						y: u,
						h: f,
						lw: o,
						hz: a
					})
					} else if ("r" === i) n = Ec(!0, l, {
						name: r,
						setting: 0,
						x: s,
						y: u,
						h: f
					});
					else if ("rr" === i) n = Sc(!0, l, {
						setting: c,
						x: s,
						y: u,
						h: f
					});
					else if ("gh" === i) n = ws(!0, l, {
						x: s,
						y: u,
						z: f
					});
					else if ("gl" === i) n = ks(!0, l, {
						x: s,
						y: u,
						z: f
					});
					else if ("b" === i || "c" === i) {
						let t = null;
						e.params && (t = e.params[1] ? qr(i, [e.params[0], e.params[1]], "rc") : qr(i, e.params[0], "rc")), n = Cc(!0, l, "c" === i, {
							name: r,
							setting: c,
							x: s,
							y: u,
							h: f,
							rc: t
						})
						} else "a" === i && (n = Oc(!0, l, {
							name: r,
							setting: c,
							x: s,
							y: u,
							h: f
						}));
						n && (d += Zo(i, !1) + (n.name ? ' "' + n.name + '"' : "") + " (" + To(f) + ")", d += ": " + (o > -1 ? "<em>" + g("file_import_replaced") + "</em>" : "<b>" + g("file_import_added") + "</b>") + "\r\n")
			}
		}
		return d && (l || a) && (d += g("alert_import_limits_modified")), d
	}
	
	function v_(t, n = !0) {
		let o;
		"string" == typeof t ? (o = t, t = $("#" + t)) : o = t.prop("id"), t.Ee(n).prop("disabled", n), o && $("label[for=" + o + "]").Ee(n)
	}
	
	function $_() {
		function t(t, n, o, e, i) {
			const r = $(k_.oe("control_group", "control_group-" + o)).appendTo(t),
			c = $(k_.be(n)).appendTo(r);
			return e && $(svgIcon(e)).prependTo(c), $(i).appendTo(r), r
		}
		$("#settings").remove();
		const n = $(k_.oe("panel globalpanel", "settings")).appendTo("#options"),
		o = $(k_.o("settings_container")).appendTo(n);
		t(o, g("config_groups_opts"), "opts", "opts", M_.Nr(["button_export", "button_editor"], [g("buttons_export_import"), g("objects")], ["text_button", "text_button"]) + M_.$("light_theme", 1, g("config_light_theme"), {
			Tr: "sub_enabled"
			})), t(o, g("config_groups_share") + Su("#url"), "share", "share", M_.Lr(k_.Ko(g("title_snapshots"), "button text_button sub_visible", "button_snapshots") + k_.Ko(g("buttons_short_url"), "button text_button", "button_shorturl") + '<input id="short_url" readonly="readonly" type="text" autocomplete="off" value="" />' + k_.me("short_url_copy"), "buttons")), t(o, g("config_groups_labels"), "labels", "labels", data.config.show_names.C() + data.config.receiver_type.C() + data.config.precision.C()), t(o, g("config_groups_grid"), "grid", "gridopts", M_.Nr(["button_editgrid"], [g("buttons_grid_area")], ["text_button"]) + data.config.grid_figures.C() + data.config.grid_lines.C() + data.config.grid_type.C() + data.config.resolution_limit.C() + data.config.contour_type.C() + k_.oe("group_checkboxes", "", data.config.grid_blend.C() + data.config.contour_styled.C()) + M_.Nr(["button_editlegend"], [g("buttons_scheme")], ["text_button"]) + M_.A("legend_setting", g("legend"), [1, 2, 0], data.config.legend_setting.D)), t(o, g("config_groups_calc"), "calc", "gear", M_.Nr(["button_states"], [g("buttons_states")], ["text_button"]) + data.config.weighting.C() + M_.$("multithread", 1, g("config_multi_thread") + " " + svgIcon("rapid", {
				w: 16
			}) + Su("#multithread"), {
			Tr: "sub_enabled"
			})), t(o, g("config_groups_env"), "env", "frost", data.config.gfactor.C() + data.config.gfactor_disable.C() + data.config.temperature.C() + data.config.humidity.C()), t(o, g("config_groups_barrier"), "barrier", "barrier", data.config.iso_limit.C() + data.config.iso_check.C() + data.config.iso_ground.C() + data.config.iso_edges.C() + k_.oe("group_checkboxes", "", data.config.iso_laterallimit.C() + data.config.iso_convex.C())), t(o, g("config_groups_reflect"), "reflect", "reflect", data.config.reflections.C() + data.config.iso_facade.C() + data.config.iso_surface.C()), t(o, g("config_groups_gh"), "gh", "gh_tiny", M_.$("grid_triangulation", 1, g("config_grid_triangulation"), {
			S: Su("#ground")
		}) + M_.$("disable_gh", 1, g("config_disable_gh"))), t(o, g("config_groups_help"), "guide", "guide", M_.H("language", g("config_language"), [], []) + M_.Nr(["button_viewguide", "button_resettips"], [g("buttons_view_guide"), g("buttons_unhide_tips")], ["text_button", "text_button"])),
		function() {
			const t = $("#language, #guide_language");
			t.empty();
			for (let n = 0; n < lang_objects.languages.length; n++) {
				const o = lang_objects.languages[n];
				if (!o.test) {
					const n = o.code,
					e = o.title + (o.test ? " (test)" : "");
					$(M_.Ae(n, e)).appendTo(t)
				}
			}
			t.val(h)
			}(), t(o, g("config_groups_account"), "account", "account", k_.oe("control buttons", "account_buttons", '<a href="' + w() + '" id="button_login" class="button text_button">' + g("buttons_user_login") + "</a>")), $("#button_snapshots").click((function() {
				D_(), oa(!1)
				})), $("#button_shorturl").click((function() {
				$("#short_url").val(g("shorturl_wait")), Ha(window.location.href, (function(t) {
					$("#short_url").val(t)
					}), (function() {
					$("#short_url").val(g("shorturl_fail"))
				})), $("#short_url, #short_url_copy").fadeIn()
				})), $("#short_url").on("click focus", (function() {
				$(this).select()
				})), $("#short_url_copy").click((function() {
				Sl($("#short_url").val(), g("buttons_short_url"))
				})), $("#button_resettips").click((function() {
				Au("hideTips", !1), $(".tippanel.hide").removeClass("hide"), oa(!1)
				})), $("#button_export").click((function() {
				Dn.Sr.ie(), oa(!1)
				})), $("#button_editor").click((function() {
				zl(), oa(!1)
				})), $("#button_states").click((function() {
				Qs(), oa(!1)
				})), $("#button_editlegend").click((function() {
				wu(!0), oa(!1)
				})), $("#button_editgrid").click((function() {
				Nl("grid", 0), oa(!1)
			}));
			const e = function(t, n) {
				$("input[name=" + t + "]").on("change", (function() {
					we(n)
				}))
			};
			e("legend_setting", {
				It: !0
				}), e("show_names", {
				xt: !0
				}), e("grid_lines", {
				kt: !0
				}), $("#grid_type").on("change", (function() {
					we({
						kt: !0,
						Mt: !0,
						ot: !0
					})
					})), $("input[name=grid_figures]").on("change", (function() {
					we({
						kt: !0,
						ot: !0
					})
					})), $("#contour_type, #contour_styled, #grid_blend").on("change", (function() {
					we({
						kt: !0,
						Mt: !0
					})
				})), e("receiver_type", {
				kt: !0
				}), e("precision", {
				kt: !0
				}), $("#light_theme").on("change", (function() {
					we({
						kt: !0,
						wt: !0
					}), Au("light_theme", f)
					})), $("#resolution_limit").on("change", (function() {
					we({
						ot: !0
					})
					})), $("#gfactor, #gfactor_disable, #temperature, #humidity, #iso_limit, #iso_check, #iso_surface, #iso_edges, #iso_convex, #iso_laterallimit, #iso_ground, #reflections").on("change", (function() {
					we({
						jt: !0
					})
					})), $("#weighting").on("change", (function() {
					we({
						jt: !0,
						It: !0
					})
					})), $("#iso_facade").on("change", (function() {
					we({
						V: "b"
					})
					})), $("#disable_gh").on("change", (function() {
					we({
						V: "gh"
					})
					})), $("#grid_triangulation").on("change", (function() {
					we({
						kt: !0
					}), Au("grid_triangulation", p)
					})), $("#multithread").on("change", (function() {
					cl()
					})), $("#button_viewguide").click((function() {
					L_("intro"), oa(!1)
					})), $("[data-linkto]", o).on("click", (function() {
					L_($(this).data("linkto"))
				})), Fa(!0)
	}
	
	function y_() {
		const t = function(t, n = null, o = "") {
			return $('<div id="' + t + '" class="tool_button' + x_(o) + '"' + (null != n ? ' data-id="' + n + '"' : "") + "></div>")
		},
		n = function(t, n) {
			return n || (n = t), '<span class="icon icon_' + t + '" data-svg="' + t + '" data-svgtext="' + m("toolbar_" + n) + '"></span>'
		};
		$(".toolbar").empty(); {
			const o = $(".toolbar", "#control"),
			e = t("play").appendTo(o);
			$(n("calc_on") + n("calc_off") + n("grid_off")).appendTo(e);
			const i = $(k_.o("navigate")).appendTo(o);
			$(k_.o("scale")).appendTo(i)
			} {
			const o = [{
				o: "settings",
				Rr: "settings",
				mn: null
				}, {
				o: "select",
				Rr: "select",
				mn: 0,
				Dr: 0
				}, {
				o: "pan",
				Rr: "pan",
				mn: 2,
				Dr: 2
				}, {
				o: "zoom",
				Rr: "zoom",
				mn: 3,
				Dr: 3
				}, {
				o: "edit",
				Rr: "edit",
				mn: 1,
				Dr: 1
				}, {
				o: "grid",
				Rr: "drawgrid",
				mn: 6,
				Dr: 6
				}, {
				o: "section",
				Rr: "drawsection",
				mn: 7,
				Dr: 7
				}, {
				o: "add",
				Rr: "addobj",
				mn: 4
			}],
			e = $(".toolbar", "#tools");
			for (const i in o) {
				const r = o[i],
				c = t("tools_" + r.o, r.mn, null != r.mn ? "tool" : "").appendTo(e);
				$(n(r.Rr, r.o)).appendTo(c), null != r.Dr && $("#panel_tool_" + r.Dr).appendTo(c)
			}
			} {
			const o = ["p", "l", "r", "b", "c", "rr", "a", "bmp", "gh", "gl"],
			e = $(".toolbar", "#addobjects"),
			i = $(k_.oe("toolbar_title")).insertBefore(e);
			$(k_.be(g("toolbar_add"))).appendTo(i);
			const r = $(k_.oe("subpanels", "panel_add")).insertAfter(e);
			for (const i in o) {
				const c = o[i],
				s = t("tools_" + c, c, "addtool").appendTo(e);
				$(n("add" + c, "obj_" + c)).appendTo(s), $("#panel_add_" + c).appendTo(r)
			}
			} {
			const n = [0, 2, 1, 3],
			o = $(".toolbar", "#mode");
			for (const e in n) {
				const i = n[e],
				r = t("mode_" + i, i, "mode_button").appendTo(o),
				c = m("toolbar_mode" + i);
				$(`<span class="icon" data-svg="mode${i}" data-svgtext="${c}"></span>`).appendTo(r)
			}
			} {
			const n = $(".toolbar", "#account"),
			o = t("login").appendTo(n);
			$(`<a href="${w()}" class="icon login_href" data-svg="login" data-svgtext="${m("buttons_user_login")}"></a>`).appendTo(o)
		}
		$(".tool_button").hover((function() {
			const t = $(".tooltip:visible", this);
			if (!t[0]) return;
			const n = t[0].getBBox().width,
			o = t.parent().width();
			if (n > o + 2) {
				const e = (n - o) / 2 + 2;
				$("text", t).each((function() {
					$(this)[0].animate([{
						transform: "translateX(" + e + "px)"
						}, {
						transform: "translateX(" + -e + "px)"
					}], {
					duration: 1e3 + 100 * e,
					direction: "alternate",
					easing: "ease-in-out",
					iterations: 1 / 0
					})
				}))
			}
			}), (function() {})), $("#tools_settings").click((function() {
			oa()
			})), $(".tool_button.tool").click((function() {
			Kl(this)
			})), $(".tool_button.mode_button").click((function() {
			na(this)
			})), $(".tool_button.addtool").click((function() {
			ta(this)
			})), $(".tippanel[data-panel]").each((function() {
			$(k_.Ko(g("buttons_got_it"), "go_button text_button button")).appendTo(this).click((function() {
				ra()
			}));
			$(k_.re()).appendTo(this).click((function() {
				ra()
				})), $(this).click((function(t) {
				t.stopPropagation()
			}))
			})), $(".collapsible_tip").each((function() {
			const t = $(this).children(":first"),
			n = $(this).children(":not(:first)");
			t.addClass("collapse_toggle").click((function() {
				t.toggleClass("active"), t.ai() ? n.stop().fadeIn(300) : n.hide()
			})), n.hide(), $(svgIcon("toggle")).prependTo(t)
		})), $(".collapse_toggle", ".collapsible_tip:first-child").click(),
		function() {
			if ($("html").hasClass("no-touch")) return;
			i_ = !0;
			const t = $("#wrap"),
			n = function(n, o) {
				const e = "pan_" + o;
				$(k_.Ko(svgIcon(e, {
					vw: 80,
					w: 40
				}), "pan_button", e)).appendTo(t).click((function() {
				va(n)
				}))
			};
			n(0, "n"), n(1, "e"), n(2, "s"), n(3, "w")
		}()
	}
	
	function w_(t) {
		i_ && $(".pan_button").dt(t)
	}
	const x_ = function(t, n) {
		return t ? n ? " " + n + '="' + t + '"' : " " + t : ""
	},
	k_ = {
		Ue: function(t, n = "", o, e, i) {
			return "<" + t + x_(o, "class") + x_(e, "id") + x_(i) + ">" + n + "</" + t + ">"
		},
		Hr: function() {
			return " " + this.Ue("sub", g("user_sub_only"))
		},
		Or: function(t) {
			return this.Ue("h2", t)
		},
		be: function(t) {
			return this.Ue("h3", t)
		},
		Pr: function(t) {
			return this.Ue("h4", t)
		},
		Cr: function(t) {
			return this.Ue("h5", t)
		},
		he: function(t, n, o) {
			return this.Ue("p", t, n, o)
		},
		Je: function(t, n, o) {
			return this.Ue("ul", t, n, o)
		},
		We: function(t, n, o) {
			return this.Ue("li", t, n, o)
		},
		oe: function(t, n, o) {
			return this.Ue("div", o, t, n)
		},
		o: function(t, n) {
			return this.Ue("div", n, "", t)
		},
		te: function(t, n, o) {
			return this.Ue("span", t, n, o)
		},
		Ko: function(t, n, o, e) {
			const i = e ? 'title="' + b(e) + '"' : "";
			return this.Ue("button", t, n, o, i)
		},
		ge: function(t) {
			return '<a href="javascript:void(0)" tabindex="0">' + t + "</a>"
		},
		me: function(t) {
			return this.Ko(svgIcon("copy", {
				vw: 20
			}), "copy", t, g("buttons_clipboard"))
		},
		Oe: function(t) {
			const n = '<span class="inactive_only">' + svgIcon("star", {
				w: 30,
				vw: 40
				}) + '</span><span class="active_only">' + svgIcon("trash", {
				w: 30
			}) + "</span>";
			return this.Ko(n, "button save_button", t + "_save")
		},
		$e: function(t = !1) {
			return this.Ko(svgIcon(t ? "trash" : "cross"), "button icon_button delete_button")
		},
		De: function() {
			return this.Ko(svgIcon("up"), "button icon_button add_button")
		},
		Be: function() {
			return this.Ko(svgIcon("objzoom"), "button icon_button", "", g("buttons_center_view"))
		},
		re: function() {
			return this.Ue("button", svgIcon("x", {
				w: 30
			}), "close_button button")
		},
		Xe: function(t) {
			return this.he(t, "note")
		},
		de: function(t) {
			return this.oe("message_placeholder", "", t)
		},
		Fr: function(t) {
			return this.oe("message error", "", t)
		},
		ei: function(t) {
			return this.oe("message error", "", svgIcon("invalid", {
				w: 32
			}) + t)
		},
		pe: function(t) {
			return this.oe("message alert", "", t)
		},
		ii: function(t) {
			return this.oe("message tip", "", t)
		},
		He: function(t, n) {
			return '<label for="' + n + '" id="' + n + '_label">' + t + "</label>"
		},
		Ae: function(t, n, o) {
			return '<option value="' + t + '"' + (o ? " " + o : "") + ">" + n + "</option>"
		},
		H: function(t, n, o, e) {
			let i = "";
			for (let o = 0; o < t.length; o++) i += this.Ae(t[o], n[o]);
			return '<select id="' + e + '" name="' + e + '" class="' + o + '">' + i + "</select>"
		},
		M: function(t, n, o = "") {
			return '<input type="text" autocomplete="off" id="' + t + '" name="' + t + '" size="' + n + '" value="' + o + '" /> '
		},
		Ye: function(t, n, o = "") {
			return '<input type="text" autocomplete="off" id="' + t + '" name="' + t + '" size="' + n + '" value="' + o + '" class="textinput" /> '
		},
		qr: function(t) {
			return '<input type="hidden" id="' + t + '" /> '
		},
		U: function(t, n, o, e) {
			return '<input type="number" autocomplete="off" id="' + t + '" name="' + t + '" size="5" step="' + n + '" min="' + o + '" max="' + e + '" value="" /> '
		},
		at: function(t, n, o = "") {
			return '<span title="' + n + '" class="' + o + '">' + t + "</span>"
		},
		Re: function(t) {
			return '<button id="' + t + '" class="colour"></button>'
		},
		oi: function(t) {
			return this.Ue("table", t)
		},
		Ve: function(t) {
			return this.Ue("thead", t)
		},
		ni: function(t) {
			return this.Ue("tbody", t)
		},
		Qe: function(t, n) {
			return this.Ue("tr", t, n)
		},
		ti: function(t, n) {
			return this.Ue("th", t, n)
		},
		Ke: function(t, n) {
			return this.Ue("th", t, n, "", 'colspan="2"')
		},
		_i: function(t, n) {
			return this.Ue("td", t, n)
		},
		di: function(t, n) {
			return this.Ue("td", t, n, "", 'colspan="2"')
		}
	},
	M_ = {
		Lr: function(t, n, o) {
			return "<div" + (o ? ' id="control_' + o + '"' : "") + ' class="control' + x_(n) + '">' + t + "</div>"
		},
		M: function(t, n, o = 5, e) {
			return this.Lr(this.He(t, '<input type="text" autocomplete="off" id="' + t + '" name="' + t + '" size="' + o + '" value="" /> ' + n), e, t)
		},
		U: function(t, n, o, e, i, r) {
			return this.Lr(this.He(t, k_.U(t, o, e, i) + " " + n), r, t)
		},
		He: function(t, n) {
			return k_.He(n, t)
		},
		A: function(t, n, o, e, i) {
			let r = n ? "<h4>" + n + "</h4>" : "";
			for (let n = 0; n < o.length; n++) r += this.He(t + "_" + o[n], '<input type="radio" id="' + t + "_" + o[n] + '" name="' + t + '" value="' + o[n] + '" />' + e[n]);
			return this.Lr(r, "toggle_control" + x_(i), t)
		},
		$: function(t, n, o, e = {}) {
			return this.Lr(this.He(t, '<input type="checkbox" id="' + t + '" name="' + t + '" value="' + n + '" /> ' + o) + (e.S ? e.S : ""), e.Tr, t)
		},
		Ae: function(t, n) {
			return k_.Ae(t, n)
		},
		H: function(t, n, o, e, i) {
			let r = this.He(t, n);
			r += '<select id="' + t + '" name="' + t + '">';
			for (let t = 0; t < o.length; t++) r += this.Ae(o[t], e[t]);
			return r += "</select>", this.Lr(r, "single_control" + x_(i), t)
		},
		Nr: function(t, n, o) {
			let e = "";
			for (let i = 0; i < n.length; i++) e += '<button id="' + t[i] + '" class="button' + x_(o[i]) + '">' + n[i] + "</button>";
			return this.Lr(e, "buttons")
		}
	};
	
	function j_() {
		const o = function(t, n, o, e, i) {
			const r = $(k_.oe("window_blackout", t)).appendTo("#wrap"),
			c = $(k_.oe("window", t + "_window")).appendTo(r).click((function() {
				event.stopPropagation()
			})),
			s = ($(k_.re()).appendTo(c).click((function() {
				a()
			})), $(k_.Or()).prependTo(c).html(n)),
			u = $(k_.oe("window_content")).appendTo(c).html(o);
			let l = {};
			const a = function() {
				r.stop().fadeOut(400, (function() {
					Ys()
				})), l.dt = !1, i && i()
			};
			c.draggable({
				stop: function() {
					$(this).css({
						height: "",
						width: ""
					})
				},
				handle: "h2"
			});
			return r.on("dragover", (function(t) {
				return t.stopPropagation(), t.preventDefault(), t.dataTransfer = t.originalEvent.dataTransfer, t.dataTransfer.dropEffect = "link", !1
				})).on("drop", (function(t) {
				return ys(t), !1
				})), r.hide(), r.click((function() {
				var t;
				t = e, $(":focus").blur(), t && a(), event.stopPropagation()
			})), {
			V: r,
			ve: c,
			Ur: s,
			Ii: u,
			ie: function() {
				Ba(), c.css({
					left: "",
					top: ""
				}), r.stop().fadeIn(200), Ys(!0), l.dt = !0
			},
			re: a,
			Ce: l,
			Tt: function() {
				return !0 === l.dt
			}
			}
		},
		e = function(t, n = !1) {
			return n ? k_.Ue("h3", t, "title") : k_.te(t, "title")
		},
		i = function(t) {
			return k_.te(t, "unit")
		},
		c = function(t) {
			return k_.te(t, "inputs")
		},
		s = function(t, n) {
			return k_.Ue("th", e(t), n)
		},
		u = function(t, n) {
			return k_.Ue("td", t, n)
		},
		l = function(t, n, o, i) {
			return k_.oe("field" + x_(i), t + "_field", e(n) + c(o))
		},
		a = function(t, n) {
			return '<input type="text" autocomplete="off" id="' + t + '" name="' + t + '" value=""' + x_(n) + " />"
		},
		f = function(t, n, o, e = "0.1") {
			return 'size="' + t + '" min="' + n + '" max="' + o + '"' + (e ? ' step="' + e + '"' : "")
		},
		d = function(t, n) {
			return 'size="' + t + '" maxlength="' + n + '"'
		},
		p = function(t, n) {
			return '<input type="number" autocomplete="off" id="' + t + '" name="' + t + '" value=""' + x_(n) + " />"
		},
		b = function(t, n, o = {}) {
			return '<select id="' + t + '" name="' + t + '"' + x_(o.Br, "class") + ">" + n + "</select>"
		},
		v = function(t, n, o = {}) {
			const e = k_.He(n, t);
			let r = a(t, x_(o.Zr, "size") + (o.Jr ? " readonly" : ""));
			return o.Wr && (r += i(o.Wr)), o.S && (r += o.S), l(t, e, r, o.Tr)
		},
		w = function(t, n, o, e, i, r = {}) {
			let c = "";
			for (let n = 0; n < o.length; n++) {
				let s = "toggle";
				!1 !== r.O && (s += " text_toggle"), r.Yr && (s += " icon_toggle"), r.Gr && (s += 0 === n ? " toggle_off" : " toggle_on"), r.Br && (s += " " + r.Br);
				const u = i[r.Xr ? r.Xr[n] : e[n]];
				c += '<label for="' + o[n] + '" id="' + o[n] + '_label" class="' + s + '"><input type="radio" id="' + o[n] + '" name="' + t + '" value="' + e[n] + '" />' + u + "</label>"
			}
			return r.S && (c += r.S), l(t, n, c, "toggles" + (r.Gr ? " status_toggles" : ""))
		},
		x = function(t, n, o = "", e = {}) {
			const i = k_.He(n, t);
			let r = b(t, o);
			return e.S && (r += e.S), l(t, i, r)
		},
		k = function(t, n, o, e) {
			return k_.Ko(n, "button" + x_(o), t, e)
		},
		M = function(t, n, o = [], e) {
			let i = "";
			for (let e = 0; e < t.length; e++) i += k(t[e], n[e], o[e]);
			return k_.oe("buttons" + x_(e), "", i)
		},
		j = function(n) {
			const o = "edit_" + n,
			r = t.f.length,
			l = function(t, n) {
				return "dB" + (t ? "(A)" : "") + ("l" === n ? "/m" : "")
			},
			_ = function(t, n = "", e = 3, i = 0, r = 200) {
				return p(o + "_" + t, f(e, i, r) + ' class="' + n + '"')
			},
			h = function(t, n, o) {
				return u(_(t, "", 8, n, o), "lvl_single")
			},
			b = function(t) {
				let n = "";
				for (let o = 0; o < r; o++) n += u(_("lvlval" + (t ? "w" : "") + o, "no_step multi_lvl" + (t ? " weighted_lvl" : ""), void 0, ""), "lvl_multi");
				return n
			},
			v = function(t) {
				return u(i(t))
			},
			$ = function(t, n) {
				return function(t, n, o) {
					return k_.Ue("tr", t, n, o)
				}(n, t)
			};
			return k_.be(g("prop_lw_title") + Su("soundpower") + k_.me(o + "_copy")) + k_.oe("field multi levels", o + "_lvls", "<table>" + $(o + "_lvls_f", s(g("prop_frequency")) + h("lvlfreq", t.f_lower[0], t.f_upper) + function() {
				let t = "";
				const n = ' class="out_scope" title="' + m("outside_scope") + '"';
				for (let e = 0; e < r; e++) t += u('<label for="' + o + "_lvlval" + e + '"' + (0 === e || e === r - 1 ? n : "") + ">" + Pn(e) + "</label>", "lvl_multi");
				return t
			}() + v("Hz")) + $(o + "_lvls_l", s(g("prop_level")) + h("lvlval") + b() + v(l(!1, n))) + $(o + "_lvls_total lvl_total lvl_multi", s(g("prop_total")) + '<td colspan="' + r + '">' + _("lvl_total") + "</td>") + $(o + "_lvls_w weighted", s(g("prop_aweighted")) + h("lvlvalw") + b(!0) + v(l(!0, n))) + $(o + "_lvls_totalw lvl_total lvl_multi weighted", s(g("prop_total"), "lvl_multi") + '<td colspan="' + r + '" class="lvl_multi">' + _("lvl_totalw", "weighted_lvl", 3, "") + "</td>") + "</table>") + (k_.oe("field library", o + "_library", e(k_.He(g("prop_lw_library"), o + "_lib")) + k_.oe("inputs", "", '<select id="' + o + '_lib" name="' + o + '_lib"></select>' + k_.Oe(o))) + k_.oe("library_loader field")) + function() {
			let t = "";
			for (let n = 0; n < an.length; n++) t += '<label for="' + o + "_adj_type" + n + '" class="toggle text_toggle' + (0 === n ? " toggle_off" : "") + '"><input type="radio" id="' + o + "_adj_type" + n + '" name="' + o + '_adj_type" value="' + n + '" />' + an[n] + "</label>";
			return k_.oe("field toggles adjlevel", o + "_adj", e(k_.He(Do("adj"), o + "_adj_lvl")) + c(a(o + "_adj_lvl", d(5, 8) + ' step="0.1"') + t))
			}()
		},
		I = function(t) {
			const n = t + "_h",
			o = k_.He(Do("h"), n);
			let e = p(n, f(5, 0, 9999)) + i(No());
			return l(n, o, e)
		},
		z = function(t) {
			const n = t + "_h";
			return l(n, Do("h"), p(n, f(5, 0, 9999)) + b(t + "_heights") + i(No()) + k(t + "_edit_heights", g("prop_multi_height"), "text_button edit_heights"), "heights_field multi_heights_field")
		},
		A = function(t, n) {
			return k_.oe("windowpanel", t, n)
		},
		E = function(t) {
			return w(t + "_toggle", g("prop_status"), [t + "_off", t + "_on"], [0, 1], Qo(Wt, Jt), {
				Yr: !0,
				Gr: !0
			})
		},
		N = function(t) {
			return w(t + "_lvl", Do("spectrum"), [t + "_lvl_single", t + "_lvl_multi"], [1, 2], Qo(Vt, Xt), {
				Yr: !0,
				Xr: [0, 1]
			})
		},
		L = function(t) {
			let n = "";
			for (let t = 20; t >= 14; t--) n += '<option value="' + t + '"' + (19 === t ? " selected" : "") + ">" + t + "</option>";
			return x(t + "_zoom", g("prop_map_zoom"), n)
		},
		S = function(t) {
			let n = "";
			for (let t = 0; t < Xc.length; t++) n += k_.Ae(t, g("gmap_type_" + t));
			return x(t + "_type", g("prop_type"), n)
		};
		let R, D;
		R = k_.o("editor_selector") + k_.o("editor_table") + k_.oe("message_placeholder", "editor_message") + M(["button_clear", "button_new"], [g("buttons_clear"), g("buttons_start_new")], ["text_button", "text_button"]), D = g("objects") + k_.oe("window_icon", "", svgIcon("objects", {
			vw: 40,
			w: 40
		})), Dn.Lt = o("editor", D, R, !0), R = k_.oe("message_placeholder", "edit_message") + function() {
		const t = "edit_p";
		return A(t, E(t) + I(t) + N(t) + j("p"))
		}() + function() {
		const t = "edit_l";
		return A(t, E(t) + I(t) + w(t + "_method", Do("method"), [t + "_method_0", t + "_method_1"], [0, 1], on) + N(t) + j("l"))
		}() + function() {
		const t = function(t, n) {
			let o = "";
			for (let n = 1; n < 3; n++) o += t ? a("edit_b_rcdb" + n, d(3, 8) + ' class="is_calc" readonly') : p("edit_b_rc" + n, f(3, 0, 1, "0.01"));
			return c(o + n)
		},
		n = function(t, n, o) {
			return '<button class="button toggle_button rcbutton" id="edit_b_setrc' + t + '" data-rc="' + n + '">' + o + "</button>"
		},
		o = "edit_b";
		return A(o, E(o) + function(t) {
			const n = [t + "_slope_0", t + "_slope_1"],
			o = Qo(Qt, Kt);
			return w(t + "_slope", Do("slope"), n, [0, 1], o, {
				Yr: !0
			})
			}(o) + function() {
			const t = [o + "_roof_0", o + "_roof_1", o + "_roof_2", o + "_roof_3"],
			n = Qo(tn, nn, !0),
			e = k(o + "_fixroof", g("button_roof_align"), "text_button"),
			i = k(o + "_flip", svgIcon("flip", {
				vw: 32,
				w: 32
			}), "icon_button edit_b_roof white_button", g("button_roof_rotate"));
			return w(o + "_roof", Do("roof"), t, [0, 1, 2, 3], n, {
				Yr: !0,
				O: !1,
				Br: "edit_b_roof",
				S: i + e
			})
			}() + function(t, n = {}) {
			const o = t + "_h",
			e = k_.He(Do("h"), o),
			r = f(5, 0, 9999);
			return l(o, e, p(o, r) + k_.He(svgIcon("pointer", {
				w: 12,
				vw: 24
			}), t + "_h2") + p(t + "_h2", r + ' class="force-update"') + i(No()), "heights_field")
		}(o) + k_.oe("", "edit_b_rcs", k_.oe("field", "", e(g("prop_reflections"), !0) + c(k_.He('<input type="checkbox" id="edit_b_rc_match" name="edit_b_rc_match" checked value="1" /> ' + g("prop_refl_match"), "edit_b_rc_match") + Su("#reflections"))) + k_.oe("field", "", e(k_.He(g("prop_coefficient"), "edit_b_rc1")) + t(!1, i(" &rho; (0-1)"))) + k_.oe("field", "", e(k_.He(g("prop_refl_level"), "edit_b_rcdb1")) + t(!0, i(" dB"))) + k_.de() + k_.oe("field buttons widebuttons", "edit_b_rcbuttons", k_.Pr(g("rc_title")) + n(1, 1, g("rc_0") + " &rho;=1") + n(2, .8, g("rc_1") + " &rho;=" + qn(.8)) + n(3, .4, g("rc_2") + " &rho;=" + qn(.4)) + n(4, 0, g("rc_3") + " &rho;=0"))))
		}() + function() {
		const t = "edit_r";
		return A(t, w(t + "_toggle", g("prop_spectrum"), [t + "_off", t + "_on"], [0, 1], Qo(sn, cn), {
			Yr: !0
			}) + w(t + "_h_opt", Do("h_option"), [t + "_h_opt0", t + "_h_opt1"], [0, "grid"], ln, {
			Xr: [0, 1]
		}) + z(t) + k_.oe("field widefield results", "edit_r_lvls"))
		}() + function() {
		const t = "edit_rr";
		return A(t, w(t + "_toggle", g("prop_mode"), [t + "_off", t + "_1", t + "_2"], [0, 1, 2], un, {
			Gr: !0
			}) + w(t + "_h_opt", Do("h_option"), [t + "_h_opt0", t + "_h_opt1"], [0, "grid"], ln, {
			Xr: [0, 1]
		}) + I(t) + k_.be(g("prop_rays_breakdown") + Su("inspect") + k_.me("edit_rr_copy")) + k_.oe("field widefield results", "edit_rr_lvls"))
		}() + function() {
		const t = "edit_a";
		return A(t, w(t + "_toggle", g("prop_type"), [t + "_0", t + "_2", t + "_1"], [0, 2, 1], Qo(Gt, Yt), {
			Yr: !0
			}) + k_.oe("", "edit_a_style", l(t + "_colour", g("colour"), k_.Re(t + "_colour") + k_.qr(t + "_rgb"), "")) + k_.oe("", "edit_a_length", v(t + "_len", g("prop_length"), {
				Wr: "m",
				Zr: 8,
				Jr: !0
				}) + k_.oe("", "edit_a_length2", v(t + "_len2d", g("prop_length_2d"), {
					Wr: "m",
					Zr: 8,
					Jr: !0
				}))) + I(t))
				}() + function() {
				const t = "edit_gh";
				return A(t, I(t))
				}() + function() {
				const t = "edit_gl";
				return A(t, I(t))
				}() + function() {
				const t = "edit_grid";
				return A(t, w(t + "_fit", g("prop_grid_setting"), [t + "_fit0", t + "_fit1", t + "_fit2"], [0, 1, 2], [g("grid_free"), g("grid_fit"), g("grid_full")]) + z(t) + '<div class="sub_visible">' + w(t + "_opt", g("prop_grid_height_opt"), [t + "_rel", t + "_abs"], [0, 1], [g("grid_relative"), g("grid_absolute")]) + k_.Xe(g("grid_abs_note")) + "</div>")
				}() + function() {
				const t = "edit_bmp";
				return A(t, w(t + "_lock", Ro("bmp"), [t + "_lock0", t + "_lock1"], [0, 1], Qo(_n, fn), {
					Yr: !0,
					Gr: !0
					}) + x(t + "_merge", Do("merge"), Xl()) + k_.oe("", "edit_bmp_mapsettings", L(t) + S(t)) + k_.oe("", "edit_bmp_imgsettings", k_.oe("", "edit_bmp_scale", v(t + "_scaleval", g("prop_scale"), {
						Zr: 10,
						S: k(t + "_calcscale", g("buttons_calculate"), "text_button")
						})) + k_.oe("", "edit_bmp_filename", v(t + "_srcval", g("prop_file_name"), {
						Tr: "widefield",
						Jr: !0
					})) + k_.te('<button id="edit_bmp_upload" class="button text_button">' + g("buttons_upload") + k_.Hr() + "</button>" + Su("#images"), "field", "edit_bmp_user")))
					}() + k_.oe("buttons", "edit_buttons", k("edit_actions", svgIcon("actions", {
						vw: 40,
						w: 36
						}), "button icon_button", g("actions")) + k("bmp_toback", svgIcon("toback", {
						vw: 36,
						w: 36
						}), "button icon_button", g("buttons_to_back")) + k("bmp_tofront", svgIcon("tofront", {
						vw: 36,
						w: 36
						}), "button icon_button", g("buttons_to_front")) + k("edit_delete", svgIcon("trash", {
						w: 36
						}) + g("buttons_delete"), "button icon_button delete_button") + k("edit_update", svgIcon("tick", {
						w: 30
					}) + g("buttons_continue"), "button icon_button update_button")), D = '<input type="text" autocomplete="off" id="edit_name" maxlength="20" size="20" value="" /><span id="edit_name_readonly"></span>' + k_.oe("window_icon", "edit_window_icon");
					Dn._n = o("edit", D, R, !0, (function() {
						const t = Dn._n.Ce;
						Sr(0, t.bn, t.o), Jc && Jc.remove()
						})), $("button.edit_heights").click((function() {
						const t = Dn._n.Ce;
						ca(t.bn, t.o)
					}));
					const H = function(n, o, e) {
						if (!n.match(/[^0-9.,;\-\t\n]+/)) return {
							Vr: 0,
							Qr: e,
							Kr: n.split(o)
						};
						const i = n.split("\n");
						for (let n = 0; n < i.length; n++) {
							const e = i[n].split(o);
							for (let r = 0; r < e.length; r++)
							for (let c = 0; c < t.f.length; c++)
							if (e[r].includes(Pn(c))) return {
								Vr: r,
								Qr: c,
								Kr: i[n + 1].split(o)
							}
						}
						return !1
					},
					O = function(t, n) {
						const o = ["\t", ";"];
						"," !== 1.1.toLocaleString(h).substring(1, 2) && o.unshift(",");
						for (let e = 0; e < o.length; e++) {
							const i = o[e];
							if (n.indexOf(i) > -1) {
								const o = t.prop("id"),
								e = o.substr(0, o.length - 1),
								r = parseInt(o.substr(-1)),
								c = H(n, i, r);
								if (c) {
									let t = c.Qr;
									for (let n = c.Vr; n < c.Kr.length; n++) {
										const o = c.Kr[n],
										i = o ? eo(o) : "";
										$("#" + e + t).ft(i), t++
									}
									return !0
								}
							}
						}
						return !1
					};
					$(".multi_lvl").on("paste", (function() {
						const t = (event.clipboardData || window.clipboardData).getData("text");
						O($(this), t) && (event.preventDefault(), $(this).change())
						})), $("button[data-rc]", Dn._n.ve).click((function() {
						var t;
						t = $(this).data("rc"), $("#edit_b_rc1, #edit_b_rc2").ft(t).change()
						})), $("#edit_b_flip").click((function() {
						const t = Dn._n.Ce.bn,
						n = Dn._n.Ce.o;
						! function(t) {
							qc(t), t.x.reverse(), t.y.reverse()
						}(Bo(t, n)), xe(t, n), Uu()
						})), $("#edit_b_fixroof").click((function() {
						const t = Dn._n.Ce.bn,
						n = Dn._n.Ce.o;
						Fc(Bo(t, n), !0), xe(t, n), Uu(), Tl()
						})), $("#edit_delete").click((function() {
						I_(g("alert_delete_obj"), "", g("buttons_yes"), (function() {
							! function() {
								const t = Dn._n.Ce;
								$("#edit_" + t.bn).removeData("n"), Ol(t.bn, t.o)
							}(), Dn._n.re()
						}), g("buttons_no"))
						})), $("#edit_update").click((function() {
						Dn._n.re()
						})), $(k_.Ko(svgIcon("objects", {
							vw: 40
						}), "", "edit_load_objects")).appendTo(Dn._n.ve).click((function() {
						const t = Dn._n.Ce;
						zl(Bo(t.bn, t.o).type), Dn._n.re()
						})), $("#edit_actions").click((function() {
						const t = Dn._n.Ce,
						o = t.bn,
						e = t.o;
						t.Ge;
						! function(t, o, e) {
							const i = function() {
								Dn.Ze.re(),
								function(t, n) {
									const o = function(t) {
										return k_.ti(t)
									},
									e = function(t) {
										return k_._i('<input type="number" value="' + (null != t ? Gn(t) : "") + '" size="5" maxlength="8" class="textinput" step="any" />')
									},
									i = function(t, n, o) {
										const i = $(k_.Qe(e(t) + e(n), "coords"));
										if (o) {
											const t = $(k_._i("", "actions")).appendTo(i);
											$(k_.$e()).on("click", (function() {
												i.fadeOut(200, (function() {
													i.remove()
												}))
											})).appendTo(t)
										}
										return i
									};
									if ("grid" === t) return;
									const r = Bo(t, n),
									c = function(t) {
										return "c" === t ? 3 : Oo(t) ? 2 : 1
									}(r.type),
									s = $(k_.oe("edit_coords")),
									u = $(k_.oi(k_.Ve(k_.Qe(o("x") + o("y"))))).appendTo(s),
									l = $(k_.ni()).appendTo(u);
									if (Array.isArray(r.x)) {
										for (let t = 0; t < r.x.length; t++) l.append(i(r.x[t], r.y[t], !0));
										l.append(k_.Qe(k_.di(k_.Ko(svgIcon("add"), "button icon_button proceed_button"))))
									} else l.append(i(r.x, r.y));
									s.append(k_.Xe(g("edit_coords_note"))), $(".proceed_button", u).on("click", (function() {
										const t = $(this).closest("tr");
										$(i(null, null, !0)).hide().insertBefore(t).fadeIn()
										})), I_(g("title_coords"), s, g("buttons_apply"), (function() {
										let n = [],
										o = [];
										if ($("tr", Dn.Pe.ve).each((function() {
											const t = $("input", this);
											2 == t.length && "" != t[0].value && "" != t[1].value && (n.push(t[0].value), o.push(t[1].value))
										})), n = qr(t, n, "x"), o = qr(t, o, "y"), n.length != o.length || n.length < c) return Xu(n.length < c ? g("alert_missing_coords", c) : g("alert_data_invalid"), Ht, "coords"), !1;
										1 === c && (n = n[0], o = o[0]);
										const e = r.x.length !== n.length,
										i = {
											x: n,
											y: o
										};
										data._put(r.type, r.index, i), e ? (el(r.type), xe(r.type, r.n)) : Dl(), Uu()
									}))
								}(t, o)
							},
							r = function() {
								const e = Bo(t, o),
								i = e.type,
								r = function(t) {
									if (i === t) return null;
									E_(svgIcon("add" + t, {
										w: 36,
										vw: 40
										}) + Jo(t), (function() {
										Hl(t), Dn.Ze.re(), Dn._n.re()
									}))
								};
								A_(g("title_convert"), !0), Oo(i) ? (n && r("l"), r("b"), e.x.length > 2 && r("c"), n && r("gl"), r("a")) : (r("p"), r("r"), r("rr"), n && r("gh"))
							},
							c = function() {
								Cl(t, o), Dn.Ze.re(), Dn._n.re()
							};
							A_(g("actions"), !0), E_(svgIcon("objzoom", {
								w: 36
								}) + " " + g("buttons_center_view"), c), E_(svgIcon("coord", {
								w: 36,
								vw: 36
								}) + " " + g("buttons_edit_coords"), i), E_(svgIcon("convert", {
								w: 36,
								vw: 36
							}) + " " + g("buttons_convert"), r)
						}(o, e)
						})), $("#edit_bmp_zoom, #edit_bmp_type").change((function() {
						let n = Dn._n.Ce.o;
						const o = fs(data.bmp[n].src),
						e = t.toInt($("#edit_bmp_zoom").val()),
						i = t.toInt($("#edit_bmp_type").val());
						data.bmp[n].src = as(o.lat, o.lon, e, i), rs(n), Uu()
						})), $("#edit_bmp_upload").click((function() {
						if ($(this).Ne()) return !1;
						let t = Dn._n.Ce.o;
						$(this).Ee();
						const n = g("buttons_upload"),
						o = $(k_.oe("upload_confirm_text", ""));
						$(k_.he(g("alert_confirm_upload"))).appendTo(o);
						const e = $(k_.o("upload_image_preview")).appendTo(o);
						$(k_.he(g("alert_upload_explain"))).appendTo(o), $(k_.Xe(g("alert_upload_note"))).appendTo(o), e.append(ns(t));
						I_(n, o, g("title_upload"), (function() {
							! function(t) {
								const n = Bo("bmp", t),
								o = ns(n.src);
								!!o && !!n.Rn && (a_(o) ? Xu(g("alert_upload_fail"), Ot, "upload") : Tu({
									set: "bitmap",
									name: n.src,
									entry: n.img_scale,
									img: o.src
									}, (function(o) {
										const e = o.response.id,
										i = o.response.filename,
										r = {
											name: n.src,
											value: n.img_scale,
											id: e,
											timestamp: new Date,
											category: 0,
											filename: i
										};
										he(mt, r), data._put("bmp", t, {
											src: i
										}), rs(t), Uu(), Xu(g("alert_image_saved"), Ct, "upload")
										}), (function() {
										Tl()
									})))
							}(t)
						}))
						})), $("input, select", "#edit").on("change", (function() {
						Dn._n.Tt() && Dl($(this))
						})).on("keypress", (function(t) {
						Dn._n.Tt() && ("Enter" !== t.key && 13 !== t.keyCode || $(this).blur().focus())
						})), $("#edit_a_colour").click((function() {
						! function(t, n, o) {
							const e = Bo(t, n);
							let i = !!e.rgb && _u(e.rgb);
							i ? ($("#pick_colour_picker").val(i).change(), $("#pick_colour").prop("checked", !0).change()) : $("#pick_transparent").prop("checked", !0).change(), $("#picker_ok").off("click").on("click", (function() {
								const t = !!$("#pick_colour").prop("checked") && pu($("#pick_colour_picker").val());
								$(o).val(t || "").change(), Dn.Le.re()
							})), Dn.Le.ie()
						}("a", Dn._n.Ce.o, "#edit_a_rgb")
						})), $("#edit_b_rc1, #edit_b_rc2, #edit_b_rcdb1, #edit_b_rcdb2").focus((function() {
						const t = Dn._n.Ce.o;
						if (!$("#edit_b_rc_match").prop("checked")) {
							if (null == t) return;
							Wc(1, t, "edit_b_rc1" == $(this).attr("id") || "edit_b_rcdb1" == $(this).attr("id"))
						}
						})).blur((function() {
						const t = Dn._n.Ce.o;
						$("#edit_b_rc_match").prop("checked") || Wc(0, t)
						})), $("#bmp_tofront, #bmp_toback").click((function() {
						Dn._n.Ce.o = function(t, n) {
							if (null !== t) {
								const o = data.bmp.splice(t, 1);
								n ? (data.bmp.push(o[0]), t = data.bmp.length - 1) : (data.bmp.unshift(o[0]), t = 0)
							}
							return dl("bmp"), el("bmp"), Pi(), t
						}(Dn._n.Ce.o, "bmp_tofront" === $(this).attr("id")), Dl($(this))
						})), $("#edit_rr_copy").click((function() {
						Rl($("#edit_rr_lvls"), g("prop_rays_breakdown"))
						})), $("#edit_p_copy").click((function() {
						Rl($("#edit_p_lvls"), g("prop_lw_title"))
						})), $("#edit_l_copy").click((function() {
						Rl($("#edit_l_lvls"), g("prop_lw_title"))
						})), R = k_.o("states_table") + M(["button_states_start", "button_states_end"], [g("buttons_states_start") + k_.Hr(), g("buttons_states_end")], ["text_button on_button sub_enabled", "text_button off_button"]), D = g("title_states") + Su("#states"), k_.oe("window_icon", "", svgIcon("atob", {
						vw: 40,
						w: 32
						})), Dn.St = o("states", D, R, !0), $("#button_states_start").click((function() {
						Zs(2), Ie(), Dn.St.re(), Js()
						})), $("#button_states_end").click((function() {
						I_(g("alert_end_states"), "", g("buttons_yes"), (function() {
							Ks()
						}), g("buttons_no"))
					}));
					R = A("addbmp", k_.oe("buttons", "addbmp_nav", '<label for="addbmp_nav1" class="button toggle_button">' + svgIcon("map") + '<input type="radio" name="addbmp_nav" id="addbmp_nav1" data-for="map"/> ' + g("addbmp_map") + '</label><label for="addbmp_nav2" class="button toggle_button">' + svgIcon("file") + '<input type="radio" name="addbmp_nav" id="addbmp_nav2" data-for="file"/> ' + g("addbmp_local") + '</label><label for="addbmp_nav3" class="button toggle_button">' + svgIcon("url") + '<input type="radio" name="addbmp_nav" id="addbmp_nav3" data-for="url"/> ' + g("addbmp_online") + "</label>") + k_.oe("addbmp_option", "addbmp_map", e(k_.He(g("gmap_search"), "addbmp_gloc"), !0) + k_.oe("field widefield", "", c('<input type="text" autocomplete="off" id="addbmp_gloc" size="10" placeholder="' + m("gmap_input_prompt") + '" value="" />' + k_.Ko(g("buttons_search"), "button text_button search_button", "addbmp_search"))) + k_.oe("", "addbmp_results", k_.oe("", "addbmp_options", L("addbmp") + S("addbmp") + k_.qr("addbmp_lat") + k_.qr("addbmp_lon")) + k_.oe("field", "addbmp_example", '<img src="images/calc-db-soundpath_placeholder.png" width="320" height="320"/>' + k_.oe("", "addbmp_example_note"))) + k_.Xe(g("gmap_note"))) + k_.oe("addbmp_option", "addbmp_file", e(k_.He(g("addbmp_file"), "addbmp_fileinput"), !0) + k_.oe("field widefield", "", c('<input type="file" id="addbmp_fileinput" />')) + k_.Xe(g("addbmp_note")) + k_.Xe(g("addbmp_reminder"))) + k_.oe("addbmp_option", "addbmp_url", e(k_.He(g("addbmp_url"), "addbmp_url"), !0) + k_.oe("field widefield", "", c('<input type="text" autocomplete="off" id="addbmp_urlinput" size="40" placeholder="https://" value="" />' + k_.qr("addbmp_urlscale"))) + k_.Xe(g("addbmp_reminder")) + k_.oe("", "addbmp_uploads", k_.be(g("addbmp_user") + ' <a href="' + y("images") + '" class="viewmore">' + g("addbmp_more") + "</a>") + k_.o("addbmp_gallery") + k_.Xe(g("addbmp_scaled")))) + k_.oe("buttons", "addbmp_buttons", k("button_addbmp", g("buttons_insert"), "text_button update_button"))), D = g("addbmp_title") + k_.oe("window_icon", "", svgIcon("addbmp", {
						w: "40",
						vw: "40"
						})), Dn.pi = o("addbmp", D, R, !0), $("input[name=addbmp_nav]").change((function() {
						const t = $("input[name=addbmp_nav]:checked");
						if (!t.length) return void $("#addbmp_nav1").prop("checked", !0).change();
						const n = t.data("for");
						$(".addbmp_option").hide(), $("#addbmp_" + n).show(), $("label", "#addbmp_nav").each((function() {
							$(this).dt($("input", this).is(":checked"))
						})), ql()
						})).change(), $("#button_addbmp").click((function() {
						const n = $("input[name=addbmp_nav]:checked").data("for");
						let o = "",
						e = 0;
						if ("map" === n && "" === o.trim()) {
							const n = t.toNumber($("#addbmp_lat").val()),
							e = t.toNumber($("#addbmp_lon").val()),
							i = t.toInt($("#addbmp_zoom").val()),
							r = t.toInt($("#addbmp_type").val());
							0 !== n && 0 !== e && 0 !== i && (o = as(n, e, i, r))
						}
						if ("file" === n) {
							const t = $("#addbmp_fileinput")[0];
							t.files.length > 0 && $s(t.files, fo(Dn.pi.x), _o(Dn.pi.y))
						}
						if ("url" === n && (o = $("#addbmp_urlinput").val(), e = $("#addbmp_urlscale").val(), o.indexOf(",") > -1 && (Xu(g("addbmp_online_error"), Ot, "gmap"), o = "")), "" !== o.trim()) {
							Gc(0, null, {
								setting: 0,
								merge: 3,
								x: fo(Dn.pi.x),
								y: _o(Dn.pi.y),
								src: o,
								img_scale: e,
								img_rotate: 0
							}), Kc(), Uu()
						}
						Dn.pi.re()
						})), $("#addbmp_search").click((function(t) {
						t.preventDefault(), t.stopPropagation();
						le((function() {
							if (!ps) return Xu(g("alert_gmap_error"), Ot, "gmap");
							const t = $("#addbmp_gloc").val().trim();
							if ("" == t) return;
							$("#addbmp_file").hide(), $("#addbmp_results").show(), P();
							(new google.maps.Geocoder).geocode({
								address: t
								}, (function(t, n) {
									n == google.maps.GeocoderStatus.OK ? ($("#addbmp_lat").val(t[0].geometry.location.lat()), $("#addbmp_lon").val(t[0].geometry.location.lng()), bs($("#addbmp_zoom"), t[0].geometry.location.lat()), P(), ql()) : Xu(g("alert_gmap_search_fail") + n, Ot, "gmap")
								}))
						}), _s, "google")
						})), $("#addbmp_gloc").on("keydown change", (function(t) {
						"Enter" !== t.key && 13 !== t.keyCode || ($("#addbmp_search").click(), t.preventDefault(), t.stopPropagation())
						})).change(), $("#addbmp_url").on("keydown change", (function(t) {
						ql()
						})), $("#addbmp_gloc, #addbmp_url").on("paste", (function(t) {
						const n = $(this);
						setTimeout((function() {
							n.change()
						}), 10)
						})), $("#addbmp_file").change((function() {
						ql()
					}));
					const P = function() {
						const n = $("img", "#addbmp_example"),
						o = $("#addbmp_example_note");
						n.attr("src", "images/calc-db-soundpath_placeholder.png"), o.html(k_.Xe(g("gmap_click")));
						const e = t.toNumber($("#addbmp_lat").val()),
						i = t.toNumber($("#addbmp_lon").val()),
						r = t.toInt($("#addbmp_zoom").val()),
						c = t.toInt($("#addbmp_type").val());
						if (0 == e || 0 == i || 0 == r) return;
						const s = hs(e, i, r, c, !0),
						u = new Image;
						u.onload = function() {
							n.attr("src", s), n.off("click").on("click", (function(t) {
								le((function() {
									const o = function(t, n, o, e, i) {
										return gs(t, {
											lat: n,
											lon: o,
											zoom: e
										}, i)
									}($a(t, !1), e, i, r, n.width());
									o && ($("#addbmp_lat").val(o.lat), $("#addbmp_lon").val(o.lon), P())
								}), ds, "MercatorProjection")
							})).tc()
						}, u.src = s
					},
					F = function(n, o) {
						let e = t.toNumber(n.val());
						isNaN(e) ? e = "" : ("addbmp_lat" === n.prop("id") && bs($("#addbmp_zoom"), e), "" != o.val() && (n.addClass("valid"), o.addClass("valid"), $("#addbmp_url").val("").removeClass("valid"))), n.val(e)
					};
					$("#addbmp_lat").change((function() {
						F($(this), $("#addbmp_lat")), P()
						})), $("#addbmp_lon").change((function() {
						F($(this), $("#addbmp_lon")), P()
						})), $("#addbmp_zoom, #addbmp_type").change((function() {
						P()
					})), D = g("title_calc_scale"), R = k_.Xe(g("calc_scale_note")) + M(["calcscale_run_measure"], [g("buttons_start_measurement")], ["text_button proceed_button"]) + v("calcscale_measured", g("prop_measured"), {
					Wr: "m",
					Zr: 8
					}) + v("calcscale_known", g("prop_target_length"), {
					Wr: "m",
					Zr: 8
					}) + v("calcscale_scale", g("prop_scale"), {
					Zr: 12,
					Jr: !0
					}) + M(["calcscale_cancel", "calcscale_go"], [g("buttons_cancel"), g("buttons_apply")], ["text_button cancel_button", "text_button update_button"]), Dn.hi = o("calcscale", D, R);
					const q = function() {
						const n = Dn._n.Ce.o;
						if (!data.bmp[n]) return Xu(g("alert_critical"), Ot);
						const o = t.toNumber($("#calcscale_measured").val()),
						e = t.toNumber($("#calcscale_known").val()),
						i = e > 0 && o > 0;
						let r = "";
						if (i) {
							r = Wn(e / o * data.bmp[n].img_scale)
						}
						$("#calcscale_scale").val(r), v_("calcscale_go", !i)
					};
					$("#calcscale_run_measure").click((function() {
						Dn._n.re(), Dn.hi.re(), C = 8, Ql(), Xu(g("alert_start_measurement"), Pt, "scale")
						})), $("#calcscale_measured, #calcscale_known").change((function() {
						q()
						})).keyup((function() {
						q()
						})), $("#calcscale_cancel").click((function() {
						Dn.hi.re()
						})), $("#calcscale_go").click((function() {
						! function() {
							const n = Wn(t.toNumber($("#calcscale_scale").val()));
							n > 0 && $("#edit_bmp_scaleval").val(n).change(), Dn.hi.re()
						}()
					}));
					$("#edit_bmp_calcscale").click((function() {
						$("input", Dn.hi.ve).val(""), Dn.hi.ie(), q()
						})), Dn.Se = o("colours", g("colour_edit"), k_.o("edit_colours_html"), !0), R = k_.oe("", "colour_scheme", k_.oe("colours", "", '<label id="pick_transparent_button" for="pick_transparent" class="pick_colour transparent"><input type="radio" id="pick_transparent" name="pick_colour" value="transparent" />' + g("colour_transparent") + '</label><label id="pick_colour_button" for="pick_colour_picker" class="pick_colour"><input type="radio" name="pick_colour" id="pick_colour" value="colour" /><input id="pick_colour_picker" type="color" value="#ffffff" />' + g("colour") + "</label>" + k_.Xe(g("colour_select"))) + M(["picker_cancel", "picker_ok"], [g("buttons_cancel"), g("buttons_ok")], ["text_button cancel_button", "text_button add_button"])), Dn.Le = o("colour_picker", g("title_picker"), R), $("#pick_colour_picker").change((function() {
						let t = $(this).val(),
						n = pu(t);
						$("#pick_colour_button").css({
							"background-color": t,
							color: gu(n)
						})
						})), $("#pick_colour_button").click((function() {
						$("#pick_colour").prop("checked", !0).change()
						})), $("#pick_colour, #pick_transparent").change((function() {
						$(".pick_colour").dt(!1), $(this).parent().dt(!0)
						})), $("#picker_cancel", Dn.Le.ve).click((function() {
						Dn.Le.re()
						})), $("#button_clear").click((function() {
						const t = $("#editor_selector select").val();
						if (A_(g("buttons_clear_all"), !0), t) {
							const n = function() {
								z_(g("alert_delete_all_obj", o), (function() {
									xl(t), Dn.Ze.re()
								}))
							},
							o = Zo(t, !0);
							E_(g("buttons_remove_obj", o), n)
						}
						E_(g("buttons_remove_all"), (function() {
							z_(g("alert_delete_all"), (function() {
								xl(), Dn.Ze.re()
							}))
							})), E_(g("buttons_reset"), (function() {
							z_(g("alert_reset"), (function() {
								xl(!1), Dn.Lt.re(), Dn.Ze.re()
							}))
						}))
						})), $("#button_new").click((function() {
						A_(g("buttons_start_new"), !0), E_(g("buttons_duplicate_win"), (function() {
							z_(g("alert_duplicate"), (function() {
								kl(!0), Dn.Ze.re()
							}))
							})), E_(g("buttons_copy_settings"), (function() {
							z_(g("alert_new_window"), (function() {
								kl(null), Dn.Ze.re()
							}))
							})), E_(g("buttons_reset"), (function() {
							z_(g("alert_new_blank"), (function() {
								kl(!1), Dn.Ze.re()
							}))
						}))
						})), R = k_.be(g("calculations") + Su("#export")) + M(["button_exportreport", "button_exportimage", "button_exporttxt"], [g("export_buttons_report") + k_.Hr(), g("export_buttons_image"), g("export_buttons_calcs")], ["text_button sub_enabled", "text_button", "text_button"], "widebuttons") + k_.be(g("objects")) + M(["button_importtxt_load"], [g("export_buttons_table")], ["text_button"]) + k_.oe("buttons", "", '<button id="button_exportfile" class="text_button button">' + g("export_buttons_export_file") + '</button><button id="button_importfile" class="text_button button">' + g("export_buttons_import_file") + "</button>") + k_.Xe(g("export_import_note")), Dn.Sr = o("export", g("title_export"), R, !0), $("#button_exportreport").click((function() {
						const t = $(this);
						if (t.is(":disabled")) return !1;
						const n = function(t, n) {
							return '<label for="export_' + t + '"><input id="export_' + t + '" name="export_' + t + '" type="checkbox" ' + (!1 !== r_[t] && 0 !== r_[t] ? "checked" : "") + ' value="1" />' + n + "</label>"
						},
						o = function(t, n, o, e) {
							let i = '<div id="export_' + t + '" class="export_opts' + x_(e) + '"><strong>' + n + ":</strong>";
							for (let n = 0; n < o.length; n++) {
								const e = t + "_" + n;
								i += '<label for="export_' + e + '"><input id="export_' + e + '" name="export_' + t + '" type="radio" ' + (!r_[t] && 0 === n || r_[t] === n ? "checked" : "") + ' value="' + n + '" />' + o[n] + "</label>"
							}
							return i += "</div>", i
						},
						e = function(t) {
							const n = r_[t],
							o = [],
							e = pdf_config_library[t];
							for (let t = 0; t < e.length; t++) {
								const i = e[t].name;
								o.push(k_.Ae(t, i, t === n ? "selected" : ""))
							}
							return '<select id="export_' + t + '">' + o.join() + "</select>"
						},
						i = function(t) {
							r_[t] = $("#export_" + t).is(":checked") ? 1 : 0
						},
						r = function(t) {
							return parseInt($("input[name=export_" + t + "]:checked").val()) || 0
						},
						c = function(t) {
							return parseInt($("option:selected", "#export_" + t).val()) || 0
						},
						s = function(t) {
							return r_[t] = r(t)
						};
						! function() {
							if (Object.keys(r_).length) return;
							const t = Au("pdf_config");
							r_ = t ? JSON.parse(t) : {}
						}();
						let u = [];
						const l = function(t) {
							return ' <small class="note">' + t + "</small>"
						},
						a = l(g("pdf_option_active"));
						u.push(n("title", g("pdf_option_front"))), B() && u.push(n("grid", g("pdf_option_mode0") + a)), Z() && u.push(n("grid", g("pdf_option_mode1") + a)), J() && u.push(n("grid", g("pdf_option_mode2") + a)), W() && u.push(n("grid", g("pdf_option_mode3") + a)), u.push(n("overview", g("pdf_option_overview"))), data.r.length > 0 ? (u.push(n("tables", g("pdf_option_r_tables") + l(g("pdf_option_r_tables_note")))), u.push(n("locations", g("pdf_option_r_locations"))), u.push(n("charts", g("pdf_option_r_chart"))), u.push(o("type", g("pdf_option_chart"), [g("pdf_option_chart_bars"), g("pdf_option_chart_dots"), g("pdf_option_chart_lines")], "export_opts_r")), u.push(o("scheme", g("colour"), [g("none"), g("pdf_option_scheme") + ":" + e("palette"), g("pdf_option_db_colour")], "export_opts_r")), $i().length > 1 && u.push(o("group", g("pdf_option_group"), [g("none"), g("obj_title_r_plural"), g("config_labels_heights")], "export_opts_r")), u.push('<h4 class="export_preview">' + g("pdf_option_preview") + '</h4><div id="export_preview"></div>'), u.push(n("detail", g("pdf_option_r_detail") + l(g("pdf_option_r_detail_note"))))) : u.push(k_.de(k_.pe(g("pdf_option_r_empty")))), u.push(n("config", g("pdf_option_config"))), u.push(o("format", g("pdf_option_format"), [g("pdf_option_save"), g("pdf_option_print")]));
						I_(g("pdf_option_title"), '<div id="export_pdf"><ul class="export_opt_list"><li>' + u.join("</li><li>") + "</li></ul></div>", g("pdf_button_go"), (function() {
							var n;
							i("title"), i("grid"), i("overview"), i("tables"), i("locations"), i("charts"), s("type"), s("scheme"), r_[n = "palette"] = c(n), s("group"), i("detail"), i("config"), s("format"), Au("pdf_config", JSON.stringify(r_)), wi() ? (Vu("export"), v_(t), o_()) : Xu(g("alert_wait_for_r_calc"), Ht, "r_calc")
							})), $(".export_opt_list input").change((function() {
							$(".export_opt_list label").each((function() {
								$(this).toggleClass("unchecked", !$("input", this).is(":checked"))
							}))
						})).change();
						const f = function() {
							const t = $("#export_charts").is(":checked"),
							n = ($("#export_detail").is(":checked"), r("type")),
							o = r("scheme"),
							e = c("palette"),
							i = r("group");
							if ($(".export_opts_r input").prop("disabled", !t), $(".export_opts_r").Ee(!t), $("#export_detail").prop("disabled", !t || 2 === i), $("label[for=export_detail]").Ee(!t || 2 === i), $("#export_preview").empty(), t) {
								const t = function(t, n, o, e) {
									const i = Kf(n, o, e),
									r = Qf(i.Xi),
									c = i.Gi,
									s = Qf(i.Qi),
									u = i.Vi;
									let l = [];
									const a = 2 * $("#export_preview").width();
									if (i.nr.length) {
										const e = i.nr;
										let s = 6;
										s > e.length && (s = e.length);
										const u = g("pdf_example_chart"),
										f = Math.round(2 * a / 3),
										_ = new PDFChart(i.nr, c_({
											scale: 2.5,
											key: n > 0 && 1 === o && i.ir,
											type: t,
											width: f,
											height: "preview",
											title: u,
											flip: !0,
											end: s,
											upper: c,
											lower: r
										}));
										$(_.canvas).css({
											width: f / 2
										}), l.push(_.canvas)
									}
									if (i.fo.length) {
										const n = i.fo[0],
										o = (i.nr[0].label, g("pdf_example_spectrum")),
										e = Math.round(1 * a / 3),
										r = new PDFChart(n, c_({
											scale: 5,
											type: t,
											width: e,
											title: o,
											upper: u,
											lower: s
										}));
										$(r.canvas).css({
											width: e / 2
										}), l.push(r.canvas)
									}
									return l
								}(n, i, o, e);
								$(t).hide().appendTo("#export_preview").show()
							}
						};
						$("#export_charts, .export_opts input, .export_opts select").change((function() {
							f()
						})), f()
						})), $("#button_exportimage").click((function() {
						const t = $(this);
						let o = k_.Je(k_.We('<label for="export_image_hd0"><input type="radio" id="export_image_hd0" name="export_image_hd" checked /> ' + g("export_image_low_res") + "</label>") + k_.We('<label for="export_image_hd1"><input type="radio" id="export_image_hd1" name="export_image_hd" /> ' + g("export_image_high_res") + " " + k_.Hr() + "</label>") + (B() || Z() ? k_.We('<label for="export_image_opt"><input type="checkbox" id="export_image_opt" name="export_image_opt" checked /> ' + g("export_image_legend") + "</label>") : ""));
						I_(g("export_image_title"), o, g("buttons_export"), (function() {
							const o = $("#export_image_opt").is(":checked");
							o && !data.config.legend_setting.N() && $("#legend_setting_1").click(), v_(t);
							let e = dt;
							n && $("#export_image_hd1").is(":checked") && (e = 4),
							function(t, o) {
								J() ? T.ct.canvas : W() ? pf.ci : T.ot.canvas;
								const e = r + t_() + ".png",
								i = function(t) {
									n_(t, e), v_("button_exportimage", !1)
								};
								if (o || (o = n ? 4 : dt), W()) return void i(l_(o));
								if (J()) return void i(u_(null, Va.Et, Va.Nt, o));
								Zf((function(t) {
									i(u_(t, Y, G, o))
								}), {
								meta: !!t && [X, -et + V + G]
								})
							}(o, e)
						})), n || v_("export_image_hd1", !0)
						})), $("#button_exporttxt").click((function() {
						const t = $(this);
						wi() ? (v_(t), function() {
							const t = "\r\n";
							let n = g("csv_title") + t;
							data.r.length || (n += t + g("export_csv_empty")), ["receivers", "analysis", "detail", "objects", "config", "key"].forEach((function(o) {
								n += Yf(Xf(o, !1, !1), ",", t, !0)
							})), n_("data:application/csv;charset=utf-8," + encodeURIComponent(n), r + t_() + ".csv"), v_("button_exporttxt", !1)
						}()) : Xu(g("alert_wait_for_r_calc"), Ht, "r_calc")
						})), $("#button_importtxt_load").click((function() {
						Dn.nc.ie();
						let t = Yf(Xf("objects", !1, !1));
						$("#import_text").val(t)
						})), $("#button_exportfile").click((function() {
						const t = function() {
							let t = 0;
							for (let n = 0; n < data.bmp.length; n++) "map" === data.bmp[n].type && t++;
							return t
						}();
						let n = "" + k_.be("File format") + k_.Je(k_.We('<label for="fileexport_format_dxf"><input type="radio" id="fileexport_format_dxf" name="fileexport_format" checked /> ' + g("export_file_dxf") + "</label>") + k_.We('<label for="fileexport_format_kml"' + (t ? "" : ' class="disabled"') + '><input type="radio" id="fileexport_format_kml" name="fileexport_format"' + (t ? "" : " disabled") + " /> " + g("export_file_kml") + "</label>" + (t ? "" : k_.te(g("alert_gmap_missing"), "note")))) + k_.be("Options</h3>") + k_.Je(k_.We('<label for="fileexport_absolute"><input type="radio" id="fileexport_absolute" name="fileexport_type" checked /> ' + g("export_file_abs") + "</label>") + k_.We('<label for="fileexport_relative" class=""><input type="radio" id="fileexport_relative" name="fileexport_type" /> ' + g("export_file_rel") + "</label>") + k_.We('<label for="fileexport_results"><input type="checkbox" id="fileexport_results" name="fileexport_results" checked /> ' + g("export_file_contours") + "</label>"));
						I_(g("title_export_file"), n, g("buttons_export"), (function() {
							const t = $("#fileexport_format_kml").is(":checked"),
							n = $("#fileexport_absolute").is(":checked"),
							o = $("#fileexport_results").is(":checked");
							if (t) {
								const t = function() {
									const t = function() {
										const t = [];
										if (!ps() || void 0 === MercatorProjection) return t;
										for (let n = 0; n < data.bmp.length; n++) {
											const o = data.bmp[n];
											if ("map" === o.type) {
												const n = o.x,
												e = o.y,
												i = fs(o.src);
												i.x = n, i.y = e, t.push(i)
											}
										}
										return t
									}()[0];
									__(n, o, t)
								};
								ps() ? le(t, ds, "MercatorProjection") : le(t, [_s, ds])
								} else ! function(t, n, o) {
								const e = function(t) {
									return Zn(o ? t + o.x : t)
								},
								i = function(t) {
									return Zn(o ? -t + o.y : -t)
								},
								c = function(t, n) {
									return Zn(n ? t + n : t)
								},
								s = function(t) {
									f.push("0", "POINT", "8", t.Er, "10", e(t.x), "20", i(t.y), "30", c(t.z, t.h))
								},
								u = function(t) {
									f.push("0", "LWPOLYLINE", "8", t.Er, "90", t.x.length, "70", t.zn ? 1 : 0, "38", c(t.z, t.h));
									for (let n = 0; n < t.x.length; n++) f.push("10", e(t.x[n]), "20", i(t.y[n]));
									const n = t.Hn;
									if (n)
									for (let o = 0; o < n.length; o++) {
										const r = n[o];
										f.push("0", "LWPOLYLINE", "8", t.Er, "90", t.x.length, "70", t.zn ? 1 : 0, "38", c(t.z, t.h));
										for (let t = 0; t < r.x.length; t++) f.push("10", e(r.x[t]), "20", i(r.y[t]))
									}
								},
								l = function(t) {
									const n = function(n) {
										const o = t.h,
										r = Array.isArray(o) ? o[n] : o;
										f.push("0", "VERTEX", "10", e(t.x[n]), "20", i(t.y[n]), "30", c(t.z[n], r))
									};
									f.push("0", "POLYLINE", "8", t.Er, "10", 0, "20", 0, "30", 0, "70", 8);
									for (let o = 0; o < t.x.length; o++) n(o);
									t.zn && n(0), f.push("0", "SEQEND")
								},
								a = f_(t, n),
								f = [];
								f.push("0", "SECTION", "2", "ENTITIES");
								for (let t = 0; t < a.length; t++) {
									const n = a[t];
									Array.isArray(n.x) ? Array.isArray(n.z) ? l(n) : u(n) : s(n)
								}
								f.push("0", "ENDSEC", "0", "EOF");
								for (let t = 0; t < f.length; t += 2) f[t] = "  " + f[t];
								n_("data:application/dxf;charset=utf-8," + encodeURIComponent(f.join("\r\n")), r + t_() + ".dxf")
							}(n, o)
						}))
						})), $("#button_importfile").click((function() {
						const t = '<div id="importdxf">' + k_.be(g("import_file_types") + " DXF") + '<div class="input"><input type="file" id="dxf_file" accept=".dxf" /></div>' + k_.Xe(g("export_import_file_note")) + "</div>";
						I_(g("title_import_file"), t, "", (function() {
							(function(t) {
								if (t[0] && "dxf" === t[0].name.split(".").pop().toLowerCase()) {
									const n = new FileReader;
									return n.onload = function(t) {
										d_(t.target.result)
									}, n.readAsText(t[0]), !0
								}
								return !1
							})($("#dxf_file")[0].files) || Xu(g("alert_dxf_fail"), Ot)
						}))
						})), R = k_.oe("field", "", k_.oe("inputs", "", k_.oe("input", "", '<textarea id="import_text" cols="70" rows="20"></textarea></div>'))) + k_.oe("field", "", k_.oe("inputs centered", "", '<label for="import_type1"><input type="radio" name="import_type" id="import_type1" value="1" checked /> ' + g("export_textbox_tabs") + '</label><label for="import_type2"><input type="radio" name="import_type" id="import_type2" value="2" /> ' + g("export_textbox_comma") + "</label>")) + k_.Xe(g("export_textbox_note")) + M(["button_importtxt_cancel", "button_importtxt_go"], [g("buttons_cancel"), g("buttons_import")], ["text_button cancel_button", "text_button update_button"]), Dn.nc = o("import", g("title_export_textbox"), R), $("#button_importtxt_cancel").click((function() {
						Dn.nc.re()
						})), $("#button_importtxt_go").click((function() {
						! function(t) {
							const o = t.split(","),
							e = t.split("\t"),
							i = t.replace(/\r\n/g, "\n").split("\n"),
							r = o.length > e.length ? "," : "\t",
							c = [];
							for (let t = 0; t < i.length; t++) c.push(i[t].split(r));
							let s = null;
							const u = ["p", "b", "c", "r", "rr"];
							n && u.push("l", "gh", "gl");
							const l = [];
							for (let t = 0; t < u.length; t++) l.push(Zo(u[t]));
							let a = [];
							for (let t = 0; t < c.length; t++) {
								const n = c[t];
								for (let t = 0; t < n.length; t++) n[t] = ((f = n[t]) && (f = f.trim()), "-" === f ? "" : f);
								if ("" == n.join("")) continue;
								let o = n[0];
								'"' === o.substr(0, 1) && '"' === o.substr(-1, 1) && (o = o.substr(1, o.length - 2)), ("" != o || "gh" === u[s] || "gl" === u[s] && n[3]) && a.push({});
								const e = a[a.length - 1];
								if (-1 == l.indexOf(o)) {
									if (null != s)
									if (e.type) {
										if (Oo(u[s]) || "p" === u[s]) {
											const t = ["", "x", "y", "z"];
											for (let o = 1; o < n.length; o++) {
												const i = n[o];
												if (i || 0 === i) {
													let n;
													n = o < t.length ? e[t[o]] : e.params[o - t.length], Array.isArray(n) || (n = [n]), n.push(i), o < t.length ? e[t[o]] = n : e.params[o - t.length] = n
												}
											}
										}
										} else {
										const t = null;
										e.type = u[s], e.name = o, e.setting = t, e.x = n[1], e.y = n[2], e.z = n[3], e.params = [];
										for (let t = 4; t < n.length; t++) e.params.push(n[t])
									}
								} else s = l.indexOf(o)
							}
							var f;
							g_(a)
						}($("#import_text").val()), Dn.nc.re()
						})), $("#import_type1").click((function() {
						$("#import_text").val($("#import_text").val().replace(/,/g, "\t"))
						})), $("#import_type2").click((function() {
						$("#import_text").val($("#import_text").val().replace(/\t/g, ","))
						})), $("#import_text").on("keydown", (function(t) {
						if ("Tab" == t.key) {
							t.preventDefault();
							const n = this.selectionStart,
							o = this.selectionEnd;
							this.value = this.value.substring(0, n) + "\t" + this.value.substring(o), this.selectionStart = this.selectionEnd = n + 1
						}
						})), R = k_.o("snapshots_snapshots") + '<button id="button_savesnapshot" class="text_button button proceed_button">' + g("snapshot_save") + "</button>" + k_.oe("note", "", k_.he(g("snapshot_prompt")) + k_.he(g("snapshot_note"), "dim")), Dn.Yi = o("snapshots", g("title_snapshots"), R, !0), $("#button_savesnapshot").click((function() {
						v_($(this)), Wf()
					})), R = k_.oe("buttons button_options", "user_option_buttons"), Dn.Ze = o("user_options", g("title_options"), R, !0), R = k_.o("confirm_text") + M(["confirm_no", "confirm_yes"], [g("buttons_cancel"), g("buttons_ok")], ["text_button cancel_button", "text_button update_button"]), Dn.Pe = o("confirm", g("title_confirm"), R, !0);
					let U = $(k_.o("progress")).appendTo("#wrap");
					Le.V = $(k_.o("progress_window")).hide().appendTo(U);
					let Q = $(k_.Or()).appendTo(Le.V);
					Le.L = $('<span id="progress_title"></span>').appendTo(Q), Le.Ct = $(k_.Ko(svgIcon("rapid", {
						w: 16
					}), "", "progress_rapid", g("config_multi_thread"))).appendTo(Q).hide().click((function() {
					_ = !_, ce(), cl()
					})), Le.Ot = $('<small id="progress_remaining"></small>').appendTo(Q);
					const K = $(k_.o("progress_bar")).appendTo(Le.V);
					Le.Pt = $(k_.o("progress_line")).appendTo(K);
					const tt = $(k_.o("progress_pause")).appendTo(Le.V);
					$(k_.Ko(svgIcon("pause", {
						w: 40,
						vw: 40
					}, g("buttons_pause")), "progress_button")).appendTo(tt).click((function() {
					rl(!1)
					}));
					const nt = $(k_.o("progress_off")).appendTo(Le.V);
					$(k_.Ko(svgIcon("stop", {
						w: 40,
						vw: 40
					}, g("buttons_stop")), "progress_button")).appendTo(nt).click((function() {
					I_(g("alert_confirm_stop"), "", g("buttons_continue"), (function() {
						$("#grid_type").val("0").change()
					}), g("buttons_cancel"))
					})), $(document).on("keydown", (function(t) {
					if ($(t.target).is("input,textarea,select")) return;
					let n = t.which;
					ka(t), 27 === n && ($("#guide").is(":visible") && $("#guide").click(), t.preventDefault(), t.stopPropagation());
					const o = $(".window_blackout:visible").last(),
					e = o.length;
					if (13 === n || 27 === n) {
						if (e) {
							let e = !1;
							return 13 === n && (e = o.find(".update_button").click()), 27 === n && (e = o.click()), void(e && (t.preventDefault(), t.stopPropagation()))
						}
						Ta(), 27 === n && (Kl(0), t.preventDefault(), t.stopPropagation())
					}
					W() || e || (38 === n ? va(0) : 40 === n ? va(2) : 37 === n ? va(3) : 39 === n && va(1))
					})).on("keyup mousemove", (function(t) {
					ka(t)
					})), $("[data-linkto]").off("click").on("click", (function() {
					L_($(this).data("linkto"))
					}));
					const ot = $("#addobjects"),
					it = $(".toolbar_title", ot),
					rt = $(k_.oe("toolbar_title_buttons")).appendTo(it);
					$(k_.Ko(svgIcon("help", {
						w: 16
					}), "toolbar_title_button", "addobjects_showtip")).appendTo(rt).click((function() {
					ea(!0)
					}));
					const ct = $(k_.Ko(svgIcon("x", {
						w: 16
					}), "toolbar_title_button", "addobjects_close")).appendTo(rt).click((function() {
					ot.prop("style", ""), $(this).hide(), Kl(0)
					})).hide();
					ot.draggable({
						containment: "#wrap",
						handle: ".toolbar_title",
						start: function() {
							ct.show()
						},
						stop: function() {
							$(this).css({
								height: "",
								width: ""
							})
						}
					})
	}
	
	function I_(t, n, o, e, i, r) {
		const c = Dn.Pe;
		c.V.stop().removeData(), n || (n = t, t = ""), c.Ur.html(t).toggle("" !== t);
		const s = $("#confirm_text");
		s.empty(), n instanceof jQuery ? s.append(n) : (n && -1 === n.indexOf("<") && (n = k_.he(n)), s.html(n));
		const u = function(t) {
			let n;
			t && (n = t()), !1 !== n && c.re()
		};
		$("#confirm_yes").toggle(!1 !== o).removeData().off("click").on("click", (function() {
			u(e)
			})).html(o || g("buttons_ok")), v_($("#confirm_yes"), !1), $("#confirm_no").toggle(!1 !== i).off("click").on("click", (function() {
			u(r)
		})).html(i || g("buttons_cancel")), v_($("#confirm_no"), !1), c.ie()
	}
	
	function z_(t, n, o) {
		I_(t, "", g("buttons_yes"), n, g("buttons_no"), o)
	}
	
	function A_(t, n) {
		t || (t = g("title_options"));
		const o = Dn.Ze;
		$("h2", o.ve).html(t).toggle("" !== t);
		const e = $("#user_option_buttons");
		e.empty(), e.toggleClass("stack", 1 == n), o.ie()
	}
	
	function E_(t, n, o = "") {
		const e = $("#user_option_buttons"),
		i = ["button"];
		">" !== (t = t.trim()).slice(-1) && i.push("text_button"), 0 === t.indexOf("<") && i.push("icon_button"), o && i.push(o), $(k_.Ko(t, i.join(" "))).appendTo(e).click(n)
	}
	
	function N_(t, n, o, e, i) {
		I_(n, k_.o("user_input"), e, null, i, null);
		const r = $("#user_input"),
		c = ($('<label for="confirm_input">' + o + "</label>").appendTo(r), $('<input id="confirm_input" type="text" maxlength="50" class="textinput" value="' + (t || "") + '" />').appendTo(r).on("keyup change", (function() {
			v_("confirm_yes", "" === $(this).val().trim())
		})));
		return c.getInput = function() {
			return c.val()
		}, c.focus()[0].setSelectionRange(0, c.val().length), c
	}
	
	function T_() {
		! function(t = !0) {
			const n = x(),
			o = k();
			$(k_.he(g("guide_prompt_features") + " " + g("guide_prompt_login", [n, o]))).appendTo("#guide_sign_up"),
			function() {
				const t = $("#lw_calculator");
				t.empty();
				const n = function() {
					return $(k_.oe("calc_field")).appendTo(t)
				},
				o = function(t, n) {
					return $(k_.Cr(k_.He(g(n), t)))
				},
				e = function(t, n) {
					return $(k_.he('<input id="' + t + '" type="text" autocomplete="off" value=""/> ' + n))
				},
				i = function(t, n, o) {
					return $(k_.he(k_.H(t, n, "", o)))
				},
				r = e("Lw_calc_lp", "dB"),
				c = e("Lw_calc_d", No()),
				s = i([0, 3, 6, 9], [g("guide_calc_q1"), g("guide_calc_q2"), g("guide_calc_q4"), g("guide_calc_q8")], "Lw_calc_q"),
				u = i(["p", "l"], [g("guide_calc_point"), g("guide_calc_line")], "Lw_calc_type"),
				l = e("Lw_calc_lw", "dB"),
				a = o("Lw_calc_lp", "guide_calc_lp"),
				f = o("Lw_calc_d", "guide_calc_distance"),
				_ = o("Lw_calc_q", "guide_calc_q"),
				d = o("Lw_calc_type", "guide_calc_type"),
				p = o("Lw_calc_lw", "guide_calc_lw");
				n().append(a).append(r), n().append(f).append(c), n().append(_).append(s), n().append(d).append(u), n().append(p).append(l).addClass("result"), $("#Lw_calc_lw").prop({
					readonly: !0
				}).addClass("result")
			}(),
			function() {
				const t = $("#Ag_graph");
				t.empty();
				const n = $(k_.he()).insertBefore(t),
				o = [0, .25, .5, .75, 1],
				e = ["G = 0 (" + g("ground_hard") + ")", "G = 0.25", "G = 0.5", "G = 0.75", "G = 1 (" + g("ground_soft") + ")"];
				$(k_.H(o, e, "", "Ag_graph_g")).appendTo(n).val("1");
				const i = [1, 2, 4, 10],
				r = g("prop_height"),
				c = [r + " = " + No(1), r + " = " + No(2), r + " = " + No(4), r + " = " + No(10)];
				$(k_.H(i, c, "", "Ag_graph_h")).appendTo(n).val("1");
				const s = new Snap;
				s.attr({
					viewBox: "0 0 320 320"
				}), t.append(s.node);
				const u = 11,
				l = new Snap.Matrix;
				l.translate(30, 30);
				for (let t = 0; t < 9; t++) {
					const n = 30 * t;
					s.path("M0 " + n + "L240 " + n).transform(l).Ln("#ccc", 1).Cn("3 1"), s.Vo(-5, 240 - n, -(3 * t - 6), u).transform(l).zn(At).attr({
						"text-anchor": "end"
					})
				}
				for (let t = 0; t < 9; t++) {
					const n = 30 * t;
					s.path("M" + n + " 0L" + n + " 240").transform(l).Ln("#ccc", 1).Cn("3 1"), s.Vo(30 * t, 255, 5 * Math.pow(2, t), u).transform(l).zn(At)
				}
				C_ = s.Vo(120, -23, "", 13, Ut).zn(At).transform(l), s.Vo(120, 270, g("guide_graph_distance"), u, Ut).zn(At).transform(l), s.Vo(10, 150, g("guide_graph_attenuation"), u, Ut).zn(At).transform("r-90,10,150"), s.Vo(10, 240, g("guide_graph_reflection"), u, Ut).transform("r-90,10,240").zn("#999"), s.path("M-30 180L-30 240 240 240 240 180Z").transform(l).zn(At, .2).Ln(Ft), s.path("M0 0L0 240 240 240 240 0Z").transform(l).zn(Ft).Ln(At).attr({
					"stroke-width": "1"
				});
				const a = ["000", "f00", "00f", "0f0", "f60", "f0f"];
				for (let t = 0; t < 6; t++) {
					let n = jo(62.5 * Math.pow(2, t));
					F_[t] = s.path(Bt).transform(l).zn(Ft).Ln("#" + a[t], 2), q_[t] = s.Vo(0, 0, n + "Hz", 12).transform(l).zn(At).Ln(Ft).attr({
						"text-anchor": "start"
					})
				}
				U_(0)
				}(), $("#Lw_calc_lp, #Lw_calc_d, #Lw_calc_q, #Lw_calc_type").on("change", (function() {
					O_()
					})).on("keydown", (function() {
					$("#Lw_calc_lw").val(""), clearTimeout(P_), P_ = setTimeout((function() {
						O_()
					}), 500)
					})), $("#Ag_graph_g, #Ag_graph_h").on("change", (function() {
					U_(1)
				}));
				const e = $(k_.o("guide_language_selector")).insertAfter("#guide_footer").append(svgIcon("lang"));
				$("#language").clone().prop({
					id: "guide_language"
					}).appendTo(e).val(h), $("#language, #guide_language").on("change", (function() {
						h = $(this).val(), Uu(!0), window.location.href = window.location.href
					}));
					const i = "&midast;",
					r = "paid_footnote",
					c = function(t, n, o, e = "") {
						const i = k_.Ue("div", "", "icon " + t, "", 'data-svg="' + n + '"'),
						r = k_.oe("text", "", k_.te(g(o)) + e);
						return k_.Ue("li", i + r)
					},
					s = function(t, n, o) {
						return c("tool_icon", t, n, o)
					},
					u = function(t, n, o) {
						return c("object_icon", t, n, o)
					},
					l = function() {
						return "&nbsp;" + k_.te(i, r)
					},
					a = function() {
						return k_.he(i + " " + g("user_sub_only"), r)
					},
					f = function(t) {
						return k_.Pr(t)
					},
					_ = s("select", "toolbar_select") + s("pan", "toolbar_pan") + s("zoom", "toolbar_zoom") + s("edit", "toolbar_edit") + s("drawgrid", "toolbar_grid") + s("drawsection", "toolbar_section", l() + k_.Ue("small", g("toolbar_mode2"))) + s("addobj", "toolbar_add"),
					d = f(g("tools")) + k_.Ue("ul", _, "tools"),
					p = k_.Ue("div", d, "iconlist"),
					b = u("addp", "toolbar_obj_p") + u("addl", "toolbar_obj_l") + u("addb", "toolbar_obj_b") + u("addc", "toolbar_obj_c") + u("addr", "toolbar_obj_r") + u("addrr", "toolbar_obj_rr") + u("adda", "toolbar_obj_a") + u("addbmp", "toolbar_obj_bmp"),
					m = f(g("objects")) + k_.Ue("ul", b, "objects"),
					v = k_.Ue("div", m, "iconlist"),
					y = u("addgh", "toolbar_obj_gh") + u("addgl", "toolbar_obj_gl"),
					w = k_.Ue("ul", y, "objects");
					$("#guide_target_toolbar_buttons").append(p + v + a()), $("#guide_target_ground .iconlist").append(w), $("[data-svg]").each((function() {
						putSVG(this)
						})), $(".sub_only").each((function() {
						$(this).append(k_.Ue("sub", g("user_sub_only"), r))
					}));
					const M = $(k_.oe("panel no_print", "", k_.be(g("title_examples")))).appendTo("#guide_page_intro .panels"),
					j = $('<ul id="guide_example_list"></ul>').appendTo(M);
					for (let t = 0; t < vt.entries.length; t++) {
						const n = vt.entries[t],
						o = n.id,
						e = $("<li></li>").appendTo(j);
						$('<button><img src="calc-db-soundpath/screenshots/' + o + '.jpg" width="' + '128" height="' + '128" alt="" />' + n.value + "</button>").appendTo(e).click((function() {
							Ca(o), $("#guide").click()
						}))
					}
					if (!t) return;
					const I = $("#guide_nav"),
					z = $(k_.Je("", "nav")).appendTo(I);
					let A;
					$("#guide_content div.page").each((function() {
						const t = $(this).data("id"),
						n = $("h2", this).text();
						$('<li id="guide_link_' + t + '" data-link="' + t + '">' + n + "</li>").click((function() {
							$("#guide .highlight").Zo(!1);
							const t = $(this).data("link");
							return $("#guide_content").scrollTop($("#guide_page_" + t).get(0).offsetTop), !1
						})).appendTo(z)
					}));
					const E = function() {
						const t = $("#guide_content"),
						n = t.get(0).scrollTop,
						o = t.height(),
						e = n + o;
						let i = !1;
						$($("#guide_nav li").get().reverse()).each((function() {
							if ($(this).dt(!1), i) return;
							const t = $(this).data("link");
							$("#guide_page_" + t).get(0).offsetTop < e - .5 * o && ($(this).dt(!0), i = !0)
						}))
					};
					$("#guide_content").on("scroll", (function() {
						clearTimeout(A), A = setTimeout((function() {
							E()
						}), 10)
						})).get(0).scrollTop = 0, E(), $("#guide").click((function() {
						$(this).fadeOut()
						})), $("#guide_window").click((function() {
						event.stopPropagation()
						})), $(k_.re()).appendTo("#guide_header").click((function() {
						$("#guide").click()
					}))
		}()
	}
	
	function L_(t) {
		H_();
		const n = $("#guide");
		if ($(".highlight", n).Zo(!1), n.fadeIn(250), null != t) {
			let n = {};
			if ("#" === t.substr(0, 1)) {
				const o = t.substr(1);
				n = $("#guide_target_" + o);
				const e = n.closest(".page");
				if (e.length) {
					const n = e.prop("id").split("_");
					t = n[n.length - 1]
				}
			}
			const o = $("#guide_link_" + t);
			if (!o.length) return;
			if (o.click(), !n.length) return;
			n.Zo(), n[0].scrollIntoView({
				behavior: "auto",
				block: "center",
				inline: "center"
			})
		}
		return $("#wrap").hasClass("settings_open") && $("#settings").click(), !1
	}
	
	function S_() {
		$("#guide_loader").remove();
		const t = $("#guide_user");
		t.html("");
		let o = "";
		if (s.id) {
			const t = "<strong>" + (s.name ? s.name : g("guide_no_name")) + "</strong>";
			o += n ? k_.he(g("user_logged_in", t) + svgIcon("arrright", {
				w: 40,
				vw: 40
			})) : k_.he(g("user_error", t) + '<a href="' + y("snapshots") + '">' + g("buttons_account") + "</a>"), $("#guide_disclaimer").hide()
			} else {
			const n = x(),
			e = k();
			$("<div>" + svgIcon("user", {
				w: 40,
				vw: 40
			}) + k_.he(g("guide_prompt_login", [n, e])) + " <small>" + g("guide_prompt_extra") + "</small></div>").appendTo(t), o += "" + svgIcon("arrright", {
			w: 40,
			vw: 40
			}) + k_.he(g("guide_start"))
		}
		$(k_.oe("", "", o)).appendTo(t).click((function() {
			$("#guide").click()
		}));
		const e = !(s.snapshots && s.snapshots.entries.length > 0),
		i = e ? vt : s.snapshots,
		r = g(e ? "title_examples" : "user_recent_snapshots"),
		c = $(k_.o("guide_snapshots")).insertAfter(t).tc().on("click", (function() {
			$(this).off("click"),
			function() {
				const t = 300,
				n = $("#guide_user"),
				o = $("#guide_snapshots");
				o.dt(!0).tc(!1);
				$(".snapshots_gallery", o);
				const e = s.snapshots && s.snapshots.entries.length > 0 ? s.snapshots : vt;
				n.hide(), o.hide().fadeIn(), $("#guide_snapshots_more").fadeIn(t), $(".snapshot_placeholder", o).each((function() {
					const n = $(this),
					o = n.data("id"),
					i = R_(e.entries, o, "splash").hide().fadeIn(t);
					$(".blank", n).after(i)
				}))
			}()
		}));
		$(k_.be(r)).appendTo(c);
		const u = $(k_.oe("snapshots_gallery" + (e ? " examples" : ""))).appendTo(c);
		for (let t = 0; t < i.entries.length && ($('<div class="snapshot_placeholder" data-id="' + t + '"><span class="blank"></span></div>').appendTo(u), t + 1 != 4); t++);
		e || $(k_.Ko(g("snapshot_more"), "viewmore", "guide_snapshots_more")).hide().appendTo(c).click((function() {
			$("#guide").click(), D_()
		})), t.hide().fadeIn(), c.hide().fadeIn()
	}
	
	function R_(t, n, o) {
		const e = t[n],
		i = e.name,
		r = e.value,
		c = e.id,
		u = Eo(e.timestamp),
		a = $('<div class="snapshot' + ("new" === o ? " new" : "") + '" data-id="' + c + '"></div>'),
		f = $('<button><span class="blank"></span><img src="calc-db-soundpath/screenshots/' + c + '.jpg" width="' + '128" height="' + '128" /></button>').appendTo(a).click((function() {
			Ca(i), $("#guide").click()
		})),
		_ = $(k_.te("", "snapshot_data")).appendTo(f);
		if ("splash" === o ? _.html(r || u) : $(k_.te(r, "snapshot_name") + k_.te(u, "snapshot_date")).appendTo(_), "splash" !== o) {
			const e = $(k_.oe("snapshot_opts")),
			r = $(k_.Ko(svgIcon("more"), "snapshot_opts_open")).appendTo(a).click((function() {
				e.ai() ? e.dt(!1) : ($(".snapshot_opts").dt(!1), e.dt(!0))
			}));
			e.appendTo(a), "new" === o && r.click();
			const u = $('<input type="text" value="' + l.replace("https://", "") + i + '" readonly />').appendTo(e).on("focus", (function() {
				$(this).select()
			}));
			$(k_.me()).appendTo(e).click((function() {
				Sl(u.val(), g("buttons_short_url"))
				})), $(k_.Ko(svgIcon("rename", {
					vw: 20
				}), "", "", g("snapshot_rename"))).appendTo(e).click((function() {
				const o = t[n],
				e = N_(o.value, g("snapshot_rename"), g("prop_name"), g("buttons_save"));
				$("#confirm_yes").off("click").on("click", (function() {
					if ($(this).Ne()) return;
					$(this).Ee();
					const t = e.getInput();
					Tu({
						rename: "snapshot",
						id: c,
						value: encodeURIComponent(t)
						}, (function(t) {
							const n = t.response;
							o.value = n, $(".snapshot_name", _).html(n), Xu(g("alert_snapshot_renamed"), Ct, "snapshot")
						}))
				}))
				})), $(k_.Ko(svgIcon("delete", {
					vw: 20
				}), "", "", g("snapshot_delete"))).appendTo(e).click((function() {
				! function(t) {
					z_(g("alert_snapshot_delete"), (function() {
						return Tu({
							remove: "snapshot",
							id: t
							}, (function(n) {
								if (s.snapshots && s.snapshots.entries.length > 0) {
									const n = s.snapshots.entries;
									for (let o = 0; o < n.length; o++)
									if (n[o].id === t) {
										s.snapshots.entries.splice(o, 1);
										break
										} $(".snapshot[data-id=" + t + "]", Dn.Yi.ve).fadeOut((function() {
											$(this).remove(), D_()
										}))
								}
							})), !1
					}))
				}(c)
			}))
		}
		return a
	}
	
	function D_() {
		if (!n) return;
		const t = $("#snapshots_snapshots"),
		o = $(k_.oe("snapshots_gallery"));
		$("#button_savesnapshot").prependTo(o).show(), t.empty(), o.appendTo(t), Dn.Yi.ie();
		const e = s.snapshots;
		if (e.entries.length > 0) {
			const n = e.entries.length > 11 ? 11 : e.entries.length;
			for (let t = 0; t < n; t++) $(R_(e.entries, t)).appendTo(o);
			const i = e.entries.length - n;
			i > 0 && $(k_.oe("buttons", "", '<a href="' + y("snapshots") + '" class="viewmore">' + g("snapshot_library", i) + "</a>")).appendTo(t)
		} else $(g("snapshot_library_empty")).appendTo(o);
		t.addClass("loaded")
	}
	
	function H_(t = !1) {
		t ? ($("#guide_splash_content").css({
			position: "relative"
			}).animate({
			top: "-100%"
			}), $("#guide_splash").css({
			overflow: "hidden"
			}).animate({
			opacity: 0
			}, (function() {
				$(this).remove()
			}))) : $("#guide_splash").remove()
	}
	
	function O_() {
		const n = t.toNumber($("#Lw_calc_lp").val()),
		o = t.toNumber($("#Lw_calc_d").val()),
		e = t.toNumber($("#Lw_calc_q").val()),
		i = $("#Lw_calc_type").val();
		let r;
		if (n > 0 && o > 0) {
			r = Vn(n + ("p" === i ? t.calcAd(o) : t.calcAd_line(o)) - e)
		} else r = "";
		$("#Lw_calc_lw").val(r)
	}
	let P_;
	let C_, F_ = [],
	q_ = [];
	
	function U_(n) {
		const o = t.toNumber($("#Ag_graph_g").val()),
		e = t.toNumber($("#Ag_graph_h").val());
		C_.attr({
			text: g("guide_graph_title", [o, To(e)])
		});
		for (let i = 0; i < 6; i++) {
			let r, c = "M",
			s = 62.5 * Math.pow(2, i);
			const u = 9;
			for (let n = 0; n < u; n++) n > 0 && (c += "L"), r = t.round(180 - 10 * t.calcAg(s, 5 * Math.pow(2, n), e, e, o), 2), c += 30 * n + " " + r;
			c += "M" + (30 * u - 25) + " " + r + "L" + (30 * u - 20) + " " + r, F_[i].animate({
				path: c
				}, 1e3 * n), q_[i].animate({
				x: 30 * u - 18,
				y: r
			}, 1e3 * n)
		}
	}
	
	function B_() {
		document.addEventListener("wheel", (function(t) {
			t.ctrlKey && t.preventDefault()
		}), {
		passive: !1
		}), $(L.objects.node).on("mousedown touchstart", (function(t) {
			$t.pressed = !0, za(t, 0) && t.preventDefault()
			})).on("mousemove touchmove", (function(t) {
			ka(t), Aa(t, 0) && t.preventDefault(), Ba(), qa.Lt && ($(":focus-visible").length || (qa.gi = setTimeout((function() {
				Ua()
			}), qa.bi)))
			})).on("mouseup touchend", (function(t) {
			$t.pressed && ($t.pressed = !1, La(t, 0) && t.preventDefault())
			})).on("mousewheel", (function(t, n) {
			(function(t, n) {
				const o = Date.now();
				if (o < Sa + 300) return !1;
				const e = $a(t),
				i = e.x,
				r = e.y;
				return sl(ct * (n > 0 ? 2 : .5), i, r) && ba(), Sa = o, !0
			})(t, n) && t.preventDefault()
			})).on("dragover", (function(t) {
			return t.stopPropagation(), t.preventDefault(), t.dataTransfer = t.originalEvent.dataTransfer, t.dataTransfer.dropEffect = "link", !1
			})).on("drop", (function(t) {
			return ys(t), !1
			})), $(window).on("mousemove touchmove", (function(t) {
			const n = $a(t);
			Wa && Wa.frame.Mi(n.x, n.y)
			})).on("mouseup touchend", (function(t) {
			$t.pressed && null != $t.down && ($t.pressed = !1, La(t, null) && t.preventDefault()), Wa && Wa.frame.ji() && t.preventDefault()
			})), $("#control, #options, #mode, #state_switcher").on("mousemove", (function() {
			Ba()
			})), $(window).on("mousemove", (function() {
			qa.dt && Ba()
			})), window.addEventListener("contextmenu", (function(t) {
			t.preventDefault()
		}), !1)
	}
	
	function Z_() {
		bn(), N(), zs(), y_(), j_(), $_(), ae(bt, "calc-db-soundpath-js/palettes-default.js?v=1.5.4", 10), ae(gt, "calc-db-soundpath-js/sources-default.js?v=1.5.4", 10), ae(gt, "calc-db-soundpath-js/sources-bs5228-extract.js?v=1.5.4", 20), ju(),
		function() {
			const t = document.createElement("canvas");
			document.getElementById("map").appendChild(t), T.ot = t.getContext("2d"), T.ot.textAlign = "center", T.ot.textBaseline = "middle", T.ot.font = "8pt Lato", T.ot.fillStyle = At, L.bitmaps = new Snap("100%", "100%"), $("#bitmaps").append(L.bitmaps.node), H.push(L.bitmaps), L.objects = new Snap("100%", "100%"), $("#objects").append(L.objects.node), S.Wi = new Snap.set, S.oc = new Snap.set;
			const n = function(t, n, o) {
				const e = L.objects.g().attr(pn).attr({
					id: t + "_layer"
				}).addClass(o ? "meta" : "layer");
				return o ? S.oc.push(e) : S.Wi.push(e), n || H.push(e), e
			};
			S.Jo = n("bmp"), S.yo = n("zones"), S.Yn = n("background"), S.ot = n("grid"), S.fn = n("rays"), S.Gn = n("foreground"), S.je = n("top"), S.Bi = n("top_fixed", !0), S.Xo = n("meta_notouch", !0, !0), S.xe = n("meta_touch", !0, !0)
		}(),
		function() {
			const t = function(t) {
				return L.objects.path("M2.5,5L5,2.5L5,5L2.5,5ZM0,2.5L2.5,0L5,0L0,5L0,2.5Z").zn(t).pattern(0, 0, 5, 5)
			};
			D.qo = t(Et), D.Fo = t(At), D.so = function(t, n) {
				const o = L.objects.g();
				return o.path("M0,0L10,0L10,10L0,10Z").zn(n), o.path("M5,10L0,5L0,10L5,10ZM10,5L5,0L0,0L10,10L10,5Z").zn(t), o.pattern(0, 0, 10, 10)
			}("#ddd", Et)
		}(),
		function() {
			const t = S.ot.g(),
			n = S.je.g(),
			o = t.path(Bt).zn(Ft).Ln(Et, 5, .25).addClass("export_as_black"),
			e = t.path(Bt).zn(Ft).Ln(Et, 5).Fn(0).addClass("show_hover"),
			i = function() {
				return n.path(ac(Mt))
			},
			r = i(),
			c = i(),
			s = i(),
			u = i(),
			l = {
				type: "grid",
				id: 0,
				show_hover: !0,
				cursor: "pointer"
			};
			e.data(l).Dt([0, 1, 2, 3]);
			const a = {
				hover: [function() {
					data.grid.setting > 0 && 0 === C || Hr(1, "grid", 0)
				}, Tr],
				drag: [function(t, n, o) {
					data.grid.setting > 0 || wr.call(this, t, n, o)
				}]
			};
			Br(e, a), n.selectAll("*").forEach((function(t) {
				t.attr(vn).data(l).data({
					tool: 0,
					show_select: !0
				}).Dt([0, 1, 2, 3]), Br(t, a)
			}));
			const _ = function(t, n, o, i, r) {
				const c = data.grid;
				(isNaN(t) || null == t) && (t = po(c.x[0])), (isNaN(n) || null == n) && (n = ho(c.y[0])), (isNaN(o) || null == o) && (o = po(c.x[1])), (isNaN(i) || null == i) && (i = ho(c.y[1])), c.x = [fo(t), fo(o)], c.y = [_o(n), _o(i)], e.position()
			};
			r.Zn = function(t, n, o) {
				_(t, n, null, null)
				}, c.Zn = function(t, n, o) {
				_(null, n, t, null)
				}, s.Zn = function(t, n, o) {
				_(t, null, null, n)
				}, u.Zn = function(t, n, o) {
				_(null, null, t, n)
				}, e.Zn = function(t, n, o) {
				const i = data.grid;
				i.setting > 0 || (Gr(i, t, n, o), e.position())
				}, e.updateDetail = function() {
				o.Ln(f ? "#333" : Et), n.selectAll("*").forEach((function(t) {
					t.attr(f ? $n : vn)
				}))
				}, e.position = function() {
				const t = data.grid,
				n = po(t.x[0]),
				i = ho(t.y[0]),
				l = po(t.x[1]),
				a = ho(t.y[1]);
				t.Wn = {
					x: n,
					y: i
				};
				let f = 2.5;
				const _ = lc(-f, -f, l - n + f, a - i + f, !0);
				[e, o].forEach((function(t) {
					t.co(_), t.transform(xo(n, i))
				})), r.transform(xo(n, i)), c.transform(xo(l, i)), s.transform(xo(n, a)), u.transform(xo(l, a)), this.toTop()
				}, e.toTop = function() {
				t.eo(), n.eo()
			}, Go("grid", 0, [t, n]), Pu("grid", 0)
			}(), Ws(), ne(), B_(), Gu(!0), Lu(), Nu(), oe(), T_(), P = "true" != Au("calc_off"), rl(P), $("#play").click((function() {
				rl()
				})), na(0, !0), Kl(0), $("html").hasClass("no-touch") && (qa.Lt = $("#control, #options, #mode, #state_switcher")), ba(!0, 1e3), ra(!0), navigator.getBattery && navigator.getBattery().then((function(t) {
				!t.charging && P && (rl(!1), Xu(g("alert_battery_pause"), Ht, "calc_off"))
			}))
	}
	window.addEventListener("load", (function() {
		! function() {
			$("#guide_start_prompt").tc().click((function() {
				H_(!0)
			}));
			const t = $("#guide_user"),
			n = $('<div id="guide_loader"><div id="loading_icon">' + svgIcon("user", {
				w: 40,
				vw: 40
			}) + '</div><div id="loading_text"></div></div>');
			t.html(n)
			}(), setTimeout((function() {
				Z_()
			}), 5)
			})), window.addEventListener("resize", (function() {
			clearTimeout(Ru), Ru = setTimeout((function() {
				bn();
				let t = fo(ot / 2),
				n = _o(et / 2);
				te(), ma(t, n) ? ba() : Ts(), Ss(), su(), Qe()
			}), 300)
			})), window.addEventListener("popstate", (function(t) {
			Dn._n.re(), Dn.Ze.re(), Dn.Pe.re(), Ta(), Ke(), ne(), Gu(), Za()
	}))
	}(dBfunc), Snap.plugin((function(t, n, o, e) {
		n.prototype.eo = function() {
			this.appendTo(this.parent())
			}, n.prototype.Un = function() {
			this.prependTo(this.parent())
			}, n.prototype.toggle = function(t) {
			t ? this.show() : this.hide()
			}, n.prototype.show = function() {
			this.attr("display", "")
			}, n.prototype.hide = function() {
			this.attr("display", "none")
			}, n.prototype.Dt = function(t) {
			this.data({
				mode: t
			})
			}, n.prototype.ro = function(t, n, o) {
			if (!0 !== n) {
				const n = {};
				for (let o in t) "opacity" !== o && t[o].toString() === this.attr(o) || (n[o] = t[o]);
				if (Object.keys(n).length) return void this.stop().animate(n, 150, mina.easeout, o)
			} else this.attr(t);
			o && o()
		};
		n.prototype.Vo = function(t = 0, n = 0, o = "", e = 9, i = "normal") {
			return this.text(t, n, o).attr({
				"font-family": "Lato, Arial, sans-serif",
				"font-size": e,
				"font-weight": i,
				"text-anchor": "middle",
				"dominant-baseline": "middle",
				fill: "#000000",
				stroke: "none",
				"stroke-width": 3,
				"paint-order": "stroke"
			})
			}, n.prototype.Kn = function(t = 0, n = 0, o = "", e = 10) {
			return this.Vo(t, n, o, e).attr({
				stroke: "#fff"
			})
			}, n.prototype.ao = function(t = 0, n = 0, o = "", e = 13) {
			return this.Vo(t, n, o, e, "bold")
			}, n.prototype.O = function(t, n) {
			this.attr("text") != t && (n && this.mo(), this.attr({
				text: t
			}))
			}, n.prototype.Fn = function(t, n) {
			return this.ro({
				opacity: t
			}, !0 !== n), this
			}, n.prototype.co = function(t, n) {
			return this.ro({
				path: t
			}, !0 !== n), this
			}, n.prototype.zn = function(t, n) {
			return this.attr({
				fill: t
				}), null != n && this.attr({
				"fill-opacity": n
			}), this
			}, n.prototype.Ln = function(t, n, o) {
			return this.attr({
				stroke: t
				}), null != n && this.attr({
				"stroke-width": n
				}), null != o && this.attr({
				"stroke-opacity": o
			}), this
			}, n.prototype.Cn = function(t, n) {
			return this.attr({
				"stroke-dasharray": t
				}), null != n && this.attr({
				"stroke-dashoffset": n
			}), this
			}, n.prototype.mo = function(t) {
			this.stop(), this.Fn(0, !0 === t)
			}, n.prototype.io = function(t) {
			t && this.mo(), this.Fn(1, !0)
		}
	})), $.fn.extend({
	ft: function(t) {
		return this.prop("type"), this.val(t), this
	},
	Ee: function(t = !0) {
		return this.toggleClass("disabled", t), this
	},
	tc: function(t = !0) {
		return this.toggleClass("has_click", t), t ? this.attr({
			tabindex: 0
		}) : this.removeAttr("tabindex"), this
	},
	Ne: function() {
		return this.hasClass("disabled")
	},
	dt: function(t = !0) {
		return this.toggleClass("active", t), this
	},
	ai: function() {
		return this.hasClass("active")
	},
	Zo: function(t = !0) {
		return this.toggleClass("highlight", t), this
	},
	ec: function() {
		return this.hasClass("highlight")
	},
	mi: function(t = !0) {
		return this.toggleClass("minimised", t), this
	},
	At: function() {
		return this.hasClass("minimised")
	},
	_t: function(t = !0) {
		return this.toggleClass("hide", t), this
	},
	fi: function() {
		return this.hasClass("hide")
	}
	});	
