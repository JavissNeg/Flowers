let isLoaded = false;

document.addEventListener("DOMContentLoaded", () => {
    if (!isLoaded) {
        fetch('./index.html')
            .then(response => response.text())
            .then(data => {
                document.open();
                document.write(data);
                document.close();
                isLoaded = true;
            })
            .catch(error => console.error('Error loading the HTML file:', error));
    }
});