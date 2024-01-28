import React, { useState } from "react";

import { faker } from "@faker-js/faker";

import { useAppContext } from "./AppContext";
import useAddItems from "./helpers/useAddItems";
import CustomButton from "./Components/CustomButton";
import Spinner from "./Components/Spinner";

const CreateItemsButton = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useAppContext();
  const handleCreateItem = async () => {
    if (!user) {
      console.error("Please log in first");
      return;
    }
    const item = {
      name: faker.commerce.productName(3),
      qty: Math.floor(Math.random() * 100),
      owner: user.id,
    };

    setLoading(true);
    await useAddItems(item);
    setLoading(false);
  };

  return loading ? (
    <Spinner />
  ) : (
    <CustomButton text="Create Item" onClick={handleCreateItem} />
  );
};

export default CreateItemsButton;
