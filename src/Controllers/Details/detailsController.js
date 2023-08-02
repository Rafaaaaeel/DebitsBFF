const model = require('../../Models/Details/Details')
const debit = require('../../Models/Debits/Debits')

class DetailConstroller {

    async all(request, response) {
        try {
            const debit = response.debit.debit

            response.json({debits: debit.debits})
        } catch (error) {

        }
    }

    async update(request, response) {

    } 

    async create(request, response) {
        
        try {
            const debit = response.debit.debit
            
            const detail = {
                name: request.body.name,
                color: request.body.color,
                value: request.body.value,
                parcel: request.body.parcel,
                tag: request.body.tag
            }
    
            debit.debits.push(detail)

            const saved = await debit.save()
    
            response.json({created: detail})
        } catch (error) {

            response.status(500)
        }
        
    }

    async delete(request, response) {
        try {
            
            const debit = response.debit.debit

            debit.debits = debit.debits.filter(x => x._id != request.query.id)

            const updated =  await debit.save()

            response.json(updated)
            
        } catch (error) {
            console.error(error)
        }
    }


    async get(request, response) {
        try {
            const debit = response.debit.debit

            const detail = debit.debits.filter(x => x._id == request.query.id)

            response.json(detail)
        } catch (error) {

        }
    }

}

module.exports = DetailConstroller