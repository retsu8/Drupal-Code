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
	<label>Password:</label> 
	<input class="ssaq_form" type="password" size="42" name="password" style = "width: 180px;" >
	<div class="form-item form-type-checkbox form-item-remember-me">
		<input tabindex="1" type="checkbox" id="edit-remember-me" name="remember_me" value="1" checked="checked" class="form-checkbox">  <label class="option" for="edit-remember-me">Remember me: </label>
	</div>
	<div align="left">		
		<input class="button ssaq_button" type="Submit" value="Login to PCI ControlScan">
	</div>
</form>