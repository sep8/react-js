const a="Terjadi kesalahan saat memuat grafik.",i="Ada total ${ elementCount } bilah untuk grafik ini. Grafik batang dengan satu rangkaian dibatasi menjadi ${ totalLimit } batang. Pilih kolom Kategori dengan nilai unik yang lebih sedikit atau terapkan filter ke data Anda.",e="Grafik batang dengan dua rangkaian dibatasi menjadi ${ totalLimit } batang, atau ${ seriesLimit } batang per rangkaian. Pilih kolom Kategori dengan nilai unik yang lebih sedikit atau terapkan filter ke data Anda.",t="Grafik batang dengan tiga rangkaian atau lebih dibatasi menjadi ${ totalLimit } batang, atau ${ seriesLimit } batang per rangkaian. Pilih kolom Kategori dengan nilai unik yang lebih sedikit atau terapkan filter ke data Anda.",n="Terjadi kesalahan saat membuat grafik.",r="Tidak dapat menerapkan transformasi log ke nilai negatif atau nol.",d="Tidak dapat menerapkan transformasi akar pangkat dua ke nilai negatif.",s="Terjadi kesalahan saat memuat layer. URL = ${ url }. ID item portal = ${ portalItemId }.",l="${ dataPath } harus unik. Rangkaian yang bernama ${ seriesName } memiliki ID (${ seriesID }) yang sudah digunakan oleh rangkaian lain.",m="${ dataPath } tidak dapat melakukan agregasi non-hitungan di kolom non-numerik.",o="${ dataPath } tidak memiliki properti bernama ${ missingProperty }.",u="${ dataPath } tidak boleh lebih pendek dari ${ limit } karakter.",g="${ dataPath } tidak boleh memiliki kurang dari ${ limit } item.",k="${ dataPath } tidak boleh memiliki lebih dari ${ limit } item.",h="${ dataPath } harus memiliki setidaknya satu karakter non-spasi.",p="${ dataPath } tidak boleh memiliki ${ additionalProperty }.",b="${ dataPath } harus sama dengan salah satu nilai yang diizinkan ini: ${ allowedValues }.",$="${ dataPath } harus cocok dengan skema salah satu dari ini: ${ schemaOptions }.",f="Scatter plot dengan simbol proporsional tidak didukung. Ukuran simbol default sudah diterapkan.",C="Gagal membaca input data.",c="Histogram memerlukan minimal dua nilai numerik.",y="Jenis seri yang diharapkan pada indeks ${ seriesIndex } adalah '${ expectedType }' tetapi '${ receivedType }' diterima sebagai gantinya",L="or",P="Ada total ${ sliceCount } irisan dalam diagram pai. Diagram pai dibatasi hingga ${ totalLimit } irisan. Agregasi ulang atau filter data Anda.",S="Total terdapat ${ seriesCount } rangkaian dan ${ elementCount } titik data di diagram ini. Diagram garis hanya boleh memiliki ${ seriesLimit } rangkaian dan ${ totalLimit } titik data. Kurangi jumlah rangkaian dan/atau agregasi ulang atau filter data Anda.",E="Diagram garis hanya boleh memiliki ${ totalLimit } titik data. Filter atau agregasi ulang data Anda dan coba lagi.";var I={defaultError:a,uniqueSeriesBarCountCannotExceedLimit:i,twoSeriesBarCountCannotExceedLimit:e,threePlusSeriesBarCountCannotExceedLimit:t,defaultInvalidChart:"Terjadi kesalahan saat membuat grafik.",negativeValueInDataForLogTransformation:"Tidak dapat menerapkan transformasi log ke nilai negatif atau nol.",negativeValueInDataForSqrtTransformation:"Tidak dapat menerapkan transformasi akar pangkat dua ke nilai negatif.",layerLoadFailure:s,duplicateSeriesID:l,nonNumericAggregation:m,requiredProperty:o,minLength:u,minItems:g,maxItems:k,whiteSpacePattern:h,additionalProperty:p,enumValues:b,anyOfValues:$,bubbleChartValidateMsg:f,queryError:"Gagal membaca input data.",histogramEmptyField:"Histogram memerlukan minimal dua nilai numerik.",invalidSeriesType:y,or:"or",pieChartSlicesCannotExceedLimit:P,lineChartSeriesAndMarkersCannotExceedLimit:S,lineChartMarkersCannotExceedLimit:E};export{p as additionalProperty,$ as anyOfValues,f as bubbleChartValidateMsg,I as default,a as defaultError,n as defaultInvalidChart,l as duplicateSeriesID,b as enumValues,c as histogramEmptyField,y as invalidSeriesType,s as layerLoadFailure,E as lineChartMarkersCannotExceedLimit,S as lineChartSeriesAndMarkersCannotExceedLimit,k as maxItems,g as minItems,u as minLength,r as negativeValueInDataForLogTransformation,d as negativeValueInDataForSqrtTransformation,m as nonNumericAggregation,L as or,P as pieChartSlicesCannotExceedLimit,C as queryError,o as requiredProperty,t as threePlusSeriesBarCountCannotExceedLimit,e as twoSeriesBarCountCannotExceedLimit,i as uniqueSeriesBarCountCannotExceedLimit,h as whiteSpacePattern};