export default `<div class="chats-menu-settings-user {{activeClass}}">
                    {{#if avatar_link}}
                        <img class="user-avatar" src="{{avatar_link}}" alt>
                    {{else}}
                        <div class="user-avatar"></div>
                    {{/if}}
                    <div class="chats-menu-settings-user-content">
                        <span class="user-title">
                            {{content.title}}
                        </span>
                        <span class="user-message">
                            {{content.message}}
                        </span>
                    </div>
                    <div class="flex-column-wrapper">
                        <span class="user-time">
                            {{content.data.time}}
                        </span>
                        {{#if content.data.new_messages }}
                          <span class="user-new_message">
                              {{content.data.new_messages}}
                          </span>
                        {{/if}}
                    </div>
                </div>`
