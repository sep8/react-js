"use strict";const e="Bu çizge için toplam ${ elementCount } çubuk var. Bir serili çubuk çizgeler ${ totalLimit } çubuk ile sınırlandırılır. Daha az benzersiz değere sahip bir Kategori alanı seçin veya verilerinize bir filtre uygulayın.",a="İki serili çubuk çizgeler ${ totalLimit } çubuk veya seri başına ${ seriesLimit } çubuk ile sınırlandırılır. Daha az benzersiz değere sahip bir Kategori alanı seçin veya verilerinize bir filtre uygulayın.",i="Üç veya daha fazla serili çubuk çizgeler ${ totalLimit } çubuk veya seri başına ${ seriesLimit } çubuk ile sınırlandırılır. Daha az benzersiz değere sahip bir Kategori alanı seçin veya verilerinize bir filtre uygulayın.",r="Katman yüklenirken bir hata oluştu. URL = ${ url }. Portal ögesi kimliği = ${ portalItemId }.",t="${ dataPath } benzersiz olmalıdır. ${ seriesName } adlı serinin başka bir seri tarafından zaten kullanılan bir kimliği (${ seriesID }) var.",n="${ dataPath } sayısal olmayan alanda sayım dışı kümeleme gerçekleştiremez.",l="${ dataPath }'de ${ missingProperty } adlı özellik eksik.",s="${ dataPath }, ${ limit } karakterden daha kısa olmamalıdır.",o="${ dataPath }, ${ limit }'den az ögeye sahip olmamalıdır.",d="${ dataPath }, ${ limit }'den fazla ögeye sahip olmamalıdır.",u="${ dataPath }, en az bir adet boşluk olmayan karaktere sahip olmalıdır.",m="${ dataPath }, izin verilen şu değerlerden birine eşit olmalıdır: ${ allowedValues }.",y="${ dataPath }, şunlardan birinin şemasıyla eşleşmelidir: ${ schemaOptions }.",p="Orantısal sembollere sahip serpme düzenler desteklenmez. Varsayılan sembol boyutu uygulandı.",k="${ seriesIndex } dizininde beklenen seri tipi '${ expectedType }' ancak '${ receivedType }' alındı",g="Bu pasta grafiğinde toplam ${ sliceCount } dilim var. Pasta grafikleri ${ totalLimit } dilimle sınırlandırılmıştır. Verilerinizi yeniden birleştirin veya filtreleyin.",h="Bu çizgede toplam ${ seriesCount } seri ve ${ elementCount } veri noktası vardır. Çizgi grafikler ${ seriesLimit } seri ve ${ totalLimit } veri noktası ile sınırlıdır. Seri sayısını azaltın ve/veya verilerinizi yeniden birleştirin veya filtreleyin.",z="Çizgi grafikler ${ totalLimit } veri noktası ile sınırlıdır. Filtreleyin veya verilerinizi yeniden kümeleyin ve yeniden deneyin.";var b={defaultError:"Çizge yüklenirken bir hata oluştu.",uniqueSeriesBarCountCannotExceedLimit:e,twoSeriesBarCountCannotExceedLimit:a,threePlusSeriesBarCountCannotExceedLimit:i,defaultInvalidChart:"Çizge oluşturulurken bir hata meydana geldi.",negativeValueInDataForLogTransformation:"Negatif veya sıfır değerlere işlem kaydı dönüştürme uygulanamaz.",negativeValueInDataForSqrtTransformation:"Negatif değerlere kare kök dönüştürme uygulanamaz.",layerLoadFailure:r,duplicateSeriesID:t,nonNumericAggregation:n,requiredProperty:l,minLength:s,minItems:o,maxItems:d,whiteSpacePattern:u,additionalProperty:"${ dataPath }'de ${ additionalProperty } olmamalıdır.",enumValues:m,anyOfValues:y,bubbleChartValidateMsg:p,queryError:"Girdi verileri okunamadı.",histogramEmptyField:"Histogramlar en az iki sayısal değer gerektirir.",invalidSeriesType:k,or:"or",pieChartSlicesCannotExceedLimit:g,lineChartSeriesAndMarkersCannotExceedLimit:h,lineChartMarkersCannotExceedLimit:z};exports.additionalProperty="${ dataPath }'de ${ additionalProperty } olmamalıdır.",exports.anyOfValues=y,exports.bubbleChartValidateMsg=p,exports.default=b,exports.defaultError="Çizge yüklenirken bir hata oluştu.",exports.defaultInvalidChart="Çizge oluşturulurken bir hata meydana geldi.",exports.duplicateSeriesID=t,exports.enumValues=m,exports.histogramEmptyField="Histogramlar en az iki sayısal değer gerektirir.",exports.invalidSeriesType=k,exports.layerLoadFailure=r,exports.lineChartMarkersCannotExceedLimit=z,exports.lineChartSeriesAndMarkersCannotExceedLimit=h,exports.maxItems=d,exports.minItems=o,exports.minLength=s,exports.negativeValueInDataForLogTransformation="Negatif veya sıfır değerlere işlem kaydı dönüştürme uygulanamaz.",exports.negativeValueInDataForSqrtTransformation="Negatif değerlere kare kök dönüştürme uygulanamaz.",exports.nonNumericAggregation=n,exports.or="or",exports.pieChartSlicesCannotExceedLimit=g,exports.queryError="Girdi verileri okunamadı.",exports.requiredProperty=l,exports.threePlusSeriesBarCountCannotExceedLimit=i,exports.twoSeriesBarCountCannotExceedLimit=a,exports.uniqueSeriesBarCountCannotExceedLimit=e,exports.whiteSpacePattern=u;