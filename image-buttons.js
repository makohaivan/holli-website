// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function () {
    // Add event listener for category buttons
    document.querySelectorAll('.category-btn').forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            
            // Show all items if 'all' is selected
            document.querySelectorAll('.gallery-item').forEach(item => {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    item.style.display = 'block';  // Show item
                } else {
                    item.style.display = 'none';   // Hide item
                }
            });
        });
    });
});