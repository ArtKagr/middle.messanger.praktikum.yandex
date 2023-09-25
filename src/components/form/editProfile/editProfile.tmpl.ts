export default `
    <div class="modal">
        <div class="modal-edit_profile">
            <div class="modal-edit_profile-block">
                <div class="modal-edit_profile-block-head">
                    {{{closeButton}}}
                </div>
                <div class="modal-edit_profile-block-content">
                    <div class="modal-edit_profile-block-content-image">
                        <svg width="130" height="130" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="65" cy="65" r="65" fill="#EFEFEF"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M81 47H49C47.8954 47 47 47.8954 47 49V70.2667L59.6547 67.3139C60.5486 67.1053 61.4635 67 62.3814 67H67.6186C68.5365 67 69.4514 67.1053 70.3453 67.3139L83 70.2667V49C83 47.8954 82.1046 47 81 47ZM49 45C46.7909 45 45 46.7909 45 49V81C45 83.2091 46.7909 85 49 85H81C83.2091 85 85 83.2091 85 81V49C85 46.7909 83.2091 45 81 45H49ZM55.9093 59.5454C57.9176 59.5454 59.5457 57.9174 59.5457 55.9091C59.5457 53.9008 57.9176 52.2727 55.9093 52.2727C53.901 52.2727 52.2729 53.9008 52.2729 55.9091C52.2729 57.9174 53.901 59.5454 55.9093 59.5454Z" fill="#CDCDCD"/>
                        </svg>
                    </div>
                    <span class="modal-edit_profile-block-content-title">{{firstName}}</span>
                </div>
                <div class="modal-edit_profile-block-data">
                    {{{email}}}
                    {{{login}}}
                    {{{first_name}}}
                    {{{second_name}}}
                    {{{display_name}}}
                    {{{phone}}}
                    <div class="modal-edit_profile-block-data-buttons">
                        {{{editButton}}}
                        {{{saveButton}}}
                    </div>
                </div>
            </div>
        </div>
    </div>
`;
