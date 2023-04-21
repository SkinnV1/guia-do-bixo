class Topico extends HTMLElement{
    constructor(){
        super()

        const shadow = this.attachShadow({mode: "open"})
        shadow.appendChild(this.build())
        shadow.appendChild(this.styles())

        

        build();{
            const componentRoot = document.createElement("div")
            componentRoot.setAttribute("class", "titulo")
            
            const nome = document.createElement("h2")
            nome.textContent = this.getAttribute("title")


            
            const texto = document.createElement("p")
            /* const subtopico = document.createElement("section")
            const lista = document.createElement("ul")
            const itemlista = document.createElement("ul") */
            
            
            
            componentRoot.appendChild(nome)
            componentRoot.appendChild(texto)

            return componentRoot
        }

        /* styles(){a} */


    }   
}

customElements.define("topico", Topico)