// LiveScript 1.2.0
// Copyright (c) 2013 Jeremy Ashkenas, Satoshi Murakami, George Zahariev
// Released under the MIT License
// raw.github.com/gkz/LiveScript/master/LICENSE
this.LiveScript = function () {
    function e(t) {
        return e[t]
    }

    function i(e) {
        function t() {}
        return t.prototype = e, new t
    }

    function s(e, t) {
        var n = -1,
            r = t.length >>> 0;
        while (++n < r)
            if (e === t[n]) return !0;
        return !1
    }

    function o(e, t) {
        var n = {}.hasOwnProperty;
        for (var r in t) n.call(t, r) && (e[r] = t[r]);
        return e
    }

    function u(e, t) {
        function n() {}
        return n.prototype = (e.superclass = t).prototype, (e.prototype = new n).constructor = e, typeof t.extended == "function" && t.extended(e), e
    }

    function a(e, t) {
        for (var n = ""; t > 0;
            (t >>= 1) && (e += e)) t & 1 && (n += e);
        return n
    }

    function f(e, t) {
        for (var n in t) e[n] = t[n];
        return e
    }
    var t = e["./parser"] = {};
    t.parser = {
        trace: function () {},
        yy: {},
        symbols_: {
            error: 2,
            Chain: 3,
            ID: 4,
            Parenthetical: 5,
            List: 6,
            STRNUM: 7,
            LITERAL: 8,
            DOT: 9,
            Key: 10,
            "CALL(": 11,
            ArgList: 12,
            OptComma: 13,
            ")CALL": 14,
            "?": 15,
            LET: 16,
            Block: 17,
            "[": 18,
            Expression: 19,
            LoopHeads: 20,
            "]": 21,
            DEDENT: 22,
            "{": 23,
            "}": 24,
            "(": 25,
            BIOP: 26,
            ")": 27,
            BIOPR: 28,
            BIOPBP: 29,
            BIOPP: 30,
            "PARAM(": 31,
            ")PARAM": 32,
            UNARY: 33,
            CREMENT: 34,
            BACKTICK: 35,
            TO: 36,
            BY: 37,
            WITH: 38,
            FOR: 39,
            Properties: 40,
            LABEL: 41,
            KeyBase: 42,
            Arg: 43,
            ",": 44,
            NEWLINE: 45,
            INDENT: 46,
            "...": 47,
            Lines: 48,
            Line: 49,
            "<-": 50,
            COMMENT: 51,
            REQUIRE: 52,
            CLONEPORT: 53,
            ASSIGN: 54,
            IMPORT: 55,
            "+-": 56,
            CLONE: 57,
            COMPARE: 58,
            LOGIC: 59,
            MATH: 60,
            POWER: 61,
            SHIFT: 62,
            BITWISE: 63,
            CONCAT: 64,
            COMPOSE: 65,
            RELATION: 66,
            PIPE: 67,
            BACKPIPE: 68,
            "!?": 69,
            "->": 70,
            FUNCTION: 71,
            IF: 72,
            Else: 73,
            POST_IF: 74,
            LoopHead: 75,
            DO: 76,
            WHILE: 77,
            CASE: 78,
            HURL: 79,
            JUMP: 80,
            SWITCH: 81,
            Exprs: 82,
            Cases: 83,
            DEFAULT: 84,
            ELSE: 85,
            TRY: 86,
            CATCH: 87,
            FINALLY: 88,
            CLASS: 89,
            OptExtends: 90,
            OptImplements: 91,
            EXTENDS: 92,
            DECL: 93,
            KeyValue: 94,
            Property: 95,
            ":": 96,
            Body: 97,
            IN: 98,
            OF: 99,
            FROM: 100,
            IMPLEMENTS: 101,
            Root: 102,
            $accept: 0,
            $end: 1
        },
        terminals_: {
            2: "error",
            4: "ID",
            7: "STRNUM",
            8: "LITERAL",
            9: "DOT",
            11: "CALL(",
            14: ")CALL",
            15: "?",
            16: "LET",
            18: "[",
            21: "]",
            22: "DEDENT",
            23: "{",
            24: "}",
            25: "(",
            26: "BIOP",
            27: ")",
            28: "BIOPR",
            29: "BIOPBP",
            30: "BIOPP",
            31: "PARAM(",
            32: ")PARAM",
            33: "UNARY",
            34: "CREMENT",
            35: "BACKTICK",
            36: "TO",
            37: "BY",
            38: "WITH",
            39: "FOR",
            41: "LABEL",
            44: ",",
            45: "NEWLINE",
            46: "INDENT",
            47: "...",
            50: "<-",
            51: "COMMENT",
            52: "REQUIRE",
            53: "CLONEPORT",
            54: "ASSIGN",
            55: "IMPORT",
            56: "+-",
            57: "CLONE",
            58: "COMPARE",
            59: "LOGIC",
            60: "MATH",
            61: "POWER",
            62: "SHIFT",
            63: "BITWISE",
            64: "CONCAT",
            65: "COMPOSE",
            66: "RELATION",
            67: "PIPE",
            68: "BACKPIPE",
            69: "!?",
            70: "->",
            71: "FUNCTION",
            72: "IF",
            74: "POST_IF",
            76: "DO",
            77: "WHILE",
            78: "CASE",
            79: "HURL",
            80: "JUMP",
            81: "SWITCH",
            84: "DEFAULT",
            85: "ELSE",
            86: "TRY",
            87: "CATCH",
            88: "FINALLY",
            89: "CLASS",
            92: "EXTENDS",
            93: "DECL",
            96: ":",
            98: "IN",
            99: "OF",
            100: "FROM",
            101: "IMPLEMENTS"
        },
        productions_: [0, [3, 1],
            [3, 1],
            [3, 1],
            [3, 1],
            [3, 1],
            [3, 3],
            [3, 3],
            [3, 5],
            [3, 2],
            [3, 6],
            [3, 4],
            [3, 5],
            [3, 7],
            [3, 3],
            [3, 4],
            [3, 4],
            [3, 3],
            [3, 4],
            [3, 4],
            [3, 3],
            [3, 7],
            [3, 3],
            [3, 7],
            [3, 3],
            [3, 3],
            [3, 5],
            [3, 6],
            [3, 6],
            [3, 5],
            [3, 7],
            [3, 4],
            [3, 6],
            [3, 7],
            [3, 6],
            [3, 6],
            [3, 5],
            [3, 3],
            [3, 3],
            [6, 4],
            [6, 4],
            [6, 5],
            [6, 5],
            [10, 1],
            [10, 1],
            [42, 1],
            [42, 1],
            [12, 0],
            [12, 1],
            [12, 3],
            [12, 4],
            [12, 6],
            [43, 1],
            [43, 2],
            [43, 1],
            [13, 0],
            [13, 1],
            [48, 0],
            [48, 1],
            [48, 3],
            [48, 2],
            [49, 1],
            [49, 2],
            [49, 6],
            [49, 1],
            [49, 1],
            [49, 2],
            [17, 3],
            [19, 3],
            [19, 3],
            [19, 5],
            [19, 1],
            [19, 3],
            [19, 6],
            [19, 3],
            [19, 6],
            [19, 2],
            [19, 2],
            [19, 3],
            [19, 3],
            [19, 3],
            [19, 2],
            [19, 2],
            [19, 2],
            [19, 5],
            [19, 3],
            [19, 3],
            [19, 3],
            [19, 3],
            [19, 3],
            [19, 3],
            [19, 3],
            [19, 3],
            [19, 3],
            [19, 3],
            [19, 3],
            [19, 3],
            [19, 2],
            [19, 6],
            [19, 6],
            [19, 4],
            [19, 3],
            [19, 3],
            [19, 4],
            [19, 6],
            [19, 2],
            [19, 5],
            [19, 1],
            [19, 1],
            [19, 2],
            [19, 3],
            [19, 5],
            [19, 5],
            [19, 2],
            [19, 4],
            [19, 4],
            [19, 2],
            [19, 2],
            [19, 4],
            [19, 6],
            [19, 5],
            [19, 7],
            [19, 4],
            [19, 5],
            [19, 4],
            [19, 3],
            [19, 2],
            [19, 2],
            [19, 5],
            [82, 1],
            [82, 3],
            [94, 1],
            [94, 1],
            [94, 3],
            [94, 3],
            [94, 5],
            [94, 5],
            [95, 3],
            [95, 6],
            [95, 1],
            [95, 3],
            [95, 3],
            [95, 2],
            [95, 2],
            [95, 2],
            [95, 1],
            [40, 0],
            [40, 1],
            [40, 3],
            [40, 4],
            [40, 4],
            [5, 3],
            [97, 1],
            [97, 1],
            [97, 3],
            [73, 0],
            [73, 2],
            [73, 5],
            [75, 4],
            [75, 6],
            [75, 6],
            [75, 8],
            [75, 2],
            [75, 4],
            [75, 4],
            [75, 6],
            [75, 4],
            [75, 6],
            [75, 6],
            [75, 8],
            [75, 6],
            [75, 5],
            [75, 8],
            [75, 7],
            [75, 8],
            [75, 10],
            [75, 10],
            [75, 2],
            [75, 4],
            [75, 4],
            [75, 6],
            [20, 1],
            [20, 2],
            [20, 3],
            [20, 3],
            [83, 3],
            [83, 4],
            [90, 2],
            [90, 0],
            [91, 2],
            [91, 0],
            [102, 1]
        ],
        performAction: function (t, n, r, i, s, o) {
            var u = o.length - 1;
            switch (s) {
            case 1:
                this.$ = i.Chain(i.L(r, i.Var(o[u])));
                break;
            case 2:
            case 3:
                this.$ = i.Chain(o[u]);
                break;
            case 4:
            case 5:
                this.$ = i.Chain(i.L(r, i.Literal(o[u])));
                break;
            case 6:
            case 7:
                this.$ = o[u - 2].add(i.Index(o[u], o[u - 1], !0));
                break;
            case 8:
                this.$ = o[u - 4].add(i.Call(o[u - 2]));
                break;
            case 9:
                this.$ = i.Chain(i.Existence(o[u - 1].unwrap()));
                break;
            case 10:
                this.$ = i.Chain(i.Call.letFunc(o[u - 3], o[u]));
                break;
            case 11:
                this.$ = i.Chain(o[u - 1][0].makeComprehension(o[u - 2], o[u - 1].slice(1)));
                break;
            case 12:
                this.$ = i.Chain(o[u - 2][0].makeComprehension(o[u - 3], o[u - 2].slice(1)));
                break;
            case 13:
                this.$ = i.Chain(o[u - 1][0].addObjComp().makeComprehension(i.L(r, i.Arr(o[u - 4])), o[u - 1].slice(1)));
                break;
            case 14:
                this.$ = i.Chain(i.Binary(o[u - 1]));
                break;
            case 15:
                this.$ = i.Chain(i.Binary(o[u - 2], void 8, o[u - 1]));
                break;
            case 16:
                this.$ = i.Chain(i.Binary(o[u - 1], o[u - 2]));
                break;
            case 17:
                this.$ = i.Chain("!" === o[u - 1].charAt(0) ? i.Binary(o[u - 1].slice(1)).invertIt() : i.Binary(o[u - 1]));
                break;
            case 18:
                this.$ = i.Chain("!" === o[u - 2].charAt(0) ? i.Binary(o[u - 2].slice(1), void 8, o[u - 1]).invertIt() : i.Binary(o[u - 2], void 8, o[u - 1]));
                break;
            case 19:
                this.$ = i.Chain("!" === o[u - 1].charAt(0) ? i.Binary(o[u - 1].slice(1), o[u - 2]).invertIt() : i.Binary(o[u - 1], o[u - 2]));
                break;
            case 20:
                this.$ = i.Chain(i.Binary(o[u - 1]));
                break;
            case 21:
                this.$ = i.Chain(i.Binary(o[u - 5], void 8, o[u - 3]));
                break;
            case 22:
                this.$ = i.Chain(i.Binary(o[u - 1]));
                break;
            case 23:
                this.$ = i.Chain(i.Binary(o[u - 1], o[u - 4]));
                break;
            case 24:
            case 25:
                this.$ = i.Chain(i.Unary(o[u - 1]));
                break;
            case 26:
                this.$ = i.Chain(o[u - 2]);
                break;
            case 27:
                this.$ = i.Chain(o[u - 2].add(i.Call([o[u - 4]])));
                break;
            case 28:
                this.$ = i.Chain(i.Chain(i.Var("flip$")).add(i.Call([o[u - 3]]))).flipIt().add(i.Call([o[u - 1]]));
                break;
            case 29:
                this.$ = i.Chain(new i.For({
                    from: o[u - 3],
                    op: o[u - 2],
                    to: o[u - 1],
                    inComprehension: !0
                }));
                break;
            case 30:
                this.$ = i.Chain(new i.For({
                    from: o[u - 5],
                    op: o[u - 4],
                    to: o[u - 3],
                    step: o[u - 1],
                    inComprehension: !0
                }));
                break;
            case 31:
                this.$ = i.Chain(new i.For({
                    from: i.Chain(i.Literal(0)),
                    op: o[u - 2],
                    to: o[u - 1],
                    inComprehension: !0
                }));
                break;
            case 32:
                this.$ = i.Chain(new i.For({
                    from: i.Chain(i.Literal(0)),
                    op: o[u - 4],
                    to: o[u - 3],
                    step: o[u - 1],
                    inComprehension: !0
                }));
                break;
            case 33:
                this.$ = i.Chain(i.Slice({
                    type: o[u - 2],
                    target: o[u - 6],
                    from: o[u - 3],
                    to: o[u - 1]
                }));
                break;
            case 34:
                this.$ = i.Chain(i.Slice({
                    type: o[u - 1],
                    target: o[u - 5],
                    from: o[u - 2]
                }));
                break;
            case 35:
                this.$ = i.Chain(i.Slice({
                    type: o[u - 2],
                    target: o[u - 5],
                    to: o[u - 1]
                }));
                break;
            case 36:
                this.$ = i.Chain(i.Slice({
                    type: o[u - 1],
                    target: o[u - 4]
                }));
                break;
            case 37:
                this.$ = i.Chain(i.Cascade(o[u - 1], o[u], "with"));
                break;
            case 38:
                this.$ = i.Chain((new i.For({
                    kind: o[u - 2],
                    source: o[u - 1],
                    body: o[u],
                    ref: !0
                })).addBody(o[u]));
                break;
            case 39:
                this.$ = i.L(r, i.Arr(o[u - 2]));
                break;
            case 40:
                this.$ = i.L(r, i.Obj(o[u - 2]));
                break;
            case 41:
                this.$ = i.L(r, i.Arr(o[u - 3])).named(o[u]);
                break;
            case 42:
                this.$ = i.L(r, i.Obj(o[u - 3])).named(o[u]);
                break;
            case 45:
                this.$ = i.L(r, i.Key(o[u]));
                break;
            case 46:
                this.$ = i.L(r, i.Literal(o[u]));
                break;
            case 47:
                this.$ = [];
                break;
            case 48:
                this.$ = [o[u]];
                break;
            case 49:
                this.$ = o[u - 2].concat(o[u]);
                break;
            case 50:
                this.$ = o[u - 3].concat(o[u]);
                break;
            case 51:
                this.$ = o[u - 5].concat(o[u - 2]);
                break;
            case 53:
                this.$ = i.Splat(o[u]);
                break;
            case 54:
                this.$ = i.Splat(i.L(r, i.Arr()), !0);
                break;
            case 57:
                this.$ = i.L(r, i.Block());
                break;
            case 58:
                this.$ = i.Block(o[u]);
                break;
            case 59:
                this.$ = o[u - 2].add(o[u]);
                break;
            case 62:
                this.$ = i.Cascade(o[u - 1], o[u], "cascade");
                break;
            case 63:
                this.$ = i.Call.back(o[u - 4], o[u], o[u - 1].charAt(1) === "~", o[u - 1].length === 3);
                break;
            case 64:
                this.$ = i.L(r, i.JS(o[u], !0, !0));
                break;
            case 65:
                this.$ = i.L(r, i.Throw(i.JS("Error('unimplemented')")));
                break;
            case 66:
                this.$ = i.Require(o[u].unwrap());
                break;
            case 67:
                this.$ = o[u - 1];
                break;
            case 68:
                this.$ = i.Import(i.Unary("^^", o[u - 2], {
                    prec: "yy.UNARY"
                }), o[u], !1);
                break;
            case 69:
                this.$ = i.Import(i.Unary("^^", o[u - 2], {
                    prec: "yy.UNARY"
                }), o[u].unwrap(), !1);
                break;
            case 70:
                this.$ = o[u - 2].add(i.Call([o[u - 4], o[u]]));
                break;
            case 71:
                this.$ = o[u].unwrap();
                break;
            case 72:
                this.$ = i.Assign(o[u - 2].unwrap(), o[u], o[u - 1]);
                break;
            case 73:
                this.$ = i.Assign(o[u - 5].unwrap(), i.Arr.maybe(o[u - 2]), o[u - 4]);
                break;
            case 74:
                this.$ = i.Import(o[u - 2], o[u], o[u - 1] === "<<<<");
                break;
            case 75:
                this.$ = i.Import(o[u - 5], i.Arr.maybe(o[u - 2]), o[u - 4] === "<<<<");
                break;
            case 76:
                this.$ = i.Unary(o[u - 1], o[u].unwrap());
                break;
            case 77:
                this.$ = i.Unary(o[u], o[u - 1].unwrap(), !0);
                break;
            case 78:
            case 79:
            case 80:
                this.$ = i.Assign(o[u].unwrap(), [o[u - 2]], o[u - 1]);
                break;
            case 81:
            case 82:
            case 83:
                this.$ = i.Unary(o[u - 1], o[u]);
                break;
            case 84:
                this.$ = i.Unary(o[u - 4], i.Arr.maybe(o[u - 2]));
                break;
            case 85:
            case 86:
            case 87:
            case 88:
            case 89:
            case 90:
            case 91:
            case 92:
            case 93:
                this.$ = i.Binary(o[u - 1], o[u - 2], o[u]);
                break;
            case 94:
                this.$ = "!" === o[u - 1].charAt(0) ? i.Binary(o[u - 1].slice(1), o[u - 2], o[u]).invert() : i.Binary(o[u - 1], o[u - 2], o[u]);
                break;
            case 95:
                this.$ = i.Block(o[u - 2]).pipe(o[u], o[u - 1]);
                break;
            case 96:
                this.$ = i.Block(o[u - 2]).pipe([o[u]], o[u - 1]);
                break;
            case 97:
                this.$ = i.Existence(o[u - 1].unwrap(), !0);
                break;
            case 98:
                this.$ = i.L(r, i.Fun(o[u - 4], o[u], /~/.test(o[u - 1]), /--|~~/.test(o[u - 1]), /!/.test(o[u - 1])));
                break;
            case 99:
                this.$ = i.L(r, i.Fun(o[u - 3], o[u]).named(o[u - 5]));
                break;
            case 100:
                this.$ = i.If(o[u - 2], o[u - 1], o[u - 3] === "unless").addElse(o[u]);
                break;
            case 101:
                this.$ = i.If(o[u], o[u - 2], o[u - 1] === "unless");
                break;
            case 102:
                this.$ = o[u - 2].addBody(o[u - 1]).addElse(o[u]);
                break;
            case 103:
                this.$ = (new i.While(o[u], o[u - 1] === "until", !0)).addBody(o[u - 2]);
                break;
            case 104:
                this.$ = (new i.While(o[u - 2], o[u - 3] === "until", !0)).addGuard(o[u]).addBody(o[u - 4]);
                break;
            case 105:
                this.$ = i.Jump[o[u - 1]](o[u]);
                break;
            case 106:
                this.$ = i.Jump[o[u - 4]](i.Arr.maybe(o[u - 2]));
                break;
            case 107:
                this.$ = i.L(r, i.Jump[o[u]]());
                break;
            case 108:
                this.$ = i.L(r, new i.Jump(o[u]));
                break;
            case 109:
                this.$ = i.L(r, new i.Jump(o[u - 1], o[u]));
                break;
            case 110:
                this.$ = new i.Switch(o[u - 2], o[u - 1], o[u]);
                break;
            case 111:
            case 112:
                this.$ = new i.Switch(o[u - 4], o[u - 3], o[u - 2], o[u]);
                break;
            case 113:
                this.$ = new i.Switch(o[u - 1], null, o[u]);
                break;
            case 114:
            case 115:
                this.$ = new i.Switch(o[u - 3], null, o[u - 2], o[u]);
                break;
            case 116:
                this.$ = new i.Switch(o[u - 1], null, [], o[u]);
                break;
            case 117:
                this.$ = new i.Try(o[u]);
                break;
            case 118:
                this.$ = new i.Try(o[u - 2], void 8, o[u]);
                break;
            case 119:
                this.$ = new i.Try(o[u - 4], void 8, o[u - 2], o[u]);
                break;
            case 120:
                this.$ = new i.Try(o[u - 3], o[u - 1], o[u]);
                break;
            case 121:
                this.$ = new i.Try(o[u - 5], o[u - 3], o[u - 2], o[u]);
                break;
            case 122:
                this.$ = new i.Try(o[u - 2], void 8, void 8, o[u]);
                break;
            case 123:
                this.$ = new i.Class({
                    title: o[u - 3].unwrap(),
                    sup: o[u - 2],
                    mixins: o[u - 1],
                    body: o[u]
                });
                break;
            case 124:
                this.$ = new i.Class({
                    sup: o[u - 2],
                    mixins: o[u - 1],
                    body: o[u]
                });
                break;
            case 125:
                this.$ = i.Util.Extends(o[u - 2].unwrap(), o[u]);
                break;
            case 126:
            case 127:
                this.$ = new i.Label(o[u - 1], o[u]);
                break;
            case 128:
                this.$ = i.Decl(o[u - 4], o[u - 2], r + 1);
                break;
            case 129:
                this.$ = [o[u]];
                break;
            case 130:
                this.$ = o[u - 2].concat(o[u]);
                break;
            case 132:
                this.$ = i.Prop(i.L(r, i.Key(o[u], o[u] !== "arguments" && o[u] !== "eval")), i.L(r, i.Literal(o[u])));
                break;
            case 133:
                this.$ = i.Prop(o[u], i.Chain(o[u - 2], [i.Index(o[u], o[u - 1])]));
                break;
            case 134:
                this.$ = i.Prop(o[u], i.Chain(i.L(r, i.Literal(o[u - 2])), [i.Index(o[u], o[u - 1])]));
                break;
            case 135:
                this.$ = i.Prop(i.L(r, i.Key(o[u])), i.L(r, i.Obj(o[u - 3]).named(o[u])));
                break;
            case 136:
                this.$ = i.Prop(i.L(r, i.Key(o[u])), i.L(r, i.Arr(o[u - 3]).named(o[u])));
                break;
            case 137:
                this.$ = i.Prop(o[u - 2], o[u]);
                break;
            case 138:
                this.$ = i.Prop(o[u - 5], i.Arr.maybe(o[u - 2]));
                break;
            case 140:
                this.$ = i.Binary(o[u - 1], o[u - 2], o[u]);
                break;
            case 141:
                this.$ = i.Binary(o[u - 1], o[u - 2], o[u], !0);
                break;
            case 142:
                this.$ = i.Prop(o[u].maybeKey(), i.L(r, i.Literal(o[u - 1] === "+")));
                break;
            case 143:
                this.$ = i.Prop(i.L(r, i.Key(o[u], !0)), i.L(r, i.Literal(o[u - 1] === "+")));
                break;
            case 144:
                this.$ = i.Splat(o[u]);
                break;
            case 145:
                this.$ = i.L(r, i.JS(o[u], !0, !0));
                break;
            case 146:
                this.$ = [];
                break;
            case 147:
                this.$ = [o[u]];
                break;
            case 148:
                this.$ = o[u - 2].concat(o[u]);
                break;
            case 149:
                this.$ = o[u - 3].concat(o[u]);
                break;
            case 150:
                this.$ = o[u - 2];
                break;
            case 151:
                this.$ = i.Parens(o[u - 1].chomp().unwrap(), !1, o[u - 2] === '"');
                break;
            case 154:
                this.$ = o[u - 2].add(o[u]);
                break;
            case 155:
                this.$ = null;
                break;
            case 156:
                this.$ = o[u];
                break;
            case 157:
                this.$ = i.If(o[u - 2], o[u - 1], o[u - 3] === "unless").addElse(o[u]);
                break;
            case 158:
                this.$ = new i.For({
                    kind: o[u - 3],
                    item: o[u - 2].unwrap(),
                    index: o[u - 1],
                    source: o[u]
                });
                break;
            case 159:
                this.$ = new i.For({
                    kind: o[u - 5],
                    item: o[u - 4].unwrap(),
                    index: o[u - 3],
                    source: o[u - 2],
                    guard: o[u]
                });
                break;
            case 160:
                this.$ = new i.For({
                    kind: o[u - 5],
                    item: o[u - 4].unwrap(),
                    index: o[u - 3],
                    source: o[u - 2],
                    step: o[u]
                });
                break;
            case 161:
                this.$ = new i.For({
                    kind: o[u - 7],
                    item: o[u - 6].unwrap(),
                    index: o[u - 5],
                    source: o[u - 4],
                    step: o[u - 2],
                    guard: o[u]
                });
                break;
            case 162:
                this.$ = new i.For({
                    kind: o[u - 1],
                    source: o[u],
                    ref: !0
                });
                break;
            case 163:
                this.$ = new i.For({
                    kind: o[u - 3],
                    source: o[u - 2],
                    ref: !0,
                    guard: o[u]
                });
                break;
            case 164:
                this.$ = new i.For({
                    kind: o[u - 3],
                    source: o[u - 2],
                    ref: !0,
                    step: o[u]
                });
                break;
            case 165:
                this.$ = new i.For({
                    kind: o[u - 5],
                    source: o[u - 4],
                    ref: !0,
                    step: o[u - 2],
                    guard: o[u]
                });
                break;
            case 166:
                this.$ = new i.For({
                    object: !0,
                    kind: o[u - 3],
                    index: o[u - 2],
                    source: o[u]
                });
                break;
            case 167:
                this.$ = new i.For({
                    object: !0,
                    kind: o[u - 5],
                    index: o[u - 4],
                    source: o[u - 2],
                    guard: o[u]
                });
                break;
            case 168:
                this.$ = new i.For({
                    object: !0,
                    kind: o[u - 5],
                    index: o[u - 4],
                    item: o[u - 2].unwrap(),
                    source: o[u]
                });
                break;
            case 169:
                this.$ = new i.For({
                    object: !0,
                    kind: o[u - 7],
                    index: o[u - 6],
                    item: o[u - 4].unwrap(),
                    source: o[u - 2],
                    guard: o[u]
                });
                break;
            case 170:
                this.$ = new i.For({
                    kind: o[u - 5],
                    index: o[u - 4],
                    from: o[u - 2],
                    op: o[u - 1],
                    to: o[u]
                });
                break;
            case 171:
                this.$ = new i.For({
                    kind: o[u - 4],
                    from: o[u - 2],
                    op: o[u - 1],
                    to: o[u]
                });
                break;
            case 172:
                this.$ = new i.For({
                    kind: o[u - 7],
                    index: o[u - 6],
                    from: o[u - 4],
                    op: o[u - 3],
                    to: o[u - 2],
                    guard: o[u]
                });
                break;
            case 173:
                this.$ = new i.For({
                    kind: o[u - 6],
                    from: o[u - 4],
                    op: o[u - 3],
                    to: o[u - 2],
                    guard: o[u]
                });
                break;
            case 174:
                this.$ = new i.For({
                    kind: o[u - 7],
                    index: o[u - 6],
                    from: o[u - 4],
                    op: o[u - 3],
                    to: o[u - 2],
                    step: o[u]
                });
                break;
            case 175:
                this.$ = new i.For({
                    kind: o[u - 9],
                    index: o[u - 8],
                    from: o[u - 6],
                    op: o[u - 5],
                    to: o[u - 4],
                    step: o[u - 2],
                    guard: o[u]
                });
                break;
            case 176:
                this.$ = new i.For({
                    kind: o[u - 9],
                    index: o[u - 8],
                    from: o[u - 6],
                    op: o[u - 5],
                    to: o[u - 4],
                    guard: o[u - 2],
                    step: o[u]
                });
                break;
            case 177:
                this.$ = new i.While(o[u], o[u - 1] === "until");
                break;
            case 178:
                this.$ = (new i.While(o[u - 2], o[u - 3] === "until")).addGuard(o[u]);
                break;
            case 179:
                this.$ = new i.While(o[u - 2], o[u - 3] === "until", o[u]);
                break;
            case 180:
                this.$ = (new i.While(o[u - 4], o[u - 5] === "until", o[u - 2])).addGuard(o[u]);
                break;
            case 181:
                this.$ = [o[u]];
                break;
            case 182:
                this.$ = o[u - 1].concat(o[u]);
                break;
            case 183:
            case 184:
                this.$ = o[u - 2].concat(o[u]);
                break;
            case 185:
                this.$ = [new i.Case(o[u - 1], o[u])];
                break;
            case 186:
                this.$ = o[u - 3].concat(new i.Case(o[u - 1], o[u]));
                break;
            case 187:
                this.$ = o[u];
                break;
            case 188:
                this.$ = null;
                break;
            case 189:
                this.$ = o[u];
                break;
            case 190:
                this.$ = null;
                break;
            case 191:
                return this.$
            }
        },
        table: [{
            1: [2, 57],
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            17: 4,
            18: [1, 34],
            19: 7,
            23: [1, 35],
            25: [1, 36],
            31: [1, 8],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            45: [2, 57],
            46: [1, 6],
            47: [1, 10],
            48: 3,
            49: 5,
            51: [1, 9],
            52: [1, 11],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27],
            97: 2,
            102: 1
        }, {
            1: [3]
        }, {
            1: [2, 191]
        }, {
            1: [2, 152],
            27: [2, 152],
            45: [1, 40]
        }, {
            1: [2, 153],
            27: [2, 153],
            45: [1, 41]
        }, {
            1: [2, 58],
            22: [2, 58],
            27: [2, 58],
            45: [2, 58]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 7,
            22: [2, 57],
            23: [1, 35],
            25: [1, 36],
            31: [1, 8],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            45: [2, 57],
            47: [1, 10],
            48: 42,
            49: 5,
            51: [1, 9],
            52: [1, 11],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            1: [2, 61],
            17: 43,
            22: [2, 61],
            27: [2, 61],
            35: [1, 44],
            45: [2, 61],
            46: [1, 6],
            55: [1, 45],
            56: [1, 46],
            58: [1, 47],
            59: [1, 48],
            60: [1, 49],
            61: [1, 50],
            62: [1, 51],
            63: [1, 52],
            64: [1, 53],
            65: [1, 54],
            66: [1, 55],
            67: [1, 56],
            68: [1, 57],
            74: [1, 58]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            12: 59,
            16: [1, 33],
            18: [1, 34],
            19: 61,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            32: [2, 47],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            43: 60,
            44: [2, 47],
            45: [2, 47],
            46: [2, 47],
            47: [1, 62],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            1: [2, 64],
            22: [2, 64],
            27: [2, 64],
            45: [2, 64]
        }, {
            1: [2, 65],
            22: [2, 65],
            27: [2, 65],
            45: [2, 65]
        }, {
            3: 64,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            23: [1, 35],
            25: [1, 36],
            38: [1, 37],
            39: [1, 65]
        }, {
            1: [2, 71],
            9: [1, 71],
            11: [1, 72],
            14: [2, 71],
            15: [1, 73],
            21: [2, 71],
            22: [2, 71],
            24: [2, 71],
            26: [2, 71],
            27: [2, 71],
            28: [2, 71],
            32: [2, 71],
            34: [1, 68],
            35: [2, 71],
            36: [2, 71],
            37: [2, 71],
            39: [2, 71],
            44: [2, 71],
            45: [2, 71],
            46: [2, 71],
            53: [1, 66],
            54: [1, 67],
            55: [2, 71],
            56: [2, 71],
            58: [2, 71],
            59: [2, 71],
            60: [2, 71],
            61: [2, 71],
            62: [2, 71],
            63: [2, 71],
            64: [2, 71],
            65: [2, 71],
            66: [2, 71],
            67: [2, 71],
            68: [2, 71],
            69: [1, 69],
            74: [2, 71],
            77: [2, 71],
            78: [2, 71],
            92: [1, 70],
            101: [2, 71]
        }, {
            3: 74,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            23: [1, 35],
            25: [1, 36],
            38: [1, 37],
            39: [1, 65]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 76,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            46: [1, 77],
            54: [1, 75],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 79,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            54: [1, 78],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 81,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            54: [1, 80],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            11: [1, 82]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 83,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            17: 84,
            46: [1, 6]
        }, {
            17: 85,
            46: [1, 6]
        }, {
            1: [2, 107],
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            14: [2, 107],
            16: [1, 33],
            18: [1, 34],
            19: 86,
            21: [2, 107],
            22: [2, 107],
            23: [1, 35],
            24: [2, 107],
            25: [1, 36],
            26: [2, 107],
            27: [2, 107],
            28: [2, 107],
            31: [1, 63],
            32: [2, 107],
            33: [1, 14],
            34: [1, 13],
            35: [2, 107],
            36: [2, 107],
            37: [2, 107],
            38: [1, 37],
            39: [2, 107],
            41: [1, 26],
            44: [2, 107],
            45: [2, 107],
            46: [1, 87],
            55: [2, 107],
            56: [1, 15],
            57: [1, 16],
            58: [2, 107],
            59: [2, 107],
            60: [2, 107],
            61: [2, 107],
            62: [2, 107],
            63: [2, 107],
            64: [2, 107],
            65: [2, 107],
            66: [2, 107],
            67: [2, 107],
            68: [2, 107],
            71: [1, 17],
            72: [1, 18],
            74: [2, 107],
            75: 19,
            76: [1, 20],
            77: [2, 107],
            78: [2, 107],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27],
            101: [2, 107]
        }, {
            1: [2, 108],
            4: [1, 88],
            14: [2, 108],
            21: [2, 108],
            22: [2, 108],
            24: [2, 108],
            26: [2, 108],
            27: [2, 108],
            28: [2, 108],
            32: [2, 108],
            35: [2, 108],
            36: [2, 108],
            37: [2, 108],
            39: [2, 108],
            44: [2, 108],
            45: [2, 108],
            46: [2, 108],
            55: [2, 108],
            56: [2, 108],
            58: [2, 108],
            59: [2, 108],
            60: [2, 108],
            61: [2, 108],
            62: [2, 108],
            63: [2, 108],
            64: [2, 108],
            65: [2, 108],
            66: [2, 108],
            67: [2, 108],
            68: [2, 108],
            74: [2, 108],
            77: [2, 108],
            78: [2, 108],
            101: [2, 108]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            17: 91,
            18: [1, 34],
            19: 92,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            46: [1, 6],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            78: [1, 93],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            82: 89,
            83: 90,
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            17: 94,
            46: [1, 6]
        }, {
            3: 95,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            23: [1, 35],
            25: [1, 36],
            38: [1, 37],
            39: [1, 65],
            46: [2, 188],
            90: 96,
            92: [1, 97],
            101: [2, 188]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            17: 99,
            18: [1, 34],
            19: 98,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            46: [1, 6],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            46: [1, 100]
        }, {
            1: [2, 1],
            9: [2, 1],
            11: [2, 1],
            14: [2, 1],
            15: [2, 1],
            21: [2, 1],
            22: [2, 1],
            24: [2, 1],
            26: [2, 1],
            27: [2, 1],
            28: [2, 1],
            32: [2, 1],
            34: [2, 1],
            35: [2, 1],
            36: [2, 1],
            37: [2, 1],
            39: [2, 1],
            44: [2, 1],
            45: [2, 1],
            46: [2, 1],
            53: [2, 1],
            54: [2, 1],
            55: [2, 1],
            56: [2, 1],
            58: [2, 1],
            59: [2, 1],
            60: [2, 1],
            61: [2, 1],
            62: [2, 1],
            63: [2, 1],
            64: [2, 1],
            65: [2, 1],
            66: [2, 1],
            67: [2, 1],
            68: [2, 1],
            69: [2, 1],
            74: [2, 1],
            77: [2, 1],
            78: [2, 1],
            92: [2, 1],
            99: [2, 1],
            101: [2, 1]
        }, {
            1: [2, 2],
            9: [2, 2],
            11: [2, 2],
            14: [2, 2],
            15: [2, 2],
            21: [2, 2],
            22: [2, 2],
            24: [2, 2],
            26: [2, 2],
            27: [2, 2],
            28: [2, 2],
            32: [2, 2],
            34: [2, 2],
            35: [2, 2],
            36: [2, 2],
            37: [2, 2],
            39: [2, 2],
            44: [2, 2],
            45: [2, 2],
            46: [2, 2],
            53: [2, 2],
            54: [2, 2],
            55: [2, 2],
            56: [2, 2],
            58: [2, 2],
            59: [2, 2],
            60: [2, 2],
            61: [2, 2],
            62: [2, 2],
            63: [2, 2],
            64: [2, 2],
            65: [2, 2],
            66: [2, 2],
            67: [2, 2],
            68: [2, 2],
            69: [2, 2],
            74: [2, 2],
            77: [2, 2],
            78: [2, 2],
            92: [2, 2],
            98: [2, 2],
            99: [2, 2],
            101: [2, 2]
        }, {
            1: [2, 3],
            9: [2, 3],
            11: [2, 3],
            14: [2, 3],
            15: [2, 3],
            21: [2, 3],
            22: [2, 3],
            24: [2, 3],
            26: [2, 3],
            27: [2, 3],
            28: [2, 3],
            32: [2, 3],
            34: [2, 3],
            35: [2, 3],
            36: [2, 3],
            37: [2, 3],
            39: [2, 3],
            44: [2, 3],
            45: [2, 3],
            46: [2, 3],
            53: [2, 3],
            54: [2, 3],
            55: [2, 3],
            56: [2, 3],
            58: [2, 3],
            59: [2, 3],
            60: [2, 3],
            61: [2, 3],
            62: [2, 3],
            63: [2, 3],
            64: [2, 3],
            65: [2, 3],
            66: [2, 3],
            67: [2, 3],
            68: [2, 3],
            69: [2, 3],
            74: [2, 3],
            77: [2, 3],
            78: [2, 3],
            92: [2, 3],
            98: [2, 3],
            99: [2, 3],
            101: [2, 3]
        }, {
            1: [2, 4],
            9: [2, 4],
            11: [2, 4],
            14: [2, 4],
            15: [2, 4],
            21: [2, 4],
            22: [2, 4],
            24: [2, 4],
            26: [2, 4],
            27: [2, 4],
            28: [2, 4],
            32: [2, 4],
            34: [2, 4],
            35: [2, 4],
            36: [2, 4],
            37: [2, 4],
            39: [2, 4],
            44: [2, 4],
            45: [2, 4],
            46: [2, 4],
            53: [2, 4],
            54: [2, 4],
            55: [2, 4],
            56: [2, 4],
            58: [2, 4],
            59: [2, 4],
            60: [2, 4],
            61: [2, 4],
            62: [2, 4],
            63: [2, 4],
            64: [2, 4],
            65: [2, 4],
            66: [2, 4],
            67: [2, 4],
            68: [2, 4],
            69: [2, 4],
            74: [2, 4],
            77: [2, 4],
            78: [2, 4],
            92: [2, 4],
            98: [2, 4],
            99: [2, 4],
            101: [2, 4]
        }, {
            1: [2, 5],
            9: [2, 5],
            11: [2, 5],
            14: [2, 5],
            15: [2, 5],
            21: [2, 5],
            22: [2, 5],
            24: [2, 5],
            26: [2, 5],
            27: [2, 5],
            28: [2, 5],
            32: [2, 5],
            34: [2, 5],
            35: [2, 5],
            36: [2, 5],
            37: [2, 5],
            39: [2, 5],
            44: [2, 5],
            45: [2, 5],
            46: [2, 5],
            53: [2, 5],
            54: [2, 5],
            55: [2, 5],
            56: [2, 5],
            58: [2, 5],
            59: [2, 5],
            60: [2, 5],
            61: [2, 5],
            62: [2, 5],
            63: [2, 5],
            64: [2, 5],
            65: [2, 5],
            66: [2, 5],
            67: [2, 5],
            68: [2, 5],
            69: [2, 5],
            74: [2, 5],
            77: [2, 5],
            78: [2, 5],
            92: [2, 5],
            98: [2, 5],
            99: [2, 5],
            101: [2, 5]
        }, {
            11: [1, 101]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            12: 104,
            16: [1, 33],
            18: [1, 34],
            19: 102,
            21: [2, 47],
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            36: [1, 103],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            43: 60,
            44: [2, 47],
            45: [2, 47],
            46: [2, 47],
            47: [1, 62],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            4: [1, 118],
            5: 115,
            7: [1, 119],
            8: [1, 116],
            10: 109,
            18: [1, 105],
            23: [1, 117],
            24: [2, 146],
            25: [1, 120],
            40: 106,
            42: 114,
            44: [2, 146],
            45: [2, 146],
            46: [1, 108],
            47: [1, 112],
            51: [1, 113],
            56: [1, 111],
            94: 110,
            95: 107
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            17: 4,
            18: [1, 34],
            19: 122,
            23: [1, 35],
            25: [1, 36],
            26: [1, 121],
            27: [2, 57],
            28: [1, 123],
            29: [1, 124],
            30: [1, 125],
            31: [1, 126],
            33: [1, 127],
            34: [1, 128],
            35: [1, 129],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            45: [2, 57],
            46: [1, 6],
            47: [1, 10],
            48: 3,
            49: 5,
            51: [1, 9],
            52: [1, 11],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27],
            97: 130
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 131,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            3: 133,
            4: [1, 134],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 132,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27],
            100: [1, 135]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 136,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            1: [2, 60],
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 7,
            22: [2, 60],
            23: [1, 35],
            25: [1, 36],
            27: [2, 60],
            31: [1, 8],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            45: [2, 60],
            47: [1, 10],
            49: 137,
            51: [1, 9],
            52: [1, 11],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            1: [2, 57],
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 7,
            23: [1, 35],
            25: [1, 36],
            27: [2, 57],
            31: [1, 8],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            45: [2, 57],
            47: [1, 10],
            48: 138,
            49: 5,
            51: [1, 9],
            52: [1, 11],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            22: [1, 139],
            45: [1, 40]
        }, {
            1: [2, 62],
            22: [2, 62],
            27: [2, 62],
            45: [2, 62]
        }, {
            3: 140,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            23: [1, 35],
            25: [1, 36],
            38: [1, 37],
            39: [1, 65]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 141,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            46: [1, 142],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 143,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 144,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 145,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 146,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 147,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 148,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 149,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 150,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 151,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 152,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 153,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 154,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 155,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            13: 156,
            32: [2, 55],
            44: [1, 157],
            45: [2, 55],
            46: [2, 55]
        }, {
            14: [2, 48],
            21: [2, 48],
            22: [2, 48],
            32: [2, 48],
            44: [2, 48],
            45: [2, 48],
            46: [2, 48]
        }, {
            14: [2, 52],
            21: [2, 52],
            22: [2, 52],
            32: [2, 52],
            35: [1, 44],
            44: [2, 52],
            45: [2, 52],
            46: [2, 52],
            55: [1, 45],
            56: [1, 46],
            58: [1, 47],
            59: [1, 48],
            60: [1, 49],
            61: [1, 50],
            62: [1, 51],
            63: [1, 52],
            64: [1, 53],
            65: [1, 54],
            66: [1, 55],
            67: [1, 56],
            68: [1, 57],
            74: [1, 58]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            14: [2, 54],
            16: [1, 33],
            18: [1, 34],
            19: 158,
            21: [2, 54],
            22: [2, 54],
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            32: [2, 54],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            44: [2, 54],
            45: [2, 54],
            46: [2, 54],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            12: 159,
            16: [1, 33],
            18: [1, 34],
            19: 61,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            32: [2, 47],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            43: 60,
            44: [2, 47],
            45: [2, 47],
            46: [2, 47],
            47: [1, 62],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            1: [2, 66],
            9: [1, 71],
            11: [1, 72],
            15: [1, 73],
            22: [2, 66],
            27: [2, 66],
            45: [2, 66]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 160,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            17: 162,
            18: [1, 34],
            19: 161,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            46: [1, 6],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 163,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            46: [1, 164],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            1: [2, 77],
            14: [2, 77],
            21: [2, 77],
            22: [2, 77],
            24: [2, 77],
            26: [2, 77],
            27: [2, 77],
            28: [2, 77],
            32: [2, 77],
            35: [2, 77],
            36: [2, 77],
            37: [2, 77],
            39: [2, 77],
            44: [2, 77],
            45: [2, 77],
            46: [2, 77],
            55: [2, 77],
            56: [2, 77],
            58: [2, 77],
            59: [2, 77],
            60: [2, 77],
            61: [2, 77],
            62: [2, 77],
            63: [2, 77],
            64: [2, 77],
            65: [2, 77],
            66: [2, 77],
            67: [2, 77],
            68: [2, 77],
            74: [2, 77],
            77: [2, 77],
            78: [2, 77],
            101: [2, 77]
        }, {
            1: [2, 97],
            14: [2, 97],
            21: [2, 97],
            22: [2, 97],
            24: [2, 97],
            26: [2, 97],
            27: [2, 97],
            28: [2, 97],
            32: [2, 97],
            35: [2, 97],
            36: [2, 97],
            37: [2, 97],
            39: [2, 97],
            44: [2, 97],
            45: [2, 97],
            46: [2, 97],
            55: [2, 97],
            56: [2, 97],
            58: [2, 97],
            59: [2, 97],
            60: [2, 97],
            61: [2, 97],
            62: [2, 97],
            63: [2, 97],
            64: [2, 97],
            65: [2, 97],
            66: [2, 97],
            67: [2, 97],
            68: [2, 97],
            74: [2, 97],
            77: [2, 97],
            78: [2, 97],
            101: [2, 97]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 165,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            4: [1, 118],
            5: 115,
            6: 167,
            7: [1, 119],
            10: 166,
            18: [1, 168],
            23: [1, 169],
            25: [1, 120],
            42: 114
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            12: 170,
            14: [2, 47],
            16: [1, 33],
            18: [1, 34],
            19: 61,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            43: 60,
            44: [2, 47],
            45: [2, 47],
            46: [2, 47],
            47: [1, 62],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            1: [2, 9],
            9: [2, 9],
            11: [2, 9],
            14: [2, 9],
            15: [2, 9],
            21: [2, 9],
            22: [2, 9],
            24: [2, 9],
            26: [2, 9],
            27: [2, 9],
            28: [2, 9],
            32: [2, 9],
            34: [2, 9],
            35: [2, 9],
            36: [2, 9],
            37: [2, 9],
            39: [2, 9],
            44: [2, 9],
            45: [2, 9],
            46: [2, 9],
            53: [2, 9],
            54: [2, 9],
            55: [2, 9],
            56: [2, 9],
            58: [2, 9],
            59: [2, 9],
            60: [2, 9],
            61: [2, 9],
            62: [2, 9],
            63: [2, 9],
            64: [2, 9],
            65: [2, 9],
            66: [2, 9],
            67: [2, 9],
            68: [2, 9],
            69: [2, 9],
            74: [2, 9],
            77: [2, 9],
            78: [2, 9],
            92: [2, 9],
            98: [2, 9],
            99: [2, 9],
            101: [2, 9]
        }, {
            1: [2, 76],
            9: [1, 71],
            11: [1, 72],
            14: [2, 76],
            15: [1, 73],
            21: [2, 76],
            22: [2, 76],
            24: [2, 76],
            26: [2, 76],
            27: [2, 76],
            28: [2, 76],
            32: [2, 76],
            35: [2, 76],
            36: [2, 76],
            37: [2, 76],
            39: [2, 76],
            44: [2, 76],
            45: [2, 76],
            46: [2, 76],
            55: [2, 76],
            56: [2, 76],
            58: [2, 76],
            59: [2, 76],
            60: [2, 76],
            61: [2, 76],
            62: [2, 76],
            63: [2, 76],
            64: [2, 76],
            65: [2, 76],
            66: [2, 76],
            67: [2, 76],
            68: [2, 76],
            74: [2, 76],
            77: [2, 76],
            78: [2, 76],
            101: [2, 76]
        }, {
            3: 171,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            23: [1, 35],
            25: [1, 36],
            38: [1, 37],
            39: [1, 65]
        }, {
            1: [2, 81],
            14: [2, 81],
            21: [2, 81],
            22: [2, 81],
            24: [2, 81],
            26: [2, 81],
            27: [2, 81],
            28: [2, 81],
            32: [2, 81],
            35: [1, 44],
            36: [2, 81],
            37: [2, 81],
            39: [2, 81],
            44: [2, 81],
            45: [2, 81],
            46: [2, 81],
            55: [2, 81],
            56: [2, 81],
            58: [2, 81],
            59: [2, 81],
            60: [2, 81],
            61: [1, 50],
            62: [2, 81],
            63: [2, 81],
            64: [2, 81],
            65: [1, 54],
            66: [2, 81],
            67: [2, 81],
            68: [2, 81],
            74: [2, 81],
            77: [2, 81],
            78: [2, 81],
            101: [2, 81]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            12: 172,
            16: [1, 33],
            18: [1, 34],
            19: 61,
            22: [2, 47],
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            43: 60,
            44: [2, 47],
            45: [2, 47],
            46: [2, 47],
            47: [1, 62],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            3: 173,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            23: [1, 35],
            25: [1, 36],
            38: [1, 37],
            39: [1, 65]
        }, {
            1: [2, 82],
            14: [2, 82],
            21: [2, 82],
            22: [2, 82],
            24: [2, 82],
            26: [2, 82],
            27: [2, 82],
            28: [2, 82],
            32: [2, 82],
            35: [1, 44],
            36: [2, 82],
            37: [2, 82],
            39: [2, 82],
            44: [2, 82],
            45: [2, 82],
            46: [2, 82],
            55: [2, 82],
            56: [2, 82],
            58: [2, 82],
            59: [2, 82],
            60: [2, 82],
            61: [1, 50],
            62: [2, 82],
            63: [2, 82],
            64: [2, 82],
            65: [1, 54],
            66: [2, 82],
            67: [2, 82],
            68: [2, 82],
            74: [2, 82],
            77: [2, 82],
            78: [2, 82],
            101: [2, 82]
        }, {
            3: 174,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            23: [1, 35],
            25: [1, 36],
            38: [1, 37],
            39: [1, 65]
        }, {
            1: [2, 83],
            14: [2, 83],
            21: [2, 83],
            22: [2, 83],
            24: [2, 83],
            26: [2, 83],
            27: [2, 83],
            28: [2, 83],
            32: [2, 83],
            35: [1, 44],
            36: [2, 83],
            37: [2, 83],
            39: [2, 83],
            44: [2, 83],
            45: [2, 83],
            46: [2, 83],
            55: [2, 83],
            56: [2, 83],
            58: [2, 83],
            59: [2, 83],
            60: [2, 83],
            61: [1, 50],
            62: [2, 83],
            63: [2, 83],
            64: [2, 83],
            65: [1, 54],
            66: [2, 83],
            67: [2, 83],
            68: [2, 83],
            74: [2, 83],
            77: [2, 83],
            78: [2, 83],
            101: [2, 83]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            12: 175,
            14: [2, 47],
            16: [1, 33],
            18: [1, 34],
            19: 61,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            43: 60,
            44: [2, 47],
            45: [2, 47],
            46: [2, 47],
            47: [1, 62],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            17: 176,
            35: [1, 44],
            46: [1, 6],
            55: [1, 45],
            56: [1, 46],
            58: [1, 47],
            59: [1, 48],
            60: [1, 49],
            61: [1, 50],
            62: [1, 51],
            63: [1, 52],
            64: [1, 53],
            65: [1, 54],
            66: [1, 55],
            67: [1, 56],
            68: [1, 57],
            74: [1, 58]
        }, {
            1: [2, 155],
            14: [2, 155],
            21: [2, 155],
            22: [2, 155],
            24: [2, 155],
            26: [2, 155],
            27: [2, 155],
            28: [2, 155],
            32: [2, 155],
            35: [2, 155],
            36: [2, 155],
            37: [2, 155],
            39: [2, 155],
            44: [2, 155],
            45: [2, 155],
            46: [2, 155],
            55: [2, 155],
            56: [2, 155],
            58: [2, 155],
            59: [2, 155],
            60: [2, 155],
            61: [2, 155],
            62: [2, 155],
            63: [2, 155],
            64: [2, 155],
            65: [2, 155],
            66: [2, 155],
            67: [2, 155],
            68: [2, 155],
            73: 177,
            74: [2, 155],
            77: [2, 155],
            78: [2, 155],
            85: [1, 178],
            101: [2, 155]
        }, {
            77: [1, 179]
        }, {
            1: [2, 105],
            14: [2, 105],
            21: [2, 105],
            22: [2, 105],
            24: [2, 105],
            26: [2, 105],
            27: [2, 105],
            28: [2, 105],
            32: [2, 105],
            35: [1, 44],
            36: [2, 105],
            37: [2, 105],
            39: [2, 105],
            44: [2, 105],
            45: [2, 105],
            46: [2, 105],
            55: [1, 45],
            56: [1, 46],
            58: [1, 47],
            59: [1, 48],
            60: [1, 49],
            61: [1, 50],
            62: [1, 51],
            63: [1, 52],
            64: [1, 53],
            65: [1, 54],
            66: [1, 55],
            67: [1, 56],
            68: [2, 105],
            74: [2, 105],
            77: [2, 105],
            78: [2, 105],
            101: [2, 105]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            12: 180,
            16: [1, 33],
            18: [1, 34],
            19: 61,
            22: [2, 47],
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            43: 60,
            44: [2, 47],
            45: [2, 47],
            46: [2, 47],
            47: [1, 62],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            1: [2, 109],
            14: [2, 109],
            21: [2, 109],
            22: [2, 109],
            24: [2, 109],
            26: [2, 109],
            27: [2, 109],
            28: [2, 109],
            32: [2, 109],
            35: [2, 109],
            36: [2, 109],
            37: [2, 109],
            39: [2, 109],
            44: [2, 109],
            45: [2, 109],
            46: [2, 109],
            55: [2, 109],
            56: [2, 109],
            58: [2, 109],
            59: [2, 109],
            60: [2, 109],
            61: [2, 109],
            62: [2, 109],
            63: [2, 109],
            64: [2, 109],
            65: [2, 109],
            66: [2, 109],
            67: [2, 109],
            68: [2, 109],
            74: [2, 109],
            77: [2, 109],
            78: [2, 109],
            101: [2, 109]
        }, {
            44: [1, 182],
            78: [1, 93],
            83: 181
        }, {
            1: [2, 113],
            14: [2, 113],
            21: [2, 113],
            22: [2, 113],
            24: [2, 113],
            26: [2, 113],
            27: [2, 113],
            28: [2, 113],
            32: [2, 113],
            35: [2, 113],
            36: [2, 113],
            37: [2, 113],
            39: [2, 113],
            44: [2, 113],
            45: [2, 113],
            46: [2, 113],
            55: [2, 113],
            56: [2, 113],
            58: [2, 113],
            59: [2, 113],
            60: [2, 113],
            61: [2, 113],
            62: [2, 113],
            63: [2, 113],
            64: [2, 113],
            65: [2, 113],
            66: [2, 113],
            67: [2, 113],
            68: [2, 113],
            74: [2, 113],
            77: [2, 113],
            78: [1, 185],
            84: [1, 183],
            85: [1, 184],
            101: [2, 113]
        }, {
            1: [2, 116],
            14: [2, 116],
            21: [2, 116],
            22: [2, 116],
            24: [2, 116],
            26: [2, 116],
            27: [2, 116],
            28: [2, 116],
            32: [2, 116],
            35: [2, 116],
            36: [2, 116],
            37: [2, 116],
            39: [2, 116],
            44: [2, 116],
            45: [2, 116],
            46: [2, 116],
            55: [2, 116],
            56: [2, 116],
            58: [2, 116],
            59: [2, 116],
            60: [2, 116],
            61: [2, 116],
            62: [2, 116],
            63: [2, 116],
            64: [2, 116],
            65: [2, 116],
            66: [2, 116],
            67: [2, 116],
            68: [2, 116],
            74: [2, 116],
            77: [2, 116],
            78: [2, 116],
            101: [2, 116]
        }, {
            35: [1, 44],
            44: [2, 129],
            46: [2, 129],
            55: [1, 45],
            56: [1, 46],
            58: [1, 47],
            59: [1, 48],
            60: [1, 49],
            61: [1, 50],
            62: [1, 51],
            63: [1, 52],
            64: [1, 53],
            65: [1, 54],
            66: [1, 55],
            67: [1, 56],
            68: [1, 57],
            74: [1, 58],
            78: [2, 129]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 92,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            82: 186,
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            1: [2, 117],
            14: [2, 117],
            21: [2, 117],
            22: [2, 117],
            24: [2, 117],
            26: [2, 117],
            27: [2, 117],
            28: [2, 117],
            32: [2, 117],
            35: [2, 117],
            36: [2, 117],
            37: [2, 117],
            39: [2, 117],
            44: [2, 117],
            45: [2, 117],
            46: [2, 117],
            55: [2, 117],
            56: [2, 117],
            58: [2, 117],
            59: [2, 117],
            60: [2, 117],
            61: [2, 117],
            62: [2, 117],
            63: [2, 117],
            64: [2, 117],
            65: [2, 117],
            66: [2, 117],
            67: [2, 117],
            68: [2, 117],
            74: [2, 117],
            77: [2, 117],
            78: [2, 117],
            87: [1, 187],
            88: [1, 188],
            101: [2, 117]
        }, {
            9: [1, 71],
            11: [1, 72],
            15: [1, 73],
            46: [2, 188],
            90: 189,
            92: [1, 97],
            101: [2, 188]
        }, {
            46: [2, 190],
            91: 190,
            101: [1, 191]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 192,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            1: [2, 126],
            14: [2, 126],
            21: [2, 126],
            22: [2, 126],
            24: [2, 126],
            26: [2, 126],
            27: [2, 126],
            28: [2, 126],
            32: [2, 126],
            35: [1, 44],
            36: [2, 126],
            37: [2, 126],
            39: [2, 126],
            44: [2, 126],
            45: [2, 126],
            46: [2, 126],
            55: [1, 45],
            56: [1, 46],
            58: [1, 47],
            59: [1, 48],
            60: [1, 49],
            61: [1, 50],
            62: [1, 51],
            63: [1, 52],
            64: [1, 53],
            65: [1, 54],
            66: [1, 55],
            67: [1, 56],
            68: [2, 126],
            74: [2, 126],
            77: [2, 126],
            78: [2, 126],
            101: [2, 126]
        }, {
            1: [2, 127],
            14: [2, 127],
            21: [2, 127],
            22: [2, 127],
            24: [2, 127],
            26: [2, 127],
            27: [2, 127],
            28: [2, 127],
            32: [2, 127],
            35: [2, 127],
            36: [2, 127],
            37: [2, 127],
            39: [2, 127],
            44: [2, 127],
            45: [2, 127],
            46: [2, 127],
            55: [2, 127],
            56: [2, 127],
            58: [2, 127],
            59: [2, 127],
            60: [2, 127],
            61: [2, 127],
            62: [2, 127],
            63: [2, 127],
            64: [2, 127],
            65: [2, 127],
            66: [2, 127],
            67: [2, 127],
            68: [2, 127],
            74: [2, 127],
            77: [2, 127],
            78: [2, 127],
            101: [2, 127]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            12: 193,
            16: [1, 33],
            18: [1, 34],
            19: 61,
            22: [2, 47],
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            43: 60,
            44: [2, 47],
            45: [2, 47],
            46: [2, 47],
            47: [1, 62],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            12: 194,
            14: [2, 47],
            16: [1, 33],
            18: [1, 34],
            19: 61,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            43: 60,
            44: [2, 47],
            45: [2, 47],
            46: [2, 47],
            47: [1, 62],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            20: 195,
            21: [2, 52],
            35: [1, 44],
            36: [1, 196],
            39: [1, 198],
            44: [2, 52],
            45: [2, 52],
            46: [2, 52],
            55: [1, 45],
            56: [1, 46],
            58: [1, 47],
            59: [1, 48],
            60: [1, 49],
            61: [1, 50],
            62: [1, 51],
            63: [1, 52],
            64: [1, 53],
            65: [1, 54],
            66: [1, 55],
            67: [1, 56],
            68: [1, 57],
            74: [1, 58],
            75: 197,
            77: [1, 39]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 199,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            13: 200,
            21: [2, 55],
            44: [1, 157],
            45: [2, 55],
            46: [2, 55]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            12: 201,
            16: [1, 33],
            18: [1, 34],
            19: 61,
            21: [2, 47],
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            43: 60,
            44: [2, 47],
            45: [2, 47],
            46: [2, 47],
            47: [1, 62],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            13: 202,
            24: [2, 55],
            44: [1, 203],
            45: [2, 55]
        }, {
            22: [2, 147],
            24: [2, 147],
            44: [2, 147],
            45: [2, 147]
        }, {
            4: [1, 118],
            5: 115,
            7: [1, 119],
            8: [1, 116],
            10: 109,
            18: [1, 205],
            22: [2, 146],
            23: [1, 117],
            25: [1, 120],
            40: 204,
            42: 114,
            44: [2, 146],
            45: [2, 146],
            46: [1, 108],
            47: [1, 112],
            51: [1, 113],
            56: [1, 111],
            94: 110,
            95: 107
        }, {
            9: [1, 207],
            22: [2, 131],
            24: [2, 131],
            44: [2, 131],
            45: [2, 131],
            54: [2, 131],
            59: [2, 131],
            96: [1, 206]
        }, {
            22: [2, 139],
            24: [2, 139],
            44: [2, 139],
            45: [2, 139],
            54: [1, 209],
            59: [1, 208]
        }, {
            4: [1, 118],
            5: 115,
            7: [1, 119],
            8: [1, 211],
            10: 210,
            25: [1, 120],
            42: 114
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 212,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            22: [2, 145],
            24: [2, 145],
            44: [2, 145],
            45: [2, 145]
        }, {
            1: [2, 43],
            9: [2, 43],
            11: [2, 43],
            14: [2, 43],
            15: [2, 43],
            21: [2, 43],
            22: [2, 43],
            24: [2, 43],
            26: [2, 43],
            27: [2, 43],
            28: [2, 43],
            32: [2, 43],
            34: [2, 43],
            35: [2, 43],
            36: [2, 43],
            37: [2, 43],
            39: [2, 43],
            44: [2, 43],
            45: [2, 43],
            46: [2, 43],
            53: [2, 43],
            54: [2, 43],
            55: [2, 43],
            56: [2, 43],
            58: [2, 43],
            59: [2, 43],
            60: [2, 43],
            61: [2, 43],
            62: [2, 43],
            63: [2, 43],
            64: [2, 43],
            65: [2, 43],
            66: [2, 43],
            67: [2, 43],
            68: [2, 43],
            69: [2, 43],
            74: [2, 43],
            77: [2, 43],
            78: [2, 43],
            92: [2, 43],
            96: [2, 43],
            98: [2, 43],
            99: [2, 43],
            101: [2, 43]
        }, {
            1: [2, 44],
            9: [2, 44],
            11: [2, 44],
            14: [2, 44],
            15: [2, 44],
            21: [2, 44],
            22: [2, 44],
            24: [2, 44],
            26: [2, 44],
            27: [2, 44],
            28: [2, 44],
            32: [2, 44],
            34: [2, 44],
            35: [2, 44],
            36: [2, 44],
            37: [2, 44],
            39: [2, 44],
            44: [2, 44],
            45: [2, 44],
            46: [2, 44],
            53: [2, 44],
            54: [2, 44],
            55: [2, 44],
            56: [2, 44],
            58: [2, 44],
            59: [2, 44],
            60: [2, 44],
            61: [2, 44],
            62: [2, 44],
            63: [2, 44],
            64: [2, 44],
            65: [2, 44],
            66: [2, 44],
            67: [2, 44],
            68: [2, 44],
            69: [2, 44],
            74: [2, 44],
            77: [2, 44],
            78: [2, 44],
            92: [2, 44],
            96: [2, 44],
            98: [2, 44],
            99: [2, 44],
            101: [2, 44]
        }, {
            9: [1, 213],
            22: [2, 132],
            24: [2, 132],
            44: [2, 132],
            45: [2, 132],
            54: [2, 132],
            59: [2, 132]
        }, {
            4: [1, 118],
            5: 115,
            7: [1, 119],
            8: [1, 116],
            10: 109,
            18: [1, 205],
            23: [1, 117],
            24: [2, 146],
            25: [1, 120],
            40: 214,
            42: 114,
            44: [2, 146],
            45: [2, 146],
            46: [1, 108],
            47: [1, 112],
            51: [1, 113],
            56: [1, 111],
            94: 110,
            95: 107
        }, {
            1: [2, 45],
            9: [2, 45],
            11: [2, 45],
            14: [2, 45],
            15: [2, 45],
            21: [2, 45],
            22: [2, 45],
            24: [2, 45],
            26: [2, 45],
            27: [2, 45],
            28: [2, 45],
            32: [2, 45],
            34: [2, 45],
            35: [2, 45],
            36: [2, 45],
            37: [2, 45],
            39: [2, 45],
            44: [2, 45],
            45: [2, 45],
            46: [2, 45],
            53: [2, 45],
            54: [2, 45],
            55: [2, 45],
            56: [2, 45],
            58: [2, 45],
            59: [2, 45],
            60: [2, 45],
            61: [2, 45],
            62: [2, 45],
            63: [2, 45],
            64: [2, 45],
            65: [2, 45],
            66: [2, 45],
            67: [2, 45],
            68: [2, 45],
            69: [2, 45],
            74: [2, 45],
            77: [2, 45],
            78: [2, 45],
            92: [2, 45],
            96: [2, 45],
            98: [2, 45],
            99: [2, 45],
            101: [2, 45]
        }, {
            1: [2, 46],
            9: [2, 46],
            11: [2, 46],
            14: [2, 46],
            15: [2, 46],
            21: [2, 46],
            22: [2, 46],
            24: [2, 46],
            26: [2, 46],
            27: [2, 46],
            28: [2, 46],
            32: [2, 46],
            34: [2, 46],
            35: [2, 46],
            36: [2, 46],
            37: [2, 46],
            39: [2, 46],
            44: [2, 46],
            45: [2, 46],
            46: [2, 46],
            53: [2, 46],
            54: [2, 46],
            55: [2, 46],
            56: [2, 46],
            58: [2, 46],
            59: [2, 46],
            60: [2, 46],
            61: [2, 46],
            62: [2, 46],
            63: [2, 46],
            64: [2, 46],
            65: [2, 46],
            66: [2, 46],
            67: [2, 46],
            68: [2, 46],
            69: [2, 46],
            74: [2, 46],
            77: [2, 46],
            78: [2, 46],
            92: [2, 46],
            96: [2, 46],
            98: [2, 46],
            99: [2, 46],
            101: [2, 46]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            17: 4,
            18: [1, 34],
            19: 7,
            23: [1, 35],
            25: [1, 36],
            27: [2, 57],
            31: [1, 8],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            45: [2, 57],
            46: [1, 6],
            47: [1, 10],
            48: 3,
            49: 5,
            51: [1, 9],
            52: [1, 11],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27],
            97: 130
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 216,
            23: [1, 35],
            25: [1, 36],
            27: [1, 215],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            17: 43,
            26: [1, 217],
            27: [2, 61],
            28: [1, 218],
            35: [1, 219],
            45: [2, 61],
            46: [1, 6],
            55: [1, 45],
            56: [1, 46],
            58: [1, 47],
            59: [1, 48],
            60: [1, 49],
            61: [1, 50],
            62: [1, 51],
            63: [1, 52],
            64: [1, 53],
            65: [1, 54],
            66: [1, 55],
            67: [1, 56],
            68: [1, 57],
            74: [1, 58]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 221,
            23: [1, 35],
            25: [1, 36],
            27: [1, 220],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            11: [1, 223],
            27: [1, 222]
        }, {
            27: [1, 224]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            12: 225,
            16: [1, 33],
            18: [1, 34],
            19: 61,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            32: [2, 47],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            43: 60,
            44: [2, 47],
            45: [2, 47],
            46: [2, 47],
            47: [1, 62],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 76,
            23: [1, 35],
            25: [1, 36],
            27: [1, 226],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            46: [1, 77],
            54: [1, 75],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            3: 74,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            23: [1, 35],
            25: [1, 36],
            27: [1, 227],
            38: [1, 37],
            39: [1, 65]
        }, {
            3: 228,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            23: [1, 35],
            25: [1, 36],
            38: [1, 37],
            39: [1, 65]
        }, {
            27: [1, 229]
        }, {
            17: 230,
            35: [1, 44],
            46: [1, 6],
            55: [1, 45],
            56: [1, 46],
            58: [1, 47],
            59: [1, 48],
            60: [1, 49],
            61: [1, 50],
            62: [1, 51],
            63: [1, 52],
            64: [1, 53],
            65: [1, 54],
            66: [1, 55],
            67: [1, 56],
            68: [1, 57],
            74: [1, 58]
        }, {
            17: 231,
            35: [1, 44],
            37: [1, 233],
            46: [1, 6],
            55: [1, 45],
            56: [1, 46],
            58: [1, 47],
            59: [1, 48],
            60: [1, 49],
            61: [1, 50],
            62: [1, 51],
            63: [1, 52],
            64: [1, 53],
            65: [1, 54],
            66: [1, 55],
            67: [1, 56],
            68: [1, 57],
            74: [1, 58],
            78: [1, 232]
        }, {
            9: [1, 71],
            11: [1, 72],
            15: [1, 73],
            21: [2, 71],
            22: [2, 71],
            24: [2, 71],
            34: [1, 68],
            35: [2, 71],
            37: [2, 71],
            39: [2, 71],
            45: [2, 71],
            46: [2, 71],
            53: [1, 66],
            54: [1, 67],
            55: [2, 71],
            56: [2, 71],
            58: [2, 71],
            59: [2, 71],
            60: [2, 71],
            61: [2, 71],
            62: [2, 71],
            63: [2, 71],
            64: [2, 71],
            65: [2, 71],
            66: [2, 71],
            67: [2, 71],
            68: [2, 71],
            69: [1, 69],
            74: [2, 71],
            77: [2, 71],
            78: [2, 71],
            92: [1, 70],
            98: [1, 234]
        }, {
            9: [2, 1],
            11: [2, 1],
            15: [2, 1],
            21: [2, 1],
            22: [2, 1],
            24: [2, 1],
            34: [2, 1],
            35: [2, 1],
            37: [2, 1],
            39: [2, 1],
            44: [1, 236],
            45: [2, 1],
            46: [2, 1],
            53: [2, 1],
            54: [2, 1],
            55: [2, 1],
            56: [2, 1],
            58: [2, 1],
            59: [2, 1],
            60: [2, 1],
            61: [2, 1],
            62: [2, 1],
            63: [2, 1],
            64: [2, 1],
            65: [2, 1],
            66: [2, 1],
            67: [2, 1],
            68: [2, 1],
            69: [2, 1],
            74: [2, 1],
            77: [2, 1],
            78: [2, 1],
            92: [2, 1],
            98: [2, 1],
            99: [1, 235],
            100: [1, 237]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 238,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            21: [2, 177],
            22: [2, 177],
            24: [2, 177],
            35: [1, 44],
            39: [2, 177],
            44: [1, 240],
            45: [2, 177],
            46: [2, 177],
            55: [1, 45],
            56: [1, 46],
            58: [1, 47],
            59: [1, 48],
            60: [1, 49],
            61: [1, 50],
            62: [1, 51],
            63: [1, 52],
            64: [1, 53],
            65: [1, 54],
            66: [1, 55],
            67: [1, 56],
            68: [1, 57],
            74: [1, 58],
            77: [2, 177],
            78: [1, 239]
        }, {
            1: [2, 59],
            22: [2, 59],
            27: [2, 59],
            45: [2, 59]
        }, {
            1: [2, 154],
            27: [2, 154],
            45: [1, 40]
        }, {
            1: [2, 67],
            9: [2, 67],
            11: [2, 67],
            14: [2, 67],
            15: [2, 67],
            21: [2, 67],
            22: [2, 67],
            24: [2, 67],
            26: [2, 67],
            27: [2, 67],
            28: [2, 67],
            32: [2, 67],
            34: [2, 67],
            35: [2, 67],
            36: [2, 67],
            37: [2, 67],
            39: [2, 67],
            44: [2, 67],
            45: [2, 67],
            46: [2, 67],
            53: [2, 67],
            54: [2, 67],
            55: [2, 67],
            56: [2, 67],
            58: [2, 67],
            59: [2, 67],
            60: [2, 67],
            61: [2, 67],
            62: [2, 67],
            63: [2, 67],
            64: [2, 67],
            65: [2, 67],
            66: [2, 67],
            67: [2, 67],
            68: [2, 67],
            69: [2, 67],
            74: [2, 67],
            77: [2, 67],
            78: [2, 67],
            84: [2, 67],
            85: [2, 67],
            87: [2, 67],
            88: [2, 67],
            92: [2, 67],
            98: [2, 67],
            99: [2, 67],
            101: [2, 67]
        }, {
            9: [1, 71],
            11: [1, 72],
            15: [1, 73],
            35: [1, 241]
        }, {
            1: [2, 74],
            14: [2, 74],
            21: [2, 74],
            22: [2, 74],
            24: [2, 74],
            26: [2, 74],
            27: [2, 74],
            28: [2, 74],
            32: [2, 74],
            35: [1, 44],
            36: [2, 74],
            37: [2, 74],
            39: [2, 74],
            44: [2, 74],
            45: [2, 74],
            46: [2, 74],
            55: [2, 74],
            56: [1, 46],
            58: [2, 74],
            59: [2, 74],
            60: [1, 49],
            61: [1, 50],
            62: [2, 74],
            63: [2, 74],
            64: [2, 74],
            65: [1, 54],
            66: [2, 74],
            67: [2, 74],
            68: [2, 74],
            74: [2, 74],
            77: [2, 74],
            78: [2, 74],
            101: [2, 74]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            12: 242,
            16: [1, 33],
            18: [1, 34],
            19: 61,
            22: [2, 47],
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            43: 60,
            44: [2, 47],
            45: [2, 47],
            46: [2, 47],
            47: [1, 62],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            1: [2, 85],
            14: [2, 85],
            21: [2, 85],
            22: [2, 85],
            24: [2, 85],
            26: [2, 85],
            27: [2, 85],
            28: [2, 85],
            32: [2, 85],
            35: [1, 44],
            36: [2, 85],
            37: [2, 85],
            39: [2, 85],
            44: [2, 85],
            45: [2, 85],
            46: [2, 85],
            55: [2, 85],
            56: [2, 85],
            58: [2, 85],
            59: [2, 85],
            60: [1, 49],
            61: [1, 50],
            62: [2, 85],
            63: [2, 85],
            64: [2, 85],
            65: [1, 54],
            66: [2, 85],
            67: [2, 85],
            68: [2, 85],
            74: [2, 85],
            77: [2, 85],
            78: [2, 85],
            101: [2, 85]
        }, {
            1: [2, 86],
            14: [2, 86],
            21: [2, 86],
            22: [2, 86],
            24: [2, 86],
            26: [2, 86],
            27: [2, 86],
            28: [2, 86],
            32: [2, 86],
            35: [1, 44],
            36: [2, 86],
            37: [2, 86],
            39: [2, 86],
            44: [2, 86],
            45: [2, 86],
            46: [2, 86],
            55: [1, 45],
            56: [1, 46],
            58: [1, 47],
            59: [2, 86],
            60: [1, 49],
            61: [1, 50],
            62: [1, 51],
            63: [2, 86],
            64: [1, 53],
            65: [1, 54],
            66: [1, 55],
            67: [2, 86],
            68: [2, 86],
            74: [2, 86],
            77: [2, 86],
            78: [2, 86],
            101: [2, 86]
        }, {
            1: [2, 87],
            14: [2, 87],
            21: [2, 87],
            22: [2, 87],
            24: [2, 87],
            26: [2, 87],
            27: [2, 87],
            28: [2, 87],
            32: [2, 87],
            35: [1, 44],
            36: [2, 87],
            37: [2, 87],
            39: [2, 87],
            44: [2, 87],
            45: [2, 87],
            46: [2, 87],
            55: [1, 45],
            56: [1, 46],
            58: [1, 47],
            59: [1, 48],
            60: [1, 49],
            61: [1, 50],
            62: [1, 51],
            63: [1, 52],
            64: [1, 53],
            65: [1, 54],
            66: [1, 55],
            67: [2, 87],
            68: [2, 87],
            74: [2, 87],
            77: [2, 87],
            78: [2, 87],
            101: [2, 87]
        }, {
            1: [2, 88],
            14: [2, 88],
            21: [2, 88],
            22: [2, 88],
            24: [2, 88],
            26: [2, 88],
            27: [2, 88],
            28: [2, 88],
            32: [2, 88],
            35: [1, 44],
            36: [2, 88],
            37: [2, 88],
            39: [2, 88],
            44: [2, 88],
            45: [2, 88],
            46: [2, 88],
            55: [2, 88],
            56: [2, 88],
            58: [2, 88],
            59: [2, 88],
            60: [2, 88],
            61: [1, 50],
            62: [2, 88],
            63: [2, 88],
            64: [2, 88],
            65: [1, 54],
            66: [2, 88],
            67: [2, 88],
            68: [2, 88],
            74: [2, 88],
            77: [2, 88],
            78: [2, 88],
            101: [2, 88]
        }, {
            1: [2, 89],
            14: [2, 89],
            21: [2, 89],
            22: [2, 89],
            24: [2, 89],
            26: [2, 89],
            27: [2, 89],
            28: [2, 89],
            32: [2, 89],
            35: [1, 44],
            36: [2, 89],
            37: [2, 89],
            39: [2, 89],
            44: [2, 89],
            45: [2, 89],
            46: [2, 89],
            55: [2, 89],
            56: [2, 89],
            58: [2, 89],
            59: [2, 89],
            60: [2, 89],
            61: [1, 50],
            62: [2, 89],
            63: [2, 89],
            64: [2, 89],
            65: [1, 54],
            66: [2, 89],
            67: [2, 89],
            68: [2, 89],
            74: [2, 89],
            77: [2, 89],
            78: [2, 89],
            101: [2, 89]
        }, {
            1: [2, 90],
            14: [2, 90],
            21: [2, 90],
            22: [2, 90],
            24: [2, 90],
            26: [2, 90],
            27: [2, 90],
            28: [2, 90],
            32: [2, 90],
            35: [1, 44],
            36: [2, 90],
            37: [2, 90],
            39: [2, 90],
            44: [2, 90],
            45: [2, 90],
            46: [2, 90],
            55: [2, 90],
            56: [1, 46],
            58: [2, 90],
            59: [2, 90],
            60: [1, 49],
            61: [1, 50],
            62: [2, 90],
            63: [2, 90],
            64: [2, 90],
            65: [1, 54],
            66: [2, 90],
            67: [2, 90],
            68: [2, 90],
            74: [2, 90],
            77: [2, 90],
            78: [2, 90],
            101: [2, 90]
        }, {
            1: [2, 91],
            14: [2, 91],
            21: [2, 91],
            22: [2, 91],
            24: [2, 91],
            26: [2, 91],
            27: [2, 91],
            28: [2, 91],
            32: [2, 91],
            35: [1, 44],
            36: [2, 91],
            37: [2, 91],
            39: [2, 91],
            44: [2, 91],
            45: [2, 91],
            46: [2, 91],
            55: [1, 45],
            56: [1, 46],
            58: [1, 47],
            59: [2, 91],
            60: [1, 49],
            61: [1, 50],
            62: [1, 51],
            63: [2, 91],
            64: [1, 53],
            65: [1, 54],
            66: [1, 55],
            67: [2, 91],
            68: [2, 91],
            74: [2, 91],
            77: [2, 91],
            78: [2, 91],
            101: [2, 91]
        }, {
            1: [2, 92],
            14: [2, 92],
            21: [2, 92],
            22: [2, 92],
            24: [2, 92],
            26: [2, 92],
            27: [2, 92],
            28: [2, 92],
            32: [2, 92],
            35: [1, 44],
            36: [2, 92],
            37: [2, 92],
            39: [2, 92],
            44: [2, 92],
            45: [2, 92],
            46: [2, 92],
            55: [1, 45],
            56: [1, 46],
            58: [2, 92],
            59: [2, 92],
            60: [1, 49],
            61: [1, 50],
            62: [1, 51],
            63: [2, 92],
            64: [1, 53],
            65: [1, 54],
            66: [2, 92],
            67: [2, 92],
            68: [2, 92],
            74: [2, 92],
            77: [2, 92],
            78: [2, 92],
            101: [2, 92]
        }, {
            1: [2, 93],
            14: [2, 93],
            21: [2, 93],
            22: [2, 93],
            24: [2, 93],
            26: [2, 93],
            27: [2, 93],
            28: [2, 93],
            32: [2, 93],
            35: [1, 44],
            36: [2, 93],
            37: [2, 93],
            39: [2, 93],
            44: [2, 93],
            45: [2, 93],
            46: [2, 93],
            55: [2, 93],
            56: [2, 93],
            58: [2, 93],
            59: [2, 93],
            60: [2, 93],
            61: [2, 93],
            62: [2, 93],
            63: [2, 93],
            64: [2, 93],
            65: [1, 54],
            66: [2, 93],
            67: [2, 93],
            68: [2, 93],
            74: [2, 93],
            77: [2, 93],
            78: [2, 93],
            101: [2, 93]
        }, {
            1: [2, 94],
            14: [2, 94],
            21: [2, 94],
            22: [2, 94],
            24: [2, 94],
            26: [2, 94],
            27: [2, 94],
            28: [2, 94],
            32: [2, 94],
            35: [1, 44],
            36: [2, 94],
            37: [2, 94],
            39: [2, 94],
            44: [2, 94],
            45: [2, 94],
            46: [2, 94],
            55: [1, 45],
            56: [1, 46],
            58: [2, 94],
            59: [2, 94],
            60: [1, 49],
            61: [1, 50],
            62: [1, 51],
            63: [2, 94],
            64: [1, 53],
            65: [1, 54],
            66: [2, 94],
            67: [2, 94],
            68: [2, 94],
            74: [2, 94],
            77: [2, 94],
            78: [2, 94],
            101: [2, 94]
        }, {
            1: [2, 95],
            14: [2, 95],
            21: [2, 95],
            22: [2, 95],
            24: [2, 95],
            26: [2, 95],
            27: [2, 95],
            28: [2, 95],
            32: [2, 95],
            35: [1, 44],
            36: [2, 95],
            37: [2, 95],
            39: [2, 95],
            44: [2, 95],
            45: [2, 95],
            46: [2, 95],
            55: [1, 45],
            56: [1, 46],
            58: [1, 47],
            59: [1, 48],
            60: [1, 49],
            61: [1, 50],
            62: [1, 51],
            63: [1, 52],
            64: [1, 53],
            65: [1, 54],
            66: [1, 55],
            67: [2, 95],
            68: [2, 95],
            74: [2, 95],
            77: [2, 95],
            78: [2, 95],
            101: [2, 95]
        }, {
            1: [2, 96],
            14: [2, 96],
            21: [2, 96],
            22: [2, 96],
            24: [2, 96],
            26: [2, 96],
            27: [2, 96],
            28: [2, 96],
            32: [2, 96],
            35: [1, 44],
            36: [2, 96],
            37: [2, 96],
            39: [2, 96],
            44: [2, 96],
            45: [2, 96],
            46: [2, 96],
            55: [1, 45],
            56: [1, 46],
            58: [1, 47],
            59: [1, 48],
            60: [1, 49],
            61: [1, 50],
            62: [1, 51],
            63: [1, 52],
            64: [1, 53],
            65: [1, 54],
            66: [1, 55],
            67: [1, 56],
            68: [1, 57],
            74: [2, 96],
            77: [2, 96],
            78: [2, 96],
            101: [2, 96]
        }, {
            1: [2, 101],
            14: [2, 101],
            21: [2, 101],
            22: [2, 101],
            24: [2, 101],
            26: [2, 101],
            27: [2, 101],
            28: [2, 101],
            32: [2, 101],
            35: [1, 44],
            36: [2, 101],
            37: [2, 101],
            39: [2, 101],
            44: [2, 101],
            45: [2, 101],
            46: [2, 101],
            55: [1, 45],
            56: [1, 46],
            58: [1, 47],
            59: [1, 48],
            60: [1, 49],
            61: [1, 50],
            62: [1, 51],
            63: [1, 52],
            64: [1, 53],
            65: [1, 54],
            66: [1, 55],
            67: [1, 56],
            68: [1, 57],
            74: [2, 101],
            77: [2, 101],
            78: [2, 101],
            101: [2, 101]
        }, {
            32: [1, 243],
            45: [1, 244],
            46: [1, 245]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            14: [2, 56],
            16: [1, 33],
            18: [1, 34],
            19: 61,
            21: [2, 56],
            22: [2, 56],
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            32: [2, 56],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            43: 246,
            45: [2, 56],
            46: [2, 56],
            47: [1, 62],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            14: [2, 53],
            21: [2, 53],
            22: [2, 53],
            32: [2, 53],
            35: [1, 44],
            44: [2, 53],
            45: [2, 53],
            46: [2, 53],
            55: [1, 45],
            56: [1, 46],
            58: [1, 47],
            59: [1, 48],
            60: [1, 49],
            61: [1, 50],
            62: [1, 51],
            63: [1, 52],
            64: [1, 53],
            65: [1, 54],
            66: [1, 55],
            67: [1, 56],
            68: [1, 57],
            74: [1, 58]
        }, {
            13: 247,
            32: [2, 55],
            44: [1, 157],
            45: [2, 55],
            46: [2, 55]
        }, {
            17: 231,
            35: [1, 44],
            46: [1, 6],
            55: [1, 45],
            56: [1, 46],
            58: [1, 47],
            59: [1, 48],
            60: [1, 49],
            61: [1, 50],
            62: [1, 51],
            63: [1, 52],
            64: [1, 53],
            65: [1, 54],
            66: [1, 55],
            67: [1, 56],
            68: [1, 57],
            74: [1, 58]
        }, {
            1: [2, 68],
            14: [2, 68],
            21: [2, 68],
            22: [2, 68],
            24: [2, 68],
            26: [2, 68],
            27: [2, 68],
            28: [2, 68],
            32: [2, 68],
            35: [1, 44],
            36: [2, 68],
            37: [2, 68],
            39: [2, 68],
            44: [2, 68],
            45: [2, 68],
            46: [2, 68],
            55: [2, 68],
            56: [1, 46],
            58: [2, 68],
            59: [2, 68],
            60: [1, 49],
            61: [1, 50],
            62: [2, 68],
            63: [2, 68],
            64: [2, 68],
            65: [1, 54],
            66: [2, 68],
            67: [2, 68],
            68: [2, 68],
            74: [2, 68],
            77: [2, 68],
            78: [2, 68],
            101: [2, 68]
        }, {
            1: [2, 69],
            14: [2, 69],
            21: [2, 69],
            22: [2, 69],
            24: [2, 69],
            26: [2, 69],
            27: [2, 69],
            28: [2, 69],
            32: [2, 69],
            35: [2, 69],
            36: [2, 69],
            37: [2, 69],
            39: [2, 69],
            44: [2, 69],
            45: [2, 69],
            46: [2, 69],
            55: [2, 69],
            56: [2, 69],
            58: [2, 69],
            59: [2, 69],
            60: [2, 69],
            61: [2, 69],
            62: [2, 69],
            63: [2, 69],
            64: [2, 69],
            65: [2, 69],
            66: [2, 69],
            67: [2, 69],
            68: [2, 69],
            74: [2, 69],
            77: [2, 69],
            78: [2, 69],
            101: [2, 69]
        }, {
            1: [2, 72],
            14: [2, 72],
            21: [2, 72],
            22: [2, 72],
            24: [2, 72],
            26: [2, 72],
            27: [2, 72],
            28: [2, 72],
            32: [2, 72],
            35: [1, 44],
            36: [2, 72],
            37: [2, 72],
            39: [2, 72],
            44: [2, 72],
            45: [2, 72],
            46: [2, 72],
            55: [1, 45],
            56: [1, 46],
            58: [1, 47],
            59: [1, 48],
            60: [1, 49],
            61: [1, 50],
            62: [1, 51],
            63: [1, 52],
            64: [1, 53],
            65: [1, 54],
            66: [1, 55],
            67: [1, 56],
            68: [2, 72],
            74: [2, 72],
            77: [2, 72],
            78: [2, 72],
            101: [2, 72]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            12: 248,
            16: [1, 33],
            18: [1, 34],
            19: 61,
            22: [2, 47],
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            43: 60,
            44: [2, 47],
            45: [2, 47],
            46: [2, 47],
            47: [1, 62],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            1: [2, 125],
            14: [2, 125],
            21: [2, 125],
            22: [2, 125],
            24: [2, 125],
            26: [2, 125],
            27: [2, 125],
            28: [2, 125],
            32: [2, 125],
            35: [1, 44],
            36: [2, 125],
            37: [2, 125],
            39: [2, 125],
            44: [2, 125],
            45: [2, 125],
            46: [2, 125],
            55: [1, 45],
            56: [1, 46],
            58: [1, 47],
            59: [1, 48],
            60: [1, 49],
            61: [1, 50],
            62: [1, 51],
            63: [1, 52],
            64: [1, 53],
            65: [1, 54],
            66: [1, 55],
            67: [1, 56],
            68: [2, 125],
            74: [2, 125],
            77: [2, 125],
            78: [2, 125],
            101: [2, 125]
        }, {
            1: [2, 6],
            9: [2, 6],
            11: [2, 6],
            14: [2, 6],
            15: [2, 6],
            21: [2, 6],
            22: [2, 6],
            24: [2, 6],
            26: [2, 6],
            27: [2, 6],
            28: [2, 6],
            32: [2, 6],
            34: [2, 6],
            35: [2, 6],
            36: [2, 6],
            37: [2, 6],
            39: [2, 6],
            44: [2, 6],
            45: [2, 6],
            46: [2, 6],
            53: [2, 6],
            54: [2, 6],
            55: [2, 6],
            56: [2, 6],
            58: [2, 6],
            59: [2, 6],
            60: [2, 6],
            61: [2, 6],
            62: [2, 6],
            63: [2, 6],
            64: [2, 6],
            65: [2, 6],
            66: [2, 6],
            67: [2, 6],
            68: [2, 6],
            69: [2, 6],
            74: [2, 6],
            77: [2, 6],
            78: [2, 6],
            92: [2, 6],
            98: [2, 6],
            99: [2, 6],
            101: [2, 6]
        }, {
            1: [2, 7],
            9: [2, 7],
            11: [2, 7],
            14: [2, 7],
            15: [2, 7],
            21: [2, 7],
            22: [2, 7],
            24: [2, 7],
            26: [2, 7],
            27: [2, 7],
            28: [2, 7],
            32: [2, 7],
            34: [2, 7],
            35: [2, 7],
            36: [2, 7],
            37: [2, 7],
            39: [2, 7],
            44: [2, 7],
            45: [2, 7],
            46: [2, 7],
            53: [2, 7],
            54: [2, 7],
            55: [2, 7],
            56: [2, 7],
            58: [2, 7],
            59: [2, 7],
            60: [2, 7],
            61: [2, 7],
            62: [2, 7],
            63: [2, 7],
            64: [2, 7],
            65: [2, 7],
            66: [2, 7],
            67: [2, 7],
            68: [2, 7],
            69: [2, 7],
            74: [2, 7],
            77: [2, 7],
            78: [2, 7],
            92: [2, 7],
            98: [2, 7],
            99: [2, 7],
            101: [2, 7]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            12: 104,
            16: [1, 33],
            18: [1, 34],
            19: 249,
            21: [2, 47],
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            36: [1, 250],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            43: 60,
            44: [2, 47],
            45: [2, 47],
            46: [2, 47],
            47: [1, 62],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            4: [1, 118],
            5: 115,
            7: [1, 119],
            8: [1, 116],
            10: 109,
            18: [1, 205],
            23: [1, 117],
            24: [2, 146],
            25: [1, 120],
            40: 106,
            42: 114,
            44: [2, 146],
            45: [2, 146],
            46: [1, 108],
            47: [1, 112],
            51: [1, 113],
            56: [1, 111],
            94: 110,
            95: 107
        }, {
            13: 251,
            14: [2, 55],
            44: [1, 157],
            45: [2, 55],
            46: [2, 55]
        }, {
            1: [2, 78],
            9: [1, 71],
            11: [1, 72],
            14: [2, 78],
            15: [1, 73],
            21: [2, 78],
            22: [2, 78],
            24: [2, 78],
            26: [2, 78],
            27: [2, 78],
            28: [2, 78],
            32: [2, 78],
            35: [2, 78],
            36: [2, 78],
            37: [2, 78],
            39: [2, 78],
            44: [2, 78],
            45: [2, 78],
            46: [2, 78],
            55: [2, 78],
            56: [2, 78],
            58: [2, 78],
            59: [2, 78],
            60: [2, 78],
            61: [2, 78],
            62: [2, 78],
            63: [2, 78],
            64: [2, 78],
            65: [2, 78],
            66: [2, 78],
            67: [2, 78],
            68: [2, 78],
            74: [2, 78],
            77: [2, 78],
            78: [2, 78],
            101: [2, 78]
        }, {
            13: 252,
            22: [2, 55],
            44: [1, 157],
            45: [2, 55],
            46: [2, 55]
        }, {
            1: [2, 79],
            9: [1, 71],
            11: [1, 72],
            14: [2, 79],
            15: [1, 73],
            21: [2, 79],
            22: [2, 79],
            24: [2, 79],
            26: [2, 79],
            27: [2, 79],
            28: [2, 79],
            32: [2, 79],
            35: [2, 79],
            36: [2, 79],
            37: [2, 79],
            39: [2, 79],
            44: [2, 79],
            45: [2, 79],
            46: [2, 79],
            55: [2, 79],
            56: [2, 79],
            58: [2, 79],
            59: [2, 79],
            60: [2, 79],
            61: [2, 79],
            62: [2, 79],
            63: [2, 79],
            64: [2, 79],
            65: [2, 79],
            66: [2, 79],
            67: [2, 79],
            68: [2, 79],
            74: [2, 79],
            77: [2, 79],
            78: [2, 79],
            101: [2, 79]
        }, {
            1: [2, 80],
            9: [1, 71],
            11: [1, 72],
            14: [2, 80],
            15: [1, 73],
            21: [2, 80],
            22: [2, 80],
            24: [2, 80],
            26: [2, 80],
            27: [2, 80],
            28: [2, 80],
            32: [2, 80],
            35: [2, 80],
            36: [2, 80],
            37: [2, 80],
            39: [2, 80],
            44: [2, 80],
            45: [2, 80],
            46: [2, 80],
            55: [2, 80],
            56: [2, 80],
            58: [2, 80],
            59: [2, 80],
            60: [2, 80],
            61: [2, 80],
            62: [2, 80],
            63: [2, 80],
            64: [2, 80],
            65: [2, 80],
            66: [2, 80],
            67: [2, 80],
            68: [2, 80],
            74: [2, 80],
            77: [2, 80],
            78: [2, 80],
            101: [2, 80]
        }, {
            13: 253,
            14: [2, 55],
            44: [1, 157],
            45: [2, 55],
            46: [2, 55]
        }, {
            1: [2, 155],
            14: [2, 155],
            21: [2, 155],
            22: [2, 155],
            24: [2, 155],
            26: [2, 155],
            27: [2, 155],
            28: [2, 155],
            32: [2, 155],
            35: [2, 155],
            36: [2, 155],
            37: [2, 155],
            39: [2, 155],
            44: [2, 155],
            45: [2, 155],
            46: [2, 155],
            55: [2, 155],
            56: [2, 155],
            58: [2, 155],
            59: [2, 155],
            60: [2, 155],
            61: [2, 155],
            62: [2, 155],
            63: [2, 155],
            64: [2, 155],
            65: [2, 155],
            66: [2, 155],
            67: [2, 155],
            68: [2, 155],
            73: 254,
            74: [2, 155],
            77: [2, 155],
            78: [2, 155],
            85: [1, 178],
            101: [2, 155]
        }, {
            1: [2, 102],
            14: [2, 102],
            21: [2, 102],
            22: [2, 102],
            24: [2, 102],
            26: [2, 102],
            27: [2, 102],
            28: [2, 102],
            32: [2, 102],
            35: [2, 102],
            36: [2, 102],
            37: [2, 102],
            39: [2, 102],
            44: [2, 102],
            45: [2, 102],
            46: [2, 102],
            55: [2, 102],
            56: [2, 102],
            58: [2, 102],
            59: [2, 102],
            60: [2, 102],
            61: [2, 102],
            62: [2, 102],
            63: [2, 102],
            64: [2, 102],
            65: [2, 102],
            66: [2, 102],
            67: [2, 102],
            68: [2, 102],
            74: [2, 102],
            77: [2, 102],
            78: [2, 102],
            101: [2, 102]
        }, {
            17: 255,
            46: [1, 6],
            72: [1, 256]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 257,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            13: 258,
            22: [2, 55],
            44: [1, 157],
            45: [2, 55],
            46: [2, 55]
        }, {
            1: [2, 110],
            14: [2, 110],
            21: [2, 110],
            22: [2, 110],
            24: [2, 110],
            26: [2, 110],
            27: [2, 110],
            28: [2, 110],
            32: [2, 110],
            35: [2, 110],
            36: [2, 110],
            37: [2, 110],
            39: [2, 110],
            44: [2, 110],
            45: [2, 110],
            46: [2, 110],
            55: [2, 110],
            56: [2, 110],
            58: [2, 110],
            59: [2, 110],
            60: [2, 110],
            61: [2, 110],
            62: [2, 110],
            63: [2, 110],
            64: [2, 110],
            65: [2, 110],
            66: [2, 110],
            67: [2, 110],
            68: [2, 110],
            74: [2, 110],
            77: [2, 110],
            78: [1, 185],
            84: [1, 259],
            85: [1, 260],
            101: [2, 110]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 261,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            17: 262,
            46: [1, 6]
        }, {
            17: 263,
            46: [1, 6]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 92,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            82: 264,
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            17: 265,
            44: [1, 182],
            46: [1, 6]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            17: 266,
            18: [1, 34],
            19: 61,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            43: 267,
            46: [1, 6],
            47: [1, 62],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            17: 268,
            46: [1, 6]
        }, {
            46: [2, 190],
            91: 269,
            101: [1, 191]
        }, {
            17: 270,
            46: [1, 6]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 92,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            82: 271,
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            35: [1, 44],
            46: [2, 187],
            55: [1, 45],
            56: [1, 46],
            58: [1, 47],
            59: [1, 48],
            60: [1, 49],
            61: [1, 50],
            62: [1, 51],
            63: [1, 52],
            64: [1, 53],
            65: [1, 54],
            66: [1, 55],
            67: [1, 56],
            68: [1, 57],
            74: [1, 58],
            101: [2, 187]
        }, {
            13: 272,
            22: [2, 55],
            44: [1, 157],
            45: [2, 55],
            46: [2, 55]
        }, {
            13: 273,
            14: [2, 55],
            44: [1, 157],
            45: [2, 55],
            46: [2, 55]
        }, {
            21: [1, 274],
            22: [1, 275],
            39: [1, 198],
            45: [1, 277],
            46: [1, 278],
            75: 276,
            77: [1, 39]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 279,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            21: [2, 181],
            22: [2, 181],
            24: [2, 181],
            39: [2, 181],
            45: [2, 181],
            46: [2, 181],
            77: [2, 181]
        }, {
            3: 133,
            4: [1, 134],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 280,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27],
            100: [1, 135]
        }, {
            21: [1, 281],
            35: [1, 44],
            37: [1, 282],
            55: [1, 45],
            56: [1, 46],
            58: [1, 47],
            59: [1, 48],
            60: [1, 49],
            61: [1, 50],
            62: [1, 51],
            63: [1, 52],
            64: [1, 53],
            65: [1, 54],
            66: [1, 55],
            67: [1, 56],
            68: [1, 57],
            74: [1, 58]
        }, {
            21: [1, 283],
            45: [1, 244],
            46: [1, 245]
        }, {
            13: 284,
            21: [2, 55],
            44: [1, 157],
            45: [2, 55],
            46: [2, 55]
        }, {
            24: [1, 285],
            45: [1, 286]
        }, {
            4: [1, 118],
            5: 115,
            7: [1, 119],
            8: [1, 116],
            10: 109,
            18: [1, 205],
            22: [2, 56],
            23: [1, 117],
            24: [2, 56],
            25: [1, 120],
            42: 114,
            45: [2, 56],
            47: [1, 112],
            51: [1, 113],
            56: [1, 111],
            94: 110,
            95: 287
        }, {
            13: 288,
            22: [2, 55],
            44: [1, 203],
            45: [2, 55]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            12: 289,
            16: [1, 33],
            18: [1, 34],
            19: 61,
            21: [2, 47],
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            43: 60,
            44: [2, 47],
            45: [2, 47],
            46: [2, 47],
            47: [1, 62],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 290,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            46: [1, 291],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            4: [1, 118],
            7: [1, 119],
            42: 292
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 293,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 294,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            22: [2, 142],
            24: [2, 142],
            44: [2, 142],
            45: [2, 142]
        }, {
            22: [2, 143],
            24: [2, 143],
            44: [2, 143],
            45: [2, 143]
        }, {
            22: [2, 144],
            24: [2, 144],
            35: [1, 44],
            44: [2, 144],
            45: [2, 144],
            55: [1, 45],
            56: [1, 46],
            58: [1, 47],
            59: [1, 48],
            60: [1, 49],
            61: [1, 50],
            62: [1, 51],
            63: [1, 52],
            64: [1, 53],
            65: [1, 54],
            66: [1, 55],
            67: [1, 56],
            68: [1, 57],
            74: [1, 58]
        }, {
            4: [1, 118],
            7: [1, 119],
            42: 295
        }, {
            13: 296,
            24: [2, 55],
            44: [1, 203],
            45: [2, 55]
        }, {
            1: [2, 14],
            9: [2, 14],
            11: [2, 14],
            14: [2, 14],
            15: [2, 14],
            21: [2, 14],
            22: [2, 14],
            24: [2, 14],
            26: [2, 14],
            27: [2, 14],
            28: [2, 14],
            32: [2, 14],
            34: [2, 14],
            35: [2, 14],
            36: [2, 14],
            37: [2, 14],
            39: [2, 14],
            44: [2, 14],
            45: [2, 14],
            46: [2, 14],
            53: [2, 14],
            54: [2, 14],
            55: [2, 14],
            56: [2, 14],
            58: [2, 14],
            59: [2, 14],
            60: [2, 14],
            61: [2, 14],
            62: [2, 14],
            63: [2, 14],
            64: [2, 14],
            65: [2, 14],
            66: [2, 14],
            67: [2, 14],
            68: [2, 14],
            69: [2, 14],
            74: [2, 14],
            77: [2, 14],
            78: [2, 14],
            92: [2, 14],
            98: [2, 14],
            99: [2, 14],
            101: [2, 14]
        }, {
            27: [1, 297],
            35: [1, 44],
            55: [1, 45],
            56: [1, 46],
            58: [1, 47],
            59: [1, 48],
            60: [1, 49],
            61: [1, 50],
            62: [1, 51],
            63: [1, 52],
            64: [1, 53],
            65: [1, 54],
            66: [1, 55],
            67: [1, 56],
            68: [1, 57],
            74: [1, 58]
        }, {
            27: [1, 298]
        }, {
            27: [1, 299]
        }, {
            3: 300,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            23: [1, 35],
            25: [1, 36],
            38: [1, 37],
            39: [1, 65]
        }, {
            1: [2, 17],
            9: [2, 17],
            11: [2, 17],
            14: [2, 17],
            15: [2, 17],
            21: [2, 17],
            22: [2, 17],
            24: [2, 17],
            26: [2, 17],
            27: [2, 17],
            28: [2, 17],
            32: [2, 17],
            34: [2, 17],
            35: [2, 17],
            36: [2, 17],
            37: [2, 17],
            39: [2, 17],
            44: [2, 17],
            45: [2, 17],
            46: [2, 17],
            53: [2, 17],
            54: [2, 17],
            55: [2, 17],
            56: [2, 17],
            58: [2, 17],
            59: [2, 17],
            60: [2, 17],
            61: [2, 17],
            62: [2, 17],
            63: [2, 17],
            64: [2, 17],
            65: [2, 17],
            66: [2, 17],
            67: [2, 17],
            68: [2, 17],
            69: [2, 17],
            74: [2, 17],
            77: [2, 17],
            78: [2, 17],
            92: [2, 17],
            98: [2, 17],
            99: [2, 17],
            101: [2, 17]
        }, {
            27: [1, 301],
            35: [1, 44],
            55: [1, 45],
            56: [1, 46],
            58: [1, 47],
            59: [1, 48],
            60: [1, 49],
            61: [1, 50],
            62: [1, 51],
            63: [1, 52],
            64: [1, 53],
            65: [1, 54],
            66: [1, 55],
            67: [1, 56],
            68: [1, 57],
            74: [1, 58]
        }, {
            1: [2, 20],
            9: [2, 20],
            11: [2, 20],
            14: [2, 20],
            15: [2, 20],
            21: [2, 20],
            22: [2, 20],
            24: [2, 20],
            26: [2, 20],
            27: [2, 20],
            28: [2, 20],
            32: [2, 20],
            34: [2, 20],
            35: [2, 20],
            36: [2, 20],
            37: [2, 20],
            39: [2, 20],
            44: [2, 20],
            45: [2, 20],
            46: [2, 20],
            53: [2, 20],
            54: [2, 20],
            55: [2, 20],
            56: [2, 20],
            58: [2, 20],
            59: [2, 20],
            60: [2, 20],
            61: [2, 20],
            62: [2, 20],
            63: [2, 20],
            64: [2, 20],
            65: [2, 20],
            66: [2, 20],
            67: [2, 20],
            68: [2, 20],
            69: [2, 20],
            74: [2, 20],
            77: [2, 20],
            78: [2, 20],
            92: [2, 20],
            98: [2, 20],
            99: [2, 20],
            101: [2, 20]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            12: 302,
            14: [2, 47],
            16: [1, 33],
            18: [1, 34],
            19: 61,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            43: 60,
            44: [2, 47],
            45: [2, 47],
            46: [2, 47],
            47: [1, 62],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            1: [2, 22],
            9: [2, 22],
            11: [2, 22],
            14: [2, 22],
            15: [2, 22],
            21: [2, 22],
            22: [2, 22],
            24: [2, 22],
            26: [2, 22],
            27: [2, 22],
            28: [2, 22],
            32: [2, 22],
            34: [2, 22],
            35: [2, 22],
            36: [2, 22],
            37: [2, 22],
            39: [2, 22],
            44: [2, 22],
            45: [2, 22],
            46: [2, 22],
            53: [2, 22],
            54: [2, 22],
            55: [2, 22],
            56: [2, 22],
            58: [2, 22],
            59: [2, 22],
            60: [2, 22],
            61: [2, 22],
            62: [2, 22],
            63: [2, 22],
            64: [2, 22],
            65: [2, 22],
            66: [2, 22],
            67: [2, 22],
            68: [2, 22],
            69: [2, 22],
            74: [2, 22],
            77: [2, 22],
            78: [2, 22],
            92: [2, 22],
            98: [2, 22],
            99: [2, 22],
            101: [2, 22]
        }, {
            13: 303,
            32: [2, 55],
            44: [1, 157],
            45: [2, 55],
            46: [2, 55]
        }, {
            1: [2, 24],
            9: [2, 24],
            11: [2, 24],
            14: [2, 24],
            15: [2, 24],
            21: [2, 24],
            22: [2, 24],
            24: [2, 24],
            26: [2, 24],
            27: [2, 24],
            28: [2, 24],
            32: [2, 24],
            34: [2, 24],
            35: [2, 24],
            36: [2, 24],
            37: [2, 24],
            39: [2, 24],
            44: [2, 24],
            45: [2, 24],
            46: [2, 24],
            53: [2, 24],
            54: [2, 24],
            55: [2, 24],
            56: [2, 24],
            58: [2, 24],
            59: [2, 24],
            60: [2, 24],
            61: [2, 24],
            62: [2, 24],
            63: [2, 24],
            64: [2, 24],
            65: [2, 24],
            66: [2, 24],
            67: [2, 24],
            68: [2, 24],
            69: [2, 24],
            74: [2, 24],
            77: [2, 24],
            78: [2, 24],
            92: [2, 24],
            98: [2, 24],
            99: [2, 24],
            101: [2, 24]
        }, {
            1: [2, 25],
            9: [2, 25],
            11: [2, 25],
            14: [2, 25],
            15: [2, 25],
            21: [2, 25],
            22: [2, 25],
            24: [2, 25],
            26: [2, 25],
            27: [2, 25],
            28: [2, 25],
            32: [2, 25],
            34: [2, 25],
            35: [2, 25],
            36: [2, 25],
            37: [2, 25],
            39: [2, 25],
            44: [2, 25],
            45: [2, 25],
            46: [2, 25],
            53: [2, 25],
            54: [2, 25],
            55: [2, 25],
            56: [2, 25],
            58: [2, 25],
            59: [2, 25],
            60: [2, 25],
            61: [2, 25],
            62: [2, 25],
            63: [2, 25],
            64: [2, 25],
            65: [2, 25],
            66: [2, 25],
            67: [2, 25],
            68: [2, 25],
            69: [2, 25],
            74: [2, 25],
            77: [2, 25],
            78: [2, 25],
            92: [2, 25],
            98: [2, 25],
            99: [2, 25],
            101: [2, 25]
        }, {
            9: [1, 71],
            11: [1, 72],
            15: [1, 73],
            35: [1, 304]
        }, {
            1: [2, 151],
            9: [2, 151],
            11: [2, 151],
            14: [2, 151],
            15: [2, 151],
            21: [2, 151],
            22: [2, 151],
            24: [2, 151],
            26: [2, 151],
            27: [2, 151],
            28: [2, 151],
            32: [2, 151],
            34: [2, 151],
            35: [2, 151],
            36: [2, 151],
            37: [2, 151],
            39: [2, 151],
            44: [2, 151],
            45: [2, 151],
            46: [2, 151],
            53: [2, 151],
            54: [2, 151],
            55: [2, 151],
            56: [2, 151],
            58: [2, 151],
            59: [2, 151],
            60: [2, 151],
            61: [2, 151],
            62: [2, 151],
            63: [2, 151],
            64: [2, 151],
            65: [2, 151],
            66: [2, 151],
            67: [2, 151],
            68: [2, 151],
            69: [2, 151],
            74: [2, 151],
            77: [2, 151],
            78: [2, 151],
            92: [2, 151],
            96: [2, 151],
            98: [2, 151],
            99: [2, 151],
            101: [2, 151]
        }, {
            1: [2, 37],
            9: [2, 37],
            11: [2, 37],
            14: [2, 37],
            15: [2, 37],
            21: [2, 37],
            22: [2, 37],
            24: [2, 37],
            26: [2, 37],
            27: [2, 37],
            28: [2, 37],
            32: [2, 37],
            34: [2, 37],
            35: [2, 37],
            36: [2, 37],
            37: [2, 37],
            39: [2, 37],
            44: [2, 37],
            45: [2, 37],
            46: [2, 37],
            53: [2, 37],
            54: [2, 37],
            55: [2, 37],
            56: [2, 37],
            58: [2, 37],
            59: [2, 37],
            60: [2, 37],
            61: [2, 37],
            62: [2, 37],
            63: [2, 37],
            64: [2, 37],
            65: [2, 37],
            66: [2, 37],
            67: [2, 37],
            68: [2, 37],
            69: [2, 37],
            74: [2, 37],
            77: [2, 37],
            78: [2, 37],
            92: [2, 37],
            98: [2, 37],
            99: [2, 37],
            101: [2, 37]
        }, {
            1: [2, 38],
            9: [2, 38],
            11: [2, 38],
            14: [2, 38],
            15: [2, 38],
            21: [2, 38],
            22: [2, 38],
            24: [2, 38],
            26: [2, 38],
            27: [2, 38],
            28: [2, 38],
            32: [2, 38],
            34: [2, 38],
            35: [2, 38],
            36: [2, 38],
            37: [2, 38],
            39: [2, 38],
            44: [2, 38],
            45: [2, 38],
            46: [2, 38],
            53: [2, 38],
            54: [2, 38],
            55: [2, 38],
            56: [2, 38],
            58: [2, 38],
            59: [2, 38],
            60: [2, 38],
            61: [2, 38],
            62: [2, 38],
            63: [2, 38],
            64: [2, 38],
            65: [2, 38],
            66: [2, 38],
            67: [2, 38],
            68: [2, 38],
            69: [2, 38],
            74: [2, 38],
            77: [2, 38],
            78: [2, 38],
            92: [2, 38],
            98: [2, 38],
            99: [2, 38],
            101: [2, 38]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 305,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 306,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 307,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 308,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            3: 309,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            23: [1, 35],
            25: [1, 36],
            38: [1, 37],
            39: [1, 65]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 310,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            35: [1, 44],
            36: [1, 311],
            55: [1, 45],
            56: [1, 46],
            58: [1, 47],
            59: [1, 48],
            60: [1, 49],
            61: [1, 50],
            62: [1, 51],
            63: [1, 52],
            64: [1, 53],
            65: [1, 54],
            66: [1, 55],
            67: [1, 56],
            68: [1, 57],
            74: [1, 58]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 312,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 313,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 314,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            13: 315,
            22: [2, 55],
            44: [1, 157],
            45: [2, 55],
            46: [2, 55]
        }, {
            50: [1, 316],
            70: [1, 317]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 61,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            43: 318,
            47: [1, 62],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            12: 319,
            16: [1, 33],
            18: [1, 34],
            19: 61,
            22: [2, 47],
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            43: 60,
            44: [2, 47],
            45: [2, 47],
            46: [2, 47],
            47: [1, 62],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            14: [2, 49],
            21: [2, 49],
            22: [2, 49],
            32: [2, 49],
            44: [2, 49],
            45: [2, 49],
            46: [2, 49]
        }, {
            32: [1, 320],
            45: [1, 244],
            46: [1, 245]
        }, {
            13: 321,
            22: [2, 55],
            44: [1, 157],
            45: [2, 55],
            46: [2, 55]
        }, {
            21: [2, 52],
            35: [1, 44],
            36: [1, 322],
            44: [2, 52],
            45: [2, 52],
            46: [2, 52],
            55: [1, 45],
            56: [1, 46],
            58: [1, 47],
            59: [1, 48],
            60: [1, 49],
            61: [1, 50],
            62: [1, 51],
            63: [1, 52],
            64: [1, 53],
            65: [1, 54],
            66: [1, 55],
            67: [1, 56],
            68: [1, 57],
            74: [1, 58]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 323,
            21: [1, 324],
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            14: [1, 325],
            45: [1, 244],
            46: [1, 245]
        }, {
            22: [1, 326],
            45: [1, 244],
            46: [1, 245]
        }, {
            14: [1, 327],
            45: [1, 244],
            46: [1, 245]
        }, {
            1: [2, 100],
            14: [2, 100],
            21: [2, 100],
            22: [2, 100],
            24: [2, 100],
            26: [2, 100],
            27: [2, 100],
            28: [2, 100],
            32: [2, 100],
            35: [2, 100],
            36: [2, 100],
            37: [2, 100],
            39: [2, 100],
            44: [2, 100],
            45: [2, 100],
            46: [2, 100],
            55: [2, 100],
            56: [2, 100],
            58: [2, 100],
            59: [2, 100],
            60: [2, 100],
            61: [2, 100],
            62: [2, 100],
            63: [2, 100],
            64: [2, 100],
            65: [2, 100],
            66: [2, 100],
            67: [2, 100],
            68: [2, 100],
            74: [2, 100],
            77: [2, 100],
            78: [2, 100],
            101: [2, 100]
        }, {
            1: [2, 156],
            14: [2, 156],
            21: [2, 156],
            22: [2, 156],
            24: [2, 156],
            26: [2, 156],
            27: [2, 156],
            28: [2, 156],
            32: [2, 156],
            35: [2, 156],
            36: [2, 156],
            37: [2, 156],
            39: [2, 156],
            44: [2, 156],
            45: [2, 156],
            46: [2, 156],
            55: [2, 156],
            56: [2, 156],
            58: [2, 156],
            59: [2, 156],
            60: [2, 156],
            61: [2, 156],
            62: [2, 156],
            63: [2, 156],
            64: [2, 156],
            65: [2, 156],
            66: [2, 156],
            67: [2, 156],
            68: [2, 156],
            74: [2, 156],
            77: [2, 156],
            78: [2, 156],
            101: [2, 156]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 328,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            1: [2, 103],
            14: [2, 103],
            21: [2, 103],
            22: [2, 103],
            24: [2, 103],
            26: [2, 103],
            27: [2, 103],
            28: [2, 103],
            32: [2, 103],
            35: [1, 44],
            36: [2, 103],
            37: [2, 103],
            39: [2, 103],
            44: [2, 103],
            45: [2, 103],
            46: [2, 103],
            55: [1, 45],
            56: [1, 46],
            58: [1, 47],
            59: [1, 48],
            60: [1, 49],
            61: [1, 50],
            62: [1, 51],
            63: [1, 52],
            64: [1, 53],
            65: [1, 54],
            66: [1, 55],
            67: [1, 56],
            68: [1, 57],
            74: [2, 103],
            77: [2, 103],
            78: [1, 329],
            101: [2, 103]
        }, {
            22: [1, 330],
            45: [1, 244],
            46: [1, 245]
        }, {
            17: 331,
            46: [1, 6]
        }, {
            17: 332,
            46: [1, 6]
        }, {
            35: [1, 44],
            44: [2, 130],
            46: [2, 130],
            55: [1, 45],
            56: [1, 46],
            58: [1, 47],
            59: [1, 48],
            60: [1, 49],
            61: [1, 50],
            62: [1, 51],
            63: [1, 52],
            64: [1, 53],
            65: [1, 54],
            66: [1, 55],
            67: [1, 56],
            68: [1, 57],
            74: [1, 58],
            78: [2, 130]
        }, {
            1: [2, 114],
            14: [2, 114],
            21: [2, 114],
            22: [2, 114],
            24: [2, 114],
            26: [2, 114],
            27: [2, 114],
            28: [2, 114],
            32: [2, 114],
            35: [2, 114],
            36: [2, 114],
            37: [2, 114],
            39: [2, 114],
            44: [2, 114],
            45: [2, 114],
            46: [2, 114],
            55: [2, 114],
            56: [2, 114],
            58: [2, 114],
            59: [2, 114],
            60: [2, 114],
            61: [2, 114],
            62: [2, 114],
            63: [2, 114],
            64: [2, 114],
            65: [2, 114],
            66: [2, 114],
            67: [2, 114],
            68: [2, 114],
            74: [2, 114],
            77: [2, 114],
            78: [2, 114],
            101: [2, 114]
        }, {
            1: [2, 115],
            14: [2, 115],
            21: [2, 115],
            22: [2, 115],
            24: [2, 115],
            26: [2, 115],
            27: [2, 115],
            28: [2, 115],
            32: [2, 115],
            35: [2, 115],
            36: [2, 115],
            37: [2, 115],
            39: [2, 115],
            44: [2, 115],
            45: [2, 115],
            46: [2, 115],
            55: [2, 115],
            56: [2, 115],
            58: [2, 115],
            59: [2, 115],
            60: [2, 115],
            61: [2, 115],
            62: [2, 115],
            63: [2, 115],
            64: [2, 115],
            65: [2, 115],
            66: [2, 115],
            67: [2, 115],
            68: [2, 115],
            74: [2, 115],
            77: [2, 115],
            78: [2, 115],
            101: [2, 115]
        }, {
            17: 333,
            44: [1, 182],
            46: [1, 6]
        }, {
            1: [2, 185],
            14: [2, 185],
            21: [2, 185],
            22: [2, 185],
            24: [2, 185],
            26: [2, 185],
            27: [2, 185],
            28: [2, 185],
            32: [2, 185],
            35: [2, 185],
            36: [2, 185],
            37: [2, 185],
            39: [2, 185],
            44: [2, 185],
            45: [2, 185],
            46: [2, 185],
            55: [2, 185],
            56: [2, 185],
            58: [2, 185],
            59: [2, 185],
            60: [2, 185],
            61: [2, 185],
            62: [2, 185],
            63: [2, 185],
            64: [2, 185],
            65: [2, 185],
            66: [2, 185],
            67: [2, 185],
            68: [2, 185],
            74: [2, 185],
            77: [2, 185],
            78: [2, 185],
            84: [2, 185],
            85: [2, 185],
            101: [2, 185]
        }, {
            1: [2, 118],
            14: [2, 118],
            21: [2, 118],
            22: [2, 118],
            24: [2, 118],
            26: [2, 118],
            27: [2, 118],
            28: [2, 118],
            32: [2, 118],
            35: [2, 118],
            36: [2, 118],
            37: [2, 118],
            39: [2, 118],
            44: [2, 118],
            45: [2, 118],
            46: [2, 118],
            55: [2, 118],
            56: [2, 118],
            58: [2, 118],
            59: [2, 118],
            60: [2, 118],
            61: [2, 118],
            62: [2, 118],
            63: [2, 118],
            64: [2, 118],
            65: [2, 118],
            66: [2, 118],
            67: [2, 118],
            68: [2, 118],
            74: [2, 118],
            77: [2, 118],
            78: [2, 118],
            88: [1, 334],
            101: [2, 118]
        }, {
            17: 335,
            46: [1, 6]
        }, {
            1: [2, 122],
            14: [2, 122],
            21: [2, 122],
            22: [2, 122],
            24: [2, 122],
            26: [2, 122],
            27: [2, 122],
            28: [2, 122],
            32: [2, 122],
            35: [2, 122],
            36: [2, 122],
            37: [2, 122],
            39: [2, 122],
            44: [2, 122],
            45: [2, 122],
            46: [2, 122],
            55: [2, 122],
            56: [2, 122],
            58: [2, 122],
            59: [2, 122],
            60: [2, 122],
            61: [2, 122],
            62: [2, 122],
            63: [2, 122],
            64: [2, 122],
            65: [2, 122],
            66: [2, 122],
            67: [2, 122],
            68: [2, 122],
            74: [2, 122],
            77: [2, 122],
            78: [2, 122],
            101: [2, 122]
        }, {
            17: 336,
            46: [1, 6]
        }, {
            1: [2, 124],
            14: [2, 124],
            21: [2, 124],
            22: [2, 124],
            24: [2, 124],
            26: [2, 124],
            27: [2, 124],
            28: [2, 124],
            32: [2, 124],
            35: [2, 124],
            36: [2, 124],
            37: [2, 124],
            39: [2, 124],
            44: [2, 124],
            45: [2, 124],
            46: [2, 124],
            55: [2, 124],
            56: [2, 124],
            58: [2, 124],
            59: [2, 124],
            60: [2, 124],
            61: [2, 124],
            62: [2, 124],
            63: [2, 124],
            64: [2, 124],
            65: [2, 124],
            66: [2, 124],
            67: [2, 124],
            68: [2, 124],
            74: [2, 124],
            77: [2, 124],
            78: [2, 124],
            101: [2, 124]
        }, {
            44: [1, 182],
            46: [2, 189]
        }, {
            22: [1, 337],
            45: [1, 244],
            46: [1, 245]
        }, {
            14: [1, 338],
            45: [1, 244],
            46: [1, 245]
        }, {
            1: [2, 11],
            9: [2, 11],
            11: [2, 11],
            14: [2, 11],
            15: [2, 11],
            21: [2, 11],
            22: [2, 11],
            24: [2, 11],
            26: [2, 11],
            27: [2, 11],
            28: [2, 11],
            32: [2, 11],
            34: [2, 11],
            35: [2, 11],
            36: [2, 11],
            37: [2, 11],
            39: [2, 11],
            44: [2, 11],
            45: [2, 11],
            46: [2, 11],
            53: [2, 11],
            54: [2, 11],
            55: [2, 11],
            56: [2, 11],
            58: [2, 11],
            59: [2, 11],
            60: [2, 11],
            61: [2, 11],
            62: [2, 11],
            63: [2, 11],
            64: [2, 11],
            65: [2, 11],
            66: [2, 11],
            67: [2, 11],
            68: [2, 11],
            69: [2, 11],
            74: [2, 11],
            77: [2, 11],
            78: [2, 11],
            92: [2, 11],
            98: [2, 11],
            99: [2, 11],
            101: [2, 11]
        }, {
            21: [1, 339]
        }, {
            21: [2, 182],
            22: [2, 182],
            24: [2, 182],
            39: [2, 182],
            45: [2, 182],
            46: [2, 182],
            77: [2, 182]
        }, {
            39: [1, 198],
            75: 340,
            77: [1, 39]
        }, {
            39: [1, 198],
            75: 341,
            77: [1, 39]
        }, {
            21: [1, 342],
            35: [1, 44],
            37: [1, 343],
            55: [1, 45],
            56: [1, 46],
            58: [1, 47],
            59: [1, 48],
            60: [1, 49],
            61: [1, 50],
            62: [1, 51],
            63: [1, 52],
            64: [1, 53],
            65: [1, 54],
            66: [1, 55],
            67: [1, 56],
            68: [1, 57],
            74: [1, 58]
        }, {
            21: [2, 162],
            22: [2, 162],
            24: [2, 162],
            35: [1, 44],
            37: [1, 233],
            39: [2, 162],
            45: [2, 162],
            46: [2, 162],
            55: [1, 45],
            56: [1, 46],
            58: [1, 47],
            59: [1, 48],
            60: [1, 49],
            61: [1, 50],
            62: [1, 51],
            63: [1, 52],
            64: [1, 53],
            65: [1, 54],
            66: [1, 55],
            67: [1, 56],
            68: [1, 57],
            74: [1, 58],
            77: [2, 162],
            78: [1, 232]
        }, {
            1: [2, 31],
            9: [2, 31],
            11: [2, 31],
            14: [2, 31],
            15: [2, 31],
            21: [2, 31],
            22: [2, 31],
            24: [2, 31],
            26: [2, 31],
            27: [2, 31],
            28: [2, 31],
            32: [2, 31],
            34: [2, 31],
            35: [2, 31],
            36: [2, 31],
            37: [2, 31],
            39: [2, 31],
            44: [2, 31],
            45: [2, 31],
            46: [2, 31],
            53: [2, 31],
            54: [2, 31],
            55: [2, 31],
            56: [2, 31],
            58: [2, 31],
            59: [2, 31],
            60: [2, 31],
            61: [2, 31],
            62: [2, 31],
            63: [2, 31],
            64: [2, 31],
            65: [2, 31],
            66: [2, 31],
            67: [2, 31],
            68: [2, 31],
            69: [2, 31],
            74: [2, 31],
            77: [2, 31],
            78: [2, 31],
            92: [2, 31],
            98: [2, 31],
            99: [2, 31],
            101: [2, 31]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 344,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            1: [2, 39],
            9: [2, 39],
            11: [2, 39],
            14: [2, 39],
            15: [2, 39],
            21: [2, 39],
            22: [2, 39],
            24: [2, 39],
            26: [2, 39],
            27: [2, 39],
            28: [2, 39],
            32: [2, 39],
            34: [2, 39],
            35: [2, 39],
            36: [2, 39],
            37: [2, 39],
            39: [2, 39],
            41: [1, 345],
            44: [2, 39],
            45: [2, 39],
            46: [2, 39],
            53: [2, 39],
            54: [2, 39],
            55: [2, 39],
            56: [2, 39],
            58: [2, 39],
            59: [2, 39],
            60: [2, 39],
            61: [2, 39],
            62: [2, 39],
            63: [2, 39],
            64: [2, 39],
            65: [2, 39],
            66: [2, 39],
            67: [2, 39],
            68: [2, 39],
            69: [2, 39],
            74: [2, 39],
            77: [2, 39],
            78: [2, 39],
            92: [2, 39],
            98: [2, 39],
            99: [2, 39],
            101: [2, 39]
        }, {
            21: [1, 346],
            45: [1, 244],
            46: [1, 245]
        }, {
            1: [2, 40],
            9: [2, 40],
            11: [2, 40],
            14: [2, 40],
            15: [2, 40],
            21: [2, 40],
            22: [2, 40],
            24: [2, 40],
            26: [2, 40],
            27: [2, 40],
            28: [2, 40],
            32: [2, 40],
            34: [2, 40],
            35: [2, 40],
            36: [2, 40],
            37: [2, 40],
            39: [2, 40],
            41: [1, 347],
            44: [2, 40],
            45: [2, 40],
            46: [2, 40],
            53: [2, 40],
            54: [2, 40],
            55: [2, 40],
            56: [2, 40],
            58: [2, 40],
            59: [2, 40],
            60: [2, 40],
            61: [2, 40],
            62: [2, 40],
            63: [2, 40],
            64: [2, 40],
            65: [2, 40],
            66: [2, 40],
            67: [2, 40],
            68: [2, 40],
            69: [2, 40],
            74: [2, 40],
            77: [2, 40],
            78: [2, 40],
            92: [2, 40],
            98: [2, 40],
            99: [2, 40],
            101: [2, 40]
        }, {
            4: [1, 118],
            5: 115,
            7: [1, 119],
            8: [1, 116],
            10: 109,
            18: [1, 205],
            23: [1, 117],
            25: [1, 120],
            42: 114,
            47: [1, 112],
            51: [1, 113],
            56: [1, 111],
            94: 110,
            95: 348
        }, {
            22: [2, 148],
            24: [2, 148],
            44: [2, 148],
            45: [2, 148]
        }, {
            22: [1, 349],
            45: [1, 286]
        }, {
            13: 350,
            21: [2, 55],
            44: [1, 157],
            45: [2, 55],
            46: [2, 55]
        }, {
            22: [2, 137],
            24: [2, 137],
            35: [1, 44],
            44: [2, 137],
            45: [2, 137],
            55: [1, 45],
            56: [1, 46],
            58: [1, 47],
            59: [1, 48],
            60: [1, 49],
            61: [1, 50],
            62: [1, 51],
            63: [1, 52],
            64: [1, 53],
            65: [1, 54],
            66: [1, 55],
            67: [1, 56],
            68: [1, 57],
            74: [1, 58]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            12: 351,
            16: [1, 33],
            18: [1, 34],
            19: 61,
            22: [2, 47],
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            43: 60,
            44: [2, 47],
            45: [2, 47],
            46: [2, 47],
            47: [1, 62],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            22: [2, 133],
            24: [2, 133],
            44: [2, 133],
            45: [2, 133],
            54: [2, 133],
            59: [2, 133]
        }, {
            22: [2, 140],
            24: [2, 140],
            35: [1, 44],
            44: [2, 140],
            45: [2, 140],
            55: [1, 45],
            56: [1, 46],
            58: [1, 47],
            59: [1, 48],
            60: [1, 49],
            61: [1, 50],
            62: [1, 51],
            63: [1, 52],
            64: [1, 53],
            65: [1, 54],
            66: [1, 55],
            67: [1, 56],
            68: [1, 57],
            74: [1, 58]
        }, {
            22: [2, 141],
            24: [2, 141],
            35: [1, 44],
            44: [2, 141],
            45: [2, 141],
            55: [1, 45],
            56: [1, 46],
            58: [1, 47],
            59: [1, 48],
            60: [1, 49],
            61: [1, 50],
            62: [1, 51],
            63: [1, 52],
            64: [1, 53],
            65: [1, 54],
            66: [1, 55],
            67: [1, 56],
            68: [1, 57],
            74: [1, 58]
        }, {
            22: [2, 134],
            24: [2, 134],
            44: [2, 134],
            45: [2, 134],
            54: [2, 134],
            59: [2, 134]
        }, {
            24: [1, 352],
            45: [1, 286]
        }, {
            1: [2, 15],
            9: [2, 15],
            11: [2, 15],
            14: [2, 15],
            15: [2, 15],
            21: [2, 15],
            22: [2, 15],
            24: [2, 15],
            26: [2, 15],
            27: [2, 15],
            28: [2, 15],
            32: [2, 15],
            34: [2, 15],
            35: [2, 15],
            36: [2, 15],
            37: [2, 15],
            39: [2, 15],
            44: [2, 15],
            45: [2, 15],
            46: [2, 15],
            53: [2, 15],
            54: [2, 15],
            55: [2, 15],
            56: [2, 15],
            58: [2, 15],
            59: [2, 15],
            60: [2, 15],
            61: [2, 15],
            62: [2, 15],
            63: [2, 15],
            64: [2, 15],
            65: [2, 15],
            66: [2, 15],
            67: [2, 15],
            68: [2, 15],
            69: [2, 15],
            74: [2, 15],
            77: [2, 15],
            78: [2, 15],
            92: [2, 15],
            98: [2, 15],
            99: [2, 15],
            101: [2, 15]
        }, {
            1: [2, 16],
            9: [2, 16],
            11: [2, 16],
            14: [2, 16],
            15: [2, 16],
            21: [2, 16],
            22: [2, 16],
            24: [2, 16],
            26: [2, 16],
            27: [2, 16],
            28: [2, 16],
            32: [2, 16],
            34: [2, 16],
            35: [2, 16],
            36: [2, 16],
            37: [2, 16],
            39: [2, 16],
            44: [2, 16],
            45: [2, 16],
            46: [2, 16],
            53: [2, 16],
            54: [2, 16],
            55: [2, 16],
            56: [2, 16],
            58: [2, 16],
            59: [2, 16],
            60: [2, 16],
            61: [2, 16],
            62: [2, 16],
            63: [2, 16],
            64: [2, 16],
            65: [2, 16],
            66: [2, 16],
            67: [2, 16],
            68: [2, 16],
            69: [2, 16],
            74: [2, 16],
            77: [2, 16],
            78: [2, 16],
            92: [2, 16],
            98: [2, 16],
            99: [2, 16],
            101: [2, 16]
        }, {
            1: [2, 19],
            9: [2, 19],
            11: [2, 19],
            14: [2, 19],
            15: [2, 19],
            21: [2, 19],
            22: [2, 19],
            24: [2, 19],
            26: [2, 19],
            27: [2, 19],
            28: [2, 19],
            32: [2, 19],
            34: [2, 19],
            35: [2, 19],
            36: [2, 19],
            37: [2, 19],
            39: [2, 19],
            44: [2, 19],
            45: [2, 19],
            46: [2, 19],
            53: [2, 19],
            54: [2, 19],
            55: [2, 19],
            56: [2, 19],
            58: [2, 19],
            59: [2, 19],
            60: [2, 19],
            61: [2, 19],
            62: [2, 19],
            63: [2, 19],
            64: [2, 19],
            65: [2, 19],
            66: [2, 19],
            67: [2, 19],
            68: [2, 19],
            69: [2, 19],
            74: [2, 19],
            77: [2, 19],
            78: [2, 19],
            92: [2, 19],
            98: [2, 19],
            99: [2, 19],
            101: [2, 19]
        }, {
            9: [1, 71],
            11: [1, 72],
            15: [1, 73],
            35: [1, 353]
        }, {
            1: [2, 18],
            9: [2, 18],
            11: [2, 18],
            14: [2, 18],
            15: [2, 18],
            21: [2, 18],
            22: [2, 18],
            24: [2, 18],
            26: [2, 18],
            27: [2, 18],
            28: [2, 18],
            32: [2, 18],
            34: [2, 18],
            35: [2, 18],
            36: [2, 18],
            37: [2, 18],
            39: [2, 18],
            44: [2, 18],
            45: [2, 18],
            46: [2, 18],
            53: [2, 18],
            54: [2, 18],
            55: [2, 18],
            56: [2, 18],
            58: [2, 18],
            59: [2, 18],
            60: [2, 18],
            61: [2, 18],
            62: [2, 18],
            63: [2, 18],
            64: [2, 18],
            65: [2, 18],
            66: [2, 18],
            67: [2, 18],
            68: [2, 18],
            69: [2, 18],
            74: [2, 18],
            77: [2, 18],
            78: [2, 18],
            92: [2, 18],
            98: [2, 18],
            99: [2, 18],
            101: [2, 18]
        }, {
            13: 354,
            14: [2, 55],
            44: [1, 157],
            45: [2, 55],
            46: [2, 55]
        }, {
            32: [1, 355],
            45: [1, 244],
            46: [1, 245]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 357,
            23: [1, 35],
            25: [1, 36],
            27: [1, 356],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            21: [2, 163],
            22: [2, 163],
            24: [2, 163],
            35: [1, 44],
            39: [2, 163],
            45: [2, 163],
            46: [2, 163],
            55: [1, 45],
            56: [1, 46],
            58: [1, 47],
            59: [1, 48],
            60: [1, 49],
            61: [1, 50],
            62: [1, 51],
            63: [1, 52],
            64: [1, 53],
            65: [1, 54],
            66: [1, 55],
            67: [1, 56],
            68: [1, 57],
            74: [1, 58],
            77: [2, 163]
        }, {
            21: [2, 164],
            22: [2, 164],
            24: [2, 164],
            35: [1, 44],
            39: [2, 164],
            45: [2, 164],
            46: [2, 164],
            55: [1, 45],
            56: [1, 46],
            58: [1, 47],
            59: [1, 48],
            60: [1, 49],
            61: [1, 50],
            62: [1, 51],
            63: [1, 52],
            64: [1, 53],
            65: [1, 54],
            66: [1, 55],
            67: [1, 56],
            68: [1, 57],
            74: [1, 58],
            77: [2, 164],
            78: [1, 358]
        }, {
            21: [2, 158],
            22: [2, 158],
            24: [2, 158],
            35: [1, 44],
            37: [1, 360],
            39: [2, 158],
            45: [2, 158],
            46: [2, 158],
            55: [1, 45],
            56: [1, 46],
            58: [1, 47],
            59: [1, 48],
            60: [1, 49],
            61: [1, 50],
            62: [1, 51],
            63: [1, 52],
            64: [1, 53],
            65: [1, 54],
            66: [1, 55],
            67: [1, 56],
            68: [1, 57],
            74: [1, 58],
            77: [2, 158],
            78: [1, 359]
        }, {
            21: [2, 166],
            22: [2, 166],
            24: [2, 166],
            35: [1, 44],
            39: [2, 166],
            45: [2, 166],
            46: [2, 166],
            55: [1, 45],
            56: [1, 46],
            58: [1, 47],
            59: [1, 48],
            60: [1, 49],
            61: [1, 50],
            62: [1, 51],
            63: [1, 52],
            64: [1, 53],
            65: [1, 54],
            66: [1, 55],
            67: [1, 56],
            68: [1, 57],
            74: [1, 58],
            77: [2, 166],
            78: [1, 361]
        }, {
            9: [1, 71],
            11: [1, 72],
            15: [1, 73],
            99: [1, 362]
        }, {
            35: [1, 44],
            36: [1, 363],
            55: [1, 45],
            56: [1, 46],
            58: [1, 47],
            59: [1, 48],
            60: [1, 49],
            61: [1, 50],
            62: [1, 51],
            63: [1, 52],
            64: [1, 53],
            65: [1, 54],
            66: [1, 55],
            67: [1, 56],
            68: [1, 57],
            74: [1, 58]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 364,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            21: [2, 178],
            22: [2, 178],
            24: [2, 178],
            35: [1, 44],
            39: [2, 178],
            45: [2, 178],
            46: [2, 178],
            55: [1, 45],
            56: [1, 46],
            58: [1, 47],
            59: [1, 48],
            60: [1, 49],
            61: [1, 50],
            62: [1, 51],
            63: [1, 52],
            64: [1, 53],
            65: [1, 54],
            66: [1, 55],
            67: [1, 56],
            68: [1, 57],
            74: [1, 58],
            77: [2, 178]
        }, {
            21: [2, 179],
            22: [2, 179],
            24: [2, 179],
            35: [1, 44],
            39: [2, 179],
            45: [2, 179],
            46: [2, 179],
            55: [1, 45],
            56: [1, 46],
            58: [1, 47],
            59: [1, 48],
            60: [1, 49],
            61: [1, 50],
            62: [1, 51],
            63: [1, 52],
            64: [1, 53],
            65: [1, 54],
            66: [1, 55],
            67: [1, 56],
            68: [1, 57],
            74: [1, 58],
            77: [2, 179],
            78: [1, 365]
        }, {
            1: [2, 70],
            14: [2, 70],
            21: [2, 70],
            22: [2, 70],
            24: [2, 70],
            26: [2, 70],
            27: [2, 70],
            28: [2, 70],
            32: [2, 70],
            35: [2, 70],
            36: [2, 70],
            37: [2, 70],
            39: [2, 70],
            44: [2, 70],
            45: [2, 70],
            46: [2, 70],
            55: [2, 70],
            56: [2, 70],
            58: [2, 70],
            59: [2, 70],
            60: [2, 70],
            61: [2, 70],
            62: [2, 70],
            63: [2, 70],
            64: [2, 70],
            65: [2, 70],
            66: [2, 70],
            67: [2, 70],
            68: [2, 70],
            74: [2, 70],
            77: [2, 70],
            78: [2, 70],
            101: [2, 70]
        }, {
            22: [1, 366],
            45: [1, 244],
            46: [1, 245]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 367,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            17: 368,
            46: [1, 6]
        }, {
            14: [2, 50],
            21: [2, 50],
            22: [2, 50],
            32: [2, 50],
            44: [2, 50],
            45: [2, 50],
            46: [2, 50]
        }, {
            13: 369,
            22: [2, 55],
            44: [1, 157],
            45: [2, 55],
            46: [2, 55]
        }, {
            70: [1, 317]
        }, {
            22: [1, 370],
            45: [1, 244],
            46: [1, 245]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 371,
            21: [1, 372],
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            21: [1, 373],
            35: [1, 44],
            55: [1, 45],
            56: [1, 46],
            58: [1, 47],
            59: [1, 48],
            60: [1, 49],
            61: [1, 50],
            62: [1, 51],
            63: [1, 52],
            64: [1, 53],
            65: [1, 54],
            66: [1, 55],
            67: [1, 56],
            68: [1, 57],
            74: [1, 58]
        }, {
            1: [2, 36],
            9: [2, 36],
            11: [2, 36],
            14: [2, 36],
            15: [2, 36],
            21: [2, 36],
            22: [2, 36],
            24: [2, 36],
            26: [2, 36],
            27: [2, 36],
            28: [2, 36],
            32: [2, 36],
            34: [2, 36],
            35: [2, 36],
            36: [2, 36],
            37: [2, 36],
            39: [2, 36],
            44: [2, 36],
            45: [2, 36],
            46: [2, 36],
            53: [2, 36],
            54: [2, 36],
            55: [2, 36],
            56: [2, 36],
            58: [2, 36],
            59: [2, 36],
            60: [2, 36],
            61: [2, 36],
            62: [2, 36],
            63: [2, 36],
            64: [2, 36],
            65: [2, 36],
            66: [2, 36],
            67: [2, 36],
            68: [2, 36],
            69: [2, 36],
            74: [2, 36],
            77: [2, 36],
            78: [2, 36],
            92: [2, 36],
            98: [2, 36],
            99: [2, 36],
            101: [2, 36]
        }, {
            1: [2, 8],
            9: [2, 8],
            11: [2, 8],
            14: [2, 8],
            15: [2, 8],
            21: [2, 8],
            22: [2, 8],
            24: [2, 8],
            26: [2, 8],
            27: [2, 8],
            28: [2, 8],
            32: [2, 8],
            34: [2, 8],
            35: [2, 8],
            36: [2, 8],
            37: [2, 8],
            39: [2, 8],
            44: [2, 8],
            45: [2, 8],
            46: [2, 8],
            53: [2, 8],
            54: [2, 8],
            55: [2, 8],
            56: [2, 8],
            58: [2, 8],
            59: [2, 8],
            60: [2, 8],
            61: [2, 8],
            62: [2, 8],
            63: [2, 8],
            64: [2, 8],
            65: [2, 8],
            66: [2, 8],
            67: [2, 8],
            68: [2, 8],
            69: [2, 8],
            74: [2, 8],
            77: [2, 8],
            78: [2, 8],
            92: [2, 8],
            98: [2, 8],
            99: [2, 8],
            101: [2, 8]
        }, {
            1: [2, 84],
            14: [2, 84],
            21: [2, 84],
            22: [2, 84],
            24: [2, 84],
            26: [2, 84],
            27: [2, 84],
            28: [2, 84],
            32: [2, 84],
            35: [2, 84],
            36: [2, 84],
            37: [2, 84],
            39: [2, 84],
            44: [2, 84],
            45: [2, 84],
            46: [2, 84],
            55: [2, 84],
            56: [2, 84],
            58: [2, 84],
            59: [2, 84],
            60: [2, 84],
            61: [2, 84],
            62: [2, 84],
            63: [2, 84],
            64: [2, 84],
            65: [2, 84],
            66: [2, 84],
            67: [2, 84],
            68: [2, 84],
            74: [2, 84],
            77: [2, 84],
            78: [2, 84],
            101: [2, 84]
        }, {
            17: 374,
            46: [1, 6]
        }, {
            17: 375,
            35: [1, 44],
            46: [1, 6],
            55: [1, 45],
            56: [1, 46],
            58: [1, 47],
            59: [1, 48],
            60: [1, 49],
            61: [1, 50],
            62: [1, 51],
            63: [1, 52],
            64: [1, 53],
            65: [1, 54],
            66: [1, 55],
            67: [1, 56],
            68: [1, 57],
            74: [1, 58]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 376,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            1: [2, 106],
            14: [2, 106],
            21: [2, 106],
            22: [2, 106],
            24: [2, 106],
            26: [2, 106],
            27: [2, 106],
            28: [2, 106],
            32: [2, 106],
            35: [2, 106],
            36: [2, 106],
            37: [2, 106],
            39: [2, 106],
            44: [2, 106],
            45: [2, 106],
            46: [2, 106],
            55: [2, 106],
            56: [2, 106],
            58: [2, 106],
            59: [2, 106],
            60: [2, 106],
            61: [2, 106],
            62: [2, 106],
            63: [2, 106],
            64: [2, 106],
            65: [2, 106],
            66: [2, 106],
            67: [2, 106],
            68: [2, 106],
            74: [2, 106],
            77: [2, 106],
            78: [2, 106],
            101: [2, 106]
        }, {
            1: [2, 111],
            14: [2, 111],
            21: [2, 111],
            22: [2, 111],
            24: [2, 111],
            26: [2, 111],
            27: [2, 111],
            28: [2, 111],
            32: [2, 111],
            35: [2, 111],
            36: [2, 111],
            37: [2, 111],
            39: [2, 111],
            44: [2, 111],
            45: [2, 111],
            46: [2, 111],
            55: [2, 111],
            56: [2, 111],
            58: [2, 111],
            59: [2, 111],
            60: [2, 111],
            61: [2, 111],
            62: [2, 111],
            63: [2, 111],
            64: [2, 111],
            65: [2, 111],
            66: [2, 111],
            67: [2, 111],
            68: [2, 111],
            74: [2, 111],
            77: [2, 111],
            78: [2, 111],
            101: [2, 111]
        }, {
            1: [2, 112],
            14: [2, 112],
            21: [2, 112],
            22: [2, 112],
            24: [2, 112],
            26: [2, 112],
            27: [2, 112],
            28: [2, 112],
            32: [2, 112],
            35: [2, 112],
            36: [2, 112],
            37: [2, 112],
            39: [2, 112],
            44: [2, 112],
            45: [2, 112],
            46: [2, 112],
            55: [2, 112],
            56: [2, 112],
            58: [2, 112],
            59: [2, 112],
            60: [2, 112],
            61: [2, 112],
            62: [2, 112],
            63: [2, 112],
            64: [2, 112],
            65: [2, 112],
            66: [2, 112],
            67: [2, 112],
            68: [2, 112],
            74: [2, 112],
            77: [2, 112],
            78: [2, 112],
            101: [2, 112]
        }, {
            1: [2, 186],
            14: [2, 186],
            21: [2, 186],
            22: [2, 186],
            24: [2, 186],
            26: [2, 186],
            27: [2, 186],
            28: [2, 186],
            32: [2, 186],
            35: [2, 186],
            36: [2, 186],
            37: [2, 186],
            39: [2, 186],
            44: [2, 186],
            45: [2, 186],
            46: [2, 186],
            55: [2, 186],
            56: [2, 186],
            58: [2, 186],
            59: [2, 186],
            60: [2, 186],
            61: [2, 186],
            62: [2, 186],
            63: [2, 186],
            64: [2, 186],
            65: [2, 186],
            66: [2, 186],
            67: [2, 186],
            68: [2, 186],
            74: [2, 186],
            77: [2, 186],
            78: [2, 186],
            84: [2, 186],
            85: [2, 186],
            101: [2, 186]
        }, {
            17: 377,
            46: [1, 6]
        }, {
            1: [2, 120],
            14: [2, 120],
            21: [2, 120],
            22: [2, 120],
            24: [2, 120],
            26: [2, 120],
            27: [2, 120],
            28: [2, 120],
            32: [2, 120],
            35: [2, 120],
            36: [2, 120],
            37: [2, 120],
            39: [2, 120],
            44: [2, 120],
            45: [2, 120],
            46: [2, 120],
            55: [2, 120],
            56: [2, 120],
            58: [2, 120],
            59: [2, 120],
            60: [2, 120],
            61: [2, 120],
            62: [2, 120],
            63: [2, 120],
            64: [2, 120],
            65: [2, 120],
            66: [2, 120],
            67: [2, 120],
            68: [2, 120],
            74: [2, 120],
            77: [2, 120],
            78: [2, 120],
            88: [1, 378],
            101: [2, 120]
        }, {
            1: [2, 123],
            14: [2, 123],
            21: [2, 123],
            22: [2, 123],
            24: [2, 123],
            26: [2, 123],
            27: [2, 123],
            28: [2, 123],
            32: [2, 123],
            35: [2, 123],
            36: [2, 123],
            37: [2, 123],
            39: [2, 123],
            44: [2, 123],
            45: [2, 123],
            46: [2, 123],
            55: [2, 123],
            56: [2, 123],
            58: [2, 123],
            59: [2, 123],
            60: [2, 123],
            61: [2, 123],
            62: [2, 123],
            63: [2, 123],
            64: [2, 123],
            65: [2, 123],
            66: [2, 123],
            67: [2, 123],
            68: [2, 123],
            74: [2, 123],
            77: [2, 123],
            78: [2, 123],
            101: [2, 123]
        }, {
            1: [2, 128],
            14: [2, 128],
            21: [2, 128],
            22: [2, 128],
            24: [2, 128],
            26: [2, 128],
            27: [2, 128],
            28: [2, 128],
            32: [2, 128],
            35: [2, 128],
            36: [2, 128],
            37: [2, 128],
            39: [2, 128],
            44: [2, 128],
            45: [2, 128],
            46: [2, 128],
            55: [2, 128],
            56: [2, 128],
            58: [2, 128],
            59: [2, 128],
            60: [2, 128],
            61: [2, 128],
            62: [2, 128],
            63: [2, 128],
            64: [2, 128],
            65: [2, 128],
            66: [2, 128],
            67: [2, 128],
            68: [2, 128],
            74: [2, 128],
            77: [2, 128],
            78: [2, 128],
            101: [2, 128]
        }, {
            17: 379,
            46: [1, 6]
        }, {
            1: [2, 12],
            9: [2, 12],
            11: [2, 12],
            14: [2, 12],
            15: [2, 12],
            21: [2, 12],
            22: [2, 12],
            24: [2, 12],
            26: [2, 12],
            27: [2, 12],
            28: [2, 12],
            32: [2, 12],
            34: [2, 12],
            35: [2, 12],
            36: [2, 12],
            37: [2, 12],
            39: [2, 12],
            44: [2, 12],
            45: [2, 12],
            46: [2, 12],
            53: [2, 12],
            54: [2, 12],
            55: [2, 12],
            56: [2, 12],
            58: [2, 12],
            59: [2, 12],
            60: [2, 12],
            61: [2, 12],
            62: [2, 12],
            63: [2, 12],
            64: [2, 12],
            65: [2, 12],
            66: [2, 12],
            67: [2, 12],
            68: [2, 12],
            69: [2, 12],
            74: [2, 12],
            77: [2, 12],
            78: [2, 12],
            92: [2, 12],
            98: [2, 12],
            99: [2, 12],
            101: [2, 12]
        }, {
            21: [2, 183],
            22: [2, 183],
            24: [2, 183],
            39: [2, 183],
            45: [2, 183],
            46: [2, 183],
            77: [2, 183]
        }, {
            21: [2, 184],
            22: [2, 184],
            24: [2, 184],
            39: [2, 184],
            45: [2, 184],
            46: [2, 184],
            77: [2, 184]
        }, {
            1: [2, 29],
            9: [2, 29],
            11: [2, 29],
            14: [2, 29],
            15: [2, 29],
            21: [2, 29],
            22: [2, 29],
            24: [2, 29],
            26: [2, 29],
            27: [2, 29],
            28: [2, 29],
            32: [2, 29],
            34: [2, 29],
            35: [2, 29],
            36: [2, 29],
            37: [2, 29],
            39: [2, 29],
            44: [2, 29],
            45: [2, 29],
            46: [2, 29],
            53: [2, 29],
            54: [2, 29],
            55: [2, 29],
            56: [2, 29],
            58: [2, 29],
            59: [2, 29],
            60: [2, 29],
            61: [2, 29],
            62: [2, 29],
            63: [2, 29],
            64: [2, 29],
            65: [2, 29],
            66: [2, 29],
            67: [2, 29],
            68: [2, 29],
            69: [2, 29],
            74: [2, 29],
            77: [2, 29],
            78: [2, 29],
            92: [2, 29],
            98: [2, 29],
            99: [2, 29],
            101: [2, 29]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 380,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            21: [1, 381],
            35: [1, 44],
            55: [1, 45],
            56: [1, 46],
            58: [1, 47],
            59: [1, 48],
            60: [1, 49],
            61: [1, 50],
            62: [1, 51],
            63: [1, 52],
            64: [1, 53],
            65: [1, 54],
            66: [1, 55],
            67: [1, 56],
            68: [1, 57],
            74: [1, 58]
        }, {
            1: [2, 41],
            9: [2, 41],
            11: [2, 41],
            14: [2, 41],
            15: [2, 41],
            21: [2, 41],
            22: [2, 41],
            24: [2, 41],
            26: [2, 41],
            27: [2, 41],
            28: [2, 41],
            32: [2, 41],
            34: [2, 41],
            35: [2, 41],
            36: [2, 41],
            37: [2, 41],
            39: [2, 41],
            44: [2, 41],
            45: [2, 41],
            46: [2, 41],
            53: [2, 41],
            54: [2, 41],
            55: [2, 41],
            56: [2, 41],
            58: [2, 41],
            59: [2, 41],
            60: [2, 41],
            61: [2, 41],
            62: [2, 41],
            63: [2, 41],
            64: [2, 41],
            65: [2, 41],
            66: [2, 41],
            67: [2, 41],
            68: [2, 41],
            69: [2, 41],
            74: [2, 41],
            77: [2, 41],
            78: [2, 41],
            92: [2, 41],
            98: [2, 41],
            99: [2, 41],
            101: [2, 41]
        }, {
            20: 382,
            39: [1, 198],
            41: [1, 383],
            75: 197,
            77: [1, 39]
        }, {
            1: [2, 42],
            9: [2, 42],
            11: [2, 42],
            14: [2, 42],
            15: [2, 42],
            21: [2, 42],
            22: [2, 42],
            24: [2, 42],
            26: [2, 42],
            27: [2, 42],
            28: [2, 42],
            32: [2, 42],
            34: [2, 42],
            35: [2, 42],
            36: [2, 42],
            37: [2, 42],
            39: [2, 42],
            44: [2, 42],
            45: [2, 42],
            46: [2, 42],
            53: [2, 42],
            54: [2, 42],
            55: [2, 42],
            56: [2, 42],
            58: [2, 42],
            59: [2, 42],
            60: [2, 42],
            61: [2, 42],
            62: [2, 42],
            63: [2, 42],
            64: [2, 42],
            65: [2, 42],
            66: [2, 42],
            67: [2, 42],
            68: [2, 42],
            69: [2, 42],
            74: [2, 42],
            77: [2, 42],
            78: [2, 42],
            92: [2, 42],
            98: [2, 42],
            99: [2, 42],
            101: [2, 42]
        }, {
            22: [2, 149],
            24: [2, 149],
            44: [2, 149],
            45: [2, 149]
        }, {
            22: [2, 150],
            24: [2, 150],
            44: [2, 150],
            45: [2, 150]
        }, {
            21: [1, 384],
            45: [1, 244],
            46: [1, 245]
        }, {
            13: 385,
            22: [2, 55],
            44: [1, 157],
            45: [2, 55],
            46: [2, 55]
        }, {
            41: [1, 386]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 314,
            23: [1, 35],
            25: [1, 36],
            27: [1, 387],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            14: [1, 388],
            45: [1, 244],
            46: [1, 245]
        }, {
            30: [1, 389],
            50: [1, 316],
            70: [1, 317]
        }, {
            1: [2, 26],
            9: [2, 26],
            11: [2, 26],
            14: [2, 26],
            15: [2, 26],
            21: [2, 26],
            22: [2, 26],
            24: [2, 26],
            26: [2, 26],
            27: [2, 26],
            28: [2, 26],
            32: [2, 26],
            34: [2, 26],
            35: [2, 26],
            36: [2, 26],
            37: [2, 26],
            39: [2, 26],
            44: [2, 26],
            45: [2, 26],
            46: [2, 26],
            53: [2, 26],
            54: [2, 26],
            55: [2, 26],
            56: [2, 26],
            58: [2, 26],
            59: [2, 26],
            60: [2, 26],
            61: [2, 26],
            62: [2, 26],
            63: [2, 26],
            64: [2, 26],
            65: [2, 26],
            66: [2, 26],
            67: [2, 26],
            68: [2, 26],
            69: [2, 26],
            74: [2, 26],
            77: [2, 26],
            78: [2, 26],
            92: [2, 26],
            98: [2, 26],
            99: [2, 26],
            101: [2, 26]
        }, {
            27: [1, 390],
            35: [1, 44],
            55: [1, 45],
            56: [1, 46],
            58: [1, 47],
            59: [1, 48],
            60: [1, 49],
            61: [1, 50],
            62: [1, 51],
            63: [1, 52],
            64: [1, 53],
            65: [1, 54],
            66: [1, 55],
            67: [1, 56],
            68: [1, 57],
            74: [1, 58]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 391,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 392,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 393,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 394,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 395,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 396,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            21: [2, 171],
            22: [2, 171],
            24: [2, 171],
            35: [1, 44],
            39: [2, 171],
            45: [2, 171],
            46: [2, 171],
            55: [1, 45],
            56: [1, 46],
            58: [1, 47],
            59: [1, 48],
            60: [1, 49],
            61: [1, 50],
            62: [1, 51],
            63: [1, 52],
            64: [1, 53],
            65: [1, 54],
            66: [1, 55],
            67: [1, 56],
            68: [1, 57],
            74: [1, 58],
            77: [2, 171],
            78: [1, 397]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 398,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            1: [2, 75],
            14: [2, 75],
            21: [2, 75],
            22: [2, 75],
            24: [2, 75],
            26: [2, 75],
            27: [2, 75],
            28: [2, 75],
            32: [2, 75],
            35: [2, 75],
            36: [2, 75],
            37: [2, 75],
            39: [2, 75],
            44: [2, 75],
            45: [2, 75],
            46: [2, 75],
            55: [2, 75],
            56: [2, 75],
            58: [2, 75],
            59: [2, 75],
            60: [2, 75],
            61: [2, 75],
            62: [2, 75],
            63: [2, 75],
            64: [2, 75],
            65: [2, 75],
            66: [2, 75],
            67: [2, 75],
            68: [2, 75],
            74: [2, 75],
            77: [2, 75],
            78: [2, 75],
            101: [2, 75]
        }, {
            1: [2, 63],
            22: [2, 63],
            27: [2, 63],
            35: [1, 44],
            45: [2, 63],
            55: [1, 45],
            56: [1, 46],
            58: [1, 47],
            59: [1, 48],
            60: [1, 49],
            61: [1, 50],
            62: [1, 51],
            63: [1, 52],
            64: [1, 53],
            65: [1, 54],
            66: [1, 55],
            67: [1, 56],
            68: [1, 57],
            74: [1, 58]
        }, {
            1: [2, 98],
            14: [2, 98],
            21: [2, 98],
            22: [2, 98],
            24: [2, 98],
            26: [2, 98],
            27: [2, 98],
            28: [2, 98],
            32: [2, 98],
            35: [2, 98],
            36: [2, 98],
            37: [2, 98],
            39: [2, 98],
            44: [2, 98],
            45: [2, 98],
            46: [2, 98],
            55: [2, 98],
            56: [2, 98],
            58: [2, 98],
            59: [2, 98],
            60: [2, 98],
            61: [2, 98],
            62: [2, 98],
            63: [2, 98],
            64: [2, 98],
            65: [2, 98],
            66: [2, 98],
            67: [2, 98],
            68: [2, 98],
            74: [2, 98],
            77: [2, 98],
            78: [2, 98],
            101: [2, 98]
        }, {
            22: [1, 399],
            45: [1, 244],
            46: [1, 245]
        }, {
            1: [2, 73],
            14: [2, 73],
            21: [2, 73],
            22: [2, 73],
            24: [2, 73],
            26: [2, 73],
            27: [2, 73],
            28: [2, 73],
            32: [2, 73],
            35: [2, 73],
            36: [2, 73],
            37: [2, 73],
            39: [2, 73],
            44: [2, 73],
            45: [2, 73],
            46: [2, 73],
            55: [2, 73],
            56: [2, 73],
            58: [2, 73],
            59: [2, 73],
            60: [2, 73],
            61: [2, 73],
            62: [2, 73],
            63: [2, 73],
            64: [2, 73],
            65: [2, 73],
            66: [2, 73],
            67: [2, 73],
            68: [2, 73],
            74: [2, 73],
            77: [2, 73],
            78: [2, 73],
            101: [2, 73]
        }, {
            21: [1, 400],
            35: [1, 44],
            55: [1, 45],
            56: [1, 46],
            58: [1, 47],
            59: [1, 48],
            60: [1, 49],
            61: [1, 50],
            62: [1, 51],
            63: [1, 52],
            64: [1, 53],
            65: [1, 54],
            66: [1, 55],
            67: [1, 56],
            68: [1, 57],
            74: [1, 58]
        }, {
            1: [2, 34],
            9: [2, 34],
            11: [2, 34],
            14: [2, 34],
            15: [2, 34],
            21: [2, 34],
            22: [2, 34],
            24: [2, 34],
            26: [2, 34],
            27: [2, 34],
            28: [2, 34],
            32: [2, 34],
            34: [2, 34],
            35: [2, 34],
            36: [2, 34],
            37: [2, 34],
            39: [2, 34],
            44: [2, 34],
            45: [2, 34],
            46: [2, 34],
            53: [2, 34],
            54: [2, 34],
            55: [2, 34],
            56: [2, 34],
            58: [2, 34],
            59: [2, 34],
            60: [2, 34],
            61: [2, 34],
            62: [2, 34],
            63: [2, 34],
            64: [2, 34],
            65: [2, 34],
            66: [2, 34],
            67: [2, 34],
            68: [2, 34],
            69: [2, 34],
            74: [2, 34],
            77: [2, 34],
            78: [2, 34],
            92: [2, 34],
            98: [2, 34],
            99: [2, 34],
            101: [2, 34]
        }, {
            1: [2, 35],
            9: [2, 35],
            11: [2, 35],
            14: [2, 35],
            15: [2, 35],
            21: [2, 35],
            22: [2, 35],
            24: [2, 35],
            26: [2, 35],
            27: [2, 35],
            28: [2, 35],
            32: [2, 35],
            34: [2, 35],
            35: [2, 35],
            36: [2, 35],
            37: [2, 35],
            39: [2, 35],
            44: [2, 35],
            45: [2, 35],
            46: [2, 35],
            53: [2, 35],
            54: [2, 35],
            55: [2, 35],
            56: [2, 35],
            58: [2, 35],
            59: [2, 35],
            60: [2, 35],
            61: [2, 35],
            62: [2, 35],
            63: [2, 35],
            64: [2, 35],
            65: [2, 35],
            66: [2, 35],
            67: [2, 35],
            68: [2, 35],
            69: [2, 35],
            74: [2, 35],
            77: [2, 35],
            78: [2, 35],
            92: [2, 35],
            98: [2, 35],
            99: [2, 35],
            101: [2, 35]
        }, {
            1: [2, 99],
            14: [2, 99],
            21: [2, 99],
            22: [2, 99],
            24: [2, 99],
            26: [2, 99],
            27: [2, 99],
            28: [2, 99],
            32: [2, 99],
            35: [2, 99],
            36: [2, 99],
            37: [2, 99],
            39: [2, 99],
            44: [2, 99],
            45: [2, 99],
            46: [2, 99],
            55: [2, 99],
            56: [2, 99],
            58: [2, 99],
            59: [2, 99],
            60: [2, 99],
            61: [2, 99],
            62: [2, 99],
            63: [2, 99],
            64: [2, 99],
            65: [2, 99],
            66: [2, 99],
            67: [2, 99],
            68: [2, 99],
            74: [2, 99],
            77: [2, 99],
            78: [2, 99],
            101: [2, 99]
        }, {
            1: [2, 155],
            14: [2, 155],
            21: [2, 155],
            22: [2, 155],
            24: [2, 155],
            26: [2, 155],
            27: [2, 155],
            28: [2, 155],
            32: [2, 155],
            35: [2, 155],
            36: [2, 155],
            37: [2, 155],
            39: [2, 155],
            44: [2, 155],
            45: [2, 155],
            46: [2, 155],
            55: [2, 155],
            56: [2, 155],
            58: [2, 155],
            59: [2, 155],
            60: [2, 155],
            61: [2, 155],
            62: [2, 155],
            63: [2, 155],
            64: [2, 155],
            65: [2, 155],
            66: [2, 155],
            67: [2, 155],
            68: [2, 155],
            73: 401,
            74: [2, 155],
            77: [2, 155],
            78: [2, 155],
            85: [1, 178],
            101: [2, 155]
        }, {
            1: [2, 104],
            14: [2, 104],
            21: [2, 104],
            22: [2, 104],
            24: [2, 104],
            26: [2, 104],
            27: [2, 104],
            28: [2, 104],
            32: [2, 104],
            35: [1, 44],
            36: [2, 104],
            37: [2, 104],
            39: [2, 104],
            44: [2, 104],
            45: [2, 104],
            46: [2, 104],
            55: [1, 45],
            56: [1, 46],
            58: [1, 47],
            59: [1, 48],
            60: [1, 49],
            61: [1, 50],
            62: [1, 51],
            63: [1, 52],
            64: [1, 53],
            65: [1, 54],
            66: [1, 55],
            67: [1, 56],
            68: [1, 57],
            74: [2, 104],
            77: [2, 104],
            78: [2, 104],
            101: [2, 104]
        }, {
            1: [2, 119],
            14: [2, 119],
            21: [2, 119],
            22: [2, 119],
            24: [2, 119],
            26: [2, 119],
            27: [2, 119],
            28: [2, 119],
            32: [2, 119],
            35: [2, 119],
            36: [2, 119],
            37: [2, 119],
            39: [2, 119],
            44: [2, 119],
            45: [2, 119],
            46: [2, 119],
            55: [2, 119],
            56: [2, 119],
            58: [2, 119],
            59: [2, 119],
            60: [2, 119],
            61: [2, 119],
            62: [2, 119],
            63: [2, 119],
            64: [2, 119],
            65: [2, 119],
            66: [2, 119],
            67: [2, 119],
            68: [2, 119],
            74: [2, 119],
            77: [2, 119],
            78: [2, 119],
            101: [2, 119]
        }, {
            17: 402,
            46: [1, 6]
        }, {
            1: [2, 10],
            9: [2, 10],
            11: [2, 10],
            14: [2, 10],
            15: [2, 10],
            21: [2, 10],
            22: [2, 10],
            24: [2, 10],
            26: [2, 10],
            27: [2, 10],
            28: [2, 10],
            32: [2, 10],
            34: [2, 10],
            35: [2, 10],
            36: [2, 10],
            37: [2, 10],
            39: [2, 10],
            44: [2, 10],
            45: [2, 10],
            46: [2, 10],
            53: [2, 10],
            54: [2, 10],
            55: [2, 10],
            56: [2, 10],
            58: [2, 10],
            59: [2, 10],
            60: [2, 10],
            61: [2, 10],
            62: [2, 10],
            63: [2, 10],
            64: [2, 10],
            65: [2, 10],
            66: [2, 10],
            67: [2, 10],
            68: [2, 10],
            69: [2, 10],
            74: [2, 10],
            77: [2, 10],
            78: [2, 10],
            92: [2, 10],
            98: [2, 10],
            99: [2, 10],
            101: [2, 10]
        }, {
            21: [1, 403],
            35: [1, 44],
            55: [1, 45],
            56: [1, 46],
            58: [1, 47],
            59: [1, 48],
            60: [1, 49],
            61: [1, 50],
            62: [1, 51],
            63: [1, 52],
            64: [1, 53],
            65: [1, 54],
            66: [1, 55],
            67: [1, 56],
            68: [1, 57],
            74: [1, 58]
        }, {
            1: [2, 32],
            9: [2, 32],
            11: [2, 32],
            14: [2, 32],
            15: [2, 32],
            21: [2, 32],
            22: [2, 32],
            24: [2, 32],
            26: [2, 32],
            27: [2, 32],
            28: [2, 32],
            32: [2, 32],
            34: [2, 32],
            35: [2, 32],
            36: [2, 32],
            37: [2, 32],
            39: [2, 32],
            44: [2, 32],
            45: [2, 32],
            46: [2, 32],
            53: [2, 32],
            54: [2, 32],
            55: [2, 32],
            56: [2, 32],
            58: [2, 32],
            59: [2, 32],
            60: [2, 32],
            61: [2, 32],
            62: [2, 32],
            63: [2, 32],
            64: [2, 32],
            65: [2, 32],
            66: [2, 32],
            67: [2, 32],
            68: [2, 32],
            69: [2, 32],
            74: [2, 32],
            77: [2, 32],
            78: [2, 32],
            92: [2, 32],
            98: [2, 32],
            99: [2, 32],
            101: [2, 32]
        }, {
            24: [1, 404],
            39: [1, 198],
            45: [1, 277],
            46: [1, 278],
            75: 276,
            77: [1, 39]
        }, {
            22: [2, 136],
            24: [2, 136],
            44: [2, 136],
            45: [2, 136],
            54: [2, 136],
            59: [2, 136]
        }, {
            41: [1, 383]
        }, {
            22: [1, 405],
            45: [1, 244],
            46: [1, 245]
        }, {
            22: [2, 135],
            24: [2, 135],
            44: [2, 135],
            45: [2, 135],
            54: [2, 135],
            59: [2, 135]
        }, {
            1: [2, 27],
            9: [2, 27],
            11: [2, 27],
            14: [2, 27],
            15: [2, 27],
            21: [2, 27],
            22: [2, 27],
            24: [2, 27],
            26: [2, 27],
            27: [2, 27],
            28: [2, 27],
            32: [2, 27],
            34: [2, 27],
            35: [2, 27],
            36: [2, 27],
            37: [2, 27],
            39: [2, 27],
            44: [2, 27],
            45: [2, 27],
            46: [2, 27],
            53: [2, 27],
            54: [2, 27],
            55: [2, 27],
            56: [2, 27],
            58: [2, 27],
            59: [2, 27],
            60: [2, 27],
            61: [2, 27],
            62: [2, 27],
            63: [2, 27],
            64: [2, 27],
            65: [2, 27],
            66: [2, 27],
            67: [2, 27],
            68: [2, 27],
            69: [2, 27],
            74: [2, 27],
            77: [2, 27],
            78: [2, 27],
            92: [2, 27],
            98: [2, 27],
            99: [2, 27],
            101: [2, 27]
        }, {
            27: [1, 406]
        }, {
            27: [1, 407]
        }, {
            1: [2, 28],
            9: [2, 28],
            11: [2, 28],
            14: [2, 28],
            15: [2, 28],
            21: [2, 28],
            22: [2, 28],
            24: [2, 28],
            26: [2, 28],
            27: [2, 28],
            28: [2, 28],
            32: [2, 28],
            34: [2, 28],
            35: [2, 28],
            36: [2, 28],
            37: [2, 28],
            39: [2, 28],
            44: [2, 28],
            45: [2, 28],
            46: [2, 28],
            53: [2, 28],
            54: [2, 28],
            55: [2, 28],
            56: [2, 28],
            58: [2, 28],
            59: [2, 28],
            60: [2, 28],
            61: [2, 28],
            62: [2, 28],
            63: [2, 28],
            64: [2, 28],
            65: [2, 28],
            66: [2, 28],
            67: [2, 28],
            68: [2, 28],
            69: [2, 28],
            74: [2, 28],
            77: [2, 28],
            78: [2, 28],
            92: [2, 28],
            98: [2, 28],
            99: [2, 28],
            101: [2, 28]
        }, {
            21: [2, 165],
            22: [2, 165],
            24: [2, 165],
            35: [1, 44],
            39: [2, 165],
            45: [2, 165],
            46: [2, 165],
            55: [1, 45],
            56: [1, 46],
            58: [1, 47],
            59: [1, 48],
            60: [1, 49],
            61: [1, 50],
            62: [1, 51],
            63: [1, 52],
            64: [1, 53],
            65: [1, 54],
            66: [1, 55],
            67: [1, 56],
            68: [1, 57],
            74: [1, 58],
            77: [2, 165]
        }, {
            21: [2, 159],
            22: [2, 159],
            24: [2, 159],
            35: [1, 44],
            39: [2, 159],
            45: [2, 159],
            46: [2, 159],
            55: [1, 45],
            56: [1, 46],
            58: [1, 47],
            59: [1, 48],
            60: [1, 49],
            61: [1, 50],
            62: [1, 51],
            63: [1, 52],
            64: [1, 53],
            65: [1, 54],
            66: [1, 55],
            67: [1, 56],
            68: [1, 57],
            74: [1, 58],
            77: [2, 159]
        }, {
            21: [2, 160],
            22: [2, 160],
            24: [2, 160],
            35: [1, 44],
            39: [2, 160],
            45: [2, 160],
            46: [2, 160],
            55: [1, 45],
            56: [1, 46],
            58: [1, 47],
            59: [1, 48],
            60: [1, 49],
            61: [1, 50],
            62: [1, 51],
            63: [1, 52],
            64: [1, 53],
            65: [1, 54],
            66: [1, 55],
            67: [1, 56],
            68: [1, 57],
            74: [1, 58],
            77: [2, 160],
            78: [1, 408]
        }, {
            21: [2, 167],
            22: [2, 167],
            24: [2, 167],
            35: [1, 44],
            39: [2, 167],
            45: [2, 167],
            46: [2, 167],
            55: [1, 45],
            56: [1, 46],
            58: [1, 47],
            59: [1, 48],
            60: [1, 49],
            61: [1, 50],
            62: [1, 51],
            63: [1, 52],
            64: [1, 53],
            65: [1, 54],
            66: [1, 55],
            67: [1, 56],
            68: [1, 57],
            74: [1, 58],
            77: [2, 167]
        }, {
            21: [2, 168],
            22: [2, 168],
            24: [2, 168],
            35: [1, 44],
            39: [2, 168],
            45: [2, 168],
            46: [2, 168],
            55: [1, 45],
            56: [1, 46],
            58: [1, 47],
            59: [1, 48],
            60: [1, 49],
            61: [1, 50],
            62: [1, 51],
            63: [1, 52],
            64: [1, 53],
            65: [1, 54],
            66: [1, 55],
            67: [1, 56],
            68: [1, 57],
            74: [1, 58],
            77: [2, 168],
            78: [1, 409]
        }, {
            21: [2, 170],
            22: [2, 170],
            24: [2, 170],
            35: [1, 44],
            37: [1, 411],
            39: [2, 170],
            45: [2, 170],
            46: [2, 170],
            55: [1, 45],
            56: [1, 46],
            58: [1, 47],
            59: [1, 48],
            60: [1, 49],
            61: [1, 50],
            62: [1, 51],
            63: [1, 52],
            64: [1, 53],
            65: [1, 54],
            66: [1, 55],
            67: [1, 56],
            68: [1, 57],
            74: [1, 58],
            77: [2, 170],
            78: [1, 410]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 412,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            21: [2, 180],
            22: [2, 180],
            24: [2, 180],
            35: [1, 44],
            39: [2, 180],
            45: [2, 180],
            46: [2, 180],
            55: [1, 45],
            56: [1, 46],
            58: [1, 47],
            59: [1, 48],
            60: [1, 49],
            61: [1, 50],
            62: [1, 51],
            63: [1, 52],
            64: [1, 53],
            65: [1, 54],
            66: [1, 55],
            67: [1, 56],
            68: [1, 57],
            74: [1, 58],
            77: [2, 180]
        }, {
            14: [2, 51],
            21: [2, 51],
            22: [2, 51],
            32: [2, 51],
            44: [2, 51],
            45: [2, 51],
            46: [2, 51]
        }, {
            1: [2, 33],
            9: [2, 33],
            11: [2, 33],
            14: [2, 33],
            15: [2, 33],
            21: [2, 33],
            22: [2, 33],
            24: [2, 33],
            26: [2, 33],
            27: [2, 33],
            28: [2, 33],
            32: [2, 33],
            34: [2, 33],
            35: [2, 33],
            36: [2, 33],
            37: [2, 33],
            39: [2, 33],
            44: [2, 33],
            45: [2, 33],
            46: [2, 33],
            53: [2, 33],
            54: [2, 33],
            55: [2, 33],
            56: [2, 33],
            58: [2, 33],
            59: [2, 33],
            60: [2, 33],
            61: [2, 33],
            62: [2, 33],
            63: [2, 33],
            64: [2, 33],
            65: [2, 33],
            66: [2, 33],
            67: [2, 33],
            68: [2, 33],
            69: [2, 33],
            74: [2, 33],
            77: [2, 33],
            78: [2, 33],
            92: [2, 33],
            98: [2, 33],
            99: [2, 33],
            101: [2, 33]
        }, {
            1: [2, 157],
            14: [2, 157],
            21: [2, 157],
            22: [2, 157],
            24: [2, 157],
            26: [2, 157],
            27: [2, 157],
            28: [2, 157],
            32: [2, 157],
            35: [2, 157],
            36: [2, 157],
            37: [2, 157],
            39: [2, 157],
            44: [2, 157],
            45: [2, 157],
            46: [2, 157],
            55: [2, 157],
            56: [2, 157],
            58: [2, 157],
            59: [2, 157],
            60: [2, 157],
            61: [2, 157],
            62: [2, 157],
            63: [2, 157],
            64: [2, 157],
            65: [2, 157],
            66: [2, 157],
            67: [2, 157],
            68: [2, 157],
            74: [2, 157],
            77: [2, 157],
            78: [2, 157],
            101: [2, 157]
        }, {
            1: [2, 121],
            14: [2, 121],
            21: [2, 121],
            22: [2, 121],
            24: [2, 121],
            26: [2, 121],
            27: [2, 121],
            28: [2, 121],
            32: [2, 121],
            35: [2, 121],
            36: [2, 121],
            37: [2, 121],
            39: [2, 121],
            44: [2, 121],
            45: [2, 121],
            46: [2, 121],
            55: [2, 121],
            56: [2, 121],
            58: [2, 121],
            59: [2, 121],
            60: [2, 121],
            61: [2, 121],
            62: [2, 121],
            63: [2, 121],
            64: [2, 121],
            65: [2, 121],
            66: [2, 121],
            67: [2, 121],
            68: [2, 121],
            74: [2, 121],
            77: [2, 121],
            78: [2, 121],
            101: [2, 121]
        }, {
            1: [2, 30],
            9: [2, 30],
            11: [2, 30],
            14: [2, 30],
            15: [2, 30],
            21: [2, 30],
            22: [2, 30],
            24: [2, 30],
            26: [2, 30],
            27: [2, 30],
            28: [2, 30],
            32: [2, 30],
            34: [2, 30],
            35: [2, 30],
            36: [2, 30],
            37: [2, 30],
            39: [2, 30],
            44: [2, 30],
            45: [2, 30],
            46: [2, 30],
            53: [2, 30],
            54: [2, 30],
            55: [2, 30],
            56: [2, 30],
            58: [2, 30],
            59: [2, 30],
            60: [2, 30],
            61: [2, 30],
            62: [2, 30],
            63: [2, 30],
            64: [2, 30],
            65: [2, 30],
            66: [2, 30],
            67: [2, 30],
            68: [2, 30],
            69: [2, 30],
            74: [2, 30],
            77: [2, 30],
            78: [2, 30],
            92: [2, 30],
            98: [2, 30],
            99: [2, 30],
            101: [2, 30]
        }, {
            1: [2, 13],
            9: [2, 13],
            11: [2, 13],
            14: [2, 13],
            15: [2, 13],
            21: [2, 13],
            22: [2, 13],
            24: [2, 13],
            26: [2, 13],
            27: [2, 13],
            28: [2, 13],
            32: [2, 13],
            34: [2, 13],
            35: [2, 13],
            36: [2, 13],
            37: [2, 13],
            39: [2, 13],
            44: [2, 13],
            45: [2, 13],
            46: [2, 13],
            53: [2, 13],
            54: [2, 13],
            55: [2, 13],
            56: [2, 13],
            58: [2, 13],
            59: [2, 13],
            60: [2, 13],
            61: [2, 13],
            62: [2, 13],
            63: [2, 13],
            64: [2, 13],
            65: [2, 13],
            66: [2, 13],
            67: [2, 13],
            68: [2, 13],
            69: [2, 13],
            74: [2, 13],
            77: [2, 13],
            78: [2, 13],
            92: [2, 13],
            98: [2, 13],
            99: [2, 13],
            101: [2, 13]
        }, {
            22: [2, 138],
            24: [2, 138],
            44: [2, 138],
            45: [2, 138]
        }, {
            1: [2, 21],
            9: [2, 21],
            11: [2, 21],
            14: [2, 21],
            15: [2, 21],
            21: [2, 21],
            22: [2, 21],
            24: [2, 21],
            26: [2, 21],
            27: [2, 21],
            28: [2, 21],
            32: [2, 21],
            34: [2, 21],
            35: [2, 21],
            36: [2, 21],
            37: [2, 21],
            39: [2, 21],
            44: [2, 21],
            45: [2, 21],
            46: [2, 21],
            53: [2, 21],
            54: [2, 21],
            55: [2, 21],
            56: [2, 21],
            58: [2, 21],
            59: [2, 21],
            60: [2, 21],
            61: [2, 21],
            62: [2, 21],
            63: [2, 21],
            64: [2, 21],
            65: [2, 21],
            66: [2, 21],
            67: [2, 21],
            68: [2, 21],
            69: [2, 21],
            74: [2, 21],
            77: [2, 21],
            78: [2, 21],
            92: [2, 21],
            98: [2, 21],
            99: [2, 21],
            101: [2, 21]
        }, {
            1: [2, 23],
            9: [2, 23],
            11: [2, 23],
            14: [2, 23],
            15: [2, 23],
            21: [2, 23],
            22: [2, 23],
            24: [2, 23],
            26: [2, 23],
            27: [2, 23],
            28: [2, 23],
            32: [2, 23],
            34: [2, 23],
            35: [2, 23],
            36: [2, 23],
            37: [2, 23],
            39: [2, 23],
            44: [2, 23],
            45: [2, 23],
            46: [2, 23],
            53: [2, 23],
            54: [2, 23],
            55: [2, 23],
            56: [2, 23],
            58: [2, 23],
            59: [2, 23],
            60: [2, 23],
            61: [2, 23],
            62: [2, 23],
            63: [2, 23],
            64: [2, 23],
            65: [2, 23],
            66: [2, 23],
            67: [2, 23],
            68: [2, 23],
            69: [2, 23],
            74: [2, 23],
            77: [2, 23],
            78: [2, 23],
            92: [2, 23],
            98: [2, 23],
            99: [2, 23],
            101: [2, 23]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 413,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 414,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 415,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 416,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            21: [2, 173],
            22: [2, 173],
            24: [2, 173],
            35: [1, 44],
            39: [2, 173],
            45: [2, 173],
            46: [2, 173],
            55: [1, 45],
            56: [1, 46],
            58: [1, 47],
            59: [1, 48],
            60: [1, 49],
            61: [1, 50],
            62: [1, 51],
            63: [1, 52],
            64: [1, 53],
            65: [1, 54],
            66: [1, 55],
            67: [1, 56],
            68: [1, 57],
            74: [1, 58],
            77: [2, 173]
        }, {
            21: [2, 161],
            22: [2, 161],
            24: [2, 161],
            35: [1, 44],
            39: [2, 161],
            45: [2, 161],
            46: [2, 161],
            55: [1, 45],
            56: [1, 46],
            58: [1, 47],
            59: [1, 48],
            60: [1, 49],
            61: [1, 50],
            62: [1, 51],
            63: [1, 52],
            64: [1, 53],
            65: [1, 54],
            66: [1, 55],
            67: [1, 56],
            68: [1, 57],
            74: [1, 58],
            77: [2, 161]
        }, {
            21: [2, 169],
            22: [2, 169],
            24: [2, 169],
            35: [1, 44],
            39: [2, 169],
            45: [2, 169],
            46: [2, 169],
            55: [1, 45],
            56: [1, 46],
            58: [1, 47],
            59: [1, 48],
            60: [1, 49],
            61: [1, 50],
            62: [1, 51],
            63: [1, 52],
            64: [1, 53],
            65: [1, 54],
            66: [1, 55],
            67: [1, 56],
            68: [1, 57],
            74: [1, 58],
            77: [2, 169]
        }, {
            21: [2, 172],
            22: [2, 172],
            24: [2, 172],
            35: [1, 44],
            37: [1, 417],
            39: [2, 172],
            45: [2, 172],
            46: [2, 172],
            55: [1, 45],
            56: [1, 46],
            58: [1, 47],
            59: [1, 48],
            60: [1, 49],
            61: [1, 50],
            62: [1, 51],
            63: [1, 52],
            64: [1, 53],
            65: [1, 54],
            66: [1, 55],
            67: [1, 56],
            68: [1, 57],
            74: [1, 58],
            77: [2, 172]
        }, {
            21: [2, 174],
            22: [2, 174],
            24: [2, 174],
            35: [1, 44],
            39: [2, 174],
            45: [2, 174],
            46: [2, 174],
            55: [1, 45],
            56: [1, 46],
            58: [1, 47],
            59: [1, 48],
            60: [1, 49],
            61: [1, 50],
            62: [1, 51],
            63: [1, 52],
            64: [1, 53],
            65: [1, 54],
            66: [1, 55],
            67: [1, 56],
            68: [1, 57],
            74: [1, 58],
            77: [2, 174],
            78: [1, 418]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 419,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            3: 12,
            4: [1, 28],
            5: 29,
            6: 30,
            7: [1, 31],
            8: [1, 32],
            16: [1, 33],
            18: [1, 34],
            19: 420,
            23: [1, 35],
            25: [1, 36],
            31: [1, 63],
            33: [1, 14],
            34: [1, 13],
            38: [1, 37],
            39: [1, 38],
            41: [1, 26],
            56: [1, 15],
            57: [1, 16],
            71: [1, 17],
            72: [1, 18],
            75: 19,
            76: [1, 20],
            77: [1, 39],
            79: [1, 21],
            80: [1, 22],
            81: [1, 23],
            86: [1, 24],
            89: [1, 25],
            93: [1, 27]
        }, {
            21: [2, 176],
            22: [2, 176],
            24: [2, 176],
            35: [1, 44],
            39: [2, 176],
            45: [2, 176],
            46: [2, 176],
            55: [1, 45],
            56: [1, 46],
            58: [1, 47],
            59: [1, 48],
            60: [1, 49],
            61: [1, 50],
            62: [1, 51],
            63: [1, 52],
            64: [1, 53],
            65: [1, 54],
            66: [1, 55],
            67: [1, 56],
            68: [1, 57],
            74: [1, 58],
            77: [2, 176]
        }, {
            21: [2, 175],
            22: [2, 175],
            24: [2, 175],
            35: [1, 44],
            39: [2, 175],
            45: [2, 175],
            46: [2, 175],
            55: [1, 45],
            56: [1, 46],
            58: [1, 47],
            59: [1, 48],
            60: [1, 49],
            61: [1, 50],
            62: [1, 51],
            63: [1, 52],
            64: [1, 53],
            65: [1, 54],
            66: [1, 55],
            67: [1, 56],
            68: [1, 57],
            74: [1, 58],
            77: [2, 175]
        }],
        defaultActions: {
            2: [2, 191]
        },
        parseError: function (t, n) {
            throw new Error(t)
        },
        parse: function (t) {
            function h(e) {
                r.length = r.length - 2 * e, i.length = i.length - e
            }

            function p() {
                var e;
                return e = n.lexer.lex() || 1, typeof e != "number" && (e = n.symbols_[e] || e), e
            }
            var n = this,
                r = [0],
                i = [null],
                s = this.table,
                o = "",
                u = 0,
                a = 0,
                f = 0,
                l = 2,
                c = 1;
            this.lexer.setInput(t), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, typeof this.yy.parseError == "function" && (this.parseError = this.yy.parseError);
            var d, v, m, g, y, b, w = {},
                E, S, x, T;
            for (;;) {
                m = r[r.length - 1], this.defaultActions[m] ? g = this.defaultActions[m] : (d == null && (d = p()), g = s[m] && s[m][d]);
                if (typeof g == "undefined" || !g.length || !g[0]) {
                    if (!f) {
                        T = [];
                        for (E in s[m]) this.terminals_[E] && E > 2 && T.push("'" + this.terminals_[E] + "'");
                        var N = "";
                        this.lexer.showPosition ? N = "Parse error on line " + (u + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + T.join(", ") : N = "Parse error on line " + (u + 1) + ": Unexpected " + (d == 1 ? "end of input" : "'" + (this.terminals_[d] || d) + "'"), this.parseError(N, {
                            text: this.lexer.match,
                            token: this.terminals_[d] || d,
                            line: this.lexer.yylineno,
                            expected: T
                        })
                    }
                    if (f == 3) {
                        if (d == c) throw new Error(N || "Parsing halted.");
                        a = this.lexer.yyleng, o = this.lexer.yytext, u = this.lexer.yylineno, d = p()
                    }
                    for (;;) {
                        if (l.toString() in s[m]) break;
                        if (m == 0) throw new Error(N || "Parsing halted.");
                        h(1), m = r[r.length - 1]
                    }
                    v = d, d = l, m = r[r.length - 1], g = s[m] && s[m][l], f = 3
                }
                if (g[0] instanceof Array && g.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + m + ", token: " + d);
                switch (g[0]) {
                case 1:
                    r.push(d), i.push(this.lexer.yytext), r.push(g[1]), d = null, v ? (d = v, v = null) : (a = this.lexer.yyleng, o = this.lexer.yytext, u = this.lexer.yylineno, f > 0 && f--);
                    break;
                case 2:
                    S = this.productions_[g[1]][1], w.$ = i[i.length - S], b = this.performAction.call(w, o, a, u, this.yy, g[1], i);
                    if (typeof b != "undefined") return b;
                    S && (r = r.slice(0, -1 * S * 2), i = i.slice(0, -1 * S)), r.push(this.productions_[g[1]][0]), i.push(w.$), x = s[r[r.length - 2]][r[r.length - 1]], r.push(x);
                    break;
                case 3:
                    return !0
                }
            }
            return !0
        }
    };
    var n = [].slice,
        r = {}.toString;
    return function (e) {
            function q(e, t) {
                throw SyntaxError(e + " on line " + -~t)
            }

            function R(e, t, n) {
                var r, i;
                return t == null && (t = e.length), i = (r = e[t - 1])[0], i === "ID" || i === "]" || i === "?" || (n ? r.callable || (i === ")" || i === ")CALL" || i === "BIOPBP") && r[1] : i === "}" || i === ")" || i === ")CALL" || i === "STRNUM" || i === "LITERAL" || i === "WORDS")
            }

            function U(e) {
                var t, n, i;
                t = 0 / 0;
                while (n = r.exec(e)) t <= (i = n[0].length - 1) || (t = i);
                return t
            }

            function z(e, t) {
                return t ? e.replace(z[t] || (z[t] = RegExp("\\n[^\\n\\S]{1," + t + "}", "g")), "\n") : e
            }

            function W(e, t) {
                return function (n) {
                    return n.replace(e, t)
                }
            }

            function X(e) {
                return e.slice(1 + e.lastIndexOf("\n", 0))
            }

            function V(e, t) {
                return isNaN(e) ? (e = e.length > 8 ? "ng" : Function("return " + e)(), e.length === 1 || q("bad string in range", t), [e.charCodeAt(), !0]) : [+e]
            }

            function $(e) {
                return '"\\u' + ("000" + e.toString(16)).slice(-4) + '"'
            }

            function J(e) {
                var t, n, r, i, o, u, a, f, l, c, h;
                t = ["NEWLINE", "\n", 0], n = 0;
                while (r = e[++n]) {
                    i = r[0], o = r[1], u = r[2];
                    switch (!1) {
                    case i !== "ASSIGN" || !s(t[1], m) || e[n - 2][0] === "DOT":
                        q('cannot assign to reserved word "' + t[1] + '"', u);
                        break;
                    case i !== "DOT" || t[0] !== "]" || e[n - 2][0] !== "[" || e[n - 3][0] !== "DOT":
                        e.splice(n - 2, 3), e[n - 3][1] = "[]";
                        break;
                    case i !== "DOT" || t[0] !== "}" || e[n - 2][0] !== "{" || e[n - 3][0] !== "DOT":
                        e.splice(n - 2, 3), e[n - 3][1] = "{}";
                        break;
                    case o !== "." || !r.spaced || !t.spaced:
                        e[n] = ["COMPOSE", "<<", u];
                        break;
                    case o !== "++":
                        if (!(a = e[n + 1])) break;
                        f = ["ID", "LITERAL", "STRNUM"];
                        if (t.spaced && r.spaced || !t.spaced && !r.spaced && s(t[0], f) && s(a[0], f)) e[n][0] = "CONCAT";
                        if (t[0] === "(" && a[0] === ")" || t[0] === "(" && r.spaced || a[0] === ")" && t.spaced) e[n][0] = "BIOP";
                        break;
                    case i !== "DOT" || o !== ".":
                        a = e[n + 1];
                        if (t[0] === "(" && a[0] === ")") e[n][0] = "BIOP";
                        else if (t[0] === "(") e.splice(n, 0, ["PARAM(", "(", u], [")PARAM", ")", u], ["->", "->", u], ["ID", "it", u]);
                        else if (a[0] === ")") {
                            e.splice(n + 1, 0, ["[", "[", u], ["ID", "it", u], ["]", "]", u]), l = 1;
                            e: for (c = n + 1; c >= 0; --c) {
                                h = c;
                                switch (e[h][0]) {
                                case ")":
                                    ++l;
                                    break;
                                case "(":
                                    if (--l === 0) {
                                        e.splice(h + 1, 0, ["PARAM(", "(", u], ["ID", "it", u], [")PARAM", ")", u], ["->", "->", u]);
                                        break e
                                    }
                                }
                            }
                        }
                    }
                    t = r;
                    continue
                }
            }

            function K(e) {
                function u(e) {
                    var t;
                    return (t = e[0]) === "NEWLINE" || t === "INDENT"
                }

                function a(t, n) {
                    var r;
                    if (o === "IF") {
                        if (t[0] !== "INDENT" || !t[1] && !t.then || s(e[n - 1][0], I)) i[0] = "POST_IF"
                    } else t[0] !== "INDENT" && e.splice(n, 0, ["INDENT", 0, r = e[n - 1][2]], ["DEDENT", 0, r])
                }
                var t, n, r, i, o;
                for (t = 0, n = e.length; t < n; ++t) r = t, i = e[t], o = i[0], (o === "IF" || o === "CLASS" || o === "CATCH") && et(e, r + 1, u, a)
            }

            function Q(e) {
                function f(t, n) {
                    var i, s;
                    i = t[0], s = r;
                    if (r === i || r === "THEN" && i === "SWITCH") r = "";
                    switch (i) {
                    case "NEWLINE":
                        return t[1] !== ";";
                    case "DOT":
                    case "?":
                    case ",":
                    case "PIPE":
                    case "BACKPIPE":
                        return e[n - 1].eol;
                    case "ELSE":
                        return s === "THEN";
                    case "CATCH":
                        return s === "TRY";
                    case "FINALLY":
                        return s === "TRY" || s === "CATCH" || s === "THEN";
                    case "CASE":
                    case "DEFAULT":
                        return s === "CASE" || s === "THEN"
                    }
                }

                function l(t, n) {
                    var r;
                    r = e[n - 1], e.splice(r[0] === "," ? n - 1 : n, 0, (o[2] = r[2], o))
                }
                var t, n, r, i, s, o, u, a;
                t = 0;
                while (n = e[++t]) {
                    r = n[0];
                    if (r !== "->" && r !== "THEN" && r !== "ELSE" && r !== "DEFAULT" && r !== "TRY" && r !== "FINALLY" && r !== "DECL") continue;
                    switch (i = e[t + 1][0]) {
                    case "IF":
                        if (r === "ELSE") continue;
                        break;
                    case "INDENT":
                    case "THEN":
                        r === "THEN" && e.splice(t--, 1);
                        continue
                    }
                    s = ["INDENT", 0, n[2]], o = ["DEDENT", 0], r === "THEN" ? (e[t] = s).then = !0 : e.splice(++t, 0, s);
                    switch (!1) {
                    case r !== "DECL":
                        break;
                    case i !== "DOT" && i !== "?" && i !== "," && i !== "PIPE" && i !== "BACKPIPE":
                        --t;
                    case i !== "ID" && i !== "STRNUM" && i !== "LITERAL" || "," !== ((u = e[t + 2]) != null ? u[0] : void 8):
                        l(0, t += 2), ++t;
                        continue;
                    case i !== "(" && i !== "[" && i !== "{" || "," !== ((u = e[a = 1 + tt(e, t + 1)]) != null ? u[0] : void 8):
                        l(0, a), ++t;
                        continue
                    }
                    et(e, t + 1, f, l)
                }
            }

            function G(e) {
                function h(e) {
                    var t;
                    return t = e[0], s(t, F) || !e.spaced && (t === "+-" || t === "CLONE")
                }

                function p(t, n) {
                    var r, i, o;
                    r = t[0];
                    if (r === "POST_IF" || r === "PIPE" || r === "BACKPIPE") return !0;
                    if (!l)
                        if (t.alias && ((i = t[1]) === "&&" || i === "||" || i === "xor") || r === "TO" || r === "BY" || r === "IMPLEMENTS") return !0;
                    o = e[n - 1];
                    switch (r) {
                    case "NEWLINE":
                        return o[0] !== ",";
                    case "DOT":
                    case "?":
                        return !l && (o.spaced || o[0] === "DEDENT");
                    case "SWITCH":
                        c = !0;
                    case "IF":
                    case "CLASS":
                    case "FUNCTION":
                    case "LET":
                    case "WITH":
                    case "CATCH":
                        l = !0;
                        break;
                    case "CASE":
                        if (!c) return !0;
                        l = !0;
                        break;
                    case "INDENT":
                        if (l) return l = !1;
                        return !s(o[0], I);
                    case "WHILE":
                        if (t.done) return !1;
                    case "FOR":
                        return l = !0, R(e, n) || o[0] === "CREMENT" || o[0] === "..." && o.spaced
                    }
                    return !1
                }

                function d(t, n) {
                    e.splice(n, 0, [")CALL", "", e[n - 1][2]])
                }
                var t, n, r, i, o, u, a, f, l, c;
                t = 0, n = [];
                while (r = e[++t]) {
                    r[1] === "do" && e[t + 1][0] === "INDENT" && (i = tt(e, t + 1), e[i + 1][0] === "NEWLINE" && ((o = e[i + 2]) != null ? o[0] : void 8) === "WHILE" ? (r[0] = "DO", e[i + 2].done = !0, e.splice(i + 1, 1)) : ((r = e[1 + t])[0] = "(", (u = e[i])[0] = ")", r.doblock = !0, e.splice(t, 1))), a = r[0], f = e[t - 1], a === "[" && n.push(f[0] === "DOT");
                    if (f[0] === "]") {
                        if (!n.pop()) continue;
                        f.index = !0
                    }
                    if (!((o = f[0]) === "FUNCTION" || o === "LET" || o === "WHERE" || f.spaced && R(e, t, !0))) continue;
                    if (r.doblock) {
                        r[0] = "CALL(", u[0] = ")CALL";
                        continue
                    }
                    if (!h(r)) continue;
                    if (a === "CREMENT")
                        if (r.spaced || !s((o = e[t + 1]) != null ? o[0] : void 8, j)) continue;
                    l = c = !1, e.splice(t++, 0, ["CALL(", "", r[2]]), et(e, t, p, d)
                }
            }

            function Y(e) {
                function h(t, n) {
                    var r, i, s;
                    switch (r = t[0]) {
                    case ",":
                        break;
                    case "NEWLINE":
                        if (c) return !0;
                        break;
                    case "DEDENT":
                        return !0;
                    case "POST_IF":
                    case "FOR":
                    case "WHILE":
                        return c;
                    default:
                        return !1
                    }
                    return i = (s = e[n + 1]) != null ? s[0] : void 8, i !== (r === "," ? "NEWLINE" : "COMMENT") && ":" !== ((s = e[i === "(" ? 1 + tt(e, n + 1) : n + 2]) != null ? s[0] : void 8)
                }

                function p(t, n) {
                    e.splice(n, 0, ["}", "", t[2]])
                }
                var t, n, r, i, o, u, a, f, l, c;
                t = [], n = 0;
                while (r = e[++n]) {
                    if (":" !== (i = r[0])) {
                        switch (!1) {
                        case !s(i, _):
                            o = t.pop();
                            break;
                        case !s(i, M):
                            i === "INDENT" && e[n - 1][0] === "{" && (i = "{"), t.push([i, n])
                        }
                        continue
                    }
                    u = e[n - 1][0] === ")", a = u ? o[1] : n - 1, f = e[a - 1];
                    if ((l = f[0]) !== ":" && l !== "ASSIGN" && l !== "IMPORT" && ((l = t[t.length - 1]) != null ? l[0] : void 8) === "{") continue;
                    t.push(["{"]), c = !f.doblock && (l = f[0]) !== "NEWLINE" && l !== "INDENT";
                    while (((l = e[a - 2]) != null ? l[0] : void 8) === "COMMENT") a -= 2;
                    e.splice(a, 0, ["{", "{", e[a][2]]), et(e, ++n + 1, h, p)
                }
            }

            function Z(e) {
                function T() {
                    65536 < m.push(["STRNUM", g(w), f], [",", ",", f]) && q("range limit exceeded", f)
                }
                var r, i, o, u, a, f, l, c, p, d, v, m, g, y, b, w, E, S, x;
                r = 0;
                while (o = e[++r]) {
                    switch (o[0]) {
                    case "STRNUM":
                        ~"-+".indexOf(u = o[1].charAt(0)) && (o[1] = o[1].slice(1), e.splice(r++, 0, ["+-", u, o[2]]));
                        if (o.callable) continue;
                        break;
                    case "TO":
                    case "TIL":
                        if (e[r - 1][0] !== "[" || !(e[r + 2][0] === "]" && ((a = e[r + 1][1].charAt(0)) === "'" || a === '"' || +e[r + 1][1] >= 0) || e[r + 2][0] === "BY" && ((a = e[r + 3]) != null ? a[0] : void 8) === "STRNUM" && ((a = e[r + 4]) != null ? a[0] : void 8) === "]")) continue;
                        e[r + 2][0] === "BY" && (e[r + 2][0] = "RANGE_BY"), o.op = o[1], i = 0;
                    case "RANGE":
                        f = o[2];
                        if (i != null || e[r - 1][0] === "[" && e[r + 1][0] === "STRNUM" && (e[r + 2][0] === "]" && ((a = e[r + 1][1].charAt(0)) === "'" || a === '"' || +e[r + 1][1] >= 0) || e[r + 2][0] === "RANGE_BY" && ((a = e[r + 3]) != null ? a[0] : void 8) === "STRNUM" && ((a = e[r + 4]) != null ? a[0] : void 8) === "]")) {
                            i == null && (a = V(o[1], f), i = a[0], l = a[1]), a = V(e[r + 1][1], f), c = a[0], p = a[1], (c == null || l ^ p) && q('bad "to" in range', f), d = 1, (v = ((a = e[r + 2]) != null ? a[0] : void 8) === "RANGE_BY") ? (d = +((a = e[r + 3]) != null ? a[1] : void 8)) || q('bad "by" in range', e[r + 2][2]) : i > c && (d = -1), m = [], g = l ? h : String, y = T;
                            if (o.op === "to")
                                for (b = i; d < 0 ? b >= c : b <= c; b += d) w = b, y();
                            else
                                for (b = i; d < 0 ? b > c : b < c; b += d) w = b, y();
                            m.pop() || q("empty range", f), e.splice.apply(e, [r, 2 + 2 * v].concat(n.call(m))), r += m.length - 1
                        } else o[0] = "STRNUM", ((a = e[r + 2]) != null ? a[0] : void 8) === "RANGE_BY" && e.splice(r + 2, 1, ["BY", "by", f]), e.splice(r + 1, 0, ["TO", o.op, f]);
                        i = null;
                        break;
                    case "WORDS":
                        m = [
                            ["[", "[", f = o[2]]
                        ];
                        for (b = 0, E = (a = o[1].match(/\S+/g) || "").length; b < E; ++b) S = a[b], m.push(["STRNUM", t("'", S, f), f], [",", ",", f]);
                        e.splice.apply(e, [r, 1].concat(n.call(m), [
                            ["]", "]", f]
                        ])), r += m.length;
                        break;
                    case "INDENT":
                        if (x = e[r - 1])
                            if (x[1] === "new") e.splice(r++, 0, ["PARAM(", "", o[2]], [")PARAM", "", o[2]], ["->", "", o[2]]);
                            else if ((a = x[0]) === "FUNCTION" || a === "LET") e.splice(r, 0, ["CALL(", "", o[2]], [")CALL", "", o[2]]), r += 2;
                        continue;
                    case "LITERAL":
                    case "}":
                        break;
                    case ")":
                    case ")CALL":
                        if (o[1]) continue;
                        break;
                    case "]":
                        if (o.index) continue;
                        break;
                    case "CREMENT":
                        if (!R(e, r)) continue;
                        break;
                    case "BIOP":
                        !o.spaced && ((a = o[1]) === "+" || a === "-") && e[r + 1][0] !== ")" && (e[r][0] = "+-");
                        continue;
                    default:
                        continue
                    }
                    o.spaced && s(e[r + 1][0], F) && e.splice(++r, 0, [",", ",", o[2]])
                }
            }

            function et(e, t, n, r) {
                var i, o, u;
                i = 0;
                for (; o = e[t]; ++t) {
                    if (!i && n(o, t)) return r(o, t);
                    u = o[0];
                    if (0 > (i += s(u, M) || -s(u, _))) return r(o, t)
                }
            }

            function tt(e, t) {
                var n, r, i, s;
                n = 1, r = D[i = e[t][0]];
                while (s = e[++t]) switch (s[0]) {
                case i:
                    ++n;
                    break;
                case r:
                    if (!--n) return t
                }
                return -1
            }
            var t, r, u, a, f, l, c, h, p, d, v, m, g, y, b, w, E, S, x, T, N, C, k, L, A, O, M, _, D, P, H, B, j, F, I;
            e.lex = function (t, n) {
                return i(e).tokenize(t || "", n || {})
            }, e.rewrite = function (e) {
                var t;
                return e || (e = this.tokens), J(e), Q(e), K(e), G(e), Y(e), Z(e), ((t = e[0]) != null ? t[0] : void 8) === "NEWLINE" && e.shift(), e
            }, e.tokenize = function (e, t) {
                var n, r, i;
                this.inter || (e = e.replace(/[\r\u2028\u2029\uFEFF]/g, "")), e = "\n" + e, this.tokens = [this.last = ["NEWLINE", "\n", 0]], this.line = ~-t.line, this.dents = [], this.closes = [], this.parens = [], this.flags = [], n = 0;
                while (r = e.charAt(n)) switch (r) {
                case " ":
                    n += this.doSpace(e, n);
                    break;
                case "\n":
                    n += this.doLine(e, n);
                    break;
                case "\\":
                    n += this.doBackslash(e, n);
                    break;
                case "'":
                case '"':
                    n += this.doString(e, n, r);
                    break;
                case "0":
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                    n += this.doNumber(e, n);
                    break;
                case "/":
                    switch (e.charAt(n + 1)) {
                    case "*":
                        n += this.doComment(e, n);
                        break;
                    case "/":
                        n += this.doHeregex(e, n);
                        break;
                    default:
                        n += this.doRegex(e, n) || this.doLiteral(e, n)
                    }
                    break;
                case "`":
                    "`" === e.charAt(n + 1) ? n += this.doJS(e, n) : n += this.doLiteral(e, n);
                    break;
                default:
                    n += this.doID(e, n) || this.doLiteral(e, n) || this.doSpace(e, n)
                }
                return this.dedent(this.dent), (i = this.closes.pop()) && this.carp("missing `" + i + "`"), this.inter ? this.rest == null && this.carp("unterminated interpolation") : (this.last.spaced = !0, this.newline()), t.raw || this.rewrite(), this.tokens
            }, e.dent = 0, e.identifiers = {}, e.hasOwn = Object.prototype.hasOwnProperty, e.checkConsistency = function (e, t) {
                if (this.hasOwn.call(this.identifiers, e) && this.identifiers[e] !== t) throw new ReferenceError("Inconsistent use of " + e + " as " + t + " on line " + -~this.line);
                return this.identifiers[e] = t
            }, e.doID = function (e, t) {
                var n, r, i, o, u, a, f, l, h;
                r = (n = (g.lastIndex = t, g).exec(e))[0];
                if (!r) return 0;
                i = c(n[1]), /-/.test(n[1]) && this.checkConsistency(i, n[1]);
                if (O.test(i)) try {
                    Function("var " + i)
                } catch (m) {
                    o = m, this.carp('invalid identifier "' + i + '"')
                }
                u = this.last;
                if (n[2] || u[0] === "DOT" || this.adi()) return this.token("ID", s(i, v) ? (a = Object(i), a.reserved = !0, a) : i), n[2] && this.token(":", ":"), r.length;
                switch (i) {
                case "true":
                case "false":
                case "on":
                case "off":
                case "yes":
                case "no":
                case "null":
                case "void":
                case "arguments":
                case "debugger":
                    f = "LITERAL";
                    break;
                case "new":
                case "do":
                case "typeof":
                case "delete":
                    f = "UNARY";
                    break;
                case "return":
                case "throw":
                    f = "HURL";
                    break;
                case "break":
                case "continue":
                    f = "JUMP";
                    break;
                case "this":
                case "eval":
                case "super":
                    return this.token("LITERAL", i, !0).length;
                case "for":
                    i = [], this.fset("for", !0), this.fset("to", !1);
                    break;
                case "then":
                    this.fset("for", !1), this.fset("to", !1);
                    break;
                case "catch":
                case "function":
                    i = "";
                    break;
                case "in":
                case "of":
                    if (this.fget("for")) {
                        this.fset("for", !1), i === "in" && (this.fset("by", !0), i = "", u[0] === "ID" && ((a = (l = this.tokens)[l.length - 2][0]) === "," || a === "]" || a === "}") && (i = this.tokens.pop()[1], (a = this.tokens)[a.length - 1][0] === "," && this.tokens.pop()));
                        break
                    };
                case "instanceof":
                    u[1] === "!" && (i = this.tokens.pop()[1] + i), f = (a = this.tokens)[a.length - 1][0] === "(" ? "BIOPR" : "RELATION";
                    break;
                case "not":
                    if (u.alias && u[1] === "===") return u[1] = "!==", 3;
                    f = "UNARY", i = "!";
                    break;
                case "and":
                case "or":
                case "xor":
                case "is":
                case "isnt":
                    return this.unline(), f = i === "is" || i === "isnt" ? "COMPARE" : "LOGIC", u[0] === "(" && (f = "BIOP"), this.token(f, function () {
                        switch (i) {
                        case "is":
                            return "===";
                        case "isnt":
                            return "!==";
                        case "or":
                            return "||";
                        case "and":
                            return "&&";
                        case "xor":
                            return "xor"
                        }
                    }()), this.last.alias = !0, i.length;
                case "unless":
                    f = "IF";
                    break;
                case "until":
                    f = "WHILE";
                    break;
                case "import":
                    u[0] === "(" ? (i = "<<<", f = "BIOP") : R(this.tokens) ? i = "<<<" : f = "DECL";
                    break;
                case "export":
                case "const":
                case "var":
                    f = "DECL";
                    break;
                case "with":
                    f = function () {
                        switch (!1) {
                        case !R(this.tokens):
                            return "CLONEPORT";
                        case u[0] !== "(":
                            return "BIOP";
                        default:
                            return "WITH"
                        }
                    }.call(this);
                    break;
                case "when":
                    this.fset("for", !1), f = "CASE";
                case "case":
                    if (this.doCase()) return r.length;
                    break;
                case "match":
                    f = "SWITCH";
                    break;
                case "loop":
                    return this.token("WHILE", i), this.token("LITERAL", "true"), r.length;
                case "let":
                case "own":
                    if (u[0] === "FOR" && !s(i, u[1])) return u[1].push(i), 3;
                default:
                    if (s(i, p)) break;
                    s(i, d) && this.carp('reserved word "' + i + '"');
                    if (!u[1] && ((a = u[0]) === "FUNCTION" || a === "LABEL")) return u[1] = i, u.spaced = !1, r.length;
                    f = "ID";
                    switch (i) {
                    case "otherwise":
                        if ((a = u[0]) === "CASE" || a === "|") return u[0] = "DEFAULT", i.length;
                        break;
                    case "all":
                        if (h = u[1] === "<<<" && "<" || u[1] === "import" && "All") return u[1] += h, 3;
                        break;
                    case "from":
                        this.forange() && (f = "FROM");
                        break;
                    case "to":
                    case "til":
                        this.forange() && this.tokens.push(["FROM", "", this.line], ["STRNUM", "0", this.line]);
                        if (this.fget("from")) this.fset("from", !1), this.fset("by", !0), f = "TO";
                        else {
                            if (!u.callable && u[0] === "STRNUM" && (a = this.tokens)[a.length - 2][0] === "[") return u[0] = "RANGE", u.op = i, i.length;
                            if (s("]", this.closes)) return this.token("TO", i), i.length
                        }
                        break;
                    case "by":
                        u[0] === "STRNUM" && (a = this.tokens)[a.length - 2][0] === "RANGE" && (a = this.tokens)[a.length - 3][0] === "[" ? f = "RANGE_BY" : s("]", this.closes) ? f = "BY" : this.fget("by") && (f = "BY", this.fset("by", !1));
                        break;
                    case "ever":
                        u[0] === "FOR" && (this.fset("for", !1), u[0] = "WHILE", f = "LITERAL", i = "true")
                    }
                }
                f || (f = n[1].toUpperCase()), (f === "COMPARE" || f === "LOGIC" || f === "RELATION") && u[0] === "(" && (f = f === "RELATION" ? "BIOPR" : "BIOP");
                if (f === "THEN" || f === "IF" || f === "WHILE") this.fset("for", !1), this.fset("by", !1);
                return (f === "RELATION" || f === "THEN" || f === "ELSE" || f === "CASE" || f === "DEFAULT" || f === "CATCH" || f === "FINALLY" || f === "IN" || f === "OF" || f === "FROM" || f === "TO" || f === "BY" || f === "EXTENDS" || f === "IMPLEMENTS" || f === "WHERE") && this.unline(), this.token(f, i), r.length
            }, e.doNumber = function (e, t) {
                var n, r, i, s, o, u, a, f;
                T.lastIndex = t;
                if (!(n = (r = T.exec(e))[0])) return 0;
                i = this.last;
                if (r[5] && (i[0] === "DOT" || this.adi())) return this.token("STRNUM", r[4].replace(N, "")), r[4].length;
                if (s = r[1]) {
                    o = parseInt(u = r[2].replace(N, ""), s), a = !1;
                    if (s > 36 || s < 2) /[0-9]/.exec(u) ? this.carp("invalid number base " + s + " (with number " + u + "),base must be from 2 to 36") : a = !0;
                    if (isNaN(o) || o === parseInt(u.slice(0, -1), s)) return this.strnum(r[1]), this.token("DOT", ".~"), this.token("ID", r[2]), n.length;
                    o += ""
                } else o = (r[3] || n).replace(N, ""), r[3] && o.charAt() === "0" && (f = o.charAt(1)) !== "" && f !== "." && this.carp("deprecated octal literal " + r[4]);
                return !i.spaced && i[0] === "+-" ? (i[0] = "STRNUM", i[1] += o, n.length) : (this.strnum(o), n.length)
            }, e.doString = function (e, t, n) {
                var r, i;
                return n === e.charAt(t + 1) ? n === e.charAt(t + 2) ? this.doHeredoc(e, t, n) : (this.strnum(n + n), 2) : n === '"' ? (r = this.interpolate(e, t, n), this.addInterpolated(r, u), 1 + r.size) : (i = (E.lastIndex = t, E).exec(e)[0] || this.carp("unterminated string"), this.strnum(u(this.string(n, i.slice(1, -1)))), this.countLines(i).length)
            }, e.doHeredoc = function (e, t, n) {
                var r, i, s, o, u, f, l, c, h;
                if (n === "'") return~ (r = e.indexOf(n + n + n, t + 3)) || this.carp("unterminated heredoc"), i = e.slice(t + 3, r), s = i.replace(L, ""), this.strnum(a(this.string(n, X(z(s, U(s)))))), this.countLines(i).length + 6;
                o = this.interpolate(e, t, n + n + n), u = U(e.slice(t + 3, t + o.size).replace(L, ""));
                for (f = 0, l = o.length; f < l; ++f) c = f, h = o[f], h[0] === "S" && (c + 1 === o.length && (h[1] = h[1].replace(L, "")), h[1] = z(h[1], u), c === 0 && (h[1] = X(h[1])));
                return this.addInterpolated(o, a), 3 + o.size
            }, e.doComment = function (e, t) {
                var n, r, i;
                n = ~ (r = e.indexOf("*/", t + 2)) ? e.slice(t, r + 2) : e.slice(t) + "*/";
                if ((i = this.last[0]) === "NEWLINE" || i === "INDENT" || i === "THEN") this.token("COMMENT", z(n, this.dent)), this.token("NEWLINE", "\n");
                return this.countLines(n).length
            }, e.doJS = function (e, t) {
                var n, r;
                return S.lastIndex = t, n = S.exec(e)[0] || this.carp("unterminated JS literal"), this.token("LITERAL", (r = Object(z(n.slice(2, -2), this.dent)), r.js = !0, r), !0), this.countLines(n).length
            }, e.doRegex = function (e, t) {
                var n, r, i, s, o;
                if (n = R(this.tokens) || this.last[0] === "CREMENT")
                    if (!this.last.spaced || (r = e.charAt(t + 1)) === " " || r === "=") return 0;
                return r = (C.lastIndex = t, C).exec(e), i = r[0], s = r[1], o = r[2], i ? this.regex(s, o) : !n && this.last[0] !== "(" && this.carp("unterminated regex"), i.length
            }, e.doHeregex = function (e, t) {
                var n, r, i, s, o, u, a, c, h, p, d, v;
                n = this.tokens, r = this.last, i = this.interpolate(e, t, "//"), s = e.slice(t + 2 + i.size), o = this.validate(/^(?:[gimy]{1,4}|[?$]?)/.exec(s)[0]);
                if (i[1]) {
                    if (o === "$") this.adi(), this.token("(", '"');
                    else {
                        n.push(["ID", "RegExp", r[2]], ["CALL(", "", r[2]]);
                        if (o === "?")
                            for (u = i.length - 1; u >= 0; --u) {
                                a = u, c = i[u];
                                if (c[0] === "TOKENS") {
                                    h = i.splice(a, 1)[0][1];
                                    break
                                }
                            }
                    }
                    for (u = 0, p = i.length; u < p; ++u) {
                        a = u, c = i[u];
                        if (c[0] === "TOKENS") n.push.apply(n, c[1]);
                        else {
                            d = c[1].replace(k, "");
                            if (v && !d) continue;
                            v = n.push((c[0] = "STRNUM", c[1] = this.string("'", f(d)), c))
                        }
                        n.push(["+-", "+", n[n.length - 1][2]])
                    }--n.length;
                    if (h || o >= "g") this.token(",", ","), h ? n.push.apply(n, h) : this.token("STRNUM", "'" + o + "'");
                    this.token(o === "$" ? ")" : ")CALL", "")
                } else this.regex(l(i[0][1].replace(k, "")), o);
                return 2 + i.size + o.length
            }, e.doBackslash = function (e, t) {
                var n, r, i;
                return x.lastIndex = t, n = x.exec(e), r = n[0], i = n[1], i ? this.strnum(this.string("'", i)) : this.countLines(r), r.length
            }, e.doLine = function (e, t) {
                var n, r, i, s, o, u, a, f, l;
                n = (w.lastIndex = t, w).exec(e), r = n[0], i = n[1], s = this.countLines(r).length, o = this.last, o.eol = !0, o.spaced = !0;
                if (t + s >= e.length) return s;
                (u = i && (this.emender || (this.emender = RegExp("[^" + i.charAt() + "]"))).exec(i)) && this.carp("contaminated indent " + escape(u));
                if (0 > (a = i.length - this.dent)) this.dedent(-a), this.newline();
                else {
                    f = o[0], l = o[1];
                    if (f === "ASSIGN" && (n = l + "") !== "=" && n !== ":=" && n !== "+=" || f === "+-" || f === "PIPE" || f === "BACKPIPE" || f === "DOT" || f === "LOGIC" || f === "MATH" || f === "COMPARE" || f === "RELATION" || f === "SHIFT" || f === "IN" || f === "OF" || f === "TO" || f === "BY" || f === "FROM" || f === "EXTENDS" || f === "IMPLEMENTS") return s;
                    a ? this.indent(a) : this.newline()
                }
                return this.fset("for", !1), this.fset("by", !1), s
            }, e.doSpace = function (e, t) {
                var n;
                b.lastIndex = t;
                if (n = b.exec(e)[0]) this.last.spaced = !0;
                return n.length
            }, e.doCase = function () {
                var e, t;
                this.seenFor = !1;
                if ((e = this.last[0]) === "ASSIGN" || e === "->" || e === ":" || this.last[0] === "INDENT" && ((e = (t = this.tokens)[t.length - 2][0]) === "ASSIGN" || e === "->" || e === ":")) return this.token("SWITCH", "switch"), this.line++, this.token("CASE", "case")
            }, e.doLiteral = function (e, t) {
                var n, r, i, s, o, u;
                if (!(n = (y.lastIndex = t, y).exec(e)[0])) return 0;
                switch (r = i = n) {
                case "|":
                    r = "CASE";
                    if (this.doCase()) return n.length;
                    break;
                case "|>":
                    r = "PIPE";
                    break;
                case "`":
                    r = "BACKTICK";
                    break;
                case "<<":
                case ">>":
                    r = "COMPOSE";
                    break;
                case "<|":
                    r = "BACKPIPE";
                    break;
                case "+":
                case "-":
                    r = "+-";
                    break;
                case "&&":
                case "||":
                    r = "LOGIC";
                    break;
                case ".&.":
                case ".|.":
                case ".^.":
                    r = "BITWISE";
                    break;
                case "^^":
                    r = "CLONE";
                    break;
                case "**":
                case "^":
                    r = "POWER";
                    break;
                case "?":
                    this.last[0] === "(" ? (this.token("PARAM(", "("), this.token(")PARAM", ")"), this.token("->", "->"), this.token("ID", "it")) : this.last.spaced && (r = "LOGIC");
                    break;
                case "/":
                case "%":
                case "%%":
                    r = "MATH";
                    break;
                case "++":
                case "--":
                    r = "CREMENT";
                    break;
                case "<<<":
                case "<<<<":
                    r = "IMPORT";
                    break;
                case ";":
                    r = "NEWLINE", this.fset("by", !1);
                    break;
                case "..":
                    return this.token("LITERAL", "..", !0), 2;
                case ".":
                    this.last[1] === "?" && (this.last[0] = "?"), r = "DOT";
                    break;
                case ",":
                    switch (this.last[0]) {
                    case ",":
                    case "[":
                    case "(":
                    case "CALL(":
                        this.token("LITERAL", "void");
                        break;
                    case "FOR":
                    case "OWN":
                        this.token("ID", "")
                    }
                    break;
                case "!=":
                case "~=":
                    if (!R(this.tokens) && (s = this.last[0]) !== "(" && s !== "CREMENT") return this.tokens.push(i === "!=" ? ["UNARY", "!", this.line] : ["UNARY", "~", this.line], ["ASSIGN", "=", this.line]), 2;
                case "!~=":
                case "==":
                    i = function () {
                        switch (i) {
                        case "~=":
                            return "==";
                        case "!~=":
                            return "!=";
                        case "==":
                            return "===";
                        case "!=":
                            return "!=="
                        }
                    }(), r = "COMPARE";
                    break;
                case "===":
                case "!==":
                    i += "=";
                case "<":
                case ">":
                case "<=":
                case ">=":
                case "<==":
                case ">==":
                case ">>=":
                case "<<=":
                    r = "COMPARE";
                    break;
                case ".<<.":
                case ".>>.":
                case ".>>>.":
                case "<?":
                case ">?":
                    r = "SHIFT";
                    break;
                case "(":
                    if ((s = this.last[0]) !== "FUNCTION" && s !== "LET" && !this.able(!0) && this.last[1] !== ".@") return this.token("(", "("), this.closes.push(")"), this.parens.push(this.last), 1;
                    r = "CALL(", this.closes.push(")CALL");
                    break;
                case "[":
                case "{":
                    this.adi(), this.closes.push("]}".charAt(i === "{"));
                    break;
                case "}":
                    if (this.inter && i !== (s = this.closes)[s.length - 1]) return this.rest = e.slice(t + 1), 9e9;
                case "]":
                case ")":
                    r === ")" && ((s = this.last[0]) === "+-" || s === "COMPARE" || s === "LOGIC" || s === "MATH" || s === "POWER" || s === "SHIFT" || s === "BITWISE" || s === "CONCAT" || s === "COMPOSE" || s === "RELATION" || s === "PIPE" || s === "BACKPIPE" || s === "IMPORT" || s === "CLONEPORT" || s === "ASSIGN") && ((s = this.tokens)[s.length - 1][0] = function () {
                        switch (this.last[0]) {
                        case "RELATION":
                            return "BIOPR";
                        case "PIPE":
                            return this.parameters(!1, -1), "BIOPP";
                        default:
                            return "BIOP"
                        }
                    }.call(this)), ")" === (r = i = this.pair(i)) && (this.lpar = this.parens.pop());
                    break;
                case "=":
                case ":":
                    if (i === ":") {
                        switch (this.last[0]) {
                        case "ID":
                        case "STRNUM":
                        case ")":
                            break;
                        case "...":
                            this.last[0] = "STRNUM";
                            break;
                        default:
                            r = "LABEL", i = ""
                        }
                        return this.token(r, i), n.length
                    };
                case ":=":
                case "+=":
                case "-=":
                case "*=":
                case "/=":
                case "%=":
                case "%%=":
                case "<?=":
                case ">?=":
                case "**=":
                case "^=":
                case ".&.=":
                case ".|.=":
                case ".^.=":
                case ".<<.=":
                case ".>>.=":
                case ".>>>.=":
                case "++=":
                    if (this.last[1] === "." || this.last[0] === "?" && this.adi()) return this.last[1] += i, i.length;
                    this.last[0] === "LOGIC" ? (i = Object(i)).logic = this.tokens.pop()[1] : (i === "+=" || i === "-=") && !R(this.tokens) && (s = this.last[0]) !== "+-" && s !== "UNARY" && s !== "LABEL" && (this.token("UNARY", i.charAt()), i = "="), r = "ASSIGN";
                    break;
                case "::=":
                    return this.token("DOT", "."), this.token("ID", "prototype"), this.token("IMPORT", "<<"), n.length;
                case "*":
                    if (o = ((s = this.last[0]) === "NEWLINE" || s === "INDENT" || s === "THEN" || s === "=>") && (A.lastIndex = t + 1, A).exec(e)[0].length) return this.tokens.push(["LITERAL", "void", this.line], ["ASSIGN", "=", this.line]), this.indent(t + o - 1 - this.dent - e.lastIndexOf("\n", t - 1)), o;
                    r = R(this.tokens) || this.last[0] === "CREMENT" && R(this.tokens, this.tokens.length - 1) || this.last[0] === "(" ? "MATH" : "STRNUM";
                    break;
                case "@":
                    return this.adi(), this.last[0] === "DOT" && this.last[1] === "." && (s = this.tokens)[s.length - 2][0] === "ID" && (s = this.tokens)[s.length - 2][1] === "constructor" ? (this.tokens.pop(), this.tokens.pop(), this.token("LITERAL", "this", !0), this.adi(), this.token("ID", "constructor", !0)) : this.token("LITERAL", "this", !0), 1;
                case "@@":
                    return this.adi(), this.token("ID", "constructor", !0), 2;
                case "&":
                    return this.token("LITERAL", "arguments"), 1;
                case "!":
                    switch (!1) {
                        default: if (!this.last.spaced) {
                            if (this.last[1] === "require") this.last[0] = "REQUIRE", this.last[1] = "require!";
                            else if (R(this.tokens, null, !0)) this.token("CALL(", "!"), this.token(")CALL", ")");
                            else if (this.last[1] === "typeof") this.last[1] = "classof";
                            else {
                                if (this.last[1] !== "delete") break;
                                this.last[1] = "jsdelete"
                            }
                            return 1
                        }
                    }
                    r = "UNARY";
                    break;
                case "&":
                    R(this.tokens) || (r = "LITERAL");
                    break;
                case "|":
                    r = "BITWISE";
                    break;
                case "~":
                    if (this.dotcat(i)) return 1;
                    r = "UNARY";
                    break;
                case "->":
                case "~>":
                case "-->":
                case "~~>":
                case "!->":
                case "!~>":
                case "!-->":
                case "!~~>":
                    u = "->";
                case "<-":
                case "<~":
                case "<--":
                case "<~~":
                    this.parameters(r = u || "<-");
                    break;
                case "::":
                    this.adi(), i = "prototype", r = "ID";
                    break;
                case "=>":
                    this.unline(), this.fset("for", !1), r = "THEN";
                    break;
                default:
                    switch (i.charAt(0)) {
                    case "(":
                        this.token("CALL(", "("), r = ")CALL", i = ")";
                        break;
                    case "<":
                        return i.length < 4 && this.carp("unterminated words"), this.token("WORDS", i.slice(2, -2), this.adi()), i.length
                    }
                }
                return (r === "+-" || r === "COMPARE" || r === "LOGIC" || r === "MATH" || r === "POWER" || r === "SHIFT" || r === "BITWISE" || r === "CONCAT" || r === "COMPOSE" || r === "RELATION" || r === "PIPE" || r === "BACKPIPE" || r === "IMPORT") && this.last[0] === "(" && (r = r === "BACKPIPE" ? "BIOPBP" : "BIOP"), (r === "," || r === "CASE" || r === "PIPE" || r === "BACKPIPE" || r === "DOT" || r === "LOGIC" || r === "COMPARE" || r === "MATH" || r === "POWER" || r === "IMPORT" || r === "SHIFT" || r === "BITWISE") && this.unline(), this.token(r, i), n.length
            }, e.token = function (e, t, n) {
                return this.tokens.push(this.last = [e, t, this.line]), n && (this.last.callable = !0), t
            }, e.indent = function (e) {
                this.dent += e, this.dents.push(this.token("INDENT", e)), this.closes.push("DEDENT")
            }, e.dedent = function (e) {
                var t;
                this.dent -= e;
                while (e > 0 && (t = this.dents.pop())) e < t && !this.inter && this.carp("unmatched dedent (" + e + " for " + t + ")"), this.pair("DEDENT"), e -= typeof t == "number" ? this.token("DEDENT", t) : t
            }, e.newline = function () {
                var e;
                this.last[1] === "\n" || this.tokens.push(this.last = (e = ["NEWLINE", "\n", this.line], e.spaced = !0, e))
            }, e.unline = function () {
                var e;
                if (!this.tokens[1]) return;
                switch (this.last[0]) {
                case "INDENT":
                    (e = this.dents)[e.length - 1] += "";
                case "NEWLINE":
                    this.tokens.length--
                }
            }, e.parameters = function (e, t) {
                var n, r, i, s, o;
                if (this.last[0] === ")" && ")" === this.last[1]) {
                    this.lpar[0] = "PARAM(", this.last[0] = ")PARAM";
                    return
                }
                if (e === "->") this.token("PARAM(", "");
                else {
                    for (n = (r = this.tokens).length - 1; n >= 0; --n) {
                        i = n, s = r[n];
                        if ((o = s[0]) === "NEWLINE" || o === "INDENT" || o === "THEN" || o === "=>" || o === "(") break
                    }
                    this.tokens.splice(i + 1, 0, ["PARAM(", "", s[2]])
                }
                t ? this.tokens.splice(this.tokens.length + t, 0, [")PARAM", "", s[2]]) : this.token(")PARAM", "")
            }, e.interpolate = function (t, n, r) {
                var o, u, a, f, l, h, p, d, v, m, y, b, w, E, S;
                o = [], u = r.charAt(0), a = 0, f = -1, t = t.slice(n + r.length);
                while (l = t.charAt(++f)) {
                    switch (l) {
                    case u:
                        if (r !== t.slice(f, f + r.length)) continue;
                        return o.push(["S", this.countLines(t.slice(0, f)), this.line]), o.size = a + f + r.length, o;
                    case "#":
                        h = t.charAt(f + 1), p = s(h, ["@"]) && h || (g.lastIndex = f + 1, g).exec(t)[1];
                        if (!p && h !== "{") continue;
                        break;
                    case "\\":
                        ++f;
                    default:
                        continue
                    }
                    if (f || w && !d) d = o.push(["S", this.countLines(t.slice(0, f)), this.line]);
                    if (p) {
                        v = p.length, p === "@" && (p = "this");
                        if (s(p, ["this"])) m = "LITERAL";
                        else {
                            p = c(p);
                            try {
                                Function("'use strict'; var " + p)
                            } catch (x) {
                                y = x, this.carp('invalid variable interpolation "' + p + '"')
                            }
                            m = "ID"
                        }
                        t = t.slice(b = f + 1 + v), o.push(["TOKENS", w = [
                            [m, p, this.line]
                        ]])
                    } else {
                        E = (S = i(e), S.inter = !0, S.emender = this.emender, S), w = E.tokenize(t.slice(f + 2), {
                            line: this.line,
                            raw: !0
                        }), b = t.length - E.rest.length, t = E.rest, this.line = E.line;
                        while (((S = w[0]) != null ? S[0] : void 8) === "NEWLINE") w.shift();
                        w.length && (w.unshift(["(", "(", w[0][2]]), w.push([")", ")", this.line]), o.push(["TOKENS", w]))
                    }
                    a += b, f = -1
                }
                this.carp("missing `" + r + "`")
            }, e.addInterpolated = function (e, t) {
                var n, r, i, s, o, u, a, f, l, c, h;
                if (!e[1]) return this.strnum(t(this.string('"', e[0][1])));
                n = this.tokens, r = this.last, i = !r.spaced && r[1] === "%" ? (--n.length, this.last = r = n[n.length - 1], ["[", "]", [",", ","]]) : ["(", ")", ["+-", "+"]], s = i[0], o = i[1], u = i[2], a = this.adi(), n.push([s, '"', r[2]]);
                for (f = 0, l = e.length; f < l; ++f) {
                    c = f, h = e[f];
                    if (h[0] === "TOKENS") n.push.apply(n, h[1]);
                    else {
                        if (c > 1 && !h[1]) continue;
                        n.push(["STRNUM", t(this.string('"', h[1])), h[2]])
                    }
                    n.push(u.concat(n[n.length - 1][2]))
                }--n.length, this.token(o, "", a)
            }, e.strnum = function (e) {
                this.token("STRNUM", e, this.adi() || this.last[0] === "DOT")
            }, e.regex = function (e, t) {
                var n;
                try {
                    RegExp(e)
                } catch (r) {
                    n = r, this.carp(n.message)
                }
                return t === "$" ? this.strnum(this.string("'", f(e))) : this.token("LITERAL", "/" + (e || "(?:)") + "/" + this.validate(t))
            }, e.adi = function () {
                if (this.last.spaced) return;
                if (!R(this.tokens)) return;
                return this.token("DOT", ".")
            }, e.dotcat = function (e) {
                if (this.last[1] === "." || this.adi()) return this.last[1] += e
            }, e.pair = function (e) {
                var t, n;
                return e === (t = (n = this.closes)[n.length - 1]) || ")CALL" === t && e === ")" ? (this.unline(), this.closes.pop()) : ("DEDENT" !== t && this.carp("unmatched `" + e + "`"), this.dedent((n = this.dents)[n.length - 1]), this.pair(e))
            }, e.able = function (e) {
                return !this.last.spaced && R(this.tokens, null, e)
            }, e.countLines = function (e) {
                var t;
                while (t = 1 + e.indexOf("\n", t))++this.line;
                return e
            }, e.forange = function () {
                var e, t, n;
                return ((e = (t = this.tokens)[t.length - 2 - ((n = this.last[0]) === "NEWLINE" || n === "INDENT")]) != null ? e[0] : void 8) === "FOR" || this.last[0] === "FOR" ? (this.fset("for", !1), this.fset("from", !0), !0) : !1
            }, e.validate = function (e) {
                var t;
                return (t = e && /(.).*\1/.exec(e)) && this.carp("duplicate regex flag `" + t[1] + "`"), e
            }, e.fget = function (e) {
                var t;
                return (t = this.flags[this.closes.length]) != null ? t[e] : void 8
            }, e.fset = function (e, t) {
                var n, r;
                ((n = this.flags)[r = this.closes.length] || (n[r] = {}))[e] = t
            }, e.carp = function (e) {
                q(e, this.line)
            }, e.string = function (e, n) {
                return t(e, n, this.line)
            }, t = function (e) {
                return function (t, n, r) {
                    return n = n.replace(e, function (e, n, i, s) {
                        return e === t || e === "\\" ? "\\" + e : n ? "\\x" + (256 + parseInt(n, 8)).toString(16).slice(1) : (i && q("malformed character escape sequence", r), !s || t === s ? e : s)
                    }), t + n + t
                }
            }.call(this, /['"]|\\(?:([0-3]?[0-7]{2}|[1-7]|0(?=[89]))|x[\dA-Fa-f]{2}|u[\dA-Fa-f]{4}|([xu])|[\\0bfnrtv]|[^\n\S]|([\w\W]))?/g), r = /\n(?!$)[^\n\S]*/mg, u = W(/\n[^\n\S]*/g, ""), a = W(/\n/g, "\\n"), f = W(/\\/g, "\\\\"), l = W(/(\\.)|\//g, function () {
                return arguments[1] || "\\/"
            }), c = W(/-[a-z]/ig, function (e) {
                return e.charAt(1).toUpperCase()
            }), h = typeof JSON == "undefined" || JSON === null ? $ : function (e) {
                switch (e) {
                case 8232:
                case 8233:
                    return $(e);
                default:
                    return JSON.stringify(String.fromCharCode(e))
                }
            }, p = ["true", "false", "null", "this", "void", "super", "return", "throw", "break", "continue", "if", "else", "for", "while", "switch", "case", "default", "try", "catch", "finally", "function", "class", "extends", "implements", "new", "do", "delete", "typeof", "in", "instanceof", "let", "with", "var", "const", "import", "export", "debugger"], d = ["enum", "interface", "package", "private", "protected", "public", "static", "yield"], v = p.concat(d), m = ["xor", "match", "where"], g = /((?!\s)[a-z_$\xAA-\uFFDC](?:(?!\s)[\w$\xAA-\uFFDC]|-[a-z])*)([^\n\S]*:(?![:=]))?|/ig, y = /[-\/^]=|[%+:*]{1,2}=|\.(?:[&\|\^]|<<|>>>?)\.=?|\.{1,3}|\^\^|!?-->|!?~~>|<--|<~~|([-+&|:])\1|%%|&|\([^\n\S]*\)|!?[-~]>|<[-~]|[!=]==?|!?\~=|@@?|<\[(?:[\s\S]*?\]>)?|<<<<?|<\||[<>]==|<<=|>>=|<<|>>|[<>]\??=?|\|>|\||=>|\*\*|\^|`|[^\s#]?/g, b = /[^\n\S]*(?:#.*)?/g, w = /(?:\s*#.*)*(?:\n([^\n\S]*))*/g, E = /'[^\\']*(?:\\[\s\S][^\\']*)*'|/g, S = /``[^\\`]*(?:\\[\s\S][^\\`]*)*``|/g, x = /\\(?:(\S[^\s,;)}\]]*)|\s*)/g, T = /0x[\dA-Fa-f][\dA-Fa-f_]*|(\d*)~([\dA-Za-z]\w*)|((\d[\d_]*)(\.\d[\d_]*)?(?:e[+-]?\d[\d_]*)?)[$\w]*|/g, N = /_+/g, C = /\/([^[\/\n\\]*(?:(?:\\.|\[[^\]\n\\]*(?:\\.[^\]\n\\]*)*\])[^[\/\n\\]*)*)\/([gimy]{1,4}|\$?)|/g, k = /\s+(?:#.*)?/g, L = /\n[^\n\S]*$/, A = /[^\n\S]*[^#\s]?/g, O = /[\x80-\uFFFF]/, M = ["(", "[", "{", "CALL(", "PARAM(", "INDENT"], _ = [")", "]", "}", ")CALL", ")PARAM", "DEDENT"], D = o(function () {
                var e, t, n, r = {};
                for (e = 0, n = (t = M).length; e < n; ++e) P = e, H = t[e], r[H] = _[P];
                return r
            }(), function () {
                var e, t, n, r = {};
                for (e = 0, n = (t = _).length; e < n; ++e) P = e, B = t[e], r[B] = M[P];
                return r
            }()), j = ["(", "{", "[", "ID", "STRNUM", "LITERAL", "LET", "WITH", "WORDS"], F = j.concat(["...", "UNARY", "CREMENT", "PARAM(", "FUNCTION", "IF", "SWITCH", "TRY", "CLASS", "RANGE", "LABEL", "DECL", "DO", "BIOPBP"]), I = [",", ":", "->", "ELSE", "ASSIGN", "IMPORT", "UNARY", "DEFAULT", "TRY", "FINALLY", "HURL", "DECL", "DO", "LET", "FUNCTION"]
        }.call(this, e["./lexer"] = {}),
        function (e) {
            function ft(e, t) {
                this.parent = e, this.shared = t, this.variables = {}
            }

            function lt() {
                return !0
            }

            function ct() {
                return !1
            }

            function ht() {
                return this
            }

            function pt() {}

            function dt(e) {
                return ft.root.assign(e + "$", Y[e])
            }

            function vt(e, t) {
                return e.replace(/\n/g, "\n" + t)
            }

            function mt(e, t, n) {
                var r, i, s;
                for (r = 0, i = n.length; r < i; ++r) s = n[r], t = e(t, s);
                return t
            }
            var t, l, c, h, p, d, v, m, g, y, b, w, E, S, x, T, N, C, k, L, A, O, M, _, D, P, H, B, j, F, I, q, R, U, z, W, X, V, $, J, K, Q, G, Y, Z, et, tt, nt, rt, it, st, ot, ut, at;
            (t = function () {
                throw Error("unimplemented")
            }).prototype = {
                compile: function (e, t) {
                    var n, r, i, s, u, a, f;
                    n = o({}, e), t != null && (n.level = t), r = this.unfoldSoak(n) || this;
                    if (n.level && r.isStatement()) return r.compileClosure(n);
                    i = (r.tab = n.indent, r).compileNode(n);
                    if (s = r.temps)
                        for (u = 0, a = s.length; u < a; ++u) f = s[u], n.scope.free(f);
                    return i
                },
                compileClosure: function (e) {
                    var t, n, r, i, s;
                    return (t = this.getJump()) && t.carp("inconvertible statement"), n = O([], c(this)), r = b(), this.traverseChildren(function (e) {
                        switch (e.value) {
                        case "this":
                            s = !0;
                            break;
                        case "arguments":
                            i = e.value = "args$"
                        }
                    }), s && (r.args.push(p("this")), r.method = ".call"), i && (r.args.push(p("arguments")), n.params.push(d("args$"))), D(y((n.wrapper = !0, n["void"] = this["void"], n), [r]), !0).compile(e)
                },
                compileBlock: function (e, t) {
                    var n;
                    return (n = t != null ? t.compile(e, Z) : void 8) ? "{\n" + n + "\n" + this.tab + "}" : "{}"
                },
                cache: function (e, t, n) {
                    var r, i, s;
                    return this.isComplex() ? (i = C(s = d(e.scope.temporary()), this), n != null ? (i = i.compile(e, n), t && e.scope.free(s.value), [i, s.value]) : t ? [i, (s.temp = !0, s)] : [i, s, [s.value]]) : [r = n != null ? this.compile(e, n) : this, r]
                },
                compileLoopReference: function (e, t, n) {
                    var r, i, s;
                    return this instanceof d && e.scope.check(this.value) || this instanceof T && ((r = this.op) === "+" || r === "-") && -1 / 0 < (r = +this.it.value) && r < 1 / 0 || this instanceof p && !this.isComplex() ? [r = this.compile(e), r] : (i = C(d(s = e.scope.temporary(t)), this), n || (i["void"] = !0), [s, i.compile(e, n ? it : et)])
                },
                eachChild: function (e) {
                    var t, n, r, i, s, o, u, a, f, l;
                    for (t = 0, r = (n = this.children).length; t < r; ++t) {
                        i = n[t];
                        if (s = this[i])
                            if ("length" in s)
                                for (o = 0, u = s.length; o < u; ++o) {
                                    a = o, f = s[o];
                                    if (l = e(f, i, a)) return l
                                } else if ((l = e(s, i)) != null) return l
                    }
                },
                traverseChildren: function (e, t) {
                    var n = this;
                    return this.eachChild(function (r, i, s) {
                        var o;
                        return (o = e(r, n, i, s)) != null ? o : r.traverseChildren(e, t)
                    })
                },
                anaphorize: function () {
                    function r(e) {
                        var t;
                        return e.value === "that" || ((t = e.aSource) ? (t = e[t]) ? r(t) : void 8 : e.eachChild(r))
                    }
                    var e, t, n;
                    return this.children = this.aTargets, this.eachChild(r) && ((e = this)[t = this.aSource] instanceof A && (e = e[t], t = "it"), e[t].value !== "that" && (e[t] = C(d("that"), e[t]))), delete this.children, n = this[this.aSource], n.cond = !0, n
                },
                carp: function (e, t) {
                    throw t == null && (t = SyntaxError), t(e + " on line " + (this.line || this.traverseChildren(function (e) {
                        return e.line
                    })))
                },
                delegate: function (e, t) {
                    function s(e) {
                        this[e] = function (n) {
                            return t.call(this, e, n)
                        }
                    }
                    var n, r, i;
                    for (n = 0, r = e.length; n < r; ++n) i = e[n], s.call(this, i)
                },
                children: [],
                terminator: ";",
                isComplex: lt,
                isStatement: ct,
                isAssignable: ct,
                isCallable: ct,
                isEmpty: ct,
                isArray: ct,
                isString: ct,
                isRegex: ct,
                isMatcher: function () {
                    return this.isString() || this.isRegex()
                },
                assigns: ct,
                ripName: pt,
                unfoldSoak: pt,
                unfoldAssign: pt,
                unparen: ht,
                unwrap: ht,
                maybeKey: ht,
                expandSlice: ht,
                varName: String,
                getAccessors: pt,
                getCall: pt,
                getDefault: pt,
                getJump: pt,
                invert: function () {
                    return T("!", this, !0)
                },
                invertCheck: function (e) {
                    return e.inverted ? this.invert() : this
                },
                addElse: function (e) {
                    return this["else"] = e, this
                },
                makeReturn: function (e) {
                    return e ? b.make(V(e + ".push"), [this]) : j(this)
                },
                makeObjReturn: function (e) {
                    var t, n;
                    return e ? (t = this.lines[0], this.lines[0] instanceof z && (t = t.then.lines[0]), n = t.items, (n[0] == null || n[1] == null) && this.carp("must specify both key and value for object comprehension"), C(y(d(e)).add(m(n[0], ".", !0)), n[1])) : j(this)
                },
                show: String,
                toString: function (e) {
                    var t, n;
                    e || (e = ""), t = "\n" + e + this.constructor.displayName;
                    if (n = this.show()) t += " " + n;
                    return this.eachChild(function (n) {
                        t += n.toString(e + ot)
                    }), t
                },
                stringify: function (e) {
                    return JSON.stringify(this, null, e)
                },
                toJSON: function () {
                    return o({
                        type: this.constructor.displayName
                    }, this)
                }
            }, e.parse = function (t) {
                return e.fromJSON(JSON.parse(t))
            }, e.fromJSON = function () {
                function t(n) {
                    var r, s, o, u, a, f, l, c = [];
                    if (!n || typeof n != "object") return n;
                    if (r = n.type) {
                        s = i(e[r].prototype);
                        for (o in n) u = n[o], s[o] = t(u);
                        return s
                    }
                    if (n.length != null) {
                        for (a = 0, f = n.length; a < f; ++a) l = n[a], c.push(t(l));
                        return c
                    }
                    return n
                }
                return t
            }(), l = {
                show: function () {
                    return this.negated && "!"
                },
                invert: function () {
                    return this.negated = !this.negated, this
                }
            }, e.Block = c = function (e) {
                function s(e) {
                    var t = this instanceof a ? this : new a;
                    return e || (e = []), "length" in e ? t.lines = e : (t.lines = [], t.add(e)), t
                }

                function a() {}
                var t = u((o(s, e).displayName = "Block", s), e).prototype,
                    i = s;
                return a.prototype = t, t.children = ["lines"], t.toJSON = function () {
                    return delete this.back, e.prototype.toJSON.call(this)
                }, t.add = function (e) {
                    var t, n;
                    e = e.unparen();
                    switch (!1) {
                    case !(t = this.back):
                        t.add(e);
                        break;
                    case !(t = e.lines):
                        (n = this.lines).push.apply(n, t);
                        break;
                    default:
                        this.lines.push(e);
                        if (t = (n = e.back, delete e.back, n)) this.back = t
                    }
                    return this
                }, t.prepend = function () {
                    var e;
                    return (e = this.lines).splice.apply(e, [this.neck(), 0].concat(n.call(arguments))), this
                }, t.pipe = function (e, t) {
                    var n;
                    n = t === "|>" ? this.lines.pop() : e, r.call(n).slice(8, -1) !== "Array" && (n = [n]);
                    switch (t) {
                    case "|>":
                        this.lines.push(b.make(e, n, {
                            pipe: !0
                        }));
                        break;
                    case "<|":
                        this.lines.push(b.make(this.lines.pop(), n))
                    }
                    return this
                }, t.unwrap = function () {
                    return this.lines.length === 1 ? this.lines[0] : this
                }, t.chomp = function () {
                    var e, t, n;
                    e = this.lines, t = e.length;
                    while (n = e[--t])
                        if (!n.comment) break;
                    return e.length = t + 1, this
                }, t.neck = function () {
                    var e, t, n, r, i;
                    e = 0;
                    for (t = 0, r = (n = this.lines).length; t < r; ++t) {
                        i = n[t];
                        if (!(i.comment || i instanceof p)) break;
                        ++e
                    }
                    return e
                }, t.isComplex = function () {
                    var e;
                    return this.lines.length > 1 || ((e = this.lines[0]) != null ? e.isComplex() : void 8)
                }, t.delegate(["isCallable", "isArray", "isString", "isRegex"], function (e) {
                    var t, n;
                    return (t = (n = this.lines)[n.length - 1]) != null ? t[e]() : void 8
                }), t.getJump = function (e) {
                    var t, n, r, i, s;
                    for (t = 0, r = (n = this.lines).length; t < r; ++t) {
                        i = n[t];
                        if (s = i.getJump(e)) return s
                    }
                }, t.makeReturn = function (e) {
                    var t, n, r, i;
                    return this.chomp(), (t = (i = n = this.lines)[r = i.length - 1] != null ? n[r] = n[r].makeReturn(e) : void 8) && t instanceof j && !t.it && --this.lines.length, this
                }, t.compile = function (e, t) {
                    var n, r, i, s, o, u, a, f;
                    t == null && (t = e.level);
                    if (t) return this.compileExpressions(e, t);
                    e.block = this, n = e.indent, i = [];
                    for (s = 0, u = (o = this.lines).length; s < u; ++s) {
                        a = o[s], a = a.unfoldSoak(e) || a;
                        if (!(f = (a.front = !0, a).compile(e, t))) continue;
                        a.isStatement() || (f += a.terminator), i.push(n + f)
                    }
                    return r = i, r.join("\n")
                }, t.compileRoot = function (e) {
                    var t, n, r, i, s, u;
                    t = o({
                        level: Z,
                        scope: this.scope = ft.root = new ft
                    }, e);
                    if (n = (r = t.saveScope, delete t.saveScope, r)) t.scope = n.savedScope || (n.savedScope = t.scope);
                    return delete t.filename, t.indent = (i = (r = t.bare, delete t.bare, r)) ? "" : ot, /^\s*(?:[/#]|javascript:)/.test((r = this.lines[0]) != null ? r.code : void 8) && (s = this.lines.shift().code + "\n"), (r = t.eval, delete t.eval, r) && this.chomp().lines.length && (i ? this.lines.push(D(this.lines.pop())) : this.makeReturn()), u = this.compileWithDeclarations(t), i || (u = "(function(){\n" + u + "\n}).call(this);\n"), [s] + u
                }, t.compileWithDeclarations = function (e) {
                    var t, n, r, i, s;
                    e.level = Z, t = "";
                    if (n = this.neck()) r = this.lines.splice(n, 9e9), t = this.compile(e), this.lines = r;
                    return (i = this.compile(e)) ? (t && t + "\n") + ((s = this.scope) ? s.emit(i, e.indent) : i) : t
                }, t.compileExpressions = function (e, t) {
                    var n, r, i, s, o, u, a, f;
                    n = this.chomp().lines, r = -1;
                    while (i = n[++r]) i.comment && n.splice(r--, 1);
                    n.length || n.push(p("void")), n[0].front = this.front, n[n.length - 1]["void"] = this["void"];
                    if (!n[1]) return n[0].compile(e, t);
                    s = "", o = n.pop();
                    for (u = 0, a = n.length; u < a; ++u) f = n[u], s += (f["void"] = !0, f).compile(e, et) + ", ";
                    return s += o.compile(e, et), t < tt ? s : "(" + s + ")"
                }, s
            }(t), h = function (e) {
                function r() {
                    r.superclass.apply(this, arguments)
                }
                var t = u((o(r, e).displayName = "Atom", r), e).prototype,
                    n = r;
                return t.show = function () {
                    return this.value
                }, t.isComplex = ct, r
            }(t), e.Literal = p = function (e) {
                function r(e) {
                    var t = this instanceof i ? this : new i;
                    return t.value = e, e.js ? V(e + "", !0) : e === "super" ? new _ : t
                }

                function i() {}
                var t = u((o(r, e).displayName = "Literal", r), e).prototype,
                    n = r;
                return i.prototype = t, t.isEmpty = function () {
                    var e;
                    return (e = this.value) === "void" || e === "null"
                }, t.isCallable = function () {
                    var e;
                    return (e = this.value) === "this" || e === "eval" || e === ".."
                }, t.isString = function () {
                    return 0 <= "'\"".indexOf((this.value + "").charAt())
                }, t.isRegex = function () {
                    return (this.value + "").charAt() === "/"
                }, t.isComplex = function () {
                    return this.isRegex() || this.value === "debugger"
                }, t.isWhat = function () {
                    switch (!1) {
                    case !this.isEmpty():
                        return "empty";
                    case !this.isCallable():
                        return "callable";
                    case !this.isString():
                        return "string";
                    case !this.isRegex():
                        return "regex";
                    case !this.isComplex():
                        return "complex"
                    }
                }, t.varName = function () {
                    return /^\w+$/.test(this.value) ? "$" + this.value : ""
                }, t.compile = function (e, t) {
                    var n, r;
                    t == null && (t = e.level);
                    switch (n = this.value + "") {
                    case "this":
                        return ((r = e.scope.fun) != null ? r.bound : void 8) || n;
                    case "void":
                        if (!t) return "";
                        n += " 8";
                    case "null":
                        t === it && this.carp("invalid use of " + this.value);
                        break;
                    case "on":
                    case "yes":
                        n = "true";
                        break;
                    case "off":
                    case "no":
                        n = "false";
                        break;
                    case "*":
                        this.carp("stray star");
                        break;
                    case "..":
                        (n = e.ref) || this.carp("stray reference"), this.cascadee || (n.erred = !0);
                        break;
                    case "debugger":
                        if (t) return "(function(){\n" + ot + e.indent + "debugger;\n" + e.indent + "}())"
                    }
                    return n
                }, r
            }(h), e.Var = d = function (e) {
                function r(e) {
                    var t = this instanceof i ? this : new i;
                    return t.value = e, t
                }

                function i() {}
                var t = u((o(r, e).displayName = "Var", r), e).prototype,
                    n = r;
                return i.prototype = t, t.isAssignable = t.isCallable = lt, t.assigns = function (e) {
                    return e === this.value
                }, t.maybeKey = function () {
                    var e;
                    return e = v(this.value), e.line = this.line, e
                }, t.varName = t.show, t.compile = function (e) {
                    return this.temp ? e.scope.free(this.value) : this.value
                }, r
            }(h), e.Key = v = function (e) {
                function r(e, t) {
                    var n = this instanceof i ? this : new i;
                    return n.reserved = t || e.reserved, n.name = "" + e, n
                }

                function i() {}
                var t = u((o(r, e).displayName = "Key", r), e).prototype,
                    n = r;
                return i.prototype = t, t.isComplex = ct, t.assigns = function (e) {
                    return e === this.name
                }, t.varName = function () {
                    var e;
                    return e = this.name, this.reserved || e === "arguments" || e === "eval" ? "$" + e : e
                }, t.compile = t.show = function () {
                    return this.reserved ? "'" + this.name + "'" : this.name
                }, r
            }(t), e.Index = m = function (e) {
                function r(e, t, n) {
                    var r, s = this instanceof i ? this : new i;
                    t || (t = ".");
                    if (n && e instanceof x) switch (e.items.length) {
                    case 1:
                        (r = e.items[0]) instanceof P || (e = D(r))
                    }
                    switch (t) {
                    case "[]":
                        s.vivify = x;
                        break;
                    case "{}":
                        s.vivify = E;
                        break;
                    default:
                        "=" === t.slice(-1) && (s.assign = t.slice(1))
                    }
                    return s.key = e, s.symbol = t, s
                }

                function i() {}
                var t = u((o(r, e).displayName = "Index", r), e).prototype,
                    n = r;
                return i.prototype = t, t.children = ["key"], t.show = function () {
                    return [this.soak ? "?" : void 8] + this.symbol
                }, t.isComplex = function () {
                    return this.key.isComplex()
                }, t.varName = function () {
                    var e;
                    return ((e = this.key) instanceof v || e instanceof p) && this.key.varName()
                }, t.compile = function (e) {
                    var t;
                    return t = this.key.compile(e, et), this.key instanceof v && "'" !== t.charAt(0) ? "." + t : "[" + t + "]"
                }, r
            }(t), e.Slice = g = function (e) {
                function r(e) {
                    var t = this instanceof i ? this : new i;
                    return t.type = e.type, t.target = e.target, t.from = e.from, t.to = e.to, t.from == null && (t.from = p(0)), t.to && t.type === "to" && (t.to = N("+", t.to, p("1"))), t
                }

                function i() {}
                var t = u((o(r, e).displayName = "Slice", r), e).prototype,
                    n = r;
                return i.prototype = t, t.children = ["target", "from", "to"], t.show = function () {
                    return this.type
                }, t.compileNode = function (e) {
                    var t;
                    return this.to && this.type === "to" && (this.to = N("||", this.to, p("9e9"))), t = [this.target, this.from], this.to && t.push(this.to), y(d(dt("slice"))).add(m(v("call"), ".", !0)).add(b(t)).compile(e)
                }, r
            }(t), e.Chain = y = function (e) {
                function i(e, t) {
                    var n = this instanceof a ? this : new a;
                    return !t && e instanceof i ? e : (n.head = e, n.tails = t || [], n)
                }

                function a() {}
                var t = u((o(i, e).displayName = "Chain", i), e).prototype,
                    r = i;
                return a.prototype = t, t.children = ["head", "tails"], t.add = function (e) {
                    var t, n, r, o, u, a, f, l;
                    if (this.tails.length) {
                        t = (n = this.tails)[n.length - 1];
                        if (t instanceof b && ((n = t.partialized) != null ? n.length : void 8) === 1 && e.args.length === 1) return r = t.partialized[0].head.value, delete t.partialized, t.args[r] = e.args[0], this
                    }
                    this.head instanceof A && (n = i(this.head.it), this.head = n.head, this.tails = n.tails, e.soak = !0), this.tails.push(e), o = this.head instanceof D && this.head.it instanceof N && !this.head.it.partial ? this.head.it : this.head instanceof N && !this.head.partial ? this.head : void 8;
                    if (this.head instanceof _)!this.head.called && e instanceof b && !e.method ? (e.method = ".call", e.args.unshift(p("this")), this.head.called = !0) : !this.tails[1] && ((n = e.key) != null ? n.name : void 8) === "prototype" && (this.head.sproto = !0);
                    else if (u = (n = e.vivify, delete e.vivify, n)) this.head = C(i(this.head, this.tails.splice(0, 9e9)), u(), "=", "||");
                    else if (e instanceof b && this.tails.length === 1 && o && s(o.op, a = ["&&", "||", "xor"])) return f = e, l = function (e, t) {
                        var n;
                        return n = e[t], n instanceof N && s(n.op, a) ? (l(n, "first"), l(n, "second")) : e[t] = i(n).autoCompare(f.args)
                    }, l(o, "first"), l(o, "second"), o;
                    return this
                }, t.autoCompare = function (e) {
                    var t;
                    t = this.head;
                    switch (!1) {
                    case !(t instanceof p):
                        return N("===", t, e[0]);
                    case !(t instanceof T && t.it instanceof p):
                        return N("===", t, e[0]);
                    case !(t instanceof x || t instanceof E):
                        return N("====", t, e[0]);
                    case !(t instanceof d && t.value === "_"):
                        return p("true");
                    default:
                        return this.add(b(e)) || []
                    }
                }, t.flipIt = function () {
                    return this.flip = !0, this
                }, t.unwrap = function () {
                    return this.tails.length ? this : this.head
                }, t.delegate(["getJump", "assigns", "isStatement", "isString"], function (e, t) {
                    return !this.tails.length && this.head[e](t)
                }), t.isComplex = function () {
                    return this.tails.length || this.head.isComplex()
                }, t.isCallable = function () {
                    var e, t;
                    return (e = (t = this.tails)[t.length - 1]) ? (t = e.key) == null || !t.items : this.head.isCallable()
                }, t.isArray = function () {
                    var e, t;
                    return (e = (t = this.tails)[t.length - 1]) ? e.key instanceof x : this.head.isArray()
                }, t.isRegex = function () {
                    return this.head.value === "RegExp" && !this.tails[1] && this.tails[0] instanceof b
                }, t.isAssignable = function () {
                    var e, t, n, r;
                    if (!(e = (t = this.tails)[t.length - 1])) return this.head.isAssignable();
                    if (!(e instanceof m) || e.key instanceof w || e.symbol === ".~") return !1;
                    for (n = 0, r = (t = this.tails).length; n < r; ++n) {
                        e = t[n];
                        if (e.assign) return !1
                    }
                    return !0
                }, t.isSimpleAccess = function () {
                    return this.tails.length === 1 && !this.head.isComplex() && !this.tails[0].isComplex()
                }, t.makeReturn = function (t) {
                    return this.tails.length ? e.prototype.makeReturn.apply(this, arguments) : this.head.makeReturn(t)
                }, t.getCall = function () {
                    var e, t;
                    return (e = (t = this.tails)[t.length - 1]) instanceof b && e
                }, t.varName = function () {
                    var e, t;
                    return (e = (t = this.tails)[t.length - 1]) != null ? e.varName() : void 8
                }, t.cacheReference = function (e) {
                    var t, n, r, s, o, u;
                    return t = (n = this.tails)[n.length - 1], t instanceof b ? this.cache(e, !0) : this.tails.length < 2 && !this.head.isComplex() && (t == null || !t.isComplex()) ? [this, this] : (r = i(this.head, this.tails.slice(0, -1)), r.isComplex() && (s = e.scope.temporary(), r = i(C(d(s), r)), o = (n = d(s), n.temp = !0, n)), t ? (t.isComplex() && (s = e.scope.temporary("key"), t = m(C(d(s), t.key)), u = m((n = d(s), n.temp = !0, n))), [r.add(t), i(o || r.head, [u || t])]) : [r, o])
                }, t.compileNode = function (e) {
                    var t, r, s, o, u, a, f, l, c, h, g, y, w, E, S, T, N, C;
                    this.flip && (dt("flip"), dt("curry")), t = this.head, r = this.tails, t.front = this.front, t.newed = this.newed;
                    if (!r.length) return t.compile(e);
                    if (s = this.unfoldAssign(e)) return s.compile(e);
                    for (o = 0, u = r.length; o < u; ++o) {
                        a = r[o];
                        if (a.partialized) {
                            f = !0;
                            break
                        }
                    }
                    if (f) {
                        dt("slice"), l = [], c = [];
                        for (o = 0, u = r.length; o < u; ++o) a = r[o], h = h || a.partialized != null, h ? c.push(a) : l.push(a);
                        return c != null && (g = c[0], y = n.call(c, 1)), this.tails = l, w = l.length ? i(t, n.call(l, 0, -1)) : p("this"), i(i(d(dt("partialize"))).add(m(v("apply"))).add(b([w, x([this, x(g.args), x(g.partialized)])])), y).compile(e)
                    }
                    r[0] instanceof b && !t.isCallable() && this.carp("invalid callee"), this.expandSlice(e), this.expandBind(e), this.expandSplat(e), this.expandStar(e);
                    if (this.splattedNewArgs) return E = e.indent + ot, S = i(this.head, r.slice(0, -1)), "(function(func, args, ctor) {\n" + E + "ctor.prototype = func.prototype;\n" + E + "var child = new ctor, result = func.apply(child, args), t;\n" + E + 'return (t = typeof result)  == "object" || t == "function" ? result || child : child;\n' + ot + "})(" + S.compile(e) + ", " + this.splattedNewArgs + ", function(){})";
                    if (!this.tails.length) return this.head.compile(e);
                    T = this.head.compile(e, it), N = c = "";
                    for (o = 0, u = (C = this.tails).length; o < u; ++o) a = C[o], a["new"] && (N += "new "), c += a.compile(e);
                    return "." === c.charAt(0) && at.test(T) && (T += " "), N + T + c
                }, t.unfoldSoak = function (e) {
                    var t, n, r, s, o, u, a, f, l;
                    if (t = this.head.unfoldSoak(e)) return (n = t.then.tails).push.apply(n, this.tails), t;
                    for (r = 0, s = (n = this.tails).length; r < s; ++r) {
                        o = r, u = n[r];
                        if (a = u.soak, delete u.soak, a) return f = i(this.head, this.tails.splice(0, o)), u.assign && !f.isAssignable() && u.carp("invalid accessign"), l = u instanceof b ? (a = f.cacheReference(e), l = a[0], this.head = a[1], V("typeof " + l.compile(e, rt) + " === 'function'")) : (o && u.assign ? (a = f.cacheReference(e), l = a[0], f = a[1], this.head = f.head, (a = this.tails).unshift.apply(a, f.tails)) : (a = f.unwrap().cache(e, !0), l = a[0], this.head = a[1]), A(l)), a = z(l, this), a.soak = !0, a.cond = this.cond, a["void"] = this["void"], a
                    }
                }, t.unfoldAssign = function (e) {
                    var t, n, r, s, o, u, a, f, l, c, h, p, d, v;
                    if (t = this.head.unfoldAssign(e)) return (n = t.right.tails).push.apply(n, this.tails), t;
                    for (r = 0, s = (n = this.tails).length; r < s; ++r) {
                        o = r, u = n[r];
                        if (a = u.assign) {
                            u.assign = "", f = i(this.head, this.tails.splice(0, o)).expandSlice(e).unwrap();
                            if (f instanceof x) {
                                l = f.items, c = (this.head = x()).items;
                                for (h = 0, p = l.length; h < p; ++h) o = h, d = l[h], v = i(d).cacheReference(e), c[o] = v[0], l[o] = v[1]
                            } else v = i(f).cacheReference(e), f = v[0], this.head = v[1];
                            return a === "=" && (a = ":="), v = C(f, this, a), v.access = !0, v
                        }
                    }
                }, t.expandSplat = function (e) {
                    var t, n, r, s, o, u;
                    t = this.tails, n = -1;
                    while (r = t[++n]) {
                        if (!(s = r.args)) continue;
                        o = r.method === ".call" && (s = s.concat()).shift();
                        if (!(s = P.compileArray(e, s, !0))) continue;
                        r["new"] ? this.splattedNewArgs = s : (!o && t[n - 1] instanceof m && (u = i(this.head, t.splice(0, n - 1)).cache(e, !0), this.head = u[0], o = u[1], n = 0), r.method = ".apply", r.args = [o || p("null"), V(s)])
                    }
                }, t.expandBind = function (e) {
                    var t, n, r, s, o, u;
                    t = this.tails, n = -1;
                    while (r = t[++n]) {
                        if (r.symbol !== ".~") continue;
                        r.symbol = "", s = i(this.head, t.splice(0, n)).unwrap(), o = t.shift().key, u = b.make(J("bind"), [s, (o.reserved = !0, o)]), this.head = this.newed ? D(u, !0) : u, n = -1
                    }
                }, t.expandStar = function (e) {
                    function d(e) {
                        e.value === "*" ? s.push(e) : e instanceof m || e.eachChild(d)
                    }
                    var t, n, r, s, o, u, a, f, l, c, h, p;
                    t = this.tails, n = -1;
                    while (r = t[++n]) {
                        if (r.args || r.stars || r.key instanceof v) continue;
                        s = r.stars = [], r.eachChild(d);
                        if (!s.length) continue;
                        o = i(this.head, t.splice(0, n)).unwrap().cache(e), u = o[0], a = o[1], f = o[2], l = i(a, [m(v("length"))]).compile(e);
                        for (c = 0, h = s.length; c < h; ++c) p = s[c], p.value = l, p.isAssignable = lt;
                        this.head = V(u.compile(e, it) + t.shift().compile(e)), f && e.scope.free(f[0]), n = -1
                    }
                }, t.expandSlice = function (e, t) {
                    var n, r, s, o, u;
                    n = this.tails, r = -1;
                    while (s = n[++r])(o = s.key) != null && o.items && (n[r + 1] instanceof b && s.carp("calling a slice"), u = n.splice(0, r + 1), u = u.pop().key.toSlice(e, i(this.head, u).unwrap(), s.symbol, t), this.head = (u.front = this.front, u), r = -1);
                    return this
                }, i
            }(t), e.Call = b = function (e) {
                function r(e) {
                    var t, n, r, s, o, u, a = this instanceof i ? this : new i;
                    e || (e = []);
                    if (e.length === 1 && (t = e[0]) instanceof P) t.filler ? (a.method = ".call", e[0] = p("this"), e[1] = P(p("arguments"))) : t.it instanceof x && (e = t.it.items);
                    else
                        for (n = 0, r = e.length; n < r; ++n) s = n, o = e[n], o.value === "_" && (e[s] = y(p("void")), e[s].placeholder = !0, ((u = a.partialized) != null ? u : a.partialized = []).push(y(p(s))));
                    return a.args = e, a
                }

                function i() {}
                var t = u((o(r, e).displayName = "Call", r), e).prototype,
                    n = r;
                return i.prototype = t, t.children = ["args"], t.show = function () {
                    return [this["new"]] + [this.method] + [this.soak ? "?" : void 8]
                }, t.compile = function (e) {
                    var t, n, r, i, s, o;
                    t = (this.method || "") + "(" + (this.pipe ? "\n" + e.indent : "");
                    for (n = 0, i = (r = this.args).length; n < i; ++n) s = n, o = r[n], t += (s ? ", " : "") + o.compile(e, tt);
                    return t + ")"
                }, r.make = function (e, t, n) {
                    var i;
                    return i = r(t), n && o(i, n), y(e).add(i)
                }, r.block = function (e, t, n) {
                    var i, s;
                    return i = D(y(e, [(s = r(t), s.method = n, s)]), !0), i.calling = !0, i
                }, r.back = function (e, t, n, i) {
                    var s, o, u, a, f, l, c;
                    s = O(e, void 8, n, i);
                    if (s.hushed = t.op === "!") t = t.it;
                    t instanceof W && (s.name = t.label, s.labeled = !0, t = t.it), !s.hushed && (s.hushed = t.op === "!") && (t = t.it), (o = t.getCall()) != null && (o.partialized = null), u = (t.getCall() || (t = y(t).add(r())).getCall()).args, a = 0;
                    for (f = 0, l = u.length; f < l; ++f) {
                        c = u[f];
                        if (c.placeholder) break;
                        ++a
                    }
                    return t.back = (u[a] = s).body, t
                }, r.letFunc = function (e, t) {
                    var n, r, i, s, o, u, a, f;
                    r = [];
                    for (i = 0, s = e.length; i < s; ++i) {
                        o = i, u = e[i];
                        if (a = u.op === "=" && !u.logic && u.right) {
                            e[o] = a;
                            if (o === 0 && (f = u.left.value === "this")) continue;
                            r.push(u.left)
                        } else r.push(d(u.varName() || u.carp('invalid "let" argument')))
                    }
                    return n = r, f || e.unshift(p("this")), this.block(O(n, t), e, ".call")
                }, r
            }(t), w = function (e) {
                function r() {
                    r.superclass.apply(this, arguments)
                }
                var t = u((o(r, e).displayName = "List", r), e).prototype,
                    n = r;
                return t.children = ["items"], t.show = function () {
                    return this.name
                }, t.named = function (e) {
                    return this.name = e, this
                }, t.isEmpty = function () {
                    return !this.items.length
                }, t.assigns = function (e) {
                    var t, n, r, i;
                    for (t = 0, r = (n = this.items).length; t < r; ++t) {
                        i = n[t];
                        if (i.assigns(e)) return !0
                    }
                }, r.compile = function (e, t, n) {
                    var r, i, s, o, u, a;
                    switch (t.length) {
                    case 0:
                        return "";
                    case 1:
                        return t[0].compile(e, tt)
                    }
                    r = e.indent, i = e.level, e.indent = r + ot, e.level = tt, s = t[o = 0].compile(e);
                    while (u = t[++o]) {
                        s += ", ", a = u;
                        if (n)
                            if (a instanceof d && a.value === "_") a = E([S(v("__placeholder__"), p(!0))]);
                            else if (a instanceof E || a instanceof x) a.deepEq = !0;
                        s += a.compile(e)
                    }
                    return~ s.indexOf("\n") && (s = "\n" + e.indent + s + "\n" + r), e.indent = r, e.level = i, s
                }, r
            }(t), e.Obj = E = function (e) {
                function r(e) {
                    var t = this instanceof i ? this : new i;
                    return t.items = e || [], t
                }

                function i() {}
                var t = u((o(r, e).displayName = "Obj", r), e).prototype,
                    n = r;
                return i.prototype = t, t.asObj = ht, t.toSlice = function (e, t, n, r) {
                    var i, s, o, u, a, f, l, c, h, p, v, g, b;
                    i = this.items, i.length > 1 ? (s = t.cache(e), t = s[0], o = s[1], u = s[2]) : o = t;
                    for (a = 0, f = i.length; a < f; ++a) {
                        l = a, c = i[a];
                        if (c.comment) continue;
                        if (c instanceof S || c instanceof P) c[h = (s = c.children)[s.length - 1]] = p = y(t, [m(c[h].maybeKey())]);
                        else {
                            if (v = c.getDefault()) c = c.first;
                            c instanceof D ? (s = c.cache(e, !0), g = s[0], c = s[1], r && (s = [c, g], g = s[0], c = s[1]), g = D(g)) : g = c, b = p = y(t, [m(c.maybeKey(), n)]), v && (b = (v.first = b, v)), i[l] = S(g, b)
                        }
                        t = o
                    }
                    return p || this.carp("empty slice"), u && ((p.head = d(u[0])).temp = !0), this
                }, t.compileNode = function (e) {
                    var t, n, i, s, o, u, a, f, l, c, h, m, g, y;
                    t = this.items;
                    if (!t.length) return this.front ? "({})" : "{}";
                    n = "", i = "\n" + (e.indent += ot), s = {};
                    for (o = 0, u = t.length; o < u; ++o) {
                        a = o, f = t[o];
                        if (f.comment) {
                            n += i + f.compile(e);
                            continue
                        }
                        if (l = f.getDefault()) f = f.first;
                        if (f instanceof P || (f.key || f) instanceof D) {
                            c = t.slice(a);
                            break
                        }
                        l && (f instanceof S ? f.val = (l.first = f.val, l) : f = S(f, (l.first = f, l)));
                        if (this.deepEq && f instanceof S)
                            if (f.val instanceof d && f.val.value === "_") f.val = r([S(v("__placeholder__"), p(!0))]);
                            else if ((h = f.val) instanceof r || h instanceof x) f.val.deepEq = !0;
                        m ? n += "," : m = !0, n += i + (f instanceof S ? (g = f.key, y = f.val, f.accessor ? f.compileAccessor(e, g = g.compile(e)) : (y.ripName(g), (g = g.compile(e)) + ": " + y.compile(e, tt))) : (g = f.compile(e)) + ": " + g), ut.test(g) || (g = Function("return " + g)()), (s[g + "."] ^= 1) || f.carp('duplicate property "' + g + '"')
                    }
                    return n = "{" + (n && n + "\n" + this.tab) + "}", c && (n = k(V(n), r(c)).compile((e.indent = this.tab, e))), this.front && "{" === n.charAt() ? "(" + n + ")" : n
                }, r
            }(w), e.Prop = S = function (e) {
                function r(e, t) {
                    var n, r, s, o, u = this instanceof i ? this : new i;
                    u.key = e, u.val = t;
                    if (e.value === "...") return P(u.val);
                    if (n = t.getAccessors()) {
                        u.val = n;
                        for (r = 0, s = n.length; r < s; ++r) o = n[r], o.x = (o.hushed = o.params.length) ? "s" : "g";
                        u.accessor = "accessor"
                    }
                    return u
                }

                function i() {}
                var t = u((o(r, e).displayName = "Prop", r), e).prototype,
                    n = r;
                return i.prototype = t, t.children = ["key", "val"], t.show = function () {
                    return this.accessor
                }, t.assigns = function (e) {
                    var t;
                    return typeof (t = this.val).assigns == "function" ? t.assigns(e) : void 8
                }, t.compileAccessor = function (e, t) {
                    var n, r;
                    return n = this.val, n[1] && n[0].params.length + n[1].params.length !== 1 && n[0].carp("invalid accessor parameter"),
                        function () {
                            var i, s, o, u = [];
                            for (i = 0, o = (s = n).length; i < o; ++i) r = s[i], r.accessor = !0, u.push(r.x + "et " + t + r.compile(e, tt).slice(8));
                            return u
                        }().join(",\n" + e.indent)
                }, t.compileDescriptor = function (e) {
                    var t, n, i, s, o;
                    t = E();
                    for (n = 0, s = (i = this.val).length; n < s; ++n) o = i[n], t.items.push(r(v(o.x + "et"), o));
                    return t.items.push(r(v("configurable"), p(!0))), t.items.push(r(v("enumerable"), p(!0))), t.compile(e)
                }, r
            }(t), e.Arr = x = function (e) {
                function r(e) {
                    var t = this instanceof i ? this : new i;
                    return t.items = e || [], t
                }

                function i() {}
                var t = u((o(r, e).displayName = "Arr", r), e).prototype,
                    n = r;
                return i.prototype = t, t.isArray = lt, t.asObj = function () {
                    var e, t;
                    return E(function () {
                        var n, r, i, s = [];
                        for (n = 0, i = (r = this.items).length; n < i; ++n) e = n, t = r[n], s.push(S(p(e), t));
                        return s
                    }.call(this))
                }, t.toSlice = function (e, t, n) {
                    var r, i, s, o, u, a, f, l, c;
                    r = this.items, r.length > 1 ? (i = t.cache(e), t = i[0], s = i[1]) : s = t;
                    for (o = 0, u = r.length; o < u; ++o) {
                        a = o, f = r[o];
                        if (l = f instanceof P) f = f.it;
                        if (f.isEmpty()) continue;
                        c = y(t, [m(f, n)]), r[a] = l ? P(c) : c, t = s
                    }
                    return c || this.carp("empty slice"), this
                }, t.compile = function (e) {
                    var t, n;
                    return t = this.items, t.length ? (n = P.compileArray(e, t)) ? this.newed ? "(" + n + ")" : n : "[" + w.compile(e, t, this.deepEq) + "]" : "[]"
                }, r.maybe = function (e) {
                    return e.length !== 1 || e[0] instanceof P ? n(e) : e[0]
                }, r.wrap = function (e) {
                    return n([P((e.isArray = lt, e))])
                }, r
            }(w), e.Unary = T = function (e) {
                function r(e, t, n) {
                    var r, s, o, u, a, f = this instanceof i ? this : new i;
                    if (t != null) {
                        if (r = !n && t.unaries) return r.push(e), t;
                        switch (e) {
                        case "!":
                            if (n) break;
                            if (t instanceof O && !t.hushed) return t.hushed = !0, t;
                            return t.invert();
                        case "++":
                        case "--":
                            n && (f.post = !0);
                            break;
                        case "new":
                            t instanceof A && !t.negated && (t = y(t).add(b())), t.newed = !0;
                            for (s = 0, u = (o = t.tails || "").length; s < u; ++s) {
                                a = o[s];
                                if (a instanceof b && !a["new"]) return a.method === ".call" && a.args.shift(), a["new"] = "new", a.method = "", t
                            }
                            break;
                        case "~":
                            if (t instanceof O && t.statement && !t.bound) return t.bound = "this$", t
                        }
                    }
                    return f.op = e, f.it = t, f
                }

                function i() {}

                function s(e) {
                    return {
                        "++": "in",
                        "--": "de"
                    }[e] + "crement"
                }
                var t = u((o(r, e).displayName = "Unary", r), e).prototype,
                    n = r;
                return i.prototype = t, t.children = ["it"], t.show = function () {
                    return [this.post ? "@" : void 8] + this.op
                }, t.isCallable = function () {
                    var e;
                    return (e = this.op) === "do" || e === "new" || e === "delete" || this.it == null
                }, t.isArray = function () {
                    return this.it instanceof x && this.it.items.length || this.it instanceof y && this.it.isArray()
                }, t.isString = function () {
                    var e;
                    return (e = this.op) === "typeof" || e === "classof"
                }, t.invert = function () {
                    var e;
                    return this.op !== "!" || (e = this.it.op) !== "!" && e !== "<" && e !== ">" && e !== "<=" && e !== ">=" && e !== "of" && e !== "instanceof" ? n("!", this, !0) : this.it
                }, t.unfoldSoak = function (e) {
                    var t;
                    return ((t = this.op) === "++" || t === "--" || t === "delete") && this.it != null && z.unfoldSoak(e, this, "it")
                }, t.getAccessors = function () {
                    var e;
                    if (this.op !== "~") return;
                    if (this.it instanceof O) return [this.it];
                    if (this.it instanceof x) {
                        e = this.it.items;
                        if (!e[2] && e[0] instanceof O && e[1] instanceof O) return e
                    }
                }, t.compileNode = function (e) {
                    var t, n, i, o, u;
                    if (this.it == null) return this.compileAsFunc(e);
                    if (t = this.compileSpread(e)) return t;
                    n = this.op, i = this.it;
                    switch (n) {
                    case "!":
                        i.cond = !0;
                        break;
                    case "new":
                        i.isCallable() || i.carp("invalid constructor");
                        break;
                    case "do":
                        if (e.level === Z && i instanceof O && i.isStatement()) return i.compile(e) + " " + r("do", d(i.name)).compile(e);
                        return o = D(i instanceof A && !i.negated ? y(i).add(b()) : b.make(i)), (o.front = this.front, o.newed = this.newed, o).compile(e);
                    case "delete":
                        (i instanceof d || !i.isAssignable()) && this.carp("invalid delete");
                        if (e.level && !this["void"]) return this.compilePluck(e);
                        break;
                    case "++":
                    case "--":
                        i.isAssignable() || this.carp("invalid " + s(n)), (t = i instanceof d && e.scope.checkReadOnly(i.value)) && this.carp(s(n) + " of " + t + ' "' + i.value + '"', ReferenceError), this.post && (i.front = this.front);
                        break;
                    case "^^":
                        return dt("clone") + "(" + i.compile(e, tt) + ")";
                    case "jsdelete":
                        return "delete " + i.compile(e, tt);
                    case "classof":
                        return dt("toString") + ".call(" + i.compile(e, tt) + ").slice(8, -1)"
                    }
                    u = i.compile(e, rt + st.unary);
                    if (this.post) u += n;
                    else {
                        if (n === "new" || n === "typeof" || n === "delete" || (n === "+" || n === "-") && n === u.charAt()) n += " ";
                        u = n + u
                    }
                    return e.level < it ? u : "(" + u + ")"
                }, t.compileSpread = function (e) {
                    var t, r, i, s, o, u, a, f, l, h, p, d;
                    t = this.it, r = [this];
                    for (; t instanceof n; t = t.it) r.push(t);
                    if (!((t = t.expandSlice(e).unwrap()) instanceof x && (i = t.items).length)) return "";
                    for (s = 0, o = i.length; s < o; ++s) {
                        u = s, a = i[s];
                        if (f = a instanceof P) a = a.it;
                        for (l = r.length - 1; l >= 0; --l) h = r[l], a = n(h.op, a, h.post);
                        i[u] = f ? p = P(a) : a
                    }
                    return !p && (this["void"] || !e.level) && (t = (d = c(i), d.front = this.front, d["void"] = !0, d)), t.compile(e, et)
                }, t.compilePluck = function (e) {
                    var t, n, r, i, s;
                    return t = y(this.it).cacheReference(e), n = t[0], r = t[1], i = (s = e.scope.temporary()) + " = " + n.compile(e, tt) + ", delete " + r.compile(e, tt) + ", " + e.scope.free(s), e.level < tt ? i : "(" + i + ")"
                }, t.compileAsFunc = function (e) {
                    return this.op === "!" ? dt("not") : "(" + O([], c(r(this.op, y(d("it"))))).compile(e) + ")"
                }, r
            }(t), e.Binary = N = function (e) {
                function f(e, t, n, i) {
                    var s, o, u, a = this instanceof l ? this : new l;
                    i && (s = e.logic, r.call(i).slice(8, -1) === "String" && (s = i), e = function () {
                        switch (!1) {
                        case !(o = s):
                            return o;
                        case e !== "=":
                            return "?";
                        default:
                            return "="
                        }
                    }()), a.partial = t == null || n == null;
                    if (!a.partial) {
                        if ("=" === e.charAt(e.length - 1) && (u = e.charAt(e.length - 2)) !== "=" && u !== "<" && u !== ">" && u !== "!") return C(t.unwrap(), n, e);
                        switch (e) {
                        case "in":
                            return new L(t, n);
                        case "with":
                            return new k(T("^^", t), n, !1);
                        case "<<<":
                        case "<<<<":
                            return k(t, n, e === "<<<<");
                        case "<|":
                            return c(t).pipe(n, e);
                        case "|>":
                            return c(n).pipe(t, "<|");
                        case ".":
                            return y(t).add(m(n))
                        }
                    }
                    return a.op = e, a.first = t, a.second = n, a
                }

                function l() {}
                var t, n, i = u((o(f, e).displayName = "Binary", f), e).prototype,
                    s = f;
                return l.prototype = i, i.children = ["first", "second"], i.show = function () {
                    return this.op
                }, i.isCallable = function () {
                    var e;
                    return this.partial || ((e = this.op) === "&&" || e === "||" || e === "?" || e === "<<" || e === ">>") && this.first.isCallable() && this.second.isCallable()
                }, i.isArray = function () {
                    switch (this.op) {
                    case "*":
                        return this.first.isArray();
                    case "/":
                        return this.second.isMatcher()
                    }
                }, i.isString = function () {
                    switch (this.op) {
                    case "+":
                    case "*":
                        return this.first.isString() || this.second.isString();
                    case "-":
                        return this.second.isMatcher()
                    }
                }, t = /^(?:[!=]=|[<>])=?$/, n = {
                    "===": "!==",
                    "!==": "===",
                    "==": "!=",
                    "!=": "=="
                }, i.invert = function () {
                    var e;
                    return (e = !t.test(this.second.op) && n[this.op]) ? (this.op = e, this.wasInverted = !0, this) : T("!", D(this), !0)
                }, i.invertIt = function () {
                    return this.inverted = !0, this
                }, i.getDefault = function () {
                    switch (this.op) {
                    case "?":
                    case "||":
                    case "&&":
                        return this
                    }
                }, i.xorChildren = function (e) {
                    var t, n, r;
                    return !(t = r = e(this.first)) == !(n = e(this.second)) || !t && !n ? !1 : r ? [this.first, this.second] : [this.second, this.first]
                }, i.compileNode = function (e) {
                    var n, r, i, s, o, u, a;
                    if (this.partial) return this.compilePartial(e);
                    switch (this.op) {
                    case "?":
                        return this.compileExistence(e);
                    case "*":
                        if (this.second.isString()) return this.compileJoin(e);
                        if (this.first.isString() || this.first.isArray()) return this.compileRepeat(e);
                        break;
                    case "-":
                        if (this.second.isMatcher()) return this.compileRemove(e);
                        break;
                    case "/":
                        if (this.second.isMatcher()) return this.compileSplit(e);
                        break;
                    case "**":
                    case "^":
                        return this.compilePow(e);
                    case "<?":
                    case ">?":
                        return this.compileMinMax(e);
                    case "<<":
                    case ">>":
                        return this.compileCompose(e);
                    case "++":
                        return this.compileConcat(e);
                    case "%%":
                        return this.compileMod(e);
                    case "xor":
                        return this.compileXor(e);
                    case "&&":
                    case "||":
                        if (n = this["void"] || !e.level) this.second["void"] = !0;
                        if (n || this.cond) this.first.cond = !0, this.second.cond = !0;
                        break;
                    case "instanceof":
                        r = this.second.expandSlice(e).unwrap(), i = r.items;
                        if (r instanceof x) {
                            if (i[1]) return this.compileAnyInstanceOf(e, i);
                            this.second = i[0] || r
                        }
                        this.second.isCallable() || this.second.carp("invalid instanceof operand");
                        break;
                    case "====":
                    case "!===":
                        this.op = this.op.slice(0, 3);
                    case "<==":
                    case ">==":
                    case "<<=":
                    case ">>=":
                        return this.compileDeepEq(e);
                    default:
                        if (t.test(this.op)) {
                            if (s = ((o = this.op) === "===" || o === "!==") && this.xorChildren(function (e) {
                                return e.isRegex()
                            })) return this.compileRegexEquals(e, s);
                            this.op === "===" && this.first instanceof p && this.second instanceof p && this.first.isWhat() !== this.second.isWhat() && typeof console != "undefined" && console !== null && console.warn("WARNING: strict comparison of two different types will always be false: " + this.first.value + " == " + this.second.value)
                        }
                        if (t.test(this.op) && t.test(this.second.op)) return this.compileChain(e)
                    }
                    return this.first.front = this.front, u = this.first.compile(e, a = rt + st[this.op]) + " " + this.mapOp(this.op) + " " + this.second.compile(e, a), e.level <= a ? u : "(" + u + ")"
                }, i.mapOp = function (e) {
                    var t;
                    switch (!1) {
                    case !(t = e.match(/\.([&\|\^]|<<|>>>?)\./)):
                        return t[1];
                    case e !== "of":
                        return "in";
                    default:
                        return e
                    }
                }, i.compileChain = function (e) {
                    var t, n, r, i;
                    return t = this.first.compile(e, n = rt + st[this.op]), r = this.second.first.cache(e, !0), i = r[0], this.second.first = r[1], t += " " + this.op + " " + i.compile(e, n) + " && " + this.second.compile(e, rt), e.level <= rt ? t : "(" + t + ")"
                }, i.compileExistence = function (e) {
                    var t;
                    return this["void"] || !e.level ? (t = f("&&", A(this.first, !0), this.second), (t["void"] = !0, t).compileNode(e)) : (t = this.first.cache(e, !0), z(A(t[0]), t[1]).addElse(this.second).compileExpression(e))
                }, i.compileAnyInstanceOf = function (e, t) {
                    var n, r, i, s, o, u, a;
                    n = this.first.cache(e), r = n[0], i = n[1], this.temps = n[2], s = f("instanceof", r, t.shift());
                    for (o = 0, u = t.length; o < u; ++o) a = t[o], s = f("||", s, f("instanceof", i, a));
                    return D(s).compile(e)
                }, i.compileMinMax = function (e) {
                    var t, n, r;
                    return t = this.first.cache(e, !0), n = this.second.cache(e, !0), r = f(this.op.charAt(), t[0], n[0]), z(r, t[1]).addElse(n[1]).compileExpression(e)
                }, i.compileMethod = function (e, t, n, r) {
                    var i;
                    return i = [this.second].concat(r || []), this.first["is" + t]() ? y(this.first, [m(v(n)), b(i)]).compile(e) : (i.unshift(this.first), b.make(V(dt(n) + ".call"), i).compile(e))
                }, i.compileJoin = function (e) {
                    return this.compileMethod(e, "Array", "join")
                }, i.compileRemove = function (e) {
                    return this.compileMethod(e, "String", "replace", V("''"))
                }, i.compileSplit = function (e) {
                    return this.compileMethod(e, "String", "split")
                }, i.compileRepeat = function (e) {
                    var t, n, r, i, s, o, u, f, l, h, d, v;
                    t = this.first, n = this.second, r = (t = t.expandSlice(e).unwrap()).items, i = t.isArray() && "Array";
                    if (s = r && P.compileArray(e, r)) t = V(s), r = null;
                    if (i && !r || !(n instanceof p && n.value < 32)) return b.make(J("repeat" + (i || "String")), [t, n]).compile(e);
                    n = +n.value;
                    if (1 <= n && n < 2) return t.compile(e);
                    if (r) {
                        if (n < 1) return c(r).add(V("[]")).compile(e);
                        o = [];
                        for (u = 0, f = r.length; u < f; ++u) l = u, h = r[u], d = h.cache(e, 1), r[l] = d[0], o[o.length] = d[1];
                        return r.push((d = V(), d.compile = function () {
                            return a(", " + w.compile(e, o), n - 1).slice(2)
                        }, d)), t.compile(e)
                    }
                    return t instanceof p ? (v = (t = t.compile(e)).charAt()) + a(t.slice(1, -1) + "", n) + v : n < 1 ? c(t.it).add(V("''")).compile(e) : (t = (o = t.cache(e, 1, rt))[0] + a(" + " + o[1], n - 1), e.level < rt + st["+"] ? t : "(" + t + ")")
                }, i.compilePow = function (e) {
                    return b.make(V("Math.pow"), [this.first, this.second]).compile(e)
                }, i.compileConcat = function (e) {
                    var t;
                    return t = function (e) {
                        switch (!1) {
                        case !(e instanceof f && e.op === "++"):
                            return t(e.first).concat(t(e.second));
                        default:
                            return [e]
                        }
                    }, y(this.first).add(m(v("concat"), ".", !0)).add(b(t(this.second))).compile(e)
                }, i.compileCompose = function (e) {
                    var t, n, r, i, s, o, u, a;
                    t = this.op, n = [this.first], r = this.second;
                    while (r instanceof f && r.op === t) n.push(r.first), r = r.second;
                    n.push(r), t === "<<" && n.reverse(), i = n.shift(), s = y(i).add(m(v("apply"))).add(b([p("this"), p("arguments")]));
                    for (o = 0, u = n.length; o < u; ++o) a = n[o], s = y(a).add(b([s]));
                    return O([], c([s])).compile(e)
                }, i.compileMod = function (e) {
                    var t, n;
                    return t = e.scope.temporary(), n = "((" + this.first.compile(e) + ") % (" + t + " = " + this.second.compile(e) + ") + " + t + ") % " + t, e.scope.free(t), n
                }, i.compilePartial = function (e) {
                    var t, n, r;
                    t = d("it");
                    switch (!1) {
                    case this.first != null || this.second != null:
                        return n = d("x$"), r = d("y$"), O([n, r], c(f(this.op, n, r).invertCheck(this)), !1, !0).compile(e);
                    case this.first == null:
                        return "(" + O([t], c(f(this.op, this.first, t).invertCheck(this))).compile(e) + ")";
                    default:
                        return "(" + O([t], c(f(this.op, t, this.second).invertCheck(this))).compile(e) + ")"
                    }
                }, i.compileRegexEquals = function (e, t) {
                    var n, r, i;
                    return n = t[0], r = t[1], this.op === "===" ? (i = this.wasInverted ? "test" : "exec", y(n).add(m(v(i))).add(b([r])).compile(e)) : T("!", y(n).add(m(v("test"))).add(b([r]))).compile(e)
                }, i.compileDeepEq = function (e) {
                    var t, n, r, i, s, o;
                    if ((t = this.op) === ">==" || t === ">>=") t = [this.second, this.first], this.first = t[0], this.second = t[1], this.op = this.op === ">==" ? "<==" : "<<=";
                    this.op === "!==" && (this.op = "===", n = !0);
                    for (r = 0, i = (t = [this.first, this.second]).length; r < i; ++r) {
                        s = t[r];
                        if (s instanceof E || s instanceof x) s.deepEq = !0
                    }
                    return o = y(d(dt("deepEq"))).add(b([this.first, this.second, p("'" + this.op + "'")])), (n ? T("!", o) : o).compile(e)
                }, i.compileXor = function (e) {
                    var t, n;
                    return t = y(this.first).cacheReference(e), n = y(this.second).cacheReference(e), f("&&", f("!==", T("!", t[0]), T("!", n[0])), D(f("||", t[1], n[1]))).compile(e)
                }, f
            }(t), e.Assign = C = function (e) {
                function f(e, n, r, i, s) {
                    var o = this instanceof l ? this : new l;
                    return o.left = e, o.op = r || "=", o.logic = i || o.op.logic, o.defParam = s, o.op += "", o[n instanceof t ? "right" : "unaries"] = n, o
                }

                function l() {}
                var r = u((o(f, e).displayName = "Assign", f), e).prototype,
                    a = f;
                return l.prototype = r, r.children = ["left", "right"], r.show = function () {
                    return [void 8].concat(this.unaries).reverse().join(" ") + [this.logic] + this.op
                }, r.assigns = function (e) {
                    return this.left.assigns(e)
                }, r.delegate(["isCallable", "isRegex"], function (e) {
                    var t;
                    return ((t = this.op) === "=" || t === ":=") && this.right[e]()
                }), r.isArray = function () {
                    switch (this.op) {
                    case "=":
                    case ":=":
                        return this.right.isArray();
                    case "/=":
                        return this.right.isMatcher()
                    }
                }, r.isString = function () {
                    switch (this.op) {
                    case "=":
                    case ":=":
                    case "+=":
                    case "*=":
                        return this.right.isString();
                    case "-=":
                        return this.right.isMatcher()
                    }
                }, r.unfoldSoak = function (e) {
                    var t, n, r, i, s;
                    return this.left instanceof A ? ((t = (r = (n = this.left = this.left.it).name, delete n.name, r)) ? (i = this.right, i = f(this.right = d(t), i)) : (n = this.right.cache(e), i = n[0], this.right = n[1], s = n[2]), n = z(A(i), this), n.temps = s, n.cond = this.cond, n["void"] = this["void"], n) : z.unfoldSoak(e, this, "left")
                }, r.unfoldAssign = function () {
                    return this.access && this
                }, r.compileNode = function (e) {
                    var t, r, i, s, o, u, a, f, l, c, h, p, v, m, b, w;
                    if (this.left instanceof g && this.op === "=") return this.compileSplice(e);
                    t = this.left.expandSlice(e, !0).unwrap();
                    if (!this.right) {
                        t.isAssignable() || t.carp("invalid unary assign"), r = y(t).cacheReference(e), t = r[0], this.right = r[1];
                        for (i = 0, s = (r = this.unaries).length; i < s; ++i) o = r[i], this.right = T(o, this.right)
                    }
                    if (t.isEmpty()) return (r = D(this.right), r.front = this.front, r.newed = this.newed, r).compile(e);
                    t.getDefault() && (this.right = N(t.op, this.right, t.second), t = t.first);
                    if (t.items) return this.compileDestructuring(e, t);
                    t.isAssignable() || t.carp("invalid assign");
                    if (this.logic) return this.compileConditional(e, t);
                    o = this.op, u = this.right;
                    if (o === "<?=" || o === ">?=") return this.compileMinMax(e, t, u);
                    if (o === "**=" || o === "^=" || o === "%%=" || o === "++=" || o === "*=" && u.isString() || (o === "-=" || o === "/=") && u.isMatcher()) r = y(t).cacheReference(e), t = r[0], a = r[1], u = N(o.slice(0, -1), a, u), o = ":=";
                    if (o === ".&.=" || o === ".|.=" || o === ".^.=" || o === ".<<.=" || o === ".>>.=" || o === ".>>>.=") o = o.slice(1, -2) + "=";
                    (u = u.unparen()).ripName(t = t.unwrap()), f = o.replace(":", ""), l = (t.front = !0, t).compile(e, tt);
                    if (c = t instanceof d) o === "=" ? e.scope.declare(l, t, this["const"] || !this.defParam && e["const"] && "$" !== l.slice(-1)) : (h = e.scope.checkReadOnly(l)) && t.carp("assignment to " + h + ' "' + l + '"', ReferenceError);
                    return t instanceof y && u instanceof O && (p = l.split(".prototype."), v = l.split("."), p.length > 1 ? u.inClass = p[0] : v.length > 1 && (u.inClassStatic = n.call(v, 0, -1).join(""))), m = !e.level && u instanceof F && !u["else"] && (c || t instanceof y && t.isSimpleAccess()) ? (b = u.objComp ? "{}" : "[]", (w = e.scope.temporary("res")) + " = " + b + ";\n" + this.tab + u.makeReturn(w).compile(e) + "\n" + this.tab + l + " " + f + " " + e.scope.free(w)) : l + " " + f + " " + u.compile(e, tt), e.level > tt && (m = "(" + m + ")"), m
                }, r.compileConditional = function (e, t) {
                    var n, r;
                    return t instanceof d && s(this.logic, ["?"]) && this.op === "=" && e.scope.declare(t.value, t), n = y(t).cacheReference(e), e.level += rt < e.level, r = N(this.logic, n[0], (this.logic = !1, this.left = n[1], this)), (r["void"] = this["void"], r).compileNode(e)
                }, r.compileMinMax = function (e, t, n) {
                    var r, i, s, o, u;
                    return r = y(t).cacheReference(e), i = n.cache(e, !0), s = N(this.op.replace("?", ""), r[0], i[0]), o = f(r[1], i[1], ":="), this["void"] || !e.level ? D(N("||", s, o)).compile(e) : (u = s.first.cache(e, !0), s.first = u[0], t = u[1], z(s, t).addElse(o).compileExpression(e))
                }, r.compileDestructuring = function (e, t) {
                    var n, r, i, s, o, u, a, f, l;
                    return n = t.items, r = n.length, i = e.level && !this["void"], s = this.right.compile(e, r === 1 ? it : tt), (o = t.name) ? (u = o + " = " + s, e.scope.declare(s = o, t)) : (i || r > 1) && (!ut.test(s) || t.assigns(s)) && (u = (a = e.scope.temporary()) + " = " + s, s = a), f = this["rend" + t.constructor.displayName](e, n, s), a && e.scope.free(a), u && f.unshift(u), (i || !f.length) && f.push(s), l = f.join(", "), f.length < 2 || e.level < tt ? l : "(" + l + ")"
                }, r.compileSplice = function (e) {
                    var t, n, r, i, s, o;
                    return t = y(this.left.from).cacheReference(e), n = t[0], r = t[1], t = y(this.right).cacheReference(e), i = t[0], s = t[1], o = N("-", this.left.to, r), c([y(d(dt("splice"))).add(m(v("apply"), ".", !0)).add(b([this.left.target, y(x([n, o])).add(m(v("concat"), ".", !0)).add(b([i]))])), s]).compile(e, tt)
                }, r.rendArr = function (e, t, n) {
                    var r, s, o, u, a, l, c, h, v, g, b, w, E = [];
                    for (r = 0, s = t.length; r < s; ++r) {
                        o = r, u = t[r];
                        if (u.isEmpty()) continue;
                        if (u instanceof P) {
                            l && u.carp("multiple splat in an assignment"), a = (u = u.it).isEmpty();
                            if (o + 1 === (l = t.length)) {
                                if (a) break;
                                c = x.wrap(V(dt("slice") + ".call(" + n + (o ? ", " + o + ")" : ")")))
                            } else {
                                c = h = n + ".length - " + (l - o - 1);
                                if (a && o + 2 === l) continue;
                                v = o + 1, this.temps = [h = e.scope.temporary("i")], c = a ? (u = d(h), d(c)) : x.wrap(V(o + " < (" + h + " = " + c + ") ? " + dt("slice") + ".call(" + n + ", " + o + ", " + h + ") : (" + h + " = " + o + ", [])"))
                            }
                        } else(g = h) && v < o && (g += " + " + (o - v)), c = y(b || (b = p(n)), [m(V(g || o))]);
                        u instanceof f && (u = N(u.op, u.left, u.right, u.logic || !0)), E.push((w = i(this), w.left = u, w.right = c, w["void"] = !0, w).compile(e, et))
                    }
                    return E
                }, r.rendObj = function (e, t, n) {
                    var r, s, o, u, a, f, l, c, h, p = [];
                    for (r = 0, s = t.length; r < s; ++r) {
                        o = t[r];
                        if (u = o instanceof P) o = o.it;
                        if (a = o.getDefault()) o = o.first;
                        o instanceof D ? (f = y(o.it).cacheReference(e), o = f[0], l = f[1]) : o instanceof S ? o = (l = o.key, o).val : l = o, o instanceof v && (o = d(o.name)), a && (o = (a.first = o, a)), c = y(h || (h = d(n)), [m(l.maybeKey())]), u && (c = k(E(), c)), p.push((f = i(this), f.left = o, f.right = c, f["void"] = !0, f).compile(e, et))
                    }
                    return p
                }, f
            }(t), e.Import = k = function (e) {
                function r(e, t, n) {
                    var r = this instanceof i ? this : new i;
                    return r.left = e, r.right = t, r.all = n && "All", !n && e instanceof E && t.items ? E(e.items.concat(t.asObj().items)) : r
                }

                function i() {}
                var t = u((o(r, e).displayName = "Import", r), e).prototype,
                    n = r;
                return i.prototype = t, t.children = ["left", "right"], t.show = function () {
                    return this.all
                }, t.delegate(["isCallable", "isArray"], function (e) {
                    return this.left[e]()
                }), t.unfoldSoak = function (e) {
                    var t, n, r, i;
                    return t = this.left, t instanceof A && !t.negated ? ((t = t.it) instanceof d ? (n = (this.left = t).value, e.scope.check(n, !0) || (t = V("typeof " + n + " != 'undefined' && " + n))) : (r = t.cache(e), t = r[0], this.left = r[1], i = r[2]), r = z(t, this), r.temps = i, r.soak = !0, r.cond = this.cond, r["void"] = this["void"], r) : z.unfoldSoak(e, this, "left") || (this["void"] || !e.level) && z.unfoldSoak(e, this, "right")
                }, t.compileNode = function (e) {
                    var t;
                    t = this.right;
                    if (!this.all) {
                        t instanceof y && (t = t.unfoldSoak(e) || t.unfoldAssign(e) || t.expandSlice(e).unwrap());
                        if (t instanceof w) return this.compileAssign(e, t.asObj().items)
                    }
                    return b.make(J("import" + (this.all || "")), [this.left, t]).compileNode(e)
                }, t.compileAssign = function (e, t) {
                    var n, i, s, o, u, a, f, l, c, h, p, d, g, b, w, E;
                    if (!t.length) return this.left.compile(e);
                    n = !e.level, t.length < 2 && (n || this["void"] || t[0] instanceof P) ? (i = this.left, i.isComplex() && (i = D(i))) : (s = this.left.cache(e), o = s[0], i = s[1], this.temps = s[2]), s = n ? [";", "\n" + this.tab] : [",", " "], u = s[0], a = s[1], u += a, f = this.temps ? o.compile(e, et) + u : "";
                    for (l = 0, c = t.length; l < c; ++l) {
                        h = l, p = t[l], h && (f += d ? a : u);
                        if (d = p.comment) {
                            f += p.compile(e);
                            continue
                        }
                        if (p instanceof P) {
                            f += r(i, p.it).compile(e);
                            continue
                        }
                        if (g = p.getDefault()) p = p.first;
                        if (b = p instanceof D) s = p.it.cache(e, !0), w = s[0], E = s[1];
                        else if (p instanceof S) {
                            w = p.key, E = p.val;
                            if (p.accessor) {
                                w instanceof v && (w = V("'" + w.name + "'")), f += "Object.defineProperty(" + i.compile(e, tt) + ", " + w.compile(e, tt) + ", " + p.compileDescriptor(e) + ")";
                                continue
                            }
                        } else w = E = p;
                        b || (w = w.maybeKey()), g && (E = (g.first = E, g)), f += C(y(i, [m(w)]), E).compile(e, et)
                    }
                    return n ? f : (this["void"] || p instanceof P || (f += (d ? " " : ", ") + i.compile(e, et)), e.level < tt ? f : "(" + f + ")")
                }, r
            }(t), e.In = L = function (e) {
                function r(e, t) {
                    this.item = e, this.array = t
                }
                var t = u((o(r, e).displayName = "In", r), e).prototype,
                    n = r;
                return f(t, arguments[1]), t.children = ["item", "array"], t.compileNode = function (e) {
                    var t, n, i, s, o, u, a, f, l, c, h, p;
                    n = (t = this.array.expandSlice(e).unwrap()).items;
                    if (!(t instanceof x) || n.length < 2) return (this.negated ? "!" : "") + "" + dt("in") + "(" + this.item.compile(e, tt) + ", " + t.compile(e, tt) + ")";
                    i = "", s = this.item.cache(e, !1, et), o = s[0], u = s[1], s = this.negated ? [" !== ", " && "] : [" === ", " || "], a = s[0], f = s[1];
                    for (l = 0, c = n.length; l < c; ++l) h = l, p = n[l], i && (i += f), p instanceof P ? (i += (s = new r(d(u), p.it), s.negated = this.negated, s).compile(e, Z), !h && o !== u && (i = "(" + o + ", " + i + ")")) : i += (h || o === u ? u : "(" + o + ")") + a + p.compile(e, rt + st["=="]);
                    return o === u || e.scope.free(u), e.level < rt + st["||"] ? i : "(" + i + ")"
                }, r
            }(t, l), e.Existence = A = function (e) {
                function r(e, t) {
                    var n = this instanceof i ? this : new i;
                    return n.it = e, n.negated = t, n
                }

                function i() {}
                var t = u((o(r, e).displayName = "Existence", r), e).prototype,
                    n = r;
                return f(t, arguments[1]), i.prototype = t, t.children = ["it"], t.compileNode = function (e) {
                    var t, n, r, i, s;
                    return t = (n = this.it.unwrap(), n.front = this.front, n), r = t.compile(e, rt + st["=="]), t instanceof d && !e.scope.check(r, !0) ? (n = this.negated ? ["||", "="] : ["&&", "!"], i = n[0], s = n[1], r = "typeof " + r + " " + s + "= 'undefined' " + i + " " + r + " " + s + "== null") : r += " " + (i = this.negated ? "==" : "!=") + " null", e.level < rt + st[i] ? r : "(" + r + ")"
                }, r
            }(t, l), e.Fun = O = function (e) {
                function r(e, t, n, r, s) {
                    var o = this instanceof i ? this : new i;
                    return o.params = e || [], o.body = t || c(), o.bound = n && "this$", o.curried = r || !1, o.hushed = s != null ? s : !1, o
                }

                function i() {}
                var t = u((o(r, e).displayName = "Fun", r), e).prototype,
                    n = r;
                return i.prototype = t, t.children = ["params", "body"], t.show = function () {
                    var e;
                    return [this.name] + [(e = this.bound) ? "~" + e : void 8]
                }, t.named = function (e) {
                    return this.name = e, this.statement = !0, this
                }, t.isCallable = lt, t.isStatement = function () {
                    return !!this.statement
                }, t.traverseChildren = function (t, n) {
                    if (n) return e.prototype.traverseChildren.apply(this, arguments)
                }, t.makeReturn = function () {
                    return this.statement ? (this.returns = !0, this) : e.prototype.makeReturn.apply(this, arguments)
                }, t.ripName = function (e) {
                    this.name || (this.name = e.varName())
                }, t.compileNode = function (e) {
                    var t, n, r, i, s, o, u, a, f, l, c, h = this;
                    t = e.scope, n = t.shared || t, r = e.scope = this.body.scope = new ft(this.wrapper ? t : n, this.wrapper && n), r.fun = this, (i = this.proto) && r.assign("prototype", i.compile(e) + ".prototype"), (i = this.cname) && r.assign("constructor", i);
                    if (s = (o = e.loop, delete e.loop, o)) e.indent = this.tab = "";
                    e.indent += ot, u = this.body, a = this.name, f = this.tab, l = "function", this.bound === "this$" && (this.ctor ? (r.assign("this$", "this instanceof ctor$ ? this : new ctor$"), u.lines.push(j(p("this$")))) : (i = (o = n.fun) != null ? o.bound : void 8) ? this.bound = i : n.assign("this$", "this")), this.statement && (a || this.carp("nameless function declaration"), t === e.block.scope || this.carp("misplaced function declaration"), this.accessor && this.carp("named accessor"), t.add(a, "function", this));
                    if (this.statement || a && this.labeled) l += " " + r.add(a, "function", this);
                    this.hushed || this.ctor || this.newed || u.makeReturn(), l += "(" + this.compileParams(e, r) + "){";
                    if (i = u.compileWithDeclarations(e)) l += "\n" + i + "\n" + f;
                    return l += "}", c = function () {
                        return h.curried && h.hasSplats && h.carp("cannot curry a function with a variable number of arguments"), h.curried && h.params.length > 1 ? dt("curry") + "" + (h.bound || h.classBound ? "((" + l + "), true)" : "(" + l + ")") : l
                    }, s ? t.assign(t.temporary("fn"), c()) : (this.returns ? l += "\n" + f + "return " + a + ";" : this.bound && this.ctor && (l += " function ctor$(){} ctor$.prototype = prototype;"), l = c(), this.front && !this.statement ? "(" + l + ")" : l)
                }, t.compileParams = function (e, t) {
                    function L() {
                        switch (!1) {
                        case !y:
                            return N(o.op, E, o.second);
                        case !w:
                            return mt(function (e, t) {
                                return t.it = e, t
                            }, E, b.reverse());
                        default:
                            return E
                        }
                    }
                    var n, r, i, s, o, u, a, f, l, c, h, v, m, g, y, b, w, E, S, k;
                    n = this.params, r = n.length, i = this.body;
                    for (s = n.length - 1; s >= 0; --s) {
                        o = n[s];
                        if (!o.isEmpty() && !o.filler) break;
                        --n.length
                    }
                    for (s = 0, u = n.length; s < u; ++s) a = s, o = n[s], o instanceof P ? (this.hasSplats = !0, f = a) : o.op === "=" && (n[a] = N(o.logic || "?", o.left, o.right));
                    f != null ? l = n.splice(f, 9e9) : this.accessor ? (c = n[1]) && c.carp("excess accessor parameter") : !r && !this.wrapper && i.traverseChildren(function (e) {
                        return e.value === "it" || null
                    }) && (n[0] = d("it")), h = [], v = [];
                    if (n.length) {
                        m = {};
                        for (s = 0, u = n.length; s < u; ++s) {
                            o = n[s], g = o;
                            if (y = g.getDefault()) g = g.first;
                            if (g.isEmpty()) g = d(t.temporary("arg"));
                            else if (g.value === "..") g = d(e.ref = t.temporary());
                            else if (g instanceof d) y && v.push(C(g, o.second, "=", o.op, !0));
                            else {
                                b = [];
                                while (g instanceof T) w = !0, b.push(g), g = g.it;
                                E = d((k = (S = g.it || g).name, delete S.name, k) || g.varName() || t.temporary("arg")), v.push(C(g, L())), g = E
                            }
                            h.push(t.add(g.value, "arg", o))
                        }
                    }
                    if (l) {
                        while (f--) l.unshift(x());
                        v.push(C(x(l), p("arguments")))
                    }
                    return v.length && (S = this.body).prepend.apply(S, v), h.join(", ")
                }, r
            }(t), e.Class = M = function (e) {
                function r(e) {
                    var t;
                    this.title = e.title, this.sup = e.sup, this.mixins = e.mixins, t = e.body, this.fun = O([], t)
                }
                var t = u((o(r, e).displayName = "Class", r), e).prototype,
                    n = r;
                return t.children = ["title", "sup", "mixins", "fun"], t.isCallable = lt, t.ripName = function (e) {
                    this.name = e.varName()
                }, t.compile = function (e, t) {
                    function R(e) {
                        var t, n, r, i, s;
                        if (e instanceof c)
                            for (t = 0, r = (n = e.lines).length; t < r; ++t) i = t, s = n[t], s instanceof E && (e.lines[i] = w(s, T))
                    }
                    var n, r, i, s, o, u, a, f, l, h, g, w, S, x, T, N, L, A, M, H, B, F, I, q;
                    n = this.fun, r = n.body, i = r.lines, s = this.title, o = [], u = s != null ? s.varName() : void 8, a = u || this.name, ut.test(a || "") ? n.cname = a : a = "constructor", f = d("prototype"), l = "constructor$$", w = function (t, n) {
                        var r, i, s, u, a, c, m;
                        r = 0;
                        for (; r < t.items.length; r++) {
                            i = t.items[r], s = i.key;
                            if (s instanceof v && s.name === l || s instanceof p && s.value === "'" + l + "'") h && t.carp("redundant constructor"), h = i.val, t.items.splice(r--, 1), g = n;
                            if (!(i.val instanceof O || i.accessor)) continue;
                            s.isComplex() && (s = d(e.scope.temporary("key")), i.key = C(s, i.key)), i.val.bound && (o.push(i.key), i.val.bound = !1, i.val.classBound = !0);
                            for (u = 0, c = (a = [].concat(i.val)).length; u < c; ++u) m = a[u], m.meth = s
                        }
                        return t.items.length ? k(f, t) : p("void")
                    };
                    for (S = 0, x = i.length; S < x; ++S) T = S, N = i[S], N instanceof E ? i[T] = w(N, T) : N instanceof O && !N.statement ? (h && N.carp("redundant constructor"), h = N) : N instanceof C && N.left instanceof y && N.left.head.value === "this" && N.right instanceof O ? N.right.stat = N.left.tails[0].key : N.traverseChildren(R);
                    h || (h = i[i.length] = this.sup ? O([], c(y(new _).add(b([P(p("arguments"))])))) : O()), h instanceof O || (i.splice(g + 1, 0, C(d(l), h)), i.unshift(h = O([], c(j(y(d(l)).add(b([P("arguments", !0)]))))))), h.name = a, h.ctor = !0, h.statement = !0;
                    for (S = 0, x = o.length; S < x; ++S) L = o[S], h.body.lines.unshift(C(y(p("this")).add(m(L)), y(d(dt("bind"))).add(b([p("this"), p("'" + L.name + "'"), d("prototype")]))));
                    i.push(A = n.proto = d(n.bound = a)), M = [];
                    if (H = this.sup) M.push(H), B = y(k(p("this"), d("superclass"))), n.proto = J.Extends(n.cname ? c([C(B.add(m(v("displayName"))), p("'" + a + "'")), p(a)]) : B, (F = n.params)[F.length] = d("superclass"));
                    if (H = this.mixins) {
                        I = [];
                        for (S = 0, x = H.length; S < x; ++S) M[M.length] = H[S], I.push(k(f, V("arguments[" + (M.length - 1) + "]"), !0));
                        B = I, r.prepend.apply(r, B)
                    }
                    return n.cname && !this.sup && r.prepend(p(a + ".displayName = '" + a + "'")), q = D(b.make(n, M), !0), u && s.isComplex() && (q = C(A, q)), s && (q = C(s, q)), q.compile(e, t)
                }, r
            }(t), e.Super = _ = function (e) {
                function r() {}
                var t = u((o(r, e).displayName = "Super", r), e).prototype,
                    n = r;
                return t.isCallable = lt, t.compile = function (e) {
                    var t, n, r, i;
                    t = e.scope;
                    if (!this.sproto) {
                        for (; n = !t.get("superclass") && t.fun; t = t.parent) {
                            r = n;
                            if (n = r.meth) return "superclass.prototype" + m(n).compile(e);
                            if (n = r.stat) return "superclass" + m(n).compile(e);
                            if (n = t.fun.inClass) return n + ".superclass.prototype." + t.fun.name;
                            if (n = t.fun.inClassStatic) return n + ".superclass." + t.fun.name
                        }
                        if (n = (i = e.scope.fun) != null ? i.name : void 8) return n + ".superclass"
                    }
                    return "superclass"
                }, r
            }(t), e.Parens = D = function (e) {
                function r(e, t, n) {
                    var r = this instanceof i ? this : new i;
                    return r.it = e, r.keep = t, r.string = n, r
                }

                function i() {}
                var t = u((o(r, e).displayName = "Parens", r), e).prototype,
                    n = r;
                return i.prototype = t, t.children = ["it"], t.show = function () {
                    return this.string && '""'
                }, t.delegate(["isComplex", "isCallable", "isArray", "isRegex"], function (e) {
                    return this.it[e]()
                }), t.isString = function () {
                    return this.string || this.it.isString()
                }, t.unparen = function () {
                    return this.keep ? this : this.it.unparen()
                }, t.compile = function (e, t) {
                    var n;
                    return t == null && (t = e.level), n = this.it, n.cond || (n.cond = this.cond), n["void"] || (n["void"] = this["void"]), this.calling && (!t || this["void"]) && (n.head.hushed = !0), this.keep || this.newed || t >= rt + st[n.op] ? n.isStatement() ? n.compileClosure(e) : "(" + n.compile(e, et) + ")" : (n.front = this.front, n).compile(e, t || et)
                }, r
            }(t), e.Splat = P = function (e) {
                function s(e, t) {
                    var n = this instanceof a ? this : new a;
                    return n.it = e, n.filler = t, n
                }

                function a() {}

                function f(e) {
                    var t, r, i;
                    t = -1;
                    while (r = e[++t]) r instanceof s && (i = r.it, i.isEmpty() ? e.splice(t--, 1) : i instanceof x && (e.splice.apply(e, [t, 1].concat(n.call(f(i.items)))), t += i.items.length - 1));
                    return e
                }

                function l(e) {
                    return e.isArray() ? e : b.make(V(dt("slice") + ".call"), [e])
                }
                var t, r = u((o(s, e).displayName = "Splat", s), e).prototype,
                    i = s;
                return a.prototype = r, t = D.prototype, r.children = t.children, r.isComplex = t.isComplex, r.isAssignable = lt, r.assigns = function (e) {
                    return this.it.assigns(e)
                }, r.compile = function () {
                    return this.carp("invalid splat")
                }, s.compileArray = function (e, t, n) {
                    var r, i, o, u, a, c, h;
                    f(t), r = 0;
                    for (i = 0, o = t.length; i < o; ++i) {
                        u = t[i];
                        if (u instanceof s) break;
                        ++r
                    }
                    if (r >= t.length) return "";
                    if (!t[1]) return (n ? Object : l)(t[0].it).compile(e, tt);
                    a = [], c = [];
                    for (i = 0, o = (h = t.splice(r, 9e9)).length; i < o; ++i) u = h[i], u instanceof s ? (c.length && a.push(x(c.splice(0, 9e9))), a.push(l(u.it))) : c.push(u);
                    return c.length && a.push(x(c)), (r ? x(t) : a.shift()).compile(e, it) + (".concat(" + w.compile(e, a) + ")")
                }, s
            }(t), e.Jump = H = function (e) {
                function r(e, t) {
                    this.verb = e, this.label = t
                }
                var t = u((o(r, e).displayName = "Jump", r), e).prototype,
                    n = r;
                return t.show = function () {
                    var e;
                    return (this.verb || "") + ((e = this.label) ? " " + e : "")
                }, t.isStatement = lt, t.makeReturn = ht, t.getJump = function (e) {
                    var t, n;
                    e || (e = {});
                    if (!e[this.verb]) return this;
                    if (t = this.label) return !s(t, (n = e.labels) != null ? n : e.labels = []) && this
                }, t.compileNode = function (e) {
                    var t, n;
                    return (t = this.label) ? s(t, (n = e.labels) != null ? n : e.labels = []) || this.carp('unknown label "' + t + '"') : e[this.verb] || this.carp("stray " + this.verb), this.show() + ";"
                }, r.extended = function (e) {
                    e.prototype.children = ["it"], this[e.displayName.toLowerCase()] = e
                }, r
            }(t), e.Throw = B = function (e) {
                function r(e) {
                    var t = this instanceof i ? this : new i;
                    return t.it = e, t
                }

                function i() {}
                var t = u((o(r, e).displayName = "Throw", r), e).prototype,
                    n = r;
                return i.prototype = t, t.getJump = pt, t.compileNode = function (e) {
                    var t;
                    return "throw " + (((t = this.it) != null ? t.compile(e, et) : void 8) || "null") + ";"
                }, r
            }(H), e.Return = j = function (e) {
                function r(e) {
                    var t = this instanceof i ? this : new i;
                    return e && e.value !== "void" && (t.it = e), t
                }

                function i() {}
                var t = u((o(r, e).displayName = "Return", r), e).prototype,
                    n = r;
                return i.prototype = t, t.getJump = ht, t.compileNode = function (e) {
                    var t;
                    return "return" + ((t = this.it) ? " " + t.compile(e, et) : "") + ";"
                }, r
            }(H), e.While = F = function (e) {
                function i(e, n, r) {
                    this.un = n, r && (r instanceof t ? this.update = r : this.post = !0);
                    if (this.post || e.value !== "" + !n) this.test = e
                }
                var n = u((o(i, e).displayName = "While", i), e).prototype,
                    r = i;
                return n.children = ["test", "body", "update", "else"], n.aSource = "test", n.aTargets = ["body", "update"], n.show = function () {
                    return [this.un ? "!" : void 8, this.post ? "do" : void 8].join("")
                }, n.isStatement = n.isArray = lt, n.makeComprehension = function (e, t) {
                    this.isComprehension = !0;
                    while (t.length) e = t.pop().addBody(c(e)), e.isComprehension || (e.inComprehension = !0);
                    return this.addBody(c(e))
                }, n.getJump = function (e) {
                    var t, n, r, i, s;
                    e || (e = {}), e["continue"] = !0, e["break"] = !0;
                    for (t = 0, i = (n = ((r = this.body) != null ? r.lines : void 8) || []).length; t < i; ++t) {
                        s = n[t];
                        if (s.getJump(e)) return s
                    }
                }, n.addBody = function (e) {
                    var t;
                    return this.body = e, this.guard && (this.body = c(z(this.guard, this.body))), t = this.body.lines[0], (t != null ? t.verb : void 8) === "continue" && !t.label && (this.body.lines.length = 0), this
                }, n.addGuard = function (e) {
                    return this.guard = e, this
                }, n.addObjComp = function (e) {
                    return this.objComp = e != null ? e : !0, this
                }, n.makeReturn = function (e) {
                    var t, n;
                    return this.hasReturned ? this : (e ? this.objComp ? (this.body = c(this.body.makeObjReturn(e)), this.guard && (this.body = z(this.guard, this.body))) : (!this.body && !this.index && this.addBody(c(d(this.index = "ridx$"))), t = (n = this.body.lines) != null ? n[n.length - 1] : void 8, !this.isComprehension && !this.inComprehension || t != null && !!t.isComprehension ? (this.resVar = e, (n = this["else"]) != null && n.makeReturn(e)) : (this.body.makeReturn(e), (n = this["else"]) != null && n.makeReturn(e), this.hasReturned = !0)) : this.getJump() || (this.returns = !0), this)
                }, n.compileNode = function (e) {
                    var t, n, r, i;
                    e.loop = !0, this.test && (this.un ? this.test = this.test.invert() : this.anaphorize());
                    if (this.post) return "do {" + this.compileBody((e.indent += ot, e));
                    t = ((n = this.test) != null ? n.compile(e, et) : void 8) || "";
                    if (!this.update && !this["else"]) r = t ? "while (" + t : "for (;;";
                    else {
                        r = "for (", this["else"] && (r += (this.yet = e.scope.temporary("yet")) + " = true"), r += ";" + (t && " " + t) + ";";
                        if (i = this.update) r += " " + i.compile(e, et)
                    }
                    return r + ") {" + this.compileBody((e.indent += ot, e))
                }, n.compileBody = function (e) {
                    var t, n, r, s, o, u, a, f, l, h, p, g, w, E;
                    e["break"] = e["continue"] = !0, t = this.body.lines, n = this.yet, r = this.tab, s = o = u = "", a = this.objComp ? "{}" : "[]", f = t != null ? t[t.length - 1] : void 8;
                    if (!this.isComprehension && !this.inComprehension || f != null && !!f.isComprehension) f != null && f.traverseChildren(function (e) {
                        var t;
                        e instanceof c && (t = e.lines)[t.length - 1] instanceof i && (l = !0)
                    }), this.returns && !this.resVar && (this.resVar = h = e.scope.assign("results$", a)), this.resVar && (f instanceof i || l) ? (p = e.scope.temporary("lresult"), t.unshift(C(d(p), x(), "=")), t[g = t.length - 1] != null && (t[g] = t[g].makeReturn(p)), u += ot + "" + y(d(this.resVar)).add(m(v("push"), ".", !0)).add(b([y(d(p))])).compile(e) + ";\n" + this.tab) : (this.hasReturned = !0, this.resVar && this.body.makeReturn(this.resVar));
                    this.returns && (this.objComp && (this.body = c(this.body.makeObjReturn("results$"))), this.guard && this.objComp && (this.body = z(this.guard, this.body)), (!f instanceof i && !this.hasReturned || this.isComprehension || this.inComprehension) && t[g = t.length - 1] != null && (t[g] = t[g].makeReturn(h = e.scope.assign("results$", a))), o += "\n" + this.tab + "return " + (h || a) + ";", (w = this["else"]) != null && w.makeReturn()), n && t.unshift(V(n + " = false;"));
                    if (E = this.body.compile(e, Z)) s += "\n" + E + "\n" + r;
                    return s += u, s += "}", this.post && (s += " while (" + this.test.compile((e.tab = r, e), et) + ");"), n && (s += " if (" + n + ") " + this.compileBlock(e, c(this["else"])), e.scope.free(n)), s + o
                }, i
            }(t), e.For = I = function (e) {
                function r(e) {
                    var t, n, r, i;
                    f(this, e), this.item instanceof d && !this.item.value && (this.item = null);
                    for (t = 0, i = (r = this.kind || []).length; t < i; ++t) n = r[t], this[n] = !0;
                    this.own && !this.object && this.carp("`for own` requires `of`")
                }
                var t = u((o(r, e).displayName = "For", r), e).prototype,
                    n = r;
                return t.children = ["item", "source", "from", "to", "step", "body"], t.aSource = null, t.show = function () {
                    return this.kind.concat(this.index).join(" ")
                }, t.addBody = function (t) {
                    var n, r, i, s = this;
                    if (this.letFunc) {
                        if (n = this.ref, delete this.ref, n) this.item = p("..");
                        t = c(b.letFunc((r = [], (i = this.index) && r.push(C(d(i), p("index$$"))), (i = this.item) && r.push(C(i, p("item$$"))), r), t))
                    }
                    return e.prototype.addBody.call(this, t), this.guard && this.letFunc && (this.index || this.item) && this.body.lines[0]["if"].traverseChildren(function (e) {
                        e instanceof d && (s.index && e.value === s.index && (e.value = "index$$"), s.item && e.value === s.item.value && (e.value = "item$$"))
                    }), this.letFunc && (delete this.index, delete this.item), this
                }, t.compileNode = function (e) {
                    var t, n, r, i, s, o, u, a, f, l, h, v, m, g, y, b, w;
                    e.loop = !0, t = this.temps = [], this.object && this.index ? e.scope.declare(n = this.index) : t.push(n = e.scope.temporary("i")), this.body || this.addBody(c(d(n))), this.object || (r = (this.step || p(1)).compileLoopReference(e, "step"), i = r[0], s = r[1], i === s || t.push(i)), this.from ? (r = this.to.compileLoopReference(e, "to"), o = r[0], u = r[1], a = this.from.compile(e, tt), f = n + " = " + a, u !== o && (f += ", " + u, t.push(o)), !this.step && +a > +o && (i = s = -1), l = this.op === "til" ? "" : "=", h = +i ? n + " " + "<>".charAt(i < 0) + l + " " + o : i + " < 0 ? " + n + " >" + l + " " + o + " : " + n + " <" + l + " " + o) : (this.ref && (this.item = d(e.scope.temporary("x"))), this.item || this.object && this.own ? (r = this.source.compileLoopReference(e, "ref", !this.object), v = r[0], m = r[1], v === m || t.push(v)) : v = m = this.source.compile(e, et), this.object || (0 > i && ~~i === +i ? (f = n + " = " + m + ".length - 1", h = n + " >= 0") : (t.push(g = e.scope.temporary("len")), f = n + " = 0, " + g + " = " + m + ".length", h = n + " < " + g))), this["else"] && (this.yet = e.scope.temporary("yet")), y = "for (", this.object && (y += n + " in ");
                    if (b = this.yet) y += b + " = true, ";
                    return this.object ? y += m : (s === i || (f += ", " + s), y += f + "; " + h + "; " + (1 == Math.abs(i) ? (i < 0 ? "--" : "++") + n : n + (i < 0 ? " -= " + i.slice(1) : " += " + i))), this.own && (y += ") if (" + e.scope.assign("own$", "{}.hasOwnProperty") + ".call(" + v + ", " + n + ")"), y += ") {", this.letFunc ? this.body.traverseChildren(function (e) {
                        switch (e.value) {
                        case "index$$":
                            e.value = n;
                            break;
                        case "item$$":
                            e.value = v + "[" + n + "]"
                        }
                    }) : this.infuseIIFE(), e.indent += ot, this.index && !this.object && (y += "\n" + e.indent + C(d(this.index), V(n)).compile(e, Z) + ";"), this.item && !this.item.isEmpty() && (y += "\n" + e.indent + C(this.item, V(v + "[" + n + "]")).compile(e, Z) + ";"), this.ref && (e.ref = this.item.value), w = this.compileBody(e), (this.item || this.index && !this.object) && "}" === w.charAt(0) && (y += "\n" + this.tab), y + w
                }, t.infuseIIFE = function () {
                    function t(e, t) {
                        var n, r, i;
                        if (t)
                            for (n = 0, r = e.length; n < r; ++n) {
                                i = e[n];
                                if (t === i.value) return !0
                            }
                    }
                    var e = this;
                    this.body.traverseChildren(function (n) {
                        var r, i, s, o, u, a;
                        if (!(n.calling || n.op === "new" && (r = n.it).params)) return;
                        r ? n.it = b.make((r["void"] = !0, r)) : r = n.it.head, i = r.params, s = n.it.tails[0];
                        if (i.length ^ s.args.length - !!s.method) return;
                        o = e.index, u = e.item, o && !t(i, o) && s.args.push(i[i.length] = d(o));
                        if (a = u instanceof w && u.name) u = d(a);
                        u instanceof d && !t(i, u.value) && s.args.push(i[i.length] = u)
                    })
                }, r
            }(F), e.Try = q = function (e) {
                function r(e, t, n, r) {
                    var i;
                    this.attempt = e, this.thrown = t, this.recovery = n, this.ensure = r, (i = this.recovery) != null && i.lines.unshift(C(this.thrown || d("e"), d("e$")))
                }
                var t = u((o(r, e).displayName = "Try", r), e).prototype,
                    n = r;
                return t.children = ["attempt", "recovery", "ensure"], t.show = function () {
                    return this.thrown
                }, t.isStatement = lt, t.isCallable = function () {
                    var e;
                    return ((e = this.recovery) != null ? e.isCallable() : void 8) && this.attempt.isCallable()
                }, t.getJump = function (e) {
                    var t;
                    return this.attempt.getJump(e) || ((t = this.recovery) != null ? t.getJump(e) : void 8)
                }, t.makeReturn = function (e) {
                    return this.attempt = this.attempt.makeReturn(e), this.recovery != null && (this.recovery = this.recovery.makeReturn(e)), this
                }, t.compileNode = function (e) {
                    var t, n;
                    e.indent += ot, t = "try " + this.compileBlock(e, this.attempt);
                    if (n = this.recovery || !this.ensure && V("")) t += " catch (e$) " + this.compileBlock(e, n);
                    if (n = this.ensure) t += " finally " + this.compileBlock(e, n);
                    return t
                }, r
            }(t), e.Switch = R = function (e) {
                function r(e, t, n, r) {
                    var i, s;
                    this.type = e, this.topic = t, this.cases = n, this["default"] = r;
                    if (e === "match") t && (this.target = x(t)), this.topic = null;
                    else if (t) {
                        if (t.length > 1) throw "can't have more than one topic in switch statement";
                        this.topic = this.topic[0]
                    }
                    this.cases.length && (i = (s = this.cases)[s.length - 1]).tests.length === 1 && i.tests[0] instanceof d && i.tests[0].value === "_" && (this.cases.pop(), this["default"] = i.body)
                }
                var t = u((o(r, e).displayName = "Switch", r), e).prototype,
                    n = r;
                return t.children = ["topic", "cases", "default"], t.aSource = "topic", t.aTargets = ["cases"], t.show = function () {
                    return this.type
                }, t.isStatement = lt, t.isCallable = function () {
                    var e, t, n, r;
                    for (e = 0, n = (t = this.cases).length; e < n; ++e) {
                        r = t[e];
                        if (!r.isCallable()) return !1
                    }
                    return this["default"] ? this["default"].isCallable() : !0
                }, t.getJump = function (e) {
                    var t, n, r, i, s;
                    e || (e = {}), e["break"] = !0;
                    for (t = 0, r = (n = this.cases).length; t < r; ++t) {
                        i = n[t];
                        if (s = i.body.getJump(e)) return s
                    }
                    return (n = this["default"]) != null ? n.getJump(e) : void 8
                }, t.makeReturn = function (e) {
                    var t, n, r, i;
                    for (t = 0, r = (n = this.cases).length; t < r; ++t) i = n[t], i.makeReturn(e);
                    return (n = this["default"]) != null && n.makeReturn(e), this
                }, t.compileNode = function (e) {
                    var t, n, r, i, s, o, u, a, f, l, h, d, v;
                    t = this.tab, this.target && (n = y(this.target).cacheReference(e), r = n[0], i = n[1]), s = this.type === "match" ? (o = i ? [r] : [], c(o.concat([p("false")])).compile(e, et)) : !!this.topic && this.anaphorize().compile(e, et), u = "switch (" + s + ") {\n", a = this["default"] || this.cases.length - 1, e["break"] = !0;
                    for (f = 0, l = (n = this.cases).length; f < l; ++f) h = f, d = n[f], u += d.compileCase(e, t, h === a, this.type === "match" || !s, this.type, i);
                    if (this["default"]) {
                        e.indent = t + ot;
                        if (v = this["default"].compile(e, Z)) u += t + ("default:\n" + v + "\n")
                    }
                    return u + t + "}"
                }, r
            }(t), e.Case = U = function (e) {
                function r(e, t) {
                    this.tests = e, this.body = t
                }
                var t = u((o(r, e).displayName = "Case", r), e).prototype,
                    n = r;
                return t.children = ["tests", "body"], t.isCallable = function () {
                    return this.body.isCallable()
                }, t.makeReturn = function (e) {
                    var t, n;
                    return ((t = (n = this.body.lines)[n.length - 1]) != null ? t.value : void 8) !== "fallthrough" && this.body.makeReturn(e), this
                }, t.compileCase = function (e, t, n, r, i, s) {
                    var o, u, a, f, l, c, h, d, v, g, b, w, E, S, T, C, k;
                    o = [];
                    for (u = 0, f = (a = this.tests).length; u < f; ++u) {
                        l = a[u], l = l.expandSlice(e).unwrap();
                        if (l instanceof x && i !== "match")
                            for (c = 0, d = (h = l.items).length; c < d; ++c) v = h[c], o.push(v);
                        else o.push(l)
                    }
                    o.length || o.push(p("void"));
                    if (i === "match")
                        for (u = 0, f = o.length; u < f; ++u) g = u, l = o[u], b = y(s).add(m(p(g), ".", !0)), o[g] = y(l).autoCompare(s ? [b] : null);
                    if (r) {
                        w = i === "match" ? "&&" : "||", v = o[0], g = 0;
                        while (E = o[++g]) v = N(w, v, E);
                        o = [(this.t = v, this.aSource = "t", this.aTargets = ["body"], this).anaphorize().invert()]
                    }
                    S = "";
                    for (u = 0, f = o.length; u < f; ++u) v = o[u], S += t + ("case " + v.compile(e, et) + ":\n");
                    T = this.body.lines, C = T[T.length - 1];
                    if (k = (C != null ? C.value : void 8) === "fallthrough") T[T.length - 1] = V("// fallthrough");
                    e.indent = t += ot;
                    if (E = this.body.compile(e, Z)) S += E + "\n";
                    return n || k || C instanceof H || (S += t + "break;\n"), S
                }, r
            }(t), e.If = z = function (e) {
                function r(e, t, n) {
                    var r = this instanceof i ? this : new i;
                    return r["if"] = e, r.then = t, r.un = n, r
                }

                function i() {}
                var t = u((o(r, e).displayName = "If", r), e).prototype,
                    n = r;
                return i.prototype = t, t.children = ["if", "then", "else"], t.aSource = "if", t.aTargets = ["then"], t.show = function () {
                    return this.un && "!"
                }, t.terminator = "", t.delegate(["isCallable", "isArray", "isString", "isRegex"], function (e) {
                    var t;
                    return ((t = this["else"]) != null ? t[e]() : void 8) && this.then[e]()
                }), t.getJump = function (e) {
                    var t;
                    return this.then.getJump(e) || ((t = this["else"]) != null ? t.getJump(e) : void 8)
                }, t.makeReturn = function (e) {
                    return this.then = this.then.makeReturn(e), this["else"] != null && (this["else"] = this["else"].makeReturn(e)), this
                }, t.compileNode = function (e) {
                    return this.un ? this["if"] = this["if"].invert() : this.soak || this.anaphorize(), e.level ? this.compileExpression(e) : this.compileStatement(e)
                }, t.compileStatement = function (e) {
                    var t, r;
                    return t = "if (" + this["if"].compile(e, et) + ") ", e.indent += ot, t += this.compileBlock(e, c(this.then)), (r = this["else"]) ? t + " else " + (r instanceof n ? r.compile((e.indent = this.tab, e), Z) : this.compileBlock(e, r)) : t
                }, t.compileExpression = function (e) {
                    var t, n, r, i;
                    return t = this.then, n = this["else"] || p("void"), this["void"] && (t["void"] = n["void"] = !0), !this["else"] && (this.cond || this["void"]) ? D(N("&&", this["if"], t)).compile(e) : (r = this["if"].compile(e, nt), i = n.isComplex() ? "\n" + (e.indent += ot) : " ", r += i + "? " + t.compile(e, tt) + "" + i + ": " + n.compile(e, tt), e.level < nt ? r : "(" + r + ")")
                }, r.unfoldSoak = function (e, t, n) {
                    var r;
                    if (r = t[n].unfoldSoak(e)) return t[n] = r.then, r.cond = t.cond, r["void"] = t["void"], r.then = y(t), r
                }, r
            }(t), e.Label = W = function (e) {
                function a(e, t) {
                    var n;
                    this.label = e || "_", this.it = t;
                    if (n = (t instanceof O || t instanceof M) && t || t.calling && t.it.head) return n.name || (n.name = this.label, n.labeled = !0), t
                }
                var t, r = u((o(a, e).displayName = "Label", a), e).prototype,
                    i = a;
                return t = D.prototype, r.children = t.children, r.isCallable = t.isCallable, r.isArray = t.isArray, r.show = function () {
                    return this.label
                }, r.isStatement = lt, r.getJump = function (e) {
                    var t;
                    return e || (e = {}), ((t = e.labels) != null ? t : e.labels = []).push(this.label), this.it.getJump((e["break"] = !0, e))
                }, r.makeReturn = function (e) {
                    return this.it = this.it.makeReturn(e), this
                }, r.compileNode = function (e) {
                    var t, r, i;
                    return t = this.label, r = this.it, i = e.labels = n.call(e.labels || []), s(t, i) && this.carp('duplicate label "' + t + '"'), i.push(t), r.isStatement() || (r = c(r)), t + ": " + (r instanceof c ? (e.indent += ot, this.compileBlock(e, r)) : r.compile(e))
                }, a
            }(t), e.Cascade = X = function (e) {
                function r(e, t, n) {
                    var r = this instanceof i ? this : new i;
                    return r.input = e, r.output = t, r.prog1 = n, r
                }

                function i() {}
                var t = u((o(r, e).displayName = "Cascade", r), e).prototype,
                    n = r;
                return i.prototype = t, t.show = function () {
                    return this.prog1
                }, t.children = ["input", "output"], t.terminator = "", t.delegate(["isCallable", "isArray", "isString", "isRegex"], function (e) {
                    return this[this.prog1 ? "input" : "output"][e]()
                }), t.getJump = function (e) {
                    return this.output.getJump(e)
                }, t.makeReturn = function (e) {
                    return this.ret = e, this
                }, t.compileNode = function (e) {
                    var t, n, i, s, o, u, a, f;
                    return t = e.level, n = this.input, i = this.output, s = this.prog1, o = this.ref, s && ("ret" in this || t && !this["void"]) && i.add((u = p(".."), u.cascadee = !0, u)), "ret" in this && (i = i.makeReturn(this.ret)), o ? s || (i = C(d(o), i)) : o = e.scope.temporary("x"), n instanceof r ? n.ref = o : n && (n = C(d(o), n)), e.level && (e.level = et), a = n.compile(e), f = c(i).compile((e.ref = new String(o), e)), s === "cascade" && !e.ref.erred && this.carp("unreferred cascadee"), t ? (a += ", " + f, t > et ? "(" + a + ")" : a) : a + "" + n.terminator + "\n" + f
                }, r
            }(t), e.JS = V = function (e) {
                function r(e, t, n) {
                    var r = this instanceof i ? this : new i;
                    return r.code = e, r.literal = t, r.comment = n, r
                }

                function i() {}
                var t = u((o(r, e).displayName = "JS", r), e).prototype,
                    n = r;
                return i.prototype = t, t.show = function () {
                    return this.comment ? this.code : "`" + this.code + "`"
                }, t.terminator = "", t.isAssignable = t.isCallable = function () {
                    return !this.comment
                }, t.compile = function (e) {
                    return this.literal ? vt(this.code, e.indent) : this.code
                }, r
            }(t), e.Require = $ = function (e) {
                function r(e) {
                    var t = this instanceof i ? this : new i;
                    return t.body = e, t
                }

                function i() {}
                var t = u((o(r, e).displayName = "Require", r), e).prototype,
                    n = r;
                return i.prototype = t, t.children = ["body"], t.compile = function (e) {
                    var t, n, r, i, s, o, u = this;
                    return n = function (e) {
                        var t;
                        return (t = /^['"](.*)['"]$/.exec(e)) ? t[1] : e
                    }, r = function (e) {
                        var t;
                        return (t = n(e).split("/"))[t.length - 1].split(".")[0].replace(/-[a-z]/ig, function (e) {
                            return e.charAt(1).toUpperCase()
                        })
                    }, i = function (e) {
                        var n;
                        switch (!1) {
                        case !(e instanceof v):
                            return e.name;
                        case !(e instanceof d):
                            return e.value;
                        case !(e instanceof p):
                            return e.value;
                        case !(e instanceof m):
                            return i(e.key);
                        case !(e instanceof y):
                            return (n = e.tails) != null && n.length && (t = e.tails), i(e.head);
                        default:
                            return e
                        }
                    }, s = function (s) {
                        var o, u, a, f;
                        return t = null, o = function () {
                            var e;
                            switch (!1) {
                            case !(s instanceof S):
                                return [i(s.key), s.val];
                            case !(s instanceof y):
                                return (e = s.tails) != null && e.length ? (t = s.tails, [(e = s.tails)[e.length - 1], s.head]) : [s.head, s.head];
                            default:
                                return [s, s]
                            }
                        }(), u = o[0], a = o[1], u = r(i(u)), a = n(i(a)), f = y(d("require")).add(b([p("'" + a + "'")])), C(d(u), t ? y(f, t) : f).compile(e)
                    }, this.body.items != null ? function () {
                        var e, t, n, r = [];
                        for (e = 0, n = (t = this.body.items).length; e < n; ++e) o = t[e], r.push(s(o));
                        return r
                    }.call(this).join(";\n" + e.indent) : s(this.body)
                }, r
            }(t), e.Util = J = function (e) {
                function r(e) {
                    var t = this instanceof i ? this : new i;
                    return t.verb = e, t
                }

                function i() {}
                var t = u((o(r, e).displayName = "Util", r), e).prototype,
                    n = r;
                return i.prototype = t, t.show = H.prototype.show, t.isCallable = lt, t.compile = function () {
                    return dt(this.verb)
                }, r.Extends = function () {
                    return b.make(r("extend"), [arguments[0], arguments[1]])
                }, r
            }(t), e.Vars = K = function (e) {
                function r(e) {
                    var t = this instanceof i ? this : new i;
                    return t.vars = e, t
                }

                function i() {}
                var t = u((o(r, e).displayName = "Vars", r), e).prototype,
                    n = r;
                return i.prototype = t, t.children = ["vars"], t.makeReturn = ht, t.compile = function (e, t) {
                    var n, r, i, s, o;
                    for (n = 0, i = (r = this.vars).length; n < i; ++n) s = r[n], o = s.value, s instanceof d || s.carp("invalid variable declaration"), e.scope.check(o) && s.carp('redeclaration of "' + o + '"'), e.scope.declare(o, s);
                    return p("void").compile(e, t)
                }, r
            }(t), e.L = function (e, t) {
                return t.line = e + 1, t
            }, e.Decl = function (e, t, n) {
                if (!t[0]) throw SyntaxError("empty " + e + " on line " + n);
                return Q[e](t)
            }, Q = {
                "export": function (e) {
                    var t, r, i, s, o;
                    t = -1, r = J("out");
                    while (i = e[++t]) {
                        if (i instanceof c) {
                            e.splice.apply(e, [t--, 1].concat(n.call(i.lines)));
                            continue
                        }
                        if (s = i instanceof O && i.name) {
                            e.splice(t++, 0, C(y(r, [m(v(s))]), d(s)));
                            continue
                        }
                        e[t] = (s = i.varName() || i instanceof C && i.left.varName() || i instanceof M && ((o = i.title) != null ? o.varName() : void 8)) ? C(y(r, [m(v(s))]), i) : k(r, i)
                    }
                    return c(e)
                },
                "import": function (e, t) {
                    var n, r, i, s;
                    for (n = 0, r = e.length; n < r; ++n) i = n, s = e[n], e[i] = k(p("this"), s, t);
                    return c(e)
                },
                importAll: function (e) {
                    return this["import"](e, !0)
                },
                "const": function (e) {
                    var t, n, r;
                    for (t = 0, n = e.length; t < n; ++t) r = e[t], r.op === "=" || r.carp("invalid constant variable declaration"), r["const"] = !0;
                    return c(e)
                },
                "var": K
            }, G = ft.prototype, G.READ_ONLY = {
                "const": "constant",
                "function": "function",
                "undefined": "undeclared"
            }, G.add = function (e, t, n) {
                var r, i;
                if (n && (r = this.variables[e + "."])) {
                    (i = this.READ_ONLY[r] || this.READ_ONLY[t]) ? n.carp("redeclaration of " + i + ' "' + e + '"') : r === t && t === "arg" ? n.carp('duplicate parameter "' + e + '"') : r === "upvar" && n.carp('accidental shadow of "' + e + '"');
                    if (r === "arg" || r === "function") return e
                }
                return this.variables[e + "."] = t, e
            }, G.get = function (e) {
                return this.variables[e + "."]
            }, G.declare = function (e, t, n) {
                var r, i;
                if (r = this.shared) {
                    if (this.check(e)) return;
                    i = r
                } else i = this;
                return i.add(e, n ? "const" : "var", t)
            }, G.assign = function (e, t) {
                return this.add(e, {
                    value: t
                })
            }, G.temporary = function (e) {
                function n(e) {
                    return ++e
                }
                var t;
                e || (e = "ref");
                while ((t = this.variables[e + "$."]) !== "reuse" && t !== void 8) e = e.length < 2 && e < "z" ? String.fromCharCode(e.charCodeAt() + 1) : e.replace(/\d*$/, n);
                return this.add(e + "$", "var")
            }, G.free = function (e) {
                return this.add(e, "reuse")
            }, G.check = function (e, t) {
                var n, r;
                return (n = this.variables[e + "."]) || !t ? n : (r = this.parent) != null ? r.check(e, t) : void 8
            }, G.checkReadOnly = function (e) {
                var t, n, r;
                return (t = this.READ_ONLY[this.check(e, !0)]) ? t : ((n = this.variables)[r = e + "."] || (n[r] = "upvar"), "")
            }, G.emit = function (e, t) {
                var n, r, i, s, o, u, a, f;
                n = [], r = [], i = [];
                for (s in o = this.variables) {
                    u = o[s], s = s.slice(0, -1);
                    if (u === "var" || u === "const" || u === "reuse") n.push(s);
                    else if (a = u.value)~(f = vt(a, t)).lastIndexOf("function(", 0) ? i.push("function " + s + f.slice(8)) : r.push(s + " = " + f)
                }
                if (a = n.concat(r).join(", ")) e = t + "var " + a + ";\n" + e;
                return (a = i.join("\n" + t)) ? e + "\n" + t + a : e
            }, Y = {
                clone: "function(it){\n  function fun(){} fun.prototype = it;\n  return new fun;\n}",
                extend: "function(sub, sup){\n  function fun(){} fun.prototype = (sub.superclass = sup).prototype;\n  (sub.prototype = new fun).constructor = sub;\n  if (typeof sup.extended == 'function') sup.extended(sub);\n  return sub;\n}",
                bind: "function(obj, key, target){\n  return function(){ return (target || obj)[key].apply(obj, arguments) };\n}",
                "import": "function(obj, src){\n  var own = {}.hasOwnProperty;\n  for (var key in src) if (own.call(src, key)) obj[key] = src[key];\n  return obj;\n}",
                importAll: "function(obj, src){\n  for (var key in src) obj[key] = src[key];\n  return obj;\n}",
                repeatString: "function(str, n){\n  for (var r = ''; n > 0; (n >>= 1) && (str += str)) if (n & 1) r += str;\n  return r;\n}",
                repeatArray: "function(arr, n){\n  for (var r = []; n > 0; (n >>= 1) && (arr = arr.concat(arr)))\n    if (n & 1) r.push.apply(r, arr);\n  return r;\n}",
                "in": "function(x, xs){\n  var i = -1, l = xs.length >>> 0;\n  while (++i < l) if (x === xs[i]) return true;\n  return false;\n}",
                out: "typeof exports != 'undefined' && exports || this",
                curry: "function(f, bound){\n  var context,\n  _curry = function(args) {\n    return f.length > 1 ? function(){\n      var params = args ? args.concat() : [];\n      context = bound ? context || this : this;\n      return params.push.apply(params, arguments) <\n          f.length && arguments.length ?\n        _curry.call(context, params) : f.apply(context, params);\n    } : f;\n  };\n  return _curry();\n}",
                flip: "function(f){\n  return curry$(function (x, y) { return f(y, x); });\n}",
                partialize: "function(f, args, where){\n  var context = this;\n  return function(){\n    var params = slice$.call(arguments), i,\n        len = params.length, wlen = where.length,\n        ta = args ? args.concat() : [], tw = where ? where.concat() : [];\n    for(i = 0; i < len; ++i) { ta[tw[0]] = params[i]; tw.shift(); }\n    return len < wlen && len ?\n      partialize$.apply(context, [f, ta, tw]) : f.apply(context, ta);\n  };\n}",
                not: "function(x){ return !x; }",
                deepEq: "function(x, y, type){\n  var toString = {}.toString, hasOwnProperty = {}.hasOwnProperty,\n      has = function (obj, key) { return hasOwnProperty.call(obj, key); };\n  var first = true;\n  return eq(x, y, []);\n  function eq(a, b, stack) {\n    var className, length, size, result, alength, blength, r, key, ref, sizeB;\n    if (a == null || b == null) { return a === b; }\n    if (a.__placeholder__ || b.__placeholder__) { return true; }\n    if (a === b) { return a !== 0 || 1 / a == 1 / b; }\n    className = toString.call(a);\n    if (toString.call(b) != className) { return false; }\n    switch (className) {\n      case '[object String]': return a == String(b);\n      case '[object Number]':\n        return a != +a ? b != +b : (a == 0 ? 1 / a == 1 / b : a == +b);\n      case '[object Date]':\n      case '[object Boolean]':\n        return +a == +b;\n      case '[object RegExp]':\n        return a.source == b.source &&\n               a.global == b.global &&\n               a.multiline == b.multiline &&\n               a.ignoreCase == b.ignoreCase;\n    }\n    if (typeof a != 'object' || typeof b != 'object') { return false; }\n    length = stack.length;\n    while (length--) { if (stack[length] == a) { return true; } }\n    stack.push(a);\n    size = 0;\n    result = true;\n    if (className == '[object Array]') {\n      alength = a.length;\n      blength = b.length;\n      if (first) { \n        switch (type) {\n        case '===': result = alength === blength; break;\n        case '<==': result = alength <= blength; break;\n        case '<<=': result = alength < blength; break;\n        }\n        size = alength;\n        first = false;\n      } else {\n        result = alength === blength;\n        size = alength;\n      }\n      if (result) {\n        while (size--) {\n          if (!(result = size in a == size in b && eq(a[size], b[size], stack))){ break; }\n        }\n      }\n    } else {\n      if ('constructor' in a != 'constructor' in b || a.constructor != b.constructor) {\n        return false;\n      }\n      for (key in a) {\n        if (has(a, key)) {\n          size++;\n          if (!(result = has(b, key) && eq(a[key], b[key], stack))) { break; }\n        }\n      }\n      if (result) {\n        sizeB = 0;\n        for (key in b) {\n          if (has(b, key)) { ++sizeB; }\n        }\n        if (first) {\n          if (type === '<<=') {\n            result = size < sizeB;\n          } else if (type === '<==') {\n            result = size <= sizeB\n          } else {\n            result = size === sizeB;\n          }\n        } else {\n          first = false;\n          result = size === sizeB;\n        }\n      }\n    }\n    stack.pop();\n    return result;\n  }\n}",
                split: "''.split",
                replace: "''.replace",
                toString: "{}.toString",
                join: "[].join",
                slice: "[].slice",
                splice: "[].splice"
            }, Z = 0, et = 1, tt = 2, nt = 3, rt = 4, it = 5,
            function () {
                this["&&"] = this["||"] = this.xor = .2, this[".&."] = this[".^."] = this[".|."] = .3, this["=="] = this["!="] = this["~="] = this["!~="] = this["==="] = this["!=="] = .4, this["<"] = this[">"] = this["<="] = this[">="] = this.of = this["instanceof"] = .5, this["<<="] = this[">>="] = this["<=="] = this[">=="] = this["++"] = .5, this[".<<."] = this[".>>."] = this[".>>>."] = .6, this["+"] = this["-"] = .7, this["*"] = this["/"] = this["%"] = .8
            }.call(st = {
                unary: .9
            }), ot = "  ", ut = /^(?!\d)[\w$\xAA-\uFFDC]+$/, at = /^\d+$/
        }.call(this, e["./ast"] = {}),
        function (t) {
            var n, r;
            n = e("./lexer"), r = e("./parser").parser, r.yy = e("./ast"), r.lexer = {
                lex: function () {
                    var e, t;
                    return e = this.tokens[++this.pos] || [""], t = e[0], this.yytext = e[1], this.yylineno = e[2], t
                },
                setInput: function (e) {
                    return this.pos = -1, this.tokens = e
                },
                upcomingInput: function () {
                    return ""
                }
            }, t.VERSION = "1.2.0", t.compile = function (e, t) {
                var i, s;
                try {
                    return r.parse(n.lex(e)).compileRoot(t)
                } catch (o) {
                    i = o;
                    if (s = t != null ? t.filename : void 8) i.message += "\nat " + s;
                    throw i
                }
            }, t.ast = function (e) {
                return r.parse(typeof e == "string" ? n.lex(e) : e)
            }, t.tokens = n.lex, t.lex = function (e) {
                return n.lex(e, {
                    raw: !0
                })
            }, t.run = function (e, n) {
                var r;
                return Function(t.compile(e, (r = {}, o(r, n), r.bare = !0, r)))()
            }, t.tokens.rewrite = n.rewrite, f(t.ast, r.yy), e.extensions ? e("./node")(t) : (t.require = e, "" + this == "[object BackstagePass]" && (this.EXPORTED_SYMBOLS = ["LiveScript"]))
        }.call(this, e["./livescript"] = {}), e["./livescript"]
}(), this.window && function () {
    function u(e, t) {
        var n = -1,
            r = t.length >>> 0;
        while (++n < r)
            if (e === t[n]) return !0;
        return !1
    }
    var e, t, n, r, i, s, o;
    LiveScript.stab = function (e, t, n, r) {
        var i;
        try {
            LiveScript.run(e, {
                filename: n
            })
        } catch (s) {
            i = s, r
        }
        return typeof t == "function" ? t(r) : void 8
    }, LiveScript.load = function (e, t) {
        var n;
        return n = new XMLHttpRequest, n.open("GET", e, !0), u("overrideMimeType", n) && n.overrideMimeType("text/plain"), n.onreadystatechange = function () {
            var r;
            n.readyState === 4 && ((r = n.status) === 200 || r === 0 ? LiveScript.stab(n.responseText, t, e) : typeof t == "function" && t(Error(e + ": " + n.status + " " + n.statusText)))
        }, n.send(null), n
    }, e = /^(?:text\/|application\/)?ls$/i, t = function (e) {
        e && setTimeout(function () {
            throw e
        })
    };
    for (n = 0, i = (r = document.getElementsByTagName("script")).length; n < i; ++n) s = r[n], e.test(s.type) && ((o = s.src) ? LiveScript.load(o, t) : LiveScript.stab(s.innerHTML, t, s.id))
}(), this.LiveScript;