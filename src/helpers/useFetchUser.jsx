import { useEffect } from "react";

const useFetchUser = (client, setUser) => {
  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await client.auth.getUser();
      if (user) {
        setUser(user);
      }
    };
    fetchUser();
  }, []);
};
export default useFetchUser;
