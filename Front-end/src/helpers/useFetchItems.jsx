const useFetchItems = async (client, setItems, setLoading, user) => {
  const url = import.meta.env.VITE_URL;

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

  try {
    const response = await fetch(`${url}/api/v1/items/getItems`);
    if (!response.ok) {
      console.error(`Error: ${response.status} - ${response.statusText}`);
    }
    const data = await response.json();
    setItems(data);

    console.log(data);
  } catch (error) {
    console.error("Error fetching items: ", error);
  }

  setLoading(false);
};

export default useFetchItems;
