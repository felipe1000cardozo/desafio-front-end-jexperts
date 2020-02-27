import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { FaUserEdit, FaUserTimes } from "react-icons/fa";

const UserList = () => {
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();

  function removeUser(index) {
    dispatch({
      type: "DELETE_USER",
      index
    });
  }

  return (
    <section className="container-fluid">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Email</th>
            <th scope="col">Telefone</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary mr-3 mt-1 pl-3"
                    title="Editar usuário"
                  >
                    <FaUserEdit size="20" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger mt-1 pl-3"
                    title="Excluir usuário"
                    onClick={() => removeUser(index)}
                  >
                    <FaUserTimes size="20" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default UserList;
