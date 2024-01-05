function gradeClick(){
    let dropdown = document.getElementById("grade-dropdown");
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'block';
    }
}

function schoolClick(){
    let dropdown = document.getElementById("school-dropdown");
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'block';
    }
}

document.addEventListener('click', function(event) {
    let dropdown = document.getElementById("grade-dropdown");
    let grade = document.getElementById("grade");

    // 如果点击事件不在下拉框内且不在班级管理元素内，则隐藏下拉框
    if (!dropdown.contains(event.target) && event.target !== grade) {
        dropdown.style.display = 'none';
    }
});

document.addEventListener('click', function(event) {
    let dropdown = document.getElementById("school-dropdown");
    let school = document.getElementById("school");

    // 如果点击事件不在下拉框内且不在班级管理元素内，则隐藏下拉框
    if (!dropdown.contains(event.target) && event.target !== school) {
        dropdown.style.display = 'none';
    }
});