

$(function() {
    

    
	$("#menuOptionsID").animate({ marginTop: "-100%"} , .1);
    $("#rightCurtainID").animate({ marginLeft: "100%"} , .1);
    $("#leftCurtainID").animate({ marginRight: "100%"} , .1);
    
    $("#rightCurtainID").animate({ marginTop: "-10%"} , .1);
    $("#leftCurtainID").animate({ marginTop: "-10%"} , .1);
    	
    var $hamburger = $(".hamburger");
    
  	$(".hamburger").on("click", function(e) {
        
    		$hamburger.toggleClass("is-active");
    		
    		if ( $hamburger.hasClass("is-active") ){ 
    			showMenu(); 
    		} else {
    			hideMenu(); 
            }		
  	});
    
});


function showMenu(){

    $("#rightCurtainID").animate({ marginLeft: "-1%"} , 1000);
    $("#leftCurtainID").animate({ marginRight: "-1%"} , 1000);
    $("#menuOptionsID").delay(500).animate({ marginTop: "0%"} , 1000);
        
}


function hideMenu(){
	
	$("#menuOptionsID").animate({ marginTop: "-100%"} , 1000);
	$("#rightCurtainID").delay(500).animate({ marginLeft: "100%"} , 1000);
    $("#leftCurtainID").delay(500).animate({ marginRight: "100%"} , 1000);

}


function menuLink(toLoad, isExternal, externalURL){
    $(".hamburger").toggleClass("is-active");
    $("#content").load(toLoad);
    hideMenu();
    if (isExternal) {
        setTimeout(function(){window.location=externalURL} , 1000); 
    }
}


$(document).keypress(function(e){
    
    var x = e.keyCode; // Get the Unicode value
    var y = String.fromCharCode(x);
    if (y==='m') {
        showMenu();
    }
    
});






