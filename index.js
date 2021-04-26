// const fs = require("fs"); 
// var PdfReader = require("pdfreader").PdfReader,result = [];
// new PdfReader().parseFileItems("7th_2016.pdf", function(err, item){

  
//   if (item && item.text){
//    var data= item && item.text
//    var dataArr = data.replace(/[a-z]/).split(/{| }/);  
//   //  var final = dataArr.replace(/(a|z)/,"")
//    console.log(dataArr)
//    for(var i in dataArr) result.push({dataArr: i, count: dataArr[i]})


// var ttt =[]

// for(let i=0;i<dataArr.length;i++){
//     let obj={key:"",value:""}
    
//     if(i%2==0){
//         obj.key = dataArr[i]
//         obj.value = dataArr[i+1]
//         ttt.push(obj)
//     }
    
// }
//    console.log(ttt)
   

//   }
 
   
   
    

// });






const fs = require('fs')
const pdfparse = require('pdf-parse')
  
var roll = "982247"

var sem = "6"

var year ="2019" 
var fname=sem+year

const pdffile = fs.readFileSync(fname+'.pdf')

pdfparse(pdffile)
.then((data)=>{

  var extractdata= data.text
 
 var pross = extractdata.replace('}','} ',extractdata);
 var pross = extractdata.replace('{','{ ',extractdata);
 var result = pross.split(roll)

        if(result.length>=1){

          var data = result[1].split(')',result[1].length)
          
          
          var sdata = data[0]
          console.log(data[0]);
          

       
          // }else{

          //   var data = result[1].split('{',result[1].length)

          //   var final = data.substr(0,-7)
            
          //   console.log(final.replace('}','',final))

          // }

        } if(sdata.length>=11){

          console.log(sdata.length);
          var final = result[1].split('}',result[1].length)

          // var dfinal = final[1].replace('}','')

          // var ttt = dfinal.split

          console.log(final[6].length)
          console.log(final[6])
        }


        })
        .catch((err)=>{
          console.log(err)})


          