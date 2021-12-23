function país() 
        {
            var txtv = window.document.querySelector('input#txtpaís')
            var resp = window.document.querySelector('div#p')
            var país = (país.value)
            //res.innerHTML = `<p>Seu país é <strong> ${pais} </strong> </p>`
             //console.log(`Vivendo no ${país}`)
            if (país=='Brasil'){
                console.log(`você é brasileiro`)
            }
            else{
                console.log(`você é estrangeiro`)
                }
            /*if (país = Brasil) {
                res.innerHTML = `<p> Você é <strong> Brasileiro </strong> </p>`
            }
            else {
                resp.innerHTML = `<p> Você é <strong> Estrangeiro </strong> </p>`
            }*/
        }