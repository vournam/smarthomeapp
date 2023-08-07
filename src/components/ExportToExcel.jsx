import React from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { db } from "../firebase";
import { doc, setDoc, collection, query, where, getDocs } from "firebase/firestore"; 

const ExportToExcel = () => {
  const handleExport = async () => {
    try {
      const querySnapshot = await db.collection('users').get();
      const data = querySnapshot.docs.map(doc => doc.data());

      const worksheet = XLSX.utils.json_to_sheet(data);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Users');
      const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
      const dataBlob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      saveAs(dataBlob, 'users.xlsx');
    } catch (error) {
      console.error('Error exporting Firestore data:', error);
    }
  };

  return (
    <button onClick={handleExport}>Export to Excel</button>
  );
};

export default ExportToExcel;
