import React from 'react';
import {
	//  BrowserRouter as Router,
	//  Route,
	  Link } from 'react-router-dom';


class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
  

    }
  }

  render(){
    return(
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
									{/* <img src="./cssshop/img/logo.png" alt=""/> */}
									<h1> iPlay </h1>
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
								<Link to="/Shoppingcart" >
									<a className="dropdown-toggle" href="/" data-toggle="dropdown" aria-expanded="true">
										<i className="fa fa-shopping-cart"></i>
											 <span>Your Cart</span>
										<div className="qty">3</div>
									</a></Link>
									<div className="cart-dropdown">
										<div className="cart-list">
											<div className="product-widget">
												<div className="product-img">
													<img src="./img/product01.png" alt=""/>
												</div>
												<div className="product-body">
													<h3 className="product-name"><a href="/">product name goes here</a></h3>
													<h4 className="product-price"><span className="qty">1x</span>$980.00</h4>
												</div>
												<button className="delete"><i className="fa fa-close"></i></button>
											</div>

											<div className="product-widget">
												<div className="product-img">
													<img src="./img/product02.png" alt=""/>
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
											<Link to="/Shoppingcart">
											View Cart
											</Link>
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
		
		{/* <!-- /HEADER --></div> */}
		{/* <!-- NAVIGATION --> */}
		<nav id="navigation">
			{/* <!-- container --> */}
			<div className="container">
				{/* <!-- responsive-nav --> */}
				<div id="responsive-nav">
					{/* <!-- NAV --> */}
					<ul className="main-nav nav navbar-nav">
						<li onClick={() => this.props.changeRole("Random-Home")}><Link>Home</Link></li>
						<li onClick={() => this.props.changeRole("Steam")}><Link>Steam</Link></li>
						<li onClick={() => this.props.changeRole("PSN")}><Link>PSN</Link></li>
						<li onClick={() => this.props.changeRole("GooglePlay")}><Link>Google Play</Link></li>
						<li onClick={() => this.props.changeRole("iTunes")}><Link>iTunes</Link></li>
						<li onClick={() => this.props.changeRole("Xbox")}><Link>Xbox</Link></li>
						<li onClick={() => this.props.changeRole("Amazon")}><Link>Amazon</Link></li>
					</ul>
					{/* <!-- /NAV --> */}
				</div>
				{/* <!-- /responsive-nav --> */}
			</div>
			{/* <!-- /container --> */}
		</nav>
		{/* <!-- /NAVIGATION --> */}

{/* <div classNameName="banner banner2">
	 <div className="container">
		 <div className="headr-right">
				<div className="details">
					<ul>
						<li><a href="mailto:@example.com"><span className="glyphicon glyphicon-envelope" aria-hidden="true"></span>iPlay@gmail.com</a></li>
						<li><span className="glyphicon glyphicon-earphone" aria-hidden="true"></span>(+962)79 090 7240</li>
					</ul>
			  </div>
		 </div>
		 <div className="banner_head_top">
			  <div className="logo">
					<h1><Link to="/Welcomepage">i<span>Play</span></Link></h1>
			 </div>	
			 <div className="top-menu">	 
			     <div className="content white">
					 <nav className="navbar navbar-default">
						 <div className="navbar-header">
							<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="/bs-example-navbar-collapse-1">
								<span className="sr-only">Toggle navigation</span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>				
						 </div> */}
						 {/* <!--/navbar header-->		 */}
						 {/* <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
							 <ul className="nav navbar-nav">
								 <li><Link to="/sign-in-customer">Shop</Link></li>
								 <li><a href="about.html">About</a></li>
								 <li className="dropdown">
									<a href="/" className="scroll dropdown-toggle" data-toggle="dropdown">Reviews<b className="caret"></b></a>
									<ul className="dropdown-menu">
										<li><a href="review.html">Review 1</a></li>
										<li><a href="review.html">Review 2</a></li>
										<li><a href="review.html">Review 3</a></li>
									</ul>
								 </li>					
								 <li><a href="gallery.html">Gallery</a></li>
								 <li><a href="contact.html">Contact</a></li>
							 </ul>
							</div> */}
						  {/* <!--/navbar collapse--> */}
					 {/* </nav> */}
					  {/* <!--/navbar--> */}
				 {/* </div>
					 <div className="clearfix"></div>
					<script type="text/javascript" src="js/bootstrap-3.1.1.min.js"></script>
			  </div>
				 <div className="clearfix"></div>
		  </div>
	 </div>	 
</div> */}

</div>

    )
  }
}
export default Header;
