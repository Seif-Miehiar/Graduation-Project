(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_welcomepage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/welcomepage */ "./src/components/welcomepage.js");
/* harmony import */ var _components_cardlist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/cardlist */ "./src/components/cardlist.js");
/* harmony import */ var _components_shop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/shop */ "./src/components/shop.js");
/* harmony import */ var _components_signin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/signin */ "./src/components/signin.js");
/* harmony import */ var _components_shopnew__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/shopnew */ "./src/components/shopnew.js");
/* harmony import */ var _components_signup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/signup */ "./src/components/signup.js");
/* harmony import */ var _components_privaterouter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/privaterouter */ "./src/components/privaterouter.js");
/* harmony import */ var _components_shoppingcart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/shoppingcart */ "./src/components/shoppingcart.js");
var _jsxFileName = "/Users/rbk-21/Desktop/Graduation-Project/iplay/src/App.js";
 // import mysql from "mysql2";

 // import './App.css';
// import "../src/web";


 // import Header from './components/header';

 // import Footer from "./components/footer";





 // const connection = mysql.createConnection({
//   host: 'sql7.freemysqlhosting.net',
//   user:'root',
//   password:'8h14R5EfuH',//password of your mysql db
//   database:'db'
//   });
//   connection.connect(function(err){
//     (err)? console.log(err+'+++++++++++++++//////////'): console.log('connection********');
//     });
// connection.connect(function(err){
//   (err)? console.log(err+'+++++++++++++++//////////'): console.log('connection********');
//   });

class App extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (// <form> <center>
      //   {/* <div className="App">
      // <header className="App-header">
      //   <img src={logo} className="App-logo" alt="logo" />
      //   <p>
      //     Hello Iplay
      //   </p>
      //   <a
      //     className="App-link"
      //     href="https://reactjs.org"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     Learn React
      //   </a>  */}
      //   {/* <header>
      //     Hii people in HEADER
      //   </header> */}
      // <div>
      //   <Welcomepage />
      // </div>
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "/welcomepage",
        component: _components_welcomepage__WEBPACK_IMPORTED_MODULE_2__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "/",
        component: _components_welcomepage__WEBPACK_IMPORTED_MODULE_2__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "/Shop",
        component: _components_shop__WEBPACK_IMPORTED_MODULE_4__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "/Sign-in-customer",
        component: _components_signin__WEBPACK_IMPORTED_MODULE_5__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "/sign-up-customer",
        component: _components_signup__WEBPACK_IMPORTED_MODULE_7__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_privaterouter__WEBPACK_IMPORTED_MODULE_8__["default"], {
        exact: true,
        path: "/Shopnew",
        component: _components_shopnew__WEBPACK_IMPORTED_MODULE_6__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_privaterouter__WEBPACK_IMPORTED_MODULE_8__["default"], {
        exact: true,
        path: "/Shoppingcart",
        component: _components_shoppingcart__WEBPACK_IMPORTED_MODULE_9__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_privaterouter__WEBPACK_IMPORTED_MODULE_8__["default"], {
        exact: true,
        path: "/cardlist",
        component: _components_cardlist__WEBPACK_IMPORTED_MODULE_3__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }))) //   {/* <div>
      //     <footer>
      //       i am a footer
      // </footer>
      //   </div> */}
      //   </center>
      // </form>

    );
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/cardlist.js":
/*!************************************!*\
  !*** ./src/components/cardlist.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/rbk-21/Desktop/Graduation-Project/iplay/src/components/cardlist.js";


class Cardlist extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      roleName: "Steam"
    };
  }

  componentWillMount() {
    this.getInfo();
  }

  getInfo() {
    fetch('http://localhost:8080/getProducts').then(response => response.json()).then(card => {
      console.log(card);
      this.setState({
        cards: card
      });
    });
  }

  render() {
    let that = this;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, this.state.cards.map((c, i) => {
      if (c.role === that.state.roleName) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: i,
          className: "col-md-4 col-xs-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "shop",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "shop-img",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: c.image,
          alt: "",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "shop-body",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, "Laptop", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }), "Collection"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "/",
          className: "cta-btn",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        }, "Shop now ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "fa fa-arrow-circle-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        })))));
      }
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Cardlist);

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/rbk-21/Desktop/Graduation-Project/iplay/src/components/header.js";



class Header extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "top-header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "header-links pull-left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-phone",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }), " +021-95-51-84")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-envelope-o",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }), " email@email.com")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-map-marker",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }), " 1734 Stonecoal Road"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "header-links pull-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-dollar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }), " USD")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-user-o",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }), " My Account"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "header-logo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/",
      className: "logo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, " iPlay ")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "header-search",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
      className: "input-select",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, "All Categories"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, "Category 01"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, "Category 02")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      className: "input",
      placeholder: "Search here",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "search-btn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, "Search")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-3 clearfix",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "header-ctn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-heart-o",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, "Your Wishlist"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "qty",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, "2"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "dropdown",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      exact: true,
      to: "/Shoppingcart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "dropdown-toggle",
      href: "/",
      "data-toggle": "dropdown",
      "aria-expanded": "true",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-shopping-cart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, "Your Cart"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "qty",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, "3"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "cart-dropdown",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "cart-list",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-widget",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "./img/product01.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "product-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, "product name goes here")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "product-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "qty",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, "1x"), "$980.00")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "delete",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-close",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-widget",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "./img/product02.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "product-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, "product name goes here")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "product-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "qty",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, "3x"), "$980.00")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "delete",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-close",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "cart-summary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, "3 Item(s) selected"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, "SUBTOTAL: $2940.00")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "cart-btns",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/Shoppingcart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, "View Cart")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, "Checkout  ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-arrow-circle-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "menu-toggle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-bars",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }, "Menu"))))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
      id: "navigation",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "responsive-nav",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      class: "main-nav nav navbar-nav",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      onClick: () => this.props.changeRole("Random-Home"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    }, "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      onClick: () => this.props.changeRole("Steam"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    }, "Steam")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      onClick: () => this.props.changeRole("PSN"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    }, "PSN")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      onClick: () => this.props.changeRole("GooglePlay"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: this
    }, "Google Play")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      onClick: () => this.props.changeRole("iTunes"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    }, "iTunes")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      onClick: () => this.props.changeRole("Xbox"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    }, "Xbox")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      onClick: () => this.props.changeRole("Amazon"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164
      },
      __self: this
    }, "Amazon")))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/privaterouter.js":
/*!*****************************************!*\
  !*** ./src/components/privaterouter.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_rbk_21_Desktop_Graduation_Project_iplay_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _jsxFileName = "/Users/rbk-21/Desktop/Graduation-Project/iplay/src/components/privaterouter.js";



const PrivateRoute = (_ref) => {
  let Component = _ref.component,
      rest = Object(_Users_rbk_21_Desktop_Graduation_Project_iplay_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["component"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], Object.assign({}, rest, {
    render: props => localStorage.getItem('token') ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, Object.assign({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: undefined
    })) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
      to: {
        pathname: '/sign-in-customer',
        state: {
          from: props.location
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: undefined
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PrivateRoute);

/***/ }),

/***/ "./src/components/reducers/cartReducer.js":
/*!************************************************!*\
  !*** ./src/components/reducers/cartReducer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// import Item1 from '../../../public/cssshop/img'
// import Item2 from '../../../public/cssshop/img'
// import Item3 from '../../../public/cssshop/img  '
// import Item4 from '../../images/item4.jpg'
// import Item5 from '../../images/item5.jpg'
// import Item6 from '../../images/item6.jpg'
const initState = {
  items: [{
    id: 1,
    title: 'Winter body',
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
    price: 110
  }, {
    id: 2,
    title: 'Adidas',
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
    price: 80
  }, {
    id: 3,
    title: 'Vans',
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
    price: 120
  }, {
    id: 4,
    title: 'White',
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
    price: 260
  }, {
    id: 5,
    title: 'Cropped-sho',
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
    price: 160
  }, {
    id: 6,
    title: 'Blues',
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
    price: 90
  }],
  addedItems: [],
  total: 0
};

const cartReducer = (state = initState, action) => {};

/* harmony default export */ __webpack_exports__["default"] = (cartReducer);

/***/ }),

/***/ "./src/components/shop.js":
/*!********************************!*\
  !*** ./src/components/shop.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/rbk-21/Desktop/Graduation-Project/iplay/src/components/shop.js";
 //importing css files
// import "../cssshop/";
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Shoppage extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [{
        url: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(121).jpg",
        title: "test1"
      }, {
        url: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(96).jpg",
        title: "test2"
      }, {
        url: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(45).jpg",
        title: "test3"
      }]
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("body", {
      id: "shopbody",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "top-header1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "header-links1 pull-left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-phone",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }), " +021-95-51-84")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-envelope-o",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }), " email@email.com")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-map-marker",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }), " 1734 Stonecoal Road"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "header-links1 pull-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-dollar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }), " USD")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-user-o",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }), " My Account"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "header1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "header-logo1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      className: "logo1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "../public/images/logo.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }), "public\\images"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "header-search1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
      className: "input-select1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, "All Categories"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, "Category 01"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, "Category 02")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      className: "input1",
      placeholder: "Search here",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "search-btn1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, "Search")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-3 clearfix",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "header-ctn1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-heart-o",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, "Your Wishlist"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "qty1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, "2"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "dropdown",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "dropdown-toggle",
      "data-toggle": "dropdown",
      "aria-expanded": "true",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-shopping-cart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, "Your Cart"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "qty1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, "3")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "cart-dropdown1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "cart-list1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-widget11",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-img1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "../../public/images/product01.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "images/ps.png",
      className: "img-responsive",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-body11",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      id: "hhh",
      className: "product-name11",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, "product name goes here")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      id: "hhh",
      className: "product-price11",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "qty1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, "1x"), "$980.00")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "delete1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-close",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-widget11",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-img1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "./img/product02.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-body11",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      id: "hhh",
      className: "product-name11",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, "product name goes here")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      id: "hhh",
      className: "product-price11",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "qty1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, "3x"), "$980.00")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "delete1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-close",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "cart-summary1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }, "3 Item(s) selected"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
      id: "hhh",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }, "SUBTOTAL: $2940.00")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "cart-btns1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }, "View Cart"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }, "Checkout  ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-arrow-circle-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "menu-toggle1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-bars",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    }, "Menu"))))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
      id: "navigation1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "responsive-nav1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "main-nav nav navbar-nav",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "active1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: this
    }, "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: this
    }, "Hot Deals")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172
      },
      __self: this
    }, "Categories")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
      },
      __self: this
    }, "Laptops")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174
      },
      __self: this
    }, "Smartphones")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
      },
      __self: this
    }, "Cameras")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176
      },
      __self: this
    }, "Accessories")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "section1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-4 col-xs-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "shop1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "shop1-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "./img/shop01.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "shop1-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      id: "hhh",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199
      },
      __self: this
    }, "Laptop", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199
      },
      __self: this
    }), "Collection"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      className: "cta-btn1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200
      },
      __self: this
    }, "Shop now ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-arrow-circle-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200
      },
      __self: this
    }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-4 col-xs-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "shop1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "shop1-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "./img/shop03.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "shop1-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      id: "hhh",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213
      },
      __self: this
    }, "Accessories", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213
      },
      __self: this
    }), "Collection"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      className: "cta-btn1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214
      },
      __self: this
    }, "Shop now ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-arrow-circle-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214
      },
      __self: this
    }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-4 col-xs-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "shop1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "shop1-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "./img/shop02.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "shop1-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      id: "hhh",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227
      },
      __self: this
    }, "Cameras", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227
      },
      __self: this
    }), "Collection"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      className: "cta-btn1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228
      },
      __self: this
    }, "Shop now ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-arrow-circle-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228
      },
      __self: this
    })))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "section1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "section-title1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      id: "hhh",
      className: "title1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250
      },
      __self: this
    }, "New Products"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "section-nav1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "section-tab-nav tab-nav",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "active1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      "data-toggle": "tab",
      href: "#tab1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253
      },
      __self: this
    }, "Laptops")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      "data-toggle": "tab",
      href: "#tab1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254
      },
      __self: this
    }, "Smartphones")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      "data-toggle": "tab",
      href: "#tab1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255
      },
      __self: this
    }, "Cameras")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      "data-toggle": "tab",
      href: "#tab1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256
      },
      __self: this
    }, "Accessories")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "products-tabs1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "tab1",
      className: "tab-pane active",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "products-slick1",
      "data-nav": "#slick-nav-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-img1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "./img/product01.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 273
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-label1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "sale1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275
      },
      __self: this
    }, "-30%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "new1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276
      },
      __self: this
    }, "NEW"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-body1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 279
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "product-category1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280
      },
      __self: this
    }, "Category"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      id: "hhh",
      className: "product-name1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281
      },
      __self: this
    }, "product name goes here")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      id: "hhh",
      className: "product-price1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 282
      },
      __self: this
    }, "$980.00 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("del", {
      className: "product-old-price1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 282
      },
      __self: this
    }, "$990.00")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-rating1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 284
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 285
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 286
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 287
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 288
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-btns1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 290
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "add-to-wishlist",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 291
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-heart-o",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 291
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "tooltipp1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 291
      },
      __self: this
    }, "add to wishlist")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "add-to-compare",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 292
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-exchange",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 292
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "tooltipp1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 292
      },
      __self: this
    }, "add to compare")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "quick-view",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 293
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-eye",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 293
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "tooltipp1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 293
      },
      __self: this
    }, "quick view")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "add-to-cart1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 296
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: ".add-to-cart-btn1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 297
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-shopping-cart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 297
      },
      __self: this
    }), " add to cart"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 303
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-img1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 304
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "./img/product02.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 305
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-label1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 306
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "new1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 307
      },
      __self: this
    }, "NEW"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-body1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 310
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "product-category1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 311
      },
      __self: this
    }, "Category"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      id: "hhh",
      className: "product-name1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 312
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 312
      },
      __self: this
    }, "product name goes here")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      id: "hhh",
      className: "product-price1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 313
      },
      __self: this
    }, "$980.00 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("del", {
      className: "product-old-price1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 313
      },
      __self: this
    }, "$990.00")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-rating1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 314
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 315
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 316
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 317
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 318
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star-o",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 319
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-btns1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 321
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "add-to-wishlist",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 322
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-heart-o",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 322
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "tooltipp1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 322
      },
      __self: this
    }, "add to wishlist")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "add-to-compare",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 323
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-exchange",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 323
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "tooltipp1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 323
      },
      __self: this
    }, "add to compare")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "quick-view",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 324
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-eye",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 324
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "tooltipp1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 324
      },
      __self: this
    }, "quick view")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "add-to-cart1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 327
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: ".add-to-cart-btn1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 328
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-shopping-cart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 328
      },
      __self: this
    }), " add to cart"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 334
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-img1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 335
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "./img/product03.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 336
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-label1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 337
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "sale1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 338
      },
      __self: this
    }, "-30%"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-body1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 341
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "product-category1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 342
      },
      __self: this
    }, "Category"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      id: "hhh",
      className: "product-name1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 343
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 343
      },
      __self: this
    }, "product name goes here")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      id: "hhh",
      className: "product-price1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 344
      },
      __self: this
    }, "$980.00 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("del", {
      className: "product-old-price1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 344
      },
      __self: this
    }, "$990.00")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-rating1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 345
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-btns1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 347
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "add-to-wishlist",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 348
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-heart-o",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 348
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "tooltipp1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 348
      },
      __self: this
    }, "add to wishlist")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "add-to-compare",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 349
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-exchange",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 349
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "tooltipp1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 349
      },
      __self: this
    }, "add to compare")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "quick-view",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 350
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-eye",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 350
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "tooltipp1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 350
      },
      __self: this
    }, "quick view")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "add-to-cart1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 353
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: ".add-to-cart-btn1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 354
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-shopping-cart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 354
      },
      __self: this
    }), " add to cart"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 360
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-img1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 361
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "./img/product04.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 362
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-body1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 364
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "product-category1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 365
      },
      __self: this
    }, "Category"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      id: "hhh",
      className: "product-name1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 366
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 366
      },
      __self: this
    }, "product name goes here")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      id: "hhh",
      className: "product-price1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 367
      },
      __self: this
    }, "$980.00 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("del", {
      className: "product-old-price1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 367
      },
      __self: this
    }, "$990.00")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-rating1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 368
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 369
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 370
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 371
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 372
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 373
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-btns1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 375
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "add-to-wishlist",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 376
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-heart-o",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 376
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "tooltipp1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 376
      },
      __self: this
    }, "add to wishlist")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "add-to-compare",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 377
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-exchange",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 377
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "tooltipp1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 377
      },
      __self: this
    }, "add to compare")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "quick-view",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 378
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-eye",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 378
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "tooltipp1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 378
      },
      __self: this
    }, "quick view")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "add-to-cart1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 381
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: ".add-to-cart-btn1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 382
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-shopping-cart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 382
      },
      __self: this
    }), " add to cart"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 388
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-img1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 389
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "./img/product05.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 390
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-body1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 392
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "product-category1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 393
      },
      __self: this
    }, "Category"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      id: "hhh",
      className: "product-name1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 394
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 394
      },
      __self: this
    }, "product name goes here")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      id: "hhh",
      className: "product-price1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 395
      },
      __self: this
    }, "$980.00 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("del", {
      className: "product-old-price1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 395
      },
      __self: this
    }, "$990.00")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-rating1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 396
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 397
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 398
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 399
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 400
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 401
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-btns1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 403
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "add-to-wishlist",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 404
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-heart-o",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 404
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "tooltipp1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 404
      },
      __self: this
    }, "add to wishlist")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "add-to-compare",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 405
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-exchange",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 405
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "tooltipp1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 405
      },
      __self: this
    }, "add to compare")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "quick-view",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 406
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-eye",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 406
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "tooltipp1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 406
      },
      __self: this
    }, "quick view")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "add-to-cart1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 409
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: ".add-to-cart-btn1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 410
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-shopping-cart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 410
      },
      __self: this
    }), " add to cart")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "slick-nav-1",
      className: "products-slick-nav1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 415
      },
      __self: this
    })))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "hot-deal1",
      className: "section1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 430
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 432
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 434
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 435
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "hot-deal1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 436
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "hot-deal1-countdown",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 437
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 438
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 439
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      id: "hhh",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 440
      },
      __self: this
    }, "02"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 441
      },
      __self: this
    }, "Days"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 444
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 445
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      id: "hhh",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 446
      },
      __self: this
    }, "10"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 447
      },
      __self: this
    }, "Hours"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 450
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 451
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      id: "hhh",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 452
      },
      __self: this
    }, "34"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 453
      },
      __self: this
    }, "Mins"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 456
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 457
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      id: "hhh",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 458
      },
      __self: this
    }, "60"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 459
      },
      __self: this
    }, "Secs")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      id: "hhh",
      className: "text-uppercase",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 463
      },
      __self: this
    }, "hot deal this week"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 464
      },
      __self: this
    }, "New Collection Up to 50% OFF"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "primary-btn cta-btn",
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 465
      },
      __self: this
    }, "Shop now")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "section1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 476
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 478
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 480
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 483
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "section-title1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 484
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      id: "hhh",
      className: "title1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 485
      },
      __self: this
    }, "Top selling"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "section-nav1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 486
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "section-tab-nav tab-nav",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 487
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "active1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 488
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      "data-toggle": "tab",
      href: "#tab2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 488
      },
      __self: this
    }, "Laptops")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 489
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      "data-toggle": "tab",
      href: "#tab2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 489
      },
      __self: this
    }, "Smartphones")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 490
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      "data-toggle": "tab",
      href: "#tab2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 490
      },
      __self: this
    }, "Cameras")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 491
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      "data-toggle": "tab",
      href: "#tab2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 491
      },
      __self: this
    }, "Accessories")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 499
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 500
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "products-tabs1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 501
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "tab2",
      className: "tab-pane fade in active",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 503
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "products-slick1",
      "data-nav": "#slick-nav-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 504
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 506
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-img1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 507
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "./img/product06.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 508
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-label1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 509
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "sale1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 510
      },
      __self: this
    }, "-30%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "new1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 511
      },
      __self: this
    }, "NEW"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-body1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 514
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "product-category1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 515
      },
      __self: this
    }, "Category"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      id: "hhh",
      className: "product-name1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 516
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 516
      },
      __self: this
    }, "product name goes here")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      id: "hhh",
      className: "product-price1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 517
      },
      __self: this
    }, "$980.00 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("del", {
      className: "product-old-price1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 517
      },
      __self: this
    }, "$990.00")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-rating1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 518
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 519
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 520
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 521
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 522
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 523
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-btns1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 525
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "add-to-wishlist",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 526
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-heart-o",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 526
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "tooltipp1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 526
      },
      __self: this
    }, "add to wishlist")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "add-to-compare",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 527
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-exchange",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 527
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "tooltipp1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 527
      },
      __self: this
    }, "add to compare")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "quick-view",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 528
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-eye",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 528
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "tooltipp1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 528
      },
      __self: this
    }, "quick view")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "add-to-cart1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 531
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: ".add-to-cart-btn1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 532
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-shopping-cart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 532
      },
      __self: this
    }), " add to cart"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 538
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-img1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 539
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "./img/product07.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 540
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-label1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 541
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "new1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 542
      },
      __self: this
    }, "NEW"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-body1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 545
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "product-category1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 546
      },
      __self: this
    }, "Category"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      id: "hhh",
      className: "product-name1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 547
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 547
      },
      __self: this
    }, "product name goes here")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      id: "hhh",
      className: "product-price1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 548
      },
      __self: this
    }, "$980.00 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("del", {
      className: "product-old-price1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 548
      },
      __self: this
    }, "$990.00")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-rating1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 549
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 550
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 551
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 552
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 553
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star-o",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 554
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-btns1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 556
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "add-to-wishlist",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 557
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-heart-o",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 557
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "tooltipp1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 557
      },
      __self: this
    }, "add to wishlist")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "add-to-compare",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 558
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-exchange",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 558
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "tooltipp1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 558
      },
      __self: this
    }, "add to compare")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "quick-view",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 559
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-eye",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 559
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "tooltipp1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 559
      },
      __self: this
    }, "quick view")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "add-to-cart1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 562
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: ".add-to-cart-btn1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 563
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-shopping-cart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 563
      },
      __self: this
    }), " add to cart"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 569
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-img1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 570
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "./img/product08.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 571
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-label1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 572
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "sale1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 573
      },
      __self: this
    }, "-30%"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-body1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 576
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "product-category1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 577
      },
      __self: this
    }, "Category"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      id: "hhh",
      className: "product-name1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 578
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 578
      },
      __self: this
    }, "product name goes here")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      id: "hhh",
      className: "product-price1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 579
      },
      __self: this
    }, "$980.00 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("del", {
      className: "product-old-price1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 579
      },
      __self: this
    }, "$990.00")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-rating1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 580
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-btns1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 582
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "add-to-wishlist",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 583
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-heart-o",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 583
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "tooltipp1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 583
      },
      __self: this
    }, "add to wishlist")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "add-to-compare",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 584
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-exchange",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 584
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "tooltipp1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 584
      },
      __self: this
    }, "add to compare")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "quick-view",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 585
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-eye",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 585
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "tooltipp1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 585
      },
      __self: this
    }, "quick view")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "add-to-cart1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 588
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: ".add-to-cart-btn1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 589
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-shopping-cart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 589
      },
      __self: this
    }), " add to cart"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 595
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-img1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 596
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "./img/product09.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 597
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-body1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 599
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "product-category1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 600
      },
      __self: this
    }, "Category"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      id: "hhh",
      className: "product-name1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 601
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 601
      },
      __self: this
    }, "product name goes here")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      id: "hhh",
      className: "product-price1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 602
      },
      __self: this
    }, "$980.00 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("del", {
      className: "product-old-price1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 602
      },
      __self: this
    }, "$990.00")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-rating1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 603
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 604
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 605
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 606
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 607
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 608
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-btns1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 610
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "add-to-wishlist",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 611
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-heart-o",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 611
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "tooltipp1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 611
      },
      __self: this
    }, "add to wishlist")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "add-to-compare",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 612
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-exchange",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 612
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "tooltipp1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 612
      },
      __self: this
    }, "add to compare")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "quick-view",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 613
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-eye",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 613
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "tooltipp1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 613
      },
      __self: this
    }, "quick view")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "add-to-cart1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 616
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: ".add-to-cart-btn1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 617
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-shopping-cart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 617
      },
      __self: this
    }), " add to cart"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 623
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-img1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 624
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "./img/product01.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 625
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-body1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 627
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "product-category1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 628
      },
      __self: this
    }, "Category"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      id: "hhh",
      className: "product-name1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 629
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 629
      },
      __self: this
    }, "product name goes here")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      id: "hhh",
      className: "product-price1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 630
      },
      __self: this
    }, "$980.00 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("del", {
      className: "product-old-price1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 630
      },
      __self: this
    }, "$990.00")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-rating1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 631
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 632
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 633
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 634
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 635
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 636
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-btns1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 638
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "add-to-wishlist",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 639
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-heart-o",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 639
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "tooltipp1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 639
      },
      __self: this
    }, "add to wishlist")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "add-to-compare",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 640
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-exchange",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 640
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "tooltipp1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 640
      },
      __self: this
    }, "add to compare")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "quick-view",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 641
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-eye",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 641
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "tooltipp1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 641
      },
      __self: this
    }, "quick view")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "add-to-cart1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 644
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: ".add-to-cart-btn1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 645
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-shopping-cart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 645
      },
      __self: this
    }), " add to cart")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "slick-nav-2",
      className: "products-slick-nav1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 650
      },
      __self: this
    })))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "section1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 665
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 667
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 669
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-4 col-xs-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 670
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "section-title1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 671
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      id: "hhh",
      className: "title1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 672
      },
      __self: this
    }, "Top selling"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "section-nav1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 673
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "slick-nav-3",
      className: "products-slick-nav1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 674
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "products-widget-slick",
      "data-nav": "#slick-nav-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 678
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 679
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-widget1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 681
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-img1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 682
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "./img/product07.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 683
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-body1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 685
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "product-category1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 686
      },
      __self: this
    }, "Category"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      id: "hhh",
      className: "product-name1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 687
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 687
      },
      __self: this
    }, "product name goes here")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      id: "hhh",
      className: "product-price1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 688
      },
      __self: this
    }, "$980.00 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("del", {
      className: "product-old-price1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 688
      },
      __self: this
    }, "$990.00")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-widget1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 694
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-img1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 695
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "./img/product08.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 696
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-body1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 698
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "product-category1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 699
      },
      __self: this
    }, "Category"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      id: "hhh",
      className: "product-name1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 700
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 700
      },
      __self: this
    }, "product name goes here")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      id: "hhh",
      className: "product-price1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 701
      },
      __self: this
    }, "$980.00 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("del", {
      className: "product-old-price1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 701
      },
      __self: this
    }, "$990.00")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-widget1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 707
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-img1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 708
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "./img/product09.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 709
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-body1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 711
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "product-category1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 712
      },
      __self: this
    }, "Category"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      id: "hhh",
      className: "product-name1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 713
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 713
      },
      __self: this
    }, "product name goes here")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      id: "hhh",
      className: "product-price1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 714
      },
      __self: this
    }, "$980.00 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("del", {
      className: "product-old-price1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 714
      },
      __self: this
    }, "$990.00"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 720
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-widget1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 722
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-img1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 723
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "./img/product01.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 724
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-body1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 726
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "product-category1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 727
      },
      __self: this
    }, "Category"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      id: "hhh",
      className: "product-name1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 728
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 728
      },
      __self: this
    }, "product name goes here")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      id: "hhh",
      className: "product-price1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 729
      },
      __self: this
    }, "$980.00 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("del", {
      className: "product-old-price1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 729
      },
      __self: this
    }, "$990.00")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-widget1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 735
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-img1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 736
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "./img/product02.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 737
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-body1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 739
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "product-category1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 740
      },
      __self: this
    }, "Category"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      id: "hhh",
      className: "product-name1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 741
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 741
      },
      __self: this
    }, "product name goes here")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      id: "hhh",
      className: "product-price1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 742
      },
      __self: this
    }, "$980.00 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("del", {
      className: "product-old-price1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 742
      },
      __self: this
    }, "$990.00")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-widget1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 748
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-img1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 749
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "./img/product03.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 750
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-body1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 752
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "product-category1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 753
      },
      __self: this
    }, "Category"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      id: "hhh",
      className: "product-name1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 754
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 754
      },
      __self: this
    }, "product name goes here")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      id: "hhh",
      className: "product-price1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 755
      },
      __self: this
    }, "$980.00 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("del", {
      className: "product-old-price1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 755
      },
      __self: this
    }, "$990.00"))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-4 col-xs-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 763
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "section-title1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 764
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      id: "hhh",
      className: "title1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 765
      },
      __self: this
    }, "Top selling"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "section-nav1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 766
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "slick-nav-4",
      className: "products-slick-nav1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 767
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "products-widget-slick",
      "data-nav": "#slick-nav-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 771
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 772
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-widget1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 774
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-img1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 775
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "./img/product04.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 776
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-body1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 778
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "product-category1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 779
      },
      __self: this
    }, "Category"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      id: "hhh",
      className: "product-name1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 780
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 780
      },
      __self: this
    }, "product name goes here")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      id: "hhh",
      className: "product-price1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 781
      },
      __self: this
    }, "$980.00 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("del", {
      className: "product-old-price1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 781
      },
      __self: this
    }, "$990.00")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-widget1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 787
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-img1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 788
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "./img/product05.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 789
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-body1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 791
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "product-category1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 792
      },
      __self: this
    }, "Category"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      id: "hhh",
      className: "product-name1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 793
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 793
      },
      __self: this
    }, "product name goes here")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      id: "hhh",
      className: "product-price1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 794
      },
      __self: this
    }, "$980.00 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("del", {
      className: "product-old-price1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 794
      },
      __self: this
    }, "$990.00")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-widget1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 800
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-img1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 801
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "./img/product06.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 802
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-body1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 804
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "product-category1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 805
      },
      __self: this
    }, "Category"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      id: "hhh",
      className: "product-name1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 806
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 806
      },
      __self: this
    }, "product name goes here")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      id: "hhh",
      className: "product-price1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 807
      },
      __self: this
    }, "$980.00 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("del", {
      className: "product-old-price1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 807
      },
      __self: this
    }, "$990.00"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 813
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-widget1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 815
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-img1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 816
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "./img/product07.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 817
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-body1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 819
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "product-category1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 820
      },
      __self: this
    }, "Category"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      id: "hhh",
      className: "product-name1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 821
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 821
      },
      __self: this
    }, "product name goes here")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      id: "hhh",
      className: "product-price1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 822
      },
      __self: this
    }, "$980.00 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("del", {
      className: "product-old-price1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 822
      },
      __self: this
    }, "$990.00")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-widget1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 828
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-img1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 829
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "./img/product08.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 830
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-body1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 832
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "product-category1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 833
      },
      __self: this
    }, "Category"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      id: "hhh",
      className: "product-name1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 834
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 834
      },
      __self: this
    }, "product name goes here")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      id: "hhh",
      className: "product-price1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 835
      },
      __self: this
    }, "$980.00 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("del", {
      className: "product-old-price1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 835
      },
      __self: this
    }, "$990.00")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-widget1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 841
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-img1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 842
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "./img/product09.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 843
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-body1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 845
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "product-category1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 846
      },
      __self: this
    }, "Category"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      id: "hhh",
      className: "product-name1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 847
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 847
      },
      __self: this
    }, "product name goes here")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      id: "hhh",
      className: "product-price1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 848
      },
      __self: this
    }, "$980.00 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("del", {
      className: "product-old-price1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 848
      },
      __self: this
    }, "$990.00"))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "clearfix visible-sm visible-xs",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 856
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-4 col-xs-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 858
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "section-title1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 859
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      id: "hhh",
      className: "title1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 860
      },
      __self: this
    }, "Top selling"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "section-nav1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 861
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "slick-nav-5",
      className: "products-slick-nav1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 862
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "products-widget-slick",
      "data-nav": "#slick-nav-5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 866
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 867
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-widget1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 869
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-img1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 870
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "./img/product01.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 871
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-body1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 873
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "product-category1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 874
      },
      __self: this
    }, "Category"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      id: "hhh",
      className: "product-name1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 875
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 875
      },
      __self: this
    }, "product name goes here")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      id: "hhh",
      className: "product-price1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 876
      },
      __self: this
    }, "$980.00 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("del", {
      className: "product-old-price1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 876
      },
      __self: this
    }, "$990.00")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-widget1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 882
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-img1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 883
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "./img/product02.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 884
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-body1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 886
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "product-category1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 887
      },
      __self: this
    }, "Category"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      id: "hhh",
      className: "product-name1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 888
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 888
      },
      __self: this
    }, "product name goes here")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      id: "hhh",
      className: "product-price1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 889
      },
      __self: this
    }, "$980.00 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("del", {
      className: "product-old-price1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 889
      },
      __self: this
    }, "$990.00")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-widget1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 895
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-img1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 896
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "./img/product03.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 897
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-body1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 899
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "product-category1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 900
      },
      __self: this
    }, "Category"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      id: "hhh",
      className: "product-name1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 901
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 901
      },
      __self: this
    }, "product name goes here")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      id: "hhh",
      className: "product-price1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 902
      },
      __self: this
    }, "$980.00 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("del", {
      className: "product-old-price1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 902
      },
      __self: this
    }, "$990.00"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 908
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-widget1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 910
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-img1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 911
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "./img/product04.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 912
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-body1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 914
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "product-category1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 915
      },
      __self: this
    }, "Category"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      id: "hhh",
      className: "product-name1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 916
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 916
      },
      __self: this
    }, "product name goes here")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      id: "hhh",
      className: "product-price1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 917
      },
      __self: this
    }, "$980.00 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("del", {
      className: "product-old-price1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 917
      },
      __self: this
    }, "$990.00")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-widget1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 923
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-img1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 924
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "./img/product05.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 925
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-body1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 927
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "product-category1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 928
      },
      __self: this
    }, "Category"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      id: "hhh",
      className: "product-name1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 929
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 929
      },
      __self: this
    }, "product name goes here")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      id: "hhh",
      className: "product-price1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 930
      },
      __self: this
    }, "$980.00 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("del", {
      className: "product-old-price1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 930
      },
      __self: this
    }, "$990.00")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-widget1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 936
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-img1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 937
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "./img/product06.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 938
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-body1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 940
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "product-category1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 941
      },
      __self: this
    }, "Category"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      id: "hhh",
      className: "product-name1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 942
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 942
      },
      __self: this
    }, "product name goes here")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      id: "hhh",
      className: "product-price1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 943
      },
      __self: this
    }, "$980.00 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("del", {
      className: "product-old-price1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 943
      },
      __self: this
    }, "$990.00")))))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "new1sletter",
      className: "section",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 959
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 961
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 963
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 964
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "new1sletter",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 965
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 966
      },
      __self: this
    }, "Sign Up for the ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 966
      },
      __self: this
    }, "NEWSLETTER")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 967
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      className: "input1",
      type: "email",
      placeholder: "Enter Your Email",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 968
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "new1sletter-btn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 969
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-envelope",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 969
      },
      __self: this
    }), " Subscribe")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "new1sletter-follow",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 971
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 972
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 973
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-facebook",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 973
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 975
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 976
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-twitter",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 976
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 978
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 979
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-instagram",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 979
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 981
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 982
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-pinterest",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 982
      },
      __self: this
    }))))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
      id: "footer1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 995
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "section1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 997
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 999
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1001
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-3 col-xs-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1002
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "footer1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1003
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      id: "hhh",
      className: "footer-title1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1004
      },
      __self: this
    }, "About Us"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1005
      },
      __self: this
    }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "footer-links1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1006
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1007
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1007
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-map-marker",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1007
      },
      __self: this
    }), "1734 Stonecoal Road")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1008
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1008
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-phone",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1008
      },
      __self: this
    }), "+021-95-51-84")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1009
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1009
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-envelope-o",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1009
      },
      __self: this
    }), "email@email.com"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-3 col-xs-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1014
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "footer1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1015
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      id: "hhh",
      className: "footer-title1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1016
      },
      __self: this
    }, "Categories"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "footer-links1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1017
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1018
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1018
      },
      __self: this
    }, "Hot deals")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1019
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1019
      },
      __self: this
    }, "Laptops")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1020
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1020
      },
      __self: this
    }, "Smartphones")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1021
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1021
      },
      __self: this
    }, "Cameras")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1022
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1022
      },
      __self: this
    }, "Accessories"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "clearfix visible-xs",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1027
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-3 col-xs-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1029
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "footer1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1030
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      id: "hhh",
      className: "footer-title1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1031
      },
      __self: this
    }, "Information"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "footer-links1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1032
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1033
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1033
      },
      __self: this
    }, "About Us")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1034
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1034
      },
      __self: this
    }, "Contact Us")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1035
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1035
      },
      __self: this
    }, "Privacy Policy")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1036
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1036
      },
      __self: this
    }, "Orders and Returns")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1037
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1037
      },
      __self: this
    }, "Terms & Conditions"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-3 col-xs-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1042
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "footer1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1043
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      id: "hhh",
      className: "footer-title1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1044
      },
      __self: this
    }, "Service"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "footer-links1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1045
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1046
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1046
      },
      __self: this
    }, "My Account")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1047
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1047
      },
      __self: this
    }, "View Cart")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1048
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1048
      },
      __self: this
    }, "Wishlist")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1049
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1049
      },
      __self: this
    }, "Track My Order")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1050
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1050
      },
      __self: this
    }, "Help")))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "bottom-footer1",
      className: "section1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1062
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1063
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1065
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-12 text-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1066
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "footer-payments1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1067
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1068
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "index.html",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1068
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-cc-visa",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1068
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1069
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "index.html",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1069
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-credit-card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1069
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1070
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "index.html",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1070
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-cc-paypal",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1070
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1071
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "index.html",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1071
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-cc-mastercard",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1071
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1072
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "index.html",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1072
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-cc-discover",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1072
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1073
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "index.html",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1073
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-cc-amex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1073
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "copyright1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1075
      },
      __self: this
    })))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Shoppage);

/***/ }),

/***/ "./src/components/shopnew.js":
/*!***********************************!*\
  !*** ./src/components/shopnew.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./src/components/header.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/rbk-21/Desktop/Graduation-Project/iplay/src/components/shopnew.js";

 // import Footer from "./footer";



class Shopnew extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      roleName: "Random-Home"
    };
  }

  componentWillMount() {
    this.getInfo();
  }

  getInfo() {
    fetch('http://localhost:8080/getProducts').then(response => response.json()).then(card => {
      console.log(card);
      this.setState({
        cards: card
      });
    });
  }

  changeRole(role) {
    this.setState({
      roleName: role
    });
  }

  render() {
    let that = this;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
      changeRole: this.changeRole.bind(this),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "section",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, this.state.cards.map((c, i) => {
      if (c.role === that.state.roleName) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: i,
          className: "col-md-4 col-xs-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "shop",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "shop-img",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: c.image,
          alt: "",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "shop-body",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
          to: c.roleName,
          onClick: () => this.changeRole(c.roleName),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          },
          __self: this
        }, "Shop", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          },
          __self: this
        }), "Now"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          className: "cta-btn",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          },
          __self: this
        }, c.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          },
          __self: this
        }), c.description, c.name));
      }

      {
        /* else if ( c.role === "Random-Home" ) { */
      }
      {
        /* return (
        <div key={i} className="col-md-4 col-xs-6">
        <div className="shop">
        <div className="shop-img">
        	<img src={c.image} alt=""/>
        </div>
        <div className="shop-body">
        	<Link to={c.roleName} onClick={() => this.changeRole(c.roleName)} >
        	<h3>Shop<br/>Now</h3>
        	<a className="cta-btn"><i></i></a>
        	
        	</Link>
        </div>
        	 
        	
        
        </div>
        </div>
        )
        } */
      }
    })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "section",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "section-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: this
    }, "New Products"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "section-nav",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "section-tab-nav tab-nav",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "active",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      "data-toggle": "tab",
      href: "/tab1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    }, "Laptops")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      "data-toggle": "tab",
      href: "/tab1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    }, "Smartphones")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      "data-toggle": "tab",
      href: "/tab1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: this
    }, "Cameras")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      "data-toggle": "tab",
      href: "/tab1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    }, "Accessories")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "products-tabs",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "tab1",
      className: "tab-pane active",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "products-slick",
      "data-nav": "/slick-nav-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "./cssshop/img/product01.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "sale",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181
      },
      __self: this
    }, "-30%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "new",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182
      },
      __self: this
    }, "NEW"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "product-category",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186
      },
      __self: this
    }, "Category"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "product-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187
      },
      __self: this
    }, "product name goes here")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "product-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188
      },
      __self: this
    }, "$980.00 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("del", {
      className: "product-old-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188
      },
      __self: this
    }, "$990.00")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-rating",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-btns",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "add-to-wishlist",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-heart-o",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "tooltipp",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197
      },
      __self: this
    }, "add to wishlist")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "add-to-compare",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-exchange",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "tooltipp",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198
      },
      __self: this
    }, "add to compare")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "quick-view",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-eye",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "tooltipp",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199
      },
      __self: this
    }, "quick view")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "add-to-cart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "add-to-cart-btn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-shopping-cart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203
      },
      __self: this
    }), " add to cart"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "./cssshop/img/product02.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "new",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213
      },
      __self: this
    }, "NEW"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "product-category",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217
      },
      __self: this
    }, "Category"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "product-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218
      },
      __self: this
    }, "product name goes here")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "product-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219
      },
      __self: this
    }, "$980.00 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("del", {
      className: "product-old-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219
      },
      __self: this
    }, "$990.00")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-rating",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star-o",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-btns",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "add-to-wishlist",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-heart-o",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "tooltipp",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228
      },
      __self: this
    }, "add to wishlist")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "add-to-compare",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-exchange",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "tooltipp",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229
      },
      __self: this
    }, "add to compare")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "quick-view",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-eye",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "tooltipp",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230
      },
      __self: this
    }, "quick view")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "add-to-cart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "add-to-cart-btn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-shopping-cart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234
      },
      __self: this
    }), " add to cart"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "./cssshop/img/product03.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "sale",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244
      },
      __self: this
    }, "-30%"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "product-category",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248
      },
      __self: this
    }, "Category"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "product-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249
      },
      __self: this
    }, "product name goes here")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "product-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250
      },
      __self: this
    }, "$980.00 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("del", {
      className: "product-old-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250
      },
      __self: this
    }, "$990.00")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-rating",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-btns",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "add-to-wishlist",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-heart-o",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "tooltipp",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254
      },
      __self: this
    }, "add to wishlist")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "add-to-compare",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-exchange",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "tooltipp",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255
      },
      __self: this
    }, "add to compare")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "quick-view",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-eye",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "tooltipp",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256
      },
      __self: this
    }, "quick view")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "add-to-cart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "add-to-cart-btn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-shopping-cart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260
      },
      __self: this
    }), " add to cart"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "./cssshop/img/product04.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "product-category",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271
      },
      __self: this
    }, "Category"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "product-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272
      },
      __self: this
    }, "product name goes here")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "product-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 273
      },
      __self: this
    }, "$980.00 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("del", {
      className: "product-old-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 273
      },
      __self: this
    }, "$990.00")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-rating",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 279
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-btns",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "add-to-wishlist",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 282
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-heart-o",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 282
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "tooltipp",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 282
      },
      __self: this
    }, "add to wishlist")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "add-to-compare",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-exchange",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "tooltipp",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283
      },
      __self: this
    }, "add to compare")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "quick-view",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 284
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-eye",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 284
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "tooltipp",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 284
      },
      __self: this
    }, "quick view")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "add-to-cart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 287
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "add-to-cart-btn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 288
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-shopping-cart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 288
      },
      __self: this
    }), " add to cart"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 294
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 295
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "./cssshop/img/product05.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 296
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 298
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "product-category",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 299
      },
      __self: this
    }, "Category"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "product-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 300
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 300
      },
      __self: this
    }, "product name goes here")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "product-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 301
      },
      __self: this
    }, "$980.00 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("del", {
      className: "product-old-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 301
      },
      __self: this
    }, "$990.00")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-rating",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 302
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 303
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 304
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 305
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 306
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 307
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-btns",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 309
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "add-to-wishlist",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 310
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-heart-o",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 310
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "tooltipp",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 310
      },
      __self: this
    }, "add to wishlist")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "add-to-compare",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 311
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-exchange",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 311
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "tooltipp",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 311
      },
      __self: this
    }, "add to compare")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "quick-view",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 312
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-eye",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 312
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "tooltipp",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 312
      },
      __self: this
    }, "quick view")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "add-to-cart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 315
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "add-to-cart-btn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 316
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-shopping-cart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 316
      },
      __self: this
    }), " add to cart")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "slick-nav-1",
      className: "products-slick-nav",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 321
      },
      __self: this
    })))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "hot-deal",
      className: "section",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 336
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 338
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 340
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 341
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "hot-deal",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 342
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "hot-deal-countdown",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 343
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 344
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 345
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 346
      },
      __self: this
    }, "02"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 347
      },
      __self: this
    }, "Days"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 350
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 351
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 352
      },
      __self: this
    }, "10"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 353
      },
      __self: this
    }, "Hours"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 356
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 357
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 358
      },
      __self: this
    }, "34"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 359
      },
      __self: this
    }, "Mins"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 362
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 363
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 364
      },
      __self: this
    }, "60"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 365
      },
      __self: this
    }, "Secs")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "text-uppercase",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 369
      },
      __self: this
    }, "hot deal this week"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 370
      },
      __self: this
    }, "New Collection Up to 50% OFF"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "primary-btn cta-btn",
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 371
      },
      __self: this
    }, "Shop now")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "section",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 382
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 384
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 386
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 389
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "section-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 390
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 391
      },
      __self: this
    }, "Top selling"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "section-nav",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 392
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "section-tab-nav tab-nav",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 393
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "active",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 394
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      "data-toggle": "tab",
      href: "/tab2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 394
      },
      __self: this
    }, "Laptops")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 395
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      "data-toggle": "tab",
      href: "/tab2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 395
      },
      __self: this
    }, "Smartphones")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 396
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      "data-toggle": "tab",
      href: "/tab2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 396
      },
      __self: this
    }, "Cameras")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 397
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      "data-toggle": "tab",
      href: "/tab2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 397
      },
      __self: this
    }, "Accessories")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 405
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 406
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "products-tabs",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 407
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "tab2",
      className: "tab-pane fade in active",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 409
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "products-slick",
      "data-nav": "/slick-nav-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 410
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 412
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 413
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "./cssshop/img/product06.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 414
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 415
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "sale",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 416
      },
      __self: this
    }, "-30%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "new",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 417
      },
      __self: this
    }, "NEW"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 420
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "product-category",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 421
      },
      __self: this
    }, "Category"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "product-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 422
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 422
      },
      __self: this
    }, "product name goes here")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "product-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 423
      },
      __self: this
    }, "$980.00 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("del", {
      className: "product-old-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 423
      },
      __self: this
    }, "$990.00")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-rating",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 424
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 425
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 426
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 427
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 428
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 429
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-btns",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 431
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "add-to-wishlist",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 432
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-heart-o",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 432
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "tooltipp",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 432
      },
      __self: this
    }, "add to wishlist")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "add-to-compare",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 433
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-exchange",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 433
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "tooltipp",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 433
      },
      __self: this
    }, "add to compare")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "quick-view",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 434
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-eye",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 434
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "tooltipp",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 434
      },
      __self: this
    }, "quick view")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "add-to-cart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 437
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "add-to-cart-btn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 438
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-shopping-cart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 438
      },
      __self: this
    }), " add to cart"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 444
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 445
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "./cssshop/img/product07.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 446
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 447
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "new",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 448
      },
      __self: this
    }, "NEW"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 451
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "product-category",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 452
      },
      __self: this
    }, "Category"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "product-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 453
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 453
      },
      __self: this
    }, "product name goes here")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "product-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 454
      },
      __self: this
    }, "$980.00 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("del", {
      className: "product-old-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 454
      },
      __self: this
    }, "$990.00")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-rating",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 455
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 456
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 457
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 458
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 459
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star-o",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 460
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-btns",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 462
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "add-to-wishlist",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 463
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-heart-o",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 463
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "tooltipp",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 463
      },
      __self: this
    }, "add to wishlist")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "add-to-compare",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 464
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-exchange",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 464
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "tooltipp",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 464
      },
      __self: this
    }, "add to compare")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "quick-view",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 465
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-eye",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 465
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "tooltipp",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 465
      },
      __self: this
    }, "quick view")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "add-to-cart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 468
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "add-to-cart-btn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 469
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-shopping-cart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 469
      },
      __self: this
    }), " add to cart"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 475
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 476
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "./cssshop/img/product08.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 477
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 478
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "sale",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 479
      },
      __self: this
    }, "-30%"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 482
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "product-category",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 483
      },
      __self: this
    }, "Category"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "product-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 484
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 484
      },
      __self: this
    }, "product name goes here")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "product-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 485
      },
      __self: this
    }, "$980.00 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("del", {
      className: "product-old-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 485
      },
      __self: this
    }, "$990.00")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-rating",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 486
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-btns",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 488
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "add-to-wishlist",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 489
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-heart-o",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 489
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "tooltipp",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 489
      },
      __self: this
    }, "add to wishlist")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "add-to-compare",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 490
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-exchange",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 490
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "tooltipp",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 490
      },
      __self: this
    }, "add to compare")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "quick-view",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 491
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-eye",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 491
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "tooltipp",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 491
      },
      __self: this
    }, "quick view")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "add-to-cart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 494
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "add-to-cart-btn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 495
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-shopping-cart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 495
      },
      __self: this
    }), " add to cart"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 501
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 502
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "./cssshop/img/product09.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 503
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 505
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "product-category",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 506
      },
      __self: this
    }, "Category"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "product-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 507
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 507
      },
      __self: this
    }, "product name goes here")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "product-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 508
      },
      __self: this
    }, "$980.00 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("del", {
      className: "product-old-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 508
      },
      __self: this
    }, "$990.00")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-rating",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 509
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 510
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 511
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 512
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 513
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 514
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-btns",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 516
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "add-to-wishlist",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 517
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-heart-o",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 517
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "tooltipp",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 517
      },
      __self: this
    }, "add to wishlist")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "add-to-compare",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 518
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-exchange",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 518
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "tooltipp",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 518
      },
      __self: this
    }, "add to compare")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "quick-view",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 519
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-eye",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 519
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "tooltipp",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 519
      },
      __self: this
    }, "quick view")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "add-to-cart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 522
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "add-to-cart-btn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 523
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-shopping-cart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 523
      },
      __self: this
    }), " add to cart"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 529
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 530
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "./cssshop/img/product01.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 531
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 533
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "product-category",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 534
      },
      __self: this
    }, "Category"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "product-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 535
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 535
      },
      __self: this
    }, "product name goes here")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "product-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 536
      },
      __self: this
    }, "$980.00 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("del", {
      className: "product-old-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 536
      },
      __self: this
    }, "$990.00")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-rating",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 537
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 538
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 539
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 540
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 541
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 542
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-btns",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 544
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "add-to-wishlist",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 545
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-heart-o",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 545
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "tooltipp",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 545
      },
      __self: this
    }, "add to wishlist")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "add-to-compare",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 546
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-exchange",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 546
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "tooltipp",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 546
      },
      __self: this
    }, "add to compare")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "quick-view",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 547
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-eye",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 547
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "tooltipp",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 547
      },
      __self: this
    }, "quick view")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "add-to-cart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 550
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "add-to-cart-btn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 551
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-shopping-cart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 551
      },
      __self: this
    }), " add to cart")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "slick-nav-2",
      className: "products-slick-nav",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 556
      },
      __self: this
    })))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "section",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 571
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 573
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 575
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-4 col-xs-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 576
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "section-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 577
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 578
      },
      __self: this
    }, "Top selling"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "section-nav",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 579
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "slick-nav-3",
      className: "products-slick-nav",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 580
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "products-widget-slick",
      "data-nav": "/slick-nav-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 584
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 585
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-widget",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 587
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 588
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "./cssshop/img/product07.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 589
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 591
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "product-category",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 592
      },
      __self: this
    }, "Category"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "product-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 593
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 593
      },
      __self: this
    }, "product name goes here")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "product-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 594
      },
      __self: this
    }, "$980.00 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("del", {
      className: "product-old-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 594
      },
      __self: this
    }, "$990.00")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-widget",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 600
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 601
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "./cssshop/img/product08.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 602
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 604
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "product-category",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 605
      },
      __self: this
    }, "Category"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "product-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 606
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 606
      },
      __self: this
    }, "product name goes here")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "product-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 607
      },
      __self: this
    }, "$980.00 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("del", {
      className: "product-old-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 607
      },
      __self: this
    }, "$990.00")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-widget",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 613
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 614
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "./cssshop/img/product09.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 615
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 617
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "product-category",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 618
      },
      __self: this
    }, "Category"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "product-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 619
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 619
      },
      __self: this
    }, "product name goes here")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "product-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 620
      },
      __self: this
    }, "$980.00 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("del", {
      className: "product-old-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 620
      },
      __self: this
    }, "$990.00"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 626
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-widget",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 628
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 629
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "./cssshop/img/product01.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 630
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 632
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "product-category",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 633
      },
      __self: this
    }, "Category"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "product-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 634
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 634
      },
      __self: this
    }, "product name goes here")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "product-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 635
      },
      __self: this
    }, "$980.00 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("del", {
      className: "product-old-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 635
      },
      __self: this
    }, "$990.00")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-widget",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 641
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 642
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "./cssshop/img/product02.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 643
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 645
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "product-category",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 646
      },
      __self: this
    }, "Category"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "product-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 647
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 647
      },
      __self: this
    }, "product name goes here")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "product-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 648
      },
      __self: this
    }, "$980.00 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("del", {
      className: "product-old-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 648
      },
      __self: this
    }, "$990.00")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-widget",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 654
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 655
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "./cssshop/img/product03.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 656
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 658
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "product-category",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 659
      },
      __self: this
    }, "Category"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "product-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 660
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 660
      },
      __self: this
    }, "product name goes here")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "product-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 661
      },
      __self: this
    }, "$980.00 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("del", {
      className: "product-old-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 661
      },
      __self: this
    }, "$990.00"))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-4 col-xs-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 669
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "section-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 670
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 671
      },
      __self: this
    }, "Top selling"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "section-nav",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 672
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "slick-nav-4",
      className: "products-slick-nav",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 673
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "products-widget-slick",
      "data-nav": "/slick-nav-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 677
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 678
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-widget",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 680
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 681
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "./cssshop/img/product04.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 682
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 684
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "product-category",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 685
      },
      __self: this
    }, "Category"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "product-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 686
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 686
      },
      __self: this
    }, "product name goes here")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "product-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 687
      },
      __self: this
    }, "$980.00 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("del", {
      className: "product-old-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 687
      },
      __self: this
    }, "$990.00")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-widget",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 693
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 694
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "./cssshop/img/product05.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 695
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 697
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "product-category",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 698
      },
      __self: this
    }, "Category"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "product-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 699
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 699
      },
      __self: this
    }, "product name goes here")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "product-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 700
      },
      __self: this
    }, "$980.00 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("del", {
      className: "product-old-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 700
      },
      __self: this
    }, "$990.00")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-widget",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 706
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 707
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "./cssshop/img/product06.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 708
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 710
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "product-category",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 711
      },
      __self: this
    }, "Category"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "product-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 712
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 712
      },
      __self: this
    }, "product name goes here")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "product-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 713
      },
      __self: this
    }, "$980.00 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("del", {
      className: "product-old-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 713
      },
      __self: this
    }, "$990.00"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 719
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-widget",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 721
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 722
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "./cssshop/img/product07.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 723
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 725
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "product-category",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 726
      },
      __self: this
    }, "Category"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "product-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 727
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 727
      },
      __self: this
    }, "product name goes here")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "product-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 728
      },
      __self: this
    }, "$980.00 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("del", {
      className: "product-old-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 728
      },
      __self: this
    }, "$990.00")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-widget",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 734
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 735
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "./cssshop/img/product08.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 736
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 738
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "product-category",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 739
      },
      __self: this
    }, "Category"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "product-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 740
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 740
      },
      __self: this
    }, "product name goes here")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "product-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 741
      },
      __self: this
    }, "$980.00 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("del", {
      className: "product-old-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 741
      },
      __self: this
    }, "$990.00")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-widget",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 747
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 748
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "./cssshop/img/product09.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 749
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 751
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "product-category",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 752
      },
      __self: this
    }, "Category"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "product-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 753
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 753
      },
      __self: this
    }, "product name goes here")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "product-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 754
      },
      __self: this
    }, "$980.00 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("del", {
      className: "product-old-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 754
      },
      __self: this
    }, "$990.00"))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "clearfix visible-sm visible-xs",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 762
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-4 col-xs-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 764
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "section-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 765
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 766
      },
      __self: this
    }, "Top selling"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "section-nav",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 767
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "slick-nav-5",
      className: "products-slick-nav",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 768
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "products-widget-slick",
      "data-nav": "/slick-nav-5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 772
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 773
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-widget",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 775
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 776
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "./cssshop/img/product01.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 777
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 779
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "product-category",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 780
      },
      __self: this
    }, "Category"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "product-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 781
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 781
      },
      __self: this
    }, "product name goes here")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "product-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 782
      },
      __self: this
    }, "$980.00 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("del", {
      className: "product-old-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 782
      },
      __self: this
    }, "$990.00")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-widget",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 788
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 789
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "./cssshop/img/product02.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 790
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 792
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "product-category",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 793
      },
      __self: this
    }, "Category"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "product-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 794
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 794
      },
      __self: this
    }, "product name goes here")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "product-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 795
      },
      __self: this
    }, "$980.00 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("del", {
      className: "product-old-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 795
      },
      __self: this
    }, "$990.00")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-widget",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 801
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 802
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "./cssshop/img/product03.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 803
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 805
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "product-category",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 806
      },
      __self: this
    }, "Category"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "product-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 807
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 807
      },
      __self: this
    }, "product name goes here")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "product-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 808
      },
      __self: this
    }, "$980.00 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("del", {
      className: "product-old-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 808
      },
      __self: this
    }, "$990.00"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 814
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-widget",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 816
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 817
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "./cssshop/img/product04.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 818
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 820
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "product-category",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 821
      },
      __self: this
    }, "Category"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "product-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 822
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 822
      },
      __self: this
    }, "product name goes here")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "product-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 823
      },
      __self: this
    }, "$980.00 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("del", {
      className: "product-old-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 823
      },
      __self: this
    }, "$990.00")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-widget",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 829
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 830
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "./cssshop/img/product05.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 831
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 833
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "product-category",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 834
      },
      __self: this
    }, "Category"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "product-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 835
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 835
      },
      __self: this
    }, "product name goes here")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "product-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 836
      },
      __self: this
    }, "$980.00 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("del", {
      className: "product-old-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 836
      },
      __self: this
    }, "$990.00")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-widget",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 842
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 843
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "./cssshop/img/product06.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 844
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "product-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 846
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "product-category",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 847
      },
      __self: this
    }, "Category"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "product-name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 848
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 848
      },
      __self: this
    }, "product name goes here")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "product-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 849
      },
      __self: this
    }, "$980.00 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("del", {
      className: "product-old-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 849
      },
      __self: this
    }, "$990.00")))))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Shopnew);

/***/ }),

/***/ "./src/components/shoppingcart.js":
/*!****************************************!*\
  !*** ./src/components/shoppingcart.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");



 // import cartReducer from './components/reducers/cartReducer';
// const store = createStore(cartReducer);

class Shoppingcart extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {}

/* harmony default export */ __webpack_exports__["default"] = (Shoppingcart);

/***/ }),

/***/ "./src/components/signin.js":
/*!**********************************!*\
  !*** ./src/components/signin.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Signincustomer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/rbk-21/Desktop/Graduation-Project/iplay/src/components/signin.js";

 // import { Link } from "react-router-dom"

class Signincustomer extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    this.handleInputChange = event => {
      const _event$target = event.target,
            value = _event$target.value,
            name = _event$target.name;
      this.setState({
        [name]: value
      });
    };

    this.onSubmit = event => {
      event.preventDefault();
      console.log("wde");
      fetch('http://localhost:8080/sign-in-customer', {
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        return res.json();
      }).then(res => {
        console.log(res.msg);

        if (res.msg === "ok") {
          console.log("whatttttttttt");
          localStorage.setItem("token", res.token);
          this.props.history.push('/Shopnew');
        } else {
          console.log("try Again!");
        }
      }).catch(err => {
        console.error(err);
        alert('Error logging in please try again');
      });
    };

    this.handleUserEmailChange = evt => {
      this.setState({
        userEmail: evt.target.value
      });
      console.log(this.state.email);
    };

    this.handlePasswordChange = evt => {
      this.setState({
        password: evt.target.value
      });
    };

    this.state = {
      userEmail: "",
      password: ""
    };
  } // handleChange(e) {
  //   console.log(e.target.value);
  //   this.setState({ [e.target.name]: e.target.value });
  // }


  clicked() {
    this.setState({
      userEmail: "",
      password: "",
      phoneNumber: "",
      isEnabled: false
    });
  }

  onChange(event) {
    const userEmail = event.target.userEmail;
    const phoneNumber = event.target.phoneNumber;
    const password = event.target.password;
    const value = event.target.value;
    this.setState({
      [userEmail]: value,
      [phoneNumber]: value,
      [password]: value
    });
  }

  // const { userEmail, password } = this.state;
  // const isEnabled = email.length > 0 && password.length > 0;
  click(event) {
    event.preventDefault();
    const data = this.state;
    fetch('http://localhost:8080/sign-in-customer', {
      method: 'GET',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json'
      }
    }).then(response => response.json()).then(state => console.log("siiiiiiiii", state)).catch(err => console.log("innnnnnn", err));
  }

  render() {
    // const { userEmail, password } = this.state;
    // var isEnabled = userEmail.length > 0 && password.length > 0;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: this.onSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, "Login Below!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "email",
      name: "userEmail",
      placeholder: "Enter Email",
      value: this.state.userEmail,
      onChange: this.handleInputChange,
      required: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "password",
      name: "password",
      placeholder: "Enter Password",
      value: this.state.password,
      onChange: this.handleInputChange,
      required: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: event => {
        this.onSubmit(event);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }, "Submit")));
  }

} //         {/* STOOoooooooOOOOOOOOOp */}
//         {/* <body>
//           <div>
//             <center>
//               <div>
//                 <br></br>
//                 <h4>
//                   Sign In Please
//           </h4><br />
//                 Email <input type='text' placeholder='email or Number' name="userEmail" required onChange={this.handleUserEmailChange} /><br></br>
//                 Password <input type='password' placeholder='password' name="password" required onChange={this.handlePasswordChange} /><br></br>
//                 <br></br>
//                 <Link to="/Shopnew">
//                   <button
//                     Click={(event) => {
//                       this.click(event)
//                     }}
//                     onChange={this.handleChange} > login
//               </button>
//                 </Link>
//                 <br></br>
//                 <p>
//                   If you don't have an account <br>
//                   </br>
//                   please <Link to="/Sign-up-customer">Signup </Link>
//                 </p>
//               </div></center>
//           </div>
//         </body>
//       </div> */}
//       {/* // <div>
//       //   <body>
//       //     <div class="padding-all">
//       //       <div class="header">
//       //         <h1><img src="./images/5.png" alt=" " /> Gaming Login Form</h1>
//       //       </div>
//       //       <div class="design-w3l">
//       //         <div class="mail-form-agile">
//       //           <form action="#" method="post">
//       //             <input type="text" name="name" placeholder="Email  or  email..." required="" onChange={this.handleEmailChange} />
//       //             <input type="password" name="password" class="padding" placeholder="Password" required="" onChange={this.handlePasswordChange} />
//       //             <Link to="/Shop">
//       //               <input type="submit" onChange={this.handleChange} value="submit" />
//       //             </Link>
//       //           </form>
//       //         </div>
//       //         <div class="clear"> </div>
//       //       </div>
//       //       <div class="footer">
//       //         <p>© 2017 Gaming Login form. All Rights Reserved | Design by  <a href="https://w3layouts.com/" >  w3layouts </a></p>
//       //       </div>
//       //     </div>
//       //   </body>
//       // </div>
// //     )
// //   }
// // }
// // export default Signincustomer;
//             // sendData() { */}
//             {/* //   const data = { email: this.state.email, password: this.state.password }
//             //   console.log(data)
//             // }
//             // handleChange(e) { */}
//             {/* //   console.log(e.target.value);
//             //   this.setState({ [e.target.name]: e.target.value });
//             // }
//             // handleChange(e) {
//             //   console.log(e.target.value);
//             //   this.setState({ [e.target.name]: e.target.value });
//             // }
//             // componentDidMount() {
//             //   fetch('https://localhost:8080')
//             //     .then(response => response.json())
//             //     .then(data => this.setState({ data }));
//             // }
//             // handleEmailChange = evt => {
//             //   this.setState({ email: evt.target.value });
//             //   console.log(this.state.email)
//             // };
//             // handlePasswordChange = evt => {
//             //   this.setState({ password: evt.target.value });
//             // };
//             // handleSubmit = () => {
//             //   const { email, password } = this.state;
//             //   alert(`Signed up with email: ${email} password: ${password}`);
//             // };
//             // clicked() {
//             //   this.setState({
//             //     email: "",
//             //     password: "",
//             //     isEnabled: false
//             //   });
//             // } */}

/***/ }),

/***/ "./src/components/signup.js":
/*!**********************************!*\
  !*** ./src/components/signup.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
var _jsxFileName = "/Users/rbk-21/Desktop/Graduation-Project/iplay/src/components/signup.js";

 // import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';



const styles = theme => ({
  "container": {
    "display": 'flex',
    "flexWrap": 'wrap'
  },
  "TextField": {
    "marginLeft": theme.spacing.unit,
    "marginRight": theme.spacing.unit
  },
  "dense": {
    "marginTop": 16
  },
  "menu": {
    "width": 200
  }
});

class Signupcustomer extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.click = this.click.bind(this);
    this.state = {
      username: "",
      userEmail: "",
      phoneNumber: "",
      password: ""
    };
  }

  handleChange(e) {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onChange(event) {
    const username = event.target.username;
    const userEmail = event.target.userEmail;
    const phoneNumber = event.target.phoneNumber;
    const password = event.target.password;
    const value = event.target.value;
    this.setState({
      [username]: value,
      [userEmail]: value,
      [phoneNumber]: value,
      [password]: value
    });
  }

  click(event) {
    event.preventDefault();
    const data = this.state;
    fetch('http://localhost:8080/sign-up-customer', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json'
      }
    }).then(response => response.json()).then(state => console.log("yoooo", state)).catch(err => console.log("nooooo", err));
  } //   


  render() {
    const classes = this.props.classes;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-style-7",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("body", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      id: "filled-search",
      label: "username",
      type: "text",
      placeholder: "Username",
      className: classes.TextField,
      margin: "normal",
      variant: "filled",
      onChange: this.handleChange,
      value: this.props.username // handleChange={this.handleChange.bind(this)}
      ,
      name: "username",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      id: "filled-search",
      label: "userEmail",
      type: "text",
      placeholder: "Email",
      className: classes.TextField,
      margin: "normal",
      variant: "filled",
      onChange: this.handleChange,
      value: this.props.userEmail,
      name: "userEmail",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      id: "filled-search",
      label: "PhoneNumber",
      className: classes.TextField,
      type: "text",
      placeholder: "Phone-Number",
      name: "phoneNumber",
      autoComplete: "PhoneNumber",
      margin: "normal",
      variant: "filled",
      onChange: this.handleChange,
      value: this.props.phoneNumber,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      id: "filled-search",
      label: "password",
      className: classes.TextField,
      type: "password",
      placeholder: "Password",
      autoComplete: "current-password",
      margin: "normal",
      variant: "filled",
      onChange: this.handleChange,
      value: this.props.password,
      name: "password",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      variant: "contained",
      color: "primary",
      type: "submit" // onClick={(event) => {this.click(event)}
      ,
      onClick: event => {
        this.click(event);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/Sign-in-customer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }, "sign Up"))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(Signupcustomer)); // fetch('/Login', {
//     method: 'post',
//     body: JSON.stringify({ data }),
//       headers: { "Content-Type": "application/json" }
//   }).then((res) => {
//         localStorage.setItem('name', this.state.name)
//         console.log("thanks for sign up !!")
//         return res.text();
//       })
// // }
// fetch("/sign-up-customer")
//   .then(function (res) {
//     return res, json({data})
//   })
//   .then(function (data) {
//     Console.log(data);
//   }).catch(function (err) {
//     console.log(err)
//   })

/***/ }),

/***/ "./src/components/welcomepage.js":
/*!***************************************!*\
  !*** ./src/components/welcomepage.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var unirest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! unirest */ "./node_modules/unirest/index.js");
/* harmony import */ var unirest__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(unirest__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/rbk-21/Desktop/Graduation-Project/iplay/src/components/welcomepage.js";
 // import Header from "./header";
// import Footer from "./footer";
// import axios from 'axios';

 //  import ReactDom from "react-dom";
//  import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
//  import "../../public/css"

class Welcomepage extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      newsData: "",
      results: []
    };
  }

  componentDidMount() {
    this.getNewsApi();
  }

  getNewsApi() {
    // let that = this;
    unirest__WEBPACK_IMPORTED_MODULE_1___default.a.get("https:chicken-coop.p.rapidapi.com/games/pc?platform=pc").header("X-RapidAPI-Host", "chicken-coop.p.rapidapi.com").header("X-RapidAPI-Key", "01047828a3mshc8075394564882dp1b2a5djsn3adb1a57e2a4").end(function (result) {// console.log(result)
      // const data = result.body.results;
      // that.state.results.push(data)
      // console.log(that.state.results)
      // console.log(that.state.results);
    });
  } // render() {
  // 	return (
  // 		<div className="tab-content">
  // 			<div role="tabpanel" className="tab-pane active re-pad2" id="home">
  // 				{this.state.results.map((game, i) => {
  // 					console.log("HIIIIIIIIIIII")
  // 					console.log(game, i)
  // 					 return (
  // 						<div className="game1">
  // 					<div className="col-md-3 tab-pic">
  // 						<a href="single.html"><img src={game.image} alt="/" className="img-responsive" /></a>
  // 					</div>
  // 					<div className="col-md-9 tab-pic-info">
  // 						<h4 id="ppp"><a href="single.html"> {game.title} </a></h4>
  // 						<p> { game.description } </p>
  // 					</div>
  // 					<div className="clearfix"></div>
  // 				</div>
  // 					)
  // 				})}
  // 				</div>
  // 				</div>
  // 	)
  // }
  //  componentDidMount() {
  //  	fetch("https:chicken-coop.p.rapidapi.com/games/pc?platform=pc", {
  //  		method: "GET",
  //  		headers: {
  //  			"Content-Type":"application/json",
  //  			"X-RapidAPI-Host": "chicken-coop.p.rapidapi.com",
  //  			"X-RapidAPI-Key": "c8261e3e71mshdac602766b8f1bcp1912fdjsnc66655f0414b",
  //  		}
  //  	})
  //  		.then(res => {
  //  			res.json();
  //  			 const items = JSON.parse(res);
  //  			console.log(res)
  //  			const news = res.data;
  //  			console.log(res.data)
  //  			this.setState({ news });
  //  		}).then(data => {
  //  			console.log(data);
  //  		}).catch((err) => {
  //  			console.log(err);
  //  		})
  //  }
  //  componentDidMount() {
  //  	axios.get('https:chicken-coop.p.rapidapi.com/games/{title}?platform=pc')
  //  	.then(response => {
  //  		console.log(response.data);
  //  		this.setState({ newsData: response.data.message });
  //  	})
  //  	.catch(error => {
  //  		console.log(error);
  //  	});
  //  }
  //  componentWillMount() {
  //  	fetch("https:chicken-coop.p.rapidapi.com/games/{title}?platform=pc",{
  //  		method: "POST",
  //  		header: new Headers({
  //  			"X-RapidAPI-Host": "chicken-coop.p.rapidapi.com",
  //  		 "X-RapidAPI-Key": "c8261e3e71mshdac602766b8f1bcp1912fdjsnc66655f0414b"
  //  		}),
  //  		body: 'A=1&B=2'
  //  	})
  //  	.then(data => data.json())
  //  	.then((data) => {
  //  		console.log(data)
  //  		this.setState({news : data})
  //  	})
  //  }


  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "banner",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "banner-info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      id: "ppp",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }, "Welcome to our Website & Shop"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      id: "ppp",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }, "iPlay")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "social",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "https:www.facebook.com/iPlayJor/?modal=admin_todo_tour",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "fa",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    }, " "))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "tw",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    }, " "))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "iPlay@gmail.com",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "g",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }, " "))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "in",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    }, " ")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "clearfix",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "welcome",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "welcome-info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      id: "ppp",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }, "Welcome"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      id: "ppp",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    }, "To Our World Wide Online Shop & Games News."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }, "Here, We deliver the best gaming experience in Jordan & Globally for all the gamers aroung the world from gaming news to gift cards and PC Games, ALL YOU NEED IN ONE PLACE! ")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-8 content-left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "information",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      id: "ppp",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    }, "Information"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "information_grids",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166
      },
      __self: this
    }, "\" Etiam ante arcu, vestibulum diam. Curabitur quis lectus. Pellentesque dictum odio velit."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "about.html",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    }, "Read more")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "info-pic",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "images/ps.png",
      className: "img-responsive",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "clearfix",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "games-grids",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "game-grid-left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "grid1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
      id: "ppp",
      className: "act",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "single.html",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178
      },
      __self: this
    }, "Action")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "single.html",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "images/c1.jpg",
      className: "img-responsive",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "grid1-info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      id: "ppp",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "single.html",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181
      },
      __self: this
    }, "Watch Dogs")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182
      },
      __self: this
    }, "Integer ut leo vitae nibh cursus aliquetr Sed, condimentum bibendum nibh accumsan vel.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "more",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "single.html",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185
      },
      __self: this
    }, "Read more"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "grid2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
      id: "ppp",
      className: "race",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "single.html",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
      },
      __self: this
    }, "Racing")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "single.html",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "images/c2.jpg",
      className: "img-responsive",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "grid1-info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      id: "ppp",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "single.html",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192
      },
      __self: this
    }, "Monster Racing")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193
      },
      __self: this
    }, "Integer ut leo vitae nibh cursus aliquetr Sed, condimentum bibendum nibh accumsan vel.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "more",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "single.html",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196
      },
      __self: this
    }, "Read more")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "game-grid-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "grid3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
      id: "ppp",
      className: "sport",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "single.html",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203
      },
      __self: this
    }, "Sports")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "single.html",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "images/c3.jpg",
      className: "img-responsive",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "grid1-info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      id: "ppp",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "single.html",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206
      },
      __self: this
    }, "FIFA 2015")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207
      },
      __self: this
    }, "Integer ut leo vitae nibh cursus aliquetr Sed, condimentum bibendum nibh accumsan vel.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "more",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "single.html",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210
      },
      __self: this
    }, "Read more"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "grid4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
      id: "ppp",
      className: "arc",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "single.html",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214
      },
      __self: this
    }, "Arcade")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "single.html",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "images/c4.jpg",
      className: "img-responsive",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "grid1-info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      id: "ppp",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "single.html",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217
      },
      __self: this
    }, "Skylanders")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218
      },
      __self: this
    }, "Integer ut leo vitae nibh cursus aliquetr Sed, condimentum bibendum nibh accumsan vel.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "more",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "single.html",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221
      },
      __self: this
    }, "Read more")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "clearfix",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-4 content-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "nav nav-tabs nav2",
      role: "tablist",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      role: "presentation",
      className: "active",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/home",
      "aria-controls": "home",
      role: "tab",
      "data-toggle": "tab",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231
      },
      __self: this
    }, "Trending")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      role: "presentation",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/profile",
      "aria-controls": "profile",
      role: "tab",
      "data-toggle": "tab",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232
      },
      __self: this
    }, "Recent Posts"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "tab-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      role: "tabpanel",
      className: "tab-pane active re-pad2",
      id: "home",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237
      },
      __self: this
    }, this.state.results.map((game, i) => {
      console.log("HIIIIIIIIIIII");
      console.log(game, i);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "game1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-3 tab-pic",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "single.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: game.image,
        alt: "/",
        className: "img-responsive",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-9 tab-pic-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        id: "ppp",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "single.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        },
        __self: this
      }, " ", game.title, " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        },
        __self: this
      }, " ", game.description, " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "clearfix",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        },
        __self: this
      }));
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "game1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 258
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-3 tab-pic",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "single.html",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "images/tr2.jpg",
      alt: "/",
      className: "img-responsive",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-9 tab-pic-info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      id: "ppp",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "single.html",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263
      },
      __self: this
    }, "Call Of Duty")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264
      },
      __self: this
    }, "Lorem Ipsum is simply dummy text of the printing industry.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "clearfix",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      role: "tabpanel",
      className: "tab-pane re-pad2",
      id: "profile",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "game-post",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-3 tab-pic",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "single.html",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "images/tr4.jpg",
      alt: "/",
      className: "img-responsive",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-9 tab-post-info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      id: "ppp",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "single.html",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275
      },
      __self: this
    }, "IronMan")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276
      },
      __self: this
    }, "Posted By ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276
      },
      __self: this
    }, "Admin"), " \xA0\xA0 on June 2, 2015 \xA0\xA0 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276
      },
      __self: this
    }, "Comments (10)"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "clearfix",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "game-post",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-3 tab-pic",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "single.html",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 282
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "images/tr5.jpg",
      alt: "/",
      className: "img-responsive",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 282
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-9 tab-post-info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 284
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      id: "ppp",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 285
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "single.html",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 285
      },
      __self: this
    }, "God Of War")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 286
      },
      __self: this
    }, "Posted By ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 286
      },
      __self: this
    }, "Admin"), " \xA0\xA0 on June 2, 2015 \xA0\xA0 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 286
      },
      __self: this
    }, "Comments (10)"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "clearfix",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 288
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "game-post",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 290
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-3 tab-pic",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 291
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "single.html",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 292
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "images/tr6.jpg",
      alt: "/",
      className: "img-responsive",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 292
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-9 tab-post-info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 294
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 295
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "single.html",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 295
      },
      __self: this
    }, "Need For Speed")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 296
      },
      __self: this
    }, "Posted By ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 296
      },
      __self: this
    }, "Admin"), " \xA0\xA0 on June 2, 2015 \xA0\xA0 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 296
      },
      __self: this
    }, "Comments (10)"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "clearfix",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 298
      },
      __self: this
    })))), " */}", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "category blog-ctgry",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 303
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      id: "ppp",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 304
      },
      __self: this
    }, "Top Games"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "list-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 305
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/",
      className: "list-group-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 306
      },
      __self: this
    }, "Cras justo odio"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/",
      className: "list-group-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 307
      },
      __self: this
    }, "Dapibus ac facilisis in"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/",
      className: "list-group-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 308
      },
      __self: this
    }, "Morbi leo risus"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/",
      className: "list-group-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 309
      },
      __self: this
    }, "Porta ac consectetur ac"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/",
      className: "list-group-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 310
      },
      __self: this
    }, "Vestibulum at eros"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/",
      className: "list-group-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 311
      },
      __self: this
    }, "Quisque elementum "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/",
      className: "list-group-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 312
      },
      __self: this
    }, "Vestibulum eleifend"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/",
      className: "list-group-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 313
      },
      __self: this
    }, "Donec sit amet justo "))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "photo-gallery",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 316
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      id: "ppp",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 317
      },
      __self: this
    }, "Photo Gallery"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "gallery-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 318
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-4 gallery-grid-pic",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 319
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "example-image-link",
      href: "images/p2.jpg",
      "data-lightbox": "example-set",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 320
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "example-image",
      src: "images/p2.jpg",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 320
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-4 gallery-grid-pic",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 322
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "example-image-link",
      href: "images/p1.jpg",
      "data-lightbox": "example-set",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 323
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "example-image",
      src: "images/p1.jpg",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 323
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-4 gallery-grid-pic",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 325
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "example-image-link",
      href: "images/p3.jpg",
      "data-lightbox": "example-set",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 326
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "example-image",
      src: "images/p3.jpg",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 326
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "clearfix",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 328
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "gallery-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 330
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-4 gallery-grid-pic",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 331
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "example-image-link",
      href: "images/p4.jpg",
      "data-lightbox": "example-set",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 332
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "example-image",
      src: "images/p4.jpg",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 332
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-4 gallery-grid-pic",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 334
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "example-image-link",
      href: "images/p5.jpg",
      "data-lightbox": "example-set",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 335
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "example-image",
      src: "images/p5.jpg",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 335
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-4 gallery-grid-pic",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 337
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "example-image-link",
      href: "images/p6.jpg",
      "data-lightbox": "example-set",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 338
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "example-image",
      src: "images/p6.jpg",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 338
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "clearfix",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 340
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "gallery-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 342
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-4 gallery-grid-pic",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 343
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "example-image-link",
      href: "images/p1.jpg",
      "data-lightbox": "example-set",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 344
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "example-image",
      src: "images/p1.jpg",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 344
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-4 gallery-grid-pic",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 346
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "example-image-link",
      href: "images/p3.jpg",
      "data-lightbox": "example-set",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 347
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "example-image",
      src: "images/p3.jpg",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 347
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-4 gallery-grid-pic",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 349
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "example-image-link",
      href: "images/p4.jpg",
      "data-lightbox": "example-set",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 350
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "example-image",
      src: "images/p4.jpg",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 350
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "clearfix",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 352
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "clearfix",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 358
      },
      __self: this
    })));
  }

} // {/* <script src="../web/js/lightbox-plus-jquery.min.js"></script> */}


/* harmony default export */ __webpack_exports__["default"] = (Welcomepage);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
/* harmony import */ var _components_reducers_cartReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/reducers/cartReducer */ "./src/components/reducers/cartReducer.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
var _jsxFileName = "/Users/rbk-21/Desktop/Graduation-Project/iplay/src/index.js";

 // import './index.css';






const store = Object(redux__WEBPACK_IMPORTED_MODULE_6__["createStore"])(_components_reducers_cartReducer__WEBPACK_IMPORTED_MODULE_4__["default"]);
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__["Provider"], {
  store: store,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
})), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_3__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/rbk-21/Desktop/Graduation-Project/iplay/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/rbk-21/Desktop/Graduation-Project/iplay/src/index.js */"./src/index.js");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime~main",1]]]);
//# sourceMappingURL=main.chunk.js.map