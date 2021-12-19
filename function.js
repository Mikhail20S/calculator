function calculator(val)
{
    document.getElementById("d").value=val;
}
    function value(val)
{
    document.getElementById("d").value+=val;
}
    function e()
{
    try
{
    calculator(eval(document.getElementById("d").value))
}
    catch(e)
{
    calculator('Error')
}
}