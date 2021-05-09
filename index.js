let form=document.getElementById('contactID')


form.addEventListener('submit',function(e){
    e.preventDefault();

    alert('hi')
 //1
    let mail = new FormData(form);
//2
console.log('hiihih')
    sendMail(mail)

})


async function sendMail(mail){


let res1 = await fetch('https://prasannavenkatesh-portfolio.herokuapp.com/message',{
    method:"post",
    body:mail
})
console.log(res1);
}




