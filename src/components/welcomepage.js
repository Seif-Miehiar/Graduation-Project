import React from 'react';
import Header from "./header";
import Footer from "./footer";
// import axios from 'axios';
import unirest from "unirest";



//  import ReactDom from "react-dom";
//  import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
//  import "../../public/css"


class Welcomepage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      news: [],
      newsData: "",
      results: []

    }
  }
  componentDidMount() {
    this.getNewsApi();
  }

  getNewsApi() {
    let that = this;

    unirest.get("https:chicken-coop.p.rapidapi.com/games/pc?platform=pc")
      .header("X-RapidAPI-Host", "chicken-coop.p.rapidapi.com")
      .header("X-RapidAPI-Key", "01047828a3mshc8075394564882dp1b2a5djsn3adb1a57e2a4")
      .end(function (result) {
        // console.log(result)
        // const data = result.body.results;
        // that.state.results.push(data)
        // console.log(that.state.results)
        // console.log(that.state.results);

      });
  }
  // render() {
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
    return (
      <div>
        {/* <Header /> */}

        <div className="banner">
          <div className="container">

            <div className="banner-info">
              <h3 id="ppp">Welcome to our Website & Shop</h3>
              <h2 id="ppp">iPlay</h2>
            </div>
            <div className="social">
              <ul>
                <li><a href="https:www.facebook.com/iPlayJor/?modal=admin_todo_tour"><span className="fa"> </span></a></li>
                <li><a href="/"><span className="tw"> </span></a></li>
                <li><a href="iPlay@gmail.com"><span className="g"> </span></a></li>
                <li><a href="/"><span className="in"> </span></a></li>
              </ul>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>
        <div className="welcome">
          <div className="container">
            <div className="welcome-info">
              <h3 id="ppp">Welcome</h3>
              <h4 id="ppp">To Our World Wide Online Shop & Games News.</h4>
              <p>Here, We deliver the best gaming experience in Jordan & Globally for all the gamers aroung the world from gaming news to gift cards and PC Games, ALL YOU NEED IN ONE PLACE! </p>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="container">
            <div className="col-md-8 content-left">
              <div className="information">
                <h4 id="ppp">Information</h4>
                <div className="information_grids">
                  <div className="info">
                    <p>" Etiam ante arcu, vestibulum diam. Curabitur quis lectus. Pellentesque dictum odio velit.</p>
                    <a href="about.html">Read more</a>
                  </div>
                  <div className="info-pic">
                    <img src="images/ps.png" className="img-responsive" alt="" />
                  </div>
                  <div className="clearfix"></div>
                </div>
              </div>
              <div className="games-grids">
                <div className="game-grid-left">
                  <div className="grid1">
                    <h5 id="ppp" className="act"><a href="single.html">Action</a></h5>
                    <a href="single.html"><img src="images/c1.jpg" className="img-responsive" alt="" /></a>
                    <div className="grid1-info">
                      <h4 id="ppp"><a href="single.html">Watch Dogs</a></h4>
                      <p>Integer ut leo vitae nibh cursus aliquetr Sed, condimentum bibendum nibh accumsan vel.</p>
                    </div>
                    <div className="more">
                      <a href="single.html">Read more</a>
                    </div>
                  </div>
                  <div className="grid2">
                    <h5 id="ppp" className="race"><a href="single.html">Racing</a></h5>
                    <a href="single.html"><img src="images/c2.jpg" className="img-responsive" alt="" /></a>
                    <div className="grid1-info">
                      <h4 id="ppp"><a href="single.html">Monster Racing</a></h4>
                      <p>Integer ut leo vitae nibh cursus aliquetr Sed, condimentum bibendum nibh accumsan vel.</p>
                    </div>
                    <div className="more">
                      <a href="single.html">Read more</a>
                    </div>
                  </div>
                </div>

                <div className="game-grid-right">
                  <div className="grid3">
                    <h5 id="ppp" className="sport"><a href="single.html">Sports</a></h5>
                    <a href="single.html"><img src="images/c3.jpg" className="img-responsive" alt="" /></a>
                    <div className="grid1-info">
                      <h4 id="ppp"><a href="single.html">FIFA 2015</a></h4>
                      <p>Integer ut leo vitae nibh cursus aliquetr Sed, condimentum bibendum nibh accumsan vel.</p>
                    </div>
                    <div className="more">
                      <a href="single.html">Read more</a>
                    </div>
                  </div>
                  <div className="grid4">
                    <h5 id="ppp" className="arc"><a href="single.html">Arcade</a></h5>
                    <a href="single.html"><img src="images/c4.jpg" className="img-responsive" alt="" /></a>
                    <div className="grid1-info">
                      <h4 id="ppp"><a href="single.html">Skylanders</a></h4>
                      <p>Integer ut leo vitae nibh cursus aliquetr Sed, condimentum bibendum nibh accumsan vel.</p>
                    </div>
                    <div className="more">
                      <a href="single.html">Read more</a>
                    </div>
                  </div>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
            <div className="col-md-4 content-right">
              {/* <!-- Nav tabs --> */}
              <ul className="nav nav-tabs nav2" role="tablist">
                <li role="presentation" className="active"><a href="/home" aria-controls="home" role="tab" data-toggle="tab">Trending</a></li>
                <li role="presentation" ><a href="/profile" aria-controls="profile" role="tab" data-toggle="tab">Recent Posts</a></li>
              </ul>
              {/* <!-- Tab panes --> */}
              <div>
                <div className="tab-content">
                  <div role="tabpanel" className="tab-pane active re-pad2" id="home">
                    {this.state.results.map((game, i) => {
                      console.log("HIIIIIIIIIIII")
                      console.log(game, i)

                      return (
                        <div className="game1">
                          <div className="col-md-3 tab-pic">
                            <a href="single.html"><img src={game.image} alt="/" className="img-responsive" /></a>
                          </div>
                          <div className="col-md-9 tab-pic-info">
                            <h4 id="ppp"><a href="single.html"> {game.title} </a></h4>
                            <p> {game.description} </p>
                          </div>
                          <div className="clearfix"></div>
                        </div>
                      )
                    } 
                    )}
                  </div>
                </div>
                <div className="game1">
                  <div className="col-md-3 tab-pic">
                    <a href="single.html"><img src="images/tr2.jpg" alt="/" className="img-responsive" /></a>
                  </div>
                  <div className="col-md-9 tab-pic-info">
                    <h4 id="ppp"><a href="single.html">Call Of Duty</a></h4>
                    <p>Lorem Ipsum is simply dummy text of the printing industry.</p>
                  </div>
                  <div className="clearfix"></div>
                </div>
              </div>
              <div role="tabpanel" className="tab-pane re-pad2" id="profile">
                <div className="game-post">
                  <div className="col-md-3 tab-pic">
                    <a href="single.html"><img src="images/tr4.jpg" alt="/" className="img-responsive" /></a>
                  </div>
                  <div className="col-md-9 tab-post-info">
                    <h4 id="ppp"><a href="single.html">IronMan</a></h4>
                    <p>Posted By <a href="/">Admin</a> &nbsp;&nbsp; on June 2, 2015 &nbsp;&nbsp; <a href="/">Comments (10)</a></p>
                  </div>
                  <div className="clearfix"></div>
                </div>
                <div className="game-post">
                  <div className="col-md-3 tab-pic">
                    <a href="single.html"><img src="images/tr5.jpg" alt="/" className="img-responsive" /></a>
                  </div>
                  <div className="col-md-9 tab-post-info">
                    <h4 id="ppp"><a href="single.html">God Of War</a></h4>
                    <p>Posted By <a href="/">Admin</a> &nbsp;&nbsp; on June 2, 2015 &nbsp;&nbsp; <a href="/">Comments (10)</a></p>
                  </div>
                  <div className="clearfix"></div>
                </div>
                <div className="game-post">
                  <div className="col-md-3 tab-pic">
                    <a href="single.html"><img src="images/tr6.jpg" alt="/" className="img-responsive" /></a>
                  </div>
                  <div className="col-md-9 tab-post-info">
                    <h4><a href="single.html">Need For Speed</a></h4>
                    <p>Posted By <a href="/">Admin</a> &nbsp;&nbsp; on June 2, 2015 &nbsp;&nbsp; <a href="/">Comments (10)</a></p>
                  </div>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div> */}
							{/* <!----> */}
            <div className="category blog-ctgry">
              <h4 id="ppp">Top Games</h4>
              <div className="list-group">
                <a href="/" className="list-group-item">Cras justo odio</a>
                <a href="/" className="list-group-item">Dapibus ac facilisis in</a>
                <a href="/" className="list-group-item">Morbi leo risus</a>
                <a href="/" className="list-group-item">Porta ac consectetur ac</a>
                <a href="/" className="list-group-item">Vestibulum at eros</a>
                <a href="/" className="list-group-item">Quisque elementum </a>
                <a href="/" className="list-group-item">Vestibulum eleifend</a>
                <a href="/" className="list-group-item">Donec sit amet justo </a>
              </div>
            </div>
            <div className="photo-gallery">
              <h4 id="ppp">Photo Gallery</h4>
              <div className="gallery-1">
                <div className="col-md-4 gallery-grid-pic">
                  <a className="example-image-link" href="images/p2.jpg" data-lightbox="example-set"><img className="example-image" src="images/p2.jpg" alt="" /></a>
                </div>
                <div className="col-md-4 gallery-grid-pic">
                  <a className="example-image-link" href="images/p1.jpg" data-lightbox="example-set"><img className="example-image" src="images/p1.jpg" alt="" /></a>
                </div>
                <div className="col-md-4 gallery-grid-pic">
                  <a className="example-image-link" href="images/p3.jpg" data-lightbox="example-set"><img className="example-image" src="images/p3.jpg" alt="" /></a>
                </div>
                <div className="clearfix"></div>
              </div>
              <div className="gallery-1">
                <div className="col-md-4 gallery-grid-pic">
                  <a className="example-image-link" href="images/p4.jpg" data-lightbox="example-set"><img className="example-image" src="images/p4.jpg" alt="" /></a>
                </div>
                <div className="col-md-4 gallery-grid-pic">
                  <a className="example-image-link" href="images/p5.jpg" data-lightbox="example-set"><img className="example-image" src="images/p5.jpg" alt="" /></a>
                </div>
                <div className="col-md-4 gallery-grid-pic">
                  <a className="example-image-link" href="images/p6.jpg" data-lightbox="example-set"><img className="example-image" src="images/p6.jpg" alt="" /></a>
                </div>
                <div className="clearfix"></div>
              </div>
              <div className="gallery-1">
                <div className="col-md-4 gallery-grid-pic">
                  <a className="example-image-link" href="images/p1.jpg" data-lightbox="example-set"><img className="example-image" src="images/p1.jpg" alt="" /></a>
                </div>
                <div className="col-md-4 gallery-grid-pic">
                  <a className="example-image-link" href="images/p3.jpg" data-lightbox="example-set"><img className="example-image" src="images/p3.jpg" alt="" /></a>
                </div>
                <div className="col-md-4 gallery-grid-pic">
                  <a className="example-image-link" href="images/p4.jpg" data-lightbox="example-set"><img className="example-image" src="images/p4.jpg" alt="" /></a>
                </div>
                <div className="clearfix"></div>
              </div>

            </div>

          </div>
          <div className="clearfix"></div>
        </div>
        {/* <Footer /> */}
      </div>
    )
  }
}
// {/* <script src="../web/js/lightbox-plus-jquery.min.js"></script> */}

export default Welcomepage;