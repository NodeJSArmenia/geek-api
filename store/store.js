import geek from "../geeks/geek.js";

class Airtable {
  constructor() {
    this.state = {
      geeks: [],
      communities: [],
    };
  }

  async read() {
    // await geeks.getmappedData

    // await communites.getmappedData

    // update this.state

    try {
      //   this.state.geeks = await client.getMapedData();
      this.state.geeks = await geek.getGeeks();
    } catch (err) {
      console.error(err);
    }
  }

  async sync() {
    try {
      //   this.state.geeks = await client.syncGeeks();
    } catch (err) {
      console.error(err);
    }
  }
}

export default new Airtable();
