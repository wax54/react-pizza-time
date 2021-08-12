const Order = ({ order: { id, customer, tip } }) => {
    return (
        <div className="Order"> 
            <span> Order #{ id } for {customer.name} </span>
            <input>{tip} </input>
        </div>
    )
};
export default Order