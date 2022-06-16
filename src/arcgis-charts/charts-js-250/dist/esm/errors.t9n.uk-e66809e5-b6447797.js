const a="Під час завантаження діаграми виникла помилка.",e="На цій діаграмі всього ${ elementCount } стовпців. Гістрограми з однією серією не можуть містити понад ${ totalLimit } стовпці(-ів). Виберіть поле категорії з меншою кількістю унікальних значень або застосуйте фільтр до своїх даних.",t="Гістограми з двома серіями не можуть містити понад ${ totalLimit } стовпці(-ів) або ${ seriesLimit } стовпці(-ів) на серію. Виберіть поле категорії з меншою кількістю унікальних значень або застосуйте фільтр до своїх даних.",i="Гістограми з трьома або більше серіями не можуть містити понад ${ totalLimit } стовпці(-ів) або ${ seriesLimit } стовпці(-ів) на серію. Виберіть поле категорії з меншою кількістю унікальних значень або застосуйте фільтр до своїх даних.",r="При створенні діаграми сталася помилка.",n="Неможливо застосувати перетворення логарифму до від’ємних або нульових значень.",s="Неможливо застосувати перетворення квадратного кореня до від’ємних значень.",o="Під час завантаження шару виникла помилка. URL = ${ url }. ІД елемента порталу = ${ portalItemId }.",l="${ dataPath } повинен бути унікальним. Серія з назвою ${ seriesName } має ідентифікатор (${ seriesID }), який вже використовується іншою серією.",d="${ dataPath } не може виконувати агрегування без підрахунку в нечисловому полі.",m="${ dataPath } не має властивості з назвою ${ missingProperty }.",u="${ dataPath } не може мати менше ${ limit } символів.",$="${ dataPath } не може мати менше ${ limit } елементів.",C="${ dataPath } не може мати більше ${ limit } елементів.",h="${ dataPath } повинен мати принаймні один символ, який не є пробілом.",L="${ dataPath } не може мати ${ additionalProperty }.",c="${ dataPath } має дорівнювати одному з цих допустимих значень: ${ allowedValues }.",p="${ dataPath } має збігатися зі схемою одного з цих: ${ schemaOptions }.",P="Діаграми розсіювання з пропорційними символами не підтримуються. Застосовано розмір символу за замовчуванням.",g="Помилка читання вхідних даних.",y="Гістограми потребують щонайменше два числових значення.",E="Очікуваним типом серії з індексом ${ seriesIndex } є '${ expectedType }', але замість нього було отримано '${ receivedType }'",S="or",x="На цій круговій діаграмі усього ${ sliceCount } зрізів. Кругові діаграми обмежені ${ totalLimit } зрізами. Повторно агрегуйте або відфільтруйте свої дані.",I="На цій діаграмі всього ${ seriesCount } серій та ${ elementCount } точок даних. Лінійні діаграми обмежені ${ seriesLimit } серіями та ${ totalLimit } точками даних. Зменшіть кількість серій і/або повторно агрегуйте або відфільтруйте свої дані.",f="Лінійні діаграми обмежені ${ totalLimit } точками даних. Відфільтруйте або повторно агрегуйте свої дані та повторіть спробу.";var V={defaultError:a,uniqueSeriesBarCountCannotExceedLimit:e,twoSeriesBarCountCannotExceedLimit:t,threePlusSeriesBarCountCannotExceedLimit:i,defaultInvalidChart:"При створенні діаграми сталася помилка.",negativeValueInDataForLogTransformation:"Неможливо застосувати перетворення логарифму до від’ємних або нульових значень.",negativeValueInDataForSqrtTransformation:"Неможливо застосувати перетворення квадратного кореня до від’ємних значень.",layerLoadFailure:o,duplicateSeriesID:l,nonNumericAggregation:d,requiredProperty:m,minLength:u,minItems:$,maxItems:C,whiteSpacePattern:h,additionalProperty:"${ dataPath } не може мати ${ additionalProperty }.",enumValues:c,anyOfValues:p,bubbleChartValidateMsg:P,queryError:"Помилка читання вхідних даних.",histogramEmptyField:"Гістограми потребують щонайменше два числових значення.",invalidSeriesType:E,or:"or",pieChartSlicesCannotExceedLimit:x,lineChartSeriesAndMarkersCannotExceedLimit:I,lineChartMarkersCannotExceedLimit:f};export{L as additionalProperty,p as anyOfValues,P as bubbleChartValidateMsg,V as default,a as defaultError,r as defaultInvalidChart,l as duplicateSeriesID,c as enumValues,y as histogramEmptyField,E as invalidSeriesType,o as layerLoadFailure,f as lineChartMarkersCannotExceedLimit,I as lineChartSeriesAndMarkersCannotExceedLimit,C as maxItems,$ as minItems,u as minLength,n as negativeValueInDataForLogTransformation,s as negativeValueInDataForSqrtTransformation,d as nonNumericAggregation,S as or,x as pieChartSlicesCannotExceedLimit,g as queryError,m as requiredProperty,i as threePlusSeriesBarCountCannotExceedLimit,t as twoSeriesBarCountCannotExceedLimit,e as uniqueSeriesBarCountCannotExceedLimit,h as whiteSpacePattern};
