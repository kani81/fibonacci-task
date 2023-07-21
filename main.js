
var a=0, b=1;
var c;
var n=prompt("enter the value");
document.write(a+""+b);
for(let i=1; i<=n; i++){
			c=a+b;
			a=b;
			b=c;

			document.write(""+c);
}
