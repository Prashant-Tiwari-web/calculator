		
//standard calculator
		function pushBtn(obj){
			var inputlabel = document.getElementById('inputlabel');
			var pushed = obj.innerHTML;
			if(pushed== '='){
				inputlabel.innerHTML = eval(inputlabel.innerHTML);
			}
			else if(pushed == 'All Clear'){
				inputlabel.innerHTML = '0';
			}else{
				if(inputlabel.innerHTML == '0'){
					inputlabel.innerHTML = pushed;
				}else{
					inputlabel.innerHTML += pushed;

				}
			}
		}

//sip calculator
		function futurevalue(){
			var p,r,n,i,fv,invested,ret;
			p = document.getElementById('amount').value;
			n = document.getElementById('months').value;
			invested = p*n;
			r = document.getElementById('interest').value;
			i = (r/100)/12; 
		    x = Math.pow((1+i),n);
            fv= p*((x-1)/i)*(1+i);
            ret = fv-invested;
            document.getElementById('invested').innerHTML ="Total Invested Amount: " + invested + " Rs. <br>";
            document.getElementById('return').innerHTML ="Expected Return : " + Math.round(ret)  + " Rs.<br>";
            document.getElementById('fvalue').innerHTML ="Future value : " + Math.round(fv) + " Rs." ;
           
		}
//emi calculator
		function emi(){
			var amount, ir, tenure, e, y;
			amount = document.getElementById('loan-amount').value;
			tenure = document.getElementById('tenure').value;
			ir = document.getElementById('interest-rate').value;
			var mt = tenure*12;
			var mir = ir/1200;
			var y = Math.pow((1+mir),mt);
			e = ((amount*mir)*(y/(y-1)));
			document.getElementById('monthly-emi').innerHTML ="Your EMI : " + Math.round(e) + " Rs./month <br>";
			document.getElementById('payable-emi').innerHTML ="Total Payable : " + Math.round(e*mt) + " Rs.<br>";
			
		}
//fd calculator
		function fd(){
			var fd,a,rate,t;
			 a = document.getElementById('deposit').value;
			 rate = document.getElementById('fd-interest').value;
			 t = document.getElementById('year').value;
			fd = (a*rate*t)/100;
			document.getElementById('interest-earn').innerHTML ="Interest Earn : " + fd + " Rs. <br>";
		}
		
