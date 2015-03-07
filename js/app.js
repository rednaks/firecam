// app code source



window.addEventListener('DOMContentLoaded', function() {
    console.log("Document Loaded !");

    var video = document.getElementById("stream");
    var canvas = document.getElementById("canvas");
    var button = document.getElementById("start");

    function mediaStreamerHandler(localMediaStream) {
      console.log("Successfully got the user's media");

      // Settings our local stream as a source for the video
      video.src = window.URL.createObjectURL(localMediaStream);
      // Playing the stream
      video.play();

    }
    
    function doStartStreaming() {
    
        navigator.mozGetUserMedia(
            {video: true, audio:false},
            mediaStreamerHandler,
            function(err){
              console.log(err);
            });
    
    }


    button.addEventListener('click', doStartStreaming);

});
