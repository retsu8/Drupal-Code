<?php
  $hostname = "localhost";
  $database = "druporta";
  $username = "root";
  $password = "";
  $db = new db("$hostname:$database:$username:$password");
  $row = $db->fetch_row("SELECT * FROM tablename");
  print_r($row);
?>
