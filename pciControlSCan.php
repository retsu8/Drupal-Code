<script type = "text/javascript">
         <!--
            function WriteCookie(){
  						var expiration_date = new Date();
              var expires = 'expires='+expiration_date.setMonth(expiration_date.getMonth()).toGMTString();
            	if(document.getElementById('remember_me').checked){
  							document.cookie = 'userid='+document.admlogin.password.value+';'+expires;
  						}
/*              else{
                expires = 'expires='+expiration_date.setMonth(expiration_date.getMonth()-1).toGMTString();
                document.cookie = 'userid=;'+expires;
              }*/
					  }
         //-->
</script>
<?php
$nid= arg(1);
$node = node_load($nid);
?>


<form id="myform" name="admlogin" method="post" action="https://smartscan.controlscan.com/security/login"  >
	<input type="hidden" value="process" name="a">
	<input type="hidden" value="overview" name="page_requested">
	<input id="js" type="hidden" value="1" name="js">
	<label>Username:</label><input class="ssaq_form" type="text" size="42"  style="background-color: lightgray; width: 180px;" readonly="" name="username" value = "<?php echo $node->field_pci_controlscan_username['und'][0]['value'];   ?>">
	<br />
<?php
if(!isset($_COOKIE["userid"])) {
    echo '<label>Password:</label>';
		?><input class="ssaq_form" type="password" size="42" name="password" style = "width: 180px;" >
<?php } else {
	echo '<label>Password:</label>'; ?>
 <input class="ssaq_form" type="password" size="42" name="password" style = "width: 180px;" value = "<?php echo $_COOKIE["userid"]?>">	<?php
}
?><br>
		<label class="option" for="remember_me">Remember me: </label><input class="ssaq_form" type="checkbox" name="remember_me" value="true" checked/>
	<div align="left">
		<input class="button ssaq_button" type="Submit" value="Login to PCI ControlScan" onclick="WriteCookie();">
	</div>
</form>
