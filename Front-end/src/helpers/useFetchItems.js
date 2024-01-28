const useFetchItems = async (setItems, setLoading) => {
  const url = import.meta.env.VITE_URL;

  setLoading(true);

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
