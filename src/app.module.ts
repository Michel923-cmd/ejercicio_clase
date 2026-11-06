import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudianteController } from './estudiante/estudiante.controller';
import { ProductosController } from './productos/productos.controller';

@Module({
  imports: [],
  controllers: [AppController, EstudianteController, ProductosController],
  providers: [AppService],
})
export class AppModule {}
