<?php

if (arg(0) == 'node' && arg(2) <> 'edit' &&  $nid = arg(1)   ){
?>

<form method="post" action="https://www.youraccessone.com/64_ms_Login.aspx?id=1767Frontline1.3" onsubmit="javascript:return WebForm_OnSubmit();" id="form1" role="form">
<div class="aspNetHidden">
<input type="hidden" name="__EVENTTARGET" id="__EVENTTARGET" value="">
<input type="hidden" name="__EVENTARGUMENT" id="__EVENTARGUMENT" value="">
<input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="/wEPDwUKMTY2NjE0MTc5Mg8WBB4Hc2VjX2tleQU7OUMtRTQtNDItNTQtQkYtNkMtQTAtNzItMjYtQUYtNUItQTYtRTItQkQtNkUtOEMtQUUtOUYtOUItMTMeC3NlY19yZWZyZXNoBS82RS03MC01RC0zQi0yMi00RC1FMS04RS05Ri1GOS1DOC01MS1EOC0yQS1GMC1DRRYCAgMPFgIeBmFjdGlvbgUPLzE3NjdGcm9udGxpbmUxFggCBQ8PZBYCHgpvbmtleXByZXNzBRJFbnRlclNpZ25JbihldmVudClkAgkPD2QWAh8DBRJFbnRlclNpZ25JbihldmVudClkAhMPFCsAAhQrAAMPFgIeF0VuYWJsZUFqYXhTa2luUmVuZGVyaW5naGRkZBAWBWYCAQICAgMCBBYFFCsAAw8WBB8EaB4RVmlzaWJsZU9uUGFnZUxvYWRoZGRkFCsAAw8WAh8EaGRkZBQrAAMPFgQfBGgfBWhkZGQUKwADDxYEHwRoHwVoZGRkFCsAAw8WAh8EaGRkZA8WBWZmZmZmFgEFcVRlbGVyaWsuV2ViLlVJLlJhZFdpbmRvdywgVGVsZXJpay5XZWIuVUksIFZlcnNpb249MjAxMy4yLjcxNy40NSwgQ3VsdHVyZT1uZXV0cmFsLCBQdWJsaWNLZXlUb2tlbj0xMjFmYWU3ODE2NWJhM2Q0FgpmDxQrAAMPFgQfBGgfBWhkZGRkAgEPFCsAAw8WAh8EaGRkZGQCAg8UKwADDxYEHwRoHwVoZGRkZAIDDxQrAAMPFgQfBGgfBWhkZGRkAgQPFCsAAw8WAh8EaGRkZGQCFQ8UKwACFCsAAw8WAh8EaGRkZBAWAWYWARQrAAMPFgIfBGhkZGQPFgFmFgEFcVRlbGVyaWsuV2ViLlVJLlJhZFdpbmRvdywgVGVsZXJpay5XZWIuVUksIFZlcnNpb249MjAxMy4yLjcxNy40NSwgQ3VsdHVyZT1uZXV0cmFsLCBQdWJsaWNLZXlUb2tlbj0xMjFmYWU3ODE2NWJhM2Q0FgJmDxQrAAMPFgIfBGhkZGRkGAEFHl9fQ29udHJvbHNSZXF1aXJlUG9zdEJhY2tLZXlfXxYIBQh1eFdpbmRvdwUPcmFkRm9yZ2V0V2luZG93BQ9yYWRGb3Jnb3RXbmRNc2cFDnJhZEZvcmNlV2luZG93BRJyYWRQd2RFeHBpcmVkQWxlcnQFCnJhZFByaXZhY3kFEVJhZFdpbmRvd01hbmFnZXIxBQpSYWRXaW5kb3czIK3N/3CxbarDElo4hertsczZUJA=">
</div>

<script type="text/javascript">
//<![CDATA[
var theForm = document.forms['form1'];
if (!theForm) {
    theForm = document.form1;
}
function __doPostBack(eventTarget, eventArgument) {
    if (!theForm.onsubmit || (theForm.onsubmit() != false)) {
        theForm.__EVENTTARGET.value = eventTarget;
        theForm.__EVENTARGUMENT.value = eventArgument;
        theForm.submit();
    }
}
//]]>
</script>

<script type="text/javascript">
//<![CDATA[
function WebForm_OnSubmit() {
if (typeof(ValidatorOnSubmit) == "function" && ValidatorOnSubmit() == false) return false;
return true;
}
//]]>
</script>

<div class="aspNetHidden">

	<input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="EE138EF8">
	<input type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION" value="/wEdAAQbzueiu1BYayRpkJTVIWbeY3plgk0YBAefRz3MyBlTcHY2+Mc6SrnAqio3oCKbxYaWd9iuCZVt5ZZZ/Z76nxBB6fvAKf4yj81T0TNdsX4fwQakXQM=">
</div>
        <script type="text/javascript">
//<![CDATA[
Sys.WebForms.PageRequestManager._initialize('ScriptManager1', 'form1', [], [], [], 90, '');
//]]>
</script>

        <div class="login-container">
            <div class="row">
                <div class="col-md-12">
                </div>
            </div>
            <div class="white-bg-shadow"></div>
            <div class="row login-form">
                <div class="col-md-12">
                    <div class="form-group">
             
                        <input name="txtUserName" type="hidden" id="txtUserName" value ="<?php print_r(node_load($nid)->field_portfolio_manager_username['und'][0]['value']); ?>" class="form-control" autocomplete="off" autofocus="" onkeypress="EnterSignIn(event)" readonly style = "background-color: lightgray;">
                    </div>
                    <div class="form-group">
                        
                        
                        
                    </div>
                    <div class="row form-group">
                                                <div class="col-md-4">
                            <input type="submit" name="uxLogin" value="Online Card Deposits" onclick="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;uxLogin&quot;, &quot;&quot;, true, &quot;&quot;, &quot;&quot;, false, false))" id="uxLogin" class="btn btn-login pull-right">
                        </div>
                    </div>
                    <p class="login-alert">
                        </p>
                </div>
            </div>            
        </div> 
        <div class="old-browser-warning-container hide">           
        </div>
    <div id="uxWindow" style="display:none;">
	<!-- 2013.2.717.45 --><div id="radForgetWindow" style="display:none;">
		<div id="radForgetWindow_C" style="display:none;">

		</div><input id="radForgetWindow_ClientState" name="radForgetWindow_ClientState" type="hidden" autocomplete="off">
	</div><div id="radForgotWndMsg" style="display:none;">
		<div id="radForgotWndMsg_C" style="display:none;">

		</div><input id="radForgotWndMsg_ClientState" name="radForgotWndMsg_ClientState" type="hidden" autocomplete="off">
	</div><div id="radForceWindow" style="display:none;">
		<div id="radForceWindow_C" style="display:none;">

		</div><input id="radForceWindow_ClientState" name="radForceWindow_ClientState" type="hidden" autocomplete="off">
	</div><div id="radPwdExpiredAlert" style="display:none;">
		<div id="radPwdExpiredAlert_C" style="display:none;">

		</div><input id="radPwdExpiredAlert_ClientState" name="radPwdExpiredAlert_ClientState" type="hidden" autocomplete="off">
	</div><div id="radPrivacy" style="display:none;">
		<div id="radPrivacy_C" style="display:none;">

		</div><input id="radPrivacy_ClientState" name="radPrivacy_ClientState" type="hidden" autocomplete="off">
	</div><div id="uxWindow_alerttemplate" style="display:none;">
		<div class="rwDialogPopup radalert">			
			<div class="rwDialogText">
			{1}				
			</div>
			
			<div>
				<a onclick="$find('{0}').close(true);" class="rwPopupButton" href="javascript:void(0);">
					<span class="rwOuterSpan">
						<span class="rwInnerSpan">##LOC[OK]##</span>
					</span>
				</a>				
			</div>
		</div>
		</div><div id="uxWindow_prompttemplate" style="display:none;">
		 <div class="rwDialogPopup radprompt">			
			    <div class="rwDialogText">
			    {1}				
			    </div>		
			    <div>
				    <script type="text/javascript">
				    function RadWindowprompt_detectenter(id, ev, input)
				    {							
					    if (!ev) ev = window.event;                
					    if (ev.keyCode == 13)
					    {															        
					        var but = input.parentNode.parentNode.getElementsByTagName("A")[0];					        
					        if (but)
						    {							
							    if (but.click) but.click();
							    else if (but.onclick)
							    {
							        but.focus(); var click = but.onclick; but.onclick = null; if (click) click.call(but);							 
							    }
						    }
					       return false;
					    } 
					    else return true;
				    }	 
				    </script>
				    <input title="Enter Value" onkeydown="return RadWindowprompt_detectenter('{0}', event, this);" type="text" class="rwDialogInput" value="{2}">
			    </div>
			    <div>
				    <a onclick="$find('{0}').close(this.parentNode.parentNode.getElementsByTagName('input')[0].value);" class="rwPopupButton" href="javascript:void(0);"><span class="rwOuterSpan"><span class="rwInnerSpan">##LOC[OK]##</span></span></a>
				    <a onclick="$find('{0}').close(null);" class="rwPopupButton" href="javascript:void(0);"><span class="rwOuterSpan"><span class="rwInnerSpan">##LOC[Cancel]##</span></span></a>
			    </div>
		    </div>				       
		</div><div id="uxWindow_confirmtemplate" style="display:none;">
		<div class="rwDialogPopup radconfirm">			
			<div class="rwDialogText">
			{1}				
			</div>						
			<div>
				<a onclick="$find('{0}').close(true);" class="rwPopupButton" href="javascript:void(0);"><span class="rwOuterSpan"><span class="rwInnerSpan">##LOC[OK]##</span></span></a>
				<a onclick="$find('{0}').close(false);" class="rwPopupButton" href="javascript:void(0);"><span class="rwOuterSpan"><span class="rwInnerSpan">##LOC[Cancel]##</span></span></a>
			</div>
		</div>		
		</div><input id="uxWindow_ClientState" name="uxWindow_ClientState" type="hidden">
</div>
        <div id="RadWindowManager1" style="display:none;">
	<div id="RadWindow3" style="display:none;">
		<div id="RadWindow3_C" style="display:none;">

		</div><input id="RadWindow3_ClientState" name="RadWindow3_ClientState" type="hidden" autocomplete="off">
	</div><div id="RadWindowManager1_alerttemplate" style="display:none;">
		<div class="rwDialogPopup radalert">			
			<div class="rwDialogText">
			{1}				
			</div>
			
			<div>
				<a onclick="$find('{0}').close(true);" class="rwPopupButton" href="javascript:void(0);">
					<span class="rwOuterSpan">
						<span class="rwInnerSpan">##LOC[OK]##</span>
					</span>
				</a>				
			</div>
		</div>
		</div><div id="RadWindowManager1_prompttemplate" style="display:none;">
		 <div class="rwDialogPopup radprompt">			
			    <div class="rwDialogText">
			    {1}				
			    </div>		
			    <div>
				    <script type="text/javascript">
				    function RadWindowprompt_detectenter(id, ev, input)
				    {							
					    if (!ev) ev = window.event;                
					    if (ev.keyCode == 13)
					    {															        
					        var but = input.parentNode.parentNode.getElementsByTagName("A")[0];					        
					        if (but)
						    {							
							    if (but.click) but.click();
							    else if (but.onclick)
							    {
							        but.focus(); var click = but.onclick; but.onclick = null; if (click) click.call(but);							 
							    }
						    }
					       return false;
					    } 
					    else return true;
				    }	 
				    </script>
				    <input title="Enter Value" onkeydown="return RadWindowprompt_detectenter('{0}', event, this);" type="text" class="rwDialogInput" value="{2}">
			    </div>
			    <div>
				    <a onclick="$find('{0}').close(this.parentNode.parentNode.getElementsByTagName('input')[0].value);" class="rwPopupButton" href="javascript:void(0);"><span class="rwOuterSpan"><span class="rwInnerSpan">##LOC[OK]##</span></span></a>
				    <a onclick="$find('{0}').close(null);" class="rwPopupButton" href="javascript:void(0);"><span class="rwOuterSpan"><span class="rwInnerSpan">##LOC[Cancel]##</span></span></a>
			    </div>
		    </div>				       
		</div><div id="RadWindowManager1_confirmtemplate" style="display:none;">
		<div class="rwDialogPopup radconfirm">			
			<div class="rwDialogText">
			{1}				
			</div>						
			<div>
				<a onclick="$find('{0}').close(true);" class="rwPopupButton" href="javascript:void(0);"><span class="rwOuterSpan"><span class="rwInnerSpan">##LOC[OK]##</span></span></a>
				<a onclick="$find('{0}').close(false);" class="rwPopupButton" href="javascript:void(0);"><span class="rwOuterSpan"><span class="rwInnerSpan">##LOC[Cancel]##</span></span></a>
			</div>
		</div>		
		</div><input id="RadWindowManager1_ClientState" name="RadWindowManager1_ClientState" type="hidden">
</div>
        
            <!--[if lt IE 9]>
              <script type="text/javascript" language="javascript">
                $(document).ready(function(){
                  $('.old-browser-warning-container').removeClass('hide');
                });        
              </script>
            <![endif]-->
            <script type="text/javascript" language="javascript">
                // Autofocus username fix for IE
                $(function() {
                    $('[autofocus]:not(:focus)').eq(0).focus();
                });

                //Old browser warning
                $('.old-browser-warning button').click(function () {
                    $('.old-browser-warning-container').hide();
                });
 
                function checkSessionTimeout() {
                    if (readCookie('timeout') == '1') {
                        var customThemeId = readCookie("customThemeId");
                        if (customThemeId != '' && customThemeId != null)
                        {
                            doOpenTimeoutPopup(customThemeId);
                            return;
                        }
                        doOpenTimeoutPopup();
                    }
                }

                if (parent.window != window) parent.window.location.href = readCookie('login_url');
                function EnterSignIn(e) {
                    if ({ 13: 1 }[e.which || e.keyCode]) {
                        e.preventDefault ? e.preventDefault() : e.returnValue = false;
                        e.cancel = true;
                        document.getElementById("uxLogin").click();
                                return true;
                            }
                        }
                        var dialogs = null;
                        function doOpenForgetPassword() {
                            dialogs = $find('uxWindow').get_windows();
                            dialogs[0].setUrl('freeaccess/64_um_forgotPassword1.aspx?id=' + '1767Frontline1.2');

                            dialogs[0].show();
                            return false;
                        }
                        function doClose() {
                            dialogs = $find('uxWindow').get_windows();
                            dialogs[0].close();
                            return false;
                        }
                            function doClosePrivacy() {
                                dialogs = $find('uxWindow').get_windows();
                                 dialogs[4].close();
                                 return false;
                        }
                        function doOpenPrivacy() {
                            dialogs = $find('uxWindow').get_windows();
                            dialogs[4].setUrl('freeaccess/64_privacy.aspx?id=' + '1767Frontline1.2');             
                            dialogs[4].show();
                            return false;
                        }

                        function doOpenForgotWndMsg(url) {
                            dialogs = $find('uxWindow').get_windows();
                            dialogs[1].setUrl('freeaccess/' + url);
                            dialogs[1].show();
                            return false;
                        }
                        setTimeout('checkSessionTimeout()', 500);

                        function doOpenTimeoutPopup(customThemeId) {
                            var widthPage = screen.width; //width resolution
                            var heightPage = screen.height; //heigth resolution
                            var leftpage = (widthPage - 400) / 2;
                            var toppage = (heightPage - 200) / 2;
                            var sUserAgent = window.navigator.userAgent;
                            var iWidth = 475;
                            var iHeight = 225;
                            if(/Chrome[\/\s](\d+\.\d+)/.test(sUserAgent) || /Firefox[\/\s](\d+\.\d+)/.test(sUserAgent)) 
                            {
                                iWidth = 480;
                                iHeight = 232;
                            }
                            window.open('./freeaccess/64_um_ExpiredSession.aspx?id=' + customThemeId, '_blank', 'width=' + iWidth + ', height=' + iHeight + ', toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, left=' + leftpage + ',top=' + toppage);
                        }

 

            </script>

        
    
<script type="text/javascript">
//<![CDATA[
var Page_Validators =  new Array(document.getElementById("RequiredFieldValidator1"), document.getElementById("RequiredFieldValidator2"));
//]]>
</script>

<script type="text/javascript">
//<![CDATA[
var RequiredFieldValidator1 = document.all ? document.all["RequiredFieldValidator1"] : document.getElementById("RequiredFieldValidator1");
RequiredFieldValidator1.controltovalidate = "txtUserName";
RequiredFieldValidator1.errormessage = "*";
RequiredFieldValidator1.evaluationfunction = "RequiredFieldValidatorEvaluateIsValid";
RequiredFieldValidator1.initialvalue = "";
var RequiredFieldValidator2 = document.all ? document.all["RequiredFieldValidator2"] : document.getElementById("RequiredFieldValidator2");
RequiredFieldValidator2.controltovalidate = "txtPassword";
RequiredFieldValidator2.errormessage = "*";
RequiredFieldValidator2.evaluationfunction = "RequiredFieldValidatorEvaluateIsValid";
RequiredFieldValidator2.initialvalue = "";
//]]>
</script>


<script type="text/javascript">
//<![CDATA[
if(window != parent.window) parent.window.location='\x2F\x31\x37\x36\x37\x46\x72\x6F\x6E\x74\x6C\x69\x6E\x65\x31';
var Page_ValidationActive = false;
if (typeof(ValidatorOnLoad) == "function") {
    ValidatorOnLoad();
}

function ValidatorOnSubmit() {
    if (Page_ValidationActive) {
        return ValidatorCommonOnSubmit();
    }
    else {
        return true;
    }
}
        
document.getElementById('RequiredFieldValidator1').dispose = function() {
    Array.remove(Page_Validators, document.getElementById('RequiredFieldValidator1'));
}

document.getElementById('RequiredFieldValidator2').dispose = function() {
    Array.remove(Page_Validators, document.getElementById('RequiredFieldValidator2'));
}
Sys.Application.add_init(function() {
    $create(Telerik.Web.UI.RadWindow, {"_dockMode":false,"autoSize":true,"clientStateFieldID":"radForgetWindow_ClientState","formID":"form1","height":"250px","iconUrl":"","minimizeIconUrl":"","modal":true,"name":"radForgetWindow","navigateUrl":"freeaccess/64_um_forgotPassword1.aspx","skin":"Default","visibleStatusbar":false,"width":"500px"}, null, null, $get("radForgetWindow"));
});
Sys.Application.add_init(function() {
    $create(Telerik.Web.UI.RadWindow, {"_dockMode":false,"autoSize":true,"clientStateFieldID":"radForgotWndMsg_ClientState","formID":"form1","height":"250px","iconUrl":"","minimizeIconUrl":"","modal":true,"name":"radForgotWndMsg","navigateUrl":"freeaccess/64_um_forgotPasswordMsg.aspx","skin":"Default","visibleStatusbar":false,"width":"400px"}, null, null, $get("radForgotWndMsg"));
});
Sys.Application.add_init(function() {
    $create(Telerik.Web.UI.RadWindow, {"_dockMode":false,"autoSize":true,"behaviors":33,"clientStateFieldID":"radForceWindow_ClientState","formID":"form1","height":"435px","iconUrl":"","minimizeIconUrl":"","modal":true,"name":"radForceWindow","navigateUrl":"64_um_ForceResetPassword.aspx","skin":"Default","visibleStatusbar":false,"width":"600px"}, null, null, $get("radForceWindow"));
});
Sys.Application.add_init(function() {
    $create(Telerik.Web.UI.RadWindow, {"_dockMode":false,"autoSize":true,"behaviors":32,"clientStateFieldID":"radPwdExpiredAlert_ClientState","formID":"form1","height":"250px","iconUrl":"","minimizeIconUrl":"","modal":true,"name":"radPwdExpiredAlert","navigateUrl":"64_um_PwdExpiredAlert.aspx","skin":"Default","visibleStatusbar":false,"width":"500px"}, null, null, $get("radPwdExpiredAlert"));
});
Sys.Application.add_init(function() {
    $create(Telerik.Web.UI.RadWindow, {"_dockMode":false,"autoSize":true,"clientStateFieldID":"radPrivacy_ClientState","formID":"form1","iconUrl":"","maxHeight":"700px","minimizeIconUrl":"","modal":true,"name":"radPrivacy","showContentDuringLoad":false,"skin":"Default","visibleStatusbar":false}, null, null, $get("radPrivacy"));
});
Sys.Application.add_init(function() {
    $create(Telerik.Web.UI.RadWindowManager, {"clientStateFieldID":"uxWindow_ClientState","formID":"form1","iconUrl":"","minimizeIconUrl":"","modal":true,"name":"uxWindow","skin":"Default","windowControls":"['radForgetWindow','radForgotWndMsg','radForceWindow','radPwdExpiredAlert','radPrivacy']"}, null, {"child":"radForgetWindow"}, $get("uxWindow"));
});
Sys.Application.add_init(function() {
    $create(Telerik.Web.UI.RadWindow, {"_dockMode":false,"behaviors":36,"clientStateFieldID":"RadWindow3_ClientState","formID":"form1","iconUrl":"","minimizeIconUrl":"","name":"RadWindow3","navigateUrl":"freeaccess/64_um_ExpiredSession.aspx","reloadOnShow":true,"skin":"Default","visibleStatusbar":false}, null, null, $get("RadWindow3"));
});
Sys.Application.add_init(function() {
    $create(Telerik.Web.UI.RadWindowManager, {"behaviors":36,"clientStateFieldID":"RadWindowManager1_ClientState","formID":"form1","iconUrl":"","minimizeIconUrl":"","name":"RadWindowManager1","skin":"Default","windowControls":"['RadWindow3']"}, null, {"child":"RadWindow3"}, $get("RadWindowManager1"));
});
//]]>
</script>
</form>

<?php 
 }

?>