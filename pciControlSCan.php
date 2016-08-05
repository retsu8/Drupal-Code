<?php
$nid= arg(1);
$node = node_load($nid);
//dsm($_COOKIE);
?>


<form id="myform" name="admlogin" method="post" action="https://smartscan.controlscan.com/security/login"  >
	<input type="hidden" value="process" name="a">
	<input type="hidden" value="overview" name="page_requested">
	<input id="js" type="hidden" value="1" name="js">
	<label>Username:</label>
  <input class="ssaq_form" type="text" size="42"  style="background-color: lightgray; width: 180px;" readonly="" name="username" value = "<?php echo $node->field_pci_controlscan_username['und'][0]['value'];   ?>">
	<br />
  <label>Password:</label>
  <input class="ssaq_form" type="password" size="42" id="pass" name="password" style = "width: 180px;" value = "<?php echo $_COOKIE["userid"]?>">
  <br>
		<label class="option" for="remember_me">Remember me: </label>
    <input class="ssaq_form" id="reME" type="checkbox" name="remember_me" value="true" checked>
	<div align="left">
		<input class="button ssaq_button" type="Submit" value="Login to PCI ControlScan" onclick="WriteCookie()">
	</div>
</form>

<script type = "text/javascript">
  function WriteCookie (){
      //document.write("Hello i set a cookie for you.");
  			var expiration_date = new Date();
      	if(reME.checked){
            //document.write("This is were i saved it");
            var expires = "; expires="+expiration_date;
            document.cookie = "userid="+pass.value; //saving the cookie here for Password
  		 }else{
           //document.write("Forgot to save it...");
           var expires = "; expires="+expiration_date;
           document.cookie = "userid=";
        }
	  }
</script>
