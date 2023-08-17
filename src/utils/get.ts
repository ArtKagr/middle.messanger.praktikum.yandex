export function arrayTemplate(items: Record<string, unknown>[], Block: any): string {
    let tmpl: string[] = []

    items.forEach((item) => {
        const result = new Block(item).getContent();
        tmpl.push(result.innerHTML);
    })

    return tmpl.reduce((acc, value) => acc.concat(value), '')
}
