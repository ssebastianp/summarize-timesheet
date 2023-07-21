import { Injectable } from '@angular/core';
import { RawFileModel } from '../models/raw-file.model';


type Raw = {
  taskName: string;
  startDate: string;
  endDate: string;
};

@Injectable({
  providedIn: 'root',
})
export class FileService {

  private isValidDate(date: string): boolean {
    return /\b[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}:[0-9]{2}\b/gm.test(date);
  }

  private transformRow(row: Raw): RawFileModel | null {
    if (this.isValidDate(row.startDate) && this.isValidDate(row.endDate)) {
      return {
        taskName: row.taskName,
        startDate: new Date(row.startDate),
        endDate: new Date(row.endDate),
      };
    }
    return null;
  }

  public csvFileToJson(file: string): RawFileModel[] {
    const rows = file.split('\n').reduce((acc, current) => {
      const cells = current.split(',');
      const row = this.transformRow({
        taskName: cells[0],
        startDate: cells[1],
        endDate: cells[2],
      });

      if (row) {
        acc = [...acc, row];
      }

      return acc;
    }, [] as RawFileModel[]);

    return rows;
  }
}






// function readCSVFileToJson(file: File) {
//   var reader = new FileReader();
//   reader.readAsText(file);
//   reader.onload = (event: ProgressEvent<FileReader>) => {
//     const csvFile: string | undefined = event.target?.result as string;
//     if (!csvFile) {
//       return { error: 'No file found!' };
//     }

//     const rows = csvFile.split('\n').map((row) => {
//       const cells = row.split(',');
//       return {
//         taskName: cells[0],
//         startDate: cells[1],
//         endDate: cells[2],
//       };
//     });

//     return rows.filter(r => this.validateRow(row));



//     // <table > <tbody>
//     var tbodyEl = document.getElementById('tblcsvdata').getElementsByTagName('tbody')[0];
//     tbodyEl.innerHTML = "";

//     // Loop on the row Array (change row=0 if you also want to read 1st row)
//     for (var row = 1; row < rowData.length; row++) {

//       // Insert a row at the end of table
//       var newRow = tbodyEl.insertRow();

//       // Split by comma (,) to get column Array
//       rowColData = rowData[row].split(',');

//       // Loop on the row column Array
//       for (var col = 0; col < rowColData.length; col++) {

//         // Insert a cell at the end of the row
//         var newCell = newRow.insertCell();
//         newCell.innerHTML = rowColData[col];

//       }

//     }
//   };

// }