<script type = "text/javascript">
         <!--
            function WriteCookie(){
  							var expiration_date = new Date();
  							var cookie_string = '';
  							expiration_date.setMonth(CurrentDate.getMonth() +1);
							if( document.merchant_login.password.value == "" ){
								 alert("No password entered!!");
								 return;
							 }
							if(document.merchant_login.remember_me.checked == true){
								document.cookie = "intgate=" +document.merchant_login.password.value;"expires="expiration_date.toGMTString();
						 	}
						 	else {
						 		document.cookie="intgate=";
						 	}
					}
         //-->
</script>
<?php
$node = node_load(arg(1));
?>

<form action="https://secure.frontlineprocessinggateway.com/merchants/login.php" name="merchant_login" id="merchant_login" method="POST" target="" onsubmit=" if (checkValidation('merchant_login')==false) { return false; } if(document.getElementById('merchant_login_submit_button')) { document.getElementById('merchant_login_submit_button').disabled=true; } ">
  <input name="FORM_POSTED" value="true" type="hidden">
  <input name="Action" id="Action" value="Login" type="hidden">
  <div id="username_row">
    <label for="username" id="label_username">Username</label>
    <input id="username" name="username" value="<?php echo $node->field_nmi_username['und'][0]['value']; ?>"  type="text" readonly style = "background-color: lightgray;" >
  </div>
  <div style="" id="password_row">
    <label for="password" id="label_password">Password</label>
    <input id="password" name="password" value = "<?php echo $_COOKIE["intgate"]?>" onchange="validate('merchant_login', this);" type="password">
  </div>
  		<label class="option" for="remember_me">Remember me: </label><input class="ssaq_form" type="checkbox" name="remember_me" value="1" checked/>
  	<div align="left">
  <input id="merchant_login_submit_button" name="merchant_login_submit_button" value="Login" type="submit" onclick="WriteCookie();"></nobr>
</form>
