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