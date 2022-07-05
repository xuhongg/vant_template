var a = '123'; //字符串
var notANumber = 123; //数字
var createdBooleand = new Boolean(1); //布尔类型
function voidFn() {
    console.log('test void');
} //空值类型 没有任何返回值的操作
//void可用来定义undefined和null类型
var u = undefined;
var n = null;
u = n;
var uu = undefined;
var nn = null;
uu = nn;
// void 和 undefined 和 null 最大的区别
// 与 void 的区别是，undefined 和 null 是所有类型的子类型。
// 也就是说 undefined 类型的变量，可以赋值给 string 类型的变量：(但string不能赋值给undefined)
//void不行 
//如果你配置了tsconfig.json 开启了严格模式  null 不能 赋予 void 类型 
//这样写会报错 void类型不可以分给其他类型
// let test: void = undefined
// let num2: string = "1"
// num2 = test
//这样是没问题的
var test = null;
var num2 = "1";
num2 = test;
//或者这样的
// let test: undefined = undefined
// let num2: string = "1"
// num2 = test
var anys = '123';
anys = true;
//.声明变量的时候没有指定任意类型默认为any
//弊端如果使用any 就失去了TS类型检测的作用
var anys1;
console.log(anys1);
anys1 = '123';
anys1 = true;
//这样写会报错unknow类型不能作为子类型只能作为父类型 any可以作为父类型和子类型
//unknown类型不能赋值给其他类型
// let names1:unknown = '123'
// let names2:string = names1
//这样就没问题 any类型是可以的
var names = '123';
var names2 = names;
//unknown可赋值对象只有unknown 和 any
var bbb = '123';
var aaa = '456';
aaa = bbb;
// 如果是any类型在对象没有这个属性的时候还在获取是不会报错的
var obj = { b: 1 };
obj.a;
// 如果是unknow 是不能调用属性和方法
// let obj:unknown = {b:1,ccc:():number=>213}
// obj.b
// obj.ccc()
