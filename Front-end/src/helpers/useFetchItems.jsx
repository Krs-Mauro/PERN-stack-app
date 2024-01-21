const useFetchItems = async (client, setItems, setLoading, user) => {
  setLoading(true);
  if (user) {
    const { data } = await client
      .from("Items")
      .select("*")
      .eq("Owner", user.id);

    setItems(data);
    setLoading(false);

    return;
  }

  const { data } = await client.from("Items").select("*");

  setItems(data);
  setLoading(false);
};

export default useFetchItems;
