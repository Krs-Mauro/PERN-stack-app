const useAddItems = async (item, itemsState) => {
  const url = import.meta.env.VITE_URL;
  const { items, SetItems } = itemsState;
  try {
    const response = await fetch(`${url}/api/v1/items/addItem`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
    if (!response.ok) {
      console.error(`Error: ${response.status} - ${response.statusText}`);
    }
    const data = await response.json();
    if (data.id) {
      SetItems([...items, data]);
    } else {
      console.error("Error: ", data);
    }
  } catch (error) {
    console.error("Error fetching user: ", error);
  }
};

export default useAddItems;
