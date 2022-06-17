import "./item.css";
const Item = ({ item, setItem, idx }) => {
    function incqty() {
        setItem((pre) => {
            return pre.map((item, j) => {
                return j === idx
                    ? {
                          ...item,
                          qty: item.qty + 1,
                          price: (item.price / item.qty) * (item.qty + 1),
                      }
                    : item;
            });
        });
    }

    function decqty() {
        if (item.qty === 1) return;
        setItem((pre) => {
            return pre.map((item, j) => {
                return j === idx
                    ? {
                          ...item,
                          qty: item.qty - 1,
                          price: (item.price / item.qty) * (item.qty - 1),
                      }
                    : item;
            });
        });
    }
    function delitem() {
        setItem((pre) => pre.filter((obj) => obj.itemid !== item.itemid));
    }
    return (
        <>
            <tr>
                <td>
                    <img src={item.img} alt={item.name} /> {item.name}
                </td>
                <td>
                    <button onClick={decqty}>-</button>
                    {item.qty}
                    <button onClick={incqty}>+</button>
                </td>
                <td>{item.price}</td>
                <td>
                    <img
                        src="https://img.icons8.com/ios-glyphs/30/undefined/filled-trash.png"
                        alt="del"
                        onClick={delitem}
                        style={{ cursor: "pointer" }}
                    />
                </td>
            </tr>
        </>
    );
};
export default Item;
