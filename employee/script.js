// using constructor function

function Employee(id,name,role,experience,payout){
    {
      this.id = id;
      this.name = name;
      this.role = role;
      this.experience =experience;
      this.payout = payout;
    };}
    let employee1 = new Employee("C102","nila", "Junior Web Developer",
      "1 Year","20000");
      console.log(employee1);
      let employee2 = new Employee("C103",
      "Radhika ","Front End Developer",
      "3 Years","30000");
      console.log(employee2)

    


const employees = [
  {
    id: "C101",
    name: "Varun",
    role: "Junior Web Developer",
    experience: "2 Years",
    payout: "25000",
  },
  {
    id: "C102",
    name: "Srinika",
    role: "Junior Web Developer",
    experience: "1 Year",
    payout: "20000",
  },
  {
    id: "C103",
    name: "Rakshitha",
    role: "Front End Developer",
    experience: "3 Years",
    payout: "30000",
  },
  {
    id: "C104",
    name: "Hema",
    role: "Junior Web Developer",
    experience: "3 Years",
    payout: "25000",
  },
  {
    id: "C105",
    name: "Deepak",
    role: "Front End Developer",
    experience: "4 Years",
    payout: "35000",
  },
  {
    id: "C106",
    name: "Sakthi",
    role: "Back End Developer",
    experience: "2 Years",
    payout: "30000",
  },
  {
    id: "C107",
    name: "Dakshan",
    role: "Senior Front End Developer",
    experience: "5 Years",
    payout: "45000",
  },
  {
    id: "C108",
    name: "Ananth",
    role: "BDE",
    experience: "2 Years",
    payout: "20000",
  },
  {
    id: "C109",
    name: "Sharaddha",
    role: "Business Associate",
    experience: "1 Year",
    payout: "15000",
  },
  {
    id: "C110",
    name: "Dinesh",
    role: "Tech Lead",
    experience: "4 Years",
    payout: "65000",
  },
];

/*using push method*/ 

const employeeData = [];

for (let i = 0; i < employees.length; i++) {

  employeeData.push(employees[i].name); 
  
}
console.log(" employeeData");


// to display employees detail in a table

 console.table(employees)

console.log("id\tname\trole\texperience\tpayout");
employees.forEach(employee => {
  console.log(`t${employee.id}\t${employee.name}\t${employee.role} \t${employee.experience}\t${employee.payout}`)
})


// to display employees who are working as a junior web developer

const juniorEmployees = employees.filter ( employees => {
  return employees.role === "Junior Web Developer"

})

console.log(juniorEmployees);

// total count of junior web developer

const totalJunior = juniorEmployees.length
console.log(`Total employees working as junior web developer : ${totalJunior}`)




// TO display Employee name and role whose salary range is from 25000 to 35000

const payout = employees.filter (employees => {
  return employees.payout >= 25000 && employees.payout <=35000;
})

console.log(payout)

payout.forEach (employees =>{
  console.log(`employee name : ${employees.name}, role : ${employees.role}`)

}) 

// to display senior employee detail

const senior = employees.filter (employees => {
  return employees.role === "Senior Front End Developer" 

} )
console.log(senior)