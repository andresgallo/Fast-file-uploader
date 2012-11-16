Andres Gallo's Fast-file-uploader
==================================

One thing that I always see implemented in a fashion that can degrade the user experience are fileuploaders. Newer browsers, and mobile web applications can get around this, and can display the image in their upload input file field right away, without unnecessary requests.

Using it
--------

To use it simply include the the onFileSelect.js file, an input field and a container where you will output the images

### HTML
    <input type="file" id="input_file" name="files[]" multiple />
    <output id="myImgWrap"></output>

### JS
#### The input field
    var input = document.getElementById('input_file'); //The input field


#### Setting up an optional callback to provide adding some extra behaviors.  
##### The parameters are file, and url. I printed them to console in case you are curious what these include.  
###### I can see this callback being used to updated a hidden field so that the image data can be sent. Its base 64 bit encoded.
              
    var thumbnailCallback = function(file, url){
        console.log(file);
        console.log(url);
    }

#### Bind our cool plugin to the input               
    input.addEventListener('change', function(e){
        thumbnail.set(e,thumbnailCallback);
    }, false);


Other optional features
-----------------------

### Inside the file onFileSelect.js you can customize the id of the element where you will  be appending the image/images as well as the class of the thumbnails

    var thumbnail = {
	appendTo : 	'myImgWrap',//Change id of element
	thumbClass : 'thumb', //Change class for thumbnails

### Multiple file uploading is also taken care of
####Just give the input field the miltiple attribute, and it will generate multiple images
	