fetch('http://127.0.0.1:8000/api/getAllScores')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // 处理获取的数据
        console.log(data.data);

        // Get the table body element
        var tableBody = document.querySelector('#data-table tbody');

        // Clear existing rows if any
        tableBody.innerHTML = '';

        // Loop through the data and create table rows
        data.data.forEach(function (item) {
            var row = tableBody.insertRow();

            // Assuming your data structure has 'stu_num', 'name', 'math', 'chinese', 'english', 'frontend' properties
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);
            var cell6 = row.insertCell(5);

            cell1.textContent = item.stu_num;
            cell2.textContent = item.name;
            cell3.textContent = item.math;
            cell4.textContent = item.chinese;
            cell5.textContent = item.english;
            cell6.textContent = item.frontend;
            // Add more cells as needed for additional properties
        });
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });
