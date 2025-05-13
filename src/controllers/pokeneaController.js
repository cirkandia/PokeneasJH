const { getRandomPokenea } = require('../models/pokenea');
const { getContainerInfo } = require('../utils/containerInfo');

function getPokeneaJson(req, res) {
    try {
        const pokenea = getRandomPokenea();
        if (!pokenea) throw new Error("No se encontró un Pokenea.");
        const containerInfo = getContainerInfo();
        
        const response = {
            id: pokenea.id,
            nombre: pokenea.nombre,
            altura: pokenea.altura,
            habilidad: pokenea.habilidad,
            containerId: containerInfo.containerId
        };
        
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

function getPokeneaView(req, res) {
    try {
        const pokenea = getRandomPokenea();
        if (!pokenea) throw new Error("No se encontró un Pokenea.");
        const containerInfo = getContainerInfo();
        
        res.render('pokenea', {
            imagen: pokenea.imagen,
            fraseFilosofica: pokenea.fraseFilosofica,
            containerId: containerInfo.containerId
        });
    } catch (error) {
        res.status(500).send("Ocurrió un error al renderizar la vista.");
    }
}

module.exports = {
    getPokeneaJson,
    getPokeneaView
};