"use strict";const e="S'ha produït un error en carregar el gràfic.",a="En total, hi ha ${ elementCount } barres per a aquest gràfic. Els gràfics de barres amb una sèrie estan limitats a ${ totalLimit } barres. Trieu un camp Categoria amb menys valors únics o apliqueu un filtre a les vostres dades.",r="Els gràfics de barres amb dues sèries estan limitats a ${ totalLimit } barres o a ${ seriesLimit } barres per sèrie. Trieu un camp Categoria amb menys valors únics o apliqueu un filtre a les vostres dades.",t="Els gràfics de barres amb tres sèries o més estan limitats a ${ totalLimit } barres o a ${ seriesLimit } barres per sèrie. Trieu un camp Categoria amb menys valors únics o apliqueu un filtre a les vostres dades.",s="S'ha produït un error en carregar la capa. URL = ${ url }. ID d'element del portal = ${ portalItemId }.",i="L'element ${ dataPath } ha de ser únic. L'ID (${ seriesID }) de la sèrie anomenada ${ seriesName } ja l'utilitza una altra sèrie.",o="${ dataPath } no pot dur a terme una agregació que no sigui de recompte en un camp que no sigui numèric.",n="A ${ dataPath } li falta una propietat anomenada ${ missingProperty }.",l="${ dataPath } no pot tenir menys de ${ limit } caràcters.",d="${ dataPath } no pot tenir menys de ${ limit } elements.",u="${ dataPath } no pot tenir més de ${ limit } elements.",m="${ dataPath } ha de tenir almenys un caràcter que no sigui un espai en blanc.",p="${ dataPath } ha de ser igual a un d'aquests valors permesos: ${ allowedValues }.",c="${ dataPath } ha de coincidir amb l'esquema d'un d'aquests: ${ schemaOptions }.",g="No s'admeten gràfics de dispersió amb símbols proporcionals. S'ha aplicat la mida de símbol per defecte.",h="Error de lectura de les dades d'entrada.",x="Els histogrames necessiten com a mínim dos valors numèrics.",$='El tipus de sèrie esperat a l\'índex ${ seriesIndex } és "${ expectedType }", però s\'ha rebut el tipus "${ receivedType }"',f="Hi ha un total de ${ sliceCount } sectors en aquest gràfic circular. Els gràfics circulars poden tenir ${ totalLimit } sectors com a màxim. Torneu a agregar les dades o filtreu-les.",C="En aquest gràfic hi ha un total de ${ seriesCount } sèries i ${ elementCount } punts de dades. Els gràfics de línies estan limitats a ${ seriesLimit } sèries i ${ totalLimit } punts de dades. Reduïu el nombre de sèries o bé filtreu o torneu a agregar les dades.",L="Els gràfics de línies estan limitats a ${ totalLimit } punts de dades. Filtreu o torneu a agregar les dades i proveu-ho de nou.";var b={defaultError:e,uniqueSeriesBarCountCannotExceedLimit:a,twoSeriesBarCountCannotExceedLimit:r,threePlusSeriesBarCountCannotExceedLimit:t,defaultInvalidChart:"S'ha produït un error en crear el gràfic.",negativeValueInDataForLogTransformation:"No es pot aplicar una transformació del registre a valors negatius o de zero.",negativeValueInDataForSqrtTransformation:"No es pot aplicar una transformació d'arrel quadrada a valors negatius.",layerLoadFailure:s,duplicateSeriesID:i,nonNumericAggregation:o,requiredProperty:n,minLength:l,minItems:d,maxItems:u,whiteSpacePattern:m,additionalProperty:"${ dataPath } no pot tenir ${ additionalProperty }.",enumValues:p,anyOfValues:c,bubbleChartValidateMsg:g,queryError:h,histogramEmptyField:x,invalidSeriesType:$,or:"or",pieChartSlicesCannotExceedLimit:f,lineChartSeriesAndMarkersCannotExceedLimit:C,lineChartMarkersCannotExceedLimit:L};exports.additionalProperty="${ dataPath } no pot tenir ${ additionalProperty }.",exports.anyOfValues=c,exports.bubbleChartValidateMsg=g,exports.default=b,exports.defaultError=e,exports.defaultInvalidChart="S'ha produït un error en crear el gràfic.",exports.duplicateSeriesID=i,exports.enumValues=p,exports.histogramEmptyField=x,exports.invalidSeriesType=$,exports.layerLoadFailure=s,exports.lineChartMarkersCannotExceedLimit=L,exports.lineChartSeriesAndMarkersCannotExceedLimit=C,exports.maxItems=u,exports.minItems=d,exports.minLength=l,exports.negativeValueInDataForLogTransformation="No es pot aplicar una transformació del registre a valors negatius o de zero.",exports.negativeValueInDataForSqrtTransformation="No es pot aplicar una transformació d'arrel quadrada a valors negatius.",exports.nonNumericAggregation=o,exports.or="or",exports.pieChartSlicesCannotExceedLimit=f,exports.queryError=h,exports.requiredProperty=n,exports.threePlusSeriesBarCountCannotExceedLimit=t,exports.twoSeriesBarCountCannotExceedLimit=r,exports.uniqueSeriesBarCountCannotExceedLimit=a,exports.whiteSpacePattern=m;
