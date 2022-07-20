function f1()
			{
				var usname=document.form1.uname.value;
				var pass=document.form1.pass.value;
				var repass=document.form1.repass.value;
				var unpattern="[A-Za-z0-9/s]{5,8}";
				var epattern="[A-Za-z0-9_$&-.]{1,20}[@]{1}[a-z]{3,6}[.]{1}[com]{3}";
				var pspattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}";
				if(usname!=""||pass!="")
				{
					if(!usname.match(unpattern))
					{
						alert("Username Should Not Be Less Than 5 And Greater Than 8");
						alert("Invalid Username");
					}
					else if(!name2.match(n2pattern))
					{
						alert("Enter Valid Last Name");
					}
					else if(!pass.match(pspattern))
					{
						alert("Must contain at least one number and one uppercase and lowercase letter,and at least 6-10 characters");
						alert("Invalid Password");
					}
					else
					{
						alert("Logged in Successfully");
					}
				}
			}