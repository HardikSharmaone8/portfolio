window.addEventListener("scroll", () => {
    if (window.pageYOffset > 10) {
        document.querySelector("#navigation").style.backgroundColor = "brown";
        document.querySelector("#navigation").style.opacity = "0.8";
        document.querySelector("#navigation").style.color = "white";
        document.querySelector("#lio").style.color = "white";
    }
    if (window.pageYOffset < 10) {
        document.querySelector("#navigation").style.backgroundColor = "black";
        document.querySelector("#navigation").style.color = "white";
        document.querySelector(".lio").style.color = "brown";
    }
});

document.getElementById("hire").addEventListener("click", () => {
    swal({
        title: "Information",
        text: "Please check my resume and portfolio...",
        icon: "info",
        customClass: "swal-wide",
    });
});

document.getElementById("submit").addEventListener("click", function() {
    val1 = document.querySelector("#contact_input1").value;
    val2 = document.querySelector("#contact_input2").value;
    val3 = document.querySelector("#contact_input3").value;

    if (val1 != "" && val2 != "" && val3 != "") {
        swal({
            title: "Information",
            text: "Message Succesfully Sent",
            icon: "success",
            customClass: "swal-wide",
        });
    }
});

setInterval(function() {
    document.getElementById("pointer").style.visibility = "hidden";
}, 500);
setInterval(function() {
    document.getElementById("pointer").style.visibility = "visible";
}, 1000);

setInterval(function() {
    setTimeout(function() {
        document.getElementById("change_text").innerHTML = "Developer";
    }, 200);
    setTimeout(function() {
        document.getElementById("change_text").innerHTML = "Develope";
    }, 400);
    setTimeout(function() {
        document.getElementById("change_text").innerHTML = "Develop";
    }, 600);

    setTimeout(function() {
        document.getElementById("change_text").innerHTML = "Develo";
    }, 800);
    setTimeout(function() {
        document.getElementById("change_text").innerHTML = "Devel";
    }, 1000);
    setTimeout(function() {
        document.getElementById("change_text").innerHTML = "Deve";
    }, 1200);
    setTimeout(function() {
        document.getElementById("change_text").innerHTML = "Dev";
    }, 1400);
    setTimeout(function() {
        document.getElementById("change_text").innerHTML = "De";
    }, 1600);
    setTimeout(function() {
        document.getElementById("change_text").innerHTML = "D";
    }, 1800);
    setTimeout(function() {
        document.getElementById("change_text").innerHTML = "";
    }, 2000);
    setTimeout(function() {
        document.getElementById("change_text").innerHTML = "D";
    }, 2200);
    setTimeout(function() {
        document.getElementById("change_text").innerHTML = "De";
    }, 2400);
    setTimeout(function() {
        document.getElementById("change_text").innerHTML = "Des";
    }, 2600);

    setTimeout(function() {
        document.getElementById("change_text").innerHTML = "Desi";
    }, 2800);
    setTimeout(function() {
        document.getElementById("change_text").innerHTML = "Desig";
    }, 3000);
    setTimeout(function() {
        document.getElementById("change_text").innerHTML = "Design";
    }, 3200);
    setTimeout(function() {
        document.getElementById("change_text").innerHTML = "Designn";
    }, 3400);
    setTimeout(function() {
        document.getElementById("change_text").innerHTML = "Designne";
    }, 3600);
    setTimeout(function() {
        document.getElementById("change_text").innerHTML = "Designner";
    }, 3800);

    setTimeout(function() {
        document.getElementById("change_text").innerHTML = "Designne";
    }, 4000);
    setTimeout(function() {
        document.getElementById("change_text").innerHTML = "Designn";
    }, 4200);
    setTimeout(function() {
        document.getElementById("change_text").innerHTML = "Design";
    }, 4400);

    setTimeout(function() {
        document.getElementById("change_text").innerHTML = "Desig";
    }, 4600);
    setTimeout(function() {
        document.getElementById("change_text").innerHTML = "Desi";
    }, 4800);
    setTimeout(function() {
        document.getElementById("change_text").innerHTML = "Des";
    }, 5000);
    setTimeout(function() {
        document.getElementById("change_text").innerHTML = "De";
    }, 5200);
    setTimeout(function() {
        document.getElementById("change_text").innerHTML = "D";
    }, 5400);
    setTimeout(function() {
        document.getElementById("change_text").innerHTML = "";
    }, 5600);

    setTimeout(function() {
        document.getElementById("change_text").innerHTML = "D";
    }, 5800);

    setTimeout(function() {
        document.getElementById("change_text").innerHTML = "De";
    }, 6000);
    setTimeout(function() {
        document.getElementById("change_text").innerHTML = "Dev";
    }, 6200);
    setTimeout(function() {
        document.getElementById("change_text").innerHTML = "Deve";
    }, 6400);
    setTimeout(function() {
        document.getElementById("change_text").innerHTML = "Devel";
    }, 6600);
    setTimeout(function() {
        document.getElementById("change_text").innerHTML = "Develo";
    }, 6800);
    setTimeout(function() {
        document.getElementById("change_text").innerHTML = "Develop";
    }, 7000);
    setTimeout(function() {
        document.getElementById("change_text").innerHTML = "Develope";
    }, 7200);
    setTimeout(function() {
        document.getElementById("change_text").innerHTML = "Developer";
    }, 7400);
}, 7400);

// responsive section

function disp() {
    document.querySelector("#bars").addEventListener("click", () => {
        document.querySelector("#sidebar").style.right = 0 + "px";

        document.querySelector(".fa-square-xmark").addEventListener("click", () => {
            document.querySelector("#sidebar").style.right = 1150 + "px";
            disp();
        });
    });
}
disp();

// document.querySelector("#sidebar").children[1].addEventListener("click", () => {
//     document.querySelector("#sidebar").style.right = 500 + "px";
// });