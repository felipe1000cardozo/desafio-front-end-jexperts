import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Fragment } from "react";
import { FaUserEdit } from "react-icons/fa";
import { useState } from "react";

import validateUser from "../../utils/validateUser";

const EditUser = ({ index }) => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);
  const [editedUser, setEditedUser] = useState(users[index]);

  const editUser = user => {
    dispatch({
      type: "EDIT_USER",
      index,
      user
    });
  };

  const handleEdit = (e, user) => {
    e.preventDefault();
    validateUser(user, users) && editUser(user);
  };

  return (
    <Fragment>
      <div
        className="modal fade"
        id={`edit-user-modal${index}`}
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Editar: {users[index].name}</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="modal-body">
              <form onSubmit={e => handleEdit(e, editedUser)}>
                <div className="form-group">
                  <label htmlFor="nome">Nome</label>
                  <input
                    val={editedUser.name}
                    onChange={e =>
                      setEditedUser({ ...editedUser, name: e.target.value })
                    }
                    type="text"
                    className="form-control"
                    id="nome"
                    placeholder="Nome"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    val={editedUser.email}
                    onChange={e =>
                      setEditedUser({ ...editedUser, email: e.target.value })
                    }
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="telefone">Telefone</label>
                  <input
                    val={editedUser.phone}
                    onChange={e =>
                      setEditedUser({ ...editedUser, phone: e.target.value })
                    }
                    type="phone"
                    className="form-control"
                    id="telefone"
                    placeholder="Telefone"
                    required
                  />
                </div>
                <div className="form-group d-flex justify-content-end border-top">
                  <button
                    type="button"
                    className="btn btn-secondary mr-2 mt-3"
                    data-dismiss="modal"
                  >
                    Cancelar
                  </button>
                  <button type="submit" className="btn btn-primary mt-3">
                    Editar Usuário
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="btn btn-primary mr-3 mt-1 pl-3"
        title="Editar usuário"
        data-toggle="modal"
        data-target={`#edit-user-modal${index}`}
      >
        <FaUserEdit size="20" />
      </button>
    </Fragment>
  );
};

export default EditUser;
