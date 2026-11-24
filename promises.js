const foodOrder=new Promise((resolve, reject) => {
    let foodReady = false;
    if (foodReady) {
        resolve("Food is ready");
    } else {
        reject("Food not ready");
    }
});
foodOrder
    .then((result)=>console.log(result))//it works if uccess
    .catch((error)=>console.log(error));//failed


const getUsers=async()=>{
    console.log("Fetching users...");
    const response=await fetch('https://jsonplaceholder.typicode.com/users');
    const data=await response.json();
    console.log(data);
}
