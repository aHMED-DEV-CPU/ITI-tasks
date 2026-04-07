use Company_SD

--1 	Display the Department id, name and id and the name of its manager.
SELECT D.Dname  , D.Dnum , E.SSN , E.Fname + ' ' + E.Lname as Full_name
FROM  Departments D INNER JOIN  Employee E
ON D.MGRSSN = E.SSN 

--2	Display the name of the departments and the name of the projects under its control.
SELECT D.Dname , P.Pname
FROM Departments D Inner Join Project P
ON D.Dnum = P.Dnum

--3.	Display the full data about all the dependence associated with the name of the employee they depend on him/her.
Select D.* , E.Fname + ' ' + E.Lname AS Employee_name
From Dependent D Inner Join Employee E
ON D.Essn = E.ssn 

-- 4.	Display the Id, name and location of the projects in Cairo or Alex city.
Select Pnumber ,  Pname , Plocation
From Project 
where city IN('Alex' , 'Cairo')
-- 5.	Display the Projects full data of the projects with a name starts with "a" letter.
 Select * 
 From Project
 where Pname Like 'a%'
 -- 6.	display all the employees in department 30 whose salary from 1000 to 2000 LE monthly
 Select * 
 from Employee
 Where Dno = 30 And Salary Between 1000 AND 2000
 --7.	Retrieve the names of all employees in department 10 who works more than or equal10 hours per week on "AL Rabwah" project.
 Select E.Fname + ' ' + E.Lname AS Employee_name
 from Employee E Inner Join Works_for W
 On E.ssn = W.ESSn
  Inner join  Project P 
 ON W.Pno = p.Pnumber
 where w.Hours >=  10  AND  P.Pname = 'Al Rabwah'  AND E.Dno = 10

 -- 8.	Find the names of the employees who directly supervised with Kamel Mohamed.
 Select F.Fname + ' ' + F.Lname AS Employee_name
 from Employee F  Inner Join  Employee E
 ON F.Superssn = E.SSN
 where E.Fname + ' ' + E.Lname =  'Kamel Mohamed'
  -- 9.	Retrieve the names of all employees and the names of the projects they are working on, sorted by the project name.
  Select E.Fname + ' ' + E.Lname AS Employee_name , P.Pname
 from Employee E Inner Join Works_for W
 On E.ssn = W.ESSn
  Inner join  Project P 
 ON W.Pno = p.Pnumber
 order by P.Pname

 -- 10.	For each project located in Cairo City , find the project number, the controlling department name ,the department manager last name ,address and birthdate.
 Select P.Pnumber , D.Dname , E.Lname , E.address , E.Bdate
 From Project P Inner Join Departments D 
 On P.Dnum = D.Dnum
 Inner Join Employee E
 On D.MGRSSN = E.SSN
 where P.City = 'Cairo'

 -- 11.	Display All Data of the managers
  Select E.*
 from Employee E  Inner Join  Employee F
 ON F.Superssn = E.SSN

 --12 Display All Employees data and the data of their dependents even if they have no dependents
 Select E.* ,  D.*
 From Employee E Right Outer Join Dependent D
 On E.SSN  = D.ESSN
 --13 	Insert your personal data to the employee table as a new employee in department number 30, SSN = 102672, Superssn = 112233, salary=3000.
 Insert into Employee(Dno , SSN , Superssn , Salary)
 Values (30 ,102672 ,  112233 , 3000)

 -- 14.	Insert another employee with personal data your friend as new employee in department number 30, SSN = 102660, but don’t enter any value for salary or supervisor number to him.
  Insert into Employee(Dno , SSN )
 Values (30 ,102660 )

 --15 15.	Upgrade your salary by 20 % of its last value.
 Update Employee
 Set Salary =  Salary * (1.20)
 where SSN = 102672