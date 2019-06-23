import React from "react"

class Shoppingcart extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  render() {

    return (
      <div>


        <div>
          <header>
            {/* <!-- TOP HEADER --> */}
            <div id="top-header">
              <div className="container">
                <ul className="header-links pull-left">
                  <li><a href="/"><i className="fa fa-phone"></i> +021-95-51-84</a></li>
                  <li><a href="/"><i className="fa fa-envelope-o"></i> email@email.com</a></li>
                  <li><a href="/"><i className="fa fa-map-marker"></i> 1734 Stonecoal Road</a></li>
                </ul>
                <ul className="header-links pull-right">
                  <li><a href="/"><i className="fa fa-dollar"></i> USD</a></li>
                  <li><a href="/"><i className="fa fa-user-o"></i> My Account</a></li>
                </ul>
              </div>
            </div>
            {/* <!-- /TOP HEADER --> */}

            {/* <!-- MAIN HEADER --> */}
            <div id="header">
              {/* <!-- container --> */}
              <div className="container">
                {/* <!-- row --> */}
                <div className="row">
                  {/* <!-- LOGO --> */}
                  <div className="col-md-3">
                    <div className="header-logo">
                      <a href="/" className="logo">
                        <img src="./cssshop/img/logo.png" alt="" />
                      </a>
                    </div>
                  </div>
                  {/* <!-- /LOGO --> */}

                  {/* <!-- SEARCH BAR --> */}
                  <div className="col-md-6">
                    <div className="header-search">
                      <form>
                        <select className="input-select">
                          <option value="0">All Categories</option>
                          <option value="1">Category 01</option>
                          <option value="1">Category 02</option>
                        </select>
                        <input className="input" placeholder="Search here" />
                        <button className="search-btn">Search</button>
                      </form>
                    </div>
                  </div>
                  {/* <!-- /SEARCH BAR --> */}

                  {/* <!-- ACCOUNT --> */}
                  <div className="col-md-3 clearfix">
                    <div className="header-ctn">
                      {/* <!-- Wishlist --> */}
                      <div>
                        <a href="/">
                          <i className="fa fa-heart-o"></i>
                          <span>Your Wishlist</span>
                          <div className="qty">2</div>
                        </a>
                      </div>
                      {/* <!-- /Wishlist --> */}

                      {/* <!-- Cart --> */}
                      <div className="dropdown">
                        <a href="/" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                          <i className="fa fa-shopping-cart"></i>
                          <span>Your Cart</span>
                          <div className="qty">3</div>
                        </a>
                        <div className="cart-dropdown">
                          <div className="cart-list">
                            <div className="product-widget">
                              <div className="product-img">
                                <img src="./cssshop/img/product01.png" alt="" />
                              </div>
                              <div className="product-body">
                                <h3 className="product-name"><a href="/">product name goes here</a></h3>
                                <h4 className="product-price"><span className="qty">1x</span>$980.00</h4>
                              </div>
                              <button className="delete"><i className="fa fa-close"></i></button>
                            </div>

                            <div className="product-widget">
                              <div className="product-img">
                                <img src="./cssshop/img/product02.png" alt="" />
                              </div>
                              <div className="product-body">
                                <h3 className="product-name"><a href="/">product name goes here</a></h3>
                                <h4 className="product-price"><span className="qty">3x</span>$980.00</h4>
                              </div>
                              <button className="delete"><i className="fa fa-close"></i></button>
                            </div>
                          </div>
                          <div className="cart-summary">
                            <small>3 Item(s) selected</small>
                            <h5>SUBTOTAL: $2940.00</h5>
                          </div>
                          <div className="cart-btns">
                            <a href="/">View Cart</a>
                            <a href="/">Checkout  <i className="fa fa-arrow-circle-right"></i></a>
                          </div>
                        </div>
                      </div>
                      {/* <!-- /Cart --> */}

                      {/* <!-- Menu Toogle --> */}
                      <div className="menu-toggle">
                        <a href="/">
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
          <nav id="navigation">
            {/* <!-- container --> */}
            <div className="container">
              {/* <!-- responsive-nav --> */}
              <div id="responsive-nav">
                {/* <!-- NAV --> */}
                <ul className="main-nav nav navbar-nav">
                  <li className="active"><a href="/">Home</a></li>
                  <li><a href="/">Hot Deals</a></li>
                  <li><a href="/">Categories</a></li>
                  <li><a href="/">Laptops</a></li>
                  <li><a href="/">Smartphones</a></li>
                  <li><a href="/">Cameras</a></li>
                  <li><a href="/">Accessories</a></li>
                </ul>
                {/* <!-- /NAV --> */}
              </div>
              {/* <!-- /responsive-nav --> */}
            </div>
            {/* <!-- /container --> */}
          </nav>
          {/* <!-- /NAVIGATION --> */}

          {/* <!-- BREADCRUMB --> */}
          <div id="breadcrumb" className="section">
            {/* <!-- container --> */}
            <div className="container">
              {/* <!-- row --> */}
              <div className="row">
                <div className="col-md-12">
                  <ul className="breadcrumb-tree">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">All Categories</a></li>
                    <li><a href="/">Accessories</a></li>
                    <li><a href="/">Headphones</a></li>
                    <li className="active">Product name goes here</li>
                  </ul>
                </div>
              </div>
              {/* <!-- /row --> */}
            </div>
            {/* <!-- /container --> */}
          </div>
          {/* <!-- /BREADCRUMB --> */}

          {/* <!-- SECTION --> */}
          <div className="section">
            {/* <!-- container --> */}
            <div className="container">
              {/* <!-- row --> */}
              <div className="row">
                {/* <!-- Product main img --> */}
                <div className="col-md-5 col-md-push-2">
                  <div id="product-main-img">
                    <div className="product-preview">
                      <img src="./cssshop/img/product01.png" alt="" />
                    </div>

                    <div className="product-preview">
                      <img src="./cssshop/img/product03.png" alt="" />
                    </div>

                    <div className="product-preview">
                      <img src="./cssshop/img/product06.png" alt="" />
                    </div>

                    <div className="product-preview">
                      <img src="./cssshop/img/product08.png" alt="" />
                    </div>
                  </div>
                </div>
                {/* <!-- /Product main img --> */}

                {/* <!-- Product thumb imgs --> */}
                <div className="col-md-2  col-md-pull-5">
                  <div id="product-imgs">
                    <div className="product-preview">
                      <img src="./cssshop/img/product01.png" alt="" />
                    </div>

                    <div className="product-preview">
                      <img src="./cssshop/img/product03.png" alt="" />
                    </div>

                    <div className="product-preview">
                      <img src="./cssshop/img/product06.png" alt="" />
                    </div>

                    <div className="product-preview">
                      <img src="./cssshop/img/product08.png" alt="" />
                    </div>
                  </div>
                </div>
                {/* <!-- /Product thumb imgs --> */}

                {/* <!-- Product details --> */}
                <div className="col-md-5">
                  <div className="product-details">
                    <h2 className="product-name">product name goes here</h2>
                    <div>
                      <div className="product-rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-o"></i>
                      </div>
                      <a className="review-link" href="/">10 Review(s) | Add your review</a>
                    </div>
                    <div>
                      <h3 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h3>
                      <span className="product-available">In Stock</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                    <div className="product-options">
                      <label>
                        Size
									<select className="input-select">
                          <option value="0">X</option>
                        </select>
                      </label>
                      <label>
                        Color
									<select className="input-select">
                          <option value="0">Red</option>
                        </select>
                      </label>
                    </div>

                    <div className="add-to-cart">
                      <div className="qty-label">
                        Qty
									<div className="input-number">
                          <input type="number" />
                          <span className="qty-up">+</span>
                          <span className="qty-down">-</span>
                        </div>
                      </div>
                      <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
                    </div>

                    <ul className="product-btns">
                      <li><a href="/"><i className="fa fa-heart-o"></i> add to wishlist</a></li>
                      <li><a href="/"><i className="fa fa-exchange"></i> add to compare</a></li>
                    </ul>

                    <ul className="product-links">
                      <li>Category:</li>
                      <li><a href="/">Headphones</a></li>
                      <li><a href="/">Accessories</a></li>
                    </ul>

                    <ul className="product-links">
                      <li>Share:</li>
                      <li><a href="/"><i className="fa fa-facebook"></i></a></li>
                      <li><a href="/"><i className="fa fa-twitter"></i></a></li>
                      <li><a href="/"><i className="fa fa-google-plus"></i></a></li>
                      <li><a href="/"><i className="fa fa-envelope"></i></a></li>
                    </ul>

                  </div>
                </div>
                {/* <!-- /Product details --> */}

                {/* <!-- Product tab --> */}
                <div className="col-md-12">
                  <div id="product-tab">
                    {/* <!-- product tab nav --> */}
                    <ul className="tab-nav">
                      <li className="active"><a data-toggle="tab" href="/tab1">Description</a></li>
                      <li><a data-toggle="tab" href="/tab2">Details</a></li>
                      <li><a data-toggle="tab" href="/tab3">Reviews (3)</a></li>
                    </ul>
                    {/* <!-- /product tab nav --> */}

                    {/* <!-- product tab content --> */}
                    <div className="tab-content">
                      {/* <!-- tab1  --> */}
                      <div id="tab1" className="tab-pane fade in active">
                        <div className="row">
                          <div className="col-md-12">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                          </div>
                        </div>
                      </div>
                      {/* <!-- /tab1  --> */}

                      {/* <!-- tab2  --> */}
                      <div id="tab2" className="tab-pane fade in">
                        <div className="row">
                          <div className="col-md-12">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                          </div>
                        </div>
                      </div>
                      {/* <!-- /tab2  --> */}

                      {/* <!-- tab3  --> */}
                      <div id="tab3" className="tab-pane fade in">
                        <div className="row">
                          {/* <!-- Rating --> */}
                          <div className="col-md-3">
                            <div id="rating">
                              <div className="rating-avg">
                                <span>4.5</span>
                                <div className="rating-stars">
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star-o"></i>
                                </div>
                              </div>
                              <ul className="rating">
                                <li>
                                  <div className="rating-stars">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                  </div>
                                  <div className="rating-progress">
                                    {/* <div style="width: 80%;"></div> */}
                                  </div>
                                  <span className="sum">3</span>
                                </li>
                                <li>
                                  <div className="rating-stars">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star-o"></i>
                                  </div>
                                  <div className="rating-progress">
                                    {/* <div style="width: 60%;"></div> */}
                                  </div>
                                  <span className="sum">2</span>
                                </li>
                                <li>
                                  <div className="rating-stars">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star-o"></i>
                                    <i className="fa fa-star-o"></i>
                                  </div>
                                  <div className="rating-progress">
                                    <div></div>
                                  </div>
                                  <span className="sum">0</span>
                                </li>
                                <li>
                                  <div className="rating-stars">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star-o"></i>
                                    <i className="fa fa-star-o"></i>
                                    <i className="fa fa-star-o"></i>
                                  </div>
                                  <div className="rating-progress">
                                    <div></div>
                                  </div>
                                  <span className="sum">0</span>
                                </li>
                                <li>
                                  <div className="rating-stars">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star-o"></i>
                                    <i className="fa fa-star-o"></i>
                                    <i className="fa fa-star-o"></i>
                                    <i className="fa fa-star-o"></i>
                                  </div>
                                  <div className="rating-progress">
                                    <div></div>
                                  </div>
                                  <span className="sum">0</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          {/* <!-- /Rating --> */}

                          {/* <!-- Reviews --> */}
                          <div className="col-md-6">
                            <div id="reviews">
                              <ul className="reviews">
                                <li>
                                  <div className="review-heading">
                                    <h5 className="name">John</h5>
                                    <p className="date">27 DEC 2018, 8:0 PM</p>
                                    <div className="review-rating">
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star-o empty"></i>
                                    </div>
                                  </div>
                                  <div className="review-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                  </div>
                                </li>
                                <li>
                                  <div className="review-heading">
                                    <h5 className="name">John</h5>
                                    <p className="date">27 DEC 2018, 8:0 PM</p>
                                    <div className="review-rating">
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star-o empty"></i>
                                    </div>
                                  </div>
                                  <div className="review-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                  </div>
                                </li>
                                <li>
                                  <div className="review-heading">
                                    <h5 className="name">John</h5>
                                    <p className="date">27 DEC 2018, 8:0 PM</p>
                                    <div className="review-rating">
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star-o empty"></i>
                                    </div>
                                  </div>
                                  <div className="review-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                  </div>
                                </li>
                              </ul>
                              <ul className="reviews-pagination">
                                <li className="active">1</li>
                                <li><a href="/">2</a></li>
                                <li><a href="/">3</a></li>
                                <li><a href="/">4</a></li>
                                <li><a href="/"><i className="fa fa-angle-right"></i></a></li>
                              </ul>
                            </div>
                          </div>
                          {/* <!-- /Reviews --> */}

                          {/* <!-- Review Form --> */}
                          <div className="col-md-3">
                            <div id="review-form">
                              <form className="review-form">
                                <input className="input" type="text" placeholder="Your Name" />
                                <input className="input" type="email" placeholder="Your Email" />
                                <textarea className="input" placeholder="Your Review"></textarea>
                                <div className="input-rating">
                                  <span>Your Rating: </span>
                                  <div className="stars">
                                    <input id="star5" name="rating" value="5" type="radio" /><label for="star5"></label>
                                    <input id="star4" name="rating" value="4" type="radio" /><label for="star4"></label>
                                    <input id="star3" name="rating" value="3" type="radio" /><label for="star3"></label>
                                    <input id="star2" name="rating" value="2" type="radio" /><label for="star2"></label>
                                    <input id="star1" name="rating" value="1" type="radio" /><label for="star1"></label>
                                  </div>
                                </div>
                                <button className="primary-btn">Submit</button>
                              </form>
                            </div>
                          </div>
                          {/* <!-- /Review Form --> */}
                        </div>
                      </div>
                      {/* <!-- /tab3  --> */}
                    </div>
                    {/* <!-- /product tab content  --> */}
                  </div>
                </div>
                {/* <!-- /product tab --> */}
              </div>
              {/* <!-- /row --> */}
            </div>
            {/* <!-- /container --> */}
          </div>
          {/* <!-- /SECTION --> */}

          {/* <!-- Section --> */}
          <div className="section">
            {/* <!-- container --> */}
            <div className="container">
              {/* <!-- row --> */}
              <div className="row">

                <div className="col-md-12">
                  <div className="section-title text-center">
                    <h3 className="title">Related Products</h3>
                  </div>
                </div>

                {/* <!-- product --> */}
                <div className="col-md-3 col-xs-6">
                  <div className="product">
                    <div className="product-img">
                      <img src="./cssshop/img/product01.png" alt="" />
                      <div className="product-label">
                        <span className="sale">-30%</span>
                      </div>
                    </div>
                    <div className="product-body">
                      <p className="product-category">Category</p>
                      <h3 className="product-name"><a href="/">product name goes here</a></h3>
                      <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                      <div className="product-rating">
                      </div>
                      <div className="product-btns">
                        <button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
                        <button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
                        <button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></button>
                      </div>
                    </div>
                    <div className="add-to-cart">
                      <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
                    </div>
                  </div>
                </div>
                {/* <!-- /product --> */}

                {/* <!-- product --> */}
                <div className="col-md-3 col-xs-6">
                  <div className="product">
                    <div className="product-img">
                      <img src="./cssshop/img/product02.png" alt="" />
                      <div className="product-label">
                        <span className="new">NEW</span>
                      </div>
                    </div>
                    <div className="product-body">
                      <p className="product-category">Category</p>
                      <h3 className="product-name"><a href="/">product name goes here</a></h3>
                      <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                      <div className="product-rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                      <div className="product-btns">
                        <button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
                        <button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
                        <button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></button>
                      </div>
                    </div>
                    <div className="add-to-cart">
                      <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
                    </div>
                  </div>
                </div>
                {/* <!-- /product --> */}

                <div className="clearfix visible-sm visible-xs"></div>

                {/* <!-- product --> */}
                <div className="col-md-3 col-xs-6">
                  <div className="product">
                    <div className="product-img">
                      <img src="./cssshop/img/product03.png" alt="" />
                    </div>
                    <div className="product-body">
                      <p className="product-category">Category</p>
                      <h3 className="product-name"><a href="/">product name goes here</a></h3>
                      <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                      <div className="product-rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-o"></i>
                      </div>
                      <div className="product-btns">
                        <button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
                        <button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
                        <button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></button>
                      </div>
                    </div>
                    <div className="add-to-cart">
                      <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
                    </div>
                  </div>
                </div>
                {/* <!-- /product --> */}

                {/* <!-- product --> */}
                <div className="col-md-3 col-xs-6">
                  <div className="product">
                    <div className="product-img">
                      <img src="./cssshop/img/product04.png" alt="" />
                    </div>
                    <div className="product-body">
                      <p className="product-category">Category</p>
                      <h3 className="product-name"><a href="/">product name goes here</a></h3>
                      <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                      <div className="product-rating">
                      </div>
                      <div className="product-btns">
                        <button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
                        <button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
                        <button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></button>
                      </div>
                    </div>
                    <div className="add-to-cart">
                      <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
                    </div>
                  </div>
                </div>
                {/* <!-- /product --> */}

              </div>
              {/* <!-- /row --> */}
            </div>
            {/* <!-- /container --> */}
          </div>
          {/* <!-- /Section --> */}

          {/* <!-- NEWSLETTER --> */}
          <div id="newsletter" className="section">
            {/* <!-- container --> */}
            <div className="container">
              {/* <!-- row --> */}
              <div className="row">
                <div className="col-md-12">
                  <div className="newsletter">
                    <p>Sign Up for the <strong>NEWSLETTER</strong></p>
                    <form>
                      <input className="input" type="email" placeholder="Enter Your Email" />
                      <button className="newsletter-btn"><i className="fa fa-envelope"></i> Subscribe</button>
                    </form>
                    <ul className="newsletter-follow">
                      <li>
                        <a href="/"><i className="fa fa-facebook"></i></a>
                      </li>
                      <li>
                        <a href="/"><i className="fa fa-twitter"></i></a>
                      </li>
                      <li>
                        <a href="/"><i className="fa fa-instagram"></i></a>
                      </li>
                      <li>
                        <a href="/"><i className="fa fa-pinterest"></i></a>
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
          <footer id="footer">
            {/* <!-- top footer --> */}
            <div className="section">
              {/* <!-- container --> */}
              <div className="container">
                {/* <!-- row --> */}
                <div className="row">
                  <div className="col-md-3 col-xs-6">
                    <div className="footer">
                      <h3 className="footer-title">About Us</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>
                      <ul className="footer-links">
                        <li><a href="/"><i className="fa fa-map-marker"></i>1734 Stonecoal Road</a></li>
                        <li><a href="/"><i className="fa fa-phone"></i>+021-95-51-84</a></li>
                        <li><a href="/"><i className="fa fa-envelope-o"></i>email@email.com</a></li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-md-3 col-xs-6">
                    <div className="footer">
                      <h3 className="footer-title">Categories</h3>
                      <ul className="footer-links">
                        <li><a href="/">Hot deals</a></li>
                        <li><a href="/">Laptops</a></li>
                        <li><a href="/">Smartphones</a></li>
                        <li><a href="/">Cameras</a></li>
                        <li><a href="/">Accessories</a></li>
                      </ul>
                    </div>
                  </div>

                  <div className="clearfix visible-xs"></div>

                  <div className="col-md-3 col-xs-6">
                    <div className="footer">
                      <h3 className="footer-title">Information</h3>
                      <ul className="footer-links">
                        <li><a href="/">About Us</a></li>
                        <li><a href="/">Contact Us</a></li>
                        <li><a href="/">Privacy Policy</a></li>
                        <li><a href="/">Orders and Returns</a></li>
                        <li><a href="/">Terms & Conditions</a></li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-md-3 col-xs-6">
                    <div className="footer">
                      <h3 className="footer-title">Service</h3>
                      <ul className="footer-links">
                        <li><a href="/">My Account</a></li>
                        <li><a href="/">View Cart</a></li>
                        <li><a href="/">Wishlist</a></li>
                        <li><a href="/">Track My Order</a></li>
                        <li><a href="/">Help</a></li>
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
            <div id="bottom-footer" className="section">
              <div className="container">
                {/* <!-- row --> */}
                <div className="row">
                  <div className="col-md-12 text-center">
                    <ul className="footer-payments">
                      <li><a href="/"><i className="fa fa-cc-visa"></i></a></li>
                      <li><a href="/"><i className="fa fa-credit-card"></i></a></li>
                      <li><a href="/"><i className="fa fa-cc-paypal"></i></a></li>
                      <li><a href="/"><i className="fa fa-cc-mastercard"></i></a></li>
                      <li><a href="/"><i className="fa fa-cc-discover"></i></a></li>
                      <li><a href="/"><i className="fa fa-cc-amex"></i></a></li>
                    </ul>

                  </div>
                </div>
                {/* <!-- /row --> */}
              </div>
              {/* <!-- /container --> */}
            </div>
            {/* <!-- /bottom footer --> */}
          </footer>
          {/* <!-- /FOOTER --> */}

        </div>
      </div>
    )
  }
}
export default Shoppingcart;