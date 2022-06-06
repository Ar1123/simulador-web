

//Listar los archivos por catalogo
//id del boton
let btn = document.getElementById("clickMe");
//Añadir evento click del boton
window.addEventListener('load', getFolder, true)
//Función para obtener los archivos por catalogo
async function getFolder() {
    let url = "http://localhost:4000/api/getFolders/v1";
    let response = await fetch(url);
    let data = await response.json();
    let { body } = data
    body.forEach(element => {
        let table = document.getElementById("tablep");
        let tr = document.createElement("tr");
        let th = document.createElement("th");
        th.innerHTML = element;
        table.appendChild(tr)
        tr.appendChild(th)
    });
}

let fn;
//Listar las carpetas secundarias de los archivos por catalogo
window.addEventListener('load', () => {
    setTimeout(() => {
        let table = document.getElementById('tablep').getElementsByTagName('tr')
        for (let index = 0; index < table.length; index++) {

            table[index].addEventListener('click', () => {
                var Table = document.getElementById("tablep2");
                Table.innerHTML = "";
                setTimeout(() => {
                    fn = table[index].innerText
                    getChildrenFolder(table[index].innerText);
                }, 500);
            }, true);
        }
    }, 300)
}, true)

async function getChildrenFolder(folderName) {
    let url = `http://localhost:4000/api/getChildFolders/v1/${folderName}`;
    let response = await fetch(url);
    let data = await response.json();
    let childFolders = [];
    let { body } = data
    childFolders = body
    childFolders.forEach(element => {
        let table = document.getElementById("tablep2");
        let tr = document.createElement("tr");
        let th = document.createElement("th");
        th.innerHTML = element;
        table.appendChild(tr)
        tr.appendChild(th)
    });

    listFiles();
}

//listar los archivos en cada carpeta

function listFiles() {

    let idtable2 = document.getElementById("tablep2").getElementsByTagName('tr');
    console.log(idtable2, 'aaaaaaaaa');
 
    for (let index = 0; index < idtable2.length; index++) {

        idtable2[index].addEventListener('click', () => {
            var Table = document.getElementById("tablep3");
            Table.innerHTML = "";
            setTimeout(() => {
                getFolderfiles(idtable2[index].innerText)
            }, 300)
        }, true)

    }

    async function getFolderfiles(childFolderName) {
        let url = `http://localhost:4000/api/getFolderfiles/v1/${fn}/${childFolderName}`;
        console.log(url);
        let response = await fetch(url);
        let data = await response.json();
        let childFolders = [];
        let { body } = data
        childFolders = body
        childFolders.forEach(element => {
            let table = document.getElementById("tablep3");
            let tr = document.createElement("tr");
            let th = document.createElement("th");
            th.innerHTML = element;
            table.appendChild(tr)
            tr.appendChild(th)
        });

        listFiles();
    }

}





