<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kennect</title>
    <style>
        div{
            min-height: 100px;
            min-width: 100px;
            padding:30px;
            border: 1px solid black
        }

        .shape{
        font-size:3rem;
        }
    </style>
</head>
<body>
    <div id="john">
        <input type="text" id="name" name="input" placeholder="Enter your text">
        <p class="important">Hi. I am from important class change me to shape class</p>
        <p class="important">Hi. I am from important class change me to shape class</p>
        <p>Hi. change me? you can't</p>
      </div>

      <script>
        
        //console.log(document.querySelector("#john #name"));
        document.querySelector("#john #name").addEventListener("focus", (event) => {
        //console.log(document.querySelectorAll("#john .important"))
            document.querySelectorAll("#john .important").forEach((element) => element.classList.add("shape"));
          event.stopPropagation();
        });
    

      </script>
</body>
</html>
