class Airtable {
  constructor() {
    this.state = {
      geeks: [],
      communities: [],
    }
  }

  async read() {
    // await geeks.getmappedData

    // await communites.getmappedData

    // update this.state

    return this.state;
  }

  async sync(retry=0) {
    // move 3 to config file
    if (retry > 3) {
      return this.state;
    }
    // this should never return an error

    // update geeks
    // update communities

    try {
      // ..
    } catch(err) {
      retry++;
      return this.sync(retry);
    }
  }
}

export default new Airtable();
