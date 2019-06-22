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
        {/* <Header /> */}
        
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