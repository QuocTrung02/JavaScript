//alert('Hi javascript basic')
// -------------------------------------------------------------------
//đặt tên biến
//var fullName = 'Đỗ Hoàng Quốc Trung'; // khai báo tên
//var age = 21; //khai báo tuổi

// gọi hàm thông báo
// alert(fullName);
// alert(age);

// var a =10 ;
// a += 5;
// console.log('a :',a);
// -------------------------------------------------------------------
// tiền tố
// var b = 20;
// console.log('b :',++b);
// hậu tố Postfix
// var a = 10;
// console.log('a :',a++);
// console.log('a :',a);
// -------------------------------------------------------------------

// Toán Tử cộng chuổi
// var fistName = 'Trung';
// var lastName = 'Đỗ';
// var fullName = fistName + ' ' + lastName;
// var so1 = fistName + ' ' +'Đỗ';
// console.log(fullName);
// console.log(so1);
// -------------------------------------------------------------------
// To0án Tử Logical
// var a = true;
// var b = false;
// var c = a || b;
// var d = b && c;

// console.log(c , d ); // Output: ?
// -------------------------------------------------------------------
//kiểu dữ liệu trong javascript

//Number type
//var a = 1 ;
//var b = 2 ;
//console.log(typeof b); // hàm kiểm tra kiểu dữ liệu

//string type
//var fullName = 'Do Hoang Quoc Trung';
//console.log(typeof fullName); // hàm kiểm tra kiểu dữ liệu
//Boolean
//var dungsai = true ;
//console.log(typeof dungsai); // hàm kiểm tra kiểu dữ liệu
//Undefined type
//var age;
//console.log(typeof age); // hàm kiểm tra kiểu dữ liệu
//Null
//var isNull = null;
//console.log(typeof isNull); // hàm kiểm tra kiểu dữ liệu
//Symbol
//var id = Symbol('id');
//console.log(typeof id); // hàm kiểm tra kiểu dữ liệu
//Function
//var myFunction = function() {
//   alert('Hi.Chào Trung');
//};
//myFunction(); //gọi hàm myfunction
//console.log(typeof myFunction); // hàm kiểm tra kiểu dữ liệu
// -------------------------------------------------------------------
//Object
//var myObject =  {
// name: 'Trung',
// age: 20,
// address: 'Huỳnh Thúc Kháng'
//};
//console.log('Object: ', myObject);
//console.log(typeof myObject); // hàm kiểm tra kiểu dữ liệu
//var myArray = [
// 'do',
// 'hoang',
// 'quoc',
// 'trung',
// ' tuoi',
// 20
//];
//console.log('myArray: ',myArray);
//console.log(typeof myArray); // hàm kiểm tra kiểu dữ liệu
// -------------------------------------------------------------------
// function writeLog() {
// for (var param of arguments) {
// console.log(param, '-')
// }
// }
//
// writeLog('Log_1' , 'Log_2' , 'Log_3');

// function writeLog2() {
// var Tong = '';
// for (var param2 of arguments)
// {
// Tong += `${param2} -`
// }
// console.log(Tong);
// }
//
// writeLog2('Log_1' , 'Log_2' , 'Log_3');
// -------------------------------------------------------------------
// Hàm Cộng
// cách 1
// function cong(a, b) {
// return a + b;
// }
//
// var bien = cong(10 , 20);
//
// console.log(cong);
// cách 2
// function Tinh_Tong(a ,b) {
//     return bien=a + b;
// }
// var a = parseInt(prompt("Nhập số a"));
// var b = parseInt(prompt("Nhập số b"));
// var Tong = Tinh_Tong(a,b)
// console.log(Tong);
// -------------------------------------------------------------------
//declarationFunction
// function declarationFunction() {
// console.log('declaration function');
// };
//expressionFunction
// var expressionFunction =function() {
// console.log('expression Function');
// };
// -------------------------------------------------------------------
// tìm hiểu thêm backlash in javascript

// function getUpperCaseName(name) {
// return name.toUpperCase;
// }
// Expected results:

// var fullName = 'do Trung';
// console.log(fullName.toLowerCase()) // "NGUYEN VAN A"
// -------------------------------------------------------------------

// khai báo một số *
// var million = 1000000;
// Tương Tự 1000000 *
// var million = 1e6;
// -------------------------------------------------------------------

// Khai báo Làm Tròn số
// To Fixed
// var PI = 3.15
// console.log(PI.toFixed()) //input: 3.33 = 3
// var PI = 3.66
// console.log(PI.toFixed()) //input: 3.66 = 4
// -------------------------------------------------------------------

// tạo mảng Array
// var languages = [
//     'JavaScript',
//     'PHP',
//     'Ruby',
//     null,
//     undefined
// ];
// console.log(languages)
//kiểm tra có phải là array hay không
// console.log(Array.isArray(languages))
//Lấy phần tử theo Index
// console.log(languages[6])
// -------------------------------------------------------------------

// var languages = [
// 'JavaScript',
// 'PHP',
// 'Ruby'
// ];
// var languages2 = [
// 'Quốc',
// 'Trung'
// ];
// join
// console.log(languages.join(','))
//Pop: Xóa element cuối và trả về phần tử đã xóa
// console.log(languages.pop())
// console.log(languages)

//push: Thêm element và cuối mảng
//  console.log(languages.push('Quốc','Trung'))
//  console.log(languages)

// Shift: Xóa Phần Tử đâu mảng và trả lại phần tử đã xóa
// console.log(languages.shift())
// console.log(languages)

//Unshift: Ngược lại với Shift

//Splicing: Xóa Phần Tử Từ Index mình chọn đến Index mình muốn
//languages.splice(1, 2) // nó sẽ xóa 2 phần tử (Index 1 là PHP và Ruby)
// // console.log(languages)
// languages.splice(1,0,'Trung') // nó sẽ chèn Trung sau phần tử 0
// console.log(languages)

//Concat: nối 2 Array
// console.log(languages.concat(languages2)) // nối 2 array
// console.log(languages2.concat(languages)) // nối 2 array

// slicing: cắt từ index start đến end
// console.log(languages.slice(1,2)) //output: PHP
// console.log(languages.slice(0,3)) //output: toàn bộ trong array languages
// -------------------------------------------------------------------

// Tính tất cả Số lẽ trong mãng
// var mang = [1, 2, 3, 4, 5,
//             6, 7, 8, 9, 10,
//             11, 12, 13, 14,
//             15, 16,17, 18, 19, 20];
// function Tinh_Le(mang) {
//     var tong = 0;
//     for(var i=0 ; i < mang.length;length++)
//     {
//         if(mang[i]%2!=0)
//         {
//             tong =tong + mang[i];
//         }
//     }
//     return tong
// }
// console.log('Tong Số Lẻ : ',Tinh_Le(mang))
// -------------------------------------------------------------------

// Chương 8
// 1.1
// Object trong Javascript

//Lưu tên chính bản thân
//thêm key vào myInfo cách 2
// var emailkey = 'emai';

// // Trong biến myInfo là 1 Object trong Object có 5 keys
// var myInfo = {
// name: 'Quốc Trung',
// age: 18,
// address: 'Bình Thuận, VN',
// [emailkey]: 'Trungfrontend@gmail.com', //thuộc tính
// getName: function() { //Phương Thức
// return this.address;
// }
// };
//  console.log(myInfo.getName())
// console.log(myInfo);
//
// var myKey = 'address';
// thêm 1 key vào myInfo
// myInfo.email = 'Trungfrontend@gmail.com'
// Lấy value ra ngoài
// console.log(myInfo['name']) //cách 1
// console.log(myInfo[myKey]) //cách 2
//cách xóa key
// delete myInfo.age;
// console.log(myInfo);
// -------------------------------------------------------------------
// 1.2
//Object constructor
// lưu ý: Nên viếc Hoa chữ cái đầu của object đây là quy ước
// function User(fistName,lastName,avatar){ //hoặc var User= function(các tham số)
// this.fistName = fistName;
// this.lastName = lastName;
// this.avatar = avatar ;

// tạo hàm function
// this.getName = function() {
// return `${this.fistName} ${this.lastName}`
// }
// }

// gán vào Object
// var author = new User('Trung','Đỗ','avatar');
// var user = new User('Hoàng','Huyết','avatar');
//
// author.title = 'Hôm nay học constructor';
// User.comment = 'Quốc Trung học Lập Trình JavaScipt';
//
// console.log(author);
// console.log(user);
//cách gọi hàm getName Trong hàm
// console.log(author.getName())
// console.log(user.getName())
// -------------------------------------------------------------------

//bài tập
// function Animal(name,leg,speed) {
// this.name = name;
// this.leg = leg;
// this.speed = speed;
// }
// var parrot = new Animal('vẹt',2,'40km/h');
// console.log(parrot);
// -------------------------------------------------------------------

// 1.3
//Object prototype - Basic
//Thêm sau khi hàm được tạo ra
// function User(fistName,lastName,avatar){ //hoặc var User= function(các tham số)
// this.fistName = fistName;
// this.lastName = lastName;
// this.avatar = avatar ;

// //tạo hàm function
// this.getName = function() {
// return `${this.fistName} ${this.lastName}`
// }
// }
// var parrot = new User('Trung','Đỗ','Xinh');
// //vd
// User.prototype.className = 'Trung';
// console.log(parrot.className);
// console.log(parrot)
// -------------------------------------------------------------------

// Làm bài tập tại đây
// function Student(firstName,lastName) {
// this.firstName = firstName;
// this.lastName = lastName;
// }
// Student.prototype.getFullName = function() {
// return `${this.firstName} ${this.lastName}`
// return 'Long Bui';
// };
//
// thêm cốt vào khung
// var student = new Student('Long', 'Bui');
//
// console.log(student.firstName);  // 'Long'
// console.log(student.lastName);  // 'Bui'
// console.log(student.getFullName());  // 'Long Bui'
// -------------------------------------------------------------------

// 1.4
// Đối Tượng Date
// var date = new date();
// var year = date.getFullYear();
// var month = date.getMonth() +1;
// var day = date.getDay();

// console.log(`${day} ${month} ${year}`)
// console.log(date.getFullYear());

// date.getFullYear();

// var date = new Date();
// var year = date.getFullYear() ;
// var month = date.getMonth() ;
// var day = date.getDate() ;

// var date = new Date();
// function getNextYear() {
//     return date.getFullYear() +1 ;
// }
// console.log(getNextYear())
// console.log(year);
// console.log(day);
// -------------------------------------------------------------------

// 1.5
// Math Object
// Math.PI: Tạo ra dãy số PI
// console.log(Math.PI);
//Math.round(): làm tròn gần nhất
// console.log(Math.round(5.6)); //output: 6
//Math.abs(): làm Tròn trên
// console.log(Math.round(5.000001)); //output: 6
//Math.floor(): làm Tròn dưới
// console.log(Math.round(5.999999)); //output: 5

//Math.random(): trả về số thập phân ngẫu nhiên <1

//vd: tạo hàm ngẫu nhiên nhỏ hơn 10
// console.log(Math.floor(Math.random() * 10))
// vd2: tạo hàm random
// var random = Math.floor(Math.random() * 5);

// var array =[
// '10 Kim Cương',
// '20 Kim Cương',
// '30 Kim Cương',
// '40 Kim Cương',
// '50 Kim Cương',
// ];
// console.log(array[random])
// vd3 tạo xác xuất rơi đồ
// var random = Math.floor(Math.random() * 100);
// if(random < 20)
// {
// console.log('Cường Hóa Thành Công');
// }else{
// console.log('Cường Hóa Thất Bại');

// }

// Math.min: Tìm Kiếm Trong dãy ra số nhỏ nhất
// console.log(Math.min(-21,-55,-5,21,-99,99))

// Math.max: Tìm Kiếm Trong dãy ra số Lớn nhất
// console.log(Math.max(-21,-55,-5,21,-99,99))

// function getRandomItem(arr) {
//     var random = Math.floor(Math.random() *arr.length);
//     return arr[random];
// }
// var arr = getRandomItem([
//     'Súng Hoa Cải',
//     'AK47 Quân Đội',
//     '6 Nóng Vip',
//     'barret M99',
//     '50 Đá Cường Hóa',
// ])
// console.log('Chúc Mừng Bạn Nhận Được ' + arr + ' Vĩnh Viễn');
// -------------------------------------------------------------------
// 1.1;
//Câu lệnh if / else
//Bài Tập
// function run(a) {
//     if(a % 3 === 0 && a % 5 != 0)
//         return 1
//     if(a % 5 === 0 && a % 3 != 0)
//         return 2
//     if(a % 15 === 0)
//         return 3
// }
// // Kỳ vọng
// console.log(run(3)) // 1
// console.log(run(5)) // 2
// console.log(run(15)) // 3
// -------------------------------------------------------------------
// 1.2;
//câu lệnh rẽ nhánh switch
// Bài Tập
// function run(fruits) {
//     var result;

//     switch(fruits) {
//         case "Banana":
//             result = "This is a Banana";
//             break;
//         case "Apple":
//             result = "This is an Apple";
//             break;
//         default:
//             console.log('Không Biết!')
//     }
//     return result;
// }
// console.log(run('Apple'))
// -------------------------------------------------------------------
//Bài Tập
// function tuQuy(a) {
//     switch(a) {
//         case 1:
//         case 2:
//         case 3:
//             console.log('Mùa Xuân')
//             break;
//         case 4:
//         case 5:
//         case 6:
//         console.log('Mùa Hạ')
//         break;
//         case 7:
//         case 8:
//         case 9:
//         console.log('Mùa Thu')
//         break;
//         case 10:
//         case 11:
//         case 12:
//         console.log('Mùa Đông')
//         break;
//         default:
//             console.log('Nhập Sai Yêu Cầu Nhập Lại');
//     }
// }

// console.log(tuQuy(15))
//--------------------------------------------------------------------
// 1.3
// Hàm kiểm tra đủ tuổi bỏ phiếu
// function getCanVoteMessage(age) {
//     return age > 17 ? 'Bạn Có Thể Bỏ Phiếu' : 'Bạn Chưa Được Bỏ Phiếu';
// }
// // Kỳ vọng
// console.log(getCanVoteMessage(18)) // 'Bạn có thể bỏ phiếu'
// console.log(getCanVoteMessage(15)) // 'Bạn chưa được bỏ phiếu'
//--------------------------------------------------------------------

//Vòng Lặp
// 1.1
// Vòng Lặp For loop
// function getRandNumbers(min, max, length) {

//     //tạo mảng rỗng//
//         var array = [];

//     // /*chạy vòng for với biến i điều kiện chạy đến
//     //  chiều dài tham số length sẽ được nhập sau này
//     // và mỗi vòng i sẽ cộng thêm 1 */
//         for(var i = 0; i <= length - 1; i++) {

//     //truy xuất index của mảng array bằng biến i, do có vòng for
//     // ở trên nên index của mảng sẽ bắt đầu từ 0 và
//     // mỗi vòng cộng thêm 1  cho đến tham số length,
//     // rồi gán cái index đó cho số random ở vế sau,
//     // ví dụ lần chạy đầu index là 0 thì ta được số random là 32
//     // thì sẽ gán 32 cho index 0, rồi kế tiếp index 1,
//     // được số random là 4534 thì sẽ gán số đó cho index 1,
//     //  cứ như thế đến length//
//             array[i] = Math.floor(Math.random() * (max - min) + min);
//         }

//     //trả lại mảng đã gán số random//
//         return array;
//     }

//     //in ra hàm và truyền đối số vào//
//     console.log(getRandNumbers(1, 1000, 10));
//--------------------------------------------------------------------

//bài tập
// function getTotal(arr) {
//     let tong = 0;
//     for(var i = 0 ; i < arr.length ; i++){
//         tong =  tong + arr[i];
//     }
//     return tong;
// }
// console.log(getTotal([1, 2, 3])) // Output: 6
//--------------------------------------------------------------------

//bài tập
// var arr = [
//     'Đỗ',
//     'Hoàng',
//     'Quốc',
//     'Trung',
//     'Tuổi',
//     '20'
// ];

// var arrlength = arr.length;

// function tinhMang(arr) {
//     for(var i = 0 ;i < arrlength; i++){
//         console.log(arr[i])
// }
// }
// console.log(tinhMang(arr))
//--------------------------------------------------------------------

//Bài Tập Cộng Số Tiền Các Khóa Học Có Trong Hàm
// var orders = [
//     {
//         name: 'Khóa học HTML - CSS Pro',
//         price: 3000000
//     },
//     {
//         name: 'Khóa học Javascript Pro',
//         price: 2500000
//     },
//     {
//         name: 'Khóa học React Pro',
//         price: 3200000
//     }
// ]

// var ordersLength = orders.length;
// function getTotal(orders) {
//     var sumOrders = 0
//     for(var i = 0; i < ordersLength ; i++){
//         sumOrders += orders[i].price
// }
//     return sumOrders
// }

// // Expected results:
// console.log('Tổng Số Tiền:',getTotal(orders)) // Output: 8700000
// =====================================================

// For/in loop

//Bài Tập
// function run(object) {
//     let arr = [];
//     for (let key in object) {
//          arr.push(`Thuộc tính ${key} có giá trị ${object[key]}`) }
//          return arr
// }
// Expected results:
// console.log(run({ name: 'Nguyen Van A', age: 16 }));
// Output:
// [
//     "Thuộc tính name có giá trị Nguyen Van A",
//     "Thuộc tính age có giá trị 16"
// ]
// =====================================================

// Vòng Lặp While
// var i = 0;
// while (i < 1000) {
//   console.log(i);
// i++;
// }
// =====================================================

// Vòng Lặp do while
// var i = 0;
// do {
// i++;
// con
// } while (i < 10)
// --------------------------------------------------------------
//Break and continue in for loop
// var arr = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];
// function breakarr(arr) {
//   for (var i = 0; i < arr.length; i++) {
// if (i >= 10) {
//   break;
// }
// if (arr[i] % 2 == 0) {
//   continue;
// }
// console.log(arr[i]);
//   }
// }
//
// console.log(breakarr(arr));

// --------------------------------------------------------------
//// netted loop-vòng lặp lồng nhau
// var arr = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
//  for (var i = 0; i< arr.length; i++){
//// console.log(arr[i]);
// for(var j =0; j<arr[i].length;j++){
// console.log(arr[i][j])
// }
//  }

// for (i = 100; i >= 0; i -= 5) {
//   console.log(i);
// }

//-----------------------------------------------------
//// working with array

// var conrse = [
//   { id: 1, name: "JavaScript", coin: 250 },
//   { id: 2, name: "HTML,CSS", coin: 0 },
//   { id: 3, name: "ReactJs", coin: 100 },
//   { id: 4, name: "NodeJs", coin: 0 },
//   { id: 5, name: "ReactJs", coin: 0 },
// ];

// forEach:duyệt qua từng phần tử của mảng
// course.forEach(function (course, index) {
//   console.log(index, course);
// });

// =========================================
// every: Kiểm tra tất cả phần tử thuộc mảng phải thỏa mản 1 đk gì đó về về booleant
// var isFree = course.every(function (course, index) {
//   console.log(index);
//   return course.coin === 0;
// });
// console.log(isFree);

// =========================================
// some(): chỉ cần 1 phần tử trong mảng thỏa mản điều kiện trả về true
// var isFree = courses.some(function (course,index) {
// console.log(index);
//   return course.coin === 0;
// });
// console.log(isFree);

// =========================================
//find(): Tìm kiếm trong arr nếu có trả về phần tử của mảng và dừng lại không kiểm tra phantu còn lại, nếu không có trả về undefined
// var course = courses.find(function (course, index) {
//   return course.name ===  "ReactJs";
// });
// console.log(course);

// =========================================
// filter(): cũng khá giống find nhưng trả về hết những phần tử trong mảng nếu không có trả indefined
// var listCourses = courses.filter(function (course, index) {
//   return course.name === "ReactJs";
// });
// console.log(listCourses);

// =====================================================
// Bài tập:Để vượt qua thử thách này, hãy tạo hàm getMostFavoriteSport có 1 tham số (F8 sẽ gọi hàm này và luôn truyền đối số là 1 array). Hàm getMostFavoriteSport sẽ trả về các môn thể thao có điểm số yêu thích lớn hơn 5.
// const sports = [
//   {
//     name: "Bóng rổ",
//     like: 6,
//   },
//   {
//     name: "Bơi lội",
//     like: 5,
//   },
//   {
//     name: "Bóng đá",
//     like: 10,
//   },
// ];
// function getMostFavoriteSport(sports) {
//   return sports.filter(function (sports, index) {
// return sports.like > 5;
//   });
// }
//// Kỳ vọng
// console.log(getMostFavoriteSport(sports));
// Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]

// =========================================
//Map(): Tạo ra 1 mảng mới có giá trị bằng mảng cũ
// const sports = [
//   {
//     id: 1,
//     name: "ReactJs",
//     coin: 15,
//   },
//   {
//     id: 2,
//     name: "NodeJs",
//     coin: 15,
//   },
//   {
//     id: 3,
//     name: "JavaScript",
//     coin: 20,
//   },
//   {
//     id: 4,
//     name: "HTML,CSS",
//     coin: 20,
//   },
//   {
//     id: 5,
//     name: "Angular",
//     coin: 25,
//   },
// ];
// var newCourses = sports.map(function (sports, index) {
//   return {
//     id: sports.id,
//     name: `Khóa Học: ${sports.name}`,
//     coin: sports.coin,
//     coiText: `Giá: ${sports.coin}`,
//   };
// });
// console.log(newCourses);
// =========================================
// reduce():
const sports = [
  {
    id: 1,
    name: "ReactJs",
    coin: 200,
  },
  {
    id: 2,
    name: "NodeJs",
    coin: 150,
  },
  {
    id: 3,
    name: "JavaScript",
    coin: 250,
  },
  {
    id: 4,
    name: "HTML,CSS",
    coin: 250,
  },
  {
    id: 5,
    name: "Angular",
    coin: 250,
  },
];
// accumulator: biến lưu trữ
// currentValue: giá trị hiện tại
// currentIndex: trả về index
// originArray: 

// cach 1
var totalCoin = sports.reduce(function(accumulator,currentValue){
    return accumulator + currentValue.coin;
},0)
console.log(totalCoin);
// ---------------------------------
// cach 2:
//dùng vòng lặp cơ bản để tính tỗng coin trong array
// var allcoin = 0;
// function addCoin(sports) {
//     for (var i = 0; i < sports.length; i++) {
//         allcoin += sports[i].coin;
//     }
//     return allcoin;
// }
// console.log("Tổng số coin Trong Arr:",addCoin(sports));
// =========================================
// =========================================
// =========================================
// =========================================
