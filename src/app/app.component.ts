import {Component} from '@angular/core';
import {Unicorn} from './models/unicorn.model';

@Component({
    selector: 'uni-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    public unicorn1: Unicorn = {
        id: 1,
        name: 'Baby',
        birthyear: 2019,
        weight: 10,
        photo: 'http://localhost:3000/unicorns/photos/unicorn-1.jpg',
        hobbies: ['Sleep', 'Cry'],
        capacities: [1, 2]
    };

    public logMessage(message: string) {
        debugger;
        console.log(message);
    }

    constructor() {
        Promise
            .all([
                fetch('https://raw.githubusercontent.com/ben-barbier/unicorn-back-data/master/unicorns.json').then(e => e.json()),
                fetch('https://raw.githubusercontent.com/ben-barbier/unicorn-back-data/master/capacities.json').then(e => e.json()),
            ]).then(responses => {
            const unicorns = responses[0];
            const capacities = responses[1];

            // Les exercices commencent ici !
            const uppercaseUnicorns = unicorns.map(unicorn => ({...unicorn, name: unicorn.name.toUpperCase()}));
            const millennials = unicorns.filter(unicorn => unicorn.birthyear >= 2000);
            const unicornAgeSorted = [...unicorns].sort((u1: Unicorn, u2: Unicorn) => u1.birthyear - u2.birthyear);
            const maxAge = unicorns.reduce((acc, unicorn) => Math.min(acc, unicorn.birthyear), new Date().getFullYear());

            debugger;


        });
    }

}
