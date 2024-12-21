const mathGrades = [];
const englishGrades = [];

document.getElementById("submit-button").addEventListener("click", () => {
    // Retrieve input values
    const mathGrade = parseInt(document.getElementById("math-grade").value);
    const englishGrade = parseInt(document.getElementById("english-grade").value);

    // Validate input
    if (isNaN(mathGrade) || isNaN(englishGrade) || mathGrade < 0 || mathGrade > 100 || englishGrade < 0 || englishGrade > 100) {
        alert("Please enter valid grades between 0 and 100!");
        return;
    }

    // Add grades to the ArrayList (arrays)
    mathGrades.push(mathGrade);
    englishGrades.push(englishGrade);

    // Add new row to the table
    const tableBody = document.getElementById("grades-body");
    const newRow = document.createElement("tr");

    const mathCell = document.createElement("td");
    mathCell.textContent = mathGrade;
    const englishCell = document.createElement("td");
    englishCell.textContent = englishGrade;
    const averageCell = document.createElement("td");
    averageCell.textContent = ((mathGrade + englishGrade) / 2).toFixed(2);

    newRow.appendChild(mathCell);
    newRow.appendChild(englishCell);
    newRow.appendChild(averageCell);
    tableBody.appendChild(newRow);

    // Update averages in footer
    updateAverages();
});

function updateAverages() {
    const mathAverage = (mathGrades.reduce((a, b) => a + b, 0) / mathGrades.length).toFixed(2);
    const englishAverage = (englishGrades.reduce((a, b) => a + b, 0) / englishGrades.length).toFixed(2);
    const overallAverage = (
        (mathGrades.concat(englishGrades).reduce((a, b) => a + b, 0)) /
        (mathGrades.length + englishGrades.length)
    ).toFixed(2);

    document.getElementById("math-average").textContent = mathAverage;
    document.getElementById("english-average").textContent = englishAverage;
    document.getElementById("overall-average").textContent = overallAverage;
}
