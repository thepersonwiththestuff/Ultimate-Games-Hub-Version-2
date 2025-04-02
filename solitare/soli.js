var hit=29; var cflag=0; var tsh=0;
var cards = [52];

var column1=[];var column2=[];var column3=[];var column4=[];var column5=[];var column6=[];var column7=[];var column8=[];var column9=[];var column10=[];var column11=[];var column12=[];var column13=[];
var movescount;
 var reset=0;
var cheats=0;
var userscore;

// The Cheat-Code Changer
function  cheatschange()
{
    
    cheats == 0 ? cheats=1:(cheats == 1 ? cheats=0:0);
    
}
//Creating the Card Object 
function Card(v,s,c,f)
{
	 this.value=v;
		this.color=c;
		this.suit=s;
		this.filename=f+v+c+s+".png";
	this.status=false;

}

//Initialization of the Game
function initGame()
{
        document.getElementById("cheatbox").checked = false;
        userscore=0;font=1;
        
		document.getElementById("Options").style.opacity="1";
	 putDeckImageondiv12(); 
		movescount=0;
    if(reset==0)
    {
        
        if(cheats==0) {
		for(i=1;i<=13;i++)
{
		cards[i]=new Card(i,"d","r","./cards/");
		cards[i+13]=new Card(i,"f","b","./cards/");   
		cards[i+26]=new Card(i,"s","b","./cards/");
		cards[i+39]=new Card(i,"h","r","./cards/");
		
}
    }
		for (i=0;i<20000;i++)
		{
		   shuffle(cards,52,1);
		}
        reset=1;
        }
    
    
		 initilizestacks();
		RenderMySolitaire(0);
        cardputdown();
        
}

//Powerful Rendering Function Of The game
function RenderMySolitaire(toggle) {

		if(toggle==1)
		{
		renderopencardsstackontop();   //Render only OpenCards in Left Conner

		}
		
		if(toggle==0)
		{
		renderrestallstacks();   //Render Rest all Divs
			toggle=2;
		}
		if(column8.length==13&&column9.length==13&&column10.length==13&&column11.length==13)
		{
                callgamewinfunction();   
		}
            
    
		document.getElementById("movestrack").innerHTML="Moves:  "+movescount;
        if(cheats==0)
        {
            document.getElementById("scoretrack").innerHTML="Score: "+userscore;
        }
        else
        { 
            document.getElementById("scoretrack").innerHTML="Score: "+userscore + "(-5)";
        }
    
}



//on start of Sliding ANimitaion of Draw Pile
function sidestart(){
    
    column13.push(column12.pop())  ;
    
      }


//on end of Sliding ANimitaion of Draw Pile
function sideend(){
    
    RenderMySolitaire(1);
     document.getElementById("row12").removeChild(document.getElementById("sliderimage"));
    if(column12.length==0)
				{  
	               dex.style.display="none";
					document.getElementById("row12").style.cursor="pointer";

				}
    }



//ANimation for On CLick Of DrawPile and Rendering of On CLick Cards
function shiftcard (event) { 
		clickedelementClassName=event.currentTarget.className;
		var dex = document.getElementById("dex");
var imger = document.getElementById("row13");
		
		 if(clickedelementClassName=="topcardbox")
		{
		      event.stopPropagation();
                if(column12.length==0)
				{  
	               dex.style.display="none";
					document.getElementById("row12").style.cursor="pointer";

				}
            else
                {
                       var img = document.createElement('IMG');
                        img.setAttribute("class","topcardbox");
                        img.setAttribute("src",column12[column12.length-1].filename);
                        img.setAttribute("id","sliderimage");
                        img.style.position="fixed"; 
                        img.style.top="80px";
                        img.style.zIndex="78";
                        img.style.WebkitAnimation = "shiftside 0.2s 1";
                        img.addEventListener("webkitAnimationStart", sidestart);
                        img.addEventListener("webkitAnimationEnd", sideend);
                        document.getElementById("row12").appendChild(img);
           
                }
				
		}
		 

		else if (clickedelementClassName=="cardholder" && column12.length==0)
		{
		
var limit= column13.length;
	for(ps=0;ps<limit;ps++)
			
	{  
                     column12.push( column13.pop());
	}
				document.getElementById("row12").style.cursor="initial";
            
				if(column12.length !=0) dex.style.display="block";
            
				imger.innerHTML="";

		      }

}

//Putting The Deck Image on DrawPile
function putDeckImageondiv12()
{
		 document.getElementById("clicker").innerHTML="";
		var wow = document.createElement("img");                     
		wow.setAttribute("class", "topcardbox");
		wow.style.cursor= "pointer";
        wow.setAttribute("id", "dex");  
		 wow.setAttribute("src", "deck4.jpg");
		wow.setAttribute("onclick", "shiftcard(event)");
		 wow.setAttribute("draggable", "false");
				                         
        document.getElementById("row12").appendChild(wow);

	 
}
var  font=1;



//ANimation For On-Load Animation of Last Cards 
function cardputdown() {
           
     font >1 ? document.getElementById("row12").removeChild(document.getElementById("fallerimage"+(font-1)+"")) : 0;
            if(font<=7)
            {
                       var img = document.createElement('IMG');
                        img.setAttribute("class","topcardbox");
                        img.setAttribute("src",window['column'+font+''][window['column'+font+''].length-1].filename);
                        img.setAttribute("id","fallerimage"+font+"");
                        
                        img.style.position="fixed"; 
                        img.style.left="300px";
                        img.style.zIndex="78";
                        img.style.WebkitAnimation = "carddown"+font+" 0.1s 1";
                        
                        img.addEventListener("webkitAnimationEnd", carddownEND);
                        document.getElementById("row12").appendChild(img);
                
               
                font++;
            }
    
            else { 
                       font--;
                return;
                   
                 
                 }
}



var flag=0;


//ANimation For On-Load Animation of Last Cards 
function carddownEND(){
    
        cardputdown();
    
    
     if (font >1)
     {
         
          window['column'+(font-2)+''][window['column'+(font-2)+''].length-1].status=true;
          flag++;
         
          
     }
       if ( flag==7&& font==7)
      {
           window['column'+7+''][window['column'+7+''].length-1].status=true;
      }
    
         RenderMySolitaire(0);
        
     
}

//Initializin the Stacks In Game
function initilizestacks()
{
		var j=0;
		 for(i=1;i<=7;i++)
		 {
             for(m=0;m<i;m++)
             {
             
                            ++j;
                      window['column'+i+''].push(cards[j]);
			            
             
             }
             
         }
		     
    
	       for(f=0;f<24;f++) 
        column12[f] = cards[29+f];
}

//Rendering Open Stack Waste Pile
function renderopencardsstackontop()
{
		var imger = document.getElementById("row13"); 
		imger.innerHTML="";
			
		for(ps=0;ps<column13.length;ps++)
	{
			var wow = document.createElement("img");
				wow.value=column13[ps].value;
				wow.color=column13[ps].color;
				wow.src=column13[ps].filename;
				wow.suit=column13[ps].suit;
				wow.id=column13[ps].value+column13[ps].suit;
				column13[ps].status=true;
				wow.status=true;
    wow.setAttribute("class", "topcardbox");
    wow.setAttribute("draggable","true");
    wow.setAttribute("ondragstart","drag(event)");
			
				wow.setAttribute("style", "position:absolute;margin-top:0px;");
				imger.appendChild(wow);
			
	}
}


//Render Function for All stacks Ecept Drawpile and Waste Pile
function renderrestallstacks()
{
    for(i=1;i<=13;i++)
    {
        if(i!=12)  document.getElementById("row"+i).innerHTML=""; 
        
    }
		//Insert Updated Content
		var ch;
		 var sampletemp=[];
		for(gx=1;gx<=13;gx++)
				
		{
                if(gx==12 ) continue;
	var topinc=0;
		var incfac=2;
	sampletemp=[];
            
            ps=window['column'+(gx)+''].length;
            sampletemp=window['column'+(gx)+''];
            tabuelo = document.getElementById("row"+(gx)+"");

			
				
	
		for(ch=0;ch<ps;ch++)
	{
		 
		var wow = document.createElement("img");
				wow.value=sampletemp[ch].value;
				wow.color=sampletemp[ch].color;
			
 
            if(sampletemp[ch].status)
            {  
		          wow.src=sampletemp[ch].filename;wow.status=true;
				    wow.setAttribute("draggable","true");
                    wow.setAttribute("class", "glow");
			}
        
            else  
           {	
                    wow.src="deck4.jpg";wow.setAttribute("class", "topcardbox");
					wow.setAttribute("draggable","false");
                    wow.status=sampletemp[ch].status;
           }
				    wow.suit=sampletemp[ch].suit;
	               wow.id=sampletemp[ch].value+sampletemp[ch].suit;
	               wow.setAttribute("ondragstart","drag(event)");
        
        
                ( gx==13 || gx==11 || gx==8 || gx==9 || gx==10) ?
                    (wow.setAttribute("style", "position:absolute;margin-top:0px;")):            
                    (wow.setAttribute("style", "position:absolute;margin-top:"+topinc+incfac+"px;"));
        
				    tabuelo.appendChild(wow);
                    
			        topinc+=2;
			
	       }
            
		}
		
    
}


//Things to Happen on Game End Function
function  callgamewinfunction()
{
		 
				document.getElementById("clicker").innerHTML="";
				var gamelwondiv =document.createElement('DIV');
  gamelwondiv.setAttribute("style","position:relative;top:150px;width:850px;font-size:500%;color:red; font-weight: bolder;");
		        gamelwondiv.innerHTML="Congratulations You Won the Solitaire";
				gamelwondiv.style.WebkitAnimation = "bounce 20s 1"; // Code for Chrome, Safari and Opera
				document.getElementById("clicker").appendChild(gamelwondiv);
				
				ApplyAnimationtoAll4Divs();
				
				cheats=0;
				reset=0;
                flag=0;
				
}

//Cleaning Up of Stacks and Displaying messeage of Shuffling
function solitairecleanup() {

    
            
				
				for(ter=1;ter<=13;ter++)
				{
					while( window['column'+ter+''].pop())
                    {
                         window['column'+ter+''].pop();
                    }
                    
                }
                    
			
	document.getElementById("row12").innerHTML="";

				RenderMySolitaire(0);
				RenderMySolitaire(1); 
    if(reset==0)
		{
				        var temp = document.createElement('DIV');
		                  temp.setAttribute("id","textshuf");			
						temp.innerHTML="Shuffling is Currently Going On....";						
						document.getElementById("clicker").appendChild(temp); 
				        temp = document.createElement('IMG');
		                  temp.setAttribute("id","ss");
                            temp.setAttribute("src","cards.gif");
								
						document.getElementById("clicker").appendChild(temp);  
            
            
				        doinitialshuffleAnimation();
		}
    
                else{
                        initGame();
                    }

}






//Appling The Spinning Card Animation to All Four Divs On Game WIn
function ApplyAnimationtoAll4Divs() {
		
		if(document.getElementById("row8").childNodes.length >0)
		{  divselectedforanimation = document.getElementById("row8");
		
		divselectedforanimation=divselectedforanimation.childNodes[divselectedforanimation.childNodes.length-1];
		divselectedforanimation.style.WebkitAnimation = "turn 1s 1";
		divselectedforanimation.addEventListener("webkitAnimationStart", dothingsonAnimationStart);
		divselectedforanimation.addEventListener("webkitAnimationEnd", dothigsonAnimationEnd);
		divselectedforanimation = document.getElementById("row9");
		
		divselectedforanimation=divselectedforanimation.childNodes[divselectedforanimation.childNodes.length-1];
		divselectedforanimation.style.WebkitAnimation = "turn 1s 1"; 
		divselectedforanimation = document.getElementById("row10");
		
		divselectedforanimation=divselectedforanimation.childNodes[divselectedforanimation.childNodes.length-1];
		divselectedforanimation.style.WebkitAnimation = "turn 1s 1"; 
		divselectedforanimation = document.getElementById("row11");
		
		divselectedforanimation=divselectedforanimation.childNodes[divselectedforanimation.childNodes.length-1];
		divselectedforanimation.style.WebkitAnimation = "turn 1s 1"; 
	 
		}
    
		else { 
				
	                     document.getElementById("clicker").innerHTML="";
			             solitairecleanup();
				         return;
              }
		
}
		 
function dothingsonAnimationStart() {
    column8.pop();
	column9.pop();
    column10.pop();
	 column11.pop();

}


function dothigsonAnimationEnd() {
		RenderMySolitaire(0);
		ApplyAnimationtoAll4Divs();
}




//The Single Click to Push Cards on Top 4 Winning Condition Divs
function doubleclicked(event)
{
      
		var dest=[];
		var src = [];
        
            src=window['column'+(event.currentTarget.id.substring(3))+''];

		
		if (event.target.value ==1)
		{
				column8.length ==0 ? dest=column8 : ( column9.length ==0 ? dest=column9 : ( column10.length ==0 ? dest=column10 : ( column11.length ==0 ? dest=column11 : 0 )));
				
				dest.push(src.pop());
				 src.length>0 ? src[src.length-1].status=true : 0;
				movescount++;
            if(cheats==1) userscore+=-5;
            if(cheats==0) userscore+=(movescount*2);
		}
		else 
		{
                for(rt=8;rt<=11;rt++)
                {
                    
                    if(window['column'+rt+''].length>0 && event.target.suit==window['column'+rt+''][window['column'+rt+''].length-1].suit)
                {
                    dest= window['column'+rt+''];
                    break;
                }
                }
            
            

                if( dest.length>0 && event.target.value==(dest[dest.length-1].value +1))
                          {
                                    dest.push(src.pop());

                                    {src.length>0 ? src[src.length-1].status=true : 0;}

                                    movescount++;

                                     if(cheats==1) userscore+=(-5);
                                    if(cheats==0) userscore+=(movescount*2);
                            }
				
		}
		
		
		RenderMySolitaire(0);
		if(event.currentTarget.id == "row13") RenderMySolitaire(1);
}


//The Shufflue cards Function
function shuffle(cardi,max,min) {

		var x = Math.floor((Math.random() * max)+min );
		var y = Math.floor((Math.random() * max)+min );
	 
		var hold;
		hold=cardi[x];
		cardi[x]=cardi[y];
		cardi[y]=hold;
		
}


	






function allowDrop(ev) {
		ev.preventDefault();

}
function dragEnd(event) {
	 RenderMySolitaire(0);
		RenderMySolitaire(1);
}


function drag(ev) {
		
		ev.dataTransfer.effectAllowed = 'move';
		ev.stopPropagation();
	 var dragstartedonimage =ev.target;
		 var divtemp= document.getElementById("divusedforsetDragImage");
		 divtemp.innerHTML="";
		
		while(dragstartedonimage!=null)
				
		{
				dragstartedonimage.setAttribute("class","painted");
				var cln= dragstartedonimage.cloneNode(false);
				cln.style.opacity="1";
				dragstartedonimage.style.opacity="0";
				divtemp.appendChild(cln);
				dragstartedonimage=dragstartedonimage.nextElementSibling; 
		}
				ev.dataTransfer.setDragImage(divtemp,ev.offsetX,ev.offsetY);
		 ev.dataTransfer.setData("text", ev.target.id);
}
		
	 var shfitingstacklength=0;

function cleanupthedragimage(imger,dragstartedonimage)
{
		imger.innerHTML="";
		 while(dragstartedonimage!=null)
				
		{
		 
				dragstartedonimage.style.opacity="1";  
				dragstartedonimage=dragstartedonimage.nextElementSibling; 
		}

}




//To Make a Stack In reverse Order to Help In poping
function insertspinnerStack(FromDivno,ToDivNo,tempStackHolderForValueChecks,tempstackspinner,dropt,liftpt)
{
 
		if ((ToDivNo==8 ||ToDivNo==9 ||ToDivNo==10 ||ToDivNo==11) && tempStackHolderForValueChecks.length==1)
		{
				if((tempStackHolderForValueChecks[tempStackHolderForValueChecks.length-1].value==1 && dropt.length==0 ) ||(dropt.length>0 && dropt[dropt.length-1].value+1==tempStackHolderForValueChecks[tempStackHolderForValueChecks.length-1].value && dropt[dropt.length-1].color==tempStackHolderForValueChecks[tempStackHolderForValueChecks.length-1].color && dropt[dropt.length-1].suit==tempStackHolderForValueChecks[tempStackHolderForValueChecks.length-1].suit) )
		{
		
			tempstackspinner.push(liftpt.pop());
				
		}
				
				}

		else{
						
				if((cheats==1)||((tempStackHolderForValueChecks[tempStackHolderForValueChecks.length-1].value==13 && dropt.length==0 )||(dropt.length>0 && dropt[dropt.length-1].value==tempStackHolderForValueChecks[tempStackHolderForValueChecks.length-1].value+1  && dropt[dropt.length-1].color!=tempStackHolderForValueChecks[tempStackHolderForValueChecks.length-1].color)) )
		{
	for (sm=0;sm<tempStackHolderForValueChecks.length;sm++)
	{
		tempstackspinner.push(liftpt.pop());
        
    }
 
 
 
                      if(ToDivNo!=FromDivno)   

                      {
                           movescount++; 
                          if(cheats==1) userscore+=(-5);
                            if(cheats==0) userscore+=(movescount*2);
                      }
 

        }

        }
						
		return tempstackspinner;
}




function drop(ev) {
			ev.preventDefault();
		var imger=document.getElementById("divusedforsetDragImage");
		var data = ev.dataTransfer.getData("text");
var dragstartedonimage =document.getElementById(data);
		var StackHolderIndex=0;
		var tempStackHolderForValueChecks =[];
		 var liftpt=[];
		var dropt=[];
		var DestinationDiv;
		var ToDivNo;
		 var tempstackspinner=[];  
				cleanupthedragimage(imger,dragstartedonimage);
    
		var FromDivno= document.getElementById(data).parentNode.id.substring(3);
		
		dragstartedonimage =document.getElementById(data);
	 
		 while(dragstartedonimage)
				{
					if(ev.target.nodeName=='DIV') {
					dragstartedonimage=dragstartedonimage.nextElementSibling;            
			DestinationDiv  = ev.target;
		}
		else {
					dragstartedonimage=dragstartedonimage.nextElementSibling;
			DestinationDiv =ev.target.parentNode;
		}
						ToDivNo = DestinationDiv.id.substring(3); 
						
                    
                    
						liftpt=window['column'+FromDivno+''];
						dropt=window['column'+ToDivNo+''];
		tempStackHolderForValueChecks[StackHolderIndex]=liftpt[liftpt.length-1-StackHolderIndex];
						StackHolderIndex++;
						
				}
		
		 tempstackspinner=insertspinnerStack(FromDivno,ToDivNo,tempStackHolderForValueChecks,tempstackspinner,dropt,liftpt);
		
					shfitingstacklength=tempstackspinner.length;  
				if(FromDivno!=ToDivNo)
                {
                    liftpt.length >0  && liftpt[liftpt.length-1].status==false ? liftpt[liftpt.length-1].status=true : 0;
                    
                }
		while(shfitingstacklength!=0)
								{
										dropt.push(tempstackspinner.pop());
										shfitingstacklength--;
								}
 
}



//Reseting the Game To Original State with Same Set Of Cards After Shuffling
function ResetGame()
{

	
		movescount=0;
		userscore=0;
			reset=1;
		font=1; flag=0;
       
    
    for(i=1;i<=13;i++)
        
    {
        for(j=0;j<window['column'+i+''].length;j++)   
        window['column'+i+''][j].status=false;
    }
		solitairecleanup();  
		
			RenderMySolitaire(2);

}



//Doing Starting Game ANimation
function doinitialshuffleAnimation()
{
		
		var x = document.getElementById("textshuf");
		 x.style.WebkitAnimation = "bestit 2.5s 1"; // Code for Chrome, Safari and Opera  
		x.addEventListener("webkitAnimationEnd", initGame);
    document.getElementById("Options").style.opacity="0";
	 
}