var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },


    onDeviceReady: function() {
        this.receivedEvent('deviceready');
       
    },   
    receivedEvent: function(id) {

        navigator.vibrate([500]);



    }
};

app.initialize();
function vibra(){
    navigator.vibrate(300);
    navigator.vibrate([300]);
}