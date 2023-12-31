export default `
    <div class="chats-field">
        <nav class="message-header">
            <div class="message-header-content">
                <span class="message-header-content-title">
                    {{title}}
                </span>
                <span class="message-header-content-message">
                    {{message}}
                </span>
            </div>
            <div class="message-header-menu">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 2C12.5304 2 13.0391 2.21071 13.4142 2.58579C13.7893 2.96086 14 3.46957 14 4C14 4.53043 13.7893 5.03914 13.4142 5.41421C13.0391 5.78929 12.5304 6 12 6C11.4696 6 10.9609 5.78929 10.5858 5.41421C10.2107 5.03914 10 4.53043 10 4C10 3.46957 10.2107 2.96086 10.5858 2.58579C10.9609 2.21071 11.4696 2 12 2ZM12 10C12.5304 10 13.0391 10.2107 13.4142 10.5858C13.7893 10.9609 14 11.4696 14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14C11.4696 14 10.9609 13.7893 10.5858 13.4142C10.2107 13.0391 10 12.5304 10 12C10 11.4696 10.2107 10.9609 10.5858 10.5858C10.9609 10.2107 11.4696 10 12 10ZM12 18C12.5304 18 13.0391 18.2107 13.4142 18.5858C13.7893 18.9609 14 19.4696 14 20C14 20.5304 13.7893 21.0391 13.4142 21.4142C13.0391 21.7893 12.5304 22 12 22C11.4696 22 10.9609 21.7893 10.5858 21.4142C10.2107 21.0391 10 20.5304 10 20C10 19.4696 10.2107 18.9609 10.5858 18.5858C10.9609 18.2107 11.4696 18 12 18Z"
                        fill="#212121"
                    >
                    </path>
                </svg>
            </div>
        </nav>
        <div class="message-field_container">
            <span class="message-field_container-error">Сообщение не должно быть пустым</span>
            <div class="message-field">
                <div class="message-field-attach">
                    <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.6001 12L12.3889 21.2112C11.1102 22.457 9.39234 23.149 7.60717 23.1374C5.82201 23.1258 4.11327 22.4115 2.85094 21.1491C1.58862 19.8868 0.874309 18.1781 0.862693 16.3929C0.851076 14.6077 1.54309 12.8898 2.78888 11.6112L12.2753 2.1248C13.124 1.27611 14.275 0.799316 15.4753 0.799316C16.6755 0.799316 17.8266 1.27611 18.6753 2.1248C19.524 2.97349 20.0008 4.12457 20.0008 5.3248C20.0008 6.52503 19.524 7.67611 18.6753 8.5248L9.46248 17.7376C9.03813 18.1619 8.46259 18.4003 7.86248 18.4003C7.26236 18.4003 6.68682 18.1619 6.26248 17.7376C5.83813 17.3133 5.59974 16.7377 5.59974 16.1376C5.59974 15.5375 5.83813 14.9619 6.26248 14.5376L15.2001 5.6" stroke="#757575"></path>
                    </svg>
                </div>
                {{{inputMessage}}}
                {{{sendButton}}}
            </div>
        </div>
    </div>
`;
