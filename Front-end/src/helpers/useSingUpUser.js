const useSingUpUser = async (setUser, setLoading, formData) => {
  const url = import.meta.env.VITE_URL;

  setLoading(true);
  const { email, password } = formData;

  try {
    const response = await fetch(`${url}/api/v1/users/addUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    if (!response.ok) {
      console.error(`Error: ${response.status} - ${response.statusText}`);
    }
    const data = await response.json();
    setUser(data);
  } catch (error) {
    console.error("Error fetching user: ", error);
  }

  setLoading(false);
};

export default useSingUpUser;
