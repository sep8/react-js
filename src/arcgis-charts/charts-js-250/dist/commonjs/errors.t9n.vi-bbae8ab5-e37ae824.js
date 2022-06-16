"use strict";const t="Có tổng số ${ elementCount } cột cho biểu đồ này. Biểu đồ thanh có một chuỗi giới hạn đến ${ totalLimit } thanh. Chọn trường Danh mục có ít giá trị duy nhất hơn hoặc áp dụng bộ lọc cho dữ liệu của bạn.",i="Biểu đồ thanh có hai chuỗi giới hạn đến ${ totalLimit } thanh hoặc ${ seriesLimit } thanh mỗi chuỗi. Chọn trường Danh mục có ít giá trị duy nhất hơn hoặc áp dụng bộ lọc cho dữ liệu của bạn.",n="Biểu đồ thanh có ba chuỗi trở lên giới hạn đến ${ totalLimit } thanh hoặc ${ seriesLimit } thanh mỗi chuỗi. Chọn trường Danh mục có ít giá trị duy nhất hơn hoặc áp dụng bộ lọc cho dữ liệu của bạn.",e="Đã xảy ra lỗi khi tải lớp. URL = ${ url }. ID mục cổng thông tin = ${ portalItemId }.",a="${ dataPath } phải là duy nhất. Chuỗi có tên ${ seriesName } có một ID (${ seriesID }) đã được chuỗi khác sử dụng.",h="${ dataPath } không thể thực hiện tổng hợp không đếm trên trường không phải là số.",r="${ dataPath } đang thiếu một tên phù hợp ${ missingProperty }.",o="${ dataPath } không được ngắn hơn ${ limit } ký tự.",c="${ dataPath } không được chứa dưới ${ limit } mục.",u="${ dataPath } không được chứa nhiều hơn ${ limit } mục.",l="${ dataPath } phải chứa ít nhất một ký tự không phải khoảng trắng.",g="${ dataPath } phải bằng một trong những giá trị được phép này: ${ allowedValues }.",s="${ dataPath } phải khớp với lược đồ của một trong những thứ sau: ${ schemaOptions }.",d="Biểu đồ phân tán có ký hiệu tỷ lệ không được hỗ trợ. Đã áp dụng kích cỡ ký hiệu theo mặc định.",p="Loại chuỗi mong đợi tại chỉ mục ${ seriesIndex } là '${ expectedType }' nhưng thay vào đó lại nhận được '${ receivedType }'",m="Có tổng cộng ${ sliceCount } lát cắt trong biểu đồ hình tròn này. Biểu đồ hình tròn bị giới hạn ${ totalLimit } lát cắt. Tổng hợp lại hoặc lọc dữ liệu của bạn.",x="Có tổng cộng ${ seriesCount } chuỗi và ${ elementCount } điểm dữ liệu trong biểu đồ này. Biểu đồ đường bị giới hạn ${ seriesLimit } chuỗi và ${ totalLimit } điểm dữ liệu. Giảm số lượng chuỗi và/hoặc tổng hợp lại hoặc lọc dữ liệu của bạn.",C="Biểu đồ đường bị giới hạn ${ totalLimit } điểm dữ liệu. Lọc hoặc tổng hợp lại dữ liệu của bạn và thử lại.";var $={defaultError:"Đã xảy ra lỗi khi tải biểu đồ.",uniqueSeriesBarCountCannotExceedLimit:t,twoSeriesBarCountCannotExceedLimit:i,threePlusSeriesBarCountCannotExceedLimit:n,defaultInvalidChart:"Đã xảy ra lỗi khi tạo biểu đồ.",negativeValueInDataForLogTransformation:"Không thể áp dụng phép biến đổi log lên giá trị âm hoặc bằng không.",negativeValueInDataForSqrtTransformation:"Không thể áp dụng phép biến đổi căn bậc hai lên giá trị âm.",layerLoadFailure:e,duplicateSeriesID:a,nonNumericAggregation:h,requiredProperty:r,minLength:o,minItems:c,maxItems:u,whiteSpacePattern:l,additionalProperty:"${ dataPath } không được chứa ${ additionalProperty }.",enumValues:g,anyOfValues:s,bubbleChartValidateMsg:d,queryError:"Không thể đọc dữ liệu đầu vào.",histogramEmptyField:"Biểu đồ tần số yêu cầu ít nhất hai giá trị số khác nhau.",invalidSeriesType:p,or:"or",pieChartSlicesCannotExceedLimit:m,lineChartSeriesAndMarkersCannotExceedLimit:x,lineChartMarkersCannotExceedLimit:C};exports.additionalProperty="${ dataPath } không được chứa ${ additionalProperty }.",exports.anyOfValues=s,exports.bubbleChartValidateMsg=d,exports.default=$,exports.defaultError="Đã xảy ra lỗi khi tải biểu đồ.",exports.defaultInvalidChart="Đã xảy ra lỗi khi tạo biểu đồ.",exports.duplicateSeriesID=a,exports.enumValues=g,exports.histogramEmptyField="Biểu đồ tần số yêu cầu ít nhất hai giá trị số khác nhau.",exports.invalidSeriesType=p,exports.layerLoadFailure=e,exports.lineChartMarkersCannotExceedLimit=C,exports.lineChartSeriesAndMarkersCannotExceedLimit=x,exports.maxItems=u,exports.minItems=c,exports.minLength=o,exports.negativeValueInDataForLogTransformation="Không thể áp dụng phép biến đổi log lên giá trị âm hoặc bằng không.",exports.negativeValueInDataForSqrtTransformation="Không thể áp dụng phép biến đổi căn bậc hai lên giá trị âm.",exports.nonNumericAggregation=h,exports.or="or",exports.pieChartSlicesCannotExceedLimit=m,exports.queryError="Không thể đọc dữ liệu đầu vào.",exports.requiredProperty=r,exports.threePlusSeriesBarCountCannotExceedLimit=n,exports.twoSeriesBarCountCannotExceedLimit=i,exports.uniqueSeriesBarCountCannotExceedLimit=t,exports.whiteSpacePattern=l;