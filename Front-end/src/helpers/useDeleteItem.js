const useDeleteItems = async (user, itemId, itemsState) => {
  const url = import.meta.env.VITE_URL;

  const { items, SetItems } = itemsState;

  try {
    const response = await fetch(`${url}/api/v1/items/deleteItem`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: itemId, owner: user.id }),
    });
    if (!response.ok) {
      console.error(`Error: ${response.status} - ${response.statusText}`);
    }
    const { message } = await response.json();
    if (message === "Item deleted") {
      SetItems(items.filter((item) => item.id !== itemId));
    }
  } catch (error) {
    console.error("Error fetching user: ", error);
  }
};

export default useDeleteItems;
