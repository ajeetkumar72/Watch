 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>clock projecet</title>
    <!-- <meta http-equiv="refresh" content="1"> -->
    <style>
        body{
            /* display: flex; */
            /* justify-content: center; */
            /* align-items: center; */
            /* min-height: 100vh; */
            background: #091921;
        }
        #clock{
            font-size: 90px;
            text-align: center;
            color: #24ff10;
        }
    </style>
</head>
<body>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <script>
        setInterval(displayclock, 500);
    function displayclock(){
        var time = new Date;
        var hr = time.getHours();
        var min =time.getMinutes();
        var sec =time.getSeconds();
        if (hr == 0){
        hr= 12;
    }
    if (hr > 12){
        hr = hr - 12;
    }
    document.getElementById('clock').innerHTML = hr + ':' + min + ':' + sec;
    }
    </script>
    <div id="clock">
    </div>
</body>
</html>
