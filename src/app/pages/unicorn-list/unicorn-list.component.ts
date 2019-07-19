import {Component} from '@angular/core';
import {UnicornsService} from '../../services/unicorns.service';

@Component({
    selector: 'uni-unicorn-list',
    templateUrl: './unicorn-list.component.html',
    styleUrls: ['./unicorn-list.component.scss']
})
export class UnicornListComponent {

    public unicorns = this.unicornsService.list();

    constructor(private unicornsService: UnicornsService) {
    }

}
