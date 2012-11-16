var thumbnail = {
	appendTo : 	'myImgWrap',//Image tag is inserted here
	thumbClass : 'thumb',
	set : function(e,callback) {
		var isMulti = false;
		e.target.getAttribute('multiple') != null ? isMulti = true : isMulti = false;
		console.log(e.target.getAttribute('multiple') != null);
		var appendToThisElem = document.getElementById(thumbnail.appendTo);
		
		var files = e.target.files; // FileList object
	
		// Loop through the FileList and render image files as thumbnails.
		for (var i = 0, f; f = files[i]; i++) {
	
			// Only process image files.
			if (!f.type.match('image.*')) continue;
	
			var reader = new FileReader();
	
			// Closure to capture the file information.
			reader.onload = (function(theFile) {
				return function(e) {
					var innerH = ['<img class="'+thumbnail.thumbClass+'" src="', e.target.result,
                            '" title="', escape(theFile.name), '"/>'].join('');
		
					if(isMulti){
						var span = document.createElement('span');
          				span.innerHTML = innerH;
          				appendToThisElem.insertBefore(span, null);
					}else{
						appendToThisElem.innerHTML = innerH;
					}
					if(typeof callback === 'function')callback(theFile, e.target.result);
				};
			})(f);
			
			reader.readAsDataURL(f);
		}
	}
}