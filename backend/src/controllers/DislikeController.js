const Dev = require('../models/Dev');

module.exports = {
  async store(request, result) {

    const { user } = request.headers;
    const { devId } = request.params;

    const loggedDev = await Dev.findById(user);
    const targedDev = await Dev.findById(devId);

    if (!targedDev) {
      return result.status(400).json({ error: 'Dev not exists!' });
    }

    loggedDev.dislikes.push(targedDev._id);

    await loggedDev.save();

    return result.json(loggedDev);
  }
}