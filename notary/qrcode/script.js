document.getElementById("sendRequest").addEventListener("click", async () => {
  const inputtext = document.getElementById("QRcode").value;
  const qrcodes = datahandler(inputtext);
  const postData = {
    qrcodes,
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
      const data = await response.json();
      console.error("Failed to make POST request:", `${message}: ${data}`);
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
});

document.getElementById("testing").addEventListener("click", async () => {
  const QRcode = document.getElementById("QRcode").value;
  datahandler(QRcode);
});
const datahandler = (data) => {
  const regex =
    /(?<cccd>\d{12})\|(?<cmnd>(\d{9})?)\|(?<name>[^|]+)\|(?<DoB>\d{8})\|(?<sex>(Nam|Nữ))\|(?<address>[^|]+)\|(?<dateOfIssue>(\d{8})?)/gm;
  let matches;
  let qrcodes = [];
  while ((matches = regex.exec(data)) !== null) {
    if (matches.index === regex.lastIndex) {
      regex.lastIndex++;
    }
    qrcodes.push(matches[0]);
  }
  return qrcodes;
};
