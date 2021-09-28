import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../../modules/user/actions";
import "./style.css";

const CardUser = () => {
  const dispatch = useDispatch();
  const [newName, setNewName] = useState("");
  const user = useSelector((state) => state.user);

  const handleClick = () => {
    dispatch(changeName(newName));
    setNewName("");
  };

  return (
    <div className="container_newUser">
      <p>User name: {user.name}</p>
      <div className="container_input">
        <input
          type="text"
          placeholder="New Name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <button onClick={handleClick}>Change</button>
      </div>
    </div>
  );
};
export default CardUser;
