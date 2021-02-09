
    function closeWin() {
        window.close();
        
    }
    function sec() {

        var count = 1;
        var downloadTimer = setInterval(function () {

            if (count >= 101) {

                clearInterval(downloadTimer);

                document.getElementById("pers").innerText = `Your device hacked successfully`;


                setInterval(closeWin, 1000);



            }
            else {
                document.getElementById("pers").innerHTML = `Progress ${count}%...`;
                document.getElementById("pers").style.marginTop = "20%";
                document.getElementById("hide").style.display = "none";
                document.getElementById("hide1").style.display = "none";
            }
            count += 1;
        }, 30);

    }

