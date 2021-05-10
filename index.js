let form=document.getElementById('contactID')


form.addEventListener('submit',function(e){
    e.preventDefault();

 //1
    let mail = new FormData(form);
//2

    sendMail(mail)

})


// async function sendMail(mail){


// let res1 = await fetch('http://localhost:5000/message',{
//     method:"post",
//     body:mail
// })
// let res2 = await res1.text()
// console.log(res2);
// return res2
// }


const sendMail = (mail) => {
    //1.
    fetch("https://prasannavenkatesh-porfolio.herokuapp.com/message", {
      method: "post", //2.
      body: mail, //3.
  
    }).then((response) => {
       
      return response.json();
    });
  };






