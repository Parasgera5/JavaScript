const imageInput = document.querySelector("#image-input");
const imageCanvas = document.querySelector("#image-canvas");
const ctx = imageCanvas.getContext("2d");
const placeholder = document.querySelector("#placeholder");
const filtersContainer = document.querySelector("#filters-container");

let image = null; // Will hold the uploaded image object

// Centralized filter state
let filters = {
    brightness: { value: 100, min: 0, max: 200, unit: "%" },
    contrast: { value: 100, min: 0, max: 200, unit: "%" },
    saturate: { value: 100, min: 0, max: 200, unit: "%" }, /* <--- FIXED THIS LINE */
    "hue-rotate": { value: 0, min: 0, max: 360, unit: "deg" },
    blur: { value: 0, min: 0, max: 20, unit: "px" },
    grayscale: { value: 0, min: 0, max: 100, unit: "%" },
    sepia: { value: 0, min: 0, max: 100, unit: "%" },
    opacity: { value: 100, min: 0, max: 100, unit: "%" },
    invert: { value: 0, min: 0, max: 100, unit: "%" }
};

const presets = {
    "drama": { brightness: 90, contrast: 150, saturate: 80, "hue-rotate": 0, blur: 0, grayscale: 0, sepia: 20, opacity: 100, invert: 0 },
    "vintage": { brightness: 110, contrast: 90, saturate: 70, "hue-rotate": 0, blur: 1, grayscale: 0, sepia: 70, opacity: 100, invert: 0 },
    "noir": { brightness: 100, contrast: 140, saturate: 0, "hue-rotate": 0, blur: 0, grayscale: 100, sepia: 0, opacity: 100, invert: 0 },
    "cyberpunk": { brightness: 110, contrast: 130, saturate: 180, "hue-rotate": 180, blur: 0, grayscale: 0, sepia: 0, opacity: 100, invert: 0 },
    "soft glow": { brightness: 115, contrast: 95, saturate: 110, "hue-rotate": 0, blur: 2, grayscale: 0, sepia: 0, opacity: 100, invert: 0 },
    "warm sunset": { brightness: 110, contrast: 110, saturate: 130, "hue-rotate": 340, blur: 0, grayscale: 0, sepia: 30, opacity: 100, invert: 0 },
    "cool tone": { brightness: 100, contrast: 110, saturate: 90, "hue-rotate": 190, blur: 0, grayscale: 0, sepia: 0, opacity: 100, invert: 0 }
};

// 1. Generate Input Sliders Dynamically
function createFilters() {
    filtersContainer.innerHTML = "";
    Object.keys(filters).forEach(filterName => {
        const filter = filters[filterName];
        
        const div = document.createElement("div");
        div.classList.add("filter");

        const label = document.createElement("p");
        label.innerText = filterName.charAt(0).toUpperCase() + filterName.slice(1);

        const input = document.createElement("input");
        input.type = "range";
        input.min = filter.min;
        input.max = filter.max;
        input.value = filter.value;

        // When slider moves -> update state -> apply to canvas
        input.addEventListener("input", (e) => {
            filters[filterName].value = e.target.value;
            applyFilters();
        });

        div.appendChild(label);
        div.appendChild(input);
        filtersContainer.appendChild(div);
    });
}
createFilters();

// 2. Handle Image Upload & Render on Canvas
imageInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;

    image = new Image();
    image.src = URL.createObjectURL(file);
    image.onload = () => {
        // Match canvas dimensions to the image
        imageCanvas.width = image.width;
        imageCanvas.height = image.height;
        
        // Hide placeholder, show canvas
        placeholder.style.display = "none";
        imageCanvas.style.display = "block";
        
        applyFilters(); 
    };
});

// 3. Apply Filters and Draw Image
function applyFilters() {
    if (!image) return;

    // Build the string: e.g. "brightness(150%) contrast(120%)"
    let filterString = "";
    Object.keys(filters).forEach(key => {
        filterString += `${key}(${filters[key].value}${filters[key].unit}) `;
    });

    // Clear previous drawing to avoid overlapping issues (e.g., with opacity)
    ctx.clearRect(0, 0, imageCanvas.width, imageCanvas.height);
    
    // Set the filter Context property
    ctx.filter = filterString.trim();
    
    // Draw the fresh image
    ctx.drawImage(image, 0, 0, imageCanvas.width, imageCanvas.height);
}

// 4. Download Feature
document.querySelector("#download-btn").addEventListener("click", () => {
    if (!image) return;
    
    const link = document.createElement("a");
    link.download = "edited_image.png";
    link.href = imageCanvas.toDataURL(); // Convert canvas context to base64 URL
    link.click();
});

// 5. Reset Feature
document.querySelector("#reset-btn").addEventListener("click", () => {
    Object.keys(filters).forEach(key => {
        // Some defaults start at 0, others start at 100
        filters[key].value = (key === "brightness" || key === "contrast" || key === "saturation" || key === "opacity") ? 100 : 0;
    });
    createFilters(); 
    applyFilters(); 
});

const presetsContainer = document.querySelector("#presets-container");

function createPresets() {
    Object.keys(presets).forEach(presetName => {
        const btn = document.createElement("button");
        btn.classList.add("preset-btn");
        
        // Capitalize the first letter for the button text
        btn.innerText = presetName.charAt(0).toUpperCase() + presetName.slice(1);
        
        btn.addEventListener("click", () => {
            const selectedPreset = presets[presetName];
            
            // 1. Update our central filters state object
            Object.keys(selectedPreset).forEach(filterKey => {
                if (filters[filterKey]) {
                    filters[filterKey].value = selectedPreset[filterKey];
                }
            });

            // 2. Apply the visual changes to the canvas
            applyFilters();
            
            // 3. Re-render the sliders so the UI matches the new preset values
            createFilters(); 
        });

        presetsContainer.appendChild(btn);
    });
}

// Call the function to render the buttons on page load
createPresets();