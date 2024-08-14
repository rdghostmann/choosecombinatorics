import * as XLSX from "xlsx";

function generateExcelData(data) {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    const excelData = writeFile(workbook, "SequenceGenerated.xlsx", {
      compression: true,
    });
    return excelData;
  }
  
  export default generateExcelData;