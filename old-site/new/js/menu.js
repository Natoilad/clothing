(()=>{const refs={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),mobMenu:document.querySelector(".mobile-menu"),header:document.querySelector(".clothing-header")};function toggleModal(){refs.menu&&refs.menu.addEventListener("click",event=>{event.target.classList.contains("mobile-menu__link")&&refs.menu.classList.remove("is-open")}),refs.mobMenu.style.opacity="1",refs.header.style.backdropFilter=refs.menu.classList.contains("is-open")?"blur(10px)":"none",document.body.classList.toggle("modal-open"),refs.menu.classList.toggle("is-open")}refs.openMenuBtn.addEventListener("click",toggleModal),refs.closeMenuBtn.addEventListener("click",toggleModal)})();