//Methods of Strings

//toString()
var a = "Cats Hate Water";
var b = a.toString();
console.log(b);


//toLocaleUpperCase()
var c = "I Live In Bangalore";
var d = c.toLocaleUpperCase();
console.log(d);


//concat()
var e = " Hai Everyone ";
var f = "Good Morning!";
var res = e.concat(f);
console.log(res);


//replace()
var g = "Apple";
var h= g.replace("Banana", "Kiwi");
console.log(h);


//toLowerCase()
var i = "sanjana";
var j = i.toLowerCase();
console.log(j);



//charAt()
var k = "Zara";
var l = k.charAt(0)
console.log(l);


//split()
var m = "See my new toy train";
var n = m.split(" ");
console.log(n);


//Methods of Array


//sort() 
var o = ["Love mocktail", "Dia", "Lucky", "Kgf"];
o.sort();
console.log(o);


//copyWithin()
var p = ["Sugar", "Tea", "Cofee", "Milk"];
p.copyWithin(2, 0);
console.log(p);


//pop()
var q = ["Delhi", "Bangalore", "Jaipur", "Bihar"]
var s = q.pop();
console.log(s);

//push()
var t = ["Karnataka", "Tamil Nadu", "Kerala", "Maharashtra"];
t.push("Sikkim");
console.log(t);


//join()
var u = ["Bell Bottom", "Rangitaranga", "Kirik Party", "Leader"]
var v = u.join();
console.log(v);

//map()
var x = [144, 169, 196, 225];
var y = x.map(Math.sqrt)
console.log(y);

//concat()
var z= ["Appu", "Abhi", "Arasu"];
var ab = ["Akash", "Milana", "Power"];
var cd = z.concat(ab);
console.log(cd);
