const e="Se ha producido un error al cargar el gráfico.",a="Este gráfico tiene un total de ${ elementCount } barras. Los gráficos de barras con una serie están limitados a ${ totalLimit } barras. Elija un Campo de categoría con menos valores únicos o aplique un filtro a sus datos.",r="Los gráficos de barras con dos series están limitados a ${ totalLimit } barras o a ${ seriesLimit } barras por serie. Elija un Campo de categoría con menos valores únicos o aplique un filtro a sus datos.",o="Los gráficos de barras con tres series o más están limitados a ${ totalLimit } barras o a ${ seriesLimit } barras por serie. Elija un Campo de categoría con menos valores únicos o aplique un filtro a sus datos.",s="Se ha producido un error al crear el gráfico.",t="No se puede aplicar una transformación del registro a valores negativos o de cero.",i="No se puede aplicar una transformación de raíz cuadrada a valores negativos.",n="Se ha producido un error al cargar la capa. URL = ${ url }. Id. de elemento de portal = ${ portalItemId }.",d="El elemento ${ dataPath } debe ser único. La serie denominada ${ seriesName } tiene un Id. (${ seriesID }) que ya se utiliza en otra serie.",l="${ dataPath } no puede realizar una agregación no numérica en un campo no numérico.",u="A ${ dataPath } le falta la propiedad denominada ${ missingProperty }.",c="${ dataPath } no debe tener menos de ${ limit } caracteres.",m="${ dataPath } no debe tener menos de ${ limit } elementos.",p="${ dataPath } no debe tener más de ${ limit } elementos.",g="${ dataPath } debe tener al menos un carácter que no sea un espacio en blanco.",$="${ dataPath } no debe tener ${ additionalProperty }",h="${ dataPath } debe ser igual a uno de los siguientes valores permitidos: ${ allowedValues }.",L="${ dataPath } debe coincidir con el esquema de uno de estos: ${ schemaOptions }.",C="No se admiten diagramas de dispersión con símbolos proporcionales. Se ha aplicado el tamaño de símbolo predeterminado.",f="Error al leer los datos de entrada.",v="Los histogramas requieren al menos dos valores numéricos.",b='El tipo de serie esperado en el índice ${ seriesIndex } es "${ expectedType }", pero en su lugar se ha recibido "${ receivedType }"',y="or",E="Hay un total de ${ sliceCount } sectores en este gráfico circular. Los gráficos circulares están limitados a ${ totalLimit } sectores. Vuelva a agregar o filtre sus datos.",S="Hay un total de ${ seriesCount } series y ${ elementCount } puntos de datos en este gráfico. Los gráficos de líneas están limitados a ${ seriesLimit } series y ${ totalLimit } puntos de datos. Reduzca el número de series y/o vuelva a agregar o filtre sus datos.",P="Los gráficos de líneas están limitados a ${ totalLimit } puntos de datos. Filtre o vuelva a agregar los datos e inténtelo otra vez.";var I={defaultError:e,uniqueSeriesBarCountCannotExceedLimit:a,twoSeriesBarCountCannotExceedLimit:r,threePlusSeriesBarCountCannotExceedLimit:o,defaultInvalidChart:"Se ha producido un error al crear el gráfico.",negativeValueInDataForLogTransformation:"No se puede aplicar una transformación del registro a valores negativos o de cero.",negativeValueInDataForSqrtTransformation:"No se puede aplicar una transformación de raíz cuadrada a valores negativos.",layerLoadFailure:n,duplicateSeriesID:d,nonNumericAggregation:l,requiredProperty:u,minLength:c,minItems:m,maxItems:p,whiteSpacePattern:g,additionalProperty:"${ dataPath } no debe tener ${ additionalProperty }",enumValues:h,anyOfValues:L,bubbleChartValidateMsg:C,queryError:f,histogramEmptyField:"Los histogramas requieren al menos dos valores numéricos.",invalidSeriesType:b,or:"or",pieChartSlicesCannotExceedLimit:E,lineChartSeriesAndMarkersCannotExceedLimit:S,lineChartMarkersCannotExceedLimit:P};export{$ as additionalProperty,L as anyOfValues,C as bubbleChartValidateMsg,I as default,e as defaultError,s as defaultInvalidChart,d as duplicateSeriesID,h as enumValues,v as histogramEmptyField,b as invalidSeriesType,n as layerLoadFailure,P as lineChartMarkersCannotExceedLimit,S as lineChartSeriesAndMarkersCannotExceedLimit,p as maxItems,m as minItems,c as minLength,t as negativeValueInDataForLogTransformation,i as negativeValueInDataForSqrtTransformation,l as nonNumericAggregation,y as or,E as pieChartSlicesCannotExceedLimit,f as queryError,u as requiredProperty,o as threePlusSeriesBarCountCannotExceedLimit,r as twoSeriesBarCountCannotExceedLimit,a as uniqueSeriesBarCountCannotExceedLimit,g as whiteSpacePattern};