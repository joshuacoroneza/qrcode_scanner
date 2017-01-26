var resultDiv;

document.addEventListener("deviceready", init, false);
function init() {
    document.querySelector("#startScan").addEventListener("touchend", startScan, false);
    resultDiv = document.querySelector("#results");
}
function save_code(){
  //save
  var modalbutton1=document.getElementById("close");
  modalbutton1.click();
  startScan();
}
function startScan() {

    cordova.plugins.barcodeScanner.scan(
        function (result) {
            var s = "Result: " + result.text + "<br/>" +
            "Format: " + result.format + "<br/>" +
            "Cancelled: " + result.cancelled;
            resultDiv.innerHTML = s;

            var modalbutton=document.getElementById("modal1");
            modalbutton.click();


        }, 
        function (error) {
            alert("Scanning failed: " + error);
        }
    );

}