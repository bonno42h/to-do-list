$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
	}
)
$("ul").on("click", ".bin", function(event){
	$(this).parent().fadeOut(400, function(){
	$(this).remove();
	})
event.stopPropagation();
})
$("input[type='text']").keypress(function(event){
	var content = $(this).val();
	if (event.which === 13) {
		$("ul").append("<li><span class='bin'><i class='far fa-trash-alt'></i></span> " + content + "</li>")
		$(this).val("");
	}
})

$(".status").on("click", function(){
	$("input[type='text']").fadeToggle();
})