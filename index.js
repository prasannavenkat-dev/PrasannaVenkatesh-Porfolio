let form=document.getElementById('contactID')


form.addEventListener('submit',function(e){
    e.preventDefault();

 //1
    let mail = new FormData(form);
//2

    sendMail(mail)

})


async function sendMail(mail){


let res1 = await fetch('https://prasannavenkatesh-porfolio.herokuapp.com/message',{
    method:"post",
    body:mail
})
console.log(res1)
// let res2 = await res1.json()
// console.log(res2);
    if(res1.status===200){
     location.replace("https://prasannavenkatesh.netlify.app/#success")
    }
    else{
    location.replace("https://prasannavenkatesh.netlify.app/#failure")
    }
}


// const sendMail = (mail) => {
//     //1.
//     fetch("https://prasannavenkatesh-porfolio.herokuapp.com/message", {
//       method: "post", //2.
//       body: mail, //3.
  
//     }).then((response) => {
       
//       return response.json();
//     });
//   };






