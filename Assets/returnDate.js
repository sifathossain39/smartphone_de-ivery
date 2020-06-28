//------------------------------------
//------------------------------------
//------ PORTUGUESE DATE CODE --------
//------------------------------------
//------------------------------------
 
function returnDate(format, print){
	var out;
     
    var curDate = new Date();
    var year = curDate.getFullYear();
    var month = curDate.getMonth();
    var day = curDate.getDate();
    var dayofweek = curDate.getDay();
    var hour = curDate.getHours();
     
    var daysofweek = new Array('domingo','segunda-feira','terça-feira','quarta-feira','quinta-feira','sexta-feira','sábado');
	var months = new Array('janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro');
     
    if(format == "timeofday"){
        if (hour < 12) out = "manh&#227;";
        else if (hour < 17) out = "tarde";
        else out = "noite";
    }
    else if(format == "dayofweek"){
        out = daysofweek[dayofweek];
    }
    else if(format == "day"){
        out = day;
    }
    else if(format == "month"){
        out = months[month];
    }
	else if(format == "year"){
        out = year;
    }
    else{
        out = day+' de '+months[month]+' de '+year;
    }
	if ( print ) 
		document.write( out );
	else
		return out;
}