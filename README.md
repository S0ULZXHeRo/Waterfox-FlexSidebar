# Waterfox---FlexSidebar
A lightweight, clean CSS and JavaScript modification for Waterfox and Firefox that adds a flexible dual-mode sidebar.   It allows you to keep your workspace minimal by revealing the sidebar on hover, or permanently pin it with page reflow using a simple keyboard shortcut.
# 🦊 Waterfox & Firefox Dual-Mode Sidebar

![Waterfox](https://img.shields.io/badge/Waterfox-Supported-005FB8?style=flat-square&logo=firefox)
![Firefox](https://img.shields.io/badge/Firefox-Supported-FF7139?style=flat-square&logo=firefox-browser)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

A lightweight, clean CSS and JavaScript customization for **Waterfox** and **Firefox** that adds a flexible **dual-mode sidebar**. 

Keep your workspace minimal with a floating hover-reveal rail by default, or lock the sidebar open with automatic page reflow using a simple keyboard shortcut.

---

## 📸 Visual Preview

> **Note:** Insert a short GIF or screenshot of your sidebar in action here!

| **Hover-Reveal Mode (Default)** | **Pinned Mode (`Ctrl + /`)** |
| :---: | :---: |
| *Sidebar slides out as an overlay when hovering the left screen edge.* | *Sidebar locks open and page content smoothly shifts right.* |

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
