<img src="https://github.com/user-attachments/assets/df59e60c-840c-4b40-89f5-762a71d71277" width="100" />
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
<img src="https://github.com/user-attachments/assets/06419007-cc96-4fc1-8747-ac33c4655a64" width="100%" />

* ### Pinned Mode (`Alt + ,`)
*Sidebar pins and page content smoothly shifts right.*
<img src="https://github.com/user-attachments/assets/df59e60c-840c-4b40-89f5-762a71d71277" width="100%" />

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

## 📁 Repository Structure

```text
├── userChrome.css       # Controls hover transitions, layout shifts, shadows, and page reflow
├── sidebar-pin.uc.js    # Listens for Ctrl + / hotkey and toggles the [sidebar-pinned] state
└── README.md            # Documentation and setup instructions
