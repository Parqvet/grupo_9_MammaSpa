const path = require('path');
const { getServices } = require(path.join('..', 'data', 'services'));

const services = getServices();

module.exports= {
    renderServicesMain: (req,res) => {
        res.render('vista-servicios', {
            services
        })
    },

    renderService: (req,res) => {
        const id = req.params.id;
        const service = services.find(service => service.id === +id);

        res.render('detalle-servicios', {
            service
        });
    },
}