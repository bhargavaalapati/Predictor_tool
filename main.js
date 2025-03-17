function calculateCGPA() {
    const currentCGPA = parseFloat(document.getElementById('current_cgpa').value);
    const subjectCredits = document.getElementById('subject_credits').value.split(',').map(Number);
    const gradePoints = document.getElementById('grade_points').value.split(',').map(Number);

    let totalGradePoints = 0;
    let totalCredits = 0;

    for (let i = 0; i < subjectCredits.length; i++) {
        totalGradePoints += subjectCredits[i] * gradePoints[i];
        totalCredits += subjectCredits[i];
    }

    const predictedCGPA = totalGradePoints / totalCredits;
    alert("Predicted CGPA: " + predictedCGPA.toFixed(2));
}

document.getElementById('cgpaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    calculateCGPA();
});

document.getElementById('clearButton').addEventListener('click', function() {
    document.getElementById('current_cgpa').value = '';
    document.getElementById('subject_credits').value = '';
    document.getElementById('grade_points').value = '';
});