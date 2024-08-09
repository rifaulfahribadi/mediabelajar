// Example sentences database ya
const sentences = [
    { id: 1, text: "The product launch is scheduled for next week.", translation: "Peluncuran produk dijadwalkan untuk minggu depan.", notes: "" },
    { id: 2, text: "We need to negotiate the contract terms.", translation: "Kita perlu menegosiasikan syarat-syarat kontrak.", notes: "" },
    { id: 3, text: "The target market for this product is young professionals.", translation: "Pasar target untuk produk ini adalah profesional muda.", notes: "" },
    { id: 4, text: "Our marketing strategy focuses on social media campaigns.", translation: "Strategi pemasaran kami berfokus pada kampanye media sosial.", notes: "" },
    { id: 5, text: "We have to align the product features with customer needs.", translation: "Kita harus menyelaraskan fitur produk dengan kebutuhan pelanggan.", notes: "" },
    { id: 6, text: "The budget for this project has been approved.", translation: "Anggaran untuk proyek ini telah disetujui.", notes: "" },
    { id: 7, text: "We need to analyze the competitive landscape.", translation: "Kita perlu menganalisis lanskap kompetitif.", notes: "" },
    { id: 8, text: "Our primary goal is to increase market share.", translation: "Tujuan utama kami adalah meningkatkan pangsa pasar.", notes: "" },
    { id: 9, text: "The product development team is working on the prototype.", translation: "Tim pengembangan produk sedang mengerjakan prototipe.", notes: "" },
    { id: 10, text: "We should focus on improving customer satisfaction.", translation: "Kita harus fokus pada peningkatan kepuasan pelanggan.", notes: "" },
    { id: 11, text: "It's essential to have a clear value proposition.", translation: "Penting untuk memiliki proposisi nilai yang jelas.", notes: "" },
    { id: 12, text: "The project timeline is very tight, so we need to be efficient.", translation: "Jadwal proyek sangat ketat, jadi kita harus efisien.", notes: "" },
    { id: 13, text: "We should conduct a thorough market research before launching.", translation: "Kita harus melakukan riset pasar yang menyeluruh sebelum peluncuran.", notes: "" },
    { id: 14, text: "The product's user interface should be intuitive and user-friendly.", translation: "Antarmuka pengguna produk harus intuitif dan mudah digunakan.", notes: "" },
    { id: 15, text: "Our key performance indicators (KPIs) are on track.", translation: "Indikator kinerja utama (KPI) kami sesuai dengan target.", notes: "" },
    { id: 16, text: "We need to address the feedback we received from the beta testers.", translation: "Kita perlu menangani umpan balik yang kami terima dari penguji beta.", notes: "" },
    { id: 17, text: "The product roadmap includes several major updates.", translation: "Peta jalan produk mencakup beberapa pembaruan besar.", notes: "" },
    { id: 18, text: "Our pricing strategy should reflect the product's value.", translation: "Strategi harga kami harus mencerminkan nilai produk.", notes: "" },
    { id: 19, text: "We are aiming for a global rollout by the end of the year.", translation: "Kami bertujuan untuk peluncuran global pada akhir tahun ini.", notes: "" },
    { id: 20, text: "Let's discuss the potential risks and how we can mitigate them.", translation: "Mari kita bahas potensi risiko dan bagaimana kita dapat menguranginya.", notes: "" },
    { id: 21, text: "The client has requested a detailed project report.", translation: "Klien telah meminta laporan proyek yang terperinci.", notes: "" },
    { id: 22, text: "We need to finalize the product specifications before the meeting.", translation: "Kita perlu menyelesaikan spesifikasi produk sebelum rapat.", notes: "" },
    { id: 23, text: "Our team is working on a new feature that will enhance user experience.", translation: "Tim kami sedang mengerjakan fitur baru yang akan meningkatkan pengalaman pengguna.", notes: "" },
    { id: 24, text: "The product has received positive feedback from early adopters.", translation: "Produk ini telah menerima umpan balik positif dari pengguna awal.", notes: "" },
    { id: 25, text: "We should consider expanding our distribution channels.", translation: "Kita harus mempertimbangkan untuk memperluas saluran distribusi kita.", notes: "" },
    { id: 26, text: "The customer support team needs additional training on the new product.", translation: "Tim dukungan pelanggan perlu pelatihan tambahan tentang produk baru.", notes: "" },
    { id: 27, text: "Our goal is to reduce the product's time-to-market.", translation: "Tujuan kami adalah mengurangi waktu peluncuran produk ke pasar.", notes: "" },
    { id: 28, text: "We have identified several key competitors in the market.", translation: "Kami telah mengidentifikasi beberapa pesaing utama di pasar.", notes: "" },
    { id: 29, text: "Let's brainstorm ideas for the next product iteration.", translation: "Mari kita curah gagasan untuk iterasi produk berikutnya.", notes: "" },
    { id: 30, text: "We need to prioritize the most critical features for this release.", translation: "Kita perlu memprioritaskan fitur yang paling penting untuk rilis ini.", notes: "" },
    { id: 31, text: "Our sales team needs to be briefed on the new product benefits.", translation: "Tim penjualan kami perlu diberi pengarahan tentang manfaat produk baru.", notes: "" },
    { id: 32, text: "We should evaluate the success of our marketing campaigns.", translation: "Kita harus mengevaluasi keberhasilan kampanye pemasaran kita.", notes: "" },
    { id: 33, text: "The production cost has increased due to higher raw material prices.", translation: "Biaya produksi meningkat karena harga bahan baku yang lebih tinggi.", notes: "" },
    { id: 34, text: "We need to ensure the product meets all regulatory requirements.", translation: "Kita perlu memastikan produk memenuhi semua persyaratan regulasi.", notes: "" },
    { id: 35, text: "Our market research indicates a growing demand for eco-friendly products.", translation: "Riset pasar kami menunjukkan permintaan yang meningkat untuk produk ramah lingkungan.", notes: "" },
    { id: 36, text: "We should develop a contingency plan in case of delays.", translation: "Kita harus mengembangkan rencana darurat jika terjadi penundaan.", notes: "" },
    { id: 37, text: "The product design needs to be finalized by the end of this week.", translation: "Desain produk perlu diselesaikan pada akhir minggu ini.", notes: "" },
    { id: 38, text: "We need to monitor the project's progress closely.", translation: "Kita perlu memantau perkembangan proyek dengan cermat.", notes: "" },
    { id: 39, text: "Our team is exploring new technologies to integrate into the product.", translation: "Tim kami sedang mengeksplorasi teknologi baru untuk diintegrasikan ke dalam produk.", notes: "" },
    { id: 40, text: "We should consider offering a discount to attract more customers.", translation: "Kita harus mempertimbangkan menawarkan diskon untuk menarik lebih banyak pelanggan.", notes: "" },
    { id: 41, text: "The user testing phase will begin next month.", translation: "Tahap pengujian pengguna akan dimulai bulan depan.", notes: "" },
    { id: 42, text: "We need to gather more data to validate our assumptions.", translation: "Kita perlu mengumpulkan lebih banyak data untuk memvalidasi asumsi kita.", notes: "" },
    { id: 43, text: "The product packaging design needs to be updated.", translation: "Desain kemasan produk perlu diperbarui.", notes: "" },
    { id: 44, text: "Our product has a strong value proposition compared to competitors.", translation: "Produk kami memiliki proposisi nilai yang kuat dibandingkan dengan pesaing.", notes: "" },
    { id: 45, text: "We should leverage customer feedback to improve the product.", translation: "Kita harus memanfaatkan umpan balik pelanggan untuk meningkatkan produk.", notes: "" },
    { id: 46, text: "The product's scalability is crucial for future growth.", translation: "Skalabilitas produk sangat penting untuk pertumbuhan di masa depan.", notes: "" },
    { id: 47, text: "We need to identify the key metrics to track product performance.", translation: "Kita perlu mengidentifikasi metrik utama untuk melacak kinerja produk.", notes: "" },
    { id: 48, text: "Our focus should be on enhancing the user experience.", translation: "Fokus kami harus pada peningkatan pengalaman pengguna.", notes: "" },
    { id: 49, text: "The product launch event is scheduled for next month.", translation: "Acara peluncuran produk dijadwalkan untuk bulan depan.", notes: "" },
    { id: 50, text: "We should explore opportunities in emerging markets.", translation: "Kita harus mengeksplorasi peluang di pasar yang sedang berkembang.", notes: "" },
    { id: 51, text: "Our team needs to collaborate more closely with the engineering department.", translation: "Tim kami perlu berkolaborasi lebih erat dengan departemen teknik.", notes: "" },
    { id: 52, text: "The user manual should be easy to understand and comprehensive.", translation: "Manual pengguna harus mudah dipahami dan komprehensif.", notes: "" },
    { id: 53, text: "We need to address any potential bottlenecks in the production process.", translation: "Kita perlu menangani potensi hambatan dalam proses produksi.", notes: "" },
    { id: 54, text: "Our marketing materials should highlight the product's unique features.", translation: "Materi pemasaran kami harus menyoroti fitur unik produk.", notes: "" },
    { id: 55, text: "We need to establish clear communication channels between teams.", translation: "Kita perlu membangun saluran komunikasi yang jelas antar tim.", notes: "" },
    { id: 56, text: "The customer journey needs to be mapped out in detail.", translation: "Perjalanan pelanggan perlu dipetakan secara rinci.", notes: "" },
    { id: 57, text: "We should assess the potential return on investment for this project.", translation: "Kita harus menilai potensi pengembalian investasi untuk proyek ini.", notes: "" },
    { id: 58, text: "Our supply chain needs to be optimized to reduce costs.", translation: "Rantai pasokan kami perlu dioptimalkan untuk mengurangi biaya.", notes: "" },
    { id: 59, text: "We need to ensure the product is compatible with all major platforms.", translation: "Kita perlu memastikan produk kompatibel dengan semua platform utama.", notes: "" },
    { id: 60, text: "The product's branding should align with our company's values.", translation: "Branding produk harus selaras dengan nilai-nilai perusahaan kami.", notes: "" },
    { id: 61, text: "We should track user engagement metrics post-launch.", translation: "Kita harus melacak metrik keterlibatan pengguna setelah peluncuran.", notes: "" },
    { id: 62, text: "The technical documentation needs to be updated regularly.", translation: "Dokumentasi teknis perlu diperbarui secara berkala.", notes: "" },
    { id: 63, text: "Our strategy should include a focus on long-term customer retention.", translation: "Strategi kami harus mencakup fokus pada retensi pelanggan jangka panjang.", notes: "" },
    { id: 64, text: "We need to develop a comprehensive training program for our sales team.", translation: "Kita perlu mengembangkan program pelatihan yang komprehensif untuk tim penjualan kami.", notes: "" },
    { id: 65, text: "The product's pricing model should be reviewed periodically.", translation: "Model harga produk harus ditinjau secara berkala.", notes: "" },
    { id: 66, text: "We should identify key influencers to promote our product.", translation: "Kita harus mengidentifikasi influencer kunci untuk mempromosikan produk kita.", notes: "" },
    { id: 67, text: "Our focus should be on delivering consistent quality.", translation: "Fokus kami harus pada penyampaian kualitas yang konsisten.", notes: "" },
    { id: 68, text: "We need to ensure the product is accessible to all users.", translation: "Kita perlu memastikan produk dapat diakses oleh semua pengguna.", notes: "" },
    { id: 69, text: "Our product should be designed with scalability in mind.", translation: "Produk kami harus dirancang dengan mempertimbangkan skalabilitas.", notes: "" },
    { id: 70, text: "We should establish a regular feedback loop with our customers.", translation: "Kita harus membangun loop umpan balik yang teratur dengan pelanggan kita.", notes: "" },
    { id: 71, text: "We should conduct a SWOT analysis to better understand our position.", translation: "Kita harus melakukan analisis SWOT untuk lebih memahami posisi kita.", notes: "" },
    { id: 72, text: "The user feedback indicates a need for improved customer support.", translation: "Umpan balik pengguna menunjukkan perlunya peningkatan dukungan pelanggan.", notes: "" },
    { id: 73, text: "We need to align our product strategy with the overall business goals.", translation: "Kita perlu menyelaraskan strategi produk kita dengan tujuan bisnis secara keseluruhan.", notes: "" },
    { id: 74, text: "The project deliverables must be clearly defined and agreed upon.", translation: "Hasil proyek harus didefinisikan dengan jelas dan disepakati.", notes: "" },
    { id: 75, text: "Our team should focus on enhancing the product's usability.", translation: "Tim kita harus fokus pada peningkatan kegunaan produk.", notes: "" },
    { id: 76, text: "We should explore partnership opportunities to expand our market reach.", translation: "Kita harus mengeksplorasi peluang kemitraan untuk memperluas jangkauan pasar kita.", notes: "" },
    { id: 77, text: "The product's lifecycle management needs to be streamlined.", translation: "Manajemen siklus hidup produk perlu disederhanakan.", notes: "" },
    { id: 78, text: "We need to establish a timeline for each phase of the project.", translation: "Kita perlu menetapkan garis waktu untuk setiap fase proyek.", notes: "" },
    { id: 79, text: "The design team is working on a more intuitive user interface.", translation: "Tim desain sedang mengerjakan antarmuka pengguna yang lebih intuitif.", notes: "" },
    { id: 80, text: "We should focus on reducing the product's environmental impact.", translation: "Kita harus fokus pada pengurangan dampak lingkungan dari produk.", notes: "" },
    { id: 81, text: "Our priority is to meet the customer's expectations with the new release.", translation: "Prioritas kami adalah memenuhi ekspektasi pelanggan dengan rilis baru.", notes: "" },
    { id: 82, text: "We need to develop a marketing plan that targets our core audience.", translation: "Kita perlu mengembangkan rencana pemasaran yang menargetkan audiens inti kita.", notes: "" },
    { id: 83, text: "The customer journey map will help us identify pain points.", translation: "Peta perjalanan pelanggan akan membantu kita mengidentifikasi titik-titik masalah.", notes: "" },
    { id: 84, text: "We should consider diversifying our product portfolio.", translation: "Kita harus mempertimbangkan untuk mendiversifikasi portofolio produk kita.", notes: "" },
    { id: 85, text: "Our team is evaluating the feasibility of the proposed features.", translation: "Tim kami sedang mengevaluasi kelayakan fitur yang diusulkan.", notes: "" },
    { id: 86, text: "We need to track key performance indicators to measure success.", translation: "Kita perlu melacak indikator kinerja utama untuk mengukur keberhasilan.", notes: "" },
    { id: 87, text: "The product should be optimized for both mobile and desktop users.", translation: "Produk harus dioptimalkan untuk pengguna mobile dan desktop.", notes: "" },
    { id: 88, text: "We should establish a feedback loop to continuously improve the product.", translation: "Kita harus membangun loop umpan balik untuk terus meningkatkan produk.", notes: "" },
    { id: 89, text: "Our main objective is to deliver value to the customer.", translation: "Tujuan utama kami adalah memberikan nilai kepada pelanggan.", notes: "" },
    { id: 90, text: "We need to ensure that all stakeholders are aligned on the project goals.", translation: "Kita perlu memastikan bahwa semua pemangku kepentingan selaras dengan tujuan proyek.", notes: "" },
    { id: 91, text: "The product roadmap should be reviewed and updated regularly.", translation: "Peta jalan produk harus ditinjau dan diperbarui secara berkala.", notes: "" },
    { id: 92, text: "We should analyze the customer data to uncover insights.", translation: "Kita harus menganalisis data pelanggan untuk mengungkap wawasan.", notes: "" },
    { id: 93, text: "Our marketing campaign needs to differentiate us from competitors.", translation: "Kampanye pemasaran kami perlu membedakan kami dari pesaing.", notes: "" },
    { id: 94, text: "We need to establish a clear product vision to guide development.", translation: "Kita perlu menetapkan visi produk yang jelas untuk memandu pengembangan.", notes: "" },
    { id: 95, text: "The product's security features should be tested thoroughly.", translation: "Fitur keamanan produk harus diuji secara menyeluruh.", notes: "" },
    { id: 96, text: "We should conduct user interviews to gather qualitative feedback.", translation: "Kita harus melakukan wawancara pengguna untuk mengumpulkan umpan balik kualitatif.", notes: "" },
    { id: 97, text: "The project scope needs to be clearly defined to avoid scope creep.", translation: "Ruang lingkup proyek perlu didefinisikan dengan jelas untuk menghindari perluasan ruang lingkup.", notes: "" },
    { id: 98, text: "Our product must comply with industry standards and regulations.", translation: "Produk kami harus mematuhi standar dan regulasi industri.", notes: "" },
    { id: 99, text: "We should focus on building a scalable and maintainable product.", translation: "Kita harus fokus pada membangun produk yang dapat diskalakan dan mudah dipelihara.", notes: "" },
    { id: 100, text: "The marketing strategy should highlight the product's unique value proposition.", translation: "Strategi pemasaran harus menyoroti proposisi nilai unik produk.", notes: "" }
];


let currentSentenceIndex = 0;
let history = [];

// Initialize notes from localStorage if available
function loadNotesFromStorage() {
    const savedNotes = JSON.parse(localStorage.getItem('sentenceNotes'));
    if (savedNotes) {
        sentences.forEach(sentence => {
            if (savedNotes[sentence.id]) {
                sentence.notes = savedNotes[sentence.id];
            }
        });
    }
}

// Save notes to localStorage
function saveNotesToStorage() {
    const notesData = {};
    sentences.forEach(sentence => {
        notesData[sentence.id] = sentence.notes;
    });
    localStorage.setItem('sentenceNotes', JSON.stringify(notesData));
}

const sentenceText = document.getElementById('sentence-text');
const translation = document.getElementById('translation');
const hintButton = document.getElementById('hint-button');
const masteryCheckbox = document.getElementById('mastery-checkbox');
const historyList = document.getElementById('history-list');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const notesText = document.getElementById('notes-text');
const saveNotesButton = document.getElementById('save-notes-button');

// Function to load current sentence
function loadSentence() {
    const sentence = sentences[currentSentenceIndex];
    sentenceText.textContent = sentence.text;
    translation.textContent = sentence.translation;
    translation.style.display = 'none';
    hintButton.textContent = 'Show Translation';
    masteryCheckbox.checked = history.some(item => item.id === sentence.id);
    notesText.value = sentence.notes || ""; // Load saved note or show placeholder
    updateButtonStates();
}

// Update button states (disable if necessary)
function updateButtonStates() {
    prevButton.disabled = currentSentenceIndex === 0;
    nextButton.disabled = currentSentenceIndex === sentences.length - 1;
}

// Event listener for hint button
hintButton.addEventListener('click', () => {
    if (translation.style.display === 'none') {
        translation.style.display = 'block';
        hintButton.textContent = 'Hide Translation';
    } else {
        translation.style.display = 'none';
        hintButton.textContent = 'Show Translation';
    }
});

// Event listener for mastery checkbox
masteryCheckbox.addEventListener('change', () => {
    const sentence = sentences[currentSentenceIndex];
    if (masteryCheckbox.checked) {
        history.push(sentence);
        renderHistory();
    } else {
        history = history.filter(item => item.id !== sentence.id);
        renderHistory();
    }
});

// Event listener for save notes button
saveNotesButton.addEventListener('click', () => {
    const currentSentence = sentences[currentSentenceIndex];
    currentSentence.notes = notesText.value;
    saveNotesToStorage(); // Save notes to localStorage
    alert("Notes saved!"); // Optional: show a message to indicate the note has been saved
});

// Function to render history
function renderHistory() {
    historyList.innerHTML = '';
    history.forEach(sentence => {
        const listItem = document.createElement('li');
        listItem.textContent = sentence.text;
        listItem.className = 'history-item';
        
        // Add checkbox to uncheck mastery from history
        const uncheckBox = document.createElement('input');
        uncheckBox.type = 'checkbox';
        uncheckBox.checked = true;
        uncheckBox.addEventListener('change', () => {
            history = history.filter(item => item.id !== sentence.id);
            renderHistory();
            loadSentence(); // Reload sentence to update mastery status
        });
        
        listItem.prepend(uncheckBox);
        historyList.appendChild(listItem);
    });
}

// Event listener for next button
nextButton.addEventListener('click', () => {
    if (currentSentenceIndex < sentences.length - 1) {
        currentSentenceIndex++;
        loadSentence();
    }
});

// Event listener for previous button
prevButton.addEventListener('click', () => {
    if (currentSentenceIndex > 0) {
        currentSentenceIndex--;
        loadSentence();
    }
});

// Load notes from localStorage if available on page load
loadNotesFromStorage();

// Initial load
loadSentence();
