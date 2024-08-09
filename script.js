// Example sentences database
const sentences = [
    { id: 1, text: "The product launch is scheduled for next week.", translation: "Peluncuran produk dijadwalkan untuk minggu depan.", notes: "" },
    { id: 2, text: "We need to negotiate the contract terms.", translation: "Kita perlu menegosiasikan syarat-syarat kontrak.", notes: "" },
    { id: 3, text: "The target market for this product is young professionals.", translation: "Pasar target untuk produk ini adalah profesional muda.", notes: "" },
    // Add more sentences as needed
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
