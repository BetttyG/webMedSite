var currentLinkName = "";

function toggleNavigationMenu() {
    var e = $('#toggleNavigation')[0];
    if (e.className.indexOf("show") == -1) {
        e.className += " show";
    } else { 
        e.className = e.className.replace(" show", "");
    }
}

function loadContent(linkName) {
    clearActive();
    setActive(linkName);
    $('#content').load(linkName + '.htm'); //jquery to load the partial html for different contents
    currentLinkName = linkName;
}

function clearActive() {
    if(currentLinkName == "")
        return;

    var e_big = $('#' + currentLinkName + '_big')[0];
    var e_sm = $('#' + currentLinkName + '_sm')[0];

    if (e_big.className.indexOf("active") != -1)
        e_big.className = e_big.className.replace("active", "");
    if (e_sm.className.indexOf("active") != -1)
        e_sm.className = e_sm.className.replace("active", "");
}

function setActive(linkName) {
    var e_big = document.getElementById(linkName + "_big");
    var e_sm = document.getElementById(linkName + "_sm");
    e_big.className += "active";
    e_sm.className += "active";
    
}