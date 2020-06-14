export class Bot {
    id: string;
    status: string;
    active: boolean;
    job: string;
    source: number;
    proxy: string;
    project: string;
    grid: boolean;
    firstName: string;
    lastName: string;
    street: string;
    zipcode: number;
    city: string;
    phoneNumber: string;
    mail: string;
    lastseen: string;
    sessions: string;
    icon: string;
    selected: boolean;

    constructor(bot) {
        this.id = bot.id;
        this.status = bot.status;
        this.active = bot.active;
        this.job = bot.job;
        this.source = bot.source;
        this.proxy = bot.proxy;
        this.project = bot.project;
        this.grid = bot.grid;
        this.lastseen = bot.lastseen;
        this.sessions = bot.sessions;
        this.icon = bot.icon;
        this.firstName = bot.firstName;
        this.lastName = bot.lastName;
        this.street = bot.street;
        this.zipcode = bot.zipcode;
        this.city = bot.city;
        this.phoneNumber = bot.phoneNumber;
        this.mail = bot.mail;
        this.selected = bot.selected;
    }

    get name() {
      return "John Smith";
    }

    set name(value) {
    }

    get address() {
      return "66 Gotham";
    }

    set address(value) {
    }
  }
