function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Добавляем строку: [Дата, Имя, Телефон, Источник]
    sheet.appendRow([
      new Date().toLocaleString("uk-UA"),
      data.name || "N/A",
      data.phone || "N/A",
      data.source || "SADOA Langing"
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({ "result": "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (f) {
    return ContentService.createTextOutput(JSON.stringify({ "result": "error", "error": f.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
