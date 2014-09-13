
$(function(){
var theText = document.body.innerHTML;
var fso = new ActiveXObject("Scripting.FileSystemObject");
var fh = fso.CreateTextFile("E:\\USER\Mende\Desktop\Test.txt");
// Replace words
theText = theText.replace("мэдээ", "Х");
theText = theText.replace("after", "Daraa");
theText = theText.replace("Mendbayar", "Menduushka");
fh.WriteLine("This is test!");
fh.WriteLine(theText);
fh.Close();

document.body.innerHTML = theText;

}
);
