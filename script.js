// Search Bar Functionality
function searchItem() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    if (query.trim() === "") {
        alert("Please enter an item name to search.");
        return;
    }
    alert("Searching for: " + query);
}

// Handle Form Submission
function handleReportSubmit(event) {
    event.preventDefault();
    
    const type = document.getElementById('reportType').value;
    const name = document.getElementById('itemName').value;

    alert(`Successfully reported: ${name} (${type.toUpperCase()})`);
    document.getElementById('reportForm').reset();
}

// Admin Action Simulation
function updateStatus(button, status) {
    const row = button.closest('tr');
    const statusCell = row.querySelector('.status');
    
    statusCell.textContent = status;
    if (status === 'Approved') {
        statusCell.style.color = 'green';
    } else {
        statusCell.style.color = 'red';
    }
    
    alert(`Claim status updated to ${status}`);
}