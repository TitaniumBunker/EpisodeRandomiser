// TitaniumBunker Jquery GUI / BL

var db;	// Database of episodes.
var DB_NAME = 'episodes.db'
var DB_PAGE_SIZE=5;

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
	list_episodes(0,0);
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


// Lists all episodes
// - For test purposes will use the actor table.
function list_episodes(page, field, order)
{
	//SELECT * FROM Posts LIMIT 100,x
	//   rc = DB.db.execute(        "INSERT INTO images (title, description) VALUES (?, ?)", 'test', 'a nice description');
	//DB_PAGE_SIZE
	var result ="";
	var rows = db.execute('SELECT * FROM Actor LIMIT ?,?',0,DB_PAGE_SIZE);
	
	result = "<table id=&quot;theTable&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot; class=&quot;sortable-onload-3 no-arrow rowstyle-alt colstyle-alt paginate-10 max-pages-7 paginationcallback-callbackTest-calculateTotalRating paginationcallback-callbackTest-displayTextInfo sortcompletecallback-callbackTest-calculateTotalRating&quot;>";


	// Sorting needed?
 	while(rows.isValidRow()) 
	{
		result = result + "<tr>";
    	result = result + "<td>06/30/2004</td>";
    	result = result + "<td class=&quot;sized1&quot;><a href=&quot;http://www.the-numbers.com/movies/2004/SPID2.php&quto;>Spider-Man 2</a></td>";
    	result = result + "<td class=&quot;sized2&quot;><i>Columbia</i></td>";
    	result = result + "<td class=&quot;sized3&quot;>$200,000,000</td>";
    	result = result + "<td class=&quot;sized3&quot;>$373,524,485</td>";
    	result = result + "<td class=&quot;sized3&quot;>$783,524,485</td>";
    	result = result + "<td>10</td>";
  		result = result + "</tr>";
		rows.next();
	}

	result = result + "</table>";
	$("#episode_list").html(result);
}

