import { getAllSheetData } from '../../scripts/scripts.js';

export default async function decorate(block){
    block.textContent = '';
    const sheetList = await getAllSheetData();
    console.log(sheetList);
}