/** Talk On WhatsApp by Jandeilson De Sousa (https://jandeilson.com) **/


// > PREPARATION... < //
let elementApp = document.createElement("div");

elementApp.setAttribute("id", "TalkOnWhatsApp-app");

elementApp.innerHTML +=
    '<link rel="stylesheet" href="../../assets/css/main.css"/>' +
    '<div id="TalkOnWhatsApp-container">' +
    '</div>';

document.body.appendChild(elementApp);

// > START < //
TalkOnWhatsApp_byJDeS = () => {

// get base elements by id
    let container = document.getElementById("TalkOnWhatsApp-container");

// > launcher modal
// // // // //
    setTimeout(() => {
        // create element
        let iframe_launcher = document.createElement("iframe");

        // set iframe modal attributes
        iframe_launcher.setAttribute("id", "TalkOnWhatsApp-launcher");
        iframe_launcher.setAttribute("name", "TalkOnWhatsApp-launcher");
        iframe_launcher.setAttribute("title", "Talk on WhatsApp Launcher");
        iframe_launcher.setAttribute("allowfullscreen", "");

        // append iframe modal
        container.appendChild(iframe_launcher);

        // set iframe modal document
        iframe_launcher = iframe_launcher.contentWindow || (iframe_launcher.contentDocument.document || iframe_launcher.contentDocument);
        iframe_launcher.document.open();
        iframe_launcher.document.write('<link rel="stylesheet" href="../../assets/css/TOWA-launcher.css"/>');
        iframe_launcher.document.write('<button id="launcher" class="launcher-btn"><div id="icon-btn"></div></button>');
        iframe_launcher.document.write('<script type="text/javascript" src="../../assets/js/TOWA-launcher.js"><\/script>');
        iframe_launcher.document.close();

        iframe_launcher.addEventListener("click", () => {
            append_iframe();

            let modal = document.getElementById("TalkOnWhatsApp-modal");

            if (modal.classList.contains("opened")) {
                modal.classList.add("closed");
                modal.classList.remove("opened");
                setTimeout(() => {
                    modal.style.display = "none";
                }, 500);
            } else {
                modal.classList.add("opened");
                modal.classList.remove("closed");
                modal.style.display = "block";
            }
        });
    }, 1000);

// > modal
// // // // //
    let modal_document = '<div class="modal-container">' +
        '<div class="header"><div class="logo-whatsapp"></div>Fale pelo WhatsApp!</div>' +
        '<div class="forms-container">' +
        '<div class="message"><textarea placeholder="Escreva sua mensagem..." name="message"></textarea></div>' +
        '<div class="flex-container">' +
        '<div class="name"><input type="text" placeholder="Seu nome" name="name"></div><div class="phone"><input type="text" id="phone" placeholder="Seu telefone" name="phone"></div><div><button class="submit" type="submit">Enviar</div>' +
        '</div>' + // flex container
        '</div>' + // forms container
        '</div>'; // modal container

// create iframe modal
    const append_iframe = (() => {
        let executed = false;
        return () => {
            if (!executed) {
                executed = true;

                // create element
                let iframe_modal = document.createElement("iframe");

                // set iframe modal attributes
                iframe_modal.setAttribute("id", "TalkOnWhatsApp-modal");
                iframe_modal.setAttribute("name", "TalkOnWhatsApp-modal");
                iframe_modal.setAttribute("title", "Talk on WhatsApp Modal");
                iframe_modal.setAttribute("allowfullscreen", "");

                // append iframe modal
                container.appendChild(iframe_modal);

                // set iframe modal document
                iframe_modal = iframe_modal.contentWindow || (iframe_modal.contentDocument.document || iframe_modal.contentDocument);
                iframe_modal.document.open();
                iframe_modal.document.write('<link rel="stylesheet" href="../../assets/css/TOWA-modal.css"/>');
                iframe_modal.document.write(modal_document);
                iframe_modal.document.write('<script type="text/javascript" src="../../assets/js/TOWA-modal.js"><\/script>');
                iframe_modal.document.close();
            }
        };
    })();

};

TalkOnWhatsApp_byJDeS();