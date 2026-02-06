// ============================================
// DATA & STATE MANAGEMENT
// ============================================

// Produk data
const productsData = {
    "Streaming & Music": [
        { name: "Netflix", icon: "🎬", color: "#E50914" },
        { name: "Spotify", icon: "🎵", color: "#1DB954" },
        { name: "Youtube", icon: "📺", color: "#FF0000" },
        { name: "Bstation", icon: "🅱️", color: "#00B2FF" },
        { name: "Hotstar", icon: "🔥", color: "#FF6B00" },
        { name: "Drakor.id", icon: "🇰🇷", color: "#FF375F" },
        { name: "Genflix", icon: "🎞️", color: "#0066CC" },
        { name: "HBO GO", icon: "🏰", color: "#000000" },
        { name: "HBO Max", icon: "🏰", color: "#000000" },
        { name: "Apple Music", icon: "🍎", color: "#FA243C" },
        { name: "Resso", icon: "🎶", color: "#FF0050" },
        { name: "Vidio Premier", icon: "📹", color: "#FF2D55" },
        { name: "Vikki Pass", icon: "🎫", color: "#7B61FF" },
        { name: "VIU", icon: "🟣", color: "#5C2D91" },
        { name: "Usee TV", icon: "📡", color: "#FF6B00" },
        { name: "Youku", icon: "📼", color: "#1E8BFF" },
        { name: "Prime Video", icon: "📦", color: "#00A8E1" },
        { name: "Mola TV", icon: "🟢", color: "#00D95F" },
        { name: "Iqiyi", icon: "🍿", color: "#00B2FF" },
        { name: "Iflix", icon: "🎥", color: "#ED1C24" }
    ],
    "Editing": [
        { name: "VSCO Fullpack", icon: "📸", color: "#000000" },
        { name: "Canva", icon: "🎨", color: "#00C4CC" },
        { name: "Capcut", icon: "✂️", color: "#00C2FF" },
        { name: "Alight Motion", icon: "🎞️", color: "#7B61FF" },
        { name: "Dazz Cam (iOS)", icon: "🌟", color: "#FFD700", tags: ["iOS"] },
        { name: "Inshot", icon: "🎬", color: "#FF375F" },
        { name: "Lightroom", icon: "🖼️", color: "#31A8FF" },
        { name: "Picsart", icon: "🖌️", color: "#00B2FF" },
        { name: "Oldroll", icon: "🎞️", color: "#FF6B00", tags: ["iOS"] },
        { name: "Remini (iOS)", icon: "✨", color: "#7B61FF", tags: ["iOS"] },
        { name: "Tezza", icon: "📱", color: "#FF6B9D", tags: ["iOS"] },
        { name: "Unfold", icon: "📖", color: "#000000", tags: ["iOS"] },
        { name: "VN Video Editor (iOS)", icon: "🎥", color: "#00C2FF", tags: ["iOS"] }
    ],
    "Followers / Social Media": [
        { name: "Instagram", icon: "📱", color: "#E4405F" },
        { name: "Facebook", icon: "📘", color: "#1877F2" },
        { name: "X (Twitter)", icon: "🐦", color: "#000000" },
        { name: "Youtube", icon: "▶️", color: "#FF0000" },
        { name: "Pinterest", icon: "📌", color: "#E60023" },
        { name: "Shopee", icon: "🛍️", color: "#FF6B00" },
        { name: "Livegram", icon: "📲", color: "#00B2FF" },
        { name: "Soundcloud", icon: "🎧", color: "#FF3300" },
        { name: "Tiktok", icon: "🎵", color: "#000000" },
        { name: "Twitch", icon: "🎮", color: "#9146FF" },
        { name: "Telegram", icon: "📨", color: "#0088CC" }
    ],
    "VPN": [
        { name: "HMA", icon: "🛡️", color: "#00A8E1" },
        { name: "Nord", icon: "🔒", color: "#4687FF" },
        { name: "SurfShark", icon: "🦈", color: "#00C2FF" },
        { name: "VYPR", icon: "🐉", color: "#00D95F" },
        { name: "Windscribe", icon: "🌬️", color: "#0066CC" }
    ],
    "Education": [
        { name: "Duolingo", icon: "🦉", color: "#58CC02" },
        { name: "Grammarly", icon: "✍️", color: "#15C39A" },
        { name: "Microsoft 365", icon: "💼", color: "#D83B01" },
        { name: "Scribd", icon: "📚", color: "#1E7B85" },
        { name: "Wattpad", icon: "📖", color: "#FF6B6B" },
        { name: "Goodnotes (iOS)", icon: "📓", color: "#7B61FF", tags: ["iOS"] },
        { name: "Mathway", icon: "🧮", color: "#00C2FF" },
        { name: "Prezi", icon: "📊", color: "#318BFF" },
        { name: "Quizbot", icon: "🤖", color: "#FF6B00" },
        { name: "Skillshare", icon: "🎓", color: "#00B2FF" },
        { name: "WPS", icon: "📄", color: "#007AFF" }
    ],
    "Others": [
        { name: "Get Contact", icon: "📇", color: "#7B61FF" },
        { name: "Google Drive", icon: "☁️", color: "#4285F4" },
        { name: "Email", icon: "📧", color: "#EA4335" }
    ]
};

// State aplikasi
let appState = {
    user: null,
    balance: 0,
    transactions: [],
    invoices: [],
    currentPage: 'home',
    selectedProduct: null,
    selectedPackage: null,
    depositAmount: 0,
    paymentMethod: null,
    activeInvoice: null
};

// Warna untuk kategori
const categoryColors = {
    "Streaming & Music": "#FF6B9D",
    "Editing": "#4AE3FF",
    "Followers / Social Media": "#FFB74D",
    "VPN": "#9575CD",
    "Education": "#4CAF50",
    "Others": "#78909C"
};

// Ikon untuk kategori
const categoryIcons = {
    "Streaming & Music": "🎵",
    "Editing": "🎨",
    "Followers / Social Media": "📱",
    "VPN": "🛡️",
    "Education": "🎓",
    "Others": "📦"
};

// Deskripsi produk
const productDescriptions = {
    "Streaming & Music": "Akses premium layanan streaming musik dan video tanpa iklan dengan kualitas terbaik.",
    "Editing": "Aplikasi editing foto dan video premium dengan fitur lengkap dan template eksklusif.",
    "Followers / Social Media": "Tingkatkan popularitas akun media sosial Anda dengan layanan yang aman dan terpercaya.",
    "VPN": "Lindungi privasi online Anda dengan VPN premium akses server global tanpa batas.",
    "Education": "Akses materi pembelajaran premium dan tools pendidikan dengan fitur lengkap.",
    "Others": "Berbagai layanan digital lainnya untuk kebutuhan sehari-hari."
};

// Paket harga untuk setiap produk
const generatePackages = (productName, category) => {
    let basePrice = 0;
    switch(category) {
        case "Streaming & Music": basePrice = 25000; break;
        case "Editing": basePrice = 30000; break;
        case "Followers / Social Media": basePrice = 15000; break;
        case "VPN": basePrice = 40000; break;
        case "Education": basePrice = 35000; break;
        case "Others": basePrice = 20000; break;
    }
    
    if (productName.includes("Netflix") || productName.includes("Spotify") || productName.includes("Youtube")) {
        basePrice = 35000;
    }
    
    if (productName.includes("iOS")) {
        basePrice += 10000;
    }
    
    return [
        {
            name: "Basic",
            price: basePrice,
            features: [
                "1 bulan akses penuh",
                "Dukungan standar",
                "Proses aktivasi 5-30 menit"
            ]
        },
        {
            name: "Plus",
            price: basePrice * 3,
            features: [
                "3 bulan akses penuh",
                "Dukungan prioritas",
                "Proses aktivasi 1-15 menit",
                "Backup data"
            ]
        },
        {
            name: "Pro",
            price: basePrice * 6,
            features: [
                "6 bulan akses penuh",
                "Dukungan 24/7",
                "Proses aktivasi instan",
                "Backup data premium",
                "Fitur eksklusif"
            ]
        }
    ];
};

// Durasi proses
const getProcessTime = (category) => {
    switch(category) {
        case "Streaming & Music": return "5-30 menit";
        case "Editing": return "1-10 menit";
        case "Followers / Social Media": return "10 menit - 3 jam";
        case "VPN": return "1-15 menit";
        case "Education": return "5-20 menit";
        default: return "1-30 menit";
    }
};

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    loadStateFromStorage();
    setupEventListeners();
    setupRouting();
    renderHomePage();
    updateBalanceDisplay();
    updateUserDisplay();
    setupBannerSlider();
    generateSparkles();
    updateTransactionsDisplay();
});

// ============================================
// STATE MANAGEMENT
// ============================================

function loadStateFromStorage() {
    const storedUser = localStorage.getItem('flystore_user');
    const storedBalance = localStorage.getItem('flystore_balance');
    const storedTransactions = localStorage.getItem('flystore_transactions');
    const storedInvoices = localStorage.getItem('flystore_invoices');
    
    appState.user = storedUser ? JSON.parse(storedUser) : null;
    appState.balance = storedBalance ? parseInt(storedBalance) : 0;
    appState.transactions = storedTransactions ? JSON.parse(storedTransactions) : [];
    appState.invoices = storedInvoices ? JSON.parse(storedInvoices) : [];
    
    if (!appState.user) {
        appState.user = {
            name: "Guest",
            email: "guest@flystore.com",
            initial: "G"
        };
    }
}

function saveStateToStorage() {
    localStorage.setItem('flystore_user', JSON.stringify(appState.user));
    localStorage.setItem('flystore_balance', JSON.stringify(appState.balance));
    localStorage.setItem('flystore_transactions', JSON.stringify(appState.transactions));
    localStorage.setItem('flystore_invoices', JSON.stringify(appState.invoices));
}

// ============================================
// UI RENDERING FUNCTIONS
// ============================================

function renderHomePage() {
    // Render kategori
    const categoriesGrid = document.getElementById('categoriesGrid');
    categoriesGrid.innerHTML = '';
    
    Object.keys(productsData).forEach(category => {
        const categoryItem = document.createElement('div');
        categoryItem.className = 'category-item ripple';
        categoryItem.dataset.category = category;
        categoryItem.innerHTML = `
            <div class="category-icon" style="background: ${categoryColors[category]}">
                ${categoryIcons[category]}
            </div>
            <div class="category-name">${category}</div>
        `;
        categoryItem.addEventListener('click', () => {
            navigateToPage('products');
            setTimeout(() => {
                document.getElementById('productsSearch').value = category;
                filterProducts();
            }, 300);
        });
        categoriesGrid.appendChild(categoryItem);
    });
    
    // Render produk populer
    const popularProducts = document.getElementById('popularProducts');
    popularProducts.innerHTML = '';
    
    let allProducts = [];
    Object.keys(productsData).forEach(category => {
        productsData[category].forEach(product => {
            allProducts.push({...product, category});
        });
    });
    
    const shuffled = allProducts.sort(() => 0.5 - Math.random());
    const selectedProducts = shuffled.slice(0, 6);
    
    selectedProducts.forEach(product => {
        const productCard = createProductCard(product);
        popularProducts.appendChild(productCard);
    });
}

function renderProductsPage(filter = '') {
    const productsContainer = document.getElementById('productsContainer');
    productsContainer.innerHTML = '';
    
    Object.keys(productsData).forEach(category => {
        const categoryProducts = productsData[category];
        const filteredProducts = categoryProducts.filter(product => 
            product.name.toLowerCase().includes(filter.toLowerCase()) || 
            category.toLowerCase().includes(filter.toLowerCase())
        );
        
        if (filteredProducts.length > 0) {
            const categorySection = document.createElement('div');
            categorySection.className = 'category-section';
            categorySection.innerHTML = `
                <h3 class="section-title">
                    <span style="background: ${categoryColors[category]}; width: 30px; height: 30px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-right: 10px; color: white;">
                        ${categoryIcons[category]}
                    </span>
                    ${category}
                </h3>
                <div class="products-grid" id="products-${category.replace(/\s+/g, '-')}"></div>
            `;
            
            productsContainer.appendChild(categorySection);
            
            const productsGrid = categorySection.querySelector('.products-grid');
            filteredProducts.forEach(product => {
                const productCard = createProductCard({...product, category});
                productsGrid.appendChild(productCard);
            });
        }
    });
}

function createProductCard(product) {
    const productCard = document.createElement('div');
    productCard.className = 'product-card ripple';
    productCard.dataset.product = product.name;
    productCard.dataset.category = product.category;
    
    const isIOS = product.tags && product.tags.includes('iOS');
    
    productCard.innerHTML = `
        ${isIOS ? '<div class="ios-tag">iOS</div>' : ''}
        <div class="product-icon" style="background: ${product.color}">
            ${product.icon}
        </div>
        <div class="product-name">${product.name}</div>
        <div class="product-category">${product.category}</div>
        <div class="product-price">Rp ${generatePackages(product.name, product.category)[0].price.toLocaleString()}</div>
    `;
    
    productCard.addEventListener('click', () => {
        navigateToPage(`product/${product.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`);
        renderProductDetailPage(product);
    });
    
    return productCard;
}

function renderProductDetailPage(product) {
    const page = document.getElementById('product-detail-page');
    const packages = generatePackages(product.name, product.category);
    const processTime = getProcessTime(product.category);
    
    const isIOS = product.tags && product.tags.includes('iOS');
    
    page.innerHTML = `
        <div class="product-detail-header">
            <div class="product-detail-icon" style="background: ${product.color}">
                ${product.icon}
            </div>
            <div class="product-detail-title">
                <h1>${product.name}</h1>
                <div class="product-detail-category">
                    ${product.category} ${isIOS ? '• <span style="color: #FFB74D; font-weight: bold;">iOS</span>' : ''}
                </div>
            </div>
        </div>
        
        <div class="cloud-card">
            <h3 style="margin-bottom: 15px; color: var(--primary);">Deskripsi</h3>
            <p style="color: #555; line-height: 1.6; margin-bottom: 20px;">
                ${productDescriptions[product.category]} Layanan ini memberikan akses penuh ke semua fitur premium.
            </p>
            
            <h3 style="margin-bottom: 15px; color: var(--primary);">Pilih Paket</h3>
            <div class="package-options" id="packageOptions">
                ${packages.map((pkg, index) => `
                    <div class="package-option ${index === 1 ? 'selected' : ''}" data-index="${index}">
                        <div class="package-header">
                            <div class="package-name">${pkg.name}</div>
                            <div class="package-price">Rp ${pkg.price.toLocaleString()}</div>
                        </div>
                        <ul class="package-features">
                            ${pkg.features.map(feature => `<li><i>✓</i> ${feature}</li>`).join('')}
                        </ul>
                    </div>
                `).join('')}
            </div>
            
            <button class="btn-buy ripple" id="btnBuyProduct">
                <i>🛒</i> Beli Sekarang
            </button>
            
            <div class="process-info">
                <i>⏱️</i> Durasi proses: ${processTime}
            </div>
        </div>
    `;
    
    appState.selectedProduct = product;
    appState.selectedPackage = packages[1];
    
    document.querySelectorAll('.package-option').forEach(option => {
        option.addEventListener('click', function() {
            document.querySelectorAll('.package-option').forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
            appState.selectedPackage = packages[parseInt(this.dataset.index)];
        });
    });
    
    document.getElementById('btnBuyProduct').addEventListener('click', () => {
        showPaymentModal('product');
    });
}

function renderDepositPage() {
    appState.depositAmount = 0;
    appState.paymentMethod = null;
    appState.activeInvoice = null;
    
    document.getElementById('depositFormContainer').classList.remove('hidden');
    document.getElementById('invoiceContainer').classList.add('hidden');
    
    document.querySelectorAll('.amount-option').forEach(opt => opt.classList.remove('selected'));
    document.querySelectorAll('.payment-method').forEach(method => method.classList.remove('selected'));
    document.getElementById('depositAmount').value = '';
}

function renderInvoice(invoice) {
    const container = document.getElementById('invoiceContainer');
    const now = new Date();
    const expiryTime = new Date(invoice.createdAt + 10 * 60000);
    
    const timeLeft = Math.max(0, expiryTime - now);
    const minutes = Math.floor(timeLeft / 60000);
    const seconds = Math.floor((timeLeft % 60000) / 1000);
    
    container.innerHTML = `
        <div class="invoice-card">
            <div class="invoice-id">${invoice.id}</div>
            <div class="invoice-status status-${invoice.status.toLowerCase()}">
                ${invoice.status === 'PENDING' ? 'MENUNGGU PEMBAYARAN' : invoice.status}
            </div>
            
            <div class="invoice-amount">Rp ${invoice.amount.toLocaleString()}</div>
            
            ${invoice.status === 'PENDING' ? `
                <div class="invoice-timer" id="invoiceTimer">
                    ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}
                </div>
                <p style="color: rgba(255, 255, 255, 0.8);">Selesaikan pembayaran sebelum waktu habis</p>
            ` : ''}
            
            <div class="payment-instruction">
                <h4 style="color: white; margin-bottom: 10px;">Instruksi Pembayaran QRIS:</h4>
                <ol style="color: rgba(255, 255, 255, 0.8); padding-left: 20px;">
                    <li>Buka aplikasi e-wallet atau mobile banking Anda</li>
                    <li>Pilih fitur scan QR Code</li>
                    <li>Scan kode QR di bawah ini</li>
                    <li>Pastikan nominal: <strong>Rp ${invoice.amount.toLocaleString()}</strong></li>
                    <li>Selesaikan pembayaran</li>
                </ol>
                
                <div style="text-align: center; margin: 20px 0;">
                    <img src="${invoice.qrCode || 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=FLYSTORE-' + invoice.id}" 
                         alt="QR Code Pembayaran" 
                         style="width: 200px; height: 200px; border: 2px solid white; border-radius: 10px;">
                    <p style="font-size: 12px; color: rgba(255, 255, 255, 0.6); margin-top: 10px;">Scan QR Code di atas</p>
                </div>
                
                <div style="background: rgba(255, 255, 255, 0.1); padding: 15px; border-radius: 10px; margin-top: 15px;">
                    <p style="color: white; margin-bottom: 5px;"><strong>Butuh Bantuan?</strong></p>
                    <p style="color: rgba(255, 255, 255, 0.8); font-size: 14px;">
                        Hubungi Admin via WhatsApp:
                        <a href="https://wa.me/6281234567890?text=Halo%20Admin%20FlyStore%2C%20saya%20butuh%20bantuan%20untuk%20invoice%20${invoice.id}" 
                           style="color: var(--accent); text-decoration: none; font-weight: bold;" target="_blank">
                            📱 Chat Admin
                        </a>
                    </p>
                </div>
            </div>
            
            ${invoice.status === 'PENDING' ? `
                <button class="btn-pay ripple" id="btnSimulatePayment">
                    Simulasi Pembayaran Berhasil
                </button>
            ` : ''}
            
            <button class="btn-deposit ripple mt-2" id="btnNewDeposit">
                Buat Deposit Baru
            </button>
        </div>
    `;
    
    if (invoice.status === 'PENDING') {
        document.getElementById('btnSimulatePayment').addEventListener('click', () => {
            simulatePaymentSuccess(invoice.id);
        });
        
        if (timeLeft > 0) {
            startInvoiceTimer(invoice.id, expiryTime);
        } else {
            expireInvoice(invoice.id);
        }
    }
    
    document.getElementById('btnNewDeposit').addEventListener('click', () => {
        renderDepositPage();
    });
    
    document.getElementById('depositFormContainer').classList.add('hidden');
    container.classList.remove('hidden');
}

function updateTransactionsDisplay(filter = 'all') {
    const transactionsList = document.getElementById('transactionsList');
    if (!transactionsList) return;
    
    transactionsList.innerHTML = '';
    
    let filteredTransactions = [];
    if (filter === 'all') {
        filteredTransactions = appState.transactions;
    } else if (filter === 'deposit') {
        filteredTransactions = appState.transactions.filter(t => t.type === 'deposit');
    } else if (filter === 'purchase') {
        filteredTransactions = appState.transactions.filter(t => t.type === 'purchase');
    }
    
    filteredTransactions.sort((a, b) => b.timestamp - a.timestamp);
    
    if (filteredTransactions.length === 0) {
        transactionsList.innerHTML = `
            <div style="text-align: center; padding: 40px 20px; color: rgba(255, 255, 255, 0.7);">
                <div style="font-size: 48px; margin-bottom: 15px;">📋</div>
                <h3 style="color: white; margin-bottom: 10px;">Tidak ada transaksi</h3>
                <p>Belum ada riwayat transaksi ${filter !== 'all' ? filter : ''}.</p>
            </div>
        `;
        return;
    }
    
    filteredTransactions.forEach(transaction => {
        const transactionItem = document.createElement('div');
        transactionItem.className = 'transaction-item';
        
        const date = new Date(transaction.timestamp);
        const formattedDate = date.toLocaleDateString('id-ID', {
            day: '2-digit',
            month: 'short',
            hour: '2-digit',
            minute: '2-digit'
        });
        
        transactionItem.innerHTML = `
            <div class="transaction-info">
                <h4>${transaction.description}</h4>
                <p>${formattedDate} • ${transaction.status}</p>
                ${transaction.productName ? `<p style="font-size: 0.8rem; color: var(--primary);">${transaction.productName} - ${transaction.packageName}</p>` : ''}
            </div>
            <div class="transaction-amount ${transaction.type === 'deposit' ? 'transaction-deposit' : 'transaction-purchase'}">
                ${transaction.type === 'deposit' ? '+' : '-'} Rp ${transaction.amount.toLocaleString()}
            </div>
        `;
        
        transactionsList.appendChild(transactionItem);
    });
}

function updateBalanceDisplay() {
    const balanceDisplay = document.getElementById('balanceDisplay');
    const accountBalance = document.getElementById('accountBalance');
    
    if (balanceDisplay) {
        balanceDisplay.innerHTML = `<i>💰</i><span>Rp ${appState.balance.toLocaleString()}</span>`;
    }
    
    if (accountBalance) {
        accountBalance.textContent = `Rp ${appState.balance.toLocaleString()}`;
    }
}

function updateUserDisplay() {
    const accountInitial = document.getElementById('accountInitial');
    const accountAvatar = document.getElementById('accountAvatar');
    const accountName = document.getElementById('accountName');
    const accountEmail = document.getElementById('accountEmail');
    
    if (accountInitial) accountInitial.textContent = appState.user.initial;
    if (accountAvatar) accountAvatar.textContent = appState.user.initial;
    if (accountName) accountName.textContent = appState.user.name;
    if (accountEmail) accountEmail.textContent = appState.user.email;
}

// ============================================
// EVENT HANDLERS & SETUP
// ============================================

function setupEventListeners() {
    // Bottom navbar navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function() {
            const page = this.dataset.page;
            navigateToPage(page);
        });
    });
    
    // Account actions
    document.getElementById('btnLogin').addEventListener('click', showLoginModal);
    document.getElementById('btnLogout').addEventListener('click', logout);
    document.getElementById('btnDepositFromAccount').addEventListener('click', () => navigateToPage('deposit'));
    document.getElementById('btnTransactionsFromAccount').addEventListener('click', () => navigateToPage('transactions'));
    
    // Login modal
    document.getElementById('closeLoginModal').addEventListener('click', hideLoginModal);
    document.getElementById('closeLoginModal2').addEventListener('click', hideLoginModal);
    document.getElementById('btnLoginSubmit').addEventListener('click', login);
    
    // Search input
    document.getElementById('searchInput').addEventListener('input', filterProducts);
    document.getElementById('productsSearch')?.addEventListener('input', filterProducts);
    
    // Deposit page
    document.querySelectorAll('.amount-option').forEach(option => {
        option.addEventListener('click', function() {
            document.querySelectorAll('.amount-option').forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
            appState.depositAmount = parseInt(this.dataset.amount);
            document.getElementById('depositAmount').value = appState.depositAmount;
        });
    });
    
    document.querySelectorAll('.payment-method').forEach(method => {
        method.addEventListener('click', function() {
            document.querySelectorAll('.payment-method').forEach(m => m.classList.remove('selected'));
            this.classList.add('selected');
            appState.paymentMethod = this.dataset.method;
        });
    });
    
    document.getElementById('depositAmount')?.addEventListener('input', function() {
        appState.depositAmount = parseInt(this.value) || 0;
    });
    
    document.getElementById('btnCreatePayment')?.addEventListener('click', createQrisPayment);
    
    // Payment modal
    document.getElementById('closePaymentModal')?.addEventListener('click', hidePaymentModal);
    document.getElementById('closePaymentModal2')?.addEventListener('click', hidePaymentModal);
    document.getElementById('btnConfirmPayment')?.addEventListener('click', confirmPayment);
    
    // Transaction filters
    document.querySelectorAll('.transaction-filter').forEach(filter => {
        filter.addEventListener('click', function() {
            document.querySelectorAll('.transaction-filter').forEach(f => f.classList.remove('active'));
            this.classList.add('active');
            updateTransactionsDisplay(this.dataset.filter);
        });
    });
}

function setupRouting() {
    window.addEventListener('hashchange', handleRouting);
    handleRouting();
}

function handleRouting() {
    const hash = window.location.hash.substring(1) || 'home';
    const parts = hash.split('/');
    const page = parts[0];
    const param = parts[1];
    
    // Update active nav item
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.page === page) {
            item.classList.add('active');
        }
    });
    
    // Hide all pages
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    
    showLoader();
    
    setTimeout(() => {
        if (page === 'home') {
            document.getElementById('home-page').classList.add('active');
            renderHomePage();
        } else if (page === 'products') {
            document.getElementById('products-page').classList.add('active');
            renderProductsPage();
        } else if (page === 'product' && param) {
            document.getElementById('product-detail-page').classList.add('active');
            
            let foundProduct = null;
            Object.keys(productsData).forEach(category => {
                productsData[category].forEach(product => {
                    const slug = product.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                    if (slug === param) {
                        foundProduct = {...product, category};
                    }
                });
            });
            
            if (foundProduct) {
                renderProductDetailPage(foundProduct);
            } else {
                navigateToPage('products');
            }
        } else if (page === 'deposit') {
            document.getElementById('deposit-page').classList.add('active');
            renderDepositPage();
            
            const activeInvoice = appState.invoices.find(inv => inv.status === 'PENDING');
            if (activeInvoice) {
                appState.activeInvoice = activeInvoice;
                renderInvoice(activeInvoice);
            }
        } else if (page === 'tx' || page === 'transactions') {
            document.getElementById('transactions-page').classList.add('active');
            updateTransactionsDisplay();
        } else if (page === 'account') {
            document.getElementById('account-page').classList.add('active');
            updateUserDisplay();
            updateBalanceDisplay();
        } else {
            navigateToPage('home');
        }
        
        hideLoader();
    }, 300);
}

function setupBannerSlider() {
    const slides = document.querySelectorAll('.banner-slide');
    let currentSlide = 0;
    
    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 4000);
}

function generateSparkles() {
    const container = document.querySelector('.background-container');
    
    for (let i = 0; i < 50; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = `${Math.random() * 100}%`;
        sparkle.style.top = `${Math.random() * 100}%`;
        sparkle.style.animationDelay = `${Math.random() * 5}s`;
        sparkle.style.opacity = `${0.3 + Math.random() * 0.7}`;
        container.appendChild(sparkle);
    }
}

// ============================================
// APPLICATION FUNCTIONS
// ============================================

function navigateToPage(page) {
    window.location.hash = page;
}

function showLoader() {
    document.getElementById('loader').classList.add('active');
}

function hideLoader() {
    document.getElementById('loader').classList.remove('active');
}

function filterProducts() {
    const searchTerm = document.getElementById('productsSearch')?.value || 
                      document.getElementById('searchInput')?.value || '';
    renderProductsPage(searchTerm);
}

function showLoginModal() {
    document.getElementById('loginModal').classList.add('active');
}

function hideLoginModal() {
    document.getElementById('loginModal').classList.remove('active');
}

function login() {
    const name = document.getElementById('loginName').value;
    const email = document.getElementById('loginEmail').value;
    
    appState.user = {
        name: name || "User Demo",
        email: email || "demo@flystore.com",
        initial: (name || "U").charAt(0).toUpperCase()
    };
    
    saveStateToStorage();
    updateUserDisplay();
    hideLoginModal();
    showToast('Berhasil masuk!', 'success', `Selamat datang, ${appState.user.name}!`);
}

function logout() {
    appState.user = {
        name: "Guest",
        email: "guest@flystore.com",
        initial: "G"
    };
    
    saveStateToStorage();
    updateUserDisplay();
    showToast('Anda telah keluar', 'info');
}

function createQrisPayment() {
    if (appState.depositAmount < 10000) {
        showToast('Minimum deposit Rp 10.000', 'error');
        return;
    }
    
    if (!appState.paymentMethod) {
        showToast('Pilih metode pembayaran', 'error');
        return;
    }
    
    showLoader();
    
    // Simulasi pembuatan pembayaran QRIS
    setTimeout(() => {
        const now = new Date();
        const dateStr = now.toISOString().slice(0, 10).replace(/-/g, '');
        const randomNum = Math.floor(1000 + Math.random() * 9000);
        const invoiceId = `INV-${dateStr}-${randomNum}`;
        
        const invoice = {
            id: invoiceId,
            amount: appState.depositAmount,
            method: 'qris',
            status: 'PENDING',
            createdAt: now.getTime(),
            qrCode: `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=FLYSTORE-${invoiceId}-${appState.depositAmount}`,
            reference: 'REF-' + Math.random().toString(36).substr(2, 9).toUpperCase()
        };
        
        appState.invoices.push(invoice);
        appState.activeInvoice = invoice;
        
        saveStateToStorage();
        renderInvoice(invoice);
        
        addTransaction({
            type: 'deposit',
            amount: appState.depositAmount,
            description: `Deposit via QRIS`,
            status: 'PENDING',
            timestamp: now.getTime(),
            reference: invoice.reference
        });
        
        showToast('Invoice QRIS berhasil dibuat', 'success', 'Scan QR Code untuk melanjutkan pembayaran');
        hideLoader();
        
        // Mulai polling untuk cek status pembayaran
        startPaymentPolling(invoiceId);
    }, 1000);
}

function simulatePaymentSuccess(invoiceId) {
    const invoice = appState.invoices.find(inv => inv.id === invoiceId);
    if (!invoice) return;
    
    invoice.status = 'PAID';
    
    const transaction = appState.transactions.find(t => 
        t.type === 'deposit' && t.amount === invoice.amount && t.status === 'PENDING'
    );
    if (transaction) {
        transaction.status = 'SUCCESS';
    }
    
    appState.balance += invoice.amount;
    
    saveStateToStorage();
    updateBalanceDisplay();
    renderInvoice(invoice);
    updateTransactionsDisplay();
    
    showToast('Pembayaran berhasil!', 'success', `Saldo bertambah Rp ${invoice.amount.toLocaleString()}`);
}

function startPaymentPolling(invoiceId) {
    const pollInterval = setInterval(() => {
        const invoice = appState.invoices.find(inv => inv.id === invoiceId);
        if (!invoice || invoice.status !== 'PENDING') {
            clearInterval(pollInterval);
            return;
        }
        
        // Simulasi: 30% chance pembayaran berhasil
        if (Math.random() < 0.3) {
            clearInterval(pollInterval);
            simulatePaymentSuccess(invoiceId);
        }
        
        // Hentikan polling setelah 10 menit
    }, 10000);
}

function startInvoiceTimer(invoiceId, expiryTime) {
    const timerElement = document.getElementById('invoiceTimer');
    if (!timerElement) return;
    
    const timerInterval = setInterval(() => {
        const now = new Date();
        const timeLeft = Math.max(0, expiryTime - now);
        const minutes = Math.floor(timeLeft / 60000);
        const seconds = Math.floor((timeLeft % 60000) / 1000);
        
        timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            expireInvoice(invoiceId);
        }
    }, 1000);
}

function expireInvoice(invoiceId) {
    const invoice = appState.invoices.find(inv => inv.id === invoiceId);
    if (!invoice || invoice.status !== 'PENDING') return;
    
    invoice.status = 'EXPIRED';
    
    const transaction = appState.transactions.find(t => 
        t.type === 'deposit' && t.amount === invoice.amount && t.status === 'PENDING'
    );
    if (transaction) {
        transaction.status = 'EXPIRED';
    }
    
    saveStateToStorage();
    
    if (appState.activeInvoice && appState.activeInvoice.id === invoiceId) {
        renderInvoice(invoice);
    }
    
    showToast('Invoice telah kadaluarsa', 'warning', 'Waktu pembayaran telah habis');
}

function addTransaction(transaction) {
    appState.transactions.push(transaction);
    saveStateToStorage();
}

function showPaymentModal(type) {
    const modal = document.getElementById('paymentModal');
    const message = document.getElementById('paymentMessage');
    const details = document.getElementById('paymentDetails');
    
    if (type === 'product') {
        if (!appState.selectedProduct || !appState.selectedPackage) {
            showToast('Pilih paket terlebih dahulu', 'error');
            return;
        }
        
        message.textContent = 'Konfirmasi Pembelian Produk';
        details.innerHTML = `
            <div style="background: #f8f9ff; padding: 15px; border-radius: 10px; margin: 15px 0;">
                <div style="display: flex; align-items: center; margin-bottom: 10px;">
                    <div style="width: 40px; height: 40px; border-radius: 50%; background: ${appState.selectedProduct.color}; display: flex; align-items: center; justify-content: center; margin-right: 10px; color: white;">
                        ${appState.selectedProduct.icon}
                    </div>
                    <div>
                        <strong>${appState.selectedProduct.name}</strong><br>
                        <span style="font-size: 0.9rem; color: #666;">${appState.selectedPackage.name}</span>
                    </div>
                </div>
                <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                    <span>Harga:</span>
                    <strong style="color: var(--primary);">Rp ${appState.selectedPackage.price.toLocaleString()}</strong>
                </div>
                <div style="display: flex; justify-content: space-between; margin-top: 5px;">
                    <span>Saldo Anda:</span>
                    <strong style="color: ${appState.balance >= appState.selectedPackage.price ? 'var(--success)' : 'var(--danger)'}">
                        Rp ${appState.balance.toLocaleString()}
                    </strong>
                </div>
                ${appState.balance < appState.selectedPackage.price ? `
                    <div style="background: #ffeaea; color: #d32f2f; padding: 10px; border-radius: 5px; margin-top: 10px; font-size: 0.9rem;">
                        Saldo tidak cukup. Silakan deposit terlebih dahulu.
                    </div>
                ` : ''}
            </div>
        `;
    }
    
    modal.classList.add('active');
}

function hidePaymentModal() {
    document.getElementById('paymentModal').classList.remove('active');
}

function confirmPayment() {
    hidePaymentModal();
    
    if (!appState.selectedProduct || !appState.selectedPackage) {
        showToast('Terjadi kesalahan', 'error');
        return;
    }
    
    if (appState.balance < appState.selectedPackage.price) {
        showToast('Saldo tidak cukup', 'error', 'Silakan deposit terlebih dahulu');
        setTimeout(() => navigateToPage('deposit'), 1500);
        return;
    }
    
    appState.balance -= appState.selectedPackage.price;
    
    addTransaction({
        type: 'purchase',
        amount: appState.selectedPackage.price,
        description: `Beli ${appState.selectedProduct.name}`,
        status: 'SUCCESS',
        timestamp: new Date().getTime(),
        productName: appState.selectedProduct.name,
        packageName: appState.selectedPackage.name
    });
    
    saveStateToStorage();
    updateBalanceDisplay();
    updateTransactionsDisplay();
    
    showToast('Pembelian berhasil!', 'success', `${appState.selectedProduct.name} sedang diproses`);
    
    setTimeout(() => navigateToPage('products'), 2000);
}

function showToast(title, type, message = '') {
    const toastContainer = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <div class="toast-icon">
            ${type === 'success' ? '✓' : 
              type === 'error' ? '✕' : 
              type === 'warning' ? '⚠' : 'ℹ'}
        </div>
        <div class="toast-content">
            <h4>${title}</h4>
            ${message ? `<p>${message}</p>` : ''}
        </div>
    `;
    
    toastContainer.appendChild(toast);
    
    setTimeout(() => toast.classList.add('show'), 10);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    }, 5000);
}
