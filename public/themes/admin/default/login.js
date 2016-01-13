$(function(){
	// Version
	$('#webmisVersion').webmisVersion();
	// Lang
	$('#Lang').hover(function(){$(this).find('ul').show();},function(){$(this).find('ul').hide();});
	// Mobile QRCode
	$('#QRCodeCT').hover(function(){
		$(this).find('.qrcode_ct').show();
	},function(){
		$(this).find('.qrcode_ct').hide();
	});
	$.webmis.inc({files:[$webmis_plugin+'tool/jquery.qrcode.min.js']});
	$('#QRCode').qrcode({width: 100, height: 100, text: $base_url});
	// Auto Size
	var autoSize = function(){
		var height = ($(window).height()-318)/2;
		$('#webmisVersion').css({'margin-top':height});
	}
	autoSize();
	$(window).resize(function(){autoSize();});
	
	// Login
	var login = function(){
		var uname = $('#uname').val();
		var passwd = $('#passwd').val();
		var is_mobile = $('#is_mobile').text();
		if(uname.length < 1 || passwd.length < 1){
			$.get($base_url+'Result/getLang/msg',{msg_title:'',msg_isNull:'',msg_auto_close:''},function (data){
				$.webmis.win('open',{title:data.msg_title, content:'<b class="red">'+data.msg_isNull+'</b>',AutoClose:3,AutoCloseText:data.msg_auto_close});
			},'json');
			return false;
		}else{
			$.post($base_url+'index/login',{'uname':uname,'passwd':passwd,'is_mobile':is_mobile},function(data){
				alert(data);
				if(data.status == 'y'){
					$.webmis.win('close','Welcome');
				}else{
					$.webmis.win('open',{title:data.title,content:data.msg,AutoClose:3,AutoCloseText:data.text});
				}
				return false;
			});
		}
		return false;
	}
	// Enter Login
	$(document).keypress(function(e){if(e.which == 13){login();}});
	// Click Login
	$('#adminLogin').click(login);
});