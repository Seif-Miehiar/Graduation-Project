import React from 'react';
import Header from "./header";
// import { Carts } from '../../database/database-models';
    
export default class ProductItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        items : [],
        total: 0
    }
  }

  handleInputChange = event => 
      this.setState({[event.target.name]: event.target.value})

  addToCart = () => {
    let cart = localStorage.getItem('cart')  
                  ? JSON.parse(localStorage.getItem('cart')) : {};
                  console.log(cart)
    let id = this.props.product.id.toString();
    cart[id] = (cart[id] ? cart[id]: 0);
    let qty = cart[id] + parseInt(this.state.quantity);
    if (this.props.product.available_quantity < qty) {
      cart[id] = this.props.product.available_quantity; 
    } else {
      cart[id] = qty
    } 
    localStorage.setItem('cart', JSON.stringify(cart));
  }
//   componentDidMount() {
//     let cart = localStorage.getItem('cart');
//     if (!cart) return; 
//     getCartProducts(cart).then((products) => {
//       let total = 0;
//       for (var i = 0; i < products.length; i++) {
//         total += products[i].price * products[i].qty;
//       }
//       this.setState({ items, total });
//       });
//   }

  removeFromCart = (product) => {
    let items = this.state.items.filter((item) => item.id !== items.id);
    let cart = JSON.parse(localStorage.getItem('cart'));
    delete cart[product.id.toString()];
    localStorage.setItem('cart', JSON.stringify(cart));
    let total = this.state.total - (items.qty * items.price) 
    this.setState({items, total});
  }

  clearCart = () => {
    localStorage.removeItem('cart');
    this.setState({products: []});
  }
    componentWillMount() {
    this.getInfo();
}

getInfo() {
    fetch('http://localhost:8080/render-cart?userEmail=' + localStorage.getItem("userEmail"))
        .then(response => response.json())
        .then(item => {
            console.log(item)
            this.setState({ items: item })
        }
        );

}
 
  render() {
    const { products, total } =  this.state;
    return (
      <div className=" container">
      <Header />
      Hello Cart

        {this.state.items.map((item, i) => {
          return (
            <div><center>
            <img name="itemImage" value={item.itemImage} src={item.itemImage} alt="" />
              
              <br></br>
              {item.itemName}
              <br></br>
                {item.price}$
              <br></br>

              </center>
            </div>
          )
        })}

        {/* <h3 className="card-title">Cart</h3><hr
        {
          Carts.map((product, index) => 
            <CartItem product={product} remove={this.removeFromCart} key={index}/>)
        } <hr/>
        { products.length ? 
          <div><h4>
            <small>Total Amount: </small>
            <span className="float-right text-primary">${total}</span>
          </h4><hr/></div>: ''}
        { !products.length ?<h3 className="text-warning">No item on the cart</h3>: ''}
        <Link to="/checkout">
            <button className="btn btn-success float-right">Checkout</button></Link>
        <button className="btn btn-danger float-right" onClick={this.clearCart} 
            style={{ marginRight: "10px" }}>Clear Cart</button><br/><br/><br/> */}
      </div>
    );
  }
}

//   componentWillMount() {
//     this.getInfo();
// }

// getInfo() {
//     fetch('http://localhost:8080/render-cart')
//         .then(response => response.json())
//         .then(item => {
//             console.log(item)
//             this.setState({ items: item })
//         }
//         );

// }


//   render(){
//     // const { product } = this.props;
//     return (
//     //  <div className="card" style={{ marginBottom: "10px"}}>
//     //    <div className="card-body">
    
//     <div>
//     <Header />
//      CART
//        {this.state.items.map((c, i) => {
//            return (

//            <div>
//             {c.image}
//             <br></br>
//             {c.name}
//             <br></br>
//             {c.price} $
//            </div>
//            )
//        })}
//          {/* <h4 className="card-title">{product.name}</h4>
//          <p className="card-text">{product.description}</p>
//          <h5 className="card-text"><small>price: </small>${product.price}</h5>
//          <span className="card-text">
//            <small>Available Quantity: </small>{product.available_quantity}
//          </span>
//          { product.available_quantity > 0 ? */}
//           {/* <div>
//              <button className="btn btn-sm btn-warning float-right" 
//                 onClick={this.addToCart}>Add to cart</button>
//              <input type="number" value={this.state.quantity} name="quantity" 
//                 onChange={this.handleInputChange} className="float-right" 
//                 style={{ width: "60px", marginRight: "10px", borderRadius: "3px"}}/>
//           </div> : 
//           <p className="text-danger"> product is out of stock </p>
        
//       </div>
//     </div> */}
//     </div>
//    )
//  }
// }






// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import { connect } from "react-redux;"
// // import cartReducer from './components/reducers/cartReducer';

// const mapStateToProps = (state)=>{
//     return {
//         items: state.items
//          }
//     }
    
// // const store = createStore(cartReducer);
// class Shoppingcart extends React.Component {

// }
// export default connect(mapStateToProps)(Shoppingcart)

