$(document) . ready(function() {
    $('.text').textillate({
        loop: true,
        sync: true,
        in: {
            effect: 'bounceIn',
        },
        out: {
            effect: 'bounceOut',
        },
    })

      let siriWave = new SiriWave({
    container: document.getElementById("siri-container"),
    width: 640,
    height: 200,
    style: "ios9",
    speed: 0.05,
    amplitude: 1,
    frequency: 10,
    autostart: true,
  });

  $('.siri-messege').textillate({
        loop: true,
        sync: true,
        in: {
            effect: 'fadeIn',
        },
        out: {
            effect: 'fadeOut',
        },
    })
 $("#MicBtn").click(function () { 
        $("#oval").attr("hidden", true);
        $("#wave").attr("hidden", false);
        eel.takecommand()();
    });

});
