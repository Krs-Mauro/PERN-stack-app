import React, { useState, useEffect } from "react";

import { Stack } from "@mui/material";

import useFetchItems from "./helpers/useFetchItems";
import { useAppContext } from "./AppContext";
import Spinner from "./Components/Spinner";
import ItemsTable from "./ItemsTable";

const PublicSection = () => {
  const [loading, setLoading] = useState(false);

  const { supabase } = useAppContext();
  const [items, SetItems] = useState([]);
  useEffect(() => {
    useFetchItems(supabase, SetItems, setLoading);
  }, []);

  return (
    <Stack alignItems="center">
      <h1>All Items</h1>
      {loading ? (
        <Spinner />
      ) : (
        <ItemsTable items={items} setItems={SetItems} isPublic />
      )}
    </Stack>
  );
};

export default PublicSection;