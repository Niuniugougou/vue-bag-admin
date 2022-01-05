'use strict';

const baseController = require('./baseController');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

class MemberController extends baseController {

    /**
     * 添加数据
     * @returns {Promise<void>}
     */
    async create() {
        const {ctx} = this;
        const result = await ctx.model.Member.create({
            ...ctx.request.body,
            password: ctx.setToken({password: ctx.randomString()})
        })
        this.result({data: result})
    }

    /**
     * 删除数据
     * @returns {Promise<void>}
     */
    async delete() {
        const {ctx} = this;
        const {id} = ctx.request.body;
        const result = await ctx.model.Member.destroy({
            where: {id}
        })
        this.result({data: result})
    }

    /**
     * 删除多个路由
     * @returns {Promise<void>}
     */
    async deletes() {
        const {ctx} = this;
        const {ids} = ctx.request.body;
        const result = await ctx.model.Member.destroy({
            where: {
                id: [...ids]
            }
        })
        this.result({data: result})
    }


    /**
     * 查找
     * @returns {Promise<void>}
     */
    async find() {
        const {ctx} = this;
        const {id} = ctx.request.body;
        const result = await ctx.model.Member.findOne({
            where: {id}
        })
        this.result({data: result})
    }

    /**
     * 获取所有数据，可以带条件查询
     * @returns {Promise<void>}
     */
    async all() {
        const {ctx} = this;
        const {ks} = ctx.request.body;
        const where = {}
        if (ks) {
            where.name = {[Op.like]: `%${ks}%`} // 模糊查詢 https://www.sequelize.com.cn/core-concepts/model-querying-basics
        }
        const result = await ctx.model.Member.findAll({
            where: {...where}
        })
        this.result({data: result})
    }

    /**
     * 编辑数据
     * @returns {Promise<void>}
     */
    async update() {
        const {ctx} = this;
        const body = ctx.request.body;
        const result = await ctx.model.Member.update({
            ...body,
        }, {
            where: {
                id: body.id
            }
        })
        this.result({data: result})
    }

    /**
     * 修改密码
     * @returns {Promise<void>}
     */
    async updatePas() {
        const {ctx} = this;
        const body = ctx.request.body;
        try {
            this.ctx.validate({
                password: {type: 'string', min: 3, max: 20, require: true}
            });
            const result = await ctx.model.Member.update({
                password: ctx.setToken({password: body.password}),
            }, {
                where: {
                    id: body.id
                }
            })
            this.result({data: result})
        } catch (error) {
            const {errors = []} = error;
            this.result({data: '', message: errors[0], code: 1001})
        }
    }

    async getPas() {
        const {ctx} = this;
        const body = ctx.request.body;
        try {
            this.ctx.validate({
                password: {type: 'string', require: true}
            });
            this.result({data: ctx.getDecodeToken(body.password)})
        } catch (error) {
            const {errors = []} = error;
            this.result({data: '', message: errors[0], code: 1001})
        }
    }
}

module.exports = MemberController;