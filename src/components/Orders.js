import React, { useState, useEffect } from 'react';
import { db } from "./firebase";
import './Orders.css'
import { useStateValue } from "./StateProvider";
import Order from './Order'
// import { collection, doc, setDoc} from 'firebase/firestore'



function Orders() {
//   const [{ basket, user }, dispatch] = useStateValue();
//   const [orders, setOrders] = useState([]);


//   useEffect(() => {
//     if(user) {
//         db
//         .collection('users', db)
//         .doc(user?.uid)
//         .collection('orders', db)
//         .orderBy('created', 'desc')
//         .onSnapshot(snapshot => (
//             setOrders(snapshot.docs.map(doc => ({
//                 id: doc.id,
//                 data: doc.data()
//             })))
//         ))
//     } else {
//         setOrders([])
//     }
//   }, [user])

    return (
        <div className='orders'>
            <h1>Your Orders</h1>
            <h2>Oops! You don't have any orders!</h2>
            <h2>Thank you! Happy Shopping!</h2>
            {/* <div className='orders__order'>
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div> */}
        </div>
    )
}

export default Orders