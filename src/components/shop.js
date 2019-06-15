import React from 'react';
//importing css files
// import "../cssshop/";
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class Shoppage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [
        {
          url: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(121).jpg",
          title: "test1"
        },
        {
          url: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(96).jpg",
          title: "test2"
        },
        {
          url: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(45).jpg",
          title: "test3"
        }
      ]

    }
  }

  render() {
    return (
      <div>
        <div>
          <body id="shopbody">
            {/* <!-- HEADER --> */}
            <header> 
              {/* <!-- TOP HEADER --> */}
              <div id="top-header1">
                <div className="container">
                  <ul className="header-links1 pull-left">
                    <li><a href="#"><i className="fa fa-phone"></i> +021-95-51-84</a></li>
                    <li><a href="#"><i className="fa fa-envelope-o"></i> email@email.com</a></li>
                    <li><a href="#"><i className="fa fa-map-marker"></i> 1734 Stonecoal Road</a></li>
                  </ul>
                  <ul className="header-links1 pull-right">
                    <li><a href="#"><i className="fa fa-dollar"></i> USD</a></li>
                    <li><a href="#"><i className="fa fa-user-o"></i> My Account</a></li>
                  </ul>
                </div>
              </div>
              {/* <!-- /TOP HEADER --> */}

              {/* <!-- MAIN HEADER --> */}
              <div id="header1">
                {/* <!-- container --> */}
                <div className="container">
                  {/* <!-- row --> */}
                  <div className="row">
                    {/* <!-- LOGO --> */}
                    <div className="col-md-3">
                      <div className="header-logo1">
                        <a href="#" className="logo1">
                          <img src="../public/images/logo.png" alt="" />public\images
                        </a>
                      </div>
                    </div>
                    {/* <!-- /LOGO --> */}

                    {/* <!-- SEARCH BAR --> */}
                    <div className="col-md-6">
                      <div className="header-search1">
                        <form>
                          <select className="input-select1">
                            <option value="0">All Categories</option>
                            <option value="1">Category 01</option>
                            <option value="1">Category 02</option>
                          </select>
                          <input className="input1" placeholder="Search here" />
                          <button className="search-btn1">Search</button>
                        </form>
                      </div>
                    </div>
                    {/* <!-- /SEARCH BAR --> */}

                    {/* <!-- ACCOUNT --> */}
                    <div className="col-md-3 clearfix">
                      <div className="header-ctn1">
                        {/* <!-- Wishlist --> */}
                        <div>
                          <a href="#">
                            <i className="fa fa-heart-o"></i>
                            <span>Your Wishlist</span>
                            <div className="qty1">2</div>
                          </a>
                        </div>
                        {/* <!-- /Wishlist --> */}

                        {/* <!-- Cart --> */}
                        <div className="dropdown">
                          <a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                            <i className="fa fa-shopping-cart"></i>
                            <span>Your Cart</span>
                            <div className="qty1">3</div>
                          </a>
                          <div className="cart-dropdown1">
                            <div className="cart-list1">
                              <div className="product-widget11">
                                <div className="product-img1">
                                  <img src="../../public/images/product01.png" alt="" />
                                  <img src="images/ps.png" className="img-responsive" alt=""/>
                                </div>
                                <div className="product-body11">
                                  <h3 id="hhh" className="product-name11"><a href="#">product name goes here</a></h3>
                                  <h4 id="hhh" className="product-price11"><span className="qty1">1x</span>$980.00</h4>
                                </div>
                                <button className="delete1"><i className="fa fa-close"></i></button>
                              </div>

                              <div className="product-widget11">
                                <div className="product-img1">
                                  <img src="./img/product02.png" alt="" />
                                </div>
                                <div className="product-body11">
                                  <h3 id="hhh" className="product-name11"><a href="#">product name goes here</a></h3>
                                  <h4 id="hhh" className="product-price11"><span className="qty1">3x</span>$980.00</h4>
                                </div>
                                <button className="delete1"><i className="fa fa-close"></i></button>
                              </div>
                            </div>
                            <div className="cart-summary1">
                              <small>3 Item(s) selected</small>
                              <h5 id="hhh">SUBTOTAL: $2940.00</h5>
                            </div>
                            <div className="cart-btns1">
                              <a href="#">View Cart</a>
                              <a href="#">Checkout  <i className="fa fa-arrow-circle-right"></i></a>
                            </div>
                          </div>
                        </div>
                        {/* <!-- /Cart --> */}

                        {/* <!-- Menu Toogle --> */}
                        <div className="menu-toggle1">
                          <a href="#">
                            <i className="fa fa-bars"></i>
                            <span>Menu</span>
                          </a>
                        </div>
                        {/* <!-- /Menu Toogle --> */}
                      </div>
                    </div>
                    {/* <!-- /ACCOUNT --> */}
                  </div>
                  {/* <!-- row --> */}
                </div>
                {/* <!-- container --> */}
              </div>
              {/* <!-- /MAIN HEADER --> */}
            </header>
            {/* <!-- /HEADER --> */}

            {/* <!-- NAVIGATION --> */}
            <nav id="navigation1">
              {/* <!-- container --> */}
              <div className="container">
                {/* <!-- responsive-nav --> */}
                <div id="responsive-nav1">
                  {/* <!-- NAV --> */}
                  <ul className="main-nav nav navbar-nav">
                    <li className="active1"><a href="#">Home</a></li>
                    <li><a href="#">Hot Deals</a></li>
                    <li><a href="#">Categories</a></li>
                    <li><a href="#">Laptops</a></li>
                    <li><a href="#">Smartphones</a></li>
                    <li><a href="#">Cameras</a></li>
                    <li><a href="#">Accessories</a></li>
                  </ul>
                  {/* <!-- /NAV --> */}
                </div>
                {/* <!-- /responsive-nav --> */}
              </div>
              {/* <!-- /container --> */}
            </nav>
            {/* <!-- /NAVIGATION --> */}

            {/* <!-- SECTION --> */}
            <div className="section1">
              {/* <!-- container --> */}
              <div className="container">
                {/* <!-- row --> */}
                <div className="row">
                  {/* <!-- shop --> */}
                  <div className="col-md-4 col-xs-6">
                    <div className="shop1">
                      <div className="shop1-img">
                        <img src="./img/shop01.png" alt="" />
                      </div>
                      <div className="shop1-body">
                        <h3 id="hhh">Laptop<br />Collection</h3>
                        <a href="#" className="cta-btn1">Shop now <i className="fa fa-arrow-circle-right"></i></a>
                      </div>
                    </div>
                  </div>
                  {/* <!-- /shop --> */}

                  {/* <!-- shop --> */}
                  <div className="col-md-4 col-xs-6">
                    <div className="shop1">
                      <div className="shop1-img">
                        <img src="./img/shop03.png" alt="" />
                      </div>
                      <div className="shop1-body">
                        <h3 id="hhh">Accessories<br />Collection</h3>
                        <a href="#" className="cta-btn1">Shop now <i className="fa fa-arrow-circle-right"></i></a>
                      </div>
                    </div>
                  </div>
                  {/* <!-- /shop --> */}

                  {/* <!-- shop --> */}
                  <div className="col-md-4 col-xs-6">
                    <div className="shop1">
                      <div className="shop1-img">
                        <img src="./img/shop02.png" alt="" />
                      </div>
                      <div className="shop1-body">
                        <h3 id="hhh">Cameras<br />Collection</h3>
                        <a href="#" className="cta-btn1">Shop now <i className="fa fa-arrow-circle-right"></i></a>
                      </div>
                    </div>
                  </div>
                  {/* <!-- /shop --> */}
                </div>
                {/* <!-- /row --> */}
              </div>
              {/* <!-- /container --> */}
            </div>
            {/* <!-- /SECTION --> */}

            {/* <!-- SECTION --> */}
            <div className="section1">
              {/* <!-- container --> */}
              <div className="container">
                {/* <!-- row --> */}
                <div className="row">

                  {/* <!-- section title --> */}
                  <div className="col-md-12">
                    <div className="section-title1">
                      <h3 id="hhh" className="title1">New Products</h3>
                      <div className="section-nav1">
                        <ul className="section-tab-nav tab-nav">
                          <li className="active1"><a data-toggle="tab" href="#tab1">Laptops</a></li>
                          <li><a data-toggle="tab" href="#tab1">Smartphones</a></li>
                          <li><a data-toggle="tab" href="#tab1">Cameras</a></li>
                          <li><a data-toggle="tab" href="#tab1">Accessories</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* <!-- /section title --> */}

                  {/* <!-- Products tab & slick --> */}
                  <div className="col-md-12">
                    <div className="row">
                      <div className="products-tabs1">
                        {/* <!-- tab --> */}
                        <div id="tab1" className="tab-pane active">
                          <div className="products-slick1" data-nav="#slick-nav-1">
                            {/* <!-- product --> */}
                            <div className="product1">
                              <div className="product-img1">
                                <img src="./img/product01.png" alt="" />
                                <div className="product-label1">
                                  <span className="sale1">-30%</span>
                                  <span className="new1">NEW</span>
                                </div>
                              </div>
                              <div className="product-body1">
                                <p className="product-category1">Category</p>
                                <h3 id="hhh" className="product-name1"><a href="#">product name goes here</a></h3>
                                <h4 id="hhh" className="product-price1">$980.00 <del className="product-old-price1">$990.00</del></h4>
                                <div className="product-rating1">
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                </div>
                                <div className="product-btns1">
                                  <button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp1">add to wishlist</span></button>
                                  <button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp1">add to compare</span></button>
                                  <button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp1">quick view</span></button>
                                </div>
                              </div>
                              <div className="add-to-cart1">
                                <button className=".add-to-cart-btn1"><i className="fa fa-shopping-cart"></i> add to cart</button>
                              </div>
                            </div>
                            {/* <!-- /product --> */}

                            {/* <!-- product --> */}
                            <div className="product1">
                              <div className="product-img1">
                                <img src="./img/product02.png" alt="" />
                                <div className="product-label1">
                                  <span className="new1">NEW</span>
                                </div>
                              </div>
                              <div className="product-body1">
                                <p className="product-category1">Category</p>
                                <h3 id="hhh" className="product-name1"><a href="#">product name goes here</a></h3>
                                <h4 id="hhh" className="product-price1">$980.00 <del className="product-old-price1">$990.00</del></h4>
                                <div className="product-rating1">
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star-o"></i>
                                </div>
                                <div className="product-btns1">
                                  <button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp1">add to wishlist</span></button>
                                  <button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp1">add to compare</span></button>
                                  <button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp1">quick view</span></button>
                                </div>
                              </div>
                              <div className="add-to-cart1">
                                <button className=".add-to-cart-btn1"><i className="fa fa-shopping-cart"></i> add to cart</button>
                              </div>
                            </div>
                            {/* <!-- /product --> */}

                            {/* <!-- product --> */}
                            <div className="product1">
                              <div className="product-img1">
                                <img src="./img/product03.png" alt="" />
                                <div className="product-label1">
                                  <span className="sale1">-30%</span>
                                </div>
                              </div>
                              <div className="product-body1">
                                <p className="product-category1">Category</p>
                                <h3 id="hhh" className="product-name1"><a href="#">product name goes here</a></h3>
                                <h4 id="hhh" className="product-price1">$980.00 <del className="product-old-price1">$990.00</del></h4>
                                <div className="product-rating1">
                                </div>
                                <div className="product-btns1">
                                  <button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp1">add to wishlist</span></button>
                                  <button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp1">add to compare</span></button>
                                  <button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp1">quick view</span></button>
                                </div>
                              </div>
                              <div className="add-to-cart1">
                                <button className=".add-to-cart-btn1"><i className="fa fa-shopping-cart"></i> add to cart</button>
                              </div>
                            </div>
                            {/* <!-- /product --> */}

                            {/* <!-- product --> */}
                            <div className="product1">
                              <div className="product-img1">
                                <img src="./img/product04.png" alt="" />
                              </div>
                              <div className="product-body1">
                                <p className="product-category1">Category</p>
                                <h3 id="hhh" className="product-name1"><a href="#">product name goes here</a></h3>
                                <h4 id="hhh" className="product-price1">$980.00 <del className="product-old-price1">$990.00</del></h4>
                                <div className="product-rating1">
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                </div>
                                <div className="product-btns1">
                                  <button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp1">add to wishlist</span></button>
                                  <button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp1">add to compare</span></button>
                                  <button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp1">quick view</span></button>
                                </div>
                              </div>
                              <div className="add-to-cart1">
                                <button className=".add-to-cart-btn1"><i className="fa fa-shopping-cart"></i> add to cart</button>
                              </div>
                            </div>
                            {/* <!-- /product --> */}

                            {/* <!-- product --> */}
                            <div className="product1">
                              <div className="product-img1">
                                <img src="./img/product05.png" alt="" />
                              </div>
                              <div className="product-body1">
                                <p className="product-category1">Category</p>
                                <h3 id="hhh" className="product-name1"><a href="#">product name goes here</a></h3>
                                <h4 id="hhh" className="product-price1">$980.00 <del className="product-old-price1">$990.00</del></h4>
                                <div className="product-rating1">
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                </div>
                                <div className="product-btns1">
                                  <button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp1">add to wishlist</span></button>
                                  <button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp1">add to compare</span></button>
                                  <button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp1">quick view</span></button>
                                </div>
                              </div>
                              <div className="add-to-cart1">
                                <button className=".add-to-cart-btn1"><i className="fa fa-shopping-cart"></i> add to cart</button>
                              </div>
                            </div>
                            {/* <!-- /product --> */}
                          </div>
                          <div id="slick-nav-1" className="products-slick-nav1"></div>
                        </div>
                        {/* <!-- /tab --> */}
                      </div>
                    </div>
                  </div>
                  {/* <!-- Products tab & slick --> */}
                </div>
                {/* <!-- /row --> */}
              </div>
              {/* <!-- /container --> */}
            </div>
            {/* <!-- /SECTION --> */}

            {/* <!-- HOT DEAL SECTION --> */}
            <div id="hot-deal1" className="section1">
              {/* <!-- container --> */}
              <div className="container">
                {/* <!-- row --> */}
                <div className="row">
                  <div className="col-md-12">
                    <div className="hot-deal1">
                      <ul className="hot-deal1-countdown">
                        <li>
                          <div>
                            <h3 id="hhh">02</h3>
                            <span>Days</span>
                          </div>
                        </li>
                        <li>
                          <div>
                            <h3 id="hhh">10</h3>
                            <span>Hours</span>
                          </div>
                        </li>
                        <li>
                          <div>
                            <h3 id="hhh">34</h3>
                            <span>Mins</span>
                          </div>
                        </li>
                        <li>
                          <div>
                            <h3 id="hhh">60</h3>
                            <span>Secs</span>
                          </div>
                        </li>
                      </ul>
                      <h2 id="hhh" className="text-uppercase">hot deal this week</h2>
                      <p>New Collection Up to 50% OFF</p>
                      <a className="primary-btn cta-btn" href="#">Shop now</a>
                    </div>
                  </div>
                </div>
                {/* <!-- /row --> */}
              </div>
              {/* <!-- /container --> */}
            </div>
            {/* <!-- /HOT DEAL SECTION --> */}

            {/* <!-- SECTION --> */}
            <div className="section1">
              {/* <!-- container --> */}
              <div className="container">
                {/* <!-- row --> */}
                <div className="row">

                  {/* <!-- section title --> */}
                  <div className="col-md-12">
                    <div className="section-title1">
                      <h3 id="hhh" className="title1">Top selling</h3>
                      <div className="section-nav1">
                        <ul className="section-tab-nav tab-nav">
                          <li className="active1"><a data-toggle="tab" href="#tab2">Laptops</a></li>
                          <li><a data-toggle="tab" href="#tab2">Smartphones</a></li>
                          <li><a data-toggle="tab" href="#tab2">Cameras</a></li>
                          <li><a data-toggle="tab" href="#tab2">Accessories</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* <!-- /section title --> */}

                  {/* <!-- Products tab & slick --> */}
                  <div className="col-md-12">
                    <div className="row">
                      <div className="products-tabs1">
                        {/* <!-- tab --> */}
                        <div id="tab2" className="tab-pane fade in active">
                          <div className="products-slick1" data-nav="#slick-nav-2">
                            {/* <!-- product --> */}
                            <div className="product1">
                              <div className="product-img1">
                                <img src="./img/product06.png" alt="" />
                                <div className="product-label1">
                                  <span className="sale1">-30%</span>
                                  <span className="new1">NEW</span>
                                </div>
                              </div>
                              <div className="product-body1">
                                <p className="product-category1">Category</p>
                                <h3 id="hhh" className="product-name1"><a href="#">product name goes here</a></h3>
                                <h4 id="hhh" className="product-price1">$980.00 <del className="product-old-price1">$990.00</del></h4>
                                <div className="product-rating1">
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                </div>
                                <div className="product-btns1">
                                  <button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp1">add to wishlist</span></button>
                                  <button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp1">add to compare</span></button>
                                  <button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp1">quick view</span></button>
                                </div>
                              </div>
                              <div className="add-to-cart1">
                                <button className=".add-to-cart-btn1"><i className="fa fa-shopping-cart"></i> add to cart</button>
                              </div>
                            </div>
                            {/* <!-- /product --> */}

                            {/* <!-- product --> */}
                            <div className="product1">
                              <div className="product-img1">
                                <img src="./img/product07.png" alt="" />
                                <div className="product-label1">
                                  <span className="new1">NEW</span>
                                </div>
                              </div>
                              <div className="product-body1">
                                <p className="product-category1">Category</p>
                                <h3 id="hhh" className="product-name1"><a href="#">product name goes here</a></h3>
                                <h4 id="hhh" className="product-price1">$980.00 <del className="product-old-price1">$990.00</del></h4>
                                <div className="product-rating1">
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star-o"></i>
                                </div>
                                <div className="product-btns1">
                                  <button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp1">add to wishlist</span></button>
                                  <button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp1">add to compare</span></button>
                                  <button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp1">quick view</span></button>
                                </div>
                              </div>
                              <div className="add-to-cart1">
                                <button className=".add-to-cart-btn1"><i className="fa fa-shopping-cart"></i> add to cart</button>
                              </div>
                            </div>
                            {/* <!-- /product --> */}

                            {/* <!-- product --> */}
                            <div className="product1">
                              <div className="product-img1">
                                <img src="./img/product08.png" alt="" />
                                <div className="product-label1">
                                  <span className="sale1">-30%</span>
                                </div>
                              </div>
                              <div className="product-body1">
                                <p className="product-category1">Category</p>
                                <h3 id="hhh" className="product-name1"><a href="#">product name goes here</a></h3>
                                <h4 id="hhh" className="product-price1">$980.00 <del className="product-old-price1">$990.00</del></h4>
                                <div className="product-rating1">
                                </div>
                                <div className="product-btns1">
                                  <button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp1">add to wishlist</span></button>
                                  <button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp1">add to compare</span></button>
                                  <button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp1">quick view</span></button>
                                </div>
                              </div>
                              <div className="add-to-cart1">
                                <button className=".add-to-cart-btn1"><i className="fa fa-shopping-cart"></i> add to cart</button>
                              </div>
                            </div>
                            {/* <!-- /product --> */}

                            {/* <!-- product --> */}
                            <div className="product1">
                              <div className="product-img1">
                                <img src="./img/product09.png" alt="" />
                              </div>
                              <div className="product-body1">
                                <p className="product-category1">Category</p>
                                <h3 id="hhh" className="product-name1"><a href="#">product name goes here</a></h3>
                                <h4 id="hhh" className="product-price1">$980.00 <del className="product-old-price1">$990.00</del></h4>
                                <div className="product-rating1">
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                </div>
                                <div className="product-btns1">
                                  <button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp1">add to wishlist</span></button>
                                  <button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp1">add to compare</span></button>
                                  <button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp1">quick view</span></button>
                                </div>
                              </div>
                              <div className="add-to-cart1">
                                <button className=".add-to-cart-btn1"><i className="fa fa-shopping-cart"></i> add to cart</button>
                              </div>
                            </div>
                            {/* <!-- /product --> */}

                            {/* <!-- product --> */}
                            <div className="product1">
                              <div className="product-img1">
                                <img src="./img/product01.png" alt="" />
                              </div>
                              <div className="product-body1">
                                <p className="product-category1">Category</p>
                                <h3 id="hhh" className="product-name1"><a href="#">product name goes here</a></h3>
                                <h4 id="hhh" className="product-price1">$980.00 <del className="product-old-price1">$990.00</del></h4>
                                <div className="product-rating1">
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                </div>
                                <div className="product-btns1">
                                  <button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp1">add to wishlist</span></button>
                                  <button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp1">add to compare</span></button>
                                  <button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp1">quick view</span></button>
                                </div>
                              </div>
                              <div className="add-to-cart1">
                                <button className=".add-to-cart-btn1"><i className="fa fa-shopping-cart"></i> add to cart</button>
                              </div>
                            </div>
                            {/* <!-- /product --> */}
                          </div>
                          <div id="slick-nav-2" className="products-slick-nav1"></div>
                        </div>
                        {/* <!-- /tab --> */}
                      </div>
                    </div>
                  </div>
                  {/* <!-- /Products tab & slick --> */}
                </div>
                {/* <!-- /row --> */}
              </div>
              {/* <!-- /container --> */}
            </div>
            {/* <!-- /SECTION --> */}

            {/* <!-- SECTION --> */}
            <div className="section1">
              {/* <!-- container --> */}
              <div className="container">
                {/* <!-- row --> */}
                <div className="row">
                  <div className="col-md-4 col-xs-6">
                    <div className="section-title1">
                      <h4 id="hhh" className="title1">Top selling</h4>
                      <div className="section-nav1">
                        <div id="slick-nav-3" className="products-slick-nav1"></div>
                      </div>
                    </div>

                    <div className="products-widget-slick" data-nav="#slick-nav-3">
                      <div>
                        {/* <!-- product widget --> */}
                        <div className="product-widget1">
                          <div className="product-img1">
                            <img src="./img/product07.png" alt="" />
                          </div>
                          <div className="product-body1">
                            <p className="product-category1">Category</p>
                            <h3 id="hhh" className="product-name1"><a href="#">product name goes here</a></h3>
                            <h4 id="hhh" className="product-price1">$980.00 <del className="product-old-price1">$990.00</del></h4>
                          </div>
                        </div>
                        {/* <!-- /product widget --> */}

                        {/* <!-- product widget --> */}
                        <div className="product-widget1">
                          <div className="product-img1">
                            <img src="./img/product08.png" alt="" />
                          </div>
                          <div className="product-body1">
                            <p className="product-category1">Category</p>
                            <h3 id="hhh" className="product-name1"><a href="#">product name goes here</a></h3>
                            <h4 id="hhh" className="product-price1">$980.00 <del className="product-old-price1">$990.00</del></h4>
                          </div>
                        </div>
                        {/* <!-- /product widget --> */}

                        {/* <!-- product widget --> */}
                        <div className="product-widget1">
                          <div className="product-img1">
                            <img src="./img/product09.png" alt="" />
                          </div>
                          <div className="product-body1">
                            <p className="product-category1">Category</p>
                            <h3 id="hhh" className="product-name1"><a href="#">product name goes here</a></h3>
                            <h4 id="hhh" className="product-price1">$980.00 <del className="product-old-price1">$990.00</del></h4>
                          </div>
                        </div>
                        {/* <!-- product widget --> */}
                      </div>

                      <div>
                        {/* <!-- product widget --> */}
                        <div className="product-widget1">
                          <div className="product-img1">
                            <img src="./img/product01.png" alt="" />
                          </div>
                          <div className="product-body1">
                            <p className="product-category1">Category</p>
                            <h3 id="hhh" className="product-name1"><a href="#">product name goes here</a></h3>
                            <h4 id="hhh" className="product-price1">$980.00 <del className="product-old-price1">$990.00</del></h4>
                          </div>
                        </div>
                        {/* <!-- /product widget --> */}

                        {/* <!-- product widget --> */}
                        <div className="product-widget1">
                          <div className="product-img1">
                            <img src="./img/product02.png" alt="" />
                          </div>
                          <div className="product-body1">
                            <p className="product-category1">Category</p>
                            <h3 id="hhh" className="product-name1"><a href="#">product name goes here</a></h3>
                            <h4 id="hhh" className="product-price1">$980.00 <del className="product-old-price1">$990.00</del></h4>
                          </div>
                        </div>
                        {/* <!-- /product widget --> */}

                        {/* <!-- product widget --> */}
                        <div className="product-widget1">
                          <div className="product-img1">
                            <img src="./img/product03.png" alt="" />
                          </div>
                          <div className="product-body1">
                            <p className="product-category1">Category</p>
                            <h3  id="hhh" className="product-name1"><a href="#">product name goes here</a></h3>
                            <h4 id="hhh" className="product-price1">$980.00 <del className="product-old-price1">$990.00</del></h4>
                          </div>
                        </div>
                        {/* <!-- product widget --> */}
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 col-xs-6">
                    <div className="section-title1">
                      <h4 id="hhh" className="title1">Top selling</h4>
                      <div className="section-nav1">
                        <div id="slick-nav-4" className="products-slick-nav1"></div>
                      </div>
                    </div>

                    <div className="products-widget-slick" data-nav="#slick-nav-4">
                      <div>
                        {/* <!-- product widget --> */}
                        <div className="product-widget1">
                          <div className="product-img1">
                            <img src="./img/product04.png" alt="" />
                          </div>
                          <div className="product-body1">
                            <p className="product-category1">Category</p>
                            <h3 id="hhh"className="product-name1"><a href="#">product name goes here</a></h3>
                            <h4 id="hhh" className="product-price1">$980.00 <del className="product-old-price1">$990.00</del></h4>
                          </div>
                        </div>
                        {/* <!-- /product widget --> */}

                        {/* <!-- product widget --> */}
                        <div className="product-widget1">
                          <div className="product-img1">
                            <img src="./img/product05.png" alt="" />
                          </div>
                          <div className="product-body1">
                            <p className="product-category1">Category</p>
                            <h3 id="hhh" className="product-name1"><a href="#">product name goes here</a></h3>
                            <h4 id="hhh" className="product-price1">$980.00 <del className="product-old-price1">$990.00</del></h4>
                          </div>
                        </div>
                        {/* <!-- /product widget --> */}

                        {/* <!-- product widget --> */}
                        <div className="product-widget1">
                          <div className="product-img1">
                            <img src="./img/product06.png" alt="" />
                          </div>
                          <div className="product-body1">
                            <p className="product-category1">Category</p>
                            <h3 id="hhh" className="product-name1"><a href="#">product name goes here</a></h3>
                            <h4 id="hhh" className="product-price1">$980.00 <del className="product-old-price1">$990.00</del></h4>
                          </div>
                        </div>
                        {/* <!-- product widget --> */}
                      </div>

                      <div>
                        {/* <!-- product widget --> */}
                        <div className="product-widget1">
                          <div className="product-img1">
                            <img src="./img/product07.png" alt="" />
                          </div>
                          <div className="product-body1">
                            <p className="product-category1">Category</p>
                            <h3 id="hhh" className="product-name1"><a href="#">product name goes here</a></h3>
                            <h4 id="hhh" className="product-price1">$980.00 <del className="product-old-price1">$990.00</del></h4>
                          </div>
                        </div>
                        {/* <!-- /product widget --> */}

                        {/* <!-- product widget --> */}
                        <div className="product-widget1">
                          <div className="product-img1">
                            <img src="./img/product08.png" alt="" />
                          </div>
                          <div className="product-body1">
                            <p className="product-category1">Category</p>
                            <h3 id="hhh" className="product-name1"><a href="#">product name goes here</a></h3>
                            <h4 id="hhh" className="product-price1">$980.00 <del className="product-old-price1">$990.00</del></h4>
                          </div>
                        </div>
                        {/* <!-- /product widget --> */}

                        {/* <!-- product widget --> */}
                        <div className="product-widget1">
                          <div className="product-img1">
                            <img src="./img/product09.png" alt="" />
                          </div>
                          <div className="product-body1">
                            <p className="product-category1">Category</p>
                            <h3 id="hhh" className="product-name1"><a href="#">product name goes here</a></h3>
                            <h4 id="hhh" className="product-price1">$980.00 <del className="product-old-price1">$990.00</del></h4>
                          </div>
                        </div>
                        {/* <!-- product widget --> */}
                      </div>
                    </div>
                  </div>

                  <div className="clearfix visible-sm visible-xs"></div>

                  <div className="col-md-4 col-xs-6">
                    <div className="section-title1">
                      <h4 id="hhh" className="title1">Top selling</h4>
                      <div className="section-nav1">
                        <div id="slick-nav-5" className="products-slick-nav1"></div>
                      </div>
                    </div>

                    <div className="products-widget-slick" data-nav="#slick-nav-5">
                      <div>
                        {/* <!-- product widget --> */}
                        <div className="product-widget1">
                          <div className="product-img1">
                            <img src="./img/product01.png" alt="" />
                          </div>
                          <div className="product-body1">
                            <p className="product-category1">Category</p>
                            <h3 id="hhh" className="product-name1"><a href="#">product name goes here</a></h3>
                            <h4 id="hhh" className="product-price1">$980.00 <del className="product-old-price1">$990.00</del></h4>
                          </div>
                        </div>
                        {/* <!-- /product widget --> */}

                        {/* <!-- product widget --> */}
                        <div className="product-widget1">
                          <div className="product-img1">
                            <img src="./img/product02.png" alt="" />
                          </div>
                          <div className="product-body1">
                            <p className="product-category1">Category</p>
                            <h3 id="hhh" className="product-name1"><a href="#">product name goes here</a></h3>
                            <h4 id="hhh" className="product-price1">$980.00 <del className="product-old-price1">$990.00</del></h4>
                          </div>
                        </div>
                        {/* <!-- /product widget --> */}

                        {/* <!-- product widget --> */}
                        <div className="product-widget1">
                          <div className="product-img1">
                            <img src="./img/product03.png" alt="" />
                          </div>
                          <div className="product-body1">
                            <p className="product-category1">Category</p>
                            <h3 id="hhh" className="product-name1"><a href="#">product name goes here</a></h3>
                            <h4 id="hhh" className="product-price1">$980.00 <del className="product-old-price1">$990.00</del></h4>
                          </div>
                        </div>
                        {/* <!-- product widget --> */}
                      </div>

                      <div>
                        {/* <!-- product widget --> */}
                        <div className="product-widget1">
                          <div className="product-img1">
                            <img src="./img/product04.png" alt="" />
                          </div>
                          <div className="product-body1">
                            <p className="product-category1">Category</p>
                            <h3 id="hhh" className="product-name1"><a href="#">product name goes here</a></h3>
                            <h4 id="hhh" className="product-price1">$980.00 <del className="product-old-price1">$990.00</del></h4>
                          </div>
                        </div>
                        {/* <!-- /product widget --> */}

                        {/* <!-- product widget --> */}
                        <div className="product-widget1">
                          <div className="product-img1">
                            <img src="./img/product05.png" alt="" />
                          </div>
                          <div className="product-body1">
                            <p className="product-category1">Category</p>
                            <h3 id="hhh" className="product-name1"><a href="#">product name goes here</a></h3>
                            <h4 id="hhh" className="product-price1">$980.00 <del className="product-old-price1">$990.00</del></h4>
                          </div>
                        </div>
                        {/* <!-- /product widget --> */}

                        {/* <!-- product widget --> */}
                        <div className="product-widget1">
                          <div className="product-img1">
                            <img src="./img/product06.png" alt="" />
                          </div>
                          <div className="product-body1">
                            <p className="product-category1">Category</p>
                            <h3 id="hhh" className="product-name1"><a href="#">product name goes here</a></h3>
                            <h4 id="hhh" className="product-price1">$980.00 <del className="product-old-price1">$990.00</del></h4>
                          </div>
                        </div>
                        {/* <!-- product widget --> */}
                      </div>
                    </div>
                  </div>

                </div>
                {/* <!-- /row --> */}
              </div>
              {/* <!-- /container --> */}
            </div>
            {/* <!-- /SECTION --> */}

            {/* <!-- NEWSLETTER --> */}
            <div id="new1sletter" className="section">
              {/* <!-- container --> */}
              <div className="container">
                {/* <!-- row --> */}
                <div className="row">
                  <div className="col-md-12">
                    <div className="new1sletter">
                      <p>Sign Up for the <strong>NEWSLETTER</strong></p>
                      <form>
                        <input className="input1" type="email" placeholder="Enter Your Email" />
                        <button className="new1sletter-btn"><i className="fa fa-envelope"></i> Subscribe</button>
                      </form>
                      <ul className="new1sletter-follow">
                        <li>
                          <a href="#"><i className="fa fa-facebook"></i></a>
                        </li>
                        <li>
                          <a href="#"><i className="fa fa-twitter"></i></a>
                        </li>
                        <li>
                          <a href="#"><i className="fa fa-instagram"></i></a>
                        </li>
                        <li>
                          <a href="#"><i className="fa fa-pinterest"></i></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <!-- /row --> */}
              </div>
              {/* <!-- /container --> */}
            </div>
            {/* <!-- /NEWSLETTER --> */}

            {/* <!-- FOOTER --> */}
            <footer id="footer1">
              {/* <!-- top footer --> */}
              <div className="section1">
                {/* <!-- container --> */}
                <div className="container">
                  {/* <!-- row --> */}
                  <div className="row">
                    <div className="col-md-3 col-xs-6">
                      <div className="footer1">
                        <h3 id="hhh" className="footer-title1">About Us</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>
                        <ul className="footer-links1">
                          <li><a href="#"><i className="fa fa-map-marker"></i>1734 Stonecoal Road</a></li>
                          <li><a href="#"><i className="fa fa-phone"></i>+021-95-51-84</a></li>
                          <li><a href="#"><i className="fa fa-envelope-o"></i>email@email.com</a></li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-md-3 col-xs-6">
                      <div className="footer1">
                        <h3 id="hhh" className="footer-title1">Categories</h3>
                        <ul className="footer-links1">
                          <li><a href="#">Hot deals</a></li>
                          <li><a href="#">Laptops</a></li>
                          <li><a href="#">Smartphones</a></li>
                          <li><a href="#">Cameras</a></li>
                          <li><a href="#">Accessories</a></li>
                        </ul>
                      </div>
                    </div>

                    <div className="clearfix visible-xs"></div>

                    <div className="col-md-3 col-xs-6">
                      <div className="footer1">
                        <h3 id="hhh" className="footer-title1">Information</h3>
                        <ul className="footer-links1">
                          <li><a href="#">About Us</a></li>
                          <li><a href="#">Contact Us</a></li>
                          <li><a href="#">Privacy Policy</a></li>
                          <li><a href="#">Orders and Returns</a></li>
                          <li><a href="#">Terms & Conditions</a></li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-md-3 col-xs-6">
                      <div className="footer1">
                        <h3 id="hhh" className="footer-title1">Service</h3>
                        <ul className="footer-links1">
                          <li><a href="#">My Account</a></li>
                          <li><a href="#">View Cart</a></li>
                          <li><a href="#">Wishlist</a></li>
                          <li><a href="#">Track My Order</a></li>
                          <li><a href="#">Help</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* <!-- /row --> */} 
                </div>
                {/* <!-- /container --> */}
              </div>
              {/* <!-- /top footer --> */}  

              {/* <!-- bottom footer --> */}
              <div id="bottom-footer1" className="section1">
                <div className="container">
                  {/* <!-- row --> */}
                  <div className="row">
                    <div className="col-md-12 text-center">
                      <ul className="footer-payments1">
                        <li><a href="index.html"><i className="fa fa-cc-visa"></i></a></li>
                        <li><a href="index.html"><i className="fa fa-credit-card"></i></a></li>
                        <li><a href="index.html"><i className="fa fa-cc-paypal"></i></a></li>
                        <li><a href="index.html"><i className="fa fa-cc-mastercard"></i></a></li>
                        <li><a href="index.html"><i className="fa fa-cc-discover"></i></a></li>
                        <li><a href="index.html"><i className="fa fa-cc-amex"></i></a></li>
                      </ul>
                      <span className="copyright1">
                        {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                        {/* Copyright &copy;<script>document.write(new1 Date().getFullYear());</script> All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a> */}
                        {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                      </span>
                    </div>
                  </div>
                  {/* <!-- /row --> */}
                </div>
                {/* <!-- /container --> */}
              </div>
              {/* <!-- /bottom footer --> */}
            </footer>
            {/* <!-- /FOOTER --> */}
          </body>
        </div>
      </div>

    )
  }
}
export default Shoppage;
