// 两种不同类型比较,会先转换成两边的某一类

/*
转换规律 

            Undefined	Null	        Number	            	 String                         Boolean	                      Object
Undefined	true	    true	        false	            	 false                          false	                    IsFalsy(B)
Null	    true	    true	        false	            	 false                   	    false                       IsFalsy(B)
Number	    false	    false	       A === B	             A === ToNumber(B)             A === ToNumber(B)            A == ToPrimitive(B)                                 	
String	    false	    false      ToNumber(A) === B             A === B              ToNumber(A) === ToNumber(B)      ToPrimitive(B)== A                         	 	          
Boolean	    false	    false	   ToNumber(A) === B   ToNumber(A) === ToNumber(B)		        A === B            ToNumber(A) == ToPrimitive(B)
Object	    false	    false	  ToPrimitive(A) == B	  ToPrimitive(A) == B	     ToPrimitive(A) == ToNumber(B)	          A === B

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Equality_comparisons_and_sameness
*/
console.log("1'==1", '1'==1, "1'===1", '1'===1, "'1'!=1", '1'!=1, "'1'!==1", '1'!==1)

// 三元函数 (condition)?true-do:false-do
const message = (200 == '200')?'OK':'Error'


// boolean test
const nuobj = null
const undobj = undefined
// -xx == false test(A)
console.log(
    '==false test',
    ''==false,          //1 空字符串==假
    0==false,           //1 0==假
    []==false,          //1 空数组==假
    nuobj==false,       //0 空对象!=假
    undobj==false,      //0 未定义对象!=假
    {}==false,          //0 对象!=假
    null==false,        //0 空!=假
    undefined==false,   //0 未定义!=假
    NaN==false          //0 NaN!=假
)
// -!!test(B) ( equals to if condition test)
console.log(
    '!! test   ',
    !!'',           //0 空字符串=假
    !!0,            //0 0=假
    !![],           //*1 空数组=真
    !!nuobj,        //*0 空对象=假
    !!undobj,       //*0 未定义对象=假
    !!{},           //1 对象=真
    !!null,         //*0 null=假
    !!undefined,    //*0 undefined=假
    !!NaN,          //*0 NaN=假
)
// test A & B should have diff return for each line.

// q1. null and undefined (object) will return 'false' both '!!obj' and 'obj==false'
    // answer is in q3. null and undefined will be coerced to NaN, which is not equals to 0.
// q2. NaN returns false in both tests.
    // cuz NaN always return false when compare with others, except for using Object.is.
    // 因为NaN除了使用Object.is对比外, 与任何(包括自己)对比都为false
// q3. !![] -> true and []==false -> true 
    // cuz all other types will be coerced to 'Number' when they are comparing with boolean.
    // 因为在和布尔类对比时,会转换为Number类, 空数组=0, 对象=NaN
    // [] = 0, {} = NaN, false = 0, So [] = false and {} != false 

//Object.is 除 对+0 与 -0 (false), 对两个NaN (true)判定外,与===相同
//== === Object.is 相等判定表:
//https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Equality_comparisons_and_sameness#%E7%90%86%E8%A7%A3%E7%9B%B8%E7%AD%89%E6%AF%94%E8%BE%83%E7%9A%84%E6%A8%A1%E5%9E%8B


// diff of & | and && ||
let x = true
let y = false
// second one not evaluated if the first one is false
console.log(y && x) 
// y not evaluated if x is true
console.log(x || y) 
// suggest: always use double one.

//switch
switch (key) {
    case value:
        
        break
    // means if key === v or a
    case v:
    case a:

        break
    default:
        break
}

