/**
 * SPENTREE INTERACTIVE ENGINE
 * Core Logic: Scroll-Based Narratives, Dynamic Tree States, and Forest Growth
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. SCROLL-BASED NARRATIVE (Intersection Observer) ---
    // Gradually introduces sections as the user scrolls [cite: 4, 61]
    const observerOptions = {
        threshold: 0.2 // Trigger when 20% of the section is visible
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
            }
        });
    }, observerOptions);

    // Apply the observer to all narrative sections [cite: 4]
    document.querySelectorAll('section').forEach(section => {
        revealObserver.observe(section);
    });


    // --- 2. DAILY TREE SYSTEM (Dynamic Health States) ---
    // Interactive slider showing relationship between spending and health [cite: 32, 35]
    const slider = document.getElementById('spend-slider');
    const treeVisual = document.getElementById('main-tree');
    const treeStatus = document.getElementById('tree-status');
    const percentLabel = document.getElementById('percent-label');

    const updateTreeState = (value) => {
        percentLabel.innerText = `${value}%`;
        
        // Define Visual States: healthy, strong, drying, or dry [cite: 34]
        if (value <= 40) {
            // State: Healthy & Strong (Primary Green #34C759) [cite: 34, 72]
            treeVisual.style.color = "#34C759";
            treeVisual.innerHTML = '<i class="ph-fill ph-tree-evergreen"></i>';
            treeStatus.innerText = "Status: Healthy & Strong";
            treeVisual.style.filter = "drop-shadow(0 0 20px rgba(52,199,89,0.5))";
        } 
        else if (value <= 90) {
            // State: Drying (Warning State) [cite: 34]
            treeVisual.style.color = "#fbc02d"; // Warm Yellow
            treeVisual.innerHTML = '<i class="ph-fill ph-tree"></i>';
            treeStatus.innerText = "Status: Drying...";
            treeVisual.style.filter = "none";
        } 
        else {
            // State: Dry (Financial Drought) [cite: 34]
            treeVisual.style.color = "#8d6e63"; // Wilted Brown
            treeVisual.innerHTML = '<i class="ph-fill ph-wind"></i>';
            treeStatus.innerText = "Status: Dry & Wilted";
            treeVisual.style.filter = "grayscale(0.8)";
        }
    };

    if (slider) {
        slider.addEventListener('input', (e) => {
            updateTreeState(e.target.value);
        });
    }


    // --- 3. FOREST GROWTH VISUALIZATION ---
    // Creatively represents consistent discipline through a grid [cite: 37, 42]
    const forestDisplay = document.getElementById('forest-display');
    const treeCountEl = document.getElementById('tree-count');
    
    if (forestDisplay) {
        const totalTrees = 12; // Example "Total trees grown" [cite: 46]
        const maxGridSize = 15;

        for (let i = 0; i < maxGridSize; i++) {
            const treeIcon = document.createElement('i');
            treeIcon.className = "ph-fill ph-tree mini-tree"; // Using Phosphor Icons [cite: 78]
            
            // Activate trees based on successful spending days [cite: 40]
            if (i < totalTrees) {
                treeIcon.classList.add('active');
            }
            
            forestDisplay.appendChild(treeIcon);
        }

        if (treeCountEl) {
            treeCountEl.innerText = totalTrees;
        }
    }
});