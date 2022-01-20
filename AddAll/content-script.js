var containerNames;
function main() {
    if (document.readyState !== "complete") {   // waits for initial webpage to finish loading
        window.setTimeout(function() {main()}, 1000);
    } else {
        setInterval(function() {    // connections load in real time, so this method fires every 2 seconds
            containerNames = document.getElementsByClassName("artdeco-button artdeco-button--2 artdeco-button--secondary ember-view full-width");
            connect();
            containerNames = "";
        },
        2000);
    }
}
function connect() {    // sends connections requests out to all people that are loaded
    var containers = document.getElementsByClassName("artdeco-button artdeco-button--2 artdeco-button--secondary ember-view full-width").length;
    for (var i = 0; i < containers; i++) {
        if (containerNames.item(i).innerText == "Connect") {    // button must contain "Connect", which differentiates it from the "Follow" request that organizations and influencers have
            containerNames.item(i).click();
            console.log("You added " + containerNames.item(i).getAttribute("aria-label").replace("Invite ","").replace(" to connect",""));
        }
    }
}
main();