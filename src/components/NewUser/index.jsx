import React from "react";
import { useDispatch } from "react-redux";
import { Fragment } from "react";
import { FaUserPlus } from "react-icons/fa";
import { useState } from "react";

const NewUser = () => {
  const [newUser, setNewUser] = useState({
    name: "Jon Doe",
    email: "jon@test.com",
    phone: "(99)9999-9999"
  });
  const dispatch = useDispatch();

  function addUser(user) {
    dispatch({
      type: "ADD_USER",
      user
    });
  }

  return (
    <Fragment>
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Novo usuario
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="modal-body">...</div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Cancelar
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => addUser(newUser)}
              >
                Adicionar usuário
              </button>
            </div>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="btn btn-primary mr-3 mt-1 pl-3"
        title="Adicionar novo usuário"
        data-toggle="modal"
        data-target="#exampleModalCenter"
      >
        <FaUserPlus size="20" />
      </button>
    </Fragment>
  );
};

export default NewUser;
