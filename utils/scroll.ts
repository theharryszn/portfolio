export const scrollToView = (id : string) => {
    document.getElementById(id)?.scrollIntoView({ behavior : "smooth" })
}