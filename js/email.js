function sendEmail(){
    var temParams = {
        from_name : document.getElementById('title').value,
        to_name : document.getElementById("firstName").value,
        message : document.getElementById("message").value,
    }

    emailjs.send('service_ie4waud', 'template_nl6km1d',temParams)
    .then(function(res){
        console.log("success" , res.status)
    })
}