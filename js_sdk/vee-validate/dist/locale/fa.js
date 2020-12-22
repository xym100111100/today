!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):((n=n||self).__vee_validate_locale__fa=n.__vee_validate_locale__fa||{},n.__vee_validate_locale__fa.js=e())}(this,function(){"use strict";function r(n){var e={Byte:"بايت",KB:"كيلوبايت",GB:"گیگابايت",PB:"پتابايت"};return function(n){var e=1024,t=0===(n=Number(n)*e)?0:Math.floor(Math.log(n)/Math.log(e));return 1*(n/Math.pow(e,t)).toFixed(2)+" "+["Byte","KB","MB","GB","TB","PB","EB","ZB","YB"][t]}(n).replace(/(Byte|KB|GB|PB)/,function(n){return e[n]})}var n,e={name:"fa",messages:{_default:function(n){return"مقدار "+n+" معتبر نیست."},after:function(n,e){return n+" باید بعد از تاریخ "+e[0]+" باشد."},alpha:function(n){return n+" فقط می تواند از حروف تشکیل شود."},alpha_dash:function(n){return n+" فقط می تواند از حروف، اعداد، خط فاصله و زیرخط تشکیل شود."},alpha_num:function(n){return n+" فقط میتواند از حروف و اعداد تشکیل شود."},alpha_spaces:function(n){return n+" فقط می تواند از حروف و فاصله تشکیل شود."},before:function(n,e){return n+" باید قبل از تاریخ "+e[0]+" باشد."},between:function(n,e){return n+" باید بین "+e[0]+" و "+e[1]+" کارکتر باشد."},confirmed:function(n){return n+" با تاییدیه اش مطابقت ندارد."},credit_card:function(n){return n+" غیر معتبر است."},date_between:function(n,e){return n+" باید بین تاریخ "+e[0]+" and "+e[1]+" باشد."},date_format:function(n,e){return n+" باید در قالب "+e[0]+" باشد."},decimal:function(n,e){void 0===e&&(e=[]);var t=e[0];return void 0===t&&(t="*"),n+" باید یک مقدار عددی "+("*"===t?"":" با حداکثر "+t+" اعشار")+" باشد."},digits:function(n,e){return n+" باید یک مقدار عددی و دقیقاً "+e[0]+" رقم باشد."},dimensions:function(n,e){return n+" باید در اندازه "+e[0]+" پیکسل عرض و "+e[1]+" پیکسل ارتفاع باشد."},email:function(n){return n+" باید یک پست الکترونیک معتبر باشد."},excluded:function(n){return n+"باید یک مقدار معتبر باشد."},ext:function(n){return n+" باید یک فایل معتبر باشد."},image:function(n){return n+" باید یک تصویر باشد."},included:function(n){return n+" باید یک مقدار معتبر باشد."},ip:function(n){return n+" باید یک آدرس آی پی معتبر باشد."},max:function(n,e){return n+" نباید بیشتر از "+e[0]+" کارکتر باشد."},max_value:function(n,e){return"مقدار "+n+" باید "+e[0]+" یا کمتر باشد."},mimes:function(n){return n+" باید از نوع معتبر باشد."},min:function(n,e){return n+" باید حداقل "+e[0]+" کارکتر باشد."},min_value:function(n,e){return"مقدار "+n+" باید "+e[0]+" یا بیشتر باشد."},numeric:function(n){return n+" فقط می تواند عددی باشد."},regex:function(n){return"قالب "+n+" قابل قبول نیست."},required:function(n){return n+" الزامی است."},size:function(n,e){var t=e[0];return"حجم "+n+" کمتر از "+r(t)+" باشد."},url:function(n){return n+" باید یک تارنمای معتبر باشد."}},attributes:{}};return"undefined"!=typeof VeeValidate&&VeeValidate.Validator.localize(((n={})[e.name]=e,n)),e});