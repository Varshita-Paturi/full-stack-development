
document.getElementById("studentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const id = document.getElementById("regId").value.trim();
    const department = document.getElementById("department").value;
    const year = document.getElementById("year").value;

    if (id === "" || name === "" || !department || !year) {
        document.getElementById("message").textContent =
            "Please enter valid details";
        return;
    }

    document.getElementById("message").textContent =
        "Form validated for " + name + "!";

    console.log({ id, name, department, year });

    const table = document.getElementById("studentTable");
const row = table.insertRow();

row.insertCell(0).textContent = name;
row.insertCell(1).textContent = id;
row.insertCell(2).textContent = department;
row.insertCell(3).textContent = year;
});



