"use strict";const t="加载图层时出错。 URL = ${ url }。 门户项目 ID = ${ portalItemId }。",e="${ dataPath } 必须唯一。 名为 ${ seriesName } 的系列具有一个 ID (${ seriesID })，此 ID 已被另一个系列使用。",a="${ dataPath } 不应短于 ${ limit } 个字符。",i="${ dataPath } 包含的项目数量不应少于 ${ limit } 个。",r="${ dataPath } 包含的项目数量不应多于 ${ limit } 个。",o="${ dataPath } 必须等于以下允许值之一：${ allowedValues }。",n="${ dataPath } 必须与下列各项之一的方案匹配：${ schemaOptions }。",s="索引 ${ seriesIndex } 处的预期系列类型是 '${ expectedType }'，但接受的是 '${ receivedType }'";var l={defaultError:"加载图表时出错。",uniqueSeriesBarCountCannotExceedLimit:"该图表共有 ${ elementCount } 个条形块。 具有一个系列的条形图仅限于 ${ totalLimit } 个条柱。 选择具有较少唯一值的“类别”字段，或对数据应用过滤器。",twoSeriesBarCountCannotExceedLimit:"具有两个系列的条形图仅限于 ${ totalLimit } 个条柱或每个系列 ${ seriesLimit } 个条柱。 选择具有较少唯一值的“类别”字段，或对数据应用过滤器。",threePlusSeriesBarCountCannotExceedLimit:"具有三个或更多个系列的条形图仅限于 ${ totalLimit } 个条柱或每个系列 ${ seriesLimit } 个条柱。 选择具有较少唯一值的“类别”字段，或对数据应用过滤器。",defaultInvalidChart:"创建图表时出错。",negativeValueInDataForLogTransformation:"无法向负值或零值应用对数变换。",negativeValueInDataForSqrtTransformation:"无法向负值应用平方根变换。",layerLoadFailure:t,duplicateSeriesID:e,nonNumericAggregation:"${ dataPath } 无法在非数值字段上执行非计数聚合。",requiredProperty:"${ dataPath } 缺少名为 ${ missingProperty } 的属性。",minLength:a,minItems:i,maxItems:r,whiteSpacePattern:"${ dataPath } 必须至少包含一个空白字符。",additionalProperty:"${ dataPath } 不能有 ${ additionalProperty }。",enumValues:o,anyOfValues:n,bubbleChartValidateMsg:"包含比例符号的散点图不受支持。 已应用默认符号大小。",queryError:"无法读取输入数据。",histogramEmptyField:"直方图至少需要两个数字值。",invalidSeriesType:s,or:"or",pieChartSlicesCannotExceedLimit:"此饼图中共有 ${ sliceCount } 个切片。 饼图的切片数限制为 ${ totalLimit }。 重新聚合或过滤您的数据。",lineChartSeriesAndMarkersCannotExceedLimit:"此图表中共有 ${ seriesCount } 个序列和 ${ elementCount } 个数据点。 折线图被限制为 ${ seriesLimit } 个序列和 ${ totalLimit } 个数据点。 减少序列数量和/或重新聚合或过滤数据。",lineChartMarkersCannotExceedLimit:"折线图被限制为 ${ totalLimit } 个数据点。 过滤并重新聚合您的数据，然后重试。"};exports.additionalProperty="${ dataPath } 不能有 ${ additionalProperty }。",exports.anyOfValues=n,exports.bubbleChartValidateMsg="包含比例符号的散点图不受支持。 已应用默认符号大小。",exports.default=l,exports.defaultError="加载图表时出错。",exports.defaultInvalidChart="创建图表时出错。",exports.duplicateSeriesID=e,exports.enumValues=o,exports.histogramEmptyField="直方图至少需要两个数字值。",exports.invalidSeriesType=s,exports.layerLoadFailure=t,exports.lineChartMarkersCannotExceedLimit="折线图被限制为 ${ totalLimit } 个数据点。 过滤并重新聚合您的数据，然后重试。",exports.lineChartSeriesAndMarkersCannotExceedLimit="此图表中共有 ${ seriesCount } 个序列和 ${ elementCount } 个数据点。 折线图被限制为 ${ seriesLimit } 个序列和 ${ totalLimit } 个数据点。 减少序列数量和/或重新聚合或过滤数据。",exports.maxItems=r,exports.minItems=i,exports.minLength=a,exports.negativeValueInDataForLogTransformation="无法向负值或零值应用对数变换。",exports.negativeValueInDataForSqrtTransformation="无法向负值应用平方根变换。",exports.nonNumericAggregation="${ dataPath } 无法在非数值字段上执行非计数聚合。",exports.or="or",exports.pieChartSlicesCannotExceedLimit="此饼图中共有 ${ sliceCount } 个切片。 饼图的切片数限制为 ${ totalLimit }。 重新聚合或过滤您的数据。",exports.queryError="无法读取输入数据。",exports.requiredProperty="${ dataPath } 缺少名为 ${ missingProperty } 的属性。",exports.threePlusSeriesBarCountCannotExceedLimit="具有三个或更多个系列的条形图仅限于 ${ totalLimit } 个条柱或每个系列 ${ seriesLimit } 个条柱。 选择具有较少唯一值的“类别”字段，或对数据应用过滤器。",exports.twoSeriesBarCountCannotExceedLimit="具有两个系列的条形图仅限于 ${ totalLimit } 个条柱或每个系列 ${ seriesLimit } 个条柱。 选择具有较少唯一值的“类别”字段，或对数据应用过滤器。",exports.uniqueSeriesBarCountCannotExceedLimit="该图表共有 ${ elementCount } 个条形块。 具有一个系列的条形图仅限于 ${ totalLimit } 个条柱。 选择具有较少唯一值的“类别”字段，或对数据应用过滤器。",exports.whiteSpacePattern="${ dataPath } 必须至少包含一个空白字符。";