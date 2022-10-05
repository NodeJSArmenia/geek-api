import client from "./client.js";

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
      this.state.geeks = await client.getMapedData();
      console.log("changed", this.state.geeks);
    } catch (err) {
      console.error(err);
    }
  }

  async sync() {
    try {
      this.state.geeks = await client.syncGeeks();
      console.log();
    } catch (err) {
      console.error(err);
    }
  }
}

export default new Airtable();
