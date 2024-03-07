
function UserListTile() {
    const usersList = [
        {
            id:1,
            name: "John Doe",
            email: "john@doe.com",
            imgurl: "srcjfdjdv"
        },
        {
            id: 2,
            name: "Sarah",
            email: "sarah@gmail.com",
            imgurl: "srcjfdjdv"
        }
    ]
    const onClickChange = (e) => {
        console.log()
    }
  return (
     <div className="container">
        {usersList.map((element, index)=>{
            return(
                <>
                    <h2 className="fw-bold" key={element.id}>{element.name}</h2><br/>

                </>
            )
        })}
        <button onClick={onClickChange}>Cliquez moi</button>
    </div>
    
  );
}

export default UserListTile;