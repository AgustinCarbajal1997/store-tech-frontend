import React from "react";
import { withRouter, useHistory } from "react-router";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const BreadCrumb = (props) => {
  const history = useHistory();
  const {
    location: { pathname },
    bgColor,
  } = props;
  const pathnames = pathname.split("/").filter((x) => x);
  if (pathnames[pathnames.length - 1].split("-").length > 1) {
    let separateId = pathnames[pathnames.length - 1]
      .split("-")
      .slice(1)
      .join(" ");
    pathnames[pathnames.length - 1] = separateId;
  }
  const onClickHandle = (path) => {
    history.push(path);
  };
  return (
    <div className="breadcrumb-container" style={{ backgroundColor: bgColor }}>
      <div>
        <Link to="/" className="breadcrumb-item">
          Inicio
        </Link>
      </div>

      {pathnames.map((name, index) => {
        const routTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        let isLast = index === pathnames.length - 1;
        return (
          <div key={index}>
            {name === "categoria" ? null : (
              <>
                <IoIosArrowForward color="#d8d8d8" />
                {!isLast ? (
                  <p
                    className="breadcrumb-item"
                    onClick={() => onClickHandle(routTo)}
                    style={{ cursor: "pointer" }}
                  >
                    {name}
                  </p>
                ) : (
                  <p className="breadcrumb-item">{name}</p>
                )}
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default withRouter(BreadCrumb);
