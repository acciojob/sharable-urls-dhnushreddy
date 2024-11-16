// your code here
const button = document.getElementById('button');
    const urlDisplay = document.getElementById('url');

    button.addEventListener('click', () => {
      const name = document.getElementById('name').value.trim();
      const year = document.getElementById('year').value.trim();

      // Base URL
      let baseUrl = "https://localhost:8080/";

      // Build query string
      const params = new URLSearchParams();
      if (name) params.append("name", name);
      if (year) params.append("year", year);

      // Update URL
      urlDisplay.textContent = `${baseUrl}${params.toString() ? '?' + params.toString() : ''}`;
    });