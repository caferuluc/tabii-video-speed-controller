![Icon](icon.png) 

## Tabii Video Speed Controller

> Take control of video playback speed on Tabii.

---

**Fun fact:** I initially developed this extension for myself after a specific experience on the Tabii platform. I had signed up to watch the *Gassal* series, and during playback, found myself wanting to adjust the video speed. While I could often achieve this on other platforms by injecting code into the console, Tabii's player proved more resilient to such modifications. So, in August 2025, I decided to build a dedicated browser extension. Realizing that this solution might benefit others facing similar challenges across various streaming sites, I decided to share it. Enjoy your videos, and remember: **It works on almost all other video platforms as well!**

---

## Features
* **Persistent Speed:** Once you set a speed, it stays. The extension automatically detects and overrides site-specific speed resets.
* **Wide Range:** Choose speeds from **0.5x** all the way up to **4.0x**.
* **Automatic Detection:** Automatically applies your preferred speed to new videos added to the page dynamically.

## How it Works
The extension utilizes a `MutationObserver` and a `ratechange` event listener. This ensures the video's `playbackRate` remains locked to your desired setting, even if the website tries to force it back to 1.0x.

## Installation

### For Developers (Manual Install)
1.  **Clone** this repository or download the ZIP file.
2.  Open **Firefox**.
3.  Go to the Extensions page by typing `about:debugging` in the address bar.
4.  Click on **"This Firefox"** on the left sidebar.
5.  Click **"Load Temporary Add-on..."** and select the `manifest.json` file from the project folder.

---
*Have fun and save time.*
