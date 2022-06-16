const e="S'ha produït un error en carregar el gràfic.",a="En total, hi ha ${ elementCount } barres per a aquest gràfic. Els gràfics de barres amb una sèrie estan limitats a ${ totalLimit } barres. Trieu un camp Categoria amb menys valors únics o apliqueu un filtre a les vostres dades.",r="Els gràfics de barres amb dues sèries estan limitats a ${ totalLimit } barres o a ${ seriesLimit } barres per sèrie. Trieu un camp Categoria amb menys valors únics o apliqueu un filtre a les vostres dades.",t="Els gràfics de barres amb tres sèries o més estan limitats a ${ totalLimit } barres o a ${ seriesLimit } barres per sèrie. Trieu un camp Categoria amb menys valors únics o apliqueu un filtre a les vostres dades.",s="S'ha produït un error en crear el gràfic.",i="No es pot aplicar una transformació del registre a valors negatius o de zero.",n="No es pot aplicar una transformació d'arrel quadrada a valors negatius.",o="S'ha produït un error en carregar la capa. URL = ${ url }. ID d'element del portal = ${ portalItemId }.",l="L'element ${ dataPath } ha de ser únic. L'ID (${ seriesID }) de la sèrie anomenada ${ seriesName } ja l'utilitza una altra sèrie.",d="${ dataPath } no pot dur a terme una agregació que no sigui de recompte en un camp que no sigui numèric.",u="A ${ dataPath } li falta una propietat anomenada ${ missingProperty }.",m="${ dataPath } no pot tenir menys de ${ limit } caràcters.",c="${ dataPath } no pot tenir menys de ${ limit } elements.",p="${ dataPath } no pot tenir més de ${ limit } elements.",g="${ dataPath } ha de tenir almenys un caràcter que no sigui un espai en blanc.",h="${ dataPath } no pot tenir ${ additionalProperty }.",$="${ dataPath } ha de ser igual a un d'aquests valors permesos: ${ allowedValues }.",f="${ dataPath } ha de coincidir amb l'esquema d'un d'aquests: ${ schemaOptions }.",C="No s'admeten gràfics de dispersió amb símbols proporcionals. S'ha aplicat la mida de símbol per defecte.",L="Error de lectura de les dades d'entrada.",b="Els histogrames necessiten com a mínim dos valors numèrics.",E='El tipus de sèrie esperat a l\'índex ${ seriesIndex } és "${ expectedType }", però s\'ha rebut el tipus "${ receivedType }"',y="or",v="Hi ha un total de ${ sliceCount } sectors en aquest gràfic circular. Els gràfics circulars poden tenir ${ totalLimit } sectors com a màxim. Torneu a agregar les dades o filtreu-les.",S="En aquest gràfic hi ha un total de ${ seriesCount } sèries i ${ elementCount } punts de dades. Els gràfics de línies estan limitats a ${ seriesLimit } sèries i ${ totalLimit } punts de dades. Reduïu el nombre de sèries o bé filtreu o torneu a agregar les dades.",q="Els gràfics de línies estan limitats a ${ totalLimit } punts de dades. Filtreu o torneu a agregar les dades i proveu-ho de nou.";var P={defaultError:e,uniqueSeriesBarCountCannotExceedLimit:a,twoSeriesBarCountCannotExceedLimit:r,threePlusSeriesBarCountCannotExceedLimit:t,defaultInvalidChart:"S'ha produït un error en crear el gràfic.",negativeValueInDataForLogTransformation:"No es pot aplicar una transformació del registre a valors negatius o de zero.",negativeValueInDataForSqrtTransformation:"No es pot aplicar una transformació d'arrel quadrada a valors negatius.",layerLoadFailure:o,duplicateSeriesID:l,nonNumericAggregation:d,requiredProperty:u,minLength:m,minItems:c,maxItems:p,whiteSpacePattern:g,additionalProperty:"${ dataPath } no pot tenir ${ additionalProperty }.",enumValues:$,anyOfValues:f,bubbleChartValidateMsg:C,queryError:L,histogramEmptyField:b,invalidSeriesType:E,or:"or",pieChartSlicesCannotExceedLimit:v,lineChartSeriesAndMarkersCannotExceedLimit:S,lineChartMarkersCannotExceedLimit:q};export{h as additionalProperty,f as anyOfValues,C as bubbleChartValidateMsg,P as default,e as defaultError,s as defaultInvalidChart,l as duplicateSeriesID,$ as enumValues,b as histogramEmptyField,E as invalidSeriesType,o as layerLoadFailure,q as lineChartMarkersCannotExceedLimit,S as lineChartSeriesAndMarkersCannotExceedLimit,p as maxItems,c as minItems,m as minLength,i as negativeValueInDataForLogTransformation,n as negativeValueInDataForSqrtTransformation,d as nonNumericAggregation,y as or,v as pieChartSlicesCannotExceedLimit,L as queryError,u as requiredProperty,t as threePlusSeriesBarCountCannotExceedLimit,r as twoSeriesBarCountCannotExceedLimit,a as uniqueSeriesBarCountCannotExceedLimit,g as whiteSpacePattern};
