export default `
    <div class="chats-menu">
        <div class="chats-menu-settings">
            <div class="chats-menu-settings-user_settings">
                {{#if avatar_link}}
                    <img class="user-avatar" src="{{avatar_link}}" alt>
                {{else}}
                    <div class="user-avatar"></div>
                {{/if}}
                <div class="chats-menu-settings-user-content">
                    <span class="user-title">
                        {{title}}
                    </span>
                    <span class="user-message">
                        {{message}}
                    </span>
                </div>
                {{{userSettings}}}
            </div>
            <input class="chats-input-search" placeholder="Поиск" type="text" value="{{chat.menu.search}}">
        </div>
        <div class="chats-menu-settings-users">
            {{{0}}}
            {{{1}}}
            {{{2}}}
            {{{3}}}
            {{{4}}}
            {{{5}}}
            {{{6}}}
            {{{7}}}
            {{{8}}}
            {{{9}}}
            {{{10}}}
            {{{11}}}
            {{{12}}}
            {{{13}}}
            {{{14}}}
        </div>
    </div>
`
