let count = 0;
document.getElementById("main").onclick = function () {
    count++; // Increment the count variable
    document.getElementById("count").innerHTML = count;
}