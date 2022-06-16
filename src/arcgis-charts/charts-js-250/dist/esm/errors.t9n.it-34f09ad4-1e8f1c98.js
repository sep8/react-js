const e="Si è verificato un errore durante il caricamento del grafico.",a="Il numero totale di barre di questo grafico è ${ elementCount }. I grafici a barre con una serie sono limitati a ${ totalLimit } barre. Scegli un campo Categoria con meno valori unici o applica un filtro ai tuoi dati.",i="I grafici a barre con due serie sono limitati a ${ totalLimit } barre o ${ seriesLimit } barre per serie. Scegli un campo Categoria con meno valori unici o applica un filtro ai tuoi dati.",r="I grafici a barre con tre o più serie sono limitati a ${ totalLimit } barre o ${ seriesLimit } barre per serie. Scegli un campo Categoria con meno valori unici o applica un filtro ai tuoi dati.",t="Errore durante la creazione del grafico.",o="Impossibile applicare la trasformazione di log su valori negativi o zero.",n="Impossibile applicare la trasformazione di radice quadrata su valori negativi.",s="Si è verificato un errore durante il caricamento del layer. URL = ${ url }. ID elemento del portale = ${ portalItemId }.",l="${ dataPath } deve essere univoco. La serie denominata ${ seriesName } ha un ID (${ seriesID }) che è già utilizzato da un'altra serie.",d="${ dataPath } non può effettuare l'aggregazione senza conteggio su un campo non numerico.",u="A ${ dataPath } manca una proprietà denominata ${ missingProperty }.",m="${ dataPath } non deve essere più corto di ${ limit } caratteri.",c="${ dataPath } non deve contenere meno di ${ limit } elementi.",p="${ dataPath } non deve contenere più di ${ limit } elementi.",g="${ dataPath } deve contenere almeno un carattere.",f="${ dataPath } non deve contenere ${ additionalProperty }.",v="${ dataPath } deve essere uguale a uno di questi valori consentiti: ${ allowedValues }.",$="${ dataPath } deve corrispondere allo schema di uno di questi‎: ${ schemaOptions }.",C="I grafici a dispersione con simboli proporzionali non sono supportati. Sono state applicate delle dimensioni simbolo predefinite.",h="Impossibile leggere i dati di input.",I="Gli istogrammi richiedono almeno due valori numerici.",L="Il tipo di serie atteso all'indice ${ seriesIndex } è '${ expectedType }' ma invece è stato ricevuto '${ receivedType }'",S="or",b="Ci sono un totale di ${ sliceCount } fette in questo grafico a torta. I grafici a torta sono limitati a ${ totalLimit } fette. Riaggrega o filtra i tuoi dati.",P="Ci sono un totale di ${ seriesCount } serie e ${ elementCount } punti dati in questo grafico. I grafici a linee sono limitati a ${ seriesLimit } serie e ${ totalLimit } punti dati. Ridurre il numero di serie e/o aggregare di nuovo o filtrare i dati.",E="I grafici a linee sono limitati a ${ totalLimit } punti dati. Filtrare o riaggregare i dati e riprovare.";var y={defaultError:e,uniqueSeriesBarCountCannotExceedLimit:a,twoSeriesBarCountCannotExceedLimit:i,threePlusSeriesBarCountCannotExceedLimit:r,defaultInvalidChart:"Errore durante la creazione del grafico.",negativeValueInDataForLogTransformation:"Impossibile applicare la trasformazione di log su valori negativi o zero.",negativeValueInDataForSqrtTransformation:"Impossibile applicare la trasformazione di radice quadrata su valori negativi.",layerLoadFailure:s,duplicateSeriesID:l,nonNumericAggregation:d,requiredProperty:u,minLength:m,minItems:c,maxItems:p,whiteSpacePattern:"${ dataPath } deve contenere almeno un carattere.",additionalProperty:f,enumValues:v,anyOfValues:$,bubbleChartValidateMsg:C,queryError:h,histogramEmptyField:"Gli istogrammi richiedono almeno due valori numerici.",invalidSeriesType:L,or:"or",pieChartSlicesCannotExceedLimit:b,lineChartSeriesAndMarkersCannotExceedLimit:P,lineChartMarkersCannotExceedLimit:E};export{f as additionalProperty,$ as anyOfValues,C as bubbleChartValidateMsg,y as default,e as defaultError,t as defaultInvalidChart,l as duplicateSeriesID,v as enumValues,I as histogramEmptyField,L as invalidSeriesType,s as layerLoadFailure,E as lineChartMarkersCannotExceedLimit,P as lineChartSeriesAndMarkersCannotExceedLimit,p as maxItems,c as minItems,m as minLength,o as negativeValueInDataForLogTransformation,n as negativeValueInDataForSqrtTransformation,d as nonNumericAggregation,S as or,b as pieChartSlicesCannotExceedLimit,h as queryError,u as requiredProperty,r as threePlusSeriesBarCountCannotExceedLimit,i as twoSeriesBarCountCannotExceedLimit,a as uniqueSeriesBarCountCannotExceedLimit,g as whiteSpacePattern};
