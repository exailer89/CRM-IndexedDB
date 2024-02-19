(function() {

    let DB;

    document.addEventListener('DOMContentLoaded', () => {
        conectarDB();

        // Verificar el ID de la URL
        const parametrosURL = new URLSearchParams(window.location.search); // window.location.search nos da solo el "Query String"
        const idCliente = parametrosURL.get('id');
        if (idCliente) {
            setTimeout(() => {
                obtenerCliente(idCliente);
            }, 1000);
        }
    });

    function obtenerCliente(id) {
        const transaction = DB.transaction(['crm'], 'readwrite');
        const objectStore = transaction.objectStore('crm');

        console.log(objectStore);
    }

    function conectarDB() {
        const abrirConexion = window.indexedDB.open('crm', 1);

        abrirConexion.onerror = function() {
            console.log('Hubo un error');
        }

        abrirConexion.onsuccess = function() {
            DB = abrirConexion.result;
        }
    }
})();