// Main Application Logic for Website Wisata Jawa Timur

document.addEventListener("DOMContentLoaded", () => {
  // State
  let currentCategory = "all"; // 'all', 'ikon', 'lokal', 'bahari', 'favorites'
  let searchQuery = "";
  let favorites = JSON.parse(localStorage.getItem("wisata_jatim_favorites") || "[]");

  // DOM Elements
  const destinationsGrid = document.getElementById("destinationsGrid");
  const emptyState = document.getElementById("emptyState");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const searchInput = document.getElementById("searchInput");
  const heroSearchInput = document.getElementById("heroSearchInput");
  const heroSearchBtn = document.getElementById("heroSearchBtn");
  const activeCountEl = document.getElementById("destinationsCount");
  const favCountBadge = document.getElementById("favCountBadge");
  const mobileFavCountBadge = document.getElementById("mobileFavCountBadge");

  // Modal Elements
  const detailModal = document.getElementById("detailModal");
  const closeModalBtn = document.getElementById("closeModalBtn");
  const modalImage = document.getElementById("modalImage");
  const modalBadge = document.getElementById("modalBadge");
  const modalCategory = document.getElementById("modalCategory");
  const modalTitle = document.getElementById("modalTitle");
  const modalLocation = document.getElementById("modalLocation");
  const modalRating = document.getElementById("modalRating");
  const modalReviews = document.getElementById("modalReviews");
  const modalPrice = document.getElementById("modalPrice");
  const modalBestTime = document.getElementById("modalBestTime");
  const modalDescription = document.getElementById("modalDescription");
  const modalHighlights = document.getElementById("modalHighlights");
  const modalFacilities = document.getElementById("modalFacilities");
  const modalTicketLink = document.getElementById("modalTicketLink");
  const modalHotelLink = document.getElementById("modalHotelLink");
  const modalVillaLink = document.getElementById("modalVillaLink");
  const modalMapsBtn = document.getElementById("modalMapsBtn");
  const modalFavBtn = document.getElementById("modalFavBtn");
  const modalShareBtn = document.getElementById("modalShareBtn");

  // Mobile menu
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  // Scroll to top
  const scrollTopBtn = document.getElementById("scrollTopBtn");

  // Newsletter form
  const newsletterForm = document.getElementById("newsletterForm");

  // Update Favorite Badges
  function updateFavoriteCount() {
    const count = favorites.length;
    if (favCountBadge) favCountBadge.textContent = count;
    if (mobileFavCountBadge) mobileFavCountBadge.textContent = count;
  }

  // Toggle Favorite
  function toggleFavorite(id) {
    const index = favorites.indexOf(id);
    let added = false;
    if (index > -1) {
      favorites.splice(index, 1);
    } else {
      favorites.push(id);
      added = true;
    }
    localStorage.setItem("wisata_jatim_favorites", JSON.stringify(favorites));
    updateFavoriteCount();

    showToast(
      added ? "Berhasil disimpan ke Favorit Jatim!" : "Dihapus dari Favorit",
      added ? "success" : "info"
    );

    // If currently viewing favorites tab, re-render
    if (currentCategory === "favorites") {
      renderDestinations();
    } else {
      // Update heart icon in current view
      const favBtns = document.querySelectorAll(`[data-fav-id="${id}"]`);
      favBtns.forEach(btn => {
        btn.innerHTML = getFavIconHtml(favorites.includes(id));
      });
    }

    // Update modal fav button if open
    if (detailModal && !detailModal.classList.contains("hidden")) {
      updateModalFavButtonState(id);
    }
  }

  function getFavIconHtml(isFav) {
    if (isFav) {
      return `<svg class="w-5 h-5 text-rose-500 fill-rose-500 transition-colors" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>`;
    } else {
      return `<svg class="w-5 h-5 text-slate-400 hover:text-rose-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>`;
    }
  }

  function updateModalFavButtonState(id) {
    const isFav = favorites.includes(id);
    if (modalFavBtn) {
      modalFavBtn.dataset.currentId = id;
      if (isFav) {
        modalFavBtn.innerHTML = `
          <svg class="w-5 h-5 text-rose-500 fill-rose-500" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
          <span class="text-rose-600 font-semibold text-sm">Tersimpan di Favorit</span>
        `;
        modalFavBtn.classList.add("bg-rose-50", "border-rose-200");
        modalFavBtn.classList.remove("bg-white", "border-slate-200");
      } else {
        modalFavBtn.innerHTML = `
          <svg class="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
          <span class="text-slate-700 font-medium text-sm">Simpan ke Favorit</span>
        `;
        modalFavBtn.classList.remove("bg-rose-50", "border-rose-200");
        modalFavBtn.classList.add("bg-white", "border-slate-200");
      }
    }
  }

  // Get Badge CSS Class based on category
  function getCategoryBadgeClass(category) {
    switch (category) {
      case "ikon":
        return "badge-ikon";
      case "lokal":
        return "badge-lokal";
      case "bahari":
        return "badge-bahari";
      default:
        return "bg-slate-100 text-slate-700";
    }
  }

  // Render Destinations Card Grid
  function renderDestinations() {
    let filtered = destinationsData;

    // Filter by Category
    if (currentCategory === "favorites") {
      filtered = filtered.filter(item => favorites.includes(item.id));
    } else if (currentCategory !== "all") {
      filtered = filtered.filter(item => item.category === currentCategory);
    }

    // Filter by Search Query
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(item => 
        item.name.toLowerCase().includes(q) ||
        item.location.toLowerCase().includes(q) ||
        item.province.toLowerCase().includes(q) ||
        item.tag.toLowerCase().includes(q) ||
        item.shortDesc.toLowerCase().includes(q)
      );
    }

    // Update Counter
    if (activeCountEl) {
      activeCountEl.textContent = `${filtered.length} Destinasi Wisata Jawa Timur`;
    }

    // Handle Empty State
    if (filtered.length === 0) {
      destinationsGrid.innerHTML = "";
      emptyState.classList.remove("hidden");
      if (currentCategory === "favorites") {
        document.getElementById("emptyStateTitle").textContent = "Belum Ada Destinasi Favorit";
        document.getElementById("emptyStateDesc").textContent = "Klik ikon hati pada kartu wisata Jawa Timur untuk menyimpannya di sini.";
      } else {
        document.getElementById("emptyStateTitle").textContent = "Destinasi Jawa Timur Tidak Ditemukan";
        document.getElementById("emptyStateDesc").textContent = "Coba kata kunci lain seperti: Bromo, Ijen, Malang, Pacitan, atau Batu.";
      }
      return;
    } else {
      emptyState.classList.add("hidden");
    }

    // Build Cards HTML
    const cardsHtml = filtered.map(item => {
      const isFav = favorites.includes(item.id);
      const badgeClass = getCategoryBadgeClass(item.category);

      return `
        <article class="glass-card card-hover-effect rounded-2xl overflow-hidden flex flex-col h-full group border border-slate-200/80 shadow-sm transition-all duration-300">
          <!-- Card Image & Badges -->
          <div class="relative overflow-hidden aspect-[16/10] cursor-pointer" onclick="window.wisataApp.openDetail('${item.id}')">
            <img 
              src="${item.image}" 
              alt="${item.name}" 
              loading="lazy"
              class="w-full h-full object-cover card-img-zoom brightness-95 group-hover:brightness-105"
              onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80'"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-black/20 pointer-events-none"></div>
            
            <!-- Category Tag -->
            <div class="absolute top-3 left-3 flex flex-wrap gap-1.5 items-center">
              <span class="text-xs font-semibold px-2.5 py-1 rounded-full ${badgeClass} shadow-sm backdrop-blur-md">
                ${item.categoryLabel}
              </span>
              <span class="text-xs font-medium px-2 py-0.5 rounded-full bg-slate-900/70 text-white backdrop-blur-md">
                ${item.badge}
              </span>
            </div>

            <!-- Favorite Button -->
            <button 
              type="button"
              onclick="event.stopPropagation(); window.wisataApp.toggleFavorite('${item.id}')"
              data-fav-id="${item.id}"
              aria-label="Simpan Favorit"
              class="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-slate-700 shadow-md backdrop-blur-md flex items-center justify-center transition-transform active:scale-90"
            >
              ${getFavIconHtml(isFav)}
            </button>

            <!-- Location Pill on Bottom Image -->
            <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
              <div class="flex items-center gap-1.5 drop-shadow-md font-medium truncate">
                <svg class="w-4 h-4 text-emerald-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
                </svg>
                <span class="truncate">${item.location}</span>
              </div>
              <div class="flex items-center gap-1 bg-amber-500/90 text-white font-bold px-2 py-0.5 rounded-md text-xs shadow-sm shrink-0">
                <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ${item.rating}
              </div>
            </div>
          </div>

          <!-- Card Content -->
          <div class="p-5 flex-1 flex flex-col justify-between">
            <div>
              <div class="flex items-center gap-2 text-xs text-emerald-700 font-semibold mb-1.5 uppercase tracking-wider">
                <span>${item.tag}</span>
              </div>
              <h3 
                class="text-lg font-bold text-slate-800 hover:text-emerald-600 transition-colors cursor-pointer line-clamp-1"
                onclick="window.wisataApp.openDetail('${item.id}')"
              >
                ${item.name}
              </h3>
              <p class="mt-2 text-slate-600 text-sm leading-relaxed line-clamp-2">
                ${item.shortDesc}
              </p>
            </div>

            <!-- Footer Details -->
            <div class="mt-5 pt-4 border-t border-slate-100 flex flex-col items-start gap-3">
              <div>
                <span class="block text-[11px] text-slate-400 font-medium">Tiket (panduan tarif 2026):</span>
                <span class="mt-1 block text-xs sm:text-sm font-bold leading-relaxed text-slate-800">${item.ticketPrice}</span>
              </div>
              <div class="flex w-full justify-end">
              <button 
                type="button"
                onclick="window.wisataApp.openDetail('${item.id}')"
                class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white font-semibold text-xs transition-all duration-200"
              >
                <span>Detail</span>
                <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
              </div>
            </div>
          </div>
        </article>
      `;
    }).join("");

    destinationsGrid.innerHTML = cardsHtml;
  }

  // Open Detail Modal
  function openDetail(id) {
    const item = destinationsData.find(d => d.id === id);
    if (!item) return;

    modalImage.src = item.image;
    modalImage.alt = item.name;
    modalBadge.textContent = item.badge;
    modalCategory.textContent = item.categoryLabel;
    modalCategory.className = `text-xs font-semibold px-2.5 py-1 rounded-full ${getCategoryBadgeClass(item.category)}`;
    modalTitle.textContent = item.name;
    modalLocation.textContent = item.location;
    modalRating.textContent = item.rating;
    modalReviews.textContent = `(${item.reviewsCount.toLocaleString("id-ID")} ulasan wisatawan)`;
    modalPrice.textContent = item.ticketPrice;
    modalBestTime.textContent = item.bestTime;
    modalDescription.textContent = item.description;

    const destinationSearch = `${item.name} ${item.location}`;
    modalTicketLink.href = `https://www.google.com/search?q=${encodeURIComponent(`${destinationSearch} tiket harga 2026 situs resmi`)}`;
    modalHotelLink.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`hotel penginapan dekat ${destinationSearch}`)}`;
    modalVillaLink.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`villa dekat ${destinationSearch}`)}`;

    // Highlights
    modalHighlights.innerHTML = item.highlights.map(h => `
      <li class="flex items-start gap-2.5 text-sm text-slate-700">
        <svg class="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        <span>${h}</span>
      </li>
    `).join("");

    // Facilities
    modalFacilities.innerHTML = item.facilities.map(f => `
      <span class="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200/60">
        <svg class="w-3.5 h-3.5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
        ${f}
      </span>
    `).join("");

    // Google Maps Link
    modalMapsBtn.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.name + " " + item.location)}`;
    modalMapsBtn.target = "_blank";

    // Favorite button state
    updateModalFavButtonState(item.id);

    // Share action
    modalShareBtn.onclick = () => {
      const shareUrl = window.location.origin + window.location.pathname + "#destinations";
      if (navigator.clipboard) {
        navigator.clipboard.writeText(`${item.name} - Wisata Jawa Timur: ${shareUrl}`);
        showToast("Tautan informasi wisata disalin!", "info");
      } else {
        showToast("Fitur salin tautan tidak didukung browser ini", "warning");
      }
    };

    // Modal Fav button trigger
    modalFavBtn.onclick = () => {
      toggleFavorite(item.id);
    };

    // Show Modal
    detailModal.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
  }

  function closeModal() {
    detailModal.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  }

  // Filter Buttons Handler
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.getAttribute("data-category");
      renderDestinations();

      // Smooth scroll down to destinations grid if button clicked
      const destSection = document.getElementById("destinations");
      if (destSection && window.scrollY < destSection.offsetTop - 150) {
        destSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Search Inputs
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      renderDestinations();
    });
  }

  if (heroSearchInput && heroSearchBtn) {
    const handleHeroSearch = () => {
      searchQuery = heroSearchInput.value;
      if (searchInput) searchInput.value = searchQuery;
      // switch filter to all if searching from hero
      currentCategory = "all";
      filterButtons.forEach(b => {
        if (b.getAttribute("data-category") === "all") b.classList.add("active");
        else b.classList.remove("active");
      });
      renderDestinations();
      document.getElementById("destinations").scrollIntoView({ behavior: "smooth" });
    };

    heroSearchBtn.addEventListener("click", handleHeroSearch);
    heroSearchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") handleHeroSearch();
    });
  }

  // Close Modal Events
  if (closeModalBtn) closeModalBtn.addEventListener("click", closeModal);
  if (detailModal) {
    detailModal.addEventListener("click", (e) => {
      if (e.target === detailModal) closeModal();
    });
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !detailModal.classList.contains("hidden")) {
      closeModal();
    }
  });

  // Mobile Menu Toggle
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });

    mobileMenu.querySelectorAll("a, button").forEach(elem => {
      elem.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
      });
    });
  }

  // Navbar Scroll Glass Effect
  const navbar = document.getElementById("mainNavbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("glass-nav-scrolled");
    } else {
      navbar.classList.remove("glass-nav-scrolled");
    }

    // Scroll to top button visibility
    if (scrollTopBtn) {
      if (window.scrollY > 400) {
        scrollTopBtn.classList.remove("opacity-0", "pointer-events-none");
        scrollTopBtn.classList.add("opacity-100");
      } else {
        scrollTopBtn.classList.add("opacity-0", "pointer-events-none");
        scrollTopBtn.classList.remove("opacity-100");
      }
    }
  });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Toast Notification
  function showToast(message, type = "success") {
    const toast = document.getElementById("toastNotification");
    const toastMessage = document.getElementById("toastMessage");
    const toastIcon = document.getElementById("toastIcon");

    if (!toast || !toastMessage) return;

    toastMessage.textContent = message;

    if (type === "success") {
      toastIcon.innerHTML = `<svg class="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>`;
    } else if (type === "warning") {
      toastIcon.innerHTML = `<svg class="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>`;
    } else {
      toastIcon.innerHTML = `<svg class="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`;
    }

    toast.classList.remove("translate-y-20", "opacity-0", "pointer-events-none");
    toast.classList.add("translate-y-0", "opacity-100");

    setTimeout(() => {
      toast.classList.add("translate-y-20", "opacity-0", "pointer-events-none");
      toast.classList.remove("translate-y-0", "opacity-100");
    }, 3200);
  }

  // Newsletter Submit
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector("input[type='email']");
      if (emailInput && emailInput.value) {
        showToast(`Terima kasih! Rekomendasi wisata Jatim telah dikirim ke ${emailInput.value}`, "success");
        emailInput.value = "";
      }
    });
  }

  // Render Testimonials
  const testimonialsContainer = document.getElementById("testimonialsContainer");
  if (testimonialsContainer && typeof testimonialsData !== "undefined") {
    testimonialsContainer.innerHTML = testimonialsData.map(t => `
      <div class="glass-card rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between">
        <div>
          <!-- Star ratings -->
          <div class="flex items-center gap-1 text-amber-400 mb-4">
            ${Array(t.rating).fill('<svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>').join("")}
          </div>
          <p class="text-slate-600 text-sm italic leading-relaxed mb-6">
            "${t.comment}"
          </p>
        </div>
        <div class="flex items-center gap-3 pt-4 border-t border-slate-100">
          <img src="${t.avatar}" alt="${t.name}" class="w-11 h-11 rounded-full object-cover border-2 border-emerald-500/30">
          <div>
            <h4 class="font-bold text-slate-800 text-sm">${t.name}</h4>
            <p class="text-xs text-slate-400">${t.origin} • <span class="text-emerald-600 font-medium">${t.destination}</span></p>
          </div>
        </div>
      </div>
    `).join("");
  }

  // Render Travel Tips
  const travelTipsContainer = document.getElementById("travelTipsContainer");
  if (travelTipsContainer && typeof travelTips !== "undefined") {
    travelTipsContainer.innerHTML = travelTips.map(tip => `
      <div class="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
        <div class="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
          <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <h4 class="font-bold text-slate-800 text-base mb-2">${tip.title}</h4>
        <p class="text-slate-600 text-sm leading-relaxed">${tip.description}</p>
      </div>
    `).join("");
  }

  // Expose global methods for inline HTML event handlers
  window.wisataApp = {
    openDetail,
    closeModal,
    toggleFavorite,
    setCategory: (cat) => {
      currentCategory = cat;
      filterButtons.forEach(b => {
        if (b.getAttribute("data-category") === cat) b.classList.add("active");
        else b.classList.remove("active");
      });
      renderDestinations();
      document.getElementById("destinations").scrollIntoView({ behavior: "smooth" });
    }
  };

  // Initial Run
  updateFavoriteCount();
  renderDestinations();
});
