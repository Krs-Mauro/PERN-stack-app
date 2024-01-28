const useLogOutUser = async (user, setUser) => {
  const url = import.meta.env.VITE_URL;

  try {
    const response = await fetch(`${url}/api/v1/users/logUserOut`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: user.id,
      }),
    });
    if (!response.ok) {
      console.error(`Error: ${response.status} - ${response.statusText}`);
    }
    const { message } = await response.json();

    if (message && message === "Logged out") {
      setUser(null);
    }

    setUser(null);
  } catch (error) {
    console.error("Error fetching user: ", error);
  }
};

export default useLogOutUser;
