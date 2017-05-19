app.config(["AppName", "AppVersion",function(AppName,AppVersion)

{
	console.log("this is config: "+AppName);
	console.log("this is config:"+AppVersion)
}])
app.run(["AppName",function(AppName)

{
	console.log("this is config:"+AppName)
}])

app.factory("CustomFactory",function()
{
	return "this is my fac"
})
app.constant("AppName","Angular service");
