const stack = document.querySelector('#stack');
const addBtn = document.querySelector('#add-btn');
const upBtn = document.querySelector('#up-btn');
const downBtn = document.querySelector('#down-btn');
const formContainer = document.querySelector('.form-container');
const form = document.querySelector('#call-form');
const closeBtns = document.querySelectorAll('.close-form, .close-btn-bottom');
const filterBtns = document.querySelectorAll('.filter-btn');

let allData = []; // Stores ALL data (source of truth)
let activeData = []; // Stores FILTERED data (what is currently shown)

function init() {
    const storedData = localStorage.getItem('callData');
    if (storedData) {
        allData = JSON.parse(storedData);
    } else {
        // Dummy Data
        allData = [
            { img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500', name: 'Michael', hometown: 'SF', purpose: 'Quick Call', category: 'Emergency' },
            { img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500', name: 'Sarah', hometown: 'NYC', purpose: 'Project Update', category: 'Urgent' },
            { img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500', name: 'David', hometown: 'London', purpose: 'Interview', category: 'No Rush' }
        ];
    }
    // Initially, show everything
    activeData = [...allData];
    renderCards();
}

// Render the 'activeData' array to the DOM
function renderCards() {
    stack.innerHTML = '';
    
    // If filtered list is empty, show a message
    if(activeData.length === 0) {
        stack.innerHTML = '<div style="color:#555; margin-top:50px;">No calls in this category</div>';
        return;
    }

    activeData.forEach(item => {
        const card = document.createElement('div');
        // Add class based on category (replace spaces if any)
        card.classList.add('card', item.category.replace(' ', '-'));
        
        card.innerHTML = `
            <div class="top-part">
                <img src="${item.img}" class="profile-img" alt="User">
                <h2>${item.name}</h2>
            </div>
            <div class="details">
                <div class="info"><span>Home town</span> <span>${item.hometown}</span></div>
                <div class="info"><span>Purpose</span> <span>${item.purpose}</span></div>
            </div>
            <div class="buttons-row">
                <button class="action-btn call-btn"><i class="ri-phone-fill"></i> Call</button>
                <button class="action-btn msg-btn">Message</button>
            </div>
        `;
        stack.appendChild(card);
    });

    applyStackEffect();
}

// 3D Stack Effect Logic
function applyStackEffect() {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        // Reset defaults
        card.style.zIndex = 0;
        card.style.opacity = 0;
        card.style.transform = 'translateY(50px) scale(0.8)';
        card.style.display = 'none';

        // Only show top 3 cards for the effect
        if (index < 3) {
            card.style.display = 'flex';
            // Index 0 is front: z-index 3
            card.style.zIndex = 3 - index;
            
            // Visual math
            const scale = 1 - (index * 0.05);
            const translateY = index * 15;
            const opacity = 1 - (index * 0.2);

            card.style.opacity = opacity;
            card.style.transform = `translateY(${translateY}px) scale(${scale})`;
        }
    });
}

// --- FILTER LOGIC ---
filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Highlight active filter button
        filterBtns.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');

        const category = e.target.getAttribute('data-filter');

        // Filter the main data array
        if (category === 'all') {
            activeData = [...allData];
        } else {
            activeData = allData.filter(item => item.category === category);
        }

        // Re-render based on filtered list
        renderCards();
    });
});

// Navigation Logic (Operates on activeData now)
upBtn.addEventListener('click', () => {
    if(activeData.length > 1){
        // Move LAST item to FRONT
        const lastItem = activeData.pop();
        activeData.unshift(lastItem);
        renderCards();
    }
});

downBtn.addEventListener('click', () => {
    if(activeData.length > 1){
        // Move FIRST item to BACK
        const firstItem = activeData.shift();
        activeData.push(firstItem);
        renderCards();
    }
});

// Form Logic
addBtn.addEventListener('click', () => formContainer.style.display = 'flex');
closeBtns.forEach(btn => btn.addEventListener('click', () => formContainer.style.display = 'none'));

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newEntry = {
        img: document.querySelector('#img-url').value,
        name: document.querySelector('#name').value,
        hometown: document.querySelector('#hometown').value,
        purpose: document.querySelector('#purpose').value,
        category: document.querySelector('input[name="category"]:checked').value
    };

    // Add to master list and save
    allData.push(newEntry);
    localStorage.setItem('callData', JSON.stringify(allData));
    
    // Reset view to 'All' so user sees their new card
    activeData = [...allData];
    filterBtns.forEach(b => b.classList.remove('active'));
    document.querySelector('[data-filter="all"]').classList.add('active');

    renderCards();
    form.reset();
    formContainer.style.display = 'none';
});

init();