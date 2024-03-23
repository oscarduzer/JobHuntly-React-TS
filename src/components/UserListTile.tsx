import { useState } from "react";
import styles from './UserListTile.module.css';

function UserListTile() {
    const [listUser, setListUser] = useState([
        {
            id: 1,
            nom: "Jack Sparrow",
            imgUrl:"https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
            email: "abc@gmaiil.com",
        },
        {
            id: 2, 
            nom: "Bart Simpsoms",
            imgUrl:"https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
            email: "bcd@gmaiil.com",
        },
        {
            id: 3, 
            nom: "Jennifer Shape",
            imgUrl:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
            email: "xyz@gmaiil.com",
        }
    ]);

    const [selectedItems, setSelectedItems] = useState([]);

    const handleSelect = (index) => {
        if (selectedItems.includes(index)) {
            setSelectedItems(selectedItems.filter(item => item !== index));
        } else {
            setSelectedItems([...selectedItems, index]);
        }
    };

    const handleDeleteSelectedItems = () => {
        const updatedList = listUser.filter((_, index) => !selectedItems.includes(index));
        setListUser(updatedList);
        setSelectedItems([]);
    };

    const handleCancelSelection = () => {
        setSelectedItems([]);
    };

    const handleDoubleClick = (index) => {
        if (selectedItems.includes(index)) {
            setSelectedItems(selectedItems.filter(item => item !== index));
        } else {
            setSelectedItems([...selectedItems, index]);
        }
    };

    return (
        <div className="shadow p-3 mb-5 bg-body rounded">
            <ul className="list-group list-group-light">
                {listUser.map((user, index) => (
                    <li
                        key={user.id}
                        className={`list-group-item d-flex justify-content-between align-items-center ${selectedItems.includes(index) ? 'active' : ''}`}
                        onDoubleClick={() => handleDoubleClick(index)}
                    >
                        <div className="d-flex align-items-center">
                            <img src={user.imgUrl} className={`rounded-circle ${styles.userImage}`} alt={user.nom} />
                            <div className="ms-3">
                                <p className="fw-bold mb-1">{user.nom}</p>
                                <p className="text-muted mb-0">{user.email}</p>
                            </div>
                        </div>
                        {selectedItems.includes(index) && <input type="checkbox" checked readOnly />}
                        <span className="badge rounded-pill badge-success">Active</span>
                    </li>
                ))}
            </ul>
            {selectedItems.length > 0 && (
                <div className="mt-3 d-flex justify-content-between">
                    <button className="btn btn-primary" onClick={handleDeleteSelectedItems}>Supprimer</button>
                    <button className="btn btn-secondary" onClick={handleCancelSelection}>Annuler</button>
                </div>
            )}
        </div>
    );
}

export default UserListTile;