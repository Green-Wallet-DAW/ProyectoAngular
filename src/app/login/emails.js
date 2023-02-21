export function callJSFun (email, body) {
  console.log(email+" "+body);
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "greenswallet1@gmail.com",
      Password: "82779E4B35FD8007AE3A2CFA434C7999BD7F",
      To: ""+email+"",
      From: "greenswallet1@gmail.com",
      Subject: "Remember password status",
      Body: "Your new password is:   "+body+
      "<br>Check your profile to change your password.",
    })
    // .then(
    //   message => alert("mail sent successfully"));
  }