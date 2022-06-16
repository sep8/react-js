"use strict";const e="При загрузке диаграммы произошла ошибка.",t="Всего ${ elementCount } столбцов в этой диаграмме. Линейчатые диаграммы с 1 серией ограничиваются ${ totalLimit } столбцами. Выберите поле категории с меньшим количеством уникальных значений или примените фильтр к вашим данным.",a="Линейчатые диаграммы с 2 сериями ограничиваются ${ totalLimit } столбцами или ${ seriesLimit } столбцами на одну серию. Выберите поле категории с меньшим количеством уникальных значений или примените фильтр к вашим данным.",r="Линейчатые диаграммы с тремя и более сериями ограничиваются ${ totalLimit } столбцами или ${ seriesLimit } столбцами на одну серию. Выберите поле категории с меньшим количеством уникальных значений или примените фильтр к вашим данным.",i="При загрузке слоя произошла ошибка. URL = ${ url }. ID элемента портала = ${ portalItemId }.",o="${ dataPath } должен быть уникальным. У серии с именем ${ seriesName } есть ID (${ seriesID }), который уже используется другой серией.",n="${ dataPath } не должен выполнять не количественное агрегирование для не числового поля.",s="В ${ dataPath } отсутствует свойство с именем ${ missingProperty }.",l="${ dataPath } не должен быть короче, чем ${ limit } символов.",d="В ${ dataPath } должно быть не менее ${ limit } элементов.",m="В ${ dataPath } не должно быть более ${ limit } элементов.",p="${ dataPath } должен содержать, как минимум, один символ, не являющейся пробелом.",u="${ dataPath } должен быть равен одному из этих допустимых значений: ${ allowedValues }.",x="${ dataPath } должен совпадать со схемой одного из следующих элементов: ${ schemaOptions }.",$="Точечная диаграмма с пропорциональными символами не поддерживается. Будет использован размер символа по умолчанию.",C="Для гистограмм необходимы как минимум два числовых значения.",h="Ожидаемый тип рядов в индексе ${ seriesIndex } - '${ expectedType }' но вместо этого было получено '${ receivedType }'",L="Всего ${ sliceCount } долей на этой круговой диаграмме. Круговые диаграммы ограничены ${ totalLimit } долями. Заново агрегируйте или отфильтруйте свои данные.",c="На этой диаграмме в общей сложности ${ seriesCount } серий и ${ elementCount } точек данных. Линейные диаграммы ограничиваются ${ seriesLimit } сериями и ${ totalLimit } точками данных. Уменьшите число серий и/или заново агрегируйте либо отфильтруйте свои данные.",P="Линейные диаграммы ограничиваются ${ totalLimit } точками данных. Отфильтруйте или агрегируйте повторно ваши данные и попробуйте снова.";var g={defaultError:e,uniqueSeriesBarCountCannotExceedLimit:t,twoSeriesBarCountCannotExceedLimit:a,threePlusSeriesBarCountCannotExceedLimit:r,defaultInvalidChart:"При создании диаграммы произошла ошибка.",negativeValueInDataForLogTransformation:"Невозможно применить Логарифмическое преобразование к отрицательным или нулевым значениям.",negativeValueInDataForSqrtTransformation:"Невозможно применить преобразование по методу квадратного корня к отрицательным значениям.",layerLoadFailure:i,duplicateSeriesID:o,nonNumericAggregation:n,requiredProperty:s,minLength:l,minItems:d,maxItems:m,whiteSpacePattern:p,additionalProperty:"${ dataPath } не должны иметь ${ additionalProperty }",enumValues:u,anyOfValues:x,bubbleChartValidateMsg:$,queryError:"Ошибка чтения входных данных.",histogramEmptyField:C,invalidSeriesType:h,or:"or",pieChartSlicesCannotExceedLimit:L,lineChartSeriesAndMarkersCannotExceedLimit:c,lineChartMarkersCannotExceedLimit:P};exports.additionalProperty="${ dataPath } не должны иметь ${ additionalProperty }",exports.anyOfValues=x,exports.bubbleChartValidateMsg=$,exports.default=g,exports.defaultError=e,exports.defaultInvalidChart="При создании диаграммы произошла ошибка.",exports.duplicateSeriesID=o,exports.enumValues=u,exports.histogramEmptyField=C,exports.invalidSeriesType=h,exports.layerLoadFailure=i,exports.lineChartMarkersCannotExceedLimit=P,exports.lineChartSeriesAndMarkersCannotExceedLimit=c,exports.maxItems=m,exports.minItems=d,exports.minLength=l,exports.negativeValueInDataForLogTransformation="Невозможно применить Логарифмическое преобразование к отрицательным или нулевым значениям.",exports.negativeValueInDataForSqrtTransformation="Невозможно применить преобразование по методу квадратного корня к отрицательным значениям.",exports.nonNumericAggregation=n,exports.or="or",exports.pieChartSlicesCannotExceedLimit=L,exports.queryError="Ошибка чтения входных данных.",exports.requiredProperty=s,exports.threePlusSeriesBarCountCannotExceedLimit=r,exports.twoSeriesBarCountCannotExceedLimit=a,exports.uniqueSeriesBarCountCannotExceedLimit=t,exports.whiteSpacePattern=p;