import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { FaUserTimes } from "react-icons/fa";
import EditUser from "../EditUser";

const UserList = () => {
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();

  function deleteUser(index) {
    window.confirm("Tem certeza que deseja excluir este usuário?") &&
      dispatch({
        type: "DELETE_USER",
        index
      });
  }

  return (
    <div className="table-responsive">
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
                  <EditUser index={index} />
                  <button
                    type="button"
                    className="btn btn-danger mt-1 pl-3"
                    title="Excluir usuário"
                    onClick={() => deleteUser(index)}
                  >
                    <FaUserTimes size="20" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
