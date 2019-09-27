import {View} from 'yndx-shri-hw-redux';
import {ListStatus} from "../store/types";

export default class FilesView extends View {
    constructor(...args) {
        super(...args);
        const repo = this._el.getAttribute('data-repo');
        this.actions.getList(repo, '');
    }

    render(state) {
        const status = state.status;
        const search = (state.search || '').trim();
        const list = (state.list || []).filter(item => item.name.toLowerCase().includes(search.toLowerCase()));

        return `
            <div class="Table">
                <div class="Table-row Table-row_type_header">
                    <div class="Table-col">Name</div>
                    <div class="Table-col">Last commit</div>
                    <div class="Table-col">Commit message</div>
                    <div class="Table-col">Commiter</div>
                    <div class="Table-col">Updated</div>
                </div>
                ${list.map(({name, commit, message, author, time}) => `
                    <div class="Table-row Table-row_type_content">
                        <div class="Table-col Typo Typo_size_default">
                            <a href="/files">
                                <div class="IconText">
                                    <div class="IconText-icon IconText-icon_size_s" style="background-image: url('/static/imgs/directory.svg')"></div>
                                    <div class="IconText-text Typo Typo_size_default Typo_color_default Link">${name}</div>
                                </div>
                            </a>
                        </div>
                        <div class="Table-col Adaptive Adaptive_show_desktop"><a class="Link Typo Typo_color_accent" href="/commit">${commit}</a></div>
                        <div class="Table-col Adaptive Adaptive_show_desktop">${message}</div>
                        <div class="Table-col Adaptive Adaptive_show_mobile"><a class="Link Typo Typo_color_accent" href="">ARCADIA-771: </a>${message}</div>
                        <div class="Table-col Adaptive Adaptive_show_mobile">
                            <a class="Link Typo Typo_color_accent" href="/commit">${commit}</a>
                            by <span class="Name">${author}</span>, ${time}
                        </div>
                        <div class="Table-col Table-link Adaptive Adaptive_show_mobile"></div>
                        <div class="Table-col Adaptive Adaptive_show_desktop"><div class="Name">${author}</div></div>
                        <div class="Table-col Adaptive Adaptive_show_desktop">${time}</div>
                    </div>
                `).join('')}
            </div>
            ${!list.length && status === ListStatus.SUCCESS ? '<div class="Table-empty">Ничего не найдено</div>' : ''}
        `;
    }
}