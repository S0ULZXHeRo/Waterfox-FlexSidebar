

# 🦊Waterfox - FlexSidebar

![Waterfox](https://img.shields.io/badge/Waterfox-Supported-005FB8?style=flat-square&logo=firefox)
![Firefox](https://img.shields.io/badge/Firefox-Supported-FF7139?style=flat-square&logo=firefox-browser)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

A lightweight, clean CSS and JavaScript customization for **Waterfox** and **Firefox** that adds a flexible **dual-mode sidebar**. 

Keep your workspace minimal with a floating hover-reveal rail by default, or lock the sidebar open with automatic page reflow using a simple keyboard shortcut.

---

# 📋 Table of Contents

- [Key Features](#-key-features)
- [Visual Preview](#-visual-preview)
- [Additional UI Polish & Fixes](#additional-ui-polish-fixes)
- [Motivation & Design Philosophy](#-motivation--design-philosophy)
- [Installation & Prerequisites](#installation-prerequisites)
- [Repository Structure](#-repository-structure)
- [Known Issues](#-known-issues)
- [Notes & Disclaimer](#-notes--disclaimer)
- [License](#-license)

---

## ✨ Key Features

* 🖱️ **Hover-Reveal Mode (Default):** Keeps the icon rail (sidebar) off-screen. Hovering your cursor over the left edge slides out the sidebar overlay without disrupting your webpage layout.
* ⌨️ **Permanent Pinning:** Toggle between floating and locked states instantly using <kbd>Alt</kbd> + <kbd>,</kbd>.
* 📐 **Automatic Page Reflow:** When pinned, the web content smoothly shifts right to make space for the sidebar, preventing overlap.
* 🖥️ **Dynamic Panel Support:** Automatically accommodates standard subpanel widths (~300px) as well as wider extension panels like ChatGPT (~700px).
* 🎨 **Persistent Visuals:** Clean drop-shadow accents that remain active across both hover and pinned states.
* ⚡ **Zero UI Bloat:** Fully hotkey-driven: no redundant buttons, headers, or forced toolbar clutter.

---

## 📸 Visual Preview

* ### Hover-Reveal Mode (Default)
*Sidebar slides out as an overlay when hovering the left screen edge.*
<img width="800" height="431" alt="hover" src="https://github.com/user-attachments/assets/5df61d73-f6fe-4063-9a9b-879bf5eb8a57" />

* ### Pinned Mode (`Alt + ,`)
*Sidebar pins and page content smoothly shifts right.*
<img width="800" height="431" alt="pinned" src="https://github.com/user-attachments/assets/83672c43-c96c-47bb-8a85-5a94de0ab54e" />

---

<a name="additional-ui-polish-fixes"></a>
## 🛠️ Additional UI Polish & Fixes

* **Container Menu Cleanup:** Stripped the redundant native "New Tab" option from the tab strip `+` menu, leaving a clean, dedicated Container selection panel.
<table>
  <tr>
    <td align="center">
      <b>Before</b><br>
      <img src="https://github.com/user-attachments/assets/a0441828-5d12-4ba4-a9c5-42382c6d4ad5" width="270" alt="Before Cleanup" />
    </td>
    <td align="center">
      <b>After</b><br>
      <img src="https://github.com/user-attachments/assets/c400264b-6e42-4318-bb2a-00794e6ad40a" width="305" alt="After Cleanup" />
    </td>
  </tr>
</table>

* **Streamlined Address Bar:** Removed the default blue focus outline from the address bar, keeping the URL input clean and seamless when focused or opening a new tab.
<table>
  <tr>
    <td align="center">
      <b>Before (Default Focus Outline)</b><br>
      <img src="https://github.com/user-attachments/assets/ba810975-0ed5-437b-9656-66540eea6e98" width="800" alt="URL Bar Before" />
    </td>
  </tr>
  <tr>
    <td align="center">
      <b>After (Clean Address Bar)</b><br>
      <img src="https://github.com/user-attachments/assets/0963d7fe-d81c-49c3-abca-b078c8b6c411" width="800" alt="URL Bar After" />
    </td>
  </tr>
</table>

---

## 💡 Motivation & Design Philosophy

* **Reclaims Screen Real Estate:** Standard browser sidebar permanently took up valuable webpage width by default. Hover-reveal lets you keep 100% of your screen available for content until you actually need the sidebar.
* **Fills a Native UI Gap:** Waterfox lacks built-in auto-hide functionality for the sidebar (restricting auto-hide feature primarily to vertical tabs). This implementation fills that missing gap in the native UI.
* **Faster Workflow via Hotkeys:** Toggling and pinning via hotkeys (`Alt + ,`) eliminates redundant mouse movements to static toolbar icons.
* **Flexible Multitasking (Hover vs. Pin):**
  * **Hover-Reveal (Quick Actions):** Automatically slides open when moving the cursor to the screen edge and closes the moment the cursor leaves, keeping browsing fluid.
  * **Pinned Mode (Deep Work):** Locks the sidebar open with a quick hotkey (`Alt + ,`) for seamless side-by-side multitasking when actually needed.
* **Opera-Inspired UI Maturity:** Built with inspiration from Opera’s sidebar ecosystem that is widely considered a benchmark for intuitive, modern browser layout design.
* **Enhanced Aesthetics & UX:** Designed to modernize the interface, streamline daily interaction, and deliver a cleaner, distraction-free browsing experience.

---

<a name="installation-prerequisites"></a>
## 🛠️ Installation & Prerequisites

Follow these steps from scratch to get the dynamic FlexSidebar script working.
### 1. Enable Custom CSS/JS Support in Waterfox
By default, Firefox and Waterfox ignore custom UI stylesheets and scripts. You must enable user customization settings first:
1. Open a new tab, type `about:config` in the address bar, and press **Enter**.
2. Click **Accept the Risk and Continue**.
3. In the search box at the top, look for the following preference:
```toolkit.legacyUserProfileCustomizations.stylesheets```
4. Double-click it (or click the toggle button) to set its value to `true`.

### 2. Locate Your Profile Directory
1. Open a new tab and go to `about:support`.
2. Find the Profile Folder entry under Application Basics.
3. Click Open Folder (or Show in Finder on macOS). This opens your active Waterfox profile directory.

### 3. Install userChrome.js Loader (For Script Support)
Since custom shortcuts (`Alt + ,`) and dynamic layout reflows require JavaScript, you need a loader to run custom JS files:
1. Download/extract a standard `userChrome.js` bootstrap script (such as fx-autoconfig or userChromeJS). I recommend [fx-autoconfig](https://github.com/MrOtherGuy/fx-autoconfig).
2. Copy the contents of `Programs` folder and paste them into your root Waterfox installation folder (`C:\Program Files\Waterfox`).
3. Copy the `chrome` folder from `Profile` folder and paste it into your Waterfox Default Profile folder (`C:\Users\YOUR USERNAME\AppData\Roaming\Waterfox\Profiles\YOUR PROFILE.default-release`).

### 4. Add the Custom Script & Styling
1. Open your profile directory's `chrome` folder (`...\Profiles\<your-profile>\chrome\`).
2. Download the [userChrome.css](userChrome.css) file and move it here or create a file yourself named `userChrome.css` and paste the following code. Make sure the extension is `.css` and not `.txt`.
<details>
<summary><b>Click to view userChrome.css code</b></summary>
  
```css
/* Strip cyan focus outline, default breakout styling, and focus shadow */
#urlbar[breakout][breakout-extend],
#urlbar[breakout][breakout-extend] > #urlbar-background,
#urlbar-input-container,
#urlbar[focused="true"] > #urlbar-background {
  outline: none !important;
  border-color: transparent !important;
  box-shadow: none !important;
}

#urlbar {
  --urlbar-focused-border-color: transparent !important;
  --toolbar-field-focus-border-color: transparent !important;
  --focus-outline-color: transparent !important;
}
/* --- MAIN SIDEBAR ICON RAIL --- */
#sidebar-container,
.browser-sidebar-container,
#sidebar-main {
  position: fixed !important;
  top: 94px !important;
  bottom: auto !important;
  left: 4px !important;
  height: calc(100vh - 98px) !important;
  z-index: 100000 !important;
  overflow: visible !important;
  border-radius: 10px !important;
  contain: none !important;
  
  transform: translateX(calc(-100% - 12px)) !important;
  transition: transform 0.50s cubic-bezier(0.25, 1, 0.5, 1) !important;
}

/* Hit-area edge trigger - Tight trigger area when closed */
#sidebar-container::before,
.browser-sidebar-container::before,
#sidebar-main::before {
  content: "" !important;
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  right: -15px !important;
  height: 100% !important;
  background: transparent !important;
  pointer-events: auto !important;
}

/* FIX: Stretches trigger back to the screen edge when opened so cursor never loses hover */
#sidebar-container:hover::before,
.browser-sidebar-container:hover::before,
#sidebar-main:hover::before {
  left: -100px !important;
}

/* --- SUB-PANEL BASE SETUP --- */
#sidebar-box {
  position: fixed !important;
  top: 94px !important;
  left: 62px !important;
  height: calc(100vh - 98px) !important;
  z-index: 99999 !important;
  box-shadow: 8px 0 24px rgba(0, 0, 0, 0.5) !important;
  border-radius: 10px !important;
  contain: none !important;
  
  /* DEFAULT NATIVE SIDEBAR WIDTH */
  width: 300px !important;
  min-width: 280px !important;
  
  /* RETRACTED STATE */
  margin-left: -800px !important;
  opacity: 1 !important; 
  pointer-events: none !important;
  
  transition: margin-left 0.50s cubic-bezier(0.25, 1, 0.5, 1),
              transform 0.50s cubic-bezier(0.25, 1, 0.5, 1),
              pointer-events 0s linear 0.50s !important;
  will-change: margin-left, transform !important;
}

/* --- EXTENSION-ONLY WIDE LAYOUT (ChatGPT etc) --- */
#sidebar-box[sidebarcommand*="-sidebar-action"] {
  width: 700px !important;
  min-width: 500px !important;
}

#sidebar-box #sidebar {
  min-width: 100% !important;
  width: 100% !important;
}

/* --- SCENARIO 1: SYNCHRONIZED HOVER REVEAL --- */

/* 1. Reveal RAIL on hover */
#sidebar-main:hover,
#sidebar-container:hover,
.browser-sidebar-container:hover,
:has(> #sidebar-box:hover) #sidebar-main,
:has(> #sidebar-box:hover) #sidebar-container,
:has(> #sidebar-box:hover) .browser-sidebar-container {
  transform: translateX(0) !important;
  box-shadow: 6px 0 20px rgba(0, 0, 0, 0.4) !important;
}

/* 2. Reveal SUBPANEL smoothly on hover */
#sidebar-main:hover ~ #sidebar-box,
#sidebar-container:hover ~ #sidebar-box,
.browser-sidebar-container:hover ~ #sidebar-box,
#sidebar-box:hover {
  margin-left: 0px !important;
  pointer-events: auto !important;
  
  transition: margin-left 0.50s cubic-bezier(0.25, 1, 0.5, 1),
              transform 0.50s cubic-bezier(0.25, 1, 0.5, 1),
              pointer-events 0s linear 0s !important;
}

/* --- SCENARIO 2: PINNED STATE OVERRIDES (TRIGGERED BY SCRIPT) --- */

/* Lock Rail Open */
#main-window[sidebar-pinned="true"] #sidebar-main,
#main-window[sidebar-pinned="true"] #sidebar-container,
#main-window[sidebar-pinned="true"] .browser-sidebar-container {
  transform: translateX(0) !important;
}

/* Lock Subpanel Open */
#main-window[sidebar-pinned="true"] #sidebar-box {
  margin-left: 0px !important;
  pointer-events: auto !important;
}

/* Adjust webpage body margin so page reflows/resizes to fit */
#main-window[sidebar-pinned="true"] #appcontent,
#main-window[sidebar-pinned="true"] #tabbrowser-tabbox {
  margin-left: 362px !important; /* Rail (62px) + Standard Subpanel (300px) */
  transition: margin-left 0.50s cubic-bezier(0.25, 1, 0.5, 1) !important;
}

/* Adjust webpage body margin when wide panels (ChatGPT) are pinned */
#main-window[sidebar-pinned="true"]:has(#sidebar-box[sidebarcommand*="-sidebar-action"]) #appcontent,
#main-window[sidebar-pinned="true"]:has(#sidebar-box[sidebarcommand*="-sidebar-action"]) #tabbrowser-tabbox {
  margin-left: 762px !important; /* Rail (62px) + Wide Subpanel (700px) */
}

/* Page content margin overrides when unpinned (Hover mode) */
#sidebar-box ~ #tabbrowser-tabbox,
#sidebar-box ~ #appcontent {
  margin-left: 0 !important;
  padding-left: 0 !important;
  transition: margin-left 0.50s cubic-bezier(0.25, 1, 0.5, 1) !important;
}

#sidebar-launcher-splitter,
#sidebar-splitter {
  display: none !important;
}

/* Lock Rail Open & Retain Rail Shadow */
#main-window[sidebar-pinned="true"] #sidebar-main,
#main-window[sidebar-pinned="true"] #sidebar-container,
#main-window[sidebar-pinned="true"] .browser-sidebar-container {
  transform: translateX(0) !important;
  box-shadow: 6px 0 20px rgba(0, 0, 0, 0.4) !important;
}

/* Lock Subpanel Open & Retain Panel Shadow */
#main-window[sidebar-pinned="true"] #sidebar-box {
  margin-left: 0px !important;
  pointer-events: auto !important;
  box-shadow: 8px 0 24px rgba(0, 0, 0, 0.5) !important;
}
/* Remove redundant "New Tab" item and its separator from Container popup */
#new-tab-button-popup > menuitem:first-of-type,
#new-tab-button-popup > menuseparator:first-of-type {
  display: none !important;
}
```

</details>

4. Save.
5. Now download [sidebar-pin.uc.js](sidebar-pin.uc.js) and paste it into the `JS` folder (`...\chrome\JS`) or create it yourself with the exact name and paste the following code.
<details>
<summary><b>Click to view sidebar-pin.uc.js code</b></summary>
  
```css
(function() {
  function toggleSidebarPin() {
    let windowElem = document.getElementById("main-window");
    if (!windowElem) return;
    
    let isPinned = windowElem.getAttribute("sidebar-pinned") === "true";
    
    if (isPinned) {
      windowElem.removeAttribute("sidebar-pinned");
    } else {
      windowElem.setAttribute("sidebar-pinned", "true");
    }
  }

  window.addEventListener("keydown", function(e) {
    if (e.altKey && (e.key === "," || e.code === "Comma")) {
      e.preventDefault();
      e.stopPropagation();
      toggleSidebarPin();
    }
  }, true);
})();
```

</details>

6. Save.
7. Restart Waterfox completely to initialize the bootstrap loader and apply the scripts and styling.

* *💡 **Customizing the Hotkey:** You can edit the keybinding at any time by opening sidebar-pin.uc.js in a text editor and modifying the key code logic near the bottom of the file.*

---

## 📁 Repository Structure

```text
├── userChrome.css       # Controls hover transitions, layout shifts, shadows, and page reflow
├── sidebar-pin.uc.js    # Listens for Alt + , hotkey and toggles the [sidebar-pinned] state
└── README.md            # Documentation and setup instructions
```

---

## 🐛 Known Issues

* **Transparent Broken Sidebar:** Enabling any custom Firefox or Waterfox browser theme (or add-on theme) as well as Photon and Proton layouts turn the sidebar/icon rail transparent.  The functionality and shortcuts remain fully operational, but visual background alignment breaks. It is recommended to use standard/default themes with Nova layout.

---

## 🤝 Notes & Disclaimer
* **First of all, a big thank you to **Alex Kontos** for creating and maintaining [Waterfox](https://www.waterfox.net/).**

* **AI-Assisted Code:** Both `userChrome.css` and `sidebar-pin.uc.js` were built entirely with AI assistance to fit my personal workflow. I am not an experienced developer myself, but I'm sharing this publicly in the spirit of open-source—hoping it helps others, serves a good purpose, or gives someone a solid starting point to build upon!
* **Bugs & Edge Cases:** Since this hasn't been tested across every single Firefox extension or layout setup, you might encounter visual bugs or glitches. 
* **Contributions & Issues:** If you spot a bug or know a way to optimize the layout/script, **Pull Requests and fixes are always greatly appreciated!** Any improvements will help keep this running smoothly for everyone using it. 

---

## 📜 License
This project is licensed under the [MIT License](https://mit-license.org/).
If you use or adapt these styles/scripts in your own setup or share them elsewhere, please provide a link back to this original repository.
