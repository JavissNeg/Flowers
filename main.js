document.addEventListener("DOMContentLoaded", () => {
    fetch('./index.html')
        .then(response => response.text())
        .then(data => {
            document.open();
            document.write(data);
            document.close();
        })
        .catch(error => console.error('Error loading the HTML file:', error));
});