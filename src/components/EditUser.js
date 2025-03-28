import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditUser = ({ onUserUpdated }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState({ first_name: "", last_name: "", email: "" });

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`https://reqres.in/api/users/${id}`);
                const data = await response.json();
                if (data.data) {
                    setUser(data.data);
                }
            } catch (error) {
                console.error("Error fetching user:", error);
            }
        };
        fetchUser();
    }, [id]);

    const handleUpdate = async () => {
    try {
        const response = await fetch(`https://reqres.in/api/users/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });

        if (response.ok) {
            // ✅ Directly call onUserUpdated without storing unused data
            if (onUserUpdated) {
                onUserUpdated({
                    id,
                    first_name: user.first_name,
                    last_name: user.last_name,
                    email: user.email,
                });
            }

            navigate("/users"); // Redirect back to Users List
        } else {
            console.error("Failed to update user");
        }
    } catch (error) {
        console.error("Error updating user:", error);
    }
};

    return (
        <div className="edit-container">
            <h2>Edit User</h2>
            <input
                type="text"
                placeholder="First Name"
                value={user.first_name}
                onChange={(e) => setUser({ ...user, first_name: e.target.value })}
            />
            <input
                type="text"
                placeholder="Last Name"
                value={user.last_name}
                onChange={(e) => setUser({ ...user, last_name: e.target.value })}
            />
            <input
                type="email"
                placeholder="Email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <button className="save-btn" onClick={handleUpdate}>Save</button>
        </div>
    );
};

export default EditUser;
