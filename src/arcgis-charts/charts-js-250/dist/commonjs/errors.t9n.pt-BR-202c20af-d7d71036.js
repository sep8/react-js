"use strict";const e="Ocorreu um erro ao carregar o gráfico.",a="Há um total de ${ elementCount } barras para este gráfico. Os gráficos de barras com uma série são limitados a ${ totalLimit } barras. Escolha um campo Categoria com menos valores exclusivos ou aplique um filtro aos seus dados.",o="Os gráficos de barras com duas séries são limitados a ${ totalLimit } barras ou ${ seriesLimit } barras por série. Escolha um campo Categoria com menos valores exclusivos ou aplique um filtro aos seus dados.",r="Os gráficos de barras com três séries são limitados a ${ totalLimit } barras, ou ${ seriesLimit } barras por série. Escolha um campo Categoria com menos valores exclusivos ou aplique um filtro aos seus dados.",s="Ocorreu um erro ao carregar a camada. URL = ${ url }. D de item do portal = ${ portalItemId }.",t="${ dataPath } deve ser único. A série denominada ${ seriesName } tem um id (${ seriesID }) que já é usado por outra série.",i="${ dataPath } não deve realizar agregação sem contagem em campo não numérico.",d="${ dataPath } está sem uma propriedade denominada ${ missingProperty }.",n="${ dataPath } não deve ser menor que ${ limit } caracteres.",m="${ dataPath } não deve ter menos que ${ limit } itens.",l="${ dataPath } não deve ter mais de ${ limit } itens.",u="${ dataPath } deve ter pelo menos um caractere diferente de espaço em branco.",p="${ dataPath } deve ser igual a um destes valores permitidos: ${ allowedValues }.",c="${ dataPath } deve corresponder ao esquema de um destes: ${ schemaOptions }.",g="Gráficos de dispersão com símbolos proporcionais não são suportados. O tamanho padrão do símbolo foi aplicado.",x="Falha ao ler os dados de entrada.",v="O tipo de série esperado no índice${ seriesIndex } é '${ expectedType }' mas '${ receivedType }' foi recebido em seu lugar",h="Há um total de ${ sliceCount } divisões neste gráfico de pizza. Os gráficos de pizza são limitados a ${ totalLimit } divisões. Agregar novamente ou filtrar seus dados.",$="Há um total de ${ seriesCount } séries e${ elementCount } pontos de dados neste gráfico. Os gráficos de linha são limitados a ${ seriesLimit } séries e ${ totalLimit } pontos de dados. Reduza o número de séries e/ou reagrupe ou filtre seus dados.",f="Os gráficos de linha são limitados a ${ totalLimit } pontos de dados. Filtre ou reagrupe seus dados e tente novamente.";var C={defaultError:e,uniqueSeriesBarCountCannotExceedLimit:a,twoSeriesBarCountCannotExceedLimit:o,threePlusSeriesBarCountCannotExceedLimit:r,defaultInvalidChart:"Ocorreu um erro ao criar o gráfico.",negativeValueInDataForLogTransformation:"Não é possível aplicar transformação de log para valores negativos ou zero.",negativeValueInDataForSqrtTransformation:"Não é possível aplicar transformação de raiz quadrada para valores negativos.",layerLoadFailure:s,duplicateSeriesID:t,nonNumericAggregation:i,requiredProperty:d,minLength:n,minItems:m,maxItems:l,whiteSpacePattern:u,additionalProperty:"${ dataPath } não deve ter ${ additionalProperty }.",enumValues:p,anyOfValues:c,bubbleChartValidateMsg:g,queryError:x,histogramEmptyField:"Os histogramas exigem pelo menos dois valores numéricos.",invalidSeriesType:v,or:"or",pieChartSlicesCannotExceedLimit:h,lineChartSeriesAndMarkersCannotExceedLimit:$,lineChartMarkersCannotExceedLimit:f};exports.additionalProperty="${ dataPath } não deve ter ${ additionalProperty }.",exports.anyOfValues=c,exports.bubbleChartValidateMsg=g,exports.default=C,exports.defaultError=e,exports.defaultInvalidChart="Ocorreu um erro ao criar o gráfico.",exports.duplicateSeriesID=t,exports.enumValues=p,exports.histogramEmptyField="Os histogramas exigem pelo menos dois valores numéricos.",exports.invalidSeriesType=v,exports.layerLoadFailure=s,exports.lineChartMarkersCannotExceedLimit=f,exports.lineChartSeriesAndMarkersCannotExceedLimit=$,exports.maxItems=l,exports.minItems=m,exports.minLength=n,exports.negativeValueInDataForLogTransformation="Não é possível aplicar transformação de log para valores negativos ou zero.",exports.negativeValueInDataForSqrtTransformation="Não é possível aplicar transformação de raiz quadrada para valores negativos.",exports.nonNumericAggregation=i,exports.or="or",exports.pieChartSlicesCannotExceedLimit=h,exports.queryError=x,exports.requiredProperty=d,exports.threePlusSeriesBarCountCannotExceedLimit=r,exports.twoSeriesBarCountCannotExceedLimit=o,exports.uniqueSeriesBarCountCannotExceedLimit=a,exports.whiteSpacePattern=u;