const useAddItems = async (item) => {
  const url = import.meta.env.VITE_URL;

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
    /* const data = await response.json();
    console.log(data); */
  } catch (error) {
    console.error("Error fetching user: ", error);
  }
};

export default useAddItems;
