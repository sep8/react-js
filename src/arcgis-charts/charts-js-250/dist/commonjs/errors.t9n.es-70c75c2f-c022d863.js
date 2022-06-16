"use strict";const e="Se ha producido un error al cargar el gráfico.",a="Este gráfico tiene un total de ${ elementCount } barras. Los gráficos de barras con una serie están limitados a ${ totalLimit } barras. Elija un Campo de categoría con menos valores únicos o aplique un filtro a sus datos.",r="Los gráficos de barras con dos series están limitados a ${ totalLimit } barras o a ${ seriesLimit } barras por serie. Elija un Campo de categoría con menos valores únicos o aplique un filtro a sus datos.",o="Los gráficos de barras con tres series o más están limitados a ${ totalLimit } barras o a ${ seriesLimit } barras por serie. Elija un Campo de categoría con menos valores únicos o aplique un filtro a sus datos.",t="Se ha producido un error al cargar la capa. URL = ${ url }. Id. de elemento de portal = ${ portalItemId }.",s="El elemento ${ dataPath } debe ser único. La serie denominada ${ seriesName } tiene un Id. (${ seriesID }) que ya se utiliza en otra serie.",i="${ dataPath } no puede realizar una agregación no numérica en un campo no numérico.",n="A ${ dataPath } le falta la propiedad denominada ${ missingProperty }.",d="${ dataPath } no debe tener menos de ${ limit } caracteres.",l="${ dataPath } no debe tener menos de ${ limit } elementos.",u="${ dataPath } no debe tener más de ${ limit } elementos.",c="${ dataPath } debe tener al menos un carácter que no sea un espacio en blanco.",m="${ dataPath } debe ser igual a uno de los siguientes valores permitidos: ${ allowedValues }.",p="${ dataPath } debe coincidir con el esquema de uno de estos: ${ schemaOptions }.",g="No se admiten diagramas de dispersión con símbolos proporcionales. Se ha aplicado el tamaño de símbolo predeterminado.",x="Error al leer los datos de entrada.",$='El tipo de serie esperado en el índice ${ seriesIndex } es "${ expectedType }", pero en su lugar se ha recibido "${ receivedType }"',h="Hay un total de ${ sliceCount } sectores en este gráfico circular. Los gráficos circulares están limitados a ${ totalLimit } sectores. Vuelva a agregar o filtre sus datos.",L="Hay un total de ${ seriesCount } series y ${ elementCount } puntos de datos en este gráfico. Los gráficos de líneas están limitados a ${ seriesLimit } series y ${ totalLimit } puntos de datos. Reduzca el número de series y/o vuelva a agregar o filtre sus datos.",C="Los gráficos de líneas están limitados a ${ totalLimit } puntos de datos. Filtre o vuelva a agregar los datos e inténtelo otra vez.";var f={defaultError:e,uniqueSeriesBarCountCannotExceedLimit:a,twoSeriesBarCountCannotExceedLimit:r,threePlusSeriesBarCountCannotExceedLimit:o,defaultInvalidChart:"Se ha producido un error al crear el gráfico.",negativeValueInDataForLogTransformation:"No se puede aplicar una transformación del registro a valores negativos o de cero.",negativeValueInDataForSqrtTransformation:"No se puede aplicar una transformación de raíz cuadrada a valores negativos.",layerLoadFailure:t,duplicateSeriesID:s,nonNumericAggregation:i,requiredProperty:n,minLength:d,minItems:l,maxItems:u,whiteSpacePattern:c,additionalProperty:"${ dataPath } no debe tener ${ additionalProperty }",enumValues:m,anyOfValues:p,bubbleChartValidateMsg:g,queryError:x,histogramEmptyField:"Los histogramas requieren al menos dos valores numéricos.",invalidSeriesType:$,or:"or",pieChartSlicesCannotExceedLimit:h,lineChartSeriesAndMarkersCannotExceedLimit:L,lineChartMarkersCannotExceedLimit:C};exports.additionalProperty="${ dataPath } no debe tener ${ additionalProperty }",exports.anyOfValues=p,exports.bubbleChartValidateMsg=g,exports.default=f,exports.defaultError=e,exports.defaultInvalidChart="Se ha producido un error al crear el gráfico.",exports.duplicateSeriesID=s,exports.enumValues=m,exports.histogramEmptyField="Los histogramas requieren al menos dos valores numéricos.",exports.invalidSeriesType=$,exports.layerLoadFailure=t,exports.lineChartMarkersCannotExceedLimit=C,exports.lineChartSeriesAndMarkersCannotExceedLimit=L,exports.maxItems=u,exports.minItems=l,exports.minLength=d,exports.negativeValueInDataForLogTransformation="No se puede aplicar una transformación del registro a valores negativos o de cero.",exports.negativeValueInDataForSqrtTransformation="No se puede aplicar una transformación de raíz cuadrada a valores negativos.",exports.nonNumericAggregation=i,exports.or="or",exports.pieChartSlicesCannotExceedLimit=h,exports.queryError=x,exports.requiredProperty=n,exports.threePlusSeriesBarCountCannotExceedLimit=o,exports.twoSeriesBarCountCannotExceedLimit=r,exports.uniqueSeriesBarCountCannotExceedLimit=a,exports.whiteSpacePattern=c;
