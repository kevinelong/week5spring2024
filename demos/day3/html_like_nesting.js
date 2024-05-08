//FAAKE WEB PAGE USING JUST JS
const window = {
    document : {
        body : {
            children : [
                { 
                    tag: "ul", 
                    children: [
                        {
                            tag: "li", 
                            innerText: "AAA"
                        },
                        {
                            tag: "li", 
                            innerText: "BBB"
                        },
                        {
                            tag: "li", 
                            innerText: "CCC"
                        },
                    ]
                }
            ]
        }
    }
}