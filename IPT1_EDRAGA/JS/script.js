function searchContent() {
    
    removeHighlights();

    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    if (searchTerm === '') return; 

    const mainContent = document.querySelector('main');
    const textNodes = getTextNodes(mainContent);

    textNodes.forEach(node => {
        const parent = node.parentElement;
        const content = node.textContent.toLowerCase();
        if (content.includes(searchTerm)) {
            const regex = new RegExp(`(${searchTerm})`, 'gi');
            const highlightedText = node.textContent.replace(regex, '<span class="highlight">$1</span>');
            parent.innerHTML = highlightedText; 
        }
    });
}

function getTextNodes(element) {
    const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null, false);
    const textNodes = [];
    let node;
    while ((node = walker.nextNode())) {
        textNodes.push(node);
    }
    return textNodes;
}

function removeHighlights() {
    const highlights = document.querySelectorAll('.highlight');
    highlights.forEach(span => {
        const parent = span.parentElement;
        parent.replaceChild(document.createTextNode(span.textContent), span);
        parent.normalize();
    });
}

// Accordion Functionality
document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        // Toggle the active class on the button
        button.classList.toggle('active');

        // Toggle the visibility of the corresponding content
        const content = button.nextElementSibling;
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
});

// Dropdown Menu Functionality
document.getElementById('dropdown-menu').addEventListener('change', (event) => {
    const selectedOption = event.target.value;
    const dynamicContent = document.getElementById('dynamic-content');

    // Update the content based on the selected dropdown option
    switch (selectedOption) {
        case 'profile':
            dynamicContent.innerHTML = `
                <h3>Profile</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, voluptatum ipsam nostrum, atque maxime quae, quisquam ipsum quos possimus unde alias. Quae dolor inventore nisi velit natus minus ipsa quis!.</p>
            `;
            break;

        case 'skills':
            dynamicContent.innerHTML = `
                <h3>Skill Section</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, voluptatum ipsam nostrum, atque maxime quae, quisquam ipsum quos possimus unde alias. Quae dolor inventore nisi velit natus minus ipsa quis!.</p>
            `;
            break;

        case 'feedback':
            dynamicContent.innerHTML = `
                <h3>Feedback & Rating</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, voluptatum ipsam nostrum, atque maxime quae, quisquam ipsum quos possimus unde alias. Quae dolor inventore nisi velit natus minus ipsa quis!.</p>
            `;
            break;

        default:
            dynamicContent.innerHTML = `
                <h3>Profile</h3>
                <p>Detailed information about the profile goes here. Add relevant details or links.</p>
            `;
            break;
    }
});
function showFullImage(imageSrc) {
    // Get modal and image elements
    const modal = document.getElementById("image-modal");
    const modalImage = document.getElementById("modal-image");

    // Set the image source
    modalImage.src = imageSrc;

    // Display the modal
    modal.style.display = "flex";
}

function closeModal() {
    // Hide the modal
    const modal = document.getElementById("image-modal");
    modal.style.display = "none";
}