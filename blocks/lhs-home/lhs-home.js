import { getAllSheetData } from '../../scripts/scripts.js';


function createCard(row, style) {
    const card = document.createElement('div');
    if (style) card.classList.add(style);
    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');
    card.append(cardContent)
    const cardHostname = document.createElement('div');
    const cardMetadata = document.createElement('div');
    cardContent.append(cardHostname);
    cardHostname.after(cardMetadata);
    let str = row.hostname.charAt(0).toUpperCase() + row.hostname.slice(1);
    cardHostname.innerHTML = `<h2>${str}</h2>`;
    const cardMetadataul = document.createElement('ul');
    cardMetadata.append(cardMetadataul);
    cardMetadataul.innerHTML= `<li><h4>Segment Store min. value when OnRC was skipped: ${row.skipmin}</h4></li>`;
    cardMetadataul.innerHTML= cardMetadataul.innerHTML + `<li><h4>Segment Store max. value when OnRC was skipped: ${row.skipmax}</h4></li>`;
    cardMetadataul.innerHTML= cardMetadataul.innerHTML + `<li><h4>Segment Store min. value when OnRC was actually run: ${row.postmin}</h4></li>`;
    cardMetadataul.innerHTML= cardMetadataul.innerHTML + `<li><h4>Segment Store max. value when OnRC was actually run: ${row.postmax}</h4></li>`;
    cardMetadataul.innerHTML= cardMetadataul.innerHTML + `<li><h4>Segment Store latest value from Splunk if OnRC was skipped: ${row.lastlogskip}</h4></li>`;
    cardMetadataul.innerHTML= cardMetadataul.innerHTML + `<li><h4>Segment Store latest value from Splunk if OnRC actually ran: ${row.lastlogpost}</h4></li>`;
    cardMetadataul.innerHTML= cardMetadataul.innerHTML + `<li><h4>Segment Store latest value from OffRc log: ${row.lastoffRclog}</h4></li>`;
    cardMetadataul.innerHTML= cardMetadataul.innerHTML + `<li><h4>Current Segment Store size is: ${row.current}</h4></li>`;
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
            if (row == sheetList[0]) {
                const cardButton = document.createElement('button');
                cardButton.classList.add('card-button');
                cardButton.innerHTML = "Analyse";
                block.append(cardButton);
            }
            block.append(createCard(row, 'lhs-card'));
        });
    } else {
        block.remove();
    }

}