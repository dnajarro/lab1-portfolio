function changeColor() {
        switch (document.getElementById("about").style.color) {
            case "red":
                document.getElementById("about").style.color = "orange";
                break;
            case "orange":
                document.getElementById("about").style.color = "yellow";
                break;
            case "yellow":
                document.getElementById("about").style.color = "green";
                break;
            case "green":
                document.getElementById("about").style.color = "blue";
                break;
            case "blue":
                document.getElementById("about").style.color = "violet";
                break;
            case "violet":
                document.getElementById("about").style.color = "red";
                break;
            default:
                document.getElementById("about").style.color = "red";
        }
    }
    
    function changeFont() {
        switch (document.getElementById("about").style.fontFamily) {
            case "arial":
                document.getElementById("about").style.fontFamily = "helvetica";
                break;
            case "helvetica":
                document.getElementById("about").style.fontFamily = "impact";
                break;
            case "impact":
                document.getElementById("about").style.fontFamily = "verdana";
                break;
            default:
                document.getElementById("about").style.fontFamily = "helvetica";
        }
    }
    
    function changeBackground() {
        if (document.body.style.backgroundColor == "green") {
            document.body.style.backgroundColor = "red";
        }
        if (document.body.style.backgroundColor == "red") {
            document.body.style.backgroundColor = "yellow";
        }
        if (document.body.style.backgroundColor == "yellow") {
            document.body.style.backgroundColor == "red";
        }
    }

