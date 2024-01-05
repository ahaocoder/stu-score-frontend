document.addEventListener('DOMContentLoaded', function () {
    // Your existing code for fetching data and populating the table

    // Get the button and form elements
    var openFormBtn = document.getElementById('openFormBtn');
    var addStudentForm = document.getElementById('addStudentForm');

    // Show the form when the button is clicked
    openFormBtn.addEventListener('click', function () {
        addStudentForm.style.display = 'block';
    });
});

function addStudent() {
    // Fetch the values from the form
    var stuNum = document.getElementById('stuNum').value;
    var name = document.getElementById('name').value;
    var math = document.getElementById('math').value;
    var chinese = document.getElementById('chinese').value;
    var english = document.getElementById('english').value;
    var frontend = document.getElementById('frontend').value;

    // Create a FormData object and append form fields
    var formData = new FormData();
    formData.append('stu_num', stuNum);
    formData.append('name', name);
    formData.append('math', math);
    formData.append('english', english);
    formData.append('chinese', chinese);
    formData.append('frontend', frontend);

    // Fetch API options
    var options = {
        method: 'POST',
        body: formData,
        // 设置请求头，确保匹配服务器端的要求
        // headers: {
        //     // 如果服务器端要求使用 form-data，可以尝试设置如下 Content-Type
        //     // 'Content-Type': 'multipart/form-data',
        // },
    };

    // 发起请求
    fetch('http://127.0.0.1:8000/api/createStu', options)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Assuming the server responds with the newly added student data
            console.log('New student added:', data);

            // Clear the form
            clearForm();

            // Optionally, you can refresh the table with updated data
            // fetchAndPopulateTable();
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
}

function clearForm() {
    // Clear the values in the form
    // document.getElementById('stuNum').value = '';
    // document.getElementById('name').value = '';
    // document.getElementById('math').value = '';
    // document.getElementById('chinese').value = '';
    // document.getElementById('english').value = '';
    // document.getElementById('frontend').value = '';
    //
    // // Hide the form
    // document.getElementById('addStudentForm').style.display = 'none';
    window.location.reload()
}
