import React from 'react';

class Cardlist extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cards : [],
      roleName : "Steam"

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

    render(){
      let that = this
      return  (
        <div>
        {this.state.cards.map((c, i) => {

          if(c.role === that.state.roleName ) {

          return (
            <div key={i} className="col-md-4 col-xs-6">
						<div className="shop">
							<div className="shop-img">
								<img src={c.image} alt=""/>
							</div>
							<div className="shop-body">
								<h3>Laptop<br/>Collection</h3>
								<a href="/" className="cta-btn">Shop now <i className="fa fa-arrow-circle-right"></i></a>
							</div>
						</div>
					</div>
          )
          }

        })
        }
        {/* <div> */}
           
          {/* <br></br>
          <h3> {c.name} </h3>
          <br></br>
          <br></br>
          {c.price}
          <br></br>
          {c.description} */} 
        {/* </div> */}
        
        
    </div>
    )
  }
}

export default Cardlist;

