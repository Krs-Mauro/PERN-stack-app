import React, { useState } from "react";
import Remove from "./Components/RemoveIcon";

const ItemsTable = ({ items, isPublic }) => {
  const [loadingRemove, setLoadingRemove] = useState(false);

  const headStyle = {
    padding: "15px",
    fontSize: "1.5rem",
    textAlign: "center",
  };

  const rowStyle = {
    padding: "15px",
    textAlign: "center",
  };

  const iconStyle = {
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
  };

  const handleRemove = async (id) => {
    setLoadingRemove(true);
    console.log("removed");
    // await supabase.from("Items").delete().match({ id });
    setLoadingRemove(false);
  };
  return (
    <table>
      <tr>
        <th style={headStyle}>Name</th>
        <th style={headStyle}>Qty</th>
        {isPublic && <th style={headStyle}></th>}
      </tr>
      {items.map((item) => (
        <tr key={item.id}>
          <td style={rowStyle}>{item.Name}</td>
          <td style={rowStyle}>{item.Qty}</td>
          {isPublic && (
            <td style={rowStyle}>
              <button style={iconStyle} onClick={() => handleRemove(item.id)}>
                <Remove loading={loadingRemove} />
              </button>
            </td>
          )}
        </tr>
      ))}
    </table>
  );
};

export default ItemsTable;
