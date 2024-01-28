const useLoginUser = async (setUser, formData) => {
  const url = import.meta.env.VITE_URL;

  const { email, password } = formData;

  try {
    const response = await fetch(`${url}/api/v1/users/logUserIn`, {
      method: "PUT",
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
};

export default useLoginUser;
