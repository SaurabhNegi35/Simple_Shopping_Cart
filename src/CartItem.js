import React from "react";

const CartItem =  (props) => {

        // console.log('render');
        // console.log('this.props', this.props);
        const { price, title, qty} = props.product;
        const {
            product, 
            onIncreaseQuantity, 
            onDecreaseQuantity, 
            onDeleteProduct
        } = props;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} src={product.img} alt=""/>                    
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
                        onClick={() => onIncreaseQuantity(product)}
                    />
                    <img 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/128/992/992683.png" 
                        alt="decrease"
                        onClick={() => onDecreaseQuantity(product)}
                    />
                    <img 
                        className="action-icons"
                        src="https://cdn-icons-png.flaticon.com/128/3405/3405244.png" 
                        alt="delete"
                        onClick={() => onDeleteProduct(product.id)}
            
                    />
                </div>
                </div>
                
            </div>
        );
    
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