const useFetchItems = async (client, setItems, setLoading, user) => {
  const url = import.meta.env.VITE_URL;

  setLoading(true);

  if (user) {
    console.log(user);
    const response = await fetch(`${url}/api/v1/items/getItemsByUserId`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        owner: user.id,
      }),
    });
    if (!response.ok) {
      console.error(`Error: ${response.status} - ${response.statusText}`);
    }
    const data = await response.json();
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
  } catch (error) {
    console.error("Error fetching items: ", error);
  }

  setLoading(false);
};

export default useFetchItems;
