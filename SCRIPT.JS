const WHATSAPP_NUMBER = "919645490736";

const PRODUCTS = [
    {
        id: "smart-pro-plus",
        name: "Smart Pro Plus",
        model: "SPP92TB",
        title: "Smart Pro Plus SPP92TB",
        image: "IMAGES/smart-pro-plus.png",
        imageAvailable: true,
        summary: "2-inch Table Top Billing Machine",
        price: "₹18,000",
        previousPrice: "₹23,500",
        description: "The current homepage identifies this as a 2-inch Table Top Billing Machine.",
        features: [
            "Fast & Clear Printing",
            "GST Compliant",
            "Easy to Operate",
            "Ideal for Retail & Restaurant"
        ],
        specifications: {
            "Technical specifications": "Additional specifications to be added."
        },
        applications: "Retail & restaurant, as stated on the homepage."
    },
    {
        id: "handheld-ticketing",
        name: "Handheld Ticketing Machine",
        model: "",
        title: "Handheld Ticketing Machine",
        image: "IMAGES/handheld-ticketing.png",
        imageAvailable: true,
        summary: "Product details to be added.",
        price: "₹9,500",
        previousPrice: "₹11,000"
    },
    {
        id: "nunix-pos",
        name: "NUNIX Android Touch POS",
        model: "",
        title: "NUNIX Android Touch POS",
        image: "IMAGES/nunix-android-touch-pos.png",
        imageAvailable: true,
        summary: "Product details to be added.",
        price: "₹41,250",
        previousPrice: "₹55,000"
    },
    {
        id: "palmtec-amphibia",
        name: "Palmtec Amphibia",
        model: "",
        title: "Palmtec Amphibia",
        image: "IMAGES/palmtec-amphibia.png",
        imageAvailable: true,
        summary: "Product details to be added.",
        price: "₹10,500",
        previousPrice: "₹12,000"
    },
    {
        id: "smart-pro-sp92",
        name: "Smart Pro",
        model: "SP92TB",
        title: "Smart Pro SP92TB",
        image: "IMAGES/smart-pro-sp92.png",
        imageAvailable: true,
        summary: "Product details to be added.",
        price: "₹14,000",
        previousPrice: "₹16,500"
    },
    {
        id: "smart-pro-sp93",
        name: "Smart Pro",
        model: "SP93TB",
        title: "Smart Pro SP93TB",
        image: "IMAGES/smart-pro-sp93.png",
        imageAvailable: true,
        summary: "Product details to be added.",
        price: "₹17,000",
        previousPrice: "₹17,500"
    },
    {
        id: "thermal-paper-roll-2-inch",
        name: "Thermal Paper Roll",
        model: "57mm",
        title: "Thermal Paper Roll 2 Inch (57mm)",
        image: "IMAGES/thermal-paper-roll-2-inch-57mm-cutout.png",
        imageAvailable: true,
        summary: "57 mm premium thermal receipt roll",
        price: "₹13",
        previousPrice: "₹15",
        description: "Premium-quality 57 mm direct thermal paper for clear, reliable and jam-free receipt printing.",
        features: [
            "57 mm paper width",
            "Sharp, clear print quality",
            "No ink or ribbon required",
            "Smooth, jam-free feeding"
        ],
        specifications: {
            "Paper width": "57 mm",
            "Paper type": "Direct thermal paper",
            "Printing method": "Inkless thermal",
            "Color": "White"
        },
        applications: "Bus ticketing, parking, hotels, restaurants, retail, pharmacies and 57 mm thermal printers."
    },
    {
        id: "thermal-paper-roll-3-inch",
        name: "Thermal Paper Roll",
        model: "79mm",
        title: "Thermal Paper Roll 3 Inch (79mm)",
        image: "IMAGES/thermal-paper-roll-3-inch-79mm-cutout.png",
        imageAvailable: true,
        summary: "79 mm premium thermal receipt roll",
        price: "₹40",
        previousPrice: "₹45",
        description: "Premium-quality 79 mm direct thermal paper for sharp, smudge-free and reliable receipt printing.",
        features: [
            "Approximately 79 mm paper width",
            "Smudge-free printing",
            "Smooth, jam-free feeding",
            "No ink or ribbon required"
        ],
        specifications: {
            "Paper width": "3 inch (approximately 79–80 mm)",
            "Paper type": "Direct thermal paper",
            "Printing method": "Inkless thermal",
            "Color": "White"
        },
        applications: "Bus ticketing, parking, hotels, restaurants, retail, supermarkets and 3-inch thermal printers."
    },
    {
        id: "smart-billing-software",
        name: "Smart Billing Software",
        model: "",
        title: "Smart Billing Software",
        image: "IMAGES/smart-billing-software.png",
        imageAvailable: true,
        summary: "Complete business management software with mobile app",
        price: "₹4,500",
        previousPrice: "₹6,500",
        description: "Business management software for inventory, van sales, billing and complete accounting with a mobile app.",
        features: [
            "Inventory management",
            "Van sales management",
            "Billing and accounting",
            "Mobile app access"
        ],
        specifications: {
            "Product type": "Business management software"
        },
        applications: "Retail stores, wholesale businesses, distribution networks and van sales operations."
    },
    {
        id: "bluetooth-desktop-receipt-printer",
        name: "Bluetooth Desktop Receipt Printer",
        model: "UTKARSH 2.0 Ultra Premium",
        title: "Bluetooth Desktop Receipt Printer",
        image: "IMAGES/bluetooth-desktop-receipt-printer-cutout.png",
        imageAvailable: true,
        summary: "80 mm high-speed desktop receipt printer",
        price: "₹7,500",
        previousPrice: "₹9,800",
        description: "The UTKARSH 2.0 Ultra Premium is an 80 mm desktop thermal receipt printer with Bluetooth, USB and Ethernet connectivity.",
        features: [
            "Bluetooth, USB and Ethernet",
            "203 DPI print resolution",
            "In-built auto-cutter",
            "Drop-in paper loading",
            "BIS certified"
        ],
        specifications: {
            "Printer width": "80 mm",
            "Print resolution": "203 DPI",
            "Printing technology": "Direct thermal",
            "Connectivity": "Bluetooth, USB and Ethernet"
        },
        applications: "Retail, restaurants, hospitals, logistics, supermarkets and e-governance counters."
    },
    {
        id: "windows-touch-pos",
        name: "Windows Touch POS Machine",
        model: "NGX",
        title: "Windows Touch POS Machine",
        image: "IMAGES/windows-touch-pos-machine-cutout.png",
        imageAvailable: true,
        summary: "Windows POS machine for counter billing",
        price: "₹53,000",
        previousPrice: "₹55,000",
        description: "The NGX Windows Touch POS is a Windows POS machine built for counters that run Windows ERP and billing software.",
        features: [
            "Windows operating system",
            "15.6-inch capacitive touchscreen",
            "Ethernet networking",
            "USB connectivity",
            "Quad-core processor"
        ],
        specifications: {
            "Display": "15.6-inch LCD",
            "Touch type": "Capacitive",
            "Processor": "Quad-core",
            "Connectivity": "Ethernet and USB"
        },
        applications: "Retail counters using Tally, Marg, Busy or Windows billing software."
    },
    {
        id: "smart-pro-plus-spp93",
        name: "Smart Pro Plus",
        model: "SPP93TB",
        title: "Smart Pro Plus SPP93TB",
        image: "IMAGES/smart-pro-plus-spp93tb-cutout.png",
        imageAvailable: true,
        summary: "3-inch portable direct thermal billing machine",
        price: "₹21,000",
        previousPrice: "₹28,000",
        description: "The NGX Smart Pro Plus SPP93TB is a portable 3-inch direct thermal billing machine with GST-ready billing and remote data management.",
        features: [
            "3-inch direct thermal printing",
            "GST-ready billing",
            "Remote data management",
            "Over-the-air firmware updates",
            "NGX XPOS Lite app operation"
        ],
        specifications: {
            "Printer width": "3 inch",
            "Printing technology": "Direct thermal",
            "Model": "SPP93TB"
        },
        applications: "Retail, restaurants, grocery stores and portable 3-inch billing."
    }
];

const PRODUCT_BY_ID = new Map(PRODUCTS.map(product => [product.id, product]));

function createWhatsAppURL(message) {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function createProductEnquiryMessage(product) {
    return `Hello Divine Technologies, I am interested in the ${product.title}. Please share the complete product details, specifications and pricing.`;
}

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "\"": "&quot;",
        "'": "&#39;"
    }[character]));
}

function productDetailURL(product) {
    return `PRODUCT.HTML?product=${encodeURIComponent(product.id)}`;
}

function productImagePlaceholder(product, className) {
    if (product.imageAvailable) {
        let imageSource = product.image;
        let sizeClass = "";

        if (product.id === "smart-pro-plus" && className === "product-detail-image-placeholder") {
            imageSource = "IMAGES/smart-pro-plus-spp92tb-cutout.png";
        } else if (product.id === "smart-pro-plus") {
            sizeClass = " smart-pro-plus-image";
        }

        return `<img class="${className} product-photo${sizeClass}" src="${escapeHTML(imageSource)}" alt="${escapeHTML(product.title)}" loading="lazy" decoding="async">`;
    }

    return `<div class="${className} image-placeholder" role="img" aria-label="${escapeHTML(product.title)} image unavailable">
        <span>Product image unavailable</span>
        <small>${escapeHTML(product.image)}</small>
    </div>`;
}

function renderProductCard(product, includeWhatsapp = false) {
    const detailURL = productDetailURL(product);
    const missingIds = new Set([
        "thermal-paper-roll-2-inch",
        "thermal-paper-roll-3-inch",
        "smart-billing-software",
        "bluetooth-desktop-receipt-printer",
        "windows-touch-pos",
        "smart-pro-plus-spp93"
    ]);
    const newCardClass = missingIds.has(product.id) ? " new-product-card" : "";
    const whatsappButton = includeWhatsapp && missingIds.has(product.id)
        ? `<a href="#" class="whatsapp-product" data-product-enquiry="${escapeHTML(product.id)}"
               aria-label="WhatsApp enquiry for ${escapeHTML(product.title)}">
                <img src="IMAGES/whatsapp.svg" alt="">
                <span>WHATSAPP</span>
            </a>`
        : "";

    return `<article class="product-card${newCardClass}" data-name="${escapeHTML(product.title.toLowerCase())}">
        <a href="${detailURL}" class="product-image" aria-label="View ${escapeHTML(product.title)} details">
            ${productImagePlaceholder(product, "catalogue-image-placeholder")}
        </a>
        <h3><a href="${detailURL}">${escapeHTML(product.title)}</a></h3>
        <p class="product-summary">${escapeHTML(product.summary)}</p>
        <div class="price">
            <strong>${escapeHTML(product.price)}</strong>
            <del>${escapeHTML(product.previousPrice)}</del>
        </div>
        <div class="product-actions">
            <a href="${detailURL}" class="more-info-button" aria-label="More info about ${escapeHTML(product.title)}">
                <span>More Info</span>
            </a>
            ${whatsappButton}
        </div>
    </article>`;
}

function renderCatalogue() {
    const catalogue = document.querySelector("[data-catalogue-grid]");
    if (!catalogue) {
        return;
    }

    catalogue.innerHTML = PRODUCTS.map(product => renderProductCard(product, false)).join("");
}

function renderHomepageMissingProducts() {
    const group = document.querySelector(".product-track-group");
    if (!group) {
        return;
    }

    const missingIds = [
        "thermal-paper-roll-2-inch",
        "thermal-paper-roll-3-inch",
        "smart-billing-software",
        "bluetooth-desktop-receipt-printer",
        "windows-touch-pos",
        "smart-pro-plus-spp93"
    ];

    missingIds.forEach(id => {
        const product = PRODUCT_BY_ID.get(id);
        if (product) {
            group.insertAdjacentHTML("beforeend", renderProductCard(product));
        }
    });
}

function renderProductDetails() {
    const container = document.querySelector("[data-product-details]");
    if (!container) {
        return;
    }

    const productId = new URLSearchParams(window.location.search).get("product");
    const product = PRODUCT_BY_ID.get(productId);

    if (!product) {
        container.innerHTML = `<div class="notice-card">
            <h1>Product not found</h1>
            <p>Please choose a product from the catalogue.</p>
            <a class="button primary-button" href="SHOP.HTML">Browse Products</a>
        </div>`;
        return;
    }

    document.title = `${product.title} | Divine Technologies`;

    const features = product.features || ["Product features to be added."];
    const specifications = Object.entries(product.specifications || {
        "Product specifications": "To be confirmed by Divine Technologies."
    });
    const model = product.model || "Model information to be added.";
    const description = product.description || "A verified product description has not been provided in the current project files.";
    const applications = product.applications || "Suitable applications to be confirmed by Divine Technologies.";

    container.innerHTML = `<nav class="breadcrumbs" aria-label="Breadcrumb">
        <a href="INDEX.HTML">Home</a><span>/</span><a href="SHOP.HTML">Shop</a><span>/</span><span>${escapeHTML(product.title)}</span>
    </nav>
    <div class="product-detail-layout">
        <div class="product-detail-media">
            ${productImagePlaceholder(product, "product-detail-image-placeholder")}
            <p class="media-note">Additional product images are not available in the current project.</p>
        </div>
        <div class="product-detail-intro">
            <p class="eyebrow">PRODUCT DETAILS</p>
            <h1>${escapeHTML(product.title)}</h1>
            <p class="product-model">${escapeHTML(model)}</p>
            <p class="detail-summary">${escapeHTML(product.summary)}</p>
            <div class="detail-price">
                <strong>${escapeHTML(product.price)}</strong>
                <del>${escapeHTML(product.previousPrice)}</del>
            </div>
            <p class="detail-description">${escapeHTML(description)}</p>
            <a href="#" class="button whatsapp-button detail-enquiry" data-product-enquiry="${escapeHTML(product.id)}">
                <img class="whatsapp-enquiry-icon" src="IMAGES/whatsapp.svg" alt="">
                Enquire about this product on WhatsApp
            </a>
        </div>
    </div>
    <div class="product-information-grid">
        <section class="information-panel">
            <h2>Key Features</h2>
            <ul>${features.map(feature => `<li>${escapeHTML(feature)}</li>`).join("")}</ul>
        </section>
        <section class="information-panel">
            <h2>Technical Specifications</h2>
            <dl>${specifications.map(([label, value]) => `<div><dt>${escapeHTML(label)}</dt><dd>${escapeHTML(value)}</dd></div>`).join("")}</dl>
        </section>
        <section class="information-panel">
            <h2>Interfaces & Connectivity</h2>
            <p>To be confirmed by Divine Technologies.</p>
        </section>
        <section class="information-panel">
            <h2>Applications</h2>
            <p>${escapeHTML(applications)}</p>
        </section>
        <section class="information-panel">
            <h2>Warranty</h2>
            <p>Warranty terms are not specified in the current project files. Please confirm with Divine Technologies.</p>
        </section>
        <section class="information-panel">
            <h2>Manuals & Demonstrations</h2>
            <p>No product manual or verified demonstration video is available in the current project.</p>
        </section>
    </div>`;

    bindProductEnquiryLinks(container);
    if (window.lucide) {
        window.lucide.createIcons();
    }
}

function bindProductEnquiryLinks(root = document) {
    root.querySelectorAll("[data-product-enquiry]").forEach(link => {
        const product = PRODUCT_BY_ID.get(link.dataset.productEnquiry);
        if (!product) {
            console.error(`Unknown product enquiry ID: ${link.dataset.productEnquiry}`);
            return;
        }

        link.href = createWhatsAppURL(createProductEnquiryMessage(product));
        link.target = "_blank";
        link.rel = "noopener noreferrer";
    });

    root.querySelectorAll("[data-whatsapp]").forEach(link => {
        link.href = createWhatsAppURL(link.dataset.whatsapp);
        link.target = "_blank";
        link.rel = "noopener noreferrer";
    });
}

function initializeContactForm() {
    const form = document.querySelector("[data-contact-form]");
    if (!form) {
        return;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = new FormData(form);
        const name = String(formData.get("name") || "").trim();
        const email = String(formData.get("email") || "").trim();
        const message = String(formData.get("message") || "").trim();
        const enquiry = [
            "Hello Divine Technologies, I would like to enquire.",
            "",
            `Name: ${name}`,
            `Email: ${email}`,
            "",
            "Message:",
            message
        ].join("\n");

        window.location.href = createWhatsAppURL(enquiry);
    });
}

function initializeProductSpotlight() {
    const stage = document.querySelector("[data-product-spotlight]");
    if (!stage) {
        return;
    }

    const products = PRODUCTS.filter(product => product.imageAvailable && product.image);
    if (!products.length) {
        console.error("Product spotlight requires at least one available product image.");
        return;
    }

    const artwork = stage.querySelector("[data-spotlight-art]");
    const layers = products.slice(0, 2).map(() => {
        const figure = document.createElement("figure");
        figure.className = "cinematic-product-art";
        const image = document.createElement("img");
        image.decoding = "async";
        figure.append(image);
        artwork.append(figure);
        return figure;
    });

    const preloadedImages = products.map(product => {
        const preload = new Image();
        preload.src = product.image;
        return preload;
    });

    let activeLayer = 0;
    let activeProduct = 0;
    let rotationTimer;
    let isTransitioning = false;
    let replayAfterTransition = false;
    let heroVisible = typeof IntersectionObserver !== "function";
    let hasEnteredHero = false;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const scheduleNext = (delay = 5000) => {
        window.clearTimeout(rotationTimer);
        if (reducedMotion.matches || document.hidden || !heroVisible) {
            return;
        }
        rotationTimer = window.setTimeout(showNext, delay);
    };

    const showNext = () => {
        if (!heroVisible || document.hidden || reducedMotion.matches || isTransitioning) {
            return;
        }

        const nextProduct = (activeProduct + 1) % products.length;
        const nextLayer = 1 - activeLayer;
        const outgoing = layers[activeLayer];
        const incoming = layers[nextLayer];
        const incomingImage = incoming.querySelector("img");

        isTransitioning = true;
        incomingImage.src = preloadedImages[nextProduct].src;
        incomingImage.alt = products[nextProduct].title;
        incoming.classList.add("is-entering");

        window.requestAnimationFrame(() => {
            window.requestAnimationFrame(() => {
                incoming.classList.remove("is-entering");
                incoming.classList.add("is-active");
                outgoing.classList.remove("is-active");
                outgoing.classList.add("is-leaving");
            });
        });

        activeProduct = nextProduct;
        activeLayer = nextLayer;
        stage.setAttribute("aria-label", `${products[activeProduct].title}, featured product`);

        window.setTimeout(() => {
            outgoing.classList.remove("is-leaving");
            isTransitioning = false;
            const delay = replayAfterTransition ? 0 : 5000;
            replayAfterTransition = false;
            scheduleNext(delay);
        }, 1100);
    };

    const firstImage = layers[0].querySelector("img");
    firstImage.src = products[0].image;
    firstImage.alt = products[0].title;
    layers[0].classList.add("is-active");
    stage.setAttribute("aria-label", `${products[0].title}, featured product`);

    document.addEventListener("visibilitychange", () => {
        window.clearTimeout(rotationTimer);
        if (!document.hidden) {
            scheduleNext(5000);
        }
    });

    if (typeof IntersectionObserver === "function") {
        const hero = stage.closest(".cinematic-hero") || stage;
        const observer = new IntersectionObserver(entries => {
            const isVisible = entries.some(entry => entry.isIntersecting);
            if (isVisible === heroVisible) {
                return;
            }

            heroVisible = isVisible;
            if (!heroVisible) {
                window.clearTimeout(rotationTimer);
                return;
            }

            if (hasEnteredHero) {
                if (isTransitioning) {
                    replayAfterTransition = true;
                } else {
                    scheduleNext(0);
                }
                return;
            }

            hasEnteredHero = true;
            scheduleNext();
        }, { threshold: 0.15 });

        observer.observe(hero);
    } else {
        scheduleNext();
    }
}

function initializeSoftwareFeatureReveal() {
    const stage = document.querySelector("[data-software-image-stage]");
    if (!stage || window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
        typeof IntersectionObserver !== "function") {
        return;
    }

    const masks = Array.from(stage.querySelectorAll("[data-software-feature-mask]"));
    const section = stage.closest(".software-card");
    if (!masks.length || !section) {
        return;
    }

    stage.classList.add("is-sequential");

    const revealDuration = 500;
    const staggerDelay = 350;
    const visibleHold = 2500;
    const resetDuration = 550;
    let cycleTimer;

    const schedule = (callback, delay) => {
        window.clearTimeout(cycleTimer);
        cycleTimer = window.setTimeout(() => {
            cycleTimer = undefined;
            callback();
        }, delay);
    };

    const resetCycle = () => {
        masks.forEach(mask => mask.classList.remove("is-revealed"));
        schedule(() => revealFeature(0), resetDuration);
    };

    const revealFeature = index => {
        masks[index].classList.add("is-revealed");
        if (index < masks.length - 1) {
            schedule(() => revealFeature(index + 1), staggerDelay);
        } else {
            schedule(resetCycle, revealDuration + visibleHold);
        }
    };

    const observer = new IntersectionObserver(entries => {
        if (!entries.some(entry => entry.isIntersecting)) {
            return;
        }

        observer.disconnect();
        revealFeature(0);
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -10% 0px"
    });

    observer.observe(section);
}

function initializeBrandShowcase() {
    const section = document.querySelector("[data-brand-showcase]");
    if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
    }

    if (typeof IntersectionObserver !== "function") {
        section.classList.add("is-in-view");
        return;
    }

    const observer = new IntersectionObserver(entries => {
        section.classList.toggle(
            "is-in-view",
            entries.some(entry => entry.isIntersecting)
        );
    }, { threshold: 0.01 });

    observer.observe(section);
}

function initializeAboutReveal() {
    const elements = document.querySelectorAll("[data-about-reveal]");
    if (!elements.length) {
        return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
        typeof IntersectionObserver !== "function") {
        elements.forEach(element => element.classList.add("is-revealed"));
        return;
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-revealed");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

    elements.forEach((element, index) => {
        if (element.classList.contains("about-highlight-card")) {
            element.style.setProperty("--reveal-delay", `${index * 100}ms`);
        }
        observer.observe(element);
    });
}

document.addEventListener("DOMContentLoaded", function () {
    if (window.lucide) {
        window.lucide.createIcons();
    }

    const yearElement = document.getElementById("year");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    const menuToggle = document.getElementById("menuToggle");
    const navigation = document.getElementById("navigation");

    if (menuToggle && navigation) {
        menuToggle.addEventListener("click", function () {
            navigation.classList.toggle("show");
            const isOpen = navigation.classList.contains("show");
            menuToggle.setAttribute("aria-expanded", String(isOpen));
            menuToggle.innerHTML = isOpen
                ? '<i data-lucide="x"></i>'
                : '<i data-lucide="menu"></i>';

            if (window.lucide) {
                window.lucide.createIcons();
            }
        });
    }

    renderCatalogue();
    renderHomepageMissingProducts();
    renderProductDetails();
    initializeProductSpotlight();
    initializeSoftwareFeatureReveal();
    initializeBrandShowcase();
    initializeAboutReveal();
    bindProductEnquiryLinks();
    initializeContactForm();

    const productMarquee = document.querySelector("[data-product-marquee]");
    const productTrack = productMarquee && productMarquee.querySelector(".product-track");
    const productGroup = productTrack && productTrack.querySelector(".product-track-group");
    if (productGroup) {
        const duplicateGroup = productGroup.cloneNode(true);
        duplicateGroup.setAttribute("aria-hidden", "true");
        duplicateGroup.querySelectorAll("a, button, input, select, textarea, [tabindex]").forEach(element => {
            element.setAttribute("tabindex", "-1");
        });
        productTrack.append(duplicateGroup);
        productMarquee.classList.add("is-marquee");
        bindProductEnquiryLinks(duplicateGroup);
    }

    const searchInput = document.getElementById("productSearch");
    if (searchInput) {
        searchInput.addEventListener("input", function () {
            const searchValue = this.value.toLowerCase().trim();
            document.querySelectorAll(".product-card").forEach(card => {
                card.style.display = card.dataset.name.includes(searchValue) ? "" : "none";
            });
        });
    }

    if (window.lucide) {
        window.lucide.createIcons();
    }
});
