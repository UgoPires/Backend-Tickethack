const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://SBigz:rFQV4o2TLx8LUHyW@bigcluster.mdbn7rs.mongodb.net/TicketHack';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
 .then(() => console.log('Database connected'))

  .catch(error => console.error(error));