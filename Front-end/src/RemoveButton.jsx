import React, { useState } from "react";
import { useAppContext } from "./AppContext";
import Remove from "./Components/RemoveIcon";
import { rowStyle, iconStyle } from "./helpers/styles";
import useDeleteItems from "./helpers/useDeleteItem";

const RemoveButton = ({ isPublic, item, itemsState }) => {
  const [loadingRemove, setLoadingRemove] = useState(false);
  const { user } = useAppContext();

  const handleRemove = async (id) => {
    setLoadingRemove(true);
    await useDeleteItems(user, id, itemsState);
    setLoadingRemove(false);
  };

  return !isPublic ? (
    <td style={rowStyle}>
      <button style={iconStyle} onClick={() => handleRemove(item.id)}>
        <Remove loading={loadingRemove} />
      </button>
    </td>
  ) : (
    <></>
  );
};

export default RemoveButton;
