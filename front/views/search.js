import {View} from 'yndx-shri-hw-redux';

export default class SearchView extends View {
    constructor(...args) {
        super(...args);

        const repo = this._el.getAttribute('data-repo');
        this._onInput = (e) => {
          this.actions.getList(repo, e.target.value);
        };
        this._el.addEventListener('input', this._onInput);
    }
    render(state) {
        return '';
    }
    destroy() {
        this._el.removeEventListener('input', this._onInput);
    }
}