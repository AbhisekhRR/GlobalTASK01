import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./UsersList.css"; // Import CSS

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const fetchUsers = async (pageNumber) => {
    try {
      const response = await axios.get(`https://reqres.in/api/users?page=${pageNumber}`);
      setUsers(response.data.data);
    } catch (error) {
      console.error("Error fetching users", error);
    }
  };

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`https://reqres.in/api/users/${userId}`);
      setUsers(users.filter((user) => user.id !== userId));
      alert("User deleted successfully!");
    } catch (error) {
      alert("Failed to delete user.");
    }
  };

  useEffect(() => {
    fetchUsers(page);
  }, [page]);

  return (
    <div className="container">
      <h2>User List</h2>
      <div className="user-grid">
        {users.map((user) => (
          <div className="user-card" key={user.id}>
            <img src={user.avatar} alt={user.first_name} className="avatar" />
            <h3>{user.first_name} {user.last_name}</h3>
            <p>{user.email}</p>
            <div className="buttons">
              <button className="edit-btn" onClick={() => navigate(`/edit/${user.id}`)}>Edit</button>
              <button className="delete-btn" onClick={() => handleDelete(user.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button className="page-btn" onClick={() => setPage((prev) => Math.max(prev - 1, 1))}>Previous</button>
        <button className="page-btn" onClick={() => setPage((prev) => prev + 1)}>Next</button>
      </div>
    </div>
  );
};

export default UsersList;
