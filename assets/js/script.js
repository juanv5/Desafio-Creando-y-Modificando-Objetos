function Consultorio() {
    this.nombre = ""
    this.paciente = []
}

Consultorio.prototype.setNombreConsultorio = function(nuevoNombreConsultorio) {
    if (nuevoNombreConsultorio !== '') {
        this.nombre = nuevoNombreConsultorio.toLowerCase()
        this.nombre = this.nombre.charAt(0).toUpperCase() + this.nombre.slice(1)
    } else {
        console.log('Por favor agregar un nombre valido')
    }
}

Consultorio.prototype.getNombreConsultorio = function() {
    return this.nombre
}

Consultorio.prototype.agregarPaciente = function(paciente) {
    this.paciente.push(paciente)
}

Consultorio.prototype.mostrarPaciente = function() {
    this.paciente.forEach((paciente) => {
        console.log(`Nombre: ${paciente.nombre} Edad: ${paciente.edad} RUT: ${paciente.rut} Diagnostico: ${paciente.diagnostico}`)
    })

    console.log("")
}

Consultorio.prototype.buscarPaciente = function(nombre) {
    const nombreBuscado = nombre
    this.paciente.filter(function(paciente) {
        if (paciente.getNombrePaciente() === nombreBuscado) {
            console.log(`Nombre: ${paciente.nombre} Edad: ${paciente.edad} RUT: ${paciente.rut} Diagnostico: ${paciente.diagnostico}`)
        }
    })
}



function Paciente() {
    this.nombre = ""
    this.edad = ""
    this.rut = ""
    this.diagnostico = ""
}

Paciente.prototype.setNombrePaciente = function(nuevoNombrePaciente) {
    if (nuevoNombrePaciente !== '') {
        this.nombre = nuevoNombrePaciente.toLowerCase()
        this.nombre = this.nombre.charAt(0).toUpperCase() + this.nombre.slice(1)
    } else {
        console.log('El nombre no puede ser vacio')
        return
    }
}

Paciente.prototype.getNombrePaciente = function() {
    return this.nombre
}

Paciente.prototype.setEdad = function(nuevoEdad) {
    const regex = RegExp('^[0-9]+$')
    if (regex.test(nuevoEdad)) {
        this.edad = parseInt(nuevoEdad)
    } else {
        console.log('Ingresar una edad valida')
        return
    }
}

Paciente.prototype.getEdad = function() {
    return this.edad
}

Paciente.prototype.setRUT = function(nuevoRUT) {
    const regex = RegExp('^[0-9]+$')
    if (regex.test(nuevoRUT)) {
        this.rut = parseInt(nuevoRUT)
    } else {
        console.log('Ingresar un RUT valido')
        return
    }
}

Paciente.prototype.getRUT = function() {
    return this.rut
}

Paciente.prototype.setDiagnostico = function(nuevoDiagnostico) {
    if (nuevoDiagnostico !== "") {
        this.diagnostico = nuevoDiagnostico
    } else {
        console.log('Por favor ingresar el diagnostico')
        return
    }
}

Paciente.prototype.getDiagnostico = function() {
    return this.diagnostico
}




const p1 = new Paciente()
p1.setNombrePaciente("Pablo")
p1.setEdad(11)
p1.setRUT(234583549)
p1.setDiagnostico("Cancer")

const p2 = new Paciente()
p2.setNombrePaciente("Pedro")
p2.setEdad(18)
p2.setRUT(323423165)
p2.setDiagnostico("Gripe")

const p3 = new Paciente()
p3.setNombrePaciente("Juan")
p3.setEdad(38)
p3.setRUT(125843154)
p3.setDiagnostico("Peste Negra")

const c1 = new Consultorio()
c1.setNombreConsultorio("Aguirre")
c1.agregarPaciente(p1)
c1.agregarPaciente(p2)
c1.agregarPaciente(p3)

console.log("Creando y Modificando Objetos")
console.log("")

console.log("Mostrando datos del consultorio 1 (c1) y el paciente 3 (p3)")

console.log("Mostrando datos")
c1.mostrarPaciente()

console.log("Mostrando un paciente")
c1.buscarPaciente("Pablo")

console.log("Mostrando diagnostico")
console.log(p3.getDiagnostico())

console.log("Mostrando edad")
console.log(p3.getEdad())

console.log("Mostrando nombre")
console.log(p3.getNombrePaciente())

console.log("Mostrando paciente")
console.log(p3.getRUT())