/* 
 * VIDEO HANDLER
*/

$(document).ready(() => app.init())

var 
    app = ({
        init: () => {
            // obtener todos los videos y prepararlos
            app.handleVideo();
        },
        
        handleVideo: () => {
            var 
                videos = $("video");
            
            videos.each((i, el) => {
                var 
                    check,
                    notified = false;
                
                $(el).bind("play", (e) => {
                    var 
                        duration = el.duration;
                    
                    check = setInterval(() => {
                        var 
                            c = el.currentTime,
                            p = (c / duration * 100).toFixed(2)
                        
                        if( Math.floor(p) >= 50 && !notified) {
                            notified = true;
                            app.sendData(el)
                            // a lo mejor podrias notificarle q ya posee la calificacion por aqui
                            // te recomiendo un plugin se se llama sweetAlert
                        }    
                    })
                })
                $(el).bind("pause", () => {
                    // aqui se podria poner una alerta de algo q desees mostrarla en caso de que haga pausa
                    // recordandole q siga avanzando o si esta en mas del 50 se le puede decir q abandone ... 
                    
                })
                
                $(el).bind("ended", () => clearInterval(check))
                
            })
        },
        
        // send url-post-data to server
        sendData: (el) => {
            var 
                el  = $(el),
                url = el.data('url-post'), // url al cual enviar el post
                tku = $("#token").get(0).value, // token del usuario
                dat = JSON.parse(atob(tku)),
                idu = dat.idu, // id del usuario
                idv = dat.idv  // id del video
            
            http.post(url, {idu: idu, idv: idv})
        }
    }),
    
    http = ({
        get : (url) => {
                
        },
        
        // cb : function de callback , cbe: function de callback cuando suceda un error
        post: (url, d, cb = null, cbe = null)=> {
            var 
                ajax = $.ajax({
                    url: url,
                    method: "POST",
                    data: {
                        idUser: d.idu,
                        idVideo: d.idv
                    }
                })
            
            ajax.done((data) => {
                if (cb != null) cb(data);
                else console.log("DATOS SI TODO FUNCIONO")
            })
            
            ajax.fail((error) => {
                if (cbe != null) cbe(error);
                else console.log("DATOS SI NO FUNCIONO")
            })
        }
    })
