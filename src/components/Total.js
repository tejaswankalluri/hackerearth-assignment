import React, { useState } from "react";
import { useEffect } from "react";
const Total = ({ items }) => {
    const [discount, setdiscount] = useState(0);
    const [price, setprice] = useState(0);
    const [total, settotal] = useState(0);

    useEffect(() => {
        function dis() {
            const totaldis = items.reduce((tot, item) => {
                return tot + item.discount * item.qty;
            }, 0);
            const price = items.reduce((tot, item) => {
                return tot + item.price;
            }, 0);
            settotal(price - totaldis);
            setdiscount(totaldis);
            setprice(price);
        }
        dis();
    }, [items]);
    return (
        <>
            <h2>Your total bill</h2>
            <p>price : {price}</p>
            <p>discount : {discount}</p>

            <h3>total bill : {total}</h3>
        </>
    );
};

export default Total;
