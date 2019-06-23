import React from "react";
import Header from "./header";
// import Footer from "./footer";
import {
	//  BrowserRouter as Router,
	//  Route,
	  Link } from 'react-router-dom';


class Shopnew extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cards : [],
      roleName : "Random-Home"

    }
  }

  componentWillMount() {
    this.getInfo();
  }

  getInfo() {
    fetch('http://localhost:8080/getProducts')
      .then(response => response.json())
      .then(card => {
        console.log(card)
        this.setState({ cards: card })
      }
      );

		}
		changeRole(role) {
			this.setState({roleName : role});
		}

    render(){
      let that = this
      return  (
      <div>
        <Header changeRole={this.changeRole.bind(this)} />
				          {/* <div>
            {this.state.products.map((oneProd, i) => {
              console.log(oneProd.image)
              return (
                <center><span style={{ padding : "10px 20px"}}>
                <div style={{ backgroundColor: "#44014C", width: "300px", minHeight: "200px", color: "white"}} key={i}>
                  <center>
                    <h2 style={{ padding: "10px 20px", textAlign: "center", color: "white"}}>
                      {oneProd.name}
                    </h2>
                    <br></br> */}
                    {/* {oneProd.image}  */}
                    {/* <br></br>
                    {oneProd.price}
                    <br></br>
                    {oneProd.description}

                  </center>
                </div></span></center>

              )



            })}
          </div> */}


        {/* <!-- SECTION --> */}
		<div className="section">
			{/* <!-- container --> */}
			<div className="container">
				{/* <!-- row --> */}
				<div className="row">
					{/* <!-- shop --> */}



        {this.state.cards.map((c, i) => {
					console.log(c.RoleName)

          if(c.role === that.state.roleName ) {

          return (
            <div  key={i} className="col-md-4 col-xs-6">
						<div className="shop">
							<div className="shop-img">
								<img src={c.image} alt=""/>
							</div>
							<div className="shop-body">
								<Link to={c.roleName} onClick={() => this.changeRole(c.roleName)} >
								<h3>Shop<br/>Now</h3>
								<a className="cta-btn"><i></i></a>
								
								</Link>
							</div><br></br><center>
								<h2>{c.name}</h2><br></br>
								 <br></br>
								{c.description}
							{c.name}
							</center>
						</div>
					</div>
          )
          }

        })
        }
  



					{/* <!-- /shop --> */}
				</div>
				{/* <!-- /row --> */}
			</div>
			{/* <!-- /container --> */}
		</div>
		{/* <!-- /SECTION --> */}

		{/* <!-- SECTION --> */}
		<div className="section">
			{/* <!-- container --> */}
			<div className="container">
				{/* <!-- row --> */}
				<div className="row">

					{/* <!-- section title --> */}
					<div className="col-md-12">
						<div className="section-title">
							<h3 className="title">New Products</h3>
							<div className="section-nav">
								<ul className="section-tab-nav tab-nav">
									<li className="active"><a data-toggle="tab" href="/tab1">Laptops</a></li>
									<li><a data-toggle="tab" href="/tab1">Smartphones</a></li>
									<li><a data-toggle="tab" href="/tab1">Cameras</a></li>
									<li><a data-toggle="tab" href="/tab1">Accessories</a></li>
								</ul>
							</div>
						</div>
					</div>
					{/* <!-- /section title --> */}

					{/* <!-- Products tab & slick --> */}
					<div className="col-md-12">
						<div className="row">
							<div className="products-tabs">
								{/* <!-- tab --> */}
								<div id="tab1" className="tab-pane active">
									<div className="products-slick" data-nav="/slick-nav-1">
										{/* <!-- product --> */}
										<div className="product">
											<div className="product-img">
												<img src="./cssshop/img/product01.png" alt=""/>
												<div className="product-label">
													<span className="sale">-30%</span>
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
										{/* <!-- /product --> */}

										{/* <!-- product --> */}
										<div className="product">
											<div className="product-img">
												<img src="./cssshop/img/product02.png" alt=""/>
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
										{/* <!-- /product --> */}

										{/* <!-- product --> */}
										<div className="product">
											<div className="product-img">
												<img src="./cssshop/img/product03.png" alt=""/>
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
										{/* <!-- /product --> */}

										{/* <!-- product --> */}
										<div className="product">
											<div className="product-img">
												<img src="./cssshop/img/product04.png" alt=""/>
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
										{/* <!-- /product --> */}

										{/* <!-- product --> */}
										<div className="product">
											<div className="product-img">
												<img src="./cssshop/img/product05.png" alt=""/>
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
										{/* <!-- /product --> */}
									</div>
									<div id="slick-nav-1" className="products-slick-nav"></div>
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
		<div id="hot-deal" className="section">
			{/* <!-- container --> */}
			<div className="container">
				{/* <!-- row --> */}
				<div className="row">
					<div className="col-md-12">
						<div className="hot-deal">
							<ul className="hot-deal-countdown">
								<li>
									<div>
										<h3>02</h3>
										<span>Days</span>
									</div>
								</li>
								<li>
									<div>
										<h3>10</h3>
										<span>Hours</span>
									</div>
								</li>
								<li>
									<div>
										<h3>34</h3>
										<span>Mins</span>
									</div>
								</li>
								<li>
									<div>
										<h3>60</h3>
										<span>Secs</span>
									</div>
								</li>
							</ul>
							<h2 className="text-uppercase">hot deal this week</h2>
							<p>New Collection Up to 50% OFF</p>
							<a className="primary-btn cta-btn" href="/">Shop now</a>
						</div>
					</div>
				</div>
				{/* <!-- /row --> */}
			</div>
			{/* <!-- /container --> */}
		</div>
		{/* <!-- /HOT DEAL SECTION --> */}

		{/* <!-- SECTION --> */}
		<div className="section">
			{/* <!-- container --> */}
			<div className="container">
				{/* <!-- row --> */}
				<div className="row">

					{/* <!-- section title --> */}
					<div className="col-md-12">
						<div className="section-title">
							<h3 className="title">Top selling</h3>
							<div className="section-nav">
								<ul className="section-tab-nav tab-nav">
									<li className="active"><a data-toggle="tab" href="/tab2">Laptops</a></li>
									<li><a data-toggle="tab" href="/tab2">Smartphones</a></li>
									<li><a data-toggle="tab" href="/tab2">Cameras</a></li>
									<li><a data-toggle="tab" href="/tab2">Accessories</a></li>
								</ul>
							</div>
						</div>
					</div>
					{/* <!-- /section title --> */}

					{/* <!-- Products tab & slick --> */}
					<div className="col-md-12">
						<div className="row">
							<div className="products-tabs">
								{/* <!-- tab --> */}
								<div id="tab2" className="tab-pane fade in active">
									<div className="products-slick" data-nav="/slick-nav-2">
										{/* <!-- product --> */}
										<div className="product">
											<div className="product-img">
												<img src="./cssshop/img/product06.png" alt=""/>
												<div className="product-label">
													<span className="sale">-30%</span>
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
										{/* <!-- /product --> */}

										{/* <!-- product --> */}
										<div className="product">
											<div className="product-img">
												<img src="./cssshop/img/product07.png" alt=""/>
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
										{/* <!-- /product --> */}

										{/* <!-- product --> */}
										<div className="product">
											<div className="product-img">
												<img src="./cssshop/img/product08.png" alt=""/>
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
										{/* <!-- /product --> */}

										{/* <!-- product --> */}
										<div className="product">
											<div className="product-img">
												<img src="./cssshop/img/product09.png" alt=""/>
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
										{/* <!-- /product --> */}

										{/* <!-- product --> */}
										<div className="product">
											<div className="product-img">
												<img src="./cssshop/img/product01.png" alt=""/>
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
										{/* <!-- /product --> */}
									</div>
									<div id="slick-nav-2" className="products-slick-nav"></div>
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
		<div className="section">
			{/* <!-- container --> */}
			<div className="container">
				{/* <!-- row --> */}
				<div className="row">
					<div className="col-md-4 col-xs-6">
						<div className="section-title">
							<h4 className="title">Top selling</h4>
							<div className="section-nav">
								<div id="slick-nav-3" className="products-slick-nav"></div>
							</div>
						</div>

						<div className="products-widget-slick" data-nav="/slick-nav-3">
							<div>
								{/* <!-- product widget --> */}
								<div className="product-widget">
									<div className="product-img">
										<img src="./cssshop/img/product07.png" alt=""/>
									</div>
									<div className="product-body">
										<p className="product-category">Category</p>
										<h3 className="product-name"><a href="/">product name goes here</a></h3>
										<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
									</div>
								</div>
								{/* <!-- /product widget --> */}

								{/* <!-- product widget --> */}
								<div className="product-widget">
									<div className="product-img">
										<img src="./cssshop/img/product08.png" alt=""/>
									</div>
									<div className="product-body">
										<p className="product-category">Category</p>
										<h3 className="product-name"><a href="/">product name goes here</a></h3>
										<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
									</div>
								</div>
								{/* <!-- /product widget --> */}

								{/* <!-- product widget --> */}
								<div className="product-widget">
									<div className="product-img">
										<img src="./cssshop/img/product09.png" alt=""/>
									</div>
									<div className="product-body">
										<p className="product-category">Category</p>
										<h3 className="product-name"><a href="/">product name goes here</a></h3>
										<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
									</div>
								</div>
								{/* <!-- product widget --> */}
							</div>

							<div>
								{/* <!-- product widget --> */}
								<div className="product-widget">
									<div className="product-img">
										<img src="./cssshop/img/product01.png" alt=""/>
									</div>
									<div className="product-body">
										<p className="product-category">Category</p>
										<h3 className="product-name"><a href="/">product name goes here</a></h3>
										<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
									</div>
								</div>
								{/* <!-- /product widget --> */}

								{/* <!-- product widget --> */}
								<div className="product-widget">
									<div className="product-img">
										<img src="./cssshop/img/product02.png" alt=""/>
									</div>
									<div className="product-body">
										<p className="product-category">Category</p>
										<h3 className="product-name"><a href="/">product name goes here</a></h3>
										<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
									</div>
								</div>
								{/* <!-- /product widget --> */}

								{/* <!-- product widget --> */}
								<div className="product-widget">
									<div className="product-img">
										<img src="./cssshop/img/product03.png" alt=""/>
									</div>
									<div className="product-body">
										<p className="product-category">Category</p>
										<h3 className="product-name"><a href="/">product name goes here</a></h3>
										<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
									</div>
								</div>
								{/* <!-- product widget --> */}
							</div>
						</div>
					</div>

					<div className="col-md-4 col-xs-6">
						<div className="section-title">
							<h4 className="title">Top selling</h4>
							<div className="section-nav">
								<div id="slick-nav-4" className="products-slick-nav"></div>
							</div>
						</div>

						<div className="products-widget-slick" data-nav="/slick-nav-4">
							<div>
								{/* <!-- product widget --> */}
								<div className="product-widget">
									<div className="product-img">
										<img src="./cssshop/img/product04.png" alt=""/>
									</div>
									<div className="product-body">
										<p className="product-category">Category</p>
										<h3 className="product-name"><a href="/">product name goes here</a></h3>
										<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
									</div>
								</div>
								{/* <!-- /product widget --> */}

								{/* <!-- product widget --> */}
								<div className="product-widget">
									<div className="product-img">
										<img src="./cssshop/img/product05.png" alt=""/>
									</div>
									<div className="product-body">
										<p className="product-category">Category</p>
										<h3 className="product-name"><a href="/">product name goes here</a></h3>
										<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
									</div>
								</div>
								{/* <!-- /product widget --> */}

								{/* <!-- product widget --> */}
								<div className="product-widget">
									<div className="product-img">
										<img src="./cssshop/img/product06.png" alt=""/>
									</div>
									<div className="product-body">
										<p className="product-category">Category</p>
										<h3 className="product-name"><a href="/">product name goes here</a></h3>
										<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
									</div>
								</div>
								{/* <!-- product widget --> */}
							</div>

							<div>
								{/* <!-- product widget --> */}
								<div className="product-widget">
									<div className="product-img">
										<img src="./cssshop/img/product07.png" alt=""/>
									</div>
									<div className="product-body">
										<p className="product-category">Category</p>
										<h3 className="product-name"><a href="/">product name goes here</a></h3>
										<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
									</div>
								</div>
								{/* <!-- /product widget --> */}

								{/* <!-- product widget --> */}
								<div className="product-widget">
									<div className="product-img">
										<img src="./cssshop/img/product08.png" alt=""/>
									</div>
									<div className="product-body">
										<p className="product-category">Category</p>
										<h3 className="product-name"><a href="/">product name goes here</a></h3>
										<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
									</div>
								</div>
								{/* <!-- /product widget --> */}

								{/* <!-- product widget --> */}
								<div className="product-widget">
									<div className="product-img">
										<img src="./cssshop/img/product09.png" alt=""/>
									</div>
									<div className="product-body">
										<p className="product-category">Category</p>
										<h3 className="product-name"><a href="/">product name goes here</a></h3>
										<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
									</div>
								</div>
								{/* <!-- product widget --> */}
							</div>
						</div>
					</div>

					<div className="clearfix visible-sm visible-xs"></div>

					<div className="col-md-4 col-xs-6">
						<div className="section-title">
							<h4 className="title">Top selling</h4>
							<div className="section-nav">
								<div id="slick-nav-5" className="products-slick-nav"></div>
							</div>
						</div>

						<div className="products-widget-slick" data-nav="/slick-nav-5">
							<div>
								{/* <!-- product widget --> */}
								<div className="product-widget">
									<div className="product-img">
										<img src="./cssshop/img/product01.png" alt=""/>
									</div>
									<div className="product-body">
										<p className="product-category">Category</p>
										<h3 className="product-name"><a href="/">product name goes here</a></h3>
										<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
									</div>
								</div>
								{/* <!-- /product widget --> */}

								{/* <!-- product widget --> */}
								<div className="product-widget">
									<div className="product-img">
										<img src="./cssshop/img/product02.png" alt=""/>
									</div>
									<div className="product-body">
										<p className="product-category">Category</p>
										<h3 className="product-name"><a href="/">product name goes here</a></h3>
										<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
									</div>
								</div>
								{/* <!-- /product widget --> */}

								{/* <!-- product widget --> */}
								<div className="product-widget">
									<div className="product-img">
										<img src="./cssshop/img/product03.png" alt=""/>
									</div>
									<div className="product-body">
										<p className="product-category">Category</p>
										<h3 className="product-name"><a href="/">product name goes here</a></h3>
										<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
									</div>
								</div>
								{/* <!-- product widget --> */}
							</div>

							<div>
								{/* <!-- product widget --> */}
								<div className="product-widget">
									<div className="product-img">
										<img src="./cssshop/img/product04.png" alt=""/>
									</div>
									<div className="product-body">
										<p className="product-category">Category</p>
										<h3 className="product-name"><a href="/">product name goes here</a></h3>
										<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
									</div>
								</div>
								{/* <!-- /product widget --> */}

								{/* <!-- product widget --> */}
								<div className="product-widget">
									<div className="product-img">
										<img src="./cssshop/img/product05.png" alt=""/>
									</div>
									<div className="product-body">
										<p className="product-category">Category</p>
										<h3 className="product-name"><a href="/">product name goes here</a></h3>
										<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
									</div>
								</div>
								{/* <!-- /product widget --> */}

								{/* <!-- product widget --> */}
								<div className="product-widget">
									<div className="product-img">
										<img src="./cssshop/img/product06.png" alt=""/>
									</div>
									<div className="product-body">
										<p className="product-category">Category</p>
										<h3 className="product-name"><a href="/">product name goes here</a></h3>
										<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
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





    {/* {this.state.products.map((prodo, i) => {
            
            return (
              <div>

              </div>
            )
          })} */}




          {/* <div> */}
            {/* {this.state.products.map((oneProd, i) => {
              console.log(oneProd.image)
              return (
                <center><span style={{ padding : "10px 20px"}}>
                <div style={{ backgroundColor: "/44014C", width: "300px", minHeight: "200px", color: "white"}} key={i}>
                  <center>
                    <h2 style={{ padding: "10px 20px", textAlign: "center", color: "white"}}>
                      {oneProd.name}
                    </h2>
                    <br></br> */}
                    {/* {oneProd.image}  */}
                    {/* <br></br>
                    {oneProd.price}
                    <br></br>
                    {oneProd.description}

                  </center>
                </div></span></center>

              )



            })} */}
          {/* </div> */}
        
        {/* <Footer /> */}
      </div>
    )
  }
}
export default Shopnew;