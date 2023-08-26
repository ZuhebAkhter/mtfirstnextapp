'use client'


const pageno = ({params}) => {
  
    // const pageNum=router.query.pageno;
    const details = [{id:'1',name:'zuheb',role:'senior dev'},{id:'2',name:'akhter',role:'junior'}]
    const id=params.pageno;

    const user = details.find((user) => user.id === id);
    console.log(user)

  return (
    <>
    <h1>This is checj in about :{id}  </h1>
    {user ? (
        <div>
          <h1>User Details</h1>
          <p>ID: {user.id}</p>
          <p>Name: {user.name}</p>
          <p>Role: {user.role}</p>
        </div>
      ) : (
        <p>User not found.</p>
      )}
    </>
  )
}

export default pageno