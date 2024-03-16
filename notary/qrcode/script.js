document.getElementById("sendRequest").addEventListener("click", async () => {
  const QRcode = document.getElementById("QRcode").value;
  const postData = {
    QRcode,
    CreatedDate: new Date(),
    AccessTime: new Date(),
    Creator: "Tama",
  };

  try {
    const response = await fetch(
      "https://asia-east2-dataconnecting-a1a50.cloudfunctions.net/app/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      }
    );

    if (response.ok) {
      console.log("POST request successful");
      const data = await response.json();
      console.log("Response:", data);
    } else {
      const message = await response.text();
      console.error("Failed to make POST request:", message);
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
});

// document
//   .getElementById("myForm")
//   .addEventListener("submit", async function (event) {
//     event.preventDefault(); // Prevent default form submission

//     // Get form data
//     const formDataJson = Object.fromEntries(new FormData(this).entries());
//     const formData = {
//       ...formDataJson,
//       CreatedDate: new Date(),
//       AccessTime: new Date(),
//       Creator: "Tama",
//     };
//     console.log(formData);
//     // Execute your custom logic for handling the form submission
//     await handleFormSubmission(formData);
//   });

// async function handleFormSubmission(formData) {
//   try {
//     const response = await fetch(
//       "https://asia-east2-dataconnecting-a1a50.cloudfunctions.net/app/users",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: formData,
//       }
//     );

//     if (response.ok) {
//       console.log("POST request successful");
//       const data = await response.json();
//       console.log("Response:", data);
//     } else {
//       const message = await response.text();
//       console.error("Failed to make POST request:", message);
//     }
//   } catch (error) {
//     console.error("Error:", error.message);
//   }
// }
