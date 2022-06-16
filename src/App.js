import React, { useState } from "react";
import Item from "./components/item";
import data from "./data";
import "./App.css";
import Total from "./components/Total";
function App() {
    const [items, setItems] = useState(
        data.map((item) => {
            return { ...item, qty: 1, iniprice: item.price };
        })
    );
    return (
        <>
            <table>
                <tr>
                    <th>items</th>
                    <th>qty</th>
                    <th>price</th>
                </tr>
                {items.map((item, key) => (
                    <Item item={item} setItem={setItems} idx={key} key={key} />
                ))}
            </table>
            <Total items={items} />
        </>
    );
}

export default App;
