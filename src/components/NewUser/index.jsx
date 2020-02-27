import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Fragment } from "react";
import { FaUserPlus } from "react-icons/fa";
import { useState } from "react";

import validateUser from "../../utils/validateUser";

const NewUser = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);
  const [newUser, setNewUser] = useState({});

  function addUser(user) {
    dispatch({
      type: "ADD_USER",
      user
    });
  }

  function handleEditUser(user) {
    validateUser(user, users) && addUser(user);
  }

  return (
    <Fragment>
      <nav className="navbar navbar-light bg-primary ">
        <span className="navbar-brand mb-0 h1 text-white">Usuários</span>
        <div
          className="modal fade"
          id="new-user-modal"
          tabIndex="-1"
          aria-labelledby="new-user-modal-title"
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Novo usuario</h5>
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
                <form>
                  <div className="form-group">
                    <label htmlFor="nome">Nome</label>
                    <input
                      val={newUser.name}
                      onChange={e =>
                        setNewUser({ ...newUser, name: e.target.value })
                      }
                      type="text"
                      className="form-control"
                      id="nome"
                      placeholder="Nome"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      val={newUser.email}
                      onChange={e =>
                        setNewUser({ ...newUser, email: e.target.value })
                      }
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="telefone">Telefone</label>
                    <input
                      val={newUser.phone}
                      onChange={e =>
                        setNewUser({ ...newUser, phone: e.target.value })
                      }
                      type="phone"
                      className="form-control"
                      id="telefone"
                      placeholder="Telefone"
                    />
                  </div>
                </form>
              </div>

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
                  onClick={() => handleEditUser(newUser)}
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
          data-target="#new-user-modal"
        >
          <FaUserPlus size="20" />
        </button>
      </nav>
    </Fragment>
  );
};

export default NewUser;
