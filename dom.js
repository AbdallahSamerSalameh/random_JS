///////////////////AI AI AI AI AI AI AI AI AI AI AI /////////////////////////////
///////////////////AI AI AI AI AI AI AI AI AI AI AI /////////////////////////////
///////////////////AI AI AI AI AI AI AI AI AI AI AI /////////////////////////////
///////////////////AI AI AI AI AI AI AI AI AI AI AI /////////////////////////////
// filepath: /c:/Users/Abdal/OneDrive/Desktop/Tasks of Orange Coding Academy/random_JS/script.js
// document.addEventListener("DOMContentLoaded", function() {
//     const formContainer = document.getElementById('form-container');
//     const usernameLabel = document.createElement('label');
//     usernameLabel.setAttribute('for', 'username');
//     usernameLabel.textContent = 'Username:';
//     formContainer.insertBefore(usernameLabel, formContainer.firstChild);
//     const passwordLabel = document.createElement('label');
//     passwordLabel.setAttribute('for', 'password');
//     passwordLabel.textContent = 'Password:';
//     formContainer.insertBefore(passwordLabel, document.getElementById('password'));
//     const confirmPasswordLabel = document.createElement('label');
//     confirmPasswordLabel.setAttribute('for', 'confirm-password');
//     confirmPasswordLabel.textContent = 'Confirm Password:';
//     formContainer.insertBefore(confirmPasswordLabel, document.getElementById('confirm-password'));
// });

// document.addEventListener("DOMContentLoaded", function() {
//     const form = document.getElementById("form");
//     const dform = document.getElementById("form-container");
//     const iname = document.getElementById("username");
//     const ipass = document.getElementById("password");
//     const iconpass = document.getElementById("confirm-password");
//     const lname = document.getElementById("name");
//     const lpass = document.getElementById("pass");
//     const lconpass = document.getElementById("conpass");
//     const lshow = document.getElementById("labelbtn");
//     const sbtn = document.getElementById("btn");
//     const nwarning = document.createElement("span");
//     const pwarning = document.createElement("span");
//     const cpwarning = document.createElement("span");
//     const warning = document.createElement("span");
//     const swarningn = document.createElement("span");
//     const swarning1 = document.createElement("span");
//     const swarning2 = document.createElement("span");

//     const validateUsername = () => {
//         if (iname.value.trim() === "" && document.getElementById("nwarning") === null) {
//             nwarning.setAttribute("id", "nwarning");
//             nwarning.innerHTML = " This field is required";
//             nwarning.style.color = "red";
//             iname.insertAdjacentElement("afterend", nwarning);
//         } else if (iname.value.trim() !== "" && document.getElementById("nwarning") !== null) {
//             document.getElementById("nwarning").remove();
//         }

//         if (iname.value[0] === " " && document.getElementById("swarningn") === null) {
//             swarningn.setAttribute("id", "swarningn");
//             swarningn.innerHTML = " name can't start with a space";
//             swarningn.style.color = "red";
//             iname.insertAdjacentElement("afterend", swarningn);
//         } else if (iname.value[0] !== " " && document.getElementById("swarningn") !== null) {
//             document.getElementById("swarningn").remove();
//         }
//     };

//     const validatePassword = () => {
//         if (ipass.value.trim() === "" && document.getElementById("pwarning") === null) {
//             pwarning.setAttribute("id", "pwarning");
//             pwarning.innerHTML = " This field is required";
//             pwarning.style.color = "red";
//             ipass.insertAdjacentElement("afterend", pwarning);
//         } else if (ipass.value.trim() !== "" && document.getElementById("pwarning") !== null) {
//             document.getElementById("pwarning").remove();
//         }

//         if (ipass.value.indexOf(" ") !== -1 && document.getElementById("swarning1") === null) {
//             swarning1.setAttribute("id", "swarning1");
//             swarning1.innerHTML = " password can't contain spaces";
//             swarning1.style.color = "red";
//             ipass.insertAdjacentElement("afterend", swarning1);
//         } else if (ipass.value.indexOf(" ") === -1 && document.getElementById("swarning1") !== null) {
//             document.getElementById("swarning1").remove();
//         }
//     };

//     const validateConfirmPassword = () => {
//         if (iconpass.value.trim() === "" && document.getElementById("cpwarning") === null) {
//             cpwarning.setAttribute("id", "cpwarning");
//             cpwarning.innerHTML = " This field is required";
//             cpwarning.style.color = "red";
//             iconpass.insertAdjacentElement("afterend", cpwarning);
//         } else if (iconpass.value.trim() !== "" && document.getElementById("cpwarning") !== null) {
//             document.getElementById("cpwarning").remove();
//         }

//         if (iconpass.value.indexOf(" ") !== -1 && document.getElementById("swarning2") === null) {
//             swarning2.setAttribute("id", "swarning2");
//             swarning2.innerHTML = " password can't contain spaces";
//             swarning2.style.color = "red";
//             iconpass.insertAdjacentElement("afterend", swarning2);
//         } else if (iconpass.value.indexOf(" ") === -1 && document.getElementById("swarning2") !== null) {
//             document.getElementById("swarning2").remove();
//         }
//     };

//     const validatePasswordMatch = () => {
//         if (ipass.value !== iconpass.value && document.getElementById("warning") === null) {
//             warning.setAttribute("id", "warning");
//             warning.innerHTML = "Your password in both the password and confirm password fields should be the same";
//             warning.style.color = "red";
//             dform.insertAdjacentElement("afterend", warning);
//         } else if (ipass.value === iconpass.value && document.getElementById("warning") !== null) {
//             document.getElementById("warning").remove();
//         }
//     };

//     iname.addEventListener("input", validateUsername);
//     ipass.addEventListener("input", validatePassword);
//     iconpass.addEventListener("input", validateConfirmPassword);
//     iconpass.addEventListener("input", validatePasswordMatch);
//     ipass.addEventListener("input", validatePasswordMatch);

//     sbtn.addEventListener("click", function(event) {
//         event.preventDefault(); // Prevent form submission for validation
//         validateUsername();
//         validatePassword();
//         validateConfirmPassword();
//         validatePasswordMatch();
//     });

//     lshow.addEventListener("click", function() {
//         if (document.getElementById("name") === null) {
//             const label = document.createElement("label");
//             label.setAttribute("id", "name");
//             label.setAttribute("for", "username");
//             label.innerHTML = "Please Enter Your Name:";
//             document.getElementById("form-container").insertBefore(label, document.getElementById("username"));
//             document.getElementById("form-container").insertBefore(document.createElement("br"), document.getElementById("username"));
//             document.getElementById("form-container").insertBefore(document.createElement("br"), password);
//             document.getElementById("form-container").insertBefore(document.createElement("br"), password);
//         }
//         if (document.getElementById("pass") === null) {
//             const pass = document.createElement("label");
//             pass.setAttribute("id", "pass");
//             pass.setAttribute("for", "password");
//             pass.innerHTML = "Please enter your password:";
//             const password = document.getElementById("password");
//             document.getElementById("form-container").insertBefore(pass, password);
//             document.getElementById("form-container").insertBefore(document.createElement("br"), password);
//             document.getElementById("form-container").insertBefore(document.createElement("br"), document.getElementById("confirm-password"));
//             document.getElementById("form-container").insertBefore(document.createElement("br"), document.getElementById("confirm-password"));
//         }
//         if (document.getElementById("conpass") === null) {
//             const pass = document.createElement("label");
//             pass.setAttribute("id", "conpass");
//             pass.setAttribute("for", "confirm-password");
//             pass.innerHTML = "Please confirm your password:";
//             const conpassword = document.getElementById("confirm-password");
//             document.getElementById("form-container").insertBefore(pass, conpassword);
//             document.getElementById("form-container").insertBefore(document.createElement("br"), conpassword);
//         }
//     });
// });
///////////////////AI AI AI AI AI AI AI AI AI AI AI /////////////////////////////
///////////////////AI AI AI AI AI AI AI AI AI AI AI /////////////////////////////
///////////////////AI AI AI AI AI AI AI AI AI AI AI /////////////////////////////
///////////////////AI AI AI AI AI AI AI AI AI AI AI /////////////////////////////


/////////////////// Old Mistakes Old Mistakes Old Mistakes //////////////////////
/////////////////// Old Mistakes Old Mistakes Old Mistakes //////////////////////
/////////////////// Old Mistakes Old Mistakes Old Mistakes //////////////////////
/////////////////// Old Mistakes Old Mistakes Old Mistakes //////////////////////
// sbtn.addEventListener("click" , function(){
//     if (iname.value.trim() == "" && document.getElementById("nwarning") == null){
//         nwarning.setAttribute("id","nwarning")
//         nwarning.innerHTML = " This field is required";
//         nwarning.style.color = "red";
//         iname.insertAdjacentElement("afterend",nwarning);
//     } 
//     if (iname.value.trim() != "" && document.getElementById("nwarning") != null){
//         document.getElementById("nwarning").remove();
//     }
//     if (ipass.value == "" && document.getElementById("pwarning") == null){
//         pwarning.setAttribute("id","pwarning")
//         pwarning.innerHTML = " This field is required";
//         pwarning.style.color = "red";
//         ipass.insertAdjacentElement("afterend",pwarning);
//     } 
//     if (ipass.value != "" && document.getElementById("pwarning") != null){
//         document.getElementById("pwarning").remove();
//     }
//     if (iconpass.value == "" && document.getElementById("cpwarning") == null){
//         cpwarning.setAttribute("id","cpwarning")
//         cpwarning.innerHTML = " This field is required";
//         cpwarning.style.color = "red";
//         iconpass.insertAdjacentElement("afterend",cpwarning);
//     } 
//     if (iconpass.value != "" && document.getElementById("cpwarning") != null){
//         document.getElementById("cpwarning").remove();
//     }
//     if (ipass.value !=  iconpass.value  && document.getElementById("warning") == null){
//         warning.setAttribute("id","warning")
//         warning.innerHTML = "Your password in both the password and confirm password fields should be the same";
//         warning.style.color = "red";
//         dform.insertAdjacentElement("afterend",warning);
//     }
//     if (ipass.value ==  iconpass.value && document.getElementById("warning") != null){
//         document.getElementById("warning").remove();
//     }
// });

/////////////////// Old Mistakes Old Mistakes Old Mistakes //////////////////////
/////////////////// Old Mistakes Old Mistakes Old Mistakes //////////////////////
/////////////////// Old Mistakes Old Mistakes Old Mistakes //////////////////////
/////////////////// Old Mistakes Old Mistakes Old Mistakes //////////////////////




document.getElementById("labelbtn").addEventListener("click", function(){
    if (document.getElementById("name") == null){
        const label =document.createElement("label");
        label.setAttribute("id", "name");
        label.setAttribute("for","username");
        label.innerHTML="Please Enter Your Name:";
        document.getElementById("form-container").insertBefore(label, document.getElementById("username"));
        document.getElementById("form-container").insertBefore(document.createElement("br"), document.getElementById("username"));
        document.getElementById("form-container").insertBefore(document.createElement("br"), password);
        document.getElementById("form-container").insertBefore(document.createElement("br"), password);
    }
    if (document.getElementById("pass") == null){
        const pass = document.createElement("label");
        pass.setAttribute("id","pass");
        pass.setAttribute("for","password");
        pass.innerHTML="Please enter your password:";
        const password=document.getElementById("password");
        document.getElementById("form-container").insertBefore(pass, password);
        document.getElementById("form-container").insertBefore(document.createElement("br"), password);
        document.getElementById("form-container").insertBefore(document.createElement("br"), document.getElementById("confirm-password"));
        document.getElementById("form-container").insertBefore(document.createElement("br"), document.getElementById("confirm-password"));
    }
    if (document.getElementById("conpass") == null){
        const pass = document.createElement("label");
        pass.setAttribute("id","conpass");
        pass.setAttribute("for","confirm-password");
        pass.innerHTML="Please confirm your password:";
        const conpassword=document.getElementById("confirm-password");
        document.getElementById("form-container").insertBefore(pass, conpassword);
        document.getElementById("form-container").insertBefore(document.createElement("br"), conpassword);
    }
});

const form = document.getElementById("form");
const dform = document.getElementById("form-container");
const iname = document.getElementById("username");
const ipass = document.getElementById("password");
const iconpass = document.getElementById("confirm-password");
const lname = document.getElementById("name");
const lpass = document.getElementById("pass");
const lconpass = document.getElementById("conpass");
const text = document.getElementById("message");
const sbtn = document.getElementById("btn");
const lshow = document.getElementById("labelbtn");

const nwarning = document.createElement("span");
const pwarning = document.createElement("span");
const cpwarning = document.createElement("span");
const warning = document.createElement("span");
const swarningn = document.createElement("span");
const swarning1 = document.createElement("span");
const swarning2 = document.createElement("span");
const nlen = document.createElement("span");
const passlen = document.createElement("span");
const conpasslen = document.createElement("span");
const passstrong = document.createElement("span");
const conpassstrong = document.createElement("span");

document.addEventListener("DOMContentLoaded" , function(){
    const namecheck = () => {
        if (iname.value.trim() == "" && document.getElementById("nwarning") == null){
            nwarning.setAttribute("id","nwarning")
            nwarning.innerHTML = "**This field is required**";
            nwarning.style.color = "red";
            iname.insertAdjacentElement("afterend",nwarning);
        } 
        if (iname.value.trim() != "" && document.getElementById("nwarning") != null){
            document.getElementById("nwarning").remove();
        }

        if (iname.value[0] == " " && document.getElementById("swarningn") == null){
            swarningn.setAttribute("id","swarningn")
            swarningn.innerHTML = "**name can't start with a space**";
            swarningn.style.color = "red";
            iname.insertAdjacentElement("afterend",swarningn);
        }
        if (iname.value[0]!=" " && document.getElementById("swarningn") != null){
            document.getElementById("swarningn").remove();
        }

        if (iname.value.length >=16 && document.getElementById("nlen") == null){
            nlen.setAttribute("id","nlen")
            nlen.innerHTML = "**name can't be longer than 15 characters**";
            nlen.style.color = "red";
            iname.insertAdjacentElement("afterend",nlen);
        }
        if (iname.value.length <15 && document.getElementById("nlen") != null){
            document.getElementById("nlen").remove();
        }
        if (iname.value.split.length>8){
            iname.style.backgroundColor="yellow";
        } else{
            iname.style.backgroundColor="";
        }
        //AI AI AI AI AI AI AI AI AI
        ablebtn();
        //AI AI AI AI AI AI AI AI AI
    }


    const passcheck = () => {
        if (ipass.value == "" && document.getElementById("pwarning") == null){
            pwarning.setAttribute("id","pwarning")
            pwarning.innerHTML = "**This field is required**";
            pwarning.style.color = "red";
            ipass.insertAdjacentElement("afterend",pwarning);
        } 
        if (ipass.value != "" && document.getElementById("pwarning") != null){
            document.getElementById("pwarning").remove();
        }

        if (ipass.value.indexOf(" ")!= -1 && document.getElementById("swarning1") == null){
            swarning1.setAttribute("id","swarning1")
            swarning1.innerHTML = "**password can't contain spaces**";
            swarning1.style.color = "red";
            ipass.insertAdjacentElement("afterend",swarning1);
        }
        if (ipass.value.indexOf(" ")== -1 && document.getElementById("swarning1") != null){
            document.getElementById("swarning1").remove();
        }   
        //AI AI AI AI AI AI AI AI AI
        ablebtn();
        //AI AI AI AI AI AI AI AI AI
    }
    const passcheck2 = () => {
        if (ipass.value.length <8 && document.getElementById("passlen") == null){
            passlen.setAttribute("id","passlen")
            passlen.innerHTML = "**password can't be shorter than 8 characters**";
            passlen.style.color = "red";
            ipass.insertAdjacentElement("afterend",passlen);
        }
        if (ipass.value.length >=8 && document.getElementById("passlen") != null){
            document.getElementById("passlen").remove();
        }
    
        //////////AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI //////////
        //////////AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI //////////
        //////////AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI //////////
        if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(ipass.value) && document.getElementById("passstrong") == null) {
            passstrong.setAttribute("id", "passstrong");
            passstrong.innerHTML = "**password must contain at least one uppercase letter, one lowercase letter, one number, and one symbol**";
            passstrong.style.color = "red";
            ipass.insertAdjacentElement("afterend", passstrong);
        } else if (/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(ipass.value) && document.getElementById("passstrong") != null) {
            document.getElementById("passstrong").remove();
        }
        //////////AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI //////////
        //////////AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI //////////
        //////////AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI //////////
        //AI AI AI AI AI AI AI AI AI
        ablebtn();
        //AI AI AI AI AI AI AI AI AI
    }

    
    const conpasscheck =() => {
        if (iconpass.value == "" && document.getElementById("cpwarning") == null){
            cpwarning.setAttribute("id","cpwarning")
            cpwarning.innerHTML = "**This field is required**";
            cpwarning.style.color = "red";
            iconpass.insertAdjacentElement("afterend",cpwarning);
        } 
        if (iconpass.value != "" && document.getElementById("cpwarning") != null){
            document.getElementById("cpwarning").remove();
        }

        if (iconpass.value.indexOf(" ")!= -1 && document.getElementById("swarning2") == null){
            swarning2.setAttribute("id","swarning2")
            swarning2.innerHTML = "**password can't contain spaces**";
            swarning2.style.color = "red";
            iconpass.insertAdjacentElement("afterend",swarning2);
        }
        if (iconpass.value.indexOf(" ")== -1 && document.getElementById("swarning2") != null){
            document.getElementById("swarning2").remove();
        }
        //AI AI AI AI AI AI AI AI AI
        ablebtn();
        //AI AI AI AI AI AI AI AI AI
    }
    const conpasscheck2 = () => {
        if (iconpass.value.length <8 && document.getElementById("conpasslen") == null){
            conpasslen.setAttribute("id","conpasslen")
            conpasslen.innerHTML = "**password can't be shorter than 8 characters**";
            conpasslen.style.color = "red";
            iconpass.insertAdjacentElement("afterend",conpasslen);
        }
        if (iconpass.value.length >=8 && document.getElementById("conpasslen") != null){
            document.getElementById("conpasslen").remove();
        }

        //////////AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI //////////
        //////////AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI //////////
        //////////AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI //////////
        if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(iconpass.value) && document.getElementById("conpassstrong") == null) {
            conpassstrong.setAttribute("id", "conpassstrong");
            conpassstrong.innerHTML = "**password must contain at least one uppercase letter, one lowercase letter, one number, and one symbol**";
            conpassstrong.style.color = "red";
            iconpass.insertAdjacentElement("afterend", conpassstrong);
        } else if (/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(iconpass.value) && document.getElementById("conpassstrong") != null) {
            document.getElementById("conpassstrong").remove();
        }
        //////////AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI //////////
        //////////AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI //////////
        //////////AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI AI //////////
        //AI AI AI AI AI AI AI AI AI
        ablebtn();
        //AI AI AI AI AI AI AI AI AI
    }


    const matchcheck = () => {
        if (ipass.value !=  iconpass.value  && document.getElementById("warning") == null){
            warning.setAttribute("id","warning")
            warning.innerHTML = "Your password in both the password and confirm password fields should be the same**";
            warning.style.color = "red";
            dform.insertAdjacentElement("afterend",warning);
        }
        if (ipass.value ==  iconpass.value  && document.getElementById("warning") != null){
            document.getElementById("warning").remove();
        }
        //AI AI AI AI AI AI AI AI AI
        ablebtn();
        //AI AI AI AI AI AI AI AI AI
    } 


    const ablebtn = () => {
        if (iname.value.trim() != "" && document.getElementById("nwarning") == null &&
        iname.value[0]!=" " && document.getElementById("swarningn") == null &&
        iname.value.length <15 && document.getElementById("nlen") == null &&
        ipass.value != "" && document.getElementById("pwarning") == null &&
        ipass.value.indexOf(" ")== -1 && document.getElementById("swarning1") == null &&
        ipass.value.length >=8 && document.getElementById("passlen") == null &&
        /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(ipass.value) && document.getElementById("passstrong") == null &&
        iconpass.value != "" && document.getElementById("cpwarning") == null &&
        iconpass.value.indexOf(" ")== -1 && document.getElementById("swarning2") == null &&
        iconpass.value.length >=8 && document.getElementById("conpasslen") == null &&
        /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(iconpass.value) && document.getElementById("conpassstrong") == null &&
        ipass.value ==  iconpass.value  && document.getElementById("warning") == null)
        {
            sbtn.disabled = false;
            sbtn.addEventListener("click", function(){
                alert("Register Submitted Successfully");
                window.location.href ="dom.html";
            })
        } else {
            sbtn.disabled = true;
        }
    }


    // const texteffect = () => {
    //     var words = text.value.split();
    //     var count = words.length;
    //     for (var word in words){
    //         if (words[word].length > 8){
    //             words[word].style.backgroundColor="red";
    //             words = words + words[word];
    //         }
    //     }
    //     text.value = words.join();
    //     text.insertAdjacentElement("afterend",count);
    // }


    namecheck();
    passcheck();
    conpasscheck();
    matchcheck();
    texteffect();


    iname.addEventListener("input",namecheck);
    ipass.addEventListener("input",passcheck);
    ipass.addEventListener("input",passcheck2);
    ipass.addEventListener("input",matchcheck);
    iconpass.addEventListener("input",conpasscheck);
    iconpass.addEventListener("input",conpasscheck2);
    iconpass.addEventListener("input",matchcheck);
    text.addEventListener("input",texteffect);



});


