var Sequelize = require('sequelize');
var sequelize = new Sequelize(process.env.DATABASE_URL || 
    'postgres://gasqroiwizeohf:bcfbecded9a305541120c8f573b95103aca569c1e16656aa1842a9190f75a129@ec2-107-20-224-137.compute-1.amazonaws.com:5432/d3e462aav8c5th', {
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