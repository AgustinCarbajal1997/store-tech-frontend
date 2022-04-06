import React from "react";
import { useSelector } from "react-redux";
import UserInfo from "../components/userInfo/UserInfo";
const DataUser = () => {
  const dataUser = useSelector((state) => state.auth.dataUser);
  return (
    <div>
      <h2 className="dashboard-title">
        Estos son tus datos registrados {dataUser.name}
      </h2>
      { dataUser && <UserInfo dataUser={dataUser}/> }
    </div>
  );
};

export default DataUser;
