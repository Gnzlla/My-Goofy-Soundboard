
var buttonNumber = document.querySelectorAll(".frog").length;

for (var i = 0; i<buttonNumber; i++){
    document.querySelectorAll(".frog")[i].addEventListener("click", function(){
        var buttoninnerHTML = this.innerHTML;

        switch (buttoninnerHTML) {
            case "1":
                var hallo = new Audio("audio/HALLO.mp3");
                hallo.play();
                break;

            case "2":
                var wat_the = new Audio("audio/wat-the.mp3");
                wat_the.play();
                break;
            
            case "3":
                var mmm = new Audio("audio/mmmm.mp3");
                mmm.play();
                break;

            case "4":
                var muwahaha = new Audio("audio/muwahaha.mp3");
                muwahaha.play();
                break;
            case "5":
                var luvyew = new Audio("audio/luvyew.mp3");
                luvyew.play();
                break;
            case "6":
                var laugh = new Audio("audio/laugh.mp3");
                laugh.play();
                break;
            case "7":
                var ogee = new Audio("audio/ogee.mp3");
                ogee.play();
                break;
            case "8":
                var um_actually = new Audio("audio/um-actually.mp3");
                um_actually.play();
                break;
            case "9":
                var vhat = new Audio("audio/vhat.mp3");
                vhat.play();
                break;
            default:
                console.log(buttoninnerHTML);
        }
    })
}