import React, { useState, useEffect } from "react";

import { Box } from "@mui/material";

import { headStyle, rowStyle } from "./helpers/styles";
import RemoveButton from "./RemoveButton";

const ItemsTable = ({ itemsState, isPublic }) => {
  const { items } = itemsState;
  return (
    <Box sx={{ maxHeight: "25vh", overflowY: "auto" }}>
      <table>
        <thead>
          <tr>
            <th style={headStyle}>Name</th>
            <th style={headStyle}>Qty</th>
            {!isPublic && <th style={headStyle}></th>}
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td style={rowStyle}>{item.name}</td>
              <td style={rowStyle}>{item.qty}</td>
              <RemoveButton
                isPublic={isPublic}
                item={item}
                itemsState={itemsState}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </Box>
  );
};

export default ItemsTable;
