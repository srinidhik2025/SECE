const getUsers=async()=>{
    console.log("Fetching users...");
    const response=await fetch('https://jsonplaceholder.typicode.com/users');
    const data=await response.json();
    const emails=data.map((n)=>n.email);
    console.log(data);
}
getUsers();