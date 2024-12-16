//! Chapter no 38-44 start 

//? Question no 1 start

// function power(a, b) {

//     let result = 1;

//     for (let i = 0; i < b; i++) {
//         result *= a;
//     }
//     return result;
// }


// document.write(power(3, 4));

//? Question no 1 end

//? Question no 2 start
// function isLeapYear(year) {

//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         return true;
//     }
//     return false;
// }


// let year = 2024;
// if (isLeapYear(year)) {
//     document.write(year + " is a leap year.");
// } else {
//     document.write(year + " is not a leap year.");
// }

//? Question no 2 end

//? Question no 3 start

// function calculateSemiPerimeter(a, b, c) {
//     return (a + b + c) / 2;
// }

// function calculateTriangleArea(a, b, c) {
//     let S = calculateSemiPerimeter(a, b, c);
//     return Math.sqrt(S * (S - a) * (S - b) * (S - c));
// }

// let a = 5, b = 6, c = 7;
// document.write("Area of the triangle: " + calculateTriangleArea(a, b, c));

//? Question no 3 end

//? Question no 4 start

// function calculateAverage(marks1, marks2, marks3) {
//     return (marks1 + marks2 + marks3) / 3;
// }

// function calculatePercentage(marks1, marks2, marks3, totalMarks) {
//     let obtainedMarks = marks1 + marks2 + marks3;
//     return (obtainedMarks / (totalMarks * 3)) * 100;
// }

// function mainFunction(marks1, marks2, marks3, totalMarks) {
//     let average = calculateAverage(marks1, marks2, marks3);
//     let percentage = calculatePercentage(marks1, marks2, marks3, totalMarks);
//     document.write("Average Marks: " + average + "<br>");
//     document.write("Percentage: " + percentage + "%");
// }

// mainFunction(85, 90, 78, 100);

//? Question no 4 end

//? Question no 5 start

// function customIndexOf(string, char) {
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] === char) {
//             return i;
//         }
//     }
//     return -1;
// }

// document.write("Index of 'e' in 'hello': " + customIndexOf("hello", "e") + "<br>");
// document.write("Index of 'z' in 'hello': " + customIndexOf("hello", "z") + "<br>");

//? Question no 5 end

// //? Question no 6 start
// function removeVowels(sentence) {
//     let result = "";
//     for (let i = 0; i < sentence.length; i++) {
//         if (!"aeiouAEIOU".includes(sentence[i])) {
//             result += sentence[i];
//         }
//     }
//     return result;
// }

// let sentence = "This is a simple sentence.";
// document.write("Sentence without vowels: " + removeVowels(sentence) + "<br>");
// //? Question no 6 end

// //? Question no 7 start
// function countVowelPairs(text) {
//     let count = 0;
//     for (let i = 0; i < text.length - 1; i++) {
//         let pair = text[i] + text[i + 1];
//         switch (pair.toLowerCase()) {
//             case "aa": case "ae": case "ai": case "ao": case "au":
//             case "ea": case "ee": case "ei": case "eo": case "eu":
//             case "ia": case "ie": case "ii": case "io": case "iu":
//             case "oa": case "oe": case "oi": case "oo": case "ou":
//             case "ua": case "ue": case "ui": case "uo": case "uu":
//                 count++;
//                 break;
//         }
//     }
//     return count;
// }

// let text = "Pleases read this application and give me gratuity";
// document.write("Number of successive vowel pairs: " + countVowelPairs(text));
//? Question no 7 end

//? Question no 8 start

// function convertToMeters(distanceKm) {
//     return distanceKm * 1000;
// }

// function convertToFeet(distanceKm) {
//     return distanceKm * 3280.84;
// }

// function convertToInches(distanceKm) {
//     return distanceKm * 39370.1;
// }

// function convertToCentimeters(distanceKm) {
//     return distanceKm * 100000;
// }

// let distanceKm = 5;
// document.write("Distance in meters: " + convertToMeters(distanceKm) + " m<br>");
// document.write("Distance in feet: " + convertToFeet(distanceKm) + " ft<br>");
// document.write("Distance in inches: " + convertToInches(distanceKm) + " in<br>");
// document.write("Distance in centimeters: " + convertToCentimeters(distanceKm) + " cm<br>");

//? Question no 8 end

//? Question no 9 start
// function calculateOvertimePay(hoursWorked) {
//     let overtimeHours = hoursWorked > 40 ? hoursWorked - 40 : 0;
//     return overtimeHours * 12;
// }

// let hoursWorked = 45;
// document.write("Overtime pay: Rs. " + calculateOvertimePay(hoursWorked) + "<br>");
// //? Question no 9 end

// //? Question no 10 start
// function calculateCurrencyNotes(amount) {
//     let notes100 = Math.floor(amount / 100);
//     let remaining = amount % 100;

//     let notes50 = Math.floor(remaining / 50);
//     remaining = remaining % 50;

//     let notes10 = Math.floor(remaining / 10);

//     return {
//         notes100: notes100,
//         notes50: notes50,
//         notes10: notes10
//     };
// }

// let amount = 880;
// let result = calculateCurrencyNotes(amount);
// document.write("100-Rs notes: " + result.notes100 + "<br>");
// document.write("50-Rs notes: " + result.notes50 + "<br>");
// document.write("10-Rs notes: " + result.notes10 + "<br>");

//? Question no 10 end

//! Chapter no 38-44 end 

//! Chapter no 43-44 start

//? Question no 1 start
// function showAlertOnClick() {
//     alert("Link clicked!");
// }

// document.getElementById("myLink").addEventListener("click", showAlertOnClick);
//? Question no 1 end

//? Question no 2 start
// function showImageAlert(image) {
//     alert("You clicked on the image of " + image.alt);
// }

// document.getElementById("image1").addEventListener("click", function() {
//     showImageAlert(this);
// });

// document.getElementById("image2").addEventListener("click", function() {
//     showImageAlert(this);
// });
//? Question no 2 end

//? Question no 3 start
// function deleteRow(button) {
//     let row = button.parentNode.parentNode;
//     row.parentNode.removeChild(row);
// }

// function generateTable() {
//     let table = document.getElementById("studentTable");
//     let students = [
//         { name: "John", age: 18, grade: "A" },
//         { name: "Alice", age: 19, grade: "B" },
//         { name: "Bob", age: 20, grade: "C" },
//         { name: "Eve", age: 18, grade: "A" },
//         { name: "Charlie", age: 21, grade: "B" },
//         { name: "David", age: 22, grade: "C" },
//         { name: "Mia", age: 19, grade: "A" },
//         { name: "Zoe", age: 20, grade: "B" },
//         { name: "Lucas", age: 21, grade: "C" },
//         { name: "Sophia", age: 19, grade: "A" }
//     ];

//     students.forEach((student, index) => {
//         let row = table.insertRow();
//         let cell1 = row.insertCell(0);
//         let cell2 = row.insertCell(1);
//         let cell3 = row.insertCell(2);
//         let cell4 = row.insertCell(3);

//         cell1.textContent = student.name;
//         cell2.textContent = student.age;
//         cell3.textContent = student.grade;
//         let deleteButton = document.createElement("button");
//         deleteButton.textContent = "Delete";
//         deleteButton.onclick = function () { deleteRow(this); };
//         cell4.appendChild(deleteButton);
//     });
// }

// window.onload = generateTable;
//? Question no 3 end

//? Question no 4 start
// function changeImageOnMouseOver() {
//     document.getElementById("myImage").src = "image2.jpg";
// }

// function resetImageOnMouseOut() {
//     document.getElementById("myImage").src = "image1.jpg";
// }
//? Question no 4 end

//? Question no 5 start
// let counter = 0;

// function increaseCounter() {
//     counter++;
//     document.getElementById("counterDisplay").textContent = counter;
// }

// function decreaseCounter() {
//     counter--;
//     document.getElementById("counterDisplay").textContent = counter;
// }
//? Question no 5 end

//! Chapter no 43-44 end

//! Chapter no 49-52 start

//? Question no 1 start
// function displayFormData() {
//     let name = document.getElementById("name").value;
//     let email = document.getElementById("email").value;
//     let password = document.getElementById("password").value;

//     document.getElementById("formData").innerHTML = 
//         "<h3>Form Data Submitted:</h3>" +
//         "<p>Name: " + name + "</p>" +
//         "<p>Email: " + email + "</p>" +
//         "<p>Password: " + password + "</p>";
// }
//? Question no 1 end

//? Question no 2 start
// function toggleDetails() {
//     let details = document.getElementById("fullDetails");
//     let button = document.getElementById("readMoreButton");

//     if (details.style.display === "none") {
//         details.style.display = "block";
//         button.textContent = "Read Less";
//     } else {
//         details.style.display = "none";
//         button.textContent = "Read More";
//     }
// }
//? Question no 2 end

//? Question no 3 start
// let students = [];

// function addStudent() {
//     let name = document.getElementById("studentName").value;
//     let age = document.getElementById("studentAge").value;
//     let grade = document.getElementById("studentGrade").value;

//     let student = { name, age, grade };
//     students.push(student);
//     displayStudents();
//     resetForm();
// }

// function displayStudents() {
//     let table = document.getElementById("studentTable");
//     let tbody = table.querySelector("tbody");
//     tbody.innerHTML = "";

//     students.forEach((student, index) => {
//         let row = tbody.insertRow();
//         row.insertCell(0).textContent = student.name;
//         row.insertCell(1).textContent = student.age;
//         row.insertCell(2).textContent = student.grade;

//         let deleteCell = row.insertCell(3);
//         let deleteButton = document.createElement("button");
//         deleteButton.textContent = "Delete";
//         deleteButton.onclick = function() {
//             deleteStudent(index);
//         };
//         deleteCell.appendChild(deleteButton);

//         let editCell = row.insertCell(4);
//         let editButton = document.createElement("button");
//         editButton.textContent = "Edit";
//         editButton.onclick = function() {
//             editStudent(index);
//         };
//         editCell.appendChild(editButton);
//     });
// }

// function deleteStudent(index) {
//     students.splice(index, 1);
//     displayStudents();
// }

// function editStudent(index) {
//     let student = students[index];
//     document.getElementById("studentName").value = student.name;
//     document.getElementById("studentAge").value = student.age;
//     document.getElementById("studentGrade").value = student.grade;
//     document.getElementById("editIndex").value = index;
//     document.getElementById("editForm").style.display = "block";
// }

// function updateStudent() {
//     let index = document.getElementById("editIndex").value;
//     let name = document.getElementById("studentName").value;
//     let age = document.getElementById("studentAge").value;
//     let grade = document.getElementById("studentGrade").value;

//     students[index] = { name, age, grade };
//     displayStudents();
//     resetForm();
//     document.getElementById("editForm").style.display = "none";
// }

// function resetForm() {
//     document.getElementById("studentName").value = "";
//     document.getElementById("studentAge").value = "";
//     document.getElementById("studentGrade").value = "";
//     document.getElementById("editIndex").value = "";
// }
//? Question no 3 end

//! Chapter no 49-52 end

//! Chapter no 58-67 start

//? Question no 1 start

// let firstName = document.getElementById("first-name");

// let lastName = document.getElementById("last-name");

// let email = document.getElementById("email");

// let mainContent = document.getElementById("main-content");

// let showFirstName = document.getElementById("render-first-name");

// let showLastName = document.getElementById("render-last-name");

// let showEmail = document.getElementById("render-email");

// const submitDetails = () => {
//     showFirstName.innerText = ` First Name : ${firstName.value}`
//     showLastName.innerText =` Last Name : ${lastName.value}`
//     showEmail.innerText = `Email : ${email.value}`

//     firstName.value = "";
//     lastName.value = "";
//     email.value = "";
// }

//? Question no 1 start

//? Question no 2 start

// function showNodeTypes() {
    
//     let formContent = document.getElementById("form-content");
//     console.log("Node type of 'form-content':", formContent.nodeType);

    
//     let lastName = document.getElementById("lastName");
//     console.log("Node type of 'lastName':", lastName.nodeType);
//     console.log("Node type of child node of 'lastName':", lastName.firstChild.nodeType);

    
//     lastName.firstChild.textContent = "Last Name: Updated";

    
//     let mainContent = document.getElementById("main-content");
//     console.log("First child of 'main-content':", mainContent.firstChild);
//     console.log("Last child of 'main-content':", mainContent.lastChild);

    
//     let nextSibling = lastName.nextSibling;
//     let prevSibling = lastName.previousSibling;
//     console.log("Next sibling of 'lastName':", nextSibling);
//     console.log("Previous sibling of 'lastName':", prevSibling);

    
//     let email = document.getElementById("email");
//     let parentNode = email.parentNode;
//     console.log("Parent node of 'email':", parentNode);
//     console.log("Node type of parent of 'email':", parentNode.nodeType);
// }

//? Question no 2 end


//! Chapter no 58-67 end
