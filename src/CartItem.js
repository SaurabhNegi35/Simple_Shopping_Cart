import React from "react";

class CartItem extends React.Component {
    // constructor (){
    //     super();
    //     this.state = {
    //         price: 999,
    //         title: 'Phone',
    //         qty: 1,
    //         img: ''
    //     }
    //     // this.increaseQuantity = this.increaseQuantity.bind(this);
    //     // this.testing();
    // }

    // testing () {
    //     const promise = new Promise ((resolve, reject) => {
    //         setTimeout(()=> {
    //             resolve('done');
    //         }, 5000);
    //     });

    //     promise.then (()=> {
    //         //setState acts like a synchronous call
    //         this.setState({ qty: this.state.qty + 10});
    //         this.setState({ qty: this.state.qty + 10});
    //         this.setState({ qty: this.state.qty + 10});

    //         console.log('state', this.state);
    //     });
    // }

    increaseQuantity = () => {
        // console.log("this.state", this.state);
        
        // setState Form 1
        // this.setState ({
        //     qty: this.state.qty + 1
        // });

        // setState Form 2 - If PrevState is required like in this case then use this form
        this.setState((prevState) => {
            return {
                qty: prevState.qty + 1
            }
        });
    }

    decreaseQuantity = () => {
        // console.log("this.state", this.state);

        if (this.state.qty !== 1) {
            
            // setState Form 1
            // this.setState ({
            //     qty: this.state.qty - 1
            // });

            // setState Form 2 - If PrevState is required like in this case then use this form
            this.setState((prevState) => {
                return {
                    qty: prevState.qty - 1
                }
            });
        }
    }


    render() {
        // console.log('render');
        // console.log('this.props', this.props);
        const { price, title, qty} = this.props.product;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT07v5MvF0iYVTtaO_VK4y0qYSHf1anXM7pu_lEBByD5h9MLX_-dduM0fuzqZbgP5HoEwU&usqp=CAU" alt=""/>                    
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
                        onClick={this.decreaseQuantity}
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