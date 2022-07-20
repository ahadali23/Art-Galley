function f1()
			{
				var fname=document.form3.fname.value;
				var lname=document.form3.lname.value;
				var numb=document.form3.number.value;
				var email=document.form3.email.value;
				var add1=document.form3.add1.value;
				var add2=document.form3.add2.value;
				var country=document.form3.country.value;
				var state=document.form3.state.value;
				var city=document.form3.city.value;
				var zipcode=document.form3.zip.value;
				var type=document.getElementById("pmt2");
				var npattern="[A-Za-z/s]{3,10}";
				var numpattern="[0]{1}[0-9/s]{10}";
				var adpattern="[A-Za-z0-9/s]";
				var spattern="[A-Za-z/s]";
				var cpattern="[A-Za-z/s]";
				var epattern="[A-Za-z0-9_$&-.]{1,20}[@]{1}[a-z]{3,6}[.]{1}[com]{3}";
				var zpattern="[0-9]";
				if(fname!=""||lname!=""||numb!=""||email!=""||add1!=""||state!=""||city!=""||zipcode!="")
				{
					if(!fname.match(npattern))
					{
						alert("Invalid First Name");
					}
					else if(!lname.match(npattern))
					{
						alert("Invalid Last Name");
					}
					else if(!numb.match(numpattern))
					{
						alert("Invalid Phone Number");
					}
					else if(!zipcode.match(zpattern))
					{
						alert("Invalid ZipCode");
					}
					else if(!email.match(epattern))
					{
						alert("Invalid Email Address");
					}
					else if(!state.match(spattern))
					{
						alert("Invalid State Name");
					}
					else if(!city.match(cpattern))
					{
						alert("Invalid City Name");
					}
					else if(!add1.match(adpattern))
					{
						alert("Invalid Address");
					}
					else
					{
						alert("Submit Successfully");
					}
				}
				var cname=document.form3.cname.value;
				var credit=document.form3.ccnum.value;
				var cvv=document.form3.cvv.value;
				var cpattern="[A-Za-z/s]";
				var ccpattern="[0-9]{16,19}";
				var cvpattern="[0-9]{3,4}";
				if(type1.checked != true)
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