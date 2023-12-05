
// // original in strings
// const csvstring = `ID,Name,Occupation,Age\r\n42,Bruce,Knight,41\r\n57,Bob,Fry_Cook,19 \r\n63,Blaine,Quiz_Master,58\r\n98,Bill,Doctors_Assistant,26`;

// const rows = csvstring.split("\r\n");

// for (let i = 0; i < rows.length; i++) {
//     const cells = rows[i].split(",");
//     console.log("row " + (i + 1) + ":");
//     for (let z = 0; z < cells.length; z++) {
//         console.log("  cell " + (z + 1) + ": " + cells[z]);
//     }
// }

// const csvstring = `ID,Name,Occupation,Age,NewColumn\r\n42,Bruce,Knight,41\r\n57,Bob,Fry_Cook,19 \r\n63,Blaine,Quiz_Master,58\r\n98,Bill,Doctors_Assistant,26`;

// const rows = csvstring.split("\r\n");

// const firstrow = rows[0].split(",");
// const howmanycolumns = firstrow.length;

// for (let i = 0; i < rows.length; i++) {
//     const cells = rows[i].split(",");
//     console.log("Row " + (i + 1) + ":");
    
//     for (let z = 0; z < howmanycolumns; z++) {
//         console.log("  Cell " + (z + 1) + ": " + cells[z]);
//     }
// }

// const csvstring = `ID,Name,Occupation,Age,NewColumn\r\n42,Bruce,Knight,41\r\n57,Bob,Fry_Cook,19 \r\n63,Blaine,Quiz_Master,58\r\n98,Bill,Doctors_Assistant,26`;

// const rows = csvstring.split("\r\n");


// const headerRow = rows[0].split(",");
// const numberOfColumns = headerRow.length;


// const dataArray = [];

// for (let i = 0; i < rows.length; i++) {
//     const cells = rows[i].split(",");
//     const rowArray = [];

//     for (let z = 0; z < numberOfColumns; z++) {
//         rowArray.push(cells[z]);
//     }

//     dataArray.push(rowArray);
// }

// console.log(dataArray);

// const csvstring = `ID,Name,Occupation,Age,NewColumn\r\n42,Bruce,Knight,41\r\n57,Bob,Fry_Cook,19 \r\n63,Blaine,Quiz_Master,58\r\n98,Bill,Doctors_Assistant,26`;

// const rows = csvstring.split("\r\n");

// const headerRow = rows[0].split(",");
// const numberOfColumns = headerRow.length;

// const dataArray = [];

// for (let i = 1; i < rows.length; i++) { 
//     const cells = rows[i].split(",");
//     const rowObject = {};

//     for (let z = 0; z < numberOfColumns; z++) {
//         const key = headerRow[z].toLowerCase();
//         const value = cells[z];
//         rowObject[key] = value;
//     }

//     dataArray.push(rowObject);
// }

// console.log(dataArray);

// const csvstring = `ID,Name,Occupation,Age,NewColumn\r\n42,Bruce,Knight,41\r\n57,Bob,Fry_Cook,19 \r\n63,Blaine,Quiz_Master,58\r\n98,Bill,Doctors_Assistant,26`;

// const rows = csvstring.split("\r\n");

// const headerRow = rows[0].split(",");
// const numberOfColumns = headerRow.length;

// const dataArray = [];

// for (let i = 0; i < rows.length; i++) {
//     const cells = rows[i].split(",");
//     const rowObject = {};

//     for (let z = 0; z < numberOfColumns; z++) {
//         const key = headerRow[z].toLowerCase();
//         const value = cells[z];
//         rowObject[key] = value;
//     }

//     dataArray.push(rowObject);
// }


// dataArray.pop();


// const newObjectAtIndex1 = { id: "48", name: "Barry", occupation: "Runner", age: "25" };
// dataArray.splice(1, 0, newObjectAtIndex1);


// const newObjectToEnd = { id: "7", name: "Bilbo", occupation: "None", age: "111" };
// dataArray.push(newObjectToEnd);


// dataArray[1].NewColumn = ''; 
// dataArray[3].NewColumn = '';
// dataArray[5].NewColumn = '';

// console.log(dataArray);

//last step back to csv!

const dataArray = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41", NewColumn: "" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25", NewColumn: "" },
    { id: "57", name: "Bob", occupation: "Fry_Cook", age: "19", NewColumn: "" },
    { id: "63", name: "Blaine", occupation: "Quiz_Master", age: "58", NewColumn: "" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111", NewColumn: "" }
];

const headerRow = Object.keys(dataArray[0]);
const headerString = headerRow.join(',');

const csvRows = dataArray.map(row => {
    const values = headerRow.map(key => row[key]);
    return values.join(',');
});

const csvString = [headerString, ...csvRows].join('\r\n');
console.log(csvString);