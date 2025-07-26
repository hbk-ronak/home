/**
 * Quotes Widget - Automatic Quote Display
 * Modular, privacy-first, no external dependencies
 * Follows Minimalist Homepage widget architecture
 */

// ===================== QUOTE DATA =====================
const quoteCategories = {
  stoic: [
    { text: "The happiness of your life depends upon the quality of your thoughts.", author: "Marcus Aurelius" },
    { text: "We suffer more often in imagination than in reality.", author: "Seneca" },
    { text: "He who angers you conquers you.", author: "Elizabeth Kenny (Stoic principle)" },
    { text: "It is not things themselves that disturb us, but our opinions about them.", author: "Epictetus" },
    { text: "You have power over your mind—not outside events. Realize this, and you will find strength.", author: "Marcus Aurelius" },
    { text: "If it is not right, do not do it; if it is not true, do not say it.", author: "Marcus Aurelius" },
    { text: "How long are you going to wait before you demand the best for yourself?", author: "Epictetus" },
    { text: "He suffers more than necessary, who suffers before it is necessary.", author: "Seneca" },
    { text: "First say to yourself what you would be; and then do what you have to do.", author: "Epictetus" },
    { text: "Difficulties strengthen the mind, as labor does the body.", author: "Seneca" },
    { text: "The best revenge is not to be like your enemy.", author: "Marcus Aurelius" },
    { text: "No man is free who is not master of himself.", author: "Epictetus" },
    { text: "Wealth consists not in having great possessions, but in having few wants.", author: "Epictetus" },
    { text: "Luck is what happens when preparation meets opportunity.", author: "Seneca" },
    { text: "Don't explain your philosophy. Embody it.", author: "Epictetus" },
    { text: "Begin at once to live, and count each separate day as a separate life.", author: "Seneca" },
    { text: "Waste no more time arguing what a good man should be. Be one.", author: "Marcus Aurelius" },
    { text: "He is a wise man who does not grieve for the things which he has not, but rejoices for those which he has.", author: "Epictetus" },
    { text: "To be even-minded is the greatest virtue.", author: "Heraclitus (Stoic principle)" },
    { text: "Man conquers the world by conquering himself.", author: "Zeno of Citium" }
  ],
  affirmations: [
    { text: "I am capable of achieving great things.", author: "Affirmation" },
    { text: "I am worthy of love and respect.", author: "Affirmation" },
    { text: "I choose to be happy and grateful today.", author: "Affirmation" },
    { text: "I am resilient, strong, and brave.", author: "Affirmation" },
    { text: "I believe in myself and my abilities.", author: "Affirmation" },
    { text: "I am growing and becoming my best self.", author: "Affirmation" },
    { text: "I radiate positivity and kindness.", author: "Affirmation" },
    { text: "I am in charge of how I feel and today I choose joy.", author: "Affirmation" },
    { text: "I am enough just as I am.", author: "Affirmation" },
    { text: "I am grateful for the present moment.", author: "Affirmation" },
    { text: "I trust the journey of my life.", author: "Affirmation" },
    { text: "I am open to new opportunities.", author: "Affirmation" },
    { text: "I let go of what I cannot control.", author: "Affirmation" },
    { text: "I am proud of how far I have come.", author: "Affirmation" },
    { text: "I am calm, patient, and in control.", author: "Affirmation" },
    { text: "I am a magnet for good things.", author: "Affirmation" },
    { text: "I am creative and resourceful.", author: "Affirmation" },
    { text: "I am surrounded by love and support.", author: "Affirmation" },
    { text: "I am becoming better every day.", author: "Affirmation" },
    { text: "I am grateful for my body, my mind, and my spirit.", author: "Affirmation" },
    { text: "I am at peace with who I am.", author: "Affirmation" },
    { text: "I am worthy of my dreams.", author: "Affirmation" },
    { text: "I am focused, persistent, and will never quit.", author: "Affirmation" },
    { text: "I am free to create the life I desire.", author: "Affirmation" },
    { text: "I am grateful for every lesson life brings.", author: "Affirmation" }
  ],
  bhagavadGita: [
    { text: "You have the right to work, but never to the fruit of work.", author: "Krishna, Bhagavad Gita" },
    { text: "Change is the law of the universe. You can be a millionaire, or a pauper in an instant.", author: "Krishna, Bhagavad Gita" },
    { text: "There is neither this world, nor the world beyond. Nor happiness for the one who doubts.", author: "Krishna, Bhagavad Gita" },
    { text: "A person can rise through the efforts of his own mind; or draw himself down, in the same manner. Because each person is his own friend or enemy.", author: "Krishna, Bhagavad Gita" },
    { text: "Man is made by his belief. As he believes, so he is.", author: "Krishna, Bhagavad Gita" },
    { text: "Set your heart upon your work but never its reward.", author: "Krishna, Bhagavad Gita" },
    { text: "There is nothing lost or wasted in this life.", author: "Krishna, Bhagavad Gita" },
    { text: "A person who is not disturbed by happiness and distress and is steady in both is certainly eligible for liberation.", author: "Krishna, Bhagavad Gita" },
    { text: "The mind acts like an enemy for those who do not control it.", author: "Krishna, Bhagavad Gita" },
    { text: "Perform your obligatory duty, because action is indeed better than inaction.", author: "Krishna, Bhagavad Gita" },
    { text: "There is neither this world, nor the world beyond. Nor happiness for the one who doubts.", author: "Krishna, Bhagavad Gita" },
    { text: "A person can rise through the efforts of his own mind; or draw himself down, in the same manner. Because each person is his own friend or enemy.", author: "Krishna, Bhagavad Gita" },
    { text: "No one who does good work will ever come to a bad end, either here or in the world to come.", author: "Krishna, Bhagavad Gita" },
    { text: "There is nothing lost or wasted in this life.", author: "Krishna, Bhagavad Gita" },
    { text: "The soul is neither born, and nor does it die.", author: "Krishna, Bhagavad Gita" },
    { text: "Whatever happened, happened for the good. Whatever is happening, is happening for the good. Whatever will happen, will also happen for the good.", author: "Krishna, Bhagavad Gita" },
    { text: "You came empty handed, and you will leave empty handed.", author: "Krishna, Bhagavad Gita" },
    { text: "There is nothing lost or wasted in this life.", author: "Krishna, Bhagavad Gita" },
    { text: "The mind is everything. What you think, you become.", author: "Krishna, Bhagavad Gita" }
  ]
};

// ===================== STATE & UTILS =====================
let currentCategory = 'stoic';
let quoteCycle = [];
let lastQuoteIndex = -1;
let autoRefreshInterval;

function shuffleQuotes(arr) {
  // Fisher-Yates shuffle
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getNextQuote() {
  const quotes = quoteCategories[currentCategory] || [];
  console.log(`🔍 Getting quote for category: ${currentCategory}, available quotes: ${quotes.length}`);
  
  if (!quotes.length) {
    console.warn('⚠️ No quotes available for category:', currentCategory);
    return null;
  }
  
  if (!quoteCycle.length) {
    quoteCycle = shuffleQuotes(quotes);
    lastQuoteIndex = -1;
    console.log('🔄 Shuffled quote cycle created');
  }
  
  lastQuoteIndex = (lastQuoteIndex + 1) % quoteCycle.length;
  const quote = quoteCycle[lastQuoteIndex];
  console.log('📝 Selected quote:', quote?.text?.substring(0, 50) + '...');
  return quote;
}

function selectRandomCategory() {
  const categories = Object.keys(quoteCategories);
  console.log('🎲 Available categories:', categories);
  
  if (categories.length === 0) {
    console.warn('⚠️ No categories available');
    return 'stoic';
  }
  
  const selected = categories[Math.floor(Math.random() * categories.length)];
  console.log('🎯 Selected category:', selected);
  return selected;
}

// ===================== RENDERING =====================
function renderQuoteWidget() {
  const container = document.getElementById('quotesWidget');
  if (!container) {
    console.error('❌ Quotes widget container not found');
    return;
  }

  console.log('🎨 Rendering quotes widget...');

  // Minimal HTML structure - no buttons or dropdowns
  container.innerHTML = `
    <div class="flex items-center mb-2">
      <h2 class="text-lg font-medium text-gray-300">Daily Quote</h2>
    </div>
    <div id="quoteCard" class="transition-opacity duration-500 ease-in-out opacity-100 bg-gray-800 rounded-lg p-4 min-h-[90px]">
      <div id="quoteText" class="text-xl md:text-2xl font-light text-gray-100 text-center leading-snug">Loading...</div>
      <div id="quoteAuthor" class="text-sm text-gray-400 text-right mt-2">— Loading</div>
    </div>
  `;
}

function fadeQuoteOutIn(newQuote) {
  const card = document.getElementById('quoteCard');
  const text = document.getElementById('quoteText');
  const author = document.getElementById('quoteAuthor');
  
  if (!card || !text || !author) {
    console.error('❌ Quote elements not found');
    return;
  }
  
  if (!newQuote) {
    console.error('❌ No quote provided for display');
    return;
  }

  console.log('🎭 Starting fade animation...');

  // Fade out
  card.style.transition = 'opacity 0.5s ease-in-out';
  card.style.opacity = 0;
  
  setTimeout(() => {
    // Update content
    text.textContent = `"${newQuote.text}"`;
    author.textContent = `— ${newQuote.author}`;
    
    // Fade in
    card.style.opacity = 1;
    console.log('✅ Quote updated successfully');
  }, 500);
}

function showInitialQuote() {
  console.log('🚀 Showing initial quote...');
  const quote = getNextQuote();
  const text = document.getElementById('quoteText');
  const author = document.getElementById('quoteAuthor');
  
  if (text && author && quote) {
    text.textContent = `"${quote.text}"`;
    author.textContent = `— ${quote.author}`;
    console.log('✅ Initial quote displayed');
  } else {
    console.error('❌ Failed to display initial quote');
    if (text) text.textContent = 'No quotes available';
    if (author) author.textContent = '— Error';
  }
}

// ===================== AUTO REFRESH =====================
function startAutoRefresh() {
  // Clear any existing interval
  if (autoRefreshInterval) {
    clearInterval(autoRefreshInterval);
  }
  
  // Set interval for hourly refresh (3600000ms = 1 hour)
  autoRefreshInterval = setInterval(() => {
    refreshQuote();
  }, 3600000);
  
  console.log('🕐 Auto-refresh started (every hour)');
}

function refreshQuote() {
  console.log('🔄 Refreshing quote...');
  
  // Select random category
  currentCategory = selectRandomCategory();
  
  // Reset cycle for new category
  quoteCycle = [];
  lastQuoteIndex = -1;
  
  // Get new quote
  const quote = getNextQuote();
  if (quote) {
    fadeQuoteOutIn(quote);
    console.log(`🔄 Quote refreshed: ${currentCategory} category`);
  } else {
    console.error('❌ Failed to refresh quote');
  }
}

// ===================== INIT =====================
function initQuotesWidget() {
  console.log('🚀 Initializing quotes widget...');
  
  // Render widget
  renderQuoteWidget();
  
  // Select random category and show initial quote
  currentCategory = selectRandomCategory();
  showInitialQuote();
  
  // Start auto-refresh
  startAutoRefresh();
  
  console.log('✅ Quotes widget initialized successfully');
}

// Wait for DOM and container
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    console.log('📄 DOM loaded, checking for quotes widget...');
    if (document.getElementById('quotesWidget')) {
      initQuotesWidget();
    } else {
      console.error('❌ Quotes widget container not found in DOM');
    }
  });
} else {
  console.log('📄 DOM already loaded, checking for quotes widget...');
  if (document.getElementById('quotesWidget')) {
    initQuotesWidget();
  } else {
    console.error('❌ Quotes widget container not found in DOM');
  }
} 