$(document).ready(function(){
  $("a.new_window").attr("target", "_blank");
 
            $(document).ready(function(){
                 $("#cmdComputerLab").click(function(){
                     $("#pic").load("ajax-contents/ccnow.html");
                 });
            
             
                 $("#cmdServerRoom").click(function(){
                     $("#pic").load("ajax-contents/serverRoom.html");
                 });
            
             
                 $("#cmdLAN").click(function(){
                     $("#pic").load("ajax-contents/lantext.html");
                 });
                
                 $("#cmdAudi").click(function(){
                     $("#pic").load("ajax-contents/audi.html");
                 });
                 $("#cmdTeleHome").click(function(){
                     $("#pic").load("ajax-contents/tele_home.html");
                 });
          
                 $("#cmdTPRBooking").click(function(){
                     $("#pic").load("ajax-contents/tele.html");
                 });
                 $("#cmdLCD").click(function(){
                     $("#pic").load("ajax-contents/lcd.html");
                 });
                 $("#cmdeMail").click(function(){
                     $("#pic").load("ajax-contents/email.html");
                 });
				 
				 $("#cctimings").click(function(){
                     $("#pic").load("ajax-contents/CCTimings.html");
                 });
				 
				 $("#cmdPDFDownloads").click(function(){
                     $("#pic").load("ajax-contents/new-downloads.html");
                 });
				 
				 $("#server").click(function(){
                     $("#pic").load("ajax-contents/serverRoom.html");
                 });
				 
				 $("#rules").click(function(){
                     $("#pic").load("ajax-contents/Rules.html");
                 });

                 $("#cmdHome").click(function(){
                     location.reload();
                 });

                 $("#cmdreqFac").click(function(){
                     $("#pic").load("ajax-contents/req_forms_fac.html");
                 });

                 $("#cmdreqStu").click(function(){
                     $("#pic").load("ajax-contents/req_forms_stu.html");
                 });

                 $("#cmdpolLab").click(function(){
                     $("#pic").load("ajax-contents/lab_policy.html");
                 });

                 $("#cmdpolNetwork").click(function(){
                     $("#pic").load("ajax-contents/network_policy.html");
                 });
            });


		jQuery(".content").hide();
		  //toggle the componenet with class msg_body
		  jQuery(".CSSTableGenerator").click(function()
		  {
		    jQuery(this).next(".content").slideToggle(500);
		  });

 });