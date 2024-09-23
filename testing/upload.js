document
  .getElementById("upload-form")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    // Get the selected files from the input element
    const filesInput = document.getElementById("file-input");
    const files = filesInput.files;

    if (files.length === 0) {
      alert("Please select a file!");
      return;
    }

    // Create a FormData object to hold the files
    const formData = new FormData();

    // Append each selected file to the FormData object
    for (let i = 0; i < files.length; i++) {
      formData.append("files[]", files[i]);
    }

    try {
      // Send the form data using the fetch API
      const response = await fetch("https://up1.fileditch.com/upload.php", {
        method: "POST",
        body: formData,
      });

      // Handle the response from the server
      if (response.ok) {
        const result = await response.json(); // Assume the response is JSON
        document.getElementById("response").innerHTML = `
                <p>Upload successful!</p>
                <pre>${JSON.stringify(result, null, 2)}</pre>
            `;
      } else {
        document.getElementById("response").innerHTML = `
                <p>Upload failed! Status: ${response.status}</p>
            `;
      }
    } catch (error) {
      document.getElementById("response").innerHTML = `
            <p>An error occurred: ${error.message}</p>
        `;
    }
  });
