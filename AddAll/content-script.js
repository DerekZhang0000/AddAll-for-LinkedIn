var containerNames;
function main() {
    if (document.readyState !== "complete") {
        window.setTimeout(function() {main()}, 1000);
    }
    else {
        window.setTimeout(function() {
            containerNames = document.getElementsByClassName("artdeco-button artdeco-button--2 artdeco-button--secondary ember-view full-width");
            connect();
        },
        2000);
    }
}
function connect() {
    var containers = document.getElementsByClassName("artdeco-button artdeco-button--2 artdeco-button--secondary ember-view full-width").length;
    for (var i = 0; i < containers; i++) {
        if (containerNames.item(i).innerText == "Connect") {
            containerNames.item(i).click();
            console.log("You added " + containerNames.item(i).getAttribute("aria-label").replace("Invite ","").replace(" to connect",""));
        }
    }
}
main();