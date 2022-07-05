// 在typescript中，我们定义对象的方式要用关键字interface（接口），我的理解是使用interface来定义一种约束，让数据的结构满足约束的格式。定义方式如下：

//这样写是会报错的 因为我们在person定义了a，b但是对象里面缺少b属性
//使用接口约束的时候不能多一个属性也不能少一个属性
//必须与接口保持一致
interface Person{
    a:String,
    b:String
}
 let person:Person={
    a:'123',
    b:'abc'
 }
 
 //重名