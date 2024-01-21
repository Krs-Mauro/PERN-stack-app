const subscribeToDB = (supabase, items, setItems) => {
  supabase
    .channel("public:Items")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "Items" },
      (payload) => {
        if (payload.eventType === "INSERT") {
          setItems([...items, payload.new]);
        }
        if (payload.eventType === "DELETE") {
          setItems(items.filter((item) => item.id !== payload.old.id));
        }
      }
    )
    .subscribe();
};

export default subscribeToDB;
