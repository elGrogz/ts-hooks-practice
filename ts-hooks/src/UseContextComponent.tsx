import { useContext, useState } from "react";
import UserContext, { UserState } from "./store";

function ConsumerComponent() {
  const user = useContext(UserContext);

  return (
    <div>
      <div>Firstname: {user.firstName}</div>
      <div>Firstname: {user.lastName}</div>
    </div>
  );
}

function UseContextComponent() {
  const [user, setUser] = useState<UserState>({
    firstName: "jane",
    lastName: "smith ",
  });

  return (
    <UserContext.Provider value={user}>
      <ConsumerComponent />
      <button
        onClick={() => {
          setUser({
            firstName: "gregor",
            lastName: "gilchrist",
          });
        }}
      >
        Change name
      </button>
    </UserContext.Provider>
  );
}

export default UseContextComponent;
