(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactRouter = require("react-router");

var _root = require("./components/root");

var _root2 = _interopRequireDefault(_root);

var _details = require("./components/resources/details");

var _details2 = _interopRequireDefault(_details);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactDom.render)(_react2.default.createElement(
    _reactRouter.Router,
    { history: _reactRouter.hashHistory },
    _react2.default.createElement(
        _reactRouter.Route,
        { component: _root2.default },
        _react2.default.createElement(_reactRouter.Route, { path: "/" }),
        _react2.default.createElement(_reactRouter.Route, { path: "/articles/:articlePath", component: _details2.default })
    )
), document.querySelector("#app"));

},{"./components/resources/details":8,"./components/root":11,"react":"react","react-dom":"react-dom","react-router":"react-router"}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reqwest = require("reqwest");

var _reqwest2 = _interopRequireDefault(_reqwest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var STARTING_YEAR = 2016;

var Footer = function (_Component) {
    _inherits(Footer, _Component);

    function Footer(oProps) {
        _classCallCheck(this, Footer);

        var iCurrentYear = new Date().getFullYear();

        oProps.copy = "©" + STARTING_YEAR;

        if (iCurrentYear > STARTING_YEAR) {
            oProps.copy += "-" + iCurrentYear;
        }

        var _this = _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this, oProps));

        _this.state = {
            "designer": null
        };
        return _this;
    }

    _createClass(Footer, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this2 = this;

            (0, _reqwest2.default)({
                "url": "./data/designer.json",
                "method": "get",
                "type": "json"
            }).then(function (_ref) {
                var name = _ref.name;
                var url = _ref.url;

                var $designer = _react2.default.createElement(
                    "span",
                    { className: "footer-copy__designer" },
                    "design by",
                    " ",
                    _react2.default.createElement(
                        "a",
                        { href: url },
                        name
                    )
                );

                _this2.setState({
                    "designer": $designer
                });
            });
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "footer",
                { className: "footer" },
                _react2.default.createElement(
                    "h2",
                    { className: "footer__title" },
                    "Avant de nous quitter…"
                ),
                _react2.default.createElement(
                    "div",
                    { className: "footer-links footer__links" },
                    _react2.default.createElement(
                        "a",
                        { className: "footer-links__link", href: "http://www.provincedeliege.be/hauteecole", rel: "external" },
                        "HEPL"
                    ),
                    " ",
                    _react2.default.createElement("span", { className: "footer-links__separator" }),
                    " ",
                    _react2.default.createElement(
                        "a",
                        { className: "footer-links__link", href: "https://ecolevirtuelle.provincedeliege.be", rel: "external" },
                        "École Virtuelle"
                    )
                ),
                _react2.default.createElement(
                    "div",
                    { className: "footer-copy footer__copy" },
                    _react2.default.createElement(
                        "small",
                        null,
                        _react2.default.createElement(
                            "span",
                            { className: "footer-copy__code" },
                            this.props.copy,
                            " ",
                            _react2.default.createElement(
                                "a",
                                { className: "footer-copy__link", href: "https://hepl-web.github.io" },
                                "hepl-web"
                            )
                        ),
                        this.state.designer ? ", " : "",
                        this.state.designer
                    )
                )
            );
        }
    }]);

    return Footer;
}(_react.Component);

exports.default = Footer;

},{"react":"react","reqwest":"reqwest"}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require("react-router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
    _inherits(Header, _Component);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "header",
                { className: "header" },
                _react2.default.createElement(
                    "h1",
                    { className: "header__title" },
                    _react2.default.createElement(
                        _reactRouter.Link,
                        { className: "header__link", to: "/" },
                        _react2.default.createElement(
                            "abbr",
                            { className: "header__school", title: "Haute École de la Province de Liège" },
                            "HEPL"
                        ),
                        " ",
                        _react2.default.createElement(
                            "strong",
                            { className: "header__bachelor" },
                            "Bachelier en Techniques Graphiques"
                        ),
                        " ",
                        _react2.default.createElement(
                            "span",
                            { className: "header__bachelor-suffix" },
                            "Orientation Techniques Infographiques"
                        ),
                        " ",
                        _react2.default.createElement(
                            "em",
                            { className: "header__section" },
                            "Section Web"
                        )
                    )
                )
            );
        }
    }]);

    return Header;
}(_react.Component);

exports.default = Header;

},{"react":"react","react-router":"react-router"}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _remarkable = require("remarkable");

var _remarkable2 = _interopRequireDefault(_remarkable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Introduction = function (_Component) {
    _inherits(Introduction, _Component);

    function Introduction(oProps) {
        _classCallCheck(this, Introduction);

        var oRemarkable = new _remarkable2.default(),
            sIntroduction = "Bienvenue sur le _microsite_ de la **Section Web**, qui a pour vocation de vous lister les organisations GitHub propres à chaque cours.";

        oProps.title = "Introduction";
        oProps.content = {
            "__html": oRemarkable.render(sIntroduction)
        };

        return _possibleConstructorReturn(this, (Introduction.__proto__ || Object.getPrototypeOf(Introduction)).call(this, oProps));
    }

    _createClass(Introduction, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "section",
                { className: "main__section introduction" },
                _react2.default.createElement(
                    "h2",
                    { className: "introduction__title" },
                    this.props.title
                ),
                _react2.default.createElement("div", { className: "introduction__content", dangerouslySetInnerHTML: this.props.content })
            );
        }
    }]);

    return Introduction;
}(_react.Component);

exports.default = Introduction;

},{"react":"react","remarkable":"remarkable"}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reqwest = require("reqwest");

var _reqwest2 = _interopRequireDefault(_reqwest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LinksList = function (_Component) {
    _inherits(LinksList, _Component);

    function LinksList(oProps) {
        _classCallCheck(this, LinksList);

        var _this = _possibleConstructorReturn(this, (LinksList.__proto__ || Object.getPrototypeOf(LinksList)).call(this, oProps));

        _this.state = {
            "sections": []
        };
        return _this;
    }

    _createClass(LinksList, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            (0, _reqwest2.default)({
                "headers": { "Accept": "application/vnd.github.raw" },
                "method": "get",
                "type": "html",
                "url": "https://api.github.com/repos/hepl-web/toolbox/contents/links/README.md"
            }).then(this.parseLinks.bind(this));
        }
    }, {
        key: "parseLinks",
        value: function parseLinks(sRawContent) {
            var aLines = sRawContent.split("\n"),
                aSections = [],
                oCurrentSection = void 0,
                rTitleCheck = /^##\s(.+)$/i,
                rLinkCheck = /^(?:\*|-)\s\[(.+)\]\((.+)\)\s-\s(.+)$/i;

            aLines = aLines.slice(aLines.findIndex(function () {
                var sLine = arguments.length <= 0 || arguments[0] === undefined ? "" : arguments[0];
                return sLine.trim() === "* * *";
            }));

            aLines.forEach(function (sRawLine) {
                var sLine = sRawLine.trim();

                if (!sLine) {
                    return;
                }

                if (rTitleCheck.test(sLine)) {
                    oCurrentSection && aSections.push(oCurrentSection);

                    oCurrentSection = {
                        "title": sLine.replace(rTitleCheck, "$1"),
                        "links": []
                    };
                }

                if (rLinkCheck.test(sLine)) {
                    var _sLine$match = sLine.match(rLinkCheck);

                    var _sLine$match2 = _slicedToArray(_sLine$match, 4);

                    var name = _sLine$match2[1];
                    var url = _sLine$match2[2];
                    var description = _sLine$match2[3];


                    oCurrentSection.links.push({ name: name, url: url, description: description });
                }
            });

            aSections.push(oCurrentSection);

            this.setState({
                "sections": aSections
            });
        }
    }, {
        key: "generateSection",
        value: function generateSection(_ref) {
            var title = _ref.title;
            var links = _ref.links;

            return _react2.default.createElement(
                "section",
                { className: "side-links__section" },
                _react2.default.createElement(
                    "h3",
                    { className: "side-links__section-name" },
                    title
                ),
                _react2.default.createElement(
                    "ul",
                    { className: "side-links__list" },
                    links.map(this.generateLink.bind(this))
                )
            );
        }
    }, {
        key: "generateLink",
        value: function generateLink(_ref2) {
            var name = _ref2.name;
            var url = _ref2.url;
            var description = _ref2.description;

            return _react2.default.createElement(
                "li",
                { className: "side-links__list-element" },
                _react2.default.createElement(
                    "a",
                    { className: "side-links__link", href: url, title: description, target: "_new" },
                    name
                )
            );
        }
    }, {
        key: "render",
        value: function render() {
            var oSections = void 0;

            if (this.state.sections.length > 1) {
                oSections = this.state.sections.map(this.generateSection.bind(this));
            } else {
                oSections = _react2.default.createElement(
                    "div",
                    { className: "side-links__loading" },
                    "chargement…"
                );
            }

            return _react2.default.createElement(
                "aside",
                { className: "side-links" },
                _react2.default.createElement(
                    "h2",
                    { className: "side-links__title" },
                    "Liens"
                ),
                _react2.default.createElement(
                    "p",
                    { className: "side-links__introduction" },
                    "Quelques liens utiles ou incontournables."
                ),
                oSections
            );
        }
    }]);

    return LinksList;
}(_react.Component);

exports.default = LinksList;

},{"react":"react","reqwest":"reqwest"}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reqwest = require("reqwest");

var _reqwest2 = _interopRequireDefault(_reqwest);

var _dateFormatter = require("../../utils/date-formatter");

var _dateFormatter2 = _interopRequireDefault(_dateFormatter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OrganisationDetails = function (_Component) {
    _inherits(OrganisationDetails, _Component);

    function OrganisationDetails(oProps) {
        _classCallCheck(this, OrganisationDetails);

        var _this = _possibleConstructorReturn(this, (OrganisationDetails.__proto__ || Object.getPrototypeOf(OrganisationDetails)).call(this, oProps));

        _this.state = {
            "repos": 0
        };
        return _this;
    }

    _createClass(OrganisationDetails, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            switch (this.props.type) {
                case "organisation":
                    this.fetchOrganisationInfos();
                    break;
                case "repository":
                    this.fetchRepositoryInfos();
                    break;
                default:
                    break;
            }
        }
    }, {
        key: "fetchOrganisationInfos",
        value: function fetchOrganisationInfos() {
            var _this2 = this;

            (0, _reqwest2.default)({
                "url": "https://api.github.com/orgs/" + this.props.path,
                "method": "get",
                "type": "json"
            }).then(function (_ref) {
                var avatar_url = _ref.avatar_url;
                var html_url = _ref.html_url;
                var public_repos = _ref.public_repos;

                _this2.setState({
                    "avatar": avatar_url + "&s=100",
                    "repos": public_repos,
                    "url": html_url
                });
            });
        }
    }, {
        key: "fetchRepositoryInfos",
        value: function fetchRepositoryInfos() {
            var _this3 = this;

            (0, _reqwest2.default)({
                "url": "https://api.github.com/repos/" + this.props.path,
                "method": "get",
                "type": "json"
            }).then(function (_ref2) {
                var html_url = _ref2.html_url;
                var owner = _ref2.owner;
                var pushed_at = _ref2.pushed_at;

                _this3.setState({
                    "avatar": owner.avatar_url + "&s=100",
                    "last_update": new Date(pushed_at),
                    "url": html_url
                });
            });
        }
    }, {
        key: "render",
        value: function render() {
            var oInfo = void 0,
                aClassNames = ["organisations__member", "organisation"];

            if (this.props.type === "organisation") {
                oInfo = _react2.default.createElement(
                    "span",
                    null,
                    this.state.repos,
                    " dépôt",
                    this.state.repos > 1 && "s"
                );
            } else if (this.props.type === "repository" && this.state.last_update) {
                aClassNames.push("organisation--repo");
                oInfo = _react2.default.createElement(
                    "time",
                    { dateTime: this.state.last_update },
                    "Mise à jour : ",
                    (0, _dateFormatter2.default)(this.state.last_update)
                );
            }

            return _react2.default.createElement(
                "article",
                { className: aClassNames.join(" ") },
                _react2.default.createElement(
                    "a",
                    { className: "organisation__link", href: this.state.url },
                    _react2.default.createElement(
                        "h4",
                        { className: "organisation__name" },
                        this.props.name
                    ),
                    _react2.default.createElement(
                        "figure",
                        { className: "organisation__avatar" },
                        _react2.default.createElement("img", { className: "organisation__img", src: this.state.avatar })
                    ),
                    _react2.default.createElement(
                        "span",
                        { className: "organisation__path" },
                        this.props.path
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "organisation__infos" },
                        oInfo
                    )
                )
            );
        }
    }]);

    return OrganisationDetails;
}(_react.Component);

exports.default = OrganisationDetails;

},{"../../utils/date-formatter":12,"react":"react","reqwest":"reqwest"}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reqwest = require("reqwest");

var _reqwest2 = _interopRequireDefault(_reqwest);

var _details = require("./details");

var _details2 = _interopRequireDefault(_details);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OrganisationsList = function (_Component) {
    _inherits(OrganisationsList, _Component);

    function OrganisationsList(oProps) {
        _classCallCheck(this, OrganisationsList);

        oProps.title = "Organisations";

        var _this = _possibleConstructorReturn(this, (OrganisationsList.__proto__ || Object.getPrototypeOf(OrganisationsList)).call(this, oProps));

        _this.state = {
            "sections": []
        };
        return _this;
    }

    _createClass(OrganisationsList, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this2 = this;

            (0, _reqwest2.default)({
                "url": "./data/index.json",
                "method": "get",
                "type": "json"
            }).then(function (aSections) {
                _this2.setState({
                    "sections": aSections
                });
            });
        }
    }, {
        key: "generateBloc",
        value: function generateBloc(_ref) {
            var title = _ref.title;
            var members = _ref.members;

            return _react2.default.createElement(
                "section",
                { className: "organisations__bloc bloc" },
                _react2.default.createElement(
                    "h3",
                    { className: "bloc__title" },
                    title
                ),
                members.map(function (oMember) {
                    return _react2.default.createElement(_details2.default, oMember);
                })
            );
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "section",
                { className: "main__section organisations" },
                _react2.default.createElement(
                    "h2",
                    { className: "organisations__title" },
                    this.props.title
                ),
                this.state.sections.map(this.generateBloc.bind(this))
            );
        }
    }]);

    return OrganisationsList;
}(_react.Component);

exports.default = OrganisationsList;

},{"./details":6,"react":"react","reqwest":"reqwest"}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _remarkable = require("remarkable");

var _remarkable2 = _interopRequireDefault(_remarkable);

var _resources = require("../../utils/resources");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResourceDetails = function (_Component) {
    _inherits(ResourceDetails, _Component);

    function ResourceDetails(oProps) {
        _classCallCheck(this, ResourceDetails);

        var _this = _possibleConstructorReturn(this, (ResourceDetails.__proto__ || Object.getPrototypeOf(ResourceDetails)).call(this, oProps));

        _this.state = {
            "ready": false
        };
        return _this;
    }

    _createClass(ResourceDetails, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this2 = this;

            var sQueryPath = this.props.params.articlePath;

            (0, _resources.loadResources)().then(function (aResources) {
                var oResource = void 0;

                oResource = aResources.find(function (_ref) {
                    var path = _ref.path;
                    return path === sQueryPath;
                });

                if (!oResource) {
                    console.error("Unknown resource.");

                    return;
                }

                _this2.parseContent(oResource);
            });
        }
    }, {
        key: "parseContent",
        value: function parseContent(oResource) {
            var oRemarkable = new _remarkable2.default();
            var title = oResource.title;
            var content = oResource.content;
            var author = oResource.author;
            var date = oResource.date;


            this.setState({
                author: author,
                "content": {
                    "__html": oRemarkable.render(content)
                },
                date: date,
                "ready": true,
                title: title
            });
        }
    }, {
        key: "render",
        value: function render() {
            if (!this.state.ready) {
                return _react2.default.createElement(
                    "article",
                    { className: "resource resource--details" },
                    _react2.default.createElement(
                        "div",
                        { className: "resource__loading" },
                        "chargement..."
                    )
                );
            }

            return _react2.default.createElement(
                "article",
                { className: "resource resource--details" },
                _react2.default.createElement(
                    "h2",
                    { className: "resource__title" },
                    this.state.title
                ),
                _react2.default.createElement("div", { className: "resource__content", dangerouslySetInnerHTML: this.state.content })
            );
        }
    }]);

    return ResourceDetails;
}(_react.Component);

exports.default = ResourceDetails;

},{"../../utils/resources":13,"react":"react","remarkable":"remarkable"}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require("react-router");

var _remarkable = require("remarkable");

var _remarkable2 = _interopRequireDefault(_remarkable);

var _dateFormatter = require("../../utils/date-formatter");

var _dateFormatter2 = _interopRequireDefault(_dateFormatter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResourcesListElement = function (_Component) {
    _inherits(ResourcesListElement, _Component);

    function ResourcesListElement() {
        _classCallCheck(this, ResourcesListElement);

        return _possibleConstructorReturn(this, (ResourcesListElement.__proto__ || Object.getPrototypeOf(ResourcesListElement)).apply(this, arguments));
    }

    _createClass(ResourcesListElement, [{
        key: "render",
        value: function render() {
            var oRemarkable = new _remarkable2.default(),
                oPreviewContent = {
                "__html": oRemarkable.render(this.props.preview)
            };

            return _react2.default.createElement(
                "article",
                { className: "resources__element resource" },
                _react2.default.createElement(
                    "h3",
                    { className: "resource__title" },
                    _react2.default.createElement(
                        _reactRouter.Link,
                        { className: "resource__title-link", to: "/articles/" + this.props.path },
                        this.props.title
                    )
                ),
                _react2.default.createElement("div", { className: "resource__preview", dangerouslySetInnerHTML: oPreviewContent }),
                _react2.default.createElement(
                    "div",
                    { className: "resource__infos" },
                    "Par ",
                    _react2.default.createElement(
                        "a",
                        { className: "resource__author", href: this.props.author.url, rel: "external" },
                        this.props.author.name
                    ),
                    ", le ",
                    _react2.default.createElement(
                        "time",
                        { datetime: this.props.date },
                        (0, _dateFormatter2.default)(this.props.date)
                    )
                ),
                _react2.default.createElement(
                    "div",
                    { className: "resource__read" },
                    _react2.default.createElement(
                        _reactRouter.Link,
                        { className: "resource__read-link", to: "/articles/" + this.props.path },
                        "(lire la suite)"
                    )
                )
            );
        }
    }]);

    return ResourcesListElement;
}(_react.Component);

exports.default = ResourcesListElement;

},{"../../utils/date-formatter":12,"react":"react","react-router":"react-router","remarkable":"remarkable"}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _remarkable = require("remarkable");

var _remarkable2 = _interopRequireDefault(_remarkable);

var _resources = require("../../utils/resources");

var _element = require("./element");

var _element2 = _interopRequireDefault(_element);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResourcesList = function (_Component) {
    _inherits(ResourcesList, _Component);

    function ResourcesList(oProps) {
        _classCallCheck(this, ResourcesList);

        var oRemarkable = new _remarkable2.default(),
            aIntroductionLines = ["Les _ressources_ sont de courts articles destinés à vous présenter un langage, une technique ou tout autre aspect intéressant pour les apprentis _travailleurs du web_ que vous êtes.", "Une sorte de _blog technique_ de l'équipe.  ", "Ces articles sont tirés du dossier [resources](https://github.com/hepl-web/toolbox/tree/master/resources) du _repository_ [hepl-web/toolbox](https://github.com/hepl-web/toolbox/). Si vous avez une ressource intéressante à partager, n'hésitez pas à faire une _Pull Request_ !"];

        oProps.title = "Ressources";
        oProps.introduction = {
            "__html": oRemarkable.render(aIntroductionLines.join("\n"))
        };

        var _this = _possibleConstructorReturn(this, (ResourcesList.__proto__ || Object.getPrototypeOf(ResourcesList)).call(this, oProps));

        _this.state = {
            "resources": []
        };
        return _this;
    }

    _createClass(ResourcesList, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this2 = this;

            (0, _resources.loadResources)().then(function (aResources) {
                _this2.setState({
                    "resources": aResources
                });
            });
        }
    }, {
        key: "render",
        value: function render() {
            var mRessources = void 0;

            if (this.state.resources.length) {
                mRessources = this.state.resources.map(function (oArticle, iIndex) {
                    return _react2.default.createElement(_element2.default, _extends({ index: iIndex }, oArticle));
                });
            } else {
                mRessources = "chargement…";
            }

            return _react2.default.createElement(
                "section",
                { className: "main__section resources" },
                _react2.default.createElement(
                    "h2",
                    { className: "resources__title" },
                    this.props.title
                ),
                _react2.default.createElement("div", { className: "resources__explain", dangerouslySetInnerHTML: this.props.introduction }),
                _react2.default.createElement(
                    "div",
                    { className: "resources__container" },
                    mRessources
                )
            );
        }
    }]);

    return ResourcesList;
}(_react.Component);

exports.default = ResourcesList;

},{"../../utils/resources":13,"./element":9,"react":"react","remarkable":"remarkable"}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require("react-router");

var _header = require("./header");

var _header2 = _interopRequireDefault(_header);

var _footer = require("./footer");

var _footer2 = _interopRequireDefault(_footer);

var _introduction = require("./introduction");

var _introduction2 = _interopRequireDefault(_introduction);

var _list = require("./organisations/list");

var _list2 = _interopRequireDefault(_list);

var _list3 = require("./resources/list");

var _list4 = _interopRequireDefault(_list3);

var _list5 = require("./links/list");

var _list6 = _interopRequireDefault(_list5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RootContainer = function (_Component) {
    _inherits(RootContainer, _Component);

    function RootContainer() {
        _classCallCheck(this, RootContainer);

        return _possibleConstructorReturn(this, (RootContainer.__proto__ || Object.getPrototypeOf(RootContainer)).apply(this, arguments));
    }

    _createClass(RootContainer, [{
        key: "render",
        value: function render() {
            var oMain = void 0;

            if (this.props.children) {
                oMain = _react2.default.createElement(
                    "main",
                    { className: "main" },
                    _react2.default.createElement(
                        "div",
                        { className: "main__backlink-container" },
                        _react2.default.createElement(
                            _reactRouter.Link,
                            { to: "/" },
                            "retour à la liste des ressources"
                        )
                    ),
                    this.props.children
                );
            } else {
                oMain = _react2.default.createElement(
                    "main",
                    { className: "main" },
                    _react2.default.createElement(_introduction2.default, null),
                    _react2.default.createElement(_list2.default, null),
                    _react2.default.createElement(_list4.default, null)
                );
            }

            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(_header2.default, null),
                _react2.default.createElement(
                    "div",
                    { className: "holder" },
                    oMain,
                    _react2.default.createElement(_list6.default, null)
                ),
                _react2.default.createElement(_footer2.default, null)
            );
        }
    }]);

    return RootContainer;
}(_react.Component);

exports.default = RootContainer;

},{"./footer":2,"./header":3,"./introduction":4,"./links/list":5,"./organisations/list":7,"./resources/list":10,"react":"react","react-router":"react-router"}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var dGivenDate = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

    var dDate = dGivenDate instanceof Date ? dGivenDate : new Date(),
        aDateParts = [],
        iDay = dDate.getDate();

    aDateParts.push("" + iDay + (iDay === 1 ? "er" : ""));
    aDateParts.push(MONTHS[dDate.getMonth()]);
    aDateParts.push(dDate.getFullYear() + ",");
    aDateParts.push(fAddLeadingZero(dDate.getHours()) + "h" + fAddLeadingZero(dDate.getMinutes()));

    return aDateParts.join(" ");
};

var MONTHS = ["janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];

var fAddLeadingZero = void 0;

fAddLeadingZero = function fAddLeadingZero(iNumber) {
    return "" + (iNumber < 10 ? "0" : "") + iNumber;
};

},{}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseContent = exports.loadResources = undefined;

var _bluebird = require("bluebird");

var _bluebird2 = _interopRequireDefault(_bluebird);

var _reqwest = require("reqwest");

var _reqwest2 = _interopRequireDefault(_reqwest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var aResources = void 0,
    fLoadResources = void 0,
    fParseContent = void 0;

exports.loadResources = fLoadResources = function fLoadResources() {
    var fLoadResource = void 0,
        fSortingResources = void 0;

    if (aResources) {
        return _bluebird2.default.resolve(aResources);
    }

    fLoadResource = function fLoadResource(oArticleInfos) {
        return (0, _reqwest2.default)({
            "headers": { "Accept": "application/vnd.github.raw" },
            "method": "get",
            "type": "html",
            "url": "https://api.github.com/repos/hepl-web/toolbox/contents/resources/" + oArticleInfos.path
        }).then(function (sRawContent) {
            var author = oArticleInfos.author;
            var date = oArticleInfos.date;
            var path = oArticleInfos.path;

            var _fParseContent = fParseContent(sRawContent);

            var title = _fParseContent.title;
            var content = _fParseContent.content;
            var preview = _fParseContent.preview;


            return _bluebird2.default.resolve({
                author: author,
                content: content,
                "date": new Date(date),
                path: path,
                preview: preview,
                title: title
            });
        });
    };

    fSortingResources = function fSortingResources(aUnsortedResources) {
        aUnsortedResources.sort(function (_ref, _ref2) {
            var dOne = _ref["date"];
            var dTwo = _ref2["date"];
            return dTwo.getTime() - dOne.getTime();
        });

        return _bluebird2.default.resolve(aUnsortedResources);
    };

    return new _bluebird2.default(function (fResolve) {
        (0, _reqwest2.default)({
            "headers": { "Accept": "application/vnd.github.raw" },
            "method": "get",
            "type": "json",
            "url": "https://api.github.com/repos/hepl-web/toolbox/contents/resources/index.json"
        }).then(function (aResourcesList) {
            return _bluebird2.default.map(aResourcesList, fLoadResource).then(fSortingResources);
        }).then(fResolve);
    });
};

exports.parseContent = fParseContent = function fParseContent(sRawContent) {
    var rTitleCheck = /^##\s?(.+)$/i,
        aLines = void 0,
        iTitleIndex = void 0,
        sTitle = void 0,
        sPreview = void 0;

    aLines = sRawContent.split("\n").slice(1);

    iTitleIndex = aLines.findIndex(function (sLine) {
        return rTitleCheck.test(sLine);
    });
    sTitle = aLines.splice(iTitleIndex, 1)[0].replace(rTitleCheck, "$1");

    sPreview = aLines.filter(function (sLine) {
        return sLine.trim();
    })[0];

    return {
        "content": aLines.join("\n"),
        "preview": sPreview,
        "title": sTitle
    };
};

exports.loadResources = fLoadResources;
exports.parseContent = fParseContent;

},{"bluebird":"bluebird","reqwest":"reqwest"}]},{},[1]);
