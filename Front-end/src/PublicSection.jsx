import React, { useState, useEffect } from "react";

import { Stack } from "@mui/material";

import useFetchItems from "./helpers/useFetchItems";
import { useAppContext } from "./AppContext";
import Spinner from "./Components/Spinner";
import ItemsTable from "./ItemsTable";

const PublicSection = () => {
  const [loading, setLoading] = useState(false);
  const [items, SetItems] = useState([]);

  useEffect(() => {
    useFetchItems(SetItems, setLoading);
  }, []);

  return (
    <Stack alignItems="center">
      <h1>All Items</h1>
      {loading ? (
        <Spinner />
      ) : (
        <ItemsTable itemsState={{ items, SetItems }} isPublic />
      )}
    </Stack>
  );
};

export default PublicSection;
