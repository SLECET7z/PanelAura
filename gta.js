h5gg.require(7.9); 
var h5frida=h5gg.loadPlugin("h5frida", "h5frida-16.0.10.dylib");

function ActiveCodePatch(fpath, vaddr, bytes) {
    if(!h5frida.ActiveCodePatch(fpath, vaddr, bytes)) {
        var result = h5frida.ApplyCodePatch(fpath, vaddr, bytes);
        alert(fpath+":0x"+vaddr.toString(16)+"-修改失败!\n" + fpath+":0x"+vaddr.toString(16)+"-PatchFailed!\n" + result);return false;
    } return true;
}
function DeactiveCodePatch(fpath, vaddr, bytes) {
    return h5frida.DeactiveCodePatch(fpath, vaddr, bytes);
}

var codeStatus = false;
function modifyValue(searchValue, replaceValue, addressEndsWith, addressEndsWith2, alertMessage) {
    h5gg.clearResults();
    h5gg.searchNumber(searchValue, 'I32', '0x10000000', '0x160000000');
    const results = h5gg.getResults(h5gg.getResultsCount());
    let modifiedCount = 0;
    results.forEach(result => {
        if (result.address.endsWith(addressEndsWith) || result.address.endsWith(addressEndsWith2)) {
            h5gg.setValue(result.address, replaceValue.toString(), 'I32');
            modifiedCount++;
            
           

        }
    });
    if (modifiedCount > 0) {
        if (alertMessage) alert(alertMessage);
    } else if (alertMessage) {
        alert("Lỗi");
    }
}


function lock(input) {//ghost
    if (input.checked) {
h5gg.clearResults();
modifyValue(1077936128, -20001, 'A04');
modifyValue(1069547520, 1148829696, 'A10');
alert("AimLock ON");
h5gg.clearResults();
      codeStatus = true;
    } else {     
h5gg.clearResults();
modifyValue(-20001, 1077936128, 'A04');
modifyValue(1148829696, 1069547520, 'A10');
alert("AimLock OFF");
h5gg.clearResults();
        codeStatus = false;
    }
}
