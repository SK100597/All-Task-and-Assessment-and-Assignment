function userfrom()
{
    var n = document.getElementById("name").value;
    var e = document.getElementById("email").value;
    var p = document.getElementById("phone").value;
    var s = document.getElementById("subject").value;
    var m = document.getElementById("message").value;

    var latter = /^[A-Za-z\s]+$/;
    var latter1 = /^[A-Za-z0-9]+$/;
    var email = /^([A-Za-z0-9\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var pno = /^[0-9]{10}$/;
    
    if(n ==""||e ==""||p ==""||s ==""||m =="")
    {
        alert('All Fields are required');
    }  
    else if(!latter.test(n))
    {
        alert('Name is incorrect must contain alphabets only');
    }
    else if(!email.test(e))
    {
        alert('Invalid email id please enter valid email id')
    }
    else if(!pno.test(p))
    {
        alert('Please Enter 10 Digit Mobile Number')
    }
    else if(!latter1.test(s))
    {
        alert('All Fields are required')
    }
    else if(!latter1.test(m))
    {
        alert('All Fields are required')
    }

}