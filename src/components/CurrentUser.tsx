import styles from './UserListTile.module.css';
function CurrentUser({ user }: { user: typeof listUser[0] }) {
  return (
    <>
     <h3>Current User Info:</h3>
     <li className="list-group-item d-flex justify-content-between align-items-center ">

        <div className="d-flex align-items-center">
        <img src={user.imgUrl}
            className={`rounded-circle  ${styles.userImage}`}  />
        <div className="ms-3">
            <p className="fw-bold mb-1">{user.nom}</p>
            <p className="text-muted mb-0">{user.email}</p>
        </div>
        </div>

     </li>
         </>
  )
}

export default CurrentUser