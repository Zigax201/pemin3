<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="data.js"></script>
    <b><?php
    if (isset($_POST['data']))
    {
      print_r(json_decode($_POST['data']));
    }
    ?></b>
  </body>
</html>
