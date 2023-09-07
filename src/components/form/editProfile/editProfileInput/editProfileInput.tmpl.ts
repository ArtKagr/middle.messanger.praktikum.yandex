export default `
    <div class="modal-edit_profile-block-data-item">
        <span class="modal-edit_profile-block-data-item-title">{{placeholder}}</span>
        <input
            class="modal-edit_profile-block-data-item-value"
            value="{{value}}"
            placeholder="Введите значение"
            name="{{name}}"
            disabled
        >
    </div>
    <span class="modal-edit_profile-block-data-error">{{error}}</span>
`
