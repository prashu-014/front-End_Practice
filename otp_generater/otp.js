function otpGenerater()
{
    let optshow = document.getElementById("otp");
    let digit = "0123456789";
    let otp = "";

    //generate 4 digit otp

    for(let i =0 ; i< 4;i++)
    {
        otp += digit[Math.floor(Math.random() * 10)];

        optshow.innerHTML = "<span></span>";


        setTimeout( () =>
        {
            optshow.innerHTML = otp;
        },100);

    }
}