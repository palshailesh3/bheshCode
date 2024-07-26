

export default function sumbmit(){ 
    let mail=document.getElementById("email.id").value;
   // let mail=$("#email.id").val();
   
   var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
   
   if(mail.match(validRegex)&&mail!=""){
   
    const url = 'https://marketo-gpt-5d979-default-rtdb.firebaseio.com/test.json';

    const data = {
                   email: mail
                  };
                

          
fetch(url, {
method: 'POST',
body: JSON.stringify(data),
headers: {
    'Content-Type': 'application/json'
}
})  
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.json();
})
.then(data => {
console.log('Success:', data);
// Handle successful response here
})
.catch(error => {
// console.error('Error:', error);
// Handle error here
// alert("please check yoyr internet connection.!");
document.getElementById('alert').innerHTML="please check yoyr internet connection.!";
document.getElementById('alert').style.display="block";
});

                  
            }
        

}  

