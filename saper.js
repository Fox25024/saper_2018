var x;
var y=1;
var f=0;
var mina=[10];
var t;
var cyf=0;
function rys()
{
	f=0;
	y=1;
	for(i=1; i<=10; i++)
	{
		x=document.getElementById("main").innerHTML
		document.getElementById('main').innerHTML=x+"<div id='p"+i+"'></div>";
		for(j=0; j<10; j++)
		{
			x=document.getElementById('p'+i).innerHTML
			document.getElementById('p'+i).innerHTML=x+"<div onclick='klik("+y+")' oncontextmenu='flaga("+y+")' contextmenu='' class='lef' id='pole"+y+"'><img src='pole.png' /></div>";
			y++;
		}
		x=document.getElementById("p"+i).innerHTML
		document.getElementById('p'+i).innerHTML=x+"<div class='czys'</div>"
	}
	
	//document.getElementById("main").innerHTML="<img src='pole.png' />"
}
var b;
function flaga(q)
{
	b=event.button;
	if(x==2) alert("ratuj")
	
}

function spr(o)
{
	ss=1;
	sp=0;
	for(i=0; i<9; i++)
	{
		for(j=ss; j<10; j++)
		{
			if(mina[i]==mina[j])
			{
				first(o);
			}
		}
		ss++;
	}
}
function first(o)
{
	for(i=0; i<10; i++)
	{
		mina[i]=Math.floor((Math.random() * 100) + 1);
	}
	spr(o)
	klik(o);
}
function end()
{
	for(i=0; i<10; i++)
	{
		document.getElementById("pole"+mina[i]).innerHTML="<img src='mina.png'/>";		
	}
	
}

function inne(d)
{
	for(i=0; i<10; i++)
	{
		if((d==1)||(d==21)||(d==31)||(d==41)||(d==51)||(d==61)||(d==71)||(d==81)||(d==11)||(d==91))
		{
			if(d+1==mina[i]) cyf++;
			if(d-10==mina[i]) cyf++;	
			if(d+10==mina[i]) cyf++;
			if(d+11==mina[i]) cyf++;
			if(d-9==mina[i]) cyf++;
		}
		else if((d==10)||(d==20)||(d==30)||(d==40)||(d==50)||(d==60)||(d==70)||(d==80)||(d==90)||(d==100))
		{
			if(d-1==mina[i]) cyf++;
			if(d-10==mina[i]) cyf++;	
			if(d+10==mina[i]) cyf++;
			if(d+9==mina[i]) cyf++;
			if(d-11==mina[i]) cyf++;
		}
		else
		{
			if(d-1==mina[i]) cyf++;
			if(d+1==mina[i]) cyf++;
			if(d-10==mina[i]) cyf++;	
			if(d+10==mina[i]) cyf++;
			if(d+9==mina[i]) cyf++;
			if(d+11==mina[i]) cyf++;
			if(d-9==mina[i]) cyf++;
			if(d-11==mina[i]) cyf++;
		}		
	}	
	if(cyf==0)document.getElementById("pole"+d).innerHTML="<img src='puste.png' />"
	else if(cyf==1)document.getElementById("pole"+d).innerHTML="<img src='1.png' />"
	else if(cyf==2)document.getElementById("pole"+d).innerHTML="<img src='2.png' />"
	else if(cyf==3)document.getElementById("pole"+d).innerHTML="<img src='3.png' />"
	else if(cyf==4)document.getElementById("pole"+d).innerHTML="<img src='4.png' />"
	cyf=0;	
}	
function klik(d)
{
	if(f==0)
	{
		f++;
		first(d);
	}
	else
	{
		t=document.getElementById("pole"+d);
		var czy=0;
		for(i=0; i<10; i++)
		{
			if(d==mina[i])
			{
				end();
				czy++;
			}
		}
		if(czy==0)
		{
			inne(d)	
		}	
	}
}