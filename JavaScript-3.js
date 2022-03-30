function closeMe() {
    x = document.getElementById("demo");
    x.style.display = "none";
    // or use this instead of previous line x.className = "closed";
}

function openMe() {
    x = document.getElementById("demo");
    x.style.display = "block";
    // or use this instead of previous line x.className = "open";
}