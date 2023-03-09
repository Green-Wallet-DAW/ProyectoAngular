export function callJSFun (email, name, code) {
  console.log(email+" "+name+" "+code);
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "greenswallet1@gmail.com",
      Password: "82779E4B35FD8007AE3A2CFA434C7999BD7F",
      To: ""+email+"",
      From: "greenswallet1@gmail.com",
      Subject: "Green Wallet registration confirmation",
      Body: "Welcome "+name+" to the Green Wallet Project!<br>"+
      "Here is your code you must submit in the post-form to confirm your registration: <br>"+
      code,
    });
    //   .then(function (message) {
    //     alert("mail sent successfully")
    //   });
  }