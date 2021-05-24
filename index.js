// Add your code here
function submitData()
{
const formData={
    name:"Steve",
    email:"steve@steve.com"
};
const configObj={
    method:"POST",
    headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
    },
    body: JSON.stringify(formData)
};
return fetch('http://localhost:3000/users',configObj).
then(resp=>resp.json()).
then(object=> document.body.append(object.id))   
.catch(error=>{
    alert("Bad Thing")
   document.body.append(error.message)})
}