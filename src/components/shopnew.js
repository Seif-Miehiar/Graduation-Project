import React from "react";
import Header from "./header";
import Footer from "./footer";

class Shopnew extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []


    }
  }
  componentWillMount() {
    this.getInfo();
  }

  getInfo() {
    fetch('http://localhost:8080/getProducts')
      .then(response => response.json())
      .then(product => {
        this.setState({ products: product })
        console.log(product)
      }
      );
    // event.preventDefault();
    // fetch('http://localhost:8080/getproducts', {
    //   method: 'GET',
    //   headers: { "Content-Type": "application/json" }
    // }).then(response => response.json())
    //   .then(newData => {
    //     console.log(newData)
    //     this.setState({ products: newData })
    //   });

  }


  render() {

    return (
      <div>
        <Header />

        {/* <!-- SECTION --> */}
		<div className="section">
			{/* <!-- container --> */}
			<div className="container">
				{/* <!-- row --> */}
				<div className="row">
					{/* <!-- shop --> */}
          {/* {this.state.products.map((oneProd, i) */}
        
					<div className="col-md-4 col-xs-6">
						<div className="shop">
							<div className="shop-img">
								<img src={"./cssshop/img/shop01.png"} alt=""/>
							</div>
							<div className="shop-body">
								<h3>Laptop<br/>Collection</h3>
								<a href="/" className="cta-btn">Shop now <i className="fa fa-arrow-circle-right"></i></a>
							</div>
						</div>
					</div>
					{/* <!-- /shop --> */}

					{/* <!-- shop --> */}
					<div className="col-md-4 col-xs-6">
						<div className="shop">
							<div className="shop-img">
								<img src="./cssshop/img/shop03.png" alt=""/>
							</div>
							<div className="shop-body">
								<h3>Accessories<br/>Collection</h3>
								<a href="/" className="cta-btn">Shop now <i className="fa fa-arrow-circle-right"></i></a>
							</div>
						</div>
					</div>
					{/* <!-- /shop --> */}

					{/* <!-- shop --> */}
					<div className="col-md-4 col-xs-6">
						<div className="shop">
							<div className="shop-img">
								<img src="./cssshop/img/shop02.png" alt=""/>
							</div>
							<div className="shop-body">
								<h3>Cameras<br/>Collection</h3>
								<a href="/" className="cta-btn">Shop now <i className="fa fa-arrow-circle-right"></i></a>
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
		<div class="section">
			{/* <!-- container --> */}
			<div class="container">
				{/* <!-- row --> */}
				<div class="row">

					{/* <!-- section title --> */}
					<div class="col-md-12">
						<div class="section-title">
							<h3 class="title">New Products</h3>
							<div class="section-nav">
								<ul class="section-tab-nav tab-nav">
									<li class="active"><a data-toggle="tab" href="#tab1">Laptops</a></li>
									<li><a data-toggle="tab" href="#tab1">Smartphones</a></li>
									<li><a data-toggle="tab" href="#tab1">Cameras</a></li>
									<li><a data-toggle="tab" href="#tab1">Accessories</a></li>
								</ul>
							</div>
						</div>
					</div>
					{/* <!-- /section title --> */}

					{/* <!-- Products tab & slick --> */}
					<div class="col-md-12">
						<div class="row">
							<div class="products-tabs">
								{/* <!-- tab --> */}
								<div id="tab1" class="tab-pane active">
									<div class="products-slick" data-nav="#slick-nav-1">
										{/* <!-- product --> */}
										<div class="product">
											<div class="product-img">
												<img src="./cssshop/img/product01.png" alt=""/>
												<div class="product-label">
													<span class="sale">-30%</span>
													<span class="new">NEW</span>
												</div>
											</div>
											<div class="product-body">
												<p class="product-category">Category</p>
												<h3 class="product-name"><a href="/">product name goes here</a></h3>
												<h4 class="product-price">$980.00 <del class="product-old-price">$990.00</del></h4>
												<div class="product-rating">
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
												</div>
												<div class="product-btns">
													<button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span class="tooltipp">add to wishlist</span></button>
													<button class="add-to-compare"><i class="fa fa-exchange"></i><span class="tooltipp">add to compare</span></button>
													<button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">quick view</span></button>
												</div>
											</div>
											<div class="add-to-cart">
												<button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> add to cart</button>
											</div>
                      </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div></div>
                    </div>
                    </div>
										{/* <!-- /product --> */}





    {this.state.products.map((prodo, i) => {
            
            return (
              <div>

              </div>
            )
          })}




          <div>
            {this.state.products.map((oneProd, i) => {
              console.log(oneProd.image)
              return (
                <center><span style={{ padding : "10px 20px"}}>
                <div style={{ backgroundColor: "#44014C", width: "300px", minHeight: "200px", color: "white"}} key={i}>
                  <center>
                    <h2 style={{ padding: "10px 20px", textAlign: "center", color: "white"}}>
                      {oneProd.name}
                    </h2>
                    <br></br>
                    {/* {oneProd.image}  */}
                    <br></br>
                    {oneProd.price}
                    <br></br>
                    {oneProd.description}

                  </center>
                </div></span></center>

              )



            })}
          </div>
        
        {/* <Footer /> */}
      </div>
    )
  }
}
export default Shopnew;