// app code source



window.addEventListener('DOMContentLoaded', function() {
    console.log("Document Loaded !");

    var video = document.getElementById("stream");
    var canvas = document.getElementById("canvas");
    var button = document.getElementById("start");
    var streaming = false;

    function mediaStreamerHandler(localMediaStream) {
      console.log("Successfully got the user's media");

      // Settings our local stream as a source for the video
      video.src = window.URL.createObjectURL(localMediaStream);
      // Playing the stream
      video.play();

    }

    function doStartStreaming() {

      if(streaming) {
        console.log("You're already streaming");
        return;
      }

        navigator.mozGetUserMedia(
            {video: true, audio:false},
            mediaStreamerHandler,
            function(err){
              console.log(err);
            });

    }


    function doSendData() {

      console.log("Sending Data");

    }
    function sendData(){
      var data = canvas.getDataURL('image/png');

      doSendData(data);
    }

    function doDrawOnCanvas() {

      try {
        canvas.getContext('2d').drawImage(video, 0, 0, canvas.width,
            canvas.height);

        if(!streaming) {
          console.log("Configuring canvas");
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;

          if(video.videoWidth != 0)
            streaming = true;
        }

      }
      catch(e) {
        ;;
      }

        setTimeout(doDrawOnCanvas, 10);

    }


    video.addEventListener('play', doDrawOnCanvas);
    button.addEventListener('click', doStartStreaming);

});
