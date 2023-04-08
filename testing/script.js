console.log(Office)
Office.initialize = function () {
    // Your code here
 
  
    // Define a variable that contains the data to send to Word
// Call the createDocument method to create a new Word document
Office.context.document.createDocument(
    "",
    {
      fileType: Office.FileType.PDF,
      asyncContext: { foo: "bar" },
      history: Office.History.New
    },
    function (asyncResult) {
      if (asyncResult.status == Office.AsyncResultStatus.Failed) {
        console.log("Error: " + asyncResult.error.message);
      } else {
        console.log("Document created with ID " + asyncResult.value);
      }
    }
  );
  

};