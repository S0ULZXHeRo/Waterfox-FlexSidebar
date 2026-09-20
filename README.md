

# 🦊Waterfox - FlexSidebar

![Waterfox](https://img.shields.io/badge/Waterfox-Supported-005FB8?style=flat-square&logo=firefox)
![Firefox](https://img.shields.io/badge/Firefox-Supported-FF7139?style=flat-square&logo=firefox-browser)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

A lightweight, clean CSS and JavaScript customization for **Waterfox** and **Firefox** that adds a flexible **dual-mode sidebar**. 

Keep your workspace minimal with a floating hover-reveal rail by default, or lock the sidebar open with automatic page reflow using a simple keyboard shortcut.

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
<img width="720" height="387" alt="pinned" src="https://github.com/user-attachments/assets/9817c1ff-a48a-4385-a486-c92ae6e5e0a3" />






---

### 🛠️ Additional misc UI Polish & Fixes
* **Container Menu Cleanup:** Stripped the redundant native "New Tab" option from the tab strip `+` menu, leaving a clean, dedicated Container selection panel.
<table>
  <tr>
    <td align="center">
      <b>Before</b><br>
      <img src="https://github.com/user-attachments/assets/a0441828-5d12-4ba4-a9c5-42382c6d4ad5" width="280" alt="Before Cleanup" />
    </td>
    <td align="center">
      <b>After</b><br>
      <img src="https://github.com/user-attachments/assets/c400264b-6e42-4318-bb2a-00794e6ad40a" width="280" alt="After Cleanup" />
    </td>
  </tr>
</table>

* **Streamlined Address Bar:** Removed the default blue focus outline from the address bar, keeping the URL input clean and seamless when focused or opening a new tab.
<table>
  <tr>
    <td align="center">
      <b>Before (Default Focus Outline)</b><br>
      <img src="https://github.com/user-attachments/assets/ba810975-0ed5-437b-9656-66540eea6e98" width="600" alt="URL Bar Before" />
    </td>
    <td align="center">
      <b>After (Clean Address Bar)</b><br>
      <img src="https://github.com/user-attachments/assets/0963d7fe-d81c-49c3-abca-b078c8b6c411" width="600" alt="URL Bar After" />
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
1. Open your profile directory's `chrome` folder (`.../Profiles/<your-profile>/chrome/`).
2. Download the [userChrome.css](Create a file named `userChrome.css`. Make sure the extension is `.css` and not `.txt`.
3. Paste the sidebar hover-reveal and positioning styles into `userChrome.css` and save.

---

## 📁 Repository Structure

```text
├── userChrome.css       # Controls hover transitions, layout shifts, shadows, and page reflow
├── sidebar-pin.uc.js    # Listens for Ctrl + / hotkey and toggles the [sidebar-pinned] state
└── README.md            # Documentation and setup instructions
