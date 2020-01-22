import {action, autorun, computed, decorate, observable} from "mobx";

class ObservableStorePeopleStore {
    people = observable([
        {name: "Michel"},
        {name: "Me"}
    ]);

    constructor() {
        autorun(() => {
            console.log(this.report)
        });
    }

    get report() {
        return `people: ${this.allPeople}`;
    }

    get allPeople() {
        let people = '';
        this.people.forEach((person) => people = people + person.name + ', ');
        return people;
    }

    getPerson(name) {
        debugger
      let a = '';
          this.people.forEach((person) => {
            if (person.name === name) {
                debugger
                a = person
            }
        });
        debugger
        return a;
    }
}

decorate(ObservableStorePeopleStore, {
    report: computed,
    allPeople: computed,
    getPerson: action
});

const peopleStore = new ObservableStorePeopleStore();
export default peopleStore;