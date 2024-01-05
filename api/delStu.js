document.addEventListener('DOMContentLoaded', function () {
    // Your existing code for fetching data and populating the table

    // Get the button, form, and input elements
    var openFormBtn = document.getElementById('openFormBtn');
    var openDeleteFormBtn = document.getElementById('openDeleteFormBtn');
    var addStudentForm = document.getElementById('addStudentForm');
    var deleteStudentForm = document.getElementById('deleteStudentForm');

    // Show the add student form when the "添加学生" button is clicked
    openFormBtn.addEventListener('click', function () {
        addStudentForm.style.display = 'block';
        deleteStudentForm.style.display = 'none'; // Hide delete student form
    });

    // Show the delete student form when the "删除学生" button is clicked
    openDeleteFormBtn.addEventListener('click', function () {
        deleteStudentForm.style.display = 'block';
        addStudentForm.style.display = 'none'; // Hide add student form
    });
});

function deleteStudent() {
    // Fetch the value from the delete student form
    var deleteStuNum = document.getElementById('deleteStuNum').value;

    // Fetch API options for DELETE request
    var options = {
        method: 'DELETE',
    };

    // Send the DELETE request to the server
    fetch('http://127.0.0.1:8000/api/deleteStu/' + deleteStuNum, options)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Assuming the server responds with the result of the deletion
            console.log('Student deleted:', data);

            // Clear the form
            clearDeleteForm();

            // Optionally, you can refresh the table with updated data
            // fetchAndPopulateTable();
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
}

function clearDeleteForm() {
    // Clear the value in the delete student form
    // document.getElementById('deleteStuNum').value = '';

    // Hide the delete student form
    // document.getElementById('deleteStudentForm').style.display = 'none';
    window.location.reload()
}
