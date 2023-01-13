import React from "react";

class CartItem extends React.Component {
    constructor (){
        super();
        this.state = {
            price: 999,
            title: 'Phone',
            qty: 1,
            img: ''
        }
        // this.increaseQuantity = this.increaseQuantity.bind(this);
    }
    increaseQuantity = () => {
        console.log("this.state", this.state);
    }


    render() {
        const { price, title, qty} = this.state;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} src="" alt=""/>                    
                </div>
                <div className="right-block">
                    <div style={{ fontSize: 25}}>{title}</div>
                    <div style={{ color: '#777'}}>Rs: {price}</div>
                    <div style={{ color: '#777'}}>Qty: {qty}</div>
                
                <div className="cart-item-actions">
                    {/* {Buttons} */}
                    <img 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/128/992/992651.png" 
                        alt="increase"
                        onClick={this.increaseQuantity}
                    />
                    <img 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/128/992/992683.png" 
                        alt="decrease"
                        // onClick=
                    />
                    <img 
                        className="action-icons"
                        src="https://cdn-icons-png.flaticon.com/128/3405/3405244.png" 
                        alt="delete"
                        // onClick=
                    />
                </div>
                </div>
                
            </div>
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        backgroundColor: '#777'
    }
}

export default CartItem;