document.addEventListener("DOMContentLoaded", () => {
    const speedSelect = document.getElementById("speedSelect");
    const githubLink = document.getElementById("githubLink");


    function updateBadge(text) {
        browser.browserAction.setBadgeText({ text });
        browser.browserAction.setBadgeBackgroundColor({ color: "green" });
    }

    browser.storage.sync.get("videoSpeed", (data) => {
        if (data.videoSpeed) {
            speedSelect.value = data.videoSpeed;
            updateBadge(data.videoSpeed.toString());
        } else {
            updateBadge("1.0");
        }
    });

    speedSelect.addEventListener("change", () => {
        const selectedSpeed = speedSelect.value;
        const speedNum = parseFloat(selectedSpeed);

        updateBadge(selectedSpeed);

        browser.storage.sync.set({ videoSpeed: speedNum });

        browser.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs[0] && tabs[0].id) {
                browser.tabs.sendMessage(tabs[0].id, { 
                    action: "setSpeed", 
                    value: speedNum 
                });
            }
        });
    });

});