const a="載入圖表時出錯。",t="此圖表總計有 ${ elementCount } 軸。 含有一個數列的長條圖限於 ${ totalLimit } 個長條。 選擇具有較少唯一值的「類別」欄位，或將篩選器套用至您的資料。",e="含有兩個數列的長條圖限於 ${ totalLimit } 個長條或每個數列 ${ seriesLimit } 個長條。 選擇具有較少唯一值的「類別」欄位，或將篩選器套用至您的資料。",i="含有三個或更多數列的長條圖限於 ${ totalLimit } 個長條或每個數列 ${ seriesLimit } 個長條。 選擇具有較少唯一值的「類別」欄位，或將篩選器套用至您的資料。",r="建立圖表時發生錯誤。",n="無法將對數轉換套用於負值或零值。",s="無法將平方根轉換套用於負值。",o="載入圖層時出錯。 URL = ${ url }。 入口網站項目 ID = ${ portalItemId }。",l="${ dataPath } 必須唯一。 名為 ${ seriesName } 的數列具有其他數列已在使用的 ID (${ seriesID })。",m="${ dataPath } 無法在非數值欄位上執行非計數匯聚。",d="${ dataPath } 缺少名為 ${ missingProperty } 的屬性。",$="${ dataPath } 不應短於 ${ limit } 個字元。",u="${ dataPath } 的項目數不應少於 ${ limit } 個。",L="${ dataPath } 的項目數不應多於 ${ limit } 個。",C="${ dataPath } 至少必須有一個非空白字元。",h="${ dataPath } 不能有 ${ additionalProperty }。",c="${ dataPath } 必須等於下列其中一個允許值: ${ allowedValues }。",P="${ dataPath } 必須符合下列其中一項結構描述: ${ schemaOptions }。",p="不支援包含比例符號的散點圖。 已套用預設符號大小。",g="無法讀取輸入資料。",y="直方圖至少需要兩個數值。",E="索引 ${ seriesIndex } 上預期的數列類型為 '${ expectedType }'，但改為接收 '${ receivedType }'",I="or",S="此圓餅圖總計有 ${ sliceCount } 個切片。 圓餅圖限制為 ${ totalLimit } 個切片。 重新匯聚或篩選您的資料。",x="此圖表總計有 ${ seriesCount } 個數列和 ${ elementCount } 個資料點。 折線圖限於 ${ seriesLimit } 個數列和 ${ totalLimit } 個資料點。 減少數列數量和/或重新匯聚或篩選您的資料。",f="折線圖限於 ${ totalLimit } 個資料點。 篩選或重新匯聚您的資料並再試一次。";var V={defaultError:"載入圖表時出錯。",uniqueSeriesBarCountCannotExceedLimit:"此圖表總計有 ${ elementCount } 軸。 含有一個數列的長條圖限於 ${ totalLimit } 個長條。 選擇具有較少唯一值的「類別」欄位，或將篩選器套用至您的資料。",twoSeriesBarCountCannotExceedLimit:"含有兩個數列的長條圖限於 ${ totalLimit } 個長條或每個數列 ${ seriesLimit } 個長條。 選擇具有較少唯一值的「類別」欄位，或將篩選器套用至您的資料。",threePlusSeriesBarCountCannotExceedLimit:"含有三個或更多數列的長條圖限於 ${ totalLimit } 個長條或每個數列 ${ seriesLimit } 個長條。 選擇具有較少唯一值的「類別」欄位，或將篩選器套用至您的資料。",defaultInvalidChart:"建立圖表時發生錯誤。",negativeValueInDataForLogTransformation:"無法將對數轉換套用於負值或零值。",negativeValueInDataForSqrtTransformation:"無法將平方根轉換套用於負值。",layerLoadFailure:o,duplicateSeriesID:l,nonNumericAggregation:"${ dataPath } 無法在非數值欄位上執行非計數匯聚。",requiredProperty:"${ dataPath } 缺少名為 ${ missingProperty } 的屬性。",minLength:$,minItems:u,maxItems:L,whiteSpacePattern:"${ dataPath } 至少必須有一個非空白字元。",additionalProperty:"${ dataPath } 不能有 ${ additionalProperty }。",enumValues:c,anyOfValues:P,bubbleChartValidateMsg:"不支援包含比例符號的散點圖。 已套用預設符號大小。",queryError:"無法讀取輸入資料。",histogramEmptyField:"直方圖至少需要兩個數值。",invalidSeriesType:E,or:"or",pieChartSlicesCannotExceedLimit:"此圓餅圖總計有 ${ sliceCount } 個切片。 圓餅圖限制為 ${ totalLimit } 個切片。 重新匯聚或篩選您的資料。",lineChartSeriesAndMarkersCannotExceedLimit:"此圖表總計有 ${ seriesCount } 個數列和 ${ elementCount } 個資料點。 折線圖限於 ${ seriesLimit } 個數列和 ${ totalLimit } 個資料點。 減少數列數量和/或重新匯聚或篩選您的資料。",lineChartMarkersCannotExceedLimit:"折線圖限於 ${ totalLimit } 個資料點。 篩選或重新匯聚您的資料並再試一次。"};export{h as additionalProperty,P as anyOfValues,p as bubbleChartValidateMsg,V as default,a as defaultError,r as defaultInvalidChart,l as duplicateSeriesID,c as enumValues,y as histogramEmptyField,E as invalidSeriesType,o as layerLoadFailure,f as lineChartMarkersCannotExceedLimit,x as lineChartSeriesAndMarkersCannotExceedLimit,L as maxItems,u as minItems,$ as minLength,n as negativeValueInDataForLogTransformation,s as negativeValueInDataForSqrtTransformation,m as nonNumericAggregation,I as or,S as pieChartSlicesCannotExceedLimit,g as queryError,d as requiredProperty,i as threePlusSeriesBarCountCannotExceedLimit,e as twoSeriesBarCountCannotExceedLimit,t as uniqueSeriesBarCountCannotExceedLimit,C as whiteSpacePattern};
