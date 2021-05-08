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


let res1 = await fetch('http://localhost:3000/message',{
    method:"post",
    body:mail
})
let res2 = await res1.json()
console.log(res2);
return res2
}




