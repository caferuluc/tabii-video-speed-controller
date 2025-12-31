(function () {
    let desiredRate = 1.0;

    function applyRate(video) {
        if (!video) return;
        video.playbackRate = desiredRate;

        const observer = new MutationObserver(() => {
            if (video.playbackRate !== desiredRate) {
                video.playbackRate = desiredRate;
                console.log(`Playback rate reset to ${desiredRate}x`);
            }
        });
        observer.observe(video, { attributes: true, attributeFilter: ['playbackRate'] });

        video.addEventListener('ratechange', () => {
            if (video.playbackRate !== desiredRate) {
                video.playbackRate = desiredRate;
                console.log(`Playback rate reset to ${desiredRate}x (ratechange event)`);
            }
        });

        console.log(`Playback rate locked: ${desiredRate}x`);
    }

    function applyAllVideos() {
        document.querySelectorAll('video').forEach(applyRate);
    }

    browser.storage.sync.get("videoSpeed", (data) => {
        if (data.videoSpeed) {
            desiredRate = data.videoSpeed;
            applyAllVideos();
        }
    });

    browser.runtime.onMessage.addListener((message) => {
        if (message.action === "setSpeed") {
            desiredRate = message.value;
            browser.storage.sync.set({ videoSpeed: desiredRate });
            applyAllVideos();
        }
    });

    const pageObserver = new MutationObserver(applyAllVideos);
    pageObserver.observe(document.body, { childList: true, subtree: true });
})();