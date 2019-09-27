import {View} from 'yndx-shri-hw-redux';

export default class SearchView extends View {
    constructor(...args) {
        super(...args);

        const actions = this.actions;
        this.el.addEventListener('input', function (e) {
            actions.getList(e.target.value);
        });
    }
    render(state) {
        return '';
    }
}