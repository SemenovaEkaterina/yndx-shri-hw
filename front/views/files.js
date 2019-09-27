import {View} from 'yndx-shri-hw-redux';

export default class FilesView extends View {
    constructor(...args) {
        super(...args);
        this.actions.getList('');
    }

    render(state) {
        const list = state.list || [];
        const search = state.search || '';

        return `
            <div class="Section Section_size_m Section_mobile_s">
                <div class="Table">
                    <div class="Table-row Table-row_type_header">
                        <div class="Table-col">Name</div>
                        <div class="Table-col">Last commit</div>
                        <div class="Table-col">Commit message</div>
                        <div class="Table-col">Commiter</div>
                        <div class="Table-col">Updated</div>
                    </div>
                    ${list.filter(item => item.toLowerCase().includes(search.toLowerCase())).map(item => `
                        <div class="Table-row Table-row_type_content">
                            <div class="Table-col Typo Typo_size_default">
                                <a href="/files">
                                    <div class="IconText">
                                        <div class="IconText-icon IconText-icon_size_s" style="background-image: url('/static/imgs/directory.svg')"></div>
                                        <div class="IconText-text Typo Typo_size_default Typo_color_default Link">${item}</div>
                                    </div>
                                </a>
                            </div>
                            <div class="Table-col Adaptive Adaptive_show_desktop"><a class="Link Typo Typo_color_accent" href="/commit">d53dsv</a></div>
                            <div class="Table-col Adaptive Adaptive_show_desktop">[vcs] move http to arc</div>
                            <div class="Table-col Adaptive Adaptive_show_mobile"><a class="Link Typo Typo_color_accent" href="">ARCADIA-771:</a> [vcs] move http to arc</div>
                            <div class="Table-col Adaptive Adaptive_show_mobile">
                                <a class="Link Typo Typo_color_accent" href="/commit">d53dsv</a>
                                by <span class="Name">somov</span>, 4s ago
                            </div>
                            <div class="Table-col Table-link Adaptive Adaptive_show_mobile"></div>
                            <div class="Table-col Adaptive Adaptive_show_desktop"><div class="Name">somov</div></div>
                            <div class="Table-col Adaptive Adaptive_show_desktop">4s ago</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
}