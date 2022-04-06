import React from "react";

const UserInfo = ({ dataUser }) => {
  return (
    <div className="userinfo-table">
      <div>
        <h3>
          Nombre: <span>{dataUser.name}</span>
        </h3>
      </div>
      <div>
        <h3>
          Apellido: <span>{dataUser.lastname}</span>
        </h3>
      </div>
      <div>
        <h3>
          Mail: <span>{dataUser.mail}</span>
        </h3>
      </div>
      <div>
        <h3>
          Domicilio: <span>{dataUser.address}</span>
        </h3>
        <div className="button-edit-userinfo"></div>
      </div>
      <div>
        <h3>
          Celular: <span>{dataUser.cellphone}</span>
        </h3>
        <div className="button-edit-userinfo"></div>
      </div>
    </div>
  );
};

export default UserInfo;
