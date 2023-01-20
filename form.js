function SendMail(){
    
    var params={
        from_name : document.getElementById("fname").value,
        email_id :document.getElementById("email").value,
        number : document.getElementById("number").value,
        message : document.getElementById("Description").value
    };
    emailjs.send("service_lrun8kd" , "template_wu1xg48" , params).then(function (res){
        alert("Your Mail Has Been Sent !");
    })
    
}

