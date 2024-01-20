import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import { useAppContext } from "./AppContext";
import CustomButton from "./Components/CustomButton";
import Spinner from "./Components/Spinner";

const CreateItems = () => {
  const [loading, setLoading] = useState(false);
  const { user, supabase } = useAppContext();
  const handleCreateItem = async () => {
    if (!user) {
      console.error("Please log in first");
      return;
    }
    const item = {
      Name: faker.commerce.productName(3),
      Qty: Math.floor(Math.random() * 100),
      Owner: user.id,
    };

    setLoading(true);
    await supabase.from("Items").insert([item]);
    setLoading(false);
  };

  return loading ? (
    <Spinner />
  ) : (
    <CustomButton text="Create Item" onClick={handleCreateItem} />
  );
};

export default CreateItems;
