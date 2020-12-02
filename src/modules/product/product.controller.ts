import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common'
import { Product } from './product.entity'
import { ProductService } from './product.service'

@Controller('products')
export class ProductController {
  constructor(private readonly ProductService: ProductService) {}

  @Get()
  async findAll(): Promise<Product[]> {
    return this.ProductService.findAll()
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Product> {
    return this.ProductService.findById(id)
  }

  @Post()
  async create(@Body() product: Product): Promise<Product> {
    return this.ProductService.create(product)
  }

  @Delete('id')
  async remove(@Param('id') id: string): Promise<boolean> {
    return this.ProductService.remove(id)
  }
}
