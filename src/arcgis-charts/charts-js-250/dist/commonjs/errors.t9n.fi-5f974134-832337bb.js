"use strict";const a="Tässä kaaviossa on yhteensä ${ elementCount } palkkia. Palkkikaavioissa, joissa on yksi sarja, voi olla ${ totalLimit } palkkia. Valitse luokkakenttä, jossa on vähemmän yksilöllisiä arvoja, tai suodata aineisto.",t="Palkkikaavioissa, joissa on kaksi sarjaa, voi olla ${ totalLimit } palkkia tai ${ seriesLimit } palkkia sarjaa kohti. Valitse luokkakenttä, jossa on vähemmän yksilöllisiä arvoja, tai suodata aineisto.",i="Palkkikaavioissa, joissa on vähintään kolme sarjaa, voi olla ${ totalLimit } palkkia tai ${ seriesLimit } palkkia sarjaa kohti. Valitse luokkakenttä, jossa on vähemmän yksilöllisiä arvoja, tai suodata aineisto.",e="Karttatason lataamisessa tapahtui virhe. URL = ${ url }. Portaalikohteen tunnus = ${ portalItemId }.",s="Kohteen ${ dataPath } on oltava yksilöllinen. Sarjan ${ seriesName } tunnus (${ seriesID }) on jo toisen sarjan käytössä.",o="${ dataPath } ei saa suorittaa muuta kuin määrän koostamista muussa kuin numerokentässä.",n="Kohteesta ${ dataPath } puuttuu ominaisuus ${ missingProperty }.",r="${ dataPath } ei saa olla alle ${ limit } merkkiä pitkä.",l="Kohteessa ${ dataPath } ei saa olla alle ${ limit } kohdetta.",u="Kohteessa ${ dataPath } ei saa olla yli ${ limit } kohdetta.",m="Kohteessa ${ dataPath } on oltava vähintään yksi muu kuin välimerkki.",k="Kohteessa ${ dataPath } ei saa olla kohdetta ${ additionalProperty }.",h="Kohteen ${ dataPath } tulee olla yhtä suuri kuin jokin näistä sallituista arvoista: ${ allowedValues }.",d="Kohteen ${ dataPath } on vastattava jotakin näistä skeemoista: ${ schemaOptions }.",p="Pistekaavioita, joissa on suhteutettuja symboleja, ei tueta. Symbolin oletuskokoa on käytetty.",v="Lähtöaineiston lukeminen epäonnistui.",y="Histogrammit edellyttävät vähintään kahta numeerista arvoa.",x='Odotettu sarjan tyyppi indeksissä ${ seriesIndex } on "${ expectedType }", mutta sen sijaan vastaanotettiin "${ receivedType }"',$="Tässä ympyräkaaviossa on yhteensä ${ sliceCount } sektoria. Ympyräkaavioissa voi olla enintään ${ totalLimit } sektoria. Koosta aineistosi uudelleen tai suodata se.",j="Tässä kaaviossa on yhteensä ${ seriesCount } sarjaa ja ${ elementCount } aineistopistettä. Viivakaaviot on rajattu ${ seriesLimit } sarjaan ja ${ totalLimit } aineistopisteeseen. Vähennä sarjojen määrää ja/tai koosta aineistosi uudelleen tai suodata se.",C="Viivakaaviot on rajattu ${ totalLimit } aineistopisteeseen. Suodata tai koosta uudelleen aineisto ja yritä uudelleen.";var L={defaultError:"Kaavion lataamisessa tapahtui virhe.",uniqueSeriesBarCountCannotExceedLimit:a,twoSeriesBarCountCannotExceedLimit:t,threePlusSeriesBarCountCannotExceedLimit:i,defaultInvalidChart:"Kaavion luomisessa tapahtui virhe.",negativeValueInDataForLogTransformation:"Logaritmimuunnosta ei voi käyttää negatiivisiin arvoihin tai nolla-arvoihin.",negativeValueInDataForSqrtTransformation:"Neliöjuurimuunnosta ei voi käyttää negatiivisiin arvoihin.",layerLoadFailure:e,duplicateSeriesID:s,nonNumericAggregation:o,requiredProperty:n,minLength:r,minItems:l,maxItems:u,whiteSpacePattern:m,additionalProperty:k,enumValues:h,anyOfValues:d,bubbleChartValidateMsg:p,queryError:v,histogramEmptyField:y,invalidSeriesType:x,or:"or",pieChartSlicesCannotExceedLimit:$,lineChartSeriesAndMarkersCannotExceedLimit:j,lineChartMarkersCannotExceedLimit:C};exports.additionalProperty=k,exports.anyOfValues=d,exports.bubbleChartValidateMsg=p,exports.default=L,exports.defaultError="Kaavion lataamisessa tapahtui virhe.",exports.defaultInvalidChart="Kaavion luomisessa tapahtui virhe.",exports.duplicateSeriesID=s,exports.enumValues=h,exports.histogramEmptyField=y,exports.invalidSeriesType=x,exports.layerLoadFailure=e,exports.lineChartMarkersCannotExceedLimit=C,exports.lineChartSeriesAndMarkersCannotExceedLimit=j,exports.maxItems=u,exports.minItems=l,exports.minLength=r,exports.negativeValueInDataForLogTransformation="Logaritmimuunnosta ei voi käyttää negatiivisiin arvoihin tai nolla-arvoihin.",exports.negativeValueInDataForSqrtTransformation="Neliöjuurimuunnosta ei voi käyttää negatiivisiin arvoihin.",exports.nonNumericAggregation=o,exports.or="or",exports.pieChartSlicesCannotExceedLimit=$,exports.queryError=v,exports.requiredProperty=n,exports.threePlusSeriesBarCountCannotExceedLimit=i,exports.twoSeriesBarCountCannotExceedLimit=t,exports.uniqueSeriesBarCountCannotExceedLimit=a,exports.whiteSpacePattern=m;