let date = new Date()

document.addEventListener("DOMContentLoaded", () => {

    const textSpan = (texto, nodo) => {

        for (let i = 0; i < texto.length; i++) {

            if (texto[i] == " ") {

                let span = document.createElement("span")
                span.innerHTML = texto[i]
                span.classList.add("scaleSpan")
                span.style.display = "inline-block"
                span.style.width = "8px"
                nodo.appendChild(span)
            } else {

                let span = document.createElement("span")
                span.innerHTML = texto[i]
                span.classList.add("scaleSpan")
                span.style.display = "inline-block"
                nodo.appendChild(span)
            }
        }
    }

    let spanArray = []

    if (localStorage.getItem("languaje") == "en") {

        textSpan("ABOUT ME", document.getElementById("sobre"))
        textSpan("STUDIES", document.getElementById("estudiossobremi"))
        textSpan("KNOWLEDGE", document.getElementById("conocimientosId"))
        textSpan("PROJECTS", document.getElementById("proyectosId"))
        textSpan("CONTACT", document.getElementById("contacto"))
        textSpan("Hello! My name is Juan Diego Ramirez Mogotocoro. I am a FullStack Web Developer", document.getElementById("saludoTextoSobremi"))
    } else {

        textSpan("SOBRE MI", document.getElementById("sobre"))
        textSpan("ESTUDIOS", document.getElementById("estudiossobremi"))
        textSpan("CONOCIMIENTOS", document.getElementById("conocimientosId"))
        textSpan("PROYECTOS", document.getElementById("proyectosId"))
        textSpan("CONTACTO", document.getElementById("contacto"))
        textSpan("¡Hola! Mi Nombre Es Juan Diego Ramirez Mogotocoro. Soy un Desarrollador Web FullStack", document.getElementById("saludoTextoSobremi"))
    }

    const lineaTecnologias = (porcentaje, id) => {

            gsap.to(`#${id}`, { duration: 1, width: `${porcentaje}%`, delay: 1 })
    }

    let observe1 = document.querySelector(".centerSobremi")
    let observe2 = document.querySelector("#sobre") || document.querySelector("#aboutme")
    let observe3 = document.querySelector("#estudiossobremi")
    let observe4 = document.querySelector(".logoEstudios")
    let observe5 = document.querySelector("#conocimientosId") || document.querySelector("#knowledge")
    let observe6 = document.querySelector(".fraseCono")
    let observe7 = document.querySelector("#proyectosId")|| document.querySelector("#proyects")
    let observe8 = document.querySelector("#proye")
    let observe9 = document.querySelector("#contacto") || document.querySelector("#contact")
    let observe10 = document.querySelector(".contentContacto")
    let observe12 = document.querySelector(".socialmedia")

    let observe13 = document.querySelector("#lineaJs")
    let observe14 = document.querySelector("#lineaReact")
    let observe15 = document.querySelector("#lineaNodejs")
    let observe16 = document.querySelector("#lineaPython")
    let observe17 = document.querySelector("#lineaPhp")
    let observe18 = document.querySelector("#lineaMysql")
    let observe19 = document.querySelector("#lineaMongodb")
    let observe20 = document.querySelector(".tecnologias")

    const cargarElemento = (entradas, observe) => {

    entradas.forEach(entrada => {
        
        if(entrada.isIntersecting){

            if(entrada.target.id){

                switch (entrada.target.id) {
                    case "lineaJs":
                        lineaTecnologias("90", "lineaJs")
                        break;

                    case "lineaReact":
                        lineaTecnologias("60", "lineaReact")
                        break;

                    case "lineaNodejs":
                        lineaTecnologias("60", "lineaNodejs")
                        break;

                    case "lineaPython":
                        lineaTecnologias("50", "lineaPython")
                        break;

                    case "lineaPhp":
                        lineaTecnologias("30", "lineaPhp")
                        break;

                    case "lineaMysql":
                        lineaTecnologias("40", "lineaMysql")
                        break;

                    case "lineaMongodb":
                        lineaTecnologias("70", "lineaMongodb")
                        break;

                    default:
                        gsap.to(`#${entrada.target.id}`, { duration: 1, opacity: 1, translateY: "0" })
                        break;
                }
            }
            else{
                
                gsap.to(`.${entrada.target.className}`, { duration: 1, opacity: 1, translateY: "0" })
            }
        }
    });
    }

    const Observador = new IntersectionObserver(cargarElemento, {

        root: null,
        threshold: 0.5,
    })

    Observador.observe(observe1)
    Observador.observe(observe2)
    Observador.observe(observe3)
    Observador.observe(observe4)
    Observador.observe(observe5)
    Observador.observe(observe6)
    Observador.observe(observe7)
    Observador.observe(observe8)
    Observador.observe(observe9)
    Observador.observe(observe10)
    Observador.observe(observe12)
    Observador.observe(observe13)
    Observador.observe(observe14)
    Observador.observe(observe15)
    Observador.observe(observe16)
    Observador.observe(observe17)
    Observador.observe(observe18)
    Observador.observe(observe19)
    Observador.observe(observe20)


    document.getElementById("edad").innerHTML = date.getFullYear() - 2006

    const tl_saludo = gsap.timeline()

    setTimeout(() => {

        gsap.to("#cursor-animacion", { duration: 0.4, yoyo: true, repeat: -1, opacity: 0 })

        tl_saludo.fromTo("#tl-saludo1", { duration: 0.5, scale: "2", opacity: 0, ease: "back.out(1.5)" }, { duration: 0.5, scale: "1", opacity: 1, ease: "back.out(1.5)" })
        tl_saludo.fromTo("#tl-saludo2", { duration: 0.5, scale: "2", opacity: 0, ease: "back.out(1.5)" }, { duration: 0.5, scale: "1", opacity: 1, ease: "back.out(1.5)" })
        tl_saludo.fromTo("#tl-saludo3", { duration: 0.5, scale: "2", opacity: 0, ease: "back.out(1.5)" }, { duration: 0.5, scale: "1", opacity: 1, ease: "back.out(1.5)" })
        tl_saludo.fromTo("#tl-saludo4", { duration: 0.5, scale: "2", opacity: 0, ease: "back.out(1.5)" }, { duration: 0.5, scale: "1", opacity: 1, ease: "back.out(1.5)" })

        gsap.fromTo(".backgroundCard", { duration: 0.5, opacity: 0, y: 50, ease: "back.out(1.5)", delay: 2 }, { duration: 0.5, delay: 2, opacity: 1, y: 0, ease: "back.out(1.5)" })
        gsap.fromTo(".cardsCode", { duration: 0.5, y: 50, opacity: 0, ease: "back.out(1.5)", delay: 2 }, { duration: 0.5, delay: 2, y: 0, opacity: 1, ease: "back.out(1.5)" })
        gsap.fromTo(".cardsCode", { duration: 0.5, y: 50, opacity: 0, ease: "back.out(1.5)", delay: 2 }, { duration: 0.5, delay: 2, y: 0, opacity: 1, ease: "back.out(1.5)" })
        gsap.fromTo(".cardsCode", { duration: 0.5, y: 50, opacity: 0, ease: "back.out(1.5)", delay: 2 }, { duration: 0.5, delay: 2, y: 0, opacity: 1, ease: "back.out(1.5)" })
        gsap.fromTo(".footerPresentacion", { duration: 0.5, y: 20, opacity: 0, ease: "back.out(1.5)", delay: 2 }, { duration: 0.5, delay: 2, y: 0, opacity: 1, ease: "back.out(1.5)" })
        gsap.fromTo(".contentFlags", { duration: 0.5, y: 20, opacity: 0, ease: "back.out(1.5)", delay: 2 }, { duration: 0.5, delay: 2, y: 0, opacity: 1, ease: "back.out(1.5)" })
        gsap.to(".menu", { duration: 0.5, opacity: 1, top: "15px", delay: 2 })
    }, 500)


    document.addEventListener("mouseover", (e) => {

        if (spanArray.length >= 1 && spanArray[spanArray.length - 1].className == "scaleSpan") {

            gsap.to(spanArray[spanArray.length - 1], { duration: 0.8, scale: "1" })
        }
        else if (spanArray.length >= 1 && spanArray[spanArray.length - 1].className == "imgProyecto") {

            gsap.to(spanArray[spanArray.length - 1], { duration: 0.5, top: "-25px", width: "90%" })
        }

        if (e.target.className == "scaleSpan") {

            spanArray.push(e.target)
            gsap.to(e.target, { duration: 0.1, scale: "1.6" })
        }
        else if (e.target.className == "imgProyecto") {

            spanArray.push(e.target)
            gsap.to(e.target, { duration: 0.5, top: "0px", width: "103%" })
        }
    })

    document.getElementById("btn").addEventListener("click", () => {

        let nombreForm = document.getElementById("firstname").value
        let asunto = document.getElementById("asunto").value
        let numero = 573054260928
        let errorHtml = document.querySelector(".error")

        if (asunto != "" && nombreForm != "") {

            document.getElementById("firstname").value = ""
            document.getElementById("asunto").value = ""
            errorHtml.style.display = "none"
            window.open(`https://wa.me/${numero}?text=Holaa!%20Juan%20Mogotocoro%20mi%20nombre%20es%20${nombreForm},%20Asunto:%20${asunto}`, "_blank")
        } else {

            errorHtml.style.display = "block"
        }
    })

    let activeMenu = false
    let WhatsappVentana = false
    let emailVentana = false

    document.addEventListener("click", (e) => {

        if (e.target.className == "menu" || e.target.className == "bar1" || e.target.className == "bar2" || e.target.className == "bar3" || e.target.className == "liMenu1" || e.target.className == "liMenu2" || e.target.className == "liMenu3" || e.target.className == "liMenu4" || e.target.className == "liMenu5" || e.target.className == "capa" || e.target.className == "es" || e.target.className == "en") {

            if (activeMenu == false) {

                gsap.to(".bar1", { duration: 0.3, top: "29px" })
                gsap.to(".bar1", { duration: 0.3, delay: 0.3, rotate: "135deg" })
                gsap.to(".bar2", { duration: 0.3, delay: 0.3, rotate: "135deg" })
                gsap.to(".bar3", { duration: 0.3, bottom: "29px" })
                gsap.to(".bar3", { duration: 0.3, delay: 0.3, rotate: "230deg" })

                gsap.to(".capaMenu", { duration: 0.5, width: "100vh", height: "80vh" })
                gsap.to(".ulMenu", { duration: 0.3, opacity: "1", delay: 0.5 })
                gsap.to(".capa", { duration: 0.5, opacity: 1, display: "block" })
                activeMenu = true
            } else {

                gsap.to(".capa", { duration: 0.5, opacity: 0, display: "none" })
                gsap.to(".bar3", { duration: 0.3, rotate: "0deg" })
                gsap.to(".bar1", { duration: 0.3, rotate: "0deg" })
                gsap.to(".bar2", { duration: 0.3, rotate: "0deg" })
                gsap.to(".bar1", { duration: 0.3, delay: 0.3, top: "20px" })
                gsap.to(".bar3", { duration: 0.3, delay: 0.3, bottom: "20px" })

                gsap.to(".capaMenu", { duration: 0.5, width: "0vh", height: "0vh", delay: 0.3 })
                gsap.to(".ulMenu", { duration: 0.3, opacity: "0" })
                activeMenu = false
            }
        }

        if (e.target.id == "Whatsapp" || e.target.className == "ventanaWhat" || e.target.id == "exit") {

            if (WhatsappVentana == false) {

                gsap.to(".ventanaWhat", { duration: 0.5, opacity: 1, display: "flex" })
                WhatsappVentana = true
            } else {

                gsap.to(".ventanaWhat", { duration: 0.5, opacity: 0, display: "none" })
                WhatsappVentana = false
            }
        }

        if (e.target.id == "email" || e.target.className == "ventanaEmail" || e.target.id == "exit2") {

            if (emailVentana == false) {

                gsap.to(".ventanaEmail", { duration: 0.5, opacity: 1, display: "flex" })
                emailVentana = true
            } else {

                gsap.to(".ventanaEmail", { duration: 0.5, opacity: 0, display: "none" })
                emailVentana = false
            }
        }

        if (e.target.id == "copyW") {

            let inputCopy = document.createElement("input")
            inputCopy.setAttribute("value", "+57 3054260928");
            document.body.appendChild(inputCopy);
            inputCopy.select()
            document.execCommand("copy");
            document.body.removeChild(inputCopy);
            gsap.to(".papeles", { duration: 0.5, bottom: 0, display: "block" })
            setTimeout(() => {

                gsap.to(".papeles", { duration: 0.5, bottom: "-45px", display: "none" })
            }, 5000)
        }

        if (e.target.id == "copyE") {

            let inputCopy = document.createElement("input")
            inputCopy.setAttribute("value", "juandiegoramirez098@gmail.com");
            document.body.appendChild(inputCopy);
            inputCopy.select()
            document.execCommand("copy");
            document.body.removeChild(inputCopy);
            gsap.to(".papeles", { duration: 0.5, bottom: 0, display: "block" })
            setTimeout(() => {

                gsap.to(".papeles", { duration: 0.5, bottom: "-45px", display: "none" })
            }, 5000)
        }

        let textsToChange = document.querySelectorAll("[data-section]")

        const changeLanguaje = async(languaje) => {

            const requestJson = await fetch(`./json/${languaje}.json`)
            const texts = await requestJson.json();

            for(const textToChange of textsToChange){

                const section = textToChange.dataset.section
                const value = textToChange.dataset.value
                
                textToChange.textContent = texts[section][value]

            }

            document.getElementById("sobre").innerHTML = ""
            document.getElementById("estudiossobremi").innerHTML = ""
            document.getElementById("conocimientosId").innerHTML = ""
            document.getElementById("proyectosId").innerHTML = ""
            document.getElementById("contacto").innerHTML = ""
            document.getElementById("saludoTextoSobremi").innerHTML = ""

            if(languaje == "en"){

                textSpan("ABOUT ME", document.getElementById("sobre"))
                textSpan("STUDIES", document.getElementById("estudiossobremi"))
                textSpan("KNOWLEDGE", document.getElementById("conocimientosId"))
                textSpan("PROJECTS", document.getElementById("proyectosId"))
                textSpan("CONTACT", document.getElementById("contacto"))
                textSpan("Hello! My name is Juan Diego Ramirez Mogotocoro. I am a FullStack Web Developer", document.getElementById("saludoTextoSobremi"))
                document.querySelector("#asunto").placeholder = "Write Your Message Here."
            }else{

                textSpan("SOBRE MI", document.getElementById("sobre"))
                textSpan("ESTUDIOS", document.getElementById("estudiossobremi"))
                textSpan("CONOCIMIENTOS", document.getElementById("conocimientosId"))
                textSpan("PROYECTOS", document.getElementById("proyectosId"))
                textSpan("CONTACTO", document.getElementById("contacto"))
                textSpan("¡Hola! Mi Nombre Es Juan Diego Ramirez Mogotocoro. Soy un Desarrollador Web FullStack", document.getElementById("saludoTextoSobremi"))
                document.querySelector("#asunto").placeholder = "Escribe tu mensaje aqui."
            }
        }

        if(e.target.dataset.languaje == "es" || e.target.dataset.languaje == "en"){

            localStorage.setItem("languaje", e.target.dataset.languaje)
            changeLanguaje(e.target.dataset.languaje) 
        }
        
    })

    let textsToChange = document.querySelectorAll("[data-section]")
    
    const languajeLoad = async(languaje) => {

        const requestJson = await fetch(`./json/${languaje}.json`)
        const texts = await requestJson.json();

        for(const textToChange of textsToChange){

            const section = textToChange.dataset.section
            const value = textToChange.dataset.value
            
            textToChange.textContent = texts[section][value]

        }

        if(languaje == "es"){

            document.querySelector("#asunto").placeholder = "Escribe tu mensaje aqui."
        }else{

            document.querySelector("#asunto").placeholder = "Write Your Message Here."
        }
    }
    if(localStorage.getItem("languaje")){

        languajeLoad(localStorage.getItem("languaje"))
    } 
})