export default `
    <form class="form" action="{{action}}">
        <h1 class="form-title-auth">{{title}}</h1>
            {{#each inputs as |input| }}
                <input class="form-input" value="{{input.value}}" placeholder="{{input.placeholder}}" type="{{input.type}}" name="{{input.name}}">
            {{/each}}
        <input type="submit" class="form-button" value="{{button}}">
        <a class="form-link" href="{{linkHref}}">{{link}}</a>
    </form>
`
