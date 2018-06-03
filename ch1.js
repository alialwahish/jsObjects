let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

function printCoh(arr){
    for (var i=0 ;i<arr.length;i++){
        console.log("Name: "+arr[i].name+", Cohort:"+arr[i].cohort)
    }
}
printCoh(students);


let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

function secPrint(users){
    
    for(var user in users){
    
        console.log(user+":")

        for(var us in users[user]){
            var fname=Number(users[user][us].first_name.length)
            var lname=Number(users[user][us].last_name.length)
            console.log(Number(us)+1+" - First Name: "+users[user][us].first_name+"Last Name: "+users[user][us].last_name+" - "+Number(fname+lname))
        }

    }
}
secPrint(users)


