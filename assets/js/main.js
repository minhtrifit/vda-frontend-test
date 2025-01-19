// ============================== Navbar logo ==============================
const navbarLogo = document.querySelector(".navbar-logo");

navbarLogo.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ============================== Flash sale slider ==============================
const flashSaleSwiper = new Swiper(".flash-sale-swiper", {
  direction: "horizontal",
  loop: true,
  spaceBetween: 10,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

// ============================== Product category slider ==============================
var swiper = new Swiper(".product-category-swiper", {
  direction: "horizontal",
  loop: true,
  spaceBetween: 10,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// ============================== Massage chair slider ==============================
const massageChairSwiper = new Swiper(".massage-chair-swiper", {
  direction: "horizontal",
  loop: true,
  spaceBetween: 10,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// ============================== Showroom tab ==============================
const showrooms = [
  {
    location: "Hà Nội",
    showrooms: [
      {
        name: "ABCSport Đống Đa",
        address: "94 Nguyễn Lương Bằng, Phường Nam Đồng, Quận Đống Đa, Hà Nội",
        phone: "(024) 6259 1760",
        carParked: true,
      },
      {
        name: "ABCSport Hà Đông",
        address: "96 Lê Trọng Tấn, P. La Khê, Q. Hà Đông, Hà Nội",
        phone: "(024) 6926 93 94",
        carParked: true,
      },
      {
        name: "ABCSport Long Biên",
        address:
          "575-577 Nguyễn Văn Cừ, Tổ 16, Phường Gia Thụy, Quận Long Biên, Hà Nội",
        phone: "(024) 6672 2738",
        carParked: true,
      },
      {
        name: "ABCSport Hoàng Mai",
        address:
          "1169 - 1171 Giải Phóng, Phường Thịnh Liệt, Quận Hoàng Mai, Tp Hà Nội",
        phone: "(024) 6680 6862",
        carParked: false,
      },
    ],
  },
  {
    location: "Hồ Chí Minh",
    showrooms: [
      {
        name: "ABCSport Quận 6",
        address: "833-835 Hồng Bàng, Phường 9, Quận 6, Tp Hồ Chí Minh",
        phone: "(028) 66600 147",
        carParked: true,
      },
      {
        name: "ABCSport Bình Tân",
        address: "110 Lê Văn Quới, KP17, Bình Hưng Hoà A, Bình Tân",
        phone: "(028) 66 810 110",
        carParked: true,
      },
      {
        name: "ABCSport Thủ Đức",
        address: "Số 9, Đào Trinh Nhất, Phường Linh Tây, TP.Thủ Đức.",
        phone: "(028) 6680 6863",
        carParked: true,
      },
      {
        name: "ABCSport Quận 12",
        address:
          "55/4 Tô Ký, Tổ 1 KP3, Tân Chánh Hiệp, Quận 12 (Đối diện Ủy ban nhân dân Xã Trung Chánh)",
        phone: "(028) 66 860 869",
        carParked: true,
      },
    ],
  },
  {
    location: "Miền Bắc",
    showrooms: [
      {
        name: "ABCSport Hải Phòng",
        address: "số 86 Lô G5 Phạm Văn Đồng, Anh Dũng, Dương Kinh, HP",
        phone: "(0225) 6567 986",
        carParked: true,
      },
      {
        name: "ABCSport Thái Nguyên",
        address: "373A Hoàng Văn Thụ, P. Đồng Quang, TP. Thái Nguyên",
        phone: "(0208) 628 6333",
        carParked: true,
      },
      {
        name: "ABCSport Vĩnh Phúc",
        address: "29 Lê Hồng Phong, P. Đồng Tâm, TP. Vĩnh Yên",
        phone: "0211.6259.128",
        carParked: true,
      },
      {
        name: "ABCSport Bắc Ninh",
        address:
          "576A Nguyễn Trãi, TP Bắc Ninh ( Đèn xanh đèn đỏ Cầu Bồ Sơn - Viện Đa Khoa Tỉnh)",
        phone: "0222 650 2323",
        carParked: true,
      },
    ],
  },
  {
    location: "Miền Trung",
    showrooms: [
      {
        name: "ABCSport Đà Nẵng",
        address: "515-517 Nguyễn Hữu Thọ, Khuê Trung, Cẩm Lệ, Đà Nẵng",
        phone: "(0236) 6 553 111",
        carParked: true,
      },
      {
        name: "ABCSport Buôn Ma Thuột",
        address:
          "100 - 102 Phan Chu Trinh, phường Thắng Lợi, thành phố Buôn Ma Thuột, Đắk Lắk",
        phone: "(0262) 3571 777",
        carParked: true,
      },
      {
        name: "ABCSport Quảng Bình",
        address: "344 Trần Hưng Đạo, Phường Nam Lý, TP.Đồng Hới, Quảng Bình",
        phone: "(0232) 6280 280",
        carParked: true,
      },
      {
        name: "ABCSport Nha Trang",
        address:
          "Lô 3K, đường Tố Hữu, tầng trệt chung cư CT2, toà nhà VCN Phước Hải, Phường Phước Hải, TP Nha Trang",
        phone: "0258 6500 499",
        carParked: true,
      },
    ],
  },
  {
    location: "Miền Nam",
    showrooms: [
      {
        name: "ABCSport BIÊN HÒA 3 - ĐỒNG NAI",
        address: "729 Phạm Văn Thuận, Kp2, Thành phố Biên Hòa, Đồng Nai",
        phone: "02516599888",
        carParked: true,
      },
      {
        name: "ABCSport Cà Mau",
        address: "90 Trần Hưng Đạo, Phường 5, TP. Cà Mau",
        phone: "(0290) 6277 678",
        carParked: true,
      },
      {
        name: "ABCSport Bình Dương",
        address: "458 Đại Lộ Bình Dương, Hiệp Thành, Thủ Dầu Một, Bình Dương  ",
        phone: "(0274) 220 0356",
        carParked: true,
      },
      {
        name: "ABCSport Bà Rịa - Vũng Tàu",
        address:
          "305 CTM8, Phường Phước Hiệp, Thành phố Bà Rịa, tỉnh Bà Rịa Vũng Tàu",
        phone: "(0254) 627 6789",
        carParked: true,
      },
    ],
  },
];

const navTab = document.querySelector(".nav_tabs");
const navTabActive = document.querySelector(".nav_tabs .active");
const navItems = document.querySelectorAll(".nav_tabs .nav_item");
const navSectionsTabs = document.querySelectorAll(".section_tabs .tab");

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    const rect = item.getBoundingClientRect();
    const navTabsRect = navTab.getBoundingClientRect();

    navTabActive.style.width = `${rect.width}px`;
    navTabActive.style.left = `${rect.left - navTabsRect.left}px`;
  });
});

const loadShowRoomItem = (tab, targetTabId) => {
  navSectionsTabs.forEach((ns) => {
    if (ns.id === targetTabId) {
      ns.classList.add("active");

      const targetLocation = showrooms.find((s) => {
        return s.location.toLowerCase() === tab.textContent.toLocaleLowerCase();
      });

      let showroomsStr = "";

      if (targetLocation) {
        targetLocation.showrooms?.map((s) => {
          showroomsStr += `
          <div style="display: flex; flex-direction: column; gap: 5px">
                <h3
                  style="
                    color: var(--orange-color);
                    font-size: 1rem;
                    font-weight: bold;
                  "
                >
                  ${s.name}
                </h3>
                <span style="font-size: 0.9rem; font-weight: 600">
                  ${s.address}
                </span>
                <span style="font-size: 0.9rem; font-weight: 600">
                  Điện thoại: ${s.phone}
                </span>
                <span
                  ><span
                    style="
                      color: var(--orange-color);
                      text-decoration: underline;
                    "
                    >Xem bản đồ</span
                  >
                  (${
                    s.carParked ? "Có chỗ đậu ô tô" : "Không có chỗ đậu ô tô"
                  })</span
                >
              </div>
          `;

          ns.innerHTML = showroomsStr;
        });
      }
    } else ns.classList.remove("active");
  });
};

navItems.forEach((tab) => {
  return tab.addEventListener("click", (e) => {
    const targetTabId = `tab${e.target.dataset.tab}`;

    loadShowRoomItem(tab, targetTabId);
  });
});

loadShowRoomItem(navItems[0], "tab1");

// ============================== New event slider ==============================
const newEventSwiper = new Swiper(".new-event-swiper", {
  direction: "horizontal",
  loop: true,
  spaceBetween: 10,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});
