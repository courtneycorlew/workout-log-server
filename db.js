var Sequelize = require('sequelize');
var sequelize = new Sequelize(process.env.DATABASE_URL || 
    'postgres://wwkxesrihjtkvc:88f24c048727da5c58c06f7de82db8e87a3db0db7e4ffd879f55a6dfc21cfbe6@ec2-184-73-201-79.compute-1.amazonaws.com:5432/d639dh23jligpj', {
	dialect: 'postgres'
});
sequelize.authenticate().then(
    function() {
        console.log('connected to workoutlog postgres db');
    },
    function(err) {
        console.log(err);
    }
);
var User = sequelize.import('./models/user')
module.exports= sequelize;