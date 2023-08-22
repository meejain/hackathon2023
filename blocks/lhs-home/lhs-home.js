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
    const cardPerf = document.createElement('div');
    cardScore.append(cardPerf);
    const cardComment = document.createElement('div');
    cardPerf.after(cardComment);
    cardScore.classList.add('card-score');
    card.append(cardScore);
    return (card);
}


export default async function decorate(block){
    let arr=[];
    let t = 3;
    let l = 90;
    function analyseObj(time,lhs) {
        this.time = time;
        this.lhs = lhs;
    }
    block.textContent = '';
    const sheetList = await getAllSheetData();
    console.log(sheetList);
    if (sheetList.length) {
        sheetList.forEach((row) => {
            if (row == sheetList[0]) {
                const cardparam = document.createElement('div');
                block.append(cardparam);
                const trip = document.createElement('div');
                cardparam.append(trip);
                const tripleft = document.createElement('div');
                trip.append(tripleft);
                tripleft.classList.add('triangleclass');
                const tripright = document.createElement('div');
                tripright.innerHTML = `<h4> 0 - 49 </h4>`;
                trip.append(tripright);
                const rectp = document.createElement('div');
                cardparam.append(rectp);
                const rectleft = document.createElement('div');
                rectp.append(rectleft);
                rectleft.classList.add('rectangleclass');
                const rectright = document.createElement('div');
                rectright.innerHTML = `<h4> 50 - 89 </h4>`;
                rectp.append(rectright);
                const circlep = document.createElement('div');
                cardparam.append(circlep);
                const circleleft = document.createElement('div');
                circlep.append(circleleft);
                circleleft.classList.add('circleclass');
                const circleright = document.createElement('div');
                circleright.innerHTML = `<h4> 90 - 100 </h4>`;
                circlep.append(circleright);
                const cardButton = document.createElement('button');
                cardButton.classList.add('card-button');
                cardButton.innerHTML = "Analyze";
                cardparam.append(cardButton);
                block.append(cardparam);
            }
            t = t + 1;
            let obj = new analyseObj(t,l);
            arr.push(obj);
            block.append(createCard(row, 'lhs-card'));
        });
    } else {
        block.remove();
    }
    const cardButton = document.querySelector('main .block.lhs-home button');
    const dotssection = document.querySelectorAll('main .block.lhs-home .card-score > div:first-child');
    dotssection.forEach((element)=> {
        const firstdot = document.createElement('div');
        const seconddot = document.createElement('div');
        const thirddot = document.createElement('div');
        element.append(firstdot);
        element.append(seconddot);
        element.append(thirddot);
        });
    dotssection.forEach((element)=> {
        const cirsection = document.createElement('div');
        cirsection.classList.add('circlesection');
        const outcircle = document.createElement('div');
        const incircle = document.createElement('div');
        outcircle.append(incircle);
        cirsection.append(outcircle);
        element.append(cirsection);
        });
        cardButton.addEventListener('click', function (){
            dotssection.forEach((element)=> {
                element.querySelectorAll('.circlesection > div').forEach((outerelement,indexouter)=>{
                    outerelement.classList.add('outercircle');
                    outerelement.querySelectorAll('div').forEach((innerelement)=>{
                    innerelement.classList.add('innercircle');
                    innerelement.innerHTML=`${arr[indexouter].lhs}%`;
                    });
                    outerelement.style.backgroundImage = `conic-gradient(#00cc66 ${arr[indexouter].lhs}%, #d7f5d5 0)`;
                });
            });
        });
            
//     cardButton.addEventListener('click', function (){
//     dotssection.forEach((element,indexparent)=> {
//     element.querySelectorAll('div').forEach((minielement)=>{
//         console.log(arr[indexparent].time);
//         minielement.classList.add('dot');
//         setTimeout(function() {
//             minielement.classList.remove('dot');
//         }, arr[indexparent].time*1000);
//       });
//     });
//   });
}
