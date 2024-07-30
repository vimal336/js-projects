// Sample data array to store material requests
let materials = [
    {
      id: 1,
      material: "Petrol",
      type: "Ansheel Steel",
      date: "2023-02-01",
      detail: "Steel",
      mode: "Local Delivery",
      address: "VK Road Chennai"
    }
  ];
  

  const add = document.querySelector('.add');
  const openForm = document.querySelector('.open-form');

  // Function to render the table
  function renderTable() {
    const tableBody = document.querySelector('#material-table tbody');
    tableBody.innerHTML = ''; // Clear the table
  
    materials.forEach((material, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${material.material}</td>
        <td>${material.type}</td>
        <td>${material.date}</td>
        <td>${material.detail}</td>
        <td>${material.mode}</td>
        <td>${material.address}</td>
        <td><button class="edit-button" onclick="editMaterial(${index})"><i class="fas fa-edit"></i></button></td>
        <td><button class="delete-button" onclick="deleteMaterial(${index})"><i class="fas fa-trash-alt"></i></button></td>
      `;
      tableBody.appendChild(row);
    });
  }
  
  // Function to handle form submission
  document.getElementById('material-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const id = document.getElementById('material-id').value;
    const material = document.getElementById('material').value;
    const type = document.getElementById('activity').value;
    const detail = document.getElementById('material-detail').value;
    const mode = document.getElementById('delivery-mode').value;
    const date = document.getElementById('required-date').value;
    const address = document.getElementById('address').value;
    const errorMessage = document.getElementById('error-message');

  // Form validation
  if (!material || !type || !detail || !mode || !date || !address) {
    errorMessage.textContent = "***Please fill out all fields***";
    errorMessage.style.display = 'block';
    return;
  }

  errorMessage.style.display = 'none';

   if (id === '') {
      // Create
      materials.push({
        id: materials.length + 1,
        material,
        type,
        date,
        detail,
        mode,
        address
      });
    } else {
      // Update
      const index = materials.findIndex(mat => mat.id === parseInt(id));
      materials[index] = { id: parseInt(id), material, type, date, detail, mode, address };
    }
  
    // Clear form and reset id
    document.getElementById('material-id').value = '';
    this.reset();
    
    // Render table
    renderTable();
  });
  
  // Function to edit material
  function editMaterial(index) {
    const material = materials[index];
    document.getElementById('material-id').value = material.id;
    document.getElementById('material').value = material.material;
    document.getElementById('activity').value = material.type;
    document.getElementById('material-detail').value = material.detail;
    document.getElementById('delivery-mode').value = material.mode;
    document.getElementById('required-date').value = material.date;
    document.getElementById('address').value = material.address;
  }
  
  // Function to delete material
  function deleteMaterial(index) {
    confirm("Are you sure want to Delete!");
    materials.splice(index, 1);
    renderTable();
  }
  
  // Initial render
  renderTable();
  
  // Display form
  add.addEventListener('click', () => {
      openForm.classList.toggle('block');
      add.textContent = openForm.classList.contains('block') ? 'Close' : 'Add New';
  });
  

//Edit form
const edit = document.querySelector('.edit-button');
edit.addEventListener('click', () => {
    confirm("Are you sure want to edit!");
      openForm.classList.add('block');
});


//refresh button
const refreshButton = document.querySelector('.refresh');

refreshButton.addEventListener('click', () => {
    // confirm("Are you sure want to refresh this page!");
    location.reload(); 
});

  