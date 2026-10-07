import * as Yup from 'yup';
import Product from '../models/Product';
import Category from '../models/Category';
import User from '../models/User';
import { uploadFile } from '../services/uploadFile';

class ProductController {
    async store(request, response) {

        const schema = Yup.object({
            name: Yup.string().required(),
            price: Yup.number().required(),
            category_id: Yup.number().required(),
            offer: Yup.boolean(),
        });

        try {
            schema.validateSync(request.body, { abortEarly: false });
        } catch (err) {
            return response.status(400).json({ error: err.errors });
        }

        const { admin: isAdmin } = await User.findByPk(request.userId)

        if (!isAdmin) {
            return response.status(401).json();
        }

        if (!request.file) {
            return response.status(400).json({
                error: 'Product image is required'
            });
        }

        const path = await uploadFile(request.file, 'products');

        const { name, price, category_id, offer } = request.body;

        const product = await Product.create({
            name,
            price,
            category_id,
            path,
            offer,
        })

        return response.status(201).json(product)
    }

    async update(request, response) {
        const schema = Yup.object({
            name: Yup.string(),
            price: Yup.number(),
            category_id: Yup.number(),
            offer: Yup.boolean(),
        });

        try {
            schema.validateSync(request.body, { abortEarly: false });
        } catch (err) {
            return response.status(400).json({ error: err.errors });
        }

        const { admin: isAdmin } = await User.findByPk(request.userId)

        if (!isAdmin) {
            return response.status(401).json();
        }

        const { id } = request.params;

        const findProduct = await Product.findByPk(id);

        if (!findProduct) {
            return response
                .status(401)
                .json({ error: 'Make sure your product ID is correct' });
        }

        let path = findProduct.path;

        if (request.file) {
            path = await uploadFile(request.file, 'products');
        }

        const { name, price, category_id, offer } = request.body;

        await Product.update({
            name: name ?? findProduct.name,
            price: price ?? findProduct.price,
            category_id: category_id ?? findProduct.category_id,
            offer: offer ?? findProduct.offer,
            path,
        }, {
            where: {
                id,
            }
        });
        return response.status(200).json();
    }

    async index(_request, response) {
        const products = await Product.findAll({
            include: [
                {
                    model: Category,
                    as: 'category',
                    attributes: ['id', 'name']
                }
            ]
        });

        return response.json(products)
    }

}

export default new ProductController