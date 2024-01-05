document.addEventListener('DOMContentLoaded', function () {
    // Fetch data from the getAllScores API
    fetch('http://127.0.0.1:8000/api/getAllScores')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Assuming the server responds with an array of student objects
            console.log('All scores:', data);

            // Calculate average scores for each subject
            var mathTotal = 0;
            var chineseTotal = 0;
            var englishTotal = 0;
            var frontendTotal = 0;

            data.data.forEach(function (student) {
                mathTotal += student.math;
                chineseTotal += student.chinese;
                englishTotal += student.english;
                frontendTotal += student.frontend;
            });

            var totalStudents = data.data.length;

            var mathAverage = mathTotal / totalStudents;
            var chineseAverage = chineseTotal / totalStudents;
            var englishAverage = englishTotal / totalStudents;
            var frontendAverage = frontendTotal / totalStudents;

            // Draw the bar chart
            drawBarChart(mathAverage, chineseAverage, englishAverage, frontendAverage);
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
});

function drawBarChart(mathAverage, chineseAverage, englishAverage, frontendAverage) {
    var ctx = document.getElementById('barChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['数学', '语文', '英语', '前端'],
            datasets: [{
                label: '班级平均成绩',
                data: [mathAverage, chineseAverage, englishAverage, frontendAverage],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
