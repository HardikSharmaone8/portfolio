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

// For Preloader

function mypreloader() {
    document.getElementById("preloader").style.display = "none";
}

function pre() {
    setTimeout(function() {
        document.getElementById("pre_container").style.transform = "rotate(600deg)";
    }, 1000);

    function show() {
        setTimeout(function() {
            setTimeout(function() {
                document.getElementById("sub_pre_container1").style.marginTop = "0px";
            }, 500);
            setTimeout(function() {
                document.getElementById("sub_pre_container1").style.marginTop = "10px";
                document.getElementById("sub_pre_container1").style.marginLeft = "-5px";
            }, 1000);

            setTimeout(function() {
                document.getElementById("yellow").style.marginLeft = "0px";
                document.getElementById("red").style.marginLeft = "0px";
            }, 500);

            setTimeout(function() {
                document.getElementById("yellow").style.marginTop = "-5px";
                document.getElementById("yellow").style.marginLeft = "-5px";
                document.getElementById("red").style.marginLeft = "18px";
                document.getElementById("red").style.marginTop = "-20px";
            }, 1000);

            // document.getElementById("yellow").style.transform = "rotate(120deg)"
        }, 1000);
    }
    show();

    setTimeout(function() {
        document.getElementById("green").style.marginTop = "-10px";
        document.getElementById("green").style.height = "30px";
        document.getElementById("yellow").style.width = "30px";
        document.getElementById("red").style.height = "30px";
        document.getElementById("blue").style.width = "30px";
        //    document.getElementById("sub_pre_container1").style.marginTop = "-5px"
    }, 2000);

    setTimeout(function() {
        document.getElementById("sub_pre_container1").style.marginTop = "15px";
        document.getElementById("sub_pre_container1").style.marginLeft = "0px";
        document.getElementById("green").style.marginTop = "0px";
        document.getElementById("yellow").style.marginLeft = "15px";
        document.getElementById("red").style.marginTop = "0px";

        document.getElementById("green").style.height = "5px";
        document.getElementById("yellow").style.width = "5px";
        document.getElementById("red").style.height = "5px";
        document.getElementById("blue").style.width = "5px";
        //    document.getElementById("sub_pre_container1").style.marginTop = "-5px"
    }, 3000);

    setTimeout(function() {
        document.getElementById("pre_container").style.transform =
            "rotate(1200deg)";
        show();
    }, 4000);

    setTimeout(function() {
        document.getElementById("sub_pre_container1").style.marginTop = "10px";
        document.getElementById("sub_pre_container1").style.marginLeft = "-5px";
        document.getElementById("green").style.marginTop = "-10px";
        document.getElementById("yellow").style.marginLeft = "-5px";
        document.getElementById("red").style.marginTop = "-23px";

        document.getElementById("green").style.height = "30px";
        document.getElementById("yellow").style.width = "30px";
        document.getElementById("red").style.height = "30px";
        document.getElementById("blue").style.width = "30px";
        //    document.getElementById("sub_pre_container1").style.marginTop = "-5px"
    }, 6000);
}
pre();

setTimeout(function() {
    pre();
}, 6000);
setTimeout(function() {
    pre();
}, 12000);
setTimeout(function() {
    pre();
}, 18000);

// for sweet alert
document.getElementById("hire").addEventListener("click", () => {
    swal({
        title: "Information",
        text: "Please check my resume and portfolio...",
        icon: "info",
        customClass: "swal-wide",
    });
});

//contact form validation
document.getElementById("submit").addEventListener("click", function() {
    val1 = document.querySelector("#contact_input1").value;
    val2 = document.querySelector("#contact_input2").value;
    val3 = document.querySelector("#message").value;

    ind = val2.indexOf("@");
    last = val2.lastIndexOf(".");
    console.log(last);
    console.log(val2.length);
    if (
        val2.includes("@") == true &&
        val2.indexOf(".", ind) > -1 &&
        last != val2.length - 1
    ) {
        if (val1 != "" && val2 != "" && val3 != "") {
            swal({
                title: "Information",
                text: "Message Succesfully Sent",
                icon: "success",
                customClass: "swal-wide",
            });
        }
    } else {
        swal({
            title: "Information",
            text: "Pleas fill the Correct Email Address",
            icon: "error",
            customClass: "swal-wide",
        });
    }
});

// for animation
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

// forward and backward button logic

document
    .querySelector(".fa-angle-right")
    .addEventListener("click", function() {
        document.querySelector("#project_display_semicontainer").style.marginLeft =
            "-960px";
    });

document.querySelector(".fa-angle-left").addEventListener("click", function() {
    document.querySelector("#project_display_semicontainer").style.marginLeft =
        "0px";
});

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