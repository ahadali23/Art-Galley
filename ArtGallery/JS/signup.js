function f1()
			{
				var name1=document.form1.fname.value;
				var name2=document.form1.lname.value;
				var usname=document.form1.uname.value;
				var email=document.form1.email.value;
				var pass=document.form1.pass.value;
				var repass=document.form1.repass.value;
				var n1pattern="[A-Za-z/s]{3,10}";
				var n2pattern="[A-Za-z/s]{3,10}";
				var unpattern="[A-Za-z0-9/s]{5,8}";
				var epattern="[A-Za-z0-9_$&-.]{1,20}[@]{1}[a-z]{3,6}[.]{1}[com]{3}";
				var pspattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}";
				if(name1!=""||name2!=""||usname!=""||email!=""||pass!=""||repass!="")
				{
					if(!name1.match(n1pattern))
					{
						alert("Enter Valid First Name");
					}
					else if(!name2.match(n2pattern))
					{
						alert("Enter Valid Last Name");
					}
					else if(!usname.match(unpattern))
					{
						alert("Username Should Not Be Less Than 5 And Greater Than 8");
					}
					else if(!email.match(epattern))
					{
						alert("Enter Valid Email");
					}
					else if(!pass.match(pspattern))
					{
						alert("Enter Valid Password");
						alert("Must contain at least one number and one uppercase and lowercase letter,and at least 6-10 characters");
					}
					else if(!repass.match(pspattern))
					{
						alert("Enter Valid Password");
						alert("Must contain at least one Number and one Uppercase and Lowercase letter,and at least 6-10 characters");
					}
					else if(pass != repass)
					{
						alert("Password Doesn't Match");
					}
					else
					{
						alert("Submitted Successfully");
					}
				}
			}