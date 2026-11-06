import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('estudiante')
export class EstudianteController {
    /*recibe la solicitud get*/
    @Get()
    mensaje(){
        return {
            "mensaje": "estudiante registrado"
        }
    }

    @Post()
    registrar(@Body() dato:any){
        console.log(dato)
        return{
            "mensaje": "los datos son"+ dato.nombre
        }
        
    }
}
