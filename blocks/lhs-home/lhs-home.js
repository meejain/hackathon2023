import { getAllSheetData } from '../../scripts/scripts.js';

function gaugeParameters(skipmin,skipmax,postmin,postmax,lastoffRclog,current) {
 let deduct = 0;
 let lesser = 0;
 skipmin=Number(skipmin);
 skipmax=Number(skipmax);
 postmin=Number(postmin);
 postmax=Number(postmax);
 lastoffRclog=Number(lastoffRclog);
 current=Number(current);
 current > 20 ? deduct = deduct + 10:deduct = deduct + 0;
 (!postmin||postmin == 0) && (!skipmin||skipmin == 0) ? deduct = deduct + 80:deduct = deduct + 0;
 (skipmin > 0) ? (deduct = deduct + 10):(deduct = deduct + 0);
 ((skipmin > 0) && (!postmin||postmin == 0)) ? ((current > (skipmin+(0.3*skipmin)) && (skipmin+(0.5*skipmin))) ? (deduct = deduct + 20):(deduct = deduct + 0)):(deduct = deduct + 0);
 ((skipmin > 0) && (!postmin||postmin == 0)) ? ((current > (skipmin+(0.5*skipmin))) ? (deduct = deduct + 50):(deduct = deduct + 0)):(deduct = deduct + 0);
 ((!skipmin||skipmin == 0) && (postmin > 0)) ? ((current > (postmin+(0.3*postmin)) && current < (postmin+(0.5*postmin))) ? (deduct = deduct + 20):(deduct = deduct + 0)):(deduct = deduct + 0);
 ((!skipmin||skipmin == 0) && (postmin > 0)) ? ((current > (postmin+(0.5*postmin))) ? (deduct = deduct + 50):(deduct = deduct + 0)):(deduct = deduct + 0);
 (skipmin > 0 && skipmin < postmin) ? lesser = skipmin:(skipmin > 0 && postmin < skipmin && postmin > 0) ? lesser = postmin:(deduct = deduct + 0);
 (skipmin > 0 && postmin > 0) && (current > (lesser+(0.3*lesser))) && (current < (lesser+(0.5*lesser))) ? (deduct = deduct + 20):(deduct = deduct + 0);
 (skipmin > 0 && postmin > 0) && (current > (lesser+(0.5*lesser))) ? (deduct = deduct + 50):(deduct = deduct + 0);
 return deduct;
}

function createCard(row, style, index, l) {
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
    const cardInfo = document.createElement('div');
    cardInfo.classList.add('card-info');
    const infoButton = document.createElement('button');
    infoButton.classList.add('info-button');
    infoButton.innerHTML = "Diagnostics";
    infoButton.addEventListener('click',function(){
        const topheight = infoButton.offsetTop - 100;
        const pop = document.querySelectorAll('main .block.lhs-home .card-score .card-info .pop-up')[index];
        pop.style.top = topheight + 'px';
        console.log(pop.style.top);
        pop.classList.add('open-popup');
    });
    cardInfo.append(infoButton);
    const popup = document.createElement('div');
    popup.classList.add('pop-up');
    infoButton.after(popup);
    const aem = document.createElement('img');
    aem.src = '../../icons/AEM.png';
    popup.append(aem);
    const popupmessage1 = document.createElement('h2');
    popupmessage1.innerHTML='Thank You';
    const popupmessage2 = document.createElement('p');
    popupmessage2.innerHTML = l;
    // popupmessage2.innerHTML = `<h4>Current Segment Store size is: ${row.current}</h4>`
    aem.after(popupmessage1);
    popupmessage1.after(popupmessage2);
    const okButton = document.createElement('button');
    okButton.innerHTML = "Ok";
    okButton.addEventListener('click',function(){
        const pop = document.querySelectorAll('main .block.lhs-home .card-score .card-info .pop-up')[index];
        pop.classList.remove('open-popup');
    });
    popupmessage2.after(okButton);
    cardPerf.after(cardInfo);
    cardScore.classList.add('card-score');
    card.append(cardScore);
    return (card);
}

export class analyseObj {
    constructor(time, lhs) {
        this.time = time;
        this.lhs = lhs;
    }
}

export default async function decorate(block){
    let arr=[];
    let t = 2;
    let l = 0;
    block.textContent = '';
    const sheetList = await getAllSheetData();
    console.log(sheetList);
    if (sheetList.length) {
        sheetList.forEach((row, index) => {
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
            l = (100 - Number(gaugeParameters(row.skipmin,row.skipmax,row.postmin,row.postmax,row.lastoffRclog,row.current)));
            t = t + 1;
            let obj = new analyseObj(t,l);
            arr.push(obj);
            block.append(createCard(row, 'lhs-card', index, l));
        });
    } else {
        block.remove();
    }
    const cardButton = document.querySelector('main .block.lhs-home button');
    const perfssection = document.querySelectorAll('main .block.lhs-home .card-score > div:first-child');
    perfssection.forEach((element)=> {
        const dotsection = document.createElement('div');
        dotsection.classList.add('dotsectionclass');
        const firstdot = document.createElement('div');
        const seconddot = document.createElement('div');
        const thirddot = document.createElement('div');
        dotsection.append(firstdot);
        dotsection.append(seconddot);
        dotsection.append(thirddot);
        element.append(dotsection);
        });

    perfssection.forEach((element)=> {
        const cirsection = document.createElement('div');
        cirsection.classList.add('circlesection');
        const outcircle = document.createElement('div');
        const incircle = document.createElement('div');
        outcircle.append(incircle);
        cirsection.append(outcircle);
        element.append(cirsection);
        });
        cardButton.addEventListener('click', function (){
            perfssection.forEach((element,indexouter)=> {
                element.querySelectorAll('.circlesection > div').forEach((outerelement)=>{
                    setTimeout(function() { outerelement.classList.add('outercircle');}, arr[indexouter].time*1000);
                    outerelement.querySelectorAll('div').forEach((innerelement)=>{
                    setTimeout(function() { innerelement.classList.add('innercircle');}, arr[indexouter].time*1000);  
                    setTimeout(function() {
                    let progressStartValue = 0;
                    const progressEndValue = arr[indexouter].lhs;
                    const speed = 20;
                    const progress = setInterval(() => {
                        progressStartValue++;
                        if (progressEndValue == 0) {innerelement.textContent = 0;}
                        innerelement.textContent = progressEndValue == 0 ? 0:`${progressStartValue}`;
                        if (progressEndValue > 89 ) {
                            outerelement.style.background = `conic-gradient(#00cc66 ${progressStartValue *3.6}deg, #d7f5d5 0deg)`;
                            outerelement.parentElement.parentElement.parentElement.querySelector('button').style.backgroundColor = '#d7f5d5';
                            outerelement.parentElement.parentElement.parentElement.querySelector('button').style.color = '#0b4a07';
                        }
                        else if (progressEndValue > 49 && progressEndValue < 90) {
                            outerelement.style.background = `conic-gradient(#ffa400 ${progressStartValue *3.6}deg, #f2eadc 0deg)`;
                            innerelement.style.color = '#91600a';
                            innerelement.style.backgroundColor = '#f2eadc';
                            outerelement.parentElement.parentElement.parentElement.querySelector('button').style.backgroundColor = '#f2eadc';
                            outerelement.parentElement.parentElement.parentElement.querySelector('button').style.color = '#91600a';
                        }
                        else if (progressEndValue < 50 && progressEndValue > 0) {
                            outerelement.style.background = `conic-gradient(#f33 ${progressStartValue *3.6}deg, #f7e3e1 0deg)`;
                            innerelement.style.color = '#8a160c';
                            innerelement.style.backgroundColor = '#f7e3e1';
                            outerelement.parentElement.parentElement.parentElement.querySelector('button').style.backgroundColor = '#f7e3e1';
                            outerelement.parentElement.parentElement.parentElement.querySelector('button').style.color = '#8a160c';
                        }
                        else {
                            innerelement.style.color = '#8a160c';
                            innerelement.style.backgroundColor = '#f7e3e1';
                            outerelement.style.background = '#f7e3e1';
                            outerelement.parentElement.parentElement.parentElement.querySelector('button').style.backgroundColor = '#f7e3e1';
                            outerelement.parentElement.parentElement.parentElement.querySelector('button').style.color = '#8a160c';
                        }
                        if (progressStartValue == progressEndValue) {
                            clearInterval(progress);
                        }
                    }, speed);}, arr[indexouter].time*1000);
                    });
                });
            });
        });
            
    cardButton.addEventListener('click', function (){
    const dotsection = document.querySelectorAll('main .block.lhs-home .card-score .dotsectionclass');
    dotsection.forEach((element,indexparent)=> {
    element.querySelectorAll('div').forEach((minielement)=>{
        minielement.classList.add('dot');
        setTimeout(function() {
            minielement.classList.remove('dot');
        }, arr[indexparent].time*1000);
      });
    });
  });
}
