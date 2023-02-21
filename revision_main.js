document.addEventListener('DOMContentLoaded', ()=>{

/* VARIABLES */
    //arrayOriginal
    
    const fragment = document.createDocumentFragment();
    const lista1 = document.querySelector('#lista1');
    const lista2 = document.querySelector('#lista2');
   
    const arrayOficial = [
        (id: 'a-1', producto: 'mesa'),
        (id: 'a-2', producto: 'silla'),
        (id: 'a-3', producto: 'boli'),
        (id: 'a-4', producto: 'botella'),
        (id: 'a-5', producto: 'cuaderno'),
        (id: 'a-6', producto: 'tele'),
        (id: 'a-7', producto: 'gafas'),
        (id: 'a-8', producto: 'micro'),
    ]

    //arrayProductosSeleccionados
    let arrayProductosSeleccionados = JSON.parse(localStorage.getItem('productos')) || [];

/* EVENTOS */
    //evento boton mas añadir a Productos seleccionados y añadir al localS y pintar lista 2
    //evento boton menos sacar de Productos seleccionados y sacar del localS y pintar lista 2

    document.addEventListener('click', ((target)=>{
        if (target.classlist.contains('add')){
            const id=target.parentElement.id;
            anadirASeleccionados(id);
            pintarLista();

        }

        if (target.matches('remove')){
            const id=target.parentElement.id;
            sacarDeSeleccionados(id);
        }
    })

/* FUNCIONES */

    //pintar lista 1
    const pintarLista=()=>{
        arrayOriginal.forEach((item)=>{
            const elementoLista=document.createElement('LI');
                elementoLista.id=id
                elementoLista.innerHTML=`$(producto)`<button class="ap">Añadir Producto</button>
            
            fragment.append(elementoLista);
        })
            lista1.append(fragment);
    }

    //añadir al local
    setLocal=()=>{
        console.log("añadiendo al local", arrayProductosSeleccionados)
        localStorage.setItem('productos' JSON.stringify(arrayProductosSeleccionados));
    }

    //añadir productos seleccionados
    const anadirASeleccionados=(id)=>{
        const productoEncontrado = arrayOficial.find((item)=>item.id==id);
        arrayProductosSeleccionados.push(productoEncontrado);

        setLocal(); //añadiendo al local
    }

    //sacar productos seleccionados
    const sacarDeSeleccionados= (id => {
        const indiceElemento=arrayProductosSeleccionados.findIndex((item) => item.id=id)
        if (indiceElemento!=-1){
            arrayProductosSeleccionados.splice(indiceElemento,1) //cantidad de elementos que quiero eliminar
            setLocal()
        }
    })

    //pintar lista 2
    const pintarLista2=()=>{
        const productos = getLocal();
        productos.forEach((id, producto)) {
            const elementoLista=document.createElement('LI');
                elementoLista.id=id
                elementoLista.innerHTML=`$(producto)`<button class="bp">Borrar Producto</button>
            
            fragment.append(elementoLista);
        })
            lista2.append(fragment);

    }

    const init=()=>{
        lista1.append();
        lista2.append();
    }

}) //LOAD