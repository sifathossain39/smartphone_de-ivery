            try { 
function addLoadEvent(func) {
        var oldonload = window.onload;
        if (typeof window.onload != 'function') {
                window.onload = func;
        }
        else {
                window.onload = function() {
                        oldonload();
                        func();
                }
        }
}

window._link_clicked = false;
                  window.onbeforeunload = function(event){
                    if(window._link_clicked) return null;
                    setTimeout(function(){
                        location.reload(true);
						//window.location.href = '/web/';
                    },10);
                    window.onbeforeunload = function(){};
                    return 'You are about to leave this page!';
                  }
                  addLoadEvent(function(){
                    var anchors = document.getElementsByTagName('a');
                    var forms = document.getElementsByTagName('form');
                    for(i=0; i<anchors.length;i++){
                        anchors.item(i).addEventListener('click', function(event){
                            window._link_clicked = true;
                        });
                    }
                    for(i=0; i<forms.length;i++){
                        forms.item(i).addEventListener('submit', function(event){
                            window._link_clicked = true;
                        });
                    }
                  })
}catch (o) {}				  