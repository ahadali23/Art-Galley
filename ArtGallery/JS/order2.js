function f9()
			{
				var on=document.getElementById("online");
				var on1=document.getElementById("on2");
				var on2=document.getElementById("on3");
				var type1=document.getElementById("pmt1");
				var type2=document.getElementById("pmt2");
				var tel=document.getElementById("z1"); 
				var tel2=document.getElementById("z2"); 
				var tel3=document.getElementById("z3"); 
				var tel4=document.getElementById("z4"); 
				if(type2.checked == true)
				{
					on.style.display="block";
					on1.style.display="block";
					on2.style.display="block";
					document.getElementById("pmt1").required=false;
				}
				else
				{
					on.style.display="none";
					on1.style.display="none";
					on2.style.display="none";
					document.getElementById("pmt1").required=true;
					tel.removeAttribute("required");
					tel2.removeAttribute("required");
					tel3.removeAttribute("required");
					tel4.removeAttribute("required");
				}
				if(type1.checked == true)
				{
					on.style.display="none";
					on1.style.display="none";
					on2.style.display="none";
					document.getElementById("pmt2").required=false;
					tel.removeAttribute("required");
					tel2.removeAttribute("required");
					tel3.removeAttribute("required");
					tel4.removeAttribute("required");
				}
				else
				{
					on.style.display="block";
					on1.style.display="block";
					on2.style.display="block";
					document.getElementById("pmt2").required=true;
				}
				var cname=document.form3.cname.value;
				var credit=document.form3.ccnum.value;
				var cvv=document.form3.cvv.value;
				var cpattern="[A-Za-z/s]";
				var ccpattern="[0-9]{16,19}";
				var cvpattern="[0-9]{3,4}";
				if(type2.checked == true)
				{
					if(cname!=""||credit!=""||cvv!="")
					{
						if(!cname.match(cpattern))
						{
							alert("Invalid Name");
						}
						else if(!credit.match(ccpattern))
						{
							alert("Invalid Credit Card Number");
						}
						else if(!cvv.match(cvpattern))
						{
							alert("Invalid Card Verification Value");
						}
					}
				}
			}