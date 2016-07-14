<?php
$nid= arg(1);
$node = node_load($nid);
if (isset($_SESSION['LAST_ACTIVITY']) && (time() - $_SESSION['LAST_ACTIVITY'] > 1800)) {
    // last request was more than 30 minutes ago
    session_unset();     // unset $_SESSION variable for the run-time
    session_destroy();   // destroy session data in storage
}
else{
  $_SESSION['LAST_ACTIVITY'] = time(); // update last activity time stamp
  $_SESSION['user_name']= $user_name;
  $_SESSION['password']= $password;
}
$conn = mysql_connect("https://smartscan.controlscan.com/security/login","field_pci_controlscan_username['und'][0]['value']","");
mysql_select_db("field_pci_controlscan_username",$conn);
$result = mysql_query("Select * FROM users Where user_name='". $_POST["user_name"] . "' and password = '". $_POST["password"]."'");
$row  = mysql_fetch_array($result);
if(is_array($row)){
  $_SESSION["user_id"]=$row[user_id];
  $_SESSION["user_name"]=$row[user_name];
}else {
  message = "Invalid Username or Password!"
}
}
if(isset($_SESSION["user_id"])){
  header("Location:user_dashboard.php")
}
?>
<form id="myform" name="admlogin" method="post" action="https://smartscan.controlscan.com/security/login"  >
<input type="hidden" value="process" name="a">
<input type="hidden" value="overview" name="page_requested">
<input id="js" type="hidden" value="1" name="js">
<label>Username:</label><input class="ssaq_form" type="text" size="42"  style="background-color: lightgray; width: 180px;" readonly="" name="user_name" value = "<?php echo $node->field_pci_controlscan_username['und'][0]['value'];   ?>">
<br />
<label>Password:</label>
<input class="ssaq_form" type="password" size="42" name="password" style = "width: 180px;" autocomplete="yes">
  <div align="left" style="margin: 30px 0px">
    <input class="button ssaq_button" type="Submit" value="Login to PCI ControlScan">
  </div>
</form>
