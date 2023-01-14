import React from "react";
import CartItem from "./CartItem";
import Cart from "./Cart";
import Navbar from "./Navbar";
class App extends React.Component {

  constructor (){
    super();
    this.state = {
    products: [
    {
        price: 199999,
        title: 'Phone',
        qty: 1,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT07v5MvF0iYVTtaO_VK4y0qYSHf1anXM7pu_lEBByD5h9MLX_-dduM0fuzqZbgP5HoEwU&usqp=CAU',
        id: 1
    },
    {
        price: 19999,
        title: 'Watch',
        qty: 1,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR0-53QkWhqVRW2g6lR-KD-0gDZOxJMvTEMxwgmzLz2WpV_9cYzOHgNPG1UJeZ7cflJY4&usqp=CAU',
        id: 2
    },
    {
        price: 99999,
        title: 'Laptop',
        qty: 1,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvyk6GMJ5BiVGHN4z1TJgs5TRYZS-3_MIpxzbnOvNLrGi9zDZpoaKag5CbKu00FrpxQnY&usqp=CAU'
    },
    {
        price: 10999,
        title: 'Airpods Pro',
        qty: 1,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWD65pR3_0_tuAyO2PT6EnpBdAXSoNkXbs5Q&usqp=CAU',
        id: 4
    }
]
    }
    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing();
}

  handleIncreaseQuantity = (product) => {
      console.log('Heyy, Please increase the Quantity of ', product);
      const { products } = this.state;
      const index = products.indexOf(product);

      products[index].qty++;

      this.setState({
          products
      });
  }

  handleDecreaseQuantity = (product) => {
      console.log('Heyy, Please Decrease the Quantity of ', product);
      const { products } = this.state;
      const index = products.indexOf(product);

      if (products[index].qty === 1){
          return;
      }
      
      products[index].qty-= 1;

      this.setState({
          products
      });
  }

  handleDeleteProduct = (id) => {
      const {products} = this.state;
      const items = products.filter((item) => item.id !== id);     //[{}]

      this.setState({
          products: items
      })
  }

  getCartCount = () => {
    const {products} = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    });
    return count;
  }

  getCartTotal = () => {
    const { products } = this.state;

    let cartTotal = 0;

    products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price;  
    });
    return cartTotal;
  }
  
  render() {
    const { products } = this.state;
    return (
      <div className="App">
        {/* <h1>Cart</h1> */}
        <Navbar count={this.getCartCount()}/>
        <Cart
          products ={ products}
          onIncreaseQuantity = {this.handleIncreaseQuantity}
          onDecreaseQuantity = {this.handleDecreaseQuantity}
          onDeleteProduct = {this.handleDeleteProduct}
        />
        <div style={ {padding: 10, fontSize: 20}}>TOTAL : {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
