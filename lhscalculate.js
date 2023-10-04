let raw_data = [
    {
        "Company_Name": "24 Hour Fitness",
        "New_Relic_Enduser_URL": "https://www.24hourfitness.com/?newrelic=test"
    },
    {
        "Company_Name": "adobe.io",
        "New_Relic_Enduser_URL": "https://partners.adobe.com/exchangeprogram/creativecloud"
    },
    {
        "Company_Name": "Ageas SA NV",
        "New_Relic_Enduser_URL": "https://ag.be/jobs/nl"
    },
    {
        "Company_Name": "Agilent Technologies",
        "New_Relic_Enduser_URL": "https://www.agilent.com/about/newsroom/presrel.html"
    },
    {
        "Company_Name": "Altec",
        "New_Relic_Enduser_URL": "https://52.72.214.127/libs/granite/core/content/login.html"
    },
    {
        "Company_Name": "Ariston Thermo Spa",
        "New_Relic_Enduser_URL": "https://www.ingrado.com"
    },
    {
        "Company_Name": "Australian Institute of Company Directors",
        "New_Relic_Enduser_URL": "https://www.aicd.com.au"
    },
    {
        "Company_Name": "Autonation Inc",
        "New_Relic_Enduser_URL": ""
    },
    {
        "Company_Name": "Avery Dennison Corp",
        "New_Relic_Enduser_URL": "https://www.averydennison.com"
    },
    {
        "Company_Name": "AXPO Services AG",
        "New_Relic_Enduser_URL": "https://www.axpo.com/ch/de/ueber-uns.html"
    },
    {
        "Company_Name": "Banque Cantonale Vaudoise",
        "New_Relic_Enduser_URL": "https://bcv-prod.adobemsbasic.com/content/dam/bcv/salle2marches/publications.json"
    },
    {
        "Company_Name": "Beverages & More, Inc.",
        "New_Relic_Enduser_URL": ""
    },
    {
        "Company_Name": "BMC Software Inc",
        "New_Relic_Enduser_URL": "https://www.bmc.com"
    },
    {
        "Company_Name": "Bolton Adhesives",
        "New_Relic_Enduser_URL": "https://www.uhu.com/"
    },
    {
        "Company_Name": "Bruker Biospin gmbh",
        "New_Relic_Enduser_URL": "https://www.bruker.com/en.html"
    },
    {
        "Company_Name": "Bruker Daltonik GmbH",
        "New_Relic_Enduser_URL": ""
    },
    {
        "Company_Name": "CAA Atlantic Limited",
        "New_Relic_Enduser_URL": "https://www.atlantic.caa.ca"
    },
    {
        "Company_Name": "Caltex (Chevron)",
        "New_Relic_Enduser_URL": "https://www.caltex.com"
    },
    {
        "Company_Name": "Cambridge Investment Research",
        "New_Relic_Enduser_URL": "https://www.joincambridge.com"
    },
    {
        "Company_Name": "Cargill Inc",
        "New_Relic_Enduser_URL": "https://www.cargillag.com"
    },
    {
        "Company_Name": "CEAT Limited",
        "New_Relic_Enduser_URL": "https://www.ceat.com"
    },
    {
        "Company_Name": "Cerebos Pacific Limited",
        "New_Relic_Enduser_URL": "http://www.brandsworld.com.sg"
    },
    {
        "Company_Name": "CFSGAM Services Pty Ltd",
        "New_Relic_Enduser_URL": "https://www.firstsentierinvestors.com.au?newrelic=test"
    },
    {
        "Company_Name": "City of Dallas",
        "New_Relic_Enduser_URL": ""
    },
    {
        "Company_Name": "City of Sacramento",
        "New_Relic_Enduser_URL": "https://nexusforms.sacramento.ca.gov"
    },
    {
        "Company_Name": "City of Sydney",
        "New_Relic_Enduser_URL": ""
    },
    {
        "Company_Name": "Coca-Cola HBC AG",
        "New_Relic_Enduser_URL": "https://www.coca-colahellenic.com"
    },
    {
        "Company_Name": "Coherent Inc",
        "New_Relic_Enduser_URL": "https://www.coherent.com/"
    },
    {
        "Company_Name": "Condominium Authority Of Ontario",
        "New_Relic_Enduser_URL": "https://cao-prod.adobemsbasic.com/content/xfaforms/profiles/caoforms.html?contentRoot=crx:///content/dam/formsanddocuments/caoforms/en&template=Request_for_Records.xdp"
    },
    {
        "Company_Name": "County of Los Angeles DPSS",
        "New_Relic_Enduser_URL": "https://dpss.lacounty.gov"
    },
    {
        "Company_Name": "Credit Union National Association",
        "New_Relic_Enduser_URL": "https://www.cunacouncils.org"
    },
    {
        "Company_Name": "CST Consultants Inc.",
        "New_Relic_Enduser_URL": "https://www.cstspark.ca/en"
    },
    {
        "Company_Name": "Dropbox",
        "New_Relic_Enduser_URL": "https://www.dropbox.com/jobs"
    },
    {
        "Company_Name": "Dropbox (Intranet)",
        "New_Relic_Enduser_URL": "https://99plus.dropboxer.net/content/regent.html"
    },
    {
        "Company_Name": "Duluth Trading",
        "New_Relic_Enduser_URL": ""
    },
    {
        "Company_Name": "Edelweiss Tokio Life Insurance Limited",
        "New_Relic_Enduser_URL": "https://www.edelweisstokio.in"
    },
    {
        "Company_Name": "Education Affiliates",
        "New_Relic_Enduser_URL": "https://www.fortis.edu/?"
    },
    {
        "Company_Name": "Ego Pharmaceuticals Pty Ltd",
        "New_Relic_Enduser_URL": "https://www.qvskincare.com/hk/en.html?newrelic=test"
    },
    {
        "Company_Name": "Elkay Manufacturing Company",
        "New_Relic_Enduser_URL": "https://www.elkay.com/us/en.html"
    },
    {
        "Company_Name": "Enel",
        "New_Relic_Enduser_URL": "https://www.edistribucion.com"
    },
    {
        "Company_Name": "Entegris",
        "New_Relic_Enduser_URL": "https://www.entegris.com?newrelic=test"
    },
    {
        "Company_Name": "Equinix Inc",
        "New_Relic_Enduser_URL": "https://www.equinix.com/resources/analyst-reports/idc-abc-dx-strategy-applications-business-cloud"
    },
    {
        "Company_Name": "Ethias SA",
        "New_Relic_Enduser_URL": "https://www.ethias.be"
    },
    {
        "Company_Name": "Expedia Inc.",
        "New_Relic_Enduser_URL": "https://expedia-prod.adobemsbasic.com/content/expedia/help-center/en-us/guests/real-time-feedback/about-real-time-feedback-replies.model.json"
    },
    {
        "Company_Name": "FCCI Services Inc",
        "New_Relic_Enduser_URL": "https://www.fcci-group.com"
    },
    {
        "Company_Name": "Fidelity National Charitable Services",
        "New_Relic_Enduser_URL": "https://www.fidelitycharitable.org"
    },
    {
        "Company_Name": "Fiesta Hotels and Resorts",
        "New_Relic_Enduser_URL": "https://www.palladiumhotelgroup.com"
    },
    {
        "Company_Name": "Finning International Inc.",
        "New_Relic_Enduser_URL": "https://www.finning.com/en_CA/products.html"
    },
    {
        "Company_Name": "Flughafen Berlin Brandenburg gmbh",
        "New_Relic_Enduser_URL": "https://ber.berlin-airport.de/en.html"
    },
    {
        "Company_Name": "Freemans PLC",
        "New_Relic_Enduser_URL": ""
    },
    {
        "Company_Name": "Future Generali India Insurance Co Ltd",
        "New_Relic_Enduser_URL": "https://general.futuregenerali.in/"
    },
    {
        "Company_Name": "Galapagos NV",
        "New_Relic_Enduser_URL": "https://www.galapagoshealth.es/"
    },
    {
        "Company_Name": "Gap (Basic)",
        "New_Relic_Enduser_URL": "https://intranet.gap.com/en_us/adobe-monitor.html"
    },
    {
        "Company_Name": "General Motors Holdings LLC",
        "New_Relic_Enduser_URL": "https://www.chevroletoffers.ca"
    },
    {
        "Company_Name": "Gigamon",
        "New_Relic_Enduser_URL": "https://www.gigamon.com"
    },
    {
        "Company_Name": "Godrej Housing Finance Limited",
        "New_Relic_Enduser_URL": "https://www.godrejcapital.com"
    },
    {
        "Company_Name": "GoodLife Fitness Centre",
        "New_Relic_Enduser_URL": "https://www.goodlifefitness.com/home.html?newrelic=test"
    },
    {
        "Company_Name": "Griffith University",
        "New_Relic_Enduser_URL": "https://publish-assets.griffith.edu.au"
    },
    {
        "Company_Name": "H. Lundbeck AS",
        "New_Relic_Enduser_URL": "https://www.lundbeck.com/global"
    },
    {
        "Company_Name": "HD Supply Facilities Maintenance",
        "New_Relic_Enduser_URL": "https://hdsupplysolutions.com/ns/contact_us"
    },
    {
        "Company_Name": "Helly Hansen AS",
        "New_Relic_Enduser_URL": "https://hellyhansen-prod.adobemsbasic.com/content/musto/global/en/affiliates.html"
    },
    {
        "Company_Name": "Hill-Rom Services Inc.",
        "New_Relic_Enduser_URL": "https://www.hillrom.com"
    },
    {
        "Company_Name": "Hilton Domestic Operating Company Inc",
        "New_Relic_Enduser_URL": "https://www.hiltonhonors.com/en_US/error/system/"
    },
    {
        "Company_Name": "Hottinger Bruel & Kjaer GmbH",
        "New_Relic_Enduser_URL": "https://www.hbkworld.com/"
    },
    {
        "Company_Name": "HSBC Global Services Limited",
        "New_Relic_Enduser_URL": "https://livesign.hsbc.com.sg/libs/granite/csrf/token.json"
    },
    {
        "Company_Name": "HSBC Global Services Limited (Channel Islands)",
        "New_Relic_Enduser_URL": "https://livesign.ciiom.hsbc.com/content/hsbc-forms/staff/dashboard.html"
    },
    {
        "Company_Name": "Illycaffe SPA",
        "New_Relic_Enduser_URL": "https://www.illy.com/it-it/home"
    },
    {
        "Company_Name": "Japan Airlines",
        "New_Relic_Enduser_URL": ""
    },
    {
        "Company_Name": "JCPenney Corporation",
        "New_Relic_Enduser_URL": ""
    },
    {
        "Company_Name": "John Lewis Plc (Basic)",
        "New_Relic_Enduser_URL": "https://www.johnlewisfinance.com"
    },
    {
        "Company_Name": "JT International SA",
        "New_Relic_Enduser_URL": "https://ploom.com/"
    },
    {
        "Company_Name": "Kemet Corporation",
        "New_Relic_Enduser_URL": "https://www.kemet.com"
    },
    {
        "Company_Name": "Kemin Industries",
        "New_Relic_Enduser_URL": "https://www.kemin.com/na/en-us/home"
    },
    {
        "Company_Name": "Korn Ferry",
        "New_Relic_Enduser_URL": "https://www.kfadvance.com/?monitoring=amsnewrelic"
    },
    {
        "Company_Name": "Kotak",
        "New_Relic_Enduser_URL": "https://www.kotakcherry.com/cafe/blog"
    },
    {
        "Company_Name": "La Trobe University",
        "New_Relic_Enduser_URL": "https://latrobe-prod2.adobemsbasic.com/content/forms/af/direct-applications/home.html"
    },
    {
        "Company_Name": "Lamb Weston Inc",
        "New_Relic_Enduser_URL": "https://www.lambweston.com/"
    },
    {
        "Company_Name": "Lionbridge Technologies",
        "New_Relic_Enduser_URL": "https://www.lionbridge.com​"
    },
    {
        "Company_Name": "Lloyds Register Group Services LTD (Basic)",
        "New_Relic_Enduser_URL": "https://lr-prod2.adobemsbasic.com/libs/granite/core/content/login.html"
    },
    {
        "Company_Name": "Lufthansa AG (LH.COM Sites)",
        "New_Relic_Enduser_URL": ""
    },
    {
        "Company_Name": "Magneti Marelli Spa",
        "New_Relic_Enduser_URL": "https://www.magnetimarelli-parts-and-services.com"
    },
    {
        "Company_Name": "Maison Battat Inc",
        "New_Relic_Enduser_URL": ""
    },
    {
        "Company_Name": "McDonalds Promotions GmbH",
        "New_Relic_Enduser_URL": "https://www.m-hub.mcdonalds.de"
    },
    {
        "Company_Name": "Ministerio De Asuntos Economicos",
        "New_Relic_Enduser_URL": "https://spainaudiovisualhub.mineco.gob.es/"
    },
    {
        "Company_Name": "Momentive Performance Materials Inc.",
        "New_Relic_Enduser_URL": ""
    },
    {
        "Company_Name": "Moog Inc",
        "New_Relic_Enduser_URL": "http://www.moog.com"
    },
    {
        "Company_Name": "Movement Mortgage LLC",
        "New_Relic_Enduser_URL": "https://lo.movement.com/content/movementmortgage/us/en/home.html"
    },
    {
        "Company_Name": "MSC Cruises SA",
        "New_Relic_Enduser_URL": "https://explorajourneys.com"
    },
    {
        "Company_Name": "MTU Friedrichshafen gmbh",
        "New_Relic_Enduser_URL": "https://www.mtu-solutions.com/eu/en.regionselect.html"
    },
    {
        "Company_Name": "National Rural Utilities Cooperative Finance Corporation",
        "New_Relic_Enduser_URL": "https://www.nrucfc.coop/content/nrucfc/en.html?health=check"
    },
    {
        "Company_Name": "NCR Corporation",
        "New_Relic_Enduser_URL": "https://www.ncr.com"
    },
    {
        "Company_Name": "Nearmap US Inc.",
        "New_Relic_Enduser_URL": "https://www.nearmap.com"
    },
    {
        "Company_Name": "Nethys SA",
        "New_Relic_Enduser_URL": "https://assistance.voo.be​/bin/version"
    },
    {
        "Company_Name": "Northgate Espana Renting Flexible",
        "New_Relic_Enduser_URL": "https://www.northgate.es"
    },
    {
        "Company_Name": "NSK Europe LTD",
        "New_Relic_Enduser_URL": "https://www.nskeurope.com/en.html"
    },
    {
        "Company_Name": "NSW Business Chamber Limited",
        "New_Relic_Enduser_URL": "https://www.businessaustralia.com"
    },
    {
        "Company_Name": "Nuance Communications",
        "New_Relic_Enduser_URL": "http://www.nuance.com"
    },
    {
        "Company_Name": "NV DKV Belgium",
        "New_Relic_Enduser_URL": "https://dkv-prod3.adobemsbasic.com/content/dkv/needs-analysis/en.html#/about-you/basic-info"
    },
    {
        "Company_Name": "NV Moteo Two Wheels Europe",
        "New_Relic_Enduser_URL": "https://​www.sym.be"
    },
    {
        "Company_Name": "NV Puratos",
        "New_Relic_Enduser_URL": "https://www.puratos.co.uk​/en"
    },
    {
        "Company_Name": "Oriental Trading Company",
        "New_Relic_Enduser_URL": ""
    },
    {
        "Company_Name": "Orora Packaging Solutions",
        "New_Relic_Enduser_URL": "https://www.landsberg.com/us/en.html"
    },
    {
        "Company_Name": "Pacific Life Insurance Company",
        "New_Relic_Enduser_URL": "https://www.pacificlife.com/"
    },
    {
        "Company_Name": "Pentland Brands Ltd",
        "New_Relic_Enduser_URL": ""
    },
    {
        "Company_Name": "PNB MetLife India Insurance Company Ltd",
        "New_Relic_Enduser_URL": "https://newsite​.pnbmetlife.com"
    },
    {
        "Company_Name": "Produban Servicos Informaticos Generales",
        "New_Relic_Enduser_URL": "https://gruposantand-prod.adobemsbasic.com/en/home"
    },
    {
        "Company_Name": "Radley and Co Ltd.",
        "New_Relic_Enduser_URL": "https://www.radley.co.uk"
    },
    {
        "Company_Name": "Redbox Automated Retail LLC",
        "New_Relic_Enduser_URL": ""
    },
    {
        "Company_Name": "Redstone Federal Credit Union",
        "New_Relic_Enduser_URL": "https://www.redfcu.org"
    },
    {
        "Company_Name": "Renta 4 Banco SA",
        "New_Relic_Enduser_URL": "https://www.r4.com"
    },
    {
        "Company_Name": "Research Affiliates LLC",
        "New_Relic_Enduser_URL": "https://originpreprod.researchaffiliates.com/en_us/home.html"
    },
    {
        "Company_Name": "Riverbed IT",
        "New_Relic_Enduser_URL": "https://support.riverbed.com"
    },
    {
        "Company_Name": "RSM US LLP",
        "New_Relic_Enduser_URL": "https://rsmus.com"
    },
    {
        "Company_Name": "SecurityMetrics Inc",
        "New_Relic_Enduser_URL": "https://securitymetrics-prod.adobemsbasic.com"
    },
    {
        "Company_Name": "Singapore Life Ltd",
        "New_Relic_Enduser_URL": "https://singlife.com"
    },
    {
        "Company_Name": "Sj Ab",
        "New_Relic_Enduser_URL": "https://52.149.68.66/libs/granite/core/content/login.html"
    },
    {
        "Company_Name": "Solo Invest",
        "New_Relic_Enduser_URL": ""
    },
    {
        "Company_Name": "South Australia Department for Education",
        "New_Relic_Enduser_URL": "https://online.forms.sa.edu.au/content/forms/af/public/ambulance-services-fee-claim.html"
    },
    {
        "Company_Name": "South East Water Ltd",
        "New_Relic_Enduser_URL": "https://southeastwater.com.au"
    },
    {
        "Company_Name": "Southern Company Services",
        "New_Relic_Enduser_URL": "http://www.georgiapower.com/"
    },
    {
        "Company_Name": "State Bidco Limited",
        "New_Relic_Enduser_URL": "https://tastecard.co.uk/en.html"
    },
    {
        "Company_Name": "State of California Department of Motor Vehicles",
        "New_Relic_Enduser_URL": ""
    },
    {
        "Company_Name": "Stepan Company",
        "New_Relic_Enduser_URL": "https://www.stepan.com/"
    },
    {
        "Company_Name": "Technische Unie BV",
        "New_Relic_Enduser_URL": "https://www.c.technischeunie.nl"
    },
    {
        "Company_Name": "Telstra (Wholesale)",
        "New_Relic_Enduser_URL": "http://www.telstrawholesale.com.au"
    },
    {
        "Company_Name": "Temasek Polytechnic",
        "New_Relic_Enduser_URL": "https://www.tp.edu.sg"
    },
    {
        "Company_Name": "Tenet HealthSystem Medical Inc.",
        "New_Relic_Enduser_URL": ""
    },
    {
        "Company_Name": "Tesco Mobile Ltd",
        "New_Relic_Enduser_URL": "https://tescomobile-prod.adobemsbasic.com"
    },
    {
        "Company_Name": "The Bank of Nova Scotia",
        "New_Relic_Enduser_URL": "https://dynamic.ca/en.html?monitoring=ams"
    },
    {
        "Company_Name": "The Braun Corporation",
        "New_Relic_Enduser_URL": "https://www.braunability.com/us/en.html"
    },
    {
        "Company_Name": "The Learning Lab",
        "New_Relic_Enduser_URL": "https://www.thelearninglab.com.sg/"
    },
    {
        "Company_Name": "Thomas Jefferson University",
        "New_Relic_Enduser_URL": "https://www.jefferson.edu"
    },
    {
        "Company_Name": "Thoughtworks",
        "New_Relic_Enduser_URL": "https://www.thoughtworks.com/en-sg"
    },
    {
        "Company_Name": "Torrid LLC",
        "New_Relic_Enduser_URL": ""
    },
    {
        "Company_Name": "Trustmark National Bank",
        "New_Relic_Enduser_URL": "https://www.trustmark.com"
    },
    {
        "Company_Name": "U Gie Iris",
        "New_Relic_Enduser_URL": ""
    },
    {
        "Company_Name": "Unionen",
        "New_Relic_Enduser_URL": ""
    },
    {
        "Company_Name": "United Overseas Bank Limited",
        "New_Relic_Enduser_URL": "https://www.tmrwbyuob.com/global/index.html"
    },
    {
        "Company_Name": "Uniting",
        "New_Relic_Enduser_URL": "https://www.uniting.org"
    },
    {
        "Company_Name": "University of Adelaide",
        "New_Relic_Enduser_URL": "https://myadelaide.uni.adelaide.edu.au/"
    },
    {
        "Company_Name": "University of Canberra",
        "New_Relic_Enduser_URL": "https://www.canberra.edu.au/services/wcm/monitor.json"
    },
    {
        "Company_Name": "USCC Services LLC",
        "New_Relic_Enduser_URL": "https://54.161.73.214/libs/granite/core/content/login.html"
    },
    {
        "Company_Name": "UST Global",
        "New_Relic_Enduser_URL": "https://www.ust.com"
    },
    {
        "Company_Name": "Viessmann IT Services GmbH",
        "New_Relic_Enduser_URL": "https://partnerportal.viessmann.com/de/de.html"
    },
    {
        "Company_Name": "Vineyard Vines LLC",
        "New_Relic_Enduser_URL": ""
    },
    {
        "Company_Name": "Vizio Inc.",
        "New_Relic_Enduser_URL": "https://www.vizio.com"
    },
    {
        "Company_Name": "We.Retail Smoke Test Basic",
        "New_Relic_Enduser_URL": "https://weretailsandbox-prod.adobemsbasic.com"
    },
    {
        "Company_Name": "Wideroe AS",
        "New_Relic_Enduser_URL": "https://www.wideroe.no/?newrelic=test"
    },
    {
        "Company_Name": "Wisconsin Department of Natural Resources",
        "New_Relic_Enduser_URL": ""
    },
    {
        "Company_Name": "WM Jordan Company",
        "New_Relic_Enduser_URL": ""
    },
    {
        "Company_Name": "WR Grace",
        "New_Relic_Enduser_URL": "https://grace.com​"
    },
    {
        "Company_Name": "Yada Energia S.R.L",
        "New_Relic_Enduser_URL": "https://nen.it/"
    },
    {
        "Company_Name": "ZS Associates",
        "New_Relic_Enduser_URL": "https://origin01-www.zs.com/"
    }
]

async function lhsrun(site,customer) {
    const conditions = ["Unable to process request"];
    const url = setUpQuery(site);
    const response = await fetchURL(url);
    (response.error) ? ((conditions.some(el => response.error.message.includes(el))) ? lhsrun(site,customer) : console.log(customer+"#"+"LHS for the "+site+" is erroring with "+response.error.message)) : console.log(customer+"#"+(Math.round(response.lighthouseResult.categories.performance.score*100)+"%"));
}

 async function fetchURL(url) {
    const resp = await fetch(url);
    const response = await resp.json();
    return response;
 }

 function setUpQuery(site) {
    const YOUR_API_KEY = "AIzaSyDcpJ3SjvsrDZGixG7sM9NnqJ1QVTwkn-Y";
    const api = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';
    const parameters = {
        url: encodeURIComponent(site)
    };
    let query = `${api}?`;
    for (let key in parameters) {
        query += `${key}=${parameters[key]}`;
    }
    // Add API key at the end of the query
    query += "&strategy=mobile";
    query += `&key=${YOUR_API_KEY}`;
    return query;
}

async function mainfunction() {
    for (let i = 0; i <= raw_data.length; i++) {
        (raw_data[i].New_Relic_Enduser_URL) ? await lhsrun(raw_data[i].New_Relic_Enduser_URL,raw_data[i].Company_Name) : console.log(raw_data[i].Company_Name+"#No End User URL");
    }
}

mainfunction();

