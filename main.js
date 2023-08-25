 in_list=[];

 function submit()

 {
     var name1=document.getElementById("student1").value;
     var name2=document.getElementById("student2").value;
     var name3=document.getElementById("student3").value;
     var name4=document.getElementById("student4").value;


     in_list.push(name1);
     in_list.push(name2);
     in_list.push(name3);
     in_list.push(name4);

     document.getElementById("result").innerHTML=in_list;
     document.getElementById("submitbutton").style.display="none";
     document.getElementById("sortbutton").style.display="inline-block";
 }
   function sort()

   {
    in_list.sort();
    document.getElementById("result").innerHTML=in_list;
   }
