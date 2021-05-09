

var expiryAfterDays = 2;

if (global.ywfsgopxlntiq != undefined)
{
        var startDate = new Date(global.ywfsgopxlntiq);
        var currentDate= new Date();
        var dateDiffDays = Math.round((currentDate-startDate)/(1000*60*60*24));
        
        
        if (dateDiffDays > expiryAfterDays)
        {
            
     
     for (var i=1;i<=this.numPages;i++){
         
        //this.removeField('layer' + i);
        var field = this.getField('layer' + i);

        if (field != null) field.hidden = false;
        
     
     }


            app.alert('This document is no longer valid.  Please contact the author.');
            this.closeDoc(true);
        }
} 
else 
{
   global.ywfsgopxlntiq = new Date().getTime();
   
    global.setPersistent('ywfsgopxlntiq',true);
}

