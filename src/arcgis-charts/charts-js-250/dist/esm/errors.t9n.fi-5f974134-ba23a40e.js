const a="Kaavion lataamisessa tapahtui virhe.",i="Tässä kaaviossa on yhteensä ${ elementCount } palkkia. Palkkikaavioissa, joissa on yksi sarja, voi olla ${ totalLimit } palkkia. Valitse luokkakenttä, jossa on vähemmän yksilöllisiä arvoja, tai suodata aineisto.",t="Palkkikaavioissa, joissa on kaksi sarjaa, voi olla ${ totalLimit } palkkia tai ${ seriesLimit } palkkia sarjaa kohti. Valitse luokkakenttä, jossa on vähemmän yksilöllisiä arvoja, tai suodata aineisto.",e="Palkkikaavioissa, joissa on vähintään kolme sarjaa, voi olla ${ totalLimit } palkkia tai ${ seriesLimit } palkkia sarjaa kohti. Valitse luokkakenttä, jossa on vähemmän yksilöllisiä arvoja, tai suodata aineisto.",s="Kaavion luomisessa tapahtui virhe.",o="Logaritmimuunnosta ei voi käyttää negatiivisiin arvoihin tai nolla-arvoihin.",n="Neliöjuurimuunnosta ei voi käyttää negatiivisiin arvoihin.",r="Karttatason lataamisessa tapahtui virhe. URL = ${ url }. Portaalikohteen tunnus = ${ portalItemId }.",l="Kohteen ${ dataPath } on oltava yksilöllinen. Sarjan ${ seriesName } tunnus (${ seriesID }) on jo toisen sarjan käytössä.",u="${ dataPath } ei saa suorittaa muuta kuin määrän koostamista muussa kuin numerokentässä.",m="Kohteesta ${ dataPath } puuttuu ominaisuus ${ missingProperty }.",k="${ dataPath } ei saa olla alle ${ limit } merkkiä pitkä.",h="Kohteessa ${ dataPath } ei saa olla alle ${ limit } kohdetta.",d="Kohteessa ${ dataPath } ei saa olla yli ${ limit } kohdetta.",v="Kohteessa ${ dataPath } on oltava vähintään yksi muu kuin välimerkki.",y="Kohteessa ${ dataPath } ei saa olla kohdetta ${ additionalProperty }.",p="Kohteen ${ dataPath } tulee olla yhtä suuri kuin jokin näistä sallituista arvoista: ${ allowedValues }.",$="Kohteen ${ dataPath } on vastattava jotakin näistä skeemoista: ${ schemaOptions }.",j="Pistekaavioita, joissa on suhteutettuja symboleja, ei tueta. Symbolin oletuskokoa on käytetty.",C="Lähtöaineiston lukeminen epäonnistui.",L="Histogrammit edellyttävät vähintään kahta numeerista arvoa.",g='Odotettu sarjan tyyppi indeksissä ${ seriesIndex } on "${ expectedType }", mutta sen sijaan vastaanotettiin "${ receivedType }"',c="or",P="Tässä ympyräkaaviossa on yhteensä ${ sliceCount } sektoria. Ympyräkaavioissa voi olla enintään ${ totalLimit } sektoria. Koosta aineistosi uudelleen tai suodata se.",S="Tässä kaaviossa on yhteensä ${ seriesCount } sarjaa ja ${ elementCount } aineistopistettä. Viivakaaviot on rajattu ${ seriesLimit } sarjaan ja ${ totalLimit } aineistopisteeseen. Vähennä sarjojen määrää ja/tai koosta aineistosi uudelleen tai suodata se.",E="Viivakaaviot on rajattu ${ totalLimit } aineistopisteeseen. Suodata tai koosta uudelleen aineisto ja yritä uudelleen.";var x={defaultError:"Kaavion lataamisessa tapahtui virhe.",uniqueSeriesBarCountCannotExceedLimit:i,twoSeriesBarCountCannotExceedLimit:t,threePlusSeriesBarCountCannotExceedLimit:e,defaultInvalidChart:"Kaavion luomisessa tapahtui virhe.",negativeValueInDataForLogTransformation:"Logaritmimuunnosta ei voi käyttää negatiivisiin arvoihin tai nolla-arvoihin.",negativeValueInDataForSqrtTransformation:"Neliöjuurimuunnosta ei voi käyttää negatiivisiin arvoihin.",layerLoadFailure:r,duplicateSeriesID:l,nonNumericAggregation:u,requiredProperty:m,minLength:k,minItems:h,maxItems:d,whiteSpacePattern:v,additionalProperty:y,enumValues:p,anyOfValues:$,bubbleChartValidateMsg:j,queryError:C,histogramEmptyField:L,invalidSeriesType:g,or:"or",pieChartSlicesCannotExceedLimit:P,lineChartSeriesAndMarkersCannotExceedLimit:S,lineChartMarkersCannotExceedLimit:E};export{y as additionalProperty,$ as anyOfValues,j as bubbleChartValidateMsg,x as default,a as defaultError,s as defaultInvalidChart,l as duplicateSeriesID,p as enumValues,L as histogramEmptyField,g as invalidSeriesType,r as layerLoadFailure,E as lineChartMarkersCannotExceedLimit,S as lineChartSeriesAndMarkersCannotExceedLimit,d as maxItems,h as minItems,k as minLength,o as negativeValueInDataForLogTransformation,n as negativeValueInDataForSqrtTransformation,u as nonNumericAggregation,c as or,P as pieChartSlicesCannotExceedLimit,C as queryError,m as requiredProperty,e as threePlusSeriesBarCountCannotExceedLimit,t as twoSeriesBarCountCannotExceedLimit,i as uniqueSeriesBarCountCannotExceedLimit,v as whiteSpacePattern};
