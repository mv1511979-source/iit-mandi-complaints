function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
    
    sheet.appendRow([
      data.Name || "N/A", 
      data["Roll No"] || "N/A",
      data.Issue || "N/A", 
      data.Category || "N/A", 
      data.Description || "N/A", 
      data.date || "N/A" // This pulls the DD/MM/YYYY from your JS
    ]); 

    return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
  } catch (err) {
    return ContentService.createTextOutput("Error: " + err.toString());
  }
}
