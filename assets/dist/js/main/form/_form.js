let Form = function(){

    this.notify = ($info)=>{
        let field = $info.field
        field.closest(".form-group").addClass("invalid");
        field.val("")
        field.attr("placeholder", $info.msg);

        setTimeout(()=>{
            field.closest(".form-group").removeClass("invalid")
            field.attr("placeholder", $info.placeholder);
        }, 3000)
    }

    this.notify_js = ($info)=>{
        let field = $info.field
        field.closest(".form-group").classList.add("invalid");
        field.value = ""
        field.setAttribute("placeholder", $info.msg);

        setTimeout(()=>{
            field.closest(".form-group").classList.remove("invalid")
            field.setAttribute("placeholder", $info.placeholder);
        }, 3000)
    }


    this.valida_com_jquery = ($info)=>{
        let $notify = this.notify;

        $($info.form).submit((ev)=>{
            ev.preventDefault();
            let validate = true;

            let name = $($info.name)
            let email = $($info.email)

            //Validando Nome
            let qtd_name = name.val()
            qtd_name = qtd_name.split(" ");
            
            if(qtd_name.length < 2 && name.val().indexOf(" ") <= 0){
                $notify({
                    field: name,
                    msg: "Por favor Insira o nome completo!",
                    placeholder: "Informe seu nome"
                });
                validate = false
            }

            //validando email
            if(email.val().indexOf("@") > 0){
                let $email = email.val()
                $email = $email.split("@")

                if($email[1].indexOf(".") == -1){
                    $notify({
                        field: email,
                        msg: "Por favor informe um e-mail válido!",
                        placeholder: "Informe seu email"
                    })
                    validate = false
                }
            }else{
                $notify({
                    field: email,
                    msg: "Por favor informe um e-mail válido!",
                    placeholder: "Informe seu email"
                })
                validate = false;
            }
         
            if(validate == true){
                $.ajax({
                    crossDomain: true,
                    contentType: 'application/x-www-form-urlencoded',
                    type: 'POST',
                    url: './validate.php',
                    data: `name=${name}&email=${email}&inscribe`,
                    success: function (data) {
                       $($info.form).remove()
                       $($info.content[0].sucess).html("<div class='sucess-send'><span>Os seus dados foram enviados com sucesso!</span></div>")
                    },
                    error: function (data) {
                        $($info.content[0].failed).html("<div class='failed-send'> <span>Ops! Alguma coisa deu errado! Tente novamente.</span></div>")
                        
                        setTimeout(() => {
                            $($info.content[0].failed+" .failed-send").remove()
                        }, 3000);
                    }
                });
            }
        })
    }



    this.valida_sem_jquery = ($info)=>{
        let $notify = this.notify_js;

        let form = document.querySelector($info.form)

        form.onsubmit = (ev) =>{
            ev.preventDefault();
            let validate = true;
            let name = document.querySelector($info.name)
            let email = document.querySelector($info.email);

            //Validando Nome
            let qtd_name = name.value.split(" ");
            
            if(qtd_name.length < 2 && name.value.indexOf(" ") <= 0){
                $notify({
                    field: name,
                    msg: "Por favor Insira o nome completo!",
                    placeholder: "Informe seu nome"
                });
                validate = false
            }

             //validando email
             if(email.value.indexOf("@") > 0){
                let $email = email.value.split("@")

                if($email[1].indexOf(".") == -1){
                    $notify({
                        field: email,
                        msg: "Por favor informe um e-mail válido!",
                        placeholder: "Informe seu email"
                    })
                    validate = false
                }
            }else{
                $notify({
                    field: email,
                    msg: "Por favor informe um e-mail válido!",
                    placeholder: "Informe seu email"
                })
                validate = false;
            }

            if(validate == true){
                var xhttp = new XMLHttpRequest();
  
                xhttp.onreadystatechange = function() {
                    setTimeout(()=>{
                        document.querySelector($info.form).style ="transition: opacity .3s ease-in-out; opacity: 0"
                    },300)
                    if (this.readyState == 4 && this.status == 200) {
                        document.querySelector($info.form).remove()
                        document.querySelector($info.content[0].sucess).innerHTML = "<div class='sucess-send'><span>Os seus dados foram enviados com sucesso!</span></div>"
                    }else{
                        document.querySelector($info.content[0].failed).innerHTML = "<div class='failed-send'> <span>Ops! Alguma coisa deu errado! Tente novamente.</span></div>"
                        
                        setTimeout(() => {
                            document.querySelector($info.content[0].failed+" .failed-send").remove()
                        }, 3000);
                    }
                };
                xhttp.open("POST", "./validate.php", true);
                xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                xhttp.send("nome="+name+"&email="+email+"&inscribe");

            }
            

        }
    }
}

let cmd = new Form();

cmd.valida_com_jquery({
    content: [
        {
            sucess: ".dok_development-form",
            failed: ".failed"
        }
    ],
    form: '[name="describe"]',
    name: '[name="nome"]',
    email: '[name="email"]'
});

export{
    Form
}