$('#submit-btn').on('click',wikiSearch); 
$('#search-term').on('keyup',function(event){
	if (event.keyCode === 13) {
		wikiSearch();
	}	
});
										 
function wikiSearch() {
	// clear out old data before new request
	$('#result-list').text("")
	var searchTerm = $('#search-term').val();
	var wikiUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" + searchTerm+"&limit=10&callback=?";
	//Wikipedia AJAX request
	$.ajax({
		url: wikiUrl,
		dataType: 'json',
		success: function(data) {
			for (var i = 0; i < 10; i++) {
				var entries = "<div class=\"extra-padding\"><u><a href="+data[3][i]+" target='_blank'><h4>"+data[1][i]+"</h4></a></u><span>"+data[2][i]+"</span></div><hr style='background-color: #034f84'>";
				$('#result-list').append(entries);
			}
		}
	});
}