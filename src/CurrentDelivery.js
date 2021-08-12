import Order from "./Order";

const CurrentDelivery = () => {
    const orders = [{
        id: 101, 
        customer: {
            name: "Paul Larson", 
            address: "123 Main St", 
            phone: "(425) 132-8711",
            notes: []
        }, 
        tip: undefined
    }]
    return (
        <div className="CurrentDelivery">
            { orders.map((order) =>
                <Order order={order} />
            ) }
        </div>
    );
};
export default CurrentDelivery