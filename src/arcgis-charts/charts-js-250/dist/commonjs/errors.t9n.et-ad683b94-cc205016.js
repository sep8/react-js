"use strict";const e="Selles diagrammis on kokku ${ elementCount } tulpa. Ühe seeriaga tulpdiagrammidel on ${ totalLimit } tulba piirang. Valige vähem unikaalsete väärtustega kategooria väli või rakendage oma andmetele filter.",a="Kahe seeriaga tulpdiagrammidel on ${ totalLimit } tulba piirang, või ${ seriesLimit } tulpa seeria kohta. Valige vähem unikaalsete väärtustega kategooria väli või rakendage oma andmetele filter.",i="Kolme või enama seeriaga tulpdiagrammidel on ${ totalLimit } tulba piirang, või ${ seriesLimit } tulpa seeria kohta. Valige vähem unikaalsete väärtustega kategooria väli või rakendage oma andmetele filter.",t="Kihi laadimisel tekkis viga. URL = ${ url }. Portaaliüksuse ID = ${ portalItemId }.",r="${ dataPath } peab olema kordumatu. Seerial nimega ${ seriesName } on ID (${ seriesID }), mida kasutatakse juba muudes seeriates.",s="${ dataPath } ei tohi mittenumbrilisel väljal teha loendamisega mitteseotud agregeerimist.",o="Omadusel ${ dataPath } puudub omadus nimega ${ missingProperty }.",n="${ dataPath } ei tohi olla lühem kui ${ limit } märki.",l="Muutujal ${ dataPath } ei tohi olla vähem kui ${ limit } üksust.",m="Muutujal ${ dataPath } ei tohi olla rohkem kui ${ limit } üksust.",u="${ dataPath } peab sisaldama vähemalt ühte märki, mis pole tühimärk.",d="Muutujal ${ dataPath } ei tohi olla: ${ additionalProperty }.",g="${ dataPath } peab võrduma ühega allpool nimetatud väärtustest: ${ allowedValues }.",p="${ dataPath } peab vastama ühele nendest skeemidest: ${ schemaOptions }.",v="Proportsionaalsete sümbolitega hajuvusdiagramme ei toetata. Rakendatud on sümboli vaikesuurus.",h="Eeldatud seeriatüüp indeksis ${ seriesIndex } on '${ expectedType }', kuid saadi hoopis '${ receivedType }'",k="Sellel sektordiagrammil on kokku ${ sliceCount } lõiku. Sektordiagrammide lõikude piirarv on ${ totalLimit }. Taasagregeerige või filtreerige oma andmed.",x="Sellel diagrammil on kokku ${ seriesCount } sarja ja ${ elementCount } andmepunkti. Joondiagrammide sarjade piirarv on ${ seriesLimit } ja andmepunktide piirarv on ${ totalLimit }. Vähendage sarjade arvu ja/või taasagregeerige või filtreerige oma andmed.",$="Joondiagrammide andmepunktide piirarv on ${ totalLimit }. Filtreerige või taasagregeerige oma andmed ja proovige uuesti.";var C={defaultError:"Diagrammi laadimisel ilmnes viga.",uniqueSeriesBarCountCannotExceedLimit:e,twoSeriesBarCountCannotExceedLimit:a,threePlusSeriesBarCountCannotExceedLimit:i,defaultInvalidChart:"Diagrammi loomisel ilmnes viga.",negativeValueInDataForLogTransformation:"Logi teisendamisel ei saa kasutada negatiivseid väärtusi ega nullväärtusi.",negativeValueInDataForSqrtTransformation:"Ruutjuure teisendamist ei saa rakendada negatiivsetele väärtustele.",layerLoadFailure:t,duplicateSeriesID:r,nonNumericAggregation:s,requiredProperty:o,minLength:n,minItems:l,maxItems:m,whiteSpacePattern:u,additionalProperty:d,enumValues:g,anyOfValues:p,bubbleChartValidateMsg:v,queryError:"Sisendandmete lugemine nurjus.",histogramEmptyField:"Histogrammid nõuavad vähemalt kaht numbrilist väärtust.",invalidSeriesType:h,or:"or",pieChartSlicesCannotExceedLimit:k,lineChartSeriesAndMarkersCannotExceedLimit:x,lineChartMarkersCannotExceedLimit:$};exports.additionalProperty=d,exports.anyOfValues=p,exports.bubbleChartValidateMsg=v,exports.default=C,exports.defaultError="Diagrammi laadimisel ilmnes viga.",exports.defaultInvalidChart="Diagrammi loomisel ilmnes viga.",exports.duplicateSeriesID=r,exports.enumValues=g,exports.histogramEmptyField="Histogrammid nõuavad vähemalt kaht numbrilist väärtust.",exports.invalidSeriesType=h,exports.layerLoadFailure=t,exports.lineChartMarkersCannotExceedLimit=$,exports.lineChartSeriesAndMarkersCannotExceedLimit=x,exports.maxItems=m,exports.minItems=l,exports.minLength=n,exports.negativeValueInDataForLogTransformation="Logi teisendamisel ei saa kasutada negatiivseid väärtusi ega nullväärtusi.",exports.negativeValueInDataForSqrtTransformation="Ruutjuure teisendamist ei saa rakendada negatiivsetele väärtustele.",exports.nonNumericAggregation=s,exports.or="or",exports.pieChartSlicesCannotExceedLimit=k,exports.queryError="Sisendandmete lugemine nurjus.",exports.requiredProperty=o,exports.threePlusSeriesBarCountCannotExceedLimit=i,exports.twoSeriesBarCountCannotExceedLimit=a,exports.uniqueSeriesBarCountCannotExceedLimit=e,exports.whiteSpacePattern=u;
