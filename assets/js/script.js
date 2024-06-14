function sideNavbar_tabs() {
  tabJs = (navContainer, navItems, navTabs, contentTab, contains) => {
    let tabs = Array.prototype.slice.apply(document.querySelectorAll(navTabs));
    let items = Array.prototype.slice.apply(
      document.querySelectorAll(navItems)
    );
    let panels = Array.prototype.slice.apply(
      document.querySelectorAll(contentTab)
    );

    document.getElementById(navContainer).addEventListener("click", (e) => {
      if (e.target.classList.contains(contains)) {
        let i = tabs.indexOf(e.target);
        tabs.map((tab) => tab.classList.remove("active", "active-tab"));
        tabs[i].classList.add("active", "active-tab");
        items.map((item) =>
          item.classList.remove("gds-nav-tabs__list-item--active")
        );
        items[i].classList.add("gds-nav-tabs__list-item--active");
        panels.map((tab) => tab.classList.remove("active"));
        panels[i].classList.add("active");
      }
    });
  };

  tabJs("tabContainer", ".gds-nav-tabs__list-item ", ".itm", ".tabs", "itm");
}
sideNavbar_tabs();

function sideNavberOpenClose() {
  let sideNav_MainContainer = document.querySelector("#sideNav_MainContainer");
  document.querySelector("#hamburger_Menu").addEventListener("click", () => {
    sideNav_MainContainer.classList.remove("hidden");
    sideNav_MainContainer.classList.add("block");
  });

  document.querySelector("#sideNavCloseBtn").addEventListener("click", () => {
    document.querySelector("#sideNav_MainContainer").classList.add("hidden");
  });
}
sideNavberOpenClose();
