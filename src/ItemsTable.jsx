import React, { useState, useEffect } from "react";

import { Box } from "@mui/material";

import { useAppContext } from "./AppContext";
import Remove from "./Components/RemoveIcon";
import { headStyle, rowStyle, iconStyle } from "./helpers/styles";
import subscribeToDB from "./helpers/databaseSubcriber";

const ItemsTable = ({ items, setItems, isPublic }) => {
  const [loadingRemove, setLoadingRemove] = useState(false);
  const { supabase } = useAppContext();

  subscribeToDB(supabase, items, setItems);

  const handleRemove = async (id) => {
    setLoadingRemove(true);
    console.log("removed");
    // await supabase.from("Items").delete().match({ id });
    setLoadingRemove(false);
  };
  return (
    <Box sx={{ maxHeight: "60vh", overflowX: "hidden", overflowY: "auto" }}>
      <table>
        <thead>
          <tr>
            <th style={headStyle}>Name</th>
            <th style={headStyle}>Qty</th>
            {isPublic && <th style={headStyle}></th>}
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td style={rowStyle}>{item.Name}</td>
              <td style={rowStyle}>{item.Qty}</td>
              {isPublic && (
                <td style={rowStyle}>
                  <button
                    style={iconStyle}
                    onClick={() => handleRemove(item.id)}
                  >
                    <Remove loading={loadingRemove} />
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </Box>
  );
};

export default ItemsTable;
