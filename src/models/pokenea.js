const pokeneas = [
    {
        id: 1,
        nombre: "Paisita",
        altura: 1.6,
        habilidad: "Tomar aguardiente sin hacer gestos",
        imagen: "https://pokeneasjhmv.s3.us-east-1.amazonaws.com/paisita.png",
        fraseFilosofica: "Más vale pájaro en mano que cien volando... pero con cien se hace un sancocho."
    },
    {
        id: 2,
        nombre: "Arrierito",
        altura: 1.7,
        habilidad: "Cargar mulas en terrenos difíciles",
        imagen: "https://pokeneasjhmv.s3.us-east-1.amazonaws.com/arrierito.png",
        fraseFilosofica: "No hay que confundir el valor con la arrogancia: el primero te hace respetar, el segundo te hace odiar."
    },
    {
        id: 3,
        nombre: "Silletero",
        altura: 1.65,
        habilidad: "Cargar flores en la espalda por horas",
        imagen: "https://pokeneasjhmv.s3.us-east-1.amazonaws.com/silletero.png",
        fraseFilosofica: "La vida es como una silleta: a veces pesa, pero siempre es bella."
    },
    {
        id: 4,
        nombre: "Bandejero",
        altura: 1.75,
        habilidad: "Preparar la mejor bandeja",
        imagen: "https://pokeneasjhmv.s3.us-east-1.amazonaws.com/bandejero.png",
        fraseFilosofica: "Compartir la comida es compartir el alma."
    },
    {
        id: 5,
        nombre: "Guarceño",
        altura: 1.8,
        habilidad: "Bailar hasta que el cuerpo aguante",
        imagen: "https://pokeneasjhmv.s3.us-east-1.amazonaws.com/guarce%C3%B1o.png",
        fraseFilosofica: "La música cura el alma, el aguardiente cura el cuerpo, pero solo el amor cura todo."
    },
    {
        id: 6,
        nombre: "Paisajista",
        altura: 1.5,
        habilidad: "Contemplar montañas por horas",
        imagen: "https://pokeneasjhmv.s3.us-east-1.amazonaws.com/paisaje.png",
        fraseFilosofica: "La belleza está en los ojos del que mira, pero la montaña está ahí para todos."
    },
    {
        id: 7,
        nombre: "Cafetero",
        altura: 1.7,
        habilidad: "Distinguir variedades de café con solo oler",
        imagen: "https://pokeneasjhmv.s3.us-east-1.amazonaws.com/cafetero.png",
        fraseFilosofica: "La vida es como un buen café: amarga al principio, dulce al final."
    }
];

function getRandomPokenea() {
    return pokeneas[Math.floor(Math.random() * pokeneas.length)];
}

function getAllPokeneas() {
    return pokeneas;
}

function getPokeneasByHabilidad(habilidad) {
    return pokeneas.filter(pokenea => pokenea.habilidad.includes(habilidad));
}

module.exports = {
    getRandomPokenea,
    getAllPokeneas,
    getPokeneasByHabilidad
};