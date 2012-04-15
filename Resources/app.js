// TitaniumBunker Jquery GUI / BL

var db;	// Database of episodes.
var DB_NAME = 'episodes.db'

$(document).ready(function() {
try
{
	//alert(Titanium.Filesystem.getFile(Titanium.Filesystem.applicationSupportDirectory+'/database', 'episodes.sql'));
	//db = Titanium.Database.open('episodes.db');
	$("#status").html("Opening Database : "+DB_NAME);
	//Replace the first line of code from the snippet above with the following:
	var filesPath = Titanium.API.Application.getResourcesPath() + Titanium.Filesystem.getSeparator();
	//
	//Titanium.API.Application.getResourcesPath() points to the 'Resources' subdirectory of the application contents directory.
	//You may also want to add your videos directory to the path.
	db = Titanium.Database.openFile(filesPath+"episodes.db");
	//alert ("Titanium.Database.DB.getPath " + db.getPath());
 	var rows = db.execute('SELECT * FROM Actor');
//alert("Here OK");

	while(rows.isValidRow()) 
	{
		//alert("An actor");
		//Titanium.API.debug("-- PROCESSING RECORDS --");
		for( variable = 0; variable <= rows.fieldCount()-1; variable = variable + 1) 
		{
			
			//alert("Field " + rows.fieldName(variable) + " = " + rows.field(variable, Titanium.Database.FIELD_TYPE_STRING));
		}
		rows.next();
	}
	//	Titanium.API.debug("-- CLOSING ROWSET --");
	rows.close();
	Titanium.API.debug("-- Counting ACTORS    --");
	Titanium.API.debug("-- EXECUTION COMPLETE --");
}
catch(err)
{
	txt="There was an error on this page.\n\n";
	txt+="Error description: " + err.message + "\n\n";
	txt+="Click OK to continue.\n\n";
	alert(txt);
	Titanium.API.debug(txt);
}
	//while(rows.isValidRow()) {
	//	rows.fieldCount
	//	Titanium.API.debug("-- PROCESSING RECORDS --");
	//
	//	for( variable = 0; variable <= rows.fieldCount; variable = variable + 1) {
		//	Titanium.API.debug("Field " + rows.fieldName + " = " + rows.field(variable, Titanium.Database.FIELD_TYPE_STRING))

//		}
//
//		rows.next();
//	}
//	Titanium.API.debug("-- CLOSING ROWSET --");
//	rows.close();
//	;

	
	
});




