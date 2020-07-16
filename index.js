function c(val)
{
document.getElementById("field").value=val;
}
function v(val)
{
document.getElementById("field").value+=val;
}
function e() 
{ 
try 
{ 
  c(eval(document.getElementById("field").value)) 
} 
catch(e) 
{
  c('Error') 
} 
}
