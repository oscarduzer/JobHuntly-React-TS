import React, { MouseEvent, useState } from "react";
import CurrentUser from "./CurrentUser";
import styles from './UserListTile.module.css';



function UserListTile(){

    const listUser = [{
        id: 1, 
        nom: "Maxime",
        imgUrl:"https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        email: "abc@gmaiil.com",
    },
    {
        id: 2, 
        nom: "Johnny",
        imgUrl:"https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        email: "bcd@gmaiil.com",
    },
    {
        id: 3, 
        nom: "Jennifer",
        imgUrl:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        email: "xyz@gmaiil.com",
    }
]  


    //Gestion des états : useState(valeur, fonction)

    const [selectedIndex, setSelectedIndex] = useState(0);
    // const handleClick = (index) => {
         
    // }

    
    //

    return ( <>
        <ul className="list-group list-group-light">
            {listUser.map((user, index) => (
                <li onClick={() => setSelectedIndex(index)  
                   } key={user.id} className={`list-group-item d-flex justify-content-between align-items-center 
                   ${index === selectedIndex ? 'active' : ''}`}>
                <div className="d-flex align-items-center">
                    <img src={user.imgUrl}
                    className={`rounded-circle   ${styles.userImage}`}  />
            
                <div className="ms-3">
                    <p className="fw-bold mb-1">{user.nom}</p>
                    <p className="text-muted mb-0">{user.email}</p>
                </div>
                </div>
                <span className="badge rounded-pill badge-success">Active</span>
            </li>
            
            )
                
            )}

        
        </ul>
        <>
        <CurrentUser user={listUser[selectedIndex]}/>
        </>
    </>
    );
}

export default UserListTile;

/*
    userListTile : info d'un user
    creer un autre compo : userList > initialiser userListTile
    implimenter click overlay
    image dans assets
*/