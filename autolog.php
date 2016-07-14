<?php
$nid= arg(1);
$node = node_load($nid);
<?php
$cookie_name = "user";
$cookie_value = "John Doe";
setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/"); // 86400 = 1 day
?>
<form id="myform" name="admlogin" method="post" action="https://smartscan.controlscan.com/security/login"  >
<input type="hidden" value="process" name="a">
<input type="hidden" value="overview" name="page_requested">
<input id="js" type="hidden" value="1" name="js">
<label>Username:</label><input class="ssaq_form" type="text" size="42"  style="background-color: lightgray; width: 180px;" readonly="" name="username" value = "<?php echo $node->field_pci_controlscan_username['und'][0]['value'];   ?>"/>
<br />
<label>Password:</label>
<input class="ssaq_form" type="password" size="42" name="password" style = "width: 180px;" autocomplete="on" value = "<?php echo $node -> $_SESSION["password"]?>"/>
<label for="remember_me">Keep me logged in </label>
<input type="checkbox" id="remember_me" name="remember_me" checked />
  <div align="left" style="margin: 30px 0px">
    <input class="button ssaq_button" type="Submit" value="Login to PCI ControlScan">
  </div>
</form>
<?php if(!isset($_COOKIE[$cookie_name])) {
    echo "Cookie named '" . $cookie_name . "' is not set!";
} else {
    echo "Cookie '" . $cookie_name . "' is set!<br>";
    echo "Value is: " . $_COOKIE[$cookie_name];
}
?>
