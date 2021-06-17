let my_data = [
   {
      "name":"Abhishek",
      "dependants":[
         {
            "dName":"Ravi"
         }
      ]
   },
   {
      "name":"Aman",
      "dependants":[
         {
            "dName":"Ajay"
         },
         {
            "dName":"Akshay"
         }
      ]
   }
];
let final_sum = 0;
let single_sum = 0;

console.log("before entering any data :-",single_sum);
console.log("before entering any data :-",final_sum);

if(my_data.length)
{
  for(let i in my_data)
  {
    let n = 0;
    let x = 500;
    let m = 1000;
    let matching_dnames = 0;
    n = my_data[i].dependants.length;
    my_data[i].dependants.map((ele, index)=>{
      if(ele.dName.match(/A/))
        matching_dnames += 1;
    })
   
    if(my_data[i].name.match(/A/))
      m = m - (10/100 * m);
    console.log("m", m);
    console.log("X", x);
    //console.log("BASIC", 2000*26);
    console.log("MATCHING NAMES", matching_dnames);
    console.log("MATCHING NAMES with 10 dName%", (matching_dnames * (10/100 * x)));
    console.log("MATCHING NAMES with 10 dName% for 1 ", (10/100 * x));
   console.log("FINAL VAL", (n * x) - (matching_dnames * (10/100 * x)));
   console.log("TOTAL VAL", (2000*26) - (m + ((n * x)) - (matching_dnames *(10/100 * x))));
    x = m + ((n * x) - (matching_dnames * (10/100 * x)));
    single_sum = (2000*26) - x;
    final_sum += single_sum;
  }
}

console.log("TOTAL PEOPLE :- ", my_data.length);
console.log("FINAL SUM:- ", final_sum);
