import React, { useEffect, useState } from "react";
import { Stack } from "@mui/material";
import { useAppContext } from "./AppContext";
import LogOutButton from "./LogOutButton";
import CreateItemsButton from "./CreateItemsButton";
import ItemsTable from "./ItemsTable";
import useFetchItems from "./helpers/useFetchItems";
import Spinner from "./Components/Spinner";

const UserArea = ({ setStage }) => {
  const [loading, setLoading] = useState(false);
  const [items, SetItems] = useState([]);
  const { user, supabase } = useAppContext();

  useEffect(() => {
    useFetchItems(supabase, SetItems, setLoading);
  }, []);

  return (
    <Stack alignItems="center">
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap="30px"
      >
        <h1>{`Welcome ${user.email}`}</h1>
        <LogOutButton setStage={setStage} />
      </Stack>
      <CreateItemsButton />
      {loading ? (
        <Spinner />
      ) : (
        <ItemsTable items={items} setItems={SetItems} isPublic={false} />
      )}
    </Stack>
  );
};

export default UserArea;
