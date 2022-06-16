const a="Došlo je do greške prilikom učitavanja grafika.",e="Ima ukupno ${ elementCount } traka za ovaj grafik. Trakasti grafikoni sa jednom serijom ograničeni su na ${ totalLimit } trake. Izaberite polje Kategorija sa manje jedinstvenih vrednosti ili primenite filter na svoje podatke.",i="Trakasti grafikoni sa dve grupe su ograničeni na ${ totalLimit } trake ili ${ seriesLimit } trake po grupi. Izaberite polje Kategorija sa manje jedinstvenih vrednosti ili primenite filter na svoje podatke.",t="Trakasti grafikoni sa tri ili više serije ograničeni su na ${ totalLimit } trake, ili ${ seriesLimit } traka po seriji. Izaberite polje Kategorija sa manje jedinstvenih vrednosti ili primenite filter na svoje podatke.",r="Došlo je do greške kod kreiranja grafika.",n="Nije moguće primeniti transformaciju zapisa na negativne ili nulte vrednosti.",o="Nije moguće primeniti transformaiju kvadratnog korena na negativne vrednosti.",s="Došlo je do greške prilikom učitavanja sloja. URL = ${ url }. ID stavke portala = ${ portalItemId }.",d="${ dataPath } mora da bude jedinstven. Serija pod nazivom ${ seriesName } ima ID (${ seriesID }) koji se već koristi od strane drugih serija.",m="${ dataPath } ne može da obavi agregaciju bez brojanja na numeričkom polju.",l="${ dataPath } nedostaje svojstvo pod nazivom ${ missingProperty }.",u="${ dataPath } ne sme da bude kraće od ${ limit } karaktera.",j="${ dataPath } ne sme da ima manje od ${ limit } stavki.",k="${ dataPath } ne sme da ima više od ${ limit } stavki.",p="${ dataPath } mora da ima bar jedan karakter koji nije prazan.",g="${ dataPath } ne sme da ima ${ additionalProperty }.",v="${ dataPath } mora da bude jednako jednoj od ovih dozvoljenih vrednosti: ${ allowedValues }.",h="${ dataPath } mora da odgovara šemi jednog od ovih: ${ schemaOptions }.",$="Nacrti šablona sa proporcionalnim simbolima nisu podržani. Podrazumevana veličina šablona je primenjena.",f="Neuspešno čitanje ulaznih podataka.",C="Histogrami zahtevaju najmanje dve numeričke vrednosti.",c="Očekivani tip serije za indeks ${ seriesIndex } je '${ expectedType }' ali je '${ receivedType }' dobijeno umesto toga",L="or",P="Postoji ukupno ${ sliceCount } isečaka na kružnom grafikonu. Kružni grafikoni su ograničeni na ${ totalLimit } isečaka. Ponovo pregrupišite ili filtrirajte svoje podatke.",I="Ukupno ima ${ seriesCount } serija i ${ elementCount } tačaka podataka u ovom grafikonu. Linijski grafikoni su ograničeni na ${ seriesLimit } serije ${ totalLimit } tačke podataka. Smanjite brojeve serija i/ili pregrupišite ili filtrirajte svoje podatke.",b="Linijski grafikoni su pgraničeni na ${ totalLimit } tačke podataka. Filtrirajte ili ponovo grupišite podatke i pokušajte ponovo.";var S={defaultError:a,uniqueSeriesBarCountCannotExceedLimit:e,twoSeriesBarCountCannotExceedLimit:i,threePlusSeriesBarCountCannotExceedLimit:t,defaultInvalidChart:"Došlo je do greške kod kreiranja grafika.",negativeValueInDataForLogTransformation:"Nije moguće primeniti transformaciju zapisa na negativne ili nulte vrednosti.",negativeValueInDataForSqrtTransformation:"Nije moguće primeniti transformaiju kvadratnog korena na negativne vrednosti.",layerLoadFailure:s,duplicateSeriesID:d,nonNumericAggregation:m,requiredProperty:l,minLength:u,minItems:j,maxItems:k,whiteSpacePattern:p,additionalProperty:"${ dataPath } ne sme da ima ${ additionalProperty }.",enumValues:v,anyOfValues:h,bubbleChartValidateMsg:$,queryError:f,histogramEmptyField:"Histogrami zahtevaju najmanje dve numeričke vrednosti.",invalidSeriesType:c,or:"or",pieChartSlicesCannotExceedLimit:P,lineChartSeriesAndMarkersCannotExceedLimit:I,lineChartMarkersCannotExceedLimit:b};export{g as additionalProperty,h as anyOfValues,$ as bubbleChartValidateMsg,S as default,a as defaultError,r as defaultInvalidChart,d as duplicateSeriesID,v as enumValues,C as histogramEmptyField,c as invalidSeriesType,s as layerLoadFailure,b as lineChartMarkersCannotExceedLimit,I as lineChartSeriesAndMarkersCannotExceedLimit,k as maxItems,j as minItems,u as minLength,n as negativeValueInDataForLogTransformation,o as negativeValueInDataForSqrtTransformation,m as nonNumericAggregation,L as or,P as pieChartSlicesCannotExceedLimit,f as queryError,l as requiredProperty,t as threePlusSeriesBarCountCannotExceedLimit,i as twoSeriesBarCountCannotExceedLimit,e as uniqueSeriesBarCountCannotExceedLimit,p as whiteSpacePattern};
