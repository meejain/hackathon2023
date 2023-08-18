import { getAllSheetData } from '../../scripts/scripts.js';


function createCard(row, style) {
    const card = document.createElement('div');
    if (style) card.classList.add(style);
    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');
    card.append(cardContent)
    const cardScore = document.createElement('div');
    cardScore.classList.add('card-score');
    card.append(cardScore);
    return (card);
}













export default async function decorate(block){
    block.textContent = '';
    const sheetList = await getAllSheetData();
    console.log(sheetList);
    if (sheetList.length) {
        sheetList.forEach((row) => {
            block.append(createCard(row, 'lhs-card'));
        });
    } else {
        block.remove();
    }

}