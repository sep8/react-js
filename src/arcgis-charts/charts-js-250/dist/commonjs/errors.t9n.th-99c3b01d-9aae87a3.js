"use strict";const e="มีทั้งหมด ${ elementCount } แถบสำหรับแผนภูมินี้ แผนภูมิแท่งที่มีหนึ่งซีรีส์ จะถูกจำกัดจำนวนไว้ที่ ${ totalLimit } แท่ง เลือกฟิลด์ Category ที่มีค่าเฉพาะน้อยลงหรือใช้ตัวกรองกับข้อมูลของคุณ",t="แผนภูมิแท่งที่มีสองซีรีส์ จะถูกจำกัดจำนวนไว้ที่ ${ totalLimit } แท่ง หรือ ${ seriesLimit } แท่งต่อซีรีส์ เลือกฟิลด์ Category ที่มีค่าเฉพาะน้อยลงหรือใช้ตัวกรองกับข้อมูลของคุณ",a="แผนภูมิแท่งที่มีอย่างน้อยสามซีรีส์ จะถูกจำกัดจำนวนไว้ที่ ${ totalLimit } แท่ง หรือ ${ seriesLimit } แท่งต่อซีรีส์ เลือกฟิลด์ Category ที่มีค่าเฉพาะน้อยลงหรือใช้ตัวกรองกับข้อมูลของคุณ",r="เกิดข้อผิดพลาดขึ้นขณะโหลดชั้นข้อมูล URL = ${ url } ID รายการพอร์ทัล = ${ portalItemId }",i="${ dataPath } ต้องไม่ซ้ำกัน ซีรีส์ที่ชื่อ ${ seriesName } มี ID (${ seriesID }) ที่ซีรีส์อื่นใช้งานอยู่แล้ว",o="${ dataPath } ไม่สามารถดำเนินการรวมแบบไม่นับกับฟิลด์ที่ไม่ใช่ตัวเลขได้",n="${ dataPath } ไม่มีชื่อคุณสมบัติ ${ missingProperty }",s="${ dataPath } ต้องมีความยาวมากกว่า ${ limit } อักขระ",l="${ dataPath } ต้องมีไม่น้อยกว่า ${ limit } รายการ",d="${ dataPath } ต้องมีไม่เกิน ${ limit } รายการ",m="${ dataPath } ต้องมีอย่างน้อยหนึ่งอักขระที่ไม่ใช่ไวท์สเปซ",p="${ dataPath } ต้องเท่ากับหนึ่งในค่าที่อนุญาตเหล่านี้: ${ allowedValues }",u="${ dataPath } ต้องตรงกับรูปแบบของหนึ่งในรายการเหล่านี้: ${ schemaOptions }",x="ไม่รองรับการกระจายพล็อตด้วยสัญลักษณ์ตามสัดส่วน ใช้ขนาดสัญลักษณ์เริ่มต้นแล้ว",$="ประเภทซีรีส์ที่คาดหวังที่ดัชนี ${ seriesIndex } คือ '${ expectedType }' แต่ได้รับ '${ receivedType }' แทน",C="มีทั้งหมด ${ sliceCount } สไลซ์ในแผนภูมิวงกลมนี้ แผนภูมิวงกลมจะถูกจำกัดไว้ที่ ${ totalLimit } สไลซ์ รวมซ้ำหรือกรองข้อมูลของคุณ",h="มีทั้งหมด ${ seriesCount } ซีรีส์ และ ${ elementCount } จุดข้อมูลในแผนภูมินี้ แผนภูมิเส้นจะถูกจำกัดไว้ที่ ${ seriesLimit } ซีรีส์ และ ${ totalLimit } จุดข้อมูล ลดจำนวนของซีรีส์ และ/หรือรวมข้อมูลใหม่ หรือกรองข้อมูลของคุณ";var L={defaultError:"เกิดข้อผิดพลาดขึ้นขณะโหลดแผนภูมิ",uniqueSeriesBarCountCannotExceedLimit:e,twoSeriesBarCountCannotExceedLimit:t,threePlusSeriesBarCountCannotExceedLimit:a,defaultInvalidChart:"เกิดข้อผิดพลาดขึ้นขณะสร้างแผนภูมิ",negativeValueInDataForLogTransformation:"ไม่สามารถใช้การแปลงค่า log กับค่าติดลบหรือศูนย์ได้",negativeValueInDataForSqrtTransformation:"ไม่สามารถใช้การแปลงรากที่สองกับค่าติดลบได้",layerLoadFailure:r,duplicateSeriesID:i,nonNumericAggregation:o,requiredProperty:n,minLength:s,minItems:l,maxItems:d,whiteSpacePattern:m,additionalProperty:"${ dataPath } ต้องไม่มี ${ additionalProperty }",enumValues:p,anyOfValues:u,bubbleChartValidateMsg:x,queryError:"ไม่สามารถอ่านข้อมูลขาเข้า",histogramEmptyField:"ฮิสโตแกรมต้องการอย่างน้อยสองค่าตัวเลข",invalidSeriesType:$,or:"or",pieChartSlicesCannotExceedLimit:C,lineChartSeriesAndMarkersCannotExceedLimit:h,lineChartMarkersCannotExceedLimit:"แผนภูมิเส้นจะถูกจำกัดไว้ที่ ${ totalLimit } จุดข้อมูล กรองหรือรวมข้อมูลของคุณใหม่ แล้วลองอีกครั้ง"};exports.additionalProperty="${ dataPath } ต้องไม่มี ${ additionalProperty }",exports.anyOfValues=u,exports.bubbleChartValidateMsg=x,exports.default=L,exports.defaultError="เกิดข้อผิดพลาดขึ้นขณะโหลดแผนภูมิ",exports.defaultInvalidChart="เกิดข้อผิดพลาดขึ้นขณะสร้างแผนภูมิ",exports.duplicateSeriesID=i,exports.enumValues=p,exports.histogramEmptyField="ฮิสโตแกรมต้องการอย่างน้อยสองค่าตัวเลข",exports.invalidSeriesType=$,exports.layerLoadFailure=r,exports.lineChartMarkersCannotExceedLimit="แผนภูมิเส้นจะถูกจำกัดไว้ที่ ${ totalLimit } จุดข้อมูล กรองหรือรวมข้อมูลของคุณใหม่ แล้วลองอีกครั้ง",exports.lineChartSeriesAndMarkersCannotExceedLimit=h,exports.maxItems=d,exports.minItems=l,exports.minLength=s,exports.negativeValueInDataForLogTransformation="ไม่สามารถใช้การแปลงค่า log กับค่าติดลบหรือศูนย์ได้",exports.negativeValueInDataForSqrtTransformation="ไม่สามารถใช้การแปลงรากที่สองกับค่าติดลบได้",exports.nonNumericAggregation=o,exports.or="or",exports.pieChartSlicesCannotExceedLimit=C,exports.queryError="ไม่สามารถอ่านข้อมูลขาเข้า",exports.requiredProperty=n,exports.threePlusSeriesBarCountCannotExceedLimit=a,exports.twoSeriesBarCountCannotExceedLimit=t,exports.uniqueSeriesBarCountCannotExceedLimit=e,exports.whiteSpacePattern=m;
