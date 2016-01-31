//output method - modify to your needs
var out=x=>o.innerHTML+=x;
//clearing output - modify to your needs
var clrout=x=>o.innerHTML='';

//interpreter
var nonsense=(c,i, $,s={0:0}/*stack*/,p=0/*stack pointer*/,cp=0/*code pointer*/,ip=0/*input pointer*/)=>{
	clrout();
	console.clear();
	
	//looping over code
	for(c=c.split` `.map(x=>x.replace(/\\s/g,' ')),i=[...i];cp<c.length;cp++){
		$=c[cp][0];
		
		//push input char to stack at pointer
		if($=='i')s[p]=i[0]?i.shift().charCodeAt():0;
		
		//output number at pointer
		if($=='o')out(s[p]);
		//output byte at pointer
		if($=='p')out(String.fromCharCode(s[p]));
		
		//increment/decrement number at pointer
		if($=='a')s[p]++;
		if($=='s')s[p]--;
		
		//move pointer to left/right
		if($=='l')s[--p]=s[p]||0;
		if($=='r')s[++p]=s[p]||0;
		
		//move pointer to nth item in stack
		if($=='n')s[p=c[cp].charCodeAt(1)]=s[p]||0;
		
		//looping using goto [command index (1-based)]
		if($=='g')cp=c[cp].charCodeAt(1)-2;
		if($=='h'&&s[p])cp=c[cp].charCodeAt(1)-2;
		
		//push charcode after 'c' to stack at pointer
		if($=='c')s[p]=c[cp].charCodeAt(1);
		
		//set pointer value to index at stack
		if($=='x')s[p]=p+1;
		
		//stack for debugging
		console.log(c,i,$,s,p,cp);
	}
}