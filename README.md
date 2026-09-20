# 🦊Waterfox - FlexSidebar

![Waterfox](https://img.shields.io/badge/Waterfox-Supported-005FB8?style=flat-square&logo=firefox)
![Firefox](https://img.shields.io/badge/Firefox-Supported-FF7139?style=flat-square&logo=firefox-browser)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

A lightweight, clean CSS and JavaScript customization for **Waterfox** and **Firefox** that adds a flexible **dual-mode sidebar**. 

Keep your workspace minimal with a floating hover-reveal rail by default, or lock the sidebar open with automatic page reflow using a simple keyboard shortcut.

---

## 📸 Visual Preview

* ### Hover-Reveal Mode (Default)
*Sidebar slides out as an overlay when hovering the left screen edge.*
<img src="https://github.com/user-attachments/assets/06419007-cc96-4fc1-8747-ac33c4655a64" width="100%" />

* ### Pinned Mode (`Ctrl + /`)
*Sidebar locks open and page content smoothly shifts right.*


---

## ✨ Key Features

* 🖱️ **Hover-Reveal Mode (Default):** Keeps the icon rail off-screen. Hovering your cursor over the left edge slides out the sidebar overlay without disrupting your webpage layout.
* ⌨️ **Permanent Pinning:** Toggle between floating and locked states instantly using <kbd>Ctrl</kbd> + <kbd>/</kbd>.
* 📐 **Automatic Page Reflow:** When pinned, the web content smoothly shifts right to make space for the sidebar, preventing overlap.
* 🖥️ **Dynamic Panel Support:** Automatically accommodates standard subpanel widths (~300px) as well as wider extension panels like ChatGPT (~700px).
* 🎨 **Persistent Visuals:** Clean drop-shadow accents that remain active across both hover and pinned states.
* ⚡ **Zero UI Bloat:** Fully hotkey-driven—no redundant buttons, headers, or forced toolbar clutter.

---

## 📁 Repository Structure

```text
├── userChrome.css       # Controls hover transitions, layout shifts, shadows, and page reflow
├── sidebar-pin.uc.js    # Listens for Ctrl + / hotkey and toggles the [sidebar-pinned] state
└── README.md            # Documentation and setup instructions
