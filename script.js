


fetch('file.json').then(res => res.json()).then(data => {
    document.writeln("<h3>Data from json file: </h3>");
   document.writeln("name: "+ data.name + "<br>");
   document.writeln("age: "+ data.age + "<br>");
   document.writeln("height: "+ data.height);

})


