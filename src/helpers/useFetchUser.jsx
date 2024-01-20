const useFetchUser = async (client, setUser) => {
  const {
    data: { user },
  } = await client.auth.getUser();
  if (user) {
    setUser(user);
  }
};
export default useFetchUser;
